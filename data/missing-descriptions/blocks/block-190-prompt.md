# Blocco 190/500 — 35 strutture senza descrizione IT

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

1. **Albergo Graziella Arma di Taggia** — Badalucco
   - slug: `albergo-graziella-arma-di-taggia-badalucco`
   - indirizzo: Via Lido, 3, 18018 Arma di Taggia IM
2. **Albergo Lucciola Riviera dei Fiori** — Badalucco
   - slug: `albergo-lucciola-riviera-dei-fiori-badalucco`
   - indirizzo: Via Gianni Cozzi, 4, 18010 Santo Stefano al Mare IM
3. **Best Western Hotel Anthurium** — Badalucco
   - slug: `best-western-hotel-anthurium-badalucco`
   - indirizzo: Via Aurelia Levante, 2/18, 18010 Santo Stefano al Mare IM
4. **Castellaro Golf Resort Hotel** — Badalucco
   - slug: `castellaro-golf-resort-hotel-badalucco`
   - indirizzo: Str. per i Piani, 1, 18011 Castellaro IM
5. **Hotel Arma** — Badalucco
   - slug: `hotel-arma-badalucco`
   - indirizzo: Via Aurelia Levante, 18018 Arma di Taggia IM
6. **Hotel Corso** — Badalucco
   - slug: `hotel-corso-badalucco`
   - indirizzo: Corso Felice Cavallotti, 194, 18038 Sanremo IM
7. **Hotel Ideal** — Badalucco
   - slug: `hotel-ideal-badalucco`
   - indirizzo: Via Lungomare, 25, 18018 Arma di Taggia IM
8. **Hotel Jean Marie** — Badalucco
   - slug: `hotel-jean-marie-badalucco`
   - indirizzo: Via Andrea Doria, 40, 18018 Arma di Taggia IM
9. **Hotel Svizzera** — Badalucco
   - slug: `hotel-svizzera-badalucco`
   - indirizzo: Via Lungomare, 123, 18018 Arma di Taggia IM
10. **Hotel Vita Serena** — Badalucco
   - slug: `hotel-vita-serena-badalucco`
   - indirizzo: Via Candido Queirolo, 102, 18018 Taggia IM
11. **Il Ricamo** — Badalucco
   - slug: `il-ricamo-badalucco`
   - indirizzo: Via Giobatta Boeri, 3, 18010 Badalucco IM
12. **Residence del Prado** — Badalucco
   - slug: `residence-del-prado-badalucco`
   - indirizzo: Corso Villaregia, 120, 18015 Riva Ligure IM
13. **Ristorante Albergo Santo Spirito** — Badalucco
   - slug: `ristorante-albergo-santo-spirito-badalucco`
   - indirizzo: Piazza Roma, 23, 18010 Molini di Triora IM
14. **Abbaidda Hotel** — Badesi
   - slug: `abbaidda-hotel-badesi`
   - indirizzo: Via A. Diaz, 07039 La Muddizza SS
15. **B&B casetta al mare** — Badesi
   - slug: `b-b-casetta-al-mare-badesi`
   - indirizzo: Lungomare Dettori, 23, 07038 Isola Rossa OT
16. **B&B Le Peonie** — Badesi
   - slug: `b-b-le-peonie-badesi`
   - indirizzo: V. Tito Speri, 14, 07030 La Tozza OT
17. **Borgo Bellavista Badesi - Affitto case vacanza** — Badesi
   - slug: `borgo-bellavista-badesi-affitto-case-vacanza-badesi`
   - indirizzo: Via Porrino, 10, 07030 Badesi OT
18. **Horizon Hotel Badesi** — Badesi
   - slug: `horizon-hotel-badesi-badesi`
   - indirizzo: Via Mare, 31, 07030 Badesi OT
19. **HOTEL ARIADIMARI** — Badesi
   - slug: `hotel-ariadimari-badesi`
   - indirizzo: Via Regina Elena, 78, 07039 Valledoria SS
20. **Hotel Panorama** — Badesi
   - slug: `hotel-panorama-badesi`
   - indirizzo: Via Mare, 37, 07030 Badesi OT
21. **Hotel Ristorante Marina (Badesi)** — Badesi
   - slug: `hotel-ristorante-marina-badesi-badesi`
   - indirizzo: Locc vaddi lungoni, SP90, 07030 Badesi OT
22. **I Giardini di Badus - Reception** — Badesi
   - slug: `i-giardini-di-badus-reception-badesi`
   - indirizzo: Via Brigata Sassari, 27, 07030 Badesi OT
23. **Is Serenas Badesi Resort** — Badesi
   - slug: `is-serenas-badesi-resort-badesi`
   - indirizzo: Località Maccia Boina, 07030 Badesi OT
24. **La Foce Village&Camping** — Badesi
   - slug: `la-foce-village-camping-badesi`
   - indirizzo: Via Ampurias, 110, 07039 Valledoria SS
25. **Residence Borgo del Turchese** — Badesi
   - slug: `residence-borgo-del-turchese-badesi`
   - indirizzo: Via Mare, 29, 07030 Badesi OT
26. **Residence Costa del Turchese** — Badesi
   - slug: `residence-costa-del-turchese-badesi`
   - indirizzo: Via Mare, 29, 07030 Badesi OT
27. **Residence I Delfini** — Badesi
   - slug: `residence-i-delfini-badesi`
   - indirizzo: Via Giovanni Pascoli, 07030 Badesi OT
28. **Residence Le Onde** — Badesi
   - slug: `residence-le-onde-badesi`
   - indirizzo: Via Dettori, 20, 07030 Badesi OT
29. **Residence Pierre & Vacances Badus** — Badesi
   - slug: `residence-pierre-vacances-badus-badesi`
   - indirizzo: Via Brigata Sassari, 27, 07030 Badesi OT
30. **Residenza BeB Borgo Marino** — Badesi
   - slug: `residenza-beb-borgo-marino-badesi`
   - indirizzo: Via Dettori, 07030 Badesi OT
31. **Resort & SPA Le Dune** — Badesi
   - slug: `resort-spa-le-dune-badesi`
   - indirizzo: Loc, 07030 Li Junchi OT
32. **Villa Agnese** — Badesi
   - slug: `villa-agnese-badesi`
   - indirizzo: Via Riu Balbaru, 24, 07030 Badesi OT
33. **B&B Cà Monte Mezzano** — Badia Calavena
   - slug: `b-b-ca-monte-mezzano-badia-calavena`
   - indirizzo: Via trezzolano, 8 A, 37141 Verona VR
34. **B&B Villa Riva** — Badia Calavena
   - slug: `b-b-villa-riva-badia-calavena`
   - indirizzo: Via Riva, 17A, 37030 Badia Calavena VR
35. **Bed and Breakfast Corte Galo** — Badia Calavena
   - slug: `bed-and-breakfast-corte-galo-badia-calavena`
   - indirizzo: Via Pagnaghe, 16/A, 37039 Tregnago VR