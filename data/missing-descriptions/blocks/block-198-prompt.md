# Blocco 198/500 — 35 strutture senza descrizione IT

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

1. **Hotel delle Terme Santa Agnese** — Bagno di Romagna
   - slug: `hotel-delle-terme-santa-agnese-bagno-di-romagna`
   - indirizzo: Via Fiorentina, 17, 47021 Bagno di Romagna FC
2. **Hotel Miramonti** — Bagno di Romagna
   - slug: `hotel-miramonti-bagno-di-romagna`
   - indirizzo: Via Acquapartita, 103, 47021 Bagno di Romagna FC
3. **Hotel Romagna** — Bagno di Romagna
   - slug: `hotel-romagna-bagno-di-romagna`
   - indirizzo: Via Zuccherificio, 215, 47521 Cesena FC
4. **Hotel Tosco Romagnolo - Ristorante Paolo Teverini** — Bagno di Romagna
   - slug: `hotel-tosco-romagnolo-ristorante-paolo-teverini-bagno-di-romagna`
   - indirizzo: V. del Popolo, 2, 47021 Bagno di Romagna FC
5. **Il Respiro del Bosco** — Bagno di Romagna
   - slug: `il-respiro-del-bosco-bagno-di-romagna`
   - indirizzo: Località Ca' Banditina, 97, 47021 San Piero In Bagno FC
6. **Locanda dei Baroni** — Bagno di Romagna
   - slug: `locanda-dei-baroni-bagno-di-romagna`
   - indirizzo: Via di Camaldoli, 7, 52010 Camaldoli AR
7. **Pensione Giardino** — Bagno di Romagna
   - slug: `pensione-giardino-bagno-di-romagna`
   - indirizzo: Via Nazionale, 15, 52014 Badia Prataglia AR
8. **Ròseo Euroterme** — Bagno di Romagna
   - slug: `roseo-euroterme-bagno-di-romagna`
   - indirizzo: Via Lungo Savio, 2, 47021 Bagno di Romagna FC
9. **Affittacamere Al Piano 32** — Bagnoli del Trigno
   - slug: `affittacamere-al-piano-32-bagnoli-del-trigno`
   - indirizzo: Via Piano, 32, 86029 Trivento CB
10. **Affittacamere Le Quercigliole** — Bagnoli del Trigno
   - slug: `affittacamere-le-quercigliole-bagnoli-del-trigno`
   - indirizzo: Contrada Quercigliole, 2, 86025 Ripalimosani CB
11. **B&B da Manuela** — Bagnoli del Trigno
   - slug: `b-b-da-manuela-bagnoli-del-trigno`
   - indirizzo: Contrada Santo Janni, 72, 86096 Macchiagodena IS
12. **B&B Da Nonna Pina** — Bagnoli del Trigno
   - slug: `b-b-da-nonna-pina-bagnoli-del-trigno`
   - indirizzo: san giocondino, 15, 86081 Villa Canale IS
13. **B&B Donna Livia** — Bagnoli del Trigno
   - slug: `b-b-donna-livia-bagnoli-del-trigno`
   - indirizzo: Piazza Garibaldi, 3, 86092 Cantalupo nel Sannio IS
14. **b&b il medioevo** — Bagnoli del Trigno
   - slug: `b-b-il-medioevo-bagnoli-del-trigno`
   - indirizzo: Via Alto Volta, 12, 86090 Pesche IS
15. **B&B Il Tomolo** — Bagnoli del Trigno
   - slug: `b-b-il-tomolo-bagnoli-del-trigno`
   - indirizzo: Via Beato Antonio Lucci, 36, 86081 Agnone IS
16. **B&B Ivan** — Bagnoli del Trigno
   - slug: `b-b-ivan-bagnoli-del-trigno`
   - indirizzo: Contrada, Viale Castelnuovo, 91, 86081 Agnone IS
17. **B&B La Terrazza** — Bagnoli del Trigno
   - slug: `b-b-la-terrazza-bagnoli-del-trigno`
   - indirizzo: Traversa Via Umberto I, 1, 86085 Pietrabbondante IS
18. **B&B La terrazza del dottore** — Bagnoli del Trigno
   - slug: `b-b-la-terrazza-del-dottore-bagnoli-del-trigno`
   - indirizzo: Via Garibaldi, 64, 86097 Pescolanciano IS
19. **B&B La Torre** — Bagnoli del Trigno
   - slug: `b-b-la-torre-bagnoli-del-trigno`
   - indirizzo: Via Torre, 36, 86095 Frosolone IS
20. **B&B SoleLuna** — Bagnoli del Trigno
   - slug: `b-b-soleluna-bagnoli-del-trigno`
   - indirizzo: IS, Via Ramiera Vecchia, 23, 86170 Isernia IS
21. **B&B Villa Carmen Resort B&B** — Bagnoli del Trigno
   - slug: `b-b-villa-carmen-resort-b-b-bagnoli-del-trigno`
   - indirizzo: Via Padre Abramo, 7, 86025 Ripalimosani CB
22. **Bagnoli del Trigno** — Bagnoli del Trigno
   - slug: `bagnoli-del-trigno-bagnoli-del-trigno`
   - indirizzo: Via Giuseppe Nicola Rossi, 8, 86091 Bagnoli del Trigno IS
23. **Campanile Affitta Camere - Trivento** — Bagnoli del Trigno
   - slug: `campanile-affitta-camere-trivento-bagnoli-del-trigno`
   - indirizzo: Salita Cattedrale, 17, 86029 Trivento CB
24. **Locanda degli Illustri** — Bagnoli del Trigno
   - slug: `locanda-degli-illustri-bagnoli-del-trigno`
   - indirizzo: Corso Antonio Cardarelli, 11, 86094 Civitanova del Sannio IS
25. **Nel verde di Carinci** — Bagnoli del Trigno
   - slug: `nel-verde-di-carinci-bagnoli-del-trigno`
   - indirizzo: Via Coniglio, 45, 86090 Indiprete IS
26. **Affittacamere Cà Marcello** — Bagnoli di Sopra
   - slug: `affittacamere-ca-marcello-bagnoli-di-sopra`
   - indirizzo: Via 28 Aprile 1945, 54, 35043 Monselice PD
27. **Agriturismo I Marzemini** — Bagnoli di Sopra
   - slug: `agriturismo-i-marzemini-bagnoli-di-sopra`
   - indirizzo: Via 2 Giugno, 68, 35020 Legnaro PD
28. **Barchessa Le Quattro Rose** — Bagnoli di Sopra
   - slug: `barchessa-le-quattro-rose-bagnoli-di-sopra`
   - indirizzo: Via Bassa, 60, 35040 Vescovana PD
29. **borgo sabbionara** — Bagnoli di Sopra
   - slug: `borgo-sabbionara-bagnoli-di-sopra`
   - indirizzo: Via Cà Oddo, 32m, 35043 Monselice PD
30. **Corte Carezzabella** — Bagnoli di Sopra
   - slug: `corte-carezzabella-bagnoli-di-sopra`
   - indirizzo: Via Marconi Guglielmo, 752, 45030 San Martino di Venezze RO
31. **Dominio di Bagnoli S.S. di Lorenzo Borletti e C.** — Bagnoli di Sopra
   - slug: `dominio-di-bagnoli-s-s-di-lorenzo-borletti-e-c-bagnoli-di-sopra`
   - indirizzo: Piazza Guglielmo Marconi, 63, 35023 Bagnoli di Sopra PD
32. **L’incontro Bar & Hotel** — Bagnoli di Sopra
   - slug: `l-incontro-bar-hotel-bagnoli-di-sopra`
   - indirizzo: Via Roma, 11, 35030 Galzignano Terme PD
33. **Al Campanile** — Bagnoli Irpino
   - slug: `al-campanile-bagnoli-irpino`
   - indirizzo: Via Michele Lenzi, 24, 83043 Bagnoli Irpino AV
34. **AP APARTMENT B&B** — Bagnoli Irpino
   - slug: `ap-apartment-b-b-bagnoli-irpino`
   - indirizzo: Vico III Bonelli, 2, 83043 Bagnoli Irpino AV
35. **B&B Affittacamere Soggiorno Boccuti** — Bagnoli Irpino
   - slug: `b-b-affittacamere-soggiorno-boccuti-bagnoli-irpino`
   - indirizzo: Via Ippolita Panico, 28, 83048 Montella AV