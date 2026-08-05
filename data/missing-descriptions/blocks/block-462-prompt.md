# Blocco 462/500 — 35 strutture senza descrizione IT

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

1. **Infinity House** — Casier
   - slug: `infinity-house-casier`
   - indirizzo: Via Principale, 105, 31030 Casier TV
2. **Agriturismo Terre di Casalia** — Casina
   - slug: `agriturismo-terre-di-casalia-casina`
   - indirizzo: Località Casalia – Paullo di Casina – 42034, 42034 Casina RE
3. **Albergo Sara** — Casina
   - slug: `albergo-sara-casina`
   - indirizzo: Via Foina, 8, 42034 Casina RE
4. **Azienda Agrituristica Riserva del Re** — Casina
   - slug: `azienda-agrituristica-riserva-del-re-casina`
   - indirizzo: Via della Braglia, 1/A, 42034 Casina RE
5. **B&B Borgo del Folletto** — Casina
   - slug: `b-b-borgo-del-folletto-casina`
   - indirizzo: Via Crocicchio, 9/1, 42034 Casina RE
6. **B&B Casa della Musica** — Casina
   - slug: `b-b-casa-della-musica-casina`
   - indirizzo: Via Monte, Loc.Casola di Mezzo, 30, 42030 Vezzano sul Crostolo RE
7. **B&B La Costa** — Casina
   - slug: `b-b-la-costa-casina`
   - indirizzo: Via Mulino di Cortogno, 21, 42034 Casina RE
8. **Bed & Breakfast L'Uva Fragolina** — Casina
   - slug: `bed-breakfast-l-uva-fragolina-casina`
   - indirizzo: Via Leguigno Faggeto, 15, 42034 Casina RE
9. **Madonna della Corte** — Casina
   - slug: `madonna-della-corte-casina`
   - indirizzo: Via il Crocicchio, 13, 42034 Crocicchio RE
10. **Home4you Treviglio** — Casirate d'Adda
   - slug: `home4you-treviglio-casirate-d-adda`
   - indirizzo: Via Milano, 65, 24047 Treviglio BG
11. **B&B ARCOBALENO** — Caslino d'Erba
   - slug: `b-b-arcobaleno-caslino-d-erba`
   - indirizzo: Via S. Carlo, 2, 22030 Longone Al Segrino CO
12. **B&B Bell'Ulivo** — Caslino d'Erba
   - slug: `b-b-bell-ulivo-caslino-d-erba`
   - indirizzo: Via Dalmazia, 25, 22037 Ponte Lambro CO
13. **B&B Erba** — Caslino d'Erba
   - slug: `b-b-erba-caslino-d-erba`
   - indirizzo: Viale Resegone, 19, 22036 Erba CO
14. **Agriturismo Ca del Lago** — Casnate con Bernate
   - slug: `agriturismo-ca-del-lago-casnate-con-bernate`
   - indirizzo: Via alla Poncia, 12, 22015 Gravedona CO
15. **Agriturismo Shakei** — Casnate con Bernate
   - slug: `agriturismo-shakei-casnate-con-bernate`
   - indirizzo: Via Monte Rosa, 1, 22070 Zappa CO
16. **AGRITURISMO ZERTIN** — Casnate con Bernate
   - slug: `agriturismo-zertin-casnate-con-bernate`
   - indirizzo: Via Ai Monti, 22010 Peglio CO
17. **B&B Alciliegio** — Casnate con Bernate
   - slug: `b-b-alciliegio-casnate-con-bernate`
   - indirizzo: Via Caio Plinio, 30, 22070 Casnate Con Bernate CO
18. **Casa vacanze CASA PLINIO** — Casnate con Bernate
   - slug: `casa-vacanze-casa-plinio-casnate-con-bernate`
   - indirizzo: Via Caio Plinio, 10, 22070 Casnate con Bernate CO
19. **Il Nespolo Del Nonno** — Casnate con Bernate
   - slug: `il-nespolo-del-nonno-casnate-con-bernate`
   - indirizzo: Via Andrate Vecchia, 26, 22073 Fino Mornasco CO
20. **Tenuta Ronco Regio** — Casnate con Bernate
   - slug: `tenuta-ronco-regio-casnate-con-bernate`
   - indirizzo: solo 8 Km da Como Centro, Via Roncoreggio, 1, 22042 San Fermo della Battaglia CO
21. **Treterre** — Casnate con Bernate
   - slug: `treterre-casnate-con-bernate`
   - indirizzo: Via Tre Terre, 911, 22010 Pianello del Lario CO
22. **Villa Mirella** — Casnate con Bernate
   - slug: `villa-mirella-casnate-con-bernate`
   - indirizzo: Via Monte Grappa, 3, 22070 Casnate con Bernate CO
23. **Villa Patrizia B&B** — Casnate con Bernate
   - slug: `villa-patrizia-b-b-casnate-con-bernate`
   - indirizzo: Via L. Manara, 12A, 22070 Casnate Con Bernate CO
24. **Albergo Belvedere** — Casnigo
   - slug: `albergo-belvedere-casnigo`
   - indirizzo: Via Don Luigi Sturzo, 1, 24025 Orezzo BG
25. **Hotel Concordia** — Casnigo
   - slug: `hotel-concordia-casnigo`
   - indirizzo: Piazza Umberto I, 2, 24017 Serina BG
26. **B&B L' Abbraccio** — Casola di Napoli
   - slug: `b-b-l-abbraccio-casola-di-napoli`
   - indirizzo: Via Tuoro, 11, 80050 Casola di Napoli NA
27. **B&b MicAnTo** — Casola di Napoli
   - slug: `b-b-micanto-casola-di-napoli`
   - indirizzo: Via Cevane, 3, 80050 Casola di Napoli NA
28. **Europa Stabia Hotel** — Casola di Napoli
   - slug: `europa-stabia-hotel-casola-di-napoli`
   - indirizzo: Via Pasquale Moscogiuri, 7, 80053 Castellammare di Stabia NA
29. **Experience Boutique Hotel - Villa Cimmino** — Casola di Napoli
   - slug: `experience-boutique-hotel-villa-cimmino-casola-di-napoli`
   - indirizzo: Str. Panoramica, 97, 80053 Castellammare di Stabia NA
30. **Hotel Parco** — Casola di Napoli
   - slug: `hotel-parco-casola-di-napoli`
   - indirizzo: Strada Statale per Agerola, 366, 80054 Gragnano NA
31. **Hotel Ristorante Amitrano** — Casola di Napoli
   - slug: `hotel-ristorante-amitrano-casola-di-napoli`
   - indirizzo: Via Lepanto, 97, 80045 Pompei NA
32. **Hotel Stabia** — Casola di Napoli
   - slug: `hotel-stabia-casola-di-napoli`
   - indirizzo: Corso Vittorio Emanuele, 101, 80053 Castellammare di Stabia NA
33. **Il Rifugio Sui Due Golfi** — Casola di Napoli
   - slug: `il-rifugio-sui-due-golfi-casola-di-napoli`
   - indirizzo: Via Gesini, 63, 80050 Casola di Napoli NA
34. **La Vigna del Vento** — Casola di Napoli
   - slug: `la-vigna-del-vento-casola-di-napoli`
   - indirizzo: Via San Giorgio, 3, 80050 Casola di Napoli NA
35. **Luxury view apartment** — Casola di Napoli
   - slug: `luxury-view-apartment-casola-di-napoli`
   - indirizzo: Via Vittorio Veneto, 80050 Casola di Napoli NA