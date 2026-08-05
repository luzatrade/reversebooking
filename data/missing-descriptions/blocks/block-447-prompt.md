# Blocco 447/500 — 35 strutture senza descrizione IT

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

1. **Albergo Bar Ristorante Casa Del Romano** — Carrega Ligure
   - slug: `albergo-bar-ristorante-casa-del-romano-carrega-ligure`
   - indirizzo: Località Casa del Romano, 62, 16020 Fascia GE
2. **Art Bed & Breakfast** — Carrega Ligure
   - slug: `art-bed-breakfast-carrega-ligure`
   - indirizzo: Località Croso, 26, 15060 Carrega Ligure AL
3. **B & B Jolly Gorreto** — Carrega Ligure
   - slug: `b-b-jolly-gorreto-carrega-ligure`
   - indirizzo: Via Capoluogo, 4, 16020 Gorreto GE
4. **Hotel Miramonti** — Carrega Ligure
   - slug: `hotel-miramonti-carrega-ligure`
   - indirizzo: Via Capoluogo, 1 / 3, 16020 Gorreto GE
5. **Agriturismo Giandriale** — Carro
   - slug: `agriturismo-giandriale-carro`
   - indirizzo: Via Giandriali, 5, 19010 Tavarone SP
6. **Agriturismo Il Filo di Paglia** — Carro
   - slug: `agriturismo-il-filo-di-paglia-carro`
   - indirizzo: Via S. Nicolò, 11, 19012 Pavareto SP
7. **Agriturismo TERRA DEL BOSCO** — Carro
   - slug: `agriturismo-terra-del-bosco-carro`
   - indirizzo: Foce d' Agneta, Case sparse n. 22, 19020 Sesta Godano SP
8. **Agriturismo Torsivì** — Carro
   - slug: `agriturismo-torsivi-carro`
   - indirizzo: Località Torsivi, 16030 Castiglione Chiavarese GE
9. **B&B Cà di Bollo** — Carro
   - slug: `b-b-ca-di-bollo-carro`
   - indirizzo: Località Casale, 44, 16030 Moneglia GE
10. **b&b Perla sul Mare Moneglia** — Carro
   - slug: `b-b-perla-sul-mare-moneglia-carro`
   - indirizzo: Località Morteo, 103, 16030 Moneglia GE
11. **Cinque Terre Nel Sole** — Carro
   - slug: `cinque-terre-nel-sole-carro`
   - indirizzo: 19013 Foce SP
12. **Hotel Bar Corallo Moneglia** — Carro
   - slug: `hotel-bar-corallo-moneglia-carro`
   - indirizzo: Via Cristoforo Colombo, 20, 16030 Moneglia GE
13. **Hotel Clelia** — Carro
   - slug: `hotel-clelia-carro`
   - indirizzo: Corso Italia, 23, 19013 Deiva Marina SP
14. **Hotel Silvia** — Carro
   - slug: `hotel-silvia-carro`
   - indirizzo: Località Costa di Framura, 4, 19014 Framura SP
15. **Maison44 Guesthouse Bar Bistrot** — Carro
   - slug: `maison44-guesthouse-bar-bistrot-carro`
   - indirizzo: SS 1, 44, 19020 Carrodano Inferiore SP
16. **Ostello ninin de ma'** — Carro
   - slug: `ostello-ninin-de-ma-carro`
   - indirizzo: Cod citr 0011014 os 0003, Località Costa di Framura, 52, 19014 Framura SP
17. **Abetaia** — Carrodano
   - slug: `abetaia-carrodano`
   - indirizzo: Località Pian Del Momo, 19015 Levanto SP
18. **Affittacamere Cinque Terre Route 66** — Carrodano
   - slug: `affittacamere-cinque-terre-route-66-carrodano`
   - indirizzo: SS 1, 66, 19020 Carrodano Inferiore SP
19. **Agriturismo Ghirlanda Norma Rita** — Carrodano
   - slug: `agriturismo-ghirlanda-norma-rita-carrodano`
   - indirizzo: Piazza Giacomo Matteotti, 13, 19020 Carrodano Inferiore SP
20. **B&B Il Ghiro** — Carrodano
   - slug: `b-b-il-ghiro-carrodano`
   - indirizzo: Località Lavaggiorosso, snc, 19015 Levanto SP
21. **Badwatercreek** — Carrodano
   - slug: `badwatercreek-carrodano`
   - indirizzo: SS 1, 82, 19020 Carrodano Inferiore SP
22. **CasafioRita** — Carrodano
   - slug: `casafiorita-carrodano`
   - indirizzo: Vicolo del Portico, 3, 19020 Mattarana SP
23. **La Fogona** — Carrodano
   - slug: `la-fogona-carrodano`
   - indirizzo: 7J3M+P7, 19020 Carrodano SP
24. **La Peschiera Sul Vara** — Carrodano
   - slug: `la-peschiera-sul-vara-carrodano`
   - indirizzo: Localita' Peschiera 14, 19020 Sesta Godano SP
25. **Agriturismo Nonna Du** — Carrosio
   - slug: `agriturismo-nonna-du-carrosio`
   - indirizzo: Loc. Vallemme Zamblea, 14, 15066 Gavi AL
26. **Residence "il Grappolo di Gavi"** — Carrosio
   - slug: `residence-il-grappolo-di-gavi-carrosio`
   - indirizzo: Località Fabbrica, 3, 15066 Gavi AL
27. **Tenuta Cascina Marenco** — Carrosio
   - slug: `tenuta-cascina-marenco-carrosio`
   - indirizzo: 15066 Gavi AL
28. **Vista sul forte** — Carrosio
   - slug: `vista-sul-forte-carrosio`
   - indirizzo: Localita zerbetta 66, 15066 Gavi AL
29. **Albergo Due Mori** — Carr�
   - slug: `albergo-due-mori-carr`
   - indirizzo: Corso Mazzini, 73/75, 36063 Marostica VI
30. **Antico Hotel Vicenza** — Carr�
   - slug: `antico-hotel-vicenza-carr`
   - indirizzo: Stradella dei Nodari, 5, 36100 Vicenza VI
31. **Duo Rooms** — Carr�
   - slug: `duo-rooms-carr`
   - indirizzo: Piazza Roma, 5, 12084 Mondovì CN
32. **Eremes Rooms & Apartments** — Carr�
   - slug: `eremes-rooms-apartments-carr`
   - indirizzo: V. Spinetta, 29, 12100 Cuneo CN
33. **Hotel Campo Marzio** — Carr�
   - slug: `hotel-campo-marzio-carr`
   - indirizzo: Viale Roma, 21, 36100 Vicenza VI
34. **Hotel Castello di Santa Vittoria - Santa vittoria d’alba** — Carr�
   - slug: `hotel-castello-di-santa-vittoria-santa-vittoria-carr`
   - indirizzo: Via Cagna, 4, 12069 Santa Vittoria d'Alba CN
35. **Hotel Palazzo Scamozzi** — Carr�
   - slug: `hotel-palazzo-scamozzi-carr`
   - indirizzo: Corso Andrea Palladio, 40, 36100 Vicenza VI