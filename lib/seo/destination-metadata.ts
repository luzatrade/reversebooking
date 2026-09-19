import type { Metadata } from "next";
import { BRAND_NAME } from "@/lib/legal/company";
import { localizedPath } from "@/lib/i18n/routing";
import { buildLanguageAlternates, buildOpenGraph, buildTwitterCard } from "@/lib/seo/metadata-helpers";
import { canonicalUrl } from "@/lib/seo/canonical";
import {
  getHubCityContent,
  getHubMetaDescription,
  getHubTitle,
  hubLocaleConfig,
  usesEnglishHotelCatalog,
} from "@/lib/seo/hub-locale-registry";
import { getDestinationDisplayName } from "@/lib/seo/destination-display-name";
import { getDestinationCityPhoto } from "@/lib/seo/destination-hero";
import { isDestinationHubIndexable } from "@/lib/seo/destination-quality";
import { trimSeoDescription, trimSeoTitleSegment } from "@/lib/seo/serp-copy";
import type { DestinationHub } from "@/lib/seo/destination-queries";
import type { Locale } from "@/lib/i18n/translations";

const HUB_TITLE_MAX = 72;

/**
 * Titolo SERP per gli hub città (IT/EN).
 * Mantiene "hotel a {città}" in testa (intento categorico) e chiude con il
 * differenziatore del modello: richiedi/ricevi offerte dirette senza commissioni.
 * Se il titolo non entra nei 72 char si scende a variante corta (senza count).
 */
function buildHubTitleCandidates(city: string, count: number, locale: "it" | "en"): string {
  const full =
    locale === "en"
      ? `Hotels in ${city}: ${count} properties — Request direct offers`
      : `Hotel a ${city}: ${count} strutture — Richiedi offerte dirette`;
  if (full.length <= HUB_TITLE_MAX) return full;

  const short =
    locale === "en"
      ? `Hotels in ${city}: request direct offers`
      : `Hotel a ${city}: richiedi offerte dirette`;
  if (short.length <= HUB_TITLE_MAX) return short;

  const prefix = locale === "en" ? "Hotels in " : "Hotel a ";
  const suffix = locale === "en" ? ": request direct offers" : ": richiedi offerte dirette";
  const maxCity = HUB_TITLE_MAX - prefix.length - suffix.length;
  return `${prefix}${trimSeoTitleSegment(city, maxCity)}${suffix}`;
}

export function buildDestinationTitle(hub: DestinationHub, locale: Locale = "it"): string {
  const city = getDestinationDisplayName(hub, locale).trim();
  const count = hub.structureCount;

  const hubConfig = hubLocaleConfig(locale);
  if (hubConfig) {
    return getHubTitle(locale, hub.slug, city, count) ?? hubConfig.labels.hubTitleFallback(city, count);
  }

  return buildHubTitleCandidates(city, count, locale === "en" ? "en" : "it");
}

export function buildDestinationDescription(hub: DestinationHub, locale: Locale) {
  const city = getDestinationDisplayName(hub, locale);
  const count = hub.structureCount;

  const hubDescription = getHubMetaDescription(locale, hub.slug, city, count);
  if (hubDescription) return trimSeoDescription(hubDescription);

  if (locale === "en") {
    return trimSeoDescription(
      `Send a free stay request for ${city} on ${BRAND_NAME}: ${count} hotels and B&Bs reply with personalised direct offers. No booking commission for travellers.`,
    );
  }
  return trimSeoDescription(
    `Invia una richiesta di soggiorno gratuita per ${city} su ${BRAND_NAME}: ${count} hotel e B&B rispondono con offerte dirette personalizzate. Zero commissioni per chi viaggia.`,
  );
}

export function buildDestinationIntro(hub: DestinationHub, locale: Locale) {
  const hubIntro = getHubCityContent(locale, hub.slug)?.intro;
  if (hubIntro) {
    return hubIntro.replaceAll("{count}", String(hub.structureCount));
  }

  if (hub.tier === "premium") {
    if (locale === "en") {
      return `Explore ${hub.structureCount} lodgings in ${hub.displayName}. On ${BRAND_NAME} you can compare properties and request tailored offers without browsing dozens of booking sites.`;
    }
    return `Esplora ${hub.structureCount} strutture ricettive a ${hub.displayName}. Su ${BRAND_NAME} puoi confrontare hotel, B&B e appartamenti e inviare una richiesta personalizzata per ricevere offerte dirette.`;
  }

  if (locale === "en") {
    return `Send a stay request for ${hub.displayName} on ${BRAND_NAME}: ${hub.structureCount} properties reply with personalised direct offers — no booking commission for travellers.`;
  }
  return `Invia una richiesta di soggiorno per ${hub.displayName} su ${BRAND_NAME}: ${hub.structureCount} strutture rispondono con offerte dirette personalizzate, senza commissioni per chi viaggia.`;
}

function absoluteTitle(title: string): string {
  return title.endsWith(BRAND_NAME) ? title : `${title} · ${BRAND_NAME}`;
}

export function buildDestinationMetadata(hub: DestinationHub, locale: Locale, page = 1): Metadata {
  const baseTitle = buildDestinationTitle(hub, locale);
  const hubLabels = hubLocaleConfig(locale)?.labels;
  const paginatedSuffix = hubLabels
    ? hubLabels.paginationSuffix(page)
    : locale === "en"
      ? ` · page ${page}`
      : ` · pag. ${page}`;
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
  const hotelPath = (slug: string) =>
    localizedPath(usesEnglishHotelCatalog(locale) ? "en" : locale, `/hotel/${slug}`);

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
