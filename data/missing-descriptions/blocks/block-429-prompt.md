# Blocco 429/500 — 35 strutture senza descrizione IT

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

1. **Affittacamere Famiglia Do** — Caramagna Piemonte
   - slug: `affittacamere-famiglia-do-caramagna-piemonte`
   - indirizzo: Via Umberto I, 10, 12035 Racconigi CN
2. **Al Calar della Sera** — Caramagna Piemonte
   - slug: `al-calar-della-sera-caramagna-piemonte`
   - indirizzo: Vicolo Magenta, 4, 12048 Sommariva del Bosco CN
3. **All'Imperatore** — Caramagna Piemonte
   - slug: `all-imperatore-caramagna-piemonte`
   - indirizzo: Via S. Pietro, 29, 12062 Cherasco CN
4. **B&B binot** — Caramagna Piemonte
   - slug: `b-b-binot-caramagna-piemonte`
   - indirizzo: Via Dominici E, 8, 10022 Carmagnola TO
5. **B&B Rozafa** — Caramagna Piemonte
   - slug: `b-b-rozafa-caramagna-piemonte`
   - indirizzo: strada della grassa, 2, 12030 Caramagna Piemonte CN
6. **Fattoria Sociale Paideia - Caramagna Piemonte** — Caramagna Piemonte
   - slug: `fattoria-sociale-paideia-caramagna-piemonte-caramagna-piemonte`
   - indirizzo: Strada Vicinale Oia, 20, 12030 Caramagna Piemonte CN
7. **Hotel Ristorante Italia** — Caramagna Piemonte
   - slug: `hotel-ristorante-italia-caramagna-piemonte`
   - indirizzo: Via Torino, 23, 10022 Carmagnola TO
8. **Stea loft monolocale** — Caramagna Piemonte
   - slug: `stea-loft-monolocale-caramagna-piemonte`
   - indirizzo: V.cl Barletta, 3, 12048 Sommariva del Bosco CN
9. **Villa La Quercia Country House** — Caramagna Piemonte
   - slug: `villa-la-quercia-country-house-caramagna-piemonte`
   - indirizzo: Via Torino, 164, 12048 Sommariva del Bosco CN
10. **Agriturismo La Pagliarella** — Caramanico Terme
   - slug: `agriturismo-la-pagliarella-caramanico-terme`
   - indirizzo: Via Sant'Elia, 3, 65023 Caramanico Terme PE
11. **Agriturismo Pietrantica** — Caramanico Terme
   - slug: `agriturismo-pietrantica-caramanico-terme`
   - indirizzo: 65023 Decontra PE
12. **Albergo Di Fiore** — Caramanico Terme
   - slug: `albergo-di-fiore-caramanico-terme`
   - indirizzo: Viale Roma, 15, 65023 Caramanico Terme PE
13. **Albergo Di Piero Di Antonio Di Piero & C. Sas** — Caramanico Terme
   - slug: `albergo-di-piero-di-antonio-di-piero-c-sas-caramanico-terme`
   - indirizzo: Viale Roma, 64, 65023 Caramanico Terme PE
14. **Antico Borgo Bed & Breakfast** — Caramanico Terme
   - slug: `antico-borgo-bed-breakfast-caramanico-terme`
   - indirizzo: Via S. Maurizio, 7, 65022 Caramanico Terme PE
15. **Hotel Arimannia** — Caramanico Terme
   - slug: `hotel-arimannia-caramanico-terme`
   - indirizzo: Via Cappuccini, 65023 Caramanico Terme PE
16. **Hotel Cercone** — Caramanico Terme
   - slug: `hotel-cercone-caramanico-terme`
   - indirizzo: Via Torre Alta, 19, 65023 Caramanico Terme PE
17. **Hotel La Maielletta** — Caramanico Terme
   - slug: `hotel-la-maielletta-caramanico-terme`
   - indirizzo: Via Passo Lanciano, 1, 66010 Pretoro CH
18. **Hotel le Ginestre CIR066079ALB001** — Caramanico Terme
   - slug: `hotel-le-ginestre-cir066079alb001-caramanico-terme`
   - indirizzo: Via Tavernola, 1, 67030 Roccacasale AQ
19. **Hotel Pescofalcone** — Caramanico Terme
   - slug: `hotel-pescofalcone-caramanico-terme`
   - indirizzo: Viale Roma, 50, 65023 Caramanico Terme PE
20. **HOTEL VIOLA & PIZZERIA "DAI VIOLA"** — Caramanico Terme
   - slug: `hotel-viola-pizzeria-dai-viola-caramanico-terme`
   - indirizzo: Via della Libertà, 9, 65023 Caramanico Terme PE
21. **Hotel Viola Sas Di Viola Carlo E C.** — Caramanico Terme
   - slug: `hotel-viola-sas-di-viola-carlo-e-c-caramanico-terme`
   - indirizzo: Via Duca degli Abruzzi, 1, 65023 Caramanico Terme PE
22. **Ristorante Albergo Villa Pardi** — Caramanico Terme
   - slug: `ristorante-albergo-villa-pardi-caramanico-terme`
   - indirizzo: Via Cappuccini, 65024 Manoppello PE
23. **Albergo Ristorante Conca d'Oro** — Carapelle
   - slug: `albergo-ristorante-conca-d-oro-carapelle`
   - indirizzo: Strada Statale 16, km.683, 71122 Foggia FG
24. **Altopiano Rooms** — Carapelle
   - slug: `altopiano-rooms-carapelle`
   - indirizzo: Via Bainsizza, 1, 71121 Foggia FG
25. **B&B '900** — Carapelle
   - slug: `b-b-900-carapelle`
   - indirizzo: Via Castiglione, 52, 71121 Foggia FG
26. **B&B Brumari** — Carapelle
   - slug: `b-b-brumari-carapelle`
   - indirizzo: Via Donato Menichella, 4, 71122 Foggia FG
27. **B&B Casa Dilillo** — Carapelle
   - slug: `b-b-casa-dilillo-carapelle`
   - indirizzo: Via Persico, 59/a, 71121 Foggia FG
28. **B&B GDA** — Carapelle
   - slug: `b-b-gda-carapelle`
   - indirizzo: STRADA DEL SALICE NUOVO MT 2250, POSTA CONCA SNC, Strada del Salice, 71122 Foggia FG
29. **B&B MariLù** — Carapelle
   - slug: `b-b-marilu-carapelle`
   - indirizzo: Via Isonzo, 4, 71121 Foggia FG
30. **Bunker degli inventori** — Carapelle
   - slug: `bunker-degli-inventori-carapelle`
   - indirizzo: Viale Sant'Alfonso Maria dè Liguori, 95, 71121 Foggia FG
31. **Dimora in Fiore** — Carapelle
   - slug: `dimora-in-fiore-carapelle`
   - indirizzo: Via Tommaso Fiore, 1, 71122 Foggia FG
32. **GAPO Rooms** — Carapelle
   - slug: `gapo-rooms-carapelle`
   - indirizzo: Via Paolo VI, 54, 71045 Orta Nova FG
33. **GuestHouse La Maddalena** — Carapelle
   - slug: `guesthouse-la-maddalena-carapelle`
   - indirizzo: Via F. Saverio Altamura, 49, 71121 Foggia FG
34. **Hotel Resort Novelli** — Carapelle
   - slug: `hotel-resort-novelli-carapelle`
   - indirizzo: SS16, 71045 Orta Nova FG
35. **IL TIGLIO VERDE** — Carapelle
   - slug: `il-tiglio-verde-carapelle`
   - indirizzo: Corso Pietro Giannone, 149, 71121 Foggia FG