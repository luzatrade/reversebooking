# Blocco 199/500 — 35 strutture senza descrizione IT

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

1. **Beb ORCHIDEA** — Bagnoli Irpino
   - slug: `beb-orchidea-bagnoli-irpino`
   - indirizzo: Via della Libera, 33, 83048 Montella AV
2. **Country House " Il Papavero"** — Bagnoli Irpino
   - slug: `country-house-il-papavero-bagnoli-irpino`
   - indirizzo: Contrada Quercia di Loica, 83043 Bagnoli Irpino AV
3. **Country House Nonna Pina Di Belingo Pascal** — Bagnoli Irpino
   - slug: `country-house-nonna-pina-di-belingo-pascal-bagnoli-irpino`
   - indirizzo: Contrada S. Donato, 3, 83043 Bagnoli Irpino AV
4. **Hotel Cervialto** — Bagnoli Irpino
   - slug: `hotel-cervialto-bagnoli-irpino`
   - indirizzo: Via Serroncelli, 12, 83043 Laceno AV
5. **Hotel Colucci** — Bagnoli Irpino
   - slug: `hotel-colucci-bagnoli-irpino`
   - indirizzo: Via Giuseppe Passaro, 11, 83051 Nusco AV
6. **Hotel ristorante La Lucciola** — Bagnoli Irpino
   - slug: `hotel-ristorante-la-lucciola-bagnoli-irpino`
   - indirizzo: Hotel ristorante La Lucciola, Via dei Prati, 2, 83043 Bagnoli Irpino AV
7. **Hotel Ristorante Locanda degli Hirpini di Rosiello Angelica** — Bagnoli Irpino
   - slug: `hotel-ristorante-locanda-degli-hirpini-di-rosiel-bagnoli-irpino`
   - indirizzo: Via delle Sorgenti Tronola, 3, 83043 Laceno AV
8. **Hotel Ristorante Zia Carmela** — Bagnoli Irpino
   - slug: `hotel-ristorante-zia-carmela-bagnoli-irpino`
   - indirizzo: Via Michelangelo Cianciulli, 23, 83048 Montella AV
9. **I Tre Ulivi** — Bagnoli Irpino
   - slug: `i-tre-ulivi-bagnoli-irpino`
   - indirizzo: Strada Vicinale Gaudo s/n, 83052 Paternopoli AV
10. **Irpinia BikeHouse** — Bagnoli Irpino
   - slug: `irpinia-bikehouse-bagnoli-irpino`
   - indirizzo: Via Santa Lucia, 59, 83048 Montella AV
11. **Masseria Boutique** — Bagnoli Irpino
   - slug: `masseria-boutique-bagnoli-irpino`
   - indirizzo: Via SS salvatore, 2, 83048 Montella AV
12. **Ristorante Locanda La Frasca** — Bagnoli Irpino
   - slug: `ristorante-locanda-la-frasca-bagnoli-irpino`
   - indirizzo: Via Serroncelli, 10, 83043 Bagnoli Irpino AV
13. **Villa Rizzo Resort & Spa** — Bagnoli Irpino
   - slug: `villa-rizzo-resort-spa-bagnoli-irpino`
   - indirizzo: Via Gerardo Napoletano, 2, 84099 San Cipriano Picentino SA
14. **Agriturismo Cascina Loghetto** — Bagnolo Cremasco
   - slug: `agriturismo-cascina-loghetto-bagnolo-cremasco`
   - indirizzo: Via Milano, 42, 26013 Crema CR
15. **Agriturismo La Boschina** — Bagnolo Cremasco
   - slug: `agriturismo-la-boschina-bagnolo-cremasco`
   - indirizzo: Via Solera, 10/A, 26010 Ripalta Cremasca CR
16. **B&B Countryhousecrema** — Bagnolo Cremasco
   - slug: `b-b-countryhousecrema-bagnolo-cremasco`
   - indirizzo: Via Treviglio, 11, 26013 Crema CR
17. **B&B Villa Benvenuti** — Bagnolo Cremasco
   - slug: `b-b-villa-benvenuti-bagnolo-cremasco`
   - indirizzo: Via Torre, 20, 26013 Crema CR
18. **Hotel Albergo Relais Vimercati - Dimora storica a Crema** — Bagnolo Cremasco
   - slug: `hotel-albergo-relais-vimercati-dimora-storica-a-bagnolo-cremasco`
   - indirizzo: Via Vimercati, 13, 26013 Crema CR
19. **I Colori della Vita - Centro Benessere & Pernottamento** — Bagnolo Cremasco
   - slug: `i-colori-della-vita-centro-benessere-pernottamen-bagnolo-cremasco`
   - indirizzo: Via Crema, 54, 26010 Bagnolo Cremasco CR
20. **Park Hotel Residence** — Bagnolo Cremasco
   - slug: `park-hotel-residence-bagnolo-cremasco`
   - indirizzo: Via IV Novembre, 51, 26013 Crema CR
21. **Podere Ombrianello** — Bagnolo Cremasco
   - slug: `podere-ombrianello-bagnolo-cremasco`
   - indirizzo: Via Ombrianello, 21, 26013 Ombriano CR
22. **Albergo San Rocco** — Bagnolo del Salento
   - slug: `albergo-san-rocco-bagnolo-del-salento`
   - indirizzo: Via Roma, 100, 73020 Bagnolo del Salento LE
23. **Antico Aranceto B&B** — Bagnolo del Salento
   - slug: `antico-aranceto-b-b-bagnolo-del-salento`
   - indirizzo: P.zza San Giorgio, 32, 73020 Bagnolo del Salento LE
24. **B&B Salento Vacanze** — Bagnolo del Salento
   - slug: `b-b-salento-vacanze-bagnolo-del-salento`
   - indirizzo: nr., Via F. Summonte, 10, 73024 Maglie LE
25. **Book and Bed** — Bagnolo del Salento
   - slug: `book-and-bed-bagnolo-del-salento`
   - indirizzo: Via Lubelli, 13, 73024 Maglie LE
26. **Borgoincorte** — Bagnolo del Salento
   - slug: `borgoincorte-bagnolo-del-salento`
   - indirizzo: Via Zaca, 18, 73025 Martano LE
27. **Derentò B&B** — Bagnolo del Salento
   - slug: `derento-b-b-bagnolo-del-salento`
   - indirizzo: Via Croce Savoia, 46D, 73020 Bagnolo del Salento LE
28. **FRUIT Village Otranto - TORCITO RESORT Sport Village** — Bagnolo del Salento
   - slug: `fruit-village-otranto-torcito-resort-sport-villa-bagnolo-del-salento`
   - indirizzo: Largo Vittorio Veneto, 73020 Cannole LE
29. **Hotel Rodia Salento** — Bagnolo del Salento
   - slug: `hotel-rodia-salento-bagnolo-del-salento`
   - indirizzo: Via Vittorio Emanuele, 19, 73024 Maglie LE
30. **Il Corallo del Salento** — Bagnolo del Salento
   - slug: `il-corallo-del-salento-bagnolo-del-salento`
   - indirizzo: Via Paolo VI, 13, 73030 Vignacastrisi LE
31. **Le Murge Del Salento B&B** — Bagnolo del Salento
   - slug: `le-murge-del-salento-b-b-bagnolo-del-salento`
   - indirizzo: Via Sardegna, 13, 73020 Uggiano la Chiesa LE
32. **Luci del Salento Guest House** — Bagnolo del Salento
   - slug: `luci-del-salento-guest-house-bagnolo-del-salento`
   - indirizzo: Via Giuseppina Delli Ponti, 73, 73020 Scorrano LE
33. **Palazzo Villani Lubelli** — Bagnolo del Salento
   - slug: `palazzo-villani-lubelli-bagnolo-del-salento`
   - indirizzo: Via S. Giovanni, 58, 73020 Cannole LE
34. **Sanlu Hotel** — Bagnolo del Salento
   - slug: `sanlu-hotel-bagnolo-del-salento`
   - indirizzo: Via Provinciale Martano, 73020 Serrano LE
35. **SerranoRoom** — Bagnolo del Salento
   - slug: `serranoroom-bagnolo-del-salento`
   - indirizzo: Corso Margherita, 108, 73020 Serrano LE