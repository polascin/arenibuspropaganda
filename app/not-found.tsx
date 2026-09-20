import Image from "next/image";
import Link from "next/link";
import SiteFooter from "./site-footer";
import ThemeToggle from "./theme-toggle";

export default function NotFound() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand focus:text-brand-text focus:rounded-lg"
      >
        Preskočiť na hlavný obsah
      </a>
      <div className="flex flex-col min-h-screen bg-background">
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
                      priority
                    />
                  </div>
                  <p className="text-2xl font-bold text-brand-strong">Arenibus</p>
                </Link>
                <div className="flex items-center gap-3">
                  <ThemeToggle />
                  <Link href="/" className="text-foreground-2 hover:text-brand transition-colors">
                    Späť na úvod
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main id="main-content" className="flex-1 flex items-center justify-center py-16 px-4 bg-surface">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-sm font-semibold text-brand-strong mb-3">HTTP 404</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stránka sa nenašla
            </h1>
            <p className="text-foreground-2 mb-8">
              Požadovaná adresa na webe Arenibus neexistuje. Skontrolujte odkaz alebo sa vráťte na úvodnú stránku.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand text-brand-text rounded-lg font-semibold hover:bg-brand-strong transition-colors shadow-brand"
            >
              Prejsť na úvod
            </Link>
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
