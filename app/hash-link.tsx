"use client";

import type { ReactNode } from "react";

/** Move keyboard focus into an in-page hash target after the native scroll. */
export function focusHashTarget(href: string) {
  const id = href.startsWith("#") ? href.slice(1) : "";
  if (!id) return;
  window.setTimeout(() => {
    document.getElementById(id)?.focus({ preventScroll: false });
  }, 0);
}

export default function HashLink({
  href,
  className,
  children,
}: {
  href: `#${string}`;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className={className} onClick={() => focusHashTarget(href)}>
      {children}
    </a>
  );
}
