import { SkillTiltTile } from "@/components/ui/skill-tilt-tile";
import { Section } from "@/components/layout/section";
import { skillsSectionDescription, visualSkills } from "@/lib/content/skills";
import { SkillIcon } from "./skill-icon";

/** Explicit Tailwind grid spans — must be static strings for JIT. */
const SKILL_GRID_CLASSES: Record<string, string> = {
  react: "lg:col-span-3 lg:row-span-2",
  nextjs: "lg:col-span-3 lg:row-span-2",
  typescript: "lg:col-span-3 lg:row-span-2",
  javascript: "lg:col-span-3 lg:row-span-2",
  html: "lg:col-span-2",
  css: "lg:col-span-2",
  cssmodules: "lg:col-span-3",
  tailwind: "lg:col-span-3",
  rtkquery: "lg:col-span-3",
  api: "lg:col-span-3",
  git: "lg:col-span-2",
};

export function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Стек и инструменты"
      description={skillsSectionDescription}
    >
      <div className="skills-visual glass-surface">
        <div className="skills-visual__glow" aria-hidden="true" />
        <div className="skills-mosaic grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3 lg:grid-cols-12 lg:auto-rows-[6.5rem] lg:gap-4">
          {visualSkills.map((skill) => (
            <SkillTiltTile
              key={skill.id}
              label={skill.label}
              brandColor={skill.brandColor}
              className={SKILL_GRID_CLASSES[skill.id]}
              icon={
                <SkillIcon id={skill.icon} className="skill-tilt-tile__svg" />
              }
              size={skill.size}
              floatPattern={skill.floatPattern}
              floatDelay={skill.floatDelay}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
