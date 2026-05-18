# HotelsDrop

Next.js (App Router) per un portale di annunci e offerte tra inserzionisti e strutture ricettive. Il repository include **bozze legali** e **placeholder fiscali** da sostituire e far validare da commercialista/avvocato prima della produzione.

## Avvio

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Script

- `npm run dev` — sviluppo
- `npm run build` — build produzione
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript senza emit

## Configurazione legale e fiscale

I **dati aziendali** (ragione sociale, P. IVA, PEC, sede, ATECO, ecc.) e le **versioni dei documenti** usate per i consensi sono centralizzati in:

`lib/legal/company.ts`

Modifica quel file prima del go-live. **Non sono presenti dati fiscali reali**: usa segnaposto e sostituiscili con quelli effettivi dopo la revisione professionale.

Le pagine in `app/(public)/` (note legali, privacy, cookie, termini, contatti) sono **bozze tecniche** pensate per un portale italiano con P. IVA, PEC e riferimenti GDPR/Stripe/Supabase/Resend/Vercel. Devono essere **validate da un professionista** (commercialista e/o avvocato) e allineate al trattamento reale dei dati e al modello di business definitivo.

## Supabase e consensi

È inclusa una migration SQL in:

`supabase/migrations/20250513190000_user_consents.sql`

È stato eseguito `supabase init` (file `supabase/config.toml`). Per applicare le migration:

1. **Progetto cloud:** `npm run supabase:link` (ref progetto) poi `npm run supabase:push`, **oppure** incolla lo SQL della migration nell’editor SQL della dashboard Supabase.
2. **Locale (Docker):** avvia Docker Desktop, poi `npm run supabase:start` — le migration vengono applicate allo stack locale.

Variabili d’ambiente: copia `.env.example` in `.env.local` (nel repo è già stato creato un `.env.local` con **placeholder**; sostituisci con chiavi reali). Per registrare l’utente e salvare subito i consensi serve `SUPABASE_SERVICE_ROLE_KEY` **solo lato server** (non esporre al client).

> In ambiente senza Docker attivo, `supabase start` non può essere completato dall’agente; usa uno dei metodi sopra sul tuo Mac.

## Note

- Cookie banner: preferenze in `localStorage` (vedi `components/legal/CookieBanner.tsx`).
- Fatturazione Stripe: concettualmente riservata alle **strutture ricettive** (Hotel, B&B, Appartamento); area dimostrativa in `/struttura`.
