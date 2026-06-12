export type SkillGroup = {
  title: string;
  items: string[];
  featured?: boolean;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Основной стек",
    items: ["Next.js", "React", "TypeScript", "HTML", "CSS"],
    featured: true,
  },
  {
    title: "UI и стили",
    items: ["Tailwind CSS", "CSS Modules", "Responsive design", "Figma"],
  },
  {
    title: "Работа с данными",
    items: ["REST API", "Fetch patterns", "Forms & validation", "Client/Server Components"],
  },
  {
    title: "Качество и инструменты",
    items: ["Git", "ESLint", "TypeScript strict", "Code review"],
  },
];
