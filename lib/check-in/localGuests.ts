import type { GuestRecord } from '@/types/check-in';

const STORAGE_PREFIX = 'hotelsdrop_check_in_guests:';

export interface StoredGuestRow {
  id: string;
  hotel_account_id: string;
  guest_type: string;
  arrival_date: string;
  stay_days: number;
  surname: string;
  given_names: string;
  sex: string;
  birth_date: string;
  birth_municipality_code: string | null;
  birth_province_code: string | null;
  birth_country_code: string;
  citizenship_code: string;
  document_type_code: string | null;
  document_number: string | null;
  document_issue_place_code: string | null;
  exported_questura_at: string | null;
  export_format_version?: number | null;
  created_at: string;
}

function storageKey(hotelAccountId: string): string {
  return `${STORAGE_PREFIX}${hotelAccountId}`;
}

export function loadLocalGuests(hotelAccountId: string, onlyPending = false): StoredGuestRow[] {
  try {
    const raw = localStorage.getItem(storageKey(hotelAccountId));
    const guests: StoredGuestRow[] = raw ? JSON.parse(raw) : [];
    const sorted = guests.sort((a, b) => b.created_at.localeCompare(a.created_at));
    if (onlyPending) return sorted.filter((g) => !g.exported_questura_at);
    return sorted;
  } catch {
    return [];
  }
}

export function saveLocalGuest(
  hotelAccountId: string,
  guest: Omit<GuestRecord, 'id' | 'hotelAccountId'>,
): string {
  const guests = loadLocalGuests(hotelAccountId);
  const id = crypto.randomUUID();
  const row: StoredGuestRow = {
    id,
    hotel_account_id: hotelAccountId,
    guest_type: guest.guestType,
    arrival_date: guest.arrivalDate,
    stay_days: guest.stayDays,
    surname: guest.surname,
    given_names: guest.givenNames,
    sex: guest.sex,
    birth_date: guest.birthDate,
    birth_municipality_code: guest.birthMunicipalityCode ?? null,
    birth_province_code: guest.birthProvinceCode ?? null,
    birth_country_code: guest.birthCountryCode,
    citizenship_code: guest.citizenshipCode,
    document_type_code: guest.documentTypeCode ?? null,
    document_number: guest.documentNumber ?? null,
    document_issue_place_code: guest.documentIssuePlaceCode ?? null,
    exported_questura_at: null,
    created_at: new Date().toISOString(),
  };
  guests.unshift(row);
  localStorage.setItem(storageKey(hotelAccountId), JSON.stringify(guests));
  return id;
}

export function markLocalGuestsExported(hotelAccountId: string, guestIds: string[]): void {
  const guests = loadLocalGuests(hotelAccountId);
  const now = new Date().toISOString();
  for (const g of guests) {
    if (guestIds.includes(g.id)) {
      g.exported_questura_at = now;
      g.export_format_version = 2;
    }
  }
  localStorage.setItem(storageKey(hotelAccountId), JSON.stringify(guests));
}

export function mapStoredGuest(row: StoredGuestRow): GuestRecord & { exportedQuesturaAt?: string } {
  return {
    id: row.id,
    hotelAccountId: row.hotel_account_id,
    guestType: row.guest_type as GuestRecord['guestType'],
    arrivalDate: row.arrival_date,
    stayDays: row.stay_days,
    surname: row.surname,
    givenNames: row.given_names,
    sex: row.sex as 'M' | 'F',
    birthDate: row.birth_date,
    birthMunicipalityCode: row.birth_municipality_code ?? undefined,
    birthProvinceCode: row.birth_province_code ?? undefined,
    birthCountryCode: row.birth_country_code,
    citizenshipCode: row.citizenship_code,
    documentTypeCode: row.document_type_code ?? undefined,
    documentNumber: row.document_number ?? undefined,
    documentIssuePlaceCode: row.document_issue_place_code ?? undefined,
    createdAt: row.created_at,
    exportedQuesturaAt: row.exported_questura_at ?? undefined,
  };
}

function guestToInsertRow(hotelAccountId: string, guest: Omit<GuestRecord, 'id' | 'hotelAccountId'>) {
  return {
    hotel_account_id: hotelAccountId,
    guest_type: guest.guestType,
    arrival_date: guest.arrivalDate,
    stay_days: guest.stayDays,
    surname: guest.surname,
    given_names: guest.givenNames,
    sex: guest.sex,
    birth_date: guest.birthDate,
    birth_municipality_code: guest.birthMunicipalityCode ?? null,
    birth_province_code: guest.birthProvinceCode ?? null,
    birth_country_code: guest.birthCountryCode,
    citizenship_code: guest.citizenshipCode,
    document_type_code: guest.documentTypeCode ?? null,
    document_number: guest.documentNumber ?? null,
    document_issue_place_code: guest.documentIssuePlaceCode ?? null,
  };
}

interface DbGuestRow {
  id: string;
  hotel_account_id: string;
  guest_type: string;
  arrival_date: string;
  stay_days: number;
  surname: string;
  given_names: string;
  sex: string;
  birth_date: string;
  birth_municipality_code: string | null;
  birth_province_code: string | null;
  birth_country_code: string;
  citizenship_code: string;
  document_type_code: string | null;
  document_number: string | null;
  document_issue_place_code: string | null;
  exported_questura_at: string | null;
  created_at: string;
}

export function mapDbGuest(row: DbGuestRow): GuestRecord & { exportedQuesturaAt?: string } {
  return mapStoredGuest(row);
}

export { guestToInsertRow, type DbGuestRow };
