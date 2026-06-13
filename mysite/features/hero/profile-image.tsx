import type { CSSProperties } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";

const capabilityBlocks = [
  {
    title: "API-интеграции",
    hint: "REST, кеш, ошибки",
    tone: "primary" as const,
  },
  {
    title: "Формы и состояния",
    hint: "RHF, RTK Query",
    tone: "secondary" as const,
  },
  {
    title: "Адаптивный UI",
    hint: "mobile-first, темы",
    tone: "accent" as const,
  },
];

const floatingBadges = [
  {
    label: "3+ года",
    variant: "gradient" as const,
    className:
      "hero-badge hero-badge--exp hero-badge--float-a -top-2 left-3 sm:left-5",
  },
  {
    label: "React",
    variant: "glass" as const,
    className:
      "hero-badge hero-badge--react hero-badge--float-b top-10 -right-1 sm:right-3",
  },
  {
    label: "Next.js",
    variant: "glass" as const,
    className:
      "hero-badge hero-badge--next top-[38%] -left-2 sm:left-2 max-sm:hidden",
  },
  {
    label: "TypeScript",
    variant: "glass" as const,
    className:
      "hero-badge hero-badge--ts top-[48%] -right-2 sm:right-1 max-md:hidden",
  },
  {
    label: "RTK Query",
    variant: "glass" as const,
    className:
      "hero-badge hero-badge--rtk bottom-24 left-2 sm:left-4 max-lg:hidden",
  },
  {
    label: "Открыт к проектам",
    variant: "accent" as const,
    className:
      "hero-badge hero-badge--open hero-badge--float-c -bottom-2 right-4 sm:right-6",
  },
];

export function ProfileImage() {
  return (
    <div className="hero-visual relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none">
      {floatingBadges.map((badge) => (
        <Badge
          key={badge.label}
          variant={badge.variant}
          className={`hero-floating-badge absolute z-20 shadow-md ${badge.className}`}
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

      <div
        className="glass-surface hero-visual-panel hero-visual-enter relative overflow-hidden rounded-[1.75rem] p-4 sm:rounded-[2rem] sm:p-5"
        style={{ backgroundImage: "var(--gradient-profile)" }}
      >
        <div className="hero-ambient-glow" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-primary/12 blur-2xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-8 -left-8 size-32 rounded-full bg-secondary/10 blur-2xl"
          aria-hidden="true"
        />

        <div className="relative z-[1] grid items-center gap-4 sm:grid-cols-[1.05fr_0.95fr] sm:gap-5">
          <div className="hero-photo-column hero-photo-enter mx-auto w-full max-w-[15.5rem] sm:max-w-none">
            <div className="hero-photo-shell rounded-[1.35rem] p-1.5 sm:rounded-[1.5rem] sm:p-2">
              <div className="hero-portrait-frame relative aspect-[4/5] overflow-hidden rounded-[1.15rem] sm:rounded-[1.25rem]">
                <Image
                  src={siteConfig.profileImage}
                  alt="Александр Блинов — frontend-разработчик"
                  fill
                  priority
                  sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 300px"
                  className="object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/20"
                  aria-hidden="true"
                />
              </div>
            </div>
            <p className="mt-3 text-center text-sm font-semibold sm:hidden">
              {siteConfig.name}
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:gap-3">
            <div
              className="hero-capability hero-capability-enter glass-surface rounded-xl px-3 py-2.5"
              style={{ "--hero-cap-i": 0 } as CSSProperties}
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Направления
              </p>
              <p className="mt-1 text-xs leading-relaxed text-foreground/85">
                Интернет-магазины · SPA · админки · B2B · лендинги
              </p>
            </div>

            {capabilityBlocks.map((block, index) => (
              <div
                key={block.title}
                className="hero-capability hero-capability-enter glass-surface rounded-xl px-3 py-2.5"
                style={{ "--hero-cap-i": index + 1 } as CSSProperties}
              >
                <p
                  className={`text-xs font-semibold leading-tight ${
                    block.tone === "primary"
                      ? "text-primary"
                      : block.tone === "secondary"
                        ? "text-secondary"
                        : "text-accent"
                  }`}
                >
                  {block.title}
                </p>
                <p className="mt-1 text-[10px] leading-tight text-muted-foreground">
                  {block.hint}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
