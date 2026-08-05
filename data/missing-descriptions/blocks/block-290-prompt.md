# Blocco 290/500 — 35 strutture senza descrizione IT

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

1. **Hotel Ristorante Pizzeria PEDA - Colletorto** — Bonefro
   - slug: `hotel-ristorante-pizzeria-peda-colletorto-bonefro`
   - indirizzo: Via Carlo Alberto Dalla Chiesa, 11/17, 86044 Colletorto CB
2. **Hotel SantoIanni** — Bonefro
   - slug: `hotel-santoianni-bonefro`
   - indirizzo: Via Tremiti, 2, 86046 San Martino in Pensilis CB
3. **I Casali di Colle Monte - Agriturismo in Molise** — Bonefro
   - slug: `i-casali-di-colle-monte-agriturismo-in-molise-bonefro`
   - indirizzo: Contrada Colle Monte, 1, 86040 San Giuliano di Puglia CB
4. **La Locanda del Buongustaio** — Bonefro
   - slug: `la-locanda-del-buongustaio-bonefro`
   - indirizzo: Via Piè la Terra, 32, 86041 Bonefro CB
5. **Masseria Le Piane** — Bonefro
   - slug: `masseria-le-piane-bonefro`
   - indirizzo: Via Colloredo, 86042 Campomarino CB
6. **Pianisi Albergo** — Bonefro
   - slug: `pianisi-albergo-bonefro`
   - indirizzo: Via Pilone, 20, 86048 Sant'Elia a Pianisi CB
7. **Residenza bonefrana** — Bonefro
   - slug: `residenza-bonefrana-bonefro`
   - indirizzo: SP63, 166, 86041 Bonefro CB
8. **Albergo Visconti** — Bonemerse
   - slug: `albergo-visconti-bonemerse`
   - indirizzo: Via Giuseppina, 145, 26100 Cremona CR
9. **B&B Mille** — Bonemerse
   - slug: `b-b-mille-bonemerse`
   - indirizzo: Via dei Mille, 7, 26100 Cremona CR
10. **B&B Stradivari** — Bonemerse
   - slug: `b-b-stradivari-bonemerse`
   - indirizzo: Via Battaglione, 22, 26100 Cremona CR
11. **B&B ViaSforza** — Bonemerse
   - slug: `b-b-viasforza-bonemerse`
   - indirizzo: Via Francesco Sforza, 3, 26100 Cremona CR
12. **Cascina Farisengo: agriturismo e location matrimoni ed eventi** — Bonemerse
   - slug: `cascina-farisengo-agriturismo-e-location-matrimo-bonemerse`
   - indirizzo: Via Farisengo, 2, 26040 Bonemerse CR
13. **Cremona Inn Aparthotel** — Bonemerse
   - slug: `cremona-inn-aparthotel-bonemerse`
   - indirizzo: Via Arcangelo Ghisleri, 33, 26100 Cremona CR
14. **Motel Circuit drive** — Bonemerse
   - slug: `motel-circuit-drive-bonemerse`
   - indirizzo: Via Giuseppina, 19/20, 26042 Cingia De' Botti CR
15. **NOVE BnB Cremona** — Bonemerse
   - slug: `nove-bnb-cremona-bonemerse`
   - indirizzo: Via degli Argini, 9, 26100 Cremona CR
16. **Antigua Residence** — Bonifati
   - slug: `antigua-residence-bonifati`
   - indirizzo: Via Paneduro, 87020 Bonifati CS
17. **Dimora del Borgo** — Bonifati
   - slug: `dimora-del-borgo-bonifati`
   - indirizzo: Don Luigi Sturzo, 87020 Sangineto CS
18. **Grand Hotel San Michele** — Bonifati
   - slug: `grand-hotel-san-michele-bonifati`
   - indirizzo: Contrada Bosco, 8, 87022 Cetraro CS
19. **Hotel Club Residence Martinica** — Bonifati
   - slug: `hotel-club-residence-martinica-bonifati`
   - indirizzo: Contrada Paneduro, 87020 Cittadella del Capo, Bonifati CS
20. **Hotel delle Stelle Beach Resort** — Bonifati
   - slug: `hotel-delle-stelle-beach-resort-bonifati`
   - indirizzo: Via della Libertà, 40, 87020 Sangineto CS
21. **Hotel Nettuno Palace** — Bonifati
   - slug: `hotel-nettuno-palace-bonifati`
   - indirizzo: Via Gioacchino Greco, 87021 Marina di Belvedere CS
22. **Hotel Poseidon** — Bonifati
   - slug: `hotel-poseidon-bonifati`
   - indirizzo: Contrada Piano delle Donne, 87021 Belvedere Marittimo CS
23. **Hotel Sol Palace** — Bonifati
   - slug: `hotel-sol-palace-bonifati`
   - indirizzo: SS 18 Tirrena Inferiore, 287, 87020 Sangineto CS
24. **Hotel Svizzero** — Bonifati
   - slug: `hotel-svizzero-bonifati`
   - indirizzo: Via Alcide De Gasperi, 12, 87020 Sangineto Lido CS
25. **Maripetra B&B** — Bonifati
   - slug: `maripetra-b-b-bonifati`
   - indirizzo: Via Giacomo Matteotti, 87020 Sangineto CS
26. **Palazzo del Capo** — Bonifati
   - slug: `palazzo-del-capo-bonifati`
   - indirizzo: Via Cristoforo Colombo, 5, 87020 Cittadella del Capo CS
27. **Residence club sangineto** — Bonifati
   - slug: `residence-club-sangineto-bonifati`
   - indirizzo: Viale della liberta', 44, 87020 Sangineto CS
28. **Agriturismo Il Borgo** — Bonito
   - slug: `agriturismo-il-borgo-bonito`
   - indirizzo: SS303, 83036 Arenara AV
29. **Balneum Rooms & Spa** — Bonito
   - slug: `balneum-rooms-spa-bonito`
   - indirizzo: Via Capuozzo Pianopantano, 41, 83036 Mirabella Eclano AV
30. **Bed and Breakfast La Maddalena** — Bonito
   - slug: `bed-and-breakfast-la-maddalena-bonito`
   - indirizzo: Via Sommito, 83036 Mirabella Eclano AV
31. **Bonito B&B** — Bonito
   - slug: `bonito-b-b-bonito`
   - indirizzo: Via Vespucci, 18, 83032 Bonito AV
32. **Mirabella Hotel Ristorante** — Bonito
   - slug: `mirabella-hotel-ristorante-bonito`
   - indirizzo: Via Bosco S. Prisco, 83036 Mirabella Eclano AV
33. **Radici Resort** — Bonito
   - slug: `radici-resort-bonito`
   - indirizzo: Contrada Corpo di Cristo, 83036 Mirabella Eclano AV
34. **Skyline Rooms & Suites** — Bonito
   - slug: `skyline-rooms-suites-bonito`
   - indirizzo: Contrada Ruvitiello, 83035 Grottaminarda AV
35. **Affittacamere Monteinni** — Bonnanaro
   - slug: `affittacamere-monteinni-bonnanaro`
   - indirizzo: Via Mercato, 3, 07014 Ozieri SS