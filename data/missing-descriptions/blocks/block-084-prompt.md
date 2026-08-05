# Blocco 84/500 — 35 strutture senza descrizione IT

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

1. **B&B Sant'Anna Cairo Montenotte (SV)** — Altare
   - slug: `b-b-sant-anna-cairo-montenotte-sv-altare`
   - indirizzo: Str. Sant'Anna, 13, 17014 Cairo Montenotte SV
2. **Elfo degli Ulivi** — Altare
   - slug: `elfo-degli-ulivi-altare`
   - indirizzo: Via Guardia, 29, 17026 Tosse SV
3. **Er Mirin il mulino di Carcare** — Altare
   - slug: `er-mirin-il-mulino-di-carcare-altare`
   - indirizzo: Via S. Giovanni del Monte, 137, 17043 Carcare SV
4. **Hotel Giovanna B&B** — Altare
   - slug: `hotel-giovanna-b-b-altare`
   - indirizzo: Via Serra, 25, 17028 Spotorno SV
5. **Hotel La Gaietta** — Altare
   - slug: `hotel-la-gaietta-altare`
   - indirizzo: Piazza della Libertà, 98, 17017 Millesimo SV
6. **La Conchiglia** — Altare
   - slug: `la-conchiglia-altare`
   - indirizzo: Vico Santa Caterina, 5, 17028 Spotorno SV
7. **La Dolce Vita** — Altare
   - slug: `la-dolce-vita-altare`
   - indirizzo: Via Guardia, 3, 17026 Tosse SV
8. **Locanda Contrada dei Fattori** — Altare
   - slug: `locanda-contrada-dei-fattori-altare`
   - indirizzo: Strada Bellini, 2, 17014 Cairo Montenotte SV
9. **Miramare** — Altare
   - slug: `miramare-altare`
   - indirizzo: Via Umberto Giordano, 11r, 17100 Savona SV
10. **Nelly G** — Altare
   - slug: `nelly-g-altare`
   - indirizzo: Via Canto di Sopra, 26, 17020 Calice Ligure SV
11. **Se mi vuoi lasciare** — Altare
   - slug: `se-mi-vuoi-lasciare-altare`
   - indirizzo: Via Vecchia di Plodio, 14, 17043 Carcare SV
12. **Trattoria Locanda San Rocco** — Altare
   - slug: `trattoria-locanda-san-rocco-altare`
   - indirizzo: Via Restagno Annibale, 1, 17041 Altare SV
13. **Affittacamere da Silvia** — Altavalle
   - slug: `affittacamere-da-silvia-altavalle`
   - indirizzo: Loc. Bissina- Valle, di, 38091 Daone TN
14. **Agritur All'OLIVO** — Altavalle
   - slug: `agritur-all-olivo-altavalle`
   - indirizzo: Località Vallata, n° 1, 38092 Faver TN
15. **Agritur Calvola** — Altavalle
   - slug: `agritur-calvola-altavalle`
   - indirizzo: Via Villa Calvola, 62, 38060 Ville del Monte TN
16. **Agritur Due Valli** — Altavalle
   - slug: `agritur-due-valli-altavalle`
   - indirizzo: Via Plan, 15, 38020 Cis TN
17. **Agritur le Cavade** — Altavalle
   - slug: `agritur-le-cavade-altavalle`
   - indirizzo: Localita Cavade, 1, 38034 Cembra TN
18. **Agritur Leita** — Altavalle
   - slug: `agritur-leita-altavalle`
   - indirizzo: Via S. Emerenziana, 70, 38019 Tuenno TN
19. **Agritur Ponte Alto** — Altavalle
   - slug: `agritur-ponte-alto-altavalle`
   - indirizzo: Via alla Cascata, 27, 38123 Trento TN
20. **Agritur Val d'Adige** — Altavalle
   - slug: `agritur-val-d-adige-altavalle`
   - indirizzo: Localita' Roncafort, 78/a, 38121 Trento TN
21. **Agriturismo Alberobello** — Altavalle
   - slug: `agriturismo-alberobello-altavalle`
   - indirizzo: Localita' alpe Lavarotto, 1, 28846 Borgomezzavalle VB
22. **Agriturismo Margone Trento** — Altavalle
   - slug: `agriturismo-margone-trento-altavalle`
   - indirizzo: Via Margone, 37, 38123 Ravina TN
23. **Agriturismo Pianrestel** — Altavalle
   - slug: `agriturismo-pianrestel-altavalle`
   - indirizzo: Via Gastaldo, 26, 38033 Cavalese TN
24. **Albergo Bar Miravalle** — Altavalle
   - slug: `albergo-bar-miravalle-altavalle`
   - indirizzo: Frazione Cavrasto, n° 2, 38071 Bleggio Superiore TN
25. **Albergo Miravalle Fai della Paganella** — Altavalle
   - slug: `albergo-miravalle-fai-della-paganella-altavalle`
   - indirizzo: Via Cembran 9-11, 38010 Fai della Paganella TN
26. **BeB Trattoria Miravalle** — Altavalle
   - slug: `beb-trattoria-miravalle-altavalle`
   - indirizzo: Localita, Zona Artigianale Polina, 6, 38087 Roncone TN
27. **Bed & Breakfast "Casa delle fate"** — Altavalle
   - slug: `bed-breakfast-casa-delle-fate-altavalle`
   - indirizzo: Via Castel la Santa 04 Termon Termon di, Via Castel la Santa, 4, 38010 Termon TN
28. **Hotel Garní Alta Valle** — Altavalle
   - slug: `hotel-garni-alta-valle-altavalle`
   - indirizzo: Via Nazionale, 1, 25050 Vione BS
29. **Hotel Miravalle** — Altavalle
   - slug: `hotel-miravalle-altavalle`
   - indirizzo: Strada Nòa, 22, 38078 San Lorenzo Dorsino TN
30. **Locanda Del Passatore - Home Restaurant - B&B** — Altavalle
   - slug: `locanda-del-passatore-home-restaurant-b-b-altavalle`
   - indirizzo: Via Campagna, 16, 38092 Faver TN
31. **"LE RIVE"** — Altavilla Irpina
   - slug: `le-rive-altavilla-irpina`
   - indirizzo: Unnamed Road,83010, 83010 Tufo AV
32. **Agriturismo e Winery FEUDO DI CASTELMOZZO** — Altavilla Irpina
   - slug: `agriturismo-e-winery-feudo-di-castelmozzo-altavilla-irpina`
   - indirizzo: Via Tuori, 23, 83030 Santa Paolina AV
33. **B&B - VILLA NOEMI EVENTI** — Altavilla Irpina
   - slug: `b-b-villa-noemi-eventi-altavilla-irpina`
   - indirizzo: Contrada Bosco della Corte, 1, 83030 Prata di Principato Ultra AV
34. **B&B "La casa della Nonna"** — Altavilla Irpina
   - slug: `b-b-la-casa-della-nonna-altavilla-irpina`
   - indirizzo: Via Provinciale 56 n.23, Passo Serra, 83038 Montemiletto AV
35. **B&B Le Colonne** — Altavilla Irpina
   - slug: `b-b-le-colonne-altavilla-irpina`
   - indirizzo: Via Dante, 14/12, 83030 Montefusco AV