"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { mealPlanLabels, structureTypeLabels, type MealPlan, type StructureType } from "@/types/app";

type OfferHotel = {
  id: string;
  property_name: string;
  structure_type: StructureType;
  city_name: string;
  specific_area: string | null;
  cin_code: string;
  description: string | null;
  public_email: string | null;
  public_phone: string | null;
};

type OfferRequest = {
  id: string;
  city_name: string;
  preferred_area: string;
  check_in: string;
  check_out: string;
  status: string;
};

type OfferDetail = {
  id: string;
  travel_request_id: string;
  total_price: number;
  description: string;
  conditions: string | null;
  meal_plan_included: MealPlan;
  expires_at: string;
  status: string;
  created_at: string;
  hotel_accounts: OfferHotel | null;
  travel_requests: OfferRequest | null;
};

type RawOfferDetail = Omit<OfferDetail, "hotel_accounts" | "travel_requests"> & {
  hotel_accounts: OfferHotel | OfferHotel[] | null;
  travel_requests: OfferRequest | OfferRequest[] | null;
};

function normalizeOfferDetail(raw: RawOfferDetail): OfferDetail {
  return {
    ...raw,
    hotel_accounts: Array.isArray(raw.hotel_accounts) ? raw.hotel_accounts[0] ?? null : raw.hotel_accounts,
    travel_requests: Array.isArray(raw.travel_requests) ? raw.travel_requests[0] ?? null : raw.travel_requests,
  };
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("it-IT", { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(value));
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(value);
}

export function AdvertiserOfferDetail() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const offerId = params.id;

  const [offer, setOffer] = useState<OfferDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  async function loadOffer() {
    setLoading(true);
    setError(null);

    try {
      const supabase = createBrowserSupabaseClient();
      const { data: authData, error: authError } = await supabase.auth.getUser();
      if (authError || !authData.user) {
        setError("Devi effettuare il login come inserzionista.");
        return;
      }

      const { data, error: offerError } = await supabase
        .from("offers")
        .select(`
          id,
          travel_request_id,
          total_price,
          description,
          conditions,
          meal_plan_included,
          expires_at,
          status,
          created_at,
          hotel_accounts(id, property_name, structure_type, city_name, specific_area, cin_code, description, public_email, public_phone),
          travel_requests(id, city_name, preferred_area, check_in, check_out, status)
        `)
        .eq("id", offerId)
        .single();

      if (offerError || !data) {
        setError("Offerta non trovata o non disponibile.");
        return;
      }

      setOffer(normalizeOfferDetail(data as unknown as RawOfferDetail));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore durante il caricamento dell’offerta.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadOffer();
  }, [offerId]);

  async function updateOfferStatus(status: "accepted" | "rejected") {
    if (!offer) return;
    setSaving(true);
    setError(null);
    setMessage(null);

    try {
      const supabase = createBrowserSupabaseClient();
      const { error: offerError } = await supabase.from("offers").update({ status }).eq("id", offer.id);

      if (offerError) {
        setError(offerError.message);
        return;
      }

      if (status === "accepted") {
        await supabase.from("travel_requests").update({ status: "completed" }).eq("id", offer.travel_request_id);
      }

      await fetch("/api/notifications/offer-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ offerId: offer.id, status }),
      });

      setMessage(status === "accepted" ? "Offerta accettata. Ora puoi comunicare con la struttura." : "Offerta rifiutata.");
      setTimeout(() => router.push("/inserzionista/dashboard"), 900);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore durante l’aggiornamento dell’offerta.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div className="rounded-3xl border p-6 text-sm text-zinc-500">Caricamento offerta...</div>;

  return (
    <div className="space-y-6">
      <Link href="/inserzionista/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"><ArrowLeft className="h-4 w-4" /> Torna alla dashboard</Link>
      {error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}
      {message ? <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">{message}</div> : null}
      {offer ? (
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">Offerta ricevuta</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">{formatCurrency(Number(offer.total_price))}</h1>
          <p className="mt-2 text-sm text-zinc-500">Stato offerta: {offer.status} · Scadenza: {formatDate(offer.expires_at)}</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"><h2 className="text-lg font-semibold">Struttura</h2><p className="mt-2 font-medium">{offer.hotel_accounts?.property_name ?? "Struttura"}</p><p className="text-sm text-zinc-500">{offer.hotel_accounts?.structure_type ? structureTypeLabels[offer.hotel_accounts.structure_type] : "Struttura"} · {offer.hotel_accounts?.city_name}</p>{offer.hotel_accounts?.specific_area ? <p className="mt-1 text-sm text-zinc-500">Zona: {offer.hotel_accounts.specific_area}</p> : null}{offer.hotel_accounts?.cin_code ? <p className="mt-1 text-xs text-zinc-400">CIN: {offer.hotel_accounts.cin_code}</p> : null}{offer.hotel_accounts?.description ? <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{offer.hotel_accounts.description}</p> : null}{offer.hotel_accounts?.id ? <Link href={`/hotel/${offer.hotel_accounts.id}`} className="mt-4 inline-flex rounded-full border px-4 py-2 text-sm font-semibold">Visualizza profilo hotel</Link> : null}</div>
            <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"><h2 className="text-lg font-semibold">Dettagli proposta</h2><p className="mt-2 text-sm"><strong>Trattamento incluso:</strong> {mealPlanLabels[offer.meal_plan_included]}</p><p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{offer.description}</p>{offer.conditions ? <p className="mt-3 text-sm text-zinc-500"><strong>Condizioni:</strong> {offer.conditions}</p> : null}</div>
          </div>
          <div className="mt-6 rounded-2xl border border-zinc-200 p-5 text-sm dark:border-zinc-800"><h2 className="text-lg font-semibold">Richiesta collegata</h2><p className="mt-2 text-zinc-600 dark:text-zinc-400">{offer.travel_requests?.city_name} · {offer.travel_requests?.preferred_area} · {offer.travel_requests ? formatDate(offer.travel_requests.check_in) : ""} → {offer.travel_requests ? formatDate(offer.travel_requests.check_out) : ""}</p></div>
          {offer.status === "accepted" ? <Link href={`/chat/${offer.id}`} className="mt-6 inline-flex rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white">Apri chat con la struttura</Link> : null}
          {offer.status === "pending" ? <div className="mt-6 flex flex-wrap gap-3"><button disabled={saving} onClick={() => updateOfferStatus("accepted")} className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"><CheckCircle2 className="h-4 w-4" /> Accetta offerta</button><button disabled={saving} onClick={() => updateOfferStatus("rejected")} className="inline-flex items-center gap-2 rounded-full border border-red-200 px-6 py-3 text-sm font-semibold text-red-700 disabled:opacity-60"><XCircle className="h-4 w-4" /> Rifiuta</button></div> : null}
        </section>
      ) : null}
    </div>
  );
}
