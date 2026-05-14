"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { mealPlanLabels, type MealPlan } from "@/types/app";

type TravelRequest = {
  id: string;
  city_name: string;
  preferred_area: string;
  check_in: string;
  check_out: string;
  guests_count: number;
  rooms_count: number;
  budget: number;
  meal_plan: MealPlan;
  notes: string | null;
  visible_contact_email: string | null;
  visible_contact_phone: string | null;
  status: string;
  expires_at: string;
};

type HotelAccount = {
  id: string;
  property_name: string;
  subscription_active: boolean;
  account_status: string;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("it-IT", { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(value));
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(value);
}

function defaultOfferExpiry() {
  const date = new Date();
  date.setDate(date.getDate() + 2);
  return date.toISOString().slice(0, 10);
}

export function CreateOfferForm() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const requestId = params.id;

  const [request, setRequest] = useState<TravelRequest | null>(null);
  const [hotel, setHotel] = useState<HotelAccount | null>(null);
  const [totalPrice, setTotalPrice] = useState(420);
  const [mealPlanIncluded, setMealPlanIncluded] = useState<MealPlan>("breakfast");
  const [description, setDescription] = useState("Offerta personalizzata per il soggiorno richiesto.");
  const [conditions, setConditions] = useState("Tariffa soggetta a disponibilità al momento della conferma.");
  const [expiresAt, setExpiresAt] = useState(defaultOfferExpiry());
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);

      try {
        const supabase = createBrowserSupabaseClient();
        const { data: authData, error: authError } = await supabase.auth.getUser();

        if (authError || !authData.user) {
          setError("Devi effettuare il login come struttura ricettiva.");
          return;
        }

        const { data: hotelData, error: hotelError } = await supabase
          .from("hotel_accounts")
          .select("id, property_name, subscription_active, account_status")
          .eq("user_id", authData.user.id)
          .single();

        if (hotelError || !hotelData) {
          setError("Profilo struttura non trovato.");
          return;
        }

        if (!hotelData.subscription_active || hotelData.account_status !== "active") {
          setError("La struttura deve essere attiva e con abbonamento valido per inviare offerte.");
          return;
        }

        setHotel(hotelData as HotelAccount);

        const { data: requestData, error: requestError } = await supabase
          .from("travel_requests")
          .select("id, city_name, preferred_area, check_in, check_out, guests_count, rooms_count, budget, meal_plan, notes, visible_contact_email, visible_contact_phone, status, expires_at")
          .eq("id", requestId)
          .single();

        if (requestError || !requestData) {
          setError("Annuncio non trovato o non più disponibile.");
          return;
        }

        setRequest(requestData as TravelRequest);
        setTotalPrice(Number(requestData.budget) || 1);
        setMealPlanIncluded(requestData.meal_plan as MealPlan);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Errore durante il caricamento dell’annuncio.");
      } finally {
        setLoading(false);
      }
    }

    void load();
  }, [requestId]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      if (!hotel || !request) {
        setError("Dati mancanti per inviare l’offerta.");
        return;
      }

      const supabase = createBrowserSupabaseClient();
      const { error: insertError } = await supabase.from("offers").upsert(
        {
          travel_request_id: request.id,
          hotel_account_id: hotel.id,
          total_price: totalPrice,
          description,
          conditions: conditions.trim() || null,
          meal_plan_included: mealPlanIncluded,
          expires_at: `${expiresAt}T23:59:00+02:00`,
          status: "pending",
        },
        { onConflict: "travel_request_id,hotel_account_id" },
      );

      if (insertError) {
        setError(insertError.message);
        return;
      }

      await supabase.from("notifications").insert({
        recipient_type: "advertiser",
        recipient_id: request.id,
        travel_request_id: request.id,
        title: "Nuova offerta ricevuta",
        message: `${hotel.property_name} ha inviato un’offerta per il tuo annuncio a ${request.city_name}.`,
        is_read: false,
      });

      setSuccess("Offerta inviata correttamente.");
      setTimeout(() => router.push("/struttura/dashboard"), 900);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore durante l’invio dell’offerta.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <div className="rounded-3xl border p-6 text-sm text-zinc-500">Caricamento annuncio...</div>;
  }

  return (
    <div className="space-y-6">
      <Link href="/struttura/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">
        <ArrowLeft className="h-4 w-4" /> Torna alla dashboard
      </Link>

      {error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}

      {request ? (
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">Annuncio cliente</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Richiesta a {request.city_name}</h1>
          <div className="mt-4 grid gap-3 text-sm text-zinc-600 md:grid-cols-2 dark:text-zinc-400">
            <p><strong>Zona:</strong> {request.preferred_area}</p>
            <p><strong>Date:</strong> {formatDate(request.check_in)} → {formatDate(request.check_out)}</p>
            <p><strong>Ospiti:</strong> {request.guests_count}</p>
            <p><strong>Camere:</strong> {request.rooms_count}</p>
            <p><strong>Budget:</strong> {formatCurrency(Number(request.budget))}</p>
            <p><strong>Trattamento:</strong> {mealPlanLabels[request.meal_plan]}</p>
          </div>
          {request.notes ? <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400"><strong>Note:</strong> {request.notes}</p> : null}
        </section>
      ) : null}

      {request && hotel ? (
        <form onSubmit={onSubmit} className="space-y-5 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">La tua offerta</p>
            <h2 className="mt-2 text-2xl font-semibold">Invia proposta come {hotel.property_name}</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-medium">
              Prezzo totale €
              <input type="number" min={1} step="0.01" value={totalPrice} onChange={(event) => setTotalPrice(Number(event.target.value))} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
            </label>

            <label className="block text-sm font-medium">
              Trattamento incluso
              <select value={mealPlanIncluded} onChange={(event) => setMealPlanIncluded(event.target.value as MealPlan)} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950">
                {Object.entries(mealPlanLabels).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </label>

            <label className="block text-sm font-medium md:col-span-2">
              Descrizione offerta
              <textarea value={description} onChange={(event) => setDescription(event.target.value)} rows={4} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
            </label>

            <label className="block text-sm font-medium md:col-span-2">
              Condizioni
              <textarea value={conditions} onChange={(event) => setConditions(event.target.value)} rows={3} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
            </label>

            <label className="block text-sm font-medium">
              Scadenza offerta
              <input type="date" value={expiresAt} onChange={(event) => setExpiresAt(event.target.value)} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
            </label>
          </div>

          {success ? <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">{success}</div> : null}

          <button disabled={saving} type="submit" className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60 dark:bg-white dark:text-zinc-950">
            {saving ? "Invio in corso..." : "Invia offerta"}
          </button>
        </form>
      ) : null}
    </div>
  );
}
