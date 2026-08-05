# Blocco 308/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Santu Petru Di Giuseppe Depratis** — Bortigiadas
   - slug: `agriturismo-santu-petru-di-giuseppe-depratis-bortigiadas`
   - indirizzo: Localita' Capruleddu, 07038 Trinità d'Agultu e Vignola OT
2. **Agriturismo Spinalva** — Bortigiadas
   - slug: `agriturismo-spinalva-bortigiadas`
   - indirizzo: Loc. Spinalva s.s. sassari tempio, n. 672 km. 22, 07030 Martis SS
3. **azienda agricola: LI PIREDDI** — Bortigiadas
   - slug: `azienda-agricola-li-pireddi-bortigiadas`
   - indirizzo: località SAN BIAGIO, 07020 Aglientu OT
4. **B&B da Donatella** — Bortigiadas
   - slug: `b-b-da-donatella-bortigiadas`
   - indirizzo: Viale Sardegna, 262, 07030 Santa Maria Coghinas SS
5. **La Casa di Spinosella Agriturismo** — Bortigiadas
   - slug: `la-casa-di-spinosella-agriturismo-bortigiadas`
   - indirizzo: Via Giuseppe Mazzini, 07039 La Muddizza SS
6. **MONTE ISTULARGIU Azienda Agricola & Agriturismo** — Bortigiadas
   - slug: `monte-istulargiu-azienda-agricola-agriturismo-bortigiadas`
   - indirizzo: Valledoria, Loc. Monte Istulargiu, 07039 Castelsardo SS
7. **Domu Montegrappa 54** — Borutta
   - slug: `domu-montegrappa-54-borutta`
   - indirizzo: Via Monte Grappa, 54, 07100 Sassari SS
8. **I Migliori Anni** — Borutta
   - slug: `i-migliori-anni-borutta`
   - indirizzo: Viale Italia, 41, 07100 Sassari SS
9. **Agriturismo & Agricampeggio Il Mulino** — Borzonasca
   - slug: `agriturismo-agricampeggio-il-mulino-borzonasca`
   - indirizzo: Località Casali, 16041 Borzonasca GE
10. **Agriturismo il sogno** — Borzonasca
   - slug: `agriturismo-il-sogno-borzonasca`
   - indirizzo: Via Cona, 94, 16045 Lorsica GE
11. **B&B Shanti House** — Borzonasca
   - slug: `b-b-shanti-house-borzonasca`
   - indirizzo: Loc. Zanoni Alto, 2, 16041 Borzonasca GE
12. **Bed and Breakfast "LA QUIETE"** — Borzonasca
   - slug: `bed-and-breakfast-la-quiete-borzonasca`
   - indirizzo: Via Giovanni Battista Prandina, 4, 16041 Borzonasca GE
13. **Blu Hotel** — Borzonasca
   - slug: `blu-hotel-borzonasca`
   - indirizzo: Via dei Devoto, 149, 16033 Lavagna GE
14. **Casa del Pellegrino** — Borzonasca
   - slug: `casa-del-pellegrino-borzonasca`
   - indirizzo: Località Montallegro Salita Al Santuario, 15, 16035 Rapallo GE
15. **Casa Florinda** — Borzonasca
   - slug: `casa-florinda-borzonasca`
   - indirizzo: Via Fiordalisi, 2, 16035 Rapallo GE
16. **Elsa House** — Borzonasca
   - slug: `elsa-house-borzonasca`
   - indirizzo: SP37, 14, 16046 Mezzanego GE
17. **Farmhouse Castagnola 64** — Borzonasca
   - slug: `farmhouse-castagnola-64-borzonasca`
   - indirizzo: Via Castagnola, 64, 16040 Campo di Ne GE
18. **Hotel & Trattoria Le Caravelle** — Borzonasca
   - slug: `hotel-trattoria-le-caravelle-borzonasca`
   - indirizzo: Via Como, 31, 16033 Lavagna GE
19. **Hotel Alba** — Borzonasca
   - slug: `hotel-alba-borzonasca`
   - indirizzo: Via Giacomo Matteotti, 36, 16033 Lavagna GE
20. **Hotel Ancora Riviera** — Borzonasca
   - slug: `hotel-ancora-riviera-borzonasca`
   - indirizzo: Via dei Devoto, 81, 16033 Lavagna GE
21. **Hotel dell'Orto** — Borzonasca
   - slug: `hotel-dell-orto-borzonasca`
   - indirizzo: Piazza Nostra Signora dell'Orto, 3, 16043 Chiavari GE
22. **Hotel Ferrari** — Borzonasca
   - slug: `hotel-ferrari-borzonasca`
   - indirizzo: Corso De Michiel, 57, 16043 Chiavari GE
23. **Hotel Italia e Lido** — Borzonasca
   - slug: `hotel-italia-e-lido-borzonasca`
   - indirizzo: Lungomare Castello, 1, 16035 Rapallo GE
24. **Hotel Mondial** — Borzonasca
   - slug: `hotel-mondial-borzonasca`
   - indirizzo: Via Ottavio Ferraretto, 10, 16035 Rapallo GE
25. **Hotel Sud Est** — Borzonasca
   - slug: `hotel-sud-est-borzonasca`
   - indirizzo: Via Gaetano Previati, 200, 16033 Lavagna GE
26. **Hotel Valentino** — Borzonasca
   - slug: `hotel-valentino-borzonasca`
   - indirizzo: Via Aurelia, 793/A, 16033 Lavagna GE
27. **HOTEL ZOAGLI** — Borzonasca
   - slug: `hotel-zoagli-borzonasca`
   - indirizzo: Piazza della Stazione, 5, 16030 Zoagli GE
28. **Villa Paggi country house** — Borzonasca
   - slug: `villa-paggi-country-house-borzonasca`
   - indirizzo: Localita' Simoni, 1, 16042 Carasco GE
29. **Affittacamere Su Recreu ‘e Mare** — Bosa
   - slug: `affittacamere-su-recreu-e-mare-bosa`
   - indirizzo: Via C. Colombo, 106, 09089 Bosa OR
30. **Aghinas albergo diffuso** — Bosa
   - slug: `aghinas-albergo-diffuso-bosa`
   - indirizzo: Piazza del Carmine, 17, 09089 Bosa OR
31. **Albergo Ristorante Miramare Di Lotti Santina** — Bosa
   - slug: `albergo-ristorante-miramare-di-lotti-santina-bosa`
   - indirizzo: Via C. Colombo, 2, 09089 Bosa Marina OR
32. **B&B "Villa Elisa"** — Bosa
   - slug: `b-b-villa-elisa-bosa`
   - indirizzo: Viale Gen. Ibba, 17, 09089 Bosa OR
33. **B&B Bomarosa** — Bosa
   - slug: `b-b-bomarosa-bosa`
   - indirizzo: Via Efisio Cugia, 25, 09089 Bosa OR
34. **B&B Vista Fiume** — Bosa
   - slug: `b-b-vista-fiume-bosa`
   - indirizzo: Lungo Temo Alcide De Gasperi, 85, 09089 Bosa OR
35. **Blu B&B Bosa** — Bosa
   - slug: `blu-b-b-bosa-bosa`
   - indirizzo: Via Montenegro, 20, 09089 Bosa OR