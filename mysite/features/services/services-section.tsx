import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { services } from "@/lib/content/services";

export function ServicesSection() {
  return (
    <Section
      title="Чем помогу"
      description="Не просто «сделаю вёрстку» — решаю задачу бизнеса через интерфейс"
      className="border-y border-border/50 bg-muted/20"
    >
      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card
            key={service.title}
            hover
            className={`flex flex-col gap-3 ${
              index === 0
                ? "border-primary/20 sm:col-span-2 lg:col-span-2 lg:row-span-1"
                : index === 1
                  ? "border-secondary/20"
                  : ""
            } ${index === 0 ? "bg-primary/[0.03]" : ""}`}
          >
            <h3 className="text-base font-semibold leading-snug sm:text-lg">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
