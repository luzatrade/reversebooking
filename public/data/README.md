# Tabelle lookup Alloggiati Web

File JSON usati dal form check-in e dall'export Questura.

| File | Contenuto | Rigenerazione |
|------|-----------|---------------|
| `nations.json` | Codici stato (9 char) + ISO-3 per MRZ | `npm run alloggiati:import-tables` |
| `document-types.json` | Tipi documento (5 char) | idem |
| `comuni.json` | Comuni italiani (~11k, ufficiali) | idem |

## Aggiornamento tabelle

```bash
npm run alloggiati:import-tables
```

Scarica da [Alloggiati Web → Tabelle](https://alloggiatiweb.poliziadistato.it/portalealloggiati/tabelle.aspx).

**Nota:** i codici comune ufficiali (es. ROMA = `412058091`) differiscono dal campionario demo precedente.

## SOAP Alloggiati (server)

Variabili ambiente Vercel / `.env.local`:

| Variabile | Uso |
|-----------|-----|
| `ALLOGGIATI_WS_USER` | Utente portale |
| `ALLOGGIATI_WS_PASSWORD` | Password |
| `ALLOGGIATI_WS_KEY` | Chiave WS |
| `ALLOGGIATI_WS_ALLOW_SEND` | `true` solo per abilitare invio reale (`Send`) |

Test CLI: `npm run alloggiati:soap-test`

Ripristino export legacy: `npm run alloggiati:unmark-exported -- --dry-run`
