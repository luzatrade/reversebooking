# Blocco 204/500 — 35 strutture senza descrizione IT

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

1. **B&B Il Casale di Agliè** — Bairo
   - slug: `b-b-il-casale-di-aglie-bairo`
   - indirizzo: Via Principe Amedeo, 40, 10011 Agliè TO
2. **B&B Il Laghetto** — Bairo
   - slug: `b-b-il-laghetto-bairo`
   - indirizzo: Via S. Grato, 33, 10010 Torre Canavese TO
3. **B&B La Cascina** — Bairo
   - slug: `b-b-la-cascina-bairo`
   - indirizzo: Vicolo Campodoneo, 9, 10011 Agliè TO
4. **B&B la libellula** — Bairo
   - slug: `b-b-la-libellula-bairo`
   - indirizzo: Via Santuario, 10, 10080 Cintano TO
5. **B&B Torre Cives** — Bairo
   - slug: `b-b-torre-cives-bairo`
   - indirizzo: Via Muriaglio, 18, 10080 Vidracco TO
6. **Bed&breakfast Mezzaluna** — Bairo
   - slug: `bed-breakfast-mezzaluna-bairo`
   - indirizzo: Via Gianni Micheletto, N.58, 10080 Feletto TO
7. **Casa Omnia B&B** — Bairo
   - slug: `casa-omnia-b-b-bairo`
   - indirizzo: Strada Provinciale 61 per, 10080 Issiglio TO
8. **Hotel Motel & Residence "S" - Front** — Bairo
   - slug: `hotel-motel-residence-s-front-bairo`
   - indirizzo: Via Giovanni, Via Roveda, 10, 10070 Front TO
9. **Il Vecchio Comune B&B** — Bairo
   - slug: `il-vecchio-comune-b-b-bairo`
   - indirizzo: Via Chiuminatto, 14, 10080 Cintano TO
10. **Locanda La Guienda** — Bairo
   - slug: `locanda-la-guienda-bairo`
   - indirizzo: Via S. Grato, 15, 10010 Torre Canavese TO
11. **Mulino di Bairo** — Bairo
   - slug: `mulino-di-bairo-bairo`
   - indirizzo: Via Molino, 6, 10010 Bairo TO
12. **OstellOrto** — Bairo
   - slug: `ostellorto-bairo`
   - indirizzo: Via delle Scuole, 37, 10010 Silva TO
13. **Residenza del Lago** — Bairo
   - slug: `residenza-del-lago-bairo`
   - indirizzo: Via Roma, 48Bis, 10010 Candia Canavese TO
14. **Ristorante Albergo Tre Re** — Bairo
   - slug: `ristorante-albergo-tre-re-bairo`
   - indirizzo: Piazza Martiri Della Liberta', 27, 10181 Castellamonte TO
15. **Agriturismo Ca' del Ciuco** — Baiso
   - slug: `agriturismo-ca-del-ciuco-baiso`
   - indirizzo: Via Case Martini, 6, 42030 Vezzano sul Crostolo RE
16. **Agriturismo di Sordiglio** — Baiso
   - slug: `agriturismo-di-sordiglio-baiso`
   - indirizzo: Via Paullo Sordiglio, 26, 42034 Sordiglio RE
17. **Agriturismo La Borgaccia** — Baiso
   - slug: `agriturismo-la-borgaccia-baiso`
   - indirizzo: Via, Baiso RE IT, 42031 Ca' D'orio RE
18. **Agriturismo San Valentino** — Baiso
   - slug: `agriturismo-san-valentino-baiso`
   - indirizzo: Via Rontano, 35, 42014 Castellarano RE
19. **B&B Canossalpaca** — Baiso
   - slug: `b-b-canossalpaca-baiso`
   - indirizzo: Via Ceredolo dei coppi 149, 42026 Canossa RE
20. **Bed and Breakfast CASTELLO SAN ROMANO** — Baiso
   - slug: `bed-and-breakfast-castello-san-romano-baiso`
   - indirizzo: Via Castello di S. Romano, 42031 Baiso RE
21. **Borgo Cadonega Relais & Spa** — Baiso
   - slug: `borgo-cadonega-relais-spa-baiso`
   - indirizzo: Via Cadonega, 7, 42030 Viano RE
22. **Castello di Viano - Ristorante - Room & Suite** — Baiso
   - slug: `castello-di-viano-ristorante-room-suite-baiso`
   - indirizzo: Via Castello, 9, 42030 Viano RE
23. **Cherry House B&B** — Baiso
   - slug: `cherry-house-b-b-baiso`
   - indirizzo: Via Orazio Vecchi, 22, 41040 Polinago MO
24. **Fattoria Branciana** — Baiso
   - slug: `fattoria-branciana-baiso`
   - indirizzo: Via Rossena, 93, 42026 Canossa RE
25. **Hotel Matilde** — Baiso
   - slug: `hotel-matilde-baiso`
   - indirizzo: Piazza del Tricolore, 3, 42033 Carpineti RE
26. **IL Golfino** — Baiso
   - slug: `il-golfino-baiso`
   - indirizzo: Via Telarolo, 12, 42014 Castellarano RE
27. **Locanda SottolaLuna** — Baiso
   - slug: `locanda-sottolaluna-baiso`
   - indirizzo: Via S. Polo, 4, 42030 Viano RE
28. **Prà de Mandè** — Baiso
   - slug: `pra-de-mande-baiso`
   - indirizzo: Via Prato Mandeto, 4, 42030 Viano RE
29. **affittacamere Le camere del Corso** — Bajardo
   - slug: `affittacamere-le-camere-del-corso-bajardo`
   - indirizzo: Corso G. Garibaldi, 138, 18038 Sanremo IM
30. **Andres GuestHouse Sanremo** — Bajardo
   - slug: `andres-guesthouse-sanremo-bajardo`
   - indirizzo: Via Piave, 9, 18038 Sanremo IM
31. **B&B Le Camelie del Bosco** — Bajardo
   - slug: `b-b-le-camelie-del-bosco-bajardo`
   - indirizzo: Reg. Gian Lui, 2A, 18031 Bajardo IM
32. **Hotel Ariston Montecarlo** — Bajardo
   - slug: `hotel-ariston-montecarlo-bajardo`
   - indirizzo: Corso Giuseppe Mazzini, 507, 18038 Sanremo IM
33. **Hotel Sanremo** — Bajardo
   - slug: `hotel-sanremo-bajardo`
   - indirizzo: Corso Augusto Mombello, 50, 18038 Sanremo IM
34. **Hotel Villa La Brise** — Bajardo
   - slug: `hotel-villa-la-brise-bajardo`
   - indirizzo: Corso Giuseppe Mazzini, 199, 18038 Sanremo IM
35. **Sakura Inn Sanremo** — Bajardo
   - slug: `sakura-inn-sanremo-bajardo`
   - indirizzo: Via Camillo Benso di Cavour, 19, 18038 Sanremo IM