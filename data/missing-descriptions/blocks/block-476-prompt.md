# Blocco 476/500 — 35 strutture senza descrizione IT

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

1. **Borgo Ginuga** — Centuripe
   - slug: `borgo-ginuga-centuripe`
   - indirizzo: c.da coco, 94010 Centuripe EN
2. **Kento Resort** — Centuripe
   - slug: `kento-resort-centuripe`
   - indirizzo: Contrada Tagliacasse, SN, 94010 Centuripe EN
3. **B&B San Francesco** — Cerami
   - slug: `b-b-san-francesco-cerami`
   - indirizzo: Via Santa Elia, 39, 94014 Nicosia EN
4. **D'ALOTTO SUITE & ROOMS** — Cerami
   - slug: `d-alotto-suite-rooms-cerami`
   - indirizzo: V. Torretta, 74, 94013 Leonforte EN
5. **Hotel dei Nebrodi** — Cerami
   - slug: `hotel-dei-nebrodi-cerami`
   - indirizzo: Corso Margherita, 30, 98033 Cesarò ME
6. **Affittacamere Indios** — Cerda
   - slug: `affittacamere-indios-cerda`
   - indirizzo: Via Vivirito, 35, 90052 Cerda PA
7. **Agriturismo Parco Di Nonna Betty Palermo** — Cerda
   - slug: `agriturismo-parco-di-nonna-betty-palermo-cerda`
   - indirizzo: Via Landro, 90010 Lascari PA
8. **Fontanarossa** — Cerda
   - slug: `fontanarossa-cerda`
   - indirizzo: 90052 Cerda PA
9. **Le Due Sicilie B&B - CIN IT082044C1HCL3FJEB** — Cerda
   - slug: `le-due-sicilie-b-b-cin-it082044c1hcl3fjeb-cerda`
   - indirizzo: Via Libertà, 45/47, 90010 Lascari PA
10. **Terre di Himera Sicily charming agriturismo near Cefalù with private jacuzzi** — Cerda
   - slug: `terre-di-himera-sicily-charming-agriturismo-near-cerda`
   - indirizzo: 90018 Villaurea PA
11. **Agriturismo Borgagne "Le Scerze"** — Cesar�
   - slug: `agriturismo-borgagne-le-scerze-cesar`
   - indirizzo: Circonvallazione, 73026 Borgagne LE
12. **Agriturismo Masseria Malopra** — Cesar�
   - slug: `agriturismo-masseria-malopra-cesar`
   - indirizzo: Contrada Malopra, 73025 Martano LE
13. **B&B Arzeria** — Cesar�
   - slug: `b-b-arzeria-cesar`
   - indirizzo: Via S. Cesario, 173, 73020 Cavallino LE
14. **B&B Caesar** — Cesar�
   - slug: `b-b-caesar-cesar`
   - indirizzo: P.za Nicola Amore, 14, 80138 Napoli NA
15. **B&B Cèsar** — Cesar�
   - slug: `b-b-cesar-cesar`
   - indirizzo: P.za Mercato, 4, 73040 Castrignano del Capo LE
16. **Caesar's B&B** — Cesar�
   - slug: `caesar-s-b-b-cesar`
   - indirizzo: Via Prima Berardinetti, 33/A, 84018 Scafati SA
17. **Casa di Ca Rooms** — Cesar�
   - slug: `casa-di-ca-rooms-cesar`
   - indirizzo: Via Giacomo Matteotti, 40, 73018 Squinzano LE
18. **Cesar Palace** — Cesar�
   - slug: `cesar-palace-cesar`
   - indirizzo: Via Nomentana, 55, 00161 Roma RM
19. **Cesaranum B&B** — Cesar�
   - slug: `cesaranum-b-b-cesar`
   - indirizzo: Via Socrate, 9, 73042 Casarano LE
20. **Dear Mary B&B** — Cesar�
   - slug: `dear-mary-b-b-cesar`
   - indirizzo: Via Cacciaventi, 10, 73016 San Cesario di Lecce LE
21. **Hotel Caesar Palace** — Cesar�
   - slug: `hotel-caesar-palace-cesar`
   - indirizzo: Via Consolare Valeria, 130, 98035 Giardini Naxos ME
22. **Là di Cesar - affittacamere** — Cesar�
   - slug: `la-di-cesar-affittacamere-cesar`
   - indirizzo: Via G. Mazzini, 15, 33041 Aiello del Friuli UD
23. **Mesciu Cesare B&B** — Cesar�
   - slug: `mesciu-cesare-b-b-cesar`
   - indirizzo: Via Martino Marinosci, 45, 73100 Lecce LE
24. **Ristorante Agriturismo La Contessa Azienda Agrituristica La Contessa Dei F.Lli Giannaccari Marco E Celeste** — Cesar�
   - slug: `ristorante-agriturismo-la-contessa-azienda-agrit-cesar`
   - indirizzo: 34, STR. PROV. 16, Lequile, LE 73010, 73010 Lequile LE
25. **TENUTA CESARINA** — Cesar�
   - slug: `tenuta-cesarina-cesar`
   - indirizzo: Contrada Trappeti, 73031 Alessano LE
26. **Albergo Villa Nobile** — Chiaramonte Gulfi
   - slug: `albergo-villa-nobile-chiaramonte-gulfi`
   - indirizzo: Corso Umberto I, 168, 97012 Chiaramonte Gulfi RG
27. **Casa filu’** — Chiaramonte Gulfi
   - slug: `casa-filu-chiaramonte-gulfi`
   - indirizzo: C.da Giglia -Francesco, 2, 97012 Chiaramonte Gulfi RG
28. **Casavacanze Cappuccini** — Chiaramonte Gulfi
   - slug: `casavacanze-cappuccini-chiaramonte-gulfi`
   - indirizzo: Via Vincenzo Picardi, 7, 97100 Ragusa RG
29. **CATANIA - Historic B&B | Apartments | Home** — Chiaramonte Gulfi
   - slug: `catania-historic-b-b-apartments-home-chiaramonte-gulfi`
   - indirizzo: Piazzetta Cutello, 18, 97012 Chiaramonte Gulfi RG
30. **De Stefano Palace Luxury Hotel** — Chiaramonte Gulfi
   - slug: `de-stefano-palace-luxury-hotel-chiaramonte-gulfi`
   - indirizzo: Via Cavalier Francesco Destefano, 15, 97100 Ragusa RG
31. **Hotel - Agriturismo: Relais Chiaramonte** — Chiaramonte Gulfi
   - slug: `hotel-agriturismo-relais-chiaramonte-chiaramonte-gulfi`
   - indirizzo: Contrada Gisolfo, SP81, Km 7, 97100 Ragusa RG
32. **Hotel Antica Stazione** — Chiaramonte Gulfi
   - slug: `hotel-antica-stazione-chiaramonte-gulfi`
   - indirizzo: SP8, 97012 Chiaramonte Gulfi RG
33. **Hotel Grel** — Chiaramonte Gulfi
   - slug: `hotel-grel-chiaramonte-gulfi`
   - indirizzo: Contrada Pezze, 97012 Chiaramonte Gulfi RG
34. **Il Vespro** — Chiaramonte Gulfi
   - slug: `il-vespro-chiaramonte-gulfi`
   - indirizzo: Via Puglie, Viale della Resistenza, 43, 97013 Comiso RG
35. **only for two giumbabulla home and spa** — Chiaramonte Gulfi
   - slug: `only-for-two-giumbabulla-home-and-spa-chiaramonte-gulfi`
   - indirizzo: Via Sant'Alberto, 1, 97100 Ragusa RG