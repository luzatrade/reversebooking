import { getHubHomepageContent } from "@/lib/seo/hub-locale-registry";
import { trimSeoDescription } from "@/lib/seo/serp-copy";
import type { Locale } from "@/lib/i18n/translations";
import type { Translations } from "@/lib/i18n/messages";

export function buildHomepageSeoCopy(locale: Locale, t: Translations) {
  const hub = getHubHomepageContent(locale);

  if (hub) {
    return {
      title: hub.title || t.metadata.siteTitleDefault,
      description: trimSeoDescription(hub.metaDescription || t.metadata.siteDescription),
      heroHeadline: hub.heroHeadline || t.showcase.homeHeadline,
      heroSubheadline: hub.heroSubheadline || t.showcase.homeSubtitle,
      heroEntityIntro: hub.heroEntityIntro || t.showcase.homeEntityIntro,
    };
  }

  return {
    title: t.metadata.siteTitleDefault,
    description: trimSeoDescription(t.metadata.siteDescription),
    heroHeadline: t.showcase.homeHeadline,
    heroSubheadline: t.showcase.homeSubtitle,
    heroEntityIntro: t.showcase.homeEntityIntro,
  };
}
