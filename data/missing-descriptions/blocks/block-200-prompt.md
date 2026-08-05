# Blocco 200/500 — 35 strutture senza descrizione IT

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

1. **Soggiorno Salento** — Bagnolo del Salento
   - slug: `soggiorno-salento-bagnolo-del-salento`
   - indirizzo: Via Roma, 73020 Santa Cesarea Terme LE
2. **Sunflower Salento** — Bagnolo del Salento
   - slug: `sunflower-salento-bagnolo-del-salento`
   - indirizzo: Via Giovanni Falcone, 1, 73020 Serrano LE
3. **Tenuta Pigliano Hotel** — Bagnolo del Salento
   - slug: `tenuta-pigliano-hotel-bagnolo-del-salento`
   - indirizzo: Via Castriota, c.s. n. 45, 73020 Bagnolo del Salento LE
4. **Villa Papaleo B&B** — Bagnolo del Salento
   - slug: `villa-papaleo-b-b-bagnolo-del-salento`
   - indirizzo: V. Vincenzo Papaleo, 52, 73020 Bagnolo del Salento LE
5. **Adelphi Bed & Breakfast** — Bagnolo di Po
   - slug: `adelphi-bed-breakfast-bagnolo-di-po`
   - indirizzo: Via Modena, 70, 44122 Ferrara FE
6. **Affittacamere Vallelunga - Ferrara** — Bagnolo di Po
   - slug: `affittacamere-vallelunga-ferrara-bagnolo-di-po`
   - indirizzo: Via Vallelunga, 10/A, 44123 Ferrara FE
7. **Agriturismo La Fornetta** — Bagnolo di Po
   - slug: `agriturismo-la-fornetta-bagnolo-di-po`
   - indirizzo: Via Ladino, 283, 44124 Ferrara FE
8. **Astra Hotel** — Bagnolo di Po
   - slug: `astra-hotel-bagnolo-di-po`
   - indirizzo: Viale Cavour, 55, 44121 Ferrara FE
9. **Avanguardia Art Club** — Bagnolo di Po
   - slug: `avanguardia-art-club-bagnolo-di-po`
   - indirizzo: Via Borgo dei Leoni, 99, 44121 Ferrara FE
10. **B&B IL GIRAMONDO FERRARA** — Bagnolo di Po
   - slug: `b-b-il-giramondo-ferrara-bagnolo-di-po`
   - indirizzo: Viale Cavour, 10, 44121 Ferrara FE
11. **B&B La Chance CIN IT038008B45PRASR8Q** — Bagnolo di Po
   - slug: `b-b-la-chance-cin-it038008b45prasr8q-bagnolo-di-po`
   - indirizzo: Via Guglielmo Marconi, 162, 44122 Ferrara FE
12. **Bed&Breakfast Mawa** — Bagnolo di Po
   - slug: `bed-breakfast-mawa-bagnolo-di-po`
   - indirizzo: Via Pontegradella, 413, 44123 Pontegradella FE
13. **Best Western Palace Inn Hotel** — Bagnolo di Po
   - slug: `best-western-palace-inn-hotel-bagnolo-di-po`
   - indirizzo: Via Eridano, 2, 44122 Ferrara FE
14. **Boutique Hotel Ferrara** — Bagnolo di Po
   - slug: `boutique-hotel-ferrara-bagnolo-di-po`
   - indirizzo: Piazzale della Castellina, 1, 44121 Ferrara FE
15. **CameraCafè Ferrara** — Bagnolo di Po
   - slug: `cameracafe-ferrara-bagnolo-di-po`
   - indirizzo: Via Borgo dei Leoni, 91, 44121 Ferrara FE
16. **D'Elite Room & Breakfast** — Bagnolo di Po
   - slug: `d-elite-room-breakfast-bagnolo-di-po`
   - indirizzo: Via Francesco del Cossa, 9, 44121 Ferrara FE
17. **Hotel de Prati** — Bagnolo di Po
   - slug: `hotel-de-prati-bagnolo-di-po`
   - indirizzo: Via Padiglioni, 5, 44121 Ferrara FE
18. **Il Giardino di Rebecca** — Bagnolo di Po
   - slug: `il-giardino-di-rebecca-bagnolo-di-po`
   - indirizzo: Via Arginone, 339, 44124 Ferrara FE
19. **Last Minute** — Bagnolo di Po
   - slug: `last-minute-bagnolo-di-po`
   - indirizzo: Corso Porta Po, 106, 44120 Ferrara FE
20. **Le stanze di LaVi** — Bagnolo di Po
   - slug: `le-stanze-di-lavi-bagnolo-di-po`
   - indirizzo: Corso Porta Po, 78, 44121 Ferrara FE
21. **theplatformrooms** — Bagnolo di Po
   - slug: `theplatformrooms-bagnolo-di-po`
   - indirizzo: Piazzale della Castellina, 1, 44121 Ferrara FE
22. **Airone Hotel** — Bagnolo in Piano
   - slug: `airone-hotel-bagnolo-in-piano`
   - indirizzo: Via dell'Aeronautica, 20, 42124 Reggio Emilia RE
23. **Albergo Ariosto** — Bagnolo in Piano
   - slug: `albergo-ariosto-bagnolo-in-piano`
   - indirizzo: Via S. Rocco, 12/D, 42121 Reggio nell'Emilia RE
24. **Albergo Hotel Rose e Crown** — Bagnolo in Piano
   - slug: `albergo-hotel-rose-e-crown-bagnolo-in-piano`
   - indirizzo: Via Fosdondo, 80, 42015 Correggio RE
25. **Albergo Ristorante Pizzeria Le Rotte** — Bagnolo in Piano
   - slug: `albergo-ristorante-pizzeria-le-rotte-bagnolo-in-piano`
   - indirizzo: Via Provinciale Sud, 9, 42011 Bagnolo in Piano RE
26. **Albergo Stazione** — Bagnolo in Piano
   - slug: `albergo-stazione-bagnolo-in-piano`
   - indirizzo: Via Giuseppe Turri, 1, 42121 Reggio Emilia RE
27. **Alexander S.N.C. Di Cagossi Simone e C.** — Bagnolo in Piano
   - slug: `alexander-s-n-c-di-cagossi-simone-e-c-bagnolo-in-piano`
   - indirizzo: Str. Cartoccio, 1, 42017 Novellara RE
28. **Arcobaleno Stanze - Bed & Breakfast, B&B vicino centro storico,vicino stazione Reggio Emilia** — Bagnolo in Piano
   - slug: `arcobaleno-stanze-bed-breakfast-b-b-vicino-centr-bagnolo-in-piano`
   - indirizzo: Via Nicomede Bianchi, 17, 42122 Reggio Emilia RE
29. **Bed&Basta City** — Bagnolo in Piano
   - slug: `bed-basta-city-bagnolo-in-piano`
   - indirizzo: Via Curtatone, 6, 42123 Reggio nell'Emilia RE
30. **CONFIDENCE HOTEL NOVA** — Bagnolo in Piano
   - slug: `confidence-hotel-nova-bagnolo-in-piano`
   - indirizzo: Via Guglielmo Tirelli, 9, 42123 Reggio nell'Emilia RE
31. **CONFIDENCE HOTEL SAN MARCO** — Bagnolo in Piano
   - slug: `confidence-hotel-san-marco-bagnolo-in-piano`
   - indirizzo: Piazzale Guglielmo Marconi, 1, 42121 Reggio nell'Emilia RE
32. **CSHRE - City Style Hotel Reggio Emilia** — Bagnolo in Piano
   - slug: `cshre-city-style-hotel-reggio-emilia-bagnolo-in-piano`
   - indirizzo: Viale Regina Margherita, 30, 42124 Reggio nell'Emilia RE
33. **Hotel Motel Galaxy Reggio Emilia** — Bagnolo in Piano
   - slug: `hotel-motel-galaxy-reggio-emilia-bagnolo-in-piano`
   - indirizzo: Via Ludwig Van Beethoven, 110/A, 42122 Reggio Emilia RE
34. **Hotel President** — Bagnolo in Piano
   - slug: `hotel-president-bagnolo-in-piano`
   - indirizzo: Via Don Giovanni Minzoni, 61, 42015 Correggio RE
35. **Hotel S.pietro** — Bagnolo in Piano
   - slug: `hotel-s-pietro-bagnolo-in-piano`
   - indirizzo: Piazzale Europa, 42124 Reggio Emilia RE