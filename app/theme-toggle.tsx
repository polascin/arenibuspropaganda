"use client";

import { useEffect, useSyncExternalStore } from "react";

function getDarkModeSnapshot() {
  if (typeof window === "undefined") return false;
  const saved = localStorage.getItem("darkMode");
  if (saved !== null) return saved === "true";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getDarkModeServerSnapshot() {
  return false;
}

function subscribeDarkMode(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const onStorage = (e: StorageEvent) => {
    if (e.key === "darkMode") callback();
  };
  const onMedia = () => {
    if (localStorage.getItem("darkMode") === null) callback();
  };
  window.addEventListener("storage", onStorage);
  mq.addEventListener("change", onMedia);
  return () => {
    window.removeEventListener("storage", onStorage);
    mq.removeEventListener("change", onMedia);
  };
}

export default function ThemeToggle() {
  const darkMode = useSyncExternalStore(
    subscribeDarkMode,
    getDarkModeSnapshot,
    getDarkModeServerSnapshot
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    localStorage.setItem("darkMode", newMode.toString());
    document.documentElement.setAttribute("data-theme", newMode ? "dark" : "light");
    window.dispatchEvent(new StorageEvent("storage", { key: "darkMode" }));
  };

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-surface-2 border border-border hover:bg-surface-3 transition-colors"
      aria-label="Prepnúť tmavý režim"
      aria-pressed={darkMode}
    >
      {darkMode ? (
        <svg className="w-5 h-5 text-foreground-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-foreground-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}
