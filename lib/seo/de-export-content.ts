import content from "@/data/seo/export/de/content.json";
import type { FaqItem } from "@/lib/i18n/seo-marketing";
import type { HubHomepageUi } from "@/lib/seo/hub-homepage-ui";
import type { Locale } from "@/lib/i18n/translations";

export type DeHubContent = {
  displayName: string;
  title: string;
  metaDescription: string;
  intro: string;
  editorial: string;
  poiPhrase: string;
  faq: FaqItem[];
};

type DeExportContent = {
  hubSlugs: string[];
  homepage: {
    title: string;
    metaDescription: string;
    heroHeadline: string;
    heroSubheadline: string;
    heroEntityIntro?: string;
    faq: FaqItem[];
    ui?: HubHomepageUi;
  };
  cityDisplayNames: Record<string, string>;
  hubs: Record<string, DeHubContent>;
};

const DATA = content as DeExportContent;

const HUB_SLUG_SET = new Set(DATA.hubSlugs);

export function isDeSeoLocale(locale: Locale): boolean {
  return locale === "de";
}

export function isDeHubSlug(slug: string): boolean {
  return HUB_SLUG_SET.has(slug);
}

export function listDeHubSlugs(): string[] {
  return [...DATA.hubSlugs];
}

export function getDeHomepageContent() {
  return DATA.homepage;
}

export function getDeHubContent(slug: string): DeHubContent | null {
  return DATA.hubs[slug] ?? null;
}

export function getDeCityDisplayName(slug: string, fallback: string): string {
  return DATA.cityDisplayNames[slug]?.trim() || DATA.hubs[slug]?.displayName?.trim() || fallback;
}

export function applyDeCountTemplate(template: string, count: number, cityName: string): string {
  return template
    .replaceAll("{count}", String(count))
    .replaceAll("{city}", cityName)
    .replaceAll("{brand}", "HotelsDrop");
}

export function getDeHubTitle(slug: string, cityName: string, count: number): string | null {
  const hub = getDeHubContent(slug);
  if (!hub?.title) return null;
  return applyDeCountTemplate(hub.title, count, cityName);
}

export function getDeHubMetaDescription(slug: string, cityName: string, count: number): string | null {
  const hub = getDeHubContent(slug);
  if (!hub?.metaDescription) return null;
  return applyDeCountTemplate(hub.metaDescription, count, cityName);
}

export function getDeHubFaq(slug: string): FaqItem[] {
  return getDeHubContent(slug)?.faq ?? [];
}

export function deAlternateInternalPath(internalPath: string): string | null {
  const normalized = internalPath.replace(/\/+$/, "") || "/";
  if (normalized === "/") return "/";
  const match = normalized.match(/^\/destinazioni\/([^/]+)$/);
  if (match && isDeHubSlug(match[1]!)) return normalized;
  return null;
}
