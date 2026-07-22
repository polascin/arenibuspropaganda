"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      setDarkMode(saved === "true");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode to document
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
    // Save preference
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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
              <div className="w-10 h-10 rounded-lg overflow-hidden shadow-sm">
                <img src="/ArenibusLogo.png" alt="Arenibus Logo" className="w-full h-full object-cover" />
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
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-surface-2 border border-border hover:bg-surface-3 transition-colors"
                aria-label="Toggle dark mode"
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
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-surface-2 border border-border hover:bg-surface-3 transition-colors"
                aria-label="Menu"
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
            <a href="#features" className="block text-foreground-2 hover:text-brand transition-colors py-2">Funkcie</a>
            <a href="#demo" className="block text-foreground-2 hover:text-brand transition-colors py-2">Demo</a>
            <a href="#contact" className="block text-foreground-2 hover:text-brand transition-colors py-2">Kontakt</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="main-content" className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/ArenibusLogo.png"
              alt="Arenibus logo"
              width={384}
              height={384}
              className="w-96 h-96 mx-auto rounded-xl shadow-brand-lg object-cover"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nefrologický informačný systém
          </h1>
          <p className="text-xl md:text-2xl text-foreground-2 mb-8">
            Moderný .NET systém pre nefrologickú ambulanciu a dialyzačné stredisko, integrovaný s ezdravotníctvom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://demo.arenibus.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand text-brand-text rounded-lg font-semibold hover:bg-brand-strong transition-colors shadow-brand"
            >
              Skúsiť Demo Verziu
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
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Funkcie nefrologického a dialyzačného systému Arenibus v aktuálnej verzii
            <span className="block mt-2">(MVP = Minimum Viable Product)</span>
            <span className="block mt-1 text-2xl">(Minimálny životaschopný produkt)</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Správa Pacientov</h4>
              <p className="text-foreground-2">Registrácia, vyhľadávanie, úprava, alergie, medikácia s históriou, poučenia a informované súhlasy.</p>
            </div>

            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Evidencia Návštev</h4>
              <p className="text-foreground-2">Klinický zápis SOAP, KDIGO CGA, epikríza, dispenzarizácia, merania a vykonané výkony.</p>
            </div>

            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Dialyzačný Predpis</h4>
              <p className="text-foreground-2">Plný dialyzačný predpis podľa prevádzkových tabuliek, číselníky materiálu, mesačné kontroly.</p>
            </div>

            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Objednávanie Termínov</h4>
              <p className="text-foreground-2">Kalendár ambulancie a dialýzy, denný harmonogram, správa termínov pacientov.</p>
            </div>

            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Audit a Bezpečnosť</h4>
              <p className="text-foreground-2">Append-only audit log, audit čítaní pacientskych záznamov, OIDC autentifikácia.</p>
            </div>

            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Laboratórne Výsledky</h4>
              <p className="text-foreground-2">Trendová matica laboratórnych výsledkov, zápis panela odberu s referenčnými rozsahmi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4 bg-gradient-to-r from-brand-strong to-brand">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-brand-text mb-6">
            Vyskúšajte Arenibus MVP
          </h2>
          <p className="text-xl text-brand-text mb-8">
            Funkčné demo nefrologickej ambulancie s reálnou databázou. Fiktívne dáta sa každú noc obnovujú.
          </p>
          <a
            href="https://demo.arenibus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-surface text-brand rounded-lg font-semibold hover:bg-surface-2 transition-colors shadow-brand-lg text-lg"
          >
            Spustiť Demo Verziu
          </a>
          <p className="text-brand-text mt-4 text-sm">
            Demo verzia je k dispozícii na https://demo.arenibus.com/ (kontá: demo-lekar / demo-sestra)
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
                <h4 className="text-xl font-semibold text-foreground mb-4">Máte otázky?</h4>
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
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-brand mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+421917370474" className="text-foreground-2 hover:text-brand transition-colors">+421 917 370 474</a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-brand mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6a2 2 0 012-2zM7 8h2a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6a2 2 0 012-2z" />
                    </svg>
                    <a href="https://teams.microsoft.com/l/chat/0/0?users=polascin@outlook.com" target="_blank" rel="noopener noreferrer" className="text-foreground-2 hover:text-brand transition-colors">Microsoft Teams (polascin@outlook.com)</a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-brand mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <a href="https://wa.me/421917370474" target="_blank" rel="noopener noreferrer" className="text-foreground-2 hover:text-brand transition-colors">WhatsApp Business +421917370474</a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-brand mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2v-6a2 2 0 012-2zM9 10a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2v-4a2 2 0 00-2-2H9z" />
                    </svg>
                    <a href="https://discord.gg/7hxgQQba" target="_blank" rel="noopener noreferrer" className="text-foreground-2 hover:text-brand transition-colors">Discord server</a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-brand mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <a href="https://t.me/juzerni" target="_blank" rel="noopener noreferrer" className="text-foreground-2 hover:text-brand transition-colors">Telegram @juzerni</a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-brand mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <a href="https://signal.me/#u/Lubomir_Polascin.71" target="_blank" rel="noopener noreferrer" className="text-foreground-2 hover:text-brand transition-colors">Signal @Lubomir_Polascin.71</a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-brand mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                    <a href="https://x.com/polascin" target="_blank" rel="noopener noreferrer" className="text-foreground-2 hover:text-brand transition-colors">X.com @polascin</a>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Pošlite správu</h4>
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
                  {formStatus === "success" && (
                    <p className="text-ok font-medium text-center">Správa bola úspešne odoslaná. Čoskoro sa vám ozveme.</p>
                  )}
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
        </div>
      </footer>
    </div>
    </>
  );
}