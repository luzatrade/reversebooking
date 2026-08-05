# Blocco 15/500 — 35 strutture senza descrizione IT

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

1. **Il Pianaccio** — Acquasparta
   - slug: `il-pianaccio-acquasparta`
   - indirizzo: Viale Cerquestrette, 164, 06049 San Martino In Trignano PG
2. **La casa di Armando** — Acquasparta
   - slug: `la-casa-di-armando-acquasparta`
   - indirizzo: Località Pardo, 1C, 05029 San Gemini TR
3. **La Casetta di Lilly** — Acquasparta
   - slug: `la-casetta-di-lilly-acquasparta`
   - indirizzo: Str, Strada di San Cristoforo, 3A, 05022 Amelia TR
4. **La Fortezza Alta** — Acquasparta
   - slug: `la-fortezza-alta-acquasparta`
   - indirizzo: Località Fortezza Alta, 05020 Avigliano Umbro TR
5. **La Lanterna struttura extralberghiera** — Acquasparta
   - slug: `la-lanterna-struttura-extralberghiera-acquasparta`
   - indirizzo: Via Giacomo Matteotti, 86, 05020 Avigliano Umbro TR
6. **La maison Bed & Breakfast** — Acquasparta
   - slug: `la-maison-bed-breakfast-acquasparta`
   - indirizzo: Strada Regionale, 316, 06056 Massa Martana PG
7. **La Perticara Agriturismo** — Acquasparta
   - slug: `la-perticara-agriturismo-acquasparta`
   - indirizzo: Via Campagna, 29, 05021 Acquasparta TR
8. **Relais Tenuta Amerina** — Acquasparta
   - slug: `relais-tenuta-amerina-acquasparta`
   - indirizzo: Str. di Merlone, 05021 Acquasparta TR
9. **Tamerici House** — Acquasparta
   - slug: `tamerici-house-acquasparta`
   - indirizzo: voc. Collicelli, 61/a Frazione Quadrelli, 05026 Montecastrilli TR
10. **Torre Sangiovanni Albergo & Ristorante** — Acquasparta
   - slug: `torre-sangiovanni-albergo-ristorante-acquasparta`
   - indirizzo: Vocabolo Castello, 26/G, 06059 Collevalenza PG
11. **Agriturismo Colle Bianco** — Acquaviva Collecroce
   - slug: `agriturismo-colle-bianco-acquaviva-collecroce`
   - indirizzo: Contrada Colle Bianco, 2/A, 86030 Mafalda CB
12. **Agriturismo La Quiete** — Acquaviva Collecroce
   - slug: `agriturismo-la-quiete-acquaviva-collecroce`
   - indirizzo: Contrada Pontone Macchiozzi, 1, 86039 Termoli CB
13. **Al Settimo Cielo** — Acquaviva Collecroce
   - slug: `al-settimo-cielo-acquaviva-collecroce`
   - indirizzo: SP163, 86036 Montenero di Bisaccia CB
14. **Albergo Diffuso "Borgo delle Fonti"** — Acquaviva Collecroce
   - slug: `albergo-diffuso-borgo-delle-fonti-acquaviva-collecroce`
   - indirizzo: Via Trento, 3, 86030 Acquaviva Collecroce CB
15. **B&B I-relais** — Acquaviva Collecroce
   - slug: `b-b-i-relais-acquaviva-collecroce`
   - indirizzo: Contrada Serra, 1, 86033 Montefalcone nel Sannio CB
16. **B&b Lume** — Acquaviva Collecroce
   - slug: `b-b-lume-acquaviva-collecroce`
   - indirizzo: SP78, 47, 86030 Castelmauro CB
17. **B&B Pozzo Innamorato** — Acquaviva Collecroce
   - slug: `b-b-pozzo-innamorato-acquaviva-collecroce`
   - indirizzo: 86036 Montenero di Bisaccia CB
18. **Colle degli Ulivi** — Acquaviva Collecroce
   - slug: `colle-degli-ulivi-acquaviva-collecroce`
   - indirizzo: Strada Comunale del Bagni, 86038 Petacciato CB
19. **Corte Reale Luxury B&B** — Acquaviva Collecroce
   - slug: `corte-reale-luxury-b-b-acquaviva-collecroce`
   - indirizzo: Via Stingi, 41, 66050 San Salvo CH
20. **Country House Mafalda** — Acquaviva Collecroce
   - slug: `country-house-mafalda-acquaviva-collecroce`
   - indirizzo: Contrada Granciara, 86030 Mafalda CB
21. **Hotel Di Nardo** — Acquaviva Collecroce
   - slug: `hotel-di-nardo-acquaviva-collecroce`
   - indirizzo: Via Pier Paolo Pasolini, 7, 86038 Petacciato CB
22. **Il Gallo con gli Stivali** — Acquaviva Collecroce
   - slug: `il-gallo-con-gli-stivali-acquaviva-collecroce`
   - indirizzo: Via Sangro, 9, 86039 Termoli CB
23. **Masseria Grande Hotel - Ristorante** — Acquaviva Collecroce
   - slug: `masseria-grande-hotel-ristorante-acquaviva-collecroce`
   - indirizzo: Contrada Pezze di Corundoli, 86032 Montecilfone CB
24. **Paraiso** — Acquaviva Collecroce
   - slug: `paraiso-acquaviva-collecroce`
   - indirizzo: c.da granciara, 14, 86030 Mafalda CB
25. **Parco delle Stelle** — Acquaviva Collecroce
   - slug: `parco-delle-stelle-acquaviva-collecroce`
   - indirizzo: Via Fonticella, 86031 Castelmauro CB
26. **PARK HOTEL CAMPITELLI** — Acquaviva Collecroce
   - slug: `park-hotel-campitelli-acquaviva-collecroce`
   - indirizzo: Via S. Benedetto, 1, 86035 Larino CB
27. **Residenza B&B Vistamare** — Acquaviva Collecroce
   - slug: `residenza-b-b-vistamare-acquaviva-collecroce`
   - indirizzo: Piazza Belvedere, 24, 86038 Petacciato CB
28. **Residenza Skanderbeg** — Acquaviva Collecroce
   - slug: `residenza-skanderbeg-acquaviva-collecroce`
   - indirizzo: Via Roma, 39, 86032 Montecilfone CB
29. **Solelago** — Acquaviva Collecroce
   - slug: `solelago-acquaviva-collecroce`
   - indirizzo: Contrada Difesa delle Camerelle, 86030 Guardialfiera CB
30. **Villa Bianca Hotel & Spa** — Acquaviva Collecroce
   - slug: `villa-bianca-hotel-spa-acquaviva-collecroce`
   - indirizzo: Via il Caravaggio, 14/D, 66050 San Salvo CH
31. **Alisma Hotel** — Acquaviva d'Isernia
   - slug: `alisma-hotel-acquaviva-d-isernia`
   - indirizzo: Via della Pinetina, 67030 Alfedena AQ
32. **B&B DOMUS VELA** — Acquaviva d'Isernia
   - slug: `b-b-domus-vela-acquaviva-d-isernia`
   - indirizzo: Piazza Umberto I, 86070 Fornelli IS
33. **B&B Giallo Siena** — Acquaviva d'Isernia
   - slug: `b-b-giallo-siena-acquaviva-d-isernia`
   - indirizzo: Via Casali, 86073 Colli a Volturno IS
34. **B&B Gocciaverde** — Acquaviva d'Isernia
   - slug: `b-b-gocciaverde-acquaviva-d-isernia`
   - indirizzo: Via Olmo, 86070 Rocchetta Alta IS
35. **B&B il Borgo** — Acquaviva d'Isernia
   - slug: `b-b-il-borgo-acquaviva-d-isernia`
   - indirizzo: Via Buonconsiglio, 30, 86070 Scapoli IS