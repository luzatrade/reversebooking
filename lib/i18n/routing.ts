import { LOCALE_COOKIE } from "@/lib/i18n/cookie";
import { guideSlugForLocale } from "@/lib/i18n/guides";
import { supportedLocales, type Locale } from "@/lib/i18n/translations";
import { buildDestinationSlug, resolveDestinationHubSlug } from "@/lib/seo/city-canonical";
import {
  hubAlternateInternalPath,
  hubLocaleConfig,
  isHubSeoLocale,
  isHubSeoPublicInternalPath,
  listHubEnabledLocales,
  listHubSeoLocales,
} from "@/lib/seo/hub-locale-registry";

export const LOCALE_HEADER = "x-next-locale";

/** Forwarded on rewrite. Avoid `x-next-*` so Next does not strip it from RSC `headers()`. */
export const HD_LOCALE_HEADER = "x-hd-locale";
export const HD_PATHNAME_HEADER = "x-hd-pathname";

export const DEFAULT_LOCALE: Locale = "it";

export function isLocaleHomePath(pathname: string): boolean {
  const path = pathname.split("?")[0]?.replace(/\/+$/, "") || "/";
  if (path === "/") return true;
  return supportedLocales.some((locale) => path === `/${locale}`);
}

const DESTINATION_SEGMENT: Record<Locale, string> = {
  it: "destinazioni",
  en: "destinations",
  de: hubLocaleConfig("de")!.destinationSegment,
  zh: hubLocaleConfig("zh")!.destinationSegment,
  es: hubLocaleConfig("es")!.destinationSegment,
};

const DESTINATION_SEGMENTS = new Set<string>(Object.values(DESTINATION_SEGMENT));

const GUIDE_SEGMENT: Record<Locale, string> = {
  it: "guide",
  en: "guides",
  de: "guides",
  zh: "guides",
  es: "guides",
};

const LOCALE_PREFIX_PATTERN = new RegExp(`^/(${supportedLocales.join("|")})(/.*)?$`);

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
  return !!value && (supportedLocales as string[]).includes(value);
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
  if (DESTINATION_SEGMENTS.has(segment)) {
    return toInternal ? DESTINATION_SEGMENT.it : DESTINATION_SEGMENT[locale];
  }
  if (segment === GUIDE_SEGMENT.it || segment === GUIDE_SEGMENT.en) {
    return toInternal ? GUIDE_SEGMENT.it : GUIDE_SEGMENT[locale];
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
  const match = pathname.match(LOCALE_PREFIX_PATTERN);
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
  if (!isHubSeoLocale(locale)) return true;
  return isHubSeoPublicInternalPath(internalPath, locale);
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
  if (isHubSeoLocale(locale)) return localizedPath("en", `/hotel/${slug}`);
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
  const hubConfig = hubLocaleConfig(locale);
  if (hubConfig) return hubConfig.hreflang;
  return "it-IT";
}

export function allLocalizedPaths(internalPath = "/"): Record<string, string> {
  const paths: Record<string, string> = {
    "it-IT": localizedPath("it", internalPath),
    "en-GB": localizedPath("en", internalPath),
    "x-default": localizedPath(DEFAULT_LOCALE, internalPath),
  };

  for (const locale of listHubEnabledLocales()) {
    if (hubAlternateInternalPath(locale, internalPath)) {
      paths[hreflangCode(locale)] = localizedPath(locale, internalPath);
    }
  }

  return paths;
}

/** Hub-only locales whose homepage is published, for sitemap and IndexNow. */
export function hubSeoHomepagePaths(): string[] {
  return listHubSeoLocales().map((locale) => localizedPath(locale, "/"));
}
