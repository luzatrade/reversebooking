# Blocco 408/500 — 35 strutture senza descrizione IT

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

1. **B&B Lagomaggiore** — Cannobio
   - slug: `b-b-lagomaggiore-cannobio`
   - indirizzo: Via Casali Solivo, 9, 28822 Cannobio VB
2. **B&B Spiaggia Amore - Affittacamere** — Cannobio
   - slug: `b-b-spiaggia-amore-affittacamere-cannobio`
   - indirizzo: Via Ceroni, 11A, 28822 Cannobio VB
3. **Bed & Breakfast Villa dei Pini** — Cannobio
   - slug: `bed-breakfast-villa-dei-pini-cannobio`
   - indirizzo: Via Cressini, 13, 28822 Cannobio VB
4. **Ca Meison B&B Cannobio** — Cannobio
   - slug: `ca-meison-b-b-cannobio-cannobio`
   - indirizzo: in S. Bartolomeo, Str. Nazionale, 5, 28822 Cannobio VB
5. **eden** — Cannobio
   - slug: `eden-cannobio`
   - indirizzo: Via ai Ger, 36, 28822 Cannobio VB
6. **Hotel Casa Arizzoli** — Cannobio
   - slug: `hotel-casa-arizzoli-cannobio`
   - indirizzo: Via A. Giovanola, 92, 28822 Cannobio VB
7. **Lakeview Cannobio Camping & Resort** — Cannobio
   - slug: `lakeview-cannobio-camping-resort-cannobio`
   - indirizzo: S.S. 34, Km 35, 400, 28822 Cannobio VB
8. **Residenza Cascina nel Bosco** — Cannobio
   - slug: `residenza-cascina-nel-bosco-cannobio`
   - indirizzo: Casali Cuserina, 34, 28822 Cannobio VB
9. **Rivalago Lounge Bar and B&B** — Cannobio
   - slug: `rivalago-lounge-bar-and-b-b-cannobio`
   - indirizzo: Via Ceroni, 9, 28822 Cannobio VB
10. **Solivonatural b&b** — Cannobio
   - slug: `solivonatural-b-b-cannobio`
   - indirizzo: Via Casali Solivo, 2, 28822 Cannobio VB
11. **Villa Costantina** — Cannobio
   - slug: `villa-costantina-cannobio`
   - indirizzo: Via Luigi Meschio, 19 A, 28822 Cannobio VB
12. **Villa Cuserina** — Cannobio
   - slug: `villa-cuserina-cannobio`
   - indirizzo: Via Valle Cannobina, 45, 28822 Cannobio VB
13. **Villa Diomira B&B and Bike** — Cannobio
   - slug: `villa-diomira-b-b-and-bike-cannobio`
   - indirizzo: Vicolo Castello, 4, 28822 Sant'Agata VB
14. **Albergo Le Muse** — Cannole
   - slug: `albergo-le-muse-cannole`
   - indirizzo: Prov.le 212 carpignano sal.- cursi, km 0, 73020 Carpignano Salentino LE
15. **Belami - Hotel Ristorante Cantina** — Cannole
   - slug: `belami-hotel-ristorante-cantina-cannole`
   - indirizzo: Via Roma, 86, 73024 Maglie LE
16. **Dimore Nonna Ina** — Cannole
   - slug: `dimore-nonna-ina-cannole`
   - indirizzo: Via Giannotta, 16, 73024 Maglie LE
17. **Hotel Corte dei Francesi** — Cannole
   - slug: `hotel-corte-dei-francesi-cannole`
   - indirizzo: Via Roma, 138, 73024 Maglie LE
18. **Hotel Messapi Di Pedio Luigi** — Cannole
   - slug: `hotel-messapi-di-pedio-luigi-cannole`
   - indirizzo: Via della Resistenza, 19, 73036 Muro Leccese LE
19. **Karpignàna Hotel** — Cannole
   - slug: `karpignana-hotel-cannole`
   - indirizzo: Corso Umberto, 6G, 73020 Carpignano Salentino LE
20. **La Stella Di Keplero** — Cannole
   - slug: `la-stella-di-keplero-cannole`
   - indirizzo: Via S. Giovanni, 15, 73020 Cannole LE
21. **Marelive - CDSHotels** — Cannole
   - slug: `marelive-cdshotels-cannole`
   - indirizzo: Viale dei Palmizi, 73026 Torre dell'Orso LE
22. **Motel S.16** — Cannole
   - slug: `motel-s-16-cannole`
   - indirizzo: 73036 Muro Leccese LE, Italia
23. **La Casetta** — Canolo
   - slug: `la-casetta-canolo`
   - indirizzo: Largo Giovanni Battista Chiappe, 89040 Gerace RC
24. **B&B La finestra sul fiume** — Canonica d'Adda
   - slug: `b-b-la-finestra-sul-fiume-canonica-d-adda`
   - indirizzo: Vicolo Antonio Pizzagalli, 26, 20069 Vaprio d'Adda MI
25. **B&B Mirna** — Canonica d'Adda
   - slug: `b-b-mirna-canonica-d-adda`
   - indirizzo: Via Antonio Motta, 5, 20069 Vaprio d'Adda MI
26. **Affitta Camere DomuS al Corso** — Canosa di Puglia
   - slug: `affitta-camere-domus-al-corso-canosa-di-puglia`
   - indirizzo: Via Ettore Carafa, 11, 76012 Canosa di Puglia BT
27. **Affittacamere La Perla del Mare** — Canosa di Puglia
   - slug: `affittacamere-la-perla-del-mare-canosa-di-puglia`
   - indirizzo: Lungomare Cristoforo Colombo, 70, 76016 Margherita di Savoia BT
28. **Antica Torre dell'Orologio** — Canosa di Puglia
   - slug: `antica-torre-dell-orologio-canosa-di-puglia`
   - indirizzo: Via Trieste e Trento, 52, 76012 Canosa di Puglia BT
29. **B&B Bellavista** — Canosa di Puglia
   - slug: `b-b-bellavista-canosa-di-puglia`
   - indirizzo: Via Festicella, 13, 76016 Margherita di Savoia BT
30. **B&B Dimore Demetra** — Canosa di Puglia
   - slug: `b-b-dimore-demetra-canosa-di-puglia`
   - indirizzo: Via John Fitzgerald Kennedy, 24, 76012 Canosa di Puglia BT
31. **B&B Posta Piana** — Canosa di Puglia
   - slug: `b-b-posta-piana-canosa-di-puglia`
   - indirizzo: C.da Crocifisso SS 93, km 39.500, 76012 Canosa di Puglia BT
32. **DomuS al Corso B&B** — Canosa di Puglia
   - slug: `domus-al-corso-b-b-canosa-di-puglia`
   - indirizzo: Via Guglielmo Oberdan, 134, 76012 Canosa di Puglia BT
33. **Gazebo Rooms** — Canosa di Puglia
   - slug: `gazebo-rooms-canosa-di-puglia`
   - indirizzo: Via Risorgimento, 11, 76016 Margherita di Savoia BT
34. **Hotel Canusium** — Canosa di Puglia
   - slug: `hotel-canusium-canosa-di-puglia`
   - indirizzo: Piazza Oristano, 32, 70053 Canosa di Puglia BA
35. **Hotel d'Altavilla** — Canosa di Puglia
   - slug: `hotel-d-altavilla-canosa-di-puglia`
   - indirizzo: Via Balilla, 49, 70053 Canosa di Puglia BT