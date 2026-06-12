"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { contacts } from "@/lib/content/contacts";
import type { NavItem } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { SiteNav } from "./site-nav";

type MobileMenuProps = {
  items: NavItem[];
};

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
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
              className="fixed inset-0 z-[100] bg-foreground/25 backdrop-blur-sm transition-opacity"
              onClick={close}
            />

            <aside
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Мобильное меню"
              className="drawer-panel glass-surface fixed right-0 top-0 z-[101] flex h-dvh w-[min(92vw,22rem)] flex-col border-l border-border/60 shadow-2xl"
            >
              <div className="flex items-center justify-between gap-3 border-b border-border/50 px-5 py-4">
                <span className="text-sm font-semibold">Меню</span>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <button
                    type="button"
                    aria-label="Закрыть меню"
                    onClick={close}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-border/60 bg-muted/50 text-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
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
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-6">
                <SiteNav
                  items={items}
                  orientation="vertical"
                  size="large"
                  onNavigate={close}
                />
              </div>

              <div className="mt-auto space-y-4 border-t border-border/50 px-5 py-5">
                <Button
                  href="#contacts"
                  className="w-full"
                  onClick={close}
                >
                  Написать
                </Button>
                <div className="flex flex-col gap-1 text-xs">
                  {contacts.slice(0, 2).map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.href!}
                      onClick={close}
                      className="text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      {...(contact.href!.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {contact.value}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        onClick={() => setOpen((prev) => !prev)}
        className="glass-surface inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 6h14M3 10h14M3 14h14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {drawer}
    </>
  );
}
