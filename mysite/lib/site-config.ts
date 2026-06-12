export const siteConfig = {
  name: "Александр Блинов",
  role: "Frontend-разработчик",
  pitch:
    "Разрабатываю быстрые и аккуратные интерфейсы на Next.js, React и TypeScript: от лендингов и личных кабинетов до CRM, админок и B2B-систем.",
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
