# Blocco 65/500 — 35 strutture senza descrizione IT

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

1. **Luxmarì Hotel & Spa** — Alcamo
   - slug: `luxmari-hotel-spa-alcamo`
   - indirizzo: Via Vittor Pisani, 26, 91014 Castellammare del Golfo TP
2. **Resort La Battigia** — Alcamo
   - slug: `resort-la-battigia-alcamo`
   - indirizzo: Via Scampati, 27, 91011 Alcamo Marina TP
3. **SOL Y MAR** — Alcamo
   - slug: `sol-y-mar-alcamo`
   - indirizzo: V. Guglielmo Marconi, 217, 91014 Castellammare del Golfo TP
4. **Sui tetti b&b** — Alcamo
   - slug: `sui-tetti-b-b-alcamo`
   - indirizzo: Via Fratelli Sant'Anna, 58, 91011 Alcamo TP
5. **Tenute Baglio Passofondo** — Alcamo
   - slug: `tenute-baglio-passofondo-alcamo`
   - indirizzo: Strada Provinciale 119, km7, 91011 Alcamo TP
6. **U Zuccareddu** — Alcamo
   - slug: `u-zuccareddu-alcamo`
   - indirizzo: Via Giacomo Matteotti, 14, Via Madonna dell'Alto, 42, 91011 Alcamo TP
7. **Villa Vittoria Hotel** — Alcamo
   - slug: `villa-vittoria-hotel-alcamo`
   - indirizzo: Via Porta Palermo, 106, 91011 Alcamo TP
8. **Affittacamere Nicolò** — Alcara li Fusi
   - slug: `affittacamere-nicolo-alcara-li-fusi`
   - indirizzo: Via Giorgio Amendola, 17, 98070 Alcara li Fusi ME
9. **Agriturismo il Vignale** — Alcara li Fusi
   - slug: `agriturismo-il-vignale-alcara-li-fusi`
   - indirizzo: 98070 Pado ME
10. **Agriturismo Serre** — Alcara li Fusi
   - slug: `agriturismo-serre-alcara-li-fusi`
   - indirizzo: Contrada Serre, 14, 98076 Sant'Agata di Militello ME
11. **Agriturismo Villa Luca** — Alcara li Fusi
   - slug: `agriturismo-villa-luca-alcara-li-fusi`
   - indirizzo: Contrada Muti, 1, 98076 Sant'Agata di Militello ME
12. **Giardino di Sicilia** — Alcara li Fusi
   - slug: `giardino-di-sicilia-alcara-li-fusi`
   - indirizzo: Contrada Contura, 98076 Sant'Agata di Militello ME
13. **Hotel Piro** — Alcara li Fusi
   - slug: `hotel-piro-alcara-li-fusi`
   - indirizzo: Via Nazionale, 54, 98070 Torrenova ME
14. **L'Antica Quercia B&B** — Alcara li Fusi
   - slug: `l-antica-quercia-b-b-alcara-li-fusi`
   - indirizzo: Contrada Colamarco snc, 98070 Castelll'Umberto ME
15. **La Collina Dei Nebrodi** — Alcara li Fusi
   - slug: `la-collina-dei-nebrodi-alcara-li-fusi`
   - indirizzo: c/da Asa, 98070 San Marco d'Alunzio ME
16. **La Tela di Penelope** — Alcara li Fusi
   - slug: `la-tela-di-penelope-alcara-li-fusi`
   - indirizzo: V. Aluntina, 47, 98070 San Marco d'Alunzio ME
17. **Nebrodi Agrivillage Bianca Sole Mia** — Alcara li Fusi
   - slug: `nebrodi-agrivillage-bianca-sole-mia-alcara-li-fusi`
   - indirizzo: Contrada Grazia, 98070 Alcara li Fusi ME
18. **Ristorante Monte San Giovanni Nebrodi Rooms** — Alcara li Fusi
   - slug: `ristorante-monte-san-giovanni-nebrodi-rooms-alcara-li-fusi`
   - indirizzo: Contrada S. Giovanni, 1, 98070 San Marco d'Alunzio ME
19. **Agritur Casteller** — Aldeno
   - slug: `agritur-casteller-aldeno`
   - indirizzo: Via al Casteller, 20, 38123 Trento TN
20. **Agriturismo e Camping Locanda de l'Arguta** — Aldeno
   - slug: `agriturismo-e-camping-locanda-de-l-arguta-aldeno`
   - indirizzo: Via Delle Ischie, 37, 38123 Trento TN
21. **Albergo Grand Hotel Biancaneve** — Aldeno
   - slug: `albergo-grand-hotel-biancaneve-aldeno`
   - indirizzo: Via A. Maffei, 134, 38064 Folgaria TN
22. **Albergo Laghetto** — Aldeno
   - slug: `albergo-laghetto-aldeno`
   - indirizzo: Via Del Bagni di Fieno, 19, 38060 Garniga Terme TN
23. **Alpen Hotel Eghel Resort & SPA** — Aldeno
   - slug: `alpen-hotel-eghel-resort-spa-aldeno`
   - indirizzo: Via A. Maffei, 49, 38064 Folgaria TN
24. **Antico Albergo Stella d'Italia** — Aldeno
   - slug: `antico-albergo-stella-d-italia-aldeno`
   - indirizzo: Via Emilio Colpi, 48, 38064 Folgaria TN
25. **B&B Alessandro** — Aldeno
   - slug: `b-b-alessandro-aldeno`
   - indirizzo: Piazza G. B. Riolfatti, 1, 38060 Villa Lagarina TN
26. **Bed and Breakfast Il Grappolo** — Aldeno
   - slug: `bed-and-breakfast-il-grappolo-aldeno`
   - indirizzo: Piazza Giovanni Segantini, 7, 38060 Aldeno TN
27. **Best Western Hotel Adige** — Aldeno
   - slug: `best-western-hotel-adige-aldeno`
   - indirizzo: Via Pomeranos, 10, 38123 Trento TN
28. **Camping Essenza Alpina** — Aldeno
   - slug: `camping-essenza-alpina-aldeno`
   - indirizzo: Loc. Francolini, 115, 38064 Folgaria TN
29. **Club Hotel Alpino** — Aldeno
   - slug: `club-hotel-alpino-aldeno`
   - indirizzo: Via Emilio Colpi, 170, 38064 Folgaria TN
30. **Hotel Irma Di Canalia Antonio S.a.s** — Aldeno
   - slug: `hotel-irma-di-canalia-antonio-s-a-s-aldeno`
   - indirizzo: Via Damiano Chiesa, 8, 38064 Folgaria TN
31. **Hotel Karinhall Trento** — Aldeno
   - slug: `hotel-karinhall-trento-aldeno`
   - indirizzo: Località I Grezzi, 17, 38123 Trento TN
32. **Hotel Miramonti** — Aldeno
   - slug: `hotel-miramonti-aldeno`
   - indirizzo: Via Del Bagni di Fieno, 20, 38060 Garniga Terme TN
33. **Hotel Montana** — Aldeno
   - slug: `hotel-montana-aldeno`
   - indirizzo: Strada di Vason, 70, 38123 Vason TN
34. **Hotel Monte Bondone** — Aldeno
   - slug: `hotel-monte-bondone-aldeno`
   - indirizzo: Via dei Falchi, 19, 38123 Vaneze TN
35. **Hotel Norge** — Aldeno
   - slug: `hotel-norge-aldeno`
   - indirizzo: Str. del Norge, 3, 38123 Trento TN