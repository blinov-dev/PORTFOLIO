"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type TargetAndTransition,
} from "motion/react";
import type { CSSProperties } from "react";
import {
  useCallback,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import type { SkillFloatPattern, SkillTileSize } from "@/lib/content/skills";

type SkillTiltTileProps = {
  label: string;
  icon: React.ReactNode;
  brandColor: string;
  size?: SkillTileSize;
  floatPattern?: SkillFloatPattern;
  floatDelay?: number;
  className?: string;
};

const sizeClasses: Record<SkillTileSize, string> = {
  lg: "skill-tilt-tile--lg",
  md: "skill-tilt-tile--md",
  sm: "skill-tilt-tile--sm",
};

const FLOAT_PATTERNS: Record<
  SkillFloatPattern,
  { animate: TargetAndTransition; duration: number }
> = {
  a: {
    animate: { y: [0, -7, 0], x: 0, rotate: 0, scale: 1 },
    duration: 5.2,
  },
  b: {
    animate: { x: [0, 5, 0], y: [0, -6, 0], rotate: 0, scale: 1 },
    duration: 5.8,
  },
  c: {
    animate: {
      x: [0, -5, 0],
      y: [0, 5, 0],
      rotate: [0, -1, 0],
      scale: 1,
    },
    duration: 6.2,
  },
  d: {
    animate: { y: [0, -4, 0], x: 0, rotate: 0, scale: 1 },
    duration: 4.6,
  },
};

const HOVER_LIFT = -8;
const HOVER_SCALE = 1.05;

function subscribePointerFine(onStoreChange: () => void) {
  const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getPointerFine() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function getPointerFineServer() {
  return false;
}

export function SkillTiltTile({
  label,
  icon,
  brandColor,
  size = "md",
  floatPattern = "a",
  floatDelay = 0,
  className = "",
}: SkillTiltTileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const canTilt = useSyncExternalStore(
    subscribePointerFine,
    getPointerFine,
    getPointerFineServer,
  );
  const [isHovered, setIsHovered] = useState(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springConfig = { stiffness: 280, damping: 20, mass: 0.5 };

  const rotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [7, -7]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-7, 7]),
    springConfig,
  );

  const motionEnabled = canTilt && !prefersReducedMotion;
  const pattern = FLOAT_PATTERNS[floatPattern];

  const idleTransition = useMemo(
    () => ({
      duration: pattern.duration + floatDelay * 0.35,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: floatDelay,
    }),
    [floatDelay, pattern.duration],
  );

  const hoverTransition = useMemo(
    () => ({
      type: "spring" as const,
      stiffness: 360,
      damping: 24,
    }),
    [],
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!motionEnabled || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
      pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
    },
    [motionEnabled, pointerX, pointerY],
  );

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false);
    pointerX.set(0);
    pointerY.set(0);
  }, [pointerX, pointerY]);

  const handlePointerEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const tileClassName = [
    "skill-tilt-tile",
    sizeClasses[size],
    "h-full w-full",
    isHovered ? "skill-tilt-tile--hovered" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const brandStyle = {
    "--skill-brand": brandColor,
  } as CSSProperties;

  const surface = (
    <div className="skill-tilt-tile__surface">
      <span className="skill-tilt-tile__icon">{icon}</span>
      <span className="skill-tilt-tile__label">{label}</span>
    </div>
  );

  if (!motionEnabled) {
    return (
      <div className={tileClassName} style={brandStyle}>
        {surface}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={tileClassName}
      style={{
        ...brandStyle,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      animate={
        isHovered
          ? { y: HOVER_LIFT, x: 0, rotate: 0, scale: HOVER_SCALE }
          : pattern.animate
      }
      transition={isHovered ? hoverTransition : idleTransition}
    >
      {surface}
    </motion.div>
  );
}
