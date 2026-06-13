import { siteConfig } from "@/lib/site-config";
import { PrivacyPolicyLink } from "@/features/contacts/privacy-policy-link";
import { Container } from "./container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <Container>
        <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}
          </p>
          <PrivacyPolicyLink className="text-sm text-muted-foreground" />
        </div>
      </Container>
    </footer>
  );
}
