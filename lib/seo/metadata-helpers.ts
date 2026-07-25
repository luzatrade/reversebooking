import type { Metadata } from "next";
import { BRAND_NAME } from "@/lib/legal/company";
import { guideSlugForLocale } from "@/lib/i18n/guides";
import { allLocalizedPaths, localizedPath } from "@/lib/i18n/routing";
import { canonicalUrl } from "@/lib/seo/canonical";
import { DEFAULT_OG_IMAGE } from "@/lib/seo/site-url";
import type { Locale } from "@/lib/i18n/translations";

/** Internal app path (without /it or /en) → canonical + hreflang alternates. */
export function buildLanguageAlternates(internalPath = "/", locale: Locale = "it") {
  const canonical = canonicalUrl(localizedPath(locale, internalPath));
  const languages = Object.fromEntries(
    Object.entries(allLocalizedPaths(internalPath)).map(([code, path]) => [code, canonicalUrl(path)]),
  );

  return {
    canonical,
    languages,
  };
}

/** Guide articles use different slugs per locale — paired hreflang. */
export function buildGuideLanguageAlternates(guideSlug: string, locale: Locale) {
  const itSlug = guideSlugForLocale(guideSlug, "it");
  const enSlug = guideSlugForLocale(guideSlug, "en");
  const canonical = canonicalUrl(localizedPath(locale, `/guide/${guideSlugForLocale(guideSlug, locale)}`));

  return {
    canonical,
    languages: {
      "it-IT": canonicalUrl(localizedPath("it", `/guide/${itSlug}`)),
      "en-GB": canonicalUrl(localizedPath("en", `/guide/${enSlug}`)),
      "x-default": canonicalUrl(localizedPath("it", `/guide/${itSlug}`)),
    },
  };
}

export function buildOpenGraph(params: {
  title: string;
  description: string;
  path?: string;
  locale?: Locale;
  images?: { url: string; alt?: string }[];
}): Metadata["openGraph"] {
  const locale = params.locale ?? "it";
  const url = canonicalUrl(localizedPath(locale, params.path ?? "/"));
  const images = params.images?.length
    ? params.images
    : [{ url: DEFAULT_OG_IMAGE, alt: BRAND_NAME }];

  return {
    type: "website",
    url,
    siteName: BRAND_NAME,
    title: params.title,
    description: params.description,
    locale: locale === "en" ? "en_GB" : "it_IT",
    images,
  };
}

export function buildTwitterCard(params: {
  title: string;
  description: string;
  images?: string[];
}) {
  const images = params.images?.length ? params.images : [DEFAULT_OG_IMAGE];
  return {
    card: "summary_large_image" as const,
    title: params.title,
    description: params.description,
    images,
  };
}

export function absolutePageTitle(title: string): Metadata["title"] {
  return { absolute: title };
}
