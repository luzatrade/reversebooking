# Blocco 211/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Alba** — Baone
   - slug: `agriturismo-alba-baone`
   - indirizzo: Via Madonnetta delle Ave, 14, 35030 Baone PD
2. **B&B Ai Filari** — Baone
   - slug: `b-b-ai-filari-baone`
   - indirizzo: Via Tavole, 7, 35030 Baone PD
3. **Bed & Breakfast Al Ponticello** — Baone
   - slug: `bed-breakfast-al-ponticello-baone`
   - indirizzo: Via Meggiaro, 19, 35042 Este PD
4. **Ca' Orologio** — Baone
   - slug: `ca-orologio-baone`
   - indirizzo: Via Ca' Orologio, 7A, 35030 Baone PD
5. **Hotel Beatrice** — Baone
   - slug: `hotel-beatrice-baone`
   - indirizzo: Viale Rimembranze, 1, 35042 Este PD
6. **Tenuta Borgato Morelli** — Baone
   - slug: `tenuta-borgato-morelli-baone`
   - indirizzo: Via Bovolare, 8, 35042 Este PD
7. **"Il borgo dell'Arcangelo"** — Baradili
   - slug: `il-borgo-dell-arcangelo-baradili`
   - indirizzo: Via Amsicora, 10, 09029 Tuili VS
8. **Albergo Diffuso Il Mandorlo** — Baradili
   - slug: `albergo-diffuso-il-mandorlo-baradili`
   - indirizzo: Via Is Tellaias, 13, 09090 Baressa OR
9. **Dimora B&B** — Baradili
   - slug: `dimora-b-b-baradili`
   - indirizzo: P.za C. Battisti, 29, 09037 San Gavino Monreale VS
10. **B&B Le Stagioni** — Baragiano
   - slug: `b-b-le-stagioni-baragiano`
   - indirizzo: Via Ettore Ciccotti, 5, 85100 Potenza PZ
11. **B&B Rifugio della luna** — Baragiano
   - slug: `b-b-rifugio-della-luna-baragiano`
   - indirizzo: Contrada Santa Lucia, 15, 85050 Satriano di Lucania PZ
12. **Alla Contrada degli Asinelli** — Baranello
   - slug: `alla-contrada-degli-asinelli-baranello`
   - indirizzo: Contrada Costa Casale 16, 86020 Colle d'Anchise CB
13. **Antica Dimora La Terrazza** — Baranello
   - slug: `antica-dimora-la-terrazza-baranello`
   - indirizzo: Via Guglielmo Marconi, 133, 86100 Campobasso CB
14. **B&B ArtStudio6 Dimora Artistica Campobasso** — Baranello
   - slug: `b-b-artstudio6-dimora-artistica-campobasso-baranello`
   - indirizzo: Piazza Vittorio Emanuele II, 2, 86100 Campobasso CB
15. **B&B da nonna Vincenza** — Baranello
   - slug: `b-b-da-nonna-vincenza-baranello`
   - indirizzo: Contrada Cannete 07, 86019 Vinchiaturo CB
16. **B&B Dimora Spina** — Baranello
   - slug: `b-b-dimora-spina-baranello`
   - indirizzo: Via Leonardo Da Vinci, 34, 86010 Nuova Comunità CB
17. **B&B Flora Rooms** — Baranello
   - slug: `b-b-flora-rooms-baranello`
   - indirizzo: Corso Vittorio Emanuele II, 11, 86199 Campobasso CB
18. **B&B Il tramonte** — Baranello
   - slug: `b-b-il-tramonte-baranello`
   - indirizzo: Contrada Monteverde, 60, 86019 Monteverde CB
19. **B&B Novantatrè** — Baranello
   - slug: `b-b-novantatre-baranello`
   - indirizzo: Via Giuseppe Garibaldi, 93, 86100 Campobasso CB
20. **B&S** — Baranello
   - slug: `b-s-baranello`
   - indirizzo: Contrada Monteverde, 3, 86019 Vinchiaturo CB
21. **Casa degli Orefici** — Baranello
   - slug: `casa-degli-orefici-baranello`
   - indirizzo: Strada Orefici, 5/Primo Piano, 86100 Campobasso CB
22. **Casetta Margret** — Baranello
   - slug: `casetta-margret-baranello`
   - indirizzo: Tratturo Contrada, Via Porcareccia, 15, 86020 Bojano CB
23. **donguglielmo** — Baranello
   - slug: `donguglielmo-baranello`
   - indirizzo: Strada Comunale Rione S. Vito, 15, 86100 Campobasso CB
24. **ILBE bed & breakfast** — Baranello
   - slug: `ilbe-bed-breakfast-baranello`
   - indirizzo: Via Luigi D'Amato, 13h, 86100 Campobasso CB
25. **La Fonte B&B** — Baranello
   - slug: `la-fonte-b-b-baranello`
   - indirizzo: Contrada Terranova, 25, 86011 Baranello CB
26. **La Piana dei Mulini** — Baranello
   - slug: `la-piana-dei-mulini-baranello`
   - indirizzo: Strada Statale 647 Fondo Valle del Biferno, km 7, 86020 Colle d'Anchise CB
27. **Le Cupolette** — Baranello
   - slug: `le-cupolette-baranello`
   - indirizzo: 86019 Zona Industriale Campobasso-Bojano CB, Italia
28. **Le tre cime** — Baranello
   - slug: `le-tre-cime-baranello`
   - indirizzo: SP49, 37-39, 86011, 86011 Largo Zullo-Sterparo CB
29. **Residenza Sant'Andrea** — Baranello
   - slug: `residenza-sant-andrea-baranello`
   - indirizzo: Vico II Sant'Andrea, 7, 86100 Campobasso CB
30. **Tenuta Dafne** — Baranello
   - slug: `tenuta-dafne-baranello`
   - indirizzo: 86019 Aia Vecchia CB
31. **Tenuta San Nicola** — Baranello
   - slug: `tenuta-san-nicola-baranello`
   - indirizzo: Via Sant'Antonio Abate, 264, 86100 Campobasso CB
32. **Albergo Villa Giusto** — Barano d'Ischia
   - slug: `albergo-villa-giusto-barano-d-ischia`
   - indirizzo: Via Maronti, 11, 80072 Barano d'Ischia NA
33. **Hotel Angelino** — Barano d'Ischia
   - slug: `hotel-angelino-barano-d-ischia`
   - indirizzo: Via Maronti, 69, 80072 Barano d'Ischia NA
34. **Hotel Internazionale Ischia** — Barano d'Ischia
   - slug: `hotel-internazionale-ischia-barano-d-ischia`
   - indirizzo: Via Acquedotto, 33, 80072 Barano dʼIschia NA
35. **Hotel Ischia** — Barano d'Ischia
   - slug: `hotel-ischia-barano-d-ischia`
   - indirizzo: Via Cavaliere Leonardo Impagliazzo, 389, 80075 Forio NA