import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { buildContactEmail } from "@/lib/email/build-contact-email";
import { getContactEnv } from "@/lib/email/contact-env";

export const runtime = "nodejs";

type ContactRequestBody = {
  name?: string;
  email?: string;
  message?: string;
  consent?: boolean;
  website?: string;
};

const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 5000;

function trim(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json(
      { error: "Некорректный формат запроса." },
      { status: 400 },
    );
  }

  if (trim(body.website)) {
    return NextResponse.json({ success: true });
  }

  const name = trim(body.name);
  const email = trim(body.email);
  const message = trim(body.message);
  const consent = body.consent === true;

  if (!name || !message || !consent) {
    return NextResponse.json(
      { error: "Заполните обязательные поля и подтвердите согласие." },
      { status: 400 },
    );
  }

  if (!email) {
    return NextResponse.json({ error: "Укажите email" }, { status: 400 });
  }

  if (name.length > MAX_NAME) {
    return NextResponse.json(
      { error: "Слишком длинное значение в поле формы." },
      { status: 400 },
    );
  }

  if (email.length > MAX_EMAIL) {
    return NextResponse.json(
      { error: "Слишком длинный email." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Укажите корректный email" },
      { status: 400 },
    );
  }

  if (message.length > MAX_MESSAGE) {
    return NextResponse.json(
      { error: "Сообщение слишком длинное." },
      { status: 400 },
    );
  }

  const env = getContactEnv();
  if (!env) {
    return NextResponse.json(
      {
        error:
          "Отправка временно недоступна. Напишите напрямую в Telegram или на email.",
      },
      { status: 503 },
    );
  }

  const { text, html, subject } = buildContactEmail({
    name,
    email,
    message,
  });

  try {
    const transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: env.SMTP_SECURE,
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: env.CONTACT_FROM_EMAIL,
      to: env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      {
        error:
          "Не удалось отправить заявку. Попробуйте написать напрямую в Telegram или на email.",
      },
      { status: 500 },
    );
  }
}
