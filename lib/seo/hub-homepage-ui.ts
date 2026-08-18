import type { Translations } from "@/lib/i18n/messages";
import type { Locale } from "@/lib/i18n/translations";
import { getDeHomepageContent } from "@/lib/seo/de-export-content";
import { isHubSeoLocale } from "@/lib/seo/hub-seo-locale";
import { getZhHomepageContent } from "@/lib/seo/zh-export-content";

export type HubHomepageUi = {
  showcase?: Partial<
    Pick<
      Translations["showcase"],
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
      | "cardMap"
    >
  >;
  common?: Partial<Pick<Translations["common"], "login">>;
  site?: Partial<Pick<Translations["site"], "contacts" | "becomePartner" | "registration">>;
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
    common: ui.common ? { ...t.common, ...ui.common } : t.common,
    site: ui.site ? { ...t.site, ...ui.site } : t.site,
    showcase: ui.showcase ? { ...t.showcase, ...ui.showcase } : t.showcase,
  };
}
