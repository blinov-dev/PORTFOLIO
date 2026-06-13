export type ProjectMockupType = "crm" | "ecommerce" | "onboarding" | "uikit";

export type ProjectItem = {
  title: string;
  description: string;
  outcome: string;
  tags: string[];
  mockup: ProjectMockupType;
  featured?: boolean;
  note?: string;
  featuredBadge?: string;
};

export const projectsSectionDescription =
  "Featured-кейс и supporting-проекты из e-commerce, внутренних продуктов и UI-разработки.";

export const projects: ProjectItem[] = [
  {
    title: "CRM / ITSM система",
    description:
      "Модульная CRM/ITSM-платформа для заявок, статусов, ролей и дедлайнов: канбан-доски, карточки тикетов, история изменений и контроль SLA. Интерфейс собран на Next.js + TypeScript с акцентом на читаемость статусов и быстрый обзор очереди.",
    outcome: "Команда видит статусы и сроки без хаоса в чатах и разрозненных таблицах.",
    tags: ["Next.js", "TypeScript", "Tailwind", "REST API"],
    mockup: "crm",
    featured: true,
    featuredBadge: "Главный кейс",
    note: "Кейс из коммерческой практики · подробный разбор готовится",
  },
  {
    title: "Frontend интернет-магазина",
    description:
      "Frontend-часть интернет-магазина: каталог, корзина, личный кабинет и оформление заказа с интеграцией backend API.",
    outcome: "Покупатель проходит путь от каталога до заказа без «сломанного» UX.",
    tags: ["React", "TypeScript", "RTK Query"],
    mockup: "ecommerce",
    note: "NDA-safe описание · подробный кейс будет опубликован позже",
  },
  {
    title: "Внутренний onboarding-продукт",
    description:
      "Веб-приложение для стажёрской программы: onboarding-пути, личный кабинет и материалы курса в одном интерфейсе.",
    outcome: "Стажёры проходят путь в одном интерфейсе, а не в разрозненных документах.",
    tags: ["Next.js", "TypeScript", "SSR"],
    mockup: "onboarding",
    note: "Кейс из коммерческой практики",
  },
  {
    title: "UI-kit и продуктовые интерфейсы",
    description:
      "Переиспользуемые компоненты на Next.js + TypeScript, документация в Storybook и согласованный UI для продуктовых экранов.",
    outcome: "Команда собирает экраны быстрее и без расхождения в UI.",
    tags: ["Next.js", "TypeScript", "Storybook"],
    mockup: "uikit",
    note: "Подробный разбор готовится",
  },
];

export function getFeaturedProject(): ProjectItem {
  return projects.find((project) => project.featured) ?? projects[0];
}

export function getSupportingProjects(): ProjectItem[] {
  return projects.filter((project) => !project.featured);
}
