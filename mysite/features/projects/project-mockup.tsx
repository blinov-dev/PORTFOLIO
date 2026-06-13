import type { ProjectMockupType } from "@/lib/content/projects";

type ProjectMockupProps = {
  type: ProjectMockupType;
  featured?: boolean;
};

export function ProjectMockup({ type, featured = false }: ProjectMockupProps) {
  const height = featured ? "min-h-[11rem] sm:min-h-[13rem]" : "min-h-[9rem]";

  if (type === "ecommerce") {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-primary/8 via-muted/30 to-secondary/8 p-3 sm:p-4 ${height}`}
        aria-hidden="true"
      >
        <div className="mb-2 flex items-center justify-between">
          <div className="h-2 w-20 rounded bg-foreground/15" />
          <div className="rounded-full bg-secondary/20 px-2 py-0.5 text-[9px] font-medium text-secondary">
            Корзина · 3
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="rounded-lg bg-background/70 p-1.5 shadow-sm"
            >
              <div className="mb-1.5 aspect-square rounded-md bg-gradient-to-br from-primary/15 to-secondary/10" />
              <div className="h-1 w-full rounded bg-foreground/15" />
              <div className="mt-1 h-1 w-2/3 rounded bg-primary/20" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "onboarding") {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-secondary/8 via-muted/30 to-accent/8 p-3 sm:p-4 ${height}`}
        aria-hidden="true"
      >
        <div className="mb-3 flex items-center gap-2">
          {["Шаг 1", "Шаг 2", "Шаг 3"].map((step, i) => (
            <div
              key={step}
              className={`flex-1 rounded-lg px-2 py-1.5 text-center text-[9px] font-medium ${
                i === 1
                  ? "bg-primary/20 text-primary"
                  : "bg-background/60 text-muted-foreground"
              }`}
            >
              {step}
            </div>
          ))}
        </div>
        <div className="space-y-2 rounded-lg bg-background/60 p-2">
          {["Профиль стажёра", "Onboarding-путь", "Материалы курса"].map(
            (row, i) => (
              <div
                key={row}
                className="flex items-center gap-2 rounded-md bg-muted/40 px-2 py-1.5"
              >
                <span
                  className={`size-2 rounded-full ${
                    i === 0
                      ? "bg-accent"
                      : i === 1
                        ? "bg-primary"
                        : "bg-secondary"
                  }`}
                />
                <span className="text-[9px] text-foreground/85">{row}</span>
              </div>
            ),
          )}
        </div>
      </div>
    );
  }

  if (type === "uikit") {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-muted/40 via-background/50 to-primary/8 p-3 sm:p-4 ${height}`}
        aria-hidden="true"
      >
        <div className="mb-2 text-[9px] font-medium uppercase tracking-wider text-muted-foreground">
          UI-kit · Storybook
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1.5 rounded-lg bg-background/70 p-2">
            <div className="h-5 rounded-md bg-primary/25" />
            <div className="h-5 rounded-md border border-border/60 bg-background" />
            <div className="h-5 rounded-md bg-muted/60" />
          </div>
          <div className="space-y-1.5 rounded-lg bg-background/70 p-2">
            <div className="h-3 w-3/4 rounded bg-foreground/15" />
            <div className="h-8 rounded-lg border border-border/50" />
            <div className="flex gap-1">
              <div className="h-4 flex-1 rounded-full bg-accent/25" />
              <div className="h-4 flex-1 rounded-full bg-secondary/20" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-primary/8 via-muted/30 to-secondary/8 p-3 sm:p-4 ${height}`}
      aria-hidden="true"
    >
      <div className="mb-2 flex gap-2">
        {["Все", "Новые", "В работе"].map((tab, i) => (
          <div
            key={tab}
            className={`rounded-md px-2 py-0.5 text-[10px] font-medium ${
              i === 1
                ? "bg-primary/20 text-primary"
                : "bg-background/60 text-muted-foreground"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { c: "bg-primary/15", n: "12" },
          { c: "bg-secondary/15", n: "5" },
          { c: "bg-accent/15", n: "3" },
        ].map((col, i) => (
          <div key={i} className={`space-y-1.5 rounded-lg ${col.c} p-2`}>
            <div className="h-1.5 w-8 rounded bg-foreground/20" />
            {[1, 2].map((k) => (
              <div
                key={k}
                className="rounded-md bg-background/70 p-1.5 shadow-sm"
              >
                <div className="mb-1 h-1 w-full rounded bg-foreground/15" />
                <div className="h-1 w-2/3 rounded bg-foreground/10" />
              </div>
            ))}
            <span className="text-[9px] font-bold text-foreground/40">
              {col.n}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
