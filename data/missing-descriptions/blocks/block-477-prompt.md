# Blocco 477/500 — 35 strutture senza descrizione IT

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

1. **Ta' Marie B&B** — Chiaramonte Gulfi
   - slug: `ta-marie-b-b-chiaramonte-gulfi`
   - indirizzo: Ta' Marie, Contrada Piante, 27, 97012 Roccazzo RG
2. **Terrazzani Suite** — Chiaramonte Gulfi
   - slug: `terrazzani-suite-chiaramonte-gulfi`
   - indirizzo: Via Matrice, 24, 97013 Comiso RG
3. **Agriturismo Casa Balata - Realmonte - Agrigento Valle dei Templi - Scala dei Turchi** — Chiusa Sclafani
   - slug: `agriturismo-casa-balata-realmonte-agrigento-vall-chiusa-sclafani`
   - indirizzo: Contrada Rina Cannameli 57, 92010 Realmonte AG
4. **Agriturismo Masseria Rossella** — Chiusa Sclafani
   - slug: `agriturismo-masseria-rossella-chiusa-sclafani`
   - indirizzo: S.P. 5, Km 28,900, 90037 Rossella, PA
5. **Fattoria Manostalla - Villa Chiarelli** — Chiusa Sclafani
   - slug: `fattoria-manostalla-villa-chiarelli-chiusa-sclafani`
   - indirizzo: Via Manostalla, snc, 90047, 90047 Partinico PA
6. **Il Ciliegio Locazione Turistica** — Chiusa Sclafani
   - slug: `il-ciliegio-locazione-turistica-chiusa-sclafani`
   - indirizzo: Via Ungheria, 99, 90033 Chiusa Sclafani PA
7. **Le Case di Cardellino - AgriSpa** — Chiusa Sclafani
   - slug: `le-case-di-cardellino-agrispa-chiusa-sclafani`
   - indirizzo: Statale SS 120, KM 18+700, 90020 Sclafani Bagni PA
8. **Oscar dei Sapori** — Chiusa Sclafani
   - slug: `oscar-dei-sapori-chiusa-sclafani`
   - indirizzo: Contrada Calcara, 90033, 90030 Chiusa Sclafani PA
9. **B&B D'ALTRITEMPI - elegance in Cianciana** — Cianciana
   - slug: `b-b-d-altritempi-elegance-in-cianciana-cianciana`
   - indirizzo: Via Gioacchino Rossini, 28, 92012 Cianciana AG
10. **Affittacamere** — Ciminna
   - slug: `affittacamere-ciminna`
   - indirizzo: Piazza Terme, 11, 90018 Termini Imerese PA
11. **Affittacamere Azzarello** — Ciminna
   - slug: `affittacamere-azzarello-ciminna`
   - indirizzo: Via Piani 32, 90019 Trabia PA
12. **Casa Ennio by Villa Paola Ciminna** — Ciminna
   - slug: `casa-ennio-by-villa-paola-ciminna-ciminna`
   - indirizzo: Corso Umberto I, 75, 90023 Ciminna PA
13. **Elipa** — Ciminna
   - slug: `elipa-ciminna`
   - indirizzo: Via Alloro, 1, 90019 Trabia PA
14. **Fast Room** — Ciminna
   - slug: `fast-room-ciminna`
   - indirizzo: Corso Umberto I, 182, 90023 Ciminna PA
15. **B&B Il Mare di Terrasini** — Cinisi
   - slug: `b-b-il-mare-di-terrasini-cinisi`
   - indirizzo: Via Giuseppe Mazzini, 4, 90049 Terrasini PA
16. **B&B Torre Pozzillo Beach** — Cinisi
   - slug: `b-b-torre-pozzillo-beach-cinisi`
   - indirizzo: Via Piraineto, 127, 90045 Cinisi PA
17. **Capo Rama Suites & Rooms** — Cinisi
   - slug: `capo-rama-suites-rooms-cinisi`
   - indirizzo: Via Ruggero Settimo, 22, 90049 Terrasini PA
18. **Cinisi 89 B&B** — Cinisi
   - slug: `cinisi-89-b-b-cinisi`
   - indirizzo: Via Luigi Einaudi, 89, 90045 Cinisi PA
19. **Domus Livi** — Cinisi
   - slug: `domus-livi-cinisi`
   - indirizzo: Via Venuti, 41, 90045 Cinisi PA
20. **Kunesias B&B Cinisi** — Cinisi
   - slug: `kunesias-b-b-cinisi-cinisi`
   - indirizzo: Via Salvatore Badalamenti, 246, 90045 Cinisi PA
21. **Le tre ninfe Cinisi** — Cinisi
   - slug: `le-tre-ninfe-cinisi-cinisi`
   - indirizzo: Via Gorizia, 3, 90045 Cinisi PA
22. **Lucy's Cottage Cinisi** — Cinisi
   - slug: `lucy-s-cottage-cinisi-cinisi`
   - indirizzo: Via Guglielmo Marconi, 21 M, 90045 Cinisi PA
23. **Ma Gra Vi** — Cinisi
   - slug: `ma-gra-vi-cinisi`
   - indirizzo: Via Santa Rosalia, 111, 90049 Terrasini PA
24. **Magaggiari Hotel Resort** — Cinisi
   - slug: `magaggiari-hotel-resort-cinisi`
   - indirizzo: Via Impastato Peppino, 7, 90045 Cinisi PA
25. **Marina Bay** — Cinisi
   - slug: `marina-bay-cinisi`
   - indirizzo: Via Leonardo da Vinci, 47, 90049 Terrasini PA
26. **Residence Villa Rosa dei Venti** — Cinisi
   - slug: `residence-villa-rosa-dei-venti-cinisi`
   - indirizzo: Via Paolo Borsellino, 107, 90045 Cinisi PA
27. **Sea Life Terrasini** — Cinisi
   - slug: `sea-life-terrasini-cinisi`
   - indirizzo: Via G. Meli, 1, 90049 Terrasini PA
28. **Settegrana** — Cinisi
   - slug: `settegrana-cinisi`
   - indirizzo: Via Salvatore Badalamenti, 26, 90045 Cinisi PA
29. **TerraSole Bakery B&B** — Cinisi
   - slug: `terrasole-bakery-b-b-cinisi`
   - indirizzo: Via Francesco Crispi, 90, 90049 Terrasini PA
30. **VOI Florio Resort** — Cinisi
   - slug: `voi-florio-resort-cinisi`
   - indirizzo: Via Impastato Peppino, 41, 90045 Cinisi PA
31. **Albergo Al Carugio (CIN:IT011019A1F9RJLJHZ)** — Cinque Terre
   - slug: `albergo-al-carugio-cin-it011019a1f9rjljhz-cinque-terre`
   - indirizzo: Via Roma, 100, 19016 Monterosso al Mare SP
32. **Albergo Baia** — Cinque Terre
   - slug: `albergo-baia-cinque-terre`
   - indirizzo: Via Fegina, 88, 19016 Monterosso al Mare SP
33. **Albergo la Colonnina** — Cinque Terre
   - slug: `albergo-la-colonnina-cinque-terre`
   - indirizzo: Via Zuecca, 6, 19016 Monterosso al Mare SP
34. **Albergo Punta Mesco** — Cinque Terre
   - slug: `albergo-punta-mesco-cinque-terre`
   - indirizzo: Via Molinelli, 35, 19016 Monterosso al Mare SP
35. **Albergo Stella della Marina** — Cinque Terre
   - slug: `albergo-stella-della-marina-cinque-terre`
   - indirizzo: Via XX Settembre, 11, 19016 Monterosso al Mare SP