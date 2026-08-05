# Blocco 247/500 — 35 strutture senza descrizione IT

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

1. **Hotel Milano Resort** — Bellaria-Igea Marina
   - slug: `hotel-milano-resort-bellaria-igea-marina`
   - indirizzo: Lungomare Cristoforo Colombo, 40, 47814 Bellaria-Igea Marina RN
2. **Hotel Miranda** — Bellaria-Igea Marina
   - slug: `hotel-miranda-bellaria-igea-marina`
   - indirizzo: Via Italia, 23, 47814 Bellaria-Igea Marina RN
3. **Hotel Nettuno Igea Marina** — Bellaria-Igea Marina
   - slug: `hotel-nettuno-igea-marina-bellaria-igea-marina`
   - indirizzo: Via Quinto Ennio, 2, 47814 Bellaria-Igea Marina RN
4. **Hotel Ornella Bellaria Igea Marina.** — Bellaria-Igea Marina
   - slug: `hotel-ornella-bellaria-igea-marina-bellaria-igea-marina`
   - indirizzo: Via Tito Maccio Plauto, 23, 47814 Bellaria-Igea Marina RN
5. **Hotel San Salvador Bellaria Igea Marina** — Bellaria-Igea Marina
   - slug: `hotel-san-salvador-bellaria-igea-marina-bellaria-igea-marina`
   - indirizzo: Via G. Lucilio, 8, 47814 Bellaria-Igea Marina RN
6. **Hotel Savini** — Bellaria-Igea Marina
   - slug: `hotel-savini-bellaria-igea-marina`
   - indirizzo: Via Alfonso Pinzon, 80, 47814 Bellaria-Igea Marina RN
7. **Hotel Sorriso** — Bellaria-Igea Marina
   - slug: `hotel-sorriso-bellaria-igea-marina`
   - indirizzo: Via Ala, 5, 47814 Bellaria-Igea Marina RN
8. **Hotel Teti | Igea Marina - Bellaria** — Bellaria-Igea Marina
   - slug: `hotel-teti-igea-marina-bellaria-bellaria-igea-marina`
   - indirizzo: Via Alfonso Pinzon, 191, 47814 Bellaria-Igea Marina RN
9. **Hotel Thea** — Bellaria-Igea Marina
   - slug: `hotel-thea-bellaria-igea-marina`
   - indirizzo: Via Gaio Valerio Catullo, 10, 47814 Bellaria-Igea Marina RN
10. **Hotel Villa Saba** — Bellaria-Igea Marina
   - slug: `hotel-villa-saba-bellaria-igea-marina`
   - indirizzo: Via Asiago, 15, 47814 Bellaria-Igea Marina RN
11. **Hotel Villa Sole** — Bellaria-Igea Marina
   - slug: `hotel-villa-sole-bellaria-igea-marina`
   - indirizzo: Via Plava, 13, 47814 Bellaria-Igea Marina RN
12. **B&B Rainbow Sweet Rooms Valmontone** — Bellegra
   - slug: `b-b-rainbow-sweet-rooms-valmontone-bellegra`
   - indirizzo: Via Molino S. Giovanni, 57, 00038 Valmontone RM
13. **B&B Stazione Valmontone** — Bellegra
   - slug: `b-b-stazione-valmontone-bellegra`
   - indirizzo: Via Casilina, 421/a, 00038 Valmontone RM
14. **Bed and Breakfast VITELLIA** — Bellegra
   - slug: `bed-and-breakfast-vitellia-bellegra`
   - indirizzo: Borgo San Nicola, 44, 00030 Bellegra RM
15. **Hotel Belvedere** — Bellegra
   - slug: `hotel-belvedere-bellegra`
   - indirizzo: Via Maremmana km2.200, 00030 Roma RM
16. **La Fonte** — Bellegra
   - slug: `la-fonte-bellegra`
   - indirizzo: Piazza Giulio Venzi, 6/3, 00033 Cave RM
17. **Le Rocce Degli Equi** — Bellegra
   - slug: `le-rocce-degli-equi-bellegra`
   - indirizzo: Viale Ungheria, 6, 00030 Bellegra RM
18. **Le Stanze dei Doria** — Bellegra
   - slug: `le-stanze-dei-doria-bellegra`
   - indirizzo: Via Molino S. Giovanni, 69/primo e secondo piano, 00038 Valmontone RM
19. **Palestrina-Valmontone B&B** — Bellegra
   - slug: `palestrina-valmontone-b-b-bellegra`
   - indirizzo: Via Prenestina Nuova, 57, 00036 Palestrina RM
20. **Agriturismo Lou Saret** — Bellino
   - slug: `agriturismo-lou-saret-bellino`
   - indirizzo: Borgata Chiazale, 27, 12020 Chiazale CN
21. **B&B La Guiette** — Bellino
   - slug: `b-b-la-guiette-bellino`
   - indirizzo: 12020 Puy CN
22. **Hotel Chalet Seggiovia** — Bellino
   - slug: `hotel-chalet-seggiovia-bellino`
   - indirizzo: Frazione Maddalena, 70, 12020 Pontechianale CN
23. **Il Mulino Delle Fucine' Di Giordanino Katia** — Bellino
   - slug: `il-mulino-delle-fucine-di-giordanino-katia-bellino`
   - indirizzo: Via Bellino, 20, 12020 Casteldelfino CN
24. **La Locanda di Elva** — Bellino
   - slug: `la-locanda-di-elva-bellino`
   - indirizzo: Borgata Serre, Capoluogo, 6, 12020 Elva CN
25. **Le Colonne Resort** — Bellino
   - slug: `le-colonne-resort-bellino`
   - indirizzo: Borgata Serre, 2, 12020 Serre CN
26. **Locanda Alboin La Misun de Ciafrè** — Bellino
   - slug: `locanda-alboin-la-misun-de-ciafre-bellino`
   - indirizzo: 12020 Alboin CN
27. **Locanda Alpina L'iero d'Eimà** — Bellino
   - slug: `locanda-alpina-l-iero-d-eima-bellino`
   - indirizzo: Borgata Celle, 19/A, 12020 Bellino CN
28. **Locanda Del Silenzio S.a.s.** — Bellino
   - slug: `locanda-del-silenzio-s-a-s-bellino`
   - indirizzo: Localita Camoglieres, 33, 12020 Macra CN
29. **Locanda Garzino** — Bellino
   - slug: `locanda-garzino-bellino`
   - indirizzo: Via Vittorio Emanuele II°, 37/a-b, 12020 Sampeyre CN
30. **Locanda La Peiro Groso** — Bellino
   - slug: `locanda-la-peiro-groso-bellino`
   - indirizzo: Frazione Chianale, 3, 12020 Chianale CN
31. **Locanda Lou Subric Osteria e Camere** — Bellino
   - slug: `locanda-lou-subric-osteria-e-camere-bellino`
   - indirizzo: Borgata San MARTINO superiore 109, 12020 Stroppo CN
32. **AS Hotel Cambiago** — Bellinzago Lombardo
   - slug: `as-hotel-cambiago-bellinzago-lombardo`
   - indirizzo: Vle delle Industrie, 20040 Cambiago MI
33. **B&B Casa Sara** — Bellinzago Lombardo
   - slug: `b-b-casa-sara-bellinzago-lombardo`
   - indirizzo: Via Bologna, 26, 20062 Cassano d'Adda MI
34. **B&B Il Mulino di Gorgonzola (CIR: H00298)** — Bellinzago Lombardo
   - slug: `b-b-il-mulino-di-gorgonzola-cir-h00298-bellinzago-lombardo`
   - indirizzo: Via Molino Vecchio, 10, 20064 Gorgonzola MI
35. **B&B Le camere di Aladino** — Bellinzago Lombardo
   - slug: `b-b-le-camere-di-aladino-bellinzago-lombardo`
   - indirizzo: Via Cesare Battisti, 121, 20061 Carugate MI