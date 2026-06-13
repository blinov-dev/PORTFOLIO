type LogoProps = {
  className?: string;
  /** Короткая подпись для узких экранов (header bar). */
  compact?: boolean;
  onNavigate?: () => void;
  /** Уникальный суффикс для SVG gradient id (header + drawer одновременно). */
  gradientId?: string;
};

function LogoMark({ gradientId }: { gradientId: string }) {
  const gradientRef = `logo-mark-gradient-${gradientId}`;

  return (
    <span className="logo-mark" aria-hidden="true">
      <svg
        className="logo-mark-svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={gradientRef}
            x1="4"
            y1="4"
            x2="32"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="hsl(265 62% 55%)" />
            <stop offset="0.55" stopColor="hsl(340 52% 56%)" />
            <stop offset="1" stopColor="hsl(158 42% 45%)" />
          </linearGradient>
        </defs>
        <rect
          x="1"
          y="1"
          width="34"
          height="34"
          rx="11"
          fill={`url(#${gradientRef})`}
        />
        <path
          d="M10 12h6M10 18h6M10 24h4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          className="logo-mark-grid"
        />
        <path
          d="M20 11v14M20 11h5.5a3 3 0 0 1 0 6H20M20 17h4.5a3 3 0 0 1 0 6H20"
          stroke="currentColor"
          strokeWidth="1.85"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="logo-mark-letter"
        />
        <circle cx="27" cy="9" r="2.25" className="logo-mark-dot" />
      </svg>
    </span>
  );
}

export function Logo({
  className = "",
  compact = false,
  onNavigate,
  gradientId = "header",
}: LogoProps) {
  return (
    <a
      href="#hero"
      onClick={onNavigate}
      className={`logo-brand ${className}`}
      aria-label="Александр Блинов — на главную"
    >
      <LogoMark gradientId={gradientId} />
      <span className="logo-text">
        {!compact ? (
          <>
            <span>Blinov.dev</span>
          </>
        ) : (
          null
        )}
      </span>
    </a>
  );
}
