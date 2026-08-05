# Blocco 489/500 — 35 strutture senza descrizione IT

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

1. **The Madrid EDITION** — Madrid
   - slug: `the-madrid-edition-madrid`
   - indirizzo: Pl. de Celenque, 2, Centro, 28013 Madrid
2. **UMusic Hotel Madrid** — Madrid
   - slug: `umusic-hotel-madrid-madrid`
   - indirizzo: C. de la Paz, 11, Centro, 28012 Madrid
3. **Woohoo Rooms Boutique Sol** — Madrid
   - slug: `woohoo-rooms-boutique-sol-madrid`
   - indirizzo: C. de Carretas, 7, 3ª y 4ª planta, Centro, 28012 Madrid
4. **Woohoo Suites Madrid** — Madrid
   - slug: `woohoo-suites-madrid-madrid`
   - indirizzo: C. de Concepcion Arenal, 6, 1º, Centro, 28004 Madrid
5. **Amelie Hotel Manila** — Manila
   - slug: `amelie-hotel-manila-manila`
   - indirizzo: 1667 Bocobo St, Malate, Manila, 1004 Metro Manila
6. **Bayview Park Hotel Manila** — Manila
   - slug: `bayview-park-hotel-manila-manila`
   - indirizzo: 1118 Roxas Boulevard, corner United Nations Avenue, Ermita, Manila, 1000 Metro Manila
7. **City Garden Suites Manila** — Manila
   - slug: `city-garden-suites-manila-manila`
   - indirizzo: 1158 A. Mabini St, Ermita, Manila, 1004 Metro Manila
8. **Diamond Hotel Philippines** — Manila
   - slug: `diamond-hotel-philippines-manila`
   - indirizzo: Roxas Boulevard, Corner Dr. J. Quintos Street, Malate, Manila, 1000 Metro Manila
9. **Executive Hotel Manila** — Manila
   - slug: `executive-hotel-manila-manila`
   - indirizzo: 1630 A. Mabini St, Malate, Manila, 1004 Metro Manila
10. **Las Palmas Hotel de Manila** — Manila
   - slug: `las-palmas-hotel-de-manila-manila`
   - indirizzo: 1616 A. Mabini St, Malate, Manila, 1004 Metro Manila
11. **Manila Grand Opera Hotel** — Manila
   - slug: `manila-grand-opera-hotel-manila`
   - indirizzo: 925 Doroteo Jose St, Santa Cruz, Manila, 1003 Metro Manila
12. **New Coast Hotel Manila** — Manila
   - slug: `new-coast-hotel-manila-manila`
   - indirizzo: 1588 Pedro Gil, corner Del Pilar St, Malate, Manila, 1004 Metro Manila
13. **Pearl Lane Hotel Manila** — Manila
   - slug: `pearl-lane-hotel-manila-manila`
   - indirizzo: 1700 Ma. Orosa St, Malate, Manila, 1004 Metro Manila
14. **Red Planet Manila Bay** — Manila
   - slug: `red-planet-manila-bay-manila`
   - indirizzo: Arquiza St. Corner, 0930 Alhambra St, Ermita, Manila, 1000 Metro Manila
15. **Regency Grand Suites** — Manila
   - slug: `regency-grand-suites-manila`
   - indirizzo: Birch Tower, 1622 Bocobo St, Malate, Manila, 1004 Metro Manila
16. **Riviera Mansion Hotel** — Manila
   - slug: `riviera-mansion-hotel-manila`
   - indirizzo: 1638 A. Mabini St, Malate, Manila, 1004 Metro Manila
17. **Skyloft Hotel** — Manila
   - slug: `skyloft-hotel-manila`
   - indirizzo: 1160 Governor Forbes, Sampaloc, Manila, 1008 Metro Manila
18. **Swiss-Belhotel Blulane** — Manila
   - slug: `swiss-belhotel-blulane-manila`
   - indirizzo: 609 Tomas Mapua St, Santa Cruz, Manila, 1003 Metro Manila
19. **The Manila Hotel** — Manila
   - slug: `the-manila-hotel-manila`
   - indirizzo: 1 Rizal Park, Ermita, Manila, 0913 Metro Manila
20. **Affittacamere Sestiere Santa Caterina** — Mazzarrone
   - slug: `affittacamere-sestiere-santa-caterina-mazzarrone`
   - indirizzo: Via Arturo Toscanini, 1, 95042 Grammichele CT
21. **Agriturismo Tenuta Margitello** — Mazzarrone
   - slug: `agriturismo-tenuta-margitello-mazzarrone`
   - indirizzo: Ss 115 ((Km 310, 7, 97013 Comiso RG
22. **G&G Hotel** — Mazzarrone
   - slug: `g-g-hotel-mazzarrone`
   - indirizzo: Viale Raffaele Failla, 90a, 95042 Grammichele CT
23. **Guest House al Viale Affittacamere** — Mazzarrone
   - slug: `guest-house-al-viale-affittacamere-mazzarrone`
   - indirizzo: Via Giuseppe Mazzini, 5, 95041 Caltagirone CT
24. **Ronnavona Casa Vacanze B&B** — Mazzarrone
   - slug: `ronnavona-casa-vacanze-b-b-mazzarrone`
   - indirizzo: Contrada Donnagona, 122, 97012 Chiaramonte Gulfi RG
25. **Amada Hotel Siracusa** — Melilli
   - slug: `amada-hotel-siracusa-melilli`
   - indirizzo: Via Parma, 15, 96010 Città Giardino SR
26. **B&B MELIBLEO** — Melilli
   - slug: `b-b-melibleo-melilli`
   - indirizzo: Via Prazio, 9, 96010 Melilli SR
27. **Grand Hotel Villa Politi** — Melilli
   - slug: `grand-hotel-villa-politi-melilli`
   - indirizzo: Via Maria Politi Laudien, 2, 96100 Siracusa SR
28. **La Casa Dei Mori a Melilli** — Melilli
   - slug: `la-casa-dei-mori-a-melilli-melilli`
   - indirizzo: Via Iblea, 32, 96010 Melilli SR
29. **Venti di Brucoli** — Melilli
   - slug: `venti-di-brucoli-melilli`
   - indirizzo: Via Canale, 99, 96011 Brucoli SR
30. **Wonderful Italy Suites** — Melilli
   - slug: `wonderful-italy-suites-melilli`
   - indirizzo: Via Francesco Crispi, 66, 96100 Siracusa SR
31. **Boutique & Design Hotel ImperialArt** — Merano
   - slug: `boutique-design-hotel-imperialart-merano`
   - indirizzo: C.so della Libertà, 110, 39012 Merano BZ
32. **City Hotel Merano** — Merano
   - slug: `city-hotel-merano-merano`
   - indirizzo: Via Mainardo 41 (Parking:, Via degli Alpini, 23, 39012 Merano BZ
33. **Garni Villa Betty** — Merano
   - slug: `garni-villa-betty-merano`
   - indirizzo: Via Petrarca, 51, 39012 Merano BZ
34. **Grand Hotel Bellevue** — Merano
   - slug: `grand-hotel-bellevue-merano`
   - indirizzo: C.so della Libertà, 194, 39012 Merano BZ
35. **Hotel Aurora** — Merano
   - slug: `hotel-aurora-merano`
   - indirizzo: Passeggiata Lungo Passirio, 38, 39012 Merano BZ