import type { Metadata } from "next";
import { BRAND_NAME } from "@/lib/legal/company";
import { localizedPath } from "@/lib/i18n/routing";
import { buildLanguageAlternates, buildOpenGraph, buildTwitterCard } from "@/lib/seo/metadata-helpers";
import { canonicalUrl } from "@/lib/seo/canonical";
import {
  getDeHubContent,
  getDeHubMetaDescription,
  getDeHubTitle,
  isDeSeoLocale,
} from "@/lib/seo/de-export-content";
import { getDestinationDisplayName } from "@/lib/seo/destination-display-name";
import { getDestinationCityPhoto } from "@/lib/seo/destination-hero";
import { isDestinationHubIndexable } from "@/lib/seo/destination-quality";
import { trimSeoDescription } from "@/lib/seo/serp-copy";
import type { DestinationHub } from "@/lib/seo/destination-queries";
import type { Locale } from "@/lib/i18n/translations";

export function buildDestinationTitle(hub: DestinationHub, locale: Locale = "it"): string {
  const city = getDestinationDisplayName(hub, locale).trim();
  const count = hub.structureCount;

  if (isDeSeoLocale(locale)) {
    return getDeHubTitle(hub.slug, city, count) ?? `Hotels in ${city}: ${count} Unterkünfte — Direktangebote`;
  }

  if (locale === "en") {
    return `Hotels in ${city}: ${count} properties — Get direct offers`;
  }
  return `Hotel a ${city}: ${count} strutture — Richiedi offerte dirette`;
}

export function buildDestinationDescription(hub: DestinationHub, locale: Locale) {
  const city = getDestinationDisplayName(hub, locale);
  const count = hub.structureCount;

  if (isDeSeoLocale(locale)) {
    const deDescription = getDeHubMetaDescription(hub.slug, city, count);
    if (deDescription) return trimSeoDescription(deDescription);
  }

  if (locale === "en") {
    return trimSeoDescription(
      `Compare ${count} hotels and B&Bs in ${city}. Publish a free stay request on ${BRAND_NAME} and receive personalised direct offers from local properties. No booking commission for travellers.`,
    );
  }
  return trimSeoDescription(
    `Confronta ${count} hotel e B&B a ${city}. Pubblica una richiesta di soggiorno gratuita su ${BRAND_NAME} e ricevi offerte personalizzate dalle strutture. Zero commissioni per chi viaggia.`,
  );
}

export function buildDestinationIntro(hub: DestinationHub, locale: Locale) {
  if (isDeSeoLocale(locale)) {
    const deHub = getDeHubContent(hub.slug);
    if (deHub?.intro) {
      return deHub.intro.replaceAll("{count}", String(hub.structureCount));
    }
  }

  if (hub.tier === "premium") {
    if (locale === "en") {
      return `Explore ${hub.structureCount} lodgings in ${hub.displayName}. On ${BRAND_NAME} you can compare properties and request tailored offers without browsing dozens of booking sites.`;
    }
    return `Esplora ${hub.structureCount} strutture ricettive a ${hub.displayName}. Su ${BRAND_NAME} puoi confrontare hotel, B&B e appartamenti e inviare una richiesta personalizzata per ricevere offerte dirette.`;
  }

  if (locale === "en") {
    return `Find ${hub.structureCount} properties in ${hub.displayName} and request a personalized offer on ${BRAND_NAME}.`;
  }
  return `Trova ${hub.structureCount} strutture a ${hub.displayName} e richiedi un'offerta personalizzata su ${BRAND_NAME}.`;
}

function absoluteTitle(title: string): string {
  return title.endsWith(BRAND_NAME) ? title : `${title} · ${BRAND_NAME}`;
}

export function buildDestinationMetadata(hub: DestinationHub, locale: Locale, page = 1): Metadata {
  const baseTitle = buildDestinationTitle(hub, locale);
  const paginatedSuffix =
    locale === "en" ? ` · page ${page}` : locale === "de" ? ` · Seite ${page}` : ` · pag. ${page}`;
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
  const hotelPath = (slug: string) => localizedPath(locale === "de" ? "en" : locale, `/hotel/${slug}`);

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
