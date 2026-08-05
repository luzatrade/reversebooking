# Blocco 96/500 — 35 strutture senza descrizione IT

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

1. **Hotel Terme Acqua Grazia** — Al� Terme
   - slug: `hotel-terme-acqua-grazia-al-terme`
   - indirizzo: Via Francesco Crispi, 187, 98021 Alì Terme ME
2. **Hotel Terme Marino** — Al� Terme
   - slug: `hotel-terme-marino-al-terme`
   - indirizzo: Via Roma, 25, 98020 Alì Terme ME
3. **Il Limoneto Rooms** — Al� Terme
   - slug: `il-limoneto-rooms-al-terme`
   - indirizzo: Via Abadia, 98050 Terme ME
4. **Sait Hotel** — Al� Terme
   - slug: `sait-hotel-al-terme`
   - indirizzo: Via Nazionale Terme, 309, 98050 Terme ME
5. **Scirocco House** — Al� Terme
   - slug: `scirocco-house-al-terme`
   - indirizzo: Via Salvatore Quasimodo, 2, 98060 Oliveri ME
6. **Affittacamere Galiè** — Amandola
   - slug: `affittacamere-galie-amandola`
   - indirizzo: Strada Provinciale 187, 6, 63087 Comunanza AP
7. **Agriturismo Antico Mulino dei Sibillini** — Amandola
   - slug: `agriturismo-antico-mulino-dei-sibillini-amandola`
   - indirizzo: Via Tenna, 3, 63047 Montefortino FM
8. **Agriturismo Madonna di Piana, di Masili Luigi** — Amandola
   - slug: `agriturismo-madonna-di-piana-di-masili-luigi-amandola`
   - indirizzo: Contrada Madonna di Piana, 63857 Amandola FM
9. **Area Sosta Camper Sibillini** — Amandola
   - slug: `area-sosta-camper-sibillini-amandola`
   - indirizzo: V. Ugo la Malfa, 12, 63857 Amandola FM
10. **B&B Borgo delle fate** — Amandola
   - slug: `b-b-borgo-delle-fate-amandola`
   - indirizzo: Via Guglielmucci, 2, 63857 Amandola FM
11. **B&B Borgofortino** — Amandola
   - slug: `b-b-borgofortino-amandola`
   - indirizzo: Località Bugione, 7, 63858 Montefortino FM
12. **B&B Casa Friano** — Amandola
   - slug: `b-b-casa-friano-amandola`
   - indirizzo: Friano 1, 63857 Amandola FM
13. **Casa vacanze il Vicolo** — Amandola
   - slug: `casa-vacanze-il-vicolo-amandola`
   - indirizzo: Via Vicolo Capocci n, 1, 63857 Amandola FM
14. **DORMI DA ME DORMI DA RE** — Amandola
   - slug: `dormi-da-me-dormi-da-re-amandola`
   - indirizzo: Via Giovanni XXIII, 63857 Amandola FM
15. **Hotel Paradiso** — Amandola
   - slug: `hotel-paradiso-amandola`
   - indirizzo: P.za Umberto I, 7, 63021 Amandola FM
16. **Hotel ristorante Ambro dei f.lli Bocci** — Amandola
   - slug: `hotel-ristorante-ambro-dei-f-lli-bocci-amandola`
   - indirizzo: Località Ambro, 63858 Montefortino FM
17. **Hotel San Marco da Zena'** — Amandola
   - slug: `hotel-san-marco-da-zena-amandola`
   - indirizzo: Via Giuseppe Garibaldi, 6, 63839 Servigliano FM
18. **La Mela Rosa** — Amandola
   - slug: `la-mela-rosa-amandola`
   - indirizzo: Villa Caccianebbia, 4, 63857 Amandola FM
19. **Ristorante Hotel da Roverino** — Amandola
   - slug: `ristorante-hotel-da-roverino-amandola`
   - indirizzo: Via Ascoli, 10, 63087 Comunanza AP
20. **Saecula Natural Village Experience** — Amandola
   - slug: `saecula-natural-village-experience-amandola`
   - indirizzo: Contrada Ripacorvara, 1, 63086, 63086 Force AP
21. **Sibilroom ~ rooms & wellness** — Amandola
   - slug: `sibilroom-rooms-wellness-amandola`
   - indirizzo: Via Guglielmucci, 63857 Amandola FM
22. **Villa Andreina** — Amandola
   - slug: `villa-andreina-amandola`
   - indirizzo: Via Cappuccini, 7, 63857 Amandola FM
23. **Villa Montegenco B&B** — Amandola
   - slug: `villa-montegenco-b-b-amandola`
   - indirizzo: Contrada Montegenco, 1, 63087 Comunanza AP
24. **Albergo Ristorante La Scogliera** — Amantea
   - slug: `albergo-ristorante-la-scogliera-amantea`
   - indirizzo: Contrada Coreca, 1, 87032 Amantea CS
25. **B&B “Alla Chiazzetta”** — Amantea
   - slug: `b-b-alla-chiazzetta-amantea`
   - indirizzo: Via Cavour, Salita S. Francesco, 41, 87032 Amantea CS
26. **B&B Al Castello Amantea** — Amantea
   - slug: `b-b-al-castello-amantea-amantea`
   - indirizzo: Via del Castello, 8, 87032 Amantea CS
27. **La Perla Amantea - Rooms & Apartaments** — Amantea
   - slug: `la-perla-amantea-rooms-apartaments-amantea`
   - indirizzo: Via Monte Bianco, 27, 87032 Amantea CS
28. **La Tonnara Hotel Ristorante** — Amantea
   - slug: `la-tonnara-hotel-ristorante-amantea`
   - indirizzo: Via Tonnara, 13, 87032 Amantea CS
29. **Le Mandrelle Beach Resort** — Amantea
   - slug: `le-mandrelle-beach-resort-amantea`
   - indirizzo: SS 18 Località Marinella Olivo, 87032 Amantea CS
30. **A li' dal Cuac** — Amaro
   - slug: `a-li-dal-cuac-amaro`
   - indirizzo: Via San Rocco, 30, 33020 Cavazzo Carnico UD
31. **Affittacamere Ai Crocus** — Amaro
   - slug: `affittacamere-ai-crocus-amaro`
   - indirizzo: Via della Fontana, 21, 33020 Cesclans UD
32. **Al Benvenuto Hotel & Restaurant** — Amaro
   - slug: `al-benvenuto-hotel-restaurant-amaro`
   - indirizzo: Via Grialba, 9, 33028 Tolmezzo UD
33. **Albergo Miramonti** — Amaro
   - slug: `albergo-miramonti-amaro`
   - indirizzo: Via Umberto I, 22, 33022 Arta Terme UD
34. **Alma Living Hotel al Girarrosto** — Amaro
   - slug: `alma-living-hotel-al-girarrosto-amaro`
   - indirizzo: Via Pontebbana, 74/2, 33010 Carnia UD
35. **Casa Bliss Venzone** — Amaro
   - slug: `casa-bliss-venzone-amaro`
   - indirizzo: Via Alberton del Colle, 14, 33010 Venzone UD