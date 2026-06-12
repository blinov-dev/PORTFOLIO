export type ProjectMockupType = "crm" | "b2b" | "admin";

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
    title: "CRM/ITSM система",
    description:
      "Модульная система для заявок, ремонтов, статусов, дедлайнов и ролей пользователей — от создания тикета до закрытия с историей.",
    outcome: "Команда видит статусы и сроки без хаоса в чатах.",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    href: "#",
    mockup: "crm",
  },
  {
    title: "B2B-интерфейсы и интеграции",
    description:
      "Интерфейсы для заказов, контрагентов, статусов обмена и связки сайта с учётной системой — единый поток для клиента и менеджера.",
    outcome: "Меньше ручной сверки между сайтом и учёткой.",
    tags: ["Next.js", "React", "REST API"],
    href: "#",
    mockup: "b2b",
  },
  {
    title: "Административные интерфейсы",
    description:
      "Таблицы, фильтры, карточки сущностей, модальные окна, права доступа и рабочие процессы — всё, что нужно для ежедневной операционки.",
    outcome: "Админка, с которой можно работать часами, а не терпеть.",
    tags: ["React", "TypeScript", "Tailwind"],
    href: "#",
    mockup: "admin",
  },
];
