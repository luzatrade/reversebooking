/**
 * Valuta se un'email onboarding è attendibile (non template/aggregatore).
 */
import { normalizePublicEmail } from "./onboarding-email.mjs";

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
  "virgilio.it",
  "email.it",
  "proton.me",
  "protonmail.com",
]);

const JUNK_LOCAL_PARTS = new Set([
  "hotel.contact.us",
  "contact.us",
  "your.email",
  "example",
  "test",
  "info.example",
]);

const AGGREGATOR_DOMAINS = new Set([
  "booking.com",
  "tripadvisor.com",
  "expedia.com",
  "hotels.com",
  "agoda.com",
  "hosthero.it",
  "italyhotels.it",
  "globostay.com",
  "centralstay.eu",
]);

function isAggregatorEmailDomain(domain) {
  if (AGGREGATOR_DOMAINS.has(domain)) return true;
  for (const blocked of AGGREGATOR_DOMAINS) {
    if (domain.endsWith(`.${blocked}`)) return true;
  }
  return false;
}

export function hostFromWebsite(url) {
  try {
    return new URL(url).hostname.replace(/^www\./i, "").toLowerCase();
  } catch {
    return null;
  }
}

export function emailDomainMatchesWebsite(email, websiteUrl) {
  const norm = normalizePublicEmail(email);
  if (!norm || !websiteUrl?.trim()) return false;
  const host = hostFromWebsite(websiteUrl);
  if (!host) return false;
  const domain = norm.split("@")[1];
  if (domain === host) return true;
  if (host.endsWith(`.${domain}`) || domain.endsWith(`.${host}`)) return true;
  const hostBase = host.split(".").slice(-2).join(".");
  const domainBase = domain.split(".").slice(-2).join(".");
  if (hostBase === domainBase) return true;
  return false;
}

/** Email palesemente finta / template scraper. */
export function isJunkOnboardingEmail(email) {
  const norm = normalizePublicEmail(email);
  if (!norm) return true;
  const [local, domain] = norm.split("@");
  if (JUNK_LOCAL_PARTS.has(local)) return true;
  if (local.includes("contact.us")) return true;
  if (AGGREGATOR_DOMAINS.has(domain) || isAggregatorEmailDomain(domain)) return true;
  return false;
}

/**
 * Email reale per onboarding: freemail ok, dominio = sito ok, PEC ok.
 * Rifiuta junk, aggregatori e dominio non correlato al sito ufficiale.
 */
export function isRealOnboardingEmail(email, websiteUrl) {
  const norm = normalizePublicEmail(email);
  if (!norm || isJunkOnboardingEmail(norm)) return false;

  const domain = norm.split("@")[1] ?? "";
  if (domain.endsWith(".pec.it") || domain.endsWith(".pec.eu")) return true;
  if (FREEMAIL_DOMAINS.has(domain)) return true;
  if (websiteUrl?.trim() && emailDomainMatchesWebsite(norm, websiteUrl)) return true;

  // Catene hotel: dominio parent senza sito match (es. accor.com, hyatt.com)
  const knownChainDomains = [
    "accor.com",
    "hyatt.com",
    "marriott.com",
    "hilton.com",
    "ihg.com",
    "starhotels.com",
    "starhotels.it",
    "dorchestercollection.com",
    "fourseasons.com",
    "radissonhotels.com",
    "tivoli-hotels.com",
    "room-matehotels.com",
    "portraitcollection.com",
    "lungarnocollection.com",
    "armanihotels.com",
    "bulgarihotels.com",
    "milanhotel.it",
    "bbhotels.it",
    "hotel-bb.com",
    "mokinba.it",
    "ih-hotels.com",
    "operaser.it",
    "deicavaliericollection.com",
    "urbanhivehotels.com",
    "nh-hotels.com",
    "nh-hotels.it",
    "avani-hotels.com",
    "melia.com",
    "unaitalianhospitality.com",
    "mandarinoriental.com",
    "sonder.com",
    "lvrh.it",
    "homacollection.it",
    "casacipriani.com",
    "bestwestern.com",
    "leonardo-hotels.com",
    "unahotels.com",
    "venicecollection.com",
    "evokcollection.com",
    "sanmarcohotels.com",
    "bzarhotels.it",
    "baglionihotels.com",
    "roccofortehotels.com",
    "casualhoteles.com",
  ];
  if (knownChainDomains.some((d) => domain === d || domain.endsWith(`.${d}`))) return true;

  return false;
}
