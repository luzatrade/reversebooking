import content from "@/data/seo/export/zh/content.json";
import type { FaqItem } from "@/lib/i18n/seo-marketing";
import type { Locale } from "@/lib/i18n/translations";

export type ZhHubContent = {
  displayName: string;
  title: string;
  metaDescription: string;
  intro: string;
  editorial: string;
  poiPhrase: string;
  faq: FaqItem[];
};

type ZhExportContent = {
  hubSlugs: string[];
  homepage: {
    title: string;
    metaDescription: string;
    heroHeadline: string;
    heroSubheadline: string;
    faq: FaqItem[];
  };
  cityDisplayNames: Record<string, string>;
  hubs: Record<string, ZhHubContent>;
};

const DATA = content as ZhExportContent;

const HUB_SLUG_SET = new Set(DATA.hubSlugs);

export function isZhSeoLocale(locale: Locale): boolean {
  return locale === "zh";
}

export function isZhHubSlug(slug: string): boolean {
  return HUB_SLUG_SET.has(slug);
}

export function listZhHubSlugs(): string[] {
  return [...DATA.hubSlugs];
}

export function getZhHomepageContent() {
  return DATA.homepage;
}

export function getZhHubContent(slug: string): ZhHubContent | null {
  return DATA.hubs[slug] ?? null;
}

export function getZhCityDisplayName(slug: string, fallback: string): string {
  return DATA.cityDisplayNames[slug]?.trim() || DATA.hubs[slug]?.displayName?.trim() || fallback;
}

export function applyZhCountTemplate(template: string, count: number, cityName: string): string {
  return template
    .replaceAll("{count}", String(count))
    .replaceAll("{city}", cityName)
    .replaceAll("{brand}", "HotelsDrop");
}

export function getZhHubTitle(slug: string, cityName: string, count: number): string | null {
  const hub = getZhHubContent(slug);
  if (!hub?.title) return null;
  return applyZhCountTemplate(hub.title, count, cityName);
}

export function getZhHubMetaDescription(slug: string, cityName: string, count: number): string | null {
  const hub = getZhHubContent(slug);
  if (!hub?.metaDescription) return null;
  return applyZhCountTemplate(hub.metaDescription, count, cityName);
}

export function getZhHubFaq(slug: string): FaqItem[] {
  return getZhHubContent(slug)?.faq ?? [];
}

export function zhAlternateInternalPath(internalPath: string): string | null {
  const normalized = internalPath.replace(/\/+$/, "") || "/";
  if (normalized === "/") return "/";
  const match = normalized.match(/^\/destinazioni\/([^/]+)$/);
  if (match && isZhHubSlug(match[1]!)) return normalized;
  return null;
}
