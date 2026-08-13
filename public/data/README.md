# Tabelle lookup Alloggiati Web

File JSON usati dal form e dall'export Questura.

| File | Contenuto |
|------|-----------|
| `nations.json` | Codici nazione (9 char) + mapping ISO-3 |
| `document-types.json` | Tipi documento (5 char) |
| `comuni.json` | Comuni principali (~50) — **sostituire con tabella completa** |

## Tabella completa comuni

Scaricare da Alloggiati Web → Tabelle → Comuni.

Convertire in JSON con schema:
```json
{ "code": "058091001", "name": "ROMA", "province": "RM" }
```

Salvare come `comuni.json` (o `comuni-full.json` e aggiornare il loader).
