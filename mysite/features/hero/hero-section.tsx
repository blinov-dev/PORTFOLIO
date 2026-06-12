import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site-config";
import { SocialLinks } from "@/features/contacts/social-links";
import { ProfileImage } from "./profile-image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="scroll-mt-24 overflow-hidden py-10 sm:py-14 lg:py-20"
      aria-labelledby="hero-title"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="order-2 flex flex-col gap-6 lg:order-1">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {siteConfig.role}
                </span>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {siteConfig.experience} года · Available
                </span>
              </div>

              <h1
                id="hero-title"
                className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]"
              >
                {siteConfig.tagline}
              </h1>

              <p className="text-xl font-semibold tracking-tight sm:text-2xl">
                {siteConfig.name}
              </p>

              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {siteConfig.pitch}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["CRM", "B2B", "Admin UI", "Next.js", "React", "TypeScript"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/70 bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button href="#contacts">Обсудить проект</Button>
              <Button href="#projects" variant="secondary">
                Смотреть кейсы
              </Button>
            </div>

            <div className="border-t border-border/60 pt-5">
              <p className="mb-3 text-sm text-muted-foreground">
                Telegram или email — отвечу с оценкой формата и сроков
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
