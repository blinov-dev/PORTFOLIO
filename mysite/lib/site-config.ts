export const siteConfig = {
  name: "Александр Блинов",
  role: "Frontend-разработчик",
  pitch:
    "Создаю современные, быстрые и удобные интерфейсы на Next.js, React и TypeScript.",
  experience: "3+",
  url: "https://example.com",
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
