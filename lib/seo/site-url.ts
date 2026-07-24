import { BRAND_DOMAIN, getAppUrl } from "@/lib/legal/company";

/** URL canonico pubblico (preferisce www in produzione). */
export function publicSiteOrigin(): string {
  const base = getAppUrl().replace(/\/$/, "");
  if (base === `https://${BRAND_DOMAIN}`) return `https://www.${BRAND_DOMAIN}`;
  if (base === `http://${BRAND_DOMAIN}`) return `http://www.${BRAND_DOMAIN}`;
  return base;
}

export const DEFAULT_OG_IMAGE =
  "https://tavbgqcsizqdceobauli.supabase.co/storage/v1/object/public/city-media/IT-ROM/colosseum.webp";
