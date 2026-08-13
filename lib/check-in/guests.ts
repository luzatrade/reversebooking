"use client";

import { useCallback, useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type { GuestRecord } from "@/types/check-in";

interface DbGuest {
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

export type GuestWithExport = GuestRecord & { exportedQuesturaAt?: string };

function mapGuest(row: DbGuest): GuestWithExport {
  return {
    id: row.id,
    hotelAccountId: row.hotel_account_id,
    guestType: row.guest_type as GuestRecord["guestType"],
    arrivalDate: row.arrival_date,
    stayDays: row.stay_days,
    surname: row.surname,
    givenNames: row.given_names,
    sex: row.sex as "M" | "F",
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

function guestToRpcPayload(guest: Omit<GuestRecord, "id" | "hotelAccountId">) {
  return {
    guest_type: guest.guestType,
    arrival_date: guest.arrivalDate,
    stay_days: guest.stayDays,
    surname: guest.surname,
    given_names: guest.givenNames,
    sex: guest.sex,
    birth_date: guest.birthDate,
    birth_municipality_code: guest.birthMunicipalityCode ?? "",
    birth_province_code: guest.birthProvinceCode ?? "",
    birth_country_code: guest.birthCountryCode,
    citizenship_code: guest.citizenshipCode,
    document_type_code: guest.documentTypeCode ?? "",
    document_number: guest.documentNumber ?? "",
    document_issue_place_code: guest.documentIssuePlaceCode ?? "",
  };
}

export function useGuests(options?: { onlyPendingExport?: boolean }) {
  const [guests, setGuests] = useState<GuestWithExport[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    const supabase = createBrowserSupabaseClient();
    let query = supabase.from("guests").select("*").order("created_at", { ascending: false });

    if (options?.onlyPendingExport) {
      query = query.is("exported_questura_at", null);
    }

    const { data, error } = await query;
    if (!error && data) {
      setGuests((data as DbGuest[]).map(mapGuest));
    }
    setLoading(false);
  }, [options?.onlyPendingExport]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return { guests, loading, refresh };
}

export async function registerGuest(guest: Omit<GuestRecord, "id" | "hotelAccountId">): Promise<string> {
  const supabase = createBrowserSupabaseClient();
  const { data, error } = await supabase.rpc("register_guest", { p_guest: guestToRpcPayload(guest) });
  if (error) throw error;
  return data as string;
}

export async function markGuestsExported(guestIds: string[]): Promise<void> {
  const supabase = createBrowserSupabaseClient();
  const { error } = await supabase.rpc("mark_guests_exported", { p_guest_ids: guestIds });
  if (error) throw error;
}
