# Blocco 483/500 — 35 strutture senza descrizione IT

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

1. **B&B Jasmine** — Fiumedinisi
   - slug: `b-b-jasmine-fiumedinisi`
   - indirizzo: Via Alessandro Manzoni, 9, 98028 Santa Teresa di Riva ME
2. **Brezza Marina** — Fiumedinisi
   - slug: `brezza-marina-fiumedinisi`
   - indirizzo: Via Piccolo Torrente Pagliara, 8B, 98027 Roccalumera ME
3. **Castello D'Alcontres B&B** — Fiumedinisi
   - slug: `castello-d-alcontres-b-b-fiumedinisi`
   - indirizzo: Piazza Cianciolo, 1, 98026 Nizza di Sicilia ME
4. **Il Covo dei Re** — Fiumedinisi
   - slug: `il-covo-dei-re-fiumedinisi`
   - indirizzo: Via Umberto I, 25, 98022 Fiumedinisi ME
5. **Il Principe B&B** — Fiumedinisi
   - slug: `il-principe-b-b-fiumedinisi`
   - indirizzo: Via Marchesi di Granatelli, 8, 98021 Alì Terme ME
6. **La Sirena Bed & Breakfast** — Fiumedinisi
   - slug: `la-sirena-bed-breakfast-fiumedinisi`
   - indirizzo: Via dell'Agro, 1, 98028 Santa Teresa di Riva ME
7. **Marino Wellness** — Fiumedinisi
   - slug: `marino-wellness-fiumedinisi`
   - indirizzo: Vicolo Schiro, 1, 98021 Alì Terme ME
8. **Agriturismo Oasi del Fiumefreddo** — Fiumefreddo di Sicilia
   - slug: `agriturismo-oasi-del-fiumefreddo-fiumefreddo-di-sicilia`
   - indirizzo: SP71i, 29, 95013 Fiumefreddo di Sicilia CT
9. **Albergo Baia Degli Dei** — Fiumefreddo di Sicilia
   - slug: `albergo-baia-degli-dei-fiumefreddo-di-sicilia`
   - indirizzo: Contrada Recanati, snc, 98035 Giardini-Naxos ME
10. **Atlantis Palace Hotel** — Fiumefreddo di Sicilia
   - slug: `atlantis-palace-hotel-fiumefreddo-di-sicilia`
   - indirizzo: Via Spiaggia, 257, 95016 Mascali CT
11. **B&B Casa Paolo** — Fiumefreddo di Sicilia
   - slug: `b-b-casa-paolo-fiumefreddo-di-sicilia`
   - indirizzo: Via Ponte Borea, 25, 95013 Fiumefreddo di Sicilia CT
12. **B&B San Leonardo** — Fiumefreddo di Sicilia
   - slug: `b-b-san-leonardo-fiumefreddo-di-sicilia`
   - indirizzo: Via S. Gregorio Magno, 4, 95016 Mascali CT
13. **B&B Villa San Leonardo** — Fiumefreddo di Sicilia
   - slug: `b-b-villa-san-leonardo-fiumefreddo-di-sicilia`
   - indirizzo: Via S. Biagio, 20, 95016 Mascali CT
14. **Beb I Delfini Di Casa Paola** — Fiumefreddo di Sicilia
   - slug: `beb-i-delfini-di-casa-paola-fiumefreddo-di-sicilia`
   - indirizzo: Via Carrata, 6, 95016 Mascali CT
15. **Feudogrande Bio Relais Hotel** — Fiumefreddo di Sicilia
   - slug: `feudogrande-bio-relais-hotel-fiumefreddo-di-sicilia`
   - indirizzo: Via Maccarone, 84, 95013 Fiumefreddo di Sicilia CT
16. **Il Giardino degli Ovali** — Fiumefreddo di Sicilia
   - slug: `il-giardino-degli-ovali-fiumefreddo-di-sicilia`
   - indirizzo: SP72ii, 19a, 95013 Fiumefreddo di Sicilia CT
17. **King's House Hotel Resort** — Fiumefreddo di Sicilia
   - slug: `king-s-house-hotel-resort-fiumefreddo-di-sicilia`
   - indirizzo: Via dott. Mario Amato, 23, 95016 Mascali CT
18. **Talé Restaurant&suite** — Fiumefreddo di Sicilia
   - slug: `tale-restaurant-suite-fiumefreddo-di-sicilia`
   - indirizzo: Via Bellini, 186, 95017 Piedimonte Etneo CT
19. **Tenuta Ciuri Country Resort** — Fiumefreddo di Sicilia
   - slug: `tenuta-ciuri-country-resort-fiumefreddo-di-sicilia`
   - indirizzo: Via Catania Messina, 32, 95016 Mascali CT
20. **Veda Elegant Rooms b&b casa vacanze hotel con piscina zona taormina** — Fiumefreddo di Sicilia
   - slug: `veda-elegant-rooms-b-b-casa-vacanze-hotel-con-pi-fiumefreddo-di-sicilia`
   - indirizzo: Via Morandi, 15, 95013 Fiumefreddo Sicilia CT
21. **Agriturismo Ponte Due Archi** — Floresta
   - slug: `agriturismo-ponte-due-archi-floresta`
   - indirizzo: c/da Gridà, 98067 Raccuja ME
22. **ALBERGO DIFFUSO MONTALBANO BORGO ANTICO** — Floresta
   - slug: `albergo-diffuso-montalbano-borgo-antico-floresta`
   - indirizzo: Via Livatera, 3, 98065 Montalbano Elicona ME
23. **B&B - Dolmen House** — Floresta
   - slug: `b-b-dolmen-house-floresta`
   - indirizzo: Via Provinciale, 107, 98065 Montalbano Elicona ME
24. **B&B La terrazza** — Floresta
   - slug: `b-b-la-terrazza-floresta`
   - indirizzo: Via bandiera, 9, 98065 Montalbano Elicona ME
25. **B&B Le Poiane** — Floresta
   - slug: `b-b-le-poiane-floresta`
   - indirizzo: Contrada Manganello, 2, 98068 San Piero Patti ME
26. **Barone Montefeo** — Floresta
   - slug: `barone-montefeo-floresta`
   - indirizzo: Via Pio la Torre, 98064 Colla Maffone ME
27. **Domus Aurea** — Floresta
   - slug: `domus-aurea-floresta`
   - indirizzo: Via Mastropaolo, 98065 Montalbano Elicona ME
28. **Hotel San'Anna** — Floresta
   - slug: `hotel-san-anna-floresta`
   - indirizzo: Via Vittorio Emanuele, 109, 98030 Floresta ME
29. **Villa Argimusco** — Floresta
   - slug: `villa-argimusco-floresta`
   - indirizzo: Via Placido Fiore, 11, 98065 Montalbano Elicona ME
30. **Addauro Resort** — Floridia
   - slug: `addauro-resort-floridia`
   - indirizzo: Traversa Case Troia, 96100 Siracusa SR
31. **Agriturismo Sant'Elia** — Floridia
   - slug: `agriturismo-sant-elia-floridia`
   - indirizzo: Strada La Midola, 7, 96100 Siracusa SR
32. **Albatros Hotel S.A.S.** — Floridia
   - slug: `albatros-hotel-s-a-s-floridia`
   - indirizzo: Via Elorina, 168, 96100 Siracusa SR
33. **B&B Archimede | bed & breakfast Floridia** — Floridia
   - slug: `b-b-archimede-bed-breakfast-floridia-floridia`
   - indirizzo: Via Archimede, 305, 96014 Floridia SR
34. **B&B Mediterraneo** — Floridia
   - slug: `b-b-mediterraneo-floridia`
   - indirizzo: Viale Vittorio Veneto, N°186/Scala B, 96014 Floridia SR
35. **Bed & Breakfast Kosmos** — Floridia
   - slug: `bed-breakfast-kosmos-floridia`
   - indirizzo: Via Monte Cervino, 21, 96100 Siracusa SR