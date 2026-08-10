/**
 * Estrae un'email pubblica dal sito web della struttura (mailto: o testo in pagina).
 */

const EMAIL_RE = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

const BLOCKED_DOMAINS = new Set([
  "example.com",
  "ourdomain.com",
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
  "centralstay.eu",
  "globostay.com",
  "hosthero.it",
  "italyhotels.it",
]);

/** Domini parziali (channel manager / template) */
const BLOCKED_DOMAIN_FRAGMENTS = [
  "wixpress",
  "sentry",
  "centralstay",
  "globostay",
  "hosthero",
  "italyhotels",
  "ourdomain",
];

const FREEMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "outlook.com",
  "hotmail.com",
  "hotmail.it",
  "live.com",
  "yahoo.com",
  "yahoo.it",
  "alice.it",
  "tiscali.it",
  "libero.it",
  "icloud.com",
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
    ?.trim()
    .replace(/^%20+/, "");
  if (!cleaned || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned)) return null;
  if (cleaned.length > 80) return null;
  const [local, domain] = cleaned.split("@");
  if (!local || !domain) return null;
  if (BLOCKED_DOMAINS.has(domain)) return null;
  if (BLOCKED_DOMAIN_FRAGMENTS.some((frag) => domain.includes(frag))) return null;
  if (/\.(png|jpg|jpeg|gif|webp|svg|woff|css)$/i.test(domain)) return null;
  if (/(noreply|no-reply|donotreply|unsubscribe|privacy|gdpr|newsletter|marketing|analytics|sentry|wixpress)/i.test(local)) {
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

export function emailDomainMatchesWebsite(email, websiteUrl) {
  const norm = normalizePublicEmail(email);
  if (!norm || !websiteUrl?.trim()) return false;
  const host = hostFromUrl(websiteUrl);
  if (!host) return false;
  const domain = norm.split("@")[1];
  if (domain === host) return true;
  if (host.endsWith(`.${domain}`) || domain.endsWith(`.${host}`)) return true;
  const hostBase = host.split(".").slice(-2).join(".");
  const domainBase = domain.split(".").slice(-2).join(".");
  return hostBase === domainBase;
}

/**
 * Email da rimuovere: aggregatori, placeholder, portali su dominio diverso dal sito.
 * Mantiene: dominio = sito, PEC, freemail (gmail/alice/…).
 */
export function isSuspiciousOnboardingEmail(email, websiteUrl) {
  const norm = normalizePublicEmail(email);
  if (!norm) return true;

  const domain = norm.split("@")[1] ?? "";
  if (BLOCKED_DOMAINS.has(domain)) return true;
  if (BLOCKED_DOMAIN_FRAGMENTS.some((frag) => domain.includes(frag))) return true;

  const local = norm.split("@")[0] ?? "";
  if (/^(support|contact|booking|prenotazioni|reservations)@/i.test(norm) && websiteUrl) {
    if (!emailDomainMatchesWebsite(norm, websiteUrl) && !FREEMAIL_DOMAINS.has(domain)) {
      return true;
    }
  }

  if (domain.endsWith(".pec.it") || domain.endsWith(".pec.eu")) return false;
  if (FREEMAIL_DOMAINS.has(domain)) return false;

  if (websiteUrl?.trim() && !emailDomainMatchesWebsite(norm, websiteUrl)) {
    if (/^(webmaster|admin|noreply)@/i.test(norm)) return true;
    if (domain.includes("piramedia") || domain.includes("dicurziohospitality")) return true;
  }

  return false;
}

export function pickBestEmail(emails, websiteUrl) {
  if (!emails.length) return null;
  const clean = emails.map((e) => normalizePublicEmail(e)).filter(Boolean);
  const trusted = clean.filter((e) => !isSuspiciousOnboardingEmail(e, websiteUrl));
  const pool = trusted.length ? trusted : [];

  const host = hostFromUrl(websiteUrl);
  if (host) {
    const sameDomain = pool.find((email) => emailDomainMatchesWebsite(email, websiteUrl));
    if (sameDomain) return sameDomain;
  }
  for (const prefix of PREFERRED_LOCAL_PARTS) {
    const hit = pool.find((email) => email.startsWith(`${prefix}@`));
    if (hit) return hit;
  }
  const freemail = pool.find((email) => FREEMAIL_DOMAINS.has(email.split("@")[1]));
  if (freemail) return freemail;
  return pool[0] ?? null;
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
