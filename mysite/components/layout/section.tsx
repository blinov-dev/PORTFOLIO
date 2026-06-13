import type { ReactNode } from "react";
import { Container } from "./container";
import { SectionHeading } from "@/components/ui/section-heading";

type SectionProps = {
  id?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-10 ${className}`}
      aria-labelledby={title ? `${id}-title` : undefined}
    >
      <Container>
        {(title || description) && (
          <header className="mb-4 sm:mb-6">
            {title && (
              <SectionHeading id={id ? `${id}-title` : undefined}>
                {title}
              </SectionHeading>
            )}
            {description && (
              <p className="mt-2 max-w-2xl text-muted-foreground">
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
