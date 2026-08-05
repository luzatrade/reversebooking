# Blocco 368/500 — 35 strutture senza descrizione IT

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

1. **Alba Bed & Breakfast Melendugno** — Calimera
   - slug: `alba-bed-breakfast-melendugno-calimera`
   - indirizzo: SP Melendugno-Lecce, km 1.5, 73026 Melendugno LE
2. **Azzurra Aparthotel** — Calimera
   - slug: `azzurra-aparthotel-calimera`
   - indirizzo: Viale Virgilio, 94, 73021 Calimera LE
3. **B&B Pietramare** — Calimera
   - slug: `b-b-pietramare-calimera`
   - indirizzo: Via Roma, 26, 73026 Melendugno LE
4. **Casa Calasso B&B** — Calimera
   - slug: `casa-calasso-b-b-calimera`
   - indirizzo: Via Giorgio Castriota 136, 73021 Calimera LE
5. **Dimora Assuntina Martano** — Calimera
   - slug: `dimora-assuntina-martano-calimera`
   - indirizzo: Vico Stretto, 14, 73025 Martano LE
6. **Dimora Storica Casa Sicuro B&B** — Calimera
   - slug: `dimora-storica-casa-sicuro-b-b-calimera`
   - indirizzo: Via Cosimo Moschettini, 3, 73025 Martano LE
7. **Il Geranio B&B** — Calimera
   - slug: `il-geranio-b-b-calimera`
   - indirizzo: Via Santa Lucia, 23, 73020 Calimera LE
8. **Il Giardino dei Gelsi** — Calimera
   - slug: `il-giardino-dei-gelsi-calimera`
   - indirizzo: Via Calimera, 73010 Caprarica di Lecce LE
9. **L'antico Palazzo** — Calimera
   - slug: `l-antico-palazzo-calimera`
   - indirizzo: Via Sant'Anna, 5, 73029 Vernole LE
10. **La Petrusa B&B** — Calimera
   - slug: `la-petrusa-b-b-calimera`
   - indirizzo: Strada Provinciale Vernole-Calimera, 73029 Vernole LE
11. **Masseria Rifisa Agriresort** — Calimera
   - slug: `masseria-rifisa-agriresort-calimera`
   - indirizzo: Via Martiri D'Otranto, 73010 Caprarica di Lecce LE
12. **Mya - soggiorno di lusso** — Calimera
   - slug: `mya-soggiorno-di-lusso-calimera`
   - indirizzo: Via Borgagne, 45, 73026 Melendugno LE
13. **Ospiti di Mimma B&B** — Calimera
   - slug: `ospiti-di-mimma-b-b-calimera`
   - indirizzo: Via Vittorio Veneto, 46, 73021 Calimera LE
14. **Salento Ada's House B&B** — Calimera
   - slug: `salento-ada-s-house-b-b-calimera`
   - indirizzo: Via Raffaello Sanzio, 10, 73026 Melendugno LE
15. **Sea & Blue Sky 1A** — Calimera
   - slug: `sea-blue-sky-1a-calimera`
   - indirizzo: Via Brizio Marra, 24/int. 1A, 73021 Calimera LE
16. **Tenuta Masseria Del Gallo** — Calimera
   - slug: `tenuta-masseria-del-gallo-calimera`
   - indirizzo: Via Europa, 162, 73021 Calimera LE
17. **Zia Cesaria** — Calimera
   - slug: `zia-cesaria-calimera`
   - indirizzo: Via Costantinopoli, 56, 73021 Calimera LE
18. **Agriturismo Bellofatto** — Calitri
   - slug: `agriturismo-bellofatto-calitri`
   - indirizzo: Contrada Pianomarotta, 18, 83057 Torella dei Lombardi AV
19. **Agriturismo La Bontà** — Calitri
   - slug: `agriturismo-la-bonta-calitri`
   - indirizzo: Contrada Piano del Casino, 85054 Muro Lucano PZ
20. **Agriturismo La Dimora dei Cavalieri** — Calitri
   - slug: `agriturismo-la-dimora-dei-cavalieri-calitri`
   - indirizzo: c.da Tataseppe, n, 1, 85010 Vaglio Basilicata PZ
21. **Bed & Breakfast Palazzo Zampaglione** — Calitri
   - slug: `bed-breakfast-palazzo-zampaglione-calitri`
   - indirizzo: Via Pasquale Berrilli, 10, 83045 Calitri AV
22. **Casa Vacanze Magnolia 42 Calitri** — Calitri
   - slug: `casa-vacanze-magnolia-42-calitri-calitri`
   - indirizzo: Via Immacolata Concezione, 42, 83045 Calitri AV
23. **Country House Le Strettole** — Calitri
   - slug: `country-house-le-strettole-calitri`
   - indirizzo: Via Giacomo Puccini Località Strettole, Calitri AV, 83045 Calitri AV
24. **Il Giardino** — Calitri
   - slug: `il-giardino-calitri`
   - indirizzo: Località Prato, 84024 Contursi Terme SA
25. **La Vecchia Fattoria Agriturismo - cucina contadina** — Calitri
   - slug: `la-vecchia-fattoria-agriturismo-cucina-contadina-calitri`
   - indirizzo: Via Piana Romana, 82020 Pietrelcina BN
26. **La Vista B&B** — Calitri
   - slug: `la-vista-b-b-calitri`
   - indirizzo: La Vista B&B, Via Stanco, 83045 Calitri AV
27. **Le Talee Agriturismo** — Calitri
   - slug: `le-talee-agriturismo-calitri`
   - indirizzo: Contrada Querce Nuove, 17/A, 83047 Lioni AV
28. **Pensione Eden Ristorante** — Calizzano
   - slug: `pensione-eden-ristorante-calizzano`
   - indirizzo: Via Filippo Leale, 7, 17020 Calizzano SV
29. **Black-rose** — Callabiana
   - slug: `black-rose-callabiana`
   - indirizzo: Frazione Bianco, 32, 13821 Camandona BI
30. **B&B al Borgo** — Calliano
   - slug: `b-b-al-borgo-calliano`
   - indirizzo: Via di Glolo, 12, 38078 San Lorenzo Dorsino TN
31. **B&B CA' DEI NONNI DI BARBERO CHIARA** — Calliano
   - slug: `b-b-ca-dei-nonni-di-barbero-chiara-calliano`
   - indirizzo: Via Asti, 124, 14031 Calliano Monferrato AT
32. **B&B CHIARA** — Calliano
   - slug: `b-b-chiara-calliano`
   - indirizzo: Via al Camp del Rosari, 4, 38076 Calavino TN
33. **B&B Diele** — Calliano
   - slug: `b-b-diele-calliano`
   - indirizzo: Via Trieste, 35, 38068 Rovereto TN
34. **Bed & Breakfast Nettuno** — Calliano
   - slug: `bed-breakfast-nettuno-calliano`
   - indirizzo: Via Gian Domenico Romagnosi, 26, 38122 Trento TN
35. **Bed and breakfast - ca ' Antica** — Calliano
   - slug: `bed-and-breakfast-ca-antica-calliano`
   - indirizzo: V.le Trento, 2, 38068 Rovereto TN