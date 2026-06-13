export const siteConfig = {
  name: "Александр Блинов",
  role: "Frontend-разработчик",
  stack: "React / Next.js / TypeScript",
  pitch:
    "Разрабатываю интерфейсы для бизнеса и продуктовых команд: интернет-магазины, личные кабинеты, админ-панели, B2B-сервисы и лендинги.",
  metaDescription:
    "Frontend-разработчик React / Next.js / TypeScript. E-commerce, SPA, админки, B2B и лендинги. Открыт к удалёнке и проектам.",
  availability:
    "Открыт к удалённой работе, проектной занятости и фриланс-задачам.",
  heroChips: [
    "React",
    "Next.js",
    "TypeScript",
    "RTK Query",
    "Forms / API",
    "Remote / Freelance",
  ],
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
