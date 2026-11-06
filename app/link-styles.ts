/** Shared keyboard ring: kills the global `:focus-visible` outline. */
export const focusRingClass =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40";

/**
 * Same ring for programmatic `.focus()` (mobile menu open), which does not
 * set `:focus-visible` in every browser.
 */
export const programmaticFocusRingClass =
  "focus:outline-none focus:ring-2 focus:ring-brand/40 focus-visible:ring-2 focus-visible:ring-brand/40";

/** Inline brand links in legal copy, mailto, and in-page anchors. */
export const proseLinkClass =
  `text-brand hover:text-brand-strong transition-colors ${focusRingClass} rounded`;

/** Softer contact/nav-adjacent text links on the homepage. */
export const mutedLinkClass =
  `text-foreground-2 hover:text-brand transition-colors ${focusRingClass} rounded`;

/** Footer nav links (muted default, brand on hover/focus). */
export const footerLinkClass =
  `text-muted hover:text-brand transition-colors ${focusRingClass} rounded`;

/** Text/select/textarea fields (stronger full-brand ring than links). */
export const fieldFocusClass =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:border-transparent";
