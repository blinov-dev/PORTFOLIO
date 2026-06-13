export type SkillGroup = {
  title: string;
  items: string[];
  featured?: boolean;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Основной frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
    featured: true,
  },
  {
    title: "Состояния и данные",
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
    title: "Формы и валидация",
    items: ["React Hook Form", "Zod", "UX ошибок и валидации"],
  },
  {
    title: "UI и стили",
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
    title: "Производительность и SEO",
    items: [
      "SSR",
      "Оптимизация загрузки данных",
      "Оптимизация изображений",
      "Базовое SEO",
    ],
  },
  {
    title: "Рабочий процесс",
    items: [
      "Git",
      "Декомпозиция задач",
      "Code review",
      "Взаимодействие с backend",
      "Работа с менеджерами",
    ],
  },
];
