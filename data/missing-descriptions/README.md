# Strutture senza descrizione IT

Export per batch Gemini / copywriter: blocchi da **35** strutture con foto e indirizzo ma **senza** `description` (italiano).

## Rigenerare

```bash
node scripts/export-missing-description-blocks.mjs
```

Opzioni:

- `--block-size=35` (default)
- `--max-blocks=5` (solo i primi 5 blocchi, per test)

## Contenuto

| File | Uso |
|------|-----|
| `index.json` | Totale strutture, numero blocchi, lista file |
| `blocks/block-001.json` | 35 strutture (slug, nome, città, indirizzo, contatti) |
| `blocks/block-001-prompt.md` | Prompt pronto per Gemini |

## Workflow descrizioni

1. Apri `blocks/block-NNN-prompt.md` (o JSON) e genera testi IT + EN.
2. Salva la risposta in `data/gemini-responses/block-NNN-updates.json` (array con `slug`, `description`, `description_en`, `indirizzo`).
3. Import:

```bash
node scripts/import-gemini-block-descriptions.mjs --file data/gemini-responses/block-NNN-updates.json
```

4. Rigenera export (il blocco esportato avrà meno righe) o passa al blocco successivo.

## Criteri export

- Tabella `onboarding_hotels`
- `main_photo_url` e `indirizzo` presenti
- `description` IT vuota o null
