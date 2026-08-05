# Blocco 251/500 — 35 strutture senza descrizione IT

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

1. **B&B PRIMACLASSE** — Belpasso
   - slug: `b-b-primaclasse-belpasso`
   - indirizzo: Via Giuseppe Ungaretti, 9, 95032 Belpasso CT
2. **B&B Villa Aresco** — Belpasso
   - slug: `b-b-villa-aresco-belpasso`
   - indirizzo: Via del Bosco, 160, 95030 Mascalucia CT
3. **Bed and Breakfast Tomaselli** — Belpasso
   - slug: `bed-and-breakfast-tomaselli-belpasso`
   - indirizzo: Via Giovanni Verga, 39, 95030 Nicolosi CT
4. **ETNA Bed & Breakfast** — Belpasso
   - slug: `etna-bed-breakfast-belpasso`
   - indirizzo: Via XII Traversa, 116, 95032 Belpasso CT
5. **Etna Petit Relais** — Belpasso
   - slug: `etna-petit-relais-belpasso`
   - indirizzo: Via Monpeluso, 28, 95030 Nicolosi CT
6. **EtnaSpecial** — Belpasso
   - slug: `etnaspecial-belpasso`
   - indirizzo: Via Martiri d'Ungheria, 73, 95030 Nicolosi CT
7. **Il Borghetto di San Giuseppe Etna Rooms & Apartments** — Belpasso
   - slug: `il-borghetto-di-san-giuseppe-etna-rooms-apartmen-belpasso`
   - indirizzo: Via Vincenzo Bellini, 1, 95030 Nicolosi CT
8. **Il Giovaiellino** — Belpasso
   - slug: `il-giovaiellino-belpasso`
   - indirizzo: Via III Traversa, 80, 95032 Belpasso CT
9. **Kartè** — Belpasso
   - slug: `karte-belpasso`
   - indirizzo: Via XII Traversa, 90, 95032 Belpasso CT
10. **La Casa De Maia** — Belpasso
   - slug: `la-casa-de-maia-belpasso`
   - indirizzo: Via Principe di Piemonte, 76B, 95032 Belpasso CT
11. **Agriturismo Borgo Serafino** — Belsito
   - slug: `agriturismo-borgo-serafino-belsito`
   - indirizzo: Contrada Fiumara, 22, 87040 Paterno Calabro CS
12. **B&B IL Girasole** — Belsito
   - slug: `b-b-il-girasole-belsito`
   - indirizzo: Via Stazione, 16, 87054 Rogliano CS
13. **Boutique Suites - Palazzo Crati 1800** — Belsito
   - slug: `boutique-suites-palazzo-crati-1800-belsito`
   - indirizzo: Via Don Luigi Maletta, 3, 87100 Cosenza CS
14. **Hotel Bruni Snc - Ristorante Bar Tabacchi** — Belsito
   - slug: `hotel-bruni-snc-ristorante-bar-tabacchi-belsito`
   - indirizzo: V. Piano Lago, 23, 87050 Figline Vegliaturo CS
15. **Hotel Excelsior** — Belsito
   - slug: `hotel-excelsior-belsito`
   - indirizzo: Piazza Giacomo Matteotti, 14, 87100 Cosenza CS
16. **Royal Hotel** — Belsito
   - slug: `royal-hotel-belsito`
   - indirizzo: Via Delle Medaglie D'Oro, Via XXIV Maggio, 1, 87100 Cosenza CS
17. **Via Piave 82 Bed and Breakfast** — Belsito
   - slug: `via-piave-82-bed-and-breakfast-belsito`
   - indirizzo: Via Piave, 82/scala D, 87100 Cosenza CS
18. **Agriturismo Convivio Di Montalbano** — Belvedere di Spinello
   - slug: `agriturismo-convivio-di-montalbano-belvedere-di-spinello`
   - indirizzo: Viale dei Bizantini, 45, 88835 Roccabernarda KR
19. **B&B Casa di Fiore** — Belvedere di Spinello
   - slug: `b-b-casa-di-fiore-belvedere-di-spinello`
   - indirizzo: Via Taverna, 5, 87055 San Giovanni in Fiore CS
20. **B&B DI GABRIELE FILOMENA** — Belvedere di Spinello
   - slug: `b-b-di-gabriele-filomena-belvedere-di-spinello`
   - indirizzo: Via dei Gelsomini, 49, 88900 Margherita V KR
21. **B&B La Terrazza** — Belvedere di Spinello
   - slug: `b-b-la-terrazza-belvedere-di-spinello`
   - indirizzo: Via maestri del lavoro, 7, 88836 Cotronei KR
22. **B&b Marrelli Crotone** — Belvedere di Spinello
   - slug: `b-b-marrelli-crotone-belvedere-di-spinello`
   - indirizzo: Via dei Iapigi, 6/O, 88900 Crotone KR
23. **Castello Di Caccuri Suites** — Belvedere di Spinello
   - slug: `castello-di-caccuri-suites-belvedere-di-spinello`
   - indirizzo: Salita Castello, 88833 Caccuri KR
24. **CENTRAL APARTMENTS** — Belvedere di Spinello
   - slug: `central-apartments-belvedere-di-spinello`
   - indirizzo: Via Torino, 63, 88900 Crotone KR
25. **Fattoria San Sebastiano** — Belvedere di Spinello
   - slug: `fattoria-san-sebastiano-belvedere-di-spinello`
   - indirizzo: Contrada Piè della Scala, 88816 Strongoli KR
26. **Hotel Dolce Stella** — Belvedere di Spinello
   - slug: `hotel-dolce-stella-belvedere-di-spinello`
   - indirizzo: Via Francesco Cannata, 14, 88814 Torre Melissa KR
27. **Hotel Duchessa della Sila** — Belvedere di Spinello
   - slug: `hotel-duchessa-della-sila-belvedere-di-spinello`
   - indirizzo: Viale della Repubblica, 451, 87055 San Giovanni in Fiore CS
28. **Hotel Melissa - Ristorante Pizzeria Il Delfino** — Belvedere di Spinello
   - slug: `hotel-melissa-ristorante-pizzeria-il-delfino-belvedere-di-spinello`
   - indirizzo: Via Pontino, 40, 88814 Melissa KR
29. **Hotel San Giorgio** — Belvedere di Spinello
   - slug: `hotel-san-giorgio-belvedere-di-spinello`
   - indirizzo: S.da Statale 106 Jonica, 88900 Crotone KR
30. **L'Oasi del Poeta** — Belvedere di Spinello
   - slug: `l-oasi-del-poeta-belvedere-di-spinello`
   - indirizzo: Via XXV Aprile, 55, 88900 Crotone KR
31. **La Dimora di Gioacchino** — Belvedere di Spinello
   - slug: `la-dimora-di-gioacchino-belvedere-di-spinello`
   - indirizzo: Via Frate Giuliano, 10, 87055 San Giovanni in Fiore CS
32. **Le stanze di Dalia** — Belvedere di Spinello
   - slug: `le-stanze-di-dalia-belvedere-di-spinello`
   - indirizzo: Via I Maggio, 34, 88900 Crotone KR
33. **Villa di Gioia B&B** — Belvedere di Spinello
   - slug: `villa-di-gioia-b-b-belvedere-di-spinello`
   - indirizzo: Contrada Zifarelli, 3, 88833 Caccuri KR
34. **Albergo Ristorante Belvedere** — Belvedere Langhe
   - slug: `albergo-ristorante-belvedere-belvedere-langhe`
   - indirizzo: Vicolo S. Giovanni, 3, 12046 Montà CN
35. **B&B I Colori dell'Arcobaleno Belvedere Langhe** — Belvedere Langhe
   - slug: `b-b-i-colori-dell-arcobaleno-belvedere-langhe-belvedere-langhe`
   - indirizzo: Via Pietro Donadei, 8, 12060 Belvedere Langhe CN