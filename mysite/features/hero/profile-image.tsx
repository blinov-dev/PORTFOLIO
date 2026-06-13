import { siteConfig } from "@/lib/site-config";

const capabilityBlocks = [
  {
    title: "React / Next.js",
    hint: "SPA и SSR",
    tone: "primary" as const,
  },
  {
    title: "Интеграция API",
    hint: "REST, кеш, ошибки",
    tone: "secondary" as const,
  },
  {
    title: "Формы и состояния",
    hint: "RHF, RTK Query",
    tone: "accent" as const,
  },
  {
    title: "Поддержка UI",
    hint: "адаптив, рефакторинг",
    tone: "primary" as const,
  },
];

const focusAreas = [
  "Интернет-магазины",
  "SPA и кабинеты",
  "Админки",
  "B2B и лендинги",
];

export function ProfileImage() {
  const initials = siteConfig.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className="hero-visual relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        className="glass-surface hero-visual-panel relative overflow-hidden rounded-[1.75rem] p-4 sm:rounded-[2rem] sm:p-5"
        style={{ backgroundImage: "var(--gradient-profile)" }}
      >
        <div
          className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-primary/12 blur-2xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-8 -left-8 size-32 rounded-full bg-secondary/10 blur-2xl"
          aria-hidden="true"
        />

        <div className="relative grid gap-3 sm:grid-cols-[0.95fr_1.05fr] sm:gap-4">
          <div className="hero-portrait-slot glass-surface flex flex-col items-center justify-center rounded-2xl border border-primary/15 p-4 sm:min-h-[220px] sm:p-5">
            <div
              className="hero-portrait-frame relative mb-3 flex aspect-[4/5] w-full max-w-[9.5rem] items-center justify-center rounded-2xl bg-gradient-to-br from-primary/18 via-secondary/10 to-accent/8 ring-1 ring-primary/25 sm:max-w-[10.5rem]"
              aria-hidden="true"
            >
              <span className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {initials}
              </span>
            </div>
            <p className="text-center text-sm font-semibold">{siteConfig.name}</p>
            <p className="text-center text-xs text-muted-foreground">
              {siteConfig.experience} года · {siteConfig.stack}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="glass-surface rounded-xl px-3 py-2.5">
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Направления
              </p>
              <p className="mt-1 text-xs leading-relaxed text-foreground/85">
                {focusAreas.join(" · ")}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {capabilityBlocks.map((block) => (
                <div
                  key={block.title}
                  className="hero-capability glass-surface rounded-xl px-2.5 py-2.5"
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

            <div className="glass-surface rounded-xl px-3 py-2.5">
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Качество интерфейса
              </p>
              <p className="mt-1 text-xs leading-relaxed text-foreground/85">
                Компоненты, адаптив, темы и поддерживаемая структура — как на
                этом сайте.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
