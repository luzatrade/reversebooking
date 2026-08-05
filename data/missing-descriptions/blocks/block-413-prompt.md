# Blocco 413/500 — 35 strutture senza descrizione IT

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

1. **B&B La casa di Giuliana** — Canzano
   - slug: `b-b-la-casa-di-giuliana-canzano`
   - indirizzo: C.da Case Gerardi 2, 64037 Cermignano TE
2. **Casa Amrita B&B** — Canzano
   - slug: `casa-amrita-b-b-canzano`
   - indirizzo: Frazione Poggio San Vittorino, snc, 64100 Teramo TE
3. **Casina Margherita** — Canzano
   - slug: `casina-margherita-canzano`
   - indirizzo: Località Casale, 15, 64020 Canzano TE
4. **Hotel Villa Gobbi (3 stelle)** — Canzano
   - slug: `hotel-villa-gobbi-3-stelle-canzano`
   - indirizzo: SS150, 323, 64020 Castelnuovo Vomano TE
5. **La Grande Quercia** — Canzano
   - slug: `la-grande-quercia-canzano`
   - indirizzo: Contrada Fontanella, 64100 Caprafico TE
6. **B&Bike Como Lake** — Canzo
   - slug: `b-bike-como-lake-canzo`
   - indirizzo: Via Lambro, 27, 22030 Castelmarte CO
7. **Bianca Relais, by R Collection Hotels** — Canzo
   - slug: `bianca-relais-by-r-collection-hotels-canzo`
   - indirizzo: Via Dante Alighieri, 18, 23848 Oggiono LC
8. **Hotel Villa Giulia - Ristorante Al Terrazzo** — Canzo
   - slug: `hotel-villa-giulia-ristorante-al-terrazzo-canzo`
   - indirizzo: Frazione Parè, 73, 23868 Valmadrera LC
9. **Il Mulino di Valeria** — Canzo
   - slug: `il-mulino-di-valeria-canzo`
   - indirizzo: Via Gajum, 31F, 22035 Canzo CO
10. **Lake house canzo** — Canzo
   - slug: `lake-house-canzo-canzo`
   - indirizzo: Via Torretta, 7, 22035 Canzo CO
11. **Hotel All'Orologio** — Caorle
   - slug: `hotel-all-orologio-caorle`
   - indirizzo: Via del Quadrante, 2, 30021 Caorle VE
12. **Hotel Ambassador** — Caorle
   - slug: `hotel-ambassador-caorle`
   - indirizzo: Via Giovanni da Verazzano, 4, 30021 Caorle VE
13. **Hotel Austria** — Caorle
   - slug: `hotel-austria-caorle`
   - indirizzo: Via della Serenissima, 15, 30021 Caorle VE
14. **Hotel Bellevue** — Caorle
   - slug: `hotel-bellevue-caorle`
   - indirizzo: Piazza Alcide De Gasperi, 3, 30021 Caorle VE
15. **Hotel Continental** — Caorle
   - slug: `hotel-continental-caorle`
   - indirizzo: Lungomare Trieste, 49, 30021 Caorle VE
16. **Hotel Crystal** — Caorle
   - slug: `hotel-crystal-caorle`
   - indirizzo: Via del Quadrante, 9, 30021 Caorle VE
17. **Hotel Danieli** — Caorle
   - slug: `hotel-danieli-caorle`
   - indirizzo: Piazza Marco Polo, 5, 30021 Caorle VE
18. **Hotel Delfino** — Caorle
   - slug: `hotel-delfino-caorle`
   - indirizzo: Lungomare Trieste, 11, 30021 Caorle VE
19. **Hotel Gardenia** — Caorle
   - slug: `hotel-gardenia-caorle`
   - indirizzo: Via Nicesolo, 7, 30021 Caorle VE
20. **Hotel Helen** — Caorle
   - slug: `hotel-helen-caorle`
   - indirizzo: Via Milano, 8, 30021 Caorle VE
21. **Hotel Helga** — Caorle
   - slug: `hotel-helga-caorle`
   - indirizzo: Via dei Calamari, 7, 30021 Caorle VE
22. **Hotel Karinzia** — Caorle
   - slug: `hotel-karinzia-caorle`
   - indirizzo: Lungomare Trieste, 32/33, 30021 Caorle VE
23. **Hotel Lux** — Caorle
   - slug: `hotel-lux-caorle`
   - indirizzo: Lungomare Trieste, 56, 30021 Caorle VE
24. **Hotel Marco Polo** — Caorle
   - slug: `hotel-marco-polo-caorle`
   - indirizzo: Via della Serenissima, 22, 30021 Caorle VE
25. **Hotel Marzia Holiday Queen** — Caorle
   - slug: `hotel-marzia-holiday-queen-caorle`
   - indirizzo: Viale Dante Alighieri, 2, 30021 Caorle VE
26. **Hotel Monaco** — Caorle
   - slug: `hotel-monaco-caorle`
   - indirizzo: Lungomare Trieste, 58, 30021 Caorle VE
27. **Hotel Sanremo & Residence La Serenissima** — Caorle
   - slug: `hotel-sanremo-residence-la-serenissima-caorle`
   - indirizzo: Lungomare Trieste, 24, 30021 Caorle VE
28. **Hotel Splendid** — Caorle
   - slug: `hotel-splendid-caorle`
   - indirizzo: Viale Santa Margherita, 31, 30021 Caorle VE
29. **Hotel Tizian Beach** — Caorle
   - slug: `hotel-tizian-beach-caorle`
   - indirizzo: +39 042181266, Piazza Marco Polo, 1, 30021 Caorle VE
30. **HOTEL VENUS BEST PRICE** — Caorle
   - slug: `hotel-venus-best-price-caorle`
   - indirizzo: Corso G. Chiggiato, 28, 30021 Caorle VE
31. **HOTEL 5 RESIDENCE** — Caorso
   - slug: `hotel-5-residence-caorso`
   - indirizzo: Via Luigi Pennazzi, 9, 29122 Piacenza PC
32. **Hotel Business Ristopub** — Caorso
   - slug: `hotel-business-ristopub-caorso`
   - indirizzo: Piazza Tre Martiri, 9/10, 29010 Pontenure PC
33. **Hotel City** — Caorso
   - slug: `hotel-city-caorso`
   - indirizzo: Via Emilia Parmense, 54, 29100 Piacenza PC
34. **The Central Rock Inn** — Caorso
   - slug: `the-central-rock-inn-caorso`
   - indirizzo: Via Torricella, 1, 29121 Piacenza PC
35. **B&B Antica Forneria** — Capaccio Paestum
   - slug: `b-b-antica-forneria-capaccio-paestum`
   - indirizzo: Via Ponte Marmoreo, 57, 84047 Capaccio Paestum SA