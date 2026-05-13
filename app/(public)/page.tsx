import Link from "next/link";
import { company } from "@/lib/legal/company";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="flex justify-end">
        <Link
          href="/login"
          className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-900"
        >
          Login
        </Link>
      </div>

      <div className="mx-auto mt-12 max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
          Richieste di soggiorno e offerte in un unico portale
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
          {company.companyName}
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Pubblica la tua richiesta di soggiorno come inserzionista, oppure rispondi con un’offerta come struttura
          ricettiva. Un flusso chiaro per mettere in contatto domanda e offerta.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/registrazione"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Registrati
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Accedi
          </Link>
          <Link
            href="/termini-e-condizioni"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Termini di utilizzo
          </Link>
        </div>
      </div>
    </div>
  );
}
