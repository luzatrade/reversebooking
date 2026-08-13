import type { AlloggiatiRecord, GuestRecord, GuestType } from '@/types/check-in';

/** Codici ufficiali tipo alloggiato Alloggiati Web */
export const GUEST_TYPE_CODES: Record<GuestType, string> = {
  single: '16',
  head_family: '17',
  family: '18',
  head_group: '19',
  group: '20',
};

const TYPES_WITH_DOCUMENT: GuestType[] = ['single', 'head_family', 'head_group'];

export function guestNeedsDocumentFields(guestType: GuestType): boolean {
  return TYPES_WITH_DOCUMENT.includes(guestType);
}

export function formatDateItalian(isoDate: string): string {
  const [y, m, d] = isoDate.split('-');
  return `${d}/${m}/${y}`;
}

export function guestToAlloggiatiRecord(guest: GuestRecord): AlloggiatiRecord {
  const needsDoc = guestNeedsDocumentFields(guest.guestType);
  const isItalianBirth = guest.birthCountryCode === '100000100';

  return {
    guestTypeCode: GUEST_TYPE_CODES[guest.guestType],
    arrivalDate: formatDateItalian(guest.arrivalDate),
    stayDays: String(guest.stayDays).padStart(2, '0'),
    surname: guest.surname,
    givenNames: guest.givenNames,
    sexCode: guest.sex === 'M' ? '1' : '2',
    birthDate: formatDateItalian(guest.birthDate),
    birthMunicipalityCode: isItalianBirth ? (guest.birthMunicipalityCode ?? '') : '',
    birthProvinceCode: isItalianBirth ? (guest.birthProvinceCode ?? '') : '',
    birthCountryCode: guest.birthCountryCode,
    citizenshipCode: guest.citizenshipCode,
    documentTypeCode: needsDoc ? (guest.documentTypeCode ?? '') : '',
    documentNumber: needsDoc ? (guest.documentNumber ?? '') : '',
    documentIssuePlaceCode: needsDoc ? (guest.documentIssuePlaceCode ?? '') : '',
  };
}

export function guestsToAlloggiatiRecords(guests: GuestRecord[]): AlloggiatiRecord[] {
  return guests.map(guestToAlloggiatiRecord);
}
