import type { ProjectMockupType } from "@/lib/content/projects";

type ProjectMockupProps = {
  type: ProjectMockupType;
  featured?: boolean;
};

export function ProjectMockup({ type, featured = false }: ProjectMockupProps) {
  const height = featured ? "min-h-[11rem] sm:min-h-[13rem]" : "min-h-[9rem]";

  if (type === "crm") {
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

  if (type === "b2b") {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-secondary/8 via-muted/30 to-primary/8 p-3 sm:p-4 ${height}`}
        aria-hidden="true"
      >
        <div className="mb-2 flex items-center justify-between">
          <div className="h-2 w-16 rounded bg-foreground/15" />
          <div className="rounded-full bg-accent/20 px-2 py-0.5 text-[9px] font-medium text-accent">
            Sync OK
          </div>
        </div>
        <div className="space-y-1.5 rounded-lg bg-background/60 p-2">
          {["Заказ #4021", "Контрагент", "Статус обмена"].map((h, i) => (
            <div
              key={h}
              className="grid grid-cols-3 gap-2 border-b border-border/40 pb-1.5 last:border-0"
            >
              <span className="text-[9px] font-medium text-muted-foreground">
                {h}
              </span>
              <span className="col-span-2 truncate text-[9px] text-foreground/80">
                {i === 0
                  ? "Ожидает отгрузки"
                  : i === 1
                    ? "ООО «Партнёр»"
                    : "Выгружено в 1С"}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-2 h-8 rounded-lg bg-primary/10" />
      </div>
    );
  }

  return (
    <div
      className={`relative flex overflow-hidden bg-gradient-to-br from-muted/40 via-background/50 to-primary/8 ${height}`}
      aria-hidden="true"
    >
      <div className="w-1/4 space-y-1.5 border-r border-border/40 bg-muted/30 p-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-2 rounded ${i === 1 ? "bg-primary/25" : "bg-foreground/10"}`}
          />
        ))}
      </div>
      <div className="flex-1 p-2">
        <div className="mb-2 flex gap-1">
          <div className="h-4 flex-1 rounded bg-background/80" />
          <div className="h-4 w-8 rounded bg-primary/20" />
        </div>
        <div className="space-y-1">
          {[1, 2, 3, 4].map((row) => (
            <div
              key={row}
              className="grid grid-cols-4 gap-1 rounded bg-background/50 p-1"
            >
              {[1, 2, 3, 4].map((cell) => (
                <div key={cell} className="h-1.5 rounded bg-foreground/10" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
