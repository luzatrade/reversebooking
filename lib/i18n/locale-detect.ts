import type { NextRequest } from "next/server";
import { LOCALE_COOKIE, isLocale } from "@/lib/i18n/cookie";
import type { Locale } from "@/lib/i18n/translations";

/** Cookie first, then Accept-Language primary tag, default Italian. */
export function preferredLocaleFromRequest(request: NextRequest): Locale {
  const cookieValue = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(cookieValue)) return cookieValue;

  const header = request.headers.get("accept-language") ?? "";
  const primary = header.split(",")[0]?.trim().toLowerCase() ?? "";
  if (primary.startsWith("en")) return "en";
  if (primary.startsWith("de")) return "de";
  if (primary.startsWith("it")) return "it";

  if (/\bde[-_;]|[-_;]de\b/.test(header.toLowerCase())) return "de";
  if (/\ben[-_;]|[-_;]en\b/.test(header.toLowerCase())) return "en";
  return "it";
}
