# Blocco 226/500 — 35 strutture senza descrizione IT

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

1. **Hotel della Rotonda** — Barlassina
   - slug: `hotel-della-rotonda-barlassina`
   - indirizzo: Via Novara, 53, 21047 Saronno VA
2. **Hotel Lombardia** — Barlassina
   - slug: `hotel-lombardia-barlassina`
   - indirizzo: Corso Giuseppe Garibaldi, 5, 20030 Seveso MB
3. **Hotel Motel Futura** — Barlassina
   - slug: `hotel-motel-futura-barlassina`
   - indirizzo: Via Valassina, 97, 20037 Paderno Dugnano MI
4. **Hotel Parco Borromeo Cesano Maderno** — Barlassina
   - slug: `hotel-parco-borromeo-cesano-maderno-barlassina`
   - indirizzo: Piazza Ercole Procaccini, 20811 Cesano Maderno MB
5. **Residence Principe** — Barlassina
   - slug: `residence-principe-barlassina`
   - indirizzo: Via Caduti della Liberazione, 18, 21047 Saronno VA
6. **B&B Chiaro di Luna** — Barletta
   - slug: `b-b-chiaro-di-luna-barletta`
   - indirizzo: Vico Miale da Troia, 32, 76121 Barletta BT
7. **B&B De Nittis - Meridia Collection** — Barletta
   - slug: `b-b-de-nittis-meridia-collection-barletta`
   - indirizzo: Vicolo del Lupo, 9, 76121 Barletta BT
8. **B&B Il Campanile Barletta** — Barletta
   - slug: `b-b-il-campanile-barletta-barletta`
   - indirizzo: Campanile Gotico, Via M. Abignenti, 2, 76121 Barletta BT
9. **B&B La Disfida di Barletta** — Barletta
   - slug: `b-b-la-disfida-di-barletta-barletta`
   - indirizzo: Via del Duomo, 1, 76121 Barletta BT
10. **B&b le muse** — Barletta
   - slug: `b-b-le-muse-barletta`
   - indirizzo: Via Cavour, 62, 76121 Barletta BT
11. **b&b Nazareth** — Barletta
   - slug: `b-b-nazareth-barletta`
   - indirizzo: Via Nazareth, 60, 76121 Barletta BT
12. **B&B Saint Patrick** — Barletta
   - slug: `b-b-saint-patrick-barletta`
   - indirizzo: Corso Giuseppe Garibaldi, 145, 76121 Barletta BT
13. **Best Western Hotel Dei Cavalieri** — Barletta
   - slug: `best-western-hotel-dei-cavalieri-barletta`
   - indirizzo: Via Foggia, 40, 76121 Barletta BT
14. **Binario 1 Rooms | B&B a Barletta** — Barletta
   - slug: `binario-1-rooms-b-b-a-barletta-barletta`
   - indirizzo: Via Torino, 4, 76121 Barletta BT
15. **Desideri di Puglia** — Barletta
   - slug: `desideri-di-puglia-barletta`
   - indirizzo: Via Borgo Vecchio, 65, Vico Lepanto, 1, 76121 Barletta BT
16. **Domatia Bed and Breakfast** — Barletta
   - slug: `domatia-bed-and-breakfast-barletta`
   - indirizzo: Vico Pietro Riczio, 20, 76121 Barletta BT
17. **Guest House Al Centro Storico** — Barletta
   - slug: `guest-house-al-centro-storico-barletta`
   - indirizzo: Via Samuelli, 83, 76121 Barletta BT
18. **La Cattedrale Barletta Guest House; Camere ; casa vacanza ;struttura bike friendly** — Barletta
   - slug: `la-cattedrale-barletta-guest-house-camere-casa-v-barletta`
   - indirizzo: Via Santa Marta, 55, 76121 Barletta BT
19. **La Luna e il Sole** — Barletta
   - slug: `la-luna-e-il-sole-barletta`
   - indirizzo: Via Samuelli, 79, 76121 Barletta BT
20. **La Terrazza** — Barletta
   - slug: `la-terrazza-barletta`
   - indirizzo: Via della Misericordia, 78, 76121 Barletta BT
21. **Liddo Boutique Hotel Barletta** — Barletta
   - slug: `liddo-boutique-hotel-barletta-barletta`
   - indirizzo: Via III Novembre, 16/18, 76121 Barletta BT
22. **Nicotel Barletta Hotel** — Barletta
   - slug: `nicotel-barletta-hotel-barletta`
   - indirizzo: Viale Regina Elena, 76121 Barletta BT
23. **StArt Guest House** — Barletta
   - slug: `start-guest-house-barletta`
   - indirizzo: Via Andrea Bonello, 80, 76121 Barletta BT
24. **Villa helios** — Barletta
   - slug: `villa-helios-barletta`
   - indirizzo: Via Ammiragli Ferdinando e Mario Casardi, 27, 76121 Barletta BT
25. **VinsLounge B&B Suite** — Barletta
   - slug: `vinslounge-b-b-suite-barletta`
   - indirizzo: Via del Duomo, 5, 76121 Barletta BT
26. **B&B L'Erica** — Barni
   - slug: `b-b-l-erica-barni`
   - indirizzo: Via privata Aldo Moro, 11, 23865 Onno LC
27. **B&B SIBI** — Barni
   - slug: `b-b-sibi-barni`
   - indirizzo: Via Papa Giovanni XXIII, 16, 23827 Lierna LC
28. **Bed & Breakfast Dei Laghi** — Barni
   - slug: `bed-breakfast-dei-laghi-barni`
   - indirizzo: Via Giuseppe Garibaldi, 20, 22030 Magreglio CO
29. **Crotto dei Pescatori** — Barni
   - slug: `crotto-dei-pescatori-barni`
   - indirizzo: Località Casate, 77, 22025 Lezzeno CO
30. **Hotel Alverde** — Barni
   - slug: `hotel-alverde-barni`
   - indirizzo: Contrada dei Ronchi, 7, 23826 Mandello del Lario LC
31. **Hotel Grigna** — Barni
   - slug: `hotel-grigna-barni`
   - indirizzo: Via Statale, 29, 23826 Mandello del Lario LC
32. **Hotel Mirabeau Bellagio** — Barni
   - slug: `hotel-mirabeau-bellagio-barni`
   - indirizzo: Via Provinciale, 79, 22030 Alta, CO
33. **Hotel Ristorante Al Verde** — Barni
   - slug: `hotel-ristorante-al-verde-barni`
   - indirizzo: Via Rossana, 5, 23826 Mandello del Lario LC
34. **Mamma Ciccia rooms & apartments** — Barni
   - slug: `mamma-ciccia-rooms-apartments-barni`
   - indirizzo: Piazza Roma, 13, 23826 Mandello del Lario LC
35. **Nautilus Hotel & Resort Lido** — Barni
   - slug: `nautilus-hotel-resort-lido-barni`
   - indirizzo: Strada Statale 583, 23826 Moregge LC