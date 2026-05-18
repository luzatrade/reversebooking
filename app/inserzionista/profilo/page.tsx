import Link from "next/link";
import { ArrowLeft} from "lucide-react";

export default function AdvertiserProfilePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Link href="/inserzionista/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950">
        <ArrowLeft className="h-4 w-4" /> Torna alla dashboard
      </Link>

      <section className="mt-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">Profilo inserzionista</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">Modifica profilo</h1>
        <p className="mt-3 text-sm text-zinc-600">
          La modifica completa del profilo inserzionista sarà collegata qui. Per ora puoi tornare alla dashboard o creare una nuova richiesta.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/inserzionista/crea-annuncio" className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white">
            Crea annuncio
          </Link>
          <Link href="/vetrina" className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold">
            Vai alla vetrina
          </Link>
        </div>
      </section>
    </main>
  );
}
