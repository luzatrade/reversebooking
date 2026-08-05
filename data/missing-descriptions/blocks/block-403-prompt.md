# Blocco 403/500 — 35 strutture senza descrizione IT

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

1. **Antica masseria “Il Casone” - Candela** — Candela
   - slug: `antica-masseria-il-casone-candela-candela`
   - indirizzo: Il Casone, 71024 Candela FG
2. **B&B Colli Ameni** — Candela
   - slug: `b-b-colli-ameni-candela`
   - indirizzo: Strada Provinciale Ferrovia, 71024 Candela FG
3. **La Casina Residenza rurale 1865** — Candela
   - slug: `la-casina-residenza-rurale-1865-candela`
   - indirizzo: Contrada Borranico, 71026 Deliceto FG
4. **La Piazzetta** — Candela
   - slug: `la-piazzetta-candela`
   - indirizzo: Piazza Giacomo Matteotti, 34, 71024 Candela FG
5. **Masseria Spinale Wine Resort** — Candela
   - slug: `masseria-spinale-wine-resort-candela`
   - indirizzo: Contrada Camarda, 85025 Melfi PZ
6. **RistoMuseo l'Orecchietta B&b da Ercole all'Orecchietta** — Candela
   - slug: `ristomuseo-l-orecchietta-b-b-da-ercole-all-orecc-candela`
   - indirizzo: Localita casone la pescara, snc, 71024 Candela FG
7. **Villa Di Miscio** — Candela
   - slug: `villa-di-miscio-candela`
   - indirizzo: Viale S. Rocco, 2, 71028 Sant'Agata di Puglia FG
8. **BB • Borgo Biella - Candelo** — Candelo
   - slug: `bb-borgo-biella-candelo-candelo`
   - indirizzo: Via Pietro Micca, n° 1, 13878 Candelo BI
9. **BB • Borgo Biella Bis - Soggiorni turistici** — Candelo
   - slug: `bb-borgo-biella-bis-soggiorni-turistici-candelo`
   - indirizzo: Via Moglia, 2, 13878 Candelo BI
10. **BB • Borgo Biella Tree** — Candelo
   - slug: `bb-borgo-biella-tree-candelo`
   - indirizzo: Via Moglia, 2, 13878 Candelo BI
11. **La terrazza sul Ricetto GuestHouse** — Candelo
   - slug: `la-terrazza-sul-ricetto-guesthouse-candelo`
   - indirizzo: Via Roma, 13, 13878 Candelo BI
12. **Atene del Canavese** — Candia Canavese
   - slug: `atene-del-canavese-candia-canavese`
   - indirizzo: Via B. Biandrate, 1, 10090 San Giorgio Canavese TO
13. **B&B Lacasagialladiluca di Fabio Comazzi** — Candia Canavese
   - slug: `b-b-lacasagialladiluca-di-fabio-comazzi-candia-canavese`
   - indirizzo: Via Cairelli, 2, 10035 Mazzè TO
14. **Stella Bianca** — Candia Canavese
   - slug: `stella-bianca-candia-canavese`
   - indirizzo: Via Scarmagno, 7, 10010 Bessolo TO
15. **FLU Bed & Breakfast** — Candia Lomellina
   - slug: `flu-bed-breakfast-candia-lomellina`
   - indirizzo: Via Roma, 27, 27020 San Giorgio di Lomellina PV
16. **Il Portico** — Candia Lomellina
   - slug: `il-portico-candia-lomellina`
   - indirizzo: Strada Valenza, 2, 15033 Casale Monferrato AL
17. **Locanda Ca' Novelli** — Candia Lomellina
   - slug: `locanda-ca-novelli-candia-lomellina`
   - indirizzo: Via Cesare Balbo, 14, 15040 Frassineto Po AL
18. **Azienda Agricola Fondo san Benedetto** — Candiana
   - slug: `azienda-agricola-fondo-san-benedetto-candiana`
   - indirizzo: Via Pegolotte, 2, 35020 Correzzola PD
19. **Villabruna** — Candiana
   - slug: `villabruna-candiana`
   - indirizzo: Via Frapiero, 3, 35020 Correzzola PD
20. **Green Resort De Marco** — Candida
   - slug: `green-resort-de-marco-candida`
   - indirizzo: contrada campore, 83040 Chiusano di San Domenico AV
21. **Il Cavaliere** — Candida
   - slug: `il-cavaliere-candida`
   - indirizzo: Via Panoramica, 20, 83030 Manocalzati AV
22. **Le camere di corte** — Candida
   - slug: `le-camere-di-corte-candida`
   - indirizzo: Piazza Michele Capozzi, Via Roma, 2, 83050 Salza Irpina AV
23. **Stanze Don Gesualdo Alloggio Turistico** — Candida
   - slug: `stanze-don-gesualdo-alloggio-turistico-candida`
   - indirizzo: Via Italia, 8, 83030 Taurasi AV
24. **B&b il baglio** — Candidoni
   - slug: `b-b-il-baglio-candidoni`
   - indirizzo: Via Baglio, 7, 89844 Nicotera VV
25. **B&B Il Girasole** — Candidoni
   - slug: `b-b-il-girasole-candidoni`
   - indirizzo: Via Firenze, 89023 Laureana di Borrello RC
26. **I due Leoni bed and breakfast** — Candidoni
   - slug: `i-due-leoni-bed-and-breakfast-candidoni`
   - indirizzo: Via Prazza, 6, 89023 Laureana di Borrello RC
27. **Sopra le Laure B&B** — Candidoni
   - slug: `sopra-le-laure-b-b-candidoni`
   - indirizzo: Via Sant'Anna, 116, 89023 Laureana di Borrello RC
28. **Agriturismo Cascina Duc** — Candiolo
   - slug: `agriturismo-cascina-duc-candiolo`
   - indirizzo: Str. del Portone, 197, 10095 Grugliasco TO
29. **Agriturismo Cascina Gai** — Candiolo
   - slug: `agriturismo-cascina-gai-candiolo`
   - indirizzo: Regione Ponte Po, 22, 10041 Carignano TO
30. **Agriturismo Cascina Gorgia** — Candiolo
   - slug: `agriturismo-cascina-gorgia-candiolo`
   - indirizzo: Str. Stupinigi, 80, 10043 Orbassano TO
31. **Agriturismo Cascina Ollera Aurelio Ceresa** — Candiolo
   - slug: `agriturismo-cascina-ollera-aurelio-ceresa-candiolo`
   - indirizzo: Cascina Ollera, 10, 10060 None TO
32. **Agriturismo Cascina Teitòt** — Candiolo
   - slug: `agriturismo-cascina-teitot-candiolo`
   - indirizzo: Cascina Teitotto, 1, 10060 Scalenghe TO
33. **Agriturismo L'antico Pioppo** — Candiolo
   - slug: `agriturismo-l-antico-pioppo-candiolo`
   - indirizzo: Via Badini Confalonieri, 28, 10026 Santena TO
34. **Agriturismo Medialuna** — Candiolo
   - slug: `agriturismo-medialuna-candiolo`
   - indirizzo: Str. dei Ronchi, 38, 10048 Vinovo TO
35. **Agriturismo Sandrone** — Candiolo
   - slug: `agriturismo-sandrone-candiolo`
   - indirizzo: Via Sestriere, 154, 10048 Vinovo TO