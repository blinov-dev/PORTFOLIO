import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { stats } from "@/lib/content/stats";

export function StatsSection() {
  return (
    <Section title="В цифрах">
      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card
            key={stat.label}
            hover
            className={`flex flex-col justify-center gap-2 ${
              index === 0
                ? "sm:col-span-2 sm:row-span-2 sm:min-h-[12rem] lg:col-span-2 lg:row-span-2"
                : ""
            }`}
          >
            <p
              className={`font-bold tracking-tight ${
                index === 0 ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"
              }`}
            >
              {stat.value}
            </p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
