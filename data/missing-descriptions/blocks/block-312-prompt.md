# Blocco 312/500 — 35 strutture senza descrizione IT

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

1. **Le due matote Relais** — Bossolasco
   - slug: `le-due-matote-relais-bossolasco`
   - indirizzo: Località Curine Pratofreddo, Pratofreddo 1, 12060, Bossolasco CN
2. **Locanda del Borgo** — Bossolasco
   - slug: `locanda-del-borgo-bossolasco`
   - indirizzo: Borgata Castello, 5, 12077 Prunetto CN
3. **Locanda Ferrante Con Camere** — Bossolasco
   - slug: `locanda-ferrante-con-camere-bossolasco`
   - indirizzo: Piazza S. Giorgio, 4, 12050 Niella Belbo CN
4. **Maison Otto** — Bossolasco
   - slug: `maison-otto-bossolasco`
   - indirizzo: Via Umberto I 67, Bossolasco 12060, Cuneo, 12060 Bossolasco CN
5. **Residence Radice Verde** — Bossolasco
   - slug: `residence-radice-verde-bossolasco`
   - indirizzo: Via Airali, 8, 12050 Cissone CN
6. **Agriturismo La Casa di Botro** — Botricello
   - slug: `agriturismo-la-casa-di-botro-botricello`
   - indirizzo: Via Benigno Zaccagnini, 2, 88070 Botricello CZ
7. **Albamaris Guest House** — Botricello
   - slug: `albamaris-guest-house-botricello`
   - indirizzo: Via Rosa Dei Venti, 88070 Botricello CZ
8. **B&B Da Agostino** — Botricello
   - slug: `b-b-da-agostino-botricello`
   - indirizzo: Via Magna Grecia, 73, 88070 Botricello CZ
9. **B&b La Scogliera** — Botricello
   - slug: `b-b-la-scogliera-botricello`
   - indirizzo: Via Pizzicarola, 6, 88841 Le Castella KR
10. **Bruno Bed & Breakfast** — Botricello
   - slug: `bruno-bed-breakfast-botricello`
   - indirizzo: Viale Taranto, 19/c, 88050 Cropani Marina CZ
11. **Hotel Park Jonio** — Botricello
   - slug: `hotel-park-jonio-botricello`
   - indirizzo: Via Mare Ionio, 32, 88842 Steccato di Cutro KR
12. **Hotel Ristorante Il Corsaro T.L.M. Sas** — Botricello
   - slug: `hotel-ristorante-il-corsaro-t-l-m-sas-botricello`
   - indirizzo: Via Volandrino, 88841 Isola di Capo Rizzuto KR
13. **La Casa di Peppino e Lucia** — Botricello
   - slug: `la-casa-di-peppino-e-lucia-botricello`
   - indirizzo: Via Taranto, 31, 88070 Botricello CZ
14. **Marina del Marchese Beach Resort** — Botricello
   - slug: `marina-del-marchese-beach-resort-botricello`
   - indirizzo: Via Marina di Bruni III, 88070 Botricello CZ
15. **Nirvana Club Village** — Botricello
   - slug: `nirvana-club-village-botricello`
   - indirizzo: Contrada Magliacane, 40, 88050 Belcastro CZ
16. **Papavero Giallo** — Botricello
   - slug: `papavero-giallo-botricello`
   - indirizzo: Via Fosso, 6, 88841 Le Castella KR
17. **B&B del Benessere Beauty & Wellness** — Botrugno
   - slug: `b-b-del-benessere-beauty-wellness-botrugno`
   - indirizzo: Via Gallipoli, 64, 73024 Maglie LE
18. **B&B Francesca** — Botrugno
   - slug: `b-b-francesca-botrugno`
   - indirizzo: Vico Malvicina 2 Via Malvicina ,66 ( di fronte, 73020 Scorrano LE
19. **B&B Li Curti** — Botrugno
   - slug: `b-b-li-curti-botrugno`
   - indirizzo: Via Madonna della Luce, 9, 73020 Scorrano LE
20. **B&B Mediterraneo** — Botrugno
   - slug: `b-b-mediterraneo-botrugno`
   - indirizzo: Via Martiri D'Otranto, 13, 73024 Maglie LE
21. **B&B Sideris** — Botrugno
   - slug: `b-b-sideris-botrugno`
   - indirizzo: SP237, 10, 73030 Surano LE
22. **Casa Cardignan** — Botrugno
   - slug: `casa-cardignan-botrugno`
   - indirizzo: Via Santi Filippo e Giacomo, 9, 73030 Diso LE
23. **Corte Dei Granai Meeting & SPA - Raro Rooms Collection** — Botrugno
   - slug: `corte-dei-granai-meeting-spa-raro-rooms-collecti-botrugno`
   - indirizzo: 479X+WRR, 73024 Maglie LE
24. **Don Totu - Dimora Storica** — Botrugno
   - slug: `don-totu-dimora-storica-botrugno`
   - indirizzo: Via Crocefisso, 10, 73020 San Cassiano LE
25. **Giardino Frannicola** — Botrugno
   - slug: `giardino-frannicola-botrugno`
   - indirizzo: Antonio, Via A. Galati, 4, 73024 Maglie LE
26. **kamilia guestrooms** — Botrugno
   - slug: `kamilia-guestrooms-botrugno`
   - indirizzo: Via Roma, 99/A, 73020 San Cassiano LE
27. **La luna nel pozzo** — Botrugno
   - slug: `la-luna-nel-pozzo-botrugno`
   - indirizzo: Via Tripoli, 34A, 73020 Botrugno LE
28. **La Nicchiarica** — Botrugno
   - slug: `la-nicchiarica-botrugno`
   - indirizzo: Strada Comunale Conca Marau, 4, 73036 Muro Leccese LE
29. **La Pigna Blu** — Botrugno
   - slug: `la-pigna-blu-botrugno`
   - indirizzo: Via Goffredo Mameli, 7, 73020 Botrugno LE
30. **Tenuta Tresca Suites - Dimora Storica** — Botrugno
   - slug: `tenuta-tresca-suites-dimora-storica-botrugno`
   - indirizzo: Via IV Novembre, 2, 73020 San Cassiano LE
31. **Villa Sitrie** — Botrugno
   - slug: `villa-sitrie-botrugno`
   - indirizzo: Via Vittorio Veneto, 151, 73036 Muro Leccese LE
32. **B&B Villa & Garden** — Bottanuco
   - slug: `b-b-villa-garden-bottanuco`
   - indirizzo: Via S. Rocco, 7, 24042 Capriate San Gervasio BG
33. **Cantina Al Silter - NatuRooms** — Bottanuco
   - slug: `cantina-al-silter-naturooms-bottanuco`
   - indirizzo: Via Trieste, 27H, 24042 Capriate San Gervasio BG
34. **GuglielMotel** — Bottanuco
   - slug: `guglielmotel-bottanuco`
   - indirizzo: Via delle Industrie, 1, 24041 Brembate BG
35. **Le Vigne sull'Adda** — Bottanuco
   - slug: `le-vigne-sull-adda-bottanuco`
   - indirizzo: Via G. Parini, 24040 Bottanuco BG