<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:cursor-cloud-agent -->
# Cursor Cloud Agent — autonomia operativa

## Architettura (Vercel ≠ database)

| Componente | Ruolo |
|------------|--------|
| **Vercel** | Host del sito Next.js (pagine, API, console admin) |
| **Supabase** | Database PostgreSQL + storage foto (`onboarding_hotels`, `hotel_accounts`) |

Il deploy su Vercel aggiorna solo il **codice**. I dati hotel vanno **scritti su Supabase** via script o console.

## Secret obbligatori (Dashboard Cursor)

Configurare in https://cursor.com/dashboard/cloud-agents → **Secrets**  
Tipo: **Environment Variable** (runtime), scope repo `luzatrade/reversebooking`.

| Variabile | Perché |
|-----------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | URL progetto Supabase prod |
| `SUPABASE_SERVICE_ROLE_KEY` | Scrittura DB, upload foto, import onboarding |
| `GOOGLE_PLACES_API_KEY` | Import completi (foto, telefono, sito, coordinate) |
| `GEMINI_API_KEY` | Generazione automatica descrizioni SEO (blocchi 35) |

Opzionali: `GOOGLE_PLACES_PHOTOS_KEY`, `RESEND_API_KEY`, `CRON_SECRET`, `GEMINI_MODEL` (default `gemini-2.0-flash`).

`CRON_SECRET` è **obbligatorio in produzione** su Vercel (Settings → Environment Variables) per i cron job, incluso il keep-alive Supabase (`/api/cron/supabase-ping`, ogni 3 giorni via `vercel.json`). Vercel invia `Authorization: Bearer <CRON_SECRET>`; in locale/test anche `?secret=`.

Opzionale Cloud Agent: `SUPABASE_ACCESS_TOKEN` (token personale Supabase) per `supabase projects resume` se il progetto Free va in pausa.

Verifica: `node scripts/check-agent-secrets.mjs`

**Non** mettere secret in `.cursor/environment.json` (è nel repo in chiaro).

## Descrizioni SEO automatiche (Gemini API)

Con `GEMINI_API_KEY` + Supabase:

```bash
npm run gemini:probe
node scripts/generate-block-descriptions-gemini.mjs --block 011 --import
node scripts/run-seo-description-block.mjs --from 011 --to 015
```

Flusso: legge `data/missing-descriptions/blocks/block-NNN.json` → Gemini (1 hotel/chiamata) → validazione → `data/gemini-responses/block-NNN-updates.json` → import Supabase + `seo_indexable`.

## Cosa fare l'agente quando ha i secret

Import onboarding completi (foto + email + mappa):

```bash
node scripts/check-agent-secrets.mjs
npm run import:italy-premier-hotels          # batch da JSON
node scripts/import-onboarding-hotels-batch.mjs --file data/regina-canada-hotels-4.json --manual --placeholder-photo
```

Migrations SQL: preferire `supabase db push` o eseguire file in `supabase/migrations/` se il CLI è linkato; altrimenti fornire SQL idempotente all'utente solo se i secret Supabase mancano.

## Cosa NON chiedere all'utente se i secret ci sono

- Eseguire SQL manualmente su Supabase SQL Editor
- Lanciare script import dal PC locale
- Copiare chiavi API

Procedere in autonomia: import, seed, verifica console, commit, merge, deploy.

## Bridge n8n ↔ Cursor (coda handoff)

n8n **non** è accessibile direttamente. Il bridge è l’API HotelsDrop + coda `admin_audit_log`.

| Direzione | Come |
|-----------|------|
| n8n → Cursor | POST `.../n8n-descriptions?secret=CRON` (senza `publish=true`) → coda |
| Cursor → n8n | Secret `N8N_WEBHOOK_URL` + `npm run n8n:trigger` |
| Cursor legge coda | `npm run n8n:list-pending` |
| Publish dopo ok utente | `npm run n8n:publish-approved -- --queue-id <uuid>` |

Guida setup: `data/n8n/CURSOR-BRIDGE.md`

**Regola:** mai pubblicare senza approvazione utente («ok inserisci»).

## Cosa chiedere all'utente solo se i secret mancano

Indicare **una sola volta** di aggiungere i secret nel dashboard Cursor (lista sopra), poi riavviare l'agent run.

## Supabase Free — keep-alive e resilienza SEO

Progetto prod: `tavbgqcsizqdceobauli` (org reversebooking, piano Free). Dopo ~7 giorni senza query il progetto va in **Paused** → homepage/destinazioni/schede hotel rischiano HTTP 500.

| Azione | Dettaglio |
|--------|-----------|
| **Keep-alive automatico** | `GET/POST /api/cron/supabase-ping` — query leggera + count `onboarding_hotels`; cron Vercel `0 7 */3 * *` (ogni 3 giorni, 07:00 UTC) |
| **Secret Vercel** | `CRON_SECRET` obbligatorio; Vercel Cron passa header `Authorization: Bearer …` |
| **Graceful degradation** | Pagine pubbliche (homepage, destinazioni, hotel) non devono restituire 500 se Supabase è down — vedi PR resilience su `main` |
| **Resume manuale** | Dashboard Supabase → Resume; opzionale agente con `SUPABASE_ACCESS_TOKEN` |

Test manuale (con secret configurato):

```bash
curl -sS -H "Authorization: Bearer $CRON_SECRET" "https://www.hotelsdrop.com/api/cron/supabase-ping"
```
<!-- END:cursor-cloud-agent -->
