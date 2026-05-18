"use client";

import { useEffect, useState} from "react";
import { Star} from "lucide-react";
import { createBrowserSupabaseClient} from "@/lib/supabase/client";

export function FavoriteHotelButton({ hotelId, hotelName}: { hotelId: string; hotelName: string}) {
  const [advertiserId, setAdvertiserId] = useState<string | null>(null);
  const [favoriteId, setFavoriteId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const supabase = createBrowserSupabaseClient();
        const { data: authData} = await supabase.auth.getUser();
        if (!authData.user) {
          setAdvertiserId(null);
          return;
       }
        const { data: advertiser} = await supabase
          .from("advertiser_profiles")
          .select("id")
          .eq("user_id", authData.user.id)
          .maybeSingle();
        if (!advertiser?.id) {
          setAdvertiserId(null);
          return;
       }
        setAdvertiserId(advertiser.id);
        const { data: favorite} = await supabase
          .from("advertiser_hotel_favorites")
          .select("id")
          .eq("advertiser_id", advertiser.id)
          .eq("hotel_account_id", hotelId)
          .maybeSingle();
        setFavoriteId(favorite?.id ?? null);
     } catch (err) {
        setError(err instanceof Error ? err.message : "Errore preferiti.");
     } finally {
        setLoading(false);
     }
   }
    void load();
 }, [hotelId]);

  if (loading || !advertiserId) return null;

  async function toggleFavorite() {
    setSaving(true);
    setError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      if (favoriteId) {
        const { error: deleteError} = await supabase.from("advertiser_hotel_favorites").delete().eq("id", favoriteId);
        if (deleteError) throw deleteError;
        setFavoriteId(null);
        return;
     }
      const { data, error: insertError} = await supabase
        .from("advertiser_hotel_favorites")
        .insert({ advertiser_id: advertiserId, hotel_account_id: hotelId})
        .select("id")
        .single();
      if (insertError) throw insertError;
      setFavoriteId(data.id);
   } catch (err) {
      setError(err instanceof Error ? err.message : "Impossibile aggiornare i preferiti.");
   } finally {
      setSaving(false);
   }
 }

  return (
    <div className="space-y-2">
      <button
        type="button"
        disabled={saving}
        onClick={() => void toggleFavorite()}
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${ favoriteId
            ? "border-amber-300 bg-amber-50 text-amber-900"
            : "border-zinc-200 bg-white"
       }`}
      >
        <Star className={`h-4 w-4 ${favoriteId ? "fill-amber-500 text-amber-500" : ""}`} />
        {favoriteId ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
      </button>
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
      <p className="text-xs text-zinc-500">
        {favoriteId
          ? `Mantieni il rapporto con ${hotelName}: potrai inviare nuove richieste quando la struttura è attiva.`
          : "Salva la struttura per richieste future con la stessa struttura."}
      </p>
    </div>
  );
}
