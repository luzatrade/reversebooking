# Blocco 358/500 — 35 strutture senza descrizione IT

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

1. **Ristorante Albergo 7Bello** — Calabritto
   - slug: `ristorante-albergo-7bello-calabritto`
   - indirizzo: C.so S. Alfonso, 46, 83040 Materdomini AV
2. **Rurale Home & Garden** — Calabritto
   - slug: `rurale-home-garden-calabritto`
   - indirizzo: Contrada Pezze, 4, 83048 Montella AV
3. **Tartufo Hotel** — Calabritto
   - slug: `tartufo-hotel-calabritto`
   - indirizzo: Piazza Iannarella, 84020 Colliano SA
4. **Tenuta San Felice B&B** — Calabritto
   - slug: `tenuta-san-felice-b-b-calabritto`
   - indirizzo: via S. FELICE, 84022 Campagna SA
5. **Alla Stazion Locanda nelle Dolomiti Camere,Ristorante,Bar** — Calalzo di Cadore
   - slug: `alla-stazion-locanda-nelle-dolomiti-camere-risto-calalzo-di-cadore`
   - indirizzo: Via Manzago, 7, 32044 Pieve di Cadore BL
6. **B&B Dolomiti** — Calalzo di Cadore
   - slug: `b-b-dolomiti-calalzo-di-cadore`
   - indirizzo: Viale Marconi, 21, 32042 Calalzo di Cadore BL
7. **B&B SognoInCadore** — Calalzo di Cadore
   - slug: `b-b-sognoincadore-calalzo-di-cadore`
   - indirizzo: Via S. Rocco, 35, 32040 Domegge di Cadore BL
8. **C'era una volta un re** — Calalzo di Cadore
   - slug: `c-era-una-volta-un-re-calalzo-di-cadore`
   - indirizzo: Via Nazionale, 25, 32042 Calalzo di Cadore BL
9. **Chalet Cridola Dolomiti Experience** — Calalzo di Cadore
   - slug: `chalet-cridola-dolomiti-experience-calalzo-di-cadore`
   - indirizzo: Via Monteona, 237/A, 32040 Lorenzago di Cadore BL
10. **Hotel al Pelmo** — Calalzo di Cadore
   - slug: `hotel-al-pelmo-calalzo-di-cadore`
   - indirizzo: Via Nazionale, 60, 32044 Pieve di Cadore BL
11. **Hotel Belvedere Dolomiti** — Calalzo di Cadore
   - slug: `hotel-belvedere-dolomiti-calalzo-di-cadore`
   - indirizzo: Gradinata Belvedere, 11, 32044 Pieve di Cadore BL
12. **Hotel Ferrovia snc** — Calalzo di Cadore
   - slug: `hotel-ferrovia-snc-calalzo-di-cadore`
   - indirizzo: Via Stazione, 4, 32042 Calalzo di Cadore BL
13. **Hotel Giardino** — Calalzo di Cadore
   - slug: `hotel-giardino-calalzo-di-cadore`
   - indirizzo: Via Giosuè Carducci, 20, 32044 Pieve di Cadore BL
14. **Le Nene - Dolomiti guesthouse** — Calalzo di Cadore
   - slug: `le-nene-dolomiti-guesthouse-calalzo-di-cadore`
   - indirizzo: Piazza Venezia, 6, 32044 Pieve di Cadore BL
15. **Le Stue - locazione turistica** — Calalzo di Cadore
   - slug: `le-stue-locazione-turistica-calalzo-di-cadore`
   - indirizzo: Via Faveri, 21, 32044 Pieve di Cadore BL
16. **Lioda Living** — Calalzo di Cadore
   - slug: `lioda-living-calalzo-di-cadore`
   - indirizzo: Via Regia, 39, 32044 Pieve di Cadore BL
17. **Locanda Ai Dogi** — Calalzo di Cadore
   - slug: `locanda-ai-dogi-calalzo-di-cadore`
   - indirizzo: Piazza Municipio, 21, 32044 Pieve di Cadore BL
18. **Ostello lunga via delle Dolomiti** — Calalzo di Cadore
   - slug: `ostello-lunga-via-delle-dolomiti-calalzo-di-cadore`
   - indirizzo: Via de stefani, 43, 32042 Calalzo di Cadore BL
19. **Park Hotel Bellavista Dolomiti** — Calalzo di Cadore
   - slug: `park-hotel-bellavista-dolomiti-calalzo-di-cadore`
   - indirizzo: Via S. Giovanni, 5, 32042 Calalzo di Cadore BL
20. **Rifugio Pietro Galassi al Monte Antelao - Rifugio Cai** — Calalzo di Cadore
   - slug: `rifugio-pietro-galassi-al-monte-antelao-rifugio-calalzo-di-cadore`
   - indirizzo: Forcella Piccola dell'Antelao, 32042 Calalzo di Cadore BL
21. **Alle Rive Bed 'n' Books** — Calamandrana
   - slug: `alle-rive-bed-n-books-calamandrana`
   - indirizzo: Frazione Chiesavecchia, 55, 14042 Calamandrana AT
22. **Azienda Agricola la Giribaldina** — Calamandrana
   - slug: `azienda-agricola-la-giribaldina-calamandrana`
   - indirizzo: Frazione S. Vito, 39, 14042 Calamandrana AT
23. **Ca' del Bosso** — Calamandrana
   - slug: `ca-del-bosso-calamandrana`
   - indirizzo: Regione Garbazzola 13, 14042 Garbazzola AT
24. **Cadgal - Tenuta La Cova** — Calamandrana
   - slug: `cadgal-tenuta-la-cova-calamandrana`
   - indirizzo: Frazione Valle Chiozze, 24, 14042 Calamandrana AT
25. **Che Piasi** — Calamandrana
   - slug: `che-piasi-calamandrana`
   - indirizzo: Calamandrana (AT), Italia, Frazione Ferrai, 13, 14042 Calamandrana AT
26. **Hotel I TRE POGGI** — Calamandrana
   - slug: `hotel-i-tre-poggi-calamandrana`
   - indirizzo: Regione Merlini, 22, 14053 Canelli AT
27. **La Martinella Bio** — Calamandrana
   - slug: `la-martinella-bio-calamandrana`
   - indirizzo: Via Regione Castagnole, 80, 14053 Canelli AT
28. **Palazzo Centro - Alloggi Vacanza** — Calamandrana
   - slug: `palazzo-centro-alloggi-vacanza-calamandrana`
   - indirizzo: Via Carlo Alberto, 25, 14049 Nizza Monferrato AT
29. **Tenuta Miranda** — Calamandrana
   - slug: `tenuta-miranda-calamandrana`
   - indirizzo: Regione Pelazzi, 189, 14050 Cassinasco AT
30. **Villa Adelaide Relais & Wine** — Calamandrana
   - slug: `villa-adelaide-relais-wine-calamandrana`
   - indirizzo: Via G. Avalle, 13, 14042 Calamandrana AT
31. **Villa Chiara Hotel** — Calamandrana
   - slug: `villa-chiara-hotel-calamandrana`
   - indirizzo: Via Roma, 6, 14053 Canelli AT
32. **Villa panoramica sulle colline del Monferrato** — Calamandrana
   - slug: `villa-panoramica-sulle-colline-del-monferrato-calamandrana`
   - indirizzo: Frazione Boidi, 32, 14042 Calamandrana AT
33. **Agriturismo Tenute Piazza** — Calamonaci
   - slug: `agriturismo-tenute-piazza-calamonaci`
   - indirizzo: c.da Musiti, 92016 Ribera AG
34. **La Finestra sul Cortile CIN IT084041C1KQOWMJBT** — Calamonaci
   - slug: `la-finestra-sul-cortile-cin-it084041c1kqowmjbt-calamonaci`
   - indirizzo: Via Quartararo, 12, 92019 Sciacca AG
35. **Affittacamere Gallurà** — Calangianus
   - slug: `affittacamere-gallura-calangianus`
   - indirizzo: Vico Nicolò Ferracciu, 2a, 07023 Calangianus OT