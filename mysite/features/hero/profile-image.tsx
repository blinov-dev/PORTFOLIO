import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const floatingBadges = [
  { label: "3+ года", variant: "gradient" as const, className: "top-4 left-4 sm:top-6 sm:left-6" },
  { label: "Next.js", variant: "glass" as const, className: "top-4 right-4 sm:top-6 sm:right-6" },
  { label: "React", variant: "glass" as const, className: "bottom-20 left-4 sm:bottom-24 sm:left-6" },
  { label: "TypeScript", variant: "glass" as const, className: "bottom-20 right-4 sm:bottom-24 sm:right-6" },
  { label: "Available", variant: "accent" as const, className: "bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6" },
];

export function ProfileImage() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        className="glass-surface card-hover relative aspect-[4/3] overflow-hidden rounded-[2rem] sm:aspect-[5/4] lg:aspect-[6/7]"
        style={{ backgroundImage: "var(--gradient-profile)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 30% 25%, hsl(var(--primary) / 0.2), transparent 45%), radial-gradient(circle at 75% 70%, hsl(var(--secondary) / 0.15), transparent 40%)",
          }}
        />

        <div className="absolute inset-0 flex items-end justify-center pb-8 pt-12 sm:pb-10">
          <div className="relative h-[72%] w-[58%] overflow-hidden rounded-[1.5rem] border border-white/30 bg-white/20 shadow-lg backdrop-blur-sm">
            <Image
              src="/images/profile-placeholder.svg"
              alt="Александр Блинов — placeholder фото"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 80vw, 280px"
            />
          </div>
        </div>

        {floatingBadges.map((badge) => (
          <Badge
            key={badge.label}
            variant={badge.variant}
            className={`absolute shadow-sm ${badge.className}`}
          >
            {badge.variant === "accent" && (
              <span
                className="size-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_6px_hsl(var(--accent)/0.6)]"
                aria-hidden="true"
              />
            )}
            {badge.label}
          </Badge>
        ))}
      </div>
    </div>
  );
}
