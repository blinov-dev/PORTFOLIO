export type ProjectMockupType = "ecommerce" | "onboarding" | "uikit" | "crm";

export type ProjectItem = {
  title: string;
  description: string;
  outcome: string;
  tags: string[];
  href: string;
  mockup: ProjectMockupType;
};

export const projects: ProjectItem[] = [
  {
    title: "Frontend интернет-магазина",
    description:
      "Frontend-часть интернет-магазина: каталог, корзина, личный кабинет, оформление заказа, интеграция с backend API через RTK Query.",
    outcome: "Покупатель проходит путь от каталога до заказа без «сломанного» UX.",
    tags: ["React", "TypeScript", "RTK Query", "REST API"],
    href: "#",
    mockup: "ecommerce",
  },
  {
    title: "Внутренний onboarding-продукт",
    description:
      "Веб-приложение для стажёрской программы: onboarding-пути, личный кабинет, SSR на Next.js, структура проекта и работа в команде.",
    outcome: "Стажёры проходят путь в одном интерфейсе, а не в разрозненных документах.",
    tags: ["Next.js", "TypeScript", "SSR", "Работа в команде"],
    href: "#",
    mockup: "onboarding",
  },
  {
    title: "UI-kit и продуктовые интерфейсы",
    description:
      "Переиспользуемые компоненты интерфейса на Next.js + TypeScript, документация в Storybook, согласованный UI и поддерживаемая структура.",
    outcome: "Команда собирает экраны быстрее и без расхождения в UI.",
    tags: ["Next.js", "TypeScript", "Storybook", "UI-kit"],
    href: "#",
    mockup: "uikit",
  },
  {
    title: "CRM/ITSM система",
    description:
      "Модульная система для заявок, статусов, ролей и дедлайнов — от создания тикета до закрытия с историей. Pet/commercial-style проект.",
    outcome: "Команда видит статусы и сроки без хаоса в чатах.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "#",
    mockup: "crm",
  },
];
