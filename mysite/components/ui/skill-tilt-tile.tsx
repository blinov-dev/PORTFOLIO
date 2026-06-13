"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import type { CSSProperties } from "react";
import {
  useCallback,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import type { SkillTileSize } from "@/lib/content/skills";

type SkillTiltTileProps = {
  label: string;
  icon: React.ReactNode;
  brandColor: string;
  size?: SkillTileSize;
  idleFloat?: boolean;
  idleDelay?: number;
  className?: string;
};

const sizeClasses: Record<SkillTileSize, string> = {
  lg: "skill-tilt-tile--lg",
  md: "skill-tilt-tile--md",
  sm: "skill-tilt-tile--sm",
};

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
  idleFloat = false,
  idleDelay = 0,
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
    useTransform(pointerY, [-0.5, 0.5], [6, -6]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-6, 6]),
    springConfig,
  );

  const motionEnabled = canTilt && !prefersReducedMotion;

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
        idleFloat && !isHovered
          ? { y: [0, -3, 0] }
          : { y: isHovered ? -5 : 0 }
      }
      transition={
        idleFloat && !isHovered
          ? {
              duration: 4.8 + idleDelay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idleDelay,
            }
          : { type: "spring", stiffness: 340, damping: 22 }
      }
      whileHover={{ scale: 1.04 }}
    >
      {surface}
    </motion.div>
  );
}
