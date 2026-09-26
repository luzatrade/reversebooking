import { useCallback, useEffect, useState } from 'react';
import { createBrowserSupabaseClient } from '@/lib/supabase/client';
import {
  guestToInsertRow,
  deleteLocalGuest,
  loadLocalGuests,
  mapDbGuest,
  mapStoredGuest,
  markLocalGuestsExported,
  saveLocalGuest,
} from '@/lib/check-in/localGuests';
import type { GuestRecord } from '@/types/check-in';
import type { AlloggiatiRecord } from '@/types/check-in';

export type CheckInGuest = GuestRecord & { exportedQuesturaAt?: string };

export interface CheckInExport {
  id: string;
  arrivalDate: string;
  records: AlloggiatiRecord[];
  guestCount: number;
  createdAt: string;
}

export interface UseGuestsOptions {
  onlyPendingExport?: boolean;
  usingLocalStorage?: boolean;
  onStorageFallback?: () => void;
}

function isMissingTableError(message: string): boolean {
  return /check_in_guests|schema cache|relation.*does not exist|PGRST/i.test(message);
}

export function useGuests(hotelAccountId: string | null, options?: UseGuestsOptions) {
  const [guests, setGuests] = useState<CheckInGuest[]>([]);
  const [loading, setLoading] = useState(true);
  const usingLocalStorage = options?.usingLocalStorage ?? false;

  const refresh = useCallback(async () => {
    if (!hotelAccountId) {
      setGuests([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    if (usingLocalStorage) {
      const data = loadLocalGuests(hotelAccountId, options?.onlyPendingExport).filter(
        (guest) => !options?.onlyPendingExport || !guest.nucleus_id,
      );
      setGuests(data.map(mapStoredGuest));
      setLoading(false);
      return;
    }

    const supabase = createBrowserSupabaseClient();
    let query = supabase
      .from('check_in_guests')
      .select('*')
      .eq('hotel_account_id', hotelAccountId)
      .order('created_at', { ascending: false });

    if (options?.onlyPendingExport) {
      query = query.is('exported_questura_at', null);
      query = query.is('nucleus_id', null);
    }

    const { data, error } = await query;

    if (error) {
      if (isMissingTableError(error.message)) {
        options?.onStorageFallback?.();
        const local = loadLocalGuests(hotelAccountId, options?.onlyPendingExport).filter(
          (guest) => !options?.onlyPendingExport || !guest.nucleus_id,
        );
        setGuests(local.map(mapStoredGuest));
      } else {
        setGuests([]);
      }
    } else {
      setGuests((data ?? []).map(mapDbGuest));
    }

    setLoading(false);
  }, [
    hotelAccountId,
    options?.onlyPendingExport,
    options?.onStorageFallback,
    usingLocalStorage,
  ]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return { guests, loading, refresh, usingLocalStorage };
}

export interface RegisterGuestResult {
  id: string;
  fellBackToLocalStorage: boolean;
}

export async function registerGuest(
  hotelAccountId: string,
  guest: Omit<GuestRecord, 'id' | 'hotelAccountId'>,
  usingLocalStorage = false,
): Promise<RegisterGuestResult> {
  if (usingLocalStorage) {
    return { id: saveLocalGuest(hotelAccountId, guest), fellBackToLocalStorage: true };
  }

  const supabase = createBrowserSupabaseClient();
  const { data, error } = await supabase
    .from('check_in_guests')
    .insert(guestToInsertRow(hotelAccountId, guest))
    .select('id')
    .single();

  if (error) {
    if (isMissingTableError(error.message)) {
      return { id: saveLocalGuest(hotelAccountId, guest), fellBackToLocalStorage: true };
    }
    throw error;
  }

  return { id: data.id as string, fellBackToLocalStorage: false };
}

export async function createCheckInExport(
  hotelAccountId: string,
  arrivalDate: string,
  records: AlloggiatiRecord[],
  guestIds: string[],
  usingLocalStorage = false,
): Promise<void> {
  if (usingLocalStorage) {
    markLocalGuestsExported(hotelAccountId, guestIds);
    return;
  }

  const supabase = createBrowserSupabaseClient();
  const { error } = await supabase.rpc('create_check_in_export', {
    p_hotel_account_id: hotelAccountId,
    p_arrival_date: arrivalDate,
    p_records: records,
    p_guest_ids: guestIds,
  });

  if (error) {
    if (isMissingTableError(error.message)) {
      markLocalGuestsExported(hotelAccountId, guestIds);
      return;
    }
    throw error;
  }
}

export async function loadCheckInExports(
  hotelAccountId: string,
  usingLocalStorage = false,
): Promise<CheckInExport[]> {
  if (usingLocalStorage) return [];

  const supabase = createBrowserSupabaseClient();
  const { data, error } = await supabase
    .from('check_in_exports')
    .select('id, arrival_date, records, guest_count, created_at')
    .eq('hotel_account_id', hotelAccountId)
    .order('created_at', { ascending: false });

  if (error) {
    if (isMissingTableError(error.message)) return [];
    throw error;
  }

  return (data ?? []).map((row) => ({
    id: row.id as string,
    arrivalDate: row.arrival_date as string,
    records: row.records as AlloggiatiRecord[],
    guestCount: row.guest_count as number,
    createdAt: row.created_at as string,
  }));
}

export async function deleteGuest(
  hotelAccountId: string,
  guestId: string,
  usingLocalStorage = false,
): Promise<void> {
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

  if (error) {
    if (isMissingTableError(error.message)) {
      deleteLocalGuest(hotelAccountId, guestId);
      return;
    }
    throw error;
  }
}
