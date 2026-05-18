"use client";

import { useEffect, useState} from "react";
import { useRouter} from "next/navigation";
import { BellRing, CheckCircle2, XCircle} from "lucide-react";
import { createBrowserSupabaseClient} from "@/lib/supabase/client";

type HotelAccount = { id: string; property_name: string | null};
type NotificationRow = { id: string; title: string; message: string | null};
type AlertState = { isHotel: boolean; hotelId: string | null; hotelName: string; requestsInArea: number; acceptedOffers: number; rejectedOffers: number};

function countByText(notifications: NotificationRow[], words: string[]) {
  return notifications.filter((notification) => {
    const text = `${notification.title} ${notification.message ?? ""}`.toLowerCase();
    return words.some((word) => text.includes(word));
 }).length;
}

export function HomeHotelAlerts() {
  const router = useRouter();
  const [state, setState] = useState<AlertState>({ isHotel: false, hotelId: null, hotelName: "", requestsInArea: 0, acceptedOffers: 0, rejectedOffers: 0});
  const [loading, setLoading] = useState(true);
  const [marking, setMarking] = useState(false);

  async function loadAlerts() {
    setLoading(true);
    try {
      const supabase = createBrowserSupabaseClient();
      const { data: authData} = await supabase.auth.getUser();
      if (!authData.user) return;
      const { data: profile} = await supabase.from("profiles").select("role").eq("user_id", authData.user.id).maybeSingle();
      if (profile?.role !== "hotel") return;
      const { data: hotel} = await supabase.from("hotel_accounts").select("id, property_name").eq("user_id", authData.user.id).maybeSingle();
      if (!hotel?.id) return;
      const typedHotel = hotel as HotelAccount;
      const { data: notifications} = await supabase.from("notifications").select("id, title, message").eq("recipient_type", "hotel").eq("recipient_id", typedHotel.id).eq("is_read", false);
      const rows = (notifications ?? []) as NotificationRow[];
      setState({
        isHotel: true,
        hotelId: typedHotel.id,
        hotelName: typedHotel.property_name ?? "Struttura",
        requestsInArea: countByText(rows, ["nuova richiesta", "nuova inserzione"]),
        acceptedOffers: countByText(rows, ["accettata"]),
        rejectedOffers: countByText(rows, ["rifiutata", "negata"]),
     });
   } finally {
      setLoading(false);
   }
 }

  useEffect(() => { void loadAlerts();}, []);

  async function openDashboardAndMarkRead() {
    if (!state.hotelId) { router.push("/struttura/dashboard"); return;}
    setMarking(true);
    try {
      const supabase = createBrowserSupabaseClient();
      await supabase.from("notifications").update({ is_read: true}).eq("recipient_type", "hotel").eq("recipient_id", state.hotelId).eq("is_read", false);
      setState((current) => ({ ...current, requestsInArea: 0, acceptedOffers: 0, rejectedOffers: 0}));
      router.push("/struttura/dashboard");
   } finally {
      setMarking(false);
   }
 }

  if (loading || !state.isHotel) return null;
  const totalAlerts = state.requestsInArea + state.acceptedOffers + state.rejectedOffers;
  if (totalAlerts === 0) return null;

  return (
    <section className="border-b border-amber-200 bg-amber-50 text-amber-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <button type="button" onClick={openDashboardAndMarkRead} className="flex items-start gap-3 text-left">
          <div className="relative rounded-full bg-amber-600 p-2 text-white shadow-sm">
            <BellRing className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 rounded-full bg-red-600 px-1.5 py-0.5 text-[10px] font-bold text-white">{totalAlerts}</span>
          </div>
          <div>
            <p className="text-sm font-semibold">Campanello struttura · {state.hotelName}</p>
            <div className="mt-2 flex flex-wrap gap-2 text-sm">
              {state.requestsInArea > 0 ? <span className="rounded-full bg-white px-3 py-1 font-medium shadow-sm">{state.requestsInArea} nuove richieste nella tua zona</span> : null}
              {state.acceptedOffers > 0 ? <span className="inline-flex items-center gap-1 rounded-full border border-orange-400 bg-orange-100 px-3 py-1 font-medium text-orange-800"><CheckCircle2 className="h-3.5 w-3.5" /> {state.acceptedOffers} offerta accettata{state.acceptedOffers > 1 ? "e" : ""}</span> : null}
              {state.rejectedOffers > 0 ? <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 font-medium text-red-800"><XCircle className="h-3.5 w-3.5" /> {state.rejectedOffers} offerta rifiutata{state.rejectedOffers > 1 ? "e" : ""}</span> : null}
            </div>
          </div>
        </button>
        <button type="button" onClick={openDashboardAndMarkRead} disabled={marking} className="rounded-full bg-amber-700 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-amber-800 disabled:opacity-60">
          {marking ? "Aggiornamento..." : "Vai alla dashboard struttura"}
        </button>
      </div>
    </section>
  );
}
