export const siteConfig = {
  name: "Александр Блинов",
  role: "Frontend-разработчик",
  stack: "React / Next.js / TypeScript",
  pitch:
    "Разрабатываю интерфейсы для бизнеса и продуктовых команд: интернет-магазины, личные кабинеты, админ-панели, B2B-сервисы и лендинги.",
  metaDescription:
    "Frontend-разработчик React / Next.js / TypeScript. E-commerce, SPA, админки, B2B и лендинги.",
  availability: "Открыт к новым задачам, проектам и фрилансу.",
  profileImage: "/images/portfolio-me-photo.jpg",
  url: "https://portfolio-black-eight-gklwvfrewp.vercel.app",
  ogImage: "/images/portfolio-me-photo.jpg",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Главная", href: "#hero" },
  { label: "Обо мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Процесс", href: "#process" },
  { label: "Навыки", href: "#skills" },
  { label: "Кейсы", href: "#projects" },
  { label: "Контакты", href: "#contacts" },
];
