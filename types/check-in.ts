export type Locale = "it" | "en";

/** Alloggiati: 16 single, 17 head_family, 18 head_group, 19 family, 20 group */
export type GuestType =
  | "single"
  | "head_family"
  | "head_group"
  | "family"
  | "group";

export type MrzReviewField = 'documentNumber' | 'surname' | 'givenNames' | 'birthDate' | 'sex';

export interface MrzExtractedData {
  documentNumber: string;
  surname: string;
  givenNames: string;
  nationality: string;
  birthDate: string;
  sex: "M" | "F" | "X";
  expiryDate?: string;
  documentType?: string;
  rawMrz: string;
  /** Check digit MRZ ICAO validi */
  mrzValid?: boolean;
  /** Campi da ricontrollare manualmente */
  reviewFields?: MrzReviewField[];
}

export interface GuestRecord {
  id?: string;
  hotelAccountId: string;
  guestType: GuestType;
  arrivalDate: string;
  stayDays: number;
  surname: string;
  givenNames: string;
  sex: "M" | "F";
  birthDate: string;
  birthMunicipalityCode?: string;
  birthProvinceCode?: string;
  birthCountryCode: string;
  citizenshipCode: string;
  documentTypeCode?: string;
  documentNumber?: string;
  documentIssuePlaceCode?: string;
  exportedQuesturaAt?: string;
  createdAt?: string;
}

/** Layout record Alloggiati Web — 168 caratteri per riga (CREAFILE). */
export interface AlloggiatiRecord {
  guestTypeCode: string;
  arrivalDate: string;
  stayDays: string;
  surname: string;
  givenNames: string;
  sexCode: "1" | "2";
  birthDate: string;
  birthMunicipalityCode: string;
  birthProvinceCode: string;
  birthCountryCode: string;
  citizenshipCode: string;
  documentTypeCode: string;
  documentNumber: string;
  documentIssuePlaceCode: string;
}

export const ALLOGGIATI_RECORD_LENGTH = 168;
