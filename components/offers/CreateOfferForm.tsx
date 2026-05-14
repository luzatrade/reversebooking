"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { validateNoContactsInFields } from "@/lib/content/contact-guard";
import { mealPlanLabels, type MealPlan } from "@/types/app";

type RoomDetail = { room: number; adults: number; children: number; children_ages: number[] };
type PreferenceFilters = { connecting_rooms?: boolean; disabled_access?: boolean; pool?: boolean; spa?: boolean; bathtub?: boolean; garage?: boolean; beach?: boolean; pets_allowed?: boolean };
type TravelRequest = { id: string; city_name: string; preferred_area: string; check_in: string; check_out: string; guests_count: number; rooms_count: number; room_details: RoomDetail[] | null; preference_filters: PreferenceFilters | null; budget: number; meal_plan: MealPlan; notes: string | null; visible_contact_email: string | null; visible_contact_phone: string | null; status: string; expires_at: string };
type HotelAccount = { id: string; property_name: string; subscription_active: boolean; account_status: string };
const filterLabels: Array<{ key: keyof PreferenceFilters; label: string }> = [
  { key: "connecting_rooms", label: "Camere comunicanti" }, { key: "disabled_access", label: "Camera accessibile disabili" }, { key: "pool", label: "Piscina" }, { key: "spa", label: "Spa" }, { key: "bathtub", label: "Vasca" }, { key: "garage", label: "Garage" }, { key: "beach", label: "Spiaggia / vicino alla spiaggia" }, { key: "pets_allowed", label: "Animali ammessi" },
];
function formatDate(value: string) { return new Intl.DateTimeFormat("it-IT", { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(value)); }
function formatCurrency(value: number) { return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(value); }
function defaultOfferExpiry() { const date = new Date(); date.setDate(date.getDate() + 2); return date.toISOString().slice(0, 10); }
function getActiveFilters(filters: PreferenceFilters | null) { if (!filters) return []; return filterLabels.filter((filter) => Boolean(filters[filter.key])); }

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

  useEffect(() => { async function load() { setLoading(true); setError(null); try { const supabase = createBrowserSupabaseClient(); const { data: authData, error: authError } = await supabase.auth.getUser(); if (authError || !authData.user) { setError("Devi effettuare il login come struttura ricettiva."); return; } const { data: hotelData, error: hotelError } = await supabase.from("hotel_accounts").select("id, property_name, subscription_active, account_status").eq("user_id", authData.user.id).single(); if (hotelError || !hotelData) { setError("Profilo struttura non trovato."); return; } if (!hotelData.subscription_active || hotelData.account_status !== "active") { setError("La struttura deve essere attiva e con abbonamento valido per inviare offerte."); return; } setHotel(hotelData as HotelAccount); const { data: requestData, error: requestError } = await supabase.from("travel_requests").select("id, city_name, preferred_area, check_in, check_out, guests_count, rooms_count, room_details, preference_filters, budget, meal_plan, notes, visible_contact_email, visible_contact_phone, status, expires_at").eq("id", requestId).single(); if (requestError || !requestData) { setError("Annuncio non trovato o non più disponibile."); return; } setRequest(requestData as TravelRequest); setTotalPrice(Number(requestData.budget) || 1); setMealPlanIncluded(requestData.meal_plan as MealPlan); } catch (err) { setError(err instanceof Error ? err.message : "Errore durante il caricamento dell’annuncio."); } finally { setLoading(false); } } void load(); }, [requestId]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSaving(true); setError(null); setSuccess(null);
    try {
      if (!hotel || !request) { setError("Dati mancanti per inviare l’offerta."); return; }
      const contactError = validateNoContactsInFields([{ label: "descrizione offerta", value: description }, { label: "condizioni", value: conditions }]);
      if (contactError) { setError(contactError); return; }
      const supabase = createBrowserSupabaseClient();
      const { error: insertError } = await supabase.from("offers").upsert({ travel_request_id: request.id, hotel_account_id: hotel.id, total_price: totalPrice, description, conditions: conditions.trim() || null, meal_plan_included: mealPlanIncluded, expires_at: `${expiresAt}T23:59:00+02:00`, status: "pending" }, { onConflict: "travel_request_id,hotel_account_id" });
      if (insertError) { setError(insertError.message); return; }
      await supabase.from("notifications").insert({ recipient_type: "advertiser", recipient_id: request.id, travel_request_id: request.id, title: "Nuova offerta ricevuta", message: `${hotel.property_name} ha inviato un’offerta per il tuo annuncio a ${request.city_name}.`, is_read: false });
      setSuccess("Offerta inviata correttamente."); setTimeout(() => router.push("/struttura/dashboard"), 900);
    } catch (err) { setError(err instanceof Error ? err.message : "Errore durante l’invio dell’offerta."); } finally { setSaving(false); }
  }

  if (loading) return <div className="rounded-3xl border p-6 text-sm text-zinc-500">Caricamento annuncio...</div>;
  const activeFilters = getActiveFilters(request?.preference_filters ?? null);

  return (
    <div className="space-y-6">
      <Link href="/struttura/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"><ArrowLeft className="h-4 w-4" /> Torna alla dashboard</Link>
      {error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}
      {request ? <section className="space-y-5 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"><div><p className="text-sm font-medium uppercase tracking-wide text-emerald-700">Annuncio cliente</p><h1 className="mt-2 text-3xl font-semibold tracking-tight">Richiesta a {request.city_name}</h1></div><div className="grid gap-3 text-sm text-zinc-600 md:grid-cols-2 dark:text-zinc-400"><p><strong>Zona:</strong> {request.preferred_area}</p><p><strong>Date:</strong> {formatDate(request.check_in)} → {formatDate(request.check_out)}</p><p><strong>Ospiti totali:</strong> {request.guests_count}</p><p><strong>Camere totali:</strong> {request.rooms_count}</p><p><strong>Budget:</strong> {formatCurrency(Number(request.budget))}</p><p><strong>Trattamento:</strong> {mealPlanLabels[request.meal_plan]}</p></div><div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"><h2 className="font-semibold">Dettaglio camere e ospiti</h2><div className="mt-3 grid gap-3 md:grid-cols-2">{(request.room_details?.length ? request.room_details : [{ room: 1, adults: request.guests_count, children: 0, children_ages: [] }]).map((room, index) => <div key={index} className="rounded-2xl bg-zinc-50 p-4 text-sm dark:bg-zinc-950/60"><p className="font-semibold">Camera {index + 1}</p><p className="mt-1 text-zinc-600 dark:text-zinc-400">Adulti: {room.adults}</p><p className="text-zinc-600 dark:text-zinc-400">Bambini: {room.children}</p>{room.children > 0 ? <p className="text-zinc-600 dark:text-zinc-400">Età bambini: {room.children_ages.join(", ")}</p> : null}</div>)}</div></div><div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"><h2 className="font-semibold">Filtri e richieste extra</h2>{activeFilters.length ? <div className="mt-3 flex flex-wrap gap-2">{activeFilters.map((filter) => <span key={filter.key} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">{filter.label}</span>)}</div> : <p className="mt-2 text-sm text-zinc-500">Nessun filtro extra selezionato.</p>}</div><div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200">Contatti inserzionista nascosti. Saranno disponibili solo dopo accettazione dell’offerta.</div>{request.notes ? <p className="text-sm text-zinc-600 dark:text-zinc-400"><strong>Note:</strong> {request.notes}</p> : null}</section> : null}
      {request && hotel ? <form onSubmit={onSubmit} className="space-y-5 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"><div><p className="text-sm font-medium uppercase tracking-wide text-emerald-700">La tua offerta</p><h2 className="mt-2 text-2xl font-semibold">Invia proposta come {hotel.property_name}</h2></div><div className="grid gap-5 md:grid-cols-2"><label className="block text-sm font-medium">Prezzo totale €<input type="number" min={1} step="0.01" value={totalPrice} onChange={(event) => setTotalPrice(Number(event.target.value))} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label><label className="block text-sm font-medium">Trattamento incluso<select value={mealPlanIncluded} onChange={(event) => setMealPlanIncluded(event.target.value as MealPlan)} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950">{Object.entries(mealPlanLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label><label className="block text-sm font-medium md:col-span-2">Descrizione offerta<textarea value={description} onChange={(event) => setDescription(event.target.value)} rows={4} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label><label className="block text-sm font-medium md:col-span-2">Condizioni<textarea value={conditions} onChange={(event) => setConditions(event.target.value)} rows={3} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label><label className="block text-sm font-medium">Scadenza offerta<input type="date" value={expiresAt} onChange={(event) => setExpiresAt(event.target.value)} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label></div><div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200">Non inserire email, telefoni, WhatsApp, siti o profili social nei campi liberi dell’offerta. I contatti potranno essere condivisi solo tramite i pulsanti autorizzati o dopo l’accettazione.</div>{success ? <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">{success}</div> : null}<button disabled={saving} type="submit" className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60 dark:bg-white dark:text-zinc-950">{saving ? "Invio in corso..." : "Invia offerta"}</button></form> : null}
    </div>
  );
}
