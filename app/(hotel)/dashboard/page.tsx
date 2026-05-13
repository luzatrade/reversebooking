import Link from "next/link";
import { Bell, Filter, ReceiptText } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { mealPlanLabels } from "@/types/app";

const demoRequests = [
  {
    id: "demo-1",
    city: "Verona",
    preferredArea: "vicino alla stazione",
    checkIn: "20/06/2026",
    checkOut: "23/06/2026",
    budget: "€ 450",
    guests: 2,
    rooms: 1,
    mealPlan: "breakfast" as const,
    badge: "Nuovo",
  },
  {
    id: "demo-2",
    city: "Verona",
    preferredArea: "zona fiera",
    checkIn: "21/06/2026",
    checkOut: "22/06/2026",
    budget: "€ 220",
    guests: 1,
    rooms: 1,
    mealPlan: "room_only" as const,
    badge: "In scadenza",
  },
];

export default function HotelDashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">Area strutture</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Dashboard struttura</h1>
          <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Annunci filtrati per città, abbonamento attivo e tipologia struttura compatibile.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/fatturazione" className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold">
            <ReceiptText className="h-4 w-4" /> Fatturazione
          </Link>
          <Link href="/abbonamento" className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">
            Gestisci abbonamento
          </Link>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <StatCard label="Annunci compatibili" value="0" description="Solo stessa città e non scaduti" />
        <StatCard label="Offerte inviate" value="0" description="Storico proposte struttura" />
        <StatCard label="Notifiche" value="0" description="Campanella per nuove richieste" />
      </div>

      <section className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5" />
            <div>
              <h2 className="text-xl font-semibold">Annunci disponibili</h2>
              <p className="text-sm text-zinc-500">Lista scrollabile degli annunci della tua città.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 px-4 py-3 text-sm text-zinc-500 dark:border-zinc-800">
            <Filter className="h-4 w-4" /> Filtri: date, budget, ospiti, camere, trattamento, zona
          </div>
        </div>

        <div className="mt-6 max-h-[560px] space-y-4 overflow-y-auto pr-2">
          {demoRequests.map((request) => (
            <article key={request.id} className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{request.badge}</span>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs dark:bg-zinc-800">{request.city}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">Zona preferita dal cliente: {request.preferredArea}</h3>
                  <p className="mt-2 text-sm text-zinc-500">
                    {request.checkIn} → {request.checkOut} · {request.guests} ospiti · {request.rooms} camere · {request.budget}
                  </p>
                  <p className="mt-2 text-sm font-medium">Trattamento richiesto: {mealPlanLabels[request.mealPlan]}</p>
                </div>
                <Link href={`/annunci/${request.id}`} className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">
                  Fai un’offerta
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
