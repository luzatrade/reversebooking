# Blocco 386/500 — 35 strutture senza descrizione IT

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

1. **Corte Colombarola** — Campione d'Italia
   - slug: `corte-colombarola-campione-d-italia`
   - indirizzo: Via Campione, 12, 46031 Campione MN
2. **Gatto in Vigna** — Campione d'Italia
   - slug: `gatto-in-vigna-campione-d-italia`
   - indirizzo: Via Cucco, 1, 31058 Susegana TV
3. **Grand Hotel Campione** — Campione d'Italia
   - slug: `grand-hotel-campione-campione-d-italia`
   - indirizzo: Via Matteo da Campione, 2, 22061 Campione d'Italia CO
4. **Hotel Campione** — Campione d'Italia
   - slug: `hotel-campione-campione-d-italia`
   - indirizzo: Via Campione 62, 6816 Bissone, Svizzera
5. **Masseria Camarda** — Campione d'Italia
   - slug: `masseria-camarda-campione-d-italia`
   - indirizzo: Via Turco Camarda, 31, 72013 Ceglie Messapica BR
6. **My Italy Selection | Agriturismo Italy | Agriturismo Tuscany** — Campione d'Italia
   - slug: `my-italy-selection-agriturismo-italy-agriturismo-campione-d-italia`
   - indirizzo: P.za Cacciatori delle Alpi, 2, 22100 Como CO
7. **Residenza Lago di Lugano - Appartamenti in affitto a Bissone** — Campione d'Italia
   - slug: `residenza-lago-di-lugano-appartamenti-in-affitto-campione-d-italia`
   - indirizzo: Via Campione 65, 6816 Bissone, Svizzera
8. **Suite Lago & Relax** — Campione d'Italia
   - slug: `suite-lago-relax-campione-d-italia`
   - indirizzo: Via Totone, 36, 22061 Campione d'Italia CO
9. **Albergo Verda Val** — Campitello di Fassa
   - slug: `albergo-verda-val-campitello-di-fassa`
   - indirizzo: Strada, Strèda de Greva, 37, 38031 Campitello di Fassa TN
10. **Alpenhotel Panorama** — Campitello di Fassa
   - slug: `alpenhotel-panorama-campitello-di-fassa`
   - indirizzo: Str. Ciadenac, 7, 38031 Campitello di Fassa TN
11. **Aritz Garni B&B** — Campitello di Fassa
   - slug: `aritz-garni-b-b-campitello-di-fassa`
   - indirizzo: Strèda sot Ciapiaa, 6, 38031 Campitello di Fassa TN
12. **B&B Garnì Villa Campitello** — Campitello di Fassa
   - slug: `b-b-garni-villa-campitello-campitello-di-fassa`
   - indirizzo: Strèda Roma, 2, 38032 Campitello di Fassa TN
13. **Chalet MARCORA** — Campitello di Fassa
   - slug: `chalet-marcora-campitello-di-fassa`
   - indirizzo: Streda Dolomites, 99/101, 38031 Campitello di Fassa TN
14. **Golden Park Resort** — Campitello di Fassa
   - slug: `golden-park-resort-campitello-di-fassa`
   - indirizzo: Strèda del Mèsc de Novacela, 341, 38030 Fontanazzo TN
15. **Hotel Alpi** — Campitello di Fassa
   - slug: `hotel-alpi-campitello-di-fassa`
   - indirizzo: Dolomites, 24, 38031 Campitello di Fassa TN
16. **Hotel Crepes De Sela** — Campitello di Fassa
   - slug: `hotel-crepes-de-sela-campitello-di-fassa`
   - indirizzo: Dolomites, 22, 38031 Campitello di Fassa TN
17. **Hotel Diamant Campitello** — Campitello di Fassa
   - slug: `hotel-diamant-campitello-campitello-di-fassa`
   - indirizzo: Strèda sot Ciapiaa, 5, 38031 Campitello di Fassa TN
18. **Hotel Flora Alpina** — Campitello di Fassa
   - slug: `hotel-flora-alpina-campitello-di-fassa`
   - indirizzo: Streda Dolomites, 8, 38031 Campitello di Fassa TN
19. **Hotel Gran Chalet Soreghes** — Campitello di Fassa
   - slug: `hotel-gran-chalet-soreghes-campitello-di-fassa`
   - indirizzo: Strada De, Via Pent de Sera, 18, 38031 Campitello di Fassa TN
20. **Hotel Gran Paradis** — Campitello di Fassa
   - slug: `hotel-gran-paradis-campitello-di-fassa`
   - indirizzo: Streda Dolomites, 6, 38031 Campitello di Fassa TN
21. **Hotel LADINA HOLIDAY** — Campitello di Fassa
   - slug: `hotel-ladina-holiday-campitello-di-fassa`
   - indirizzo: Strèda de Pecei, 3, 38031 Campitello di Fassa TN
22. **Hotel Medil** — Campitello di Fassa
   - slug: `hotel-medil-campitello-di-fassa`
   - indirizzo: Via Pent de Sera, 16, 38031 Campitello di Fassa TN
23. **Hotel Ramon** — Campitello di Fassa
   - slug: `hotel-ramon-campitello-di-fassa`
   - indirizzo: Strèda sot Ciapiaa, 4, 38031 Campitello di Fassa TN
24. **Hotel Salvan con spa e piscina** — Campitello di Fassa
   - slug: `hotel-salvan-con-spa-e-piscina-campitello-di-fassa`
   - indirizzo: Streda Dolomites, 10, 38031 Campitello di Fassa TN
25. **Hotel San Giusto Campitello** — Campitello di Fassa
   - slug: `hotel-san-giusto-campitello-campitello-di-fassa`
   - indirizzo: Strèda Roma, 1, 38031 Campitello di Fassa TN
26. **Hotel Sella Ronda** — Campitello di Fassa
   - slug: `hotel-sella-ronda-campitello-di-fassa`
   - indirizzo: Via Pent de Sera, 36, 38031 Campitello di Fassa TN
27. **Hotel Stella Montis** — Campitello di Fassa
   - slug: `hotel-stella-montis-campitello-di-fassa`
   - indirizzo: Str. de Col da Fae, 56, 38031 Campitello di Fassa TN
28. **Park Hotel Fedora** — Campitello di Fassa
   - slug: `park-hotel-fedora-campitello-di-fassa`
   - indirizzo: Str. Veia, 18, 38031 Campitello di Fassa TN
29. **Albergo Rex di Misantoni G. e A. & C.** — Campli
   - slug: `albergo-rex-di-misantoni-g-e-a-c-campli`
   - indirizzo: Via Cristoforo Colombo, 64100 Teramo TE
30. **Albergo Ristorante Zio Mamo** — Campli
   - slug: `albergo-ristorante-zio-mamo-campli`
   - indirizzo: Via Giuseppe Garibaldi, 8, 64015 Nereto TE
31. **B&B Margarita D'Austria** — Campli
   - slug: `b-b-margarita-d-austria-campli`
   - indirizzo: Via Claudio Ferrucci, 10, 64012 Campli TE
32. **Europa Hotel** — Campli
   - slug: `europa-hotel-campli`
   - indirizzo: Viale Europa, 22, 64015 Nereto TE
33. **HOTEL ABRUZZI Teramo** — Campli
   - slug: `hotel-abruzzi-teramo-campli`
   - indirizzo: Viale Giuseppe Mazzini, 18, 64100 Teramo TE
34. **Hotel Remigio I** — Campli
   - slug: `hotel-remigio-i-campli`
   - indirizzo: SP76, 64010 Località San Giacomo - Monte, TE
35. **Hotel Ristorante Fortezza** — Campli
   - slug: `hotel-ristorante-fortezza-campli`
   - indirizzo: Corso Giuseppe Mazzini, 24, 64010 Civitella del Tronto TE