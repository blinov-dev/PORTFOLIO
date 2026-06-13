import { socialLinks } from "@/lib/content/contacts";
import { IconButton } from "@/components/ui/icon-button";

import type { ContactIcon } from "@/lib/content/contacts";
import { ContactIconGlyph } from "./contact-icon";

function SocialIcon({ icon }: { icon: ContactIcon }) {
  return <ContactIconGlyph icon={icon} />;
}

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {socialLinks.map((link) => (
        <IconButton key={link.label} href={link.href} label={link.label}>
          <SocialIcon icon={link.icon} />
        </IconButton>
      ))}
    </div>
  );
}
