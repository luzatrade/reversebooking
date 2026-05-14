"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { MessageCircle, Send, X } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type { UserRole } from "@/types/app";

type ChatOffer = {
  id: string;
  hotel_accounts?: { property_name: string } | { property_name: string }[] | null;
  travel_requests?: { city_name: string; preferred_area: string } | { city_name: string; preferred_area: string }[] | null;
};

type ChatMessage = {
  id: string;
  offer_id: string;
  sender_id: string;
  sender_role: UserRole;
  body: string;
  created_at: string;
};

function one<T>(value: T | T[] | null | undefined): T | null {
  return Array.isArray(value) ? value[0] ?? null : value ?? null;
}

function time(value: string) {
  return new Intl.DateTimeFormat("it-IT", { hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}

export function FloatingChatWidget() {
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<UserRole>("advertiser");
  const [offers, setOffers] = useState<ChatOffer[]>([]);
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [hasNewMessages, setHasNewMessages] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const activeOffer = useMemo(() => offers.find((offer) => offer.id === activeOfferId) ?? offers[0] ?? null, [offers, activeOfferId]);
  const hotel = one(activeOffer?.hotel_accounts);
  const request = one(activeOffer?.travel_requests);
  const badgeValue = hasNewMessages ? "!" : messages.length > 99 ? "99+" : String(messages.length);

  async function detectRole(currentUserId: string) {
    const supabase = createBrowserSupabaseClient();
    const { data: profile } = await supabase.from("profiles").select("role").eq("user_id", currentUserId).maybeSingle();
    if (profile?.role === "hotel" || profile?.role === "advertiser") {
      setRole(profile.role);
      return profile.role as UserRole;
    }
    const { data: hotelAccount } = await supabase.from("hotel_accounts").select("id").eq("user_id", currentUserId).maybeSingle();
    const nextRole: UserRole = hotelAccount ? "hotel" : "advertiser";
    setRole(nextRole);
    return nextRole;
  }

  async function loadMessages(offerId: string, silent = false) {
    const supabase = createBrowserSupabaseClient();
    const lastId = messages.at(-1)?.id ?? null;
    const { data, error: messageError } = await supabase
      .from("offer_messages")
      .select("id, offer_id, sender_id, sender_role, body, created_at")
      .eq("offer_id", offerId)
      .order("created_at", { ascending: true });

    if (messageError) {
      if (!silent) setError(messageError.message);
      return;
    }

    const next = (data ?? []) as ChatMessage[];
    const nextLast = next.at(-1);
    if (silent && nextLast && lastId && nextLast.id !== lastId && nextLast.sender_id !== userId && !open) {
      setHasNewMessages(true);
    }
    setMessages(next);
  }

  async function loadWidget(silent = false) {
    if (!silent) setLoading(true);
    setError(null);

    try {
      const supabase = createBrowserSupabaseClient();
      const { data: authData } = await supabase.auth.getUser();
      if (!authData.user) {
        setUserId(null);
        setOffers([]);
        setMessages([]);
        return;
      }

      setUserId(authData.user.id);
      const currentRole = await detectRole(authData.user.id);
      let query = supabase
        .from("offers")
        .select("id, hotel_accounts(property_name), travel_requests(city_name, preferred_area)")
        .eq("status", "accepted")
        .order("created_at", { ascending: false });

      if (currentRole === "hotel") {
        const { data: hotelAccount } = await supabase.from("hotel_accounts").select("id").eq("user_id", authData.user.id).maybeSingle();
        if (hotelAccount?.id) query = query.eq("hotel_account_id", hotelAccount.id);
      } else {
        const { data: advertiser } = await supabase.from("advertiser_profiles").select("id").eq("user_id", authData.user.id).maybeSingle();
        if (advertiser?.id) {
          const { data: requests } = await supabase.from("travel_requests").select("id").eq("advertiser_id", advertiser.id);
          const requestIds = (requests ?? []).map((item) => item.id);
          if (requestIds.length) query = query.in("travel_request_id", requestIds);
          else {
            setOffers([]);
            setMessages([]);
            return;
          }
        }
      }

      const { data, error: offerError } = await query;
      if (offerError) {
        setError(offerError.message);
        return;
      }

      const nextOffers = (data ?? []) as unknown as ChatOffer[];
      setOffers(nextOffers);
      const nextActiveId = activeOfferId ?? nextOffers[0]?.id ?? null;
      setActiveOfferId(nextActiveId);
      if (nextActiveId) await loadMessages(nextActiveId, silent);
      else setMessages([]);
    } catch (err) {
      if (!silent) setError(err instanceof Error ? err.message : "Errore durante il caricamento della chat.");
    } finally {
      if (!silent) setLoading(false);
    }
  }

  useEffect(() => {
    void loadWidget();
  }, []);

  useEffect(() => {
    if (activeOfferId) void loadMessages(activeOfferId);
  }, [activeOfferId]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (activeOfferId) void loadMessages(activeOfferId, true);
      else void loadWidget(true);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [activeOfferId, messages, userId, open]);

  useEffect(() => {
    if (open) setHasNewMessages(false);
  }, [open]);

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!body.trim() || !userId || !activeOffer) return;
    setSending(true);
    setError(null);

    try {
      const text = body.trim();
      const supabase = createBrowserSupabaseClient();
      const { error: insertError } = await supabase.from("offer_messages").insert({
        offer_id: activeOffer.id,
        sender_id: userId,
        sender_role: role,
        body: text,
      });
      if (insertError) {
        setError(insertError.message);
        return;
      }
      await fetch("/api/chat/email-notification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ offerId: activeOffer.id, message: text }),
      });
      setBody("");
      await loadMessages(activeOffer.id);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore durante l’invio del messaggio.");
    } finally {
      setSending(false);
    }
  }

  if (!userId && !loading) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-end">
      {open ? (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-[calc(100vw-2rem)] overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 sm:w-[620px] sm:max-w-[620px] lg:w-[700px] lg:max-w-[700px]">
          <div className="flex items-center justify-between border-b border-zinc-200 p-4 dark:border-zinc-800">
            <div className="min-w-0 pr-3">
              <p className="text-sm font-semibold">Chat</p>
              <p className="text-xs text-zinc-500">Offerte accettate · aggiornata automaticamente</p>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800" aria-label="Chiudi chat"><X className="h-4 w-4" /></button>
          </div>

          <div className="flex max-h-[75vh] flex-col sm:max-h-[560px] sm:grid sm:grid-cols-[185px_minmax(0,1fr)]">
            <div className="flex gap-2 overflow-x-auto border-b border-zinc-200 p-2 dark:border-zinc-800 sm:block sm:h-[500px] sm:overflow-y-auto sm:border-b-0 sm:border-r">
              {offers.length === 0 ? <p className="p-3 text-xs text-zinc-500">Nessuna chat.</p> : null}
              {offers.map((offer) => {
                const offerHotel = one(offer.hotel_accounts);
                const offerRequest = one(offer.travel_requests);
                return (
                  <button key={offer.id} type="button" onClick={() => setActiveOfferId(offer.id)} className={`min-w-[155px] rounded-2xl p-3 text-left text-xs sm:mb-1 sm:w-full sm:min-w-0 ${offer.id === activeOfferId ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200" : "hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}>
                    <span className="block break-words font-semibold leading-tight">{offerHotel?.property_name ?? "Struttura"}</span>
                    <span className="mt-1 block break-words leading-tight text-zinc-500">{offerRequest?.city_name ?? "Chat"}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex h-[62vh] min-h-[360px] min-w-0 flex-col sm:h-[500px] sm:min-h-0">
              <div className="border-b border-zinc-200 p-3 dark:border-zinc-800">
                <p className="break-words text-sm font-semibold leading-tight">{hotel?.property_name ?? "Conversazione"}</p>
                <p className="mt-1 break-words text-xs leading-tight text-zinc-500">{request?.city_name ?? ""} {request?.preferred_area ? `· ${request.preferred_area}` : ""}</p>
                {activeOffer ? <Link href={`/chat/${activeOffer.id}`} className="mt-2 inline-flex text-xs font-semibold text-emerald-700">Apri pagina completa</Link> : null}
              </div>

              <div className="flex-1 space-y-2 overflow-y-auto p-3">
                {loading ? <p className="text-xs text-zinc-500">Caricamento...</p> : null}
                {error ? <p className="rounded-2xl bg-red-50 p-3 text-xs text-red-700">{error}</p> : null}
                {!loading && !error && messages.length === 0 ? <p className="text-xs text-zinc-500">Nessun messaggio.</p> : null}
                {messages.map((message) => {
                  const mine = message.sender_id === userId;
                  return (
                    <div key={message.id} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[88%] rounded-2xl p-3 text-xs leading-relaxed sm:max-w-[78%] ${mine ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950" : "bg-zinc-100 dark:bg-zinc-800"}`}>
                        <p className="break-words whitespace-normal">{message.body}</p>
                        <p className="mt-1 opacity-60">{time(message.created_at)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <form onSubmit={sendMessage} className="flex gap-2 border-t border-zinc-200 p-3 dark:border-zinc-800">
                <input value={body} onChange={(event) => setBody(event.target.value)} placeholder="Scrivi..." className="min-w-0 w-full rounded-full border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950 sm:py-2 sm:text-xs" />
                <button disabled={sending || !body.trim() || !activeOffer} type="submit" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white disabled:opacity-50 dark:bg-white dark:text-zinc-950 sm:h-9 sm:w-9" aria-label="Invia messaggio"><Send className="h-4 w-4" /></button>
              </form>
            </div>
          </div>
        </div>
      ) : null}

      <button onClick={() => setOpen((value) => !value)} className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-700 text-white shadow-2xl" aria-label="Apri chat">
        <MessageCircle className="h-6 w-6" />
        {messages.length > 0 || hasNewMessages ? <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-red-600 px-2 text-xs font-bold text-white">{badgeValue}</span> : null}
      </button>
    </div>
  );
}
