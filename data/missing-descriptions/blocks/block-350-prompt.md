# Blocco 350/500 — 35 strutture senza descrizione IT

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

1. **R&B Il Principe** — Butera
   - slug: `r-b-il-principe-butera`
   - indirizzo: Via Principe Amedeo, 21, 92029 Ravanusa AG
2. **Riviera Village** — Butera
   - slug: `riviera-village-butera`
   - indirizzo: Contrada Desusino, 93011 Butera CL
3. **Sabbie d'oro** — Butera
   - slug: `sabbie-d-oro-butera`
   - indirizzo: Via delle Magnolie, 14, 93012 Lido Manfria CL
4. **Serenusa Resort** — Butera
   - slug: `serenusa-resort-butera`
   - indirizzo: SS115, 92027 Licata AG
5. **Sikania Eco Resort** — Butera
   - slug: `sikania-eco-resort-butera`
   - indirizzo: Via delle Ginestre, 93011 Marina di Butera, CL
6. **VELA VEGA Eco Hostel** — Butera
   - slug: `vela-vega-eco-hostel-butera`
   - indirizzo: 435X+GP, Via Delle Ginestre, SN, 93011 Butera CL
7. **Affittacamere Casa Vacanze “VILLA GIOVANNA”** — Buti
   - slug: `affittacamere-casa-vacanze-villa-giovanna-buti`
   - indirizzo: Via della Pieve, 5, 55062 Pieve di Compito LU
8. **Agriturismo Cima alla Serra - Agriturismo con piscina Pisa** — Buti
   - slug: `agriturismo-cima-alla-serra-agriturismo-con-pisc-buti`
   - indirizzo: Località Cima alla Serra, 56032 Buti PI
9. **Agriturismo San Bastiano** — Buti
   - slug: `agriturismo-san-bastiano-buti`
   - indirizzo: Via Piana, 56032 Buti PI
10. **B&B Cindy** — Buti
   - slug: `b-b-cindy-buti`
   - indirizzo: Via Renzo Giusti, 152, 56023 Navacchio PI
11. **Bed and Breakfast San Francesco** — Buti
   - slug: `bed-and-breakfast-san-francesco-buti`
   - indirizzo: Vicolo S. Francesco, 2, 56032 Buti PI
12. **Damilù** — Buti
   - slug: `damilu-buti`
   - indirizzo: Via Vecchia di Ruota, 13 b, 55012 Capannori LU
13. **Il Vecchio Frantoio** — Buti
   - slug: `il-vecchio-frantoio-buti`
   - indirizzo: Via del Campaccio, 8, 56032 Buti PI
14. **L'artè** — Buti
   - slug: `l-arte-buti`
   - indirizzo: Via Tosco Romagnola, 1047, 56021 Cascina PI
15. **La Casa di Jo** — Buti
   - slug: `la-casa-di-jo-buti`
   - indirizzo: Via Giulio Pastore, 31, 56023 Cascina PI
16. **Pietra d'Acqua** — Buti
   - slug: `pietra-d-acqua-buti`
   - indirizzo: v Provinciale del monte Serra, 9, 56032 Buti PI
17. **Villa Fiona** — Buti
   - slug: `villa-fiona-buti`
   - indirizzo: Località Le Risaie, 1, 56010 Vicopisano PI
18. **Villa Sii Felice** — Buti
   - slug: `villa-sii-felice-buti`
   - indirizzo: Loc. Finocchietto Cima la Serra, 56032 Buti PI
19. **VillinoGlicine** — Buti
   - slug: `villinoglicine-buti`
   - indirizzo: Località Belvedere, 2, 56010 Vicopisano PI
20. **Affittacamere Borgo Roma** — Buttapietra
   - slug: `affittacamere-borgo-roma-buttapietra`
   - indirizzo: Via Scuderlando, 355, 37135 Verona VR
21. **Agriturismo Corte all'Olmo** — Buttapietra
   - slug: `agriturismo-corte-all-olmo-buttapietra`
   - indirizzo: Via Belfiore, 248, 37135 Verona VR
22. **Albergo Bar Magnano** — Buttapietra
   - slug: `albergo-bar-magnano-buttapietra`
   - indirizzo: Via Magnano, 18, 37060 Buttapietra VR
23. **Antica Locanda Al Magnano (S.R.L.)** — Buttapietra
   - slug: `antica-locanda-al-magnano-s-r-l-buttapietra`
   - indirizzo: Via Magnano, 18, 37060 Buttapietra VR
24. **B&B Villa Verona Bike** — Buttapietra
   - slug: `b-b-villa-verona-bike-buttapietra`
   - indirizzo: Viale della Stazione, 26, 37060 Buttapietra VR
25. **Camping Verona Village** — Buttapietra
   - slug: `camping-verona-village-buttapietra`
   - indirizzo: Via Forte Tomba, 44, 37135 Verona VR
26. **Gabrielli Rooms & Apartments** — Buttapietra
   - slug: `gabrielli-rooms-apartments-buttapietra`
   - indirizzo: Viale della Fiera, 6, 37136 Verona VR
27. **Hotel Brigafatta** — Buttapietra
   - slug: `hotel-brigafatta-buttapietra`
   - indirizzo: Via Zambonina, 76, 37068 Corte Brigafatta Nuova VR
28. **Hotel Catullo** — Buttapietra
   - slug: `hotel-catullo-buttapietra`
   - indirizzo: Viale del Lavoro, 35, 37036 San Martino Buon Albergo VR
29. **Hotel Europa** — Buttapietra
   - slug: `hotel-europa-buttapietra`
   - indirizzo: Viale Europa, 63, 37062 Dossobuono VR
30. **Hotel Monaco** — Buttapietra
   - slug: `hotel-monaco-buttapietra`
   - indirizzo: Via Evangelista Torricelli, 4, 37135 Verona VR
31. **HOTEL PEX VERONA** — Buttapietra
   - slug: `hotel-pex-verona-buttapietra`
   - indirizzo: Via Evangelista Torricelli, 4, 37135 Verona VR
32. **Hotel Postumia** — Buttapietra
   - slug: `hotel-postumia-buttapietra`
   - indirizzo: Via Cavour, 71, 37062 Dossobuono VR
33. **LA PERGOLA SUITES** — Buttapietra
   - slug: `la-pergola-suites-buttapietra`
   - indirizzo: Via Cavour, 96, 37062 Dossobuono VR
34. **Montemezzi hotel** — Buttapietra
   - slug: `montemezzi-hotel-buttapietra`
   - indirizzo: Via Verona, 92, 37068 Vigasio VR
35. **The Little Lake Verona Villa B&B** — Buttapietra
   - slug: `the-little-lake-verona-villa-b-b-buttapietra`
   - indirizzo: Via Tunisi, 14, 37060 Buttapietra VR