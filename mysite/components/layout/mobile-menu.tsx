"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import type { NavItem } from "@/lib/site-config";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Logo } from "./logo";
import { SiteNav } from "./site-nav";

type MobileMenuProps = {
  items: NavItem[];
};

function useIsClient() {
  return useSyncExternalStore(
    () => () => { },
    () => true,
    () => false,
  );
}

function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6.5h14M4 11h14M4 15.5h10"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 5l10 10M15 5L5 15"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MobileMenu({ items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const isClient = useIsClient();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  const drawer =
    open && isClient
      ? createPortal(
        <>
          <button
            type="button"
            aria-label="Закрыть меню"
            className="drawer-overlay fixed inset-0 z-[100] cursor-pointer bg-foreground/25 backdrop-blur-sm"
            onClick={close}
          />

          <aside
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Мобильное меню"
            className="drawer-panel glass-surface fixed right-0 top-0 z-[101] flex h-dvh w-[min(92vw,22rem)] flex-col border-l border-border/60 shadow-2xl"
          >
            <div className="flex items-center justify-between gap-3 border-b border-border/50 px-4 py-4 sm:px-5">
              <Logo
                className="min-w-0 shrink"
                gradientId="drawer"
                onNavigate={close}
              />
              <div className="flex shrink-0 items-center gap-2">
                <ThemeToggle />
                <button
                  type="button"
                  aria-label="Закрыть меню"
                  onClick={close}
                  className="header-icon-btn inline-flex cursor-pointer items-center justify-center"
                >
                  <CloseIcon />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-5">
              <SiteNav
                items={items}
                orientation="vertical"
                size="large"
                onNavigate={close}
              />
            </div>
          </aside>
        </>,
        document.body,
      )
      : null;

  return (
    <>
      {!open && (
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Открыть меню"
          onClick={() => setOpen(true)}
          className="header-icon-btn inline-flex cursor-pointer items-center justify-center lg:hidden"
        >
          <MenuIcon />
        </button>
      )}

      {drawer}
    </>
  );
}
