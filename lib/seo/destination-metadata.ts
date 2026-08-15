import type { Metadata } from "next";
import { BRAND_NAME } from "@/lib/legal/company";
import { localizedPath } from "@/lib/i18n/routing";
import { buildLanguageAlternates, buildOpenGraph, buildTwitterCard } from "@/lib/seo/metadata-helpers";
import { canonicalUrl } from "@/lib/seo/canonical";
import { getDestinationCityPhoto } from "@/lib/seo/destination-hero";
import { isDestinationHubIndexable } from "@/lib/seo/destination-quality";
import { trimSeoDescription } from "@/lib/seo/serp-copy";
import { buildDestinationSeoLine } from "@/lib/seo/structure-seo-copy";
import type { DestinationHub } from "@/lib/seo/destination-queries";
import type { Locale } from "@/lib/i18n/translations";

export function buildDestinationTitle(hub: DestinationHub, locale: Locale = "it"): string {
  const city = hub.displayName.trim();
  const count = hub.structureCount;

  if (locale === "en") {
    return `Hotels in ${city}: ${count} properties — Direct booking`;
  }
  return `Hotel a ${city}: ${count} strutture — Prenotazione diretta`;
}

export function buildDestinationDescription(hub: DestinationHub, locale: Locale) {
  return trimSeoDescription(
    buildDestinationSeoLine({ cityName: hub.displayName, structureCount: hub.structureCount }, locale),
  );
}

export function buildDestinationIntro(hub: DestinationHub, locale: Locale) {
  return buildDestinationSeoLine(
    { cityName: hub.displayName, structureCount: hub.structureCount },
    locale,
  );
}

function absoluteTitle(title: string): string {
  return title.endsWith(BRAND_NAME) ? title : `${title} · ${BRAND_NAME}`;
}

export function buildDestinationMetadata(hub: DestinationHub, locale: Locale, page = 1): Metadata {
  const baseTitle = buildDestinationTitle(hub, locale);
  const paginatedSuffix = locale === "en" ? ` · page ${page}` : ` · pag. ${page}`;
  const title = page > 1 ? `${baseTitle}${paginatedSuffix}` : baseTitle;
  const description = buildDestinationDescription(hub, locale);
  const absolute = absoluteTitle(title);
  const heroUrl = getDestinationCityPhoto(hub);
  const ogImages = heroUrl ? [{ url: heroUrl, alt: hub.displayName }] : undefined;

  const indexable = isDestinationHubIndexable(hub);

  return {
    title: { absolute },
    description,
    alternates: buildLanguageAlternates(`/destinazioni/${hub.slug}`, locale),
    robots: { index: page === 1 && indexable, follow: true },
    openGraph: buildOpenGraph({
      title: absolute,
      description,
      path: `/destinazioni/${hub.slug}`,
      locale,
      images: ogImages,
    }),
    twitter: buildTwitterCard({
      title: absolute,
      description,
      images: ogImages?.map((image) => image.url),
    }),
  };
}

export function buildDestinationJsonLd(
  hub: DestinationHub,
  items: { slug: string; name: string }[],
  pageUrl: string,
  locale: Locale = "it",
) {
  const heroUrl = getDestinationCityPhoto(hub);
  const hotelPath = (slug: string) => localizedPath(locale, `/hotel/${slug}`);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#destination`,
        name: buildDestinationTitle(hub, locale),
        url: pageUrl,
        description: buildDestinationDescription(hub, locale),
        numberOfItems: hub.structureCount,
        ...(heroUrl ? { image: heroUrl } : {}),
      },
      {
        "@type": "ItemList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          url: canonicalUrl(hotelPath(item.slug)),
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl("/") },
          { "@type": "ListItem", position: 2, name: hub.displayName, item: pageUrl },
        ],
      },
    ],
  };
}
