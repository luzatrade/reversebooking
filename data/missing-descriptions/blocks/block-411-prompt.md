# Blocco 411/500 — 35 strutture senza descrizione IT

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

1. **Ristorante La Vecchia Quercia** — Cantalupo in Sabina
   - slug: `ristorante-la-vecchia-quercia-cantalupo-in-sabina`
   - indirizzo: Via Tenerello, 13, 02040 Selci RI
2. **San Lorenzo Country Retreat** — Cantalupo in Sabina
   - slug: `san-lorenzo-country-retreat-cantalupo-in-sabina`
   - indirizzo: Via S. Lorenzo, 19, 02040 Roccantica RI
3. **Villa Vallerosa** — Cantalupo in Sabina
   - slug: `villa-vallerosa-cantalupo-in-sabina`
   - indirizzo: Via Vallerosa, 27, 02040 Rieti RI
4. **Azienda Agricola Saint Hubert** — Cantalupo Ligure
   - slug: `azienda-agricola-saint-hubert-cantalupo-ligure`
   - indirizzo: Frazione Prato, 64, 15060 Cantalupo Ligure AL
5. **B&B I Mulini** — Cantalupo nel Sannio
   - slug: `b-b-i-mulini-cantalupo-nel-sannio`
   - indirizzo: G9XF+FW, 86096 Santa Maria del Molise IS
6. **Casale Cipriani** — Cantalupo nel Sannio
   - slug: `casale-cipriani-cantalupo-nel-sannio`
   - indirizzo: Località Molinello, Contrada Cerri, 86010 Casalciprano CB
7. **Casandrona** — Cantalupo nel Sannio
   - slug: `casandrona-cantalupo-nel-sannio`
   - indirizzo: Località Barraccone, 86092 Cantalupo nel Sannio IS
8. **Fonte del Benessere Resort Castelpetroso** — Cantalupo nel Sannio
   - slug: `fonte-del-benessere-resort-castelpetroso-cantalupo-nel-sannio`
   - indirizzo: Via Santuario, 21, 86090 Castelpetroso IS
9. **La Fonte dell'Astore** — Cantalupo nel Sannio
   - slug: `la-fonte-dell-astore-cantalupo-nel-sannio`
   - indirizzo: Via Santuario, 15, 86090 Castelpetroso IS
10. **Le Canoniche nel Matese** — Cantalupo nel Sannio
   - slug: `le-canoniche-nel-matese-cantalupo-nel-sannio`
   - indirizzo: Località Canonica s.n, 86027 San Massimo CB
11. **Le Tre Sorelle Holiday Home** — Cantalupo nel Sannio
   - slug: `le-tre-sorelle-holiday-home-cantalupo-nel-sannio`
   - indirizzo: Via Fiume, 112, 86090 Guasto IS
12. **Maison Brunetti** — Cantalupo nel Sannio
   - slug: `maison-brunetti-cantalupo-nel-sannio`
   - indirizzo: Località Pulsone, 30, 86021 Bojano CB
13. **Rifugio Jezza** — Cantalupo nel Sannio
   - slug: `rifugio-jezza-cantalupo-nel-sannio`
   - indirizzo: 86027 Campitello Matese CB
14. **Tenuta Barone** — Cantalupo nel Sannio
   - slug: `tenuta-barone-cantalupo-nel-sannio`
   - indirizzo: JFPF+QFQ, 86020 Duronia CB
15. **VELUM HOUSE B&B** — Cantalupo nel Sannio
   - slug: `velum-house-b-b-cantalupo-nel-sannio`
   - indirizzo: Via Grondari, snc, 86027 San Massimo CB
16. **Agriturismo Villa Bordone** — Cantarana
   - slug: `agriturismo-villa-bordone-cantarana`
   - indirizzo: Regione San Grato, 37, 14018 Villafranca d'Asti AT
17. **B&B Castelvecchio** — Cantarana
   - slug: `b-b-castelvecchio-cantarana`
   - indirizzo: Via GAETANO GARRETTI DI FERRERE, 4, 14012 Ferrere AT
18. **B&B Locanda dei Tigli** — Cantarana
   - slug: `b-b-locanda-dei-tigli-cantarana`
   - indirizzo: Via S. Rocco, 2, 14020 Settime AT
19. **Bed & Breakfast Al Bricco** — Cantarana
   - slug: `bed-breakfast-al-bricco-cantarana`
   - indirizzo: Località Bricco Barrano, 34, 14010 Cantarana AT
20. **Cà 'd Carlot** — Cantarana
   - slug: `ca-d-carlot-cantarana`
   - indirizzo: Regione Bricco Morra, 11, 14010 Cantarana AT
21. **Cascina Caldera ASTI - Affittacamere con ristorazione** — Cantarana
   - slug: `cascina-caldera-asti-affittacamere-con-ristorazi-cantarana`
   - indirizzo: Regione Torrazzo, 9, 14010 Cantarana AT
22. **Cascina Gardina** — Cantarana
   - slug: `cascina-gardina-cantarana`
   - indirizzo: Via Bricco Gardina, 1, 14013 Castellero AT
23. **Cascina Martinetta** — Cantarana
   - slug: `cascina-martinetta-cantarana`
   - indirizzo: Borgata Martinetta, 14015 San Pietro AT
24. **Cascina Monticone** — Cantarana
   - slug: `cascina-monticone-cantarana`
   - indirizzo: S.da Cisterna, 71, 14012 Ferrere AT
25. **cascinaborio** — Cantarana
   - slug: `cascinaborio-cantarana`
   - indirizzo: Regione San Grato, 28, 14018 Villafranca d'Asti AT
26. **Il Martinetto** — Cantarana
   - slug: `il-martinetto-cantarana`
   - indirizzo: Via del Martinetto, 10, 14010 Cantarana AT
27. **Il Principe Rosso** — Cantarana
   - slug: `il-principe-rosso-cantarana`
   - indirizzo: Frazione Gobbi, 8, 14018 Roatto AT
28. **Villa San Giovanni** — Cantarana
   - slug: `villa-san-giovanni-cantarana`
   - indirizzo: Via Roma, 2, 14018 Villafranca d'Asti AT
29. **Hotel Ristorante Pizzeria Eden** — Cantello
   - slug: `hotel-ristorante-pizzeria-eden-cantello`
   - indirizzo: Via Elvezia, 39, 21050 Cantello VA
30. **Agriturismo Il Borgo nel Bosco** — Canterano
   - slug: `agriturismo-il-borgo-nel-bosco-canterano`
   - indirizzo: Via di Codoccia, 1, 00020 Canterano RM
31. **B&B Valmontone - Al Castagneto** — Canterano
   - slug: `b-b-valmontone-al-castagneto-canterano`
   - indirizzo: Colle Mezzopane, 22E, 00038 Valmontone RM
32. **Hotel i Quattro Sentieri** — Canterano
   - slug: `hotel-i-quattro-sentieri-canterano`
   - indirizzo: Via della Zingarella, 22, 00030 Castel San Pietro Romano RM
33. **Hotel Matei** — Canterano
   - slug: `hotel-matei-canterano`
   - indirizzo: Viale IV Giugno, 19, 03014 Fiuggi FR
34. **Palazzo Moraschi** — Canterano
   - slug: `palazzo-moraschi-canterano`
   - indirizzo: Viale della Repubblica, 75, 00028 Subiaco RM
35. **Agriturismo Aurora Gubbio Umbria** — Cantiano
   - slug: `agriturismo-aurora-gubbio-umbria-cantiano`
   - indirizzo: frazione Nogna, 06024 Gubbio PG