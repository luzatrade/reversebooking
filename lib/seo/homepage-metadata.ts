import { getDeHomepageContent, isDeSeoLocale } from "@/lib/seo/de-export-content";
import { trimSeoDescription } from "@/lib/seo/serp-copy";
import type { Locale } from "@/lib/i18n/translations";
import type { Translations } from "@/lib/i18n/messages";

export function buildHomepageSeoCopy(locale: Locale, t: Translations) {
  if (isDeSeoLocale(locale)) {
    const de = getDeHomepageContent();
    return {
      title: de.title || t.metadata.siteTitleDefault,
      description: trimSeoDescription(de.metaDescription || t.metadata.siteDescription),
      heroHeadline: de.heroHeadline || t.showcase.homeHeadline,
      heroSubheadline: de.heroSubheadline || t.showcase.homeSubtitle,
    };
  }

  return {
    title: t.metadata.siteTitleDefault,
    description: trimSeoDescription(t.metadata.siteDescription),
    heroHeadline: t.showcase.homeHeadline,
    heroSubheadline: t.showcase.homeSubtitle,
  };
}
