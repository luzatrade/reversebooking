# Blocco 400/500 — 35 strutture senza descrizione IT

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

1. **ALBERGO MUSOLESI** — Camugnano
   - slug: `albergo-musolesi-camugnano`
   - indirizzo: Piazza Madonna Della Neve, 3, 40048 San Benedetto Val di Sambro BO
2. **B&B Antico Mulino** — Camugnano
   - slug: `b-b-antico-mulino-camugnano`
   - indirizzo: Località Roncorozzo, 73, 40032 Camugnano BO
3. **B&B Picchio** — Camugnano
   - slug: `b-b-picchio-camugnano`
   - indirizzo: Via della Libertà, 4, 40048 Madonna dei Fornelli BO
4. **BorgoGuerzano77** — Camugnano
   - slug: `borgoguerzano77-camugnano`
   - indirizzo: Via Vigo Guerzano 77, 40032 Camugnano BO
5. **Hotel Dolores** — Camugnano
   - slug: `hotel-dolores-camugnano`
   - indirizzo: Via la Valle, 28, 40032 Camugnano BO
6. **Hotel Due Laghi** — Camugnano
   - slug: `hotel-due-laghi-camugnano`
   - indirizzo: Via Baigno Grosso, 102, 40032 Baigno BO
7. **Nomad Stay** — Camugnano
   - slug: `nomad-stay-camugnano`
   - indirizzo: Via Romana Antica, 37, 40048 Madonna dei Fornelli BO
8. **Rifugio la casa delle Guardie** — Camugnano
   - slug: `rifugio-la-casa-delle-guardie-camugnano`
   - indirizzo: degli dei 2/A, 40048 San Benedetto Val di Sambro BO
9. **Transilvania Rockstar Hotel** — Camugnano
   - slug: `transilvania-rockstar-hotel-camugnano`
   - indirizzo: Via Autostazione, 95, 40048 San Benedetto Val di Sambro BO
10. **Via romana antica 41** — Camugnano
   - slug: `via-romana-antica-41-camugnano`
   - indirizzo: Via Romana Antica, 41, 40048 Madonna dei Fornelli BO
11. **Albergo Belvedere** — Canal San Bovo
   - slug: `albergo-belvedere-canal-san-bovo`
   - indirizzo: Via Venezia, 32, 38054 San Martino di Castrozza TN
12. **Albergo Cima D’Asta** — Canal San Bovo
   - slug: `albergo-cima-d-asta-canal-san-bovo`
   - indirizzo: Località Cicona, 1S, 38050 Cicona TN
13. **Albergo Conca Verde** — Canal San Bovo
   - slug: `albergo-conca-verde-canal-san-bovo`
   - indirizzo: Via delle Fonti, 4, 38054 Transacqua TN
14. **Albergo Lagorai** — Canal San Bovo
   - slug: `albergo-lagorai-canal-san-bovo`
   - indirizzo: Località Lausen, 12, 38050 Canal San Bovo TN
15. **Albergo Serenella** — Canal San Bovo
   - slug: `albergo-serenella-canal-san-bovo`
   - indirizzo: Località Zortea, 56, 38050 Zortea TN
16. **B&B Val Maschi** — Canal San Bovo
   - slug: `b-b-val-maschi-canal-san-bovo`
   - indirizzo: 32033 Lamon BL
17. **CASA MARIA Bed & Breakfast** — Canal San Bovo
   - slug: `casa-maria-bed-breakfast-canal-san-bovo`
   - indirizzo: Località Danoli, 1, 38050 Canal San Bovo TN
18. **Eco-Baita Natura Spensierata** — Canal San Bovo
   - slug: `eco-baita-natura-spensierata-canal-san-bovo`
   - indirizzo: Località Simbolda, 88, 38050 Canal San Bovo TN
19. **Edelweiss Alp Rooms** — Canal San Bovo
   - slug: `edelweiss-alp-rooms-canal-san-bovo`
   - indirizzo: Via Municipio Vecchio, 5, 38053 Castello Tesino TN
20. **Family Hotel Colfosco San Martino di Castrozza** — Canal San Bovo
   - slug: `family-hotel-colfosco-san-martino-di-castrozza-canal-san-bovo`
   - indirizzo: Via Passo Rolle, 20, 38058 San Martino di Castrozza TN
21. **GH Hotel Fratazza** — Canal San Bovo
   - slug: `gh-hotel-fratazza-canal-san-bovo`
   - indirizzo: Via Passo Rolle, 2, 38058 San Martino di Castrozza TN
22. **Hotel Astoria** — Canal San Bovo
   - slug: `hotel-astoria-canal-san-bovo`
   - indirizzo: Viale Italia, 2, 38054 Primiero San Martino di Castrozza TN
23. **Hotel Castel Pietra** — Canal San Bovo
   - slug: `hotel-castel-pietra-canal-san-bovo`
   - indirizzo: Via Venezia, 28, 38054 Transacqua TN
24. **Hotel Miravalle** — Canal San Bovo
   - slug: `hotel-miravalle-canal-san-bovo`
   - indirizzo: Via Nazionale, 213, 38050 Imer TN
25. **Hotel Plank** — Canal San Bovo
   - slug: `hotel-plank-canal-san-bovo`
   - indirizzo: Via Laghetto, 35, 38054 San Martino di Castrozza TN
26. **Hotel Salgetti** — Canal San Bovo
   - slug: `hotel-salgetti-canal-san-bovo`
   - indirizzo: Via Roma, 149, 38050 Mezzano TN
27. **Park Hotel Miramonti** — Canal San Bovo
   - slug: `park-hotel-miramonti-canal-san-bovo`
   - indirizzo: V. Hermann Panzer, 2, 38054 San Martino di Castrozza TN
28. **Residence Lastei** — Canal San Bovo
   - slug: `residence-lastei-canal-san-bovo`
   - indirizzo: V. Hermann Panzer, 3, 38054 San Martino di Castrozza TN
29. **Stella d'Oro Lamon** — Canal San Bovo
   - slug: `stella-d-oro-lamon-canal-san-bovo`
   - indirizzo: Via Roma, 7, 32033 Lamon BL
30. **Agrisuite Le Querce del Vareglio** — Canale
   - slug: `agrisuite-le-querce-del-vareglio-canale`
   - indirizzo: Cascina Vareglio, 12043 Canale CN
31. **Agriturismo dei Magi** — Canale
   - slug: `agriturismo-dei-magi-canale`
   - indirizzo: Via Magliano, 3, 12040 Priocca CN
32. **Cantina Franco Giacinto e Agriturismo Cà Colomba** — Canale
   - slug: `cantina-franco-giacinto-e-agriturismo-ca-colomba-canale`
   - indirizzo: Borgata Valmolina, 60, 14015 San Damiano d'Asti AT
33. **Casalora Camere di Charme - La Madernassa Resort** — Canale
   - slug: `casalora-camere-di-charme-la-madernassa-resort-canale`
   - indirizzo: Loc. Lora, 3, 12050 Guarene CN
34. **Il Borgo B&B** — Canale
   - slug: `il-borgo-b-b-canale`
   - indirizzo: Via Trento, 2, 12050 Castellinaldo d'Alba CN
35. **La Madernassa Resort** — Canale
   - slug: `la-madernassa-resort-canale`
   - indirizzo: Reg. Lora, 2, 12050 Guarene CN