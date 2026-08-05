# Blocco 131/500 — 35 strutture senza descrizione IT

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

1. **Hotel Merano Grado** — Aquileia
   - slug: `hotel-merano-grado-aquileia`
   - indirizzo: Via A. Vespucci, 3, 34073 Grado GO
2. **Hotel Patriarchi** — Aquileia
   - slug: `hotel-patriarchi-aquileia`
   - indirizzo: Via Giulia Augusta, 12, 33051 Aquileia UD
3. **Hotel Rialto** — Aquileia
   - slug: `hotel-rialto-aquileia`
   - indirizzo: Viale del Turismo, 2, 34073 Grado GO
4. **Hotel Stella Maris, Grado** — Aquileia
   - slug: `hotel-stella-maris-grado-aquileia`
   - indirizzo: Via dei Provveditori, 12, 34073 Grado GO
5. **Hotel Villa ai Fiori** — Aquileia
   - slug: `hotel-villa-ai-fiori-aquileia`
   - indirizzo: Via Giovanni Papini, 4, 34073 Grado GO
6. **Hotel Villa Bernt** — Aquileia
   - slug: `hotel-villa-bernt-aquileia`
   - indirizzo: Via C. Colombo, 5, 34073 Grado GO
7. **Hotel Villa Erica** — Aquileia
   - slug: `hotel-villa-erica-aquileia`
   - indirizzo: Viale Dante Alighieri, 69, 34073 Grado GO
8. **Le Palme** — Aquileia
   - slug: `le-palme-aquileia`
   - indirizzo: Viale del Sole, 35, 34073 Grado GO
9. **Agriturismo Il Riccio** — Aquilonia
   - slug: `agriturismo-il-riccio-aquilonia`
   - indirizzo: SP167, 85028 Rionero In Vulture PZ
10. **B&B Il rifugio del viandante** — Aquilonia
   - slug: `b-b-il-rifugio-del-viandante-aquilonia`
   - indirizzo: Via Matteotti 6, Via Dante Alighieri, 60, 83049 Monteverde AV
11. **B&B Monte Vulture** — Aquilonia
   - slug: `b-b-monte-vulture-aquilonia`
   - indirizzo: Via Marconi, 1, 85028 Rionero In Vulture PZ
12. **B&B Relais Villa Patrizia** — Aquilonia
   - slug: `b-b-relais-villa-patrizia-aquilonia`
   - indirizzo: Corso Europa, 13, 83049 Monteverde AV
13. **B&B Via Roma 205** — Aquilonia
   - slug: `b-b-via-roma-205-aquilonia`
   - indirizzo: Via Roma, 205, 85028 Rionero In Vulture PZ
14. **BeB L'altra casa 1933** — Aquilonia
   - slug: `beb-l-altra-casa-1933-aquilonia`
   - indirizzo: Vico III Pisacani, 85028 Rionero in Vulture PZ
15. **Hotel La Pergola di Spadola Maddalena** — Aquilonia
   - slug: `hotel-la-pergola-di-spadola-maddalena-aquilonia`
   - indirizzo: Via Luigi la Vista, 37, 85028 Rionero in Vulture PZ
16. **Hotel Ristorante San Marco** — Aquilonia
   - slug: `hotel-ristorante-san-marco-aquilonia`
   - indirizzo: Largo Fiera, 16, 85028 Rionero In Vulture PZ
17. **Il Melograno Country House** — Aquilonia
   - slug: `il-melograno-country-house-aquilonia`
   - indirizzo: Via delle Nazioni Unite, snc, 83045 Calitri AV
18. **La Stazione Affittacamere** — Aquilonia
   - slug: `la-stazione-affittacamere-aquilonia`
   - indirizzo: Contrada Lama Guarnieri, 1, 71024 Candela FG
19. **Le stanze di Giulia** — Aquilonia
   - slug: `le-stanze-di-giulia-aquilonia`
   - indirizzo: Vico S. Biagio, 40, 85025 Melfi PZ
20. **Vulcano Monticchio** — Aquilonia
   - slug: `vulcano-monticchio-aquilonia`
   - indirizzo: contrada piano delle nocelle, 85028 Monticchio Bagni PZ
21. **Agriturismo Le Ravicelle** — Aquino
   - slug: `agriturismo-le-ravicelle-aquino`
   - indirizzo: Via Ravicelle, 1, 03031 Aquino FR
22. **Antico Casale Spezia·Pelagalli** — Aquino
   - slug: `antico-casale-spezia-pelagalli-aquino`
   - indirizzo: via Canapine Inf. 55 bis, 03031 Aquino FR
23. **Armonia B&B** — Aquino
   - slug: `armonia-b-b-aquino`
   - indirizzo: Via Rinaldo D'Aquino, 13, 03031 Aquino FR
24. **Azienda Agrituristica La Vecchia Quercia** — Aquino
   - slug: `azienda-agrituristica-la-vecchia-quercia-aquino`
   - indirizzo: Via Filetti Superiore, 70, 03031 Aquino FR
25. **B&b A Casa di Lucia** — Aquino
   - slug: `b-b-a-casa-di-lucia-aquino`
   - indirizzo: Via Vallicella, 63, 03030 Piedimonte San Germano Alta FR
26. **B&B Aquino in Terrazza** — Aquino
   - slug: `b-b-aquino-in-terrazza-aquino`
   - indirizzo: Piazza Municipio, 9, 03031 Aquino FR
27. **B&B La Staffa** — Aquino
   - slug: `b-b-la-staffa-aquino`
   - indirizzo: Via San Pietro Vetere, 15, 03031 Aquino FR
28. **B&B Le Camerette di Edda cin:IT060019C1CYQMM9U3** — Aquino
   - slug: `b-b-le-camerette-di-edda-cin-it060019c1cyqmm9u3-aquino`
   - indirizzo: Via Raccordo Ausonia, 8, 03043 Cassino FR
29. **Boteroom Relais** — Aquino
   - slug: `boteroom-relais-aquino`
   - indirizzo: Località Volla, 94/96, 03030 Piedimonte San Germano FR
30. **Casale Shanti** — Aquino
   - slug: `casale-shanti-aquino`
   - indirizzo: Via Venezia, 65, 03030 Piedimonte San Germano FR
31. **Giga Hotel** — Aquino
   - slug: `giga-hotel-aquino`
   - indirizzo: Via Str. Servizio FIAT, 1/A, 03030 Villa Santa Lucia FR
32. **Grand Hotel Pavone** — Aquino
   - slug: `grand-hotel-pavone-aquino`
   - indirizzo: Via Ausonia, 03043 Cassino FR
33. **Hotel San Germano** — Aquino
   - slug: `hotel-san-germano-aquino`
   - indirizzo: Via Calatafimi, 5, 03030 Piedimonte San Germano FR
34. **La stazione di posta** — Aquino
   - slug: `la-stazione-di-posta-aquino`
   - indirizzo: Via degli Eroi, 9, 03043 Cassino FR
35. **Ricci Rooms** — Aquino
   - slug: `ricci-rooms-aquino`
   - indirizzo: Via Ortella 23 in prossimità della, Via Francigena, 03038 Roccasecca FR