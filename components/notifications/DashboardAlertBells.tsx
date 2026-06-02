"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BellRing, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import {
  countChatNotifications,
  countNewOfferNotifications,
  countNewRequestNotifications,
  isChatNotification,
  isNewRequestNotification,
  type NotificationRow,
} from "@/lib/notifications/classify";
import { countUnreadChatMessages, loadChatReadState, type ChatMessageLike } from "@/lib/chat/readState";
import { isChatOpen } from "@/lib/chat/lifecycle";
import { getAuthUserFast } from "@/lib/auth/clientSession";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type { UserRole } from "@/types/app";

type Props = {
  role: Extract<UserRole, "hotel" | "advertiser">;
};

type Counts = {
  requestAlerts: number;
  offerAlerts: number;
  chatAlerts: number;
  chatUnread: number;
};

const bellButtonClass =
  "relative flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-lg transition hover:scale-105 hover:shadow-xl";

export function DashboardAlertBells({ role }: Props) {
  const { t } = useLanguage();
  const router = useRouter();
  const [counts, setCounts] = useState<Counts>({
    requestAlerts: 0,
    offerAlerts: 0,
    chatAlerts: 0,
    chatUnread: 0,
  });
  const [loading, setLoading] = useState(true);
  const [marking, setMarking] = useState(false);
  const [highlight, setHighlight] = useState(false);

  const loadCounts = useCallback(async () => {
    try {
      const supabase = createBrowserSupabaseClient();
      const { user } = await getAuthUserFast(supabase);
      if (!user) {
        setCounts({ requestAlerts: 0, offerAlerts: 0, chatAlerts: 0, chatUnread: 0 });
        return;
      }

      const userId = user.id;
      let requestAlerts = 0;
      let offerAlerts = 0;
      let chatAlerts = 0;
      let chatUnread = 0;

      if (role === "hotel") {
        const { data: hotel } = await supabase.from("hotel_accounts").select("id").eq("user_id", userId).maybeSingle();
        if (hotel?.id) {
          const { data: notifications } = await supabase
            .from("notifications")
            .select("id, title, message")
            .eq("recipient_type", "hotel")
            .eq("recipient_id", hotel.id)
            .eq("is_read", false);
          const rows = (notifications ?? []) as NotificationRow[];
          requestAlerts = countNewRequestNotifications(rows);
          chatAlerts = countChatNotifications(rows);

          const { data: offers } = await supabase
            .from("offers")
            .select("id, travel_requests(check_in)")
            .eq("hotel_account_id", hotel.id)
            .eq("status", "accepted");
          const openOfferIds = ((offers ?? []) as Array<{ id: string; travel_requests?: { check_in: string } | { check_in: string }[] | null }>)
            .filter((offer) => {
              const request = Array.isArray(offer.travel_requests) ? offer.travel_requests[0] : offer.travel_requests;
              return request?.check_in ? isChatOpen(request.check_in) : false;
            })
            .map((offer) => offer.id);

          if (openOfferIds.length) {
            const { data: messages } = await supabase
              .from("offer_messages")
              .select("id, offer_id, sender_id")
              .in("offer_id", openOfferIds)
              .order("created_at", { ascending: true });
            chatUnread = countUnreadChatMessages((messages ?? []) as ChatMessageLike[], userId, loadChatReadState(userId));
          }
        }
      } else {
        const { data: advertiser } = await supabase.from("advertiser_profiles").select("id").eq("user_id", userId).maybeSingle();
        if (advertiser?.id) {
          const { data: ownRequests } = await supabase.from("travel_requests").select("id").eq("advertiser_id", advertiser.id);
          const requestIds = (ownRequests ?? []).map((request: { id: string }) => request.id);
          if (requestIds.length) {
            const { data: notifications } = await supabase
              .from("notifications")
              .select("id, title, message")
              .eq("recipient_type", "advertiser")
              .eq("is_read", false)
              .in("travel_request_id", requestIds);
            const rows = (notifications ?? []) as NotificationRow[];
            offerAlerts = countNewOfferNotifications(rows);
            chatAlerts = countChatNotifications(rows);

            const { data: offers } = await supabase
              .from("offers")
              .select("id, travel_requests(check_in)")
              .in("travel_request_id", requestIds)
              .eq("status", "accepted");
            const openOfferIds = ((offers ?? []) as Array<{ id: string; travel_requests?: { check_in: string } | { check_in: string }[] | null }>)
              .filter((offer) => {
                const request = Array.isArray(offer.travel_requests) ? offer.travel_requests[0] : offer.travel_requests;
                return request?.check_in ? isChatOpen(request.check_in) : false;
              })
              .map((offer) => offer.id);

            if (openOfferIds.length) {
              const { data: messages } = await supabase
                .from("offer_messages")
                .select("id, offer_id, sender_id")
                .in("offer_id", openOfferIds)
                .order("created_at", { ascending: true });
              chatUnread = countUnreadChatMessages((messages ?? []) as ChatMessageLike[], userId, loadChatReadState(userId));
            }
          }
        }
      }

      setCounts({ requestAlerts, offerAlerts, chatAlerts, chatUnread });
    } finally {
      setLoading(false);
    }
  }, [role]);

  useEffect(() => {
    const start = () => void loadCounts();
    const idleId =
      typeof requestIdleCallback !== "undefined"
        ? requestIdleCallback(start, { timeout: 2000 })
        : window.setTimeout(start, 400);
    const interval = window.setInterval(() => {
      void loadCounts();
    }, 8000);
    const onChatRead = () => {
      void loadCounts();
    };
    const onFocusAlerts = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setHighlight(true);
      window.setTimeout(() => setHighlight(false), 2400);
    };
    window.addEventListener("hd-chat-read", onChatRead);
    window.addEventListener("hd-focus-alert-bells", onFocusAlerts);
    return () => {
      if (typeof cancelIdleCallback !== "undefined" && typeof idleId === "number") {
        cancelIdleCallback(idleId);
      } else {
        window.clearTimeout(idleId as number);
      }
      window.clearInterval(interval);
      window.removeEventListener("hd-chat-read", onChatRead);
      window.removeEventListener("hd-focus-alert-bells", onFocusAlerts);
    };
  }, [loadCounts]);

  async function markNotificationsRead(matcher: (row: NotificationRow) => boolean) {
    setMarking(true);
    try {
      const supabase = createBrowserSupabaseClient();
      const { user } = await getAuthUserFast(supabase);
      if (!user) return;

      if (role === "hotel") {
        const { data: hotel } = await supabase.from("hotel_accounts").select("id").eq("user_id", user.id).maybeSingle();
        if (!hotel?.id) return;
        const { data: notifications } = await supabase
          .from("notifications")
          .select("id, title, message")
          .eq("recipient_type", "hotel")
          .eq("recipient_id", hotel.id)
          .eq("is_read", false);
        const ids = ((notifications ?? []) as NotificationRow[]).filter(matcher).map((row) => row.id);
        if (ids.length) await supabase.from("notifications").update({ is_read: true }).in("id", ids);
        return;
      }

      const { data: advertiser } = await supabase.from("advertiser_profiles").select("id").eq("user_id", user.id).maybeSingle();
      if (!advertiser?.id) return;
      const { data: ownRequests } = await supabase.from("travel_requests").select("id").eq("advertiser_id", advertiser.id);
      const requestIds = (ownRequests ?? []).map((request: { id: string }) => request.id);
      if (!requestIds.length) return;
      const { data: notifications } = await supabase
        .from("notifications")
        .select("id, title, message")
        .eq("recipient_type", "advertiser")
        .eq("is_read", false)
        .in("travel_request_id", requestIds);
      const ids = ((notifications ?? []) as NotificationRow[]).filter(matcher).map((row) => row.id);
      if (ids.length) await supabase.from("notifications").update({ is_read: true }).in("id", ids);
    } finally {
      setMarking(false);
      void loadCounts();
    }
  }

  async function openRequestAlerts() {
    if (role === "hotel") {
      await markNotificationsRead(isNewRequestNotification);
      router.push("/struttura/dashboard#annunci-disponibili");
      return;
    }
    await markNotificationsRead((row) => !isChatNotification(row));
    router.push("/inserzionista/dashboard#offerte-ricevute");
  }

  function openChat() {
    window.dispatchEvent(new CustomEvent("hd-open-chat"));
  }

  if (loading) return null;

  const primaryCount = role === "hotel" ? counts.requestAlerts : counts.offerAlerts;
  const chatCount = Math.max(counts.chatUnread, counts.chatAlerts);

  if (primaryCount === 0 && chatCount === 0) return null;

  return (
    <div
      className={`pointer-events-none fixed right-4 top-4 z-[10001] flex flex-col items-end gap-2 safe-top sm:right-6 sm:top-5 ${
        highlight ? "rounded-2xl ring-4 ring-orange-400 ring-offset-2 ring-offset-zinc-50" : ""
      }`}
    >
      {role === "hotel" && counts.requestAlerts > 0 ? (
        <button
          type="button"
          disabled={marking}
          onClick={() => void openRequestAlerts()}
          className={`${bellButtonClass} pointer-events-auto bg-orange-500 text-white hover:bg-orange-600`}
          aria-label={t.alerts.hotelBell}
          title={t.alerts.hotelBell}
        >
          <BellRing className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-bold text-white">
            {counts.requestAlerts > 99 ? "99+" : counts.requestAlerts}
          </span>
        </button>
      ) : null}

      {role === "advertiser" && counts.offerAlerts > 0 ? (
        <button
          type="button"
          disabled={marking}
          onClick={() => void openRequestAlerts()}
          className={`${bellButtonClass} pointer-events-auto bg-red-600 text-white hover:bg-red-700`}
          aria-label={t.alerts.advertiserBell}
          title={t.alerts.advertiserBell}
        >
          <BellRing className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-zinc-950 px-1 text-[10px] font-bold text-white">
            {counts.offerAlerts > 99 ? "99+" : counts.offerAlerts}
          </span>
        </button>
      ) : null}

      {chatCount > 0 ? (
        <button
          type="button"
          onClick={openChat}
          className={`${bellButtonClass} pointer-events-auto bg-emerald-700 text-white hover:bg-emerald-800`}
          aria-label={t.chat.openChat}
          title={t.chat.openChat}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-bold text-white">
            {chatCount > 99 ? "99+" : chatCount}
          </span>
        </button>
      ) : null}
    </div>
  );
}
