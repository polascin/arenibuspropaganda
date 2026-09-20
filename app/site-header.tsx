"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./theme-toggle";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50">
      <nav className="w-full bg-surface/80 backdrop-blur-sm border-b border-border" aria-label="Hlavná navigácia">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden shadow-sm relative">
                <Image
                  src="/logo-96.webp"
                  alt="Arenibus logo"
                  fill
                  className="object-cover"
                  sizes="40px"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  priority
                />
              </div>
              <p className="text-2xl font-bold text-brand-strong">Arenibus</p>
            </Link>
            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="hidden md:flex space-x-8">
                <a href="#features" className="text-foreground-2 hover:text-brand transition-colors">Funkcie</a>
                <a href="#demo" className="text-foreground-2 hover:text-brand transition-colors">Demo</a>
                <a href="#contact" className="text-foreground-2 hover:text-brand transition-colors">Kontakt</a>
              </div>
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-surface-2 border border-border hover:bg-surface-3 transition-colors"
                aria-label="Otvoriť alebo zavrieť menu"
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
          </div>
        </div>
      </nav>

      {/* Keep in DOM so aria-controls always resolves */}
      <div
        id="mobile-menu"
        hidden={!mobileMenuOpen}
        className={mobileMenuOpen ? "md:hidden bg-surface border-b border-border" : "hidden"}
      >
        <div className="px-4 py-3 space-y-2">
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-foreground-2 hover:text-brand transition-colors py-2">Funkcie</a>
          <a href="#demo" onClick={() => setMobileMenuOpen(false)} className="block text-foreground-2 hover:text-brand transition-colors py-2">Demo</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-foreground-2 hover:text-brand transition-colors py-2">Kontakt</a>
        </div>
      </div>
    </header>
  );
}
