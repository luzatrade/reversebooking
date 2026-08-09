# Setup n8n — import workflow (5 minuti)

Non serve che l’agente entri nel tuo account. **Importi un file** già configurato.

## 1. Login n8n (tuo browser)

1. Apri https://luzatrade.app.n8n.cloud
2. Email + password del tuo account n8n
3. **Non** condividi la password in chat

## 2. Import workflow

1. Menu **⋯** o **Workflows** → **Import from file**
2. Seleziona: `data/n8n/workflow-hotelsdrop-scrape-full.json` (dal repo)
3. Apri il workflow importato

## 3. Sostituisci CRON_SECRET (2 nodi)

Cerca `REPLACE_CRON_SECRET` nei nodi:

- **HTTP Request** (GET hotel)
- **HTTP Request2** (POST)

Sostituisci con la tua chiave hex (stessa di Vercel).

URL finale esempio:
```
https://www.hotelsdrop.com/api/cron/n8n-descriptions?limit=5&secret=TUA_CHIAVE
```

POST **senza** `publish=true`.

## 4. Attiva

1. **Save**
2. **Publish**
3. Toggle **Active** ON

## 5. Test

**Execute workflow** (Manual) → tab **Executions** → tutto verde.

HTTP Request2 Output:
- ideale: `queued: true`
- se `imported`: deploy Vercel ancora vecchio (non pubblicare finché non fix)

Poi in Cursor chat: `mostra coda n8n`

## Cosa fa il workflow

- Salta siti aggregatori (`hotelscheck-in.com`) → Meridian non rompe il batch
- Code JS con `scrubDescription` (no tel/email nel testo)
- Filter: solo hotel con `website` non vuoto

## Webhook Cursor

Production URL del nodo Webhook → Secret `N8N_WEBHOOK_URL` in Cursor Dashboard.
