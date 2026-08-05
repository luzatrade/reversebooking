# Blocco 322/500 — 35 strutture senza descrizione IT

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

1. **Albergo Ristorante Da Neni** — Brentonico
   - slug: `albergo-ristorante-da-neni-brentonico`
   - indirizzo: Via F. Filzi, 46, 38065 Mori TN
2. **Hotel Continental - Tonelli Hotels** — Brentonico
   - slug: `hotel-continental-tonelli-hotels-brentonico`
   - indirizzo: Via Stazione, 21, 38069 Nago-Torbole TN
3. **Hotel De Nac** — Brentonico
   - slug: `hotel-de-nac-brentonico`
   - indirizzo: Strada Rivana, 10, 38069 Nago-Torbole TN
4. **Hotel Leon D'Oro** — Brentonico
   - slug: `hotel-leon-d-oro-brentonico`
   - indirizzo: Via G. Tacchi, 2, 38068 Rovereto TN
5. **Hotel Mercure Nerocubo Rovereto** — Brentonico
   - slug: `hotel-mercure-nerocubo-rovereto-brentonico`
   - indirizzo: Mori Stazione, Via Per Marco, 16, 38068 Rovereto TN
6. **Hotel Neni** — Brentonico
   - slug: `hotel-neni-brentonico`
   - indirizzo: Via G. Garibaldi, 4, 38060 Brentonico TN
7. **Hotel New Garden** — Brentonico
   - slug: `hotel-new-garden-brentonico`
   - indirizzo: Via Giacomo Matteotti, 100, 38069 Nago-Torbole TN
8. **HOTEL RISTORANTE PIZZERIA MARTINELLI** — Brentonico
   - slug: `hotel-ristorante-pizzeria-martinelli-brentonico`
   - indirizzo: Via del Càr, 4, 38060 Ronzo-Chienis TN
9. **Hotel San Giacomo • Spa & Gourmet** — Brentonico
   - slug: `hotel-san-giacomo-spa-gourmet-brentonico`
   - indirizzo: SP3, 8, 38060 Brentonico TN
10. **Hotel Villa Magnolia, hotel Torbole am Gardasee** — Brentonico
   - slug: `hotel-villa-magnolia-hotel-torbole-am-gardasee-brentonico`
   - indirizzo: Via della Lòva, 8, 38069 Nago-Torbole TN
11. **Ristorante Pizzeria Lake Hotel Benaco Torbole sul Garda** — Brentonico
   - slug: `ristorante-pizzeria-lake-hotel-benaco-torbole-su-brentonico`
   - indirizzo: Via Benaco, 35, 38069 Nago-Torbole TN
12. **Albergo Casa Este** — Brenzone sul Garda
   - slug: `albergo-casa-este-brenzone-sul-garda`
   - indirizzo: Piazza S. Nicolò, 6, 37010 Brenzone sul Garda VR
13. **Albergo Casa Gagliardi** — Brenzone sul Garda
   - slug: `albergo-casa-gagliardi-brenzone-sul-garda`
   - indirizzo: Via del Loc, 11, 37010 Assenza VR
14. **Bed and Breakfast Lil** — Brenzone sul Garda
   - slug: `bed-and-breakfast-lil-brenzone-sul-garda`
   - indirizzo: Via Boccino, 13, 37010 Brenzone sul Garda VR
15. **Brenzone sul Garda** — Brenzone sul Garda
   - slug: `brenzone-sul-garda-brenzone-sul-garda`
   - indirizzo: 37010 Brenzone sul Garda VR
16. **Brenzone-Sommavilla** — Brenzone sul Garda
   - slug: `brenzone-sommavilla-brenzone-sul-garda`
   - indirizzo: Via Madonna Degli Ulivi, 13, 37010 Brenzone sul Garda VR
17. **Casa Bianca** — Brenzone sul Garda
   - slug: `casa-bianca-brenzone-sul-garda`
   - indirizzo: Via S. Vito, 6, 37010 Brenzone sul Garda VR
18. **Garda Doma** — Brenzone sul Garda
   - slug: `garda-doma-brenzone-sul-garda`
   - indirizzo: Via Monteccio, 6, 37010 Brenzone sul Garda VR
19. **Hotel Danieli la Castellana - Lago di Garda** — Brenzone sul Garda
   - slug: `hotel-danieli-la-castellana-lago-di-garda-brenzone-sul-garda`
   - indirizzo: Via Don Francesco Angeleri, Via Angeleri, 13/17, 37010 Castelletto di VR
20. **Hotel Eden Gardasee - Lago di garda - Lake Garda** — Brenzone sul Garda
   - slug: `hotel-eden-gardasee-lago-di-garda-lake-garda-brenzone-sul-garda`
   - indirizzo: Via G. Zanardelli, 6, 37010 Brenzone sul Garda VR
21. **Hotel Garni Rosmari** — Brenzone sul Garda
   - slug: `hotel-garni-rosmari-brenzone-sul-garda`
   - indirizzo: Via Beato Giuseppe Nascimbeni, 66, 37010 Brenzone sul Garda VR
22. **Hotel Luisa** — Brenzone sul Garda
   - slug: `hotel-luisa-brenzone-sul-garda`
   - indirizzo: Via Vecchia, 6, 37010 Brenzone sul Garda VR
23. **Hotel Pace** — Brenzone sul Garda
   - slug: `hotel-pace-brenzone-sul-garda`
   - indirizzo: Via Marniga, 10, 37010 Brenzone sul Garda VR
24. **Hotel Rabay** — Brenzone sul Garda
   - slug: `hotel-rabay-brenzone-sul-garda`
   - indirizzo: Via Amerigo Vespucci, 93-89, 37010 Brenzone sul Garda VR
25. **Hotel Rely** — Brenzone sul Garda
   - slug: `hotel-rely-brenzone-sul-garda`
   - indirizzo: Via Cristoforo Colombo, 36, 37010 Brenzone sul Garda VR
26. **Hotel Residence Merano** — Brenzone sul Garda
   - slug: `hotel-residence-merano-brenzone-sul-garda`
   - indirizzo: Via D. Alighieri, 29, 37010 Brenzone sul Garda VR
27. **Hotel Sorriso** — Brenzone sul Garda
   - slug: `hotel-sorriso-brenzone-sul-garda`
   - indirizzo: Via G. Zanardelli, 26, 37010 Porto VR
28. **June Stay Lake Garda** — Brenzone sul Garda
   - slug: `june-stay-lake-garda-brenzone-sul-garda`
   - indirizzo: Via Gardesana, 56, 37010 Assenza VR
29. **Lake Front Hotel Brenzone** — Brenzone sul Garda
   - slug: `lake-front-hotel-brenzone-brenzone-sul-garda`
   - indirizzo: Via XX Settembre, 26, 37010 Brenzone sul Garda VR
30. **Piccolo Hotel** — Brenzone sul Garda
   - slug: `piccolo-hotel-brenzone-sul-garda`
   - indirizzo: Via Lavesino, 12, 37010 Brenzone sul Garda VR
31. **Villa Isabella** — Brenzone sul Garda
   - slug: `villa-isabella-brenzone-sul-garda`
   - indirizzo: Via Vecchia, 10 Fraz. Assenza, 37010 Brenzone sul Garda VR
32. **Albergo Ristorante Leon d'Oro** — Brescello
   - slug: `albergo-ristorante-leon-d-oro-brescello`
   - indirizzo: Viale Antonio Fratti, 4, 43121 Parma PR
33. **Antica Grancia Benedettina** — Brescello
   - slug: `antica-grancia-benedettina-brescello`
   - indirizzo: Corte di Sanguigna Sanguigna, 136, 43052 Colorno PR
34. **Antico Casale Caroli** — Brescello
   - slug: `antico-casale-caroli-brescello`
   - indirizzo: Via Canalino, 1, 42043 Gattatico RE
35. **Hotel Brixellum** — Brescello
   - slug: `hotel-brixellum-brescello`
   - indirizzo: Via F. Cavallotti, 58, 42041 Brescello RE