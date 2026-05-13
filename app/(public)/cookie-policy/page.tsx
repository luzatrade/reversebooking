import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { COOKIE_POLICY_VERSION, company } from "@/lib/legal/company";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Informativa sull’uso dei cookie e sulle preferenze di navigazione.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPageShell
      title="Cookie Policy"
      intro={`Versione documento: ${COOKIE_POLICY_VERSION}. Questa informativa descrive le categorie di cookie e tecnologie similari utilizzate sul sito.`}
    >
      <section>
        <h2>1. Cosa sono i cookie</h2>
        <p>
          I cookie sono piccoli file di testo memorizzati sul dispositivo dell’utente quando visita un sito.
          La presente Cookie Policy descrive le categorie utilizzate su {company.companyName}.
        </p>
      </section>

      <section>
        <h2>2. Cookie tecnici</h2>
        <p>
          Necessari al funzionamento del sito (sicurezza, bilanciamento del carico, preferenze di sessione
          strettamente indispensabili al servizio richiesto).
        </p>
      </section>

      <section>
        <h2>3. Cookie di autenticazione</h2>
        <p>
          Consentono di mantenere la sessione dell’utente dopo il login e sono connessi alla fornitura del
          servizio richiesto.
        </p>
      </section>

      <section>
        <h2>4. Cookie di preferenze</h2>
        <p>
          Memorizzano scelte dell’utente (es. lingua, impostazioni di visualizzazione). L’attivazione avviene
          previo consenso ove richiesto dalla normativa applicabile.
        </p>
      </section>

      <section>
        <h2>5. Cookie analytics (futuri)</h2>
        <p>
          Strumenti di misurazione aggregata potranno essere introdotti in futuro. In tal caso la presente
          policy e il banner di consenso saranno aggiornati e l’attivazione sarà subordinata al consenso ove
          necessario.
        </p>
      </section>

      <section>
        <h2>6. Gestione del consenso</h2>
        <p>
          Al primo accesso viene mostrato un banner che consente di accettare i cookie non necessari, di
          rifiutarli o di personalizzare le scelte. Le preferenze sono memorizzate in{" "}
          <strong>localStorage</strong> sul browser, salvo diversa configurazione tecnica.
        </p>
        <p>
          Puoi modificare le preferenze cancellando i dati di navigazione del sito dal tuo browser oppure
          attraverso le opzioni che verranno rese disponibili in questa pagina.
        </p>
      </section>

      <section>
        <h2>7. Rapporto con la Privacy Policy</h2>
        <p>
          Per il trattamento dei dati personali si rimanda alla{" "}
          <Link href="/privacy-policy" className="font-medium text-zinc-900 underline dark:text-zinc-100">
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </LegalPageShell>
  );
}
