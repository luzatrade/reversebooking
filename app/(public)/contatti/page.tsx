import type { Metadata } from "next";
import { company } from "@/lib/legal/company";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Recapiti, supporto e PEC di HotelsDrop.com.",
};

export default function ContattiPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Contatti</h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Siamo a disposizione per assistenza, informazioni commerciali e richieste legate alla privacy.
        </p>
      </header>

      <dl className="mt-10 space-y-6 text-base text-zinc-700 dark:text-zinc-300">
        <div>
          <dt className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Supporto</dt>
          <dd className="mt-1">
            <a className="font-medium text-zinc-900 underline dark:text-zinc-50" href={`mailto:${company.supportEmail}`}>
              {company.supportEmail}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold uppercase tracking-wide text-zinc-500">PEC</dt>
          <dd className="mt-1">
            <a className="font-medium text-zinc-900 underline dark:text-zinc-50" href={`mailto:${company.pecEmail}`}>
              {company.pecEmail}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Telefono</dt>
          <dd className="mt-1">{company.phone}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Sede legale</dt>
          <dd className="mt-1">
            {company.legalAddress}, {company.postalCode} {company.city} — {company.country}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Sito web</dt>
          <dd className="mt-1">
            <a
              className="font-medium text-zinc-900 underline dark:text-zinc-50"
              href={company.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {company.websiteUrl}
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
}
