"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CountryCitySelect } from "@/components/location/CountryCitySelect";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { majorWorldCities, type WorldCity } from "@/lib/constants/world-cities";
import { mealPlanLabels, structureTypeLabels, type MealPlan, type PreferredStructureType } from "@/types/app";

type RoomDetail = { room: number; adults: number; children: number; children_ages: number[] };
type PreferenceFilters = {
  connecting_rooms: boolean;
  disabled_access: boolean;
  pool: boolean;
  spa: boolean;
  bathtub: boolean;
  garage: boolean;
  beach: boolean;
  pets_allowed: boolean;
};

const emptyFilters: PreferenceFilters = {
  connecting_rooms: false,
  disabled_access: false,
  pool: false,
  spa: false,
  bathtub: false,
  garage: false,
  beach: false,
  pets_allowed: false,
};

const filterLabels: Array<{ key: keyof PreferenceFilters; label: string }> = [
  { key: "connecting_rooms", label: "Camere comunicanti" },
  { key: "disabled_access", label: "Camera accessibile disabili" },
  { key: "pool", label: "Piscina" },
  { key: "spa", label: "Spa" },
  { key: "bathtub", label: "Vasca" },
  { key: "garage", label: "Garage" },
  { key: "beach", label: "Spiaggia / vicino alla spiaggia" },
  { key: "pets_allowed", label: "Animali ammessi" },
];

function expiresAtForCheckIn(checkIn: string) {
  return `${checkIn}T23:59:00+02:00`;
}

function normalizeRooms(rooms: RoomDetail[]) {
  return rooms.map((room, index) => ({
    ...room,
    room: index + 1,
    adults: Math.max(1, room.adults),
    children: Math.max(0, room.children),
    children_ages: room.children_ages.slice(0, room.children).map((age) => Math.max(0, age)),
  }));
}

export function CreateTravelRequestForm() {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState<WorldCity>(majorWorldCities[0]);
  const [preferredArea, setPreferredArea] = useState("");
  const [preferredStructureType, setPreferredStructureType] = useState<PreferredStructureType>("all");
  const [checkIn, setCheckIn] = useState("2026-06-20");
  const [checkOut, setCheckOut] = useState("2026-06-23");
  const [rooms, setRooms] = useState<RoomDetail[]>([{ room: 1, adults: 2, children: 0, children_ages: [] }]);
  const [filters, setFilters] = useState<PreferenceFilters>(emptyFilters);
  const [budget, setBudget] = useState(450);
  const [mealPlan, setMealPlan] = useState<MealPlan>("breakfast");
  const [notes, setNotes] = useState("Preferenza per struttura comoda e con garage.");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const normalizedRooms = useMemo(() => normalizeRooms(rooms), [rooms]);
  const roomsCount = normalizedRooms.length;
  const guestsCount = normalizedRooms.reduce((total, room) => total + room.adults + room.children, 0);

  function updateRoom(index: number, patch: Partial<RoomDetail>) {
    setRooms((current) =>
      current.map((room, roomIndex) => {
        if (roomIndex !== index) return room;
        const next = { ...room, ...patch };
        const childrenAges = [...next.children_ages];
        while (childrenAges.length < next.children) childrenAges.push(0);
        return { ...next, children_ages: childrenAges.slice(0, next.children) };
      }),
    );
  }

  function updateChildAge(roomIndex: number, childIndex: number, age: number) {
    setRooms((current) => current.map((room, index) => index === roomIndex ? { ...room, children_ages: Object.assign([...room.children_ages], { [childIndex]: age }) } : room));
  }

  function addRoom() {
    setRooms((current) => [...current, { room: current.length + 1, adults: 1, children: 0, children_ages: [] }]);
  }

  function removeRoom(index: number) {
    setRooms((current) => normalizeRooms(current.filter((_, roomIndex) => roomIndex !== index)));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      if (!checkIn || !checkOut || new Date(checkOut) <= new Date(checkIn)) {
        setError("La data di check-out deve essere successiva al check-in.");
        return;
      }
      if (normalizedRooms.some((room) => room.adults < 1)) {
        setError("Ogni camera deve avere almeno un adulto.");
        return;
      }

      const supabase = createBrowserSupabaseClient();
      const { data: authData, error: authError } = await supabase.auth.getUser();
      if (authError || !authData.user) {
        setError("Devi effettuare il login come inserzionista.");
        return;
      }

      const { data: advertiser, error: advertiserError } = await supabase.from("advertiser_profiles").select("id").eq("user_id", authData.user.id).single();
      if (advertiserError || !advertiser) {
        setError("Profilo inserzionista non trovato. Registrati come inserzionista.");
        return;
      }

      const payload = {
        advertiser_id: advertiser.id,
        country_code: selectedCity.country_code,
        country_name: selectedCity.country_name,
        city_name: selectedCity.city_name,
        city_id: selectedCity.city_id,
        preferred_area: preferredArea,
        preferred_structure_type: preferredStructureType,
        check_in: checkIn,
        check_out: checkOut,
        guests_count: guestsCount,
        rooms_count: roomsCount,
        room_details: normalizedRooms,
        preference_filters: filters,
        budget,
        meal_plan: mealPlan,
        notes: notes.trim() || null,
        visible_contact_email: null,
        visible_contact_phone: null,
        visible_contact_whatsapp: null,
        status: "active",
        expires_at: expiresAtForCheckIn(checkIn),
      };

      const { data: newRequest, error: insertError } = await supabase.from("travel_requests").insert(payload).select("id").single();
      if (insertError) {
        setError(insertError.message);
        return;
      }

      await fetch("/api/notifications/new-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requestId: newRequest.id }),
      });

      setSuccess("Annuncio creato correttamente. Ora le strutture compatibili possono vederlo.");
      setTimeout(() => router.push("/inserzionista/dashboard"), 900);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore durante la creazione dell’annuncio.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <CountryCitySelect value={selectedCity} onChange={setSelectedCity} countryLabel="Nazione" cityLabel="Città principale" helpText="Scegli prima la nazione e poi la città principale dove vuoi ricevere offerte." />

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium">Zona preferita<input value={preferredArea} onChange={(event) => setPreferredArea(event.target.value)} required placeholder="Centro, mare, stazione, aeroporto..." className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label>
        <label className="block text-sm font-medium">Check-in<input type="date" value={checkIn} onChange={(event) => setCheckIn(event.target.value)} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label>
        <label className="block text-sm font-medium">Check-out<input type="date" value={checkOut} onChange={(event) => setCheckOut(event.target.value)} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label>
        <label className="block text-sm font-medium">Budget totale €<input type="number" min={1} step="0.01" value={budget} onChange={(event) => setBudget(Number(event.target.value))} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label>
      </div>

      <section className="space-y-4 rounded-3xl border border-zinc-200 p-5 dark:border-zinc-800">
        <div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="text-lg font-semibold">Camere e ospiti</h2><p className="text-sm text-zinc-500">Totale: {roomsCount} camere, {guestsCount} ospiti.</p></div><button type="button" onClick={addRoom} className="rounded-full border px-4 py-2 text-sm font-semibold">+ Aggiungi camera</button></div>
        {rooms.map((room, roomIndex) => (
          <div key={roomIndex} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/60">
            <div className="flex items-center justify-between gap-3"><h3 className="font-semibold">Camera {roomIndex + 1}</h3>{rooms.length > 1 ? <button type="button" onClick={() => removeRoom(roomIndex)} className="text-sm font-semibold text-red-600">Rimuovi</button> : null}</div>
            <div className="mt-4 grid gap-4 md:grid-cols-2"><label className="block text-sm font-medium">Adulti<input type="number" min={1} value={room.adults} onChange={(event) => updateRoom(roomIndex, { adults: Number(event.target.value) })} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label><label className="block text-sm font-medium">Bambini<input type="number" min={0} value={room.children} onChange={(event) => updateRoom(roomIndex, { children: Number(event.target.value) })} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label></div>
            {room.children > 0 ? <div className="mt-4 grid gap-4 md:grid-cols-3">{Array.from({ length: room.children }).map((_, childIndex) => <label key={childIndex} className="block text-sm font-medium">Età bambino {childIndex + 1}<input type="number" min={0} max={17} value={room.children_ages[childIndex] ?? 0} onChange={(event) => updateChildAge(roomIndex, childIndex, Number(event.target.value))} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label>)}</div> : null}
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-zinc-200 p-5 dark:border-zinc-800"><h2 className="text-lg font-semibold">Filtri extra</h2><p className="mt-1 text-sm text-zinc-500">Seleziona le preferenze importanti per il soggiorno.</p><div className="mt-4 grid gap-3 md:grid-cols-2">{filterLabels.map((filter) => <label key={filter.key} className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm font-medium dark:border-zinc-800 dark:bg-zinc-950/60"><input type="checkbox" checked={filters[filter.key]} onChange={(event) => setFilters((current) => ({ ...current, [filter.key]: event.target.checked }))} />{filter.label}</label>)}</div></section>

      <div className="grid gap-5 md:grid-cols-2"><label className="block text-sm font-medium">Trattamento richiesto<select value={mealPlan} onChange={(event) => setMealPlan(event.target.value as MealPlan)} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950">{Object.entries(mealPlanLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label><label className="block text-sm font-medium">Tipologia struttura preferita<select value={preferredStructureType} onChange={(event) => setPreferredStructureType(event.target.value as PreferredStructureType)} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950"><option value="all">Tutte</option>{Object.entries(structureTypeLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label></div>

      <label className="block text-sm font-medium">Note<textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={4} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" /></label>
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200">I contatti personali restano nascosti. Potranno essere scambiati solo dopo che accetti un’offerta.</div>
      {error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}
      {success ? <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">{success}</div> : null}
      <div className="flex flex-wrap gap-3"><button disabled={loading} type="submit" className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60 dark:bg-white dark:text-zinc-950">{loading ? "Creazione in corso..." : "Pubblica annuncio"}</button><Link href="/inserzionista/dashboard" className="rounded-full border px-6 py-3 text-sm font-semibold">Annulla</Link></div>
    </form>
  );
}
