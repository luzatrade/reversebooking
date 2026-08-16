import type { Metadata } from "next";
import { BRAND_NAME } from "@/lib/legal/company";
import { buildLanguageAlternates, buildOpenGraph, buildTwitterCard } from "@/lib/seo/metadata-helpers";
import { buildDestinationSlug } from "@/lib/seo/city-canonical";
import { destinationPublicPath, homePath, localizedPath } from "@/lib/i18n/routing";
import { canonicalUrl } from "@/lib/seo/canonical";
import { buildStructurePageParagraphs, buildStructureMetaDescriptionCandidates } from "@/lib/seo/structure-description";
import { resolveGeoContext } from "@/lib/seo/geo-context";
import { pickFirstSeoDescription, trimSeoDescription, trimSeoTitleSegment } from "@/lib/seo/serp-copy";
import type { Locale } from "@/lib/i18n/translations";
import type { StructureSeoRecord } from "@/lib/seo/structure-queries";

function manualDescription(record: StructureSeoRecord, locale: Locale): string | null {
  const value =
    locale === "en"
      ? record.descriptionEn?.trim() || record.descriptionIt?.trim()
      : record.descriptionIt?.trim() || record.descriptionEn?.trim();
  return value || null;
}

export function buildStructureSeoTitle(record: StructureSeoRecord, locale: Locale = "it"): string {
  const city = record.cityName.trim();
  const name = record.name.trim();
  const longSuffix =
    locale === "en" ? " — Direct offers, no commission" : " — Offerte dirette senza commissioni";
  const shortSuffix = locale === "en" ? " — Direct offers" : " — Offerte dirette";
  const joiner = locale === "en" ? " in " : " a ";

  const build = (propertyName: string, suffix: string) => `${propertyName}${joiner}${city}${suffix}`;

  let title = build(name, longSuffix);
  if (title.length <= 72) return title;

  title = build(name, shortSuffix);
  if (title.length <= 72) return title;

  const maxNameLength = Math.max(18, 72 - shortSuffix.length - joiner.length - city.length);
  const trimmedName = trimSeoTitleSegment(name, maxNameLength);
  return build(trimmedName, shortSuffix);
}

export function buildStructureSeoDescription(record: StructureSeoRecord, locale: Locale = "it"): string {
  const manual = manualDescription(record, locale);
  if (manual) return trimSeoDescription(manual);

  return pickFirstSeoDescription(buildStructureMetaDescriptionCandidates(record, locale));
}

/** On-page body copy paragraphs. */
export function buildStructurePageDescription(record: StructureSeoRecord, locale: Locale = "it"): string[] {
  return buildStructurePageParagraphs(record, locale);
}

function countryIsoCode(countryName: string) {
  const normalized = countryName.trim().toLowerCase();
  if (normalized === "italia" || normalized === "italy") return "IT";
  if (normalized.length === 2) return normalized.toUpperCase();
  return countryName;
}

function lodgingSchemaType(record: StructureSeoRecord) {
  const type = (record.structureType ?? "hotel").toLowerCase();
  if (type === "bnb") return "BedAndBreakfast";
  if (type === "apartment") return "Apartment";
  return "Hotel";
}

function absoluteTitle(title: string): string {
  return title.endsWith(BRAND_NAME) ? title : `${title} · ${BRAND_NAME}`;
}

export function buildStructureMetadata(record: StructureSeoRecord, locale: Locale = "it"): Metadata {
  const title = buildStructureSeoTitle(record, locale);
  const description = buildStructureSeoDescription(record, locale);
  const absolute = absoluteTitle(title);
  const images = [record.mainPhotoUrl, ...record.galleryPhotoUrls].filter(Boolean) as string[];

  return {
    title: { absolute },
    description,
    alternates: buildLanguageAlternates(`/hotel/${record.slug}`, locale),
    robots: { index: record.seoIndexable, follow: true },
    openGraph: buildOpenGraph({
      title: absolute,
      description,
      path: `/hotel/${record.slug}`,
      locale,
      images: images[0] ? [{ url: images[0], alt: record.name }] : undefined,
    }),
    twitter: buildTwitterCard({
      title: absolute,
      description,
      images: images[0] ? [images[0]] : undefined,
    }),
  };
}

export function buildStructureJsonLd(record: StructureSeoRecord, pageUrl: string, locale: Locale = "it") {
  const images = [record.mainPhotoUrl, ...record.galleryPhotoUrls].filter(Boolean);
  const address = record.address || record.cityName;
  const citySlug = buildDestinationSlug(record.cityName);
  const geo = resolveGeoContext(record.cityName, record.countryName);

  const hotelNode: Record<string, unknown> = {
    "@type": lodgingSchemaType(record),
    "@id": `${pageUrl}#hotel`,
    name: record.name,
    url: pageUrl,
    description: buildStructurePageParagraphs(record, locale).join(" "),
    ...(images.length ? { image: images } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: record.cityName,
      addressCountry: countryIsoCode(record.countryName),
      ...(geo ? { addressRegion: geo.regionName } : {}),
    },
    ...(geo
      ? {
          areaServed: {
            "@type": "AdministrativeArea",
            name: geo.regionName,
          },
        }
      : {}),
    ...(record.phone ? { telephone: record.phone } : {}),
    ...(record.email ? { email: record.email } : {}),
  };

  if (record.latitude != null && record.longitude != null) {
    hotelNode.geo = {
      "@type": "GeoCoordinates",
      latitude: record.latitude,
      longitude: record.longitude,
    };
  }

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl(homePath(locale)) },
      {
        "@type": "ListItem",
        position: 2,
        name: locale === "en" ? `Hotels in ${record.cityName}` : `Hotel a ${record.cityName}`,
        item: canonicalUrl(destinationPublicPath(citySlug, locale)),
      },
      { "@type": "ListItem", position: 3, name: record.name, item: pageUrl },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [hotelNode, breadcrumb],
  };
}
