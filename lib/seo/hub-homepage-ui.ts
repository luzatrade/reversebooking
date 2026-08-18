import type { Translations } from "@/lib/i18n/messages";
import type { Locale } from "@/lib/i18n/translations";
import { getHubHomepageUi, isHubSeoLocale } from "@/lib/seo/hub-locale-registry";

export type { HubHomepageUi } from "@/lib/seo/hub-locale-registry";

/** Merge hub SEO export UI strings over English chrome for hub-only locales. */
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
