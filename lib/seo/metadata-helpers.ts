import type { Metadata } from "next";
import { BRAND_NAME } from "@/lib/legal/company";
import { canonicalUrl } from "@/lib/seo/canonical";
import { DEFAULT_OG_IMAGE } from "@/lib/seo/site-url";
import type { Locale } from "@/lib/i18n/translations";

export function buildLanguageAlternates(path = "/") {
  const canonical = canonicalUrl(path);
  return {
    canonical,
    languages: {
      "it-IT": canonical,
      "en-GB": canonical,
      "x-default": canonical,
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
  const url = canonicalUrl(params.path ?? "/");
  const locale = params.locale ?? "it";
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
