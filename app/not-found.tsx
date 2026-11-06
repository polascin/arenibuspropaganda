import type { Metadata } from "next";
import { NOT_FOUND_DESCRIPTION, NOT_FOUND_TITLE } from "@/lib/site";
import NotFoundShell from "./not-found-shell";

export const metadata: Metadata = {
  title: NOT_FOUND_TITLE,
  description: NOT_FOUND_DESCRIPTION,
  // Next injects robots noindex for not-found; avoid a second conflicting robots meta.
  // Do not set alternates.canonical — a 404 must not claim the homepage URL.
};

/** In-layout 404 when `notFound()` is thrown. Next injects robots noindex. */
export default function NotFound() {
  return <NotFoundShell />;
}
