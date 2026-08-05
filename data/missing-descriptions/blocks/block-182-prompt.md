# Blocco 182/500 — 35 strutture senza descrizione IT

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

1. **La Chimera dei Marsi** — Avezzano
   - slug: `la-chimera-dei-marsi-avezzano`
   - indirizzo: Via Guglielmo Marconi, 46, 67051 Avezzano AQ
2. **Locanda Corte Dé Guasconi** — Avezzano
   - slug: `locanda-corte-de-guasconi-avezzano`
   - indirizzo: Via da Monte, 23, 67051 Antrosano AQ
3. **Residenza Avezzano** — Avezzano
   - slug: `residenza-avezzano-avezzano`
   - indirizzo: Via Garibaldi, 26, 67051 Avezzano AQ
4. **Albergo La Locanda** — Aviano
   - slug: `albergo-la-locanda-aviano`
   - indirizzo: Via Pordenone, 10, 33081 Aviano PN
5. **Albergo Residence Italia Vintage Hotel** — Aviano
   - slug: `albergo-residence-italia-vintage-hotel-aviano`
   - indirizzo: Piazzetta Costantini, 6, 33170 Pordenone PN
6. **Aviano Palace Hotel** — Aviano
   - slug: `aviano-palace-hotel-aviano`
   - indirizzo: Via Sacile, 21, 33081 Aviano PN
7. **Avianresidenze** — Aviano
   - slug: `avianresidenze-aviano`
   - indirizzo: Via Dante Alighieri, 30, 33081 Aviano PN
8. **Bed & Breakfast Ligont** — Aviano
   - slug: `bed-breakfast-ligont-aviano`
   - indirizzo: Via Rivetta, 22B, 33070 Budoia PN
9. **Bed & Breakfast Villa Orsolina** — Aviano
   - slug: `bed-breakfast-villa-orsolina-aviano`
   - indirizzo: Viale per Costa, 32, 33081 Aviano PN
10. **cà livenza sacile b&b** — Aviano
   - slug: `ca-livenza-sacile-b-b-aviano`
   - indirizzo: Via Ronche, 72, 33077 Sacile PN
11. **Ca' del Bosco** — Aviano
   - slug: `ca-del-bosco-aviano`
   - indirizzo: Via Bianco, 34, 33070 Budoia PN
12. **Ciasa De Gahja** — Aviano
   - slug: `ciasa-de-gahja-aviano`
   - indirizzo: Via Anzolet, 13, 33070 Budoia PN
13. **Hotel Italia** — Aviano
   - slug: `hotel-italia-aviano`
   - indirizzo: Vicolo dal Fabbro Mario, 1, 33077 Sacile PN
14. **Hotel Residence Desiree** — Aviano
   - slug: `hotel-residence-desiree-aviano`
   - indirizzo: V. Roma, 73, 33081 Aviano PN
15. **Hotel Residence Tower** — Aviano
   - slug: `hotel-residence-tower-aviano`
   - indirizzo: Via Giuseppe Garibaldi, 1/a, 33081 Aviano PN
16. **Palazzo Policreti Negrelli** — Aviano
   - slug: `palazzo-policreti-negrelli-aviano`
   - indirizzo: Piazza Duomo, 15, 33081 Aviano PN
17. **Residence Elite** — Aviano
   - slug: `residence-elite-aviano`
   - indirizzo: Via Riccardo Pitteri, 1/A, 33081 Aviano PN
18. **Residence Magnolia** — Aviano
   - slug: `residence-magnolia-aviano`
   - indirizzo: Via Dante Alighieri, 9, 33081 Aviano PN
19. **Smart Residence Aviano** — Aviano
   - slug: `smart-residence-aviano-aviano`
   - indirizzo: Via Stretta, 9, 33081 Aviano PN
20. **Villa Marini Trevisan Hotel** — Aviano
   - slug: `villa-marini-trevisan-hotel-aviano`
   - indirizzo: Viale Guglielmo Marconi, 8, 33081 Castello d'Aviano PN
21. **Villa Policreti** — Aviano
   - slug: `villa-policreti-aviano`
   - indirizzo: Via IV Novembre, 13, 33081 Castello d'Aviano PN
22. **Agriturismo La Fontana** — Aviatico
   - slug: `agriturismo-la-fontana-aviatico`
   - indirizzo: Via S. Salvatore, 35, 24019 Frazione Miragolo San Salvatore, Zogno BG
23. **Albergo Centrale - Hotel e Ristorante** — Aviatico
   - slug: `albergo-centrale-hotel-e-ristorante-aviatico`
   - indirizzo: Viale Papa Giovanni XXIII, 63, 24016 San Pellegrino Terme BG
24. **Albergo Relax di Razzetti C. Sas** — Aviatico
   - slug: `albergo-relax-di-razzetti-c-sas-aviatico`
   - indirizzo: Viale Passeggio, 50, 24020 Selvino BG
25. **B&B Casa Arcangeli** — Aviatico
   - slug: `b-b-casa-arcangeli-aviatico`
   - indirizzo: Via Madasco, 4, 24010 Bracca BG
26. **B&B COME UN TEMPO** — Aviatico
   - slug: `b-b-come-un-tempo-aviatico`
   - indirizzo: Via Chiesa, 9, 24010 Ascensione BG
27. **Borgo d'Oro Loft CIN:It016024c17jkcaxkv** — Aviatico
   - slug: `borgo-d-oro-loft-cin-it016024c17jkcaxkv-aviatico`
   - indirizzo: Via F. Corridoni, 4, 24124 Bergamo BG
28. **CableWayRoom Experience** — Aviatico
   - slug: `cablewayroom-experience-aviatico`
   - indirizzo: Via Aviatico, 24020 Selvino BG
29. **Harmony Suite Hotel** — Aviatico
   - slug: `harmony-suite-hotel-aviatico`
   - indirizzo: Corso Milano, 23, 24020 Selvino BG
30. **Hotel Belvedere** — Aviatico
   - slug: `hotel-belvedere-aviatico`
   - indirizzo: Via Cantul, 46, 24020 Aviatico BG
31. **Hotel Moderno Restaurant di Cavagna** — Aviatico
   - slug: `hotel-moderno-restaurant-di-cavagna-aviatico`
   - indirizzo: Piazza Umberto I 1, 5, 24017 Serina BG
32. **Phi Hotel Piajo** — Aviatico
   - slug: `phi-hotel-piajo-aviatico`
   - indirizzo: Via Piajo, 1, 24027 Nembro BG
33. **Serenella S.A.S.** — Aviatico
   - slug: `serenella-s-a-s-aviatico`
   - indirizzo: Via C. Battisti, 129, 24025 Gazzaniga BG
34. **SOL Y LUNA B&B** — Aviatico
   - slug: `sol-y-luna-b-b-aviatico`
   - indirizzo: Via Milano, 6, 24020 Aviatico BG
35. **T'Ami Hotel Resort Spa** — Aviatico
   - slug: `t-ami-hotel-resort-spa-aviatico`
   - indirizzo: Via Monte Purito, 3, 24020 Selvino BG