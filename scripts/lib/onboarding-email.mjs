/**
 * Estrae un'email pubblica dal sito web della struttura (mailto: o testo in pagina).
 */

const EMAIL_RE = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

const BLOCKED_DOMAINS = new Set([
  "example.com",
  "sentry.io",
  "wixpress.com",
  "facebook.com",
  "instagram.com",
  "google.com",
  "googleapis.com",
  "gstatic.com",
  "cloudflare.com",
  "wordpress.com",
  "w3.org",
  "schema.org",
  "tripadvisor.com",
  "booking.com",
  "expedia.com",
]);

const PREFERRED_LOCAL_PARTS = [
  "info",
  "reception",
  "booking",
  "prenotazioni",
  "reservations",
  "hotel",
  "contact",
  "contatti",
  "segreteria",
];

export function normalizePublicEmail(raw) {
  if (!raw) return null;
  const cleaned = String(raw)
    .trim()
    .toLowerCase()
    .replace(/^mailto:/i, "")
    .split("?")[0]
    ?.trim();
  if (!cleaned || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned)) return null;
  if (cleaned.length > 80) return null;
  const [local, domain] = cleaned.split("@");
  if (!local || !domain) return null;
  if (BLOCKED_DOMAINS.has(domain)) return null;
  if (/\.(png|jpg|jpeg|gif|webp|svg|woff|css)$/i.test(domain)) return null;
  if (/(noreply|no-reply|donotreply|privacy|gdpr|newsletter|marketing|analytics|sentry)/i.test(local)) {
    return null;
  }
  return cleaned;
}

export function extractEmailsFromHtml(html) {
  const found = new Set();
  for (const match of html.matchAll(/mailto:([^"'>\s]+)/gi)) {
    const email = normalizePublicEmail(match[1]);
    if (email) found.add(email);
  }
  for (const match of html.matchAll(EMAIL_RE)) {
    const email = normalizePublicEmail(match[0]);
    if (email) found.add(email);
  }
  return [...found];
}

function hostFromUrl(url) {
  try {
    return new URL(url).hostname.replace(/^www\./i, "").toLowerCase();
  } catch {
    return null;
  }
}

export function pickBestEmail(emails, websiteUrl) {
  if (!emails.length) return null;
  const host = hostFromUrl(websiteUrl);
  if (host) {
    const sameDomain = emails.find((email) => {
      const domain = email.split("@")[1] ?? "";
      return domain === host || host.endsWith(`.${domain}`) || domain.endsWith(`.${host}`);
    });
    if (sameDomain) return sameDomain;
  }
  for (const prefix of PREFERRED_LOCAL_PARTS) {
    const hit = emails.find((email) => email.startsWith(`${prefix}@`));
    if (hit) return hit;
  }
  return emails[0] ?? null;
}

export async function fetchEmailFromWebsite(websiteUri, { timeoutMs = 8000 } = {}) {
  if (!websiteUri?.trim()) return null;

  let url = websiteUri.trim();
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      redirect: "follow",
      headers: {
        Accept: "text/html,application/xhtml+xml",
        "User-Agent": "HotelsDropOnboarding/1.0 (+https://hotelsdrop.com)",
      },
    });
    if (!res.ok) return null;
    const contentType = res.headers.get("content-type") ?? "";
    if (!contentType.includes("text/html") && !contentType.includes("application/xhtml")) return null;
    const html = await res.text();
    if (html.length > 600_000) return null;
    return pickBestEmail(extractEmailsFromHtml(html), url);
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}
