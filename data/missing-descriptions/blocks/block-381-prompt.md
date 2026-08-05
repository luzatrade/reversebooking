# Blocco 381/500 — 35 strutture senza descrizione IT

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

1. **B&B L'andirivieni** — Camogli
   - slug: `b-b-l-andirivieni-camogli`
   - indirizzo: Corso G. Mazzini, 109, 16032 Camogli GE
2. **Bed and Breakfast Villa Orchidea** — Camogli
   - slug: `bed-and-breakfast-villa-orchidea-camogli`
   - indirizzo: Via Enrico Figari, 153, 16032 Camogli GE
3. **Carrick Hotel Camogli** — Camogli
   - slug: `carrick-hotel-camogli-camogli`
   - indirizzo: Via Nicolò Cuneo, 24, 16032 Camogli GE
4. **Hotel La Camogliese** — Camogli
   - slug: `hotel-la-camogliese-camogli`
   - indirizzo: Via Giuseppe Garibaldi, 55, 16032 Camogli GE
5. **La Casa di Alessia** — Camogli
   - slug: `la-casa-di-alessia-camogli`
   - indirizzo: Salita Giacomo Favale, 5, 16032 Camogli GE
6. **La CONCHIGLIA - Bed & Breakfast** — Camogli
   - slug: `la-conchiglia-bed-breakfast-camogli`
   - indirizzo: Via Romana, 5, 16032 Camogli GE
7. **La Priaguea - House Beach** — Camogli
   - slug: `la-priaguea-house-beach-camogli`
   - indirizzo: Via Giuseppe Garibaldi, 89, 16032 Camogli GE
8. **Locanda I Tre Merli** — Camogli
   - slug: `locanda-i-tre-merli-camogli`
   - indirizzo: Via dello Scalo, 5, 16032 Camogli GE
9. **Porta del Parco** — Camogli
   - slug: `porta-del-parco-camogli`
   - indirizzo: SS 1, 249, 16032 Camogli GE
10. **Sublimis Boutique Hotel** — Camogli
   - slug: `sublimis-boutique-hotel-camogli`
   - indirizzo: Salita Pinetto, 13, 16032 Camogli GE
11. **Villa Rosmarino** — Camogli
   - slug: `villa-rosmarino-camogli`
   - indirizzo: Via Enrico Figari, 38, 16032 Camogli GE
12. **Agriturismo L'Antico Casale di Matteo Pollice** — Campagna
   - slug: `agriturismo-l-antico-casale-di-matteo-pollice-campagna`
   - indirizzo: Via Madonna D'Avigliano, 84022 Campagna SA
13. **Agriturismo Sant'Angelo** — Campagna
   - slug: `agriturismo-sant-angelo-campagna`
   - indirizzo: STRADA PRIVATA SANT'ANGELO, 7, 84022 Campagna SA
14. **B&B La Magnolia** — Campagna
   - slug: `b-b-la-magnolia-campagna`
   - indirizzo: Via Calli, 106, 84022 Campagna SA
15. **Casa Agricola Scorziello** — Campagna
   - slug: `casa-agricola-scorziello-campagna`
   - indirizzo: S.da Statale 19 delle Calabrie, 84028 Serre SA
16. **DIMORA STORICA MACCARUNERA** — Campagna
   - slug: `dimora-storica-maccarunera-campagna`
   - indirizzo: Piazza Melchiorre Guerriero, 17, 84022 Campagna SA
17. **Hotel Capital** — Campagna
   - slug: `hotel-capital-campagna`
   - indirizzo: Via Nelson Mandela, 27, 84022 Quadrivio SA
18. **Ristorante Il Castagneto** — Campagna
   - slug: `ristorante-il-castagneto-campagna`
   - indirizzo: SS91, 84022 Campagna SA
19. **The Stars Miaj** — Campagna
   - slug: `the-stars-miaj-campagna`
   - indirizzo: via Antonio Vincenzo RIVELLI, 7, 84022 Campagna SA
20. **Alla Campana** — Campagna Lupia
   - slug: `alla-campana-campagna-lupia`
   - indirizzo: Via Giuseppe Mazzini, 78, 30031 Dolo VE
21. **Casa a Colori Venezia** — Campagna Lupia
   - slug: `casa-a-colori-venezia-campagna-lupia`
   - indirizzo: Via dei Frati, 1, 30031 Dolo VE
22. **Hotel Angi** — Campagna Lupia
   - slug: `hotel-angi-campagna-lupia`
   - indirizzo: Via Artigianato, 1, 30030 Fossò VE
23. **Hotel Antica Corte Marchesini** — Campagna Lupia
   - slug: `hotel-antica-corte-marchesini-campagna-lupia`
   - indirizzo: Via Fratelli Cervi, 1, 30010 Campagna Lupia VE
24. **Hotel Relais Alcova del Doge** — Campagna Lupia
   - slug: `hotel-relais-alcova-del-doge-campagna-lupia`
   - indirizzo: Via Nazionale, 39/40, 30034 Mira VE
25. **Hotel Ristorante Magia del Brenta - Riviera del Brenta** — Campagna Lupia
   - slug: `hotel-ristorante-magia-del-brenta-riviera-del-br-campagna-lupia`
   - indirizzo: Via Naviglio, 17, 30039 Fiesso d'Artico VE
26. **Hotel Ristorante Poppi Di Poppi Adriano & C. S.N.C.** — Campagna Lupia
   - slug: `hotel-ristorante-poppi-di-poppi-adriano-c-s-n-c-campagna-lupia`
   - indirizzo: Strada Statale 309 Romea, 80, 30034 Mira VE
27. **Hotel Riviera dei Dogi** — Campagna Lupia
   - slug: `hotel-riviera-dei-dogi-campagna-lupia`
   - indirizzo: Via Don G. Minzoni, 33, 30034 Mira VE
28. **Villa Goetzen Ristorante Hotel** — Campagna Lupia
   - slug: `villa-goetzen-ristorante-hotel-campagna-lupia`
   - indirizzo: Via G. Matteotti, 2c, 30031 Dolo VE
29. **Villa Martin Hotel** — Campagna Lupia
   - slug: `villa-martin-hotel-campagna-lupia`
   - indirizzo: Via Argine Sinistro, 105, 30031 Dolo VE
30. **Autohotel Roma** — Campagnano di Roma
   - slug: `autohotel-roma-campagnano-di-roma`
   - indirizzo: Via Cassia, Km 24.300, 00060 Formello RM
31. **B&B Nonna Loreta Cod CIN IT058038C1ULTC5PRG** — Campagnano di Roma
   - slug: `b-b-nonna-loreta-cod-cin-it058038c1ultc5prg-campagnano-di-roma`
   - indirizzo: Via Delle Nocette, 6, 00060 Formello RM
32. **Hotel Riesco** — Campagnano di Roma
   - slug: `hotel-riesco-campagnano-di-roma`
   - indirizzo: Via della Stazione di Cesano, 340, 00123 Roma RM
33. **La Meridiana Relais** — Campagnano di Roma
   - slug: `la-meridiana-relais-campagnano-di-roma`
   - indirizzo: Via Nazario Sauro, 42c, 00060 Formello RM
34. **Agriturismo - Podere Scopicci** — Campagnatico
   - slug: `agriturismo-podere-scopicci-campagnatico`
   - indirizzo: Via Fontemarina, località Scopicci, frazione 52, 58042 Campagnatico GR
35. **Agriturismo Casa Olivo** — Campagnatico
   - slug: `agriturismo-casa-olivo-campagnatico`
   - indirizzo: SP44 delle Via delle Conce, 35, 58042 Campagnatico GR