# Blocco 196/500 — 35 strutture senza descrizione IT

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

1. **Trattoria Locanda Ai Tre Amici** — Bagnaria Arsa
   - slug: `trattoria-locanda-ai-tre-amici-bagnaria-arsa`
   - indirizzo: Via Cavour, 23, 33050 Mortegliano UD
2. **Villa Felcaro - Relais, Lodge & Restaurant** — Bagnaria Arsa
   - slug: `villa-felcaro-relais-lodge-restaurant-bagnaria-arsa`
   - indirizzo: Via S. Giovanni, 45, 34071 Cormons GO
3. **Albergo Alpino Cardini** — Bagnasco
   - slug: `albergo-alpino-cardini-bagnasco`
   - indirizzo: Frazione Cardini 33, 12080 Roburent CN
4. **B&B Il Borgo** — Bagnasco
   - slug: `b-b-il-borgo-bagnasco`
   - indirizzo: Corso Giuseppe Garibaldi, 125, 12073 Ceva CN
5. **B&B L'Isola D'la Cerrea** — Bagnasco
   - slug: `b-b-l-isola-d-la-cerrea-bagnasco`
   - indirizzo: SP101, 50B, 12070 Mombasiglio CN
6. **B&B Locanda Montecarlo** — Bagnasco
   - slug: `b-b-locanda-montecarlo-bagnasco`
   - indirizzo: Via Nazionale, 5, 12076 Lesegno CN
7. **B&B Per Sognare "Per Sugné"** — Bagnasco
   - slug: `b-b-per-sognare-per-sugne-bagnasco`
   - indirizzo: Via Filippo pettiti, 74, 12076 Lesegno CN
8. **Camping Yoghi e Bubu** — Bagnasco
   - slug: `camping-yoghi-e-bubu-bagnasco`
   - indirizzo: Strada Provinciale 183, 12080 Roburent CN
9. **Da Dodo'** — Bagnasco
   - slug: `da-dodo-bagnasco`
   - indirizzo: SP490, 18, 17020 Calizzano SV
10. **Del Peso Ristorante Hotel** — Bagnasco
   - slug: `del-peso-ristorante-hotel-bagnasco`
   - indirizzo: Via Angelo Nielli, N°12, 12080 San Michele Mondovì CN
11. **Fattoria Cebon** — Bagnasco
   - slug: `fattoria-cebon-bagnasco`
   - indirizzo: Regione Bovina Strella, 30, 12073 Ceva CN
12. **Il giardino di San Martino** — Bagnasco
   - slug: `il-giardino-di-san-martino-bagnasco`
   - indirizzo: Fraz. Lignera Soprana 4, San Martino in, 12079 Lignera CN
13. **Le Ghie** — Bagnasco
   - slug: `le-ghie-bagnasco`
   - indirizzo: 12084 San Quintino CN
14. **Miramonti** — Bagnasco
   - slug: `miramonti-bagnasco`
   - indirizzo: Via 5 Martiri, 6, 17020 Calizzano SV
15. **Ristorante e Hotel Castagneto** — Bagnasco
   - slug: `ristorante-e-hotel-castagneto-bagnasco`
   - indirizzo: Via Nazionale, 69, 12070 Pievetta CN
16. **Taverna del Dolmen** — Bagnasco
   - slug: `taverna-del-dolmen-bagnasco`
   - indirizzo: Località Le Gere, Snc, 17017 Roccavignale SV
17. **Villa Èlia** — Bagnasco
   - slug: `villa-elia-bagnasco`
   - indirizzo: Via Valle, 26, 17020 Calizzano SV
18. **AgriSpace LaTordela - Agriturismo La Tordela** — Bagnatica
   - slug: `agrispace-latordela-agriturismo-la-tordela-bagnatica`
   - indirizzo: Via alla Torricella, 1, 24060 Torre de' Roveri BG
19. **Agriturismo Alle Baite Branzi** — Bagnatica
   - slug: `agriturismo-alle-baite-branzi-bagnatica`
   - indirizzo: Via Rivioni, 66, 24010 Branzi BG
20. **Agriturismo Cascina San Fermo Calcio** — Bagnatica
   - slug: `agriturismo-cascina-san-fermo-calcio-bagnatica`
   - indirizzo: Via S. Fermo, 1, 24054 Calcio BG
21. **Agriturismo Incanto Grumello del Monte** — Bagnatica
   - slug: `agriturismo-incanto-grumello-del-monte-bagnatica`
   - indirizzo: Località Codera, 3, 24064 Grumello del Monte BG
22. **Agriturismo L'Incanto** — Bagnatica
   - slug: `agriturismo-l-incanto-bagnatica`
   - indirizzo: Via Castello, 79/a, 24010 Ponteranica BG
23. **Agriturismo Scuderia Della Valle** — Bagnatica
   - slug: `agriturismo-scuderia-della-valle-bagnatica`
   - indirizzo: Via Prabutè, 2, 24038 Sant'Omobono Terme BG
24. **Airport Hotel Bergamo** — Bagnatica
   - slug: `airport-hotel-bergamo-bagnatica`
   - indirizzo: Via Don Ubiali, 1, 24060 Bagnatica BG
25. **B&B Dimora delle Donnole** — Bagnatica
   - slug: `b-b-dimora-delle-donnole-bagnatica`
   - indirizzo: Via Castagneta, 37, 24129 Bergamo BG
26. **Guesthouse La Rocca** — Bagnatica
   - slug: `guesthouse-la-rocca-bagnatica`
   - indirizzo: Via Azzano S. Paolo, 47A, 24050 Grassobbio BG
27. **Polisena L'Altro Agriturismo** — Bagnatica
   - slug: `polisena-l-altro-agriturismo-bagnatica`
   - indirizzo: via Ca' di Maggio, 333, 24030 Pontida BG
28. **Sadira Agriturismo e Az. Agricola** — Bagnatica
   - slug: `sadira-agriturismo-e-az-agricola-bagnatica`
   - indirizzo: Via alle Cascine, 525, 24033 Calusco d'Adda BG
29. **Agriturismo La Torre** — Bagni di Lucca
   - slug: `agriturismo-la-torre-bagni-di-lucca`
   - indirizzo: località La Torre, Fornoli, 55022 Bagni di Lucca LU
30. **Agriturismo Pian di Fiume** — Bagni di Lucca
   - slug: `agriturismo-pian-di-fiume-bagni-di-lucca`
   - indirizzo: Località Pian di Fiume, 20, 55022 Bagni di Lucca LU
31. **Albergo Bridge** — Bagni di Lucca
   - slug: `albergo-bridge-bagni-di-lucca`
   - indirizzo: Piazza Ponte a Serraglio, 5, 55022 Bagni di Lucca LU
32. **Burlamacchi Villas** — Bagni di Lucca
   - slug: `burlamacchi-villas-bagni-di-lucca`
   - indirizzo: Via S. Francesco, 6, 55022 Bagni di Lucca LU
33. **Hotel La Pergola Barga Chat sul Sito (CircuitoLuccaTurismo)** — Bagni di Lucca
   - slug: `hotel-la-pergola-barga-chat-sul-sito-circuitoluc-bagni-di-lucca`
   - indirizzo: Via Sant'Antonio, 1, 55051 Barga LU
34. **Hotel Pio X** — Bagni di Lucca
   - slug: `hotel-pio-x-bagni-di-lucca`
   - indirizzo: 55022 Bagni di Lucca LU, Italia
35. **Hotel Ristorante Milano** — Bagni di Lucca
   - slug: `hotel-ristorante-milano-bagni-di-lucca`
   - indirizzo: Via del Brennero, 8, 55023 Socciglia LU