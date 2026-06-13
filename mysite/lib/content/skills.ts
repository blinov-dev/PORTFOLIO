export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  items: string[];
  featured?: boolean;
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Основной frontend",
    description:
      "Компоненты, маршрутизация, типизация и интерфейсы, которые удобно поддерживать.",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
    featured: true,
  },
  {
    id: "api",
    title: "Данные и API",
    description:
      "Интеграция с backend, состояния загрузки, ошибки и устойчивый UI.",
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
    id: "forms",
    title: "Формы и состояния",
    description:
      "Формы, понятные сообщения, валидация и сценарии пользователя.",
    items: [
      "React Hook Form",
      "Zod",
      "Валидация",
      "UX ошибок",
      "Loading / empty / error states",
    ],
  },
  {
    id: "ui",
    title: "UI и адаптив",
    description:
      "Адаптивные интерфейсы, переиспользуемые компоненты, темы и базовая доступность.",
    items: [
      "Tailwind CSS",
      "SCSS",
      "Styled Components",
      "Адаптивная вёрстка",
      "UI-kit",
      "Storybook",
      "Доступность",
    ],
  },
  {
    id: "performance",
    title: "Производительность и SEO",
    description:
      "Быстрая загрузка, аккуратный первый рендер и базовая SEO-подготовка.",
    items: [
      "SSR",
      "Оптимизация данных",
      "Оптимизация изображений",
      "Базовое SEO",
    ],
  },
  {
    id: "workflow",
    title: "Рабочий процесс",
    description:
      "Понятные задачи, ревью, коммуникация и развитие проекта после запуска.",
    items: [
      "Git",
      "Декомпозиция задач",
      "Code review",
      "Коммуникация с backend",
      "Работа с менеджерами",
      "Поддержка проекта",
    ],
  },
];
