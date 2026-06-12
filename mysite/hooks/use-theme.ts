"use client";

import { useCallback, useSyncExternalStore } from "react";
import {
  DEFAULT_THEME,
  getDocumentTheme,
  persistTheme,
  type Theme,
} from "@/lib/theme";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("theme-change", onStoreChange);
  return () => window.removeEventListener("theme-change", onStoreChange);
}

function getServerSnapshot(): Theme {
  return DEFAULT_THEME;
}

export function useTheme() {
  const theme = useSyncExternalStore(
    subscribe,
    getDocumentTheme,
    getServerSnapshot,
  );

  const setTheme = useCallback((next: Theme) => {
    persistTheme(next);
  }, []);

  const toggleTheme = useCallback(() => {
    persistTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  return { theme, setTheme, toggleTheme };
}
