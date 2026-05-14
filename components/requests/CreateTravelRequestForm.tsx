"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CountryCitySelect } from "@/components/location/CountryCitySelect";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { majorWorldCities, type WorldCity } from "@/lib/constants/world-cities";
import { mealPlanLabels, structureTypeLabels, type MealPlan, type PreferredStructureType } from "@/types/app";

function expiresAtForCheckIn(checkIn: string) {
  return `${checkIn}T23:59:00+02:00`;
}

export function CreateTravelRequestForm() {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState<WorldCity>(majorWorldCities[0]);
  const [preferredArea, setPreferredArea] = useState("");
  const [preferredStructureType, setPreferredStructureType] = useState<PreferredStructureType>("all");
  const [checkIn, setCheckIn] = useState("2026-06-20");
  const [checkOut, setCheckOut] = useState("2026-06-23");
  const [guestsCount, setGuestsCount] = useState(2);
  const [roomsCount, setRoomsCount] = useState(1);
  const [budget, setBudget] = useState(450);
  const [mealPlan, setMealPlan] = useState<MealPlan>("breakfast");
  const [notes, setNotes] = useState("Preferenza per struttura comoda e con garage.");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

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

      const supabase = createBrowserSupabaseClient();
      const { data: authData, error: authError } = await supabase.auth.getUser();

      if (authError || !authData.user) {
        setError("Devi effettuare il login come inserzionista.");
        return;
      }

      const { data: advertiser, error: advertiserError } = await supabase
        .from("advertiser_profiles")
        .select("id")
        .eq("user_id", authData.user.id)
        .single();

      if (advertiserError || !advertiser) {
        setError("Profilo inserzionista non trovato. Registrati come inserzionista.");
        return;
      }

      const { error: insertError } = await supabase.from("travel_requests").insert({
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
        budget,
        meal_plan: mealPlan,
        notes: notes.trim() || null,
        visible_contact_email: null,
        visible_contact_phone: null,
        visible_contact_whatsapp: null,
        status: "active",
        expires_at: expiresAtForCheckIn(checkIn),
      });

      if (insertError) {
        setError(insertError.message);
        return;
      }

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
      <CountryCitySelect
        value={selectedCity}
        onChange={setSelectedCity}
        countryLabel="Nazione"
        cityLabel="Città principale"
        helpText="Scegli prima la nazione e poi la città principale dove vuoi ricevere offerte."
      />

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium">
          Zona preferita
          <input value={preferredArea} onChange={(event) => setPreferredArea(event.target.value)} required placeholder="Centro, mare, stazione, aeroporto..." className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
        </label>

        <label className="block text-sm font-medium">
          Check-in
          <input type="date" value={checkIn} onChange={(event) => setCheckIn(event.target.value)} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
        </label>

        <label className="block text-sm font-medium">
          Check-out
          <input type="date" value={checkOut} onChange={(event) => setCheckOut(event.target.value)} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
        </label>

        <label className="block text-sm font-medium">
          Ospiti totali
          <input type="number" min={1} value={guestsCount} onChange={(event) => setGuestsCount(Number(event.target.value))} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
        </label>

        <label className="block text-sm font-medium">
          Camere
          <input type="number" min={1} value={roomsCount} onChange={(event) => setRoomsCount(Number(event.target.value))} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
        </label>

        <label className="block text-sm font-medium">
          Budget totale €
          <input type="number" min={1} step="0.01" value={budget} onChange={(event) => setBudget(Number(event.target.value))} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
        </label>

        <label className="block text-sm font-medium">
          Trattamento richiesto
          <select value={mealPlan} onChange={(event) => setMealPlan(event.target.value as MealPlan)} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950">
            {Object.entries(mealPlanLabels).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium md:col-span-2">
          Tipologia struttura preferita
          <select value={preferredStructureType} onChange={(event) => setPreferredStructureType(event.target.value as PreferredStructureType)} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950">
            <option value="all">Tutte</option>
            {Object.entries(structureTypeLabels).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium">
        Note
        <textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={4} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
      </label>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
        I contatti personali restano nascosti. Potranno essere scambiati solo dopo che accetti un’offerta.
      </div>

      {error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}
      {success ? <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">{success}</div> : null}

      <div className="flex flex-wrap gap-3">
        <button disabled={loading} type="submit" className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60 dark:bg-white dark:text-zinc-950">
          {loading ? "Creazione in corso..." : "Pubblica annuncio"}
        </button>
        <Link href="/inserzionista/dashboard" className="rounded-full border px-6 py-3 text-sm font-semibold">Annulla</Link>
      </div>
    </form>
  );
}
