# Blocco 157/500 — 35 strutture senza descrizione IT

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

1. **Il giardino di Camilla** — Arre
   - slug: `il-giardino-di-camilla-arre`
   - indirizzo: Via G. Marconi, 6, 35026 Conselve PD
2. **Agriturismo "Il Borgo"** — Arrone
   - slug: `agriturismo-il-borgo-arrone`
   - indirizzo: Vicolo Sant Anselmo, 1, 05034 Ferentillo TR
3. **Borgo San Valentino** — Arrone
   - slug: `borgo-san-valentino-arrone`
   - indirizzo: Via dello Sportello, 2, 05031 Casteldilago TR
4. **Casa Argenti** — Arrone
   - slug: `casa-argenti-arrone`
   - indirizzo: Via degli Olivi, n° 1, 05031 Arrone TR
5. **Case Vacanza Fiocchi** — Arrone
   - slug: `case-vacanza-fiocchi-arrone`
   - indirizzo: SP17, 05031 Arrone TR
6. **Convento San Bernardino** — Arrone
   - slug: `convento-san-bernardino-arrone`
   - indirizzo: Loc. Monzano, 05030 Montefranco TR
7. **Guesthouse Runcini** — Arrone
   - slug: `guesthouse-runcini-arrone`
   - indirizzo: località Gabbio, Via Ugo la Malfa, 4, 05034 Ferentillo TR
8. **Hotel del Lago 1934 & SPA Piediluco- il Bosco nel Bosco** — Arrone
   - slug: `hotel-del-lago-1934-spa-piediluco-il-bosco-nel-b-arrone`
   - indirizzo: Strada del Porto, 71, 05100 Terni TR
9. **Hotel Michelangelo Palace & SPA** — Arrone
   - slug: `hotel-michelangelo-palace-spa-arrone`
   - indirizzo: Viale della Stazione, 63, 05100 Terni TR
10. **Hotel Miralago - Piediluco (TR)** — Arrone
   - slug: `hotel-miralago-piediluco-tr-arrone`
   - indirizzo: Viale Vincenzo Noceta, 2, 05100 Piediluco TR
11. **Hotel Turrita** — Arrone
   - slug: `hotel-turrita-arrone`
   - indirizzo: Vocabolo Isola, 5, 05031 Arrone TR
12. **Hotel Villa De Santis** — Arrone
   - slug: `hotel-villa-de-santis-arrone`
   - indirizzo: Via de Santis, Dionino, 56, 05030 Montefranco TR
13. **Il Casolare della Cascata** — Arrone
   - slug: `il-casolare-della-cascata-arrone`
   - indirizzo: Via Strada Statale Valnerina, 72, 05100 Terni TR
14. **L'Antico Casale** — Arrone
   - slug: `l-antico-casale-arrone`
   - indirizzo: Strada di Moggio, 10, 05100 Marmore TR
15. **la casa dei nonni** — Arrone
   - slug: `la-casa-dei-nonni-arrone`
   - indirizzo: Via Collestatte, 1, 05100 Terni TR
16. **La Magnolia b&b come a casa tua** — Arrone
   - slug: `la-magnolia-b-b-come-a-casa-tua-arrone`
   - indirizzo: Via Guglielmo Marconi, 35, 05031 Arrone TR
17. **Loggia sul Nera** — Arrone
   - slug: `loggia-sul-nera-arrone`
   - indirizzo: Via Mezza Costa, 14, 05031 Arrone TR
18. **Oasi la Cascata** — Arrone
   - slug: `oasi-la-cascata-arrone`
   - indirizzo: Via Strada Statale Valnerina, 28, 05100 Terni TR
19. **Ristorante Locanda Mulino Nera** — Arrone
   - slug: `ristorante-locanda-mulino-nera-arrone`
   - indirizzo: Strada Statale Valnerina 209, Località Mola Moretti, 2A, 05030 Montefranco TR
20. **Rossi Ristorante Trattoria** — Arrone
   - slug: `rossi-ristorante-trattoria-arrone`
   - indirizzo: Vocabolo Isola, 7, 05031 Arrone TR
21. **Torre del Nera Albergo Diffuso & Spa** — Arrone
   - slug: `torre-del-nera-albergo-diffuso-spa-arrone`
   - indirizzo: Via di Borgo, 72, 06040 Scheggino PG
22. **B&B campagnoli CIN IT012123C1GP3K8AET** — Arsago Seprio
   - slug: `b-b-campagnoli-cin-it012123c1gp3k8aet-arsago-seprio`
   - indirizzo: Via Donizetti Gaetano, 27 A, 21019 Somma Lombardo VA
23. **B&B Panperduto** — Arsago Seprio
   - slug: `b-b-panperduto-arsago-seprio`
   - indirizzo: via Lungo Canale Villoresi, 4, 21019 Somma Lombardo VA
24. **B&B Parco Antico** — Arsago Seprio
   - slug: `b-b-parco-antico-arsago-seprio`
   - indirizzo: Via Privata del Parco, 11, 21019 Somma Lombardo VA
25. **Garzonera Agriturismo e Scuderia** — Arsago Seprio
   - slug: `garzonera-agriturismo-e-scuderia-arsago-seprio`
   - indirizzo: Via Garzonera, 1, 21029 Vergiate VA
26. **Hotel Ristorante Sempione** — Arsago Seprio
   - slug: `hotel-ristorante-sempione-arsago-seprio`
   - indirizzo: Via Sempione, 69, 21011 Casorate Sempione VA
27. **Hotel Ristorante Tre Leoni** — Arsago Seprio
   - slug: `hotel-ristorante-tre-leoni-arsago-seprio`
   - indirizzo: Viale U. Maspero, 10, 21019 Somma Lombardo VA
28. **La Viscontina** — Arsago Seprio
   - slug: `la-viscontina-arsago-seprio`
   - indirizzo: Via al Ticino, 10, 21019 Somma Lombardo VA
29. **Maura's b&b** — Arsago Seprio
   - slug: `maura-s-b-b-arsago-seprio`
   - indirizzo: Via Giacomo Leopardi, 3, 21013 Gallarate VA
30. **residencemalpensa** — Arsago Seprio
   - slug: `residencemalpensa-arsago-seprio`
   - indirizzo: Via Cesare Battisti, 22, 21010 Golasecca VA
31. **Villa Giglio** — Arsago Seprio
   - slug: `villa-giglio-arsago-seprio`
   - indirizzo: Via Beltrami, 18/b, 21010 Arsago Seprio VA
32. **Albergo - Ristorante Italia Risorta** — Arsiero
   - slug: `albergo-ristorante-italia-risorta-arsiero`
   - indirizzo: Piazza F. Rossi, 33, 36011 Arsiero VI
33. **Albergo Al Laghetto** — Arsiero
   - slug: `albergo-al-laghetto-arsiero`
   - indirizzo: Via Mulche, 61, 36012 Asiago VI
34. **Albergo Alla Campana** — Arsiero
   - slug: `albergo-alla-campana-arsiero`
   - indirizzo: Via Santa Maria Maddalena, 18, 36016 Thiene VI
35. **Albergo Martini** — Arsiero
   - slug: `albergo-martini-arsiero`
   - indirizzo: Via A. Fogazzaro, 19, 36010 Velo D'astico VI