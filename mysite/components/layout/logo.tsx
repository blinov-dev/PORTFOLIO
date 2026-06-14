import Image from "next/image";

type LogoProps = {
  className?: string;
  /** Короткая подпись для узких экранов (header bar). */
  compact?: boolean;
  onNavigate?: () => void;
};

function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <Image
        src="/images/logo.webp"
        alt=""
        width={36}
        height={36}
        className="logo-mark-img"
        priority
      />
    </span>
  );
}

export function Logo({
  className = "",
  compact = false,
  onNavigate,
}: LogoProps) {
  return (
    <a
      href="#hero"
      onClick={onNavigate}
      className={`logo-brand ${className}`}
      aria-label="Александр Блинов — на главную"
    >
      <LogoMark />
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
