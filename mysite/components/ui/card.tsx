import type { ReactNode } from "react";

type CardVariant = "default" | "muted" | "glass" | "solid";

type CardProps = {
  children: ReactNode;
  variant?: CardVariant;
  hover?: boolean;
  className?: string;
};

const variantClasses: Record<CardVariant, string> = {
  glass: "glass-surface text-card-foreground",
  default: "glass-surface text-card-foreground",
  muted: "bg-muted/80 text-card-foreground border-border backdrop-blur-sm",
  solid: "bg-card text-card-foreground border-border shadow-[var(--shadow-card)]",
};

export function Card({
  children,
  variant = "default",
  hover = false,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border p-6 sm:p-8 ${variantClasses[variant]} ${hover ? "card-hover" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
