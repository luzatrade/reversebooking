/**
 * Titolare legale e brand HotelsDrop.com.
 * Sede legale: completare quando disponibile.
 */

export const BRAND_NAME = "HotelsDrop";
export const BRAND_DISPLAY = "HotelsDrop.com";
export const BRAND_DOMAIN = "hotelsdrop.com";
export const LEGAL_ENTITY_NAME = "FINEHOST";

export function getAppUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_APP_URL?.trim().replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  return `https://www.${BRAND_DOMAIN}`;
}

export const LEGAL_LAST_UPDATED = "17 maggio 2026";

export const TERMS_VERSION = "2026-05-17";
export const PRIVACY_VERSION = "2026-05-17";
export const COOKIE_POLICY_VERSION = "2026-05-17";
export const SUBSCRIPTION_TERMS_VERSION = "2026-05-17";

export type CompanyInfo = {
  companyName: string;
  legalEntityName: string;
  businessName: string;
  vatNumber: string;
  taxCode: string;
  legalAddress: string;
  city: string;
  postalCode: string;
  country: string;
  pecEmail: string;
  supportEmail: string;
  phone: string;
  websiteUrl: string;
  atecoCode: string;
  reaNumber?: string;
  legalAddressPending?: boolean;
};

export const company: CompanyInfo = {
  companyName: BRAND_DISPLAY,
  legalEntityName: LEGAL_ENTITY_NAME,
  businessName: "Marketplace digitale che mette in contatto viaggiatori e strutture ricettive",
  vatNumber: "03324910805",
  taxCode: "03324910805",
  legalAddress: "Sede legale — indirizzo in aggiornamento",
  city: "",
  postalCode: "",
  country: "Italia",
  legalAddressPending: true,
  pecEmail: "lucianozavaglia@pec.it",
  supportEmail: "info@hotelsdrop.com",
  phone: "+39 334 334 3827",
  websiteUrl: getAppUrl(),
  atecoCode: "63.12.00 — Portali web",
};

export function formatLegalAddress(): string {
  if (company.legalAddressPending || !company.city) {
    return company.legalAddress;
  }
  return `${company.legalAddress}, ${company.postalCode} ${company.city} — ${company.country}`;
}

export type CompanyContactEmailId = "partnerSupport" | "billing" | "sales" | "general";

export type CompanyContactEmail = {
  id: CompanyContactEmailId;
  email: string;
};

/** Indirizzi email pubblici, in ordine di priorità per la pagina Contatti. */
export const companyContactEmails: CompanyContactEmail[] = [
  { id: "partnerSupport", email: "partner-support@hotelsdrop.com" },
  { id: "billing", email: "billing@hotelsdrop.com" },
  { id: "sales", email: "sales@hotelsdrop.com" },
  { id: "general", email: "info@hotelsdrop.com" },
];
