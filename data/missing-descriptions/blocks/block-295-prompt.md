# Blocco 295/500 — 35 strutture senza descrizione IT

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

1. **Affittacamere Bel Sole** — Borghetto di Vara
   - slug: `affittacamere-bel-sole-borghetto-di-vara`
   - indirizzo: SS 1, 1, 19020 Borghetto di Vara SP
2. **Affittacamere Nel paese di Alice** — Borghetto di Vara
   - slug: `affittacamere-nel-paese-di-alice-borghetto-di-vara`
   - indirizzo: Piazza Umberto I°, n° 10, 19020 Borghetto di Vara SP
3. **Agriturismo Giumin** — Borghetto di Vara
   - slug: `agriturismo-giumin-borghetto-di-vara`
   - indirizzo: Via Piazza, 19, 19020 Rocchetta di Vara SP
4. **Agriturismo Riomaggiore Mare Monti** — Borghetto di Vara
   - slug: `agriturismo-riomaggiore-mare-monti-borghetto-di-vara`
   - indirizzo: LOCALITA' SALDINO -VEPPO- ROCCHETTA DI VARA, 19020 Rocchetta di Vara SP
5. **Albergo Belvedere** — Borghetto di Vara
   - slug: `albergo-belvedere-borghetto-di-vara`
   - indirizzo: SS 1, 17, 19020 Borghetto di Vara SP
6. **Antica Locanda Luigina** — Borghetto di Vara
   - slug: `antica-locanda-luigina-borghetto-di-vara`
   - indirizzo: SS 1, 182, 19020 Mattarana SP
7. **Antiche Terre Hotel & Relax** — Borghetto di Vara
   - slug: `antiche-terre-hotel-relax-borghetto-di-vara`
   - indirizzo: Via delle Fonti, 197, 19020 Faggiona SP
8. **B&B La Luna nel Borgo** — Borghetto di Vara
   - slug: `b-b-la-luna-nel-borgo-borghetto-di-vara`
   - indirizzo: Piazza Brosini, 10, 19020 Brugnato SP
9. **Casa Ivana** — Borghetto di Vara
   - slug: `casa-ivana-borghetto-di-vara`
   - indirizzo: V. Pian delle Capanne, 6, 19020 Borghetto di Vara SP
10. **Cuccaro Club** — Borghetto di Vara
   - slug: `cuccaro-club-borghetto-di-vara`
   - indirizzo: V. Campo Picchiara, 150, 19020 Rocchetta di Vara SP
11. **Hotel "Al Terra di Mare"** — Borghetto di Vara
   - slug: `hotel-al-terra-di-mare-borghetto-di-vara`
   - indirizzo: Località Gallona, 19015 Levanto SP
12. **Hotel il Colle** — Borghetto di Vara
   - slug: `hotel-il-colle-borghetto-di-vara`
   - indirizzo: Localita' Colle Di Gritta, 19015 Levanto SP
13. **Hotel Paese Corvara** — Borghetto di Vara
   - slug: `hotel-paese-corvara-borghetto-di-vara`
   - indirizzo: Piazza Ildebrando, 9, 19020 Corvara SP
14. **Hotel Sonno d'Autore** — Borghetto di Vara
   - slug: `hotel-sonno-d-autore-borghetto-di-vara`
   - indirizzo: Via Ronchetto, 13, 19020 Borghetto di Vara SP
15. **Il Nido nella Bionda** — Borghetto di Vara
   - slug: `il-nido-nella-bionda-borghetto-di-vara`
   - indirizzo: Via Bionda, 4, 19020 Brugnato SP
16. **L'Antico Borgo** — Borghetto di Vara
   - slug: `l-antico-borgo-borghetto-di-vara`
   - indirizzo: Località, 19015 Dosso SP
17. **Locanda da Marco** — Borghetto di Vara
   - slug: `locanda-da-marco-borghetto-di-vara`
   - indirizzo: Via Levanto, 376, 19020 Pignone SP
18. **Park Hotel Argento** — Borghetto di Vara
   - slug: `park-hotel-argento-borghetto-di-vara`
   - indirizzo: Via per Sant'anna, 1, 19015 Levanto SP
19. **Affittacamere La Meridiana di Francesco Casali** — Borghetto Lodigiano
   - slug: `affittacamere-la-meridiana-di-francesco-casali-borghetto-lodigiano`
   - indirizzo: Via Roma, 64, 29121 Piacenza PC
20. **B&B Il Piccolo** — Borghetto Lodigiano
   - slug: `b-b-il-piccolo-borghetto-lodigiano`
   - indirizzo: Via Paolo Bozzini, 2, 29121 Piacenza PC
21. **B&B Palazzo Malaspina** — Borghetto Lodigiano
   - slug: `b-b-palazzo-malaspina-borghetto-lodigiano`
   - indirizzo: Via Borghetto, 7, 29121 Piacenza PC
22. **Hotel Astor** — Borghetto Lodigiano
   - slug: `hotel-astor-borghetto-lodigiano`
   - indirizzo: Via Tibini, 29, 29121 Piacenza PC
23. **Hotel Euro** — Borghetto Lodigiano
   - slug: `hotel-euro-borghetto-lodigiano`
   - indirizzo: Via Cristoforo Colombo, 29F, 29100 Piacenza PC
24. **Hotel Stadio** — Borghetto Lodigiano
   - slug: `hotel-stadio-borghetto-lodigiano`
   - indirizzo: Str. Val Nure, 20, 29122 Piacenza PC
25. **Idea Hotel Piacenza** — Borghetto Lodigiano
   - slug: `idea-hotel-piacenza-borghetto-lodigiano`
   - indirizzo: Via Emilia Pavese, 114A, 29121 Piacenza PC
26. **Il cortiletto** — Borghetto Lodigiano
   - slug: `il-cortiletto-borghetto-lodigiano`
   - indirizzo: Via Roma, 155, 29121 Piacenza PC
27. **LOCANDA IL PORTONE TEMPORANEAMENTE CHIUSO** — Borghetto Lodigiano
   - slug: `locanda-il-portone-temporaneamente-chiuso-borghetto-lodigiano`
   - indirizzo: Via della Vittoria, 18, 20078 San Colombano al Lambro MI
28. **Residence Corso Europa** — Borghetto Lodigiano
   - slug: `residence-corso-europa-borghetto-lodigiano`
   - indirizzo: Via Alessandro Vaciago, 12, 29122 Piacenza PC
29. **Affittacamere L'Aurora** — Borghetto Santo Spirito
   - slug: `affittacamere-l-aurora-borghetto-santo-spirito`
   - indirizzo: Via del Borgo, 13, 17023 Ceriale SV
30. **Albergo Glory** — Borghetto Santo Spirito
   - slug: `albergo-glory-borghetto-santo-spirito`
   - indirizzo: Corso Europa, 37, 17020 Borghetto Santo Spirito SV
31. **Albergo Tiffany** — Borghetto Santo Spirito
   - slug: `albergo-tiffany-borghetto-santo-spirito`
   - indirizzo: SS 1, 78, 17023 Ceriale SV
32. **B&B Il Tulipano** — Borghetto Santo Spirito
   - slug: `b-b-il-tulipano-borghetto-santo-spirito`
   - indirizzo: Via Giuseppe Garibaldi, 19, 17020 Borghetto Santo Spirito SV
33. **Hotel Claudia** — Borghetto Santo Spirito
   - slug: `hotel-claudia-borghetto-santo-spirito`
   - indirizzo: Via Genova, 44, 17025 Loano SV
34. **Hotel Garden Lido** — Borghetto Santo Spirito
   - slug: `hotel-garden-lido-borghetto-santo-spirito`
   - indirizzo: Lungomare Nazario Sauro, 17025 Loano SV
35. **Hotel La Caravella** — Borghetto Santo Spirito
   - slug: `hotel-la-caravella-borghetto-santo-spirito`
   - indirizzo: Via Aurelia, 315, 17025 Loano SV