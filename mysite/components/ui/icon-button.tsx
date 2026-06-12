import type { AnchorHTMLAttributes } from "react";

type IconButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
  children: React.ReactNode;
};

export function IconButton({
  label,
  children,
  className = "",
  href = "#",
  ...rest
}: IconButtonProps) {
  const isExternal = href.startsWith("http");

  return (
    <a
      aria-label={label}
      href={href}
      className={`glass-surface inline-flex size-10 items-center justify-center rounded-full text-foreground transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
