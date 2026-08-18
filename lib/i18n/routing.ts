import { LOCALE_COOKIE } from "@/lib/i18n/cookie";
import { guideSlugForLocale } from "@/lib/i18n/guides";
import type { Locale } from "@/lib/i18n/translations";
import { buildDestinationSlug, resolveDestinationHubSlug } from "@/lib/seo/city-canonical";
import { deAlternateInternalPath } from "@/lib/seo/de-export-content";
import { isHubSeoPublicInternalPath } from "@/lib/seo/hub-seo-locale";
import { zhAlternateInternalPath } from "@/lib/seo/zh-export-content";

export const LOCALE_HEADER = "x-next-locale";

export const DEFAULT_LOCALE: Locale = "it";

const DESTINATION_SEGMENT: Record<Locale, string> = {
  it: "destinazioni",
  en: "destinations",
  de: "reiseziele",
  zh: "destinations",
};

const GUIDE_SEGMENT: Record<Locale, string> = {
  it: "guide",
  en: "guides",
  de: "guides",
  zh: "guides",
};

const PUBLIC_SEO_PREFIXES = [
  "/destinazioni",
  "/hotel",
  "/cos-e-hotelsdrop",
  "/contatti",
  "/note-legali",
  "/privacy-policy",
  "/cookie-policy",
  "/termini-e-condizioni",
  "/condizioni-abbonamento",
  "/struttura",
  "/guide",
] as const;

const LOCALE_SKIP_PREFIXES = [
  "/api",
  "/auth",
  "/_next",
  "/console",
  "/admin",
  "/chat",
  "/account",
  "/inserzionista",
  "/agenzia",
  "/login",
  "/registrazione",
  "/scegli-account",
  "/offerta",
  "/annunci",
  "/sitemap",
  "/robots.txt",
  "/llms.txt",
  "/llms-full.txt",
];

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "it" || value === "en" || value === "de" || value === "zh";
}

export function destinationSegment(locale: Locale): string {
  return DESTINATION_SEGMENT[locale];
}

export function guideSegment(locale: Locale): string {
  return GUIDE_SEGMENT[locale];
}

function normalizeInternalPath(path: string): string {
  if (!path || path === "/") return "/";
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.replace(/\/+$/, "") || "/";
}

export function resolveDestinationPublicSlug(publicSlug: string): string {
  return resolveDestinationHubSlug(publicSlug);
}

function translateExternalSegment(segment: string, locale: Locale, toInternal: boolean): string {
  if (toInternal) {
    if (
      segment === DESTINATION_SEGMENT.it ||
      segment === DESTINATION_SEGMENT.en ||
      segment === DESTINATION_SEGMENT.de ||
      segment === DESTINATION_SEGMENT.zh
    ) {
      return DESTINATION_SEGMENT.it;
    }
    if (segment === GUIDE_SEGMENT.it || segment === GUIDE_SEGMENT.en) return GUIDE_SEGMENT.it;
    return segment;
  }
  if (
    segment === DESTINATION_SEGMENT.it ||
    segment === DESTINATION_SEGMENT.en ||
    segment === DESTINATION_SEGMENT.de ||
    segment === DESTINATION_SEGMENT.zh
  ) {
    return DESTINATION_SEGMENT[locale];
  }
  if (segment === GUIDE_SEGMENT.it || segment === GUIDE_SEGMENT.en) {
    return GUIDE_SEGMENT[locale];
  }
  return segment;
}

function externalPathFromInternal(internalPath: string, locale: Locale): string {
  const normalized = normalizeInternalPath(internalPath);
  if (normalized === "/") return "/";

  const parts = normalized.split("/").filter(Boolean);
  if (parts[0] === "destinazioni") {
    parts[0] = DESTINATION_SEGMENT[locale];
    if (parts[1]) parts[1] = resolveDestinationPublicSlug(parts[1]);
  } else if (parts[0] === "guide") {
    parts[0] = GUIDE_SEGMENT[locale];
    if (parts[1]) parts[1] = guideSlugForLocale(parts[1], locale === "it" ? "it" : "en");
  }
  return `/${parts.join("/")}`;
}

function internalPathFromExternal(externalPath: string, locale: Locale): string {
  const normalized = normalizeInternalPath(externalPath);
  if (normalized === "/") return "/";

  const parts = normalized.split("/").filter(Boolean);
  parts[0] = translateExternalSegment(parts[0] ?? "", locale, true);

  if (parts[0] === "destinazioni" && parts[1]) {
    parts[1] = resolveDestinationPublicSlug(parts[1]);
  }

  return `/${parts.join("/")}`;
}

export function localizedPath(locale: Locale, internalPath = "/"): string {
  const normalized = normalizeInternalPath(internalPath);
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${externalPathFromInternal(normalized, locale)}`;
}

export function localizedCanonicalPath(locale: Locale, internalPath = "/"): string {
  return localizedPath(locale, internalPath);
}

export function stripLocalePrefix(pathname: string): { locale: Locale | null; pathname: string } {
  const match = pathname.match(/^\/(it|en|de|zh)(\/.*)?$/);
  if (!match) return { locale: null, pathname };
  const locale = match[1] as Locale;
  const rest = match[2] ?? "/";
  return { locale, pathname: normalizeInternalPath(rest) };
}

export function parseLocalePath(pathname: string): { locale: Locale; internalPath: string } | null {
  const stripped = stripLocalePrefix(pathname);
  if (!stripped.locale) return null;
  return {
    locale: stripped.locale,
    internalPath: internalPathFromExternal(stripped.pathname, stripped.locale),
  };
}

export function isPublicSeoPath(pathname: string): boolean {
  const normalized = normalizeInternalPath(pathname);
  if (normalized === "/") return true;
  return PUBLIC_SEO_PREFIXES.some(
    (prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`),
  );
}

export function shouldSkipLocaleMiddleware(pathname: string): boolean {
  if (pathname.includes(".")) return true;
  return LOCALE_SKIP_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

/** Lightweight SEO export locales: homepage + whitelisted destination hubs only. */
export function isHubSeoPublicInternalPathForLocale(internalPath: string, locale: Locale): boolean {
  if (locale === "de") return isHubSeoPublicInternalPath(internalPath, "de");
  if (locale === "zh") return isHubSeoPublicInternalPath(internalPath, "zh");
  return true;
}

/** @deprecated Use isHubSeoPublicInternalPathForLocale */
export function isDePublicInternalPath(internalPath: string): boolean {
  return isHubSeoPublicInternalPath(internalPath, "de");
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const parsed = parseLocalePath(pathname);
  if (parsed) return localizedPath(targetLocale, parsed.internalPath);
  if (isPublicSeoPath(pathname)) return localizedPath(targetLocale, pathname);
  return localizedPath(targetLocale, "/");
}

export function destinationPublicPath(citySlugOrName: string, locale: Locale = DEFAULT_LOCALE): string {
  const slug =
    citySlugOrName.includes("-") && !citySlugOrName.includes(" ")
      ? resolveDestinationPublicSlug(citySlugOrName)
      : buildDestinationSlug(citySlugOrName);
  return localizedPath(locale, `/destinazioni/${slug}`);
}

export function structurePublicPath(slug: string, locale: Locale = DEFAULT_LOCALE): string {
  if (locale === "de" || locale === "zh") return localizedPath("en", `/hotel/${slug}`);
  return localizedPath(locale, `/hotel/${slug}`);
}

export function guidePublicPath(slug: string, locale: Locale = DEFAULT_LOCALE): string {
  return localizedPath(locale === "it" ? "it" : "en", `/guide/${slug}`);
}

export function homePath(locale: Locale = DEFAULT_LOCALE): string {
  return localizedPath(locale, "/");
}

export function localeCookieOptions(locale: Locale) {
  return {
    name: LOCALE_COOKIE,
    value: locale,
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax" as const,
  };
}

export function hreflangCode(locale: Locale): string {
  if (locale === "en") return "en-GB";
  if (locale === "de") return "de-DE";
  if (locale === "zh") return "zh-CN";
  return "it-IT";
}

export function allLocalizedPaths(internalPath = "/"): Record<string, string> {
  const paths: Record<string, string> = {
    "it-IT": localizedPath("it", internalPath),
    "en-GB": localizedPath("en", internalPath),
    "x-default": localizedPath(DEFAULT_LOCALE, internalPath),
  };

  if (deAlternateInternalPath(internalPath)) {
    paths["de-DE"] = localizedPath("de", internalPath);
  }

  if (zhAlternateInternalPath(internalPath)) {
    paths["zh-CN"] = localizedPath("zh", internalPath);
  }

  return paths;
}
