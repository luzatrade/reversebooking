# Blocco 29/500 — 35 strutture senza descrizione IT

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

1. **Affittacamere Due Mori** — Agna
   - slug: `affittacamere-due-mori-agna`
   - indirizzo: Via Giuseppe Verdi, 19, 35043 Monselice PD
2. **Agriturismo Zennare** — Agna
   - slug: `agriturismo-zennare-agna`
   - indirizzo: Via Zennare, 33 30015, di Ca' Bianca VE
3. **Balabuska Rooms & Garden** — Agna
   - slug: `balabuska-rooms-garden-agna`
   - indirizzo: Str. Romea, 8/b, 35020 Codevigo PD
4. **Blue Dream Hotel** — Agna
   - slug: `blue-dream-hotel-agna`
   - indirizzo: Via Orti, 7c, 35043 Monselice PD
5. **Ca' Brazzo Bed Relais** — Agna
   - slug: `ca-brazzo-bed-relais-agna`
   - indirizzo: Via Cà Brazzo, 33/A, 35020 Arre PD
6. **CA’ CINI** — Agna
   - slug: `ca-cini-agna`
   - indirizzo: Via XXVIII Aprile1954, n.83, 35043 Monselice PD
7. **Casa Sansovino** — Agna
   - slug: `casa-sansovino-agna`
   - indirizzo: Via Jacopo Sansovino, 1, 35020 Pontecasale PD
8. **Hotel La Corte** — Agna
   - slug: `hotel-la-corte-agna`
   - indirizzo: Via Petite Forêt, 6, 35020 Correzzola PD
9. **Hotel Palace** — Agna
   - slug: `hotel-palace-agna`
   - indirizzo: V.le Porta Po, 92, 45100 Rovigo RO
10. **Hotel Trieste** — Agna
   - slug: `hotel-trieste-agna`
   - indirizzo: Via Roma, 24, 35029 Pontelongo PD
11. **IL TRENO DEI SOGNI BED & RELAIS** — Agna
   - slug: `il-treno-dei-sogni-bed-relais-agna`
   - indirizzo: Via Padova, 41, 35026 Conselve PD
12. **LA GASTALDIA** — Agna
   - slug: `la-gastaldia-agna`
   - indirizzo: Via Conapadovana, 8, 35021 Agna PD
13. **LA REBOSOLA** — Agna
   - slug: `la-rebosola-agna`
   - indirizzo: Via Rebosola, 36 35020, 35020 Cive' PD
14. **SAN PIO X Farm since 1708 - Agricampeggio - Area Camper** — Agna
   - slug: `san-pio-x-farm-since-1708-agricampeggio-area-cam-agna`
   - indirizzo: Vicolo S. Pio X, 37, 35020 Albignasego PD
15. **Agriturismo Cà Fenile** — Agnadello
   - slug: `agriturismo-ca-fenile-agnadello`
   - indirizzo: Via Brumano, 3, 24022 Alzano Lombardo BG
16. **Agriturismo Cascina di Mezzo** — Agnadello
   - slug: `agriturismo-cascina-di-mezzo-agnadello`
   - indirizzo: Via Martin Luther King, 20050 Liscate MI
17. **B&B Cremona | La casa del nonno** — Agnadello
   - slug: `b-b-cremona-la-casa-del-nonno-agnadello`
   - indirizzo: Via Battaglione, 71, 26100 Battaglione-bagnara CR
18. **Il Feudo di Agnadello Hotel & Eventi** — Agnadello
   - slug: `il-feudo-di-agnadello-hotel-eventi-agnadello`
   - indirizzo: Via Rivolta, 1, 26020 Agnadello CR
19. **Albergo Palazzo Sant'Anna** — Agnana Calabra
   - slug: `albergo-palazzo-sant-anna-agnana-calabra`
   - indirizzo: Via S. Anna, 1, 89040 Gerace RC
20. **Albergo Ristorante da Rocco** — Agnana Calabra
   - slug: `albergo-ristorante-da-rocco-agnana-calabra`
   - indirizzo: Via Primo Maggio, 21, 89046 Marina di Gioiosa Ionica RC
21. **B&B Camumidha** — Agnana Calabra
   - slug: `b-b-camumidha-agnana-calabra`
   - indirizzo: Via Fabio Filzi, 12, 89040 Gerace RC
22. **B&B La Vecchia Stazione** — Agnana Calabra
   - slug: `b-b-la-vecchia-stazione-agnana-calabra`
   - indirizzo: Via Lazio, 51, 89042 Gioiosa Ionica RC
23. **B&B Penisola Verde** — Agnana Calabra
   - slug: `b-b-penisola-verde-agnana-calabra`
   - indirizzo: Contrada Prologo, 89044 Locri RC
24. **Bed in Italy Siderno** — Agnana Calabra
   - slug: `bed-in-italy-siderno-agnana-calabra`
   - indirizzo: Via Cesare Battisti, 128, 89048 Siderno RC
25. **Country House Paola** — Agnana Calabra
   - slug: `country-house-paola-agnana-calabra`
   - indirizzo: Via dei Giardini, 101, 89046 Marina RC
26. **Fontanella Hotel** — Agnana Calabra
   - slug: `fontanella-hotel-agnana-calabra`
   - indirizzo: Contrada Moschetta, 89044 Moschetta RC
27. **Grand Hotel President** — Agnana Calabra
   - slug: `grand-hotel-president-agnana-calabra`
   - indirizzo: S.da Statale 106 Jonica, 106, 89048 Siderno RC
28. **Hotel Costa Blu** — Agnana Calabra
   - slug: `hotel-costa-blu-agnana-calabra`
   - indirizzo: Contrada Mandorleto, 19, 89044 Locri RC
29. **Hotel Residence Gnura Momma** — Agnana Calabra
   - slug: `hotel-residence-gnura-momma-agnana-calabra`
   - indirizzo: Via Don Vittorio, 63, 89044 Locri RC
30. **Hotel Ristorante Casa del Gourmet** — Agnana Calabra
   - slug: `hotel-ristorante-casa-del-gourmet-agnana-calabra`
   - indirizzo: Contrada Pantaleo, Snc, 89048 Pantaleo RC
31. **Hotel Ristorante Miramare** — Agnana Calabra
   - slug: `hotel-ristorante-miramare-agnana-calabra`
   - indirizzo: Via Cristoforo Colombo, 2A, 89046 Marina di Gioiosa Ionica RC
32. **La Pietra Bianca** — Agnana Calabra
   - slug: `la-pietra-bianca-agnana-calabra`
   - indirizzo: Contrada Agliocane, 35/A, 89042 Gioiosa Ionica RC
33. **La Rosa Blu Bed & Breakfast** — Agnana Calabra
   - slug: `la-rosa-blu-bed-breakfast-agnana-calabra`
   - indirizzo: Via Nazario Sauro, 23, 89040 Gerace RC
34. **Lo Sparviero** — Agnana Calabra
   - slug: `lo-sparviero-agnana-calabra`
   - indirizzo: Via Nazionale, 15, 89040 Gerace RC
35. **Palazzo Candida B&B** — Agnana Calabra
   - slug: `palazzo-candida-b-b-agnana-calabra`
   - indirizzo: Via Candida, 7, 89040 Gerace RC