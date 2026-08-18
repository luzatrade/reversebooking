import type { Locale } from "@/lib/i18n/translations";
import { isDeHubSlug } from "@/lib/seo/de-export-content";
import { isZhHubSlug } from "@/lib/seo/zh-export-content";

export type HubSeoLocale = "de" | "zh";

export function isHubSeoLocale(locale: Locale): locale is HubSeoLocale {
  return locale === "de" || locale === "zh";
}

/** Hub-only SEO locales reuse the English hotel catalog URLs. */
export function usesEnglishHotelCatalog(locale: Locale): boolean {
  return locale === "de" || locale === "zh";
}

export function isHubSeoPublicInternalPath(internalPath: string, locale: HubSeoLocale): boolean {
  const normalized = internalPath.replace(/\/+$/, "") || "/";
  if (normalized === "/") return true;
  const match = normalized.match(/^\/destinazioni\/([^/]+)$/);
  if (!match) return false;
  const slug = match[1]!;
  return locale === "de" ? isDeHubSlug(slug) : isZhHubSlug(slug);
}
