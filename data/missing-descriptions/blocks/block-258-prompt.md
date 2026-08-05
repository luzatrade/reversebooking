# Blocco 258/500 — 35 strutture senza descrizione IT

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

1. **Hotel Passacor** — Bergantino
   - slug: `hotel-passacor-bergantino`
   - indirizzo: Str. Prov. Ferrarese, 4, 46021 Carbonara di Po MN
2. **La Luce della Luna** — Bergantino
   - slug: `la-luce-della-luna-bergantino`
   - indirizzo: Via Spinea, 996, 45030 Castelnovo Bariano RO
3. **Locanda Bepa** — Bergantino
   - slug: `locanda-bepa-bergantino`
   - indirizzo: Via Tartaro, 10, 46035 Loc. Bastion San Michele, MN
4. **Sold Out Locazione Turistica** — Bergantino
   - slug: `sold-out-locazione-turistica-bergantino`
   - indirizzo: Via Cantarane, 19, 37060 Gazzo Veronese VR
5. **B&B Casa dell'ancora codice CIN: IT009010B4X85AVHXI** — Bergeggi
   - slug: `b-b-casa-dell-ancora-codice-cin-it009010b4x85avh-bergeggi`
   - indirizzo: Via XXV Aprile, 29, 17042 Bergeggi SV
6. **Best Western Hotel Acqua Novella** — Bergeggi
   - slug: `best-western-hotel-acqua-novella-bergeggi`
   - indirizzo: Via Acqua Novella, 1, 17028 Spotorno SV
7. **Casale Coreallo** — Bergeggi
   - slug: `casale-coreallo-bergeggi`
   - indirizzo: Via Coreallo, 26, 17028 Spotorno SV
8. **Dominio Mare Resort** — Bergeggi
   - slug: `dominio-mare-resort-bergeggi`
   - indirizzo: Via XXV Aprile, 64, 17042 Bergeggi SV
9. **Guest house Berzefi** — Bergeggi
   - slug: `guest-house-berzefi-bergeggi`
   - indirizzo: Via Torre d'Ere, 40/1e, 17042 Bergeggi SV
10. **Hotel Costa Azzurra - Free Parking - Easy Stay** — Bergeggi
   - slug: `hotel-costa-azzurra-free-parking-easy-stay-bergeggi`
   - indirizzo: Via Lombardia, 2, 17028 Spotorno SV
11. **Hotel Italia** — Bergeggi
   - slug: `hotel-italia-bergeggi`
   - indirizzo: Corso Italia, 23, 17026 Noli SV
12. **Hotel Melograno** — Bergeggi
   - slug: `hotel-melograno-bergeggi`
   - indirizzo: Via G. Garibaldi, 21, 17028 Spotorno SV
13. **Hotel Ristorante Casa Vacanze Claudio** — Bergeggi
   - slug: `hotel-ristorante-casa-vacanze-claudio-bergeggi`
   - indirizzo: Via XXV Aprile, 37, 17028 Bergeggi SV
14. **Hotel Villa Rina** — Bergeggi
   - slug: `hotel-villa-rina-bergeggi`
   - indirizzo: Via T. Berninzoni, 38, 17028 Spotorno SV
15. **Miramare** — Bergeggi
   - slug: `miramare-bergeggi`
   - indirizzo: Corso Italia, 2, 17026 Noli SV
16. **OroVerde** — Bergeggi
   - slug: `oroverde-bergeggi`
   - indirizzo: Str. Com. Alla Gola di S. Elena, 11, 17042 Bergeggi SV
17. **Residence Borgo San Sebastiano** — Bergeggi
   - slug: `residence-borgo-san-sebastiano-bergeggi`
   - indirizzo: Via XXV Aprile, 37, 17042 Bergeggi SV
18. **Riviera Hotel** — Bergeggi
   - slug: `riviera-hotel-bergeggi`
   - indirizzo: Via T. Berninzoni, 24, 17028 Spotorno SV
19. **Sea Art Hotel** — Bergeggi
   - slug: `sea-art-hotel-bergeggi`
   - indirizzo: SS1, Via Aurelia, 454, 17047 Vado Ligure SV
20. **Villa Bice** — Bergeggi
   - slug: `villa-bice-bergeggi`
   - indirizzo: Via Ademaro de Mari, 7, 17042 Bergeggi SV
21. **B&B Blue Dragonfly** — Bergolo
   - slug: `b-b-blue-dragonfly-bergolo`
   - indirizzo: Frazione Ghisola, 44, 12034 Paesana CN
22. **B&B Casa Lilla** — Bergolo
   - slug: `b-b-casa-lilla-bergolo`
   - indirizzo: Via Falicetto, 56, 12039 Verzuolo CN
23. **B&B Villa Cardellini - Dimora storica , Struttura di Charme, Oasi di Relax, Vicino alle Langhe** — Bergolo
   - slug: `b-b-villa-cardellini-dimora-storica-struttura-di-bergolo`
   - indirizzo: Via della Morina, 16, 12038 Savigliano CN
24. **Bed & Breakfast Cascina la Barona** — Bergolo
   - slug: `bed-breakfast-cascina-la-barona-bergolo`
   - indirizzo: Strada Provinciale Villafalletto, 12038 Savigliano CN
25. **Cà Nostra B&B Home Restaurant** — Bergolo
   - slug: `ca-nostra-b-b-home-restaurant-bergolo`
   - indirizzo: Loc. Valleversa Bricco Colombera 61b, 14100 Asti AT
26. **Adina Berlin Mitte** — Berlin
   - slug: `adina-berlin-mitte-berlin`
   - indirizzo: Platz vor dem Neuen Tor 6, 10115 Berlin
27. **ARCOTEL John F Berlin** — Berlin
   - slug: `arcotel-john-f-berlin-berlin`
   - indirizzo: Werderscher Markt 11, 10117 Berlin
28. **ARCOTEL Velvet Berlin** — Berlin
   - slug: `arcotel-velvet-berlin-berlin`
   - indirizzo: Oranienburger Str. 52, 10117 Berlin
29. **art'otel Berlin Mitte, Powered by Radisson Hotels** — Berlin
   - slug: `art-otel-berlin-mitte-powered-by-radisson-hotels-berlin`
   - indirizzo: Wallstraße 70-73, 10179 Berlin
30. **Casa Camper Berlin** — Berlin
   - slug: `casa-camper-berlin-berlin`
   - indirizzo: Weinmeisterstraße 1, 10178 Berlin
31. **Classik Hotel Alexander Plaza, Berlin-Mitte** — Berlin
   - slug: `classik-hotel-alexander-plaza-berlin-mitte-berlin`
   - indirizzo: Rosenstraße 1, 10178 Berlin
32. **Garner Hotel Berlin - Mitte by IHG** — Berlin
   - slug: `garner-hotel-berlin-mitte-by-ihg-berlin`
   - indirizzo: Zimmerstraße 88, 10117 Berlin
33. **Gat Point Charlie Hotel** — Berlin
   - slug: `gat-point-charlie-hotel-berlin`
   - indirizzo: Mauerstraße 81-82, 10117 Berlin
34. **HONIGMOND - Boutique Hotel & Boardinghouse** — Berlin
   - slug: `honigmond-boutique-hotel-boardinghouse-berlin`
   - indirizzo: Tieckstraße 11, 10115 Berlin
35. **Hotel Neuer Fritz Berlin** — Berlin
   - slug: `hotel-neuer-fritz-berlin-berlin`
   - indirizzo: Friedrichstraße 105, 10117 Berlin