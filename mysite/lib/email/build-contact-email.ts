import { siteConfig } from "@/lib/site-config";
import { escapeHtml } from "@/lib/escape-html";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export function buildContactEmail(payload: ContactPayload) {
  const sentAt = new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });

  const text = `Новая заявка с portfolio site

Имя: ${payload.name}
Email: ${payload.email}
Сообщение:
${payload.message}

Сайт: ${siteConfig.url}
Дата: ${sentAt}`;

  const html = `<!DOCTYPE html>
<html lang="ru">
<body style="font-family: sans-serif; line-height: 1.5; color: #222;">
  <h2 style="margin: 0 0 16px;">Новая заявка с portfolio site</h2>
  <p><strong>Имя:</strong> ${escapeHtml(payload.name)}</p>
  <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
  <p><strong>Сообщение:</strong></p>
  <p style="white-space: pre-wrap;">${escapeHtml(payload.message)}</p>
  <hr style="margin: 24px 0; border: none; border-top: 1px solid #ddd;" />
  <p style="font-size: 12px; color: #666;">
    Сайт: ${escapeHtml(siteConfig.url)}<br />
    Дата: ${escapeHtml(sentAt)}
  </p>
</body>
</html>`;

  return { text, html, subject: "Новая заявка с portfolio site — Александр Блинов" };
}
