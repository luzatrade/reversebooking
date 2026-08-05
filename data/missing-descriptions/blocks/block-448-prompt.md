# Blocco 448/500 — 35 strutture senza descrizione IT

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

1. **Hotel Victoria** — Carr�
   - slug: `hotel-victoria-carr`
   - indirizzo: Via Antonio Meucci, 36, 12100 Cuneo CN
2. **Hotel Villa Palma by AGF Hotels SRL** — Carr�
   - slug: `hotel-villa-palma-by-agf-hotels-srl-carr`
   - indirizzo: Via Chemin Palma, 30, 36065 Mussolente VI
3. **Palazzo Fauzone** — Carr�
   - slug: `palazzo-fauzone-carr`
   - indirizzo: Via Vico, 8, 12084 Mondovì CN
4. **Relais San Maurizio** — Carr�
   - slug: `relais-san-maurizio-carr`
   - indirizzo: Località San Maurizio, 39, 12058 Santo Stefano Belbo CN
5. **The Glam Boutique Hotel & Apt.** — Carr�
   - slug: `the-glam-boutique-hotel-apt-carr`
   - indirizzo: Viale Antonio Giuriolo, 10, 36100 Vicenza VI
6. **Azienda Agrituristica Setteponti** — Carsoli
   - slug: `azienda-agrituristica-setteponti-carsoli`
   - indirizzo: Km. 74.200 Via Tiburtina Valeria, Carsoli, AQ 67061, 67061 Carsoli AQ
7. **B&B agli Ulivi** — Cartigliano
   - slug: `b-b-agli-ulivi-cartigliano`
   - indirizzo: Via T. A, Via Thomas Alva Edison, 8, 36063 Marostica VI
8. **B&B Brenta** — Cartigliano
   - slug: `b-b-brenta-cartigliano`
   - indirizzo: Via del Carmine, 26, 36050 Cartigliano VI
9. **B&B Diana** — Cartigliano
   - slug: `b-b-diana-cartigliano`
   - indirizzo: Via 4 Martiri, 21, 36063 Marostica VI
10. **Beb brekfast sinfonia** — Cartigliano
   - slug: `beb-brekfast-sinfonia-cartigliano`
   - indirizzo: Via A. Magnasco, 19, 36061 Bassano del Grappa VI
11. **Le Nove hotel** — Cartigliano
   - slug: `le-nove-hotel-cartigliano`
   - indirizzo: Via Rizzi, 51, 36055 Nove VI
12. **Affittacamere "Del Ponte" di Paola Brunoni CIN:IT004044B45GIZDQRH** — Cartignano
   - slug: `affittacamere-del-ponte-di-paola-brunoni-cin-it0-cartignano`
   - indirizzo: Piazzetta 30 luglio, 12020 Cartignano CN
13. **Albergo Pino Verde** — Cartignano
   - slug: `albergo-pino-verde-cartignano`
   - indirizzo: Via Moschieres, 39, 12025 Dronero CN
14. **Albergo Ristorante Roccerè** — Cartignano
   - slug: `albergo-ristorante-roccere-cartignano`
   - indirizzo: Frazione Sant'Anna, 135, 12020 Roccabruna CN
15. **Agriturismo La Meridiana** — Cartoceto
   - slug: `agriturismo-la-meridiana-cartoceto`
   - indirizzo: Via Bargni, 16, 61036 Serrungarina PU
16. **Agriturismo Pozzuolo** — Cartoceto
   - slug: `agriturismo-pozzuolo-cartoceto`
   - indirizzo: Via di Mezzo, n. 31, 61036 Pozzuolo PU
17. **Albergo Metauro** — Cartoceto
   - slug: `albergo-metauro-cartoceto`
   - indirizzo: Via Flaminia, 278, 61036 Calcinelli PU
18. **Antica Osteria e Bed & Breakfast Da Gustin** — Cartoceto
   - slug: `antica-osteria-e-bed-breakfast-da-gustin-cartoceto`
   - indirizzo: Via Castello, 27, 61036 Serrungarina PU
19. **B&B Camera con vista** — Cartoceto
   - slug: `b-b-camera-con-vista-cartoceto`
   - indirizzo: Via Umberto I, 18, 61034 Fossombrone PU
20. **B&B Terrazza sul Mare** — Cartoceto
   - slug: `b-b-terrazza-sul-mare-cartoceto`
   - indirizzo: Via Marzabotto, 10, 61032 Fano PU
21. **Bed And Breakfast Cornio delle Fronde** — Cartoceto
   - slug: `bed-and-breakfast-cornio-delle-fronde-cartoceto`
   - indirizzo: Via Costa della Figura, 24, 61030 Fontecorniale di Montefelcino PU
22. **Casa Di Mi Agriturismo con piscina** — Cartoceto
   - slug: `casa-di-mi-agriturismo-con-piscina-cartoceto`
   - indirizzo: Via della Fonte s.n, 61036 Colli al Metauro, PU
23. **CASA OLIVA Borgo del Benessere delle Marche** — Cartoceto
   - slug: `casa-oliva-borgo-del-benessere-delle-marche-cartoceto`
   - indirizzo: Via Castello 19 Bargni di, 61036 Colli al Metauro PU
24. **Casa Vacanze "Il Monte" CIN IT041010C2T5GVND3M** — Cartoceto
   - slug: `casa-vacanze-il-monte-cin-it041010c2t5gvnd3m-cartoceto`
   - indirizzo: Strada Provinciale Mombaroccese, 10, 61030 Colli al Metauro PU
25. **Castello Montegiove Country House** — Cartoceto
   - slug: `castello-montegiove-country-house-cartoceto`
   - indirizzo: Via Forcolo, 26/28/30, 61032 Fano PU
26. **Eden Lilli B&B** — Cartoceto
   - slug: `eden-lilli-b-b-cartoceto`
   - indirizzo: Via Pieve, 51, 61030 Salomone PU
27. **Hotel Flaminio** — Cartoceto
   - slug: `hotel-flaminio-cartoceto`
   - indirizzo: Via Flaminia, 196/200, 61036 Colli al Metauro, PU
28. **Il Castagno Albergo Ristorante Pizzeria** — Cartoceto
   - slug: `il-castagno-albergo-ristorante-pizzeria-cartoceto`
   - indirizzo: Via Giacomo Matteotti, 72, 61038 Orciano di Pesaro PU
29. **Le Fontanelle Country House** — Cartoceto
   - slug: `le-fontanelle-country-house-cartoceto`
   - indirizzo: Via Fontanelle, 11, 61040 Sant'Ippolito PU
30. **Locanda Borgognina** — Cartoceto
   - slug: `locanda-borgognina-cartoceto`
   - indirizzo: Via Borgognina, 31, 61030 Cartoceto PU
31. **Villa Cartoceto** — Cartoceto
   - slug: `villa-cartoceto-cartoceto`
   - indirizzo: Via Umberto I, 11, 61030 Cartoceto PU
32. **Agriturismo b&b Valcrosa** — Cartosio
   - slug: `agriturismo-b-b-valcrosa-cartosio`
   - indirizzo: Localita, Regione Caliogna, 50, 15010 Melazzo AL
33. **Agriturismo borghetto la radice** — Cartosio
   - slug: `agriturismo-borghetto-la-radice-cartosio`
   - indirizzo: Regione piandonne, 23, 14050 Roccaverano AT
34. **Agriturismo Le Piagge - Via dei Cascinali, 257 - 15010 PONZONE AL** — Cartosio
   - slug: `agriturismo-le-piagge-via-dei-cascinali-257-1501-cartosio`
   - indirizzo: Via Cascinali, 257, 15010 Ponzone AL
35. **Agriturismo Luna di Miele** — Cartosio
   - slug: `agriturismo-luna-di-miele-cartosio`
   - indirizzo: Regione S. Desiderio, 48, 14058 Monastero Bormida AT