# Blocco 311/500 — 35 strutture senza descrizione IT

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

1. **Tenuta Nunziata - food / relax / biofarm** — Boscotrecase
   - slug: `tenuta-nunziata-food-relax-biofarm-boscotrecase`
   - indirizzo: Via Carola, 14/a, 80041 Torre Annunziata NA
2. **Torre Merlata** — Boscotrecase
   - slug: `torre-merlata-boscotrecase`
   - indirizzo: Via Panoramica, 1, 80041 Boscoreale NA
3. **Villa Delle Rose** — Boscotrecase
   - slug: `villa-delle-rose-boscotrecase`
   - indirizzo: Via Ugo Foscolo, 7, 80042 Boscotrecase NA
4. **Borgo Robinie** — Bosia
   - slug: `borgo-robinie-bosia`
   - indirizzo: 12050 Bosia CN
5. **Villa San Carlo** — Bosia
   - slug: `villa-san-carlo-bosia`
   - indirizzo: Corso Divisioni Alpine, 41, 12074 Cortemilia CN
6. **Yurte In Langa** — Bosia
   - slug: `yurte-in-langa-bosia`
   - indirizzo: Via Castino, 1, 12050 Bosia CN
7. **Agriturismo Il Burlino** — Bosio
   - slug: `agriturismo-il-burlino-bosio`
   - indirizzo: Cascina Il Burlino, 14, 15070 Lerma AL
8. **Albergo Hotel Bellagio** — Bosio
   - slug: `albergo-hotel-bellagio-bosio`
   - indirizzo: Str. Voltri, 94, 15076 Ovada AL
9. **B&B A Casa di Alice** — Bosio
   - slug: `b-b-a-casa-di-alice-bosio`
   - indirizzo: Via Regina Margherita, 35, 15060 Bosio AL
10. **B&B Borgo Cortese** — Bosio
   - slug: `b-b-borgo-cortese-bosio`
   - indirizzo: Via XX Settembre, 9R, 15066 Gavi AL
11. **B&B Il Campo dei Papaveri** — Bosio
   - slug: `b-b-il-campo-dei-papaveri-bosio`
   - indirizzo: Via Andrea Doria, 18, 15075 Mornese AL
12. **Casa T Bed and Breakfast & Home Restaurant** — Bosio
   - slug: `casa-t-bed-and-breakfast-home-restaurant-bosio`
   - indirizzo: Via Provinciale Ovada, 33, 15070 Tagliolo Monferrato AL
13. **Casale Milleseicento** — Bosio
   - slug: `casale-milleseicento-bosio`
   - indirizzo: Via Serravalle, 68, 15066 Gavi AL
14. **B&B Leon d'Oro** — Bosisio Parini
   - slug: `b-b-leon-d-oro-bosisio-parini`
   - indirizzo: Piazza Parini, 2, 22030 Pusiano CO
15. **B&B PESCARENICO - Lecco** — Bosisio Parini
   - slug: `b-b-pescarenico-lecco-bosisio-parini`
   - indirizzo: Via Gian Battista Vico, 11, 23900 Lecco LC
16. **Home And Breakfast - La Madonnina -** — Bosisio Parini
   - slug: `home-and-breakfast-la-madonnina-bosisio-parini`
   - indirizzo: Via Giuseppe Garibaldi, 30, 22040 Lurago d'Erba CO
17. **IL MONOLOCALE** — Bosisio Parini
   - slug: `il-monolocale-bosisio-parini`
   - indirizzo: Via Sant'Ambrogio, 38B, 23842 Bosisio Parini LC
18. **Il Portico del Conte** — Bosisio Parini
   - slug: `il-portico-del-conte-bosisio-parini`
   - indirizzo: via Giorgio Giulini, 4, 23842 Bosisio Parini LC
19. **La casa al lago** — Bosisio Parini
   - slug: `la-casa-al-lago-bosisio-parini`
   - indirizzo: Via Sant'Ambrogio, 38A, 23842 Bosisio Parini LC
20. **Narciso B&B Valbrona** — Bosisio Parini
   - slug: `narciso-b-b-valbrona-bosisio-parini`
   - indirizzo: Via L. Ortalli, 6, 22039 Valbrona CO
21. **Bosco Longhino - Az. Agr. vitivinicola e agrituristica** — Bosnasco
   - slug: `bosco-longhino-az-agr-vitivinicola-e-agrituristi-bosnasco`
   - indirizzo: frazione MOLINO MARCONI, 27047 Santa Maria della Versa PV
22. **Piccolo Bacco Dei Quaroni di Tommaso Cavalli** — Bosnasco
   - slug: `piccolo-bacco-dei-quaroni-di-tommaso-cavalli-bosnasco`
   - indirizzo: 29, Frazione, 27040 Costa Montefedele PV
23. **Villa Luisa** — Bosnasco
   - slug: `villa-luisa-bosnasco`
   - indirizzo: Via Creta, 29010 Ziano Piacentino PC
24. **Agriturismo Alveare sul Lago** — Bossico
   - slug: `agriturismo-alveare-sul-lago-bossico`
   - indirizzo: Località Sonvico Superiore, 25055 Pisogne BS
25. **Agriturismo Casarai** — Bossico
   - slug: `agriturismo-casarai-bossico`
   - indirizzo: Via Rucca, 29A, 25050 Zone BS
26. **Bar Colombina** — Bossico
   - slug: `bar-colombina-bossico`
   - indirizzo: Via Locatelli, 21, 24060 Bossico BG
27. **Hotel Conca Verde** — Bossico
   - slug: `hotel-conca-verde-bossico`
   - indirizzo: Via Valurbes, 31, 25050 Zone BS
28. **Hotel Lovere Resort & Spa** — Bossico
   - slug: `hotel-lovere-resort-spa-bossico`
   - indirizzo: Via G. Marconi, 97, 24065 Lovere BG
29. **Le Torri Lovere** — Bossico
   - slug: `le-torri-lovere-bossico`
   - indirizzo: Via Mazzini, 8, 24065 Lovere BG
30. **Ristorante Pizzeria La Lucciola Ostello Trentapassi** — Bossico
   - slug: `ristorante-pizzeria-la-lucciola-ostello-trentapa-bossico`
   - indirizzo: Via Loden, 6, 25050 Zone BS
31. **The Secret Suite** — Bossico
   - slug: `the-secret-suite-bossico`
   - indirizzo: Via Nazionale, 2975, 24060 Ranzanico Lago BG
32. **Casavecchia Bed & Breakfast - Azienda agricola, laboratorio di nocciole, fattoria didattica** — Bossolasco
   - slug: `casavecchia-bed-breakfast-azienda-agricola-labor-bossolasco`
   - indirizzo: Via Ave, 12060 Bossolasco CN
33. **La Cascina** — Bossolasco
   - slug: `la-cascina-bossolasco`
   - indirizzo: Località Bossolaschetto, 9, 12060 Bossolasco CN
34. **La Panoramica** — Bossolasco
   - slug: `la-panoramica-bossolasco`
   - indirizzo: via Circonvallazione, n.1, 12060 Bossolasco CN
35. **La Piazzetta Degli Artisti** — Bossolasco
   - slug: `la-piazzetta-degli-artisti-bossolasco`
   - indirizzo: Corso Travaglio, 4, 12060 Bossolasco CN