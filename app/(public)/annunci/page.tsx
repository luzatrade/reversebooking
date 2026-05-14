import Link from "next/link";
import { mealPlanLabels, preferredStructureLabels, publicRequests } from "@/lib/demo/public-requests";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function PublicRequestsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-sm font-medium uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
          Vetrina pubblica richieste soggiorno
        </p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
              Annunci visibili a tutti. Contatti riservati alle strutture registrate.
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Gli hotel possono consultare liberamente le richieste attive e valutare il potenziale della piattaforma.
              Email, telefono e canali diretti dell’inserzionista restano nascosti fino all’accesso come struttura verificata.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/registrazione"
              className="rounded-full bg-zinc-950 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Registra la tua struttura
            </Link>
            <Link
              href="/login"
              className="rounded-full border border-zinc-300 px-5 py-3 text-center text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              Accedi come hotel
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-5">
        {publicRequests.map((request) => (
          <article
            key={request.id}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    {request.advertiserType}
                  </span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    {preferredStructureLabels[request.preferredStructureType]}
                  </span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    {mealPlanLabels[request.mealPlan]}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-zinc-950 dark:text-white">
                  {request.cityName}, {request.countryName}
                </h2>
                <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Zona preferita: <span className="text-zinc-950 dark:text-white">{request.preferredArea}</span>
                </p>
              </div>

              <div className="rounded-2xl bg-zinc-50 px-5 py-4 text-left dark:bg-zinc-950 lg:min-w-56">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Budget indicativo</p>
                <p className="mt-1 text-2xl font-semibold text-zinc-950 dark:text-white">{formatCurrency(request.budget)}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-zinc-100 p-4 dark:border-zinc-800">
                <p className="text-xs text-zinc-500">Check-in</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{formatDate(request.checkIn)}</p>
              </div>
              <div className="rounded-2xl border border-zinc-100 p-4 dark:border-zinc-800">
                <p className="text-xs text-zinc-500">Check-out</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{formatDate(request.checkOut)}</p>
              </div>
              <div className="rounded-2xl border border-zinc-100 p-4 dark:border-zinc-800">
                <p className="text-xs text-zinc-500">Ospiti</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{request.guestsCount}</p>
              </div>
              <div className="rounded-2xl border border-zinc-100 p-4 dark:border-zinc-800">
                <p className="text-xs text-zinc-500">Camere</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{request.roomsCount}</p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{request.notes}</p>

            <div className="mt-6 flex flex-col gap-3 border-t border-zinc-100 pt-5 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-zinc-500">
                Contatti inserzionista nascosti nella vetrina pubblica.
              </p>
              <Link
                href="/registrazione"
                className="rounded-full border border-zinc-300 px-5 py-2.5 text-center text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                Registrati per contattare
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
