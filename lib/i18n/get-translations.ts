import { cookies } from "next/headers";
import { LOCALE_COOKIE, parseLocaleCookie } from "@/lib/i18n/cookie";
import { getTranslations, type Translations } from "@/lib/i18n/messages";
import type { Locale } from "@/lib/i18n/translations";

export type { Translations };
export { getTranslations };

export async function getServerLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  return parseLocaleCookie(cookieStore.get(LOCALE_COOKIE)?.value);
}

export async function getServerTranslations(): Promise<Translations> {
  return getTranslations(await getServerLocale());
}
