# Blocco 296/500 — 35 strutture senza descrizione IT

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

1. **Hotel Villa Danci** — Borghetto Santo Spirito
   - slug: `hotel-villa-danci-borghetto-santo-spirito`
   - indirizzo: Via IV Novembre, 1r, 17020 Borghetto Santo Spirito SV
2. **L'11 affittacamere** — Borghetto Santo Spirito
   - slug: `l-11-affittacamere-borghetto-santo-spirito`
   - indirizzo: Via Madonna degli Angeli, 17, 17020 Borghetto Santo Spirito SV
3. **MILAeNAN B&B** — Borghetto Santo Spirito
   - slug: `milaenan-b-b-borghetto-santo-spirito`
   - indirizzo: Via . Petrarca, 2A, 17020 Borghetto Santo Spirito SV
4. **Residenza degli Aranci** — Borghetto Santo Spirito
   - slug: `residenza-degli-aranci-borghetto-santo-spirito`
   - indirizzo: Via Cremona, 10, 17025 Loano SV
5. **B&B Concaverde** — Borghi
   - slug: `b-b-concaverde-borghi`
   - indirizzo: Via Canfurlo, 6, 47030 Borghi FC
6. **B&B Svegliarsi nei Borghi** — Borghi
   - slug: `b-b-svegliarsi-nei-borghi-borghi`
   - indirizzo: Via M. Iamele, 12, 71029 Troia FG
7. **Palazzo Gessi - Room & Breakfast** — Borghi
   - slug: `palazzo-gessi-room-breakfast-borghi`
   - indirizzo: Via G. Brodolini, 33, 47030 Tribola FC
8. **Ristorante Agriturismo Il Gallo Nero** — Borghi
   - slug: `ristorante-agriturismo-il-gallo-nero-borghi`
   - indirizzo: Via Buondi, 47030 Borghi FC
9. **Aura Club - Porto Rhoca** — Borgia
   - slug: `aura-club-porto-rhoca-borgia`
   - indirizzo: 88069 Villaggio Gebiola Porto Rhoca CZ
10. **BORGO SANTA ROSA** — Borgia
   - slug: `borgo-santa-rosa-borgia`
   - indirizzo: STRADA PROVINCIALE 46 CDA PROFETA, 88050 Caraffa di Catanzaro CZ
11. **Grand Hotel Paradiso** — Borgia
   - slug: `grand-hotel-paradiso-borgia`
   - indirizzo: Viale Europa, 2, 88100 Catanzaro CZ
12. **Hotel Cala Longa** — Borgia
   - slug: `hotel-cala-longa-borgia`
   - indirizzo: Via dei Marinai, 2, 88060 Montauro CZ
13. **Hotel La Giara** — Borgia
   - slug: `hotel-la-giara-borgia`
   - indirizzo: Via Marina di Pietragrande, 1, 88060 Loc. Pietragrande, CZ
14. **Hotel Palace** — Borgia
   - slug: `hotel-palace-borgia`
   - indirizzo: Via Lungomare Stefano Pugliese, 221, 88063 Catanzaro CZ
15. **Hotel Torre Del Duca (Nuova Gestione)** — Borgia
   - slug: `hotel-torre-del-duca-nuova-gestione-borgia`
   - indirizzo: Viale della Legalità, 52, 88021 San Floro CZ
16. **Antica Dimora del Portico B&B** — Borgiallo
   - slug: `antica-dimora-del-portico-b-b-borgiallo`
   - indirizzo: Via A. e G. Trucano, 7, 10080 Borgiallo TO
17. **Hotel Astoria** — Borgiallo
   - slug: `hotel-astoria-borgiallo`
   - indirizzo: Don, Via Don Giovanni Minzoni, 5, 10082 Cuorgnè TO
18. **Le Moie** — Borgiallo
   - slug: `le-moie-borgiallo`
   - indirizzo: Via Belvedere, 18, 10080 Borgiallo TO
19. **A Carubba du bungiurnu** — Borgio Verezzi
   - slug: `a-carubba-du-bungiurnu-borgio-verezzi`
   - indirizzo: Via Acquedotto, 3, 17022 Borgio Verezzi SV
20. **Albergo Rivamare** — Borgio Verezzi
   - slug: `albergo-rivamare-borgio-verezzi`
   - indirizzo: SS 1, 27, 17022 Borgio SV
21. **Antico Pozzo Bistrot** — Borgio Verezzi
   - slug: `antico-pozzo-bistrot-borgio-verezzi`
   - indirizzo: Piazza S. Biagio, 8, 17024 Finale Ligure SV
22. **Borgo degli Ulivi Resort** — Borgio Verezzi
   - slug: `borgo-degli-ulivi-resort-borgio-verezzi`
   - indirizzo: Via Soccorso, 45, 17027 Pietra Ligure SV
23. **Calcagno** — Borgio Verezzi
   - slug: `calcagno-borgio-verezzi`
   - indirizzo: Via Vittorio Veneto, 50, 17022 Borgio SV
24. **Casa Valdese Pietra Ligure - IT009049A1DEJKUTXD** — Borgio Verezzi
   - slug: `casa-valdese-pietra-ligure-it009049a1dejkutxd-borgio-verezzi`
   - indirizzo: Lungomare Falcone Borsellino, 24, 17027 Pietra Ligure SV
25. **Giardinidivale** — Borgio Verezzi
   - slug: `giardinidivale-borgio-verezzi`
   - indirizzo: piazza del commercio, 1, 17022 Borgio Verezzi SV
26. **Hotel Bacco** — Borgio Verezzi
   - slug: `hotel-bacco-borgio-verezzi`
   - indirizzo: Corso Italia, 153, 17027 Pietra Ligure SV
27. **Hotel Principe** — Borgio Verezzi
   - slug: `hotel-principe-borgio-verezzi`
   - indirizzo: 574V+5XP, Viale della Repubblica, 74/bis, 17027 Pietra Ligure SV
28. **Hotel Villa delle Rose** — Borgio Verezzi
   - slug: `hotel-villa-delle-rose-borgio-verezzi`
   - indirizzo: Via Nazario Sauro, 1, 17022 Borgio SV
29. **Hotel Villa Marina** — Borgio Verezzi
   - slug: `hotel-villa-marina-borgio-verezzi`
   - indirizzo: Corso Italia, 221, 17027 Pietra Ligure SV
30. **Ideal** — Borgio Verezzi
   - slug: `ideal-borgio-verezzi`
   - indirizzo: Via XXV Aprile, 32, 17022 Borgio SV
31. **Il Sogno di Jo** — Borgio Verezzi
   - slug: `il-sogno-di-jo-borgio-verezzi`
   - indirizzo: Via XXV Aprile, 30, 17022 Borgio Verezzi SV
32. **La Canonica - Svegliarsi a Verezzi** — Borgio Verezzi
   - slug: `la-canonica-svegliarsi-a-verezzi-borgio-verezzi`
   - indirizzo: Via alla Chiesa, 90, 17022 Borgio SV
33. **Locanda del Bergallo** — Borgio Verezzi
   - slug: `locanda-del-bergallo-borgio-verezzi`
   - indirizzo: Via Roma, 17/a, 17022 Borgio SV
34. **Terrazza Felice Room & Breakfast** — Borgio Verezzi
   - slug: `terrazza-felice-room-breakfast-borgio-verezzi`
   - indirizzo: Via Nazario Sauro, 148, 17022 Borgio Verezzi SV
35. **Villa Ada** — Borgio Verezzi
   - slug: `villa-ada-borgio-verezzi`
   - indirizzo: Via Vittorio Veneto, 4, 17022 Borgio SV