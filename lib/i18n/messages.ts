import { translations, type Locale } from "@/lib/i18n/translations";

export type Translations = (typeof translations)[Locale];

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
