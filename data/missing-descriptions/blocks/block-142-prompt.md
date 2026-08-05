# Blocco 142/500 — 35 strutture senza descrizione IT

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

1. **beb Aria di Montagna** — Ardenno
   - slug: `beb-aria-di-montagna-ardenno`
   - indirizzo: Via Somvalle, 279, 23010 Forcola SO
2. **Cà Selvetta - Holiday Houses in Valtellina** — Ardenno
   - slug: `ca-selvetta-holiday-houses-in-valtellina-ardenno`
   - indirizzo: Via Piani Selvetta, 30, 23010 Forcola SO
3. **Foresteria Traversi** — Ardenno
   - slug: `foresteria-traversi-ardenno`
   - indirizzo: Via Adua, 51, 23010 Berbenno di Valtellina SO
4. **Hotel Badile** — Ardenno
   - slug: `hotel-badile-ardenno`
   - indirizzo: Via Mulini, 23010 San Martino SO
5. **Il Laghetto Hotel** — Ardenno
   - slug: `il-laghetto-hotel-ardenno`
   - indirizzo: Via Stelxi, 1, 23010 Caiolo SO
6. **Trattoria Traversi** — Ardenno
   - slug: `trattoria-traversi-ardenno`
   - indirizzo: Via Adua, 32, 23010 Berbenno di Valtellina SO
7. **Al Milano Hotel, Ristorante & Pizzeria** — Ardesio
   - slug: `al-milano-hotel-ristorante-pizzeria-ardesio`
   - indirizzo: Via Capitano Giovanni Rodari, 5, 24060 Bossico BG
8. **Albergo Bigoni** — Ardesio
   - slug: `albergo-bigoni-ardesio`
   - indirizzo: Piazza B.V. Moretto 25, Piazza Madonna delle Grazie, 24020 Ardesio BG
9. **Albergo Della Posta** — Ardesio
   - slug: `albergo-della-posta-ardesio`
   - indirizzo: Via Giuseppe Mazzini, 18, 24023 Clusone BG
10. **Albergo Ristorante La Pesa** — Ardesio
   - slug: `albergo-ristorante-la-pesa-ardesio`
   - indirizzo: Via Ercole e Pietro Pozzi, 1, 24020 Parre BG
11. **Antica Locanda** — Ardesio
   - slug: `antica-locanda-ardesio`
   - indirizzo: Piazza Uccelli, 3, 24023 Clusone BG
12. **Collina Luxury Relais** — Ardesio
   - slug: `collina-luxury-relais-ardesio`
   - indirizzo: Via Collina Verde, 2, 24023 Clusone BG
13. **Da Giorgio Ardesio- Hotel-Ristorante- atelier da Giorgio** — Ardesio
   - slug: `da-giorgio-ardesio-hotel-ristorante-atelier-da-g-ardesio`
   - indirizzo: Via Guglielmo Marconi, 19, 24020 Ardesio BG
14. **Hotel Belvedere** — Ardesio
   - slug: `hotel-belvedere-ardesio`
   - indirizzo: Via G. Marconi, 69, 24065 Lovere BG
15. **Hotel Des Alpes** — Ardesio
   - slug: `hotel-des-alpes-ardesio`
   - indirizzo: Via Donico, 10, 24020 Castione della Presolana BG
16. **Hotel Libia** — Ardesio
   - slug: `hotel-libia-ardesio`
   - indirizzo: Via da Fin, 15, 24020 Fino del Monte BG
17. **Hotel Migliorati - Castione della Presolana** — Ardesio
   - slug: `hotel-migliorati-castione-della-presolana-ardesio`
   - indirizzo: Via Provinciale, 84, 24020 Castione della Presolana BG
18. **Hotel Ristorante Garden** — Ardesio
   - slug: `hotel-ristorante-garden-ardesio`
   - indirizzo: Via Papa Giovanni XXIII, 1, 24020 Fino del Monte BG
19. **Hotel Ristorante Morandi** — Ardesio
   - slug: `hotel-ristorante-morandi-ardesio`
   - indirizzo: Via Dante, 19, 24020 Fiumenero BG
20. **Hotel Spiazzi** — Ardesio
   - slug: `hotel-spiazzi-ardesio`
   - indirizzo: Piazzale Avert, 1, 24020 Gromo BG
21. **Hotel Vittoria** — Ardesio
   - slug: `hotel-vittoria-ardesio`
   - indirizzo: Via Spiazzi, 136, 24020 Boario Spiazzi BG
22. **Locanda del Cacciatore** — Ardesio
   - slug: `locanda-del-cacciatore-ardesio`
   - indirizzo: Via Roma, 9, 24020 Gromo BG
23. **CASA DI MAMRE** — Ardore
   - slug: `casa-di-mamre-ardore`
   - indirizzo: Via XX Settembre, 1, 89031 Ardore RC
24. **Riva del Mare** — Ardore
   - slug: `riva-del-mare-ardore`
   - indirizzo: Via Marina, 45, 89037 Ardore Marina RC
25. **Agriturismo Pirara** — Arena
   - slug: `agriturismo-pirara-arena`
   - indirizzo: Contrada Pirara, 16, 89831 Gerocarne VV
26. **b&b il Maggiolino** — Arena
   - slug: `b-b-il-maggiolino-arena`
   - indirizzo: Via Toscana, località, 89900 San Pietro di Bivona VV
27. **Bed And Breakfast Coral Blue** — Arena
   - slug: `bed-and-breakfast-coral-blue-arena`
   - indirizzo: S.p.Triparni Portosalvo, 89900 Briatico VV
28. **Hotel Barbieri** — Arena
   - slug: `hotel-barbieri-arena`
   - indirizzo: Via del Pescatore, 29, 89900 Vibo Marina VV
29. **Hotel Certosa** — Arena
   - slug: `hotel-certosa-arena`
   - indirizzo: Via Alfonso Scrivo, 4, 89822 Serra San Bruno VV
30. **Hotel Diavin** — Arena
   - slug: `hotel-diavin-arena`
   - indirizzo: Via Palermo, 11, 89900 Vibo Marina VV
31. **Hotel Ristorante Villa Rosa** — Arena
   - slug: `hotel-ristorante-villa-rosa-arena`
   - indirizzo: Via Stretto di Pietro, 89822 Spadola VV
32. **Residenza Arena** — Arena
   - slug: `residenza-arena-arena`
   - indirizzo: Contrada Paola, 89861 Tropea VV
33. **The Maze** — Arena
   - slug: `the-maze-arena`
   - indirizzo: Via Scesa del Gesù, 89900 Vibo Valentia VV
34. **700 Enolocanda** — Arena Po
   - slug: `700-enolocanda-arena-po`
   - indirizzo: Via Castello, 31, 27046 Santa Giuletta PV
35. **Agriturismo Il Casale del Sapere e del Sapore** — Arena Po
   - slug: `agriturismo-il-casale-del-sapere-e-del-sapore-arena-po`
   - indirizzo: Via Bruno Armani, 6, 29015 Castel San Giovanni PC