import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { aboutContent } from "@/lib/content/about";

export function AboutSection() {
  return (
    <Section id="about" title={aboutContent.title}>
      <div className="grid gap-4 lg:grid-cols-5 lg:gap-6">
        <Card variant="solid" className="lg:col-span-3">
          <div className="space-y-4 text-muted-foreground">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </Card>

        <Card variant="glass" hover className="lg:col-span-2">
          <h3 className="mb-4 text-lg font-medium">Ключевые направления</h3>
          <ul className="space-y-3">
            {aboutContent.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
