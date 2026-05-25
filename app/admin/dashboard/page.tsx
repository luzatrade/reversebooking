import { StatCard } from "@/components/dashboard/StatCard";

const adminSections = [
  "Utenti",
  "Inserzionisti",
  "Strutture",
  "Annunci",
  "Offerte",
  "Abbonamenti",
  "Fatture",
  "Consensi",
];

export default function AdminDashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">Area admin</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Dashboard amministratore</h1>
      <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Console per moderare account, annunci, strutture, abbonamenti, fatture e consensi.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        <StatCard label="Utenti" value="0" />
        <StatCard label="Strutture" value="0" />
        <StatCard label="Annunci" value="0" />
        <StatCard label="Fatture" value="0" />
      </div>

      <section className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-xl font-semibold">Sezioni operative</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {adminSections.map((section) => (
            <div key={section} className="rounded-2xl border border-zinc-200 p-4 text-sm font-medium dark:border-zinc-800">
              {section}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
