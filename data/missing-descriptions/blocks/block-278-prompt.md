# Blocco 278/500 — 35 strutture senza descrizione IT

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

1. **Vital Hotel Flora** — Bleggio Superiore
   - slug: `vital-hotel-flora-bleggio-superiore`
   - indirizzo: Località Maso da Pont, 1, 38070 Stenico TN
2. **Albergo Ristorante Bigiù** — Blello
   - slug: `albergo-ristorante-bigiu-blello`
   - indirizzo: Via alle Fonti, 109, 24038 Sant'Omobono Terme BG
3. **Antica Locanda Roncaglia** — Blello
   - slug: `antica-locanda-roncaglia-blello`
   - indirizzo: Via Roncaglia, 21, 24030 Corna Imagna BG
4. **Sole Agriturismo** — Blello
   - slug: `sole-agriturismo-blello`
   - indirizzo: Via Cà Persico, 2, 24030 Locatello BG
5. **Agriturismo Il Marrugio** — Blera
   - slug: `agriturismo-il-marrugio-blera`
   - indirizzo: Str. Borgherolo, 4, 01100 Viterbo VT
6. **Agriturismo Le Quattro Stagioni** — Blera
   - slug: `agriturismo-le-quattro-stagioni-blera`
   - indirizzo: Via Due Casali, 1g, 01100 Viterbo VT
7. **Albatros Accommodations** — Blera
   - slug: `albatros-accommodations-blera`
   - indirizzo: Str. S. Vivenzio, 51, 01100 Viterbo VT
8. **B&B La Casetta di Ben** — Blera
   - slug: `b-b-la-casetta-di-ben-blera`
   - indirizzo: Str. Tarallo, 01100 Viterbo VT
9. **B&b La Locanda Cistercense** — Blera
   - slug: `b-b-la-locanda-cistercense-blera`
   - indirizzo: Piazza del Duomo, 3, 01100 San Martino Al Cimino VT
10. **Forum Cassii** — Blera
   - slug: `forum-cassii-blera`
   - indirizzo: Strada Foro Cassio, snc, 01019 Vetralla VT
11. **Il Giardino dei Desideri** — Blera
   - slug: `il-giardino-dei-desideri-blera`
   - indirizzo: Strada Cassia Sud, 57/C, 01100 Viterbo VT
12. **Il Giardino nell'Orto** — Blera
   - slug: `il-giardino-nell-orto-blera`
   - indirizzo: località formale 11 VT 01019 Vetralla, 01019 Vetralla VT
13. **la staccionata bianca** — Blera
   - slug: `la-staccionata-bianca-blera`
   - indirizzo: Str. Valle Legaccia, 13, 01100 Viterbo VT
14. **Le Pozze Terme** — Blera
   - slug: `le-pozze-terme-blera`
   - indirizzo: Strada Gavazzano, 18, 01100 Viterbo VT
15. **Agriturismo Al-Marnich - Lago di Como** — Blessagno
   - slug: `agriturismo-al-marnich-lago-di-como-blessagno`
   - indirizzo: Località Marnico, 8, 22020 Schignano CO
16. **Agriturismo La Cascina** — Blessagno
   - slug: `agriturismo-la-cascina-blessagno`
   - indirizzo: Piazzo Sotto, 22023 San Fedele Intelvi CO
17. **Albergo Ristorante Lavedo** — Blessagno
   - slug: `albergo-ristorante-lavedo-blessagno`
   - indirizzo: Via Lavedo, 1, 22016 Tremezzina CO
18. **Casa Gianna** — Blessagno
   - slug: `casa-gianna-blessagno`
   - indirizzo: Via alla Chiesa, 6, 22023 Castiglione D'intelvi CO
19. **EDERAROOMS DI PEDUZZI AMALIO** — Blessagno
   - slug: `ederarooms-di-peduzzi-amalio-blessagno`
   - indirizzo: Via Roma, 41, 22020 Cerano D'intelvi CO
20. **Giardino tra i laghi** — Blessagno
   - slug: `giardino-tra-i-laghi-blessagno`
   - indirizzo: Via Tenente Rigamonti, 26A, 22023 Centro Valle Intelvi CO
21. **Hotel La Torre - Valle d'Intelvi, vicino al LAGO DI COMO e di LUGANO Castiglione d'Intelvi** — Blessagno
   - slug: `hotel-la-torre-valle-d-intelvi-vicino-al-lago-di-blessagno`
   - indirizzo: Via Roma, località Castiglione, 53, 22023 Centro Valle Intelvi CO
22. **Albergo Milano** — Blevio
   - slug: `albergo-milano-blevio`
   - indirizzo: Via E. Caronti, 48, 22020 Blevio CO
23. **B&B 104** — Blevio
   - slug: `b-b-104-blevio`
   - indirizzo: Via E. Caronti, 104, 22020 Blevio CO
24. **B&B Como A casa di Maria** — Blevio
   - slug: `b-b-como-a-casa-di-maria-blevio`
   - indirizzo: Largo G. Silo, 15, 22100 Como CO
25. **B&B La Cassinella** — Blevio
   - slug: `b-b-la-cassinella-blevio`
   - indirizzo: Via Moltrasio, 28, 22012 Cernobbio CO
26. **B&B Villa Mirandola** — Blevio
   - slug: `b-b-villa-mirandola-blevio`
   - indirizzo: Via Mulattiera per S. Maurizio, 20, 22034 Brunate CO
27. **BBB ComoLake** — Blevio
   - slug: `bbb-comolake-blevio`
   - indirizzo: Frazione Sopravilla, 5, 22020 Blevio CO
28. **Casa Alba, Blevio Lago di Como** — Blevio
   - slug: `casa-alba-blevio-lago-di-como-blevio`
   - indirizzo: Frazione Cazzanore, 3, 22020 Blevio CO
29. **Casa Giulietta Caronti with view of lake Como** — Blevio
   - slug: `casa-giulietta-caronti-with-view-of-lake-como-blevio`
   - indirizzo: Via E. Caronti, 104, 22020 Blevio CO
30. **Casa Giulietta Junior20 with private parking** — Blevio
   - slug: `casa-giulietta-junior20-with-private-parking-blevio`
   - indirizzo: Via E. Caronti, 20, 22020 Blevio CO
31. **Como Lake Vista by MyHomeInComo** — Blevio
   - slug: `como-lake-vista-by-myhomeincomo-blevio`
   - indirizzo: Via E. Caronti, 38, 22020 Blevio CO
32. **L’Etoile du Lac** — Blevio
   - slug: `l-etoile-du-lac-blevio`
   - indirizzo: Via E. Caronti, 36, 22020 Blevio CO
33. **Locanda Bella Fra** — Blevio
   - slug: `locanda-bella-fra-blevio`
   - indirizzo: Via E. Caronti, n.22, 22020 Blevio CO
34. **Luxury Como Lake** — Blevio
   - slug: `luxury-como-lake-blevio`
   - indirizzo: Frazione Cazzanore, 8, 22020 Blevio CO
35. **Luxury Guest House Bella Dutchy** — Blevio
   - slug: `luxury-guest-house-bella-dutchy-blevio`
   - indirizzo: Frazione Sopravilla, 93A, 22020 Blevio CO