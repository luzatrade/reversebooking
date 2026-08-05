# Blocco 421/500 — 35 strutture senza descrizione IT

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

1. **S'Imbragu B&B** — Capoterra
   - slug: `s-imbragu-b-b-capoterra`
   - indirizzo: Via Santa Barbara, 13, 09012 Capoterra CA
2. **Sa Sindria - Cagliari** — Capoterra
   - slug: `sa-sindria-cagliari-capoterra`
   - indirizzo: Viale Sant'Avendrace, 351, 09122 Cagliari CA
3. **Villa Donna Maria** — Capoterra
   - slug: `villa-donna-maria-capoterra`
   - indirizzo: Corso A.Gramsci, 23, 09012 Capoterra CA
4. **B&B Il castello di Denisa** — Capovalle
   - slug: `b-b-il-castello-di-denisa-capovalle`
   - indirizzo: Via Castello, 4, 25074 Idro BS
5. **B&B La Casa di Barbara** — Capovalle
   - slug: `b-b-la-casa-di-barbara-capovalle`
   - indirizzo: Via Balotello, 3, 25074 Crone BS
6. **Casa Paola** — Capovalle
   - slug: `casa-paola-capovalle`
   - indirizzo: CRV s.r.l, Via Sasse, 40, 25074 Idro BS
7. **Hotel, Bar, Gelateria Alpino** — Capovalle
   - slug: `hotel-bar-gelateria-alpino-capovalle`
   - indirizzo: Via Lungo Lago Vittoria, 14, 25074 Crone BS
8. **Sportcamping & Glamping Resort Rio Vantone** — Capovalle
   - slug: `sportcamping-glamping-resort-rio-vantone-capovalle`
   - indirizzo: Via Vantone, 45, 25074 Idro BS
9. **Albergo Ristorante La Lucciola** — Cappadocia
   - slug: `albergo-ristorante-la-lucciola-cappadocia`
   - indirizzo: Via Giorgina, 4, 67069 Tagliacozzo AQ
10. **Azienda Agrituristica La Giarda** — Cappadocia
   - slug: `azienda-agrituristica-la-giarda-cappadocia`
   - indirizzo: Via Valeria, km 102/200, 67069 Tagliacozzo AQ
11. **Europing Di Marsia** — Cappadocia
   - slug: `europing-di-marsia-cappadocia`
   - indirizzo: 67069 Tagliacozzo AQ
12. **Hotel Park** — Cappadocia
   - slug: `hotel-park-cappadocia`
   - indirizzo: Via Tiburtina Valeria, Km 99, 67069 Tagliacozzo AQ
13. **Hotel ristorante pizzeria MIRAMONTI** — Cappadocia
   - slug: `hotel-ristorante-pizzeria-miramonti-cappadocia`
   - indirizzo: SS 5 Tiburtina Valeria var, 87, 67069 Tagliacozzo AQ
14. **La Rondine** — Cappadocia
   - slug: `la-rondine-cappadocia`
   - indirizzo: Via Borgo Nuovo, 22, 67069 Tagliacozzo AQ
15. **Dellearti Design Hotel** — Cappella Cantone
   - slug: `dellearti-design-hotel-cappella-cantone`
   - indirizzo: Via Geremia Bonomelli, 8, 26100 Cremona CR
16. **Foresteria La Vista** — Cappella Cantone
   - slug: `foresteria-la-vista-cappella-cantone`
   - indirizzo: Piazza Sant'Antonio Maria Zaccaria, 7, 26100 Cremona CR
17. **Hotel Astoria Cremona** — Cappella Cantone
   - slug: `hotel-astoria-cremona-cappella-cantone`
   - indirizzo: Via Solferino, 9, 26100 Cremona CR
18. **Hotel Duomo** — Cappella Cantone
   - slug: `hotel-duomo-cappella-cantone`
   - indirizzo: Via dei Gonfalonieri, 13, 26100 Cremona CR
19. **Hotel impero** — Cappella Cantone
   - slug: `hotel-impero-cappella-cantone`
   - indirizzo: Piazza Della Pace, 21, 26100 Cremona CR
20. **Palazzo Guazzoni Zaccaria** — Cappella Cantone
   - slug: `palazzo-guazzoni-zaccaria-cappella-cantone`
   - indirizzo: Corso Pietro Vacchelli, 60, 26100 Cremona CR
21. **Agriturismo San Carlo** — Cappella de' Picenardi
   - slug: `agriturismo-san-carlo-cappella-de-picenardi`
   - indirizzo: Piazza Martiri della Libertà, 22, 26033 Cremona CR
22. **Hotel Ristorante Palazzo Quaranta** — Cappella de' Picenardi
   - slug: `hotel-ristorante-palazzo-quaranta-cappella-de-picenardi`
   - indirizzo: Via Largo della Vittoria, Snc, 26031 Isola Dovarese CR
23. **Agriturismo Il Bosco** — Cappella Maggiore
   - slug: `agriturismo-il-bosco-cappella-maggiore`
   - indirizzo: Via Maren, 7, 31029 Vittorio Veneto TV
24. **Agriturismo Lemire** — Cappella Maggiore
   - slug: `agriturismo-lemire-cappella-maggiore`
   - indirizzo: Via Maset, 55, 31020 San Pietro di Feletto TV
25. **Agriturismo ValBarè** — Cappella Maggiore
   - slug: `agriturismo-valbare-cappella-maggiore`
   - indirizzo: Via Case Fossa, 32, 31010 Fregona TV
26. **Alice Relais nelle Vigne** — Cappella Maggiore
   - slug: `alice-relais-nelle-vigne-cappella-maggiore`
   - indirizzo: Via G. Giardino, 94, 31029 Carpesica TV
27. **B&B Al Giardino dei Laghi** — Cappella Maggiore
   - slug: `b-b-al-giardino-dei-laghi-cappella-maggiore`
   - indirizzo: Via Grava Giuseppe, 1 A, 31020 Revine Lago TV
28. **B&B San Martino Colle Umberto** — Cappella Maggiore
   - slug: `b-b-san-martino-colle-umberto-cappella-maggiore`
   - indirizzo: Via rossini, 1, 31014 Colle Umberto TV
29. **B&B Villa Carli** — Cappella Maggiore
   - slug: `b-b-villa-carli-cappella-maggiore`
   - indirizzo: di caneva, Via Carmine, 6, 33070 Stevenà PN
30. **Cà Dea Gondola** — Cappella Maggiore
   - slug: `ca-dea-gondola-cappella-maggiore`
   - indirizzo: Borgo Canalet, 29, 31026 Sarmede TV
31. **Casa del nonno Leone** — Cappella Maggiore
   - slug: `casa-del-nonno-leone-cappella-maggiore`
   - indirizzo: Località Colmaggiore di Sopra, 54, 31020 Colmaggiore TV
32. **Da Caterina** — Cappella Maggiore
   - slug: `da-caterina-cappella-maggiore`
   - indirizzo: Via A. Parravicini, 14, 31029 Vittorio Veneto TV
33. **Fratte Albergo Ristorante** — Cappella Maggiore
   - slug: `fratte-albergo-ristorante-cappella-maggiore`
   - indirizzo: Via Fratte, 37, 31010 Fregona TV
34. **Hotel Cappella** — Cappella Maggiore
   - slug: `hotel-cappella-cappella-maggiore`
   - indirizzo: Str. Pecëi, 17, 39033 Colfosco BZ
35. **Hotel Le Macine** — Cappella Maggiore
   - slug: `hotel-le-macine-cappella-maggiore`
   - indirizzo: Via Lino Carlo del Favero, 19, 31029 Vittorio Veneto TV