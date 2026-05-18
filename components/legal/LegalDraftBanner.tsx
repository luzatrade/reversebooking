import { company, LEGAL_LAST_UPDATED } from "@/lib/legal/company";

/** Nota discreta in cima alle pagine legali: data di aggiornamento e contatto. */
export function LegalDraftBanner() {
  return (
    <aside
      className="rounded-lg border border-zinc-200 bg-zinc-100/80 px-4 py-3 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-300"
      role="note"
    >
      <p>
        <span className="font-medium text-zinc-900 dark:text-zinc-100">Ultimo aggiornamento:</span>{" "}
        {LEGAL_LAST_UPDATED}. Per richieste su privacy e dati personali:{" "}
        <a className="font-medium underline underline-offset-2" href={`mailto:${company.supportEmail}`}>
          {company.supportEmail}
        </a>
        .
      </p>
    </aside>
  );
}
