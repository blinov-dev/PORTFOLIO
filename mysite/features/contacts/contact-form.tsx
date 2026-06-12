"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PrivacyModal } from "./privacy-modal";

type FormFields = {
  name: string;
  contact: string;
  email: string;
  message: string;
  consent: boolean;
  website: string;
};

type FieldErrors = Partial<Record<keyof FormFields, string>>;

const initialFields: FormFields = {
  name: "",
  contact: "",
  email: "",
  message: "",
  consent: false,
  website: "",
};

const fieldClassName =
  "w-full rounded-xl border border-border/70 bg-background/80 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const labelClassName = "mb-1.5 block text-sm font-medium";

function validate(fields: FormFields): FieldErrors {
  const errors: FieldErrors = {};

  if (!fields.name.trim()) {
    errors.name = "Укажите имя";
  } else if (fields.name.trim().length > 120) {
    errors.name = "Слишком длинное имя";
  }

  if (!fields.contact.trim()) {
    errors.contact = "Укажите, как с вами связаться";
  } else if (fields.contact.trim().length > 120) {
    errors.contact = "Слишком длинный контакт";
  }

  if (fields.email.trim()) {
    if (fields.email.trim().length > 254) {
      errors.email = "Слишком длинный email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      errors.email = "Некорректный email";
    }
  }

  if (!fields.message.trim()) {
    errors.message = "Напишите ваш вопрос или предложение";
  } else if (fields.message.trim().length > 5000) {
    errors.message = "Сообщение слишком длинное";
  }

  if (!fields.consent) {
    errors.consent = "Необходимо согласие на обработку данных";
  }

  return errors;
}

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const updateField = <K extends keyof FormFields>(
    key: K,
    value: FormFields[K],
  ) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setSubmitError("");
    setSuccess(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(fields);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSubmitting(true);
    setSubmitError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      const data = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok) {
        setSubmitError(
          data.error ??
            "Не удалось отправить заявку. Попробуйте написать напрямую в Telegram или на email.",
        );
        return;
      }

      setFields(initialFields);
      setErrors({});
      setSuccess(true);
    } catch {
      setSubmitError(
        "Не удалось отправить заявку. Попробуйте написать напрямую в Telegram или на email.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="relative space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Обсудим проект?</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Опишите задачу, сроки и удобный способ связи — я отвечу в рабочее
            время.
          </p>
        </div>

        <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={fields.website}
            onChange={(e) => updateField("website", e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="contact-name" className={labelClassName}>
            Имя <span className="text-primary">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={fields.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={fieldClassName}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1 text-xs text-secondary">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-reach" className={labelClassName}>
            Как связаться <span className="text-primary">*</span>
          </label>
          <input
            id="contact-reach"
            name="contact"
            type="text"
            required
            placeholder="Telegram, email или телефон"
            value={fields.contact}
            onChange={(e) => updateField("contact", e.target.value)}
            className={fieldClassName}
            aria-invalid={Boolean(errors.contact)}
            aria-describedby={errors.contact ? "contact-reach-error" : undefined}
          />
          {errors.contact && (
            <p id="contact-reach-error" className="mt-1 text-xs text-secondary">
              {errors.contact}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClassName}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={fieldClassName}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1 text-xs text-secondary">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClassName}>
            Ваш вопрос / предложение <span className="text-primary">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={fields.message}
            onChange={(e) => updateField("message", e.target.value)}
            className={`${fieldClassName} resize-y min-h-[120px]`}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
          />
          {errors.message && (
            <p id="contact-message-error" className="mt-1 text-xs text-secondary">
              {errors.message}
            </p>
          )}
        </div>

        <div>
          <label className="flex items-start gap-3 text-sm leading-relaxed">
            <input
              type="checkbox"
              checked={fields.consent}
              onChange={(e) => updateField("consent", e.target.checked)}
              className="mt-1 size-4 shrink-0 rounded border-border accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "contact-consent-error" : undefined}
            />
            <span>
              Согласен на обработку персональных данных и ознакомлен с{" "}
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="font-medium text-primary underline decoration-primary/40 underline-offset-2 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                политикой конфиденциальности
              </button>
            </span>
          </label>
          {errors.consent && (
            <p id="contact-consent-error" className="mt-1 text-xs text-secondary">
              {errors.consent}
            </p>
          )}
        </div>

        {submitError && (
          <p className="rounded-xl border border-secondary/30 bg-secondary/5 px-4 py-3 text-sm text-secondary">
            {submitError}
          </p>
        )}

        {success && (
          <p className="rounded-xl border border-accent/30 bg-accent/5 px-4 py-3 text-sm text-accent">
            Заявка отправлена. Спасибо! Я свяжусь с вами в ближайшее время.
          </p>
        )}

        <Button
          type="submit"
          disabled={submitting || !fields.consent}
          className="w-full sm:w-auto"
        >
          {submitting ? "Отправляю..." : "Отправить заявку"}
        </Button>
      </form>

      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
}
