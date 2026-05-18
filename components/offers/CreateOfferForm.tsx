"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { AcceptedBookingSummary, type AcceptedBookingSummaryData } from "@/components/offers/AcceptedBookingSummary";
import { acceptedOfferTheme } from "@/components/offers/acceptedOfferTheme";
import { PrintSummaryButton } from "@/components/offers/PrintSummaryButton";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { validateNoContactsInFields } from "@/lib/content/contact-guard";
import { makeOfferCode, relaunchOfferHref } from "@/lib/identifiers";
import { mealPlanLabels, type MealPlan, type StructureType } from "@/types/app";

type RoomType = "double" | "twin" | "triple" | "quadruple";
type RoomDetail = { room: number; room_type?: RoomType; adults: number; children: number; children_ages: number[] };
type PreferenceFilters = { connecting_rooms?: boolean; disabled_access?: boolean; pool?: boolean; spa?: boolean; bathtub?: boolean; garage?: boolean; beach?: boolean; pets_allowed?: boolean };
type TravelRequest = { id: string; request_code: string | null; city_name: string; preferred_area: string; check_in: string; check_out: string; guests_count: number; rooms_count: number; room_details: RoomDetail[] | null; preference_filters: PreferenceFilters | null; budget: number; meal_plan: MealPlan; notes: string | null; visible_contact_email: string | null; visible_contact_phone: string | null; status: string; expires_at: string };
type HotelAccount = { id: string; property_name: string; structure_type: StructureType; city_name: string; specific_area: string | null; cin_code: string | null; subscription_active: boolean; account_status: string };
type ExistingOffer = { id: string; offer_code: string | null; total_price: number; description: string; conditions: string | null; meal_plan_included: MealPlan; expires_at: string; status: string; created_at: string; updated_at: string };

const roomTypeLabels: Record<RoomType, string> = { double: "Matrimoniale", twin: "Twin", triple: "Tripla", quadruple: "Quadrupla" };
const filterLabels: Array<{ key: keyof PreferenceFilters; label: string }> = [
  { key: "connecting_rooms", label: "Camere comunicanti" }, { key: "disabled_access", label: "Camera accessibile disabili" }, { key: "pool", label: "Piscina" }, { key: "spa", label: "Spa" }, { key: "bathtub", label: "Vasca" }, { key: "garage", label: "Garage" }, { key: "beach", label: "Spiaggia / vicino alla spiaggia" }, { key: "pets_allowed", label: "Animali ammessi" },
];
function formatDate(value: string) { return new Intl.DateTimeFormat("it-IT", { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(value)); }
function formatCurrency(value: number) { return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(value); }
function defaultOfferExpiry() { const date = new Date(); date.setDate(date.getDate() + 2); return date.toISOString().slice(0, 10); }
function getActiveFilters(filters: PreferenceFilters | null) { if (!filters) return []; return filterLabels.filter((filter) => Boolean(filters[filter.key])); }
function requestCode(request: TravelRequest | null) { return request?.request_code ?? "RB------"; }
function offerCode(offer: ExistingOffer | null) { return offer?.offer_code ?? "OF------"; }
function roomTypeLabel(room: RoomDetail) { return room.room_type ? roomTypeLabels[room.room_type] ?? "Matrimoniale" : "Matrimoniale"; }
function expiryInputValue(value: string) { return value.slice(0, 10); }

function applyOfferPrefill(offer: ExistingOffer, setters: {
  setTotalPrice: (v: number) => void;
  setMealPlanIncluded: (v: MealPlan) => void;
  setDescription: (v: string) => void;
  setConditions: (v: string) => void;
  setExpiresAt: (v: string) => void;
}) {
  setters.setTotalPrice(Number(offer.total_price) || 1);
  setters.setMealPlanIncluded(offer.meal_plan_included);
  setters.setDescription(offer.description);
  setters.setConditions(offer.conditions ?? "");
  setters.setExpiresAt(expiryInputValue(offer.expires_at) || defaultOfferExpiry());
}

export function CreateOfferForm() {
  const params = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const requestId = params.id;
  const relaunchFromId = searchParams.get("relaunch_from");
  const [request, setRequest] = useState<TravelRequest | null>(null);
  const [hotel, setHotel] = useState<HotelAccount | null>(null);
  const [existingOffers, setExistingOffers] = useState<ExistingOffer[]>([]);
  const [relaunchSourceCode, setRelaunchSourceCode] = useState<string | null>(null);
  const [totalPrice, setTotalPrice] = useState(420);
  const [mealPlanIncluded, setMealPlanIncluded] = useState<MealPlan>("breakfast");
  const [description, setDescription] = useState("Offerta personalizzata per il soggiorno richiesto.");
  const [conditions, setConditions] = useState("Tariffa soggetta a disponibilità al momento della conferma.");
  const [expiresAt, setExpiresAt] = useState(defaultOfferExpiry());
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const pendingOffer = existingOffers.find((offer) => offer.status === "pending") ?? null;
  const acceptedOffer = existingOffers.find((offer) => offer.status === "accepted") ?? null;
  const canCreateNew = !pendingOffer && !acceptedOffer && request?.status === "active";

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const supabase = createBrowserSupabaseClient();
        const { data: authData, error: authError } = await supabase.auth.getUser();
        if (authError || !authData.user) { setError("Devi effettuare il login come struttura ricettiva."); return; }
        const { data: hotelData, error: hotelError } = await supabase.from("hotel_accounts").select("id, property_name, structure_type, city_name, specific_area, cin_code, subscription_active, account_status").eq("user_id", authData.user.id).single();
        if (hotelError || !hotelData) { setError("Profilo struttura non trovato."); return; }
        if (!hotelData.subscription_active || hotelData.account_status !== "active") { setError("La struttura deve essere attiva e con abbonamento valido per inviare offerte."); return; }
        setHotel(hotelData as HotelAccount);
        const { data: requestData, error: requestError } = await supabase.from("travel_requests").select("id, request_code, city_name, preferred_area, check_in, check_out, guests_count, rooms_count, room_details, preference_filters, budget, meal_plan, notes, visible_contact_email, visible_contact_phone, status, expires_at").eq("id", requestId).single();
        if (requestError || !requestData) { setError("Annuncio non trovato o non più disponibile."); return; }
        setRequest(requestData as TravelRequest);
        const { data: offerRows, error: offersError } = await supabase
          .from("offers")
          .select("id, offer_code, total_price, description, conditions, meal_plan_included, expires_at, status, created_at, updated_at")
          .eq("travel_request_id", requestId)
          .eq("hotel_account_id", hotelData.id)
          .order("created_at", { ascending: false });
        if (offersError) { setError(offersError.message); return; }
        const offers = (offerRows ?? []) as ExistingOffer[];
        setExistingOffers(offers);
        if (!offers.some((offer) => offer.status === "pending")) {
          setTotalPrice(Number(requestData.budget) || 1);
          setMealPlanIncluded(requestData.meal_plan as MealPlan);
          const prefillSource = relaunchFromId
            ? offers.find((offer) => offer.id === relaunchFromId)
            : offers.find((offer) => offer.status === "rejected" || offer.status === "expired");
          if (prefillSource) {
            applyOfferPrefill(prefillSource, { setTotalPrice, setMealPlanIncluded, setDescription, setConditions, setExpiresAt });
            if (relaunchFromId) setRelaunchSourceCode(prefillSource.offer_code);
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Errore durante il caricamento dell’annuncio.");
      } finally {
        setLoading(false);
      }
    }
    void load();
  }, [requestId, relaunchFromId]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canCreateNew) return;
    setSaving(true);
    setError(null);
    setSuccess(null);
    try {
      if (!hotel || !request) { setError("Dati mancanti per inviare l’offerta."); return; }
      const contactError = validateNoContactsInFields([{ label: "descrizione offerta", value: description }, { label: "condizioni", value: conditions }]);
      if (contactError) { setError(contactError); return; }
      const supabase = createBrowserSupabaseClient();
      const { data: savedOffer, error: insertError } = await supabase
        .from("offers")
        .insert({
          offer_code: makeOfferCode(),
          travel_request_id: request.id,
          hotel_account_id: hotel.id,
          total_price: totalPrice,
          description,
          conditions: conditions.trim() || null,
          meal_plan_included: mealPlanIncluded,
          expires_at: `${expiresAt}T23:59:00+02:00`,
          status: "pending",
        })
        .select("id, offer_code")
        .single();
      if (insertError) { setError(insertError.message); return; }
      await supabase.from("notifications").insert({
        recipient_type: "advertiser",
        recipient_id: request.id,
        travel_request_id: request.id,
        title: "Nuova offerta ricevuta",
        message: `Codice ${requestCode(request)} · ${savedOffer?.offer_code ?? "OF------"} · ${hotel.property_name} ha inviato un’offerta per il tuo annuncio a ${request.city_name}.`,
        is_read: false,
      });
      if (savedOffer?.id) await fetch("/api/notifications/new-offer", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ offerId: savedOffer.id }) });
      setSuccess(relaunchFromId ? `Nuova offerta ${savedOffer?.offer_code ?? ""} inviata correttamente.` : "Offerta inviata correttamente.");
      setTimeout(() => router.push("/struttura/dashboard"), 900);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore durante l’invio dell’offerta.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div className="rounded-3xl border p-6 text-sm text-zinc-500">Caricamento annuncio...</div>;
  const latestClosedOffer = existingOffers.find((offer) => offer.status === "rejected" || offer.status === "expired") ?? null;
  const acceptedSummary: AcceptedBookingSummaryData | null =
    acceptedOffer && request && hotel
      ? {
          audience: "hotel",
          requestCode: requestCode(request),
          offerCode: offerCode(acceptedOffer),
          cityName: request.city_name,
          preferredArea: request.preferred_area,
          checkIn: request.check_in,
          checkOut: request.check_out,
          guestsCount: request.guests_count,
          roomsCount: request.rooms_count,
          roomDetails: request.room_details,
          mealPlanRequest: request.meal_plan,
          mealPlanOffer: acceptedOffer.meal_plan_included,
          budgetPerRoom: Number(request.budget),
          totalPrice: Number(acceptedOffer.total_price),
          hotelName: hotel.property_name,
          hotelStructureType: hotel.structure_type,
          hotelCity: hotel.city_name,
          hotelArea: hotel.specific_area,
          hotelCin: hotel.cin_code,
          description: acceptedOffer.description,
          conditions: acceptedOffer.conditions,
          notes: request.notes,
          preferenceFilters: request.preference_filters,
          acceptedAt: acceptedOffer.updated_at,
        }
      : null;

  return (
    <div className="space-y-6">
      <Link href="/struttura/dashboard" className="print-hide inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"><ArrowLeft className="h-4 w-4" /> Torna alla dashboard</Link>
      {error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}
      {request && !acceptedSummary ? (
        <section className="space-y-5 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">Annuncio cliente · {requestCode(request)}</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Richiesta a {request.city_name}</h1>
          </div>
          <div className="grid gap-3 text-sm text-zinc-600 md:grid-cols-2 dark:text-zinc-400">
            <p><strong>Codice richiesta:</strong> {requestCode(request)}</p>
            <p><strong>Zona:</strong> {request.preferred_area}</p>
            <p><strong>Date:</strong> {formatDate(request.check_in)} → {formatDate(request.check_out)}</p>
            <p><strong>Ospiti totali:</strong> {request.guests_count}</p>
            <p><strong>Camere totali:</strong> {request.rooms_count}</p>
            <p><strong>Budget:</strong> {formatCurrency(Number(request.budget))}</p>
            <p><strong>Trattamento:</strong> {mealPlanLabels[request.meal_plan]}</p>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200">Contatti inserzionista nascosti. Saranno disponibili solo dopo accettazione dell’offerta.</div>
        </section>
      ) : null}

      {pendingOffer ? (
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">Offerta inviata · {offerCode(pendingOffer)}</p>
          <h2 className="mt-2 text-2xl font-semibold">Offerta in attesa di risposta</h2>
          <p className="mt-2 text-sm text-zinc-500">L’offerta inviata non è modificabile. Potrai rilanciarne una nuova solo dopo rifiuto o scadenza.</p>
          <div className="mt-4 grid gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <p><strong>Prezzo:</strong> {formatCurrency(Number(pendingOffer.total_price))}</p>
            <p><strong>Scadenza:</strong> {formatDate(pendingOffer.expires_at)}</p>
            <p><strong>Descrizione:</strong> {pendingOffer.description}</p>
          </div>
        </section>
      ) : null}

      {acceptedOffer && acceptedSummary ? (
        <div className={`space-y-5 ${acceptedOfferTheme.panel}`}>
          <div className="print-hide flex flex-wrap items-center gap-3">
            <PrintSummaryButton />
            <span className={acceptedOfferTheme.badgeLg}>
              🤝 Offerta {offerCode(acceptedOffer)} accettata · chat in basso a destra
            </span>
          </div>
          <AcceptedBookingSummary data={acceptedSummary} />
        </div>
      ) : null}

      {!acceptedOffer && !pendingOffer && latestClosedOffer && !relaunchFromId ? (
        <section className="rounded-3xl border border-sky-200 bg-sky-50 p-6 dark:border-sky-900 dark:bg-sky-950/30">
          <p className="text-sm text-sky-900 dark:text-sky-200">
            La tua offerta precedente <strong>{offerCode(latestClosedOffer)}</strong> ({latestClosedOffer.status}) non è modificabile.
          </p>
          <Link href={relaunchOfferHref(requestId, latestClosedOffer.id)} className="mt-4 inline-flex rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">
            Rilancia offerta (nuovo codice OF)
          </Link>
        </section>
      ) : null}

      {request && hotel && canCreateNew ? (
        <form onSubmit={onSubmit} className="space-y-5 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          {relaunchFromId ? (
            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4 text-sm text-sky-900 dark:border-sky-900 dark:bg-sky-950/40 dark:text-sky-200">
              Stai rilanciando un’offerta{relaunchSourceCode ? ` (${relaunchSourceCode})` : ""}. Verrà creato un <strong>nuovo codice OF</strong>; l’offerta precedente resta invariata.
            </div>
          ) : null}
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">La tua offerta · {requestCode(request)}</p>
            <h2 className="mt-2 text-2xl font-semibold">Invia proposta come {hotel.property_name}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-medium">Prezzo totale €<input type="number" min={1} step="0.01" value={totalPrice} onChange={(event) => setTotalPrice(Number(event.target.value))} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label>
            <label className="block text-sm font-medium">Trattamento incluso<select value={mealPlanIncluded} onChange={(event) => setMealPlanIncluded(event.target.value as MealPlan)} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950">{Object.entries(mealPlanLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
            <label className="block text-sm font-medium md:col-span-2">Descrizione offerta<textarea value={description} onChange={(event) => setDescription(event.target.value)} rows={4} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label>
            <label className="block text-sm font-medium md:col-span-2">Condizioni<textarea value={conditions} onChange={(event) => setConditions(event.target.value)} rows={3} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label>
            <label className="block text-sm font-medium">Scadenza offerta<input type="date" value={expiresAt} onChange={(event) => setExpiresAt(event.target.value)} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label>
          </div>
          {success ? <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">{success}</div> : null}
          <button disabled={saving} type="submit" className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60 dark:bg-white dark:text-zinc-950">
            {saving ? "Invio in corso..." : relaunchFromId ? "Rilancia offerta" : "Invia offerta"}
          </button>
        </form>
      ) : null}

      {!canCreateNew && !pendingOffer && !acceptedOffer && request?.status !== "active" ? (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">Questa richiesta non è più attiva. Non è possibile inviare nuove offerte.</div>
      ) : null}
    </div>
  );
}

