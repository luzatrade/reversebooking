/**
 * Scraping leggero: fetch della homepage di un hotel e ricerca email.
 * Timeout di 5 secondi, best-effort.
 */

const TIMEOUT_MS = 5000;

const EMAIL_REGEX =
  /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g;

// Priorità: email "utili" prima di quelle generiche
const PRIORITY_PREFIXES = [
  "info@",
  "prenotazioni@",
  "booking@",
  "reception@",
  "reservations@",
  "hotel@",
  "contatti@",
  "direzione@",
];

const BLACKLIST_DOMAINS = [
  "example.com",
  "sentry.io",
  "wixpress.com",
  "googleapis.com",
  "w3.org",
  "schema.org",
  "facebook.com",
  "instagram.com",
  "twitter.com",
  "google.com",
  "cloudflare.com",
  "jquery.com",
  "wordpress.org",
  "gravatar.com",
];

const JUNK_PATTERNS = [
  /\.(png|jpg|jpeg|gif|svg|webp|css|js)$/i,
  /^[a-f0-9]{20,}@/i,
  /[0-9]{8,}@/,
];

function isBlacklisted(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase() ?? "";
  if (BLACKLIST_DOMAINS.some((d) => domain.endsWith(d))) return true;
  if (JUNK_PATTERNS.some((rx) => rx.test(email))) return true;
  if (email.length > 60) return true;
  return false;
}

function priorityScore(email: string): number {
  const lower = email.toLowerCase();
  const idx = PRIORITY_PREFIXES.findIndex((p) => lower.startsWith(p));
  return idx >= 0 ? idx : PRIORITY_PREFIXES.length;
}

export async function scrapeEmailFromWebsite(
  url: string,
): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; HotelsDrop/1.0; +https://hotelsdrop.com)",
        Accept: "text/html",
      },
      redirect: "follow",
    });
    clearTimeout(timeout);

    if (!response.ok) return null;

    const html = await response.text();
    const matches = html.match(EMAIL_REGEX);
    if (!matches || matches.length === 0) return null;

    const unique = [...new Set(matches.map((e) => e.toLowerCase()))];
    const filtered = unique.filter((e) => !isBlacklisted(e));
    if (filtered.length === 0) return null;

    filtered.sort((a, b) => priorityScore(a) - priorityScore(b));
    return filtered[0];
  } catch {
    return null;
  }
}
