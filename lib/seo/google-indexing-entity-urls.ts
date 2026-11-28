import { localizedPath } from "@/lib/i18n/routing";
import { canonicalUrl } from "@/lib/seo/canonical";

/** URL entity P0 — stesso set concettuale di scripts/submit-indexnow-entity.mjs */
const INTERNAL_PATHS = [
  "/",
  "/cos-e-hotelsdrop",
  "/glossario",
  "/guide/reverse-booking",
  "/guide/viaggi-di-gruppo",
  "/guide/agenzie-viaggio",
  "/destinazioni",
  "/destinazioni/roma",
  "/destinazioni/milano",
  "/destinazioni/firenze",
  "/destinazioni/napoli",
  "/destinazioni/venezia",
  "/destinazioni/bologna",
  "/destinazioni/torino",
  "/destinazioni/palermo",
] as const;

export function listGoogleIndexingEntityUrls(): string[] {
  const urls: string[] = [];
  for (const internal of INTERNAL_PATHS) {
    if (internal === "/") {
      urls.push(canonicalUrl(localizedPath("it", "/")), canonicalUrl(localizedPath("en", "/")));
      continue;
    }
    if (internal === "/destinazioni") {
      urls.push(
        canonicalUrl(localizedPath("it", "/destinazioni")),
        canonicalUrl(localizedPath("en", "/destinations")),
      );
      continue;
    }
    if (internal.startsWith("/destinazioni/")) {
      const slug = internal.slice("/destinazioni/".length);
      urls.push(
        canonicalUrl(localizedPath("it", `/destinazioni/${slug}`)),
        canonicalUrl(localizedPath("en", `/destinations/${slug}`)),
      );
      continue;
    }
    if (internal.startsWith("/guide/")) {
      const slug = internal.slice("/guide/".length);
      const enSlug =
        slug === "viaggi-di-gruppo"
          ? "group-travel"
          : slug === "agenzie-viaggio"
            ? "travel-agencies"
            : slug;
      urls.push(
        canonicalUrl(localizedPath("it", `/guide/${slug}`)),
        canonicalUrl(localizedPath("en", `/guides/${enSlug}`)),
      );
      continue;
    }
    urls.push(canonicalUrl(localizedPath("it", internal)), canonicalUrl(localizedPath("en", internal)));
  }
  return [...new Set(urls)];
}