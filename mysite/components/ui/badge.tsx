type BadgeVariant = "default" | "glass" | "accent" | "gradient";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-muted/90 text-muted-foreground border border-border/60",
  glass: "glass-surface text-foreground",
  accent:
    "bg-accent/15 text-accent border border-accent/25 shadow-[0_0_12px_hsl(var(--accent)/0.15)]",
  gradient:
    "border border-primary/20 bg-primary/10 text-primary backdrop-blur-sm",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
