# Blocco 299/500 — 35 strutture senza descrizione IT

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

1. **B&B La Torre Revere** — Borgo Mantovano
   - slug: `b-b-la-torre-revere-borgo-mantovano`
   - indirizzo: Via Silvio Pellico, 3, 46036 Revere MN
2. **Casa Bellodi** — Borgo Mantovano
   - slug: `casa-bellodi-borgo-mantovano`
   - indirizzo: Via II Giugno, 37, 41016 Novi di Modena MO
3. **Garden Hotel & Residence** — Borgo Mantovano
   - slug: `garden-hotel-residence-borgo-mantovano`
   - indirizzo: Via Mazzini, 7, 46020 Quingentole MN
4. **Hotel Cioè** gruppo Doria HotelS** — Borgo Mantovano
   - slug: `hotel-cioe-gruppo-doria-hotels-borgo-mantovano`
   - indirizzo: Via Vittorio Veneto, 7, 46035 Ostiglia MN
5. **Hotel Ristorante Savoia** — Borgo Mantovano
   - slug: `hotel-ristorante-savoia-borgo-mantovano`
   - indirizzo: Via G. Matteotti, 250, 46025 Poggio Rusco MN
6. **Ostello Dei Concari** — Borgo Mantovano
   - slug: `ostello-dei-concari-borgo-mantovano`
   - indirizzo: Via Nino Bixio, 10, 46037 Bagnolo San Vito MN
7. **Agriturismo Dai Du Bourdei** — Borgo Pace
   - slug: `agriturismo-dai-du-bourdei-borgo-pace`
   - indirizzo: Loc. Ca’ Marchino, 61021 Frontino PU
8. **Agriturismo Podere Violino** — Borgo Pace
   - slug: `agriturismo-podere-violino-borgo-pace`
   - indirizzo: Via del Tevere, 1150, 52037 Sansepolcro AR
9. **Agriturismo Sacchiafarm** — Borgo Pace
   - slug: `agriturismo-sacchiafarm-borgo-pace`
   - indirizzo: Località Sacchia, 61040 Borgo Pace PU
10. **Albergo Fiorentino** — Borgo Pace
   - slug: `albergo-fiorentino-borgo-pace`
   - indirizzo: Via Luca Pacioli, 56, 52037 Sansepolcro AR
11. **Albergo Ristorante Taverna** — Borgo Pace
   - slug: `albergo-ristorante-taverna-borgo-pace`
   - indirizzo: Via Anconetana, 27, 52037 Sansepolcro AR
12. **B&B DolceRosa** — Borgo Pace
   - slug: `b-b-dolcerosa-borgo-pace`
   - indirizzo: Via Niccolo' Aggiunti, 74, 52037 Sansepolcro AR
13. **Bed and Breakfast Quiete sul Meta** — Borgo Pace
   - slug: `bed-and-breakfast-quiete-sul-meta-borgo-pace`
   - indirizzo: Via Papa Clemente XIV, 4, 61040 Borgo Pace PU
14. **Borgo Palace Hotel** — Borgo Pace
   - slug: `borgo-palace-hotel-borgo-pace`
   - indirizzo: Via Senese Aretina, 80, 52037 Sansepolcro AR
15. **Borgo Storico Cisterna Agriturismo** — Borgo Pace
   - slug: `borgo-storico-cisterna-agriturismo-borgo-pace`
   - indirizzo: Santa Lucia Cisterna, 12, 61023 Macerata Feltria PU
16. **Enoteca & Locanda Guidi** — Borgo Pace
   - slug: `enoteca-locanda-guidi-borgo-pace`
   - indirizzo: Via Luca Pacioli, 44, 52037 Sansepolcro AR
17. **ValdericArte creative residence** — Borgo Pace
   - slug: `valdericarte-creative-residence-borgo-pace`
   - indirizzo: Località Valderica, 08, 61040 Lamoli PU
18. **Agriturismo Cascina Pozzarello** — Borgo Priolo
   - slug: `agriturismo-cascina-pozzarello-borgo-priolo`
   - indirizzo: Via Castelfelice, 2, 27054 Montebello della Battaglia PV
19. **Agriturismo Il Biancospino** — Borgo Priolo
   - slug: `agriturismo-il-biancospino-borgo-priolo`
   - indirizzo: Via S. Biagio, 32, 27045 Casteggio PV
20. **Agriturismo Il Castagno** — Borgo Priolo
   - slug: `agriturismo-il-castagno-borgo-priolo`
   - indirizzo: Località Biancanigi, 12, 27040 Borgo Priolo PV
21. **Agriturismo La Roveda** — Borgo Priolo
   - slug: `agriturismo-la-roveda-borgo-priolo`
   - indirizzo: Cascina La Roveda, 27050 Montebello della Battaglia PV
22. **Agriturismo Mondo Antico** — Borgo Priolo
   - slug: `agriturismo-mondo-antico-borgo-priolo`
   - indirizzo: Località Casazza, 3, 27052 Rocca Susella PV
23. **Azienda Agricola Borgo Santuletta** — Borgo Priolo
   - slug: `azienda-agricola-borgo-santuletta-borgo-priolo`
   - indirizzo: Cascina Giampietro, 1, 27046 Santa Giuletta PV
24. **B&B Casa Percivalle** — Borgo Priolo
   - slug: `b-b-casa-percivalle-borgo-priolo`
   - indirizzo: Località Casa Percivalle, 1, 27040 Casa Percivalle PV
25. **B&B Felix House** — Borgo Priolo
   - slug: `b-b-felix-house-borgo-priolo`
   - indirizzo: Via L. Negrotto, 40, 27050 Codevilla PV
26. **B&B la Mafalda in Oltrepo** — Borgo Priolo
   - slug: `b-b-la-mafalda-in-oltrepo-borgo-priolo`
   - indirizzo: Frazione Piana, 5, 27050 Codevilla PV
27. **Castello di Stefanago Organic Winery** — Borgo Priolo
   - slug: `castello-di-stefanago-organic-winery-borgo-priolo`
   - indirizzo: Località Castello di Stefanago, 27040, 27040 Fortunago PV
28. **Cowboys' Guest Ranch** — Borgo Priolo
   - slug: `cowboys-guest-ranch-borgo-priolo`
   - indirizzo: Via Tullio Morato, 18, 27058 Voghera PV
29. **Tenuta Il Fienile** — Borgo Priolo
   - slug: `tenuta-il-fienile-borgo-priolo`
   - indirizzo: Via Pieve, 1, 15050 Momperone AL
30. **Torrazzetta Natural Winery Agriturismo** — Borgo Priolo
   - slug: `torrazzetta-natural-winery-agriturismo-borgo-priolo`
   - indirizzo: Loc. Torrazzetta, 1, 27040 Borgo Priolo PV
31. **Albergo Trieste Boves** — Borgo San Dalmazzo
   - slug: `albergo-trieste-boves-borgo-san-dalmazzo`
   - indirizzo: Corso Trieste, 33, 12012 Boves CN
32. **B & B La Ca' Di Massuc** — Borgo San Dalmazzo
   - slug: `b-b-la-ca-di-massuc-borgo-san-dalmazzo`
   - indirizzo: Fraz, c v, Strada Bassa, 12a, 12016 San Lorenzo CN
33. **B&B La Piazzetta Del Borgo** — Borgo San Dalmazzo
   - slug: `b-b-la-piazzetta-del-borgo-borgo-san-dalmazzo`
   - indirizzo: Piazza Falcone e Borsellino, 2, 12011 Borgo San Dalmazzo CN
34. **B&B SanRock** — Borgo San Dalmazzo
   - slug: `b-b-sanrock-borgo-san-dalmazzo`
   - indirizzo: Piazzale della Repubblica, 6, 12100 Cuneo CN
35. **B&B Villa Rina** — Borgo San Dalmazzo
   - slug: `b-b-villa-rina-borgo-san-dalmazzo`
   - indirizzo: Via Madonna del Campo, 19, 12011 Borgo San Dalmazzo CN