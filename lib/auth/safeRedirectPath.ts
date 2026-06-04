/** Consente solo path interni (evita open redirect). */
export function safeRedirectPath(next: string | null | undefined, fallback = "/scegli-account"): string {
  if (!next || !next.startsWith("/") || next.startsWith("//")) {
    return fallback;
  }
  return next;
}
