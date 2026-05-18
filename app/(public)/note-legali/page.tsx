import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { company } from "@/lib/legal/company";

export const metadata: Metadata = {
  title: "Note legali",
  description: "Informazioni societarie e note legali di Reverse Booking.",
};

export default function NoteLegaliPage() {
  return (
    <LegalPageShell
      title="Note legali"
      intro="Informazioni di carattere generale sull’operatore del sito e sul servizio offerto attraverso la piattaforma."
    >
      <section>
        <h2>Identificazione del titolare</h2>
        <p>
          <strong>Ragione sociale / nome attività:</strong> {company.companyName}
        </p>
        <p>
          <strong>Denominazione commerciale:</strong> {company.businessName}
        </p>
        <p>
          <strong>Partita IVA:</strong> {company.vatNumber}
        </p>
        <p>
          <strong>Codice fiscale:</strong> {company.taxCode}
        </p>
        <p>
          <strong>Sede legale:</strong> {company.legalAddress}, {company.postalCode} {company.city},{" "}
          {company.country}
        </p>
        <p>
          <strong>PEC:</strong> {company.pecEmail}
        </p>
        <p>
          <strong>Email di supporto:</strong> {company.supportEmail}
        </p>
        <p>
          <strong>Telefono:</strong> {company.phone}
        </p>
        <p>
          <strong>Sito web:</strong> {company.websiteUrl}
        </p>
        <p>
          <strong>Codice ATECO:</strong> {company.atecoCode}
        </p>
        {company.reaNumber ? (
          <p>
            <strong>REA:</strong> {company.reaNumber}
          </p>
        ) : null}
      </section>

      <section>
        <h2>Natura del servizio</h2>
        <p>
          {company.companyName} è una piattaforma digitale per la pubblicazione di annunci di richiesta di
          soggiorno da parte degli inserzionisti e per la presentazione di offerte commerciali da parte di
          strutture ricettive, secondo quanto disciplinato nei{" "}
          <Link href="/termini-e-condizioni" className="font-medium text-zinc-900 underline dark:text-zinc-100">
            Termini e Condizioni
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Limitazione di responsabilità</h2>
        <p>
          Le presenti note hanno funzione informativa. I dati societari sono quelli comunicati dal titolare e
          possono essere aggiornati periodicamente. Per informazioni su trattamento dei dati personali si rimanda
          alla Privacy Policy.
        </p>
      </section>

      <section>
        <h2>Documenti collegati</h2>
        <ul>
          <li>
            <Link href="/privacy-policy" className="font-medium text-zinc-900 underline dark:text-zinc-100">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/cookie-policy" className="font-medium text-zinc-900 underline dark:text-zinc-100">
              Cookie Policy
            </Link>
          </li>
          <li>
            <Link
              href="/termini-e-condizioni"
              className="font-medium text-zinc-900 underline dark:text-zinc-100"
            >
              Termini e Condizioni
            </Link>
          </li>
        </ul>
      </section>
    </LegalPageShell>
  );
}
