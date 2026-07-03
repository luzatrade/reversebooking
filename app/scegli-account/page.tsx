"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Briefcase, Building2, UserRound } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

type AccountKind = "inserzionista" | "struttura" | "agenzia";

export default function ChooseAccountPage() {
  const { t } = useLanguage();
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
      if (!user?.id || !user.email) {
        setError(t.auth.sessionNotFound);
        return;
      }
      if (!user.email_confirmed_at) {
        setError(t.auth.msgEmailNotConfirmed);
        return;
      }
      const role = kind === "struttura" ? "hotel" : kind === "agenzia" ? "agency" : "advertiser";
      const { error: profileError } = await supabase.from("profiles").upsert(
        {
          user_id: user.id,
          role,
          email: user.email,
          phone_number: "",
          email_verified: true,
          phone_verified: false,
          account_status: "active",
        },
        { onConflict: "user_id" },
      );
      if (profileError) {
        setError(profileError.message);
        return;
      }
      if (role === "hotel") {
        const { error: hotelError } = await supabase.from("hotel_accounts").upsert(
          {
            user_id: user.id,
            structure_type: "hotel",
            property_name: "Struttura da completare",
            cin_code: null,
            description: null,
            full_address: "Indirizzo da completare",
            country_code: "IT",
            country_name: "Italia",
            city_name: "Verona",
            city_id: "3164527",
            specific_area: "Centro",
            rooms_quantity: 1,
            private_notification_email: user.email,
            subscription_status: "active",
            subscription_active: true,
            account_status: "active",
          },
          { onConflict: "user_id" },
        );
        if (hotelError) {
          setError(hotelError.message);
          return;
        }
        router.push("/struttura/dashboard");
        return;
      }
      if (role === "agency") {
        const { error: agencyHotelError } = await supabase.from("hotel_accounts").upsert(
          {
            user_id: user.id,
            provider_kind: "agency",
            structure_type: "hotel",
            property_name: "Nuova agenzia",
            cin_code: null,
            cun_code: null,
            description: null,
            full_address: "Indirizzo da completare",
            country_code: "IT",
            country_name: "Italia",
            city_name: "Da completare",
            city_id: "",
            specific_area: null,
            rooms_quantity: 1,
            private_notification_email: user.email,
            subscription_status: "active",
            subscription_active: true,
            account_status: "active",
          },
          { onConflict: "user_id" },
        );
        if (agencyHotelError) {
          setError(agencyHotelError.message);
          return;
        }
        const { error: agencyAdvError } = await supabase.from("advertiser_profiles").upsert(
          {
            user_id: user.id,
            advertiser_type: "travel_agency",
            first_name: "Agenzia",
            last_name: "Viaggi",
            agency_name: "Nuova agenzia",
            short_description: null,
            contact_email: user.email,
          },
          { onConflict: "user_id" },
        );
        if (agencyAdvError) {
          setError(agencyAdvError.message);
          return;
        }
        router.push("/agenzia/dashboard");
        return;
      }
      const { error: advertiserError } = await supabase.from("advertiser_profiles").upsert(
        {
          user_id: user.id,
          advertiser_type: "private_individual",
          first_name: user.user_metadata?.full_name?.split(" ")?.[0] ?? "Nome",
          last_name: user.user_metadata?.full_name?.split(" ").slice(1).join(" ") || "Cognome",
          short_description: null,
          contact_email: user.email,
        },
        { onConflict: "user_id" },
      );
      if (advertiserError) {
        setError(advertiserError.message);
        return;
      }
      router.push("/inserzionista/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : t.auth.chooseGenericError);
    } finally {
      setLoadingKind(null);
    }
  }

  return (
    <main className="mx-auto flex min-h-[75vh] max-w-3xl flex-col justify-center px-4 py-16">
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">{t.auth.chooseAccountLabel}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">{t.auth.chooseAccountTitle}</h1>
        <p className="mt-3 text-sm text-zinc-600">{t.auth.chooseAccountSubtitle}</p>
        {error ? <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <button
            type="button"
            onClick={() => choose("inserzionista")}
            disabled={Boolean(loadingKind)}
            className="rounded-3xl border border-zinc-200 p-6 text-left transition hover:border-emerald-400 hover:bg-emerald-50 disabled:opacity-60"
          >
            <UserRound className="h-7 w-7 text-emerald-700" />
            <h2 className="mt-4 text-xl font-semibold">{t.auth.chooseAdvertiserTitle}</h2>
            <p className="mt-2 text-sm text-zinc-500">{t.auth.chooseAdvertiserDescription}</p>
            <span className="mt-5 inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white">
              {loadingKind === "inserzionista" ? t.auth.chooseCreating : t.auth.chooseAdvertiserCta}
            </span>
          </button>
          <button
            type="button"
            onClick={() => choose("struttura")}
            disabled={Boolean(loadingKind)}
            className="rounded-3xl border border-zinc-200 p-6 text-left transition hover:border-emerald-400 hover:bg-emerald-50 disabled:opacity-60"
          >
            <Building2 className="h-7 w-7 text-emerald-700" />
            <h2 className="mt-4 text-xl font-semibold">{t.auth.chooseHotelTitle}</h2>
            <p className="mt-2 text-sm text-zinc-500">{t.auth.chooseHotelDescription}</p>
            <span className="mt-5 inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white">
              {loadingKind === "struttura" ? t.auth.chooseCreating : t.auth.chooseHotelCta}
            </span>
          </button>
          <button
            type="button"
            onClick={() => choose("agenzia")}
            disabled={Boolean(loadingKind)}
            className="rounded-3xl border border-zinc-200 p-6 text-left transition hover:border-emerald-400 hover:bg-emerald-50 disabled:opacity-60"
          >
            <Briefcase className="h-7 w-7 text-emerald-700" />
            <h2 className="mt-4 text-xl font-semibold">{t.auth.chooseAgencyTitle}</h2>
            <p className="mt-2 text-sm text-zinc-500">{t.auth.chooseAgencyDescription}</p>
            <span className="mt-5 inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white">
              {loadingKind === "agenzia" ? t.auth.chooseCreating : t.auth.chooseAgencyCta}
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}
