"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Building2, UserRound } from "lucide-react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

type AccountKind = "inserzionista" | "struttura";

export default function ChooseAccountPage() {
  const router = useRouter();
  const [loadingKind, setLoadingKind] = useState<AccountKind | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function choose(kind: AccountKind) {
    setLoadingKind(kind);
    setError(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { data: authData } = await supabase.auth.getUser();
      const user = authData.user;
      if (!user?.id || !user.email) { setError("Sessione non trovata. Accedi di nuovo."); return; }
      const role = kind === "struttura" ? "hotel" : "advertiser";
      const { error: profileError } = await supabase.from("profiles").upsert({ user_id: user.id, role, email: user.email, email_verified: true, phone_verified: false, account_status: "active" }, { onConflict: "user_id" });
      if (profileError) { setError(profileError.message); return; }
      if (role === "hotel") {
        const { error: hotelError } = await supabase.from("hotel_accounts").upsert({ user_id: user.id, structure_type: "hotel", property_name: "Struttura da completare", cin_code: null, description: null, full_address: "Indirizzo da completare", country_code: "IT", country_name: "Italia", city_name: "Verona", city_id: "3164527", specific_area: "Centro", rooms_quantity: 1, private_notification_email: user.email, subscription_status: "active", subscription_active: true, account_status: "active" }, { onConflict: "user_id" });
        if (hotelError) { setError(hotelError.message); return; }
        router.push("/struttura/dashboard");
        return;
      }
      const { error: advertiserError } = await supabase.from("advertiser_profiles").upsert({ user_id: user.id, advertiser_type: "private_individual", first_name: user.user_metadata?.full_name?.split(" ")?.[0] ?? "Nome", last_name: user.user_metadata?.full_name?.split(" ").slice(1).join(" ") || "Cognome", short_description: null, contact_email: user.email }, { onConflict: "user_id" });
      if (advertiserError) { setError(advertiserError.message); return; }
      router.push("/inserzionista/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore durante la scelta account.");
    } finally {
      setLoadingKind(null);
    }
  }

  return (
    <main className="mx-auto flex min-h-[75vh] max-w-3xl flex-col justify-center px-4 py-16">
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">Primo accesso social</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Scegli il tipo di account</h1>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">Google, Apple e Microsoft confermano la tua identità, ma Reverse Booking deve sapere se sei inserzionista o struttura ricettiva.</p>
        {error ? <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <button type="button" onClick={() => choose("inserzionista")} disabled={Boolean(loadingKind)} className="rounded-3xl border border-zinc-200 p-6 text-left transition hover:border-emerald-400 hover:bg-emerald-50 disabled:opacity-60 dark:border-zinc-800 dark:hover:bg-emerald-950/30">
            <UserRound className="h-7 w-7 text-emerald-700" />
            <h2 className="mt-4 text-xl font-semibold">Sono inserzionista</h2>
            <p className="mt-2 text-sm text-zinc-500">Creo richieste di soggiorno e ricevo offerte dalle strutture.</p>
            <span className="mt-5 inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">{loadingKind === "inserzionista" ? "Creazione..." : "Continua come inserzionista"}</span>
          </button>
          <button type="button" onClick={() => choose("struttura")} disabled={Boolean(loadingKind)} className="rounded-3xl border border-zinc-200 p-6 text-left transition hover:border-emerald-400 hover:bg-emerald-50 disabled:opacity-60 dark:border-zinc-800 dark:hover:bg-emerald-950/30">
            <Building2 className="h-7 w-7 text-emerald-700" />
            <h2 className="mt-4 text-xl font-semibold">Sono una struttura ricettiva</h2>
            <p className="mt-2 text-sm text-zinc-500">Vedo richieste nella mia zona e invio offerte ai clienti.</p>
            <span className="mt-5 inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">{loadingKind === "struttura" ? "Creazione..." : "Continua come struttura"}</span>
          </button>
        </div>
      </div>
    </main>
  );
}
