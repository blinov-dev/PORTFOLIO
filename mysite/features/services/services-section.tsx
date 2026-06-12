import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { services } from "@/lib/content/services";

export function ServicesSection() {
  return (
    <Section title="Чем помогу" description="Задачи, с которыми обращайтесь">
      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card
            key={service.title}
            hover
            className={`flex items-start ${
              index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
            }`}
          >
            <p className="text-sm leading-relaxed sm:text-base">
              {service.title}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
