import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { company } from "@/lib/legal/company";

export const metadata: Metadata = {
  title: "Termini e Condizioni",
  description: `Termini e condizioni generali di utilizzo di ${company.companyName}.`,
};

export default function TerminiPage() {
  return (
    <LegalPageShell
      title="Termini e Condizioni di utilizzo"
      intro={`Condizioni che regolano l’utilizzo dei servizi digitali offerti da ${company.companyName}.`}
    >
      <section>
        <h2>1. Oggetto</h2>
        <p>
          {company.companyName}, gestito da {company.legalEntityName} (P.IVA {company.vatNumber}), è un{" "}
          <strong>marketplace digitale</strong> che mette in contatto <strong>inserzionisti</strong> e{" "}
          <strong>strutture ricettive</strong> per richieste di soggiorno e offerte commerciali correlate.
        </p>
        <p>
          <strong>Non siamo un’OTA né un’agenzia viaggi.</strong> Non vendiamo soggiorni, non incassiamo prenotazioni dei
          clienti finali e non garantiamo disponibilità o qualità del soggiorno. Il contratto di soggiorno si conclude
          direttamente tra struttura e cliente.
        </p>
      </section>

      <section>
        <h2>2. Pubblicazione annunci da parte degli inserzionisti</h2>
        <p>
          Gli inserzionisti possono pubblicare <strong>richieste di soggiorno gratuitamente</strong>, nei
          limiti tecnici e di policy della piattaforma. L’inserzionista è responsabile del contenuto degli
          annunci e della veridicità delle informazioni inserite.
        </p>
      </section>

      <section>
        <h2>3. Offerte delle strutture ricettive e abbonamento</h2>
        <p>
          Le strutture ricettive possono rispondere con <strong>offerte solo in presenza di abbonamento
          attivo</strong>. Le condizioni economiche sono nelle{" "}
          <Link href="/condizioni-abbonamento" className="font-medium underline">
            Condizioni abbonamento
          </Link>{" "}
          e al momento dell’acquisto tramite Stripe.
        </p>
      </section>

      <section>
        <h2>4. Nessuna garanzia di conclusione della prenotazione</h2>
        <p>
          La piattaforma <strong>non garantisce</strong> che una richiesta si traduca in una prenotazione o
          in un contratto tra le parti. Il servizio consiste nella messa a disposizione degli strumenti
          digitali di incontro tra domanda e offerta.
        </p>
      </section>

      <section>
        <h2>5. Disponibilità dichiarata dalle strutture</h2>
        <p>
          La piattaforma <strong>non è responsabile</strong> della disponibilità reale, della correttezza
          delle tariffe o delle condizioni specifiche dichiarate dalle strutture ricettive nelle offerte.
        </p>
      </section>

      <section>
        <h2>6. Accordi finali tra le parti</h2>
        <p>
          Gli accordi definitivi (contrattuali, economici, di soggiorno) tra inserzionista e struttura restano{" "}
          <strong>esclusiva responsabilità delle parti</strong>, con esclusione di obblighi di intermediazione
          o agenzia salvo diversa disciplina legale imperativa.
        </p>
      </section>

      <section>
        <h2>7. Contatti visibili negli annunci</h2>
        <p>
          Gli inserzionisti inseriscono <strong>manualmente</strong> eventuali contatti resi visibili nel
          testo degli annunci. La piattaforma non verifica tali inserimenti salvo moderazione o strumenti
          esplicitamente regolati nei canali ufficiali.
        </p>
      </section>

      <section>
        <h2>8. Dati di registrazione</h2>
        <p>
          <strong>Email e telefono di registrazione restano privati</strong> e trattati secondo la{" "}
          <Link href="/privacy-policy" className="font-medium text-zinc-900 underline dark:text-zinc-100">
            Privacy Policy
          </Link>
          , salvo obblighi di legge o ordini dell’Autorità.
        </p>
      </section>

      <section>
        <h2>9. Ambito dell’abbonamento a pagamento</h2>
        <p>
          L’abbonamento è riservato <strong>solo</strong> a strutture ricettive di tipo{" "}
          <strong>Hotel</strong>, <strong>B&B</strong> e <strong>Appartamento</strong> (secondo le categorie
          abilitate in piattaforma). È vietato l’uso del profilo struttura per finalità non consentite.
        </p>
      </section>

      <section>
        <h2>10. Fatturazione tramite Stripe</h2>
        <p>
          La <strong>fatturazione automatica</strong> degli abbonamenti avviene tramite <strong>Stripe</strong>,
          secondo le impostazioni del merchant e le norme fiscali applicabili. Le strutture devono fornire{" "}
          <strong>dati di fatturazione veritieri</strong> e aggiornati.
        </p>
      </section>

      <section>
        <h2>11. Obblighi delle strutture ricettive</h2>
        <p>
          Le strutture devono inserire <strong>dati veritieri</strong>, inclusi gli identificativi richiesti
          dalla legge applicabile (ad esempio il <strong>CIN</strong> ove previsto). L’operatore potrà
          sospendere o chiudere account in caso di violazioni gravi o ripetute.
        </p>
      </section>

      <section>
        <h2>12. Fatturazione e adempimenti fiscali</h2>
        <p>
          La <strong>fatturazione obbligatoria per abbonamento riguarda esclusivamente le strutture
          ricettive</strong> (Hotel, B&B, Appartamento) che sottoscrivono un piano a pagamento. Gli
          inserzionisti non sono tenuti alla fatturazione della piattaforma per la pubblicazione gratuita degli
          annunci, salvo diversi servizi a pagamento eventualmente introdotti in futuro e regolati
          autonomamente.
        </p>
      </section>

      <section>
        <h2>13. Legge applicabile e foro</h2>
        <p>
          I presenti Termini sono regolati dalla <strong>legge italiana</strong>. Per le controversie con utenti
          qualificabili come consumatori ai sensi del d.lgs. 206/2005 (Codice del Consumo) restano salvi i diritti
          e i fori inderogabili a tutela del consumatore. Per le controversie con soggetti diversi dal consumatore
          sarà competente il foro italiano secondo le norme processuali vigenti.
        </p>
      </section>
    </LegalPageShell>
  );
}
