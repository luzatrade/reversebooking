# Blocco 306/500 — 35 strutture senza descrizione IT

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

1. **Il Cantoniere** — Bormida
   - slug: `il-cantoniere-bormida`
   - indirizzo: SP490, 31, 17020 Melogno SV
2. **La Brinetta - Agriturismo** — Bormida
   - slug: `la-brinetta-agriturismo-bormida`
   - indirizzo: Regione Frassino, 84, 17020 Calizzano SV
3. **La Patataia Home** — Bormida
   - slug: `la-patataia-home-bormida`
   - indirizzo: Pallare SV IT, Loc Costa, 3/4, 17043 Bormida SV
4. **Relais Il Casale** — Bormida
   - slug: `relais-il-casale-bormida`
   - indirizzo: Via Briffi, 22, 17020 Tovo San Giacomo SV
5. **Sotto il Santo** — Bormida
   - slug: `sotto-il-santo-bormida`
   - indirizzo: Piazza Avvocato Luigi Basso, 2, 17020 Costa-villa SV
6. **Trattoria Locanda Piemontese** — Bormida
   - slug: `trattoria-locanda-piemontese-bormida`
   - indirizzo: Piazza Massa, 4, 17020 Calice Ligure SV
7. **Villaggio Turistico "Tecciu' di Cuppi"** — Bormida
   - slug: `villaggio-turistico-tecciu-di-cuppi-bormida`
   - indirizzo: Via Inavecchia, 6R, 17020 Canova SV
8. **Albergo Dante** — Bormio
   - slug: `albergo-dante-bormio`
   - indirizzo: Via Trieste, 2, 23032 Bormio SO
9. **Albergo Gufo** — Bormio
   - slug: `albergo-gufo-bormio`
   - indirizzo: Via Roma, 107, 23032 Bormio SO
10. **Albergo Silene** — Bormio
   - slug: `albergo-silene-bormio`
   - indirizzo: Via Roma, 121, 23032 Bormio SO
11. **Albergo Stelvio** — Bormio
   - slug: `albergo-stelvio-bormio`
   - indirizzo: Via della Vittoria, 36, 23032 Bormio SO
12. **Ambassador Bormio | Hotel Restaurant Wine bar on Stelvio Slope** — Bormio
   - slug: `ambassador-bormio-hotel-restaurant-wine-bar-on-s-bormio`
   - indirizzo: Via Funivia, 29, 23032 Bormio SO
13. **B&B Baita de Eliseo** — Bormio
   - slug: `b-b-baita-de-eliseo-bormio`
   - indirizzo: Via Dosso, 5/b, 23030 Santa Lucia SO
14. **Eden Hotel** — Bormio
   - slug: `eden-hotel-bormio`
   - indirizzo: Via Funivia, 3, 23032 Bormio SO
15. **Elga Residence - Relax in Alta Valtellina** — Bormio
   - slug: `elga-residence-relax-in-alta-valtellina-bormio`
   - indirizzo: Via Nazionale, 31, 23030 Valdisotto SO
16. **Holiday House Erika** — Bormio
   - slug: `holiday-house-erika-bormio`
   - indirizzo: Via ai Forni, 4, 23038 Premadio SO
17. **Hotel Albergo Giardino** — Bormio
   - slug: `hotel-albergo-giardino-bormio`
   - indirizzo: Via Per Piatta, 11, 23032 Bormio SO
18. **Hotel Capitani** — Bormio
   - slug: `hotel-capitani-bormio`
   - indirizzo: Via Milano, 23, 23032 Bormio SO
19. **Hotel Palace Bormio** — Bormio
   - slug: `hotel-palace-bormio-bormio`
   - indirizzo: Via Milano, 54, 23032 Bormio SO
20. **Hotel Residence 3 Signori - Ski & Bike Spa Resort** — Bormio
   - slug: `hotel-residence-3-signori-ski-bike-spa-resort-bormio`
   - indirizzo: Via Vedich, 17, 23030 Valfurva SO
21. **Hotel San Carlo, tra Bormio e Livigno** — Bormio
   - slug: `hotel-san-carlo-tra-bormio-e-livigno-bormio`
   - indirizzo: Via le ponti, 96, 23038 San Carlo SO
22. **Hotel Terme Bormio** — Bormio
   - slug: `hotel-terme-bormio-bormio`
   - indirizzo: Via Ulrico Martinelli, 6, 23032 Bormio SO
23. **Hotel Vallecetta** — Bormio
   - slug: `hotel-vallecetta-bormio`
   - indirizzo: Via Milano, 107, 23032 Bormio SO
24. **Hotel Vallechiara Bormio** — Bormio
   - slug: `hotel-vallechiara-bormio-bormio`
   - indirizzo: Località Ciuk, 10, 23030 Bormio SO
25. **Hotel Villa Rina** — Bormio
   - slug: `hotel-villa-rina-bormio`
   - indirizzo: Via Milano, 77, 23032 Bormio SO
26. **Olimpia Hotel** — Bormio
   - slug: `olimpia-hotel-bormio`
   - indirizzo: Via Funivia, 39, 23032 Bormio SO
27. **Residence Fior d'Alpe** — Bormio
   - slug: `residence-fior-d-alpe-bormio`
   - indirizzo: Via Madonnina, 6, 23038 Valdidentro SO
28. **Albergo Pizzeria La Fortuna** — Bornasco
   - slug: `albergo-pizzeria-la-fortuna-bornasco`
   - indirizzo: Via Vigentina, 5, 27010 Siziano PV
29. **Albergo San Fermo Meublè** — Borno
   - slug: `albergo-san-fermo-meuble-borno`
   - indirizzo: Via Vittorio Veneto, 73, 25042 Borno BS
30. **Bed & Breakfast Zanaglio** — Borno
   - slug: `bed-breakfast-zanaglio-borno`
   - indirizzo: Via Trieste, n 3, 25042 Borno BS
31. **Hotel Valle D'Oro** — Borno
   - slug: `hotel-valle-d-oro-borno`
   - indirizzo: Via Funivia, 26, 25042 Borno BS
32. **L'Invòlt Mountain Lodge** — Borno
   - slug: `l-involt-mountain-lodge-borno`
   - indirizzo: Vicolo Creppi, 3, 25042 Borno BS
33. **La Portineria Luxury B&B** — Borno
   - slug: `la-portineria-luxury-b-b-borno`
   - indirizzo: Via Montello, 1a, 25052 Piamborno BS
34. **.** — Boroneddu
   - slug: `struttura-boroneddu`
   - indirizzo: Via Monsignor B. Zucca, 27, 09074 Ghilarza OR
35. **B&B Il Tratturo** — Borrello
   - slug: `b-b-il-tratturo-borrello`
   - indirizzo: Corso S. Rocco, 60, 86088 San Pietro Avellana IS