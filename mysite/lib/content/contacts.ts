/**
 * Контакты — единый источник правды.
 * Перед публикацией замените placeholder-значения email и telegram ниже.
 */
export const contactConfig = {
  email: {
    label: "Email",
    display: "email@example.com — заменить на реальный email",
    href: null as string | null,
  },
  telegram: {
    label: "Telegram",
    display: "@telegram — заменить на реальный Telegram",
    href: null as string | null,
  },
  github: {
    label: "GitHub",
    display: "github.com/blinov-dev",
    href: "https://github.com/blinov-dev",
  },
} as const;

export type ContactItem = {
  label: string;
  value: string;
  href: string | null;
  isPlaceholder?: boolean;
};

export type SocialItem = {
  label: string;
  href: string;
  icon: "telegram" | "github" | "email";
  isPlaceholder?: boolean;
};

export const contacts: ContactItem[] = [
  {
    label: contactConfig.email.label,
    value: contactConfig.email.display,
    href: contactConfig.email.href,
    isPlaceholder: true,
  },
  {
    label: contactConfig.telegram.label,
    value: contactConfig.telegram.display,
    href: contactConfig.telegram.href,
    isPlaceholder: true,
  },
  {
    label: contactConfig.github.label,
    value: contactConfig.github.display,
    href: contactConfig.github.href,
  },
];

export const socialLinks: SocialItem[] = [
  {
    label: "Telegram",
    href: contactConfig.telegram.href ?? "#",
    icon: "telegram",
    isPlaceholder: !contactConfig.telegram.href,
  },
  {
    label: "GitHub",
    href: contactConfig.github.href,
    icon: "github",
  },
  {
    label: "Email",
    href: contactConfig.email.href ?? "#",
    icon: "email",
    isPlaceholder: !contactConfig.email.href,
  },
];

/** CTA href для кнопок «Написать» — fallback на секцию контактов, пока email не задан */
export function getPrimaryContactHref(): string {
  return contactConfig.email.href ?? contactConfig.telegram.href ?? "#contacts";
}

export const contactCtaText =
  "Напишите мне в Telegram или на email — обсудим задачу, сроки и формат сотрудничества.";
