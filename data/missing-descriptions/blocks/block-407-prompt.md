# Blocco 407/500 — 35 strutture senza descrizione IT

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

1. **B&B La Casa dei Tigli Cannara** — Cannara
   - slug: `b-b-la-casa-dei-tigli-cannara-cannara`
   - indirizzo: Via Destra Topino, 123, 06033 Cannara PG
2. **Bed and Breakfast Ciancaleoni** — Cannara
   - slug: `bed-and-breakfast-ciancaleoni-cannara`
   - indirizzo: Via Fontanella, 10, 06181 Rivotorto PG
3. **Bed and Breakfast da Patty - Cannara** — Cannara
   - slug: `bed-and-breakfast-da-patty-cannara-cannara`
   - indirizzo: Via S. Donato, 1, 06033 Cannara PG
4. **Hotel Cenacolo** — Cannara
   - slug: `hotel-cenacolo-cannara`
   - indirizzo: Viale Patrono d'Italia, 70, 06181 Santa Maria degli Angeli PG
5. **Il Giardino dei Ciliegi** — Cannara
   - slug: `il-giardino-dei-ciliegi-cannara`
   - indirizzo: Via Massera, 6, 06181 Assisi PG
6. **Il Vialetto** — Cannara
   - slug: `il-vialetto-cannara`
   - indirizzo: Parco XXV Aprile, 15B, 06033 Cannara PG
7. **La Dolce Vista Umbria Bed&Breakfast** — Cannara
   - slug: `la-dolce-vista-umbria-bed-breakfast-cannara`
   - indirizzo: Vocabolo Conversino, 164/a, 06033 Cannara PG
8. **La Residenza Di Bacco** — Cannara
   - slug: `la-residenza-di-bacco-cannara`
   - indirizzo: Via Collemancio, 25, 06033 Cannara PG
9. **Le Vecchie Mura B & B** — Cannara
   - slug: `le-vecchie-mura-b-b-cannara`
   - indirizzo: Piazza S. Matteo, 22, 06033 Cannara PG
10. **Palazzo delle Signorine** — Cannara
   - slug: `palazzo-delle-signorine-cannara`
   - indirizzo: Piazza Corte Vecchia, 12, 06033 Cannara PG
11. **Arancioamaro Ristorante Hotel** — Cannero Riviera
   - slug: `arancioamaro-ristorante-hotel-cannero-riviera`
   - indirizzo: Viale delle Magnolie, 13, 28821 Cannero Riviera VB
12. **B&B Casa al Mulino** — Cannero Riviera
   - slug: `b-b-casa-al-mulino-cannero-riviera`
   - indirizzo: Via del Molino, 4, 28821 Cannero Riviera VB
13. **B&B Casa Banano** — Cannero Riviera
   - slug: `b-b-casa-banano-cannero-riviera`
   - indirizzo: Via Guglielmo Marconi, 30, 28821 Cannero Riviera VB
14. **B&B Casa Forster** — Cannero Riviera
   - slug: `b-b-casa-forster-cannero-riviera`
   - indirizzo: Via Panoramica, 10, 28821 Cannero Riviera VB
15. **Franziska's Place** — Cannero Riviera
   - slug: `franziska-s-place-cannero-riviera`
   - indirizzo: Via Roma, 60, 28821 Cannero Riviera VB
16. **Hapimag Resort Cannero** — Cannero Riviera
   - slug: `hapimag-resort-cannero-cannero-riviera`
   - indirizzo: Viale delle Magnolie, 7, 28821 Cannero Riviera VB
17. **Hotel Cannero** — Cannero Riviera
   - slug: `hotel-cannero-cannero-riviera`
   - indirizzo: Piazza Umberto I, 2, 28821 Cannero Riviera VB
18. **Hotel Cannobio** — Cannero Riviera
   - slug: `hotel-cannobio-cannero-riviera`
   - indirizzo: Piazza Vittorio Emanuele III, 6, 28822 Cannobio VB
19. **Hotel del Fiume** — Cannero Riviera
   - slug: `hotel-del-fiume-cannero-riviera`
   - indirizzo: Via Darbedo, 26, 28822 Cannobio VB
20. **Hotel La Rondinella** — Cannero Riviera
   - slug: `hotel-la-rondinella-cannero-riviera`
   - indirizzo: Via Lodovico Sacchetti, 50, 28821 Cannero Riviera VB
21. **Hotel Villa delle Palme** — Cannero Riviera
   - slug: `hotel-villa-delle-palme-cannero-riviera`
   - indirizzo: Via Darbedo, 12, 28822 Cannobio VB
22. **Relais Villa Margherita** — Cannero Riviera
   - slug: `relais-villa-margherita-cannero-riviera`
   - indirizzo: Via Giovanni Polli, 11, 28824 Oggebbio VB
23. **Residenza dei fiori** — Cannero Riviera
   - slug: `residenza-dei-fiori-cannero-riviera`
   - indirizzo: Piazza Umberto Primo, 2, 28821 Cannero Riviera VB
24. **Villa Angelina - Lake View Dreams** — Cannero Riviera
   - slug: `villa-angelina-lake-view-dreams-cannero-riviera`
   - indirizzo: Via Ludovico, Viale Lodovico Sacchetti, 44/46, 28821 Cannero Riviera VB
25. **VILLA MARIA Hotel Residence** — Cannero Riviera
   - slug: `villa-maria-hotel-residence-cannero-riviera`
   - indirizzo: Via Ceroni, 1, 28822 Cannobio VB
26. **Villa Morissolina Bed & Breakfast Ristorante** — Cannero Riviera
   - slug: `villa-morissolina-bed-breakfast-ristorante-cannero-riviera`
   - indirizzo: Contrada San Mauro 6, 28826 Trarego VB
27. **Agriturismo Casa Casoni** — Canneto Pavese
   - slug: `agriturismo-casa-casoni-canneto-pavese`
   - indirizzo: Via Costiolo, 71, 27044 Canneto Pavese PV
28. **B&B La Mimosa e Il Gelsomino** — Canneto Pavese
   - slug: `b-b-la-mimosa-e-il-gelsomino-canneto-pavese`
   - indirizzo: Via della Chiesa, 9, 27044 Canneto Pavese PV
29. **La casa tra i vigneti** — Canneto Pavese
   - slug: `la-casa-tra-i-vigneti-canneto-pavese`
   - indirizzo: Frazione Castelrotto, 1, 27047 Montecalvo Versiggia PV
30. **Dimora e Arte - Bed and Breakfast** — Canneto sull'Oglio
   - slug: `dimora-e-arte-bed-and-breakfast-canneto-sull-oglio`
   - indirizzo: Via Giuseppe Garibaldi, 81, 46013 Canneto sull'Oglio MN
31. **Hotel Bifi** — Canneto sull'Oglio
   - slug: `hotel-bifi-canneto-sull-oglio`
   - indirizzo: S.S. Sabbionetana 420 km 36, Via Monte Sabotino, 420, 26041 Casalmaggiore CR
32. **Antico Borgo B&B Cannobio** — Cannobio
   - slug: `antico-borgo-b-b-cannobio-cannobio`
   - indirizzo: Via A. Giovanola, 75, 28822 Cannobio VB
33. **B&B 21** — Cannobio
   - slug: `b-b-21-cannobio`
   - indirizzo: Via 14 Marzo, 21, 28822 Cannobio VB
34. **B&B a Cannobio: Azalea** — Cannobio
   - slug: `b-b-a-cannobio-azalea-cannobio`
   - indirizzo: Casali Masserecci, 35, 28822 Cannobio VB
35. **B&B Casa Edenrock** — Cannobio
   - slug: `b-b-casa-edenrock-cannobio`
   - indirizzo: via Casali Edenrock 2, 28822 Cannobio VB