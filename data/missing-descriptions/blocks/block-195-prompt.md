# Blocco 195/500 — 35 strutture senza descrizione IT

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

1. **Maresol Residence** — Bagnara Calabra
   - slug: `maresol-residence-bagnara-calabra`
   - indirizzo: Vico Parini, 1, 89011 Bagnara Calabra RC
2. **Samuel Fish** — Bagnara Calabra
   - slug: `samuel-fish-bagnara-calabra`
   - indirizzo: Piazza A. Gramsci, 89011 Bagnara Calabra RC
3. **San Rocco Rooms - Affittacamere** — Bagnara Calabra
   - slug: `san-rocco-rooms-affittacamere-bagnara-calabra`
   - indirizzo: Via S. Rocco, 59, 89015 Palmi RC
4. **B&B del Viale** — Bagnara di Romagna
   - slug: `b-b-del-viale-bagnara-di-romagna`
   - indirizzo: Viale Andrea Costa, 21, 40026 Imola BO
5. **B&B I Pioppi** — Bagnara di Romagna
   - slug: `b-b-i-pioppi-bagnara-di-romagna`
   - indirizzo: Via Spadarino, 1, 48031 Bagnara di Romagna RA
6. **B&B Il Glicine Nascosto** — Bagnara di Romagna
   - slug: `b-b-il-glicine-nascosto-bagnara-di-romagna`
   - indirizzo: Via Celletta, 18, 48033 Cotignola RA
7. **B&B L'Arcobaleno** — Bagnara di Romagna
   - slug: `b-b-l-arcobaleno-bagnara-di-romagna`
   - indirizzo: 48031 Bagnara di Romagna RA
8. **Hotel Molino Rosso** — Bagnara di Romagna
   - slug: `hotel-molino-rosso-bagnara-di-romagna`
   - indirizzo: Via Provinciale Selice, 49, 40026 Imola BO
9. **HOTEL PERLA** — Bagnara di Romagna
   - slug: `hotel-perla-bagnara-di-romagna`
   - indirizzo: Viale della Resistenza, 22, 48024 Massa Lombarda RA
10. **Imola Residence - Self Check-in** — Bagnara di Romagna
   - slug: `imola-residence-self-check-in-bagnara-di-romagna`
   - indirizzo: Via Fratelli Bandiera, 22, 40026 Imola BO
11. **La casa di Hermes b&b** — Bagnara di Romagna
   - slug: `la-casa-di-hermes-b-b-bagnara-di-romagna`
   - indirizzo: Vicolo Brullo, 40026 Imola BO
12. **La Locanda di Bagnara** — Bagnara di Romagna
   - slug: `la-locanda-di-bagnara-bagnara-di-romagna`
   - indirizzo: P.za Guglielmo Marconi, 10, 48010 Bagnara di Romagna RA
13. **Locanda Merlaschio B&B con ristorante** — Bagnara di Romagna
   - slug: `locanda-merlaschio-b-b-con-ristorante-bagnara-di-romagna`
   - indirizzo: Via Merlaschio, 13, 48018 Faenza RA
14. **Smart Hotel Autodromo** — Bagnara di Romagna
   - slug: `smart-hotel-autodromo-bagnara-di-romagna`
   - indirizzo: Viale dei Colli, 39, 40026 Imola BO
15. **Agriturismo Le Fragranze** — Bagnaria
   - slug: `agriturismo-le-fragranze-bagnaria`
   - indirizzo: Località Gabardina, 27057 Varzi PV
16. **Agriturismo Malvista Gremiasco** — Bagnaria
   - slug: `agriturismo-malvista-gremiasco-bagnaria`
   - indirizzo: Cascina Malvista 1, 15056 Gremiasco AL
17. **Agriturismo Spizzirò** — Bagnaria
   - slug: `agriturismo-spizziro-bagnaria`
   - indirizzo: Località Spizzirò, 17, 27050 Bagnaria PV
18. **Ca' del Monte Resort** — Bagnaria
   - slug: `ca-del-monte-resort-bagnaria`
   - indirizzo: Str. del Monte, 1, 27050 Cecima PV
19. **Il Fiorile** — Bagnaria
   - slug: `il-fiorile-bagnaria`
   - indirizzo: S.da Nuova Per Cerreto, 4, 15060 Castel Dè Ratti AL
20. **Le Cicale Locanda Bottega Degusteria** — Bagnaria
   - slug: `le-cicale-locanda-bottega-degusteria-bagnaria`
   - indirizzo: Piazza della Fiera, 1, 27057 Varzi PV
21. **Oltrella Country House** — Bagnaria
   - slug: `oltrella-country-house-bagnaria`
   - indirizzo: Via Vignola, 17, 27050 Ponte Nizza PV
22. **Ristorante Hotel Pizzeria Italia** — Bagnaria
   - slug: `ristorante-hotel-pizzeria-italia-bagnaria`
   - indirizzo: Corso Vittorio Emanuele II, 79, 27052 Godiasco Salice Terme PV
23. **AI QUATTRO SOLI** — Bagnaria Arsa
   - slug: `ai-quattro-soli-bagnaria-arsa`
   - indirizzo: Località Michieli, 1, 33050 Privano UD
24. **Al Rol** — Bagnaria Arsa
   - slug: `al-rol-bagnaria-arsa`
   - indirizzo: Via casali Fain Tomat 29, Via Soleschiano, 33044 Manzano UD
25. **Albergo Leon Bianco** — Bagnaria Arsa
   - slug: `albergo-leon-bianco-bagnaria-arsa`
   - indirizzo: Via IV Novembre, 41, 33050 Gonars UD
26. **Albergo Ristorante alla Speranza** — Bagnaria Arsa
   - slug: `albergo-ristorante-alla-speranza-bagnaria-arsa`
   - indirizzo: Via del Porto, 8, 33058 San Giorgio di Nogaro UD
27. **B&B 5 Palme** — Bagnaria Arsa
   - slug: `b-b-5-palme-bagnaria-arsa`
   - indirizzo: Via Giuseppe Verdi, 16, 33050 Terzo d'Aquileia UD
28. **b&b alle agavi** — Bagnaria Arsa
   - slug: `b-b-alle-agavi-bagnaria-arsa`
   - indirizzo: Via dei Molini, 1/1, 33050 Santa Maria la Longa UD
29. **Camere Room Zimmer Palmanova** — Bagnaria Arsa
   - slug: `camere-room-zimmer-palmanova-bagnaria-arsa`
   - indirizzo: Via Bandiera Moro, 2, 33057 Palmanova UD
30. **Hotel Vittoria** — Bagnaria Arsa
   - slug: `hotel-vittoria-bagnaria-arsa`
   - indirizzo: Piazza della Chiesa, 2, 33058 San Giorgio di Nogaro UD
31. **La Selce Farmhouse** — Bagnaria Arsa
   - slug: `la-selce-farmhouse-bagnaria-arsa`
   - indirizzo: Via XXIV Maggio, 15, 33050 Bagnaria Arsa UD
32. **Mulino delle Tolle** — Bagnaria Arsa
   - slug: `mulino-delle-tolle-bagnaria-arsa`
   - indirizzo: Via Julia, 1, 33050 Bagnaria Arsa UD
33. **Palmamore** — Bagnaria Arsa
   - slug: `palmamore-bagnaria-arsa`
   - indirizzo: Contrada Foscarini, 31, 33057 Palmanova UD
34. **Radetzky Rooms** — Bagnaria Arsa
   - slug: `radetzky-rooms-bagnaria-arsa`
   - indirizzo: Piazza Libertà, 5/Secondo piano, 33052 Cervignano del Friuli UD
35. **San Giorgio Hotel** — Bagnaria Arsa
   - slug: `san-giorgio-hotel-bagnaria-arsa`
   - indirizzo: Via Marittima, 69, 33058 San Giorgio di Nogaro UD