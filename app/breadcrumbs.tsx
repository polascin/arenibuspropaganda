import Link from "next/link";

export default function Breadcrumbs({ currentLabel }: { currentLabel: string }) {
  return (
    <nav aria-label="Drobečková navigácia" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        <li className="flex items-center gap-2">
          <Link href="/" className="text-brand hover:text-brand-strong transition-colors">
            Arenibus
          </Link>
          <span aria-hidden="true" className="text-muted">
            /
          </span>
        </li>
        <li aria-current="page" className="text-foreground-2">
          {currentLabel}
        </li>
      </ol>
    </nav>
  );
}
