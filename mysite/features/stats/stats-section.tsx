import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { stats } from "@/lib/content/stats";

export function StatsSection() {
  return (
    <Section title="Коротко о фактах" className="pb-8 pt-4 sm:pb-10">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card
            key={stat.label}
            hover
            className={`flex flex-col gap-1 py-5 ${
              index === 0 ? "border-primary/20 bg-primary/[0.03]" : ""
            } ${index === 3 ? "border-accent/25 bg-accent/[0.04]" : ""}`}
          >
            <p
              className={`font-bold tracking-tight ${
                index === 0 ? "text-3xl text-primary sm:text-4xl" : "text-2xl sm:text-3xl"
              } ${index === 3 ? "text-accent" : ""}`}
            >
              {stat.value}
            </p>
            <p className="text-sm font-medium">{stat.label}</p>
            {stat.hint && (
              <p className="text-xs text-muted-foreground">{stat.hint}</p>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
