import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { skillGroups } from "@/lib/content/skills";

export function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Стек и инструменты"
      description="Технологии под задачу — без бесконечного списка ради списка"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <Card
            key={group.title}
            hover
            className={
              group.featured
                ? "border-primary/25 bg-gradient-to-br from-primary/[0.06] to-secondary/[0.04] sm:col-span-2"
                : ""
            }
          >
            <h3
              className={`mb-4 font-medium ${
                group.featured ? "text-xl" : "text-lg"
              }`}
            >
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge
                  key={item}
                  variant={group.featured ? "gradient" : "glass"}
                  className={group.featured ? "px-4 py-1.5 text-sm" : ""}
                >
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
