# Blocco 405/500 — 35 strutture senza descrizione IT

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

1. **AGRITURISMO MIO CAPITANO 2 canicattini bagni** — Canicattini Bagni
   - slug: `agriturismo-mio-capitano-2-canicattini-bagni-canicattini-bagni`
   - indirizzo: strada provinciale 74, 96010 Canicattini Bagni SR
2. **Agriturismo Stallaini** — Canicattini Bagni
   - slug: `agriturismo-stallaini-canicattini-bagni`
   - indirizzo: Contrada Stallaini, 96017 Noto SR
3. **B&b Villa Erminia** — Canicattini Bagni
   - slug: `b-b-villa-erminia-canicattini-bagni`
   - indirizzo: Contrada Bosco di Sopra, 96010 Canicattini Bagni SR
4. **Dimora delle Balze** — Canicattini Bagni
   - slug: `dimora-delle-balze-canicattini-bagni`
   - indirizzo: SS287, 96017 Noto SR
5. **Dolce by Wyndham Siracusa I Monasteri Golf & Spa** — Canicattini Bagni
   - slug: `dolce-by-wyndham-siracusa-i-monasteri-golf-spa-canicattini-bagni`
   - indirizzo: Traversa Monasteri di Sotto, 3, 96100 Siracusa SR
6. **Eremo Madonna Delle Grazie** — Canicattini Bagni
   - slug: `eremo-madonna-delle-grazie-canicattini-bagni`
   - indirizzo: SP4, 96012 Montagna SR
7. **Eureka Palace Hotel Spa Resort** — Canicattini Bagni
   - slug: `eureka-palace-hotel-spa-resort-canicattini-bagni`
   - indirizzo: Str. Spinagallo, 50, 96100 Siracusa SR
8. **La Dimora del Pensatore** — Canicattini Bagni
   - slug: `la-dimora-del-pensatore-canicattini-bagni`
   - indirizzo: CONTRADA ALFANO, snc, 96017 Noto SR
9. **Masseria degli Ulivi** — Canicattini Bagni
   - slug: `masseria-degli-ulivi-canicattini-bagni`
   - indirizzo: Contrada Porcari snc, SS287, 96017 Noto SR
10. **Morfeo B&B** — Canicattini Bagni
   - slug: `morfeo-b-b-canicattini-bagni`
   - indirizzo: Via Umberto, 367, 96010 Canicattini Bagni SR
11. **Mundus Terrae Country House** — Canicattini Bagni
   - slug: `mundus-terrae-country-house-canicattini-bagni`
   - indirizzo: Contrada Bosco di Sopra, 96010 Canicattini Bagni SR
12. **Nuovo Castello Crisilio** — Canicattini Bagni
   - slug: `nuovo-castello-crisilio-canicattini-bagni`
   - indirizzo: Via Crisilio, 10, 96012 Avola SR
13. **Tramonto Ibleo Resort** — Canicattini Bagni
   - slug: `tramonto-ibleo-resort-canicattini-bagni`
   - indirizzo: 96012 Chiusa di Carlo SR
14. **Villa Margherita** — Canicattini Bagni
   - slug: `villa-margherita-canicattini-bagni`
   - indirizzo: Via S. Nicola, 8, 96010 Canicattini Bagni SR
15. **Al Qatta B&B** — Canicatt�
   - slug: `al-qatta-b-b-canicatt`
   - indirizzo: Via A. Manzoni, 134, 92024 Canicattì AG
16. **Area Sud Affittacamere** — Canicatt�
   - slug: `area-sud-affittacamere-canicatt`
   - indirizzo: Via Maiorana, 20, 92024 Canicattì AG
17. **Attico dei Templi** — Canicatt�
   - slug: `attico-dei-templi-canicatt`
   - indirizzo: SS122, Contrada Aquilata, 92024 Canicattì AG
18. **B&B Le Tre Perle** — Canicatt�
   - slug: `b-b-le-tre-perle-canicatt`
   - indirizzo: V. Senatore Sammartino, 68, 92024 Canicattì AG
19. **B&B QUATTRO TESORI** — Canicatt�
   - slug: `b-b-quattro-tesori-canicatt`
   - indirizzo: Via Umbria, 4, 92024 Canicattì AG
20. **B&B Vittorio Emanuele** — Canicatt�
   - slug: `b-b-vittorio-emanuele-canicatt`
   - indirizzo: Via Vittorio Emanuele, 155, 92024 Canicattì AG
21. **Beatus B&B** — Canicatt�
   - slug: `beatus-b-b-canicatt`
   - indirizzo: Via Lepanto, 282, 92024 Canicattì AG
22. **Hotel Collina del Faro S. R. L.** — Canicatt�
   - slug: `hotel-collina-del-faro-s-r-l-canicatt`
   - indirizzo: Via Giacomo Puccini, 29, 92024 Canicattì AG
23. **Agriturismo Terre di Musignano** — Canino
   - slug: `agriturismo-terre-di-musignano-canino`
   - indirizzo: loc. Roggi, 01011 Canino VT
24. **B&B Le Buche** — Canino
   - slug: `b-b-le-buche-canino`
   - indirizzo: Via Concordia, 29, 01011 Canino VT
25. **Bed & Breakfast La Vecchia Torre Canino** — Canino
   - slug: `bed-breakfast-la-vecchia-torre-canino-canino`
   - indirizzo: Km. 9,, Strada Regionale 312 Castrense, 01011 Canino VT
26. **Casa del 1000 locata per fini turistici** — Canino
   - slug: `casa-del-1000-locata-per-fini-turistici-canino`
   - indirizzo: Via Palestro, 42, 01011 Canino VT
27. **CasettaRosaria** — Canino
   - slug: `casettarosaria-canino`
   - indirizzo: Via Garofoli, 01011 Canino VT
28. **Le Palme B&B di Rosanna Susini** — Canino
   - slug: `le-palme-b-b-di-rosanna-susini-canino`
   - indirizzo: SR 312 km 21,700, 01011 Canino VT
29. **Om Palace** — Canino
   - slug: `om-palace-canino`
   - indirizzo: Via Piansano, 8, 01017 Tuscania VT
30. **Palazzo Falzacappa** — Canino
   - slug: `palazzo-falzacappa-canino`
   - indirizzo: Via Regina Margherita, 32, 01011 Canino VT
31. **Residenze Miao - Affittacamere** — Canino
   - slug: `residenze-miao-affittacamere-canino`
   - indirizzo: Via Ansedonia, 2, 01014 Montalto di Castro VT
32. **Resort Fonte Vulci / Agriturismo** — Canino
   - slug: `resort-fonte-vulci-agriturismo-canino`
   - indirizzo: Vulci, Località Monte dell'Oro, snc, 01011 Canino VT
33. **Albergo La Perla Della Valle** — Canistro
   - slug: `albergo-la-perla-della-valle-canistro`
   - indirizzo: Via dei Santi, 30, 67054 Civitella Roveto AQ
34. **CASETTA MIA** — Canistro
   - slug: `casetta-mia-canistro`
   - indirizzo: CIN IT066017C2RSBHSX9U, Via Serafino D'Andrea, 55, 67050 Canistro Superiore AQ
35. **Il Tesoro Del Lago** — Canistro
   - slug: `il-tesoro-del-lago-canistro`
   - indirizzo: Via Carlo Pisacane, 9-11, 67053 Capistrello AQ