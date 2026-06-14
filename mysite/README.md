# Blinov.dev — portfolio landing

Персональное портфолио frontend-разработчика Александра Блинова.
Проект сделан на Next.js, React, TypeScript и Tailwind CSS с визуальным стилем Liquid Glass / Soft Bento.

## О проекте

- Одностраничный landing для HR, тимлидов и заказчиков.
- Демонстрирует frontend-craft: адаптив, темы, интерактивные секции, форму контакта и showcase проектов.
- Сайт не позиционирует автора как fullstack; backend упоминается только в контексте API-интеграций.

## Демо

https://portfolio-black-eight-gklwvfrewp.vercel.app/

Если production URL позже изменится — его можно будет заменить в `lib/site-config.ts`.

## Технологии

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4
- CSS variables / design tokens
- motion
- react-icons
- nodemailer

## Возможности

- Адаптивный landing.
- Light / dark theme toggle.
- Sticky header и mobile drawer.
- Hero с фото и liquid glass карточкой.
- Services: desktop tabs + mobile accordion.
- Skills: интерактивные skill tiles.
- Projects: featured + supporting bento showcase.
- Contacts: форма с валидацией, privacy consent, Telegram / Email / GitHub.
- Privacy policy modal.
- Honeypot anti-spam field.

## Структура проекта

```txt
app/              routes, layout, global css entrypoint, API
components/       layout-компоненты и UI primitives
features/         секции landing page
lib/content/      контент секций
lib/email/        SMTP и шаблон письма
styles/           tokens, theme, CSS partials
public/images/    логотип и фото
```

## Запуск локально

```bash
cd mysite
npm install
npm run dev
```

Открыть:

```txt
http://localhost:3000
```

## Команды

```bash
npm run dev
npm run build
npm run start
npm run lint
npx tsc --noEmit
```

## Переменные окружения

Контактная форма использует SMTP через `nodemailer`.

Скопировать `.env.example` в `.env` и заполнить:

```bash
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=
SMTP_USER=
SMTP_PASSWORD=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

Если переменные не заданы, сайт остаётся рабочим, а форма показывает fallback-сообщение с предложением написать напрямую.

## Контактная форма

API route:

```txt
POST /api/contact
```

Форма включает:

- имя;
- email;
- сообщение;
- согласие на обработку персональных данных;
- honeypot field.

## Что можно заменить под себя

- `lib/content/*` — тексты секций.
- `lib/site-config.ts` — имя, ссылки, метаданные, OG.
- `public/images/logo.webp` — логотип.
- `public/images/portfolio-me-photo.jpg` — фото.
- `app/favicon.ico` — favicon.

## Деплой

Проект можно деплоить на Vercel или любой Node.js-хостинг с поддержкой Next.js App Router.

Перед релизом проверить:

- production URL в `lib/site-config.ts`;
- favicon;
- OG image;
- переменные окружения для формы;
- social links.

## Автор

Александр Блинов  
Frontend-разработчик  
GitHub: https://github.com/blinov-dev  
Telegram: https://t.me/BlinovDev  
Email: [blinovav.dev@gmail.com](mailto:blinovav.dev@gmail.com)
