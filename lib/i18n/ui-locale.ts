import type { Locale } from "@/lib/i18n/translations";

/** UI strings exist only for IT/EN; DE/ZH hub pages reuse English chrome. */
export type UiLocale = "it" | "en";

export function uiLocale(locale: Locale): UiLocale {
  return locale === "it" ? "it" : "en";
}
