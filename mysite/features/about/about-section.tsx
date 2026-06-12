import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { aboutContent } from "@/lib/content/about";

export function AboutSection() {
  return (
    <Section id="about" title={aboutContent.title}>
      <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
        <Card variant="solid" className="lg:col-span-7">
          <p className="mb-4 text-lg font-medium leading-snug">{aboutContent.lead}</p>
          <div className="space-y-3 text-muted-foreground">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </Card>

        <Card hover className="border-primary/15 bg-primary/[0.03] lg:col-span-5">
          <h3 className="mb-4 text-lg font-medium">С чем работаю чаще всего</h3>
          <ul className="space-y-3">
            {aboutContent.highlights.map((item, i) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span
                  className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                    i === 0
                      ? "bg-primary/15 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
