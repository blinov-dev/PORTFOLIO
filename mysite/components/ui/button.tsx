import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-gradient focus-visible:ring-primary",
  secondary: "btn-glass focus-visible:ring-primary",
  ghost:
    "text-foreground hover:bg-muted/60 focus-visible:ring-primary",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

type ButtonLinkProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonNativeProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: ButtonLinkProps | ButtonNativeProps) {
  const { variant = "primary", className = "", children } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonNativeProps;

  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
