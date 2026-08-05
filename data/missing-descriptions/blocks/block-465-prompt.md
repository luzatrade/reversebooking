# Blocco 465/500 — 35 strutture senza descrizione IT

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

1. **Albergo Palu'** — Caspoggio
   - slug: `albergo-palu-caspoggio`
   - indirizzo: Via Roma, 22/24, 23023 Chiesa in Valmalenco SO
2. **Albergo Residence Piazzi House** — Caspoggio
   - slug: `albergo-residence-piazzi-house-caspoggio`
   - indirizzo: Via Giuseppe Piazzi, 78, 23100 Sondrio SO
3. **B&B Valmalencoalpina** — Caspoggio
   - slug: `b-b-valmalencoalpina-caspoggio`
   - indirizzo: Via Erminio Dioli, 17, 23020 Caspoggio SO
4. **HOTEL BIANCOSPINO S.R.L.** — Caspoggio
   - slug: `hotel-biancospino-s-r-l-caspoggio`
   - indirizzo: Via Spini, 314, 23020 Lanzada SO
5. **Hotel Chalet Rezia** — Caspoggio
   - slug: `hotel-chalet-rezia-caspoggio`
   - indirizzo: Via Guglielmo Marconi, 27, 23023 Chiesa in Valmalenco SO
6. **Hotel e Ristorante Miramonti** — Caspoggio
   - slug: `hotel-e-ristorante-miramonti-caspoggio`
   - indirizzo: Via Nicolò Rusca, 20, 23023 Chiesa in Valmalenco SO
7. **Hotel Fior di Monte** — Caspoggio
   - slug: `hotel-fior-di-monte-caspoggio`
   - indirizzo: Via Pizzo Scalino, 2, 23020 Caspoggio SO
8. **Hotel La Lanterna** — Caspoggio
   - slug: `hotel-la-lanterna-caspoggio`
   - indirizzo: Via Bernina, 88, 23023 Chiesa In Valmalenco SO
9. **Hotel Mirage** — Caspoggio
   - slug: `hotel-mirage-caspoggio`
   - indirizzo: Via Ronchetti, 331, 23020 Lanzada SO
10. **Hotel Moizi** — Caspoggio
   - slug: `hotel-moizi-caspoggio`
   - indirizzo: Via Moizi, 214, 23020 Lanzada SO
11. **Hotel Schenatti** — Caspoggio
   - slug: `hotel-schenatti-caspoggio`
   - indirizzo: Via Bernina, 7B, 23100 Sondrio SO
12. **Hotel Tremoggia** — Caspoggio
   - slug: `hotel-tremoggia-caspoggio`
   - indirizzo: Via Bernina, 4, 23023 Chiesa In Valmalenco SO
13. **Hotel Vittoria** — Caspoggio
   - slug: `hotel-vittoria-caspoggio`
   - indirizzo: Via Bernina, 1, 23100 Sondrio SO
14. **Ristorante Albergo Colombo** — Caspoggio
   - slug: `ristorante-albergo-colombo-caspoggio`
   - indirizzo: Via Don Bosco, 3, 23020 Caspoggio SO
15. **Agriturismo da Maria** — Cassacco
   - slug: `agriturismo-da-maria-cassacco`
   - indirizzo: Casali Lini, 39, 33034 Fagagna UD
16. **B&B Casa Gamberini** — Cassacco
   - slug: `b-b-casa-gamberini-cassacco`
   - indirizzo: Via Giuseppe Ellero, 14, 33010 Cassacco UD
17. **Cjase Paola** — Cassacco
   - slug: `cjase-paola-cassacco`
   - indirizzo: Via Primo Maggio, 10, 33010 Cassacco UD
18. **.** — Cassago Brianza
   - slug: `struttura-cassago-brianza`
   - indirizzo: Via Manzoni 25, Loc, 23886 Giovenzana LC
19. **B&B A due passi dal mondo** — Cassago Brianza
   - slug: `b-b-a-due-passi-dal-mondo-cassago-brianza`
   - indirizzo: Via A. Canova, 27, 21012 Cassano Magnago VA
20. **B&B Elio's Place** — Cassago Brianza
   - slug: `b-b-elio-s-place-cassago-brianza`
   - indirizzo: Via Giosuè Carducci, 47, 20822 Seveso MB
21. **C - Rooms** — Cassago Brianza
   - slug: `c-rooms-cassago-brianza`
   - indirizzo: Via Giorgio Perlasca, 19, 23894 Cremella LC
22. **C-HOTEL&SPA** — Cassago Brianza
   - slug: `c-hotel-spa-cassago-brianza`
   - indirizzo: Via N. Sauro, 47, 23893 Cassago Brianza LC
23. **Agriturismo Colle degli Ulivi** — Cassano all'Ionio
   - slug: `agriturismo-colle-degli-ulivi-cassano-all-ionio`
   - indirizzo: Contrada Caccianova, 87011 Cassano all'Ionio CS
24. **ALIAjazz hotel** — Cassano all'Ionio
   - slug: `aliajazz-hotel-cassano-all-ionio`
   - indirizzo: Aliajazz - green b&bhotel, Via ietticelli, 55/a, 87012 Castrovillari CS
25. **B&B Il Vicoletto** — Cassano all'Ionio
   - slug: `b-b-il-vicoletto-cassano-all-ionio`
   - indirizzo: Via Pietro Pompilio Rodotà, 87010 Frascineto CS
26. **B&B La Casata del Prof** — Cassano all'Ionio
   - slug: `b-b-la-casata-del-prof-cassano-all-ionio`
   - indirizzo: Corso Giuseppe Garibaldi, 35, 87011 Cassano all'Ionio CS
27. **B&B La Castellana** — Cassano all'Ionio
   - slug: `b-b-la-castellana-cassano-all-ionio`
   - indirizzo: Vicolo II Garibaldi, 87010 Civita CS
28. **B&B La Stazione** — Cassano all'Ionio
   - slug: `b-b-la-stazione-cassano-all-ionio`
   - indirizzo: Piazza XV Agosto, 87011 Sibari CS
29. **B&B Le Terrazze** — Cassano all'Ionio
   - slug: `b-b-le-terrazze-cassano-all-ionio`
   - indirizzo: Via S. Martino, 6, 87010 Civita CS
30. **B&B Oasi del Raganello** — Cassano all'Ionio
   - slug: `b-b-oasi-del-raganello-cassano-all-ionio`
   - indirizzo: Via Discesa, Via del Ponte del Diavolo, 87010 Civita CS
31. **Hotel Club Maregolf** — Cassano all'Ionio
   - slug: `hotel-club-maregolf-cassano-all-ionio`
   - indirizzo: Loc, Via Salicetta, 87011 Sibari CS
32. **Il Belvedere** — Cassano all'Ionio
   - slug: `il-belvedere-cassano-all-ionio`
   - indirizzo: Corso Cavallotti, 27, 87010 Civita CS
33. **Laghi Room Only** — Cassano all'Ionio
   - slug: `laghi-room-only-cassano-all-ionio`
   - indirizzo: Località Laghi di Sibari, Snc, 87011 Cassano all'Ionio CS
34. **Terme Sibarite** — Cassano all'Ionio
   - slug: `terme-sibarite-cassano-all-ionio`
   - indirizzo: Via delle Terme, 2, 87011 Cassano All’Ionio CS
35. **Villaggio Costa Sybaris** — Cassano all'Ionio
   - slug: `villaggio-costa-sybaris-cassano-all-ionio`
   - indirizzo: S.da Statale 106 Jonica, 98, 87011 Cassano all'Ionio CS