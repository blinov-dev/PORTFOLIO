import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { ProjectItem } from "@/lib/content/projects";

type ProjectCardProps = {
  project: ProjectItem;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Card hover className="flex h-full flex-col gap-0 overflow-hidden p-0">
      <div
        className={`relative w-full bg-muted ${featured ? "aspect-[2/1]" : "aspect-video"}`}
      >
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover"
          sizes={
            featured
              ? "(max-width: 768px) 100vw, 66vw"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          }
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-medium">{project.title}</h3>
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
        <a
          href={project.href}
          className="text-sm font-medium text-primary transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          {...(project.href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          Подробнее →
        </a>
      </div>
    </Card>
  );
}
