# Blocco 35/500 — 35 strutture senza descrizione IT

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

1. **B&B Ca' Teonghio** — Agugliaro
   - slug: `b-b-ca-teonghio-agugliaro`
   - indirizzo: Via Teonghio, 128, 36040 Orgiano VI
2. **B&B LA MARTINA** — Agugliaro
   - slug: `b-b-la-martina-agugliaro`
   - indirizzo: CIN:IT024001C1GMBRELKV, Via Madona Monte Berico, 1, 36020 Agugliaro VI
3. **B&B Locanda al Sole** — Agugliaro
   - slug: `b-b-locanda-al-sole-agugliaro`
   - indirizzo: Piazza Liberazione, 200, 35030 Vo' PD
4. **b&b-kiwi** — Agugliaro
   - slug: `b-b-kiwi-agugliaro`
   - indirizzo: Via Ponte Alto, 2, 36020 Agugliaro VI
5. **Bed&Bike.Belfiore** — Agugliaro
   - slug: `bed-bike-belfiore-agugliaro`
   - indirizzo: V. Belfiore, 2, 35044 Montagnana PD
6. **Casa Agricola Amicizia** — Agugliaro
   - slug: `casa-agricola-amicizia-agugliaro`
   - indirizzo: Via Conche, 6, 36026 Pojana Maggiore VI
7. **Fattoria Busa dell'Oro B&B** — Agugliaro
   - slug: `fattoria-busa-dell-oro-b-b-agugliaro`
   - indirizzo: Via Chiesa Tramonte, 18, 35037 Teolo PD
8. **Hotel alla Busa** — Agugliaro
   - slug: `hotel-alla-busa-agugliaro`
   - indirizzo: Via Giacomo Matteotti, 70, 36025 Noventa Vicentina VI
9. **Hotel Aqua Crua** — Agugliaro
   - slug: `hotel-aqua-crua-agugliaro`
   - indirizzo: P.za Calcalusso, 11/B, 36048 Barbarano Vicentino VI
10. **Hotel Centrale d'Este** — Agugliaro
   - slug: `hotel-centrale-d-este-agugliaro`
   - indirizzo: Piazza Beata Beatrice, 15, 35042 Este PD
11. **Hotel Noventa** — Agugliaro
   - slug: `hotel-noventa-agugliaro`
   - indirizzo: Via Migliadizzi, 12/B, 36025 Noventa Vicentina VI
12. **Hotel Ristorante da Romagnolo** — Agugliaro
   - slug: `hotel-ristorante-da-romagnolo-agugliaro`
   - indirizzo: Via Pietro Milani, 62/c, 36025 Noventa Vicentina VI
13. **Le Volpi Wine Relais** — Agugliaro
   - slug: `le-volpi-wine-relais-agugliaro`
   - indirizzo: Via Gemola, 14, 35030 Baone PD
14. **Locanda di Cornoleda** — Agugliaro
   - slug: `locanda-di-cornoleda-agugliaro`
   - indirizzo: Via Cornoleda, 30, 35030 Cornoleda PD
15. **Tenuta Gambalonga Residence** — Agugliaro
   - slug: `tenuta-gambalonga-residence-agugliaro`
   - indirizzo: Via Cavalcaressa, 12, 35030 Cinto Euganeo PD
16. **Villa De' Giacomi - Suites, SPA, Relax -** — Agugliaro
   - slug: `villa-de-giacomi-suites-spa-relax-agugliaro`
   - indirizzo: Via Tito Livio, 7, 35037 Teolo PD
17. **039 Maggioni B&B** — Aicurzio
   - slug: `039-maggioni-b-b-aicurzio`
   - indirizzo: Via Belvedere, 28, 23874 Montevecchia LC
18. **Albergo e Sala Eventi Busnago - Hotel Ristorante Pianura Inn** — Aicurzio
   - slug: `albergo-e-sala-eventi-busnago-hotel-ristorante-p-aicurzio`
   - indirizzo: Viale Lombardia, 21, 20874 Busnago MB
19. **B&B HOTELS Hotel Prestige Ornago** — Aicurzio
   - slug: `b-b-hotels-hotel-prestige-ornago-aicurzio`
   - indirizzo: Via Bellusco, 10, 20876 Ornago MB
20. **B&B La Casetta Cambiago** — Aicurzio
   - slug: `b-b-la-casetta-cambiago-aicurzio`
   - indirizzo: Via Cavour, 41, 20040 Cambiago MI
21. **B&B Villa Carolina** — Aicurzio
   - slug: `b-b-villa-carolina-aicurzio`
   - indirizzo: Via Europa, 2, 20056 Grezzago MI
22. **bbbolbrianza** — Aicurzio
   - slug: `bbbolbrianza-aicurzio`
   - indirizzo: Molino Cazzaniga, 12, 23873 Missaglia LC
23. **Elysium Hotel Self Check-In a Trezzo sull’Adda** — Aicurzio
   - slug: `elysium-hotel-self-check-in-a-trezzo-sull-adda-aicurzio`
   - indirizzo: Viale Lombardia, 70, 20056 Trezzo sull'Adda MI
24. **Energy Park Hotel** — Aicurzio
   - slug: `energy-park-hotel-aicurzio`
   - indirizzo: Via Trento, 32, 20871 Vimercate MB
25. **Euro Hotel Residence** — Aicurzio
   - slug: `euro-hotel-residence-aicurzio`
   - indirizzo: Via Monza, 27, 20863 Concorezzo MB
26. **Hotel Albergo Ristorante "Etrusco"** — Aicurzio
   - slug: `hotel-albergo-ristorante-etrusco-aicurzio`
   - indirizzo: Via Monastero dei Verghi, 166, 24033 Calusco d'Adda BG
27. **Hotel Albergo Valentino** — Aicurzio
   - slug: `hotel-albergo-valentino-aicurzio`
   - indirizzo: Via Dante, 1, 20882 Bellusco MB
28. **Hotel la bergamina** — Aicurzio
   - slug: `hotel-la-bergamina-aicurzio`
   - indirizzo: Via Bergamina, 64, 20862 Arcore MB
29. **Hotel Polo** — Aicurzio
   - slug: `hotel-polo-aicurzio`
   - indirizzo: Via Gaetano Donizetti, 1, 20865 Usmate Velate MB
30. **Hotel Sirio** — Aicurzio
   - slug: `hotel-sirio-aicurzio`
   - indirizzo: Via Cesare Battisti, 30, 24030 Medolago BG
31. **La Corte Guesthouse - Appartamento con Giardino privato** — Aicurzio
   - slug: `la-corte-guesthouse-appartamento-con-giardino-pr-aicurzio`
   - indirizzo: Via Giacomo Matteotti, 20872 Cornate d'Adda MB
32. **La Molgora Hotel** — Aicurzio
   - slug: `la-molgora-hotel-aicurzio`
   - indirizzo: Via Alessandro Volta, 16, 23870 Cernusco Lombardone LC
33. **Melas Hotel** — Aicurzio
   - slug: `melas-hotel-aicurzio`
   - indirizzo: Via Bergamo, 37, 23807 Merate LC
34. **RistHotel Pianura Inn** — Aicurzio
   - slug: `risthotel-pianura-inn-aicurzio`
   - indirizzo: Viale Lombardia, 21, 20874 Busnago MB
35. **Agriturismo Pialza** — Aidomaggiore
   - slug: `agriturismo-pialza-aidomaggiore`
   - indirizzo: Strada Pialza, 08018 Sindia NU