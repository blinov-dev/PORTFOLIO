/**
 * Контакты — единый источник правды.
 */
export const contactsSectionDescription =
  "Напишите в форму или выберите удобный способ связи.";

// export const contactsDetailsHeading = "Мои контактные данные";

// export const contactsDetailsIntro =
//   "Можно написать напрямую или оставить заявку через форму ниже.";

export const contactConfig = {
  telegram: {
    label: "Telegram",
    display: "@BlinovDev",
    href: "https://t.me/BlinovDev",
    icon: "telegram" as const,
  },
  email: {
    label: "Email",
    display: "blinovav.dev@gmail.com",
    href: "mailto:blinovav.dev@gmail.com",
    icon: "email" as const,
  },
  github: {
    label: "GitHub",
    display: "github.com/blinov-dev",
    href: "https://github.com/blinov-dev",
    icon: "github" as const,
  },
} as const;

export type ContactIcon = (typeof contactConfig)[keyof typeof contactConfig]["icon"];

export type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: ContactIcon;
};

export type SocialItem = {
  label: string;
  href: string;
  icon: ContactIcon;
};

export const contacts: ContactItem[] = [
  {
    label: contactConfig.telegram.label,
    value: contactConfig.telegram.display,
    href: contactConfig.telegram.href,
    icon: contactConfig.telegram.icon,
  },
  {
    label: contactConfig.email.label,
    value: contactConfig.email.display,
    href: contactConfig.email.href,
    icon: contactConfig.email.icon,
  },
  {
    label: contactConfig.github.label,
    value: contactConfig.github.display,
    href: contactConfig.github.href,
    icon: contactConfig.github.icon,
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

export const contactFormUnavailableMessage =
  "Отправка формы временно недоступна. Напишите напрямую на email или в Telegram.";
