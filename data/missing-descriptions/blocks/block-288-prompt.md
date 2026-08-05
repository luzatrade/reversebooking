# Blocco 288/500 — 35 strutture senza descrizione IT

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

1. **Albergo Feluca** — Bonassola
   - slug: `albergo-feluca-bonassola`
   - indirizzo: Via Maxinara, 1, 19011 Bonassola SP
2. **Albergo Lungomare** — Bonassola
   - slug: `albergo-lungomare-bonassola`
   - indirizzo: Via Giacomo Matteotti, 2, 19011 Bonassola SP
3. **B&B Piè del Castello** — Bonassola
   - slug: `b-b-pie-del-castello-bonassola`
   - indirizzo: Via Guido Semenza, 2, 19015 Levanto SP
4. **Cà du Ferrà Farm & Relax** — Bonassola
   - slug: `ca-du-ferra-farm-relax-bonassola`
   - indirizzo: Via Gavazzo, snc, 19011 Bonassola SP
5. **Curpi de Ma** — Bonassola
   - slug: `curpi-de-ma-bonassola`
   - indirizzo: Via Gino Daneri, 18, 19011 Bonassola SP
6. **Fabienne** — Bonassola
   - slug: `fabienne-bonassola`
   - indirizzo: Via Gino Daneri, 2/Int. 4, 19011 Bonassola SP
7. **Hotel Delle Rose** — Bonassola
   - slug: `hotel-delle-rose-bonassola`
   - indirizzo: Via Giuseppe Garibaldi, 8, 19011 Bonassola SP
8. **Hotel Garden** — Bonassola
   - slug: `hotel-garden-bonassola`
   - indirizzo: Corso Italia, 6, 19015 Levanto SP
9. **Hotel Palace** — Bonassola
   - slug: `hotel-palace-bonassola`
   - indirizzo: Corso Roma, 25, 19015 Levanto SP
10. **Hotel Villa Belvedere** — Bonassola
   - slug: `hotel-villa-belvedere-bonassola`
   - indirizzo: Via Ammiraglio Serra, 33, 19100 Bonassola SP
11. **Hotel Villa Margherita** — Bonassola
   - slug: `hotel-villa-margherita-bonassola`
   - indirizzo: Via Trento e Trieste, 31, 19015 Levanto SP
12. **La Madonnetta - Dimora d'epoca -** — Bonassola
   - slug: `la-madonnetta-dimora-d-epoca-bonassola`
   - indirizzo: Via Trento e Trieste, 46, 19015 Levanto SP
13. **La Rossola** — Bonassola
   - slug: `la-rossola-bonassola`
   - indirizzo: Localita' Rossola, 11, 19011 Bonassola SP
14. **Pensione Moderna** — Bonassola
   - slug: `pensione-moderna-bonassola`
   - indirizzo: Via Gino Daneri, 79, 19011 Bonassola SP
15. **Resort La Francesca** — Bonassola
   - slug: `resort-la-francesca-bonassola`
   - indirizzo: Località La Francesca, 19011 Bonassola SP
16. **Rita B&B** — Bonassola
   - slug: `rita-b-b-bonassola`
   - indirizzo: Via Sant'Erasmo, 27, 19011 Bonassola SP
17. **Art & Hotel** — Bonate Sopra
   - slug: `art-hotel-bonate-sopra`
   - indirizzo: Via dei Compagnoni, 31, 24048 Treviolo BG
18. **B&B Appartamento Dimora San Giorgio LT** — Bonate Sopra
   - slug: `b-b-appartamento-dimora-san-giorgio-lt-bonate-sopra`
   - indirizzo: Via S. Giorgio, 3, 24040 Bonate Sotto BG
19. **B&B Puravita** — Bonate Sopra
   - slug: `b-b-puravita-bonate-sopra`
   - indirizzo: Via S. Francesco D'Assisi, 21, 24036 Ponte San Pietro BG
20. **CityWalls - Guest House** — Bonate Sopra
   - slug: `citywalls-guest-house-bonate-sopra`
   - indirizzo: Via Cesare Tallone, 2, 24128 Bergamo BG
21. **LVG Hotel Collection - Bergamo West** — Bonate Sopra
   - slug: `lvg-hotel-collection-bergamo-west-bonate-sopra`
   - indirizzo: VIa Fausto Radici, 3, 24030 Mozzo BG
22. **One Hotel Dalmine** — Bonate Sopra
   - slug: `one-hotel-dalmine-bonate-sopra`
   - indirizzo: Via Frà Galgario, 1, 24044 Dalmine BG
23. **Residence Podere San Marco** — Bonate Sopra
   - slug: `residence-podere-san-marco-bonate-sopra`
   - indirizzo: Via del Gambetto, 22, 24040 Bonate Sopra BG
24. **VILLA FENIX Ponte San Pietro** — Bonate Sopra
   - slug: `villa-fenix-ponte-san-pietro-bonate-sopra`
   - indirizzo: Via XXIV Maggio, 17, 24036 Ponte San Pietro BG
25. **Garden Residence** — Bonate Sotto
   - slug: `garden-residence-bonate-sotto`
   - indirizzo: Via Bastone, 24, 24044 Dalmine BG
26. **Mercure Bergamo Aeroporto** — Bonate Sotto
   - slug: `mercure-bergamo-aeroporto-bonate-sotto`
   - indirizzo: Via Boito, 12, 24040 Stezzano BG
27. **Villa Giulia** — Bonate Sotto
   - slug: `villa-giulia-bonate-sotto`
   - indirizzo: Via Vittorio Veneto, 86, 24040 Bonate Sotto BG
28. **Agriturismo La Corte di Anna** — Bonavigo
   - slug: `agriturismo-la-corte-di-anna-bonavigo`
   - indirizzo: Via Pontoncello, 9, 37059 Santa Maria VR
29. **Albergo Le 4 Camere** — Bonavigo
   - slug: `albergo-le-4-camere-bonavigo`
   - indirizzo: Via Vittorio Veneto, 2, 37050 Roverchiara VR
30. **B&B Villa Brenzoni** — Bonavigo
   - slug: `b-b-villa-brenzoni-bonavigo`
   - indirizzo: Via Martiri di Belfiore, 1, 37040 Bonavigo VR
31. **Residence 3 Nidi** — Bonavigo
   - slug: `residence-3-nidi-bonavigo`
   - indirizzo: Via Pavarano, 15, 36045 Lonigo VI
32. **Albergo New Napoleonico** — Bondeno
   - slug: `albergo-new-napoleonico-bondeno`
   - indirizzo: Via Virgiliana, 129, 44012 Bondeno FE
33. **Bed and Breakfast Al Fluviale** — Bondeno
   - slug: `bed-and-breakfast-al-fluviale-bondeno`
   - indirizzo: Via Darsena, 4, 44121 Ferrara FE
34. **Borgo dei sensi** — Bondeno
   - slug: `borgo-dei-sensi-bondeno`
   - indirizzo: Via Ex Dogana, 131, 44041 Casumaro FE
35. **Casa Madonna Boschi** — Bondeno
   - slug: `casa-madonna-boschi-bondeno`
   - indirizzo: Via Madonna Boschi, 14, 44028 Poggio Renatico FE