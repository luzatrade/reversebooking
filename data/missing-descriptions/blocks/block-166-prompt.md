# Blocco 166/500 — 35 strutture senza descrizione IT

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

1. **La Casa di Nonna Lina** — Ascoli Satriano
   - slug: `la-casa-di-nonna-lina-ascoli-satriano`
   - indirizzo: Via Irpinia, 3/A, 71040 Ordona FG
2. **Le Stanze del Castello b&b** — Ascoli Satriano
   - slug: `le-stanze-del-castello-b-b-ascoli-satriano`
   - indirizzo: Via Castello, 43, 71022 Ascoli Satriano FG
3. **Residence Affittacamere The Big Family** — Ascoli Satriano
   - slug: `residence-affittacamere-the-big-family-ascoli-satriano`
   - indirizzo: Via Ortanova, 6A, 71022 Ascoli Satriano FG
4. **Residenza dei Reali** — Ascoli Satriano
   - slug: `residenza-dei-reali-ascoli-satriano`
   - indirizzo: Via Bertrando dei Reali, 11, 71023 Bovino FG
5. **Agriturismo La Ripa** — Ascrea
   - slug: `agriturismo-la-ripa-ascrea`
   - indirizzo: Località Santa Maria, 00010 Montorio Romano RM
6. **Agriturismo La Terrazza su Farfa** — Ascrea
   - slug: `agriturismo-la-terrazza-su-farfa-ascrea`
   - indirizzo: Via San Filippo, 27, 02031 Castelnuovo di Farfa RI
7. **Agriturismo Le Cascine** — Ascrea
   - slug: `agriturismo-le-cascine-ascrea`
   - indirizzo: Località Campigliano Via Rio, 02020 Castel di Tora RI
8. **B&B da Odila** — Ascrea
   - slug: `b-b-da-odila-ascrea`
   - indirizzo: Via Carpinetti, 1, 02030 Poggio Nativo RI
9. **B&B In Sabina** — Ascrea
   - slug: `b-b-in-sabina-ascrea`
   - indirizzo: Viale Roma, 13, 02030 Poggio Nativo RI
10. **B&B La Casetta sul Lago** — Ascrea
   - slug: `b-b-la-casetta-sul-lago-ascrea`
   - indirizzo: Piazza Borghese, 8, 02020 Colle di Tora RI
11. **B&B Nonna Assunta** — Ascrea
   - slug: `b-b-nonna-assunta-ascrea`
   - indirizzo: Via Turanense, Loc. Casali Cervia, 02020 Collegiove RI
12. **C'era Una Volta Guest House Affittacamere** — Ascrea
   - slug: `c-era-una-volta-guest-house-affittacamere-ascrea`
   - indirizzo: Località Vaecorte, SNC, 02020 Colle di Tora RI
13. **Hotel Ristorante Bar Turano** — Ascrea
   - slug: `hotel-ristorante-bar-turano-ascrea`
   - indirizzo: Via Turanense, 50, 02020 Castel di Tora RI
14. **Il Mastro del Lago** — Ascrea
   - slug: `il-mastro-del-lago-ascrea`
   - indirizzo: Via Turanense, 2, 02020 Paganico Sabino RI
15. **La casa sul Fiordo** — Ascrea
   - slug: `la-casa-sul-fiordo-ascrea`
   - indirizzo: Via Costa Aspo 20-22, Via Costa, 02020 Paganico Sabino RI
16. **La Tenuta Resort Agricolo** — Ascrea
   - slug: `la-tenuta-resort-agricolo-ascrea`
   - indirizzo: Loc Valle snc, Fraz, 02030 Collelungo RI
17. **Tenuta Del Casale Del Jazz** — Ascrea
   - slug: `tenuta-del-casale-del-jazz-ascrea`
   - indirizzo: Via Vallocchie, 3, 02040 Salisano RI
18. **Turano Resort** — Ascrea
   - slug: `turano-resort-ascrea`
   - indirizzo: Via Parodi, 93, 02020 Colle di Tora RI
19. **Albergo Garnì Rendola** — Asiago
   - slug: `albergo-garni-rendola-asiago`
   - indirizzo: Via Rendola, 41, 36012 Asiago VI
20. **Albergo Ristorante Valbella** — Asiago
   - slug: `albergo-ristorante-valbella-asiago`
   - indirizzo: Via Monte Valbella, 38, 36032 Gallio VI
21. **Albergo Rutzer** — Asiago
   - slug: `albergo-rutzer-asiago`
   - indirizzo: Via Berga, 130, 36012 Asiago VI
22. **Asiago Sporting Hotel & SPA** — Asiago
   - slug: `asiago-sporting-hotel-spa-asiago`
   - indirizzo: Corso IV Novembre, 77, 36012 Asiago VI
23. **B&B Asiago Keple** — Asiago
   - slug: `b-b-asiago-keple-asiago`
   - indirizzo: Via Jacopo Scajaro, 6, 36012 Asiago VI
24. **B&B Happy Days Asiago** — Asiago
   - slug: `b-b-happy-days-asiago-asiago`
   - indirizzo: Via IV Novembre, 22, 36010 Mezzaselva VI
25. **B&B Locanda Stella** — Asiago
   - slug: `b-b-locanda-stella-asiago`
   - indirizzo: Piazza S. Giovanni, 10, 36010 Camporovere VI
26. **B&B Stella Alpina** — Asiago
   - slug: `b-b-stella-alpina-asiago`
   - indirizzo: Contrada Ciscati, 29-92, 36046 Lusiana Conco VI
27. **Begale - Rifugio Urbano - Appartamenti** — Asiago
   - slug: `begale-rifugio-urbano-appartamenti-asiago`
   - indirizzo: Via Albaredo, 26, 36010 Rotzo VI
28. **Casa Ekharle - Guesthouse** — Asiago
   - slug: `casa-ekharle-guesthouse-asiago`
   - indirizzo: Via Albaredo, 122, 36010 Rotzo VI
29. **Hotel Croce Bianca** — Asiago
   - slug: `hotel-croce-bianca-asiago`
   - indirizzo: Corso IV Novembre, 30, 36012 Asiago VI
30. **Hotel Europa Residence** — Asiago
   - slug: `hotel-europa-residence-asiago`
   - indirizzo: Corso IV Novembre, 65, 36012 Asiago VI
31. **Hotel Milano** — Asiago
   - slug: `hotel-milano-asiago`
   - indirizzo: Via Brigata Liguria, 15, 36012 Asiago VI
32. **Hotel Paradiso** — Asiago
   - slug: `hotel-paradiso-asiago`
   - indirizzo: Via Monte Val Bella, 33, 36012 Asiago VI
33. **Hotel Ristorante Alpi - Foza** — Asiago
   - slug: `hotel-ristorante-alpi-foza-asiago`
   - indirizzo: Via Roma, 14, 36010 Foza VI
34. **La Locanda** — Asiago
   - slug: `la-locanda-asiago`
   - indirizzo: Via Monte Val Bella, 31, 36012 Asiago VI
35. **Villa Bonomo Charme Hotel** — Asiago
   - slug: `villa-bonomo-charme-hotel-asiago`
   - indirizzo: Via Pennar, 322, 36012 Asiago VI