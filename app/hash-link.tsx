"use client";

import { forwardRef, type MouseEvent, type ReactNode } from "react";

/** Move keyboard focus into an in-page hash target after the native scroll. */
export function focusHashTarget(href: string) {
  const id = href.startsWith("#") ? href.slice(1) : "";
  if (!id) return;
  window.setTimeout(() => {
    document.getElementById(id)?.focus({ preventScroll: false });
  }, 0);
}

type HashLinkProps = {
  href: `#${string}`;
  className?: string;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

const HashLink = forwardRef<HTMLAnchorElement, HashLinkProps>(
  function HashLink({ href, className, children, onClick }, ref) {
    return (
      <a
        ref={ref}
        href={href}
        className={className}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) focusHashTarget(href);
        }}
      >
        {children}
      </a>
    );
  },
);

export default HashLink;
