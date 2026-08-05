# Strutture senza descrizione IT

Export **locale** per batch Gemini. I file generati **non** sono su GitHub (vedi `.gitignore`).

## Regola Gemini (importante)

**NON inventare.** Solo testi verificati da sito ufficiale / Google Business.  
Se non trova nulla → struttura in `not_found`, descrizioni **vuote** (non importate).

## Genera prompt sul tuo PC / Cloud Agent

```bash
# Solo blocco 001 → stampa prompt (copia in Gemini)
node scripts/export-missing-description-blocks.mjs --block 001 --stdout

# Oppure salva file locale (non va in git)
node scripts/export-missing-description-blocks.mjs --block 001

# Tutti i blocchi (17k strutture) — solo se serve
node scripts/export-missing-description-blocks.mjs
```

Output locale: `data/missing-descriptions/blocks/block-001-prompt.md`

## Workflow

1. Genera o apri il prompt del blocco.
2. Incolla in Gemini (meglio con ricerca web).
3. Salva la risposta JSON in `data/gemini-responses/block-001-response.json` (anche questo è locale).
4. Import in Supabase:

```bash
node scripts/import-gemini-block-descriptions.mjs --file data/gemini-responses/block-001-response.json
```

5. Se ci sono `not_found`, viene creato `block-001-response-not-found.json` con l’elenco.

## Formato risposta Gemini

```json
{
  "updates": [
    {
      "slug": "hotel-slug",
      "indirizzo": "...",
      "description": "...",
      "description_en": "...",
      "sources": ["https://..."]
    }
  ],
  "not_found": [
    {
      "slug": "hotel-slug",
      "nome": "...",
      "city_name": "...",
      "reason": "sito assente / dati insufficienti"
    }
  ]
}
```

## Criteri export

- `onboarding_hotels` con `main_photo_url` + `indirizzo`
- `description` IT vuota
