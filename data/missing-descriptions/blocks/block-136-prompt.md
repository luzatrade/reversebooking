# Blocco 136/500 — 35 strutture senza descrizione IT

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

1. **Country Hotel Castelbarco** — Arcene
   - slug: `country-hotel-castelbarco-arcene`
   - indirizzo: Via Concesa, 20069 Vaprio d'Adda MI
2. **Hotel Albi** — Arcene
   - slug: `hotel-albi-arcene`
   - indirizzo: Via Conte Pino Zanchi, 2, 24040 Stezzano BG
3. **Hotel del Brembo** — Arcene
   - slug: `hotel-del-brembo-arcene`
   - indirizzo: Stada Provinciale 184 Snc, SP184, Snc, 24046 Osio Sotto BG
4. **Hotel Eden** — Arcene
   - slug: `hotel-eden-arcene`
   - indirizzo: Via Milano, 16, 24046 Osio Sotto BG
5. **Hotel Ristorante Continental** — Arcene
   - slug: `hotel-ristorante-continental-arcene`
   - indirizzo: Via Milano, 1, 24046 Osio Sotto BG
6. **Il cortile da Tania** — Arcene
   - slug: `il-cortile-da-tania-arcene`
   - indirizzo: Via Libertà, 87, 24050 Zanica BG
7. **La Braseria** — Arcene
   - slug: `la-braseria-arcene`
   - indirizzo: Via Risorgimento, 17, 24046 Osio Sotto BG
8. **Palace Hotel** — Arcene
   - slug: `palace-hotel-arcene`
   - indirizzo: Corso Europa, 2, 24040 Verdellino BG
9. **Ristorante Albergo Papa** — Arcene
   - slug: `ristorante-albergo-papa-arcene`
   - indirizzo: Corso Vittorio Veneto, 57, 24046 Osio Sotto BG
10. **San Giorgio** — Arcene
   - slug: `san-giorgio-arcene`
   - indirizzo: Piazza Caduti della Libertà, 1, 24040 Boltiere BG
11. **Spa Hotel Parigi 2** — Arcene
   - slug: `spa-hotel-parigi-2-arcene`
   - indirizzo: Via Ruggero Leoncavallo, 5, 24044 Dalmine BG
12. **Villa Fenix Osio Sotto** — Arcene
   - slug: `villa-fenix-osio-sotto-arcene`
   - indirizzo: Via Michelangelo Buonarroti, 16, 24046 Rio Isolo BG
13. **Agriturismo Acquasalata** — Arcevia
   - slug: `agriturismo-acquasalata-arcevia`
   - indirizzo: Frazione Montale, 116, 60011 Arcevia AN
14. **Agriturismo Borgo Belfiore** — Arcevia
   - slug: `agriturismo-borgo-belfiore-arcevia`
   - indirizzo: Via Santo Apollinare, 70, 60011 Arcevia AN
15. **Agriturismo Bosimano** — Arcevia
   - slug: `agriturismo-bosimano-arcevia`
   - indirizzo: Via Prosano, 60, 60011 Arcevia AN
16. **Agriturismo il Boschetto** — Arcevia
   - slug: `agriturismo-il-boschetto-arcevia`
   - indirizzo: Sp 360 km 33, 200, 60011 Arcevia AN
17. **Agriturismo la Cantina di Bacco** — Arcevia
   - slug: `agriturismo-la-cantina-di-bacco-arcevia`
   - indirizzo: Frazione Ripalta, 90, 60011 Arcevia AN
18. **Agriturismo Le Betulle** — Arcevia
   - slug: `agriturismo-le-betulle-arcevia`
   - indirizzo: Frazione Avacelli, 260, 60011 Arcevia AN
19. **B&B Brunamonti** — Arcevia
   - slug: `b-b-brunamonti-arcevia`
   - indirizzo: Via F. Brunamonti, 49, 60011 Arcevia AN
20. **b&b da Alberto** — Arcevia
   - slug: `b-b-da-alberto-arcevia`
   - indirizzo: Frazione S. Giovanni Battista, 110, 60011 Arcevia AN
21. **B&B IN VINO VERITAS** — Arcevia
   - slug: `b-b-in-vino-veritas-arcevia`
   - indirizzo: Fraz, Frazione Prosano, 31, 60011 Arcevia AN
22. **Il Leccio** — Arcevia
   - slug: `il-leccio-arcevia`
   - indirizzo: Località Colleaprico, 16, 60011 Arcevia AN
23. **La casa di Odessa** — Arcevia
   - slug: `la-casa-di-odessa-arcevia`
   - indirizzo: Frazione Montale, 66, 60011 Arcevia AN
24. **La Cerqua Agriturismo - Arcevia** — Arcevia
   - slug: `la-cerqua-agriturismo-arcevia-arcevia`
   - indirizzo: Frazione S. Stefano, 50/A, 60011 Arcevia AN
25. **Le Cune Country House and Farm** — Arcevia
   - slug: `le-cune-country-house-and-farm-arcevia`
   - indirizzo: Via Palazzo, 260, 60011 Arcevia AN
26. **Park Hotel** — Arcevia
   - slug: `park-hotel-arcevia`
   - indirizzo: Via Roma, 5, 60011 Arcevia AN
27. **Riserva Privata San Settimio** — Arcevia
   - slug: `riserva-privata-san-settimio-arcevia`
   - indirizzo: Frazione Palazzo, 274, 60011 Arcevia AN
28. **Ristorante Pizzeria Agriturismo Piccolo Ranch** — Arcevia
   - slug: `ristorante-pizzeria-agriturismo-piccolo-ranch-arcevia`
   - indirizzo: Frazione S. Pietro, 48, 60011 Arcevia AN
29. **Rocca Contrada** — Arcevia
   - slug: `rocca-contrada-arcevia`
   - indirizzo: Piazza Giuseppe Garibaldi, 11, 60011 Arcevia AN
30. **Sogno diVino B&B** — Arcevia
   - slug: `sogno-divino-b-b-arcevia`
   - indirizzo: Frazione Montale, 190, 60011 Montale AN
31. **VisitArcevia** — Arcevia
   - slug: `visitarcevia-arcevia`
   - indirizzo: Corso Giuseppe Mazzini, 57, 60011 Arcevia AN
32. **B&B La Nuova Stella** — Archi
   - slug: `b-b-la-nuova-stella-archi`
   - indirizzo: Via Quadroni, 160, 66040 Perano CH
33. **Casa Vistaverde · B&B** — Archi
   - slug: `casa-vistaverde-b-b-archi`
   - indirizzo: Contrada Rascitti, 66044 Archi CH
34. **Hotel Ristorante Al Duca** — Archi
   - slug: `hotel-ristorante-al-duca-archi`
   - indirizzo: Viale Duca degli Abruzzi, 26, 66041 Atessa CH
35. **Hotel Ristorante L'anfora** — Archi
   - slug: `hotel-ristorante-l-anfora-archi`
   - indirizzo: Via Monte Marcone, 40, 66041 Atessa CH