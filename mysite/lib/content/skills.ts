export type SkillIconId =
  | "react"
  | "nextjs"
  | "typescript"
  | "javascript"
  | "html"
  | "css"
  | "cssmodules"
  | "tailwind"
  | "rtkquery"
  | "api"
  | "git";

export type SkillTileSize = "lg" | "md" | "sm";

export type SkillVisualTile = {
  id: string;
  label: string;
  icon: SkillIconId;
  brandColor: string;
  size: SkillTileSize;
  idleFloat?: boolean;
  idleDelay?: number;
};

export const skillsSectionDescription =
  "Технологии и рабочие инструменты, которые помогают мне создавать понятные, быстрые и поддерживаемые интерфейсы.";

export const visualSkills: SkillVisualTile[] = [
  {
    id: "react",
    label: "React",
    icon: "react",
    brandColor: "#61DAFB",
    size: "lg",
    idleFloat: true,
    idleDelay: 0,
  },
  {
    id: "nextjs",
    label: "Next.js",
    icon: "nextjs",
    brandColor: "hsl(var(--foreground))",
    size: "lg",
    idleFloat: true,
    idleDelay: 0.4,
  },
  {
    id: "typescript",
    label: "TypeScript",
    icon: "typescript",
    brandColor: "#3178C6",
    size: "lg",
    idleFloat: true,
    idleDelay: 0.8,
  },
  {
    id: "javascript",
    label: "JavaScript",
    icon: "javascript",
    brandColor: "#F7DF1E",
    size: "lg",
    idleFloat: true,
    idleDelay: 0.2,
  },
  {
    id: "html",
    label: "HTML",
    icon: "html",
    brandColor: "#E34F26",
    size: "md",
  },
  {
    id: "css",
    label: "CSS",
    icon: "css",
    brandColor: "#1572B6",
    size: "md",
  },
  {
    id: "cssmodules",
    label: "CSS Modules",
    icon: "cssmodules",
    brandColor: "#4B70F5",
    size: "md",
  },
  {
    id: "tailwind",
    label: "Tailwind CSS",
    icon: "tailwind",
    brandColor: "#38BDF8",
    size: "md",
  },
  {
    id: "rtkquery",
    label: "RTK Query",
    icon: "rtkquery",
    brandColor: "#764ABC",
    size: "md",
  },
  {
    id: "api",
    label: "REST API",
    icon: "api",
    brandColor: "#10B981",
    size: "md",
  },
  {
    id: "git",
    label: "Git",
    icon: "git",
    brandColor: "#F05032",
    size: "sm",
  },
];
