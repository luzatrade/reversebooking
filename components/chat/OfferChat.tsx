"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Send } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import type { UserRole } from "@/types/app";

type ChatMessage = {
  id: string;
  sender_id: string;
  sender_role: UserRole;
  body: string;
  created_at: string;
};

type OfferInfo = { id: string; status: string };

function formatDateTime(value: string, locale: string) {
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export function OfferChat() {
  const { t, locale } = useLanguage();
  const c = t.chat;
  const params = useParams<{ offerId: string }>();
  const offerId = params.offerId;
  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<UserRole>("hotel");
  const [offer, setOffer] = useState<OfferInfo | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function detectRole(currentUserId: string) {
    const supabase = createBrowserSupabaseClient();
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("user_id", currentUserId)
      .maybeSingle();

    if (profile?.role === "hotel" || profile?.role === "advertiser") {
      setRole(profile.role);
      return profile.role;
    }

    const { data: hotel } = await supabase
      .from("hotel_accounts")
      .select("id")
      .eq("user_id", currentUserId)
      .maybeSingle();

    const fallbackRole: UserRole = hotel ? "hotel" : "advertiser";
    setRole(fallbackRole);
    return fallbackRole;
  }

  async function loadChat() {
    setLoading(true);
    setError(null);

    try {
      const supabase = createBrowserSupabaseClient();
      const { data: authData, error: authError } = await supabase.auth.getUser();

      if (authError || !authData.user) {
        setError(c.loginRequired);
        return;
      }

      setUserId(authData.user.id);
      await detectRole(authData.user.id);

      const { data: offerData, error: offerError } = await supabase
        .from("offers")
        .select("id, status")
        .eq("id", offerId)
        .single();

      if (offerError || !offerData) {
        setError(c.offerNotFound);
        return;
      }

      if (offerData.status !== "accepted") {
        setError(c.chatAfterAccept);
        return;
      }

      setOffer(offerData as OfferInfo);

      const { data: messageData, error: messageError } = await supabase
        .from("offer_messages")
        .select("id, sender_id, sender_role, body, created_at")
        .eq("offer_id", offerId)
        .order("created_at", { ascending: true });

      if (messageError) {
        setError(messageError.message);
        return;
      }

      setMessages((messageData ?? []) as ChatMessage[]);
    } catch (err) {
      setError(err instanceof Error ? err.message : c.errorLoad);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadChat();
  }, [offerId]);

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!body.trim() || !userId || !offer) return;

    setSending(true);
    setError(null);

    try {
      const supabase = createBrowserSupabaseClient();
      const currentRole = await detectRole(userId);
      const { error: insertError } = await supabase.from("offer_messages").insert({
        offer_id: offerId,
        sender_id: userId,
        sender_role: currentRole,
        body: body.trim(),
      });

      if (insertError) {
        setError(insertError.message);
        return;
      }

      setBody("");
      await loadChat();
    } catch (err) {
      setError(err instanceof Error ? err.message : c.errorSend);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="space-y-6">
      <Link href={role === "hotel" ? "/struttura/dashboard" : "/inserzionista/dashboard"} className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950">
        <ArrowLeft className="h-4 w-4" /> {c.backToDashboard}
      </Link>

      <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">{c.offerAcceptedLabel}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{c.conversation}</h1>
      </section>

      {error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}

      <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="max-h-[520px] space-y-3 overflow-y-auto pr-2">
          {loading ? <p className="text-sm text-zinc-500">{c.loading}</p> : null}
          {!loading && !error && messages.length === 0 ? <p className="text-sm text-zinc-500">{c.noMessagesYet}</p> : null}
          {messages.map((message) => {
            const mine = message.sender_id === userId;
            return (
              <div key={message.id} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[78%] rounded-2xl p-4 text-sm ${mine ? "bg-zinc-950 text-white" : "bg-zinc-100 text-zinc-800"}`}>
                  <p>{message.body}</p>
                  <p className="mt-2 text-xs opacity-70">{message.sender_role === "hotel" ? c.roleHotel : c.roleAdvertiser} · {formatDateTime(message.created_at, locale)}</p>
                </div>
              </div>
            );
          })}
        </div>

        <form onSubmit={sendMessage} className="mt-5 flex gap-3">
          <input value={body} onChange={(event) => setBody(event.target.value)} placeholder={c.writeMessage} className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm" />
          <button disabled={sending || !body.trim() || Boolean(error)} type="submit" className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white disabled:opacity-60">
            <Send className="h-4 w-4" /> {c.send}
          </button>
        </form>
      </section>
    </div>
  );
}
