# Blocco 332/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo & Azienda Agricola "Il Granaio"** — Brugherio
   - slug: `agriturismo-azienda-agricola-il-granaio-brugherio`
   - indirizzo: Via Arcangelo Corelli, 15, 20037 Paderno Dugnano MI
2. **Agriturismo Cascina Fogliana** — Brugherio
   - slug: `agriturismo-cascina-fogliana-brugherio`
   - indirizzo: Via Cascina Fogliana, 20060 Cassina de' Pecchi MI
3. **Agriturismo Cascina Nibai** — Brugherio
   - slug: `agriturismo-cascina-nibai-brugherio`
   - indirizzo: Via Al Cavarott, 11, 20063 Cernusco sul Naviglio MI
4. **Agriturismo da Pippo** — Brugherio
   - slug: `agriturismo-da-pippo-brugherio`
   - indirizzo: Piazza Grassi, 3, 20090 Cassignanica MI
5. **Agriturismo La Torrazza** — Brugherio
   - slug: `agriturismo-la-torrazza-brugherio`
   - indirizzo: Via G. Matteotti, 2C, 20040 Cambiago MI
6. **B&B La Casa dei Sogni** — Brugherio
   - slug: `b-b-la-casa-dei-sogni-brugherio`
   - indirizzo: Via Marmolada, 15, 20861 Brugherio MB
7. **B&B Villa Aurora** — Brugherio
   - slug: `b-b-villa-aurora-brugherio`
   - indirizzo: Via Carlo Cattaneo, 18, 20861 Brugherio MB
8. **B&B Villa Lodigiana** — Brugherio
   - slug: `b-b-villa-lodigiana-brugherio`
   - indirizzo: Via Lodigiana, 83, 20861 Brugherio MB
9. **B&B Villa Luisa** — Brugherio
   - slug: `b-b-villa-luisa-brugherio`
   - indirizzo: Via Moia, 30, 20861 Brugherio MB
10. **Co.A.Fra. (Società Agricola Cooperativa Sociale ) Agriturismo biologico spaccio** — Brugherio
   - slug: `co-a-fra-societa-agricola-cooperativa-sociale-ag-brugherio`
   - indirizzo: Cascina Nibai, 5, 20063 Cernusco sul Naviglio MI
11. **GUEST HOUSE Top Suit Uno** — Brugherio
   - slug: `guest-house-top-suit-uno-brugherio`
   - indirizzo: Via S. Maurizio Al Lambro, 3, 20861 Brugherio MB
12. **Hotel Sporting Brugherio** — Brugherio
   - slug: `hotel-sporting-brugherio-brugherio`
   - indirizzo: Via Santa Caterina da Siena, 35, 20861 Brugherio MB
13. **La rondine B&B** — Brugherio
   - slug: `la-rondine-b-b-brugherio`
   - indirizzo: Via Vittorio Veneto, 14, 20861 Brugherio MB
14. **Hotel Da Regina** — Brugine
   - slug: `hotel-da-regina-brugine`
   - indirizzo: Via Alto Adige, 73, 30010 Campolongo Maggiore VE
15. **Point Hotel** — Brugine
   - slug: `point-hotel-brugine`
   - indirizzo: Via Adige, 2/A, 35028 Piove di Sacco PD
16. **TokiTakai** — Brugine
   - slug: `tokitakai-brugine`
   - indirizzo: Piazza A. de Gasperi, 32a/scala b piano 1, 35131 Padova PD
17. **Affittacamere La Valle Fiorita** — Brugnato
   - slug: `affittacamere-la-valle-fiorita-brugnato`
   - indirizzo: Via Gaggiola, 518/B, 19020 Pignone SP
18. **Affittacamere SveMilla** — Brugnato
   - slug: `affittacamere-svemilla-brugnato`
   - indirizzo: Via Borgo San Bernardo, n° 11, 19020 Brugnato SP
19. **Albergo dei Tigli** — Brugnato
   - slug: `albergo-dei-tigli-brugnato`
   - indirizzo: Via S. Lazzaro, 23, 19020 Brugnato SP
20. **Ca’ Da Flora** — Brugnato
   - slug: `ca-da-flora-brugnato`
   - indirizzo: Via Costantini, 3, 19020 Brugnato SP
21. **Il Vecchio Noce** — Brugnato
   - slug: `il-vecchio-noce-brugnato`
   - indirizzo: Via Bionda, 1, 19020 Brugnato SP
22. **La Bordigona . CIN IT01101013LJW8LWR** — Brugnato
   - slug: `la-bordigona-cin-it01101013ljw8lwr-brugnato`
   - indirizzo: Località Bordigona, 19020 Località Bordigona SP
23. **La Casa Torre** — Brugnato
   - slug: `la-casa-torre-brugnato`
   - indirizzo: Via Piaggio S, n.c, 19020 Pignone SP
24. **Agriturismo El Sesterzio** — Brugnera
   - slug: `agriturismo-el-sesterzio-brugnera`
   - indirizzo: Via Masotti, 21/C, 31046 Oderzo TV
25. **Albergo Al Castello** — Brugnera
   - slug: `albergo-al-castello-brugnera`
   - indirizzo: Via Zat Sereno, 1, 33070 Caneva PN
26. **Albergo Due Fiumi** — Brugnera
   - slug: `albergo-due-fiumi-brugnera`
   - indirizzo: Via Bertolissi, 35, 33077 Sacile PN
27. **B & B Dante pordenone** — Brugnera
   - slug: `b-b-dante-pordenone-brugnera`
   - indirizzo: Viale Dante, 19, 33084 Pordenone PN
28. **B&B Lo Schiaccianoci** — Brugnera
   - slug: `b-b-lo-schiaccianoci-brugnera`
   - indirizzo: Via Casut, 163, 33074 Casut PN
29. **Ca' Premuda | Locazione Codognè** — Brugnera
   - slug: `ca-premuda-locazione-codogne-brugnera`
   - indirizzo: Via Scuole, 23, 31013 Roverbasso TV
30. **Casa Carrer B&B** — Brugnera
   - slug: `casa-carrer-b-b-brugnera`
   - indirizzo: Str. Valle Brugnera, 7, 33077 Sacile PN
31. **Hotel Luna_hotel pordenone** — Brugnera
   - slug: `hotel-luna-hotel-pordenone-brugnera`
   - indirizzo: Via B. Osoppo, 127, 33074 Fontanafredda PN
32. **Hotel Purlilium** — Brugnera
   - slug: `hotel-purlilium-brugnera`
   - indirizzo: Via Bagnador, 5, 33080 Porcia PN
33. **Il Giardino Segreto** — Brugnera
   - slug: `il-giardino-segreto-brugnera`
   - indirizzo: Via G. Garibaldi, 81, 33077 Sacile PN
34. **Le Favole Agriturismo B&B** — Brugnera
   - slug: `le-favole-agriturismo-b-b-brugnera`
   - indirizzo: Via Ronche, 92, 33077 Sacile PN
35. **Villa Ca' Damiani Rooms & Apartments** — Brugnera
   - slug: `villa-ca-damiani-rooms-apartments-brugnera`
   - indirizzo: Via Vittorio Veneto, 5, 33070 Caneva PN