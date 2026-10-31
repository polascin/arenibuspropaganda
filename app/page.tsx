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
      {/* Hero: brand first, one composition, full-bleed atmosphere */}
      <section className="hero-atmosphere flex-1 flex items-center justify-center pt-12 pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center w-full">
          <div className="motion-fade-up mb-8 relative w-full max-w-[22rem] sm:max-w-md aspect-square mx-auto">
            <Image
              src="/logo-768.webp"
              alt="Arenibus logo"
              fill
              className="object-cover rounded-brand-lg"
              sizes="(max-width: 640px) 88vw, 448px"
              draggable={false}
              priority
            />
          </div>
          <h1 className="motion-fade-up-delay text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-brand-strong mb-4">
            Arenibus
          </h1>
          <p className="motion-fade-up-delay text-xl md:text-2xl font-medium text-foreground mb-5 leading-snug max-w-2xl mx-auto">
            Nefrologický a dialyzačný informačný systém
          </p>
          <p className="motion-fade-up-delay-2 text-base md:text-lg text-foreground-2 mb-4 max-w-2xl mx-auto leading-relaxed">
            Moderný .NET systém pre nefrologickú ambulanciu a dialýzu (HD, PD): dokumentácia, registre podľa slovenskej legislatívy, vykazovanie poisťovniam a ezdravotníctvo.
          </p>
          <p className="motion-fade-up-delay-2 text-sm text-muted mb-9">
            Verzia {DEMO_VERSION} (MVP). Stále vo fáze pokročilého vývoja.
          </p>
          <div className="motion-fade-up-delay-2 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://demo.arenibus.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3.5 bg-brand text-brand-text rounded-lg font-semibold hover:bg-brand-strong shadow-brand"
            >
              Vyskúšať demo verziu
            </a>
            <a
              href="#contact"
              className="btn-secondary px-8 py-3.5 bg-transparent border-2 border-brand text-brand rounded-lg font-semibold hover:bg-brand hover:text-brand-text"
            >
              Kontaktujte nás
            </a>
          </div>
        </div>
      </section>

      <FeaturesSection />

      {/* Demo Section */}
      <section id="demo" className="py-24 px-4 sm:px-6 bg-gradient-to-br from-brand-strong via-brand to-brand-strong text-brand-text">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-wide uppercase text-brand-text mb-3">
            Živé demo {DEMO_VERSION}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-text mb-5">
            Vyskúšajte Arenibus v praxi
          </h2>
          <p className="text-lg md:text-xl text-brand-text mb-10 max-w-2xl mx-auto leading-relaxed">
            Plne funkčná verzia pre nefrologickú ambulanciu a dialýzu. Všetky fiktívne dáta sa automaticky obnovujú každú noc o 03:00.
          </p>

          {/* Demo access: passwords on request. Solid surface so small text meets WCAG AA. */}
          <div className="bg-surface rounded-brand-lg p-6 sm:p-8 mb-10 border border-border/60 max-w-2xl mx-auto text-left shadow-brand-lg">
            <h3 className="text-lg font-semibold text-foreground mb-5 text-center tracking-tight">
              Prístup do demo prostredia
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <div className="bg-surface-2 p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between gap-2 mb-2">
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
                <div className="flex items-center justify-between gap-2 mb-2">
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
            <p className="text-sm text-foreground-2 text-center mb-4 leading-relaxed">
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
              className="btn-primary inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-brand text-brand-text rounded-lg font-semibold hover:bg-brand-strong"
            >
              Požiadať o demo heslo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          <a
            href="https://demo.arenibus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 bg-surface text-brand rounded-lg font-semibold hover:bg-surface-2 shadow-brand-lg text-base md:text-lg"
          >
            Spustiť demo verziu (demo.arenibus.com)
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <p className="text-brand-text mt-5 text-sm max-w-xl mx-auto">
            Prihlásenie v spustenom deme prebieha cez ePZP / OIDC (Keycloak).
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-soft py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-foreground mb-3">
            Kontaktujte nás
          </h2>
          <p className="text-center text-foreground-2 mb-12 max-w-xl mx-auto">
            Otázky o systéme Arenibus, cenách alebo demonštrácii.
          </p>
          <div className="border-t border-border pt-10">
            <div className="grid md:grid-cols-2 gap-10 md:gap-12">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground mb-3">Máte otázky?</h3>
                <p className="text-foreground-2 mb-6 leading-relaxed">
                  Napíšte nám na e-mail alebo použite formulár. Ozveme sa čo najskôr.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-brand mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:arenibus@polascin.net" className="text-foreground-2 hover:text-brand transition-colors">arenibus@polascin.net</a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground mb-4">Pošlite správu</h3>
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
