# Blocco 245/500 — 35 strutture senza descrizione IT

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

1. **Hotel Ristorante Lago Maggiore** — Belgirate
   - slug: `hotel-ristorante-lago-maggiore-belgirate`
   - indirizzo: Viale Vittorio Veneto, 27, 28040 Lesa NO
2. **Le Orchidee del Lago Maggiore - La Ghirlandina B&B** — Belgirate
   - slug: `le-orchidee-del-lago-maggiore-la-ghirlandina-b-b-belgirate`
   - indirizzo: Via per Magognino, 21, 28832 Belgirate VB
3. **Relais Casali della Cisterna** — Belgirate
   - slug: `relais-casali-della-cisterna-belgirate`
   - indirizzo: Str. Vecchia alle Sale, 6, 28832 Belgirate VB
4. **Agriturismo Zarita** — Bella
   - slug: `agriturismo-zarita-bella`
   - indirizzo: 85051 Bella PZ
5. **B&B il Querceto** — Bella
   - slug: `b-b-il-querceto-bella`
   - indirizzo: Via Fontanile, 85054 Muro Lucano PZ
6. **B&B LA LOCANDA** — Bella
   - slug: `b-b-la-locanda-bella`
   - indirizzo: Via Barricate, 85051 Bella PZ
7. **Bed & Breakfast Bella Basilicata** — Bella
   - slug: `bed-breakfast-bella-basilicata-bella`
   - indirizzo: Corso Italia 6 QG6R+P7, 85051 Bella PZ
8. **Hotel delle Colline** — Bella
   - slug: `hotel-delle-colline-bella`
   - indirizzo: Via Belvedere, snc, 85054 Muro Lucano PZ
9. **Locanda al Giglio d' Oro** — Bella
   - slug: `locanda-al-giglio-d-oro-bella`
   - indirizzo: Contrada Serra S. Andrea, 2, 85020 Ruvo del Monte PZ
10. **Nonna Felicia B&B** — Bella
   - slug: `nonna-felicia-b-b-bella`
   - indirizzo: Vico I, Via Contigua Raia, 25, 85054 Muro Lucano PZ
11. **Terrazza sul Cielo** — Bella
   - slug: `terrazza-sul-cielo-bella`
   - indirizzo: Via Mattinella, 9, 85051 Bella PZ
12. **Agriturismo Il Colle Bellagio** — Bellagio
   - slug: `agriturismo-il-colle-bellagio-bellagio`
   - indirizzo: Viale Domenico Vitali, 44, 22021 Bellagio CO
13. **Agriturismo La Derta** — Bellagio
   - slug: `agriturismo-la-derta-bellagio`
   - indirizzo: Via Teresa Ciceri, 15, 22021 Bellagio CO
14. **Alla Torretta** — Bellagio
   - slug: `alla-torretta-bellagio`
   - indirizzo: Via Nuova, 3, 22021 Bellagio CO
15. **Andirivieni Bellagio Guest House** — Bellagio
   - slug: `andirivieni-bellagio-guest-house-bellagio`
   - indirizzo: Piazza Pietro Redaelli, 3, 22021 Bellagio CO
16. **Aqua&co** — Bellagio
   - slug: `aqua-co-bellagio`
   - indirizzo: V. Privata Cava, 3, 22021 Bellagio CO
17. **B&B Selve di Rògaro** — Bellagio
   - slug: `b-b-selve-di-rogaro-bellagio`
   - indirizzo: Via IV Novembre, 4, 22010 Tremezzo CO
18. **B&B Villa la Rosa** — Bellagio
   - slug: `b-b-villa-la-rosa-bellagio`
   - indirizzo: Via dei Pini, 26, 22021 Bellagio CO
19. **Bellagio Bed and Breakfast** — Bellagio
   - slug: `bellagio-bed-and-breakfast-bellagio`
   - indirizzo: Via Paolo Carcano, 79, 22021 Bellagio CO
20. **Casa Lumaca B&B di Charme** — Bellagio
   - slug: `casa-lumaca-b-b-di-charme-bellagio`
   - indirizzo: Via Tommaso Grossi, 3, 22019 Tremezzina CO
21. **Charming Bellagio Boutique Hotel** — Bellagio
   - slug: `charming-bellagio-boutique-hotel-bellagio`
   - indirizzo: Via Crotto Pescallo, 2, 22021 Bellagio CO
22. **Domus Bellagio** — Bellagio
   - slug: `domus-bellagio-bellagio`
   - indirizzo: Via Parrocchiale, 11, 22021 Bellagio CO
23. **Hotel Bellagio** — Bellagio
   - slug: `hotel-bellagio-bellagio`
   - indirizzo: Salita Grandi, 6, 22021 Bellagio CO
24. **Hotel Ristorante Suisse Bellagio** — Bellagio
   - slug: `hotel-ristorante-suisse-bellagio-bellagio`
   - indirizzo: P.za Giuseppe Mazzini, 8/10, 22021 Bellagio CO
25. **Locanda Barchetta - Room Rental** — Bellagio
   - slug: `locanda-barchetta-room-rental-bellagio`
   - indirizzo: Via Centrale, 13, 22021 Bellagio CO
26. **Locanda della Maria** — Bellagio
   - slug: `locanda-della-maria-bellagio`
   - indirizzo: Via Lodovico Loreti, 5, 22021 Bellagio CO
27. **Luxury Lodges** — Bellagio
   - slug: `luxury-lodges-bellagio`
   - indirizzo: V. Valassina, 170/C, 22021 Bellagio CO
28. **Miralago B&B and Apartments** — Bellagio
   - slug: `miralago-b-b-and-apartments-bellagio`
   - indirizzo: Via Pescallo, 19, 22021 Bellagio CO
29. **Residence la Limonera** — Bellagio
   - slug: `residence-la-limonera-bellagio`
   - indirizzo: Via C. Bellosio, 2, 22021 Bellagio CO
30. **The Iconic Lodge** — Bellagio
   - slug: `the-iconic-lodge-bellagio`
   - indirizzo: V. Valassina, 183, 22021 Bellagio CO
31. **Albergo Ristorante All'Orrido** — Bellano
   - slug: `albergo-ristorante-all-orrido-bellano`
   - indirizzo: Via XX Settembre, 19, 23822 Bellano LC
32. **Albergo Ristorante Pizzeria del Sole** — Bellano
   - slug: `albergo-ristorante-pizzeria-del-sole-bellano`
   - indirizzo: P.za S. Giorgio, 17, 23829 Varenna LC
33. **B&B Il Vicolo agli Orti** — Bellano
   - slug: `b-b-il-vicolo-agli-orti-bellano`
   - indirizzo: Via Agli Orti, 1, 23822 Bellano LC
34. **B&B Maison Blanche** — Bellano
   - slug: `b-b-maison-blanche-bellano`
   - indirizzo: Via P. Badoglio, 9, 23824 Dervio LC
35. **Bed and Breakfast del Viandante** — Bellano
   - slug: `bed-and-breakfast-del-viandante-bellano`
   - indirizzo: Frazione Lezzeno, 19, 23822 Bellano LC