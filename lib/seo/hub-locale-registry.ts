import deContent from "@/data/seo/export/de/content.json";
import esContent from "@/data/seo/export/es/content.json";
import zhContent from "@/data/seo/export/zh/content.json";
import type { Locale } from "@/lib/i18n/translations";

/**
 * Single source of truth for the lightweight "hub-only" SEO locales:
 * homepage plus a whitelist of destination hubs, with English chrome.
 *
 * Adding a locale = one entry here plus its data/seo/export/<locale>/content.json.
 */

export type HubFaqItem = { question: string; answer: string };

type ShowcaseUiKey =
  | "dropYourRequest"
  | "discoverWhereToStayCta"
  | "lastMinuteCta"
  | "exploreMapCta"
  | "citySearchPlaceholder"
  | "selectCity"
  | "clearSelectedCity"
  | "dropYourRequestHintCta"
  | "cardProfile"
  | "cardRequest"
  | "cardMap";

export type HubHomepageUi = {
  showcase?: Partial<Record<ShowcaseUiKey, string>>;
  common?: { login?: string };
  site?: { contacts?: string; becomePartner?: string; registration?: string };
};

export type HubCityContent = {
  displayName: string;
  title: string;
  metaDescription: string;
  intro: string;
  editorial: string;
  poiPhrase?: string;
  faq: HubFaqItem[];
};

export type HubLocaleContent = {
  hubSlugs: string[];
  homepage: {
    title: string;
    metaDescription: string;
    heroHeadline: string;
    heroSubheadline: string;
    heroEntityIntro?: string;
    faq: HubFaqItem[];
    ui?: HubHomepageUi;
  };
  cityDisplayNames: Record<string, string>;
  hubs: Record<string, HubCityContent>;
};

export type HubSeoLocale = "de" | "zh" | "es";

export type HubLocaleConfig = {
  locale: HubSeoLocale;
  /** URL segment replacing /destinazioni for this locale. */
  destinationSegment: string;
  hreflang: string;
  ogLocale: string;
  /** Accept-Language primary tags mapped to this locale. */
  languageTags: string[];
  /**
   * Hub URLs enter sitemap and hreflang only when per-city copy exists.
   * Keeps thin templated pages out of the index.
   */
  hubsEnabled: boolean;
  content: HubLocaleContent;
  labels: {
    destinationEyebrow: string;
    destinationsPlural: string;
    hubPageTitle: (city: string) => string;
    catalogCount: (count: number) => string;
    propertiesCount: (count: number) => string;
    viewProperty: string;
    paginationSuffix: (page: number) => string;
    hubTitleFallback: (city: string, count: number) => string;
    indexTitle: string;
    indexDescription: string;
    indexHeading: string;
    indexSubtitle: string;
    /** By ISO country code, with `default` for everything else. */
    countryLabels: Record<string, string>;
  };
};

const REGISTRY: Record<HubSeoLocale, HubLocaleConfig> = {
  de: {
    locale: "de",
    destinationSegment: "reiseziele",
    hreflang: "de-DE",
    ogLocale: "de_DE",
    languageTags: ["de"],
    hubsEnabled: true,
    content: deContent as HubLocaleContent,
    labels: {
      destinationEyebrow: "Reiseziel",
      destinationsPlural: "Reiseziele",
      hubPageTitle: (city) => `Hotels und Unterkünfte in ${city}`,
      catalogCount: (count) => `${count} Unterkünfte im Katalog`,
      propertiesCount: (count) => `${count} ${count === 1 ? "Unterkunft" : "Unterkünfte"}`,
      viewProperty: "Unterkunft ansehen",
      paginationSuffix: (page) => ` · Seite ${page}`,
      hubTitleFallback: (city, count) => `Hotels in ${city}: ${count} Unterkünfte — Direktangebote`,
      indexTitle: "Alle Reiseziele · HotelsDrop",
      indexDescription:
        "Entdecke die HotelsDrop-Reiseziele. Stelle eine Anfrage und erhalte Direktangebote von Hotels und Unterkünften vor Ort — ohne Provision für Reisende.",
      indexHeading: "Alle Reiseziele",
      indexSubtitle:
        "Hotels und Unterkünfte nach Stadt entdecken. Eine Anfrage stellen und Direktangebote erhalten, kostenlos für Reisende.",
      countryLabels: {
        IT: "Italien",
        FR: "Frankreich",
        GB: "Vereinigtes Königreich",
        DE: "Deutschland",
        ES: "Spanien",
        CA: "Kanada",
        default: "Weltweit",
      },
    },
  },
  zh: {
    locale: "zh",
    destinationSegment: "destinations",
    hreflang: "zh-CN",
    ogLocale: "zh_CN",
    languageTags: ["zh"],
    hubsEnabled: true,
    content: zhContent as HubLocaleContent,
    labels: {
      destinationEyebrow: "目的地",
      destinationsPlural: "目的地",
      hubPageTitle: (city) => `${city}的酒店与住宿`,
      catalogCount: (count) => `目录中有 ${count} 家房源`,
      propertiesCount: (count) => `${count} 家房源`,
      viewProperty: "查看房源",
      paginationSuffix: (page) => ` · 第 ${page} 页`,
      hubTitleFallback: (city, count) => `${city}酒店：${count}家房源 — 获取直接报价`,
      indexTitle: "全部目的地 · HotelsDrop",
      indexDescription:
        "浏览 HotelsDrop 的目的地。发布一次住宿需求，即可收到当地酒店与房源的直接报价，旅客零佣金。",
      indexHeading: "全部目的地",
      indexSubtitle: "按城市浏览酒店与住宿。发布一次需求即可收到直接报价，旅客无需支付佣金。",
      countryLabels: {
        IT: "意大利",
        FR: "法国",
        GB: "英国",
        DE: "德国",
        ES: "西班牙",
        CA: "加拿大",
        default: "全球",
      },
    },
  },
  es: {
    locale: "es",
    destinationSegment: "destinos",
    hreflang: "es",
    ogLocale: "es_ES",
    languageTags: ["es"],
    hubsEnabled: true,
    content: esContent as HubLocaleContent,
    labels: {
      destinationEyebrow: "Destino",
      destinationsPlural: "Destinos",
      hubPageTitle: (city) => `Hoteles y alojamientos en ${city}`,
      catalogCount: (count) => `${count} alojamientos en el catálogo`,
      propertiesCount: (count) => `${count} ${count === 1 ? "alojamiento" : "alojamientos"}`,
      viewProperty: "Ver alojamiento",
      paginationSuffix: (page) => ` · página ${page}`,
      hubTitleFallback: (city, count) =>
        `Hoteles en ${city}: ${count} alojamientos — Ofertas directas`,
      indexTitle: "Todos los destinos · HotelsDrop",
      indexDescription:
        "Explora los destinos de HotelsDrop. Publica una solicitud de estancia y recibe ofertas directas de hoteles y alojamientos locales, sin comisiones.",
      indexHeading: "Todos los destinos",
      indexSubtitle:
        "Explora hoteles y alojamientos por ciudad. Publica una solicitud y recibe ofertas directas, sin comisiones para quien viaja.",
      countryLabels: {
        IT: "Italia",
        FR: "Francia",
        GB: "Reino Unido",
        DE: "Alemania",
        ES: "España",
        CA: "Canadá",
        default: "Mundo",
      },
    },
  },
};

const HUB_SEO_LOCALES = Object.keys(REGISTRY) as HubSeoLocale[];

const HUB_SLUG_SETS: Record<HubSeoLocale, Set<string>> = Object.fromEntries(
  HUB_SEO_LOCALES.map((locale) => [locale, new Set(REGISTRY[locale].content.hubSlugs)]),
) as Record<HubSeoLocale, Set<string>>;

export function isHubSeoLocale(locale: Locale): locale is HubSeoLocale {
  return (HUB_SEO_LOCALES as string[]).includes(locale);
}

export function listHubSeoLocales(): HubSeoLocale[] {
  return [...HUB_SEO_LOCALES];
}

/** Locales whose hub URLs are published (sitemap, hreflang, IndexNow). */
export function listHubEnabledLocales(): HubSeoLocale[] {
  return HUB_SEO_LOCALES.filter((locale) => REGISTRY[locale].hubsEnabled);
}

export function hubLocaleConfig(locale: Locale): HubLocaleConfig | null {
  return isHubSeoLocale(locale) ? REGISTRY[locale] : null;
}

/** Hub-only locales reuse the English hotel catalog URLs. */
export function usesEnglishHotelCatalog(locale: Locale): boolean {
  return isHubSeoLocale(locale);
}

export function listHubSlugs(locale: Locale): string[] {
  const config = hubLocaleConfig(locale);
  if (!config || !config.hubsEnabled) return [];
  return [...config.content.hubSlugs];
}

export function isHubSlug(locale: Locale, slug: string): boolean {
  const config = hubLocaleConfig(locale);
  if (!config || !config.hubsEnabled) return false;
  return HUB_SLUG_SETS[config.locale].has(slug);
}

export function getHubHomepageContent(locale: Locale): HubLocaleContent["homepage"] | null {
  return hubLocaleConfig(locale)?.content.homepage ?? null;
}

export function getHubHomepageUi(locale: Locale): HubHomepageUi | null {
  return getHubHomepageContent(locale)?.ui ?? null;
}

export function getHubCityContent(locale: Locale, slug: string): HubCityContent | null {
  const config = hubLocaleConfig(locale);
  if (!config) return null;
  return config.content.hubs[slug] ?? null;
}

export function getHubCityDisplayName(locale: Locale, slug: string, fallback: string): string {
  const config = hubLocaleConfig(locale);
  if (!config) return fallback;
  return (
    config.content.cityDisplayNames[slug]?.trim() ||
    config.content.hubs[slug]?.displayName?.trim() ||
    fallback
  );
}

export function applyHubTemplate(template: string, count: number, cityName: string): string {
  return template
    .replaceAll("{count}", String(count))
    .replaceAll("{city}", cityName)
    .replaceAll("{brand}", "HotelsDrop");
}

export function getHubTitle(locale: Locale, slug: string, cityName: string, count: number): string | null {
  const title = getHubCityContent(locale, slug)?.title;
  return title ? applyHubTemplate(title, count, cityName) : null;
}

export function getHubMetaDescription(
  locale: Locale,
  slug: string,
  cityName: string,
  count: number,
): string | null {
  const description = getHubCityContent(locale, slug)?.metaDescription;
  return description ? applyHubTemplate(description, count, cityName) : null;
}

export function getHubFaq(locale: Locale, slug: string): HubFaqItem[] {
  return getHubCityContent(locale, slug)?.faq ?? [];
}

/** Internal path that also exists in this locale, or null when it must fall back to EN. */
export function hubAlternateInternalPath(locale: Locale, internalPath: string): string | null {
  const config = hubLocaleConfig(locale);
  if (!config) return null;

  const normalized = internalPath.replace(/\/+$/, "") || "/";
  if (normalized === "/") return "/";

  /** The index only makes sense once the hubs it links to are published. */
  if (normalized === "/destinazioni") return config.hubsEnabled ? normalized : null;

  const match = normalized.match(/^\/destinazioni\/([^/]+)$/);
  if (match && isHubSlug(locale, match[1]!)) return normalized;
  return null;
}

export function isHubSeoPublicInternalPath(internalPath: string, locale: Locale): boolean {
  return hubAlternateInternalPath(locale, internalPath) !== null;
}
