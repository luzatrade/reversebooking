"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { mealPlanLabels, structureTypeLabels, type MealPlan, type PreferredStructureType } from "@/types/app";

const cityPresets = [
  { label: "Verona, Italia", country_code: "IT", country_name: "Italia", city_name: "Verona", city_id: "3164527" },
  { label: "Venezia, Italia", country_code: "IT", country_name: "Italia", city_name: "Venezia", city_id: "3164603" },
  { label: "Roma, Italia", country_code: "IT", country_name: "Italia", city_name: "Roma", city_id: "3169070" },
  { label: "Milano, Italia", country_code: "IT", country_name: "Italia", city_name: "Milano", city_id: "3173435" },
];

function expiresAtForCheckIn(checkIn: string) {
  return `${checkIn}T23:59:00+02:00`;
}

export function CreateTravelRequestForm() {
  const router = useRouter();
  const [cityIndex, setCityIndex] = useState(0);
  const [preferredArea, setPreferredArea] = useState("vicino alla stazione");
  const [preferredStructureType, setPreferredStructureType] = useState<PreferredStructureType>("all");
  const [checkIn, setCheckIn] = useState("2026-06-20");
  const [checkOut, setCheckOut] = useState("2026-06-23");
  const [guestsCount, setGuestsCount] = useState(2);
  const [roomsCount, setRoomsCount] = useState(1);
  const [budget, setBudget] = useState(450);
  const [mealPlan, setMealPlan] = useState<MealPlan>("breakfast");
  const [notes, setNotes] = useState("Preferenza per struttura comoda e con garage.");
  const [visibleEmail, setVisibleEmail] = useState("");
  const [visiblePhone, setVisiblePhone] = useState("");
  const [visibleWhatsapp, setVisibleWhatsapp] = useState("");
  const [visibleWebsite, setVisibleWebsite] = useState("");
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

      const city = cityPresets[cityIndex];
      const { error: insertError } = await supabase.from("travel_requests").insert({
        advertiser_id: advertiser.id,
        country_code: city.country_code,
        country_name: city.country_name,
        city_name: city.city_name,
        city_id: city.city_id,
        preferred_area: preferredArea,
        preferred_structure_type: preferredStructureType,
        check_in: checkIn,
        check_out: checkOut,
        guests_count: guestsCount,
        rooms_count: roomsCount,
        budget,
        meal_plan: mealPlan,
        notes: notes.trim() || null,
        visible_contact_email: visibleEmail.trim() || null,
        visible_contact_phone: visiblePhone.trim() || null,
        visible_contact_whatsapp: visibleWhatsapp.trim() || null,
        visible_contact_website: visibleWebsite.trim() || null,
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
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium">
          Città
          <select value={cityIndex} onChange={(event) => setCityIndex(Number(event.target.value))} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950">
            {cityPresets.map((city, index) => (
              <option key={city.city_id} value={index}>{city.label}</option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium">
          Zona preferita
          <input value={preferredArea} onChange={(event) => setPreferredArea(event.target.value)} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
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
          Ospiti
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

      <div className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
        <h2 className="font-semibold">Contatti visibili nell’annuncio</h2>
        <p className="mt-1 text-sm text-zinc-500">Facoltativi. Email e telefono di registrazione restano privati.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <input placeholder="Email visibile" value={visibleEmail} onChange={(event) => setVisibleEmail(event.target.value)} className="rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
          <input placeholder="Telefono visibile" value={visiblePhone} onChange={(event) => setVisiblePhone(event.target.value)} className="rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
          <input placeholder="WhatsApp visibile" value={visibleWhatsapp} onChange={(event) => setVisibleWhatsapp(event.target.value)} className="rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
          <input placeholder="Sito web visibile" value={visibleWebsite} onChange={(event) => setVisibleWebsite(event.target.value)} className="rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
        </div>
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
