import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CreateTravelRequestForm } from "@/components/requests/CreateTravelRequestForm";

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <Link href="/inserzionista/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">
        <ArrowLeft className="h-4 w-4" /> Torna alla dashboard
      </Link>
      <div className="mt-6">
        <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">Nuovo annuncio</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Crea richiesta di soggiorno</h1>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Pubblica una richiesta gratuita. Le strutture attive nella stessa città potranno vederla e inviarti un’offerta.
        </p>
      </div>
      <div className="mt-8">
        <CreateTravelRequestForm />
      </div>
    </main>
  );
}
