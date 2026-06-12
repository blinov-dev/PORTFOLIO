"use client";

import { Modal } from "@/components/ui/modal";
import { privacyPolicyContent } from "@/lib/content/privacy-policy";

type PrivacyModalProps = {
  open: boolean;
  onClose: () => void;
};

export function PrivacyModal({ open, onClose }: PrivacyModalProps) {
  return (
    <Modal open={open} onClose={onClose} title={privacyPolicyContent.title}>
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        {privacyPolicyContent.sections.map((section) => (
          <section key={section.heading}>
            <h3 className="mb-1 font-medium text-foreground">{section.heading}</h3>
            <p>{section.body}</p>
          </section>
        ))}
        <p className="border-t border-border/50 pt-3 text-xs italic">
          {privacyPolicyContent.disclaimer}
        </p>
      </div>
    </Modal>
  );
}
