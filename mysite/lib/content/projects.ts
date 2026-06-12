export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
};

export const projects: ProjectItem[] = [
  {
    title: "E-commerce витрина",
    description:
      "Интернет-магазин с каталогом, фильтрами и адаптивной вёрсткой.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "#",
    image: "/images/project-placeholder.svg",
  },
  {
    title: "Личный кабинет",
    description:
      "SPA для управления заказами и профилем пользователя с интеграцией REST API.",
    tags: ["React", "TypeScript", "REST API"],
    href: "#",
    image: "/images/project-placeholder.svg",
  },
  {
    title: "Корпоративный landing",
    description:
      "Промо-сайт компании с анимациями, формой обратной связи и SEO-оптимизацией.",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    href: "#",
    image: "/images/project-placeholder.svg",
  },
];
