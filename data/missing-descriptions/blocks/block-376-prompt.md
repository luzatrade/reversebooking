# Blocco 376/500 — 35 strutture senza descrizione IT

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

1. **Locanda al Colle** — Camaiore
   - slug: `locanda-al-colle-camaiore`
   - indirizzo: Via La Stretta, 231, 55041 Camaiore LU
2. **locanda le monache** — Camaiore
   - slug: `locanda-le-monache-camaiore`
   - indirizzo: Piazza XXIX Maggio, 36, 55041 Camaiore LU
3. **Villa Borgovecchio B&B** — Camaiore
   - slug: `villa-borgovecchio-b-b-camaiore`
   - indirizzo: Via Marcello Lucchesi, 1639, 55041 Pedona LU
4. **Villa La Bianca** — Camaiore
   - slug: `villa-la-bianca-camaiore`
   - indirizzo: Via Nuova, Località Lombrici, 825, 55041 Camaiore LU
5. **Villa Liberty Versilia** — Camaiore
   - slug: `villa-liberty-versilia-camaiore`
   - indirizzo: Via Cardinale Pellegrinetti, 27, 55041 Lido di Camaiore LU
6. **Villa Lombardi Bed & Breakfast** — Camaiore
   - slug: `villa-lombardi-bed-breakfast-camaiore`
   - indirizzo: Via Cesare Battisti, 17, 55041 Camaiore LU
7. **Albergo Ristorante Bucaneve** — Camandona
   - slug: `albergo-ristorante-bucaneve-camandona`
   - indirizzo: SP232, 232, 13824 Bielmonte BI
8. **B&B Emanuela** — Camandona
   - slug: `b-b-emanuela-camandona`
   - indirizzo: Frazione Bianco, 19, 13821 Camandona BI
9. **Agrigento Valle Dei Templi Pool Garden** — Camastra
   - slug: `agrigento-valle-dei-templi-pool-garden-camastra`
   - indirizzo: Via Vecchio, 19/interno 1, 92020 Camastra AG
10. **Agriturismo Baglio San Nicola** — Camastra
   - slug: `agriturismo-baglio-san-nicola-camastra`
   - indirizzo: snc, 92028 San Nicola AG
11. **Agriturismo Raffo** — Camastra
   - slug: `agriturismo-raffo-camastra`
   - indirizzo: S.P. 12 Naro - Campobello di Licata, 92028 C.da Bongiorno, Naro AG
12. **B&B MEDITERRANEO mare e sole** — Camastra
   - slug: `b-b-mediterraneo-mare-e-sole-camastra`
   - indirizzo: Viale Gibildolce, 73, 92044 Marina di Palma AG
13. **B&B The Liberty Palace** — Camastra
   - slug: `b-b-the-liberty-palace-camastra`
   - indirizzo: Via Libertà, 50, 92023 Campobello di Licata AG
14. **Corte Della Jbsa** — Camastra
   - slug: `corte-della-jbsa-camastra`
   - indirizzo: Contrada Ciavolotta, 7, 92100 Agrigento AG
15. **Daedalium Cultural Resort - B&B** — Camastra
   - slug: `daedalium-cultural-resort-b-b-camastra`
   - indirizzo: Capreria Contrada, Viale Gibildolce, 92044 Palma di Montechiaro AG
16. **Il Covo degli Artisti** — Camastra
   - slug: `il-covo-degli-artisti-camastra`
   - indirizzo: Via Falcone e Borsellino, 22, 92023 Campobello di Licata AG
17. **La Collina sul Mare** — Camastra
   - slug: `la-collina-sul-mare-camastra`
   - indirizzo: Viale Gibildolce, 125, 92044 Palma di Montechiaro AG
18. **La Dimora del Duca** — Camastra
   - slug: `la-dimora-del-duca-camastra`
   - indirizzo: Via Abate Meli, 28, 92044 Palma di Montechiaro AG
19. **Relais Garden Cactus B&B** — Camastra
   - slug: `relais-garden-cactus-b-b-camastra`
   - indirizzo: SP3 Crocca, 126, 92026 Favara AG
20. **Stella del Rio** — Camastra
   - slug: `stella-del-rio-camastra`
   - indirizzo: Contrada Fontana di Rose, 92028 Naro AG
21. **TERRAZZE CHIARAMONTANE | B&B | HOTEL | SICILIA | VALLE DEI TEMPLI | AGRIGENTO | GATTOPARDO | VISTA MARE | VIAGGI | GATTOPARDO** — Camastra
   - slug: `terrazze-chiaramontane-b-b-hotel-sicilia-valle-d-camastra`
   - indirizzo: Via Lipari, 21, 92044 Marina di Palma AG
22. **Terreforti Luxury Village** — Camastra
   - slug: `terreforti-luxury-village-camastra`
   - indirizzo: contrada Burraiti 21, Favara, SS 115 Km 196, 300, 92026 Agrigento AG
23. **White House R&B** — Camastra
   - slug: `white-house-r-b-camastra`
   - indirizzo: Contrada Giangaragano, 92029 Campobello di Licata AG
24. **Garden Clorofilla Cambiago MI** — Cambiago
   - slug: `garden-clorofilla-cambiago-mi-cambiago`
   - indirizzo: Via A. Manzoni, 60, 20040 Cambiago MI
25. **Locanda Clorofilla Agriturismo Cambiago** — Cambiago
   - slug: `locanda-clorofilla-agriturismo-cambiago-cambiago`
   - indirizzo: Via A. Manzoni, 60, 20040 Cambiago MI
26. **Aba Hotel** — Cambiano
   - slug: `aba-hotel-cambiano`
   - indirizzo: Via Villafranca, 5, 10024 Moncalieri TO
27. **B&B Da Lisa** — Cambiano
   - slug: `b-b-da-lisa-cambiano`
   - indirizzo: Via Nizza, 29, 10125 Torino TO
28. **Best Quality Hotel La Darsena** — Cambiano
   - slug: `best-quality-hotel-la-darsena-cambiano`
   - indirizzo: Str. Torino, 29, 10124 Moncalieri TO
29. **Hotel Damian** — Cambiano
   - slug: `hotel-damian-cambiano`
   - indirizzo: Via Torino, 141, 10028 Trofarello TO
30. **Hotel Galimberti** — Cambiano
   - slug: `hotel-galimberti-cambiano`
   - indirizzo: Via Taggia, 67, 10134 Torino TO
31. **Hotel Plaza Torino** — Cambiano
   - slug: `hotel-plaza-torino-cambiano`
   - indirizzo: Via Ilarione Petitti, 18, 10126 Torino TO
32. **HOTEL RIGOLFO** — Cambiano
   - slug: `hotel-rigolfo-cambiano`
   - indirizzo: Str. Rigolfo, 28, 10024 Moncalieri TO
33. **Hotel Universo** — Cambiano
   - slug: `hotel-universo-cambiano`
   - indirizzo: Corso Peschiera, 166, 10138 Torino TO
34. **Park Hotel Villa Salzea** — Cambiano
   - slug: `park-hotel-villa-salzea-cambiano`
   - indirizzo: Via Duca degli Abruzzi, 29, 10028 Trofarello TO
35. **Tulip Inn Turin South Hotel** — Cambiano
   - slug: `tulip-inn-turin-south-hotel-cambiano`
   - indirizzo: Via Guido Rossa, 11, 10024 Moncalieri TO