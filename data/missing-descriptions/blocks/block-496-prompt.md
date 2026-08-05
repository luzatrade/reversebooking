# Blocco 496/500 — 35 strutture senza descrizione IT

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

1. **Casa Ollie** — San Gimignano
   - slug: `casa-ollie-san-gimignano`
   - indirizzo: Località Pugiano, n16, 53037 Castel San Gimignano SI, Italia
2. **Duccio Nacci Rooms-guest house** — San Gimignano
   - slug: `duccio-nacci-rooms-guest-house-san-gimignano`
   - indirizzo: Via S. Stefano, 6, 53037 San Gimignano SI, Italia
3. **Hotel Bel Soggiorno** — San Gimignano
   - slug: `hotel-bel-soggiorno-san-gimignano`
   - indirizzo: Via S. Giovanni, 91, 53037 San Gimignano SI, Italia
4. **Hotel Da Graziano - San Gimignano** — San Gimignano
   - slug: `hotel-da-graziano-san-gimignano-san-gimignano`
   - indirizzo: Via Giacomo Matteotti, 39/A, 53037 San Gimignano SI, Italia
5. **Hotel la Cisterna** — San Gimignano
   - slug: `hotel-la-cisterna-san-gimignano`
   - indirizzo: Piazza Della Cisterna, 23, 53037 San Gimignano SI, Italia
6. **Hotel Leon Bianco** — San Gimignano
   - slug: `hotel-leon-bianco-san-gimignano`
   - indirizzo: Piazza Della Cisterna, 13, 53037 San Gimignano SI, Italia
7. **Hotel San Michele** — San Gimignano
   - slug: `hotel-san-michele-san-gimignano`
   - indirizzo: Località Strada, Via Martiri di Citerna, 14, 53037 San Gimignano SI, Italia
8. **Hotel Villa Belvedere San Gimignano** — San Gimignano
   - slug: `hotel-villa-belvedere-san-gimignano-san-gimignano`
   - indirizzo: Via Dante, 14, 53037 San Gimignano SI, Italia
9. **Le Undici Lune** — San Gimignano
   - slug: `le-undici-lune-san-gimignano`
   - indirizzo: Via Mainardi, 9, 53037 San Gimignano SI, Italia
10. **Palazzo al Torrione Bed & Breakfast** — San Gimignano
   - slug: `palazzo-al-torrione-bed-breakfast-san-gimignano`
   - indirizzo: Via di Berignano, 76, 53037 San Gimignano SI, Italia
11. **Palazzo Buonaccorsi Residenza d'Epoca** — San Gimignano
   - slug: `palazzo-buonaccorsi-residenza-d-epoca-san-gimignano`
   - indirizzo: Via S. Matteo, 95, 53037 San Gimignano SI, Italia
12. **Podere Sant'Elena Bed Breakfast San Gimignano** — San Gimignano
   - slug: `podere-sant-elena-bed-breakfast-san-gimignano-san-gimignano`
   - indirizzo: Località Racciano, 42/A, 53037 San Gimignano SI, Italia
13. **Primetta House** — San Gimignano
   - slug: `primetta-house-san-gimignano`
   - indirizzo: Via Giacomo Matteotti, 39, 53037 San Gimignano SI, Italia
14. **Relais Santa Chiara Hotel by Double Hospitality** — San Gimignano
   - slug: `relais-santa-chiara-hotel-by-double-hospitality-san-gimignano`
   - indirizzo: Via Giacomo Matteotti, 15, 53037 San Gimignano SI, Italia
15. **Terra d Ombra Bed&Breakfast** — San Gimignano
   - slug: `terra-d-ombra-bed-breakfast-san-gimignano`
   - indirizzo: Via Piandornella, 13, 53037 San Gimignano SI, Italia
16. **Villa Alba Bed & Breakfast** — San Gimignano
   - slug: `villa-alba-bed-breakfast-san-gimignano`
   - indirizzo: Via Dante, 15, 53037 San Gimignano SI, Italia
17. **Amphitrite Suites Santorini** — Santorini
   - slug: `amphitrite-suites-santorini-santorini`
   - indirizzo: Βόθωνας 847 00
18. **Arotron Santorini** — Santorini
   - slug: `arotron-santorini-santorini`
   - indirizzo: Pyrgos Kallistis 847 00
19. **Art Hotel Santorini** — Santorini
   - slug: `art-hotel-santorini-santorini`
   - indirizzo: Pyrgos Kallistis 847 00
20. **Deep Earth Villas** — Santorini
   - slug: `deep-earth-villas-santorini`
   - indirizzo: Exo Gonia 847 00
21. **Hotel Daedalous** — Santorini
   - slug: `hotel-daedalous-santorini`
   - indirizzo: Santorini 847 00
22. **Hotel Orizontes Santorini** — Santorini
   - slug: `hotel-orizontes-santorini-santorini`
   - indirizzo: Pyrgos Kallistis 847 00
23. **Kalisperis Hotel** — Santorini
   - slug: `kalisperis-hotel-santorini`
   - indirizzo: Βόθωνας, Epar.Od. Firon-Ormou Perissis, Mesaria 847 00
24. **Kallos Imar Hotel** — Santorini
   - slug: `kallos-imar-hotel-santorini`
   - indirizzo: Mesaria 847 00
25. **Lilium Hotel Santorini** — Santorini
   - slug: `lilium-hotel-santorini-santorini`
   - indirizzo: Fira, Φηρά 847 00
26. **Petit Palace Suites** — Santorini
   - slug: `petit-palace-suites-santorini`
   - indirizzo: Fira 847 00
27. **Santorini Luxury Suites - EXO** — Santorini
   - slug: `santorini-luxury-suites-exo-santorini`
   - indirizzo: Exo Gonia 847 00
28. **Santorini Vinery Mansion** — Santorini
   - slug: `santorini-vinery-mansion-santorini`
   - indirizzo: Exo Gonia 847 00
29. **Smy Santorini Suites & Villas** — Santorini
   - slug: `smy-santorini-suites-villas-santorini`
   - indirizzo: Pyrgos Kallistis 847 00
30. **Villa Danezis** — Santorini
   - slug: `villa-danezis-santorini`
   - indirizzo: Epar.Od. Mesarias-Archeas Thiras, Thira 847 00
31. **Villa Manos** — Santorini
   - slug: `villa-manos-santorini`
   - indirizzo: Karterádos 847 00
32. **14bnb** — Sassari
   - slug: `14bnb-sassari`
   - indirizzo: Via Giorgio Asproni, 14b, 07100 Sassari SS, Italia
33. **B.I.C. (bnb in centro)** — Sassari
   - slug: `b-i-c-bnb-in-centro-sassari`
   - indirizzo: Via Usai, 19, 07100 Sassari SS, Italia
34. **B&B 2000 - Bed and Breakfast** — Sassari
   - slug: `b-b-2000-bed-and-breakfast-sassari`
   - indirizzo: V. Giovanni Maria Angioy, 55, 07100 Sassari SS, Italia
35. **B&B Dell' Abbaddu** — Sassari
   - slug: `b-b-dell-abbaddu-sassari`
   - indirizzo: Via Abbadu, 13, 07100 Sassari SS, Italia