import type { Metadata } from "next";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { company } from "@/lib/legal/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informativa sulla privacy e sul trattamento dei dati personali (Reg. UE 2016/679).",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      intro="Informativa resa ai sensi dell’art. 13 del Regolamento (UE) 2016/679 (GDPR) per gli utenti della piattaforma."
    >
      <section>
        <h2>1. Titolare del trattamento</h2>
        <p>
          Il titolare del trattamento è {company.companyName}, con sede legale in {company.legalAddress},{" "}
          {company.postalCode} {company.city} ({company.country}), P. IVA {company.vatNumber}, email{" "}
          {company.supportEmail}, PEC {company.pecEmail}.
        </p>
      </section>

      <section>
        <h2>2. Dati raccolti</h2>
        <p>
          Tra i dati che la piattaforma può trattare vi sono dati identificativi e di contatto, dati di profilo
          e di account, contenuti pubblicati dagli utenti, log tecnici e dati connessi ai pagamenti gestiti dal
          fornitore di pagamenti (Stripe).
        </p>
      </section>

      <section>
        <h2>3. Dati account</h2>
        <p>
          Nome, cognome o ragione sociale, indirizzo email, credenziali di accesso (in forma crittografata),
          ruolo (inserzionista / struttura ricettiva), preferenze di profilo, stato dell’account e dati di
          sicurezza (es. tentativi di accesso, se attivati).
        </p>
      </section>

      <section>
        <h2>4. Dati inserzionisti</h2>
        <p>
          Contenuti degli annunci, messaggi scambiati tramite la piattaforma (se previsti), eventuali
          recapiti inseriti volontariamente dall’inserzionista negli annunci (testo libero).{" "}
          <strong>
            Email e telefono di registrazione restano dati del profilo e non sono pubblicati automaticamente
          </strong>{" "}
          salvo diverse funzionalità esplicitamente comunicate e accettate.
        </p>
      </section>

      <section>
        <h2>5. Dati strutture ricettive</h2>
        <p>
          Dati anagrafici e di contatto della struttura, classificazione (Hotel, B&B, Appartamento), dati
          descrittivi dell’offerta, identificativi obbligatori richiesti dalla legge applicabile (es.{" "}
          <strong>CIN</strong> ove richiesto), dati di fatturazione per l’abbonamento a pagamento, riferimenti
          al customer Stripe.
        </p>
      </section>

      <section>
        <h2>6. Dati annunci</h2>
        <p>
          Testi, date, destinazioni, parametri di ricerca, allegati (se previsti), metadati di pubblicazione
          e stato dell’annuncio.
        </p>
      </section>

      <section>
        <h2>7. Dati offerte</h2>
        <p>
          Contenuto economico e descrittivo delle offerte inviate dalle strutture, riferimenti temporali,
          stato dell’offerta e collegamenti agli annunci.
        </p>
      </section>

      <section>
        <h2>8. Dati di pagamento (Stripe)</h2>
        <p>
          I pagamenti e i dati di carta / strumento di pagamento sono trattati da{" "}
          <strong>Stripe Technology Europe Ltd.</strong> quale responsabile autonomo. Il Titolare riceve
          tipicamente identificativi della transazione, stato dell’abbonamento, dati di fatturazione necessari
          agli adempimenti contabili per le strutture ricettive.
        </p>
      </section>

      <section>
        <h2>9. Finalità del trattamento</h2>
        <ul>
          <li>Registrazione e gestione account, autenticazione e sicurezza.</li>
          <li>Erogazione del servizio di intermediazione digitale tra inserzionisti e strutture.</li>
          <li>Gestione abbonamenti e adempimenti contabili/fiscali connessi alle strutture.</li>
          <li>Adempimenti legali, difesa in giudizio, gestione controversie.</li>
          <li>Comunicazioni operative (es. aggiornamenti di servizio, risposte da supporto).</li>
          <li>Marketing diretto solo se previsto consenso specifico (vedi sezione diritti).</li>
        </ul>
      </section>

      <section>
        <h2>10. Base giuridica</h2>
        <ul>
          <li>Esecuzione del contratto (fornitura della piattaforma).</li>
          <li>Consenso ove richiesto (es. cookie non necessari, comunicazioni promozionali).</li>
          <li>Obblighi di legge (es. conservazione documenti fiscali).</li>
          <li>
            Legittimo interesse del Titolare, nel rispetto dei diritti e delle libertà dell’interessato (es.
            sicurezza della piattaforma e prevenzione di abusi).
          </li>
        </ul>
      </section>

      <section>
        <h2>11. Conservazione</h2>
        <p>
          I dati sono conservati per il tempo necessario alle finalità indicate: per tutta la durata del
          rapporto con la piattaforma e, successivamente, per i periodi previsti dalla legge (ad esempio
          obblighi contabili e fiscali) o per la gestione di eventuali controversie.
        </p>
      </section>

      <section>
        <h2>12. Diritti dell’interessato</h2>
        <p>
          Ai sensi degli artt. 15–22 GDPR, l’interessato può esercitare i diritti di accesso, rettifica,
          cancellazione, limitazione, portabilità (ove applicabile) e opposizione, nonché revocare il consenso
          ove prestato, senza pregiudicare la liceità basata sul consenso precedente alla revoca.
        </p>
      </section>

      <section>
        <h2>13. Contatti privacy</h2>
        <p>
          Per esercitare i diritti di cui alla sezione 12 o per qualsiasi richiesta relativa al trattamento dei
          dati personali, scrivi a{" "}
          <a className="font-medium underline" href={`mailto:${company.supportEmail}`}>
            {company.supportEmail}
          </a>
          .
        </p>
      </section>

      <section>
        <h2>14. Servizi terzi (pagamenti)</h2>
        <p>
          I pagamenti e gli abbonamenti delle strutture ricettive sono gestiti da{" "}
          <strong>Stripe Technology Europe Ltd.</strong>, che tratta i dati di pagamento come responsabile
          autonomo secondo la propria informativa privacy. Il Titolare riceve da Stripe gli identificativi
          necessari alla gestione dell’abbonamento e agli adempimenti contabili e fiscali connessi.
        </p>
      </section>
    </LegalPageShell>
  );
}
