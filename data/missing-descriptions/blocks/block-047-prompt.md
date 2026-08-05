# Blocco 47/500 — 35 strutture senza descrizione IT

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

1. **Palazzo Finati** — Alba
   - slug: `palazzo-finati-alba`
   - indirizzo: V. Vernazza, 8, 12051 Alba CN, Italia
2. **Albergo La Pergola** — Alba Adriatica
   - slug: `albergo-la-pergola-alba-adriatica`
   - indirizzo: Via Emilia, 9, 64011 Alba Adriatica TE
3. **B&B La Vela** — Alba Adriatica
   - slug: `b-b-la-vela-alba-adriatica`
   - indirizzo: Via Risorgimento, 29, 64014 Villa Rosa TE
4. **B&B Linae** — Alba Adriatica
   - slug: `b-b-linae-alba-adriatica`
   - indirizzo: Via Puglie, 12, 64011 Alba Adriatica TE
5. **Hotel B&B Fattoria Mare** — Alba Adriatica
   - slug: `hotel-b-b-fattoria-mare-alba-adriatica`
   - indirizzo: Via Malta, 5, 64011 Alba Adriatica TE
6. **Hotel B&B Villa Cesare** — Alba Adriatica
   - slug: `hotel-b-b-villa-cesare-alba-adriatica`
   - indirizzo: Via Giulio Cesare, 5, 64011 Alba Adriatica TE
7. **Hotel Beach** — Alba Adriatica
   - slug: `hotel-beach-alba-adriatica`
   - indirizzo: Via Dante Alighieri, 6, 64018 Tortoreto Lido TE
8. **Hotel Boston** — Alba Adriatica
   - slug: `hotel-boston-alba-adriatica`
   - indirizzo: Lungomare Guglielmo Marconi, 102, 64011 Alba Adriatica TE
9. **Hotel Doge** — Alba Adriatica
   - slug: `hotel-doge-alba-adriatica`
   - indirizzo: Via Guglielmo Marconi 292, Via Toscana, 1, 64011 Alba Adriatica TE
10. **Hotel Esperia** — Alba Adriatica
   - slug: `hotel-esperia-alba-adriatica`
   - indirizzo: Viale Guglielmo Marconi, 120, 64011 Alba Adriatica TE
11. **Hotel Excelsior Alba Adriatica** — Alba Adriatica
   - slug: `hotel-excelsior-alba-adriatica-alba-adriatica`
   - indirizzo: Viale Guglielmo Marconi, 164, 64011 Alba Adriatica TE
12. **Hotel Flora Alba Adriatica** — Alba Adriatica
   - slug: `hotel-flora-alba-adriatica-alba-adriatica`
   - indirizzo: Viale Guglielmo Marconi, 32, 64011 Alba Adriatica TE
13. **Hotel International** — Alba Adriatica
   - slug: `hotel-international-alba-adriatica`
   - indirizzo: Via dei Mille, 1, 64018 Tortoreto Lido TE
14. **Hotel Lido** — Alba Adriatica
   - slug: `hotel-lido-alba-adriatica`
   - indirizzo: Viale Guglielmo Marconi, 200, 64011 Alba Adriatica TE
15. **Hotel Maison Tassoni** — Alba Adriatica
   - slug: `hotel-maison-tassoni-alba-adriatica`
   - indirizzo: Viale Guglielmo Marconi, 28, 64011 Alba Adriatica TE
16. **Hotel Meripol** — Alba Adriatica
   - slug: `hotel-meripol-alba-adriatica`
   - indirizzo: Lungomare, Viale Guglielmo Marconi, 290, 64011 Alba Adriatica TE
17. **Hotel Naxos** — Alba Adriatica
   - slug: `hotel-naxos-alba-adriatica`
   - indirizzo: Via Cesare Battisti, 156, 64011 Alba Adriatica TE
18. **Hotel Petite Fleur - Alba Adriatica - Abruzzo** — Alba Adriatica
   - slug: `hotel-petite-fleur-alba-adriatica-abruzzo-alba-adriatica`
   - indirizzo: Viale Guglielmo Marconi, 78, 64011 Alba Adriatica TE
19. **Medi Garden Resort** — Alba Adriatica
   - slug: `medi-garden-resort-alba-adriatica`
   - indirizzo: Via Firenze, 4, 64011 Alba Adriatica TE
20. **Residence Anchise Mare** — Alba Adriatica
   - slug: `residence-anchise-mare-alba-adriatica`
   - indirizzo: Via Trieste, 35, 64011 Alba Adriatica TE
21. **Residence Hotel Alba Palace** — Alba Adriatica
   - slug: `residence-hotel-alba-palace-alba-adriatica`
   - indirizzo: Via Molise, 3, 64011 Alba Adriatica TE
22. **Agriturismo Andala** — Albagiara
   - slug: `agriturismo-andala-albagiara`
   - indirizzo: Via Petrella, 43, 09086 Samugheo OR
23. **Agriturismo Su Livariu di Teresa Casu** — Albagiara
   - slug: `agriturismo-su-livariu-di-teresa-casu-albagiara`
   - indirizzo: Via S. Pietro, 09070 Siamaggiore OR
24. **Agriturismo Su Massaiu** — Albagiara
   - slug: `agriturismo-su-massaiu-albagiara`
   - indirizzo: SP 46, Km 12/300, 09020 Turri VS
25. **Agriturismo Su Sattisceddu** — Albagiara
   - slug: `agriturismo-su-sattisceddu-albagiara`
   - indirizzo: SP47, 09099 Uras OR
26. **B&B Aquas** — Albagiara
   - slug: `b-b-aquas-albagiara`
   - indirizzo: Via Giosuè Carducci, 25, 09030 Sardara VS
27. **B&B Casa Olla** — Albagiara
   - slug: `b-b-casa-olla-albagiara`
   - indirizzo: Via Liguria, 9, 09030 Sardara VS
28. **B&B da Antonella** — Albagiara
   - slug: `b-b-da-antonella-albagiara`
   - indirizzo: Via della Pace, 5, 09086 Samugheo OR
29. **B&B da Marianna** — Albagiara
   - slug: `b-b-da-marianna-albagiara`
   - indirizzo: Via Vittorio Alfieri, 7, 09086 Samugheo OR
30. **B&B Daddanca** — Albagiara
   - slug: `b-b-daddanca-albagiara`
   - indirizzo: Via Funtana Bella, 14, 09091 Ales OR
31. **B&B il Giardino da Pina** — Albagiara
   - slug: `b-b-il-giardino-da-pina-albagiara`
   - indirizzo: Via A. Moro, 7, 09029 Tuili VS
32. **B&B La Vecchia Dimora** — Albagiara
   - slug: `b-b-la-vecchia-dimora-albagiara`
   - indirizzo: Via Piave, 2, 09094 Marrubiu OR
33. **B&B S'Omu Antiga** — Albagiara
   - slug: `b-b-s-omu-antiga-albagiara`
   - indirizzo: Via Conte Toufani, 1, 09080 Nureci OR
34. **B&B Villa Martina** — Albagiara
   - slug: `b-b-villa-martina-albagiara`
   - indirizzo: Via Regina Margherita, 44, 09030 Sardara VS
35. **Corona Bed & Breakfast** — Albagiara
   - slug: `corona-bed-breakfast-albagiara`
   - indirizzo: Via Puglia, 12, 09030 Sardara VS