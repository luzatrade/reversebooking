/** Regole condivise per prompt Gemini — descrizioni strutture HotelsDrop. */

export const GEMINI_DESCRIPTION_RULES = `
## Regole obbligatorie (NON inventare)

1. **Solo informazioni verificabili** da fonti ufficiali o affidabili:
   - sito ufficiale della struttura
   - pagina Google Business / Maps della struttura
   - pagine ufficiali di catena/franchising
2. **VIETATO inventare**: servizi, stelle, premi, distanze, storia, ristrutturazioni, Michelin, piscine/spa se non confermate.
3. Se **non trovi** testo descrittivo sufficiente e verificabile:
   - **NON** compila \`description\` né \`description_en\`
   - aggiungi la struttura in \`not_found\` con motivo breve (es. "sito assente", "solo nome su OTA", "dati insufficienti")
4. Se trovi solo testo in inglese: \`description_en\` = adattamento fedele; \`description\` = traduzione fedele (non creativa).
5. Se trovi solo testo in italiano: \`description\` = fedele; \`description_en\` = traduzione fedele.
6. Lunghezza quando presente: ~120–200 parole per lingua, tono hospitality professionale.
7. Puoi menzionare HotelsDrop solo in chiusura (1 frase): richiesta gratuita, offerte dirette, zero commissioni per chi viaggia — **solo** se il resto del testo è reale.

## Formato output (JSON strict)

Rispondi **solo** con un oggetto JSON (no markdown fence):

{
  "updates": [
    {
      "slug": "slug-esatto",
      "indirizzo": "indirizzo verificato o seed",
      "description": "testo IT solo se verificato",
      "description_en": "testo EN solo se verificato",
      "sources": ["https://sito-ufficiale...", "https://..."]
    }
  ],
  "not_found": [
    {
      "slug": "slug-esatto",
      "nome": "Nome struttura",
      "city_name": "Città",
      "reason": "motivo sintetico"
    }
  ]
}

- In \`updates\`: **solo** strutture con almeno \`description\` O \`description_en\` verificati (idealmente entrambi).
- In \`not_found\`: **tutte** le strutture del blocco senza testo verificabile.
- Ogni struttura del blocco deve comparire in \`updates\` O in \`not_found\` (non omettere righe).
`;

export function buildGeminiDescriptionPromptHeader(blockNum, totalBlocks, count) {
  return [
    `# Blocco ${blockNum}/${totalBlocks} — ${count} strutture senza descrizione IT`,
    "",
    "Compila descrizioni SEO per HotelsDrop.com.",
    "",
    GEMINI_DESCRIPTION_RULES.trim(),
    "",
    "## Strutture del blocco",
    "",
  ].join("\n");
}
