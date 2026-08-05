# Blocco 300/500 — 35 strutture senza descrizione IT

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

1. **Hotel Ligure** — Borgo San Dalmazzo
   - slug: `hotel-ligure-borgo-san-dalmazzo`
   - indirizzo: Via Savigliano, 11, 12100 Cuneo CN
2. **Hotel Torrismondi** — Borgo San Dalmazzo
   - slug: `hotel-torrismondi-borgo-san-dalmazzo`
   - indirizzo: Via Michele Coppino, 33, 12100 Cuneo CN
3. **Il melograno** — Borgo San Dalmazzo
   - slug: `il-melograno-borgo-san-dalmazzo`
   - indirizzo: Via Dalmazzo Grasso, 6, 12011 Borgo San Dalmazzo CN
4. **Le Lanterne** — Borgo San Dalmazzo
   - slug: `le-lanterne-borgo-san-dalmazzo`
   - indirizzo: S.da Beguda, 105, 12011 Borgo San Dalmazzo CN
5. **Hotel Cristallo** — Borgo San Giacomo
   - slug: `hotel-cristallo-borgo-san-giacomo`
   - indirizzo: Viale della Stazione, 12A, 25122 Brescia BS
6. **Lenotel** — Borgo San Giacomo
   - slug: `lenotel-borgo-san-giacomo`
   - indirizzo: Via Amerigo Vespucci, 10, 25024 Leno BS
7. **Affittacamere Vittoria** — Borgo San Giovanni
   - slug: `affittacamere-vittoria-borgo-san-giovanni`
   - indirizzo: Via della Vittoria, 15, 20098 Sesto Ulteriano MI
8. **Agriturismo Rosita** — Borgo San Giovanni
   - slug: `agriturismo-rosita-borgo-san-giovanni`
   - indirizzo: Via XX Settembre, nr.11, 26838 Tavazzano con Villavesco LO
9. **Agriturismo San Bruno** — Borgo San Giovanni
   - slug: `agriturismo-san-bruno-borgo-san-giovanni`
   - indirizzo: Cascina S.Bruno, 20078 San Colombano al Lambro MI
10. **Albergo Liguria** — Borgo San Giovanni
   - slug: `albergo-liguria-borgo-san-giovanni`
   - indirizzo: Via Giuseppe Ripamonti, 134, 20141 Milano MI
11. **Boutique Hotel Borgo Nuovo** — Borgo San Giovanni
   - slug: `boutique-hotel-borgo-nuovo-borgo-san-giovanni`
   - indirizzo: Via S. Bernardo, 16/7, 20139 Milano MI
12. **Cascina Sesmones Hotel & Restaurant** — Borgo San Giovanni
   - slug: `cascina-sesmones-hotel-restaurant-borgo-san-giovanni`
   - indirizzo: Cascina Sesmones, 26854 Cornegliano Laudense LO
13. **Cattleya Rooms & Breakfast** — Borgo San Giovanni
   - slug: `cattleya-rooms-breakfast-borgo-san-giovanni`
   - indirizzo: Via Milano, 30, 26025 Pandino CR
14. **Hotel Alessander** — Borgo San Giovanni
   - slug: `hotel-alessander-borgo-san-giovanni`
   - indirizzo: Via Cortina d'Ampezzo, 17, 20139 Milano MI
15. **Hotel San Giorgio Lodi** — Borgo San Giovanni
   - slug: `hotel-san-giorgio-lodi-borgo-san-giovanni`
   - indirizzo: Strada Statale 9 Via Emilia, 58, 26838 Tavazzano con Villavesco LO
16. **Locanda La Cascina** — Borgo San Giovanni
   - slug: `locanda-la-cascina-borgo-san-giovanni`
   - indirizzo: Viale Lombardia, 5, 20098 San Giuliano Milanese MI
17. **New Inn Apartments Srl** — Borgo San Giovanni
   - slug: `new-inn-apartments-srl-borgo-san-giovanni`
   - indirizzo: Via Parini ang.via Manzoni , 10, 20060, 20076 Mediglia MI
18. **Agriturismo Borgo Scaffaia** — Borgo San Lorenzo
   - slug: `agriturismo-borgo-scaffaia-borgo-san-lorenzo`
   - indirizzo: Località S. Giusto a Fortuna, 27, 50037 San Piero a Sieve FI
19. **Agriturismo Palazzo Vecchio** — Borgo San Lorenzo
   - slug: `agriturismo-palazzo-vecchio-borgo-san-lorenzo`
   - indirizzo: Località Piazzano, 41, 50032 Borgo San Lorenzo FI
20. **Agriturismo Podere Badia ValDrago** — Borgo San Lorenzo
   - slug: `agriturismo-podere-badia-valdrago-borgo-san-lorenzo`
   - indirizzo: Podere Badia, via di Grezzano, 113, 50032 Borgo San Lorenzo FI
21. **Agriturismo Ristorante Stazione di Monta** — Borgo San Lorenzo
   - slug: `agriturismo-ristorante-stazione-di-monta-borgo-san-lorenzo`
   - indirizzo: Località Rupecanina, 32, 50039 Vicchio FI
22. **Albergo La Rosa** — Borgo San Lorenzo
   - slug: `albergo-la-rosa-borgo-san-lorenzo`
   - indirizzo: Via Faentina, 105, 50032 Ronta FI
23. **Albergo Ristorante Tre Fiumi** — Borgo San Lorenzo
   - slug: `albergo-ristorante-tre-fiumi-borgo-san-lorenzo`
   - indirizzo: Via Madonna dei Tre Fiumi, 16, 50032 Borgo San Lorenzo FI
24. **B&B Figura Apartaments CIN: IT048004B4DUJ2WWGU** — Borgo San Lorenzo
   - slug: `b-b-figura-apartaments-cin-it048004b4duj2wwgu-borgo-san-lorenzo`
   - indirizzo: Via Benedetto Croce, 35, 50032 Borgo San Lorenzo FI
25. **B&B Il Borghetto** — Borgo San Lorenzo
   - slug: `b-b-il-borghetto-borgo-san-lorenzo`
   - indirizzo: località Ferracciano, 11, 50032 Borgo San Lorenzo FI
26. **Calamandrei** — Borgo San Lorenzo
   - slug: `calamandrei-borgo-san-lorenzo`
   - indirizzo: beb calamandrei, Via Piero Calamandrei, 1, 50032 Borgo San Lorenzo FI
27. **Hotel Borgo** — Borgo San Lorenzo
   - slug: `hotel-borgo-borgo-san-lorenzo`
   - indirizzo: Borgo Ognissanti, 67, 50123 Firenze FI
28. **Hotel Locanda degli Artisti** — Borgo San Lorenzo
   - slug: `hotel-locanda-degli-artisti-borgo-san-lorenzo`
   - indirizzo: Piazza Romagnoli, 2, 50032 Borgo San Lorenzo FI
29. **HOTEL MARRANI** — Borgo San Lorenzo
   - slug: `hotel-marrani-borgo-san-lorenzo`
   - indirizzo: Via Faentina, 128, 50032 Ronta FI
30. **Il Nido di Gabbiano** — Borgo San Lorenzo
   - slug: `il-nido-di-gabbiano-borgo-san-lorenzo`
   - indirizzo: Via di Gabbiano, 15, 50038 Scarperia e San Piero FI
31. **La Felicina, Accademia con Albergo®** — Borgo San Lorenzo
   - slug: `la-felicina-accademia-con-albergo-borgo-san-lorenzo`
   - indirizzo: Piazza Colonna, 14, 50037 San Piero a Sieve FI
32. **Locanda Di Alberi** — Borgo San Lorenzo
   - slug: `locanda-di-alberi-borgo-san-lorenzo`
   - indirizzo: Via Gricignano, 17, 50032 Poggiolo-Salaiole, Borgo San Lorenzo FI
33. **Monsignor della Casa Country Resort & Spa** — Borgo San Lorenzo
   - slug: `monsignor-della-casa-country-resort-spa-borgo-san-lorenzo`
   - indirizzo: V. di Mucciano, 7, 50032 Borgo San Lorenzo FI
34. **Park Hotel Ripaverde** — Borgo San Lorenzo
   - slug: `park-hotel-ripaverde-borgo-san-lorenzo`
   - indirizzo: Viale Giovanni XXIII, 36, 50032 Borgo San Lorenzo FI
35. **Villa la Topaia** — Borgo San Lorenzo
   - slug: `villa-la-topaia-borgo-san-lorenzo`
   - indirizzo: Via S. Giovanni Maggiore, 58, 50032 Borgo San Lorenzo FI