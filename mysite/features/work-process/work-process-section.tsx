import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { workSteps } from "@/lib/content/work-process";

export function WorkProcessSection() {
  return (
    <Section
      id="process"
      title="Как я работаю"
      description="Прозрачный процесс — без сюрпризов на финишной прямой"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {workSteps.map((step, index) => (
          <Card
            key={step.step}
            hover
            className={`flex flex-col gap-3 ${
              index === 0
                ? "border-primary/25 bg-primary/[0.04] sm:col-span-2 lg:col-span-2 lg:row-span-2"
                : index === 4
                  ? "sm:col-span-2 lg:col-span-2"
                  : "lg:col-span-2"
            }`}
          >
            <span
              className={`inline-flex w-fit rounded-xl px-2.5 py-1 text-xs font-bold ${
                index === 0
                  ? "gradient-text bg-primary/10"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {step.step}
            </span>
            <h3 className="text-base font-semibold leading-snug">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
