"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { structureTypeLabels, type StructureType } from "@/types/app";

type HotelForm = {
  id: string;
  property_name: string;
  structure_type: StructureType;
  cin_code: string;
  description: string;
  full_address: string;
  city_name: string;
  city_id: string;
  specific_area: string;
  rooms_quantity: number;
  main_photo_url: string;
  google_maps_url: string;
  public_email: string;
  public_phone: string;
};

const emptyForm: HotelForm = {
  id: "",
  property_name: "",
  structure_type: "hotel",
  cin_code: "",
  description: "",
  full_address: "",
  city_name: "Verona",
  city_id: "3164527",
  specific_area: "",
  rooms_quantity: 1,
  main_photo_url: "",
  google_maps_url: "",
  public_email: "",
  public_phone: "",
};

export function EditHotelProfileForm() {
  const [form, setForm] = useState<HotelForm>(emptyForm);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    async function loadProfile() {
      setLoading(true);
      setError(null);

      try {
        const supabase = createBrowserSupabaseClient();
        const { data: authData, error: authError } = await supabase.auth.getUser();

        if (authError || !authData.user) {
          setError("Devi effettuare il login come struttura ricettiva.");
          return;
        }

        const { data, error: hotelError } = await supabase
          .from("hotel_accounts")
          .select("id, property_name, structure_type, cin_code, description, full_address, city_name, city_id, specific_area, rooms_quantity, main_photo_url, google_maps_url, public_email, public_phone")
          .eq("user_id", authData.user.id)
          .single();

        if (hotelError || !data) {
          setError("Profilo struttura non trovato.");
          return;
        }

        setForm({
          id: data.id,
          property_name: data.property_name ?? "",
          structure_type: data.structure_type ?? "hotel",
          cin_code: data.cin_code ?? "",
          description: data.description ?? "",
          full_address: data.full_address ?? "",
          city_name: data.city_name ?? "Verona",
          city_id: data.city_id ?? "3164527",
          specific_area: data.specific_area ?? "",
          rooms_quantity: data.rooms_quantity ?? 1,
          main_photo_url: data.main_photo_url ?? "",
          google_maps_url: data.google_maps_url ?? "",
          public_email: data.public_email ?? "",
          public_phone: data.public_phone ?? "",
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Errore durante il caricamento del profilo.");
      } finally {
        setLoading(false);
      }
    }

    void loadProfile();
  }, []);

  function update<K extends keyof HotelForm>(key: K, value: HotelForm[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      const supabase = createBrowserSupabaseClient();
      const { error: updateError } = await supabase
        .from("hotel_accounts")
        .update({
          property_name: form.property_name,
          structure_type: form.structure_type,
          cin_code: form.cin_code,
          description: form.description || null,
          full_address: form.full_address,
          city_name: form.city_name,
          city_id: form.city_id,
          specific_area: form.specific_area || null,
          rooms_quantity: form.rooms_quantity,
          main_photo_url: form.main_photo_url || null,
          google_maps_url: form.google_maps_url || null,
          public_email: form.public_email || null,
          public_phone: form.public_phone || null,
          account_status: "active",
        })
        .eq("id", form.id);

      if (updateError) {
        setError(updateError.message);
        return;
      }

      setSuccess("Profilo struttura aggiornato correttamente.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore durante il salvataggio.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <div className="rounded-3xl border p-6 text-sm text-zinc-500">Caricamento profilo struttura...</div>;
  }

  return (
    <div className="space-y-6">
      <Link href="/struttura/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">
        <ArrowLeft className="h-4 w-4" /> Torna alla dashboard
      </Link>

      {error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}
      {success ? <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">{success}</div> : null}

      <form onSubmit={onSubmit} className="space-y-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">Profilo struttura</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Modifica dati hotel</h1>
          <p className="mt-2 text-sm text-zinc-500">Questi dati saranno visibili agli inserzionisti.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block text-sm font-medium">Nome hotel / struttura
            <input value={form.property_name} onChange={(e) => update("property_name", e.target.value)} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
          </label>

          <label className="block text-sm font-medium">Tipologia
            <select value={form.structure_type} onChange={(e) => update("structure_type", e.target.value as StructureType)} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950">
              {Object.entries(structureTypeLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
          </label>

          <label className="block text-sm font-medium">CIN
            <input value={form.cin_code} onChange={(e) => update("cin_code", e.target.value)} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
          </label>

          <label className="block text-sm font-medium">Camere / unità
            <input type="number" min={1} value={form.rooms_quantity} onChange={(e) => update("rooms_quantity", Number(e.target.value))} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
          </label>

          <label className="block text-sm font-medium md:col-span-2">Descrizione
            <textarea value={form.description} onChange={(e) => update("description", e.target.value)} rows={5} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
          </label>

          <label className="block text-sm font-medium md:col-span-2">Foto principale URL
            <input value={form.main_photo_url} onChange={(e) => update("main_photo_url", e.target.value)} placeholder="https://..." className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
          </label>

          <label className="block text-sm font-medium md:col-span-2">Indirizzo completo
            <input value={form.full_address} onChange={(e) => update("full_address", e.target.value)} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
          </label>

          <label className="block text-sm font-medium">Città
            <input value={form.city_name} onChange={(e) => update("city_name", e.target.value)} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
          </label>

          <label className="block text-sm font-medium">City ID
            <input value={form.city_id} onChange={(e) => update("city_id", e.target.value)} required className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
          </label>

          <label className="block text-sm font-medium">Zona
            <input value={form.specific_area} onChange={(e) => update("specific_area", e.target.value)} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
          </label>

          <label className="block text-sm font-medium">Google Maps URL
            <input value={form.google_maps_url} onChange={(e) => update("google_maps_url", e.target.value)} placeholder="https://maps.google.com/..." className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
          </label>

          <label className="block text-sm font-medium">Email pubblica
            <input value={form.public_email} onChange={(e) => update("public_email", e.target.value)} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
          </label>

          <label className="block text-sm font-medium">Telefono pubblico
            <input value={form.public_phone} onChange={(e) => update("public_phone", e.target.value)} className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm dark:border-zinc-700 dark:bg-zinc-950" />
          </label>
        </div>

        <button disabled={saving} type="submit" className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white disabled:opacity-60 dark:bg-white dark:text-zinc-950">
          {saving ? "Salvataggio..." : "Salva profilo struttura"}
        </button>
      </form>
    </div>
  );
}
