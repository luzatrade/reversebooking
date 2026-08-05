# Blocco 402/500 — 35 strutture senza descrizione IT

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

1. **Albergo Majorka** — Canazei
   - slug: `albergo-majorka-canazei`
   - indirizzo: Via di Soraperra, 67, 38032 Alba TN
2. **Croce Bianca Leisure & Spa** — Canazei
   - slug: `croce-bianca-leisure-spa-canazei`
   - indirizzo: Via Roma, 3, 38032 Canazei TN
3. **Hotel Bellavista** — Canazei
   - slug: `hotel-bellavista-canazei`
   - indirizzo: Str. Pordoi, 12, 38032 Canazei TN
4. **Hotel Cesa Tyrol** — Canazei
   - slug: `hotel-cesa-tyrol-canazei`
   - indirizzo: strada de la via della cascata, 2, 38032 Canazei TN
5. **Hotel Cirelle** — Canazei
   - slug: `hotel-cirelle-canazei`
   - indirizzo: Via Costa, 129, 38032 Canazei TN
6. **Hotel Dolomiti Canazei** — Canazei
   - slug: `hotel-dolomiti-canazei-canazei`
   - indirizzo: Strada Dolomites, 80, 38032 Canazei TN
7. **Hotel El Ciasel** — Canazei
   - slug: `hotel-el-ciasel-canazei`
   - indirizzo: Streda de Col de Pin, 2/4, 38032 Canazei TN
8. **Hotel Gries** — Canazei
   - slug: `hotel-gries-canazei`
   - indirizzo: Strèda dò Ruf de Soracrepa, 24, 38032 Canazei TN
9. **Hotel Il Caminetto Canazei** — Canazei
   - slug: `hotel-il-caminetto-canazei-canazei`
   - indirizzo: Strada Dolomites, 3, 38032 Canazei TN
10. **Hotel Italia** — Canazei
   - slug: `hotel-italia-canazei`
   - indirizzo: Via Dolomites, 120, 38032 Canazei TN
11. **Hotel La Perla Wellness & Beauty** — Canazei
   - slug: `hotel-la-perla-wellness-beauty-canazei`
   - indirizzo: Strèda de, Via di Parèda, 22, 38032 Canazei TN
12. **Hotel Lupo Bianco** — Canazei
   - slug: `hotel-lupo-bianco-canazei`
   - indirizzo: Strada Dolomites, 5, 38032 Canazei TN
13. **Hotel Pordoi** — Canazei
   - slug: `hotel-pordoi-canazei`
   - indirizzo: Passo Pordoi, 1, 38032 Canazei TN
14. **Hotel Villa Rosella** — Canazei
   - slug: `hotel-villa-rosella-canazei`
   - indirizzo: Str. Pian Trevisan, 6, 38032 Canazei TN
15. **Hotel Villetta Maria Canazei** — Canazei
   - slug: `hotel-villetta-maria-canazei-canazei`
   - indirizzo: Loc, Str. Pian Trevisan, 44, 38032 Penia TN
16. **Locanda degli Artisti Art Hotel Canazei** — Canazei
   - slug: `locanda-degli-artisti-art-hotel-canazei-canazei`
   - indirizzo: Via Roma, 23, 38032 Canazei TN
17. **Stella Alpina** — Canazei
   - slug: `stella-alpina-canazei`
   - indirizzo: Lungo Rio di Antermont, 6, 38032 Canazei TN
18. **Aparthotel ParKHo** — Cancellara
   - slug: `aparthotel-parkho-cancellara`
   - indirizzo: 4° piano Parcheggio Multipiano Ospedale San Carlo, Via dell'Ateneo Lucano, 85100 Potenza PZ
19. **Arizona Motel** — Cancello ed Arnone
   - slug: `arizona-motel-cancello-ed-arnone`
   - indirizzo: Via Macedonio, 81030 Castel Volturno CE
20. **Dama suites teverola** — Cancello ed Arnone
   - slug: `dama-suites-teverola-cancello-ed-arnone`
   - indirizzo: Strada nazionale Appia, 7bis 11.200, 81030 Teverola CE
21. **HOTEL 2000** — Cancello ed Arnone
   - slug: `hotel-2000-cancello-ed-arnone`
   - indirizzo: Via, SP1, 384, 80014 Giugliano in Campania NA
22. **Hotel Ginepro 4 Stelle** — Cancello ed Arnone
   - slug: `hotel-ginepro-4-stelle-cancello-ed-arnone`
   - indirizzo: SP1, 102, 80019 Qualiano NA
23. **Hotel Joy** — Cancello ed Arnone
   - slug: `hotel-joy-cancello-ed-arnone`
   - indirizzo: Via Napoli, 10, 81030 Castel Volturno CE
24. **Hotel Le Dune** — Cancello ed Arnone
   - slug: `hotel-le-dune-cancello-ed-arnone`
   - indirizzo: Via Domiziana, 973, 81030 Castel Volturno CE
25. **Hotel Marcantonio** — Cancello ed Arnone
   - slug: `hotel-marcantonio-cancello-ed-arnone`
   - indirizzo: Via Madonna del Pantano Nord, 11/1, 80014 Cavone NA
26. **Hotel Mediterraneo** — Cancello ed Arnone
   - slug: `hotel-mediterraneo-cancello-ed-arnone`
   - indirizzo: Via S.Francesco a patria, loc. ponte riccio, 80014 Giugliano in Campania NA
27. **Hotel Paradiso** — Cancello ed Arnone
   - slug: `hotel-paradiso-cancello-ed-arnone`
   - indirizzo: Via Domiziana, 612, 81030 Castel Volturno CE
28. **Hotel Piè D'or** — Cancello ed Arnone
   - slug: `hotel-pie-d-or-cancello-ed-arnone`
   - indirizzo: 80014 Giugliano in Campania NA
29. **Hotel United** — Cancello ed Arnone
   - slug: `hotel-united-cancello-ed-arnone`
   - indirizzo: Via Ruggero Leoncavallo, 2, 81030 Castel Volturno CE
30. **International Resort** — Cancello ed Arnone
   - slug: `international-resort-cancello-ed-arnone`
   - indirizzo: SS7qtr, 591, 81034 Mondragone CE
31. **La Meta Motel** — Cancello ed Arnone
   - slug: `la-meta-motel-cancello-ed-arnone`
   - indirizzo: Via Santa Maria a Cubito, 81039 Villa Literno CE
32. **Laghi Nabi** — Cancello ed Arnone
   - slug: `laghi-nabi-cancello-ed-arnone`
   - indirizzo: Via Occidentale, 81030 Castel Volturno CE
33. **Motel Annalisa Trentola Ducenta** — Cancello ed Arnone
   - slug: `motel-annalisa-trentola-ducenta-cancello-ed-arnone`
   - indirizzo: Via IV Novembre, 240, 81038 Trentola Ducenta CE
34. **Thairè Resort** — Cancello ed Arnone
   - slug: `thaire-resort-cancello-ed-arnone`
   - indirizzo: Via Domiziana, 615, 81030 Castel Volturno CE
35. **Albergo Palladio** — Canda
   - slug: `albergo-palladio-canda`
   - indirizzo: Via Giovanni Tasso, 29, 45025 Fratta Polesine RO