import type { NavItem } from "@/lib/site-config";

type SiteNavProps = {
  items: NavItem[];
  className?: string;
  orientation?: "horizontal" | "vertical";
  size?: "default" | "large";
  onNavigate?: () => void;
};

export function SiteNav({
  items,
  className = "",
  orientation = "horizontal",
  size = "default",
  onNavigate,
}: SiteNavProps) {
  const listClass =
    orientation === "vertical"
      ? size === "large"
        ? "flex flex-col gap-2"
        : "flex flex-col gap-1"
      : "flex flex-wrap items-center gap-1 sm:gap-2";

  const linkClass =
    size === "large"
      ? "block rounded-2xl px-4 py-3.5 text-lg font-medium text-foreground transition-colors hover:bg-primary/8 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      : "rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-primary/8 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

  return (
    <nav aria-label="Основная навигация" className={className}>
      <ul className={listClass}>
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={onNavigate} className={linkClass}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
