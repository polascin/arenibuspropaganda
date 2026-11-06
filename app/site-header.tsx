"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { focusRingClass, mutedLinkClass } from "./link-styles";
import ThemeToggle from "./theme-toggle";

type SiteHeaderProps = {
  /** Homepage: section anchors + mobile menu. Subpage: logo, theme toggle, back link. */
  variant?: "home" | "subpage";
};

/** `:focus` (not only `:focus-visible`) so the ring shows after programmatic focus on open. */
const mobileMenuLinkClass =
  "block text-foreground-2 hover:text-brand hover:bg-surface-2 rounded-lg transition-colors py-2.5 px-2 focus:outline-none focus:ring-2 focus:ring-brand/40 focus-visible:ring-2 focus-visible:ring-brand/40";

export default function SiteHeader({ variant = "home" }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = variant === "home";
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isHome || !mobileMenuOpen) return;
    firstMenuLinkRef.current?.focus();
  }, [isHome, mobileMenuOpen]);

  useEffect(() => {
    if (!isHome || !mobileMenuOpen) return;

    const main = document.getElementById("main-content");
    const footer = document.querySelector("footer");
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;

      const toggle = menuButtonRef.current;
      const menu = document.getElementById("mobile-menu");
      if (!toggle || !menu) return;

      const focusable = [toggle, ...menu.querySelectorAll<HTMLElement>("a[href]")];
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (e.shiftKey) {
        if (active === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [isHome, mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50">
      <nav className="w-full bg-surface border-b border-border" aria-label="Hlavná navigácia">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              aria-current={isHome ? "page" : undefined}
              className={`flex items-center gap-3 group rounded ${focusRingClass}`}
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden relative ring-1 ring-border">
                <Image
                  src="/logo-96.webp"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="40px"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  priority
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-brand-strong group-hover:text-brand transition-colors">
                Arenibus
              </span>
            </Link>
            {isHome ? (
              <div className="flex items-center space-x-4 md:space-x-8">
                <div className="hidden md:flex space-x-8">
                  <a href="#features" className={`nav-link ${mutedLinkClass}`}>Funkcie</a>
                  <a href="#demo" className={`nav-link ${mutedLinkClass}`}>Demo</a>
                  <a href="#contact" className={`nav-link ${mutedLinkClass}`}>Kontakt</a>
                </div>
                <ThemeToggle />
                <button
                  ref={menuButtonRef}
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`md:hidden p-2 rounded-lg bg-surface-2 border border-border hover:bg-surface-3 transition-colors ${focusRingClass}`}
                  aria-label={mobileMenuOpen ? "Zavrieť menu" : "Otvoriť menu"}
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  <svg className="w-5 h-5 text-foreground-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {mobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <Link href="/" className={mutedLinkClass}>
                  Späť na úvod
                </Link>
              </div>
            )}
          </div>
        </div>

        {isHome ? (
          <div
            id="mobile-menu"
            hidden={!mobileMenuOpen}
            className={mobileMenuOpen ? "md:hidden bg-surface border-b border-border" : "hidden"}
          >
            <div className="px-4 py-3 space-y-1">
              <a
                ref={firstMenuLinkRef}
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileMenuLinkClass}
              >
                Funkcie
              </a>
              <a
                href="#demo"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileMenuLinkClass}
              >
                Demo
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className={mobileMenuLinkClass}
              >
                Kontakt
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
