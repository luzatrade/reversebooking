# Blocco 490/500 — 35 strutture senza descrizione IT

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

1. **Hotel Brunner - Merano** — Merano
   - slug: `hotel-brunner-merano-merano`
   - indirizzo: Via Giuseppe Verdi, 31/A, 39012 Merano BZ
2. **Hotel Europa Splendid** — Merano
   - slug: `hotel-europa-splendid-merano`
   - indirizzo: C.so della Libertà, 178, 39012 Merano BZ
3. **Hotel Meranerhof** — Merano
   - slug: `hotel-meranerhof-merano`
   - indirizzo: Via A. Manzoni, 1, 39012 Merano BZ
4. **Hotel Ristorante Pizzeria Cavallino - S' Rössl** — Merano
   - slug: `hotel-ristorante-pizzeria-cavallino-s-rossl-merano`
   - indirizzo: Via delle Palade, 105, 39012 Merano BZ
5. **Hotel Sittnerhof Meran** — Merano
   - slug: `hotel-sittnerhof-meran-merano`
   - indirizzo: Giuseppe-Verdi-Straße, 58, 39012 Merano BZ
6. **Hotel Terme Merano** — Merano
   - slug: `hotel-terme-merano-merano`
   - indirizzo: Piazza Terme, 1, 39012 Merano BZ
7. **Hotel Villa Westend** — Merano
   - slug: `hotel-villa-westend-merano`
   - indirizzo: Via Josef Speckbacher, 9, 39012 Merano BZ
8. **Manzoni Rooms** — Merano
   - slug: `manzoni-rooms-merano`
   - indirizzo: -Manzoni-Straße, Via A. Manzoni, 41, 39012 Merano BZ
9. **Villa Bavaria & Residenz Palma** — Merano
   - slug: `villa-bavaria-residenz-palma-merano`
   - indirizzo: Via Salita Alla Chiesa, 15, 39012 Merano BZ
10. **Windsor Merano Hotel & Suites** — Merano
   - slug: `windsor-merano-hotel-suites-merano`
   - indirizzo: Via Rezia, 2, 39012 Merano BZ
11. **Garibaldi R&B Messina** — Messina
   - slug: `garibaldi-r-b-messina-messina`
   - indirizzo: Via G. Garibaldi, 108, 98122 Messina ME
12. **Hotel La Residenza** — Messina
   - slug: `hotel-la-residenza-messina`
   - indirizzo: Via XXVII Luglio, 115, 98123 Messina ME
13. **Hotel Messenion** — Messina
   - slug: `hotel-messenion-messina`
   - indirizzo: Via Francesco Faranda, 7, 98123 Messina ME
14. **Hotel Residence CineApollo** — Messina
   - slug: `hotel-residence-cineapollo-messina`
   - indirizzo: Via S. Filippo Bianchi, 23, 98121 Messina ME
15. **Hotel Sant'Elia** — Messina
   - slug: `hotel-sant-elia-messina`
   - indirizzo: Via I Settembre, 67, 98122 Messina ME
16. **Hotel Touring** — Messina
   - slug: `hotel-touring-messina`
   - indirizzo: Via Nicola Scotto, 17, 98122 Messina ME
17. **ISOLA - Smart Accomodation** — Messina
   - slug: `isola-smart-accomodation-messina`
   - indirizzo: Via Cesare Battisti, 155, 98122 Messina ME
18. **Jolly Charme Suite** — Messina
   - slug: `jolly-charme-suite-messina`
   - indirizzo: Via G. Garibaldi, 126, 98122 Messina ME
19. **Messina 41 CondHotel** — Messina
   - slug: `messina-41-condhotel-messina`
   - indirizzo: Viale Boccetta, 24, 98122 Messina ME
20. **Opera Relais 85** — Messina
   - slug: `opera-relais-85-messina`
   - indirizzo: Via I Settembre, 85, 98122 Messina ME
21. **Opera Relais R&B** — Messina
   - slug: `opera-relais-r-b-messina`
   - indirizzo: Via I Settembre, 111, 98122 Messina ME
22. **Residence Acqua del Conte** — Messina
   - slug: `residence-acqua-del-conte-messina`
   - indirizzo: Viale Italia, 44, 98124 Messina ME
23. **Residence San Martino** — Messina
   - slug: `residence-san-martino-messina`
   - indirizzo: Via Crema, 2, 98124 Messina ME
24. **Royal Palace Hotel Messina** — Messina
   - slug: `royal-palace-hotel-messina-messina`
   - indirizzo: Via T. Cannizzaro, 3, 98123 Messina ME
25. **VMaison Hotel Messina** — Messina
   - slug: `vmaison-hotel-messina-messina`
   - indirizzo: V.le Europa, 59, 98100 Messina ME
26. **B&B "Caramelle"** — Modena
   - slug: `b-b-caramelle-modena`
   - indirizzo: Via Luigi Poletti, 76, 41121 Modena MO, Italia
27. **B&B Casagrande CIN IT036023C1YNPPRJLF** — Modena
   - slug: `b-b-casagrande-cin-it036023c1ynpprjlf-modena`
   - indirizzo: Str. Sant'Anna, 229, 41122 Modena MO, Italia
28. **B&B HOTEL Modena** — Modena
   - slug: `b-b-hotel-modena-modena`
   - indirizzo: Via Emilia Est, 441, 41122 Modena MO, Italia
29. **B&B Igea.50** — Modena
   - slug: `b-b-igea-50-modena`
   - indirizzo: Via Igea, 50, 41126 Modena MO, Italia
30. **B&B Le Noci di Feo** — Modena
   - slug: `b-b-le-noci-di-feo-modena`
   - indirizzo: Strada​ Albareto, 422, 41122 Modena MO, Italia
31. **B&B Modena Sant'Eufemia 30** — Modena
   - slug: `b-b-modena-sant-eufemia-30-modena`
   - indirizzo: Largo Sant'eufemia, 41121 Modena MO, Italia
32. **B&B ViaEmilia** — Modena
   - slug: `b-b-viaemilia-modena`
   - indirizzo: Via Emilia Est, 1561, 41122 Modena MO, Italia
33. **B&B Villa Firefly** — Modena
   - slug: `b-b-villa-firefly-modena`
   - indirizzo: Stradello Camurri, 11, 41122 Modena MO, Italia
34. **Casa Mappamondo** — Modena
   - slug: `casa-mappamondo-modena`
   - indirizzo: Via Luigi Albinelli, 7, 41121 Modena MO, Italia
35. **Country Resort Modena** — Modena
   - slug: `country-resort-modena-modena`
   - indirizzo: Str. Fossa Monda Nord, 163, 41122 Modena MO, Italia