"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import {
  countUnreadChatMessages,
  loadChatReadState,
  markOfferChatRead,
  type ChatReadState,
} from "@/lib/chat/readState";
import { isChatOpen } from "@/lib/chat/lifecycle";
import { getAuthUserFast } from "@/lib/auth/clientSession";
import { roleFromUserMetadata } from "@/lib/auth/resolveLoginRole";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type { UserRole } from "@/types/app";

type AdvertiserPublic = { first_name: string | null; last_name: string | null };
type TravelRequestRelation = {
  city_name: string;
  preferred_area: string;
  request_code: string | null;
  check_in: string;
  advertiser_profiles?: AdvertiserPublic | AdvertiserPublic[] | null;
};
type ChatOffer = {
  id: string;
  hotel_accounts?: { property_name: string } | { property_name: string }[] | null;
  travel_requests?: TravelRequestRelation | TravelRequestRelation[] | null;
};
type ChatMessage = { id: string; offer_id: string; sender_id: string; sender_role: UserRole; body: string; created_at: string };

function one<T>(value: T | T[] | null | undefined): T | null {
  return Array.isArray(value) ? value[0] ?? null : value ?? null;
}
function time(value: string) {
  return new Intl.DateTimeFormat("it-IT", { hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}
function requestCode(offer: ChatOffer | null) {
  return one(offer?.travel_requests)?.request_code ?? "RB------";
}
function advertiserName(offer: ChatOffer | null) {
  const request = one(offer?.travel_requests);
  const advertiser = one(request?.advertiser_profiles);
  const name = [advertiser?.first_name, advertiser?.last_name].filter(Boolean).join(" ").trim();
  return name || "Inserzionista";
}
function counterpartName(offer: ChatOffer | null, role: UserRole) {
  if (role === "hotel") return advertiserName(offer);
  return one(offer?.hotel_accounts)?.property_name ?? "Struttura";
}
function offerChatOpen(offer: ChatOffer) {
  const checkIn = one(offer.travel_requests)?.check_in;
  return checkIn ? isChatOpen(checkIn) : false;
}
function unreadForOffer(messages: ChatMessage[], offerId: string, userId: string, readState: ChatReadState) {
  const offerMessages = messages.filter((message) => message.offer_id === offerId);
  return countUnreadChatMessages(offerMessages, userId, readState);
}

export function FloatingChatWidget() {
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<UserRole>("advertiser");
  const [offers, setOffers] = useState<ChatOffer[]>([]);
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [allMessages, setAllMessages] = useState<ChatMessage[]>([]);
  const [readState, setReadState] = useState<ChatReadState>({});
  const [unreadCount, setUnreadCount] = useState(0);
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const activeOffer = useMemo(
    () => offers.find((offer) => offer.id === activeOfferId) ?? offers[0] ?? null,
    [offers, activeOfferId],
  );
  const activeRequest = one(activeOffer?.travel_requests);
  const chatStillOpen = activeRequest?.check_in ? isChatOpen(activeRequest.check_in) : false;

  const syncUnreadTotal = useCallback(
    (nextMessages: ChatMessage[], currentUserId: string, nextReadState: ChatReadState) => {
      setUnreadCount(countUnreadChatMessages(nextMessages, currentUserId, nextReadState));
    },
    [],
  );

  const markAsRead = useCallback(
    (offerId: string | null, nextMessages = messages) => {
      if (!userId || !offerId) return;
      const latestMessageId = nextMessages.at(-1)?.id ?? null;
      if (!latestMessageId) return;
      markOfferChatRead(userId, offerId, latestMessageId);
      const nextReadState = { ...loadChatReadState(userId) };
      setReadState(nextReadState);
      syncUnreadTotal(allMessages.length ? allMessages : nextMessages, userId, nextReadState);
      window.dispatchEvent(new CustomEvent("hd-chat-read"));
    },
    [allMessages, messages, syncUnreadTotal, userId],
  );

  async function runChatCleanup(supabase: ReturnType<typeof createBrowserSupabaseClient>) {
    await supabase.rpc("close_expired_accepted_chats");
  }

  async function detectRole(
    supabase: ReturnType<typeof createBrowserSupabaseClient>,
    currentUserId: string,
    metaRole: UserRole | null,
  ) {
    if (metaRole === "hotel" || metaRole === "advertiser") {
      setRole(metaRole);
      return metaRole;
    }
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

  async function loadAllMessages(offerIds: string[], currentUserId: string, nextReadState: ChatReadState) {
    if (!offerIds.length) {
      setAllMessages([]);
      setUnreadCount(0);
      return;
    }
    const supabase = createBrowserSupabaseClient();
    const { data } = await supabase
      .from("offer_messages")
      .select("id, offer_id, sender_id, sender_role, body, created_at")
      .in("offer_id", offerIds)
      .order("created_at", { ascending: true });
    const next = (data ?? []) as ChatMessage[];
    setAllMessages(next);
    syncUnreadTotal(next, currentUserId, nextReadState);
  }

  async function loadMessages(offerId: string, silent = false) {
    const supabase = createBrowserSupabaseClient();
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
    setMessages(next);
    if (open && userId) markAsRead(offerId, next);
  }

  async function loadWidget(silent = false, forceFullLoad = false) {
    if (!silent) setLoading(true);
    setError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { user } = await getAuthUserFast(supabase, { validateWhenNoSession: false });
      if (!user) {
        setUserId(null);
        setOffers([]);
        setMessages([]);
        setAllMessages([]);
        setUnreadCount(0);
        return;
      }
      const currentUserId = user.id;
      setUserId(currentUserId);

      if (!open && !forceFullLoad) {
        return;
      }

      await runChatCleanup(supabase);
      const nextReadState = loadChatReadState(currentUserId);
      setReadState(nextReadState);
      const currentRole = await detectRole(supabase, currentUserId, roleFromUserMetadata(user));
      let query = supabase
        .from("offers")
        .select("id, hotel_accounts(property_name), travel_requests(city_name, preferred_area, request_code, check_in, advertiser_profiles(first_name, last_name))")
        .eq("status", "accepted")
        .order("created_at", { ascending: false });
      if (currentRole === "hotel") {
        const { data: hotelAccount } = await supabase.from("hotel_accounts").select("id, subscription_active, account_status").eq("user_id", currentUserId).maybeSingle();
        if (!hotelAccount?.subscription_active || hotelAccount.account_status !== "active") {
          setOffers([]);
          setMessages([]);
          setAllMessages([]);
          setUnreadCount(0);
          return;
        }
        if (hotelAccount.id) query = query.eq("hotel_account_id", hotelAccount.id);
      } else {
        const { data: advertiser } = await supabase.from("advertiser_profiles").select("id").eq("user_id", currentUserId).maybeSingle();
        if (advertiser?.id) {
          const { data: requests } = await supabase.from("travel_requests").select("id").eq("advertiser_id", advertiser.id);
          const requestIds = (requests ?? []).map((item: { id: string }) => item.id);
          if (requestIds.length) query = query.in("travel_request_id", requestIds);
          else {
            setOffers([]);
            setMessages([]);
            setAllMessages([]);
            setUnreadCount(0);
            return;
          }
        }
      }
      const { data, error: offerError } = await query;
      if (offerError) {
        setError(offerError.message);
        return;
      }
      const nextOffers = ((data ?? []) as unknown as ChatOffer[]).filter(offerChatOpen);
      setOffers(nextOffers);
      const nextActiveId = activeOfferId && nextOffers.some((o) => o.id === activeOfferId) ? activeOfferId : nextOffers[0]?.id ?? null;
      setActiveOfferId(nextActiveId);
      await loadAllMessages(
        nextOffers.map((offer) => offer.id),
        currentUserId,
        nextReadState,
      );
      if (nextActiveId) await loadMessages(nextActiveId, silent);
      else setMessages([]);
    } catch (err) {
      if (!silent) setError(err instanceof Error ? err.message : "Errore durante il caricamento della chat.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadWidget(false, false);
  }, []);

  useEffect(() => {
    if (!open || !userId) return;
    void loadWidget(true, true);
  }, [open, userId]);

  useEffect(() => {
    if (activeOfferId) void loadMessages(activeOfferId);
  }, [activeOfferId]);

  useEffect(() => {
    const onOpenChat = (event: Event) => {
      const offerId = (event as CustomEvent<{ offerId?: string }>).detail?.offerId;
      if (offerId) setActiveOfferId(offerId);
      setOpen(true);
      if (userId) void loadWidget(true, true);
    };
    window.addEventListener("hd-open-chat", onOpenChat);
    return () => window.removeEventListener("hd-open-chat", onOpenChat);
  }, [userId]);

  useEffect(() => {
    if (!userId || !open) return;
    const interval = window.setInterval(() => {
      void loadWidget(true, true);
    }, 30000);
    return () => window.clearInterval(interval);
  }, [open, userId]);
  useEffect(() => {
    if (open && activeOfferId) markAsRead(activeOfferId, messages);
  }, [open, activeOfferId, messages, markAsRead]);

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!body.trim() || !userId || !activeOffer || !chatStillOpen) return;
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
      await loadWidget(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore durante l’invio del messaggio.");
    } finally {
      setSending(false);
    }
  }

  if (!userId) return null;

  return (
    <div className="safe-bottom fixed bottom-4 right-4 z-40 flex max-w-[calc(100vw-1.5rem)] flex-col items-end max-sm:bottom-20">
      {open ? (
        <div className="mb-3 w-[min(100vw-1.5rem,920px)] overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between border-b border-zinc-200 p-4 dark:border-zinc-800">
            <div className="min-w-0 pr-3">
              <p className="text-sm font-semibold">Chat</p>
              <p className="text-xs text-zinc-500">
                {offers.length} conversazioni attive · chiuse 24h dopo il check-in
              </p>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800" aria-label="Chiudi chat">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex max-h-[min(82vh,720px)] flex-col lg:grid lg:grid-cols-[minmax(220px,280px)_minmax(0,1fr)]">
            <div className="max-h-[220px] overflow-x-auto border-b border-zinc-200 p-2 dark:border-zinc-800 lg:max-h-none lg:overflow-y-auto lg:border-b-0 lg:border-r">
              {offers.length === 0 ? <p className="p-3 text-xs text-zinc-500">Nessuna chat attiva.</p> : null}
              {offers.map((offer) => {
                const offerRequest = one(offer.travel_requests);
                const offerUnread = userId ? unreadForOffer(allMessages, offer.id, userId, readState) : 0;
                return (
                  <button
                    key={offer.id}
                    type="button"
                    onClick={() => setActiveOfferId(offer.id)}
                    className={`relative mb-1 w-full min-w-[200px] rounded-2xl p-3 text-left text-xs lg:min-w-0 ${
                      offer.id === activeOfferId
                        ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200"
                        : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }`}
                  >
                    <span className="block break-words font-semibold leading-tight">{counterpartName(offer, role)}</span>
                    <span className="mt-1 inline-flex rounded-full bg-white px-2 py-0.5 text-[11px] font-bold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
                      {requestCode(offer)}
                    </span>
                    <span className="mt-1 block break-words leading-tight text-zinc-500">
                      {offerRequest?.city_name ?? "Chat"}
                      {offerRequest?.preferred_area ? ` · ${offerRequest.preferred_area}` : ""}
                    </span>
                    {offerUnread > 0 ? (
                      <span className="absolute right-2 top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-bold text-white">
                        {offerUnread > 99 ? "99+" : offerUnread}
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
            <div className="flex min-h-[420px] min-w-0 flex-col lg:min-h-[560px]">
              <div className="border-b border-zinc-200 p-3 dark:border-zinc-800">
                <p className="break-words text-sm font-semibold leading-tight">{counterpartName(activeOffer, role)}</p>
                <p className="mt-1 break-words text-xs leading-tight text-zinc-500">
                  <span className="font-bold text-zinc-700 dark:text-zinc-200">{requestCode(activeOffer)}</span>
                  {activeRequest?.city_name ? ` · ${activeRequest.city_name}` : ""}
                  {activeRequest?.preferred_area ? ` · ${activeRequest.preferred_area}` : ""}
                </p>
                {!chatStillOpen && activeRequest ? (
                  <p className="mt-2 text-xs text-amber-700 dark:text-amber-300">Chat chiusa: sono passate più di 24 ore dal check-in previsto.</p>
                ) : null}
              </div>
              <div className="flex-1 space-y-2 overflow-y-auto p-3">
                {loading ? <p className="text-xs text-zinc-500">Caricamento...</p> : null}
                {error ? <p className="rounded-2xl bg-red-50 p-3 text-xs text-red-700">{error}</p> : null}
                {!loading && !error && messages.length === 0 ? <p className="text-xs text-zinc-500">Nessun messaggio.</p> : null}
                {messages.map((message) => {
                  const mine = message.sender_id === userId;
                  return (
                    <div key={message.id} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[92%] rounded-2xl p-3 text-sm leading-relaxed lg:max-w-[75%] ${
                          mine ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950" : "bg-zinc-100 dark:bg-zinc-800"
                        }`}
                      >
                        <p className="break-words whitespace-pre-wrap">{message.body}</p>
                        <p className="mt-1 text-[11px] opacity-60">{time(message.created_at)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <form onSubmit={sendMessage} className="flex gap-2 border-t border-zinc-200 p-3 dark:border-zinc-800">
                <input
                  value={body}
                  onChange={(event) => setBody(event.target.value)}
                  placeholder={chatStillOpen ? "Scrivi un messaggio..." : "Chat chiusa"}
                  disabled={!chatStillOpen}
                  className="min-w-0 w-full rounded-full border border-zinc-300 bg-white px-4 py-3 text-sm disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-950"
                />
                <button
                  disabled={sending || !body.trim() || !activeOffer || !chatStillOpen}
                  type="submit"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white disabled:opacity-50 dark:bg-white dark:text-zinc-950"
                  aria-label="Invia messaggio"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
      <button
        onClick={() => setOpen((value) => !value)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-700 text-white shadow-2xl"
        aria-label="Apri chat"
      >
        <MessageCircle className="h-6 w-6" />
        {unreadCount > 0 ? (
          <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-red-600 px-2 text-xs font-bold text-white">
            {unreadCount > 99 ? "99+" : unreadCount}
          </span>
        ) : null}
      </button>
    </div>
  );
}
