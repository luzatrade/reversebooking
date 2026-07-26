import { buildDestinationSlug } from "@/lib/seo/city-canonical";
import { canonicalUrl } from "@/lib/seo/canonical";
import { localizedPath } from "@/lib/i18n/routing";
import { publicSiteOrigin } from "@/lib/seo/site-url";
import type { Locale } from "@/lib/i18n/translations";

/** Endpoint condiviso IndexNow (Bing, Yandex, Naver, Seznam, ecc.). */
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const BING_INDEXNOW_ENDPOINT = "https://www.bing.com/indexnow";
const LOCALES: Locale[] = ["it", "en"];
const MAX_URLS_PER_REQUEST = 10_000;

export type IndexNowResult = {
  ok: boolean;
  status?: number;
  submitted: number;
  error?: string;
};

export function getIndexNowApiKey(): string | null {
  const key = process.env.INDEXNOW_API_KEY?.trim();
  return key || null;
}

export function getIndexNowKeyLocation(): string | null {
  const key = getIndexNowApiKey();
  if (!key) return null;

  const override = process.env.INDEXNOW_KEY_LOCATION?.trim();
  if (override) return override;

  return canonicalUrl(`/${key}.txt`);
}

export function localizedCanonicalUrls(internalPath: string): string[] {
  return LOCALES.map((locale) => canonicalUrl(localizedPath(locale, internalPath)));
}

export function structureIndexNowUrls(slug: string, previousSlug?: string | null): string[] {
  const urls = localizedCanonicalUrls(`/hotel/${slug}`);
  if (previousSlug && previousSlug !== slug) {
    urls.push(...localizedCanonicalUrls(`/hotel/${previousSlug}`));
  }
  return [...new Set(urls)];
}

export function destinationIndexNowUrls(cityNameOrSlug: string): string[] {
  const slug =
    cityNameOrSlug.includes("-") && !cityNameOrSlug.includes(" ")
      ? cityNameOrSlug
      : buildDestinationSlug(cityNameOrSlug);
  return localizedCanonicalUrls(`/destinazioni/${slug}`);
}

function indexNowHost(): string {
  return new URL(publicSiteOrigin()).host;
}

async function postIndexNowBatch(
  endpoint: string,
  key: string,
  keyLocation: string,
  urlList: string[],
): Promise<IndexNowResult> {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: indexNowHost(),
      key,
      keyLocation,
      urlList,
    }),
  });

  if (response.status === 200 || response.status === 202) {
    return { ok: true, status: response.status, submitted: urlList.length };
  }

  const error = await response.text().catch(() => response.statusText);
  return {
    ok: false,
    status: response.status,
    submitted: urlList.length,
    error: error || response.statusText,
  };
}

/**
 * Notifica Bing e gli altri motori IndexNow di URL aggiornati o nuovi.
 * @see https://www.indexnow.org/documentation
 */
export async function notifyIndexNow(urls: string[]): Promise<IndexNowResult> {
  const key = getIndexNowApiKey();
  if (!key) {
    return { ok: false, submitted: 0, error: "INDEXNOW_API_KEY non configurata" };
  }

  const keyLocation = getIndexNowKeyLocation();
  if (!keyLocation) {
    return { ok: false, submitted: 0, error: "Impossibile risolvere keyLocation IndexNow" };
  }

  const unique = [...new Set(urls.map((url) => url.trim()).filter(Boolean))];
  if (!unique.length) {
    return { ok: true, submitted: 0 };
  }

  for (let offset = 0; offset < unique.length; offset += MAX_URLS_PER_REQUEST) {
    const batch = unique.slice(offset, offset + MAX_URLS_PER_REQUEST);

    const shared = await postIndexNowBatch(INDEXNOW_ENDPOINT, key, keyLocation, batch);
    if (!shared.ok) return shared;

    const bing = await postIndexNowBatch(BING_INDEXNOW_ENDPOINT, key, keyLocation, batch);
    if (!bing.ok) return bing;
  }

  return { ok: true, submitted: unique.length, status: 202 };
}

/** Fire-and-forget: non blocca la richiesta e non propaga errori. */
export function notifyIndexNowAsync(urls: string[]): void {
  void notifyIndexNow(urls).then((result) => {
    if (!result.ok) {
      console.warn("[IndexNow] notifica fallita:", result.error ?? result.status);
    }
  });
}

export function notifyInternalPathsAsync(internalPaths: string[]): void {
  const urls = internalPaths.flatMap((path) => localizedCanonicalUrls(path));
  notifyIndexNowAsync(urls);
}
