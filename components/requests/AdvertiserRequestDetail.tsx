"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Trash2 } from "lucide-react";
import { dashboardSurfaces } from "@/components/dashboard/dashboardSurfaces";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { getMealPlanLabels, getStructureTypeLabels } from "@/lib/i18n/labels";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type { MealPlan, PreferredStructureType } from "@/types/app";

type TravelRequestDetail = {
  id: string;
  request_code: string | null;
  city_name: string;
  preferred_area: string;
  preferred_structure_type: PreferredStructureType;
  check_in: string;
  check_out: string;
  guests_count: number;
  rooms_count: number;
  budget: number;
  meal_plan: MealPlan;
  notes: string | null;
  status: string;
  created_at: string;
};

function formatDate(value: string, locale: string) {
  return new Intl.DateTimeFormat(locale, { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(value));
}

function formatCurrency(value: number, locale: string) {
  return new Intl.NumberFormat(locale, { style: "currency", currency: "EUR" }).format(value);
}

export function AdvertiserRequestDetail() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const { t, locale } = useLanguage();
  const mealPlanLabels = getMealPlanLabels(locale);
  const structureTypeLabels = getStructureTypeLabels(locale);
  const [request, setRequest] = useState<TravelRequestDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    async function loadRequest() {
      setLoading(true);
      setError(null);
      try {
        const supabase = createBrowserSupabaseClient();
        const { data: authData, error: authError } = await supabase.auth.getUser();
        if (authError || !authData.user) {
          setError(t.dashboard.advertiser.listingLoginRequired);
          return;
        }
        const { data: advertiser, error: advertiserError } = await supabase
          .from("advertiser_profiles")
          .select("id")
          .eq("user_id", authData.user.id)
          .maybeSingle();
        if (advertiserError || !advertiser?.id) {
          setError(t.dashboard.advertiser.listingProfileMissing);
          return;
        }
        const { data, error: requestError } = await supabase
          .from("travel_requests")
          .select(
            "id, request_code, city_name, preferred_area, preferred_structure_type, check_in, check_out, guests_count, rooms_count, budget, meal_plan, notes, status, created_at",
          )
          .eq("id", params.id)
          .eq("advertiser_id", advertiser.id)
          .maybeSingle();
        if (requestError || !data) {
          setError(t.dashboard.advertiser.listingNotFound);
          return;
        }
        setRequest(data as TravelRequestDetail);
      } catch (err) {
        setError(err instanceof Error ? err.message : t.dashboard.advertiser.listingLoadError);
      } finally {
        setLoading(false);
      }
    }
    void loadRequest();
  }, [params.id, t]);

  async function deleteListing() {
    if (!request || request.status === "deleted") return;
    if (!window.confirm(t.dashboard.advertiser.deleteListingConfirm)) return;
    setDeleting(true);
    setError(null);
    setSuccess(null);
    try {
      const supabase = createBrowserSupabaseClient();
      const { error: updateError } = await supabase.from("travel_requests").update({ status: "deleted" }).eq("id", request.id);
      if (updateError) {
        setError(updateError.message);
        return;
      }
      setSuccess(t.dashboard.advertiser.deleteListingSuccess);
      window.setTimeout(() => router.push("/inserzionista/dashboard#annunci-attivi"), 700);
    } catch (err) {
      setError(err instanceof Error ? err.message : t.dashboard.advertiser.deleteListingError);
    } finally {
      setDeleting(false);
    }
  }

  if (loading) {
    return <div className="rounded-3xl border p-6 text-sm text-zinc-500">{t.common.loading}</div>;
  }

  if (!request) {
    return (
      <div className="space-y-4">
        {error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}
        <Link href="/inserzionista/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600">
          <ArrowLeft className="h-4 w-4" /> {t.dashboard.advertiser.backToDashboard}
        </Link>
      </div>
    );
  }

  const isDeleted = request.status === "deleted";

  return (
    <div className="space-y-6">
      <Link href="/inserzionista/dashboard#annunci-attivi" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950">
        <ArrowLeft className="h-4 w-4" /> {t.dashboard.advertiser.backToDashboard}
      </Link>

      <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">{t.dashboard.advertiser.listingDetailEyebrow}</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#0c3d66]">
          {request.request_code ?? "RB------"} · {request.city_name}
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          {t.common.status}: <span className="font-semibold text-zinc-800">{request.status}</span>
        </p>
      </section>

      <section className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 text-sm dark:border-zinc-800 dark:bg-zinc-950/60">
        <div className="grid gap-4 md:grid-cols-2">
          <p>
            <strong>{t.common.zone}:</strong> {request.preferred_area}
          </p>
          <p>
            <strong>{t.forms.travelRequest.preferredStructureType}:</strong>{" "}
            {request.preferred_structure_type === "all"
              ? t.values.preferredStructureAll
              : structureTypeLabels[request.preferred_structure_type]}
          </p>
          <p>
            <strong>{t.common.checkIn}:</strong> {formatDate(request.check_in, locale)}
          </p>
          <p>
            <strong>{t.common.checkOut}:</strong> {formatDate(request.check_out, locale)}
          </p>
          <p>
            <strong>{t.dashboard.advertiser.listingGuests}:</strong> {request.guests_count}
          </p>
          <p>
            <strong>{t.common.rooms}:</strong> {request.rooms_count}
          </p>
          <p>
            <strong>{t.common.budgetPerRoom}:</strong> {formatCurrency(Number(request.budget), locale)}
          </p>
          <p>
            <strong>{t.forms.travelRequest.requestedMealPlan}:</strong> {mealPlanLabels[request.meal_plan]}
          </p>
        </div>
        {request.notes ? (
          <p className="mt-4">
            <strong>{t.common.notes}:</strong> {request.notes}
          </p>
        ) : null}
        <p className="mt-4 text-xs text-zinc-500">
          {t.dashboard.advertiser.listingCreatedAt}: {formatDate(request.created_at, locale)}
        </p>
      </section>

      <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        {t.dashboard.advertiser.listingNoEditHint}
      </p>

      {error ? <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div> : null}
      {success ? <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">{success}</div> : null}

      <div className="flex flex-wrap gap-3">
        {!isDeleted ? (
          <button
            type="button"
            onClick={() => void deleteListing()}
            disabled={deleting}
            className="inline-flex items-center gap-2 rounded-full border border-red-300 bg-red-50 px-5 py-3 text-sm font-semibold text-red-700 hover:bg-red-100 disabled:opacity-60"
          >
            <Trash2 className="h-4 w-4" />
            {deleting ? t.dashboard.advertiser.deletingListing : t.dashboard.advertiser.deleteListing}
          </button>
        ) : null}
        <Link href="/inserzionista/crea-annuncio" className={dashboardSurfaces.btnPrimary}>
          {t.dashboard.advertiser.createListing}
        </Link>
      </div>
    </div>
  );
}
