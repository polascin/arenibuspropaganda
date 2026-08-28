"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

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
  const handler = (e: StorageEvent) => {
    if (e.key === "darkMode") callback();
  };
  window.addEventListener("storage", handler);
  return () => window.removeEventListener("storage", handler);
}

export default function Home() {
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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldId: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedField(fieldId);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mvzebqzj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand focus:text-brand-text focus:rounded-lg"
      >
        Preskočiť na hlavný obsah
      </a>
      <div className="flex flex-col min-h-screen bg-background">
      {/* Navigation */}
      <nav className="w-full bg-surface/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
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
            </div>
            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="hidden md:flex space-x-8">
                <a href="#features" className="text-foreground-2 hover:text-brand transition-colors">Funkcie</a>
                <a href="#demo" className="text-foreground-2 hover:text-brand transition-colors">Demo</a>
                <a href="#contact" className="text-foreground-2 hover:text-brand transition-colors">Kontakt</a>
              </div>
              <button
                type="button"
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-surface-2 border border-border hover:bg-surface-3 transition-colors"
                aria-label="Prepnúť tmavý režim"
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
              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-surface-2 border border-border hover:bg-surface-3 transition-colors"
                aria-label="Otvoriť alebo zavrieť menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <svg className="w-5 h-5 text-foreground-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-surface border-b border-border">
          <div className="px-4 py-3 space-y-2">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-foreground-2 hover:text-brand transition-colors py-2">Funkcie</a>
            <a href="#demo" onClick={() => setMobileMenuOpen(false)} className="block text-foreground-2 hover:text-brand transition-colors py-2">Demo</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-foreground-2 hover:text-brand transition-colors py-2">Kontakt</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="main-content" className="flex-1 flex items-start justify-center pt-10 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative w-full max-w-96 aspect-square mx-auto">
            <Image
              src="/logo-768.webp"
              alt="Arenibus logo"
              fill
              className="rounded-xl shadow-brand-lg object-cover"
              sizes="(max-width: 768px) 100vw, 384px"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              priority
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Nefrologický a dialyzačný informačný systém
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-soft text-brand-strong border border-brand/20 shadow-sm">
              Verzia v0.16.17 (MVP)
            </span>
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-warn-soft text-warn shadow-sm">
              Stále vo fáze pokročilého vývoja
            </span>
          </div>
          <p className="text-lg md:text-xl text-foreground-2 mb-8 max-w-3xl mx-auto">
            Moderný .NET systém pre nefrologickú ambulanciu a dialyzačné stredisko (hemodialýza HD &amp; peritoneálna dialýza PD), integrovaný s ezdravotníctvom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://demo.arenibus.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand text-brand-text rounded-lg font-semibold hover:bg-brand-strong transition-colors shadow-brand"
            >
              Vyskúšať Demo Verziu
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-brand text-brand rounded-lg font-semibold hover:bg-brand hover:text-brand-text transition-colors"
            >
              Kontaktujte Nás
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Funkcie systému Arenibus v aktuálnej verzii (v0.16.17)
          </h2>
          <p className="text-center text-foreground-2 text-lg mb-12 max-w-2xl mx-auto">
            Kompletný prehľad modulov implementovaných v živom demo prostredí.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature Cards */}
            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Správa Pacientov</h3>
              <p className="text-foreground-2 text-sm leading-relaxed">
                Registrácia nového pacienta, rýchle vyhľadávanie, alergie, kompletná medikácia s históriou, poučenia a informované súhlasy.
              </p>
            </div>

            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Evidencia Návštev</h3>
              <p className="text-foreground-2 text-sm leading-relaxed">
                Klinické zápisy (SOAP), klasifikácia CKD štádií (KDIGO CGA), epikríza, dispenzarizácia, meranie vitálnych funkcií a lekárske výkony.
              </p>
            </div>

            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Hemodialýza &amp; Predpis</h3>
              <p className="text-foreground-2 text-sm leading-relaxed">
                Dialyzačné predpisy podľa prevádzkových tabuliek, číselníky materiálu (dialyzátory, kanyly, koncentráty), rozpis ošetrení HD a mesačné kontroly.
              </p>
            </div>

            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Peritoneálna Dialýza (PD)</h3>
              <p className="text-foreground-2 text-sm leading-relaxed">
                Špecializovaný program pre pacientov na peritoneálnej dialýze, evidencia PD predpisov, výmen a zaradenia pacientov do programu.
              </p>
            </div>

            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Kalendár &amp; Harmonogram</h3>
              <p className="text-foreground-2 text-sm leading-relaxed">
                Kalendár ambulancie a dialyzačných smien, dnešné termíny, čakajúce ošetrenia, denný rozpis a správa objednávok.
              </p>
            </div>

            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Laboratórne Výsledky</h3>
              <p className="text-foreground-2 text-sm leading-relaxed">
                Trendová matica výsledkov s časovým vývojom, zápis odberových panelov, referenčné rozsahy a výpočet korigovaných hodnôt.
              </p>
            </div>

            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Moje Zoznamy &amp; Štatistiky</h3>
              <p className="text-foreground-2 text-sm leading-relaxed">
                Vlastné zoznamy pacientov podľa diagnóz a skupín, prevádzkové štatistiky a sledovanie indikátorov kvality.
              </p>
            </div>

            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Audit &amp; Bezpečnosť</h3>
              <p className="text-foreground-2 text-sm leading-relaxed">
                Append-only audit log, evidencia prístupov k pacientskym záznamom, prihlásenie cez Keycloak (OIDC / ePZP simulácia).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4 bg-gradient-to-r from-brand-strong to-brand text-brand-text">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-surface/20 text-brand-text mb-4 backdrop-blur-xs">
            Živé demo prostredie v0.16.17
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-6">
            Vyskúšajte Arenibus v praxi
          </h2>
          <p className="text-lg md:text-xl text-brand-text/90 mb-8 max-w-2xl mx-auto">
            Plne funkčná verzia pre nefrologickú ambulanciu a dialýzu. Všetky fiktívne dáta sa automaticky obnovujú každú noc o 03:00.
          </p>

          {/* Interactive Demo Credentials Box */}
          <div className="bg-surface/10 backdrop-blur-md rounded-xl p-6 mb-8 border border-white/20 max-w-2xl mx-auto text-left shadow-lg">
            <h3 className="text-lg font-semibold text-brand-text mb-4 text-center">
              Prihlasovacie údaje pre demo kontá:
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Doctor Credentials Card */}
              <div className="bg-surface/20 p-4 rounded-lg border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-brand-text text-sm">Rola: LEKÁR</span>
                    <span className="text-xs bg-brand-soft text-brand-strong px-2 py-0.5 rounded font-medium">demo-lekar</span>
                  </div>
                  <div className="text-xs space-y-1.5 text-brand-text/90">
                    <p><span className="opacity-75">Prihlasovacie meno:</span> <code className="bg-black/20 px-1.5 py-0.5 rounded font-mono text-white">demo-lekar</code></p>
                    <p><span className="opacity-75">Heslo:</span> <code className="bg-black/20 px-1.5 py-0.5 rounded font-mono text-white">lekar</code></p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("demo-lekar / lekar", "lekar")}
                  className="mt-3 text-xs w-full py-1.5 px-3 bg-surface/30 hover:bg-surface/40 text-brand-text rounded transition-colors flex items-center justify-center gap-1.5 font-medium cursor-pointer"
                >
                  {copiedField === "lekar" ? "✓ Skopírované!" : "Kopírovať údaje lekára"}
                </button>
              </div>

              {/* Nurse Credentials Card */}
              <div className="bg-surface/20 p-4 rounded-lg border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-brand-text text-sm">Rola: SESTRA</span>
                    <span className="text-xs bg-brand-soft text-brand-strong px-2 py-0.5 rounded font-medium">demo-sestra</span>
                  </div>
                  <div className="text-xs space-y-1.5 text-brand-text/90">
                    <p><span className="opacity-75">Prihlasovacie meno:</span> <code className="bg-black/20 px-1.5 py-0.5 rounded font-mono text-white">demo-sestra</code></p>
                    <p><span className="opacity-75">Heslo:</span> <code className="bg-black/20 px-1.5 py-0.5 rounded font-mono text-white">sestra</code></p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("demo-sestra / sestra", "sestra")}
                  className="mt-3 text-xs w-full py-1.5 px-3 bg-surface/30 hover:bg-surface/40 text-brand-text rounded transition-colors flex items-center justify-center gap-1.5 font-medium cursor-pointer"
                >
                  {copiedField === "sestra" ? "✓ Skopírované!" : "Kopírovať údaje sestry"}
                </button>
              </div>
            </div>
          </div>

          <a
            href="https://demo.arenibus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-surface text-brand rounded-lg font-semibold hover:bg-surface-2 transition-colors shadow-brand-lg text-lg"
          >
            Spustiť Demo Verziu (demo.arenibus.com)
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <p className="text-brand-text/80 mt-4 text-sm max-w-xl mx-auto">
            Prihlásenie v spustenom deme prebieha cez autentifikačný server Keycloak (OIDC simulácia ePZP).
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Kontaktujte Nás
          </h2>
          <div className="bg-surface-2 p-8 rounded-lg shadow-brand border border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Máte otázky?</h3>
                <p className="text-foreground-2 mb-6">
                  Kontaktujte nás pre viac informácií o Arenibus systéme, cenách alebo demonštrácii.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-brand mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:arenibus@polascin.net" className="text-foreground-2 hover:text-brand transition-colors">arenibus@polascin.net</a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Pošlite správu</h3>
                <form onSubmit={handleContactSubmit} className="space-y-4" aria-label="Kontaktný formulár">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">Vaše meno</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Vaše meno"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent bg-surface text-foreground"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="sr-only">Váš email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Váš email"
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent bg-surface text-foreground"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="sr-only">Vaša správa</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Vaša správa"
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent bg-surface text-foreground"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full px-6 py-3 bg-brand text-brand-text rounded-lg font-semibold hover:bg-brand-strong transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === "submitting" ? "Odosielam..." : "Odoslať Správu"}
                  </button>
                  {/* Persistent live region so async outcomes are announced reliably */}
                  <p
                    role="status"
                    aria-live="polite"
                    className={
                      formStatus === "success"
                        ? "text-ok font-medium text-center"
                        : formStatus === "error"
                          ? "text-danger font-medium text-center"
                          : "sr-only"
                    }
                  >
                    {formStatus === "success" && "Správa bola úspešne odoslaná. Čoskoro sa vám ozveme."}
                    {formStatus === "error" && "Správu sa nepodarilo odoslať. Skúste to prosím znova alebo nám napíšte e-mail."}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-3 text-foreground py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-foreground-2">
            Arenibus © 2026 Ľubomír Polaščín
          </p>
          <p className="text-muted mt-2 text-sm">
            MUDr. Ľubomír Polaščín — Nephroctor
          </p>
          <p className="text-muted mt-1 text-sm">
            IČO 57646856
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <Link href="/privacy/" className="text-muted hover:text-brand transition-colors">
              Ochrana osobných údajov
            </Link>
            <Link href="/terms/" className="text-muted hover:text-brand transition-colors">
              Podmienky používania
            </Link>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}