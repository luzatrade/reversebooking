# Blocco 297/500 — 35 strutture senza descrizione IT

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

1. **Villa Paradiso** — Borgio Verezzi
   - slug: `villa-paradiso-borgio-verezzi`
   - indirizzo: Via Nazario Sauro, 172, 17022 Borgio SV
2. **Villino Saraceno Rostain 1911** — Borgio Verezzi
   - slug: `villino-saraceno-rostain-1911-borgio-verezzi`
   - indirizzo: Via della Cornice, 20, 17022 Borgio Verezzi SV
3. **Agriturismo Il Pino** — Borgo a Mozzano
   - slug: `agriturismo-il-pino-borgo-a-mozzano`
   - indirizzo: Località Al Pino, 3, 55064 San Martino in Freddana - Monsagrati LU
4. **Agriturismo la Casetta di Butia** — Borgo a Mozzano
   - slug: `agriturismo-la-casetta-di-butia-borgo-a-mozzano`
   - indirizzo: Località, 55023 Borgo a Mozzano LU
5. **Albergo Diffuso -I Borghi della Maddalena** — Borgo a Mozzano
   - slug: `albergo-diffuso-i-borghi-della-maddalena-borgo-a-mozzano`
   - indirizzo: Piazza Giuseppe Garibaldi, 6, 55023 Borgo a Mozzano LU
6. **Azienda Agricola Macea** — Borgo a Mozzano
   - slug: `azienda-agricola-macea-borgo-a-mozzano`
   - indirizzo: Loc. Macea, N 2, 55023 Borgo a Mozzano LU
7. **B & B Via di Mezzo** — Borgo a Mozzano
   - slug: `b-b-via-di-mezzo-borgo-a-mozzano`
   - indirizzo: Via di Mezzo, 10, 55025 Calavorno LU
8. **Borgo Alfeo** — Borgo a Mozzano
   - slug: `borgo-alfeo-borgo-a-mozzano`
   - indirizzo: 55023 Borgo a Mozzano LU
9. **Borgo Giusto Tuscany** — Borgo a Mozzano
   - slug: `borgo-giusto-tuscany-borgo-a-mozzano`
   - indirizzo: Loc. Soccolognora, 6, 55023 Partigliano LU
10. **Hotel Sweet Borgo** — Borgo a Mozzano
   - slug: `hotel-sweet-borgo-borgo-a-mozzano`
   - indirizzo: Str. Vicinale di Partigliano, 55023 Borgo a Mozzano LU
11. **Hotel Villa Volpi** — Borgo a Mozzano
   - slug: `hotel-villa-volpi-borgo-a-mozzano`
   - indirizzo: V. di Mastiano e Gugliano, 3597, 55100 Lucca LU
12. **I Grocchi** — Borgo a Mozzano
   - slug: `i-grocchi-borgo-a-mozzano`
   - indirizzo: Località Lappato di Sopra, Cerreto, 55023 Borgo a Mozzano LU
13. **Le Casine del Borgo** — Borgo a Mozzano
   - slug: `le-casine-del-borgo-borgo-a-mozzano`
   - indirizzo: Via della Repubblica, 55, 55023 Fabbriche di Vergemoli LU
14. **Morianese Residence** — Borgo a Mozzano
   - slug: `morianese-residence-borgo-a-mozzano`
   - indirizzo: Via di Moriano, 5975, 55100 Lucca LU
15. **VILLA GUINIGI EXCLUSIVE RESIDENCE & POOL** — Borgo a Mozzano
   - slug: `villa-guinigi-exclusive-residence-pool-borgo-a-mozzano`
   - indirizzo: Via di Matraia, 22, 55018 Matraia LU
16. **Agritur Al Marter** — Borgo Chiese
   - slug: `agritur-al-marter-borgo-chiese`
   - indirizzo: Strada per bisti, 2, 38067 Ledro TN
17. **Agritur La Polentera** — Borgo Chiese
   - slug: `agritur-la-polentera-borgo-chiese`
   - indirizzo: Via del Sorino, 44, 38089 Storo TN
18. **Albergo Hotel Castel Lodron** — Borgo Chiese
   - slug: `albergo-hotel-castel-lodron-borgo-chiese`
   - indirizzo: Via 24 Maggio, 41, 38089 Storo TN
19. **B&B LEDRO - Affittacamere** — Borgo Chiese
   - slug: `b-b-ledro-affittacamere-borgo-chiese`
   - indirizzo: Via Dromaè, 5, 38067 Mezzolago TN
20. **Barambana Rooms & Restaurant** — Borgo Chiese
   - slug: `barambana-rooms-restaurant-borgo-chiese`
   - indirizzo: Via di Vil, 68, 38089 Storo TN
21. **Borel Hotel** — Borgo Chiese
   - slug: `borel-hotel-borgo-chiese`
   - indirizzo: Via Vittorio Emanuele III, 12, 38085 Creto TN
22. **Garnì Dal Mozat** — Borgo Chiese
   - slug: `garni-dal-mozat-borgo-chiese`
   - indirizzo: Via Mario Bianchi, 26, 38067 Lenzumo TN
23. **Garnì Enjoy Ledro** — Borgo Chiese
   - slug: `garni-enjoy-ledro-borgo-chiese`
   - indirizzo: Via Alzer, 36, 38067 Pieve di Ledro TN
24. **Hotel Cadria** — Borgo Chiese
   - slug: `hotel-cadria-borgo-chiese`
   - indirizzo: Via Unità D'Italia, 25, 38067 Lenzumo TN
25. **Hotel Condino** — Borgo Chiese
   - slug: `hotel-condino-borgo-chiese`
   - indirizzo: Via Roma, 21, 38083 Borgo Chiese TN
26. **Hotel My Ledro** — Borgo Chiese
   - slug: `hotel-my-ledro-borgo-chiese`
   - indirizzo: Viale A. Foletto, 3, 38067 Pieve di Ledro TN
27. **Hotel Ristorante Mezzolago** — Borgo Chiese
   - slug: `hotel-ristorante-mezzolago-borgo-chiese`
   - indirizzo: Via Lungolago, 4, 38060 Ledro TN
28. **Ristorante Hotel Alla Perla** — Borgo Chiese
   - slug: `ristorante-hotel-alla-perla-borgo-chiese`
   - indirizzo: Via Giuseppe Garibaldi, 73, 38067 Ledro TN
29. **Ristorante Pizzeria Hotel Aurora** — Borgo Chiese
   - slug: `ristorante-pizzeria-hotel-aurora-borgo-chiese`
   - indirizzo: Via Statale del Caffaro, 139, 38083 Cimego TN
30. **Silvana - Hotel** — Borgo Chiese
   - slug: `silvana-hotel-borgo-chiese`
   - indirizzo: Via Nuova, 4, 38060 Pieve di Ledro TN
31. **Albergo Nord America** — Borgo d'Ale
   - slug: `albergo-nord-america-borgo-d-ale`
   - indirizzo: Corso Gabriele D'Annunzio, 149, 13043 Cigliano VC
32. **Hotel Ristorante & Pizzeria Lido Viverone** — Borgo d'Ale
   - slug: `hotel-ristorante-pizzeria-lido-viverone-borgo-d-ale`
   - indirizzo: Viale Lido Maggiore G. Arturo Croce, 28, 13886 Viverone BI
33. **Hotel Ristorante San Massimo** — Borgo d'Ale
   - slug: `hotel-ristorante-san-massimo-borgo-d-ale`
   - indirizzo: Corso XXV Aprile, 18, 13048 Santhià VC
34. **Tenuta Variselle Roppolo** — Borgo d'Ale
   - slug: `tenuta-variselle-roppolo-borgo-d-ale`
   - indirizzo: Via Roma, 19, 13883 Roppolo BI
35. **Agritur Pisani** — Borgo d'Anaunia
   - slug: `agritur-pisani-borgo-d-anaunia`
   - indirizzo: Frazione Salobbi, 7, 38012 Brez TN