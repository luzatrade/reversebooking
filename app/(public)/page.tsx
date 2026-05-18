import Link from "next/link";
import { company } from "@/lib/legal/company";
import { publicRequests } from "@/lib/demo/public-requests";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="flex flex-wrap justify-end gap-3">
        <Link
          href="/annunci"
          className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-900"
        >
          Annunci pubblici
        </Link>
        <Link
          href="/login"
          className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-900"
        >
          Login
        </Link>
      </div>

      <div className="mx-auto mt-12 max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
          Vetrina pubblica per richieste di soggiorno
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
          {company.companyName}
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Gli hotel vedono gratuitamente le richieste pubbliche. I contatti dell’inserzionista e l’invio offerte sono
          riservati alle strutture registrate.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/annunci"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Vedi annunci pubblici
          </Link>
          <Link
            href="/registrazione"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Registra la tua struttura
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Accedi
          </Link>
        </div>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-3xl font-semibold text-zinc-950 dark:text-white">{publicRequests.length}</p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Richieste demo visibili nella vetrina pubblica</p>
        </div>
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-3xl font-semibold text-zinc-950 dark:text-white">0€</p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Costo per consultare gli annunci pubblici</p>
        </div>
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-3xl font-semibold text-zinc-950 dark:text-white">Riservato</p>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Contatti e offerte solo per strutture registrate</p>
        </div>
      </div>
    </div>
  );
}
