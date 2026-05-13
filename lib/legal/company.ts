/**
 * Dati aziendali e versioni documenti. Aggiornare con i dati effettivi dell’esercente prima o subito dopo il go-live.
 */

export const LEGAL_LAST_UPDATED = "13 maggio 2026";

/** Versioni documenti per consensi e tracciabilità */
export const TERMS_VERSION = "2026-05-13";
export const PRIVACY_VERSION = "2026-05-13";
export const COOKIE_POLICY_VERSION = "2026-05-13";

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
  companyName: "Reverse Booking",
  businessName: "Piattaforma per richieste di soggiorno e offerte da strutture ricettive",
  vatNumber: "IT00000000000",
  taxCode: "00000000000",
  legalAddress: "Via Esempio 1",
  city: "Milano",
  postalCode: "00000",
  country: "Italia",
  pecEmail: "pec.esempio@legalmail.it",
  supportEmail: "supporto@esempio.it",
  phone: "+39 000 000 0000",
  websiteUrl: "https://www.esempio-reversebooking.it",
  atecoCode: "63.12.00 - Portali web",
  reaNumber: "MI-0000000",
};
