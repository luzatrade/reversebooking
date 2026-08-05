# Blocco 92/500 — 35 strutture senza descrizione IT

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

1. **B&B La Casetta** — Altopascio
   - slug: `b-b-la-casetta-altopascio`
   - indirizzo: Via di Mazzone, 10, 55015 Montecarlo LU
2. **B&B La Ginestra** — Altopascio
   - slug: `b-b-la-ginestra-altopascio`
   - indirizzo: Via Ponticelli, 185, 56022 Orentano PI
3. **B&b mansarda sulla francigena** — Altopascio
   - slug: `b-b-mansarda-sulla-francigena-altopascio`
   - indirizzo: Via Romana, 22, 55011 Altopascio LU
4. **Corte Capitani B&B** — Altopascio
   - slug: `corte-capitani-b-b-altopascio`
   - indirizzo: Via Romana, 172, 55012 Capannori LU
5. **Da Beppe Hotel Ristorante Bar** — Altopascio
   - slug: `da-beppe-hotel-ristorante-bar-altopascio`
   - indirizzo: Via Vittorio Veneto, 27, 51013 Chiesina Uzzanese PT
6. **Hotel Cavalieri Del Tau** — Altopascio
   - slug: `hotel-cavalieri-del-tau-altopascio`
   - indirizzo: Via Gavinana, 56, 55011 Altopascio LU
7. **Hotel Le Cerbaie 3 Stelle Superior** — Altopascio
   - slug: `hotel-le-cerbaie-3-stelle-superior-altopascio`
   - indirizzo: Via della Sibolla, 15, 55011 Altopascio LU
8. **Hotel One** — Altopascio
   - slug: `hotel-one-altopascio`
   - indirizzo: Via Roma, 86, 55011 Altopascio LU
9. **Hotel Paola** — Altopascio
   - slug: `hotel-paola-altopascio`
   - indirizzo: Via Francesca Romea, 24, 55011 Altopascio LU
10. **Hotel Villa La Nina** — Altopascio
   - slug: `hotel-villa-la-nina-altopascio`
   - indirizzo: Via di S. Martino, 55, 55015 Mencarini LU
11. **La porta di San Rocco** — Altopascio
   - slug: `la-porta-di-san-rocco-altopascio`
   - indirizzo: Via dell'Ortaccio, 3, 55011 Altopascio LU
12. **Motel Parco delle Rose** — Altopascio
   - slug: `motel-parco-delle-rose-altopascio`
   - indirizzo: Via Privata delle Rose, 4, 51013 Chiesina Uzzanese PT
13. **NIGHT ROOM** — Altopascio
   - slug: `night-room-altopascio`
   - indirizzo: Loc. Cerbaie 43, Via delle Cerbaie, 55011 Altopascio LU
14. **Sibolla Holidays** — Altopascio
   - slug: `sibolla-holidays-altopascio`
   - indirizzo: Località Ferranti, 20, 55011 Altopascio LU
15. **Ulivo House** — Altopascio
   - slug: `ulivo-house-altopascio`
   - indirizzo: Località Ginori, 4, 55011 Altopascio LU
16. **Villa Miky - Via Francigena Altopascio** — Altopascio
   - slug: `villa-miky-via-francigena-altopascio-altopascio`
   - indirizzo: V. Ulivi, 156, 56022 Villa Campanile PI
17. **Villa Nadar** — Altopascio
   - slug: `villa-nadar-altopascio`
   - indirizzo: Via Provinciale del Biagioni, 64, 55011 Spianate LU
18. **Agritur La Sabbionara** — Altopiano della Vigolana
   - slug: `agritur-la-sabbionara-altopiano-della-vigolana`
   - indirizzo: Via Sabbionare, 6, 38049 Altopiano della Vigolana TN
19. **Agritur La Val** — Altopiano della Vigolana
   - slug: `agritur-la-val-altopiano-della-vigolana`
   - indirizzo: Via Bersaglio, 24, 38049 Vigolo Vattaro TN
20. **AGRITUR SEDICI - Bed and Breakfast** — Altopiano della Vigolana
   - slug: `agritur-sedici-bed-and-breakfast-altopiano-della-vigolana`
   - indirizzo: Via dei Pianari, 5, 38050 Tenna TN
21. **Agriturismo Corte delle Mele** — Altopiano della Vigolana
   - slug: `agriturismo-corte-delle-mele-altopiano-della-vigolana`
   - indirizzo: A,, Via del Roro, 12, 38052 Caldonazzo TN
22. **albergo AL BOSCO** — Altopiano della Vigolana
   - slug: `albergo-al-bosco-altopiano-della-vigolana`
   - indirizzo: Via Nordola sopra a Centa, 1, 38049 Altopiano della Vigolana TN
23. **Albergo Cinzia** — Altopiano della Vigolana
   - slug: `albergo-cinzia-altopiano-della-vigolana`
   - indirizzo: Via Vicenza, 15, 38049 Altopiano della Vigolana TN
24. **Azienda agricola e agritur Maso Flonkeri** — Altopiano della Vigolana
   - slug: `azienda-agricola-e-agritur-maso-flonkeri-altopiano-della-vigolana`
   - indirizzo: Via Mandola, 37, 38049 Altopiano della Vigolana TN
25. **Berry House** — Altopiano della Vigolana
   - slug: `berry-house-altopiano-della-vigolana`
   - indirizzo: Località Maso del Giudice, 2, 38049 Vigolo Vattaro, TN
26. **Botton d'oro delle Dolomiti** — Altopiano della Vigolana
   - slug: `botton-d-oro-delle-dolomiti-altopiano-della-vigolana`
   - indirizzo: Via Doss del Bue, 29, 38049 Vattaro TN
27. **Casa Vigolana Natural Garnì** — Altopiano della Vigolana
   - slug: `casa-vigolana-natural-garni-altopiano-della-vigolana`
   - indirizzo: Via 3 Novembre, 35, 38049 Vigolo Vattaro TN
28. **Grand Hotel Astoria** — Altopiano della Vigolana
   - slug: `grand-hotel-astoria-altopiano-della-vigolana`
   - indirizzo: Piazza Italia, 1, 38046 Lavarone TN
29. **HOTEL ALPENROSE ristorante SPA** — Altopiano della Vigolana
   - slug: `hotel-alpenrose-ristorante-spa-altopiano-della-vigolana`
   - indirizzo: Via Doss del Bue, 52, 38049 Vattaro TN
30. **Hotel Campregheri** — Altopiano della Vigolana
   - slug: `hotel-campregheri-altopiano-della-vigolana`
   - indirizzo: Frazione Campregheri, 34, 38049 Altopiano della Vigolana TN
31. **Hotel du Lac Parc & Residence** — Altopiano della Vigolana
   - slug: `hotel-du-lac-parc-residence-altopiano-della-vigolana`
   - indirizzo: Via Trieste, 32, 38046 Lavarone TN
32. **IL CROGIOLO Bed and Breakfast** — Altopiano della Vigolana
   - slug: `il-crogiolo-bed-and-breakfast-altopiano-della-vigolana`
   - indirizzo: Str. del Paradis, 38049 Altopiano della Vigolana TN
33. **La Corte di San Rocco** — Altopiano della Vigolana
   - slug: `la-corte-di-san-rocco-altopiano-della-vigolana`
   - indirizzo: Via al Bosco della Città, 2, 38123 Trento TN
34. **Residence Hotel da Remo** — Altopiano della Vigolana
   - slug: `residence-hotel-da-remo-altopiano-della-vigolana`
   - indirizzo: Residence Hotel Da Remo, Via Alberè, 56, 38050 Tenna TN
35. **RistorantehotelGilda** — Altopiano della Vigolana
   - slug: `ristorantehotelgilda-altopiano-della-vigolana`
   - indirizzo: Via Brenta, 22, 38052 Caldonazzo TN