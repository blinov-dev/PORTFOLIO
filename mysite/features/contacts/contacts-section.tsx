import { Section } from "@/components/layout/section";
import {
  contacts,
  contactsSectionDescription,
} from "@/lib/content/contacts";
import { ContactForm } from "./contact-form";
import { ContactIconGlyph } from "./contact-icon";

export function ContactsSection() {
  return (
    <Section
      id="contacts"
      title="Контакты"
      description={contactsSectionDescription}
    >
      <div className="contacts-panel glass-surface">
        <div className="contacts-panel__glow" aria-hidden="true" />

        <section className="contacts-panel__details" aria-label="Контактные данные">
          <ul className="contacts-grid">
            {contacts.map((contact) => (
              <li key={contact.label}>
                <a
                  href={contact.href}
                  className="contacts-card"
                  {...(contact.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="contacts-card__icon" aria-hidden="true">
                    <ContactIconGlyph icon={contact.icon} />
                  </span>
                  <span className="contacts-card__body">
                    <span className="contacts-card__label">{contact.label}</span>
                    <span className="contacts-card__value">{contact.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="contacts-panel__divider" aria-hidden="true" />

        <section className="contacts-panel__form" aria-label="Форма связи">
          <ContactForm />
        </section>
      </div>
    </Section>
  );
}
