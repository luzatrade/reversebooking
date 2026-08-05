# Blocco 122/500 — 35 strutture senza descrizione IT

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

1. **Contedoro Living - Affittacamere** — Anzano di Puglia
   - slug: `contedoro-living-affittacamere-anzano-di-puglia`
   - indirizzo: Via Brecceto, 1, 83031 Ariano Irpino AV
2. **Hotel Ristorante Pizzeria Prestige** — Anzano di Puglia
   - slug: `hotel-ristorante-pizzeria-prestige-anzano-di-puglia`
   - indirizzo: Via Lungarella, 9, 83058 Trevico AV
3. **Albergo Ristorante La Primula** — Anzi
   - slug: `albergo-ristorante-la-primula-anzi`
   - indirizzo: Via delle Primule, 84, 85100 Potenza PZ
4. **B&B A Voir** — Anzi
   - slug: `b-b-a-voir-anzi`
   - indirizzo: Via Cesare Beccaria, 11, 85010 Anzi PZ
5. **Bio Agriturismo Sant'Elia** — Anzi
   - slug: `bio-agriturismo-sant-elia-anzi`
   - indirizzo: C.da Sant'Elia, snc, 85010 Calvello PZ
6. **Family** — Anzi
   - slug: `family-anzi`
   - indirizzo: Via Alessandro Manzoni, 20/primo piano, 85100 Potenza PZ
7. **IL DIRETTO HOTEL** — Anzi
   - slug: `il-diretto-hotel-anzi`
   - indirizzo: V.le Guglielmo Marconi, 377, 85100 Potenza PZ
8. **L’Antica Quercia** — Anzi
   - slug: `l-antica-quercia-anzi`
   - indirizzo: Contrada Isca d’ecclesia 3, 85010 Vaglio Basilicata PZ
9. **La casa di Gio** — Anzi
   - slug: `la-casa-di-gio-anzi`
   - indirizzo: Contrada Braida, SNC, 85014 Laurenzana PZ
10. **La Casa Nel Bosco** — Anzi
   - slug: `la-casa-nel-bosco-anzi`
   - indirizzo: Località Casone, Caprara Bosco, di, 85010 Rifreddo PZ
11. **Albachiara Bed & Breakfast** — Anzio
   - slug: `albachiara-bed-breakfast-anzio`
   - indirizzo: Via dell' Armellino, 99, 00042 Anzio RM
12. **Astura Palace Hotel** — Anzio
   - slug: `astura-palace-hotel-anzio`
   - indirizzo: V.le Giacomo Matteotti, 75, 00048 Nettuno RM
13. **B&B ANZIO DI MARE E DI SALE** — Anzio
   - slug: `b-b-anzio-di-mare-e-di-sale-anzio`
   - indirizzo: Via Severino Ferrari, n° 43, 00042 Anzio RM
14. **B&B La villetta rossa** — Anzio
   - slug: `b-b-la-villetta-rossa-anzio`
   - indirizzo: Via Benedetto Croce, 22, 00042 Anzio RM
15. **Bed and Breakfast Villa Viviana** — Anzio
   - slug: `bed-and-breakfast-villa-viviana-anzio`
   - indirizzo: Via Colle Cocchino, 241, 00042 Anzio RM
16. **Cavalieri D'Oro Luxury House ad Anzio** — Anzio
   - slug: `cavalieri-d-oro-luxury-house-ad-anzio-anzio`
   - indirizzo: Piazzale Sant'Antonio, 3, 00042 Anzio RM
17. **Grand Hotel Dei Cesari** — Anzio
   - slug: `grand-hotel-dei-cesari-anzio`
   - indirizzo: Via Mantova, 3, 00042 Anzio RM
18. **Halex Room & Food** — Anzio
   - slug: `halex-room-food-anzio`
   - indirizzo: Via Friuli, 10, 00048 Nettuno RM
19. **Hotel L'Approdo** — Anzio
   - slug: `hotel-l-approdo-anzio`
   - indirizzo: Via Ardeatina, 74, 00042 Anzio RM
20. **Hotel La Bussola Anzio** — Anzio
   - slug: `hotel-la-bussola-anzio-anzio`
   - indirizzo: Via Aldobrandini, 10, 00042 Anzio RM
21. **Hotel Parco dei Principi** — Anzio
   - slug: `hotel-parco-dei-principi-anzio`
   - indirizzo: Via Nettunense, 61, 00042 Anzio RM
22. **Hotel Riviera Anzio** — Anzio
   - slug: `hotel-riviera-anzio-anzio`
   - indirizzo: Riviera Vittorio Mallozzi, 37, 00042 Anzio RM
23. **Hotel Serpa** — Anzio
   - slug: `hotel-serpa-anzio`
   - indirizzo: Via Ardeatina, 264, 00042 Anzio RM
24. **Hotel Villa Anna** — Anzio
   - slug: `hotel-villa-anna-anzio`
   - indirizzo: Corso San Francesco, 159, 00042 Anzio RM
25. **La piazzetta Anzio** — Anzio
   - slug: `la-piazzetta-anzio-anzio`
   - indirizzo: Via Alfredo Baccarini, 5, 00042 Anzio RM
26. **Lovelybed** — Anzio
   - slug: `lovelybed-anzio`
   - indirizzo: Piazza Don Luigi Sturzo, 24, 04011 Aprilia LT
27. **Off House Borgo Suite, Nettuno** — Anzio
   - slug: `off-house-borgo-suite-nettuno-anzio`
   - indirizzo: Via del Baluardo, 19, 00048 Nettuno RM
28. **Resort la Magnolia** — Anzio
   - slug: `resort-la-magnolia-anzio`
   - indirizzo: V. delle Magnolie, 6, 00042 Anzio RM
29. **TC Hotel** — Anzio
   - slug: `tc-hotel-anzio`
   - indirizzo: Via delle Tuberose, 6, 00042 Anzio RM
30. **Villa Marina** — Anzio
   - slug: `villa-marina-anzio`
   - indirizzo: Viale Severiano, 3, 00042 Anzio RM
31. **Affittacamere Eroi** — Anzola d'Ossola
   - slug: `affittacamere-eroi-anzola-d-ossola`
   - indirizzo: Via 42 Martiri, 221, 28924 Area Produttiva Stazione Fs VB
32. **B&B San Giorgio** — Anzola d'Ossola
   - slug: `b-b-san-giorgio-anzola-d-ossola`
   - indirizzo: Via Provinciale, 37, 28859 Cosa VB
33. **Boscotenso** — Anzola d'Ossola
   - slug: `boscotenso-anzola-d-ossola`
   - indirizzo: Località Ravalle, 28803 Premosello-chiovenda VB
34. **Casa della Capra** — Anzola d'Ossola
   - slug: `casa-della-capra-anzola-d-ossola`
   - indirizzo: Via Pallanza, 25, 28802 Mergozzo VB
35. **Circolo di Colloro** — Anzola d'Ossola
   - slug: `circolo-di-colloro-anzola-d-ossola`
   - indirizzo: Via premosello 16 frazione Colloro Premosello chiovenda Colloro, 28803 Premosello-chiovenda VB