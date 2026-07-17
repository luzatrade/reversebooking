import type { Metadata } from "next";
import { BRAND_NAME } from "@/lib/legal/company";
import { canonicalUrl } from "@/lib/seo/canonical";
import { getDestinationCityPhoto } from "@/lib/seo/destination-hero";
import type { DestinationHub } from "@/lib/seo/destination-queries";
import type { Locale } from "@/lib/i18n/translations";

function trimDescription(value: string, max = 160) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= max) return normalized;
  return `${normalized.slice(0, max - 1).trim()}…`;
}

export function buildDestinationTitle(hub: DestinationHub) {
  return `Hotel a ${hub.displayName} | ${BRAND_NAME}`;
}

export function buildDestinationDescription(hub: DestinationHub, locale: Locale) {
  if (locale === "en") {
    return trimDescription(
      `Browse ${hub.structureCount} hotels and properties in ${hub.displayName}. Send a personalized offer request on ${BRAND_NAME} and receive direct proposals from local hosts.`,
    );
  }
  return trimDescription(
    `Scopri ${hub.structureCount} hotel e strutture a ${hub.displayName}. Invia una richiesta personalizzata su ${BRAND_NAME} e ricevi proposte dirette dalle strutture.`,
  );
}

export function buildDestinationIntro(hub: DestinationHub, locale: Locale) {
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

export function buildDestinationMetadata(hub: DestinationHub, locale: Locale, page = 1): Metadata {
  const baseTitle = buildDestinationTitle(hub);
  const title = page > 1 ? `${baseTitle} · pag. ${page}` : baseTitle;
  const description = buildDestinationDescription(hub, locale);
  const path = page > 1 ? `/destinazioni/${hub.slug}?page=${page}` : `/destinazioni/${hub.slug}`;
  const url = canonicalUrl(path);
  const heroUrl = getDestinationCityPhoto(hub);
  const ogImages = heroUrl ? [{ url: heroUrl, alt: hub.displayName }] : undefined;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl(`/destinazioni/${hub.slug}`) },
    robots: { index: page === 1, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND_NAME,
      locale: locale === "en" ? "en_GB" : "it_IT",
      type: "website",
      ...(ogImages ? { images: ogImages } : {}),
    },
    ...(ogImages ? { twitter: { card: "summary_large_image", images: ogImages.map((image) => image.url) } } : {}),
  };
}

export function buildDestinationJsonLd(
  hub: DestinationHub,
  items: { slug: string; name: string }[],
  pageUrl: string,
) {
  const heroUrl = getDestinationCityPhoto(hub);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#destination`,
        name: buildDestinationTitle(hub),
        url: pageUrl,
        description: buildDestinationDescription(hub, "it"),
        numberOfItems: hub.structureCount,
        ...(heroUrl ? { image: heroUrl } : {}),
      },
      {
        "@type": "ItemList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          url: canonicalUrl(`/hotel/${item.slug}`),
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
