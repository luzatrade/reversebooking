import type { Metadata } from "next";
import { getServerLocale } from "@/lib/i18n/get-translations";
import type { Locale } from "@/lib/i18n/translations";
import { buildLanguageAlternates, buildOpenGraph, buildTwitterCard } from "@/lib/seo/metadata-helpers";

export async function buildPublicPageMetadata(
  internalPath: string,
  title: string,
  description: string,
  locale?: Locale,
): Promise<Metadata> {
  const resolvedLocale = locale ?? (await getServerLocale());

  return {
    title: { absolute: title },
    description,
    alternates: buildLanguageAlternates(internalPath, resolvedLocale),
    openGraph: buildOpenGraph({ title, description, path: internalPath, locale: resolvedLocale }),
    twitter: buildTwitterCard({ title, description }),
  };
}
