import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import {
  contactCtaText,
  contacts,
  getPrimaryContactHref,
} from "@/lib/content/contacts";
import { SocialLinks } from "./social-links";

export function ContactsSection() {
  const primaryHref = getPrimaryContactHref();
  const primaryLabel =
    primaryHref.startsWith("mailto:") ? "Написать на email" : "Связаться";

  return (
    <Section
      id="contacts"
      title="Контакты"
      description="Свяжитесь удобным способом — отвечу в рабочее время"
    >
      <div className="grid gap-4 lg:grid-cols-5 lg:gap-6">
        <Card hover className="space-y-6 lg:col-span-3">
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
                  <p className="font-medium text-muted-foreground">
                    {contact.value}
                  </p>
                )}
              </li>
            ))}
          </ul>
          <SocialLinks />
        </Card>

        <Card variant="solid" className="flex flex-col justify-center gap-4 lg:col-span-2">
          <h3 className="text-lg font-medium">Готов обсудить проект</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {contactCtaText}
          </p>
          <Button href={primaryHref}>{primaryLabel}</Button>
        </Card>
      </div>
    </Section>
  );
}
