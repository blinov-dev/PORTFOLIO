import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { skillGroups, type SkillGroup } from "@/lib/content/skills";

const cardLayout: Record<string, string> = {
  frontend:
    "skill-card--featured sm:col-span-2 lg:col-span-6 lg:row-span-2",
  api: "lg:col-span-3",
  forms: "lg:col-span-3",
  ui: "lg:col-span-4",
  performance: "lg:col-span-4",
  workflow: "lg:col-span-4",
};

function SkillMarker({ featured = false }: { featured?: boolean }) {
  return (
    <span
      className={`skill-marker ${featured ? "skill-marker--featured" : ""}`}
      aria-hidden="true"
    >
      <span />
      <span />
      <span />
    </span>
  );
}

function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <Card
      hover
      className={`skill-card ${cardLayout[group.id] ?? ""}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3
            className={`font-semibold leading-tight tracking-tight ${
              group.featured ? "text-xl sm:text-2xl" : "text-lg"
            }`}
          >
            {group.title}
          </h3>
          <p
            className={`mt-2 leading-relaxed text-muted-foreground ${
              group.featured ? "max-w-xl text-sm sm:text-base" : "text-sm"
            }`}
          >
            {group.description}
          </p>
        </div>
        <SkillMarker featured={group.featured} />
      </div>

      <ul
        className={`mt-5 flex flex-wrap gap-2 ${
          group.featured ? "sm:mt-7" : ""
        }`}
      >
        {group.items.map((item, index) => (
          <li key={item}>
            <Badge
              variant={
                group.featured && index < 3
                  ? "gradient"
                  : group.id === "workflow"
                    ? "default"
                    : "glass"
              }
              className={`skill-pill ${
                group.featured && index < 3 ? "skill-pill--core" : ""
              }`}
            >
              {item}
            </Badge>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Стек и инструменты"
      description="Frontend-навыки по задачам: от интерфейса и API до качества, адаптива и командной работы"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
        {skillGroups.map((group) => (
          <SkillCard key={group.id} group={group} />
        ))}
      </div>
    </Section>
  );
}
