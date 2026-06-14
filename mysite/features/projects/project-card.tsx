import { Badge } from "@/components/ui/badge";
import type { ProjectItem } from "@/lib/content/projects";
import { ProjectMockup } from "./project-mockup";

type ProjectCardVariant = "featured" | "support-tall" | "support-wide";

type ProjectCardProps = {
  project: ProjectItem;
  variant?: ProjectCardVariant;
};

const variantClassName: Record<ProjectCardVariant, string> = {
  featured: "project-card project-card--featured",
  "support-tall": "project-card project-card--support-tall",
  "support-wide": "project-card project-card--support-wide",
};

export function ProjectCard({
  project,
  variant = "support-tall",
}: ProjectCardProps) {
  const isFeatured = variant === "featured";

  return (
    <article className={variantClassName[variant]}>
      <div className="project-card__mockup">
        <ProjectMockup
          type={project.mockup}
          featured={isFeatured}
        />
      </div>

      <div className="project-card__body">
        {isFeatured && project.featuredBadge ? (
          <Badge variant="glass" className="project-card__badge">
            {project.featuredBadge}
          </Badge>
        ) : null}

        <div className="project-card__head">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__outcome">{project.outcome}</p>
        </div>

        <p className="project-card__description">{project.description}</p>

        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="gradient">
              {tag}
            </Badge>
          ))}
        </div>

        {project.note ? (
          <p className="project-card__note">{project.note}</p>
        ) : null}
      </div>
    </article>
  );
}
