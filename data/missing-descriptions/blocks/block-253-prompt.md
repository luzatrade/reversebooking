# Blocco 253/500 — 35 strutture senza descrizione IT

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

1. **Hotel La Cantinella** — Belvedere Ostrense
   - slug: `hotel-la-cantinella-belvedere-ostrense`
   - indirizzo: Via G. Amendola, 5, 60010 Ostra AN
2. **La Cantinella Restaurant-Hotel** — Belvedere Ostrense
   - slug: `la-cantinella-restaurant-hotel-belvedere-ostrense`
   - indirizzo: Via G. Amendola, 5, 60010 Ostra AN
3. **La Collina dei Cavalieri** — Belvedere Ostrense
   - slug: `la-collina-dei-cavalieri-belvedere-ostrense`
   - indirizzo: Via Murello, 43, 60030 Belvedere Ostrense AN
4. **LA PRINCIPESSA NERA B&B** — Belvedere Ostrense
   - slug: `la-principessa-nera-b-b-belvedere-ostrense`
   - indirizzo: Via Taddeo Taddei, 60010 Ostra AN
5. **Mariani Hotel Jesi** — Belvedere Ostrense
   - slug: `mariani-hotel-jesi-belvedere-ostrense`
   - indirizzo: Via dell'Orfanotrofio, 10, 60035 Jesi AN
6. **Ombra degli Ulivi B&B** — Belvedere Ostrense
   - slug: `ombra-degli-ulivi-b-b-belvedere-ostrense`
   - indirizzo: Via dell'Unione, 17, 60030 San Marcello AN
7. **Pineta Hotel** — Belvedere Ostrense
   - slug: `pineta-hotel-belvedere-ostrense`
   - indirizzo: Via Cassolo, 6, 60030 Monsano AN
8. **Tenuta San Marcello Cantina con Cucina** — Belvedere Ostrense
   - slug: `tenuta-san-marcello-cantina-con-cucina-belvedere-ostrense`
   - indirizzo: Via Melano, 30, 60030 San Marcello AN
9. **Tenuta Tredici Ulivi** — Belvedere Ostrense
   - slug: `tenuta-tredici-ulivi-belvedere-ostrense`
   - indirizzo: Via Fabbrici e Ville, 70, 60019 Senigallia AN
10. **Agriturismo San Michele** — Belveglio
   - slug: `agriturismo-san-michele-belveglio`
   - indirizzo: Via San Michele, 14, 14040 Vinchio AT
11. **Albergo Fattoria Della Roceta** — Belveglio
   - slug: `albergo-fattoria-della-roceta-belveglio`
   - indirizzo: Piazza Italia, 11, 14030 Rocchetta Tanaro AT
12. **B&B Bricco delle Rose** — Belveglio
   - slug: `b-b-bricco-delle-rose-belveglio`
   - indirizzo: Via Bricco, 13, 14040 Bricco AT
13. **Bed and breakfast dog and Friends** — Belveglio
   - slug: `bed-and-breakfast-dog-and-friends-belveglio`
   - indirizzo: Frazione Gatti, 17, 14030 Rocchetta Tanaro AT
14. **Casa Del Roseto** — Belveglio
   - slug: `casa-del-roseto-belveglio`
   - indirizzo: Via Alessandria, 15-17, 14040 Belveglio AT
15. **Cascina REGGIO** — Belveglio
   - slug: `cascina-reggio-belveglio`
   - indirizzo: Via Momparone, 2/B, 14040 Castelnuovo Calcea AT
16. **Corte dell'uva holiday apartments** — Belveglio
   - slug: `corte-dell-uva-holiday-apartments-belveglio`
   - indirizzo: Via Vittorio Alfieri, 1, 14040 Belveglio AT
17. **La Rosa tra le Vigne** — Belveglio
   - slug: `la-rosa-tra-le-vigne-belveglio`
   - indirizzo: Via Altina, 4, 14040 Belveglio AT
18. **La Villa Hotel** — Belveglio
   - slug: `la-villa-hotel-belveglio`
   - indirizzo: Via Torino, 7, 14046 Mombaruzzo AT
19. **OttoQuadri** — Belveglio
   - slug: `ottoquadri-belveglio`
   - indirizzo: Via Tapparone, 1, 15028 Quattordio AL
20. **Agriturismo Aradoni' di Antonello Manca Mameli - Agriturismo Aritzo** — Belv�
   - slug: `agriturismo-aradoni-di-antonello-manca-mameli-ag-belv`
   - indirizzo: SS295, Snc, 08031 Aritzo NU
21. **Agriturismo da Ysy** — Bema
   - slug: `agriturismo-da-ysy-bema`
   - indirizzo: Frazione Serone, 23010 Civo SO
22. **Agriturismo l'Eco** — Bema
   - slug: `agriturismo-l-eco-bema`
   - indirizzo: località Dossa, Via Biella, snc, 23013 Cosio Valtellino SO
23. **Agriturismo Volpe Golosa** — Bema
   - slug: `agriturismo-volpe-golosa-bema`
   - indirizzo: Localita' Dossa, 180, 23013 Cosio Valtellino SO
24. **Antica Trattoria Pizzo Tre Signori** — Bema
   - slug: `antica-trattoria-pizzo-tre-signori-bema`
   - indirizzo: Piazza Pizzo Tre Signori, 2, 23010 Gerola Alta SO
25. **B&B Portobello** — Bema
   - slug: `b-b-portobello-bema`
   - indirizzo: Via Statale 285 Regoledo di, 23013 Cosio Valtellino SO
26. **Bed And Breakfast In Cima Ai Cà** — Bema
   - slug: `bed-and-breakfast-in-cima-ai-ca-bema`
   - indirizzo: Via S. Marco, 27, 23017 Morbegno SO
27. **Hotel Ristorante Trieste** — Bema
   - slug: `hotel-ristorante-trieste-bema`
   - indirizzo: Via S. Rocco, 3, 23017 Morbegno SO
28. **Locanda Via Priula - Wine Bar Bistrot & Rooms** — Bema
   - slug: `locanda-via-priula-wine-bar-bistrot-rooms-bema`
   - indirizzo: Via Ospital Vecchio, 17, 23017 Morbegno SO
29. **Agriturismo Barcola** — Bene Lario
   - slug: `agriturismo-barcola-bene-lario`
   - indirizzo: Via Barcola, 8, 22010 Grandola ed Uniti CO
30. **Albergo Breglia** — Bene Lario
   - slug: `albergo-breglia-bene-lario`
   - indirizzo: Via S. Gregorio, 2, 22010 Plesio CO
31. **Albergo La Solitaria** — Bene Lario
   - slug: `albergo-la-solitaria-bene-lario`
   - indirizzo: Via Statale Regina, 333, 22010 Carlazzo CO
32. **Albergo Ristorante Il Vapore** — Bene Lario
   - slug: `albergo-ristorante-il-vapore-bene-lario`
   - indirizzo: Piazza Tommaso Grossi, 3, 22017 Menaggio CO
33. **B&B A Casa di Anna** — Bene Lario
   - slug: `b-b-a-casa-di-anna-bene-lario`
   - indirizzo: Via L. Cadorna, 9, 22017 Menaggio CO
34. **B&B Balcone Fiorito** — Bene Lario
   - slug: `b-b-balcone-fiorito-bene-lario`
   - indirizzo: Via A. Wyatt, 26, 22017 Menaggio CO
35. **B&B By Lussy** — Bene Lario
   - slug: `b-b-by-lussy-bene-lario`
   - indirizzo: Via per la Grona, 69, 22017 Menaggio CO