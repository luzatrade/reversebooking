# Blocco 396/500 — 35 strutture senza descrizione IT

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

1. **Green Quiet Place** — Campolongo Tapogliano
   - slug: `green-quiet-place-campolongo-tapogliano`
   - indirizzo: Via IX giugno, 7 Sotto il portico, primo cancello a sinistra, 33040 Tapogliano UD
2. **Hotel Franz** — Campolongo Tapogliano
   - slug: `hotel-franz-campolongo-tapogliano`
   - indirizzo: Viale Trieste, 45, 34072 Gradisca d'Isonzo GO
3. **HT Hotel Trieste** — Campolongo Tapogliano
   - slug: `ht-hotel-trieste-campolongo-tapogliano`
   - indirizzo: Piazzale dell'Unità d'Italia, 27, 34072 Gradisca d'Isonzo GO
4. **La Casa nel verde** — Campomaggiore
   - slug: `la-casa-nel-verde-campomaggiore`
   - indirizzo: Contrada Calese, 30, 85010 Castelmezzano PZ
5. **La Pietra Verde** — Campomaggiore
   - slug: `la-pietra-verde-campomaggiore`
   - indirizzo: Vico I Mario Pagano, 5, 85010 Pietrapertosa PZ
6. **Spazio Natura** — Campomaggiore
   - slug: `spazio-natura-campomaggiore`
   - indirizzo: C/Da Arioso, 31, 85010 Castelmezzano PZ
7. **Albadido B&B** — Campomarino
   - slug: `albadido-b-b-campomarino`
   - indirizzo: Via Papa Giovanni XXIII, 9, 86042 Campomarino CB
8. **Aloha Park Hotel** — Campomarino
   - slug: `aloha-park-hotel-campomarino`
   - indirizzo: Via Giustino D'Uva, 5, 86042 Campomarino Lido CB
9. **B&B Arcafelice** — Campomarino
   - slug: `b-b-arcafelice-campomarino`
   - indirizzo: Rio del Mestolone, 2, 86039 Termoli CB
10. **B&B La Dolce Vita** — Campomarino
   - slug: `b-b-la-dolce-vita-campomarino`
   - indirizzo: Via Alcide De Gasperi, 85, 86042 Campomarino CB
11. **B&B Oceano Rooms** — Campomarino
   - slug: `b-b-oceano-rooms-campomarino`
   - indirizzo: Corso Fratelli Brigida, 81, 86039 Termoli CB
12. **Corte Lissa Rooms** — Campomarino
   - slug: `corte-lissa-rooms-campomarino`
   - indirizzo: Via Lissa, 101, 86039 Termoli CB
13. **Gallo's City Rooms** — Campomarino
   - slug: `gallo-s-city-rooms-campomarino`
   - indirizzo: Via Argentina, 62, 86039 Termoli CB
14. **Hotel Acquario** — Campomarino
   - slug: `hotel-acquario-campomarino`
   - indirizzo: Via E. Vanoni, 300, 86042 Campomarino Lido CB
15. **La Casa del Nonno** — Campomarino
   - slug: `la-casa-del-nonno-campomarino`
   - indirizzo: Via Municipio, 1, 86042 Campomarino CB
16. **ll Pentagono camere rooms** — Campomarino
   - slug: `ll-pentagono-camere-rooms-campomarino`
   - indirizzo: Km7 da SS16 uscita ospedale direzione Guglionesi, SP111, 86039 Termoli CB
17. **Rambling Rooms** — Campomarino
   - slug: `rambling-rooms-campomarino`
   - indirizzo: Via G. Di Vittorio, 29, 86042 Campomarino CB
18. **Residence Nettuno** — Campomarino
   - slug: `residence-nettuno-campomarino`
   - indirizzo: Via E. Vanoni, 248, 86042 Campomarino Lido CB
19. **Residenza Glave - Affittacamere vicino Termoli** — Campomarino
   - slug: `residenza-glave-affittacamere-vicino-termoli-campomarino`
   - indirizzo: Via XXIV Maggio, 7, 86042 Campomarino CB
20. **Sea garden city** — Campomarino
   - slug: `sea-garden-city-campomarino`
   - indirizzo: Via Nicola Mascilongo, 32, 86039 Termoli CB
21. **Villa del Mare, Campomarino, CB** — Campomarino
   - slug: `villa-del-mare-campomarino-cb-campomarino`
   - indirizzo: via Palmiro Togliatti, 22, 86042 Campomarino CB
22. **Viola di Mare rooms e parking affittacamere** — Campomarino
   - slug: `viola-di-mare-rooms-e-parking-affittacamere-campomarino`
   - indirizzo: Via Tevere, 6/A, 86039 Termoli CB
23. **B&B Erba Luisa** — Campomorone
   - slug: `b-b-erba-luisa-campomorone`
   - indirizzo: Via Ceranesi, 6, 16164 Genova GE
24. **B&B La Casa di Ada** — Campomorone
   - slug: `b-b-la-casa-di-ada-campomorone`
   - indirizzo: Via alla Caffarella, 20, 16014 Campomorone GE
25. **Casa Torre** — Campomorone
   - slug: `casa-torre-campomorone`
   - indirizzo: Via Pizzorni, 128, 16014 Campomorone GE
26. **Hotel Acquario** — Campomorone
   - slug: `hotel-acquario-campomorone`
   - indirizzo: Vico S. Pancrazio, 9, 16124 Genova GE
27. **Hotel Actor** — Campomorone
   - slug: `hotel-actor-campomorone`
   - indirizzo: CODICE CITR 010025-ALB0042, CIN: IT010025A14KSBS84W, Via Goito, 20, 16122 Genova GE
28. **Hotel Doria** — Campomorone
   - slug: `hotel-doria-campomorone`
   - indirizzo: Vico dei Garibaldi, 3, 16123 Genova GE
29. **Massena** — Campomorone
   - slug: `massena-campomorone`
   - indirizzo: Piazza Andrea Massena, 5/3, 16152 Genova GE
30. **Mercure Genova San Biagio** — Campomorone
   - slug: `mercure-genova-san-biagio-campomorone`
   - indirizzo: Citr 010025 Alb 0003, Via Romairone, 14, 16163 Genova GE
31. **Ristorante La Locanda di San Biagio** — Campomorone
   - slug: `ristorante-la-locanda-di-san-biagio-campomorone`
   - indirizzo: V. San Biagio di Valpolcevera, 29, 16163 Genova GE
32. **AGRITURISMO CAMPOVERDE** — Camponogara
   - slug: `agriturismo-campoverde-camponogara`
   - indirizzo: Via Silvio Pellico, 67, 30010 Camponogara VE
33. **Camping Serenissima** — Camponogara
   - slug: `camping-serenissima-camponogara`
   - indirizzo: Via Padana, 30176 Venezia VE
34. **Hotel Il Burchiello** — Camponogara
   - slug: `hotel-il-burchiello-camponogara`
   - indirizzo: Via Venezia, 19, 30034 Oriago VE
35. **Hotel Park Venezia** — Camponogara
   - slug: `hotel-park-venezia-camponogara`
   - indirizzo: Via Venezia, 92, 30039 Stra VE