export const siteConfig = {
  name: "Александр Блинов",
  role: "Frontend-разработчик",
  tagline:
    "Frontend-разработчик для интерфейсов, которые должны работать, а не просто выглядеть красиво.",
  pitch:
    "Разрабатываю быстрые и понятные интерфейсы на Next.js, React и TypeScript: CRM, B2B-сервисы, админки, личные кабинеты и лендинги для бизнеса.",
  experience: "3+",
  url: "https://portfolio-black-eight-gklwvfrewp.vercel.app",
  ogImage: "/images/profile-placeholder.svg",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Главная", href: "#hero" },
  { label: "Обо мне", href: "#about" },
  { label: "Кейсы", href: "#projects" },
  { label: "Навыки", href: "#skills" },
  { label: "Контакты", href: "#contacts" },
];
