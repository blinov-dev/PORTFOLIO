import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { contacts } from "@/lib/content/contacts";
import { ContactForm } from "./contact-form";
import { SocialLinks } from "./social-links";

export function ContactsSection() {
  return (
    <Section
      id="contacts"
      title="Контакты"
      description="Напишите в форму или выберите удобный способ связи"
    >
      <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
        <Card hover className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Быстрая связь</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Telegram, email или GitHub — отвечу в рабочее время
            </p>
          </div>
          <ul className="space-y-4">
            {contacts.map((contact) => (
              <li key={contact.label}>
                <p className="text-sm text-muted-foreground">{contact.label}</p>
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    {...(contact.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="font-medium">{contact.value}</p>
                )}
              </li>
            ))}
          </ul>
          <SocialLinks />
        </Card>

        <Card hover className="relative">
          <ContactForm />
        </Card>
      </div>
    </Section>
  );
}
