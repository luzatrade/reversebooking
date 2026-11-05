# Prompt per Claude — traduzione DE (copia-incolla)

## Messaggio 1 (istruzioni)

```
Traduci in tedesco (DE) questo JSON HotelsDrop SEO.

Regole:
- Compila SOLO i campi *_de vuoti
- NON modificare campi *_en né le chiavi JSON
- HotelsDrop = invariato
- Reverse Booking = lascia in inglese o "Reverse Booking"
- title_de ≤ 60 caratteri, metaDescription_de ≤ 155 caratteri
- Mantieni {count} dove presente
- Tonformal: Sie
- Intent SEO DE: Hotel buchen, Unterkünfte, Direktangebote, ohne Provision

Restituisci l'intero JSON valido, stessa struttura, pronto da salvare come TO-TRANSLATE-DE-DONE.json
```

## Messaggio 2 (contenuto)

Allega o incolla il contenuto di:

`data/seo/export/TO-TRANSLATE-DE.json`

(~89 KB — se Claude tronca, dividi in 2: righe homepage + seoTemplates + cityDisplayNames, poi destinationHubs)

## Quando hai la risposta

1. Salva come `data/seo/export/TO-TRANSLATE-DE-DONE.json`
2. Torna in Cursor e scrivi: "Traduzione DE in TO-TRANSLATE-DE-DONE.json — importa e implementa /de"

Cursor unirà le traduzioni nei JSON del sito e implementerà il routing.
