# Blocco 252/500 — 35 strutture senza descrizione IT

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

1. **B&B POGGIO DELLE GINESTRE** — Belvedere Langhe
   - slug: `b-b-poggio-delle-ginestre-belvedere-langhe`
   - indirizzo: Frazione Gorrino 29, 12070 Pezzolo Valle Uzzone CN
2. **Belvedere Affittacamere** — Belvedere Langhe
   - slug: `belvedere-affittacamere-belvedere-langhe`
   - indirizzo: V. Fieschi, 220, 19018 Corniglia SP
3. **Belvedere Affittacamere** — Belvedere Langhe
   - slug: `belvedere-affittacamere-belvedere-langhe-2`
   - indirizzo: Via Gioacchino Belli, 16, 42123 Reggio Emilia RE
4. **Belvedere Bike Hotel** — Belvedere Langhe
   - slug: `belvedere-bike-hotel-belvedere-langhe`
   - indirizzo: Vicolo S. Giovanni, 3, 12046 Montà CN
5. **Casa Belvedere** — Belvedere Langhe
   - slug: `casa-belvedere-belvedere-langhe`
   - indirizzo: 12060 Farigliano CN
6. **Cascina Grattinera B&B** — Belvedere Langhe
   - slug: `cascina-grattinera-b-b-belvedere-langhe`
   - indirizzo: Loc. Grattinera 1, SP343 km.5+000, 12070, 12070 Sale delle Langhe CN
7. **La Tana dello Scoiattolo CIR 004245beb00002 CIN IT004145C1JLAW3JYF** — Belvedere Langhe
   - slug: `la-tana-dello-scoiattolo-cir-004245beb00002-cin-belvedere-langhe`
   - indirizzo: Via Berico, 17, 12060 Murazzano CN
8. **Tenuta MonteOliveto - Agriturismo nelle Langhe** — Belvedere Langhe
   - slug: `tenuta-monteoliveto-agriturismo-nelle-langhe-belvedere-langhe`
   - indirizzo: Regione Monteoliveto, 5, 14059 Vesime AT
9. **Villa Belvedere Langhe** — Belvedere Langhe
   - slug: `villa-belvedere-langhe-belvedere-langhe`
   - indirizzo: Via Roma, 12060 Belvedere Langhe CN
10. **B&B 8 marzo** — Belvedere Marittimo
   - slug: `b-b-8-marzo-belvedere-marittimo`
   - indirizzo: Viale Giovanni Grossi, 19, 87021 Belvedere Marittimo CS
11. **B&B Crispino** — Belvedere Marittimo
   - slug: `b-b-crispino-belvedere-marittimo`
   - indirizzo: Contrada Castromurro, 26, 87021 Belvedere Marittimo CS
12. **B&B Ortensia** — Belvedere Marittimo
   - slug: `b-b-ortensia-belvedere-marittimo`
   - indirizzo: Contrada Castromurro, 205, 87021 Belvedere Marittimo CS
13. **B&B Palazzo Spinelli** — Belvedere Marittimo
   - slug: `b-b-palazzo-spinelli-belvedere-marittimo`
   - indirizzo: Piazza Castel Rugiero, 18, 87021 Belvedere Marittimo CS
14. **Belvedere Hotel Club Village** — Belvedere Marittimo
   - slug: `belvedere-hotel-club-village-belvedere-marittimo`
   - indirizzo: SS 18 Tirrena Inferiore, 87021 Castromurro, CS
15. **Casa del sole** — Belvedere Marittimo
   - slug: `casa-del-sole-belvedere-marittimo`
   - indirizzo: Via Soleo, 26-32, 87021 Belvedere Marittimo CS
16. **Club Residence La Castellana** — Belvedere Marittimo
   - slug: `club-residence-la-castellana-belvedere-marittimo`
   - indirizzo: Località La Praia, 4, 87021 Belvedere Marittimo CS
17. **Ely Sea B&B** — Belvedere Marittimo
   - slug: `ely-sea-b-b-belvedere-marittimo`
   - indirizzo: P.za Giovanni Grossi, n16, 87021 Belvedere Marittimo CS
18. **Il Podere dell'Angelo Old Country House** — Belvedere Marittimo
   - slug: `il-podere-dell-angelo-old-country-house-belvedere-marittimo`
   - indirizzo: Contrada Oracchio, 77, 87021 Belvedere Marittimo CS
19. **La dimora del borgo** — Belvedere Marittimo
   - slug: `la-dimora-del-borgo-belvedere-marittimo`
   - indirizzo: Viale Giovanni Grossi, 42, 87021 Belvedere Marittimo CS
20. **La Marinella** — Belvedere Marittimo
   - slug: `la-marinella-belvedere-marittimo`
   - indirizzo: P.za Giovanni Grossi, 87021 Belvedere Marittimo CS
21. **La Perla Nascosta** — Belvedere Marittimo
   - slug: `la-perla-nascosta-belvedere-marittimo`
   - indirizzo: Via dei Normanni, 32/F, 87021 Belvedere Marittimo CS
22. **La Risacca Relais** — Belvedere Marittimo
   - slug: `la-risacca-relais-belvedere-marittimo`
   - indirizzo: Via Giannino Losardo, 48, 87021 Belvedere Marittimo CS
23. **Marè** — Belvedere Marittimo
   - slug: `mare-belvedere-marittimo`
   - indirizzo: Via Giustino Fortunato, 35, 87021 Belvedere Marittimo CS
24. **Molo'93 - RoomsandSea** — Belvedere Marittimo
   - slug: `molo-93-roomsandsea-belvedere-marittimo`
   - indirizzo: Contrada Castromurro, 87021 Belvedere Marittimo CS
25. **Palazzo del Miglio** — Belvedere Marittimo
   - slug: `palazzo-del-miglio-belvedere-marittimo`
   - indirizzo: Via Flavio Cassiodoro, 67, 87021 Belvedere Marittimo CS
26. **Tenuta dei Biondi Ulivi B&B** — Belvedere Marittimo
   - slug: `tenuta-dei-biondi-ulivi-b-b-belvedere-marittimo`
   - indirizzo: Contrada Olivella, 33, 87021 Belvedere Marittimo CS
27. **The Dream B&B** — Belvedere Marittimo
   - slug: `the-dream-b-b-belvedere-marittimo`
   - indirizzo: Contrada Olivella, 1, 87021 Belvedere Marittimo CS
28. **White Club Residence** — Belvedere Marittimo
   - slug: `white-club-residence-belvedere-marittimo`
   - indirizzo: Campo Minore, 87021 Belvedere Marittimo CS
29. **Agriturismo Al Rifugio DiVino** — Belvedere Ostrense
   - slug: `agriturismo-al-rifugio-divino-belvedere-ostrense`
   - indirizzo: Via Gavigliano, 16, 60030 Belvedere Ostrense AN
30. **Agriturismo Campo Aperto** — Belvedere Ostrense
   - slug: `agriturismo-campo-aperto-belvedere-ostrense`
   - indirizzo: Via Orti, 18, 60030 Belvedere Ostrense AN
31. **AgriturismoTenuta Belvedere** — Belvedere Ostrense
   - slug: `agriturismotenuta-belvedere-belvedere-ostrense`
   - indirizzo: Via Ronco, 2, 60030 Belvedere Ostrense AN
32. **Apis in tabula** — Belvedere Ostrense
   - slug: `apis-in-tabula-belvedere-ostrense`
   - indirizzo: V. San Bonaventura, 2, 60010 Ostra AN
33. **Casa della Musica - Casali Marchigiani** — Belvedere Ostrense
   - slug: `casa-della-musica-casali-marchigiani-belvedere-ostrense`
   - indirizzo: Via Loretello, 2, 60010 Ostra AN
34. **Hotel Dei Nani** — Belvedere Ostrense
   - slug: `hotel-dei-nani-belvedere-ostrense`
   - indirizzo: Viale del Lavoro, 34, 60035 Jesi AN
35. **Hotel Federico II** — Belvedere Ostrense
   - slug: `hotel-federico-ii-belvedere-ostrense`
   - indirizzo: Via Ancona, 92, 60035 Jesi AN