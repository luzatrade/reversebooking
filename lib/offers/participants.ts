import type { SupabaseClient } from "@supabase/supabase-js";

export type OfferParticipantRole = "hotel" | "advertiser";

type ParticipantRow = {
  hotel_accounts: { user_id: string | null } | { user_id: string | null }[] | null;
  travel_requests:
    | { advertiser_profiles: { user_id: string | null } | { user_id: string | null }[] | null }
    | { advertiser_profiles: { user_id: string | null } | { user_id: string | null }[] | null }[]
    | null;
};

function firstRelation<T>(value: T | T[] | null | undefined): T | null {
  if (Array.isArray(value)) return value[0] ?? null;
  return value ?? null;
}

/**
 * Restituisce il ruolo dell'utente nell'offerta, oppure null se non ne fa parte.
 *
 * Va usata in tutte le route che agiscono su un'offerta con il service role:
 * quel client bypassa la RLS, quindi la verifica di appartenenza deve essere
 * esplicita, altrimenti qualunque utente autenticato può agire su offerte
 * altrui indicandone l'id.
 */
export async function resolveOfferParticipant(
  admin: SupabaseClient,
  offerId: string,
  userId: string,
): Promise<OfferParticipantRole | null> {
  const { data, error } = await admin
    .from("offers")
    .select("id, hotel_accounts(user_id), travel_requests(advertiser_profiles(user_id))")
    .eq("id", offerId)
    .maybeSingle();

  if (error || !data) return null;

  const row = data as unknown as ParticipantRow;

  const hotel = firstRelation(row.hotel_accounts);
  if (hotel?.user_id && hotel.user_id === userId) return "hotel";

  const travelRequest = firstRelation(row.travel_requests);
  const advertiser = firstRelation(travelRequest?.advertiser_profiles);
  if (advertiser?.user_id && advertiser.user_id === userId) return "advertiser";

  return null;
}
