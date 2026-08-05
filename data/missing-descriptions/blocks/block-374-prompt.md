# Blocco 374/500 — 35 strutture senza descrizione IT

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

1. **Lo Scrigno B&B** — Calvi
   - slug: `lo-scrigno-b-b-calvi`
   - indirizzo: Via Francesco di Benedetto, 27, 83038 Montemiletto AV
2. **Agriturismo Il Collicello** — Calvi dell'Umbria
   - slug: `agriturismo-il-collicello-calvi-dell-umbria`
   - indirizzo: Strada di Calledro, 1/A, 05035 Narni TR
3. **Agriturismo Isola Verde** — Calvi dell'Umbria
   - slug: `agriturismo-isola-verde-calvi-dell-umbria`
   - indirizzo: Strada Narni Sant'Urbano, 89, 05035 Narni TR
4. **Agriturismo La Nocciolaia** — Calvi dell'Umbria
   - slug: `agriturismo-la-nocciolaia-calvi-dell-umbria`
   - indirizzo: Strada di Montini, 3, 05035 Narni TR
5. **Agriturismo Tenuta San Savino delle Rocchette** — Calvi dell'Umbria
   - slug: `agriturismo-tenuta-san-savino-delle-rocchette-calvi-dell-umbria`
   - indirizzo: Vocabolo S. Savino, 15, 05032 Calvi dell'Umbria TR
6. **Albergo Umbria –ristorante Il Convento** — Calvi dell'Umbria
   - slug: `albergo-umbria-ristorante-il-convento-calvi-dell-umbria`
   - indirizzo: Via Roma, 72, 05030 Otricoli TR
7. **B&B delle Erbe** — Calvi dell'Umbria
   - slug: `b-b-delle-erbe-calvi-dell-umbria`
   - indirizzo: Piazza delle Erbe 2, 05032 Calvi Dell'umbria TR
8. **B&B IL CASTELLO** — Calvi dell'Umbria
   - slug: `b-b-il-castello-calvi-dell-umbria`
   - indirizzo: Centro S. Vito, 13, 05035 S. Vito di Narni (TR) TR
9. **B&B L'Uliveto** — Calvi dell'Umbria
   - slug: `b-b-l-uliveto-calvi-dell-umbria`
   - indirizzo: Via Maglianese, 22, 02040 Colleberardo RI
10. **Giardino Casa Selciata** — Calvi dell'Umbria
   - slug: `giardino-casa-selciata-calvi-dell-umbria`
   - indirizzo: Vocabolo Selciata, 29A, 05032 Calvi dell'Umbria TR
11. **Hotel Ristorante La Pergola** — Calvi dell'Umbria
   - slug: `hotel-ristorante-la-pergola-calvi-dell-umbria`
   - indirizzo: Strada Flaminia Km 63,900 Località, 02046 Frangellini RI
12. **I Montanari Agrivillage** — Calvi dell'Umbria
   - slug: `i-montanari-agrivillage-calvi-dell-umbria`
   - indirizzo: Strada dei Montanari, 2, 05035 Itieli TR
13. **Il Merangolo Agriturismo** — Calvi dell'Umbria
   - slug: `il-merangolo-agriturismo-calvi-dell-umbria`
   - indirizzo: Strada Provinciale 54, 02040 Montebuono RI
14. **Il Piccolo Borgo di Pezza Dario** — Calvi dell'Umbria
   - slug: `il-piccolo-borgo-di-pezza-dario-calvi-dell-umbria`
   - indirizzo: Vocabolo Passatore, 16, 05032 Calvi dell'Umbria TR
15. **La Casa di Helena** — Calvi dell'Umbria
   - slug: `la-casa-di-helena-calvi-dell-umbria`
   - indirizzo: Via Vici, 32, 05039 Stroncone TR
16. **Le Residenze da Stefano e Annalisa** — Calvi dell'Umbria
   - slug: `le-residenze-da-stefano-e-annalisa-calvi-dell-umbria`
   - indirizzo: Vocabolo S. Vito,15, 05032 Calvi Dell'umbria TR
17. **Park Hotel Sabina** — Calvi dell'Umbria
   - slug: `park-hotel-sabina-calvi-dell-umbria`
   - indirizzo: Via Flaminia km 65, 02046 Magliano Sabina RI
18. **Tenuta Santa Cristina** — Calvi dell'Umbria
   - slug: `tenuta-santa-cristina-calvi-dell-umbria`
   - indirizzo: Vocabolo Santa Cristina, 02046 Calvi dell'Umbria TR
19. **Villa Gabriella B&B** — Calvi dell'Umbria
   - slug: `villa-gabriella-b-b-calvi-dell-umbria`
   - indirizzo: Voc San Silvestro, 5, 05032 Calvi dell'Umbria TR
20. **Alessia Sweet Home** — Calvi Risorta
   - slug: `alessia-sweet-home-calvi-risorta`
   - indirizzo: Via IV Novembre, 57, 81043 Sant'Angelo In Formis CE
21. **B&B La Finestra Sul Vulcano** — Calvi Risorta
   - slug: `b-b-la-finestra-sul-vulcano-calvi-risorta`
   - indirizzo: Piazza Nicola Amore, 82, 81035 Roccamonfina CE
22. **Il Moro Bianco** — Calvi Risorta
   - slug: `il-moro-bianco-calvi-risorta`
   - indirizzo: Via Cavone, 6, 81057 Teano CE
23. **INFORMIS B&B - Bed & Breakfast Capua** — Calvi Risorta
   - slug: `informis-b-b-bed-breakfast-capua-calvi-risorta`
   - indirizzo: Via Trebula, 2, 81043 Sant'Angelo In Formis CE
24. **Tenuta Cerreto** — Calvi Risorta
   - slug: `tenuta-cerreto-calvi-risorta`
   - indirizzo: Località Cerreto, 81042 Calvi Risorta CE
25. **Agriturismo i Gessi** — Calvignano
   - slug: `agriturismo-i-gessi-calvignano`
   - indirizzo: Via Oratorio, 38, 27050 Corvino San Quirico PV
26. **B&B Il Pozzo** — Calvignano
   - slug: `b-b-il-pozzo-calvignano`
   - indirizzo: Via V. Emanuele, 60, 27040 Montalto Pavese PV
27. **Castello di Mornico Losana** — Calvignano
   - slug: `castello-di-mornico-losana-calvignano`
   - indirizzo: Via Cesare Bevilacqua, 2, 27040 Mornico PV
28. **HOTEL LE VIGNE DI CORVINO - Ristorante Pizzeria** — Calvignano
   - slug: `hotel-le-vigne-di-corvino-ristorante-pizzeria-calvignano`
   - indirizzo: Via Emilia, 42, 27050 Fumo, Corvino San Quirico PV
29. **B&B Villa in Campagna** — Calvisano
   - slug: `b-b-villa-in-campagna-calvisano`
   - indirizzo: di, Via J.F. Kennedy, 74/b, 25012 Viadana Bresciana BS
30. **Hotel Primavera** — Calvisano
   - slug: `hotel-primavera-calvisano`
   - indirizzo: Viale Cavour, 36, 25015 Desenzano del Garda BS
31. **Locanda La Torre B&B** — Calvisano
   - slug: `locanda-la-torre-b-b-calvisano`
   - indirizzo: Via Dante, 6, 25012 Calvisano BS
32. **Agriturismo Antica Masseria Fioretti** — Calvizzano
   - slug: `agriturismo-antica-masseria-fioretti-calvizzano`
   - indirizzo: V. Tirone, 13, 80145 Napoli NA
33. **Agriturismo Balestrieri** — Calvizzano
   - slug: `agriturismo-balestrieri-calvizzano`
   - indirizzo: Via Parroco Giustino Russolillo, 110, 80126 Napoli NA
34. **Agriturismo Country House "Rifugio Degli Dei"** — Calvizzano
   - slug: `agriturismo-country-house-rifugio-degli-dei-calvizzano`
   - indirizzo: Via Arienzo, 43, 84017 Positano SA
35. **Agriturismo il Turuziello** — Calvizzano
   - slug: `agriturismo-il-turuziello-calvizzano`
   - indirizzo: Via Turiello, 5, 80061 Massa Lubrense NA