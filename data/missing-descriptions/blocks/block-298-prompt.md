# Blocco 298/500 — 35 strutture senza descrizione IT

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

1. **Albergo Alpino** — Borgo d'Anaunia
   - slug: `albergo-alpino-borgo-d-anaunia`
   - indirizzo: Piazza Municipio, 1, 38028 Novella TN
2. **Albergo Bucaneve** — Borgo d'Anaunia
   - slug: `albergo-bucaneve-borgo-d-anaunia`
   - indirizzo: Viale Belvedere, 20, 38013 Malosco TN
3. **Albergo Centro Studi Zancan** — Borgo d'Anaunia
   - slug: `albergo-centro-studi-zancan-borgo-d-anaunia`
   - indirizzo: Viale Alpino, 8, 38013 Malosco TN
4. **Falchetto Experience** — Borgo d'Anaunia
   - slug: `falchetto-experience-borgo-d-anaunia`
   - indirizzo: località Regole, di, 38011 Malosco TN
5. **Hotel Belsoggiorno** — Borgo d'Anaunia
   - slug: `hotel-belsoggiorno-borgo-d-anaunia`
   - indirizzo: Via Miravalle, 7, 38013 Malosco TN
6. **Hotel Giusy (Alex hotel)nuova gestione** — Borgo d'Anaunia
   - slug: `hotel-giusy-alex-hotel-nuova-gestione-borgo-d-anaunia`
   - indirizzo: Viale Belvedere, 9, 38013 Malosco TN
7. **Hotel La Montanina** — Borgo d'Anaunia
   - slug: `hotel-la-montanina-borgo-d-anaunia`
   - indirizzo: Via Miravalle, 16, 38013 Malosco TN
8. **Hotel Lago Smeraldo** — Borgo d'Anaunia
   - slug: `hotel-lago-smeraldo-borgo-d-anaunia`
   - indirizzo: Via Lago Smeraldo, 12, 38013 Fondo TN
9. **Hotel Milano - Fondo** — Borgo d'Anaunia
   - slug: `hotel-milano-fondo-borgo-d-anaunia`
   - indirizzo: Via Palade, 62, 38013 Fondo TN
10. **Hotel Panorama** — Borgo d'Anaunia
   - slug: `hotel-panorama-borgo-d-anaunia`
   - indirizzo: Viale Panorama, 6, 38013 Borgo d'Anaunia TN
11. **Hotel Paradiso** — Borgo d'Anaunia
   - slug: `hotel-paradiso-borgo-d-anaunia`
   - indirizzo: Localita' Fornace, 1 Fraz, 38010 Sarnonico TN
12. **Hotel Regina del Bosco - Storica Residenza di Caccia dell'Imperatore Francesco Giuseppe e Sissi** — Borgo d'Anaunia
   - slug: `hotel-regina-del-bosco-storica-residenza-di-cacc-borgo-d-anaunia`
   - indirizzo: Via Mendola, 48, 38010 Ronzone TN
13. **Hotel Villa Argentina Ronzone** — Borgo d'Anaunia
   - slug: `hotel-villa-argentina-ronzone-borgo-d-anaunia`
   - indirizzo: Via Mendola, 42, 38010 Ronzone TN
14. **MOLIN DEI MAGHI** — Borgo d'Anaunia
   - slug: `molin-dei-maghi-borgo-d-anaunia`
   - indirizzo: Via Lago Smeraldo, 26, 38013 Fondo TN
15. **Panoramahotel Penegal** — Borgo d'Anaunia
   - slug: `panoramahotel-penegal-borgo-d-anaunia`
   - indirizzo: Monte Penegal, 8, 38010 Ruffrè-Mendola TN
16. **Ristorante&Birreria Bar Al Canyon (ex Pub America)** — Borgo d'Anaunia
   - slug: `ristorante-birreria-bar-al-canyon-ex-pub-america-borgo-d-anaunia`
   - indirizzo: Via Lago Smeraldo, 2, 38013 Fondo TN
17. **Villa Orso Grigio** — Borgo d'Anaunia
   - slug: `villa-orso-grigio-borgo-d-anaunia`
   - indirizzo: Via Regole, 12, 38011 Ronzone TN
18. **Agriturismo "Cascina Dei Prati"** — Borgo di Terzo
   - slug: `agriturismo-cascina-dei-prati-borgo-di-terzo`
   - indirizzo: Via dei Dossi, 23, 24060 Credaro BG
19. **B&B COLLE DEL SOLE** — Borgo di Terzo
   - slug: `b-b-colle-del-sole-borgo-di-terzo`
   - indirizzo: Via Gallo, 4, 24060 Vigano San Martino BG
20. **B&B Margherita** — Borgo di Terzo
   - slug: `b-b-margherita-borgo-di-terzo`
   - indirizzo: Via Marcello Candia, 6, 24060 Villongo BG
21. **Millaenya Inn - Ristorante Locanda B&b Pizzeria Vineria** — Borgo di Terzo
   - slug: `millaenya-inn-ristorante-locanda-b-b-pizzeria-vi-borgo-di-terzo`
   - indirizzo: Via Nazionale, 8, 24060 Entratico BG
22. **Molino Dei Frati** — Borgo di Terzo
   - slug: `molino-dei-frati-borgo-di-terzo`
   - indirizzo: Via A. Gramsci, 40, 24069 Trescore Balneario BG
23. **Villa Redona Medolago Albani** — Borgo di Terzo
   - slug: `villa-redona-medolago-albani-borgo-di-terzo`
   - indirizzo: Via Redona, 12, 24069 Trescore Balneario BG
24. **Albergo Ginevra** — Borgo Lares
   - slug: `albergo-ginevra-borgo-lares`
   - indirizzo: Via Nazionale, 14, 38087 Roncone TN
25. **Albergo Ristorante Serena** — Borgo Lares
   - slug: `albergo-ristorante-serena-borgo-lares`
   - indirizzo: Via Roma, 133, 38087 Breguzzo TN
26. **Albergo Ristorante Trento** — Borgo Lares
   - slug: `albergo-ristorante-trento-borgo-lares`
   - indirizzo: Via Roma, 52, 38087 Breguzzo TN
27. **Albergo Roncone** — Borgo Lares
   - slug: `albergo-roncone-borgo-lares`
   - indirizzo: Via Nazionale, 10, 38087 Roncone TN
28. **Albergo Rosa Alpina** — Borgo Lares
   - slug: `albergo-rosa-alpina-borgo-lares`
   - indirizzo: Frazione Stumiaga, 8, 38075 Fiavè TN
29. **Campeggio e Area sosta camper Paradiso Terrestre** — Borgo Lares
   - slug: `campeggio-e-area-sosta-camper-paradiso-terrestre-borgo-lares`
   - indirizzo: località al canal, 3, 38071 Cavrasto TN
30. **Chalet al Monte di Zuclo - Tione** — Borgo Lares
   - slug: `chalet-al-monte-di-zuclo-tione-borgo-lares`
   - indirizzo: Via al Monte di -Tione di Trento TN, 38079 Borgo Lares TN
31. **Hotel Milano** — Borgo Lares
   - slug: `hotel-milano-borgo-lares`
   - indirizzo: Via Circonvallazione, 80, 38079 Tione di Trento TN
32. **Hotel Pizzeria La Pineta** — Borgo Lares
   - slug: `hotel-pizzeria-la-pineta-borgo-lares`
   - indirizzo: Località Pineta, 38075 Fiavè TN
33. **Ristorante Pizzeria Hotel Carè Alto** — Borgo Lares
   - slug: `ristorante-pizzeria-hotel-care-alto-borgo-lares`
   - indirizzo: Frazione Borzago, 54, 38088 Spiazzo TN
34. **Antica Dimora** — Borgo Mantovano
   - slug: `antica-dimora-borgo-mantovano`
   - indirizzo: Piazza Giuseppe Mazzini, 24, 46035 Ostiglia MN
35. **B&B La Magnolia** — Borgo Mantovano
   - slug: `b-b-la-magnolia-borgo-mantovano`
   - indirizzo: Via Montegrappa, 11, 46035 Ostiglia MN