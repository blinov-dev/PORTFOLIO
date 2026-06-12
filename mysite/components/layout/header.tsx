import { navItems, siteConfig } from "@/lib/site-config";
import { Container } from "./container";
import { MobileMenu } from "./mobile-menu";
import { SiteNav } from "./site-nav";

export function Header() {
  return (
    <header className="glass-header sticky top-0 z-50">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#hero"
            className="text-sm font-semibold tracking-tight transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {siteConfig.name.split(" ")[0]}
          </a>

          <SiteNav items={navItems} className="hidden lg:block" />
          <MobileMenu items={navItems} />
        </div>
      </Container>
    </header>
  );
}
