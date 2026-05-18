import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { company } from "@/lib/legal/company";

export const metadata: Metadata = {
  title: "Condizioni abbonamento",
  description: `Condizioni economiche dell’abbonamento per strutture ricettive su ${company.companyName}.`,
};

export default function CondizioniAbbonamentoPage() {
  return (
    <LegalPageShell
      title="Condizioni abbonamento"
      intro={`Per le strutture ricettive che sottoscrivono un piano su ${company.companyName}, gestito da ${company.legalEntityName} (P.IVA ${company.vatNumber}).`}
    >
      <section>
        <h2>Oggetto</h2>
        <p>
          Abbonamento ricorrente per l’uso delle funzioni lato struttura (notifiche, invio offerte, area riservata). Non
          include prenotazioni o pagamenti di soggiorno dei clienti finali.
        </p>
      </section>
      <section>
        <h2>Pagamenti</h2>
        <p>
          Addebiti tramite Stripe secondo il piano scelto. Fatture e metodo di pagamento sono gestiti nel portale Stripe.
        </p>
      </section>
      <section>
        <h2>Rinnovo e disdetta</h2>
        <p>
          Rinnovo automatico salvo disdetta tramite portale abbonamento Stripe o secondo le procedure indicate in
          piattaforma.
        </p>
      </section>
      <section>
        <h2>Soggiorni e rimborsi</h2>
        <p>
          {company.companyName} non gestisce né rimborsa soggiorni: eventuali accordi economici con i viaggiatori sono tra
          struttura e cliente.
        </p>
      </section>
      <section>
        <p className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-400">
          Bozza tecnica da completare con il professionista. Per il quadro generale vedi anche{" "}
          <Link href="/termini-e-condizioni" className="font-medium underline">
            Termini e condizioni
          </Link>
          .
        </p>
      </section>
    </LegalPageShell>
  );
}
