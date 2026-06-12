import type { ReactNode } from "react";
import { Container } from "./container";

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
      className={`scroll-mt-24 py-14 sm:py-16 lg:py-20 ${className}`}
      aria-labelledby={title ? `${id}-title` : undefined}
    >
      <Container>
        {(title || description) && (
          <header className="mb-8 sm:mb-10">
            {title && (
              <h2
                id={title ? `${id}-title` : undefined}
                className="text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                {title}
              </h2>
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
