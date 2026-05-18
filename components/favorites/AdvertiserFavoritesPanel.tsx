"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { dashboardSurfaces } from "@/components/dashboard/dashboardSurfaces";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { structureTypeLabels, type StructureType } from "@/types/app";

type FavoriteRow = {
  id: string;
  hotel_account_id: string;
  hotel_accounts: {
    id: string;
    property_name: string;
    structure_type: StructureType;
    city_name: string;
    city_id: string;
    subscription_active: boolean;
    account_status: string;
  } | null;
};

export function AdvertiserFavoritesPanel() {
  const [favorites, setFavorites] = useState<FavoriteRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadFavorites = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { data: authData } = await supabase.auth.getUser();
      if (!authData.user) return;
      const { data: advertiser } = await supabase.from("advertiser_profiles").select("id").eq("user_id", authData.user.id).single();
      if (!advertiser?.id) return;
      const { data, error: favError } = await supabase
        .from("advertiser_hotel_favorites")
        .select("id, hotel_account_id, hotel_accounts(id, property_name, structure_type, city_name, city_id, subscription_active, account_status)")
        .eq("advertiser_id", advertiser.id)
        .order("created_at", { ascending: false });
      if (favError) {
        setError(favError.message);
        return;
      }
      setFavorites((data ?? []) as unknown as FavoriteRow[]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore caricamento preferiti.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadFavorites();
  }, [loadFavorites]);

  async function removeFavorite(favoriteId: string) {
    const supabase = createBrowserSupabaseClient();
    await supabase.from("advertiser_hotel_favorites").delete().eq("id", favoriteId);
    await loadFavorites();
  }

  return (
    <section className={`${dashboardSurfaces.panelCream} mt-8`}>
      <div className="flex items-center gap-2">
        <Star className={`h-5 w-5 ${dashboardSurfaces.sectionIcon}`} />
        <h2 className={dashboardSurfaces.sectionTitle}>Strutture preferite</h2>
      </div>
      <p className={dashboardSurfaces.sectionSubtitle}>
        Attiva o rimuovi i preferiti per continuare il rapporto con le strutture che conosci. Le nuove richieste usano sempre un nuovo codice RB.
      </p>
      <div className="mt-5 space-y-3">
        {loading ? <p className="text-sm text-zinc-500">Caricamento preferiti...</p> : null}
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        {!loading && favorites.length === 0 ? (
          <div className={dashboardSurfaces.emptyDashed}>Nessuna struttura nei preferiti.</div>
        ) : null}
        {favorites.map((row, index) => {
          const hotel = row.hotel_accounts;
          if (!hotel) return null;
          const active = hotel.subscription_active && hotel.account_status === "active";
          return (
            <article
              key={row.id}
              className={`flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between ${index % 3 === 0 ? dashboardSurfaces.cardBlue : index % 2 === 0 ? dashboardSurfaces.cardCream : dashboardSurfaces.cardWhite}`}
            >
              <div>
                <p className="font-semibold">{hotel.property_name}</p>
                <p className="mt-1 text-sm text-zinc-500">
                  {structureTypeLabels[hotel.structure_type]} · {hotel.city_name}
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  {active ? "Struttura attiva" : "Struttura in pausa — nessuna interazione finché non riattiva l’abbonamento"}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {active ? (
                  <Link
                    href={`/inserzionista/crea-annuncio?city_id=${encodeURIComponent(hotel.city_id)}&city=${encodeURIComponent(hotel.city_name)}`}
                    className={dashboardSurfaces.btnPrimarySm}
                  >
                    Nuova richiesta
                  </Link>
                ) : null}
                <Link href={`/hotel/${hotel.id}`} className="rounded-full border border-[#B8D4EB] px-4 py-2 text-sm font-semibold text-[#0f4c81] hover:bg-[#F4F8FC]">
                  Profilo
                </Link>
                <button
                  type="button"
                  onClick={() => void removeFavorite(row.id)}
                  className="rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-red-700"
                >
                  Rimuovi
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
