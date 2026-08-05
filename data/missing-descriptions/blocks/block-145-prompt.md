# Blocco 145/500 — 35 strutture senza descrizione IT

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

1. **B&B Nest On The Lake** — Argegno
   - slug: `b-b-nest-on-the-lake-argegno`
   - indirizzo: Località Sostra, 19/17, 22025 Lezzeno CO
2. **B&B Sosta Sul Lago** — Argegno
   - slug: `b-b-sosta-sul-lago-argegno`
   - indirizzo: Località Bagnana, 99, 22025 Lezzeno CO
3. **Bed and Breakfast Casa Pini** — Argegno
   - slug: `bed-and-breakfast-casa-pini-argegno`
   - indirizzo: Via Brentano, 12 F, 22011 Griante CO
4. **Casa Vostra** — Argegno
   - slug: `casa-vostra-argegno`
   - indirizzo: Via Schignano, 3, 22010 Argegno CO
5. **Fattoria dei Castagni** — Argegno
   - slug: `fattoria-dei-castagni-argegno`
   - indirizzo: Via Schignano, 22010 Argegno CO
6. **Hotel Argegno** — Argegno
   - slug: `hotel-argegno-argegno`
   - indirizzo: Via Milano, 4, 22010 Argegno CO
7. **Hotel Ristorante La Griglia Lago Di Como** — Argegno
   - slug: `hotel-ristorante-la-griglia-lago-di-como-argegno`
   - indirizzo: Via Schignano, 1, 22010 Sant'Anna CO
8. **Larioview suites** — Argegno
   - slug: `larioview-suites-argegno`
   - indirizzo: Via Pizzo Gordona, 33, 22010 Argegno CO
9. **Locanda Posta** — Argegno
   - slug: `locanda-posta-argegno`
   - indirizzo: Via Cacciatori delle Alpi, 32, 22010 Argegno CO
10. **Locanda Sant'Anna** — Argegno
   - slug: `locanda-sant-anna-argegno`
   - indirizzo: Via Schignano, 22010 Sant'Anna CO
11. **Terrazza Del Borgo Argegno** — Argegno
   - slug: `terrazza-del-borgo-argegno-argegno`
   - indirizzo: Via Giuseppe Garibaldi, 35, 22010 Argegno CO
12. **Una finestra sul lago** — Argegno
   - slug: `una-finestra-sul-lago-argegno`
   - indirizzo: Via Cacciatori delle Alpi, 22 2nd Floor, 22010 Argegno CO
13. **Villa Belvedere Como lake Relais e Le Restaurant in Villa** — Argegno
   - slug: `villa-belvedere-como-lake-relais-e-le-restaurant-argegno`
   - indirizzo: Via Milano, 1, 22010 Argegno CO
14. **Vista Dolce Isola** — Argegno
   - slug: `vista-dolce-isola-argegno`
   - indirizzo: Via Carlo Dotti, 1, 22010 Argegno CO
15. **Affittacamere levante** — Argelato
   - slug: `affittacamere-levante-argelato`
   - indirizzo: Via Stelloni Levante, 23, 40012 Calderara di Reno BO
16. **Affittacamere Villa Tigli** — Argelato
   - slug: `affittacamere-villa-tigli-argelato`
   - indirizzo: Via dei Tigli, 42, 40050 Argelato BO
17. **Antica Locanda Il Sole Hotel** — Argelato
   - slug: `antica-locanda-il-sole-hotel-argelato`
   - indirizzo: Via Lame, 65, 40013 Trebbo BO
18. **B&B i Casali (IT037050C1C59QKUUA)** — Argelato
   - slug: `b-b-i-casali-it037050c1c59qkuua-argelato`
   - indirizzo: Via Longarola, 42, 40010 Sala Bolognese BO
19. **B&B OASI** — Argelato
   - slug: `b-b-oasi-argelato`
   - indirizzo: Via Centese, 8, 40016 San Giorgio di Piano BO
20. **B&B Villa Pace D'Oro** — Argelato
   - slug: `b-b-villa-pace-d-oro-argelato`
   - indirizzo: Via Centese, 209, 40050 Argelato BO
21. **Bentivoglio hotel congress** — Argelato
   - slug: `bentivoglio-hotel-congress-argelato`
   - indirizzo: A13, 40010 Padova BO
22. **CASA PAOLA** — Argelato
   - slug: `casa-paola-argelato`
   - indirizzo: Via A. Gramsci, 7, 40010 Sala Bolognese BO
23. **CASTELLO D'ARGILE HOTEL** — Argelato
   - slug: `castello-d-argile-hotel-argelato`
   - indirizzo: Via dei Falegnami, 3, 40050 Castello d'Argile BO
24. **Hotel & Ristorante sushi Oro** — Argelato
   - slug: `hotel-ristorante-sushi-oro-argelato`
   - indirizzo: Via Giovannina, 57, 44042 Cento FE
25. **Hotel Bentivoglio** — Argelato
   - slug: `hotel-bentivoglio-argelato`
   - indirizzo: Piazza Carlo Alberto Pizzardi, 1, 40010 Bentivoglio BO
26. **Hotel Galliera** — Argelato
   - slug: `hotel-galliera-argelato`
   - indirizzo: di Galliera, Via Dante Alighieri, 2A, 40015 San Vincenzo BO
27. **Hotel Marconi** — Argelato
   - slug: `hotel-marconi-argelato`
   - indirizzo: SP3, Trasversale di Pianura, 2/c, 40010 Bentivoglio BO
28. **Hotel Olimpic Bologna** — Argelato
   - slug: `hotel-olimpic-bologna-argelato`
   - indirizzo: Via Galliera, 23, 40013 Castel Maggiore BO
29. **Hotel Pamela** — Argelato
   - slug: `hotel-pamela-argelato`
   - indirizzo: Via Galliera Sud, 74, 40018 San Pietro In Casale BO
30. **Hotel SABO'** — Argelato
   - slug: `hotel-sabo-argelato`
   - indirizzo: Via Galliera, 80, 40050 Funo BO
31. **JR Hotel Gate7** — Argelato
   - slug: `jr-hotel-gate7-argelato`
   - indirizzo: Via G. Garibaldi, 4, 40012 Calderara di Reno BO
32. **Melograno Hotel** — Argelato
   - slug: `melograno-hotel-argelato`
   - indirizzo: Via Altedo, 4419, 40018 San Pietro in Casale BO
33. **Mitico Hotel & Natural Spa** — Argelato
   - slug: `mitico-hotel-natural-spa-argelato`
   - indirizzo: Via Ferrarese, 164, 40128 Bologna BO
34. **R&B Dalla Licia** — Argelato
   - slug: `r-b-dalla-licia-argelato`
   - indirizzo: Via Boves, 2, 40016 San Giorgio di Piano BO
35. **Agrilocanda Val Campotto** — Argenta
   - slug: `agrilocanda-val-campotto-argenta`
   - indirizzo: Via Maria Margotti, 2, 44011 Argenta FE