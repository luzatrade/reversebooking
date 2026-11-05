# n8n ↔ Cursor ↔ HotelsDrop

Bridge via API HotelsDrop (coda Supabase). Nessun accesso diretto al tuo n8n da Cursor.

## Flusso

```
n8n workflow → POST handoff (coda) → Cursor agent legge coda → utente approva → publish
```

## 1. n8n — ultimo nodo HTTP POST

| Campo | Valore |
|--------|--------|
| Method | POST |
| URL | `https://www.hotelsdrop.com/api/cron/n8n-descriptions?secret=CRON_SECRET` |

**Non** usare `publish=true`. Risposta attesa:

```json
{ "queued": true, "published": false, "queueId": "..." }
```

## 2. Cursor Secrets (dashboard)

| Variabile | Uso |
|-----------|-----|
| `CRON_SECRET` | API handoff + publish (già presente) |
| `N8N_WEBHOOK_URL` | Opzionale: agente avvia workflow n8n |

## 3. n8n — webhook per Cursor

Nel workflow n8n:

1. Aggiungi nodo **Webhook** come trigger (o parallelo a Manual)
2. Path: es. `hotelsdrop-scrape`
3. Copia **Production URL** → Secret Cursor `N8N_WEBHOOK_URL`

Agente può lanciare: `npm run n8n:trigger`

## 4. Cursor agent

```bash
npm run n8n:trigger          # avvia n8n (se webhook configurato)
npm run n8n:list-pending     # legge coda
npm run n8n:publish-approved -- --queue-id <uuid>   # dopo ok utente
```

## 5. Utente

Dopo run n8n: chiedi in chat **«mostra coda n8n»** → valuti → **«ok inserisci»**
