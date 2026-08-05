# Blocco 141/500 — 35 strutture senza descrizione IT

Compila descrizioni SEO per HotelsDrop.com.

## Regole obbligatorie (NON inventare)

1. **Solo informazioni verificabili** da fonti ufficiali o affidabili:
   - sito ufficiale della struttura
   - pagina Google Business / Maps della struttura
   - pagine ufficiali di catena/franchising
2. **VIETATO inventare**: servizi, stelle, premi, distanze, storia, ristrutturazioni, Michelin, piscine/spa se non confermate.
3. Se **non trovi** testo descrittivo sufficiente e verificabile:
   - **NON** compila `description` né `description_en`
   - aggiungi la struttura in `not_found` con motivo breve (es. "sito assente", "solo nome su OTA", "dati insufficienti")
4. Se trovi solo testo in inglese: `description_en` = adattamento fedele; `description` = traduzione fedele (non creativa).
5. Se trovi solo testo in italiano: `description` = fedele; `description_en` = traduzione fedele.
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

- In `updates`: **solo** strutture con almeno `description` O `description_en` verificati (idealmente entrambi).
- In `not_found`: **tutte** le strutture del blocco senza testo verificabile.
- Ogni struttura del blocco deve comparire in `updates` O in `not_found` (non omettere righe).

## Strutture del blocco

1. **B&B LUGHERA** — Ardara
   - slug: `b-b-lughera-ardara`
   - indirizzo: Via S. Sebastiano, 5, 07010 Tula SS
2. **B&B Piazza San Pantaleo** — Ardara
   - slug: `b-b-piazza-san-pantaleo-ardara`
   - indirizzo: Piazza S. Pantaleo, 14, 07037 Sorso SS
3. **Bed And Breakfast Il Giardino degli Aranci di Gianna Marras** — Ardara
   - slug: `bed-and-breakfast-il-giardino-degli-aranci-di-gi-ardara`
   - indirizzo: Via S. Giovanni, 37, 07013 Mores SS
4. **Hotel Carlo Felice** — Ardara
   - slug: `hotel-carlo-felice-ardara`
   - indirizzo: Via Carlo Felice, 43, 07100 Sassari SS
5. **I Cappuccini B&B** — Ardara
   - slug: `i-cappuccini-b-b-ardara`
   - indirizzo: Via Cappuccini, 1/3, 07037 Sorso SS
6. **Il Cavallino Rosso Hotel Ristorante** — Ardara
   - slug: `il-cavallino-rosso-hotel-ristorante-ardara`
   - indirizzo: Via Fratelli Chighine, 2, 07047 Thiesi SS
7. **Janas Country Resort** — Ardara
   - slug: `janas-country-resort-ardara`
   - indirizzo: Regione Baddingusti, sn, 07013 Mores SS
8. **La Terrazza sul Golfo Sennori** — Ardara
   - slug: `la-terrazza-sul-golfo-sennori-ardara`
   - indirizzo: Via Piemonte, 6, 07036 Sennori SS
9. **Locanda Su mere** — Ardara
   - slug: `locanda-su-mere-ardara`
   - indirizzo: Strada Provinciale 30, Via Cugusi B., 10, 07040 Cheremule SS
10. **Su Giardinu** — Ardara
   - slug: `su-giardinu-ardara`
   - indirizzo: Via Giacomo Puccini, 28A, 07037 Sorso SS
11. **Albergo-hotel Ristorante Villa Fiorita** — Ardauli
   - slug: `albergo-hotel-ristorante-villa-fiorita-ardauli`
   - indirizzo: Viale Europa, 2, 08038 Sorgono NU
12. **B.&.B SA BROBEI (iun.E6668)** — Ardauli
   - slug: `b-b-sa-brobei-iun-e6668-ardauli`
   - indirizzo: Via Gialeto, 48, 09088 Simaxis OR
13. **b&b La Casa di Nonno Ghilarza** — Ardauli
   - slug: `b-b-la-casa-di-nonno-ghilarza-ardauli`
   - indirizzo: Via Rinascimento, 8, 09074 Ghilarza OR
14. **HOTEL SA FUNTANA** — Ardauli
   - slug: `hotel-sa-funtana-ardauli`
   - indirizzo: Via Brigata Sassari, 25, 08036 Ortueri NU
15. **Is scabas Guestrooms** — Ardauli
   - slug: `is-scabas-guestrooms-ardauli`
   - indirizzo: Via Cannelles, 9, 09077 Solarussa OR
16. **Agriturismo Corte in Fiore** — Ardea
   - slug: `agriturismo-corte-in-fiore-ardea`
   - indirizzo: Via degli Olivi, 16, 00040 Ardea RM
17. **Agriturismo il Borgo** — Ardea
   - slug: `agriturismo-il-borgo-ardea`
   - indirizzo: 00072, Via Colli S. Paolo, 13, 00072 Ariccia RM
18. **Agriturismo Torre Cristina** — Ardea
   - slug: `agriturismo-torre-cristina-ardea`
   - indirizzo: Via dei Giardini, 21, 04011 Aprilia LT
19. **B Palace** — Ardea
   - slug: `b-palace-ardea`
   - indirizzo: Lungomare degli Ardeatini, 447, km 19.500/km 19.500, 00040 Ardea RM
20. **B&B Colle Tiziano Lucchini Eva** — Ardea
   - slug: `b-b-colle-tiziano-lucchini-eva-ardea`
   - indirizzo: Via Nazareno Strampelli, 61, 00040 Ardea RM
21. **B&B Mirella's House - Via Verona** — Ardea
   - slug: `b-b-mirella-s-house-via-verona-ardea`
   - indirizzo: Via Verona, 95, 00040 Ardea RM
22. **Bed and Breakfast La finestra sul cortile** — Ardea
   - slug: `bed-and-breakfast-la-finestra-sul-cortile-ardea`
   - indirizzo: Via delle Gaggie, 14, 00071 Pomezia RM
23. **CAMERE SUL MARE** — Ardea
   - slug: `camere-sul-mare-ardea`
   - indirizzo: Lungomare degli Ardeatini, 00040 Marina di Ardea RM
24. **Hotel Ardea** — Ardea
   - slug: `hotel-ardea-ardea`
   - indirizzo: Viale Monti, 77, 47838 Riccione RN
25. **Hotel Calypso** — Ardea
   - slug: `hotel-calypso-ardea`
   - indirizzo: Lungomare degli Ardeatini, 50, 00040 Marina di Ardea RM
26. **Hotel Facioni** — Ardea
   - slug: `hotel-facioni-ardea`
   - indirizzo: Via Palladio Rutilio, 9, 00071 Pomezia RM
27. **Hotel La Pineta dei Liberti** — Ardea
   - slug: `hotel-la-pineta-dei-liberti-ardea`
   - indirizzo: Via delle Pinete, 140, 00042 Marina di Ardea RM
28. **Hotel Palace 2000** — Ardea
   - slug: `hotel-palace-2000-ardea`
   - indirizzo: Via Campobello, 37, 00040 Pomezia RM
29. **Hotel Torvaianica** — Ardea
   - slug: `hotel-torvaianica-ardea`
   - indirizzo: Piazza Ungheria, 30, 00071 Torvaianica RM
30. **Il Casale del Sogno** — Ardea
   - slug: `il-casale-del-sogno-ardea`
   - indirizzo: Via dell'Incastrino, 2A, 00040 Ardea RM
31. **Residence Del Mare** — Ardea
   - slug: `residence-del-mare-ardea`
   - indirizzo: Viale Gorizia, 1, 00040 Ardea RM
32. **SHG Hotel Antonella** — Ardea
   - slug: `shg-hotel-antonella-ardea`
   - indirizzo: Via Pontina, km 28, 00071 Pomezia RM
33. **Albergo Ristorante Genzianella di Sara Fiorelli** — Ardenno
   - slug: `albergo-ristorante-genzianella-di-sara-fiorelli-ardenno`
   - indirizzo: Via Ezio Vanoni, 19, 23010 San Martino SO
34. **Albergo Ristorante Innocenti** — Ardenno
   - slug: `albergo-ristorante-innocenti-ardenno`
   - indirizzo: Via Gaggio, 1, 23011 Ardenno SO
35. **B&B Valtellina** — Ardenno
   - slug: `b-b-valtellina-ardenno`
   - indirizzo: Via Ezio Vanoni, 1843, 23012 Castione Andevenno SO