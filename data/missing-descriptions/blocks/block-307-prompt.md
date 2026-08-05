# Blocco 307/500 — 35 strutture senza descrizione IT

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

1. **B&B Tre Fiori** — Borrello
   - slug: `b-b-tre-fiori-borrello`
   - indirizzo: V. Castello, 2, 66018 Taranta Peligna CH
2. **Hotel Ristorante Pizzeria Nido delle Rondini** — Borrello
   - slug: `hotel-ristorante-pizzeria-nido-delle-rondini-borrello`
   - indirizzo: Corso Umberto I, numero 60, 66040 Fallo CH
3. **la Casa sul Corso** — Borrello
   - slug: `la-casa-sul-corso-borrello`
   - indirizzo: Corso Umberto I, 118, 66019 Torricella Peligna CH
4. **Palazzo del Principe** — Borrello
   - slug: `palazzo-del-principe-borrello`
   - indirizzo: Via Costa Calda, 3, 67031 Castel di Sangro AQ
5. **Bed & Breakfast "Come a Casa.."** — Borriana
   - slug: `bed-breakfast-come-a-casa-borriana`
   - indirizzo: Via Adua, 3, 13882 Vergnasco BI
6. **La Robinera** — Borriana
   - slug: `la-robinera-borriana`
   - indirizzo: 13887 Magnano BI
7. **Relais Santo Stefano** — Borriana
   - slug: `relais-santo-stefano-borriana`
   - indirizzo: Via Giuseppe Garibaldi, 5, 13876 Sandigliano BI
8. **Appartamenti G&G | Borso Del Grappa** — Borso del Grappa
   - slug: `appartamenti-g-g-borso-del-grappa-borso-del-grappa`
   - indirizzo: Via Molinetto, 6, 31030 Sant'Eulalia TV
9. **B & B "Ai Colori"** — Borso del Grappa
   - slug: `b-b-ai-colori-borso-del-grappa`
   - indirizzo: Via Molinetto, 139, 31030 Borso del Grappa TV
10. **B&B Da Matteo** — Borso del Grappa
   - slug: `b-b-da-matteo-borso-del-grappa`
   - indirizzo: Via Lavazze, 3, 31030 Borso del Grappa TV
11. **B&b Flyingaway** — Borso del Grappa
   - slug: `b-b-flyingaway-borso-del-grappa`
   - indirizzo: Via Giovanni da Semonzo, n 20, 31030 Borso del Grappa TV
12. **B&B Greenview** — Borso del Grappa
   - slug: `b-b-greenview-borso-del-grappa`
   - indirizzo: Via Giovanni da Semonzo, 20A, 31030 Borso del Grappa TV
13. **B&B La Maisonnette** — Borso del Grappa
   - slug: `b-b-la-maisonnette-borso-del-grappa`
   - indirizzo: Via Cassanego, 12, 31030 Borso del Grappa TV
14. **B&B LE AGAVI** — Borso del Grappa
   - slug: `b-b-le-agavi-borso-del-grappa`
   - indirizzo: Via dei Portoni, 31, 31030 Borso del Grappa TV
15. **B&B Relief Possagno** — Borso del Grappa
   - slug: `b-b-relief-possagno-borso-del-grappa`
   - indirizzo: Via Campestrino, 31054 Possagno TV
16. **Bed & Breakfast Mary Montegrappa** — Borso del Grappa
   - slug: `bed-breakfast-mary-montegrappa-borso-del-grappa`
   - indirizzo: Via Piave, 27 b, 31030 Borso del Grappa TV
17. **BeeHouse - La Casa delle Api Agriturismo** — Borso del Grappa
   - slug: `beehouse-la-casa-delle-api-agriturismo-borso-del-grappa`
   - indirizzo: Via Carobbo, 4, 31030 Borso del Grappa TV
18. **Country Club da Cesco** — Borso del Grappa
   - slug: `country-club-da-cesco-borso-del-grappa`
   - indirizzo: Via Chiesure, 17, 31030 Borso del Grappa TV
19. **Da Toni Guesthouse** — Borso del Grappa
   - slug: `da-toni-guesthouse-borso-del-grappa`
   - indirizzo: Via Corte, 57, 31030 Borso del Grappa TV
20. **Garden Relais Hotel** — Borso del Grappa
   - slug: `garden-relais-hotel-borso-del-grappa`
   - indirizzo: Via Caose, 22, 31030 Borso del Grappa TV
21. **Hotel Antica Abbazia** — Borso del Grappa
   - slug: `hotel-antica-abbazia-borso-del-grappa`
   - indirizzo: Via Cenghia, 82/B, 31030 Borso del Grappa TV
22. **INGRAPPA SPORT HOUSE** — Borso del Grappa
   - slug: `ingrappa-sport-house-borso-del-grappa`
   - indirizzo: Via Martiri, 1, 31030 Borso del Grappa TV
23. **Kiki** — Borso del Grappa
   - slug: `kiki-borso-del-grappa`
   - indirizzo: Via al Calderon, 21/23, 31030 Borso del Grappa TV
24. **Le Fate Corbezzole** — Borso del Grappa
   - slug: `le-fate-corbezzole-borso-del-grappa`
   - indirizzo: Via Marze, 18/A, 36060 Romano d'Ezzelino VI
25. **Maryhouse** — Borso del Grappa
   - slug: `maryhouse-borso-del-grappa`
   - indirizzo: Via Piave, 27, 31030 Borso del Grappa TV
26. **Residence Gonda&Giuliano** — Borso del Grappa
   - slug: `residence-gonda-giuliano-borso-del-grappa`
   - indirizzo: Via Giovanni da Semonzo, 12, 31030 Borso del Grappa TV
27. **TommyHouse** — Borso del Grappa
   - slug: `tommyhouse-borso-del-grappa`
   - indirizzo: Via Callesello, 6, 31030 Semonzo TV
28. **Bed and Breakfast - Mattarighe** — Bortigali
   - slug: `bed-and-breakfast-mattarighe-bortigali`
   - indirizzo: Loc. Mattarighe, sn, 08017 Silanus NU
29. **Agriturismo Casteldoria di Rosso Francesco** — Bortigiadas
   - slug: `agriturismo-casteldoria-di-rosso-francesco-bortigiadas`
   - indirizzo: SP92, 07030 Perfugas SS
30. **Agriturismo Dogolai** — Bortigiadas
   - slug: `agriturismo-dogolai-bortigiadas`
   - indirizzo: Località Dogolai SS 389 KM 70, 08021 Bitti NU
31. **Agriturismo La Capanna** — Bortigiadas
   - slug: `agriturismo-la-capanna-bortigiadas`
   - indirizzo: Badas, 07038 Trinità d'Agultu OT
32. **Agriturismo Pedru Caddu** — Bortigiadas
   - slug: `agriturismo-pedru-caddu-bortigiadas`
   - indirizzo: SP2, 07010 Tula SS
33. **Agriturismo Pentuma** — Bortigiadas
   - slug: `agriturismo-pentuma-bortigiadas`
   - indirizzo: Località Sassu Altu, 07030 Chiaramonti SS
34. **Agriturismo Sa Sughereta** — Bortigiadas
   - slug: `agriturismo-sa-sughereta-bortigiadas`
   - indirizzo: Strada Statale 134 di Castel Sardo, Castelsardo, 07035 Sedini SS
35. **Agriturismo Sa Tanca 'e Muros Rujos** — Bortigiadas
   - slug: `agriturismo-sa-tanca-e-muros-rujos-bortigiadas`
   - indirizzo: Reg. Mesu e' Rios, 07014 Ozieri SS