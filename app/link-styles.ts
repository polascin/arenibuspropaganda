/** Shared keyboard ring: kills the global `:focus-visible` outline. */
export const focusRingClass =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40";

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
