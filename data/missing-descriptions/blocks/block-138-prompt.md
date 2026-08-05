# Blocco 138/500 — 35 strutture senza descrizione IT

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

1. **Al Nifontano B&B** — Arcisate
   - slug: `al-nifontano-b-b-arcisate`
   - indirizzo: Via Giuseppe Rovani, 24, 21100 Varese VA
2. **B&B Villa Adele** — Arcisate
   - slug: `b-b-villa-adele-arcisate`
   - indirizzo: Via Monguelfo, 1, 21100 Varese VA
3. **B&B Villa Adriana Varese** — Arcisate
   - slug: `b-b-villa-adriana-varese-arcisate`
   - indirizzo: Via Virgilio, 59, 21100 Varese VA
4. **BelSorrisoVarese - Boutique Hotel & Residence** — Arcisate
   - slug: `belsorrisovarese-boutique-hotel-residence-arcisate`
   - indirizzo: Piazza Biroldi, 8, 21100 Varese VA
5. **Cascina Marinona** — Arcisate
   - slug: `cascina-marinona-arcisate`
   - indirizzo: V. Marinona, 76, 21051 Arcisate VA
6. **Corte Picasass** — Arcisate
   - slug: `corte-picasass-arcisate`
   - indirizzo: Via Enrico Butti, 10, 21059 Viggiu' VA
7. **Dolce Vista Lugano** — Arcisate
   - slug: `dolce-vista-lugano-arcisate`
   - indirizzo: Via Roma, 19, 21050 Porto Ceresio VA
8. **Hotel Europa** — Arcisate
   - slug: `hotel-europa-arcisate`
   - indirizzo: Piazza Cesare Beccaria, 1, 21100 Varese VA
9. **Hotel il Canneto** — Arcisate
   - slug: `hotel-il-canneto-arcisate`
   - indirizzo: Via Fratelli Bertolla, 59, 21050 Porto Ceresio VA
10. **Hotel Stelvio** — Arcisate
   - slug: `hotel-stelvio-arcisate`
   - indirizzo: Via Tonale, 10, 21100 Varese VA
11. **Invilla Bnb** — Arcisate
   - slug: `invilla-bnb-arcisate`
   - indirizzo: Via Monastero Vecchio, 12, 21100 Varese VA
12. **Vecchia Riva | Hotel e Ristorante** — Arcisate
   - slug: `vecchia-riva-hotel-e-ristorante-arcisate`
   - indirizzo: Via Giovanni Macchi, 146, 21100 Varese VA
13. **Agritur Michelotti** — Arco
   - slug: `agritur-michelotti-arco`
   - indirizzo: Via Soccesure, 2, 38062 Arco TN
14. **Arco Vacanze S.A.S. Di Amistadi Federico & C.** — Arco
   - slug: `arco-vacanze-s-a-s-di-amistadi-federico-c-arco`
   - indirizzo: Via Cerere, 26, 38062 Arco TN
15. **B&B ai 4 colori Camere Arco** — Arco
   - slug: `b-b-ai-4-colori-camere-arco-arco`
   - indirizzo: Via S. Martino, 4, 38062 Arco TN
16. **B&B NALÙ** — Arco
   - slug: `b-b-nalu-arco`
   - indirizzo: Vicolo Pecora, 1 - Vignole, 38062 Arco TN
17. **Garni On The Rock** — Arco
   - slug: `garni-on-the-rock-arco`
   - indirizzo: Vicolo Ere, 6, 38062 Arco TN
18. **Hoody - Active & Happiness Hotel** — Arco
   - slug: `hoody-active-happiness-hotel-arco`
   - indirizzo: Via Francesco II di Borbone, 14, 38062 Arco TN
19. **Hotel al Sole rooms and apartments** — Arco
   - slug: `hotel-al-sole-rooms-and-apartments-arco`
   - indirizzo: Via Foro Boario, 5, 38062 Arco TN
20. **Hotel Campagnola** — Arco
   - slug: `hotel-campagnola-arco`
   - indirizzo: Via S. Tomaso, 11, 38066 Riva del Garda TN
21. **Hotel Everest Arco** — Arco
   - slug: `hotel-everest-arco-arco`
   - indirizzo: Viale Rovereto, 91, 38062 Arco TN
22. **Hotel Garden** — Arco
   - slug: `hotel-garden-arco`
   - indirizzo: Via Paolina Caproni Maini, 40, 38062 Arco TN
23. **Hotel Olivo - UPGARDA hotels** — Arco
   - slug: `hotel-olivo-upgarda-hotels-arco`
   - indirizzo: Via Roma, 2, 38062 Arco TN
24. **Hotel San Giorgio** — Arco
   - slug: `hotel-san-giorgio-arco`
   - indirizzo: Via S. Giorgio, 8, 38062 Arco TN
25. **Hotel Smart** — Arco
   - slug: `hotel-smart-arco`
   - indirizzo: Via S. Caterina, 4/P, 38062 Arco TN
26. **Monastero ARX VIVENDI** — Arco
   - slug: `monastero-arx-vivendi-arco`
   - indirizzo: Via Mantova, 13, 38062 Arco TN
27. **O_Live Agriresort** — Arco
   - slug: `o-live-agriresort-arco`
   - indirizzo: Via Monte Brione, 2A, 38062 Arco TN
28. **PACE 1954 Hotel** — Arco
   - slug: `pace-1954-hotel-arco`
   - indirizzo: Via Vergolano, 50, 38062 Arco TN
29. **Palace Hotel Città** — Arco
   - slug: `palace-hotel-citta-arco`
   - indirizzo: Via Roma, 10, 38062 Arco TN
30. **Park Hotel Il Vigneto** — Arco
   - slug: `park-hotel-il-vigneto-arco`
   - indirizzo: Viale Rovereto, 56, 38062 Arco TN
31. **River Rythm Inn** — Arco
   - slug: `river-rythm-inn-arco`
   - indirizzo: Via Giovanni Segantini, 21, 38062 Arco TN
32. **Villa Italia Luxury Suites Apartments** — Arco
   - slug: `villa-italia-luxury-suites-apartments-arco`
   - indirizzo: Viale Magnolie, 29, 38062 Arco TN
33. **Affittacamere Rivamare San Terenzo** — Arcola
   - slug: `affittacamere-rivamare-san-terenzo-arcola`
   - indirizzo: Via XX Settembre, 41, 19032 Lerici SP
34. **Albergo La Mimosa** — Arcola
   - slug: `albergo-la-mimosa-arcola`
   - indirizzo: Via Provinciale, 586, 19021 Arcola SP
35. **Albergo Serena -** — Arcola
   - slug: `albergo-serena-arcola`
   - indirizzo: Cerri SP IT, Via della Libertà, 22, 19032 Lerici SP