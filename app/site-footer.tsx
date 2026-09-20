import Link from "next/link";

type FooterPage = "home" | "privacy" | "terms";

export default function SiteFooter({ current = "home" }: { current?: FooterPage }) {
  return (
    <footer className="bg-surface-3 text-foreground py-8 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-foreground-2">
          Arenibus © 2024–2026 Ľubomír Polaščín
        </p>
        <p className="text-muted mt-2 text-sm">
          MUDr. Ľubomír Polaščín — Nephroctor
        </p>
        <p className="text-muted mt-1 text-sm">
          IČO 57646856
        </p>
        <div className="mt-4 flex justify-center gap-6 text-sm">
          <Link
            href="/privacy/"
            aria-current={current === "privacy" ? "page" : undefined}
            className="text-muted hover:text-brand transition-colors"
          >
            Ochrana osobných údajov
          </Link>
          <Link
            href="/terms/"
            aria-current={current === "terms" ? "page" : undefined}
            className="text-muted hover:text-brand transition-colors"
          >
            Podmienky používania
          </Link>
        </div>
      </div>
    </footer>
  );
}
