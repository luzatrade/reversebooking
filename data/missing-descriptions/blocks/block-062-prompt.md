# Blocco 62/500 — 35 strutture senza descrizione IT

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

1. **B&B Il Pozzo Malpensa** — Albizzate
   - slug: `b-b-il-pozzo-malpensa-albizzate`
   - indirizzo: Via Piave, 17, 21011 Casorate Sempione VA
2. **B&B Le Magnolie** — Albizzate
   - slug: `b-b-le-magnolie-albizzate`
   - indirizzo: Via Giovanni Segantini, 2, 21013 Gallarate VA
3. **Epicuro Guest House** — Albizzate
   - slug: `epicuro-guest-house-albizzate`
   - indirizzo: Via L Melzi, 12, 21019 Somma Lombardo VA
4. **Hilton Garden Inn Milan Malpensa** — Albizzate
   - slug: `hilton-garden-inn-milan-malpensa-albizzate`
   - indirizzo: Via Lazzaretto, 1, 21019 Somma Lombardo VA
5. **Home Sweet Home Milano Malpensa Airport** — Albizzate
   - slug: `home-sweet-home-milano-malpensa-airport-albizzate`
   - indirizzo: Via Giovanni XXIII, 108, 21010 Cardano al Campo VA
6. **Hotel Italia** — Albizzate
   - slug: `hotel-italia-albizzate`
   - indirizzo: Via Corgeno, 42, 21029 Vergiate VA
7. **Hotel Osteria della Pista** — Albizzate
   - slug: `hotel-osteria-della-pista-albizzate`
   - indirizzo: Via Verbano, 1, 21011 Casorate Sempione VA
8. **Hotel Residence Montelago** — Albizzate
   - slug: `hotel-residence-montelago-albizzate`
   - indirizzo: Via Roma, 32/34, 21020 Ternate VA
9. **Hotel Roma** — Albizzate
   - slug: `hotel-roma-albizzate`
   - indirizzo: Via IV Novembre, 37, 21012 Cassano Magnago VA
10. **Il Casolare del Medio Olona** — Albizzate
   - slug: `il-casolare-del-medio-olona-albizzate`
   - indirizzo: Via Balzarine, 87, 21054 Fagnano Olona VA
11. **La Casa nel Bosco** — Albizzate
   - slug: `la-casa-nel-bosco-albizzate`
   - indirizzo: Via I. Bianco, 52, 21019 Somma Lombardo VA
12. **Orange Motel** — Albizzate
   - slug: `orange-motel-albizzate`
   - indirizzo: Via Corgeno, 46, 21029 Vergiate VA
13. **Residence Mxp rooms** — Albizzate
   - slug: `residence-mxp-rooms-albizzate`
   - indirizzo: Via dell'Ongaro, 8, 21010 Cardano al Campo VA
14. **Stay Hotel** — Albizzate
   - slug: `stay-hotel-albizzate`
   - indirizzo: Via Gallarate, 2, 21020 Brunello VA
15. **The Dreamers B&B** — Albizzate
   - slug: `the-dreamers-b-b-albizzate`
   - indirizzo: Via Daniele Manin, 19, 21010 Cardano Al Campo VA
16. **Villa le Rondini** — Albizzate
   - slug: `villa-le-rondini-albizzate`
   - indirizzo: Via Cavour, 22, 21040 Castronno VA
17. **ZEUS Essence Dolce by Wyndham MIlan Malpensa** — Albizzate
   - slug: `zeus-essence-dolce-by-wyndham-milan-malpensa-albizzate`
   - indirizzo: Via Giuseppe Mazzini, 63, 21019 Somma Lombardo VA
18. **B&B La Castellana** — Albonese
   - slug: `b-b-la-castellana-albonese`
   - indirizzo: Via Castellana, 4, 28071 Borgolavezzaro NO
19. **Cascina Mora Bassa** — Albonese
   - slug: `cascina-mora-bassa-albonese`
   - indirizzo: Str. Morabassa, 18, 27029 Vigevano PV
20. **Croce di Malta** — Albonese
   - slug: `croce-di-malta-albonese`
   - indirizzo: Via Giulio Biglieri, 2a, 28100 Novara NO
21. **Hotel Cristallo** — Albonese
   - slug: `hotel-cristallo-albonese`
   - indirizzo: Corso Milano, 60D, 28100 Novara NO
22. **Hotel Ducale** — Albonese
   - slug: `hotel-ducale-albonese`
   - indirizzo: Via G. G. Trivulzio, 8, 27029 Vigevano PV
23. **Hotel Ristorante Pizzeria Cavallo Bianco** — Albonese
   - slug: `hotel-ristorante-pizzeria-cavallo-bianco-albonese`
   - indirizzo: Corso della Vittoria, 6/B, 28100 Novara NO
24. **Hotel Stazione** — Albonese
   - slug: `hotel-stazione-albonese`
   - indirizzo: Viale Alessandro Manzoni, 4C, 28100 Novara NO
25. **I Diamanti Hotel** — Albonese
   - slug: `i-diamanti-hotel-albonese`
   - indirizzo: Via Leonardo Da Vinci, 59, 27026 Garlasco PV
26. **I Tre Merli** — Albonese
   - slug: `i-tre-merli-albonese`
   - indirizzo: Via Maestra, 36, 27036 Madonna del Campo PV
27. **Il Cottage** — Albonese
   - slug: `il-cottage-albonese`
   - indirizzo: Corso Torino, 118/25, 27029 Vigevano PV
28. **Locanda La Castellana** — Albonese
   - slug: `locanda-la-castellana-albonese`
   - indirizzo: Via Milano, 1, 27030 Castello d'Agogna PV
29. **Nuovo Hotel** — Albonese
   - slug: `nuovo-hotel-albonese`
   - indirizzo: Corso P. Togliatti, 21, 27029 Vigevano PV
30. **Residence Matteotti** — Albonese
   - slug: `residence-matteotti-albonese`
   - indirizzo: Largo Buscaglia Carlo, 11A, 28100 Novara NO
31. **Ristorante Locanda Milano** — Albonese
   - slug: `ristorante-locanda-milano-albonese`
   - indirizzo: Via Roma, 18, 27025 Gambolo' PV
32. **Società Agricola Isola di Carlalberto Marchetti e C. S.A.S.** — Albonese
   - slug: `societa-agricola-isola-di-carlalberto-marchetti-albonese`
   - indirizzo: SC Caresana, 6, 27030 Langosco PV
33. **Ventitrémarzo** — Albonese
   - slug: `ventitremarzo-albonese`
   - indirizzo: Corso XXIII Marzo, 118, 28100 Novara NO
34. **"La Stufa Rossa"** — Albosaggia
   - slug: `la-stufa-rossa-albosaggia`
   - indirizzo: Via Parravicini, 5, 23100 Sondrio SO
35. **Affittacamere Stelvio** — Albosaggia
   - slug: `affittacamere-stelvio-albosaggia`
   - indirizzo: Via Stelvio, 23, 23100 Sondrio SO