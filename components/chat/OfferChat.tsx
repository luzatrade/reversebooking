"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Send } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type { UserRole } from "@/types/app";

type ChatMessage = {
  id: string;
  sender_id: string;
  sender_role: UserRole;
  body: string;
  created_at: string;
};

type ProfileData = {
  role: UserRole;
};

type OfferInfo = {
  id: string;
  status: string;
};

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export function OfferChat() {
  const params = useParams<{ offerId: string }>();
  const offerId = params.offerId;

  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<UserRole>("advertiser");
  const [offer, setOffer] = useState<OfferInfo | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loadChat() {
    setLoading(true);
    setError(null);

    try {
      const supabase = createBrowserSupabaseClient();
      const { data: authData, error: authError } = await supabase.auth.getUser();

      if (authError || !authData.user) {
        setError("Devi effettuare il login per aprire la chat.");
        return;
      }

      setUserId(authData.user.id);

      const { data: profileData } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", authData.user.id)
        .single();

      setRole(((profileData as ProfileData | null)?.role ?? "advertiser") as UserRole);

      const { data: offerData, error: offerError } = await supabase
        .from("offers")
        .select("id, status")
        .eq("id", offerId)
        .single();

      if (offerError || !offerData) {
        setError("Chat non disponibile o offerta non trovata.");
        return;
      }

      const typedOffer = offerData as OfferInfo;
      if (typedOffer.status !== "accepted") {
        setError("La chat si apre solo dopo l’accettazione dell’offerta.");
        return;
      }

      setOffer(typedOffer);

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
      setError(err instanceof Error ? err.message : "Errore durante il caricamento della chat.");
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
      const { error: insertError } = await supabase.from("offer_messages").insert({
        offer_id: offerId,
        sender_id: userId,
        sender_role: role,
        body: body.trim(),
      });

      if (insertError) {
        setError(insertError.message);
        return;
      }

      setBody("");
      await loadChat();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore durante l’invio del messaggio.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="space-y-6">
      <Link href={role === "hotel" ? "/struttura/dashboard" : "/inserzionista/dashboard"} className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">
        <ArrowLeft className="h-4 w-4" /> Torna alla dashboard
      </Link>

      <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">Chat offerta accettata</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Conversazione</h1>
        <p className="mt-2 text-sm text-zinc-500">La chat è disponibile solo dopo l’accettazione dell’offerta.</p>
      </section>

      {error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}

      <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="max-h-[520px] space-y-3 overflow-y-auto pr-2">
          {loading ? <p className="text-sm text-zinc-500">Caricamento chat...</p> : null}
          {!loading && !error && messages.length === 0 ? <p className="text-sm text-zinc-500">Nessun messaggio ancora. Scrivi il primo messaggio.</p> : null}
          {messages.map((message) => {
            const mine = message.sender_id === userId;
            return (
              <div key={message.id} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[78%] rounded-2xl p-4 text-sm ${mine ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950" : "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100"}`}>
                  <p>{message.body}</p>
                  <p className="mt-2 text-xs opacity-70">{message.sender_role === "hotel" ? "Struttura" : "Inserzionista"} · {formatDateTime(message.created_at)}</p>
                </div>
              </div>
            );
          })}
        </div>

        <form onSubmit={sendMessage} className="mt-5 flex gap-3">
          <input value={body} onChange={(event) => setBody(event.target.value)} placeholder="Scrivi un messaggio..." className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
          <button disabled={sending || !body.trim() || Boolean(error)} type="submit" className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white disabled:opacity-60 dark:bg-white dark:text-zinc-950">
            <Send className="h-4 w-4" /> Invia
          </button>
        </form>
      </section>
    </div>
  );
}
