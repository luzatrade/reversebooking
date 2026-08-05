# Blocco 179/500 — 35 strutture senza descrizione IT

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

1. **Albergo Haflingerhof** — Avelengo/Hafling
   - slug: `albergo-haflingerhof-avelengo-hafling`
   - indirizzo: Via Paese, 6, 39010 Avelengo BZ
2. **B&B Cityhotel Aster** — Avelengo/Hafling
   - slug: `b-b-cityhotel-aster-avelengo-hafling`
   - indirizzo: Via Dante, 40, 39012 Merano BZ
3. **Gasthof & Restaurant Moserhof** — Avelengo/Hafling
   - slug: `gasthof-restaurant-moserhof-avelengo-hafling`
   - indirizzo: Via Sant Georgen, 40, 39017 San Giorgio BZ
4. **Hotel Angelica** — Avelengo/Hafling
   - slug: `hotel-angelica-avelengo-hafling`
   - indirizzo: Via Scena, 36, 39012 Merano BZ
5. **Hotel Der Mesnerwirt** — Avelengo/Hafling
   - slug: `hotel-der-mesnerwirt-avelengo-hafling`
   - indirizzo: Via alla Chiesa, 2, 39010 Avelengo BZ
6. **Hotel Garni Ehrenfels** — Avelengo/Hafling
   - slug: `hotel-garni-ehrenfels-avelengo-hafling`
   - indirizzo: Via Sant Georgen, 31, 39017 Scena BZ
7. **Hotel Garni Zima** — Avelengo/Hafling
   - slug: `hotel-garni-zima-avelengo-hafling`
   - indirizzo: Via Winkel, 83, 39012 Merano BZ
8. **Hotel Kiendl** — Avelengo/Hafling
   - slug: `hotel-kiendl-avelengo-hafling`
   - indirizzo: Naifstraße, 2, 39017 Scena BZ
9. **Hotel Landhaus Innerhofer** — Avelengo/Hafling
   - slug: `hotel-landhaus-innerhofer-avelengo-hafling`
   - indirizzo: Str. Vecchia, 1, 39017 Scena BZ
10. **Hotel Maximilian** — Avelengo/Hafling
   - slug: `hotel-maximilian-avelengo-hafling`
   - indirizzo: Via Castel Gatto, 3, 39012 Merano BZ
11. **Hotel Restaurant Waldbichl** — Avelengo/Hafling
   - slug: `hotel-restaurant-waldbichl-avelengo-hafling`
   - indirizzo: Via Aschl/Eschio, 11, 39010 Verano BZ
12. **Hotel Schönbrunn** — Avelengo/Hafling
   - slug: `hotel-schonbrunn-avelengo-hafling`
   - indirizzo: Via Josef-Mayr-Nusser, 29, 39012 Merano BZ
13. **Hotel Sonnenheim** — Avelengo/Hafling
   - slug: `hotel-sonnenheim-avelengo-hafling`
   - indirizzo: Via Falzeben, 63, 39010 Avelengo BZ
14. **Miramonti Boutique Hotel, an SLH Hotel** — Avelengo/Hafling
   - slug: `miramonti-boutique-hotel-an-slh-hotel-avelengo-hafling`
   - indirizzo: Via S. Caterina, 14, 39010 Avelengo BZ
15. **Pension Obertaberhof Sterne** — Avelengo/Hafling
   - slug: `pension-obertaberhof-sterne-avelengo-hafling`
   - indirizzo: Via Sant Georgen, 19, 39017 Scena BZ
16. **Pension zum Burggräffler** — Avelengo/Hafling
   - slug: `pension-zum-burggraffler-avelengo-hafling`
   - indirizzo: St. Georgenstraße, 32, 39017 Scena BZ
17. **Pensione Planta** — Avelengo/Hafling
   - slug: `pensione-planta-avelengo-hafling`
   - indirizzo: Via Hasler, 9, 39012 Merano BZ
18. **Pensione Verdorfer** — Avelengo/Hafling
   - slug: `pensione-verdorfer-avelengo-hafling`
   - indirizzo: Via Scena, 47, 39012 Merano BZ
19. **Steinerhof - Hafling - Urlaub auf den Bauernhof** — Avelengo/Hafling
   - slug: `steinerhof-hafling-urlaub-auf-den-bauernhof-avelengo-hafling`
   - indirizzo: Hinterdorferweg, 5, 39010 Avelengo BZ
20. **Affittacamere Camere Santa Lucia** — Avella
   - slug: `affittacamere-camere-santa-lucia-avella`
   - indirizzo: Via Santa Lucia, 80030 Roccarainola NA
21. **Antico Mulino Agriresort** — Avella
   - slug: `antico-mulino-agriresort-avella`
   - indirizzo: Via dei Mulini, 24, 83021 Avella AV
22. **B.& B. Maison Villa Vittorio** — Avella
   - slug: `b-b-maison-villa-vittorio-avella`
   - indirizzo: Via Santo Jacopo, 7, 83021 Avella AV
23. **Best Western Hotel Ferrari** — Avella
   - slug: `best-western-hotel-ferrari-avella`
   - indirizzo: V. Nazionale delle Puglie, 349, 80030 San Vitaliano NA
24. **Bfor - Suite Experience** — Avella
   - slug: `bfor-suite-experience-avella`
   - indirizzo: Via Ruggero Leoncavallo, 17, 80035 Nola NA
25. **Crazy Suites** — Avella
   - slug: `crazy-suites-avella`
   - indirizzo: Via M. De Sena, 181, 80035 Nola NA
26. **Favorite room** — Avella
   - slug: `favorite-room-avella`
   - indirizzo: Via dei Mille, 168, 80035 Nola NA
27. **Ghe Kale' Resort** — Avella
   - slug: `ghe-kale-resort-avella`
   - indirizzo: Via Tommaso Vitale, 35, 80030 San Paolo Bel Sito NA
28. **Heritage Room** — Avella
   - slug: `heritage-room-avella`
   - indirizzo: Via On. Francesco Napolitano, 229, 80035 Nola NA
29. **Hotel Privacy** — Avella
   - slug: `hotel-privacy-avella`
   - indirizzo: Via de Siervo, 4, 80035 Nola NA
30. **Hotel XBusiness** — Avella
   - slug: `hotel-xbusiness-avella`
   - indirizzo: V. Polveriera, 80035 Nola NA
31. **Il Giardino delle Ninfee** — Avella
   - slug: `il-giardino-delle-ninfee-avella`
   - indirizzo: Via Giacomo Imbroda, 1, 80035 Nola NA
32. **Nola Boutique Hotel** — Avella
   - slug: `nola-boutique-hotel-avella`
   - indirizzo: Via Taranto, 36, 80035 Nola NA
33. **Villa Palma - Appartamenti per Soggiorni** — Avella
   - slug: `villa-palma-appartamenti-per-soggiorni-avella`
   - indirizzo: Via Alcide De Gasperi, 3, 83021 Avella AV
34. **Villa Vetrano** — Avella
   - slug: `villa-vetrano-avella`
   - indirizzo: Via S. Donato, 8, 80030 Cimitile NA
35. **X Hotel** — Avella
   - slug: `x-hotel-avella`
   - indirizzo: Via Crocefisso, 25, 80039 Saviano NA