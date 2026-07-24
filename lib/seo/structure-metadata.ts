import type { Metadata } from "next";
import { BRAND_NAME } from "@/lib/legal/company";
import { buildLanguageAlternates, buildOpenGraph, buildTwitterCard } from "@/lib/seo/metadata-helpers";
import { buildDestinationSlug, destinationPublicPath } from "@/lib/seo/city-canonical";
import { canonicalUrl } from "@/lib/seo/canonical";
import type { StructureSeoRecord } from "@/lib/seo/structure-queries";

function trimDescription(value: string, max = 155) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= max) return normalized;
  return `${normalized.slice(0, max - 1).trim()}…`;
}

export function buildStructureSeoDescription(record: StructureSeoRecord) {
  const parts = [
    record.name,
    record.address || record.cityName,
    record.cityName,
    "Richiedi un'offerta personalizzata su HotelsDrop.",
  ].filter(Boolean);
  return trimDescription(parts.join(" · "));
}

export function buildStructureSeoTitle(record: StructureSeoRecord) {
  return `${record.name} · ${record.cityName}`;
}

function countryIsoCode(countryName: string) {
  const normalized = countryName.trim().toLowerCase();
  if (normalized === "italia" || normalized === "italy") return "IT";
  if (normalized.length === 2) return normalized.toUpperCase();
  return countryName;
}

export function buildStructureMetadata(record: StructureSeoRecord): Metadata {
  const title = buildStructureSeoTitle(record);
  const description = buildStructureSeoDescription(record);
  const url = canonicalUrl(`/hotel/${record.slug}`);
  const images = [record.mainPhotoUrl, ...record.galleryPhotoUrls].filter(Boolean) as string[];

  return {
    title: { absolute: `${title} · ${BRAND_NAME}` },
    description,
    alternates: buildLanguageAlternates(`/hotel/${record.slug}`),
    robots: { index: true, follow: true },
    openGraph: buildOpenGraph({
      title: `${title} · ${BRAND_NAME}`,
      description,
      path: `/hotel/${record.slug}`,
      images: images[0] ? [{ url: images[0], alt: record.name }] : undefined,
    }),
    twitter: buildTwitterCard({
      title: `${title} · ${BRAND_NAME}`,
      description,
      images: images[0] ? [images[0]] : undefined,
    }),
  };
}

export function buildStructureJsonLd(record: StructureSeoRecord, pageUrl: string) {
  const images = [record.mainPhotoUrl, ...record.galleryPhotoUrls].filter(Boolean);
  const address = record.address || record.cityName;

  const hotelNode: Record<string, unknown> = {
    "@type": "Hotel",
    "@id": `${pageUrl}#hotel`,
    name: record.name,
    url: pageUrl,
    description: record.description || buildStructureSeoDescription(record),
    ...(images.length ? { image: images } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: record.cityName,
      addressCountry: countryIsoCode(record.countryName),
    },
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
      { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl("/") },
      { "@type": "ListItem", position: 2, name: `Hotel a ${record.cityName}`, item: canonicalUrl(destinationPublicPath(buildDestinationSlug(record.cityName))) },
      { "@type": "ListItem", position: 3, name: record.name, item: pageUrl },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [hotelNode, breadcrumb],
  };
}
