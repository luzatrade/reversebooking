import { useCallback, useEffect, useState } from 'react';
import { createBrowserSupabaseClient } from '@/lib/supabase/client';
import {
  guestToInsertRow,
  loadLocalGuests,
  mapDbGuest,
  mapStoredGuest,
  markLocalGuestsExported,
  saveLocalGuest,
} from '@/lib/check-in/localGuests';
import type { GuestRecord } from '@/types/check-in';

export type CheckInGuest = GuestRecord & { exportedQuesturaAt?: string };

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
      const data = loadLocalGuests(hotelAccountId, options?.onlyPendingExport);
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
    }

    const { data, error } = await query;

    if (error) {
      if (isMissingTableError(error.message)) {
        options?.onStorageFallback?.();
        const local = loadLocalGuests(hotelAccountId, options?.onlyPendingExport);
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

export async function markGuestsExported(
  hotelAccountId: string,
  guestIds: string[],
  usingLocalStorage = false,
): Promise<void> {
  if (usingLocalStorage) {
    markLocalGuestsExported(hotelAccountId, guestIds);
    return;
  }

  const supabase = createBrowserSupabaseClient();
  const { error } = await supabase
    .from('check_in_guests')
    .update({
      exported_questura_at: new Date().toISOString(),
      export_format_version: 2,
    })
    .eq('hotel_account_id', hotelAccountId)
    .in('id', guestIds)
    .is('exported_questura_at', null);

  if (error) {
    if (isMissingTableError(error.message)) {
      markLocalGuestsExported(hotelAccountId, guestIds);
      return;
    }
    throw error;
  }
}
