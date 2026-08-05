# Blocco 140/500 — 35 strutture senza descrizione IT

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

1. **Lo Stallone Rent a Room** — Arconate
   - slug: `lo-stallone-rent-a-room-arconate`
   - indirizzo: Via per Cuggiono, 2, 20010 Buscate MI
2. **Moulin de la galette** — Arconate
   - slug: `moulin-de-la-galette-arconate`
   - indirizzo: Via Mulino Galletto, 20039 Canegrate MI
3. **Pizzeria/hotel Don Carlos** — Arconate
   - slug: `pizzeria-hotel-don-carlos-arconate`
   - indirizzo: Via Guglielmo Marconi, 58, 20010 Buscate MI
4. **Tower hotel Busto Arsizio - Malpensa** — Arconate
   - slug: `tower-hotel-busto-arsizio-malpensa-arconate`
   - indirizzo: Via Magenta, 14, 21052 Busto Arsizio VA
5. **Villa Verganti Veronesi** — Arconate
   - slug: `villa-verganti-veronesi-arconate`
   - indirizzo: Viale Lombardia, 33, 20001 Inveruno MI
6. **Al Giardino Segreto** — Arcore
   - slug: `al-giardino-segreto-arcore`
   - indirizzo: Via Luciano Manara, 21, 20900 Monza MB
7. **Albergo Platani** — Arcore
   - slug: `albergo-platani-arcore`
   - indirizzo: Via A. Casati, 49, 20862 Arcore MB
8. **B&B dell'olmo** — Arcore
   - slug: `b-b-dell-olmo-arcore`
   - indirizzo: Via dell'Olmo, 55, 20853 Biassono MB
9. **BEST WESTERN Plus BorgoLecco Hotel** — Arcore
   - slug: `best-western-plus-borgolecco-hotel-arcore`
   - indirizzo: Via Giacomo Matteotti, 2, 20862 Arcore MB
10. **Conte Durini Apartments & Rooms** — Arcore
   - slug: `conte-durini-apartments-rooms-arcore`
   - indirizzo: P.zza Durini Conte, 1, 20862 Arcore MB
11. **Cosmo Hotel Torri** — Arcore
   - slug: `cosmo-hotel-torri-arcore`
   - indirizzo: Via Torri Bianche, 4, 20871 Vimercate MB
12. **Il Colombee** — Arcore
   - slug: `il-colombee-arcore`
   - indirizzo: Via Colombe´, 14, 23874 Montevecchia LC
13. **La Casa di Elena** — Arcore
   - slug: `la-casa-di-elena-arcore`
   - indirizzo: Viale Brianza, 80, 20862 Cacciatori MB
14. **La Raffa House - Location per eventi privati e Casa Vacanze** — Arcore
   - slug: `la-raffa-house-location-per-eventi-privati-e-cas-arcore`
   - indirizzo: Via Gran Sasso, 46, 20862 Arcore MB
15. **Privilege Apartments** — Arcore
   - slug: `privilege-apartments-arcore`
   - indirizzo: Via Rossino, 3, 20871 Vimercate MB
16. **Ramona B&B** — Arcore
   - slug: `ramona-b-b-arcore`
   - indirizzo: Via Casiraghi e Riboldi, 17, 20853 Biassono MB
17. **Residence Cascina San Giovanni** — Arcore
   - slug: `residence-cascina-san-giovanni-arcore`
   - indirizzo: Via Michelangelo Buonarroti, 40/b, 20043 Arcore MB
18. **Ristorante Sant' Eustorgio** — Arcore
   - slug: `ristorante-sant-eustorgio-arcore`
   - indirizzo: Via F. Gilera, 1, 20862 Arcore MB
19. **Agriturismo San Michele** — Arcugnano
   - slug: `agriturismo-san-michele-arcugnano`
   - indirizzo: Str. Pergoletta, 118, 36100 Vicenza VI
20. **Agriturismo Valchegozzo** — Arcugnano
   - slug: `agriturismo-valchegozzo-arcugnano`
   - indirizzo: Via Lago di Fimon, 137, 36057 Arcugnano VI
21. **Alloggio alla Collina** — Arcugnano
   - slug: `alloggio-alla-collina-arcugnano`
   - indirizzo: Via Umberto I, n 50/52, 36057 Arcugnano VI
22. **B&B Il Suono del Bosco** — Arcugnano
   - slug: `b-b-il-suono-del-bosco-arcugnano`
   - indirizzo: Via S. Bernardino, 19, 36057 Arcugnano VI
23. **B&B La Quiete** — Arcugnano
   - slug: `b-b-la-quiete-arcugnano`
   - indirizzo: Via S. Felice, 7\a, 36057 Arcugnano VI
24. **Bob And Jenny's B&B** — Arcugnano
   - slug: `bob-and-jenny-s-b-b-arcugnano`
   - indirizzo: Borgo Berga, 140, 36100 Vicenza VI
25. **Camping e B&B Il Lago** — Arcugnano
   - slug: `camping-e-b-b-il-lago-arcugnano`
   - indirizzo: Via Monticello, 47, 36057 Arcugnano VI
26. **Casa Felice - soggiorni di relax, lavoro e gruppo ad Arcugnano** — Arcugnano
   - slug: `casa-felice-soggiorni-di-relax-lavoro-e-gruppo-a-arcugnano`
   - indirizzo: Via Paoloni, 23, 36057 Arcugnano VI
27. **Da Pierina** — Arcugnano
   - slug: `da-pierina-arcugnano`
   - indirizzo: Via Lago di Fimon, 108, 36057 Arcugnano VI
28. **Fattoria le Vegre - Azienda vitivinicola - Agriturismo con camere - Degustazione Vini Colli Berici** — Arcugnano
   - slug: `fattoria-le-vegre-azienda-vitivinicola-agrituris-arcugnano`
   - indirizzo: Via Vegre, 36, 36057 Arcugnano VI
29. **Relais Villa Gozzi B&B** — Arcugnano
   - slug: `relais-villa-gozzi-b-b-arcugnano`
   - indirizzo: Via Pilla, 6, 36057 Arcugnano VI
30. **Villa Magnolia** — Arcugnano
   - slug: `villa-magnolia-arcugnano`
   - indirizzo: Via Spianzana, 15, 36057 Arcugnano VI
31. **Villa Michelangelo Vicenza - Starhotels Collezione** — Arcugnano
   - slug: `villa-michelangelo-vicenza-starhotels-collezione-arcugnano`
   - indirizzo: Via Sacco, 35, 36057 Arcugnano VI
32. **Agriturismo Carrucana** — Ardara
   - slug: `agriturismo-carrucana-ardara`
   - indirizzo: Strada Statale 127 Settentrionale Sarda, 07030 Laerru SS
33. **Austinu&Bingedda's home** — Ardara
   - slug: `austinu-bingedda-s-home-ardara`
   - indirizzo: Via Comita, 3, 07010 Ardara SS
34. **B&B "Il Pavone"** — Ardara
   - slug: `b-b-il-pavone-ardara`
   - indirizzo: Via Ginevra Zanetti, 93, 07100 Sassari SS
35. **B&B La Casa sui Tetti** — Ardara
   - slug: `b-b-la-casa-sui-tetti-ardara`
   - indirizzo: Via Monserrato, 16, 07014 Ozieri SS