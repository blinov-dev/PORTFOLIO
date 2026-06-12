import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { ProjectItem } from "@/lib/content/projects";
import { ProjectMockup } from "./project-mockup";

type ProjectCardProps = {
  project: ProjectItem;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const hasLink = project.href !== "#" && project.href.startsWith("http");

  return (
    <Card hover className="flex h-full flex-col gap-0 overflow-hidden p-0">
      <ProjectMockup type={project.mockup} featured={featured} />
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mt-1 text-xs font-medium text-primary">
            {project.outcome}
          </p>
        </div>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="gradient">
              {tag}
            </Badge>
          ))}
        </div>
        {hasLink ? (
          <a
            href={project.href}
            className="text-sm font-medium text-primary transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Подробнее →
          </a>
        ) : (
          <p className="text-xs text-muted-foreground">Кейс из коммерческой практики</p>
        )}
      </div>
    </Card>
  );
}
