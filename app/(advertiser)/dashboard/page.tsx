import Link from "next/link";
import { Bell, Building2, FilePlus2 } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";

const demoOffers = [
  { hotel: "Hotel Demo Centro", type: "Hotel", price: "€ 420", status: "pending" },
  { hotel: "B&B Demo Stazione", type: "B&B", price: "€ 360", status: "pending" },
];

const demoStructures = [
  { name: "Hotel Demo Centro", type: "Hotel", area: "Centro storico", cin: "IT-DEMO-00001" },
  { name: "B&B Demo Stazione", type: "B&B", area: "Vicino stazione", cin: "IT-DEMO-00002" },
  { name: "Appartamento Demo", type: "Appartamento", area: "Zona fiera", cin: "IT-DEMO-00003" },
];

export default function AdvertiserDashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">Area inserzionista</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Dashboard inserzionista</h1>
          <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Pubblica richieste gratuite, visualizza le strutture della zona e ricevi proposte nella campanella laterale.
          </p>
        </div>
        <Link href="/crea-annuncio" className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">
          <FilePlus2 className="h-4 w-4" /> Crea annuncio
        </Link>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <StatCard label="Annunci attivi" value="0" description="Collega Supabase per dati reali" />
        <StatCard label="Offerte ricevute" value="0" description="La campanella si attiva sulle nuove proposte" />
        <StatCard label="Strutture in zona" value="0" description="Filtrate per città e tipologia preferita" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_380px]">
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-3">
            <Building2 className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Strutture ricettive della zona</h2>
          </div>
          <p className="mt-2 text-sm text-zinc-500">Elenco informativo lato sinistro, filtrato da country_code + city_id + tipologia struttura.</p>
          <div className="mt-5 space-y-3">
            {demoStructures.map((structure) => (
              <article key={structure.cin} className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold">{structure.name}</p>
                    <p className="text-sm text-zinc-500">{structure.type} · {structure.area}</p>
                    <p className="mt-1 text-xs text-zinc-400">CIN: {structure.cin}</p>
                  </div>
                  <button className="rounded-full border px-3 py-1 text-xs">Profilo</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Campanella offerte</h2>
          </div>
          <p className="mt-2 text-sm text-zinc-500">Lista delle strutture che hanno fatto una proposta.</p>
          <div className="mt-5 space-y-3">
            {demoOffers.map((offer) => (
              <article key={offer.hotel} className="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-950">
                <p className="font-semibold">{offer.hotel}</p>
                <p className="text-sm text-zinc-500">{offer.type} · {offer.price}</p>
                <button className="mt-3 rounded-full bg-zinc-950 px-4 py-2 text-xs font-semibold text-white dark:bg-white dark:text-zinc-950">Vedi offerta</button>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
