# Strutture senza descrizione IT

Export per batch Gemini: blocchi da **35** strutture con foto e indirizzo ma **senza** `description` (italiano).

## Regola Gemini (importante)

**NON inventare.** Solo testi verificati da sito ufficiale / Google Business.  
Se non trova nulla → struttura in `not_found`, descrizioni **vuote** (non importate).

## Rigenerare export

```bash
node scripts/export-missing-description-blocks.mjs
node scripts/export-missing-description-blocks.mjs --max-blocks=1   # solo blocco 001
```

## Workflow

1. Apri `blocks/block-NNN-prompt.md` → copia in Gemini.
2. Gemini risponde con JSON:

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

3. Salva come `data/gemini-responses/block-NNN-response.json`
4. Import:

```bash
node scripts/import-gemini-block-descriptions.mjs --file data/gemini-responses/block-NNN-response.json
```

5. Se ci sono `not_found`, viene creato `block-NNN-response-not-found.json` con l’elenco.

## Formato legacy

Ancora supportato: array semplice in `block-XXX-updates.json` (solo righe con descrizione).

## Criteri export

- `onboarding_hotels` con `main_photo_url` + `indirizzo`
- `description` IT vuota
