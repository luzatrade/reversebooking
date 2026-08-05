# Blocco 121/500 — 35 strutture senza descrizione IT

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

1. **Hotel Pace** — Antrona Schieranco
   - slug: `hotel-pace-antrona-schieranco`
   - indirizzo: Via Cavallini, 38, 28842 Bognanco VB
2. **Motel Europa** — Antrona Schieranco
   - slug: `motel-europa-antrona-schieranco`
   - indirizzo: Via Siberia, 1/a, 28845 Domodossola VB
3. **Motel Monterosa** — Antrona Schieranco
   - slug: `motel-monterosa-antrona-schieranco`
   - indirizzo: Via Nazionale Dresio, 247, 28805 Vogogna VB
4. **Palazzo 7** — Antrona Schieranco
   - slug: `palazzo-7-antrona-schieranco`
   - indirizzo: Via Filippo Beltrami, 7, 28845 Domodossola VB
5. **Ristorante Alpino di Minerali Manuela & C. S.a.s.** — Antrona Schieranco
   - slug: `ristorante-alpino-di-minerali-manuela-c-s-a-s-antrona-schieranco`
   - indirizzo: Localita' Cheggio, 28841 Antronapiana, Antrona Schieranco VB
6. **Agriturismo Locanda Nido d'Aquila** — Anversa degli Abruzzi
   - slug: `agriturismo-locanda-nido-d-aquila-anversa-degli-abruzzi`
   - indirizzo: Piazza Risorgimento, 67030 Castrovalva AQ
7. **B&B CASA ANACETA** — Anversa degli Abruzzi
   - slug: `b-b-casa-anaceta-anversa-degli-abruzzi`
   - indirizzo: Via Roma, 48, 67030 Villalago AQ
8. **B&B La Casa dei Nonni** — Anversa degli Abruzzi
   - slug: `b-b-la-casa-dei-nonni-anversa-degli-abruzzi`
   - indirizzo: Vico 2 Strada Silla, 1, 67038 Scanno AQ
9. **B&B LE GRETTE** — Anversa degli Abruzzi
   - slug: `b-b-le-grette-anversa-degli-abruzzi`
   - indirizzo: Via Gretta, 24, 67055 Gioia dei Marsi AQ
10. **Bioagriturismo SOFIA** — Anversa degli Abruzzi
   - slug: `bioagriturismo-sofia-anversa-degli-abruzzi`
   - indirizzo: Via Forno Vecchio, 9, 67030 Cocullo AQ
11. **Grotta Dei Colombi** — Anversa degli Abruzzi
   - slug: `grotta-dei-colombi-anversa-degli-abruzzi`
   - indirizzo: Viale dei Caduti, 64, 67038 Scanno AQ
12. **Hotel Garni del Lago** — Anversa degli Abruzzi
   - slug: `hotel-garni-del-lago-anversa-degli-abruzzi`
   - indirizzo: Viale del Lago, 202, 67038 Scanno AQ
13. **Hotel Nilde** — Anversa degli Abruzzi
   - slug: `hotel-nilde-anversa-degli-abruzzi`
   - indirizzo: Viale del Lago, 101, 67038 Scanno AQ
14. **Hotel Roma** — Anversa degli Abruzzi
   - slug: `hotel-roma-anversa-degli-abruzzi`
   - indirizzo: Viale della Pineta, 6, 67038 Scanno AQ
15. **Hotel Stella Alpina** — Anversa degli Abruzzi
   - slug: `hotel-stella-alpina-anversa-degli-abruzzi`
   - indirizzo: Via Roma, 8/10, 67030 Villalago AQ
16. **I Laghetti** — Anversa degli Abruzzi
   - slug: `i-laghetti-anversa-degli-abruzzi`
   - indirizzo: Piazza Celestino Lupi, 10, 67030 Villalago AQ
17. **Il Poggio dei Pettirossi** — Anversa degli Abruzzi
   - slug: `il-poggio-dei-pettirossi-anversa-degli-abruzzi`
   - indirizzo: Via Vallelarga, 29, 67034 Pettorano sul Gizio AQ
18. **Il viandante** — Anversa degli Abruzzi
   - slug: `il-viandante-anversa-degli-abruzzi`
   - indirizzo: Vico dell'Ospedale, 26, 67039 Sulmona AQ
19. **L'Antico Borgo B&B** — Anversa degli Abruzzi
   - slug: `l-antico-borgo-b-b-anversa-degli-abruzzi`
   - indirizzo: Via Risorgimento, 78/A, 67030 Villalago AQ
20. **L'Orsa** — Anversa degli Abruzzi
   - slug: `l-orsa-anversa-degli-abruzzi`
   - indirizzo: Strada Provinciale 82, Riviera, 20, 67030 Villalago AQ
21. **La Locanda Del Lago Lucciola** — Anversa degli Abruzzi
   - slug: `la-locanda-del-lago-lucciola-anversa-degli-abruzzi`
   - indirizzo: LOCALITA, VIGNARONICA ZONA ARTIGIANALE, 67030 Villalago AQ
22. **La Porta dei Parchi** — Anversa degli Abruzzi
   - slug: `la-porta-dei-parchi-anversa-degli-abruzzi`
   - indirizzo: Loc. Fonte di Curzio, via San Carlo, 67030 Anversa degli Abruzzi AQ
23. **La Villa** — Anversa degli Abruzzi
   - slug: `la-villa-anversa-degli-abruzzi`
   - indirizzo: Via Giuseppe di Loreto, 6, 67035 Pratola Peligna AQ
24. **Ristorante Hotel Filippone** — Anversa degli Abruzzi
   - slug: `ristorante-hotel-filippone-anversa-degli-abruzzi`
   - indirizzo: Via Duca degli Abruzzi, n.173, 67055 Gioia dei Marsi AQ
25. **Scanno b&b ristorante Antica Dimora Fuori Le Mura.** — Anversa degli Abruzzi
   - slug: `scanno-b-b-ristorante-antica-dimora-fuori-le-mur-anversa-degli-abruzzi`
   - indirizzo: Via Don Bosco, 67038 Scanno AQ
26. **Al cervo tra i laghi CIN: IT013222C1GHPFPIJH** — Anzano del Parco
   - slug: `al-cervo-tra-i-laghi-cin-it013222c1ghpfpijh-anzano-del-parco`
   - indirizzo: Via Giorgio Morandi, 5 All’incrocio con, Via per Montorfano, 22038 Tavernerio CO
27. **Arosio Hotel** — Anzano del Parco
   - slug: `arosio-hotel-anzano-del-parco`
   - indirizzo: Via ai Colli, 1, 22060 Arosio CO
28. **Hotel La Casa del Mulino** — Anzano del Parco
   - slug: `hotel-la-casa-del-mulino-anzano-del-parco`
   - indirizzo: Via Giuseppe Mazzini, 7, 22046 Baggero CO
29. **Hotel Leonardo Da Vinci** — Anzano del Parco
   - slug: `hotel-leonardo-da-vinci-anzano-del-parco`
   - indirizzo: Via Leonardo Da Vinci, 6, 22037 Erba CO
30. **La Cavallina Azienda Agrituristica** — Anzano del Parco
   - slug: `la-cavallina-azienda-agrituristica-anzano-del-parco`
   - indirizzo: Via Cava Marna snc Incrocio con via Battisti a Merone, 22040 Monguzzo CO
31. **Park Hotel** — Anzano del Parco
   - slug: `park-hotel-anzano-del-parco`
   - indirizzo: Via XXV Aprile, 14, 22060 Figino Serenza CO
32. **Ristorante La Scaletta Hotel** — Anzano del Parco
   - slug: `ristorante-la-scaletta-hotel-anzano-del-parco`
   - indirizzo: Via Milano, 30, 22063 Cantù CO
33. **Agriturismo La Cerasola - Masseria Grosso** — Anzano di Puglia
   - slug: `agriturismo-la-cerasola-masseria-grosso-anzano-di-puglia`
   - indirizzo: 41.154493099672955, 15.247113658560066, 71020 Monteleone di Puglia FG
34. **Agriturismo Radici Contadine** — Anzano di Puglia
   - slug: `agriturismo-radici-contadine-anzano-di-puglia`
   - indirizzo: 28RR+RV, 83044 Bisaccia AV
35. **B&B Dormire nel Borgo** — Anzano di Puglia
   - slug: `b-b-dormire-nel-borgo-anzano-di-puglia`
   - indirizzo: Via Annunziata, 10, 71023 Bovino FG