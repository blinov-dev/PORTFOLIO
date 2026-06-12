import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site-config";
import { SocialLinks } from "@/features/contacts/social-links";
import { ProfileImage } from "./profile-image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="scroll-mt-24 py-10 sm:py-14 lg:py-20"
      aria-labelledby="hero-title"
    >
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <ProfileImage />

          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                <span className="gradient-text">{siteConfig.role}</span>
              </p>
              <h1
                id="hero-title"
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-tight"
              >
                {siteConfig.name}
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {siteConfig.pitch}
              </p>
            </div>

            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_6px_hsl(var(--primary)/0.5)]" />
                {siteConfig.experience} года коммерческого опыта
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-secondary shadow-[0_0_6px_hsl(var(--secondary)/0.4)]" />
                Next.js, React, TypeScript
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_6px_hsl(var(--accent)/0.4)]" />
                Адаптивная вёрстка и чистый UI
              </li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <Button href="#contacts">Связаться</Button>
              <Button href="#projects" variant="secondary">
                Смотреть кейсы
              </Button>
            </div>

            <div>
              <p className="mb-3 text-sm text-muted-foreground">
                Напишите — обсудим задачу и сроки
              </p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
