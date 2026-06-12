import { Section } from "@/components/layout/section";
import { projects } from "@/lib/content/projects";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Кейсы и проекты"
      description="Направления, в которых работал на коммерческих проектах"
    >
      <div className="grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
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
