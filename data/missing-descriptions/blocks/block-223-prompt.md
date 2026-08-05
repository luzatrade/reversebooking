# Blocco 223/500 — 35 strutture senza descrizione IT

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

1. **La Terrazza** — Barga
   - slug: `la-terrazza-barga`
   - indirizzo: Piazza Beato Michele, 24, 55051 Barga LU
2. **Le sette fontane** — Barga
   - slug: `le-sette-fontane-barga`
   - indirizzo: Via Marzabotto, 2, 55051 Mologno LU
3. **Loft Moorings** — Barga
   - slug: `loft-moorings-barga`
   - indirizzo: Via Guglielmo Marconi, 43, 55051 Barga LU
4. **Nel Cielo di Barga Bed & Breakfast** — Barga
   - slug: `nel-cielo-di-barga-bed-breakfast-barga`
   - indirizzo: Vicolo Nardi, 5, 55051 Barga LU
5. **The Liberties Tuscany** — Barga
   - slug: `the-liberties-tuscany-barga`
   - indirizzo: Via Guglielmo Marconi, 33, 55051 Barga LU
6. **Villa Gherardi Hostel** — Barga
   - slug: `villa-gherardi-hostel-barga`
   - indirizzo: V. dell'Acquedotto, 18, 55051 Barga LU
7. **Villa Moorings Hotel** — Barga
   - slug: `villa-moorings-hotel-barga`
   - indirizzo: Via Roma, 18, 55051 Barga LU
8. **Agriturismo Le Pale** — Bargagli
   - slug: `agriturismo-le-pale-bargagli`
   - indirizzo: Via Pale, 12, 16031 Bogliasco GE
9. **Albergo Boccadasse** — Bargagli
   - slug: `albergo-boccadasse-bargagli`
   - indirizzo: Via Boccadasse, 14A, 16146 Genova GE
10. **B&B Cà dei Frè** — Bargagli
   - slug: `b-b-ca-dei-fre-bargagli`
   - indirizzo: Via di Serropiano, 13/b, 16165 Genova GE
11. **B&B Casa Bea** — Bargagli
   - slug: `b-b-casa-bea-bargagli`
   - indirizzo: Via Monte Sabotino, 16, 16021 Bargagli GE
12. **B&B TRE PINI** — Bargagli
   - slug: `b-b-tre-pini-bargagli`
   - indirizzo: Via E. Giacomazzi, 274, 16021 Bargagli GE
13. **Casa per ferie Collegio Emiliani** — Bargagli
   - slug: `casa-per-ferie-collegio-emiliani-bargagli`
   - indirizzo: Via Andrea Provana di Leyni, 15, 16167 Genova GE
14. **Hotel Iris** — Bargagli
   - slug: `hotel-iris-bargagli`
   - indirizzo: Via Gabriele Rossetti, 3, 16148, 44.38861843216995, 8, 99790051586851 Genova GE
15. **Hotel Villa Bonera - Genova Nervi** — Bargagli
   - slug: `hotel-villa-bonera-genova-nervi-bargagli`
   - indirizzo: Via Roberto Sarfatti, 8, 16167 Genova GE
16. **Hotel Villa Flora** — Bargagli
   - slug: `hotel-villa-flora-bargagli`
   - indirizzo: SS 1, 5, 16031 Bogliasco GE
17. **Il Maestro di Tourlach - Luxury room in the woods with two pools** — Bargagli
   - slug: `il-maestro-di-tourlach-luxury-room-in-the-woods-bargagli`
   - indirizzo: Via Pasubio, 15, 16021 Bargagli GE
18. **La Torretta bed & breakfast** — Bargagli
   - slug: `la-torretta-bed-breakfast-bargagli`
   - indirizzo: Località Scoffera, 116, 16029 Torriglia GE
19. **Agriturismo B&B L'Ciabot** — Barge
   - slug: `agriturismo-b-b-l-ciabot-barge`
   - indirizzo: Borgata Colletta, 40, 12034 Paesana CN
20. **B&B Bertaina Mauro** — Barge
   - slug: `b-b-bertaina-mauro-barge`
   - indirizzo: Località Trebbie, 47A, 12030 Cavallermaggiore CN
21. **B&B Domus Aurea** — Barge
   - slug: `b-b-domus-aurea-barge`
   - indirizzo: Via Gualtieri, 37, 12037 Saluzzo CN
22. **B&B i 99 ulivi** — Barge
   - slug: `b-b-i-99-ulivi-barge`
   - indirizzo: Via Macello, 25, 10061 Cavour TO
23. **B&B Il bosco delle terrecotte** — Barge
   - slug: `b-b-il-bosco-delle-terrecotte-barge`
   - indirizzo: Via Vigne di Spagna (numeri pari), 18, 12032 Barge CN
24. **B&B Il Giardino Dei Semplici** — Barge
   - slug: `b-b-il-giardino-dei-semplici-barge`
   - indirizzo: Via S. Giacomo, 12, 12030 Manta CN
25. **Barba Bertu Bed&Breakfast** — Barge
   - slug: `barba-bertu-bed-breakfast-barge`
   - indirizzo: Piazza Marconi, Via Val Varaita, 1, 12020 Frassino CN
26. **Ca' Battisti** — Barge
   - slug: `ca-battisti-barge`
   - indirizzo: Via Carle Costanzo, 94, 12032 Barge CN
27. **le faye B&B - Home restaurant** — Barge
   - slug: `le-faye-b-b-home-restaurant-barge`
   - indirizzo: V. Belvedere Villa, 2, 12030 Envie CN
28. **Albergo Splendid meublé** — Barghe
   - slug: `albergo-splendid-meuble-barghe`
   - indirizzo: Via Pietro da Salò, 73, 25087 Salò BS
29. **B&B Casa di Stella** — Barghe
   - slug: `b-b-casa-di-stella-barghe`
   - indirizzo: Via S. Martino, 118, 25070 Sabbio Chiese BS
30. **B&B La Gemma** — Barghe
   - slug: `b-b-la-gemma-barghe`
   - indirizzo: Via Gardesana, 116, 25077 Roè Volciano BS
31. **Hotel Alla Sorgente** — Barghe
   - slug: `hotel-alla-sorgente-barghe`
   - indirizzo: Via Zublino, 20, 25010 San Felice del Benaco BS
32. **Hotel Atelier Gardone Riviera & Beach** — Barghe
   - slug: `hotel-atelier-gardone-riviera-beach-barghe`
   - indirizzo: Corso Giuseppe Zanardelli, 28, 25083 Gardone Riviera BS
33. **hotel colomber** — Barghe
   - slug: `hotel-colomber-barghe`
   - indirizzo: Via Val di Sur, 111, 25083 Gardone Riviera BS
34. **Ostello Sociale Borgo Venno** — Barghe
   - slug: `ostello-sociale-borgo-venno-barghe`
   - indirizzo: Via Roma, 4, 25074 Lavenone BS
35. **Affittacamere B&B Sotto le Stelle** — Bari Sardo
   - slug: `affittacamere-b-b-sotto-le-stelle-bari-sardo`
   - indirizzo: Via Alessandro Manzoni, 5, 08042 Bari Sardo OG