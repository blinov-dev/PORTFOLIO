import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { skillGroups } from "@/lib/content/skills";

export function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Стек технологий"
      description="Инструменты и технологии, с которыми работаю"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Card
            key={group.title}
            hover
            className={index === 0 ? "sm:row-span-2" : ""}
          >
            <h3 className="mb-4 text-lg font-medium">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} variant="glass">
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
