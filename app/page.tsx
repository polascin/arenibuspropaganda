import Image from "next/image";
import { DEMO_VERSION } from "@/lib/site";
import ContactForm from "./contact-form";
import FeaturesSection from "./features-section";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

const DEMO_ACCESS_MAILTO =
  "mailto:arenibus@nephroctor.com" +
  "?subject=" +
  encodeURIComponent("Žiadosť o prístupové údaje k demo Arenibus") +
  "&body=" +
  encodeURIComponent(
    "Dobrý deň,\n\nprosím o zaslanie hesiel k demo kontám Arenibus (lekár / sestra).\n\nĎakujem."
  );

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand focus:text-brand-text focus:rounded-lg"
      >
        Preskočiť na hlavný obsah
      </a>
      <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />

      <main id="main-content" className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-start justify-center pt-10 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative w-full max-w-96 aspect-square mx-auto">
            <Image
              src="/logo-768.webp"
              alt="Arenibus logo"
              fill
              className="rounded-xl shadow-brand-lg object-cover"
              sizes="(max-width: 768px) 100vw, 384px"
              draggable={false}
              priority
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Nefrologický a dialyzačný informačný systém
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-soft text-brand-strong border border-brand/20 shadow-sm">
              Verzia {DEMO_VERSION} (MVP)
            </span>
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-warn-soft text-warn shadow-sm">
              Stále vo fáze pokročilého vývoja
            </span>
          </div>
          <p className="text-lg md:text-xl text-foreground-2 mb-8 max-w-3xl mx-auto">
            Moderný .NET systém pre nefrologickú ambulanciu a dialyzačné stredisko (hemodialýza HD a peritoneálna dialýza PD): dokumentácia návštev a ošetrení, registre podľa slovenskej legislatívy, vykazovanie poisťovniam a integrácia s ezdravotníctvom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://demo.arenibus.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand text-brand-text rounded-lg font-semibold hover:bg-brand-strong transition-colors shadow-brand"
            >
              Vyskúšať demo verziu
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-brand text-brand rounded-lg font-semibold hover:bg-brand hover:text-brand-text transition-colors"
            >
              Kontaktujte nás
            </a>
          </div>
        </div>
      </section>

      <FeaturesSection />

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4 bg-gradient-to-r from-brand-strong to-brand text-brand-text">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-surface text-brand-strong mb-4 shadow-sm">
            Živé demo prostredie {DEMO_VERSION}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-6">
            Vyskúšajte Arenibus v praxi
          </h2>
          <p className="text-lg md:text-xl text-brand-text mb-8 max-w-2xl mx-auto">
            Plne funkčná verzia pre nefrologickú ambulanciu a dialýzu. Všetky fiktívne dáta sa automaticky obnovujú každú noc o 03:00.
          </p>

          {/* Demo access: passwords on request. Solid surface cards so small text meets WCAG AA. */}
          <div className="bg-surface rounded-xl p-6 mb-8 border border-border max-w-2xl mx-auto text-left shadow-lg">
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
              Prístup do demo prostredia
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <div className="bg-surface-2 p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-foreground text-sm">Rola: LEKÁR</span>
                  <span className="text-xs bg-brand-soft text-brand-strong px-2 py-0.5 rounded font-medium">demo-lekar</span>
                </div>
                <div className="text-xs space-y-1.5 text-foreground-2">
                  <p>
                    <span>Prihlasovacie meno:</span>{" "}
                    <code className="bg-surface-3 px-1.5 py-0.5 rounded font-mono text-foreground">demo-lekar</code>
                  </p>
                  <p><span>Heslo:</span> na vyžiadanie</p>
                </div>
              </div>
              <div className="bg-surface-2 p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-foreground text-sm">Rola: SESTRA</span>
                  <span className="text-xs bg-brand-soft text-brand-strong px-2 py-0.5 rounded font-medium">demo-sestra</span>
                </div>
                <div className="text-xs space-y-1.5 text-foreground-2">
                  <p>
                    <span>Prihlasovacie meno:</span>{" "}
                    <code className="bg-surface-3 px-1.5 py-0.5 rounded font-mono text-foreground">demo-sestra</code>
                  </p>
                  <p><span>Heslo:</span> na vyžiadanie</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground-2 text-center mb-4">
              Demo heslá nie sú verejné. Pošlite žiadosť na{" "}
              <a
                href={DEMO_ACCESS_MAILTO}
                className="underline font-medium text-brand hover:text-brand-strong transition-colors"
              >
                arenibus@nephroctor.com
              </a>
              {" "}a zašleme vám ich.
            </p>
            <a
              href={DEMO_ACCESS_MAILTO}
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-brand text-brand-text rounded-lg font-semibold hover:bg-brand-strong transition-colors"
            >
              Požiadať o demo heslo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          <a
            href="https://demo.arenibus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-surface text-brand rounded-lg font-semibold hover:bg-surface-2 transition-colors shadow-brand-lg text-lg"
          >
            Spustiť demo verziu (demo.arenibus.com)
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <p className="text-brand-text mt-4 text-sm max-w-xl mx-auto">
            Prihlásenie v spustenom deme prebieha cez ePZP / OIDC (Keycloak).
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Kontaktujte nás
          </h2>
          <div className="bg-surface-2 p-8 rounded-lg shadow-brand border border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Máte otázky?</h3>
                <p className="text-foreground-2 mb-6">
                  Kontaktujte nás pre viac informácií o systéme Arenibus, cenách alebo demonštrácii.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-brand mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:arenibus@polascin.net" className="text-foreground-2 hover:text-brand transition-colors">arenibus@polascin.net</a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Pošlite správu</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      <SiteFooter />
    </div>
    </>
  );
}
