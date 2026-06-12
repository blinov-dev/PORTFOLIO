export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
};

export const projects: ProjectItem[] = [
  {
    title: "CRM/ITSM система",
    description:
      "Модульная система для заявок, ремонтов, статусов, дедлайнов и ролей пользователей.",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    href: "#",
    image: "/images/project-placeholder.svg",
  },
  {
    title: "B2B-интерфейсы и интеграции",
    description:
      "Интерфейсы для заказов, контрагентов, статусов обмена и связки сайта с учётной системой.",
    tags: ["Next.js", "React", "REST API"],
    href: "#",
    image: "/images/project-placeholder.svg",
  },
  {
    title: "Административные интерфейсы",
    description:
      "Таблицы, фильтры, карточки сущностей, модальные окна, права доступа и рабочие процессы.",
    tags: ["React", "TypeScript", "Tailwind"],
    href: "#",
    image: "/images/project-placeholder.svg",
  },
];
