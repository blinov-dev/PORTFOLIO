import type { CSSProperties, ElementType, ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
  accent?: boolean;
  accentOffset?: string;
};

export function SectionHeading({
  children,
  className = "",
  as: Tag = "h2",
  id,
  accent = true,
  accentOffset,
}: SectionHeadingProps) {
  return (
    <Tag
      id={id}
      className={[
        "section-heading",
        accent ? "section-heading--accent" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        accentOffset
          ? ({ "--section-heading-accent-left": accentOffset } as CSSProperties)
          : undefined
      }
    >
      <span className="section-heading__inner">{children}</span>
    </Tag>
  );
}
