"use client";

import { useMemo, useState } from "react";
import { contactFormUnavailableMessage } from "@/lib/content/contacts";
import { PrivacyModal } from "./privacy-modal";

type FormFields = {
  name: string;
  email: string;
  message: string;
  consent: boolean;
  website: string;
};

type FieldKey = "name" | "email" | "message" | "consent";

type FieldErrors = Partial<Record<FieldKey, string>>;

type TouchedFields = Partial<Record<FieldKey, boolean>>;

const initialFields: FormFields = {
  name: "",
  email: "",
  message: "",
  consent: false,
  website: "",
};

const labelClassName = "contacts-label";

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validate(fields: FormFields): FieldErrors {
  const errors: FieldErrors = {};

  if (!fields.name.trim()) {
    errors.name = "Укажите имя";
  } else if (fields.name.trim().length > 120) {
    errors.name = "Слишком длинное имя";
  }

  if (!fields.email.trim()) {
    errors.email = "Укажите email";
  } else if (fields.email.trim().length > 254) {
    errors.email = "Слишком длинный email";
  } else if (!isValidEmail(fields.email.trim())) {
    errors.email = "Укажите корректный email";
  }

  if (!fields.message.trim()) {
    errors.message = "Напишите вопрос или предложение";
  } else if (fields.message.trim().length > 5000) {
    errors.message = "Сообщение слишком длинное";
  }

  if (!fields.consent) {
    errors.consent = "Нужно согласие на обработку данных";
  }

  return errors;
}

function fieldClassName(hasError: boolean) {
  return ["contacts-field", hasError ? "contacts-field--error" : ""]
    .filter(Boolean)
    .join(" ");
}

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});
  const [submittedAttempt, setSubmittedAttempt] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const isFormReady = useMemo(() => {
    return (
      Boolean(fields.name.trim()) &&
      Boolean(fields.email.trim()) &&
      isValidEmail(fields.email.trim()) &&
      Boolean(fields.message.trim()) &&
      fields.consent
    );
  }, [fields]);

  const showError = (field: FieldKey) =>
    submittedAttempt || Boolean(touched[field]);

  const updateField = <K extends keyof FormFields>(
    key: K,
    value: FormFields[K],
  ) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setSubmitError("");
    setSuccess(false);
  };

  const handleBlur = (field: FieldKey) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(fields));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedAttempt(true);

    const nextErrors = validate(fields);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    if (submitting) return;

    setSubmitting(true);
    setSubmitError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          message: fields.message.trim(),
          consent: fields.consent,
          website: fields.website,
          contact: fields.email.trim(),
        }),
      });

      const data = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok) {
        setSubmitError(
          response.status === 503 || response.status === 500
            ? contactFormUnavailableMessage
            : (data.error ?? contactFormUnavailableMessage),
        );
        return;
      }

      setFields(initialFields);
      setErrors({});
      setTouched({});
      setSubmittedAttempt(false);
      setSuccess(true);
    } catch {
      setSubmitError(contactFormUnavailableMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="contacts-form">
        <div className="contacts-form__header">
          <h3 className="contacts-form__title">Обсудим проект?</h3>
          <p className="contacts-form__intro">
            Опишите задачу и я отвечу Вам.
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

        <div className="contacts-form__grid">
          <div className="contacts-form__field">
            <label htmlFor="contact-name" className={labelClassName}>
              Имя <span className="contacts-required">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              value={fields.name}
              onChange={(e) => updateField("name", e.target.value)}
              onBlur={() => handleBlur("name")}
              className={fieldClassName(Boolean(showError("name") && errors.name))}
              aria-invalid={Boolean(showError("name") && errors.name)}
              aria-describedby={
                showError("name") && errors.name ? "contact-name-error" : undefined
              }
            />
            {showError("name") && errors.name && (
              <p id="contact-name-error" className="contacts-error" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div className="contacts-form__field">
            <label htmlFor="contact-email" className={labelClassName}>
              Email <span className="contacts-required">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={fields.email}
              onChange={(e) => updateField("email", e.target.value)}
              onBlur={() => handleBlur("email")}
              className={fieldClassName(Boolean(showError("email") && errors.email))}
              aria-invalid={Boolean(showError("email") && errors.email)}
              aria-describedby={
                showError("email") && errors.email ? "contact-email-error" : undefined
              }
            />
            {showError("email") && errors.email && (
              <p id="contact-email-error" className="contacts-error" role="alert">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="contacts-form__field">
          <label htmlFor="contact-message" className={labelClassName}>
            Ваш вопрос / предложение <span className="contacts-required">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={fields.message}
            onChange={(e) => updateField("message", e.target.value)}
            onBlur={() => handleBlur("message")}
            className={`${fieldClassName(Boolean(showError("message") && errors.message))} contacts-field--textarea`}
            aria-invalid={Boolean(showError("message") && errors.message)}
            aria-describedby={
              showError("message") && errors.message
                ? "contact-message-error"
                : undefined
            }
          />
          {showError("message") && errors.message && (
            <p id="contact-message-error" className="contacts-error" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <div className="contacts-form__field">
          <label className="contacts-consent">
            <input
              type="checkbox"
              checked={fields.consent}
              onChange={(e) => updateField("consent", e.target.checked)}
              onBlur={() => handleBlur("consent")}
              className="contacts-consent__input"
              aria-invalid={Boolean(showError("consent") && errors.consent)}
              aria-describedby={
                showError("consent") && errors.consent
                  ? "contact-consent-error"
                  : undefined
              }
            />
            <span>
              Согласен на обработку персональных данных и ознакомлен с{" "}
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="contacts-consent__link"
              >
                политикой конфиденциальности*
              </button>
            </span>
          </label>
          {showError("consent") && errors.consent && (
            <p id="contact-consent-error" className="contacts-error" role="alert">
              {errors.consent}
            </p>
          )}
        </div>

        {submitError && (
          <p className="contacts-alert contacts-alert--error" role="alert">
            {submitError}
          </p>
        )}

        {success && (
          <p className="contacts-alert contacts-alert--success" role="status">
            Заявка отправлена. Спасибо! Я свяжусь с вами в ближайшее время.
          </p>
        )}

        <button
          type="submit"
          className="contacts-submit btn-gradient"
          aria-disabled={!isFormReady || submitting}
          data-disabled={!isFormReady || submitting}
          aria-busy={submitting}
        >
          {submitting ? "Отправляю..." : "Отправить заявку"}
        </button>
      </form>

      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
}
