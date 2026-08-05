# Blocco 14/500 — 35 strutture senza descrizione IT

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

1. **Hotel Conte Ruggero** — Acquaro
   - slug: `hotel-conte-ruggero-acquaro`
   - indirizzo: Via Tenente Bruno Pisani, 1, 89822 Serra San Bruno VV
2. **Hotel Ristorante degli Amici** — Acquaro
   - slug: `hotel-ristorante-degli-amici-acquaro`
   - indirizzo: Via Armando Diaz, 32, 89823 Mongiana VV
3. **IL Vicoletto** — Acquaro
   - slug: `il-vicoletto-acquaro`
   - indirizzo: Corso Umberto I, 37, 89822 Serra San Bruno VV
4. **MASSERIA CAPORELLI B&B azienda agricola** — Acquaro
   - slug: `masseria-caporelli-b-b-azienda-agricola-acquaro`
   - indirizzo: Via I Maggio, 44, 89851 San Costantino Calabro VV
5. **Passo Del Falco S.R.L.** — Acquaro
   - slug: `passo-del-falco-s-r-l-acquaro`
   - indirizzo: Via Nazionale, 33, 89831 Fago-Savini VV
6. **Sonia e Alessia** — Acquaro
   - slug: `sonia-e-alessia-acquaro`
   - indirizzo: Via Ospedale, 130, 89852 Mileto VV
7. **Tenuta del Barone** — Acquaro
   - slug: `tenuta-del-barone-acquaro`
   - indirizzo: Str. Marzano, 89832 Dasà VV
8. **Agriturismo Il Roccolo** — Acquasanta Terme
   - slug: `agriturismo-il-roccolo-acquasanta-terme`
   - indirizzo: Frazione Pomaro, 15/A, 63095 Acquasanta Terme AP
9. **Agriturismo La Cittadella dei Sibillini** — Acquasanta Terme
   - slug: `agriturismo-la-cittadella-dei-sibillini-acquasanta-terme`
   - indirizzo: Loc. Cittadella, 63048 Montemonaco AP
10. **B&B Antico Borgo Piceno** — Acquasanta Terme
   - slug: `b-b-antico-borgo-piceno-acquasanta-terme`
   - indirizzo: Via S. Serafino da Montegranaro, 73, 63100 Ascoli Piceno AP
11. **B&B Il Giardino Segreto** — Acquasanta Terme
   - slug: `b-b-il-giardino-segreto-acquasanta-terme`
   - indirizzo: Via Pretoriana, 55, 63100 Ascoli Piceno AP
12. **B&B La Piazzetta** — Acquasanta Terme
   - slug: `b-b-la-piazzetta-acquasanta-terme`
   - indirizzo: Via Roma, 2Z, 63095 Acquasanta Terme AP
13. **B&B Mosca Bianca** — Acquasanta Terme
   - slug: `b-b-mosca-bianca-acquasanta-terme`
   - indirizzo: Località Castel Trosino, 9, 63100 Ascoli Piceno AP
14. **Di Sabatino Resort** — Acquasanta Terme
   - slug: `di-sabatino-resort-acquasanta-terme`
   - indirizzo: Corso Trento e Trieste, 25, 63100 Ascoli Piceno AP
15. **Dimora storica Castel di Luco** — Acquasanta Terme
   - slug: `dimora-storica-castel-di-luco-acquasanta-terme`
   - indirizzo: 63095 Luco AP
16. **Fattoria La Cona** — Acquasanta Terme
   - slug: `fattoria-la-cona-acquasanta-terme`
   - indirizzo: Frazione Monte di Rosara, 44 Località Coperso, 63100 Ascoli Piceno AP
17. **Hotel - Ristorante Tre Lanterne & SPA** — Acquasanta Terme
   - slug: `hotel-ristorante-tre-lanterne-spa-acquasanta-terme`
   - indirizzo: Frazione Cagnano, SNC, 63095 Acquasanta Terme AP
18. **Hotel B&B Cantina dell'Arte Ascoli Piceno** — Acquasanta Terme
   - slug: `hotel-b-b-cantina-dell-arte-ascoli-piceno-acquasanta-terme`
   - indirizzo: Rua Lupa, 8, 63100 Ascoli Piceno AP
19. **Hotel Palazzo Guiderocchi** — Acquasanta Terme
   - slug: `hotel-palazzo-guiderocchi-acquasanta-terme`
   - indirizzo: Via Cesare Battisti, 3, 63100 Ascoli Piceno AP
20. **Hotel Ristorante Monastero Valledacqua di Acquasante Terme** — Acquasanta Terme
   - slug: `hotel-ristorante-monastero-valledacqua-di-acquas-acquasanta-terme`
   - indirizzo: Località Valledacqua, 18, 63095 Acquasanta Terme AP
21. **La Fattoria dei Sibillini** — Acquasanta Terme
   - slug: `la-fattoria-dei-sibillini-acquasanta-terme`
   - indirizzo: Colleregnone, 6, 63088 Montemonaco AP
22. **Nella Torre Bed & Breakfast** — Acquasanta Terme
   - slug: `nella-torre-bed-breakfast-acquasanta-terme`
   - indirizzo: Via Delle Donne, 10, 63100 Ascoli Piceno AP
23. **Palazzo dei Mercanti - Dimora Storica** — Acquasanta Terme
   - slug: `palazzo-dei-mercanti-dimora-storica-acquasanta-terme`
   - indirizzo: Corso Trento e Trieste, 35, 63100 Ascoli Piceno AP
24. **Residenza dei Capitani** — Acquasanta Terme
   - slug: `residenza-dei-capitani-acquasanta-terme`
   - indirizzo: Piazza del Popolo ingresso, Via dei Tibaldeschi, 5, 63100 Ascoli Piceno AP
25. **Villa Giovannozzi** — Acquasanta Terme
   - slug: `villa-giovannozzi-acquasanta-terme`
   - indirizzo: Strada per Rosara Frazione Monte di, 63100 Rosara AP
26. **Agriturismo Canonici** — Acquasparta
   - slug: `agriturismo-canonici-acquasparta`
   - indirizzo: Strada di canonici, Sambuceto, di, 05022 Amelia TR
27. **AGRITURISMO LA CASA DI GELSOMINO** — Acquasparta
   - slug: `agriturismo-la-casa-di-gelsomino-acquasparta`
   - indirizzo: Località Cicognola, 417, 06056 Massa Martana PG
28. **Agriturismo Piano Grande** — Acquasparta
   - slug: `agriturismo-piano-grande-acquasparta`
   - indirizzo: Via S. Egidio, 44, 05020 Avigliano Umbro TR
29. **Antico Portale Bed & Breakfast e Guest House** — Acquasparta
   - slug: `antico-portale-bed-breakfast-e-guest-house-acquasparta`
   - indirizzo: Via Colonna, 13, 05021 Acquasparta TR
30. **B&B Il Pizzagiallo** — Acquasparta
   - slug: `b-b-il-pizzagiallo-acquasparta`
   - indirizzo: Località Rottomario, 49, 06056 Massa Martana PG
31. **Bar Albergo Martini** — Acquasparta
   - slug: `bar-albergo-martini-acquasparta`
   - indirizzo: Via Guglielmo Marconi, 26, 05021 Acquasparta TR
32. **Bed & Breakfast Le Cerque** — Acquasparta
   - slug: `bed-breakfast-le-cerque-acquasparta`
   - indirizzo: Viale Cerquestrette, 210/A, 06049 San Martino In Trignano PG
33. **Borgo delle Mole** — Acquasparta
   - slug: `borgo-delle-mole-acquasparta`
   - indirizzo: Via Acquasparta, 4, 06049 Spoleto PG
34. **Casale del Monsignore** — Acquasparta
   - slug: `casale-del-monsignore-acquasparta`
   - indirizzo: Frazione Uncinano, 38, 06049 Spoleto PG
35. **Hotel DUE STELLE** — Acquasparta
   - slug: `hotel-due-stelle-acquasparta`
   - indirizzo: Via Don Vincenzo Cavalletti, 39, 05026 Farnetta TR