import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site-config";
import { SocialLinks } from "@/features/contacts/social-links";
import { ProfileImage } from "./profile-image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-section scroll-mt-24 overflow-hidden py-10 sm:py-12 lg:py-16"
      aria-labelledby="hero-title"
    >
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div className="order-2 flex flex-col gap-5 lg:order-1 lg:gap-6">
            <div className="hero-copy space-y-3 sm:space-y-4">
              <p className="hero-eyebrow text-sm font-medium text-muted-foreground">
                <span className="text-foreground">{siteConfig.role}</span>
                <span aria-hidden="true" className="mx-2 text-border">
                  ·
                </span>
                <span>{siteConfig.stack}</span>
              </p>

              <h1
                id="hero-title"
                className="hero-name text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]"
              >
                {siteConfig.name}
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-foreground/90 sm:text-lg">
                {siteConfig.pitch}
              </p>

              <p className="hero-availability flex max-w-xl items-start gap-2 text-sm font-medium text-foreground sm:text-base">
                <span
                  className="mt-2 size-2 shrink-0 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent)/0.45)]"
                  aria-hidden="true"
                />
                <span>{siteConfig.availability}</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-2" aria-label="Ключевой стек">
              {siteConfig.heroChips.map((tag) => (
                <span key={tag} className="hero-chip">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href="#contacts">Связаться</Button>
              <Button href="#projects" variant="secondary">
                Смотреть проекты
              </Button>
            </div>

            <div className="border-t border-border/60 pt-4">
              <p className="mb-3 text-sm text-muted-foreground">
                Telegram или email
              </p>
              <SocialLinks />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <ProfileImage />
          </div>
        </div>
      </Container>
    </section>
  );
}
