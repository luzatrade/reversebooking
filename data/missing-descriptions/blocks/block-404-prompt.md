# Blocco 404/500 — 35 strutture senza descrizione IT

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

1. **B&B La Corte** — Candiolo
   - slug: `b-b-la-corte-candiolo`
   - indirizzo: Via Roma, 5, 10060 Candiolo TO
2. **Cascina La Villa** — Candiolo
   - slug: `cascina-la-villa-candiolo`
   - indirizzo: Corso Vinovo, 191, 10041 Carignano TO
3. **La Locanda del Nocciolo** — Candiolo
   - slug: `la-locanda-del-nocciolo-candiolo`
   - indirizzo: Località Chiarene, 4, 12060 Novello CN
4. **AS Hotel Sempione Fiera** — Canegrate
   - slug: `as-hotel-sempione-fiera-canegrate`
   - indirizzo: SS33 del Sempione, 320, 20028 San Vittore Olona MI
5. **B&B Ca' dell'Angelo** — Canegrate
   - slug: `b-b-ca-dell-angelo-canegrate`
   - indirizzo: Largo S. Angelo, 9, 20039 Canegrate MI
6. **B&B Corte dei Fratus** — Canegrate
   - slug: `b-b-corte-dei-fratus-canegrate`
   - indirizzo: Via S. Gaetano, 3, 20025 Legnano MI
7. **Expo Hotel Milan** — Canegrate
   - slug: `expo-hotel-milan-canegrate`
   - indirizzo: Via Achille Grandi, 4, 20015 Parabiago MI
8. **Hotel del Riale** — Canegrate
   - slug: `hotel-del-riale-canegrate`
   - indirizzo: Via S. Giuseppe, 1, 20015 Parabiago MI
9. **Ristorante e Hotel Locanda del Villoresi** — Canegrate
   - slug: `ristorante-e-hotel-locanda-del-villoresi-canegrate`
   - indirizzo: SS33 del Sempione, 4, 20014 Nerviano MI
10. **Agriturismo La Luna E I Falo** — Canelli
   - slug: `agriturismo-la-luna-e-i-falo-canelli`
   - indirizzo: Regione Aie, 37, 14053 Canelli AT
11. **B&B Ca 'nsel Bric** — Canelli
   - slug: `b-b-ca-nsel-bric-canelli`
   - indirizzo: Str. Castellero, 34, 14053 Canelli AT
12. **B&B Cascina Frati** — Canelli
   - slug: `b-b-cascina-frati-canelli`
   - indirizzo: Via Commendatore Lazzaro Bocchino, 23, 14053 Canelli AT
13. **Bed and Breakfast View & Wine Asti** — Canelli
   - slug: `bed-and-breakfast-view-wine-asti-canelli`
   - indirizzo: Costa Belvedere, 14053 Canelli AT
14. **Camere Centro Storico** — Canelli
   - slug: `camere-centro-storico-canelli`
   - indirizzo: Via XX Settembre, 14, piazza Amedeo d'Aosta, 26, 14053 Canelli AT
15. **Hotel Ristorante Grappolo d'Oro** — Canelli
   - slug: `hotel-ristorante-grappolo-d-oro-canelli`
   - indirizzo: Viale Risorgimento, 59/61, 14053 Canelli AT
16. **L'aja della Mirusina - Piedmont Resort Monferrato Langhe** — Canelli
   - slug: `l-aja-della-mirusina-piedmont-resort-monferrato-canelli`
   - indirizzo: Regione S. Giovanni, 110, 14053 Canelli AT
17. **Relais Villa Del Borgo** — Canelli
   - slug: `relais-villa-del-borgo-canelli`
   - indirizzo: Via Castello, 1, 14053 Canelli AT
18. **Agriturismo Casal Grande** — Canepina
   - slug: `agriturismo-casal-grande-canepina`
   - indirizzo: Strada Canepina - Soriano, 2, 01030 Canepina VT
19. **Agriturismo Villa Amerina** — Canepina
   - slug: `agriturismo-villa-amerina-canepina`
   - indirizzo: Contrada Cardelli, 01030 Corchiano VT
20. **B&B All’Ombra della Torre** — Canepina
   - slug: `b-b-all-ombra-della-torre-canepina`
   - indirizzo: Via Alberto Cencelli, 21, 01034 Fabrica di Roma VT
21. **Balletti Park Hotel** — Canepina
   - slug: `balletti-park-hotel-canepina`
   - indirizzo: Via Umbria, 2/a, 01100 San Martino Al Cimino VT
22. **Bed & Breakfast LA ROCCA** — Canepina
   - slug: `bed-breakfast-la-rocca-canepina`
   - indirizzo: Piazza Romeo Romei, 8, 01032 Caprarola VT
23. **Hotel Mini Palace** — Canepina
   - slug: `hotel-mini-palace-canepina`
   - indirizzo: Via Santa Maria della Grotticella, 2b, 01100 Viterbo VT
24. **il Caravaggio b&b** — Canepina
   - slug: `il-caravaggio-b-b-canepina`
   - indirizzo: Via Nino Bixio, 4, 01032 Caprarola VT
25. **Palazzo Alessandrini guest house** — Canepina
   - slug: `palazzo-alessandrini-guest-house-canepina`
   - indirizzo: Via Borgolungo, 50, 01100 Viterbo VT
26. **B&B DolcePosada -Vittorio Veneto - Via Sant'Andrea 25** — Caneva
   - slug: `b-b-dolceposada-vittorio-veneto-via-sant-andrea-caneva`
   - indirizzo: Via Sant'Andrea, 25, 31029 Vittorio Veneto TV
27. **B&B HOTEL Eurorest Conegliano** — Caneva
   - slug: `b-b-hotel-eurorest-conegliano-caneva`
   - indirizzo: Viale Italia, 329, 31015 Conegliano TV
28. **Hotel Cristallo** — Caneva
   - slug: `hotel-cristallo-caneva`
   - indirizzo: Via G. Mazzini, 45, 31015 Conegliano TV
29. **Hotel Dall'Ongaro** — Caneva
   - slug: `hotel-dall-ongaro-caneva`
   - indirizzo: Piazza G. Mazzini, 41, 33080 Prata di Pordenone PN
30. **Prealpi Hotel** — Caneva
   - slug: `prealpi-hotel-caneva`
   - indirizzo: Via Venezia, 7, 31020 San Vendemiano TV
31. **Tenuta Malvolti - Al Vecchio Convento** — Caneva
   - slug: `tenuta-malvolti-al-vecchio-convento-caneva`
   - indirizzo: Via Poloni, 7, 31020 Castello Roganzuolo TV
32. **Villa Toderini** — Caneva
   - slug: `villa-toderini-caneva`
   - indirizzo: Via Roma, 4/A, 31013 Codogné TV
33. **Wyndham Garden Conegliano** — Caneva
   - slug: `wyndham-garden-conegliano-caneva`
   - indirizzo: Via Angelo Parrilla, 1, 31015 Conegliano TV
34. **Agrimilo** — Canicattini Bagni
   - slug: `agrimilo-canicattini-bagni`
   - indirizzo: Contrada Piano Milo, 96017 Noto SR
35. **Agriturismo Don Mauro** — Canicattini Bagni
   - slug: `agriturismo-don-mauro-canicattini-bagni`
   - indirizzo: Via Cugno Canne, 19, 96014 Floridia SR