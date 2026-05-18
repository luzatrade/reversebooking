"use client";

import { useEffect, useState} from "react";
import { useRouter} from "next/navigation";
import { BellRing} from "lucide-react";
import { createBrowserSupabaseClient} from "@/lib/supabase/client";

type AdvertiserProfile = { id: string};
type NotificationRow = { id: string; title: string; message: string | null};

type AlertState = {
  isAdvertiser: boolean;
  advertiserId: string | null;
  newOffers: number;
  chatMessages: number;
  acceptedOrRejected: number;
};

function countByText(notifications: NotificationRow[], words: string[]) {
  return notifications.filter((notification) => {
    const text = `${notification.title} ${notification.message ?? ""}`.toLowerCase();
    return words.some((word) => text.includes(word));
 }).length;
}

export function HomeAdvertiserAlerts() {
  const router = useRouter();
  const [state, setState] = useState<AlertState>({ isAdvertiser: false, advertiserId: null, newOffers: 0, chatMessages: 0, acceptedOrRejected: 0});
  const [loading, setLoading] = useState(true);
  const [marking, setMarking] = useState(false);

  async function loadAlerts() {
    setLoading(true);
    try {
      const supabase = createBrowserSupabaseClient();
      const { data: authData} = await supabase.auth.getUser();
      if (!authData.user) return;

      const { data: profile} = await supabase.from("profiles").select("role").eq("user_id", authData.user.id).maybeSingle();
      if (profile?.role !== "advertiser") return;

      const { data: advertiser} = await supabase.from("advertiser_profiles").select("id").eq("user_id", authData.user.id).maybeSingle();
      if (!advertiser?.id) return;
      const typedAdvertiser = advertiser as AdvertiserProfile;

      const { data: ownRequests} = await supabase.from("travel_requests").select("id").eq("advertiser_id", typedAdvertiser.id);
      const requestIds = (ownRequests ?? []).map((request) => request.id);
      if (!requestIds.length) {
        setState({ isAdvertiser: true, advertiserId: typedAdvertiser.id, newOffers: 0, chatMessages: 0, acceptedOrRejected: 0});
        return;
     }

      const { data: notifications} = await supabase
        .from("notifications")
        .select("id, title, message")
        .eq("recipient_type", "advertiser")
        .eq("is_read", false)
        .in("travel_request_id", requestIds);

      const rows = (notifications ?? []) as NotificationRow[];
      setState({
        isAdvertiser: true,
        advertiserId: typedAdvertiser.id,
        newOffers: countByText(rows, ["nuova offerta"]),
        chatMessages: countByText(rows, ["nuovo messaggio"]),
        acceptedOrRejected: countByText(rows, ["accettato", "rifiutato"]),
     });
   } finally {
      setLoading(false);
   }
 }

  useEffect(() => { void loadAlerts();}, []);

  async function openDashboardAndMarkRead() {
    if (!state.advertiserId) { router.push("/inserzionista/dashboard"); return;}
    setMarking(true);
    try {
      const supabase = createBrowserSupabaseClient();
      const { data: ownRequests} = await supabase.from("travel_requests").select("id").eq("advertiser_id", state.advertiserId);
      const requestIds = (ownRequests ?? []).map((request) => request.id);
      if (requestIds.length) {
        await supabase.from("notifications").update({ is_read: true}).eq("recipient_type", "advertiser").eq("is_read", false).in("travel_request_id", requestIds);
     }
      setState((current) => ({ ...current, newOffers: 0, chatMessages: 0, acceptedOrRejected: 0}));
      router.push("/inserzionista/dashboard");
   } finally {
      setMarking(false);
   }
 }

  if (loading || !state.isAdvertiser) return null;
  const totalAlerts = state.newOffers + state.chatMessages + state.acceptedOrRejected;
  if (totalAlerts === 0) return null;

  return (
    <section className="border-b border-red-200 bg-red-50 text-red-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <button type="button" onClick={openDashboardAndMarkRead} className="flex items-start gap-3 text-left">
          <div className="relative rounded-full bg-red-600 p-2 text-white shadow-sm">
            <BellRing className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 rounded-full bg-zinc-950 px-1.5 py-0.5 text-[10px] font-bold text-white">{totalAlerts}</span>
          </div>
          <div>
            <p className="text-sm font-semibold">Campanello inserzionista</p>
            <div className="mt-2 flex flex-wrap gap-2 text-sm">
              {state.newOffers > 0 ? <span className="rounded-full bg-white px-3 py-1 font-medium shadow-sm">{state.newOffers} nuove offerte ricevute</span> : null}
              {state.chatMessages > 0 ? <span className="rounded-full bg-white px-3 py-1 font-medium shadow-sm">{state.chatMessages} nuovi messaggi chat</span> : null}
              {state.acceptedOrRejected > 0 ? <span className="rounded-full bg-white px-3 py-1 font-medium shadow-sm">{state.acceptedOrRejected} aggiornamenti offerta</span> : null}
            </div>
          </div>
        </button>
        <button type="button" onClick={openDashboardAndMarkRead} disabled={marking} className="rounded-full bg-red-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60">
          {marking ? "Aggiornamento..." : "Vai alle offerte"}
        </button>
      </div>
    </section>
  );
}
