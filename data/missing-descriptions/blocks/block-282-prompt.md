# Blocco 282/500 — 35 strutture senza descrizione IT

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

1. **Guesthouse La Briosa Nicole** — Bogliasco
   - slug: `guesthouse-la-briosa-nicole-bogliasco`
   - indirizzo: Via XX Settembre, 36 nero/interno 7, 16121 Genova GE
2. **Hotel Esperia** — Bogliasco
   - slug: `hotel-esperia-bogliasco`
   - indirizzo: Via Val Cismon, 1, 16167 Genova GE
3. **Locanda Göghin** — Bogliasco
   - slug: `locanda-goghin-bogliasco`
   - indirizzo: Via Michele Massone, 1, 16030 Pieve Ligure GE
4. **RED AND BLUES MUSIC HOTEL GENOVA** — Bogliasco
   - slug: `red-and-blues-music-hotel-genova-bogliasco`
   - indirizzo: via A. Gramsci, 13, Via di Prè, 46r, 16126 Genova GE
5. **St. Martin House** — Bogliasco
   - slug: `st-martin-house-bogliasco`
   - indirizzo: C.so Europa, 44/int 1, 16132 Genova GE
6. **B&B Alpe Veglia** — Bognanco
   - slug: `b-b-alpe-veglia-bognanco`
   - indirizzo: Via Colla, 57, 28868 Varzo VB
7. **Bognanco Birra & Distillery** — Bognanco
   - slug: `bognanco-birra-distillery-bognanco`
   - indirizzo: Via Guglielmo Marconi, 1, 28842 Bognanco VB
8. **Hotel Belvedere Wellness & SPA** — Bognanco
   - slug: `hotel-belvedere-wellness-spa-bognanco`
   - indirizzo: Frazione Mozzio, 37, 28862 Crodo VB
9. **La Cà Rustica** — Bognanco
   - slug: `la-ca-rustica-bognanco`
   - indirizzo: Via Guglielmo Marconi, 25, 28842 Fonti VB
10. **YolkiPalki CAMPING VILLAGE** — Bognanco
   - slug: `yolkipalki-camping-village-bognanco`
   - indirizzo: Localita' Alpe Gomba, 21, 28842 Bognanco VB
11. **B&B La Cascina di Monia e Mario** — Bogogno
   - slug: `b-b-la-cascina-di-monia-e-mario-bogogno`
   - indirizzo: Via dei Cesari, 23, 28040 Borgo Ticino NO
12. **B&B Villa Giardini Susanna** — Bogogno
   - slug: `b-b-villa-giardini-susanna-bogogno`
   - indirizzo: Via Bogogno, 6/Veurno, 28013 Gattico-Veruno NO
13. **Cascina Del Tempo Sospeso** — Bogogno
   - slug: `cascina-del-tempo-sospeso-bogogno`
   - indirizzo: Via Casale Montecchio, 11, 28010 Bogogno NO
14. **Il Glicine Centenario** — Bogogno
   - slug: `il-glicine-centenario-bogogno`
   - indirizzo: Via Casale Montecchio, 24/A, 28010 Bogogno NO
15. **Relais Cà Nova** — Bogogno
   - slug: `relais-ca-nova-bogogno`
   - indirizzo: Via IV Novembre, 31, 28010 Bogogno NO
16. **Agrodolce** — Boissano
   - slug: `agrodolce-boissano`
   - indirizzo: Via Marici, 143, 17020 Boissano SV
17. **Albergo Excelsior** — Boissano
   - slug: `albergo-excelsior-boissano`
   - indirizzo: Via Aurelia, 57, 17025 Loano SV
18. **Albergo Villa Lina** — Boissano
   - slug: `albergo-villa-lina-boissano`
   - indirizzo: Corso Europa, 11/13, 17025 Loano SV
19. **B&B La Casa dei Gelsi** — Boissano
   - slug: `b-b-la-casa-dei-gelsi-boissano`
   - indirizzo: via Montocchio, 1, 17025 Loano SV
20. **B&B Nostromo.Loano** — Boissano
   - slug: `b-b-nostromo-loano-boissano`
   - indirizzo: Via Giacomo Matteotti, 100, 17025 Loano SV
21. **Cà da Franca** — Boissano
   - slug: `ca-da-franca-boissano`
   - indirizzo: Via Tricolore d' Italia, 17020 Boissano SV
22. **Hotel Concordia** — Boissano
   - slug: `hotel-concordia-boissano`
   - indirizzo: Corso Europa, 44, 17025 Loano SV
23. **La torretta** — Boissano
   - slug: `la-torretta-boissano`
   - indirizzo: 16, Via degli Alpini, 16 a/interno 1, 17025 Loano SV
24. **Lido Mazzini** — Boissano
   - slug: `lido-mazzini-boissano`
   - indirizzo: Piazzale Giuseppe Mazzini, 19, 17025 Loano SV
25. **Loano 2 Village** — Boissano
   - slug: `loano-2-village-boissano`
   - indirizzo: Via degli Alpini, 6, 17025 Loano SV
26. **Peter Pan** — Boissano
   - slug: `peter-pan-boissano`
   - indirizzo: Via Coste Rosse, 8, 17020 Boissano SV
27. **Villa Rosea** — Boissano
   - slug: `villa-rosea-boissano`
   - indirizzo: Via Piave, 13, 17025 Loano SV
28. **Antica Fonte** — Bojano
   - slug: `antica-fonte-bojano`
   - indirizzo: Via S. Bartolomeo, 330, 86021 Bojano CB
29. **B&B Bovianum** — Bojano
   - slug: `b-b-bovianum-bojano`
   - indirizzo: Corso F. Amatuzio, 155, 86021 Bojano CB
30. **B&B La Piazzetta, Bojano (CB)** — Bojano
   - slug: `b-b-la-piazzetta-bojano-cb-bojano`
   - indirizzo: Piazza Roma, 27, 86021 Bojano CB
31. **B&B MR Living** — Bojano
   - slug: `b-b-mr-living-bojano`
   - indirizzo: Via Colonno, 90, 86021 Bojano CB
32. **B&B Nelle stanze del Matese** — Bojano
   - slug: `b-b-nelle-stanze-del-matese-bojano`
   - indirizzo: via Taddeo, 50, 86021 Bojano CB
33. **B&B Santo Stefano** — Bojano
   - slug: `b-b-santo-stefano-bojano`
   - indirizzo: Via Moscatelli, 38, 86100 Santo Stefano CB
34. **B&B Sul Corso** — Bojano
   - slug: `b-b-sul-corso-bojano`
   - indirizzo: Corso F. Amatuzio, 86021 Bojano CB
35. **Bed & Breakfast L'Antica Dimora** — Bojano
   - slug: `bed-breakfast-l-antica-dimora-bojano`
   - indirizzo: Via Francesco Jovine, 2, 86096 Macchiagodena IS