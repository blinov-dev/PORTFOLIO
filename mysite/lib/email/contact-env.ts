export type ContactEnv = {
  SMTP_HOST: string;
  SMTP_PORT: number;
  SMTP_SECURE: boolean;
  SMTP_USER: string;
  SMTP_PASSWORD: string;
  CONTACT_TO_EMAIL: string;
  CONTACT_FROM_EMAIL: string;
};

export function getContactEnv(): ContactEnv | null {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASSWORD,
    CONTACT_TO_EMAIL,
    CONTACT_FROM_EMAIL,
  } = process.env;

  if (
    !SMTP_HOST ||
    !SMTP_PORT ||
    SMTP_SECURE === undefined ||
    !SMTP_USER ||
    !SMTP_PASSWORD ||
    !CONTACT_TO_EMAIL ||
    !CONTACT_FROM_EMAIL
  ) {
    return null;
  }

  const port = Number(SMTP_PORT);
  if (Number.isNaN(port)) {
    return null;
  }

  return {
    SMTP_HOST,
    SMTP_PORT: port,
    SMTP_SECURE: SMTP_SECURE === "true",
    SMTP_USER,
    SMTP_PASSWORD,
    CONTACT_TO_EMAIL,
    CONTACT_FROM_EMAIL,
  };
}
