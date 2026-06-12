import { siteConfig } from "@/lib/site-config";
import { Container } from "./container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <Container>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Frontend-разработчик.
          </p>
          <a
            href="#contacts"
            className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Связаться
          </a>
        </div>
      </Container>
    </footer>
  );
}
