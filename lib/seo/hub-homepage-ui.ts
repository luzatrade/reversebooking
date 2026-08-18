import type { Translations } from "@/lib/i18n/messages";
import type { Locale } from "@/lib/i18n/translations";
import { getDeHomepageContent } from "@/lib/seo/de-export-content";
import { isHubSeoLocale } from "@/lib/seo/hub-seo-locale";
import { getZhHomepageContent } from "@/lib/seo/zh-export-content";

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

function getHubHomepageUi(locale: Locale): HubHomepageUi | null {
  if (locale === "de") return getDeHomepageContent().ui ?? null;
  if (locale === "zh") return getZhHomepageContent().ui ?? null;
  return null;
}

/** Merge hub SEO export UI strings over English chrome for DE/ZH homepage showcase. */
export function mergeHubHomepageTranslations(t: Translations, locale: Locale): Translations {
  if (!isHubSeoLocale(locale)) return t;

  const ui = getHubHomepageUi(locale);
  if (!ui) return t;

  return {
    ...t,
    common: { ...t.common, ...ui.common },
    site: { ...t.site, ...ui.site },
    showcase: { ...t.showcase, ...ui.showcase },
  } as Translations;
}
