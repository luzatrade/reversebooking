# Blocco 416/500 — 35 strutture senza descrizione IT

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

1. **B&B Giardino delle Camelie** — Capannori
   - slug: `b-b-giardino-delle-camelie-capannori`
   - indirizzo: Via di S. Pieretto, 73, 55060 Capannori LU
2. **B&B Toringo Country Home** — Capannori
   - slug: `b-b-toringo-country-home-capannori`
   - indirizzo: Via Carraia, 36, 55012 Capannori LU
3. **Best Western Grand Hotel Guinigi** — Capannori
   - slug: `best-western-grand-hotel-guinigi-capannori`
   - indirizzo: Via Romana, 1247, 55100 Lucca LU
4. **Hotel Bernardino** — Capannori
   - slug: `hotel-bernardino-capannori`
   - indirizzo: Via di Tiglio, 109, 55100 Lucca LU
5. **HOTEL COUNTRY CLUB** — Capannori
   - slug: `hotel-country-club-capannori`
   - indirizzo: Via Pesciatina, 874/a, 55012 Capannori LU
6. **Hotel Hambros** — Capannori
   - slug: `hotel-hambros-capannori`
   - indirizzo: Via Pesciatina, 197, 55012 Capannori LU
7. **Hotel Le Ville** — Capannori
   - slug: `hotel-le-ville-capannori`
   - indirizzo: Viale Europa, 154, 55012 Capannori LU
8. **Hotel Melecchi Sas Di Clocchiatti Marino E C.** — Capannori
   - slug: `hotel-melecchi-sas-di-clocchiatti-marino-e-c-capannori`
   - indirizzo: Via Romana, 37, 55100 Lucca LU
9. **Hotel Plazza Porcari** — Capannori
   - slug: `hotel-plazza-porcari-capannori`
   - indirizzo: Via della Stazione, 85, 55016 Porcari LU
10. **Locanda San Ginese** — Capannori
   - slug: `locanda-san-ginese-capannori`
   - indirizzo: Via di S. Ginese, 266, 55012 Capannori LU
11. **Relais del lago** — Capannori
   - slug: `relais-del-lago-capannori`
   - indirizzo: Via della Chiesa di Gragnano, 36, 55010 Capannori LU
12. **San Gennaro Castello** — Capannori
   - slug: `san-gennaro-castello-capannori`
   - indirizzo: Via di Castello, 40, 55010 San Gennaro LU
13. **3Rome Salaria** — Capena
   - slug: `3rome-salaria-capena`
   - indirizzo: Via Fluviale, 1, 00015 Monterotondo RM
14. **Agriturismo Il Solengo** — Capena
   - slug: `agriturismo-il-solengo-capena`
   - indirizzo: via cupicci, snc, 00010 Montelibretti RM
15. **Agriturismo Valle Siriaca** — Capena
   - slug: `agriturismo-valle-siriaca-capena`
   - indirizzo: Via di Vallelunga, 49, 00060 Castelnuovo di Porto RM
16. **Albergo Dei Leoni** — Capena
   - slug: `albergo-dei-leoni-capena`
   - indirizzo: Via Vincenzo Federici, 23, 00015 Monterotondo RM
17. **ALLA QUERCIA - CENTRO STORICO** — Capena
   - slug: `alla-quercia-centro-storico-capena`
   - indirizzo: Via Ricciotti Garibaldi, 3, 00015 Monterotondo RM
18. **Antica Corte del Castello** — Capena
   - slug: `antica-corte-del-castello-capena`
   - indirizzo: Via Umberto I, 2, 00065 Fiano Romano RM
19. **B&B Al Laghetto** — Capena
   - slug: `b-b-al-laghetto-capena`
   - indirizzo: Via Del Sassone, 51, 00065 Fiano Romano RI
20. **B&B L'Albero del Pepe** — Capena
   - slug: `b-b-l-albero-del-pepe-capena`
   - indirizzo: 14, Seconda Str. Via di Pratalata, 2, 00065 Fiano Romano RM
21. **Best Western Park Hotel** — Capena
   - slug: `best-western-park-hotel-capena`
   - indirizzo: Via Variante Tiberina, 21, 00065 Fiano Romano RM
22. **Hotel Relax Roma Nord** — Capena
   - slug: `hotel-relax-roma-nord-capena`
   - indirizzo: Via Milano, 19, 00065 Fiano Romano RM
23. **Hotel Star** — Capena
   - slug: `hotel-star-capena`
   - indirizzo: Via Salaria, 2165, 00138 Roma RM
24. **Jerry & Titty Charming House Capena** — Capena
   - slug: `jerry-titty-charming-house-capena-capena`
   - indirizzo: Via S. Luca, 17, 00060 Capena RM
25. **L'Alighieri B&B** — Capena
   - slug: `l-alighieri-b-b-capena`
   - indirizzo: Via dante Alighieri, 27, 00015 Monterotondo RM
26. **Quality Hotel Green Palace** — Capena
   - slug: `quality-hotel-green-palace-capena`
   - indirizzo: Via Salaria, 207, 00015 Monterotondo RM
27. **Ristorante "Le Colline"** — Capena
   - slug: `ristorante-le-colline-capena`
   - indirizzo: Via Rosetole, 15, 00060 Rosetoli-maleranca RM, 00060 Capena RM
28. **Agriturismo La Costa** — Capergnanica
   - slug: `agriturismo-la-costa-capergnanica`
   - indirizzo: Via Piacenza, 137/139, 26013 Crema CR
29. **Agriturismo La Torre** — Capergnanica
   - slug: `agriturismo-la-torre-capergnanica`
   - indirizzo: Via XXIV Maggio, 31, 26010 Ripalta Cremasca CR
30. **Casa Senatore** — Capestrano
   - slug: `casa-senatore-capestrano`
   - indirizzo: 67022 Capestrano AQ
31. **La Casa Di Fedora** — Capestrano
   - slug: `la-casa-di-fedora-capestrano`
   - indirizzo: Via Vallone, 67022 Capestrano AQ
32. **Bed & Breakfast Villa Vicini** — Capiago Intimiano
   - slug: `bed-breakfast-villa-vicini-capiago-intimiano`
   - indirizzo: Via Brugnago, 32, 22070 Capiago Intimiano CO
33. **Brusco Bar & Rooms** — Capiago Intimiano
   - slug: `brusco-bar-rooms-capiago-intimiano`
   - indirizzo: Via Chigollo, 7, 22070 Capiago Intimiano CO
34. **Il Melograno Holiday** — Capiago Intimiano
   - slug: `il-melograno-holiday-capiago-intimiano`
   - indirizzo: Via Giustizia e Libertà, 8, 22100 Como CO
35. **La Locanda dell'Oca Bianca** — Capiago Intimiano
   - slug: `la-locanda-dell-oca-bianca-capiago-intimiano`
   - indirizzo: Via Canturina, 251, 22100 Como CO