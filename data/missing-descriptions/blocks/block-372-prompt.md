# Blocco 372/500 — 35 strutture senza descrizione IT

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

1. **Hotel Residence Sogno** — Caltignaga
   - slug: `hotel-residence-sogno-caltignaga`
   - indirizzo: Via Enrico Tazzoli, 5, 28100 Novara NO
2. **Albergo - Ristorante - Ricevimenti Villa Schiavi Di Sinz Federico** — Calto
   - slug: `albergo-ristorante-ricevimenti-villa-schiavi-di-calto`
   - indirizzo: 46028 Sermide MN, Italia
3. **SMART HOTEL FERRARA** — Calto
   - slug: `smart-hotel-ferrara-calto`
   - indirizzo: Via S. Romano, 120, 44121 Ferrara FE
4. **Stella De' Tolomei** — Calto
   - slug: `stella-de-tolomei-calto`
   - indirizzo: Via Cammello, 11, 44121 Ferrara FE
5. **Hotel Belmonte** — Caltrano
   - slug: `hotel-belmonte-caltrano`
   - indirizzo: Via Fondi, 15, 36010 Roana VI
6. **Hotel Kristal** — Caltrano
   - slug: `hotel-kristal-caltrano`
   - indirizzo: Via Pra' Bordoni, 36, 36010 Zanè VI
7. **Hotel Ristorante La Rua** — Caltrano
   - slug: `hotel-ristorante-la-rua-caltrano`
   - indirizzo: Via Ca' Vecchia, 1, 36010 Carrè VI
8. **La Casa di Alice** — Caltrano
   - slug: `la-casa-di-alice-caltrano`
   - indirizzo: Via Giovanni Pascoli, 6, 36010 Cogollo del Cengio VI
9. **Zimmer Nadia** — Caltrano
   - slug: `zimmer-nadia-caltrano`
   - indirizzo: Via XXV Aprile Olim Serragli, 16, 36010 Chiuppano VI
10. **Albergo Ristorante da Giovanni** — Calusco d'Adda
   - slug: `albergo-ristorante-da-giovanni-calusco-d-adda`
   - indirizzo: Via Don Angelo Pedrinelli, 23/25, 24030 Carvico BG
11. **Albergo Romani'** — Calusco d'Adda
   - slug: `albergo-romani-calusco-d-adda`
   - indirizzo: Via Santa Maria, 73, 24033 Calusco d'Adda BG
12. **Best Western Hotel Solaf** — Calusco d'Adda
   - slug: `best-western-hotel-solaf-calusco-d-adda`
   - indirizzo: Via Enrico Mattei, 1/3, 24030 Medolago BG
13. **Residence La Corte** — Caluso
   - slug: `residence-la-corte-caluso`
   - indirizzo: Via Ludovico Bretti, 3, 10014 Caluso TO
14. **Agriturismo Mulino Bianco** — Calvagese della Riviera
   - slug: `agriturismo-mulino-bianco-calvagese-della-riviera`
   - indirizzo: Via XXIV Maggio, 2, 25017 Sedena BS
15. **Agriturismo Nonna Bettina** — Calvagese della Riviera
   - slug: `agriturismo-nonna-bettina-calvagese-della-riviera`
   - indirizzo: Via Monte Tapino, 2, 25080 Moniga del Garda BS
16. **Art Gallery Rooms** — Calvagese della Riviera
   - slug: `art-gallery-rooms-calvagese-della-riviera`
   - indirizzo: Via Santa Giulia, 2c, 25017 Lonato BS
17. **El Rincon del Artista** — Calvagese della Riviera
   - slug: `el-rincon-del-artista-calvagese-della-riviera`
   - indirizzo: Via Aldo Moro, 22, 25080 Soiano BS
18. **IL Curlo B&B** — Calvagese della Riviera
   - slug: `il-curlo-b-b-calvagese-della-riviera`
   - indirizzo: Via Curlo, 10, 25080 Calvagese della Riviera BS
19. **Il Ghetto agriturismo holiday farm** — Calvagese della Riviera
   - slug: `il-ghetto-agriturismo-holiday-farm-calvagese-della-riviera`
   - indirizzo: Via Castellana, 46/C, 25080 Soiano del Lago BS
20. **Lake Garda Resort** — Calvagese della Riviera
   - slug: `lake-garda-resort-calvagese-della-riviera`
   - indirizzo: Via dei Canestrelli, 7, 25080 Moniga del Garda BS
21. **Macesina Country House** — Calvagese della Riviera
   - slug: `macesina-country-house-calvagese-della-riviera`
   - indirizzo: via Borghetto, 22, 25081 Bedizzole BS
22. **Maeva Guesthouse Lake Garda** — Calvagese della Riviera
   - slug: `maeva-guesthouse-lake-garda-calvagese-della-riviera`
   - indirizzo: Via Aldo Moro, 2, 25080 Puegnago del Garda BS
23. **Monastero Resort & SPA by Double Hospitality** — Calvagese della Riviera
   - slug: `monastero-resort-spa-by-double-hospitality-calvagese-della-riviera`
   - indirizzo: Via Aldo Moro, 1, 25080 Soiano BS
24. **Moniga Resort** — Calvagese della Riviera
   - slug: `moniga-resort-calvagese-della-riviera`
   - indirizzo: Via dei Canestrelli, 9, 25080 Moniga del Garda BS
25. **QC Termegarda Spa & Golf Resort** — Calvagese della Riviera
   - slug: `qc-termegarda-spa-golf-resort-calvagese-della-riviera`
   - indirizzo: Via Arzaga, 1, 25080 Calvagese della Riviera BS
26. **San Rocco Relais** — Calvagese della Riviera
   - slug: `san-rocco-relais-calvagese-della-riviera`
   - indirizzo: Via Paolo ed Enrico Avanzi, 7, 25080 Soiano del Lago BS
27. **Agriturismo Casale Piè D'eco** — Calvanico
   - slug: `agriturismo-casale-pie-d-eco-calvanico`
   - indirizzo: Via Vicinale Costa, Snc, 84080 Calvanico SA
28. **Albergo Ristorante Hotel Santa Caterina** — Calvanico
   - slug: `albergo-ristorante-hotel-santa-caterina-calvanico`
   - indirizzo: Via Antinori, 2, 84084 Fisciano SA
29. **B&B Al Vicoletto** — Calvanico
   - slug: `b-b-al-vicoletto-calvanico`
   - indirizzo: Vicolo dei Serraturai, 84084 Penta SA
30. **B&B Il Glicine** — Calvanico
   - slug: `b-b-il-glicine-calvanico`
   - indirizzo: Via Tenente Farina, 9, 84080 Coperchia SA
31. **B&B Nonna Lella** — Calvanico
   - slug: `b-b-nonna-lella-calvanico`
   - indirizzo: Via Leonardo Da Vinci, 1, 84080 Calvanico SA
32. **B&B Pozzo dei Desideri** — Calvanico
   - slug: `b-b-pozzo-dei-desideri-calvanico`
   - indirizzo: Vicolo Pacileo, 3, 84084 Fisciano SA
33. **Casa Vacanze FioreStella** — Calvanico
   - slug: `casa-vacanze-fiorestella-calvanico`
   - indirizzo: Via Matteo Angelo Galdi, 55, 84080 Coperchia SA
34. **Vignadonica Resort** — Calvanico
   - slug: `vignadonica-resort-calvanico`
   - indirizzo: Via Vignadonica, 84084 Fisciano SA
35. **Agriturismo Riviera Oglio** — Calvatone
   - slug: `agriturismo-riviera-oglio-calvatone`
   - indirizzo: Via Maggiore, 6, 26034 Piadena CR