/**
 * Dati aziendali e versioni documenti. Aggiornare con i dati effettivi dell’esercente prima o subito dopo il go-live.
 */

export const BRAND_NAME = "HotelsDrop";
export const BRAND_DOMAIN = "hotelsdrop.com";

/** URL pubblico dell’app (env in produzione, dominio di default in locale senza env). */
export function getAppUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_APP_URL?.trim().replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  return `https://${BRAND_DOMAIN}`;
}

export const LEGAL_LAST_UPDATED = "17 maggio 2026";

/** Versioni documenti per consensi e tracciabilità */
export const TERMS_VERSION = "2026-05-17";
export const PRIVACY_VERSION = "2026-05-17";
export const COOKIE_POLICY_VERSION = "2026-05-17";

export type CompanyInfo = {
  companyName: string;
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
};

export const company: CompanyInfo = {
  companyName: BRAND_NAME,
  businessName: "Piattaforma per richieste di soggiorno e offerte da strutture ricettive",
  vatNumber: "IT00000000000",
  taxCode: "00000000000",
  legalAddress: "Via Esempio 1",
  city: "Milano",
  postalCode: "00000",
  country: "Italia",
  pecEmail: "pec@hotelsdrop.com",
  supportEmail: "supporto@hotelsdrop.com",
  phone: "+39 000 000 0000",
  websiteUrl: getAppUrl(),
  atecoCode: "63.12.00 - Portali web",
  reaNumber: "MI-0000000",
};
