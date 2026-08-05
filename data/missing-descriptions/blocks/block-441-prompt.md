# Blocco 441/500 — 35 strutture senza descrizione IT

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

1. **Villaggio Sol&Verde** — Carnago
   - slug: `villaggio-sol-verde-carnago`
   - indirizzo: Via Montello, 17, 21040 Gornate Olona VA
2. **Antica Locanda Il Girasole** — Carnate
   - slug: `antica-locanda-il-girasole-carnate`
   - indirizzo: Via Gaetano Casati, 1, 20900 Monza MB
3. **b&b CASA 71** — Carnate
   - slug: `b-b-casa-71-carnate`
   - indirizzo: Via Milano, 71, 23871 Lomagna LC
4. **B&B Da Pinetta** — Carnate
   - slug: `b-b-da-pinetta-carnate`
   - indirizzo: Via Giancarlo Sala, 4, 23897 Viganò LC
5. **Ad Hoc Bed & Breakfast San Paolo D'Argon** — Carobbio degli Angeli
   - slug: `ad-hoc-bed-breakfast-san-paolo-d-argon-carobbio-degli-angeli`
   - indirizzo: Via Sarnico, 3A, 24060 Tri Plok BG
6. **Castello degli Angeli** — Carobbio degli Angeli
   - slug: `castello-degli-angeli-carobbio-degli-angeli`
   - indirizzo: Via Scalette, 24060 Carobbio degli Angeli BG
7. **Relais In Charme Castello Degli Angeli** — Carobbio degli Angeli
   - slug: `relais-in-charme-castello-degli-angeli-carobbio-degli-angeli`
   - indirizzo: Via Scalette, 6, 24060 Carobbio degli Angeli BG
8. **Relais Valcalepio** — Carobbio degli Angeli
   - slug: `relais-valcalepio-carobbio-degli-angeli`
   - indirizzo: Via Fontanile, 7, 24060 Gandosso BG
9. **B&B Rossini luxury 3** — Carolei
   - slug: `b-b-rossini-luxury-3-carolei`
   - indirizzo: Largo Ignazio Silone, 12, 87100 Cosenza CS
10. **Bed and Breakfast Cosenza** — Carolei
   - slug: `bed-and-breakfast-cosenza-carolei`
   - indirizzo: Via Rivocati, 48, 87100 Cosenza CS
11. **Brettia Guest Rooms** — Carolei
   - slug: `brettia-guest-rooms-carolei`
   - indirizzo: Viale Trieste, 53, 87100 Cosenza CS
12. **La Casetta nel Borgo** — Carolei
   - slug: `la-casetta-nel-borgo-carolei`
   - indirizzo: Viale Roma, 7, 87044 Cerisano CS
13. **Tetto Verde** — Carolei
   - slug: `tetto-verde-carolei`
   - indirizzo: Via iove, 4, 87030 Carolei CS
14. **B&B Campo Base** — Carona
   - slug: `b-b-campo-base-carona`
   - indirizzo: Via Carona di sotto, 24010 Carona BG
15. **Rifugio Terrerosse Nuova Gestione 2023** — Carona
   - slug: `rifugio-terrerosse-nuova-gestione-2023-carona`
   - indirizzo: Val carisole, 24010 Carona BG
16. **Casa Vacanze Camastra** — Caronia
   - slug: `casa-vacanze-camastra-caronia`
   - indirizzo: Via Leonida, 37, 98077 Santo Stefano di Camastra ME
17. **Casa Vacanze Le Casette** — Caronia
   - slug: `casa-vacanze-le-casette-caronia`
   - indirizzo: Via Collegio, 91-93, 98077 Santo Stefano di Camastra ME
18. **L'Angolo di Sarah** — Caronia
   - slug: `l-angolo-di-sarah-caronia`
   - indirizzo: Via Brofferio, 13, 98077 Santo Stefano di Camastra ME
19. **Moma-hotel** — Caronia
   - slug: `moma-hotel-caronia`
   - indirizzo: Via Croce MIssione, 98079 Tusa ME
20. **Nnakkara Guest House** — Caronia
   - slug: `nnakkara-guest-house-caronia`
   - indirizzo: Via Libero Grassi, 5, 98077 Santo Stefano di Camastra ME
21. **Palazzo Pagliaro** — Caronia
   - slug: `palazzo-pagliaro-caronia`
   - indirizzo: Via Manzoni, 14, 98077 Santo Stefano di Camastra ME
22. **Hotel del Ponte** — Caronno Pertusella
   - slug: `hotel-del-ponte-caronno-pertusella`
   - indirizzo: Via Enrico Toti, 417, 21042 Caronno Pertusella VA
23. **ibis Milano Fiera** — Caronno Pertusella
   - slug: `ibis-milano-fiera-caronno-pertusella`
   - indirizzo: Via Pirelli, 4, 20045 Lainate MI
24. **Il Codirosso | Il Castello che non c'era...** — Caronno Pertusella
   - slug: `il-codirosso-il-castello-che-non-c-era-caronno-pertusella`
   - indirizzo: Via Monterosso, 7, 20031 Cesate MI
25. **Starhotels Grand Milan** — Caronno Pertusella
   - slug: `starhotels-grand-milan-caronno-pertusella`
   - indirizzo: Via Varese, 23, 21047 Saronno VA
26. **Virginia Palace Hotel** — Caronno Pertusella
   - slug: `virginia-palace-hotel-caronno-pertusella`
   - indirizzo: Via Monte Nero, 127, 20024 Garbagnate Milanese MI
27. **B&B Ghe Sem Morazzone Storia e Tradizione** — Caronno Varesino
   - slug: `b-b-ghe-sem-morazzone-storia-e-tradizione-caronno-varesino`
   - indirizzo: Via G. Mameli, 47, 21040 Morazzone VA
28. **B&B Villa Emilia** — Caronno Varesino
   - slug: `b-b-villa-emilia-caronno-varesino`
   - indirizzo: Via Mottarone, 7, 21040 Castronno VA
29. **B&B VillaMonterosa** — Caronno Varesino
   - slug: `b-b-villamonterosa-caronno-varesino`
   - indirizzo: Via Gioacchino Rossini, 4, 21040 Castronno VA
30. **A CASA DI ALICE** — Carosino
   - slug: `a-casa-di-alice-carosino`
   - indirizzo: Via Roma, 33, 74026 Pulsano TA
31. **Ara Solis Hotel** — Carosino
   - slug: `ara-solis-hotel-carosino`
   - indirizzo: Via Calata Penna Dritta, 2, 74123 Taranto TA
32. **B&B Casa MarFe** — Carosino
   - slug: `b-b-casa-marfe-carosino`
   - indirizzo: Via Pitagora, 1, 74023 Grottaglie TA
33. **B&B Corte Mopps - SPA Elysium** — Carosino
   - slug: `b-b-corte-mopps-spa-elysium-carosino`
   - indirizzo: Via la Sorte, 26, 74023 Grottaglie TA
34. **B&B La Casa Di Tella** — Carosino
   - slug: `b-b-la-casa-di-tella-carosino`
   - indirizzo: Viale Risorgimento, 73, 74021 Carosino TA
35. **B&B Le Stanze di Nonna Cecè** — Carosino
   - slug: `b-b-le-stanze-di-nonna-cece-carosino`
   - indirizzo: via Vittorio Veneto, Piazza Maria Immacolata, 118, 74026 Pulsano TA