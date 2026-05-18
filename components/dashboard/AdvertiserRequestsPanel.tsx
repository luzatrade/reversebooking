"use client";

import Link from "next/link";
import { dashboardSurfaces } from "@/components/dashboard/dashboardSurfaces";
import { relaunchRequestHref } from "@/lib/identifiers";
import { mealPlanLabels, type MealPlan } from "@/types/app";

export type AdvertiserRequestRow = {
  id: string;
  request_code: string | null;
  city_name: string;
  preferred_area: string;
  check_in: string;
  check_out: string;
  status: string;
  created_at: string;
  meal_plan: MealPlan;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("it-IT", { day: "2-digit", month: "2-digit", year: "numeric" }).format(new Date(value));
}

function statusBadgeClass(status: string) {
  if (status === "active") return dashboardSurfaces.badgeBlue;
  if (status === "completed") return "rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-orange-800 ring-1 ring-orange-200";
  return "rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 ring-1 ring-zinc-200";
}

function statusLabel(status: string) {
  if (status === "active") return "Attivo";
  if (status === "completed") return "Completato";
  if (status === "expired") return "Scaduto";
  if (status === "deleted") return "Eliminato";
  return status;
}

export function AdvertiserRequestsPanel({ requests, loading }: { requests: AdvertiserRequestRow[]; loading: boolean }) {
  return (
    <section className={`${dashboardSurfaces.panelBlue} mt-8`}>
      <h2 className={dashboardSurfaces.sectionTitle}>I tuoi annunci</h2>
      <p className={dashboardSurfaces.sectionSubtitle}>Ogni annuncio ha un codice RB univoco. Per ripubblicare usa Rilancia: verrà creato un nuovo codice.</p>
      <div className="mt-5 space-y-3">
        {loading ? <p className="text-sm text-zinc-500">Caricamento annunci...</p> : null}
        {!loading && requests.length === 0 ? (
          <div className={dashboardSurfaces.emptyDashed}>Nessun annuncio pubblicato.</div>
        ) : null}
        {requests.map((request, index) => (
          <article
            key={request.id}
            className={`flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between ${index % 3 === 0 ? dashboardSurfaces.cardBlue : index % 2 === 0 ? dashboardSurfaces.cardWhite : dashboardSurfaces.cardCream}`}
          >
            <div>
              <p className="font-semibold text-zinc-950">{request.request_code ?? "RB------"} · {request.city_name}</p>
              <p className="mt-1 text-sm text-zinc-600">
                {request.preferred_area} · {formatDate(request.check_in)} → {formatDate(request.check_out)} · {mealPlanLabels[request.meal_plan]}
              </p>
              <p className="mt-2 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                <span className={statusBadgeClass(request.status)}>{statusLabel(request.status)}</span>
                <span>creato il {formatDate(request.created_at)}</span>
              </p>
            </div>
            <Link
              href={relaunchRequestHref(request.id)}
              className="inline-flex rounded-full border border-[#B8D4EB] bg-white px-4 py-2 text-center text-sm font-semibold text-[#0f4c81] hover:bg-[#F4F8FC]"
            >
              Rilancia richiesta
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
