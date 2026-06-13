import { navItems } from "@/lib/site-config";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Container } from "./container";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { SiteNav } from "./site-nav";

export function Header() {
  return (
    <header className="glass-header sticky top-0 z-50">
      <Container>
        <div className="flex h-[4.25rem] items-center justify-between gap-3 sm:gap-4">
          <Logo className="min-w-0 shrink" />

          <div className="header-actions flex items-center gap-2 sm:gap-3">
            <SiteNav items={navItems} className="hidden lg:block" />
            <ThemeToggle className="hidden lg:inline-flex" />
            <MobileMenu items={navItems} />
          </div>
        </div>
      </Container>
    </header>
  );
}
