import { Section } from "@/components/layout/section";
import {
  getFeaturedProject,
  getSupportingProjects,
  projectsSectionDescription,
} from "@/lib/content/projects";
import { ProjectCard } from "./project-card";

const SUPPORT_LAYOUT = ["store", "onboarding", "uikit"] as const;

export function ProjectsSection() {
  const featured = getFeaturedProject();
  const supporting = getSupportingProjects();

  return (
    <Section
      id="projects"
      title="Кейсы и проекты"
      description={projectsSectionDescription}
      className="border-y border-border/50 bg-muted/20"
    >
      <div className="projects-showcase">
        <div className="projects-showcase__item projects-showcase__item--featured">
          <ProjectCard project={featured} variant="featured" />
        </div>

        {supporting.map((project, index) => (
          <div
            key={project.title}
            className={`projects-showcase__item projects-showcase__item--${SUPPORT_LAYOUT[index] ?? "wide"}`}
          >
            <ProjectCard
              project={project}
              variant={index === 0 ? "support-tall" : "support-wide"}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
