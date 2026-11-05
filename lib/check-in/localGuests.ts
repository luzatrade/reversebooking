import type { CheckInNucleus, CheckInNucleusType, GuestRecord } from '@/types/check-in';

const STORAGE_PREFIX = 'hotelsdrop_check_in_guests:';
const NUCLEUS_STORAGE_PREFIX = 'hotelsdrop_check_in_nuclei:';

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
  nucleus_id?: string | null;
  exported_questura_at: string | null;
  export_format_version?: number | null;
  created_at: string;
}

interface StoredNucleusRow {
  id: string;
  hotel_account_id: string;
  nucleus_type: CheckInNucleusType;
  status: 'open' | 'completed';
  created_at: string;
  completed_at: string | null;
}

function storageKey(hotelAccountId: string): string {
  return `${STORAGE_PREFIX}${hotelAccountId}`;
}

function nucleusStorageKey(hotelAccountId: string): string {
  return `${NUCLEUS_STORAGE_PREFIX}${hotelAccountId}`;
}

function loadStoredNuclei(hotelAccountId: string): StoredNucleusRow[] {
  try {
    const raw = localStorage.getItem(nucleusStorageKey(hotelAccountId));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function mapStoredNucleus(row: StoredNucleusRow): CheckInNucleus {
  return {
    id: row.id,
    hotelAccountId: row.hotel_account_id,
    type: row.nucleus_type,
    status: row.status,
    createdAt: row.created_at,
    completedAt: row.completed_at ?? undefined,
  };
}

export function loadLocalOpenNuclei(hotelAccountId: string): CheckInNucleus[] {
  return loadStoredNuclei(hotelAccountId)
    .filter((row) => row.status === 'open')
    .sort((a, b) => a.created_at.localeCompare(b.created_at))
    .map(mapStoredNucleus);
}

export function createLocalNucleus(
  hotelAccountId: string,
  type: CheckInNucleusType,
): string {
  const nuclei = loadStoredNuclei(hotelAccountId);
  const id = crypto.randomUUID();
  nuclei.push({
    id,
    hotel_account_id: hotelAccountId,
    nucleus_type: type,
    status: 'open',
    created_at: new Date().toISOString(),
    completed_at: null,
  });
  localStorage.setItem(nucleusStorageKey(hotelAccountId), JSON.stringify(nuclei));
  return id;
}

export function completeLocalNucleus(hotelAccountId: string, nucleusId: string): void {
  const nuclei = loadStoredNuclei(hotelAccountId);
  const nucleus = nuclei.find((row) => row.id === nucleusId && row.status === 'open');
  if (!nucleus) throw new Error('Nucleo non trovato o già completato');
  nucleus.status = 'completed';
  nucleus.completed_at = new Date().toISOString();
  localStorage.setItem(nucleusStorageKey(hotelAccountId), JSON.stringify(nuclei));
}

export function deleteEmptyLocalNucleus(hotelAccountId: string, nucleusId: string): void {
  const hasGuests = loadLocalGuests(hotelAccountId).some((guest) => guest.nucleus_id === nucleusId);
  if (hasGuests) return;
  const nuclei = loadStoredNuclei(hotelAccountId).filter((row) => row.id !== nucleusId);
  localStorage.setItem(nucleusStorageKey(hotelAccountId), JSON.stringify(nuclei));
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
    nucleus_id: guest.nucleusId ?? null,
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

export function deleteLocalGuest(hotelAccountId: string, guestId: string): void {
  const guests = loadLocalGuests(hotelAccountId);
  const remaining = guests.filter(
    (guest) => guest.id !== guestId || Boolean(guest.exported_questura_at),
  );
  localStorage.setItem(storageKey(hotelAccountId), JSON.stringify(remaining));
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
    nucleusId: row.nucleus_id ?? undefined,
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
    nucleus_id: guest.nucleusId ?? null,
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
  nucleus_id?: string | null;
  exported_questura_at: string | null;
  created_at: string;
}

export function mapDbGuest(row: DbGuestRow): GuestRecord & { exportedQuesturaAt?: string } {
  return mapStoredGuest(row);
}

export { guestToInsertRow, mapStoredNucleus, type DbGuestRow, type StoredNucleusRow };
