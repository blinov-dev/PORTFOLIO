export type SkillGroup = {
  title: string;
  items: string[];
  featured?: boolean;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend core",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
    featured: true,
  },
  {
    title: "State & Data",
    items: [
      "Redux Toolkit",
      "RTK Query",
      "REST API",
      "Axios / fetch",
      "Кеширование",
      "Обработка ошибок",
    ],
  },
  {
    title: "Forms & Validation",
    items: ["React Hook Form", "Zod", "UX ошибок и валидации"],
  },
  {
    title: "UI & Styling",
    items: [
      "Tailwind CSS",
      "SCSS",
      "Styled Components",
      "Адаптивная вёрстка",
      "UI-kit",
      "Storybook",
    ],
  },
  {
    title: "Performance & SEO",
    items: [
      "SSR",
      "Оптимизация загрузки данных",
      "Оптимизация изображений",
      "Базовое SEO",
    ],
  },
  {
    title: "Workflow",
    items: [
      "Git",
      "Декомпозиция задач",
      "Code review",
      "Взаимодействие с backend",
      "Работа с менеджерами",
    ],
  },
];
