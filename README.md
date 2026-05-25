# Reverse Booking

SaaS **reverse booking** globale per l’hospitality: gli inserzionisti pubblicano richieste di soggiorno gratuite; le strutture ricettive (Hotel, B&B, Appartamento) nella stessa città ricevono notifiche e inviano offerte con **abbonamento Stripe**.

Repository: **`~/Desktop/reverseboking`** (tutto nella root: `package.json`, `app/`, `components/`, `lib/`, `supabase/`, ecc.).

Stack: **Next.js (App Router)**, **TypeScript**, **Tailwind**, **shadcn/ui**, **Supabase** (Auth + Postgres + RLS), **Stripe** (Billing + Invoices + Webhook), **Resend**, **Zod**, **React Hook Form**.

## Avvio rapido

```bash
cd ~/Desktop/reverseboking
cp .env.example .env.local   # compila i valori (solo placeholder in repo)
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

- Documentazione: `docs/setup.md`, `docs/architecture.md`, `docs/billing.md`, `docs/database.md`, `docs/legal.md`.
- Schema DB: `supabase/migrations/` + `supabase/schema.sql`, seed `supabase/seed.sql`.

## Script

- `npm run dev` — sviluppo
- `npm run build` — build produzione
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript
- `npm run supabase:link` / `supabase:push` — migration su progetto cloud
- `npm run supabase:start` — stack locale (richiede Docker)

## Ruoli e URL applicativi

| Ruolo | Prefisso URL |
|-------|----------------|
| Inserzionista | `/inserzionista/*` |
| Struttura | `/struttura/*` |
| Admin | `/console/*` |

## Configurazione legale e fiscale

Modificare i dati aziendali in `lib/legal/company.ts`.

**Le pagine legali generate sono bozze tecniche e devono essere validate da un professionista.**

## Supabase

1. Crea progetto su [supabase.com](https://supabase.com).
2. Applica `supabase/migrations/20260201120000_init_reverse_booking.sql` e `supabase/seed.sql`.
3. Imposta `NEXT_PUBLIC_SUPABASE_*` e `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`.

Registrazione: `POST /api/auth/register` (service role lato server).

## Stripe e Resend

Vedi `docs/billing.md` e `docs/setup.md`. Webhook: `POST /api/stripe/webhook`.

## Deploy (Vercel)

Imposta le variabili d’ambiente (come in `.env.example`) e `NEXT_PUBLIC_APP_URL` con il dominio di produzione.

## CIN e privacy inserzionisti

- **CIN** obbligatorio per ogni struttura (`cin_code` univoco).
- Email/telefono di registrazione inserzionista **privati**; contatti visibili solo se inseriti nell’annuncio.

## GitHub

Remote predefinito (se configurato): `origin` → repository `reversebooking` su GitHub. Push: `git push origin main`.
