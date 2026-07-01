"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DeleteButton } from "@/components/console/DeleteButton";

type OnboardingHotel = {
  id: string;
  place_id: string;
  nome: string;
  indirizzo: string | null;
  city_name: string;
  email: string | null;
  phone: string | null;
  website: string | null;
  google_maps_url: string | null;
  status: string;
  claimed_by: string | null;
};

type LinkedHotelAccount = {
  id: string;
  user_id: string;
  property_name: string;
  public_phone: string | null;
  public_email: string | null;
  account_status: string;
  subscription_active: boolean;
};

const inputClass =
  "mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none ring-[#0f4c81]/20 focus:border-[#0f4c81] focus:ring-2";

export function OnboardingHotelEditor({
  hotel,
  linkedAccount,
}: {
  hotel: OnboardingHotel;
  linkedAccount: LinkedHotelAccount | null;
}) {
  const router = useRouter();
  const [form, setForm] = useState({
    nome: hotel.nome,
    indirizzo: hotel.indirizzo ?? "",
    city_name: hotel.city_name,
    email: hotel.email ?? "",
    phone: hotel.phone ?? "",
    website: hotel.website ?? "",
    google_maps_url: hotel.google_maps_url ?? "",
    status: hotel.status,
  });
  const [saving, setSaving] = useState(false);
  const [resettingClaim, setResettingClaim] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function save(event: React.FormEvent) {
    event.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/admin/onboarding-hotel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: hotel.id,
          nome: form.nome,
          indirizzo: form.indirizzo || null,
          city_name: form.city_name,
          email: form.email || null,
          phone: form.phone || null,
          website: form.website || null,
          google_maps_url: form.google_maps_url || null,
          status: form.status,
        }),
      });
      const data = (await res.json()) as { error?: string; ok?: boolean };
      if (!res.ok) throw new Error(data.error ?? "Salvataggio non riuscito");
      setSuccess("Modifiche salvate. Se hai cambiato il telefono, la struttura può riprovare la rivendica con verifica vocale.");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Salvataggio non riuscito");
    } finally {
      setSaving(false);
    }
  }

  async function resetClaim() {
    const confirmed = window.confirm(
      "Ripristinare la rivendica? La struttura tornerà disponibile e il partner dovrà registrarsi/verificare di nuovo.",
    );
    if (!confirmed) return;

    setResettingClaim(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/admin/onboarding-hotel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: hotel.id, resetClaim: true }),
      });
      const data = (await res.json()) as { error?: string; ok?: boolean };
      if (!res.ok) throw new Error(data.error ?? "Reset non riuscito");
      setForm((current) => ({ ...current, status: "unclaimed" }));
      setSuccess("Rivendica ripristinata. Aggiorna il telefono se necessario, poi chiedi al partner di ripartire da «Rivendica profilo».");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Reset non riuscito");
    } finally {
      setResettingClaim(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm text-amber-950 sm:px-5">
        <p className="font-semibold">Profilo catalogo (onboarding)</p>
        <p className="mt-2 leading-relaxed">
          Qui correggi telefono, email e indirizzo quando la rivendica fallisce. Il numero aggiornato viene usato per la
          chiamata di verifica Twilio e, se esiste già un account collegato, viene sincronizzato anche lì.
        </p>
      </div>

      {linkedAccount ? (
        <div className="rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm text-zinc-700 sm:px-5">
          <p className="font-semibold text-zinc-900">Account partner collegato</p>
          <p className="mt-2">
            {linkedAccount.property_name} · stato {linkedAccount.account_status}
            {linkedAccount.subscription_active ? " · abbonamento attivo" : ""}
          </p>
          <p className="mt-1 break-all text-zinc-500">User ID: {linkedAccount.user_id}</p>
          <Link href={`/console/strutture?q=${encodeURIComponent(linkedAccount.property_name)}`} className="mt-3 inline-block font-semibold text-[#0f4c81] hover:underline">
            Apri in Strutture
          </Link>
        </div>
      ) : null}

      <form onSubmit={save} className="rounded-2xl border border-zinc-200 bg-white p-4 sm:p-6">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block text-sm font-medium md:col-span-2">
            Nome struttura
            <input value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} required className={inputClass} />
          </label>
          <label className="block text-sm font-medium md:col-span-2">
            Indirizzo
            <input value={form.indirizzo} onChange={(e) => setForm({ ...form, indirizzo: e.target.value })} className={inputClass} />
          </label>
          <label className="block text-sm font-medium">
            Città
            <input value={form.city_name} onChange={(e) => setForm({ ...form, city_name: e.target.value })} required className={inputClass} />
          </label>
          <label className="block text-sm font-medium">
            Stato catalogo
            <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className={inputClass}>
              <option value="unclaimed">unclaimed</option>
              <option value="pending_verification">pending_verification</option>
              <option value="claimed">claimed</option>
            </select>
          </label>
          <label className="block text-sm font-medium">
            Telefono (verifica rivendica)
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+39 334 1234567"
              className={inputClass}
            />
          </label>
          <label className="block text-sm font-medium">
            Email pubblica
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
          </label>
          <label className="block text-sm font-medium">
            Sito web
            <input value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} className={inputClass} />
          </label>
          <label className="block text-sm font-medium">
            Google Maps URL
            <input
              value={form.google_maps_url}
              onChange={(e) => setForm({ ...form, google_maps_url: e.target.value })}
              className={inputClass}
            />
          </label>
        </div>

        <div className="mt-4 rounded-xl bg-zinc-50 px-4 py-3 text-xs text-zinc-600">
          <p>Place ID Google: {hotel.place_id}</p>
          <p className="mt-1 break-all">ID catalogo: {hotel.id}</p>
          {hotel.claimed_by ? <p className="mt-1 break-all">Claimed by: {hotel.claimed_by}</p> : null}
        </div>

        {error ? <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}
        {success ? <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">{success}</p> : null}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center justify-center rounded-xl bg-[#0f4c81] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d3f68] disabled:opacity-50"
          >
            {saving ? "Salvataggio..." : "Salva modifiche"}
          </button>
          <button
            type="button"
            disabled={resettingClaim}
            onClick={() => void resetClaim()}
            className="inline-flex items-center justify-center rounded-xl border border-amber-300 bg-amber-50 px-5 py-3 text-sm font-semibold text-amber-900 transition hover:bg-amber-100 disabled:opacity-50"
          >
            {resettingClaim ? "Reset..." : "Ripristina rivendica"}
          </button>
          <Link
            href={`/hotel/onboarding/${hotel.id}`}
            className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
          >
            Vedi profilo pubblico
          </Link>
          <DeleteButton entity="onboarding" id={hotel.id} label="Elimina dal catalogo" />
        </div>
      </form>
    </div>
  );
}
