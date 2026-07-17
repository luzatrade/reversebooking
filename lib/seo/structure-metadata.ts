import type { Metadata } from "next";
import { BRAND_NAME } from "@/lib/legal/company";
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
  return `${record.name} · ${record.cityName} | ${BRAND_NAME}`;
}

export function buildStructureMetadata(record: StructureSeoRecord): Metadata {
  const title = buildStructureSeoTitle(record);
  const description = buildStructureSeoDescription(record);
  const url = canonicalUrl(`/hotel/${record.slug}`);
  const images = [record.mainPhotoUrl, ...record.galleryPhotoUrls].filter(Boolean) as string[];

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND_NAME,
      locale: "it_IT",
      type: "website",
      ...(images[0] ? { images: [{ url: images[0], alt: record.name }] } : {}),
    },
    twitter: {
      card: images[0] ? "summary_large_image" : "summary",
      title,
      description,
      ...(images[0] ? { images: [images[0]] } : {}),
    },
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
      addressCountry: record.countryName === "Italia" ? "IT" : record.countryName,
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
