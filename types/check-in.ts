export type Locale = "it" | "en";

export type GuestType =
  | "single"
  | "head_family"
  | "family"
  | "head_group"
  | "group";

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
  createdAt?: string;
}
