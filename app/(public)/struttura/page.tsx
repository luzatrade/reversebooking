import type { Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Area struttura — Abbonamento e fatture",
  description: "Gestione abbonamento e fatture per strutture ricettive: Hotel, B&B e Appartamenti.",
};

export default function StrutturaPanelPage() {
  const stripePortalUrl = process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL;
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          Area struttura ricettiva
        </h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          La fatturazione degli abbonamenti tramite Stripe riguarda le strutture ricettive (Hotel, B&B,
          Appartamento). Gli inserzionisti utilizzano la pubblicazione annunci senza addebiti di abbonamento da
          piattaforma.
        </p>
      </header>

      <div className="mt-12 space-y-10">
        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-zinc-900">Abbonamento</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            Aggiorna il metodo di pagamento, consulta il piano attivo o gestisci il rinnovo dal portale sicuro
            Stripe.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {stripePortalUrl ? (
              <a
                className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800"
                href={stripePortalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Gestisci abbonamento Stripe
              </a>
            ) : (
              <p className="text-sm text-zinc-600">
                Il collegamento al portale clienti non è ancora attivo. Per modifiche all’abbonamento scrivi a{" "}
                <Link href="/contatti" className="font-medium text-zinc-900 underline">
                  supporto
                </Link>
                .
              </p>
            )}
          </div>
        </section>

        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-zinc-900">Fatture</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            Qui compariranno le fatture emesse in relazione al tuo abbonamento, non appena disponibili nel sistema
            di fatturazione.
          </p>
          <ul className="mt-4 divide-y divide-zinc-100 rounded-lg border border-zinc-100 text-sm">
            <li className="flex items-center justify-between px-4 py-3 text-zinc-500">
              <span>Nessuna fattura disponibile al momento</span>
              <span className="text-xs uppercase">—</span>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-zinc-900">Scarica PDF fattura</h2>
          <p className="mt-3 text-sm text-zinc-600">
            Quando una fattura sarà emessa, potrai scaricare qui la copia in PDF fornita dal circuito di
            pagamento.
          </p>
          <button
            type="button"
            disabled
            className="mt-4 inline-flex cursor-not-allowed items-center rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-400"
          >
            Scarica PDF fattura
          </button>
        </section>

        <p className="text-sm text-zinc-500">
          Dettagli contrattuali e fiscali:{" "}
          <Link href="/termini-e-condizioni" className="font-medium text-zinc-800 underline">
            Termini e Condizioni
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
