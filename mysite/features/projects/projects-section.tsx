import { Section } from "@/components/layout/section";
import { projects } from "@/lib/content/projects";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Кейсы и проекты"
      description="Кейсы из e-commerce, внутренних продуктов и UI-разработки"
      className="border-y border-border/50 bg-muted/20"
    >
      <div className="grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}
          >
            <ProjectCard project={project} featured={index === 0} />
          </div>
        ))}
      </div>
    </Section>
  );
}
