import Link from "next/link";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

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
        <SiteHeader variant="subpage" />

        <main id="main-content" className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 section-soft">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-sm font-semibold text-brand-strong mb-3">HTTP 404</p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Stránka sa nenašla
            </h1>
            <p className="text-foreground-2 mb-8 leading-relaxed">
              Požadovaná adresa na webe Arenibus neexistuje. Skontrolujte odkaz alebo sa vráťte na úvodnú stránku.
            </p>
            <Link
              href="/"
              className="btn-primary inline-flex items-center justify-center px-8 py-3.5 bg-brand text-brand-text rounded-lg font-semibold hover:bg-brand-strong shadow-brand"
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
