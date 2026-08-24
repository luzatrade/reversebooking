/** Slug hotel rimossi dal catalogo — risposta 410 Gone per de-indicizzazione Google. */
const REMOVED_HOTEL_SLUGS = new Set([
  "bb-tortona-milano",
]);

export function isRemovedHotelSlug(slug: string | null | undefined): boolean {
  if (!slug?.trim()) return false;
  return REMOVED_HOTEL_SLUGS.has(slug.trim().toLowerCase());
}

export function extractHotelSlugFromPathname(pathname: string): string | null {
  const match = pathname.match(/\/hotel\/([^/?#]+)/i);
  return match?.[1]?.toLowerCase() ?? null;
}
