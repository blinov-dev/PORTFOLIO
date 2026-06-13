import { Section } from "@/components/layout/section";
import { aboutContent } from "@/lib/content/about";

export function AboutSection() {
  return (
    <Section id="about" title={aboutContent.title}>
      <div className="about-panel glass-surface">
        <div className="about-panel__content">
          <p className="about-panel__lead">{aboutContent.lead}</p>
          <div className="about-panel__paragraphs">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="about-panel__text">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
