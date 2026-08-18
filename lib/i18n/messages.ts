import { uiLocale } from "@/lib/i18n/ui-locale";
import { translations, type Locale } from "@/lib/i18n/translations";

export type Translations = (typeof translations)["it" | "en"];

export function getTranslations(locale: Locale): Translations {
  return translations[uiLocale(locale)];
}
