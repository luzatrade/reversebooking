# Blocco 239/500 — 35 strutture senza descrizione IT

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

1. **Hotel Is Benas Country Lodge** — Bauladu
   - slug: `hotel-is-benas-country-lodge-bauladu`
   - indirizzo: Loc. Benetudi, Strada Mare, Ex Strada Provinciale, 10, 09070 Putzu Idu OR
2. **B&B Dommu Agostina** — Baunei
   - slug: `b-b-dommu-agostina-baunei`
   - indirizzo: Via SS. Martiri, 19, 08040 Baunei OG
3. **B&B Issicoro** — Baunei
   - slug: `b-b-issicoro-baunei`
   - indirizzo: Via Bitzicoro, 30, 08040 Baunei OG
4. **B&B Selvaggio Blu** — Baunei
   - slug: `b-b-selvaggio-blu-baunei`
   - indirizzo: Via Galileo Galilei, 23, 08040 Baunei OG
5. **bedandclimbing** — Baunei
   - slug: `bedandclimbing-baunei`
   - indirizzo: Via Giuseppe Garibaldi, 08040 Baunei OG
6. **Drommire In Plassa E Clesia** — Baunei
   - slug: `drommire-in-plassa-e-clesia-baunei`
   - indirizzo: Piazza Indipendenza, 1, 08040 Baunei OG
7. **Elune B&B** — Baunei
   - slug: `elune-b-b-baunei`
   - indirizzo: Via Roma, 52, 08040 Baunei OG
8. **Giaminera Rooms & Art Studio** — Baunei
   - slug: `giaminera-rooms-art-studio-baunei`
   - indirizzo: Via S. Pietro, 12, 08040 Baunei OG
9. **Goloritzè Room and Breakfast** — Baunei
   - slug: `goloritze-room-and-breakfast-baunei`
   - indirizzo: Via Orientale Sarda, 133, 08040 Baunei OG
10. **Hotel Agugliastra** — Baunei
   - slug: `hotel-agugliastra-baunei`
   - indirizzo: Piazza Principessa di Navarra, 27, 08040 Santa Maria Navarrese OG
11. **Hotel Bia Maore** — Baunei
   - slug: `hotel-bia-maore-baunei`
   - indirizzo: Via S. Pietro, 19, 08040 Baunei OG
12. **Hotel Goloritzè** — Baunei
   - slug: `hotel-goloritze-baunei`
   - indirizzo: Via Dante Alighieri, 7, 08040 Baunei OG
13. **Hotel Nicoletta** — Baunei
   - slug: `hotel-nicoletta-baunei`
   - indirizzo: Via Lungomare, 08040 Santa Maria Navarrese OG
14. **Hotel Plammas** — Baunei
   - slug: `hotel-plammas-baunei`
   - indirizzo: Viale Plammas, 59, 08040 Santa Maria Navarrese OG
15. **Hotel Santa Maria** — Baunei
   - slug: `hotel-santa-maria-baunei`
   - indirizzo: Viale Plammas, 30, 08040 Santa Maria Navarrese OG
16. **Lanthia Resort** — Baunei
   - slug: `lanthia-resort-baunei`
   - indirizzo: Via Lungomare, 08040 Santa Maria Navarrese OG
17. **Monte Forru Bedrooms** — Baunei
   - slug: `monte-forru-bedrooms-baunei`
   - indirizzo: Via Canonico Sanna, 14, 08040 Baunei OG
18. **Sa Domm'e Galleria** — Baunei
   - slug: `sa-domm-e-galleria-baunei`
   - indirizzo: 08040 Baunei OG
19. **Steddueoro** — Baunei
   - slug: `steddueoro-baunei`
   - indirizzo: Via Mentana, 44, 08040 Baunei OG
20. **Tarsis Guest House** — Baunei
   - slug: `tarsis-guest-house-baunei`
   - indirizzo: Via della Pineta, 1, 08040 Baunei OG
21. **Via Roma Charming Rooms** — Baunei
   - slug: `via-roma-charming-rooms-baunei`
   - indirizzo: Via Roma, 91, 08040 Baunei OG
22. **B&B Ori Villa Oriana** — Baveno
   - slug: `b-b-ori-villa-oriana-baveno`
   - indirizzo: Via Due Riviere, 83, 28831 Baveno VB
23. **Grand Hotel Bristol** — Baveno
   - slug: `grand-hotel-bristol-baveno`
   - indirizzo: Corso Umberto I, 73, 28838 Stresa VB
24. **Hotel Al Campanile - Baveno** — Baveno
   - slug: `hotel-al-campanile-baveno-baveno`
   - indirizzo: Via Antonio Gramsci, 3, 28831 Baveno VB
25. **Hotel Alpi** — Baveno
   - slug: `hotel-alpi-baveno`
   - indirizzo: Via Oltrefiume, 1, 28831 Baveno VB
26. **Hotel Della Torre** — Baveno
   - slug: `hotel-della-torre-baveno`
   - indirizzo: Via Sempione Nord, 45, 28838 Stresa VB
27. **Hotel Flora** — Baveno
   - slug: `hotel-flora-baveno`
   - indirizzo: Via Sempione Nord, 30, 28838 Stresa VB
28. **Hotel La Fontana** — Baveno
   - slug: `hotel-la-fontana-baveno`
   - indirizzo: Via Sempione Nord, 1, 28838 Stresa VB
29. **Hotel La Palma** — Baveno
   - slug: `hotel-la-palma-baveno`
   - indirizzo: Corso Umberto I, 33, 28838 Stresa VB
30. **Hotel Rigoli** — Baveno
   - slug: `hotel-rigoli-baveno`
   - indirizzo: Via Piave, 48, 28831 Baveno VB
31. **Hotel Royal Stresa** — Baveno
   - slug: `hotel-royal-stresa-baveno`
   - indirizzo: Viale Lido, 1, 28838 Stresa VB
32. **Hotel Villa Orchidea** — Baveno
   - slug: `hotel-villa-orchidea-baveno`
   - indirizzo: Via Mottarone, 7, 28838 Levo VB
33. **Hotiday Room Collection - Stresa** — Baveno
   - slug: `hotiday-room-collection-stresa-baveno`
   - indirizzo: Via Sempione Nord, 45, 28838 Stresa VB
34. **Locanda Nelia** — Baveno
   - slug: `locanda-nelia-baveno`
   - indirizzo: Via XXV Aprile Angolo di, Piazza Dante Alighieri, 16, 28831 Baveno VB
35. **Regina Palace Hotel** — Baveno
   - slug: `regina-palace-hotel-baveno`
   - indirizzo: Corso Umberto I, 29, 28838 Stresa VB