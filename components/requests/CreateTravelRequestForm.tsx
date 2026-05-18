"use client";

import { FormEvent, useEffect, useMemo, useState} from "react";
import Link from "next/link";
import { useRouter, useSearchParams} from "next/navigation";
import { CityAutocomplete} from "@/components/location/CityAutocomplete";
import { AppDatePicker} from "@/components/ui/AppDatePicker";
import { createBrowserSupabaseClient} from "@/lib/supabase/client";
import { validateNoContactsInFields} from "@/lib/content/contact-guard";
import { majorWorldCities, type WorldCity} from "@/lib/constants/world-cities";
import { cityFromInput, emptyWorldCity} from "@/lib/constants/world-city-helpers";
import { makeRequestCode} from "@/lib/identifiers";
import { mealPlanLabels, structureTypeLabels, type MealPlan, type PreferredStructureType} from "@/types/app";

type RoomType = "double" | "twin" | "triple" | "quadruple";
type RoomDetail = { room: number; room_type: RoomType; adults: number; children: number; children_ages: number[]};
type PreferenceFilters = { connecting_rooms: boolean; disabled_access: boolean; pool: boolean; spa: boolean; bathtub: boolean; garage: boolean; beach: boolean; pets_allowed: boolean};

const roomTypeLabels: Record<RoomType, string> = { double: "Matrimoniale", twin: "Twin", triple: "Tripla", quadruple: "Quadrupla"};
const emptyFilters: PreferenceFilters = { connecting_rooms: false, disabled_access: false, pool: false, spa: false, bathtub: false, garage: false, beach: false, pets_allowed: false};
const filterLabels: Array<{ key: keyof PreferenceFilters; label: string}> = [
  { key: "connecting_rooms", label: "Camere comunicanti"}, { key: "disabled_access", label: "Camera accessibile disabili"}, { key: "pool", label: "Piscina"}, { key: "spa", label: "Spa"}, { key: "bathtub", label: "Vasca"}, { key: "garage", label: "Garage"}, { key: "beach", label: "Spiaggia / vicino alla spiaggia"}, { key: "pets_allowed", label: "Animali ammessi"},
];
const formFieldLgLabel = "text-sm font-medium text-zinc-800";
const formFieldLgInput =
  "mt-2 h-16 w-full rounded-2xl border border-zinc-300 bg-white px-4 text-base font-semibold leading-none text-zinc-950 outline-none transition placeholder:font-normal placeholder:text-zinc-400 focus:border-[#0f4c81] focus:ring-2 focus:ring-[#0f4c81]/20";
function expiresAtForCheckIn(checkIn: string) { return `${checkIn}T23:59:00+02:00`;}
function normalizeRooms(rooms: RoomDetail[]) { return rooms.map((room, index) => ({ ...room, room: index + 1, room_type: room.room_type ?? "double", adults: Math.max(1, room.adults), children: Math.max(0, room.children), children_ages: room.children_ages.slice(0, room.children).map((age) => Math.max(0, age))}));}
function formatCurrency(value: number) { return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0}).format(value || 0);}
function toInputValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function todayInputValue() { return toInputValue(new Date());}
function dayAfterInputValue(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return value;
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + 1);
  return toInputValue(date);
}
function positiveNumber(value: string | null, fallback: number) { const parsed = Number(value); return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;}
const defaultRoom: RoomDetail = { room: 1, room_type: "double", adults: 1, children: 0, children_ages: []};
function cityFromParams(cityId: string | null, cityName: string | null) {
  const byId = cityId ? majorWorldCities.find((city) => city.city_id === cityId) : null;
  if (byId) return byId;
  const value = cityName?.trim();
  if (value) {
    const byName = majorWorldCities.find((city) => city.label.toLowerCase() === value.toLowerCase() || city.city_name.toLowerCase() === value.toLowerCase());
    if (byName) return byName;
    return cityFromInput("IT", value);
 }
  return emptyWorldCity();
}
function initialCity(searchParams: URLSearchParams) {
  if (searchParams.get("city_id") || searchParams.get("city")) {
    return cityFromParams(searchParams.get("city_id"), searchParams.get("city"));
 }
  return emptyWorldCity();
}
function initialRooms(searchParams: URLSearchParams) {
  if (searchParams.get("rooms") || searchParams.get("adults") || searchParams.get("children")) {
    return roomsFromParams(searchParams.get("rooms"), searchParams.get("adults"), searchParams.get("children"));
 }
  return [{ ...defaultRoom}];
}
function filtersFromParam(value: string | null): PreferenceFilters { if (!value) return emptyFilters; const keys = new Set(value.split(",").map((item) => item.trim()).filter(Boolean)); return { ...emptyFilters, connecting_rooms: keys.has("connecting_rooms"), disabled_access: keys.has("disabled_access"), pool: keys.has("pool"), spa: keys.has("spa"), bathtub: keys.has("bathtub"), garage: keys.has("garage"), beach: keys.has("beach"), pets_allowed: keys.has("pets_allowed")};}
function roomsFromParams(roomCountValue: string | null, adultsValue: string | null, childrenValue: string | null): RoomDetail[] {
  const roomCount = Math.max(1, Math.min(10, positiveNumber(roomCountValue, 1)));
  let adults = Math.max(roomCount, positiveNumber(adultsValue, 2));
  let children = Math.max(0, Number(childrenValue || 0));
  return Array.from({ length: roomCount}).map((_, index) => {
    const roomsLeft = roomCount - index;
    const adultsForRoom = Math.max(1, Math.floor(adults / roomsLeft));
    adults -= adultsForRoom;
    const childrenForRoom = index === 0 ? children : 0;
    children = 0;
    return { room: index + 1, room_type: "double", adults: adultsForRoom, children: childrenForRoom, children_ages: Array.from({ length: childrenForRoom}).map(() => 0)};
 });
}

export function CreateTravelRequestForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCity, setSelectedCity] = useState<WorldCity>(() => initialCity(searchParams));
  const [preferredArea, setPreferredArea] = useState(() => searchParams.get("area") ?? "");
  const [preferredStructureType, setPreferredStructureType] = useState<PreferredStructureType>("all");
  const [checkIn, setCheckIn] = useState(() => searchParams.get("check_in") ?? "");
  const [checkOut, setCheckOut] = useState(() => searchParams.get("check_out") ?? "");
  const [rooms, setRooms] = useState<RoomDetail[]>(() => initialRooms(searchParams));
  const [filters, setFilters] = useState<PreferenceFilters>(() => filtersFromParam(searchParams.get("filters")));
  const [budget, setBudget] = useState(() => searchParams.get("budget") ?? "");
  const [mealPlan, setMealPlan] = useState<MealPlan>("breakfast");
  const [notes, setNotes] = useState("");
  const cloneFromId = searchParams.get("clone_from");
  const [cloneSourceCode, setCloneSourceCode] = useState<string | null>(null);
  const [prefillLoading, setPrefillLoading] = useState(Boolean(cloneFromId));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (!cloneFromId) {
      setPrefillLoading(false);
      return;
   }
    async function loadClone() {
      setPrefillLoading(true);
      setError(null);
      try {
        const supabase = createBrowserSupabaseClient();
        const { data: authData, error: authError} = await supabase.auth.getUser();
        if (authError || !authData.user) {
          setError("Devi effettuare il login come inserzionista.");
          return;
       }
        const { data: advertiser, error: advertiserError} = await supabase
          .from("advertiser_profiles")
          .select("id")
          .eq("user_id", authData.user.id)
          .single();
        if (advertiserError || !advertiser) {
          setError("Profilo inserzionista non trovato.");
          return;
       }
        const { data: source, error: sourceError} = await supabase
          .from("travel_requests")
          .select("request_code, country_code, country_name, city_name, city_id, preferred_area, preferred_structure_type, check_in, check_out, guests_count, rooms_count, room_details, preference_filters, budget, meal_plan, notes")
          .eq("id", cloneFromId)
          .eq("advertiser_id", advertiser.id)
          .single();
        if (sourceError || !source) {
          setError("Richiesta da rilanciare non trovata.");
          return;
       }
        setCloneSourceCode(source.request_code ?? null);
        setSelectedCity(cityFromParams(source.city_id, source.city_name));
        setPreferredArea(source.preferred_area);
        setPreferredStructureType(source.preferred_structure_type as PreferredStructureType);
        setCheckIn(source.check_in);
        setCheckOut(source.check_out);
        setRooms(Array.isArray(source.room_details) && source.room_details.length ? (source.room_details as RoomDetail[]) : roomsFromParams(String(source.rooms_count), String(source.guests_count), "0"));
        setFilters({ ...emptyFilters, ...(source.preference_filters as PreferenceFilters | null)});
        setBudget(source.budget ? String(source.budget) : "");
        setMealPlan(source.meal_plan as MealPlan);
        setNotes(source.notes ?? "");
     } catch (err) {
        setError(err instanceof Error ? err.message : "Errore durante il caricamento della richiesta da rilanciare.");
     } finally {
        setPrefillLoading(false);
     }
   }
    void loadClone();
 }, [cloneFromId]);
  const normalizedRooms = useMemo(() => normalizeRooms(rooms), [rooms]);
  const roomsCount = normalizedRooms.length;
  const guestsCount = normalizedRooms.reduce((total, room) => total + room.adults + room.children, 0);
  const budgetValue = Number(budget);
  const totalIndicativeBudget = Number.isFinite(budgetValue) && budgetValue > 0 ? budgetValue * roomsCount : 0;

  function updateRoom(index: number, patch: Partial<RoomDetail>) { setRooms((current) => current.map((room, roomIndex) => { if (roomIndex !== index) return room; const next = { ...room, ...patch}; const childrenAges = [...next.children_ages]; while (childrenAges.length < next.children) childrenAges.push(0); return { ...next, children_ages: childrenAges.slice(0, next.children)};}));}
  function updateChildAge(roomIndex: number, childIndex: number, age: number) { setRooms((current) => current.map((room, index) => index === roomIndex ? { ...room, children_ages: Object.assign([...room.children_ages], { [childIndex]: age})} : room));}
  function addRoom() { setRooms((current) => [...current, { room: current.length + 1, room_type: "double", adults: 1, children: 0, children_ages: []}]);}
  function removeRoom(index: number) { setRooms((current) => normalizeRooms(current.filter((_, roomIndex) => roomIndex !== index)));}

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoading(true); setError(null); setSuccess(null);
    try {
      if (!selectedCity.city_name.trim()) { setError("Inserisci una destinazione valida."); return;}
      if (!checkIn || !checkOut) { setError("Inserisci le date di check-in e check-out."); return;}
      if (new Date(checkOut) <= new Date(checkIn)) { setError("La data di check-out deve essere successiva al check-in."); return;}
      if (!Number.isFinite(budgetValue) || budgetValue <= 0) { setError("Inserisci un budget valido per camera."); return;}
      if (normalizedRooms.some((room) => room.adults < 1)) { setError("Ogni camera deve avere almeno un adulto."); return;}
      const contactError = validateNoContactsInFields([{ label: "zona preferita", value: preferredArea}, { label: "note", value: notes}]);
      if (contactError) { setError(contactError); return;}
      const supabase = createBrowserSupabaseClient();
      const { data: authData, error: authError} = await supabase.auth.getUser();
      if (authError || !authData.user) { setError("Devi effettuare il login come inserzionista."); return;}
      const { data: advertiser, error: advertiserError} = await supabase.from("advertiser_profiles").select("id").eq("user_id", authData.user.id).single();
      if (advertiserError || !advertiser) { setError("Profilo inserzionista non trovato. Registrati come inserzionista."); return;}
      const payload = { request_code: makeRequestCode(), advertiser_id: advertiser.id, country_code: selectedCity.country_code, country_name: selectedCity.country_name, city_name: selectedCity.city_name, city_id: selectedCity.city_id, preferred_area: preferredArea, preferred_structure_type: preferredStructureType, check_in: checkIn, check_out: checkOut, guests_count: guestsCount, rooms_count: roomsCount, room_details: normalizedRooms, preference_filters: filters, budget: budgetValue, meal_plan: mealPlan, notes: notes.trim() || null, visible_contact_email: null, visible_contact_phone: null, visible_contact_whatsapp: null, status: "active", expires_at: expiresAtForCheckIn(checkIn)};
      const { data: newRequest, error: insertError} = await supabase.from("travel_requests").insert(payload).select("id").single();
      if (insertError) { setError(insertError.message); return;}
      await fetch("/api/notifications/new-request", { method: "POST", headers: { "Content-Type": "application/json"}, body: JSON.stringify({ requestId: newRequest.id})});
      setSuccess("Annuncio creato correttamente. Ora le strutture compatibili possono vederlo.");
      setTimeout(() => router.push("/inserzionista/dashboard"), 900);
   } catch (err) { setError(err instanceof Error ? err.message : "Errore durante la creazione dell’annuncio.");} finally { setLoading(false);}
 }

  if (prefillLoading) {
    return <div className="rounded-3xl border p-6 text-sm text-zinc-500">Caricamento dati per il rilancio...</div>;
 }

  return (
    <form onSubmit={onSubmit} className="space-y-6 overflow-visible rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      {cloneFromId ? (
        <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4 text-sm text-sky-900">
          Stai rilanciando una richiesta{cloneSourceCode ? ` (${cloneSourceCode})` : ""}. Verrà creato un <strong>nuovo annuncio</strong> con un nuovo codice RB; la richiesta precedente resta invariata.
        </div>
      ) : null}
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">Cerca la tua destinazione: scrivi la città, scegli un suggerimento dall’elenco e completa i dettagli del soggiorno.</div>
      <CityAutocomplete value={selectedCity} onChange={setSelectedCity} label="Dove vuoi soggiornare?" helpText="Scrivi il nome della città: il sistema suggerisce le destinazioni più adatte, ma puoi anche inserire una città manualmente." />
      <div className="grid gap-5 md:grid-cols-2">
        <AppDatePicker label="Check-in" value={checkIn} onChange={setCheckIn} minDate={todayInputValue()} size="lg" />
        <AppDatePicker label="Check-out" value={checkOut} onChange={setCheckOut} minDate={checkIn ? dayAfterInputValue(checkIn) : todayInputValue()} size="lg" />
        <label className={`block ${formFieldLgLabel}`}>
          Zona preferita
          <input value={preferredArea} onChange={(event) => setPreferredArea(event.target.value)} required placeholder="Centro, mare, stazione, aeroporto..." className={formFieldLgInput} />
        </label>
        <label className={`block ${formFieldLgLabel}`}>
          Budget massimo per camera
          <input type="number" min={1} step="0.01" value={budget} onChange={(event) => setBudget(event.target.value)} required placeholder="Es. 120" className={formFieldLgInput} />
          <span className="mt-2 block text-sm text-zinc-500">Importo indicativo per ogni camera, riferito all’intero soggiorno.</span>
        </label>
      </div>
      <section className="space-y-4 rounded-3xl border border-zinc-200 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="text-lg font-semibold">Camere e ospiti</h2><p className="text-sm text-zinc-500">Totale: {roomsCount} camere, {guestsCount} ospiti.</p></div><button type="button" onClick={addRoom} className="rounded-full border px-4 py-2 text-sm font-semibold">+ Aggiungi camera</button></div>
        {rooms.map((room, roomIndex) => <div key={roomIndex} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4"><div className="flex items-center justify-between gap-3"><h3 className="font-semibold">Camera {roomIndex + 1}</h3>{rooms.length > 1 ? <button type="button" onClick={() => removeRoom(roomIndex)} className="text-sm font-semibold text-red-600">Rimuovi</button> : null}</div><div className="mt-4 grid gap-4 md:grid-cols-3"><label className="block text-sm font-medium">Tipologia camera<select value={room.room_type} onChange={(event) => updateRoom(roomIndex, { room_type: event.target.value as RoomType})} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm">{Object.entries(roomTypeLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label><label className="block text-sm font-medium">Adulti<input type="number" min={1} value={room.adults} onChange={(event) => updateRoom(roomIndex, { adults: Number(event.target.value)})} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm" /></label><label className="block text-sm font-medium">Bambini<input type="number" min={0} value={room.children} onChange={(event) => updateRoom(roomIndex, { children: Number(event.target.value)})} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm" /></label></div>{room.children > 0 ? <div className="mt-4 grid gap-4 md:grid-cols-3">{Array.from({ length: room.children}).map((_, childIndex) => <label key={childIndex} className="block text-sm font-medium">Età bambino {childIndex + 1}<input type="number" min={0} max={17} value={room.children_ages[childIndex] ?? 0} onChange={(event) => updateChildAge(roomIndex, childIndex, Number(event.target.value))} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm" /></label>)}</div> : null}</div>)}
      </section>
      <section className="rounded-3xl border border-zinc-200 p-5"><h2 className="text-lg font-semibold">Filtri extra</h2><p className="mt-1 text-sm text-zinc-500">Seleziona le preferenze importanti per il soggiorno.</p><div className="mt-4 grid gap-3 md:grid-cols-2">{filterLabels.map((filter) => <label key={filter.key} className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm font-medium"><input type="checkbox" checked={filters[filter.key]} onChange={(event) => setFilters((current) => ({ ...current, [filter.key]: event.target.checked}))} />{filter.label}</label>)}</div></section>
      <div className="grid gap-5 md:grid-cols-2"><label className="block text-sm font-medium">Trattamento richiesto<select value={mealPlan} onChange={(event) => setMealPlan(event.target.value as MealPlan)} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm">{Object.entries(mealPlanLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label><label className="block text-sm font-medium">Tipologia struttura preferita<select value={preferredStructureType} onChange={(event) => setPreferredStructureType(event.target.value as PreferredStructureType)} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm"><option value="all">Tutte</option>{Object.entries(structureTypeLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label></div>
      <label className="block text-sm font-medium">Note<textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={4} placeholder="Aggiungi eventuali preferenze, orari, esigenze particolari..." className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm" /></label>
      <section className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 text-sm"><h2 className="font-semibold">Riepilogo budget</h2><div className="mt-3 grid gap-2 md:grid-cols-3"><p><strong>Camere:</strong> {roomsCount}</p><p><strong>Budget per camera:</strong> {budgetValue > 0 ? formatCurrency(budgetValue) : "—"}</p><p><strong>Totale indicativo:</strong> {totalIndicativeBudget > 0 ? formatCurrency(totalIndicativeBudget) : "—"}</p></div><p className="mt-2 text-xs text-zinc-500">Il totale indicativo è calcolato moltiplicando il budget per camera per il numero di camere.</p></section>
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">Non inserire email, telefoni, WhatsApp, siti o profili social nei campi liberi. I contatti personali restano nascosti e potranno essere scambiati solo tramite i pulsanti autorizzati o dopo l’accettazione dell’offerta.</div>
      {error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}{success ? <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">{success}</div> : null}
      <div className="flex flex-wrap gap-3"><button disabled={loading} type="submit" className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60">{loading ? "Creazione in corso..." : "Pubblica annuncio"}</button><Link href="/inserzionista/dashboard" className="rounded-full border px-6 py-3 text-sm font-semibold">Annulla</Link></div>
    </form>
  );
}
