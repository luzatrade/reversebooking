export type GeoCoords = {
  latitude: number;
  longitude: number;
};

export type ExtractGoogleMapsCoordsResult =
  | {
      ok: true;
      coords: GeoCoords;
      finalUrl: string;
      source: "place_pin" | "at_sign" | "query_param";
    }
  | {
      ok: false;
      error: string;
      finalUrl?: string;
    };

const FETCH_HEADERS: HeadersInit = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
};

const PLACE_PIN_RE = /!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/;
const AT_SIGN_RE = /@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/;
const QUERY_LL_RE = /[?&]ll=(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/;
const QUERY_Q_RE = /[?&]q=(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/;

const MAX_REDIRECTS = 12;
const FETCH_TIMEOUT_MS = 20_000;

function normalizeMapsInputUrl(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;

  try {
    const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
    const parsed = new URL(withProtocol);
    if (!parsed.hostname) return null;
    return parsed.href;
  } catch {
    return null;
  }
}

function roundCoord(value: number): number {
  return Math.round(value * 1e7) / 1e7;
}

function isValidCoords(lat: number, lng: number): boolean {
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return false;
  if (lat < -90 || lat > 90 || lng < -180 || lng > 180) return false;
  if (lat === 0 && lng === 0) return false;
  return true;
}

function parseCoords(
  latRaw: string,
  lngRaw: string,
): GeoCoords | null {
  const latitude = roundCoord(Number(latRaw));
  const longitude = roundCoord(Number(lngRaw));
  if (!isValidCoords(latitude, longitude)) return null;
  return { latitude, longitude };
}

/**
 * Estrae lat/lng da un URL Google Maps (finale o intermedio).
 * Prova prima il pin preciso (!3d…!4d…), poi @lat,lng, infine parametri query.
 */
export function extractCoordsFromGoogleMapsUrl(url: string): ExtractGoogleMapsCoordsResult {
  const placePin = url.match(PLACE_PIN_RE);
  if (placePin) {
    const coords = parseCoords(placePin[1], placePin[2]);
    if (coords) {
      return { ok: true, coords, finalUrl: url, source: "place_pin" };
    }
  }

  const atSign = url.match(AT_SIGN_RE);
  if (atSign) {
    const coords = parseCoords(atSign[1], atSign[2]);
    if (coords) {
      return { ok: true, coords, finalUrl: url, source: "at_sign" };
    }
  }

  const queryLl = url.match(QUERY_LL_RE);
  if (queryLl) {
    const coords = parseCoords(queryLl[1], queryLl[2]);
    if (coords) {
      return { ok: true, coords, finalUrl: url, source: "query_param" };
    }
  }

  const queryQ = url.match(QUERY_Q_RE);
  if (queryQ) {
    const coords = parseCoords(queryQ[1], queryQ[2]);
    if (coords) {
      return { ok: true, coords, finalUrl: url, source: "query_param" };
    }
  }

  return { ok: false, error: "Coordinate non trovate nell'URL Google Maps", finalUrl: url };
}

/**
 * Segue i redirect HTTP (header Location) fino all'URL finale Google Maps.
 */
export async function resolveGoogleMapsUrl(
  rawUrl: string,
  options?: { signal?: AbortSignal },
): Promise<{ finalUrl: string; chain: string[] } | { error: string }> {
  const startUrl = normalizeMapsInputUrl(rawUrl);
  if (!startUrl) {
    return { error: "URL Google Maps non valido" };
  }

  const chain: string[] = [startUrl];
  let current = startUrl;

  for (let hop = 0; hop < MAX_REDIRECTS; hop += 1) {
    let response: Response;
    try {
      response = await fetch(current, {
        method: "GET",
        redirect: "manual",
        headers: FETCH_HEADERS,
        signal: options?.signal ?? AbortSignal.timeout(FETCH_TIMEOUT_MS),
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Errore di rete";
      return { error: message };
    }

    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location");
      if (!location) {
        return { error: `Redirect ${response.status} senza header Location` };
      }
      current = new URL(location, current).href;
      chain.push(current);
      continue;
    }

    if (response.url && response.url !== current) {
      current = response.url;
      if (chain[chain.length - 1] !== current) {
        chain.push(current);
      }
    }

    return { finalUrl: current, chain };
  }

  return { error: `Troppi redirect (>${MAX_REDIRECTS})` };
}

/**
 * Risolve i redirect del link breve/lungo e ne estrae lat/lng via regex sull'URL finale.
 */
export async function extractCoordsFromGoogleMapsLink(
  rawUrl: string,
  options?: { signal?: AbortSignal },
): Promise<ExtractGoogleMapsCoordsResult> {
  const resolved = await resolveGoogleMapsUrl(rawUrl, options);
  if ("error" in resolved) {
    return { ok: false, error: resolved.error };
  }

  for (let i = resolved.chain.length - 1; i >= 0; i -= 1) {
    const attempt = extractCoordsFromGoogleMapsUrl(resolved.chain[i]);
    if (attempt.ok) {
      return attempt;
    }
  }

  return {
    ok: false,
    error: "Coordinate non trovate dopo il resolve dei redirect",
    finalUrl: resolved.finalUrl,
  };
}
