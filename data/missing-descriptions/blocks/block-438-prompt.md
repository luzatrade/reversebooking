# Blocco 438/500 — 35 strutture senza descrizione IT

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

1. **Edelweiss Alpine Nature Hotel** — Carisolo
   - slug: `edelweiss-alpine-nature-hotel-carisolo`
   - indirizzo: Via N. Bolognini, 120, 38086 Pinzolo TN
2. **Fulun Mountain Lodge** — Carisolo
   - slug: `fulun-mountain-lodge-carisolo`
   - indirizzo: Viale Dolomiti, 15/D, 38086 Giustino TN
3. **Garni Al Nardis b&b hotel** — Carisolo
   - slug: `garni-al-nardis-b-b-hotel-carisolo`
   - indirizzo: Via Roncac, 8, 38080 Carisolo TN
4. **Hotel Lory Pinzolo** — Carisolo
   - slug: `hotel-lory-pinzolo-carisolo`
   - indirizzo: Via Sorano, 35, 38086 Pinzolo TN
5. **Lefay Resort & SPA Dolomiti** — Carisolo
   - slug: `lefay-resort-spa-dolomiti-carisolo`
   - indirizzo: Via Alpe di Grual, 16, 38086 Pinzolo TN
6. **Residence Rta La Rosa Delle Dolomiti** — Carisolo
   - slug: `residence-rta-la-rosa-delle-dolomiti-carisolo`
   - indirizzo: Via Alcide de Gasperi, 5, 38080 Carisolo TN
7. **Ristorante Locanda dal Giulio al Fratè** — Carisolo
   - slug: `ristorante-locanda-dal-giulio-al-frate-carisolo`
   - indirizzo: SS239, 5, 38086 Sant'Antonio di Mavignola TN
8. **Agriturismo Maniero Cerulli** — Carlantino
   - slug: `agriturismo-maniero-cerulli-carlantino`
   - indirizzo: Contrada Conca D'Oro, 71035 Celenza Valfortore FG
9. **Agriturismo Occhito** — Carlantino
   - slug: `agriturismo-occhito-carlantino`
   - indirizzo: Cda Fosso Giuriachi, 86040 Macchia Valfortore CB
10. **Campo della Corte** — Carlantino
   - slug: `campo-della-corte-carlantino`
   - indirizzo: Nucleo di Stefano, 1, 82024 Castelpagano BN
11. **l'Oasi di Rosi - Affittacamere** — Carlantino
   - slug: `l-oasi-di-rosi-affittacamere-carlantino`
   - indirizzo: Contrada Purgatorio, 71033 Casalnuovo Monterotaro FG
12. **Camping Ranocchio** — Carlazzo
   - slug: `camping-ranocchio-carlazzo`
   - indirizzo: Via Al Lago, 139 A, 22010 Carlazzo CO
13. **GLI ULIVI** — Carlazzo
   - slug: `gli-ulivi-carlazzo`
   - indirizzo: Via Panoramica, 58, 22010 Carlazzo CO
14. **Hotel EUROPA** — Carlazzo
   - slug: `hotel-europa-carlazzo`
   - indirizzo: Lungo Lago Giacomo Matteotti, 19, 22018 Porlezza CO
15. **La Cascina** — Carlazzo
   - slug: `la-cascina-carlazzo`
   - indirizzo: 22010 Carlazzo CO
16. **Villa Isella Loggio** — Carlazzo
   - slug: `villa-isella-loggio-carlazzo`
   - indirizzo: Via Cadreglio, 29, 22010 Carlazzo CO
17. **Villaggio turistico lago dorato** — Carlazzo
   - slug: `villaggio-turistico-lago-dorato-carlazzo`
   - indirizzo: Via Al Lago, 139, 22010 Carlazzo CO
18. **Workation Castle** — Carlazzo
   - slug: `workation-castle-carlazzo`
   - indirizzo: Via Castello, 10, 22010 Castello CO
19. **Agriturismo Le Chiuse** — Carlentini
   - slug: `agriturismo-le-chiuse-carlentini`
   - indirizzo: Contrada Contado, snc, 96013 Carlentini SR
20. **Albergo Trattoria del Sole** — Carlentini
   - slug: `albergo-trattoria-del-sole-carlentini`
   - indirizzo: Via Trogilo, 11, 96010 Priolo Gargallo SR
21. **B.& B. Cavour** — Carlentini
   - slug: `b-b-cavour-carlentini`
   - indirizzo: Via Cavour, 53, 96013 Carlentini SR
22. **B&B Vittoria House** — Carlentini
   - slug: `b-b-vittoria-house-carlentini`
   - indirizzo: Contrada Madonna Marcellino, 96013 Carlentini SR
23. **Borgo Nocchiara** — Carlentini
   - slug: `borgo-nocchiara-carlentini`
   - indirizzo: SP95, 96010 Villasmundo SR
24. **Hotel & Residence | Sicilia | Catania** — Carlentini
   - slug: `hotel-residence-sicilia-catania-carlentini`
   - indirizzo: Via Libeccio, 50, 95121 Catania CT
25. **i Santuzzi BeB** — Carlentini
   - slug: `i-santuzzi-beb-carlentini`
   - indirizzo: V. Antonio Gramsci, 52, 96013 Carlentini Nord SR
26. **Il Giardino del Sole** — Carlentini
   - slug: `il-giardino-del-sole-carlentini`
   - indirizzo: Contrada San Demetrio, sn, 96013 Carlentini SR
27. **La Terrazza di Cirico'** — Carlentini
   - slug: `la-terrazza-di-cirico-carlentini`
   - indirizzo: Contrada "Ciricò, snc, 96013 Carlentini SR
28. **Le Terre Di San Domenico** — Carlentini
   - slug: `le-terre-di-san-domenico-carlentini`
   - indirizzo: contrada san domenico sp.57 km 4 Carlentini, 96010 Brucoli SR
29. **Villa Rea Comfort & Relax** — Carlentini
   - slug: `villa-rea-comfort-relax-carlentini`
   - indirizzo: Via Padre Luciano Aletta, 6, 96013 Carlentini SR
30. **Villa Sant'Antonio** — Carlentini
   - slug: `villa-sant-antonio-carlentini`
   - indirizzo: 96011 Augusta SR
31. **Agriturismo I Guardiani** — Carlino
   - slug: `agriturismo-i-guardiani-carlino`
   - indirizzo: Via Levaduzza, 30, 33050 Carlino UD
32. **Agriturismo il Picchio - Az.vinicola CASALI AURELIA** — Carlino
   - slug: `agriturismo-il-picchio-az-vinicola-casali-aureli-carlino`
   - indirizzo: Via Nazionale, 3, 33050 Castions di Strada UD
33. **Alla Posta - Albergo - Camere - Affittacamere** — Carlino
   - slug: `alla-posta-albergo-camere-affittacamere-carlino`
   - indirizzo: Via Roma, 30, 33058 San Giorgio di Nogaro UD
34. **Hotel Adria** — Carlino
   - slug: `hotel-adria-carlino`
   - indirizzo: Viale Centrale, 23, 33054 Lignano Sabbiadoro UD
35. **Hotel Ambra (FRONTE MARE)** — Carlino
   - slug: `hotel-ambra-fronte-mare-carlino`
   - indirizzo: Lungomare Trieste, 124/A, 33054 Lignano Sabbiadoro UD