# Blocco 125/500 — 35 strutture senza descrizione IT

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

1. **B&B Genti Delle Alture** — Apice
   - slug: `b-b-genti-delle-alture-apice`
   - indirizzo: Piazza Carbonari, snc, 82021 Apice Vecchio BN
2. **B&B Relais Aeclanum** — Apice
   - slug: `b-b-relais-aeclanum-apice`
   - indirizzo: Via Bosco, 53, 83036 Mirabella Eclano AV
3. **Bombrelais** — Apice
   - slug: `bombrelais-apice`
   - indirizzo: Via Federico II, 82021 Apice BN
4. **Country Relais La Torretta Baronale** — Apice
   - slug: `country-relais-la-torretta-baronale-apice`
   - indirizzo: a Morcopio, Via San Vito, 37, 82018 San Giovanni BN
5. **Giardini Hurz®** — Apice
   - slug: `giardini-hurz-apice`
   - indirizzo: Via Piana Romana, 46, 82020 Pietrelcina BN
6. **Hotel Incontro** — Apice
   - slug: `hotel-incontro-apice`
   - indirizzo: Via Nazionale Manna, 83031 Ariano Irpino AV
7. **Hotel l'Ulivo** — Apice
   - slug: `hotel-l-ulivo-apice`
   - indirizzo: Via Santa Caterina, 85, 83036 Mirabella Eclano AV
8. **Hotel Lemi** — Apice
   - slug: `hotel-lemi-apice`
   - indirizzo: Contrada Collepiano, 82030 Benevento BN
9. **Hotel Ristorante Aeclanum** — Apice
   - slug: `hotel-ristorante-aeclanum-apice`
   - indirizzo: Via Nazionale, 32, 83036 Mirabella Eclano AV
10. **Hotel Ristorante Europa** — Apice
   - slug: `hotel-ristorante-europa-apice`
   - indirizzo: Via Campoceraso, 83030 Venticano AV
11. **Il Fortilizio Di Padre Pio S.A.S. Di Mazza I. & C.** — Apice
   - slug: `il-fortilizio-di-padre-pio-s-a-s-di-mazza-i-c-apice`
   - indirizzo: Via Fontana dei Fieri, 113, 82020 Pietrelcina BN
12. **Soggiorno - Il Sentiero degli Ulivi** — Apice
   - slug: `soggiorno-il-sentiero-degli-ulivi-apice`
   - indirizzo: Via Campoceraso, 44, 83030 Venticano AV
13. **Agriturismo L'Orizzonte** — Apiro
   - slug: `agriturismo-l-orizzonte-apiro`
   - indirizzo: Contrada Montalvello, 38, 62021 Apiro MC
14. **Agriturismo La Casa del Sole** — Apiro
   - slug: `agriturismo-la-casa-del-sole-apiro`
   - indirizzo: Via S. Salvatore, 22, 62021 Apiro MC
15. **Agriturismo Ristorante Colleverde** — Apiro
   - slug: `agriturismo-ristorante-colleverde-apiro`
   - indirizzo: Contrada Cozzi, 1, 62021 Apiro MC
16. **Agriturismo Santa Maria del Gallo** — Apiro
   - slug: `agriturismo-santa-maria-del-gallo-apiro`
   - indirizzo: Contrada Santa Maria, 7, 62021 Apiro MC
17. **Horti del Baio** — Apiro
   - slug: `horti-del-baio-apiro`
   - indirizzo: Castreccioni 13/a a 2 km dal chiosco Da Rosanna e li Monelli, 62011 Cingoli MC
18. **Hotel Eldorado** — Apiro
   - slug: `hotel-eldorado-apiro`
   - indirizzo: Piazza Cesare Battisti, 12, 62021 Apiro MC
19. **Juliette Rooms Jesi affittacamere** — Apiro
   - slug: `juliette-rooms-jesi-affittacamere-apiro`
   - indirizzo: Mura Occidentali, 10 bis, 60035 Jesi AN
20. **B&B Benevento** — Apollosa
   - slug: `b-b-benevento-apollosa`
   - indirizzo: Via Ferdinando Bozza, 22, 82100 Benevento BN
21. **B&B La Ferrovia** — Apollosa
   - slug: `b-b-la-ferrovia-apollosa`
   - indirizzo: Viale Principe di Napoli, 179, 82100 Benevento BN
22. **B&B Le Vecchie Cantine** — Apollosa
   - slug: `b-b-le-vecchie-cantine-apollosa`
   - indirizzo: Via Aurilli, 82030 Campoli del Monte Taburno BN
23. **B&B SMERALDO** — Apollosa
   - slug: `b-b-smeraldo-apollosa`
   - indirizzo: Contrada Montecalvo, 82100 Benevento BN
24. **B&B Tre Passi dalla Torre** — Apollosa
   - slug: `b-b-tre-passi-dalla-torre-apollosa`
   - indirizzo: SS7, 60, 82016 Montesarchio BN
25. **Casa Zelia** — Apollosa
   - slug: `casa-zelia-apollosa`
   - indirizzo: Via Giovanni della Casa, 20, 82100 Benevento BN
26. **Dimora del Duomo** — Apollosa
   - slug: `dimora-del-duomo-apollosa`
   - indirizzo: Via Carlo Torre, 2, 82100 Benevento BN
27. **Gaya resort** — Apollosa
   - slug: `gaya-resort-apollosa`
   - indirizzo: Via Ennio Goduti, 10, 82100 Benevento BN
28. **Hotel Costarama Di Caporaso Luigi** — Apollosa
   - slug: `hotel-costarama-di-caporaso-luigi-apollosa`
   - indirizzo: Loc. Costa Rama, 82030 Cautano BN
29. **Hotel Ristorante Il Castello** — Apollosa
   - slug: `hotel-ristorante-il-castello-apollosa`
   - indirizzo: Via Vitulanese, 188, 82016 Montesarchio BN
30. **Janara - Santa Sofia** — Apollosa
   - slug: `janara-santa-sofia-apollosa`
   - indirizzo: Via Annunziata, 48, 82100 Benevento BN
31. **Parva Vinea** — Apollosa
   - slug: `parva-vinea-apollosa`
   - indirizzo: Via Filippo Serino, 26, 82100 Benevento BN
32. **Relais Il Feudo** — Apollosa
   - slug: `relais-il-feudo-apollosa`
   - indirizzo: Via Trocchia, 82010 Trocchia BN
33. **Traiano Rooms** — Apollosa
   - slug: `traiano-rooms-apollosa`
   - indirizzo: Via Cupa Santa Lucia, 66, 82100 Benevento BN
34. **Albergo La Collina** — Appiano Gentile
   - slug: `albergo-la-collina-appiano-gentile`
   - indirizzo: Via S. Elia, 5, 22070 Casnate con Bernate CO
35. **B&B La Darsena** — Appiano Gentile
   - slug: `b-b-la-darsena-appiano-gentile`
   - indirizzo: Piazza Roma, 14, 22100 Como CO