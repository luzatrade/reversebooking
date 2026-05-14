"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BellRing, CheckCircle2, XCircle } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

type HotelAccount = {
  id: string;
  country_code: string | null;
  city_id: string | null;
  property_name: string | null;
};

type OfferRow = { id: string; status: string };

type AlertState = {
  isHotel: boolean;
  hotelName: string;
  requestsInArea: number;
  acceptedOffers: number;
  rejectedOffers: number;
};

export function HomeHotelAlerts() {
  const [state, setState] = useState<AlertState>({ isHotel: false, hotelName: "", requestsInArea: 0, acceptedOffers: 0, rejectedOffers: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAlerts() {
      setLoading(true);
      try {
        const supabase = createBrowserSupabaseClient();
        const { data: authData } = await supabase.auth.getUser();
        if (!authData.user) return;

        const { data: profile } = await supabase.from("profiles").select("role").eq("user_id", authData.user.id).maybeSingle();
        if (profile?.role !== "hotel") return;

        const { data: hotel } = await supabase
          .from("hotel_accounts")
          .select("id, country_code, city_id, property_name")
          .eq("user_id", authData.user.id)
          .maybeSingle();

        if (!hotel?.id) return;
        const typedHotel = hotel as HotelAccount;

        let requestsQuery = supabase
          .from("travel_requests")
          .select("id")
          .eq("status", "active")
          .gt("expires_at", new Date().toISOString());

        if (typedHotel.country_code) requestsQuery = requestsQuery.eq("country_code", typedHotel.country_code);
        if (typedHotel.city_id) requestsQuery = requestsQuery.eq("city_id", typedHotel.city_id);

        const { data: requestData } = await requestsQuery;
        const { data: offerData } = await supabase
          .from("offers")
          .select("id, status")
          .eq("hotel_account_id", typedHotel.id)
          .in("status", ["accepted", "rejected"]);

        const offers = (offerData ?? []) as OfferRow[];
        setState({
          isHotel: true,
          hotelName: typedHotel.property_name ?? "Struttura",
          requestsInArea: (requestData ?? []).length,
          acceptedOffers: offers.filter((offer) => offer.status === "accepted").length,
          rejectedOffers: offers.filter((offer) => offer.status === "rejected").length,
        });
      } finally {
        setLoading(false);
      }
    }

    void loadAlerts();
  }, []);

  if (loading || !state.isHotel) return null;
  const totalAlerts = state.requestsInArea + state.acceptedOffers + state.rejectedOffers;
  if (totalAlerts === 0) return null;

  return (
    <section className="border-b border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-start gap-3">
          <div className="relative rounded-full bg-amber-600 p-2 text-white shadow-sm">
            <BellRing className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 rounded-full bg-red-600 px-1.5 py-0.5 text-[10px] font-bold text-white">{totalAlerts}</span>
          </div>
          <div>
            <p className="text-sm font-semibold">Campanello struttura · {state.hotelName}</p>
            <div className="mt-2 flex flex-wrap gap-2 text-sm">
              {state.requestsInArea > 0 ? (
                <span className="rounded-full bg-white px-3 py-1 font-medium shadow-sm dark:bg-zinc-900">
                  {state.requestsInArea} nuove richieste nella tua zona
                </span>
              ) : null}
              {state.acceptedOffers > 0 ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
                  <CheckCircle2 className="h-3.5 w-3.5" /> {state.acceptedOffers} offerta accettata{state.acceptedOffers > 1 ? "e" : ""}
                </span>
              ) : null}
              {state.rejectedOffers > 0 ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 font-medium text-red-800 dark:bg-red-950 dark:text-red-200">
                  <XCircle className="h-3.5 w-3.5" /> {state.rejectedOffers} offerta rifiutata{state.rejectedOffers > 1 ? "e" : ""}
                </span>
              ) : null}
            </div>
          </div>
        </div>
        <Link href="/struttura/dashboard" className="rounded-full bg-amber-700 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-amber-800">
          Vai alla dashboard struttura
        </Link>
      </div>
    </section>
  );
}
