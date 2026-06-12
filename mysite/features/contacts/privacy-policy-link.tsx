"use client";

import { useState } from "react";
import { PrivacyModal } from "./privacy-modal";

type PrivacyPolicyLinkProps = {
  className?: string;
  children?: React.ReactNode;
};

export function PrivacyPolicyLink({
  className = "",
  children = "Политика конфиденциальности",
}: PrivacyPolicyLinkProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`text-left transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
      >
        {children}
      </button>
      <PrivacyModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
