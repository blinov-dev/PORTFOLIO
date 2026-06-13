import { Section } from "@/components/layout/section";
import { servicesSectionDescription } from "@/lib/content/services";
import { ServicesInteractive } from "./services-interactive";

export function ServicesSection() {
  return (
    <Section
      id="services"
      title="Какие frontend-задачи закрываю"
      description={servicesSectionDescription}
    >
      <ServicesInteractive />
    </Section>
  );
}
