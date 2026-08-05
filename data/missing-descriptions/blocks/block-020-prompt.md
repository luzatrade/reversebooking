# Blocco 20/500 — 35 strutture senza descrizione IT

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

1. **Hotel Fleming** — Acuto
   - slug: `hotel-fleming-acuto`
   - indirizzo: Circonvallazione Macchiadoro, 6, 03014 Fiuggi FR
2. **Hotel Gioia Garden** — Acuto
   - slug: `hotel-gioia-garden-acuto`
   - indirizzo: Via Sant'Emiliano, 23, 03014 Fiuggi FR
3. **Hotel Italia** — Acuto
   - slug: `hotel-italia-acuto`
   - indirizzo: Via Fonte Nuova, 15, 03014 Fiuggi FR
4. **Hotel La Casareccia** — Acuto
   - slug: `hotel-la-casareccia-acuto`
   - indirizzo: Via Armando Diaz, 231, 03014 Fiuggi FR
5. **Hotel Terminus** — Acuto
   - slug: `hotel-terminus-acuto`
   - indirizzo: V.le Fonte Anticolana, 35, 03014 Fiuggi FR
6. **Hotel Tobruk Bardia** — Acuto
   - slug: `hotel-tobruk-bardia-acuto`
   - indirizzo: Via Vallicelle, 8, 03014 Fiuggi FR
7. **Hotel Verona** — Acuto
   - slug: `hotel-verona-acuto`
   - indirizzo: Via Sant'Emiliano, 54, 03014 Fiuggi FR
8. **Iris Crillon Active Hotel** — Acuto
   - slug: `iris-crillon-active-hotel-acuto`
   - indirizzo: Via Fiume, 7, 03014 Fiuggi FR
9. **La Panoramica** — Acuto
   - slug: `la-panoramica-acuto`
   - indirizzo: Via Capodimonte, 49, 03010 Acuto FR
10. **AI PALMENTI B&B** — Adelfia
   - slug: `ai-palmenti-b-b-adelfia`
   - indirizzo: Via Roni, 13, 70010 Adelfia BA
11. **Alla Niviera B&B Adelfia** — Adelfia
   - slug: `alla-niviera-b-b-adelfia-adelfia`
   - indirizzo: Niviera del Principe, Via Rosario Livatino, 38, 70010 Adelfia BA
12. **B&B ACA Suite Luxury** — Adelfia
   - slug: `b-b-aca-suite-luxury-adelfia`
   - indirizzo: Via Ricchetti, 31, 70010 Adelfia BA
13. **B&B Albaluna** — Adelfia
   - slug: `b-b-albaluna-adelfia`
   - indirizzo: Via Bari, 359, 70010 Valenzano BA
14. **B&B Don Franco** — Adelfia
   - slug: `b-b-don-franco-adelfia`
   - indirizzo: Via Rutigliano, 39, 70010 Adelfia BA
15. **B&B Due Rioni** — Adelfia
   - slug: `b-b-due-rioni-adelfia`
   - indirizzo: Via Martiri di Via Fani, 3/B, 70010 Adelfia BA
16. **B&B La Torretta** — Adelfia
   - slug: `b-b-la-torretta-adelfia`
   - indirizzo: Via Cairoli, 6, 70020 Bitritto BA
17. **B&B Le Sirene** — Adelfia
   - slug: `b-b-le-sirene-adelfia`
   - indirizzo: Via Nicolo' Giudice, 1, 70010 Cellamare BA
18. **B&B San Trifone** — Adelfia
   - slug: `b-b-san-trifone-adelfia`
   - indirizzo: Piazza Mercato, 25, 70010 Adelfia BA
19. **Casa Gnoni Bed a d Breakfast** — Adelfia
   - slug: `casa-gnoni-bed-a-d-breakfast-adelfia`
   - indirizzo: Via Bari, 14, 70010 Valenzano BA
20. **Gilu' Luxury Suite jacuzzi** — Adelfia
   - slug: `gilu-luxury-suite-jacuzzi-adelfia`
   - indirizzo: Via Santa Maria della Stella, 97, 70010 Adelfia BA
21. **Hotel 90, Capurso Bari** — Adelfia
   - slug: `hotel-90-capurso-bari-adelfia`
   - indirizzo: Via Magliano, 62, 70010 Capurso BA
22. **Hotel&Residence Federiciano** — Adelfia
   - slug: `hotel-residence-federiciano-adelfia`
   - indirizzo: Via Giovanni Laterza, 28, 70010 Valenzano BA
23. **Il Borgo Antico** — Adelfia
   - slug: `il-borgo-antico-adelfia`
   - indirizzo: Via Pizzoli, 27, 70010 Capurso BA
24. **Il Rifugio** — Adelfia
   - slug: `il-rifugio-adelfia`
   - indirizzo: Via Palmucci, 27, 70010 Adelfia BA
25. **Lovely Rooms - Guest House Suites** — Adelfia
   - slug: `lovely-rooms-guest-house-suites-adelfia`
   - indirizzo: Via Maria Callas, 8, 70019 Triggiano BA
26. **Luxury Living Suite B&B** — Adelfia
   - slug: `luxury-living-suite-b-b-adelfia`
   - indirizzo: Corso Umberto I, 30, 70010 Adelfia BA
27. **Marbel Suite** — Adelfia
   - slug: `marbel-suite-adelfia`
   - indirizzo: Via Vico dei Fiori, 7, 70010 Adelfia BA
28. **Nama Stay Bed and Breakfast** — Adelfia
   - slug: `nama-stay-bed-and-breakfast-adelfia`
   - indirizzo: Piazza Vittoriano Cimmarrusti, 2, 70010 Adelfia BA
29. **Valentino S.R.L.** — Adelfia
   - slug: `valentino-s-r-l-adelfia`
   - indirizzo: Via Casamassima, 22, 70010 Valenzano BA
30. **Agriturismo Corte Aragonese** — Adrano
   - slug: `agriturismo-corte-aragonese-adrano`
   - indirizzo: SS121, Km 30, 95038 Santa Maria di Licodia CT
31. **Agriturismo Gianferrante** — Adrano
   - slug: `agriturismo-gianferrante-adrano`
   - indirizzo: Contrada Gianferrante, 95047 Paternò CT
32. **B&B 5 Sensi** — Adrano
   - slug: `b-b-5-sensi-adrano`
   - indirizzo: Via IX Traversa, 51, 95032 Belpasso CT
33. **B&B Casa degli Ulivi Etna** — Adrano
   - slug: `b-b-casa-degli-ulivi-etna-adrano`
   - indirizzo: Via Madonna del Carmelo, 21C, 95030 Ragalna CT
34. **B&B Cortile Aurora** — Adrano
   - slug: `b-b-cortile-aurora-adrano`
   - indirizzo: Via Sacerdote Vincenzo Schilirò, 36, 95034 Bronte CT
35. **B&B Eurelios** — Adrano
   - slug: `b-b-eurelios-adrano`
   - indirizzo: Via Spampinato Aurelio, 33, 95031 Adrano CT