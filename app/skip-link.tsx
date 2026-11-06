/** First-focus skip control shared by every route. */
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:!fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand focus:text-brand-text focus:rounded-lg focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand-text"
    >
      Preskočiť na hlavný obsah
    </a>
  );
}
