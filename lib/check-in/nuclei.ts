import { createBrowserSupabaseClient } from '@/lib/supabase/client';
import {
  completeLocalNucleus,
  createLocalNucleus,
  deleteEmptyLocalNucleus,
  deleteLocalGuest,
  loadLocalOpenNuclei,
  loadLocalGuests,
  mapDbGuest,
  mapStoredNucleus,
  mapStoredGuest,
  markLocalGuestsExported,
  type StoredNucleusRow,
} from '@/lib/check-in/localGuests';
import type {
  AlloggiatiRecord,
  CheckInNucleus,
  CheckInNucleusType,
  GuestRecord,
} from '@/types/check-in';

export type CheckInNucleusGuest = GuestRecord & { exportedQuesturaAt?: string };

function isMissingNucleusMigration(message: string): boolean {
  return /check_in_nuclei|nucleus_id|PGRST20[45]|schema cache|column .* does not exist/i.test(message);
}

function nucleusMigrationRequired(): Error {
  return new Error('Famiglie e gruppi richiedono la migration Supabase check-in nuclei. I dati del nucleo non sono stati salvati.');
}

export interface CreateNucleusResult {
  id: string;
  fellBackToLocalStorage: boolean;
}

export async function createCheckInNucleus(
  hotelAccountId: string,
  type: CheckInNucleusType,
  usingLocalStorage = false,
): Promise<CreateNucleusResult> {
  if (usingLocalStorage) {
    return { id: createLocalNucleus(hotelAccountId, type), fellBackToLocalStorage: true };
  }

  const supabase = createBrowserSupabaseClient();
  const { data, error } = await supabase
    .from('check_in_nuclei')
    .insert({ hotel_account_id: hotelAccountId, nucleus_type: type })
    .select('id')
    .single();

  if (error) {
    if (isMissingNucleusMigration(error.message)) throw nucleusMigrationRequired();
    throw error;
  }

  return { id: data.id as string, fellBackToLocalStorage: false };
}

export async function deleteEmptyCheckInNucleus(
  hotelAccountId: string,
  nucleusId: string,
  usingLocalStorage = false,
): Promise<void> {
  if (usingLocalStorage) {
    deleteEmptyLocalNucleus(hotelAccountId, nucleusId);
    return;
  }

  const supabase = createBrowserSupabaseClient();
  const { error } = await supabase
    .from('check_in_nuclei')
    .delete()
    .eq('hotel_account_id', hotelAccountId)
    .eq('id', nucleusId)
    .eq('status', 'open');

  if (error && isMissingNucleusMigration(error.message)) throw nucleusMigrationRequired();
  if (error) throw error;
}

export async function loadOpenCheckInNuclei(
  hotelAccountId: string,
  usingLocalStorage = false,
): Promise<CheckInNucleus[]> {
  if (usingLocalStorage) return loadLocalOpenNuclei(hotelAccountId);

  const supabase = createBrowserSupabaseClient();
  const { data, error } = await supabase
    .from('check_in_nuclei')
    .select('id, hotel_account_id, nucleus_type, status, created_at, completed_at')
    .eq('hotel_account_id', hotelAccountId)
    .eq('status', 'open')
    .order('created_at', { ascending: true });

  if (error) {
    if (isMissingNucleusMigration(error.message)) throw nucleusMigrationRequired();
    throw error;
  }

  return (data ?? []).map((row) => mapStoredNucleus(row as StoredNucleusRow));
}

export async function loadCheckInNucleusGuests(
  hotelAccountId: string,
  nucleusId: string,
  usingLocalStorage = false,
): Promise<CheckInNucleusGuest[]> {
  const sortGuests = (guests: CheckInNucleusGuest[]) =>
    guests.sort((left, right) => {
      const leftIsHead = left.guestType === 'head_family' || left.guestType === 'head_group';
      const rightIsHead = right.guestType === 'head_family' || right.guestType === 'head_group';
      if (leftIsHead !== rightIsHead) return leftIsHead ? -1 : 1;
      return (left.createdAt ?? '').localeCompare(right.createdAt ?? '') ||
        (left.id ?? '').localeCompare(right.id ?? '');
    });

  if (usingLocalStorage) {
    return sortGuests(loadLocalGuests(hotelAccountId)
      .filter((guest) => guest.nucleus_id === nucleusId)
      .map(mapStoredGuest));
  }

  const supabase = createBrowserSupabaseClient();
  const { data, error } = await supabase
    .from('check_in_guests')
    .select('*')
    .eq('hotel_account_id', hotelAccountId)
    .eq('nucleus_id', nucleusId)
    .order('created_at', { ascending: true })
    .order('id', { ascending: true });

  if (error) {
    if (isMissingNucleusMigration(error.message)) throw nucleusMigrationRequired();
    throw error;
  }

  return sortGuests((data ?? []).map(mapDbGuest));
}

export async function cancelOpenCheckInNucleus(
  hotelAccountId: string,
  nucleusId: string,
  usingLocalStorage = false,
): Promise<void> {
  const guests = await loadCheckInNucleusGuests(hotelAccountId, nucleusId, usingLocalStorage);
  for (const guest of guests) {
    if (guest.exportedQuesturaAt) {
      throw new Error('Il nucleo contiene già ospiti esportati e non può essere annullato');
    }
    if (guest.id) await deleteLocalOrRemoteGuest(hotelAccountId, guest.id, usingLocalStorage);
  }
  await deleteEmptyCheckInNucleus(hotelAccountId, nucleusId, usingLocalStorage);
}

async function deleteLocalOrRemoteGuest(
  hotelAccountId: string,
  guestId: string,
  usingLocalStorage: boolean,
) {
  if (usingLocalStorage) {
    deleteLocalGuest(hotelAccountId, guestId);
    return;
  }

  const supabase = createBrowserSupabaseClient();
  const { error } = await supabase
    .from('check_in_guests')
    .delete()
    .eq('hotel_account_id', hotelAccountId)
    .eq('id', guestId)
    .is('exported_questura_at', null);
  if (error) throw error;
}

export async function completeCheckInNucleusExport(
  hotelAccountId: string,
  nucleusId: string,
  arrivalDate: string,
  records: AlloggiatiRecord[],
  guestIds: string[],
  usingLocalStorage = false,
): Promise<void> {
  if (usingLocalStorage) {
    markLocalGuestsExported(hotelAccountId, guestIds);
    completeLocalNucleus(hotelAccountId, nucleusId);
    return;
  }

  const supabase = createBrowserSupabaseClient();
  const { error } = await supabase.rpc('create_check_in_nucleus_export', {
    p_hotel_account_id: hotelAccountId,
    p_nucleus_id: nucleusId,
    p_arrival_date: arrivalDate,
    p_records: records,
    p_guest_ids: guestIds,
  });

  if (error) throw error;
}
