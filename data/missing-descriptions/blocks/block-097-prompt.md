# Blocco 97/500 — 35 strutture senza descrizione IT

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

1. **Casa delle Risorgive** — Amaro
   - slug: `casa-delle-risorgive-amaro`
   - indirizzo: 33010 Portis UD
2. **Comune Rustico Sport Hotel** — Amaro
   - slug: `comune-rustico-sport-hotel-amaro`
   - indirizzo: Via Fontana, 14, 33022 Arta Terme UD
3. **Da Michele Albergo Ristorante Pizzeria** — Amaro
   - slug: `da-michele-albergo-ristorante-pizzeria-amaro`
   - indirizzo: Via Pontebbana, 20, 33010 Venzone UD
4. **Grand Hotel Gortani - Borgo Gortani** — Amaro
   - slug: `grand-hotel-gortani-borgo-gortani-amaro`
   - indirizzo: Via Umberto I, 43, 33022 Arta Terme UD
5. **Hotel Alla Fonte** — Amaro
   - slug: `hotel-alla-fonte-amaro`
   - indirizzo: Via Nazionale, 38, 33022 Arta Terme UD
6. **Hotel Gardel Centro Benessere** — Amaro
   - slug: `hotel-gardel-centro-benessere-amaro`
   - indirizzo: Via G. Marconi, 6/8, 33022 Arta Terme UD
7. **Hotel Ristorante Bar Pizzeria Trilago** — Amaro
   - slug: `hotel-ristorante-bar-pizzeria-trilago-amaro`
   - indirizzo: Via Interneppo, 2, 33010 Trasaghis UD
8. **Hotel Ristorante Carnia** — Amaro
   - slug: `hotel-ristorante-carnia-amaro`
   - indirizzo: Via Canal Ferro, 28, 33010 Stazione Carnia, Venzone UD
9. **Hotel Willy - Taverna, Pizzeria, Ristorante** — Amaro
   - slug: `hotel-willy-taverna-pizzeria-ristorante-amaro`
   - indirizzo: Via Bariglaria, 164, 33013 Gemona UD
10. **L'intermezzo** — Amaro
   - slug: `l-intermezzo-amaro`
   - indirizzo: Via Sottomonte, 28, 33010 Venzone UD
11. **La Culla D'oro - Bedrooms - Zimmer** — Amaro
   - slug: `la-culla-d-oro-bedrooms-zimmer-amaro`
   - indirizzo: Via Pontebbana, 29, 33010 Venzone UD
12. **Lago 3 Comuni Camping** — Amaro
   - slug: `lago-3-comuni-camping-amaro`
   - indirizzo: Via Tolmezzo, 52, 33010 Trasaghis UD
13. **Osteria Al Fogolar** — Amaro
   - slug: `osteria-al-fogolar-amaro`
   - indirizzo: Via Antonio Bidernuccio, 8, 33010 Venzone UD
14. **Pergola Rooms** — Amaro
   - slug: `pergola-rooms-amaro`
   - indirizzo: Via Gio Batta de Marchi, 2/Primo piano, 33028 Tolmezzo UD
15. **Agriturismo Arcobaleno** — Amaroni
   - slug: `agriturismo-arcobaleno-amaroni`
   - indirizzo: Località Piano di Porro, 88024 Girifalco CZ
16. **Agriturismo Borgo Piazza | Ristorante - Fattoria Didattica** — Amaroni
   - slug: `agriturismo-borgo-piazza-ristorante-fattoria-did-amaroni`
   - indirizzo: Via Fausto Gullo snc Traversa 1 loc, Borgo Piazza, Vallo, di, 88021 Borgia CZ
17. **Agriturismo Costantino** — Amaroni
   - slug: `agriturismo-costantino-amaroni`
   - indirizzo: Localita Donnantonio, 88025 Maida CZ
18. **Agriturismo Podere Pansera** — Amaroni
   - slug: `agriturismo-podere-pansera-amaroni`
   - indirizzo: SP118, 88060 Petrizzi CZ
19. **BBuSS Country Club - Country house a Catanzaro** — Amaroni
   - slug: `bbuss-country-club-country-house-a-catanzaro-amaroni`
   - indirizzo: Via Guglielmo Ranieri, 34, 88100 Catanzaro CZ
20. **Club Esse Sunbeach** — Amaroni
   - slug: `club-esse-sunbeach-amaroni`
   - indirizzo: Via Lungomare Ulisse, 1, 88069 Squillace CZ
21. **Domus b&b** — Amaroni
   - slug: `domus-b-b-amaroni`
   - indirizzo: Viale Europa, 42, 88100 Catanzaro CZ
22. **Grand hotel Catanzaro Best Western** — Amaroni
   - slug: `grand-hotel-catanzaro-best-western-amaroni`
   - indirizzo: Contrada Difesa, Via Carrera, 7, 88050 Caraffa di Catanzaro CZ
23. **Hotel Club Poseidon** — Amaroni
   - slug: `hotel-club-poseidon-amaroni`
   - indirizzo: Via Lido, 12, 88069 Stalettì CZ
24. **Hotel Conca D' Oro** — Amaroni
   - slug: `hotel-conca-d-oro-amaroni`
   - indirizzo: Via Conca d'Oro, 2/A, 88071 Copanello CZ
25. **Hotel Costa Jonica** — Amaroni
   - slug: `hotel-costa-jonica-amaroni`
   - indirizzo: Loc, Località Ruggero, 11, 88050 Sellia Marina CZ
26. **Hotel Residence Pegaso** — Amaroni
   - slug: `hotel-residence-pegaso-amaroni`
   - indirizzo: Via Enrico Berlinguer, 13, 88060 Montepaone Lido CZ
27. **Hotel Ristorante Il Gabbiano** — Amaroni
   - slug: `hotel-ristorante-il-gabbiano-amaroni`
   - indirizzo: Via Lido, 8, info@hotelilgabbiano.it, 88071 Copanello CZ
28. **Kalos Relais** — Amaroni
   - slug: `kalos-relais-amaroni`
   - indirizzo: Via Vincenzo Padula, 25B, 88040 Settingiano CZ
29. **LVRESIDENCE** — Amaroni
   - slug: `lvresidence-amaroni`
   - indirizzo: Viale Nausicaa, 21, 88021 Roccelletta CZ
30. **Rada Siri Hotel** — Amaroni
   - slug: `rada-siri-hotel-amaroni`
   - indirizzo: Via Nazionale, 249, 88060 Montepaone Lido CZ
31. **San Michele Apartments - B&B - Hotel- Residence con ristorante convenzionato** — Amaroni
   - slug: `san-michele-apartments-b-b-hotel-residence-con-r-amaroni`
   - indirizzo: Viale Europa, 28, 88100 Catanzaro CZ
32. **San Vincenzo** — Amaroni
   - slug: `san-vincenzo-amaroni`
   - indirizzo: Corso Umberto I, 296, 88068 Soverato CZ
33. **"Agriturismo Ciociaro il Colle" Hotel Ristorante** — Amaseno
   - slug: `agriturismo-ciociaro-il-colle-hotel-ristorante-amaseno`
   - indirizzo: Via Cese, 13, 03024 Ceprano FR
34. **Aia Antica** — Amaseno
   - slug: `aia-antica-amaseno`
   - indirizzo: Via Scalelle, 10, 04020 Monte San Biagio LT
35. **Al Chiaro di Luna** — Amaseno
   - slug: `al-chiaro-di-luna-amaseno`
   - indirizzo: Via Vitulli Longobardi, 4b, 04022 Fondi LT