import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";

const dashboardTiles = [
  { label: "Каталог", value: "1.2k", tone: "primary" as const },
  { label: "В корзине", value: "18", tone: "secondary" as const },
  { label: "Заказы", value: "96%", tone: "accent" as const },
];

const floatingBadges = [
  { label: "3+ года", variant: "gradient" as const, className: "-top-3 left-4 sm:left-6" },
  { label: "Next.js", variant: "glass" as const, className: "top-8 -right-2 sm:right-4" },
  { label: "React", variant: "glass" as const, className: "top-1/2 -left-2 sm:left-4" },
  { label: "TypeScript", variant: "glass" as const, className: "top-[42%] -right-2 sm:right-2" },
  { label: "E-commerce", variant: "gradient" as const, className: "bottom-16 left-2 sm:left-6" },
  { label: "Открыт к проектам", variant: "accent" as const, className: "-bottom-3 right-4 sm:right-8" },
];

export function ProfileImage() {
  const initials = siteConfig.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {floatingBadges.map((badge) => (
        <Badge
          key={badge.label}
          variant={badge.variant}
          className={`absolute z-20 shadow-md ${badge.className}`}
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
        className="glass-surface relative overflow-hidden rounded-[2rem] p-4 sm:p-5"
        style={{ backgroundImage: "var(--gradient-profile)" }}
      >
        <div
          className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-primary/15 blur-2xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-6 -left-6 size-28 rounded-full bg-secondary/15 blur-2xl"
          aria-hidden="true"
        />

        <div className="relative grid gap-3 sm:grid-cols-5 sm:gap-4">
          <div className="glass-surface relative flex flex-col items-center justify-center rounded-2xl border-primary/15 p-5 sm:col-span-2 sm:min-h-[220px]">
            <div className="relative mb-3 flex size-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 via-secondary/15 to-accent/10 ring-2 ring-primary/20 sm:size-24">
              <span className="gradient-text text-2xl font-bold sm:text-3xl">
                {initials}
              </span>
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/20 opacity-40 blur-md"
                aria-hidden="true"
              />
            </div>
            <p className="text-center text-sm font-semibold">{siteConfig.name}</p>
            <p className="text-center text-xs text-muted-foreground">
              {siteConfig.role}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:col-span-3">
            <div className="glass-surface rounded-xl px-3 py-2">
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Product UI
              </p>
              <p className="text-xs text-foreground/80">
                E-commerce · SPA · UI-kit
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {dashboardTiles.map((tile) => (
                <div
                  key={tile.label}
                  className="glass-surface rounded-xl px-2 py-2.5 text-center"
                >
                  <p
                    className={`text-lg font-bold ${
                      tile.tone === "primary"
                        ? "text-primary"
                        : tile.tone === "secondary"
                          ? "text-secondary"
                          : "text-accent"
                    }`}
                  >
                    {tile.value}
                  </p>
                  <p className="text-[10px] leading-tight text-muted-foreground">
                    {tile.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="glass-surface flex-1 space-y-2 rounded-xl p-3">
              {[
                "Каталог: фильтры и карточки",
                "Корзина: оформление заказа",
                "API: кеш и обработка ошибок",
              ].map((row, i) => (
                <div
                  key={row}
                  className="flex items-center gap-2 rounded-lg bg-muted/50 px-2 py-1.5"
                >
                  <span
                    className={`size-1.5 shrink-0 rounded-full ${
                      i === 0
                        ? "bg-primary"
                        : i === 1
                          ? "bg-secondary"
                          : "bg-accent"
                    }`}
                  />
                  <span className="truncate text-[11px] text-foreground/90">
                    {row}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
