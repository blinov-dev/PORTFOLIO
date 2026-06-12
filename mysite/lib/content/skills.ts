export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Styling",
    items: ["Tailwind CSS", "CSS Modules", "Responsive design"],
  },
  {
    title: "Tooling",
    items: ["Git", "ESLint", "npm", "Vite"],
  },
  {
    title: "Другое",
    items: ["REST API", "Figma", "Code review"],
  },
];
