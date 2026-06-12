/**
 * Контакты — единый источник правды.
 */
export const contactConfig = {
  email: {
    label: "Email",
    display: "blinovav.dev@gmail.com",
    href: "mailto:blinovav.dev@gmail.com",
  },
  telegram: {
    label: "Telegram",
    display: "@BlinovDev",
    href: "https://t.me/BlinovDev",
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
  },
  {
    label: contactConfig.telegram.label,
    value: contactConfig.telegram.display,
    href: contactConfig.telegram.href,
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
    href: contactConfig.telegram.href,
    icon: "telegram",
  },
  {
    label: "GitHub",
    href: contactConfig.github.href,
    icon: "github",
  },
  {
    label: "Email",
    href: contactConfig.email.href,
    icon: "email",
  },
];

export function getPrimaryContactHref(): string {
  return contactConfig.telegram.href;
}

export const contactCtaText =
  "Напишите мне в Telegram или на email — обсудим задачу, сроки и формат сотрудничества.";
