export type ContactItem = {
  label: string;
  value: string;
  href: string;
};

export type SocialItem = {
  label: string;
  href: string;
  icon: "telegram" | "github" | "email";
};

export const contacts: ContactItem[] = [
  {
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    label: "Telegram",
    value: "@username",
    href: "https://t.me/username",
  },
  {
    label: "GitHub",
    value: "github.com/username",
    href: "https://github.com/username",
  },
];

export const socialLinks: SocialItem[] = [
  { label: "Telegram", href: "https://t.me/username", icon: "telegram" },
  { label: "GitHub", href: "https://github.com/username", icon: "github" },
  { label: "Email", href: "mailto:hello@example.com", icon: "email" },
];
