"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle2, MessageCircle, XCircle } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { openOfferChat } from "@/lib/chat/openOfferChat";
import { AcceptedBookingSummary, type AcceptedBookingSummaryData } from "@/components/offers/AcceptedBookingSummary";
import { OfferBudgetComparison } from "@/components/offers/OfferBudgetComparison";
import { acceptedOfferTheme } from "@/components/offers/acceptedOfferTheme";
import { LegalMicroLine } from "@/components/legal/LegalMicroLine";
import { PrintSummaryButton } from "@/components/offers/PrintSummaryButton";
import { DownloadVoucherButton } from "@/components/offers/DownloadVoucherButton";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { mealPlanLabels, structureTypeLabels, type MealPlan, type StructureType } from "@/types/app";

type OfferHotel = { id: string; property_name: string; structure_type: StructureType; city_name: string; specific_area: string | null; cin_code: string; description: string | null; public_email: string | null; public_phone: string | null };
type OfferRequest = {
  id: string;
  request_code: string | null;
  city_name: string;
  preferred_area: string;
  check_in: string;
  check_out: string;
  guests_count: number;
  rooms_count: number;
  room_details: AcceptedBookingSummaryData["roomDetails"];
  preference_filters: AcceptedBookingSummaryData["preferenceFilters"];
  budget: number;
  meal_plan: MealPlan;
  notes: string | null;
  status: string;
};
type OfferDetail = {
  id: string;
  offer_code: string | null;
  travel_request_id: string;
  hotel_account_id: string;
  total_price: number;
  description: string;
  conditions: string | null;
  meal_plan_included: MealPlan;
  expires_at: string;
  status: string;
  created_at: string;
  updated_at: string;
  hotel_accounts: OfferHotel | null;
  travel_requests: OfferRequest | null;
};
type RawOfferDetail = Omit<OfferDetail, "hotel_accounts" | "travel_requests"> & { hotel_accounts: OfferHotel | OfferHotel[] | null; travel_requests: OfferRequest | OfferRequest[] | null };

function normalizeOfferDetail(raw: RawOfferDetail): OfferDetail {
  return { ...raw, hotel_accounts: Array.isArray(raw.hotel_accounts) ? raw.hotel_accounts[0] ?? null : raw.hotel_accounts, travel_requests: Array.isArray(raw.travel_requests) ? raw.travel_requests[0] ?? null : raw.travel_requests };
}
function formatDate(value: string) { return new Intl.DateTimeFormat("it-IT", { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(value)); }
function formatCurrency(value: number) { return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(value); }
function requestCode(offer: OfferDetail) { return offer.travel_requests?.request_code ?? "RB------"; }
function offerCode(offer: OfferDetail) { return offer.offer_code ?? "OF------"; }
function buildSummaryData(offer: OfferDetail): AcceptedBookingSummaryData | null {
  const request = offer.travel_requests;
  const hotel = offer.hotel_accounts;
  if (!request) return null;
  return {
    audience: "advertiser",
    requestCode: requestCode(offer),
    offerCode: offerCode(offer),
    cityName: request.city_name,
    preferredArea: request.preferred_area,
    checkIn: request.check_in,
    checkOut: request.check_out,
    guestsCount: request.guests_count,
    roomsCount: request.rooms_count,
    roomDetails: request.room_details,
    mealPlanRequest: request.meal_plan,
    mealPlanOffer: offer.meal_plan_included,
    budgetPerRoom: Number(request.budget),
    totalPrice: Number(offer.total_price),
    hotelName: hotel?.property_name ?? "Struttura",
    hotelStructureType: hotel?.structure_type ?? null,
    hotelCity: hotel?.city_name ?? null,
    hotelArea: hotel?.specific_area ?? null,
    hotelCin: hotel?.cin_code ?? null,
    description: offer.description,
    conditions: offer.conditions,
    notes: request.notes,
    preferenceFilters: request.preference_filters,
    acceptedAt: offer.updated_at,
  };
}

export function AdvertiserOfferDetail() {
  const { t } = useLanguage();
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const offerId = params.id;
  const [offer, setOffer] = useState<OfferDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  async function loadOffer() {
    setLoading(true); setError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { data: authData, error: authError } = await supabase.auth.getUser();
      if (authError || !authData.user) { setError("Devi effettuare il login come inserzionista."); return; }
      const { data, error: offerError } = await supabase
        .from("offers")
        .select("id, offer_code, travel_request_id, hotel_account_id, total_price, description, conditions, meal_plan_included, expires_at, status, created_at, updated_at, hotel_accounts(id, property_name, structure_type, city_name, specific_area, cin_code, description, public_email, public_phone), travel_requests(id, request_code, city_name, preferred_area, check_in, check_out, guests_count, rooms_count, room_details, preference_filters, budget, meal_plan, notes, status)")
        .eq("id", offerId)
        .single();
      if (offerError || !data) { setError("Offerta non trovata o non disponibile."); return; }
      setOffer(normalizeOfferDetail(data as unknown as RawOfferDetail));
    } catch (err) { setError(err instanceof Error ? err.message : "Errore durante il caricamento dell’offerta."); }
    finally { setLoading(false); }
  }

  useEffect(() => { void loadOffer(); }, [offerId]);

  async function createFallbackHotelNotification(status: "accepted" | "rejected") {
    if (!offer) return;
    const supabase = createBrowserSupabaseClient();
    const isAccepted = status === "accepted";
    const code = requestCode(offer);
    const city = offer.travel_requests?.city_name ?? "la richiesta";
    await supabase.from("notifications").insert({
      recipient_type: "hotel",
      recipient_id: offer.hotel_account_id,
      travel_request_id: offer.travel_request_id,
      title: isAccepted ? "Offerta accettata" : "Offerta rifiutata",
      message: isAccepted ? `Codice ${code} · La tua offerta per ${city} è stata accettata.` : `Codice ${code} · La tua offerta per ${city} è stata rifiutata.`,
      is_read: false,
    });
  }

  async function updateOfferStatus(status: "accepted" | "rejected") {
    if (!offer) return;
    setSaving(true); setError(null); setMessage(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { error: offerError } = await supabase.from("offers").update({ status }).eq("id", offer.id);
      if (offerError) { setError(offerError.message); return; }
      if (status === "accepted") await supabase.from("travel_requests").update({ status: "completed" }).eq("id", offer.travel_request_id);
      const response = await fetch("/api/notifications/offer-status", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ offerId: offer.id, status }) });
      if (!response.ok) await createFallbackHotelNotification(status);
      setMessage(status === "accepted" ? "Offerta accettata. L’hotel riceverà avviso ed email. Qui sotto trovi il riepilogo completo, stampabile in PDF." : "Offerta rifiutata. L’hotel riceverà avviso ed email.");
      if (status === "accepted") await loadOffer();
      else setTimeout(() => router.push("/inserzionista/dashboard"), 900);
    } catch (err) {
      await createFallbackHotelNotification(status);
      setError(err instanceof Error ? err.message : "Errore durante l’aggiornamento dell’offerta.");
    }     finally { setSaving(false); }
  }

  function handleChatWithStructure() {
    if (!offer) return;
    if (offer.status !== "accepted") {
      setMessage(t.chat.chatAfterAccept);
      return;
    }
    openOfferChat(offer.id);
  }

  if (loading) return <div className="rounded-3xl border p-6 text-sm text-zinc-500">Caricamento offerta...</div>;

  const summaryData = offer ? buildSummaryData(offer) : null;

  return (
    <div className="space-y-6">
      <Link href="/inserzionista/dashboard" className="print-hide inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950">
        <ArrowLeft className="h-4 w-4" /> Torna alla dashboard
      </Link>
      {error ? <div className="print-hide rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}
      {message ? <div className={`print-hide ${acceptedOfferTheme.message}`}>{message}</div> : null}
      {offer?.status === "accepted" && summaryData ? (
        <div className="space-y-5">
          <div className="print-hide flex flex-wrap items-center gap-3">
            <PrintSummaryButton />
            <DownloadVoucherButton data={summaryData} />
            <button
              type="button"
              onClick={handleChatWithStructure}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
            >
              <MessageCircle className="h-4 w-4" />
              {t.chat.chatWithStructure}
            </button>
          </div>
          <AcceptedBookingSummary data={summaryData} />
        </div>
      ) : null}
      {offer && offer.status !== "accepted" ? (
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">Offerta {offerCode(offer)} · richiesta {requestCode(offer)}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">{formatCurrency(Number(offer.total_price))}</h1>
          {offer.travel_requests ? (
            <OfferBudgetComparison
              totalPrice={Number(offer.total_price)}
              budgetTotal={Number(offer.travel_requests.budget)}
              className="mt-3"
            />
          ) : null}
          <p className="mt-2 text-sm text-zinc-500">Stato offerta: {offer.status} · Scadenza: {formatDate(offer.expires_at)}</p>
          {offer.status !== "pending" ? <p className="mt-2 text-sm text-zinc-500">Questa offerta non è modificabile.</p> : null}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"><h2 className="text-lg font-semibold">Struttura</h2><p className="mt-2 font-medium">{offer.hotel_accounts?.property_name ?? "Struttura"}</p><p className="text-sm text-zinc-500">{offer.hotel_accounts?.structure_type ? structureTypeLabels[offer.hotel_accounts.structure_type] : "Struttura"} · {offer.hotel_accounts?.city_name}</p>{offer.hotel_accounts?.specific_area ? <p className="mt-1 text-sm text-zinc-500">Zona: {offer.hotel_accounts.specific_area}</p> : null}{offer.hotel_accounts?.description ? <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{offer.hotel_accounts.description}</p> : null}{offer.hotel_accounts?.id ? <Link href={`/hotel/${offer.hotel_accounts.id}`} className="mt-4 inline-flex rounded-full border px-4 py-2 text-sm font-semibold">Visualizza profilo hotel</Link> : null}</div>
            <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"><h2 className="text-lg font-semibold">Dettagli proposta</h2><p className="mt-2 text-sm"><strong>Trattamento incluso:</strong> {mealPlanLabels[offer.meal_plan_included]}</p><p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{offer.description}</p>{offer.conditions ? <p className="mt-3 text-sm text-zinc-500"><strong>Condizioni:</strong> {offer.conditions}</p> : null}</div>
          </div>
          <div className="mt-6 rounded-2xl border border-zinc-200 p-5 text-sm dark:border-zinc-800"><h2 className="text-lg font-semibold">Richiesta collegata</h2><p className="mt-2 text-zinc-600 dark:text-zinc-400"><strong>Codice:</strong> {requestCode(offer)} · {offer.travel_requests?.city_name} · {offer.travel_requests?.preferred_area} · {offer.travel_requests ? formatDate(offer.travel_requests.check_in) : ""} → {offer.travel_requests ? formatDate(offer.travel_requests.check_out) : ""}</p></div>
          {offer.status === "pending" ? (
            <div className="mt-6 space-y-3">
              <LegalMicroLine variant="acceptOffer" />
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  disabled={saving}
                  onClick={() => void updateOfferStatus("accepted")}
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-400 disabled:opacity-60"
                >
                  <CheckCircle2 className="h-4 w-4" /> Accetta offerta
                </button>
                <button
                  type="button"
                  disabled={saving}
                  onClick={() => void updateOfferStatus("rejected")}
                  className="inline-flex items-center gap-2 rounded-full border border-red-200 px-6 py-3 text-sm font-semibold text-red-700 disabled:opacity-60"
                >
                  <XCircle className="h-4 w-4" /> Rifiuta
                </button>
                <button
                  type="button"
                  disabled={saving}
                  onClick={handleChatWithStructure}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-700 bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-800 hover:bg-emerald-100 disabled:opacity-60"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t.chat.chatWithStructure}
                </button>
              </div>
            </div>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}
