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
        ? "flex flex-col gap-3"
        : "flex flex-col gap-2"
      : "flex flex-wrap items-center gap-1.5";

  const linkClass =
    size === "large" ? "nav-link nav-link--drawer" : "nav-link";

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
