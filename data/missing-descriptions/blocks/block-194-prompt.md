# Blocco 194/500 — 35 strutture senza descrizione IT

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

1. **Oliver Hotel Di Oliveri Oliver** — Bagheria
   - slug: `oliver-hotel-di-oliveri-oliver-bagheria`
   - indirizzo: Via Dottor Filippo Buttitta, 41, 90011 Bagheria PA
2. **The Blue and Red Rooms - Bed and Breakfast Bagheria - B&B -** — Bagheria
   - slug: `the-blue-and-red-rooms-bed-and-breakfast-bagheri-bagheria`
   - indirizzo: Via Dante Alighieri, 107, 90011 Bagheria PA
3. **Villa Buscemi** — Bagheria
   - slug: `villa-buscemi-bagheria`
   - indirizzo: Vicinale Parisi IV, 5, 90011 Bagheria PA
4. **Affittacamere San Cristoforo** — Bagnacavallo
   - slug: `affittacamere-san-cristoforo-bagnacavallo`
   - indirizzo: Via S. Cristoforo di Mezzeno, 1, 48018 Faenza RA
5. **Alla Pieve** — Bagnacavallo
   - slug: `alla-pieve-bagnacavallo`
   - indirizzo: Piazzale Luciano Lama, 1, 48012 Bagnacavallo RA
6. **Antica Corte Lugo - Affitti Brevi e Appartamenti Vacanza** — Bagnacavallo
   - slug: `antica-corte-lugo-affitti-brevi-e-appartamenti-v-bagnacavallo`
   - indirizzo: Corso Mazzini, 17, 48022 Lugo RA
7. **Antico Convento San Francesco** — Bagnacavallo
   - slug: `antico-convento-san-francesco-bagnacavallo`
   - indirizzo: Via Luigi Cadorna, 10, 48012 Bagnacavallo RA
8. **B&B HOTEL Faenza** — Bagnacavallo
   - slug: `b-b-hotel-faenza-bagnacavallo`
   - indirizzo: Via S. Silvestro, 171, 48018 Faenza RA
9. **B&B La Palazza** — Bagnacavallo
   - slug: `b-b-la-palazza-bagnacavallo`
   - indirizzo: Via Palazza, 9, 48026 Russi RA
10. **B&B La Torre** — Bagnacavallo
   - slug: `b-b-la-torre-bagnacavallo`
   - indirizzo: Corso Sforza, 8, 48033 Cotignola RA
11. **B&B Le due magnolie** — Bagnacavallo
   - slug: `b-b-le-due-magnolie-bagnacavallo`
   - indirizzo: Via V. Monti, 13, 48033 Cotignola RA
12. **B&B Villa dei Gelsi a Cotignola** — Bagnacavallo
   - slug: `b-b-villa-dei-gelsi-a-cotignola-bagnacavallo`
   - indirizzo: Via S. Giovanni, 8, 48033 Barbiano RA
13. **Dimora Decò** — Bagnacavallo
   - slug: `dimora-deco-bagnacavallo`
   - indirizzo: Corso Giuseppe Garibaldi, 91, 48022 Lugo RA
14. **Hotel Al Flor** — Bagnacavallo
   - slug: `hotel-al-flor-bagnacavallo`
   - indirizzo: Via Chiusa, 37, 48012 Bagnacavallo RA
15. **Hotel Ala d'Oro** — Bagnacavallo
   - slug: `hotel-ala-d-oro-bagnacavallo`
   - indirizzo: Via Giacomo Matteotti, 56, 48022 Lugo RA
16. **La Casetta Di Cotignola di Tiziano Balzarotti** — Bagnacavallo
   - slug: `la-casetta-di-cotignola-di-tiziano-balzarotti-bagnacavallo`
   - indirizzo: Via M. D'Azeglio, 28, 48033 Cotignola RA
17. **Night&Day Affittacamere di Laura Patuelli** — Bagnacavallo
   - slug: `night-day-affittacamere-di-laura-patuelli-bagnacavallo`
   - indirizzo: Via Gaggio, 15, 48033 Cotignola RA
18. **Porta Mazzini Central Rooms** — Bagnacavallo
   - slug: `porta-mazzini-central-rooms-bagnacavallo`
   - indirizzo: Via Giuseppe Mazzini, 39, 48012 Bagnacavallo RA
19. **Relais Casetta56** — Bagnacavallo
   - slug: `relais-casetta56-bagnacavallo`
   - indirizzo: Via Chiusa, 56, 48012 Bagnacavallo RA
20. **Albergo delle Rose** — Bagnara Calabra
   - slug: `albergo-delle-rose-bagnara-calabra`
   - indirizzo: Corso Vittorio Emanuele II, 37, 89011 Bagnara Calabra RC
21. **B&B Al Vicoletto** — Bagnara Calabra
   - slug: `b-b-al-vicoletto-bagnara-calabra`
   - indirizzo: Via Raffaele Piria V vico, 11, 89058 Scilla RC
22. **B&B Bagnara Vista Mare** — Bagnara Calabra
   - slug: `b-b-bagnara-vista-mare-bagnara-calabra`
   - indirizzo: Via Don Giovanni Minzoni, 13, 89011 Bagnara Calabra RC
23. **B&B Centrum Palmi** — Bagnara Calabra
   - slug: `b-b-centrum-palmi-bagnara-calabra`
   - indirizzo: Via Francesco Crispi, 42, 89015 Palmi RC
24. **B&B Da Nonna Rita** — Bagnara Calabra
   - slug: `b-b-da-nonna-rita-bagnara-calabra`
   - indirizzo: Via Vittorio Emanuele III, n 38, 89011 Bagnara Calabra RC
25. **B&B Da zio Totò** — Bagnara Calabra
   - slug: `b-b-da-zio-toto-bagnara-calabra`
   - indirizzo: Via Piano, 12, 89058 Scilla RC
26. **B&B degli Artisti** — Bagnara Calabra
   - slug: `b-b-degli-artisti-bagnara-calabra`
   - indirizzo: Via Nazario Sauro, 13, 89015 Palmi RC
27. **B&B Domus Palmi CIN IT080057C1ROZIM64U** — Bagnara Calabra
   - slug: `b-b-domus-palmi-cin-it080057c1rozim64u-bagnara-calabra`
   - indirizzo: Via A. Gramsci, 18, 89015 Palmi RC
28. **B&B Il Gabbiano** — Bagnara Calabra
   - slug: `b-b-il-gabbiano-bagnara-calabra`
   - indirizzo: Viale Filippo Turati, 61, 89011 Bagnara Calabra RC
29. **Bed & Breakfast Anna** — Bagnara Calabra
   - slug: `bed-breakfast-anna-bagnara-calabra`
   - indirizzo: Uscita autostrada, SS 18 Tirrena Inferiore, 89011 Bagnara Calabra RC
30. **CHIUSO** — Bagnara Calabra
   - slug: `chiuso-bagnara-calabra`
   - indirizzo: Vico Parini, 1, 89011 Bagnara Calabra RC
31. **Dimora Don Ciccillo B&B** — Bagnara Calabra
   - slug: `dimora-don-ciccillo-b-b-bagnara-calabra`
   - indirizzo: Corso Vittorio Emanuele II, 124, 89011 Bagnara Calabra RC
32. **Grand Hotel Stella Maris** — Bagnara Calabra
   - slug: `grand-hotel-stella-maris-bagnara-calabra`
   - indirizzo: Contrada S. Gaetano, 89015 Palmi RC
33. **Grand Hotel Victoria** — Bagnara Calabra
   - slug: `grand-hotel-victoria-bagnara-calabra`
   - indirizzo: Piazza Guglielmo Marconi, 4, 89011 Bagnara Calabra RC
34. **GREEN PARK RESIDENCE** — Bagnara Calabra
   - slug: `green-park-residence-bagnara-calabra`
   - indirizzo: SP2, 1, 89011 Bagnara Calabra RC
35. **La Locandiera** — Bagnara Calabra
   - slug: `la-locandiera-bagnara-calabra`
   - indirizzo: Via Prof. Giuseppe Zagari, 34, 89058 Scilla RC