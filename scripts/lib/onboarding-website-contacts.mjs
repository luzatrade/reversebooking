/**
 * Estrae email e telefono da siti ufficiali (homepage + pagine contatti).
 */
import { extractEmailsFromHtml, pickBestEmail, normalizePublicEmail } from "./onboarding-email.mjs";

const CONTACT_PATHS = ["/contatti", "/contact", "/contacts", "/it/contatti", "/en/contact", "/contatti.html", "/contact-us"];

function hostFromUrl(url) {
  try {
    return new URL(url).hostname.replace(/^www\./i, "").toLowerCase();
  } catch {
    return null;
  }
}

export function extractPhonesFromHtml(html) {
  const found = new Map();
  for (const m of html.matchAll(/tel:([+\d\s().-]+)/gi)) {
    const raw = m[1].trim();
    const digits = raw.replace(/\D/g, "").replace(/^39/, "");
    if (digits.length >= 8 && digits.length <= 12) found.set(digits, formatItalianPhone(digits));
  }
  for (const m of html.matchAll(/(?<![\d+])(?:\+39\s?)?0\d{1,4}[\s./-]?\d{5,8}(?![\d])/g)) {
    const digits = m[0].replace(/\D/g, "").replace(/^39/, "");
    if (digits.length >= 9 && digits.length <= 11) found.set(digits, formatItalianPhone(digits));
  }
  for (const m of html.matchAll(/(?<![\d])3\d{2}[\s.-]?\d{6,7}(?![\d])/g)) {
    const digits = m[0].replace(/\D/g, "");
    if (digits.length === 10) found.set(digits, `+39 ${digits.slice(0, 3)} ${digits.slice(3)}`);
  }
  return [...found.values()];
}

function formatItalianPhone(digits) {
  if (digits.length === 10 && digits.startsWith("0")) {
    return `+39 ${digits.slice(0, 2)} ${digits.slice(2, 6)} ${digits.slice(6)}`.replace(/\s+/g, " ").trim();
  }
  if (digits.length === 9 && digits.startsWith("0")) {
    return `+39 ${digits.slice(0, 3)} ${digits.slice(3)}`;
  }
  if (digits.length === 10 && digits.startsWith("3")) {
    return `+39 ${digits.slice(0, 3)} ${digits.slice(3)}`;
  }
  return `+39 ${digits}`;
}

export function pickBestPhone(phones, websiteUrl) {
  if (!phones.length) return null;
  const landlines = phones.filter((p) => /\+39 0/.test(p));
  if (landlines.length) return landlines[0];
  return phones[0];
}

async function fetchHtml(url, timeoutMs = 10000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      redirect: "follow",
      headers: {
        Accept: "text/html,application/xhtml+xml",
        "User-Agent": "Mozilla/5.0 (compatible; HotelsDropOnboarding/1.0)",
        "Accept-Language": "it-IT,it;q=0.9,en;q=0.8",
      },
    });
    if (!res.ok) return null;
    const ct = res.headers.get("content-type") ?? "";
    if (!ct.includes("text/html") && !ct.includes("application/xhtml")) return null;
    const html = await res.text();
    if (html.length > 800_000) return html.slice(0, 800_000);
    return html;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function urlsToTry(baseUrl) {
  let base = baseUrl.trim();
  if (!/^https?:\/\//i.test(base)) base = `https://${base}`;
  const origin = new URL(base).origin;
  const urls = new Set([base, origin + "/"]);
  for (const p of CONTACT_PATHS) urls.add(origin + p);
  return [...urls];
}

export async function fetchContactsFromWebsite(websiteUri, { timeoutMs = 10000 } = {}) {
  if (!websiteUri?.trim()) return { email: null, phones: [], pages: [] };

  const emails = new Set();
  const phones = new Set();
  const pages = [];

  for (const url of urlsToTry(websiteUri)) {
    const html = await fetchHtml(url, timeoutMs);
    if (!html) continue;
    pages.push(url);
    for (const e of extractEmailsFromHtml(html)) emails.add(e);
    for (const p of extractPhonesFromHtml(html)) phones.add(p);
    if (emails.size && phones.size) break;
  }

  const emailList = [...emails];
  const phoneList = [...phones];
  return {
    email: pickBestEmail(emailList, websiteUri),
    phones: phoneList,
    phone: pickBestPhone(phoneList, websiteUri),
    pages,
  };
}

export function normPhoneDigits(p) {
  return String(p || "").replace(/\D/g, "").replace(/^39/, "");
}

export function phonesEquivalent(a, b) {
  const na = normPhoneDigits(a);
  const nb = normPhoneDigits(b);
  if (!na || !nb) return false;
  return na === nb || na.endsWith(nb) || nb.endsWith(na);
}
