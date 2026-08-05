# Blocco 178/500 — 35 strutture senza descrizione IT

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

1. **Bella di notte** — Ausonia
   - slug: `bella-di-notte-ausonia`
   - indirizzo: Corso Achille Spatuzzi, 03047 San Giorgio a Liri FR
2. **Come Prima country house** — Ausonia
   - slug: `come-prima-country-house-ausonia`
   - indirizzo: Via Granelle, 2, 03040 Ausonia FR
3. **Emme House Bed&Breakfast** — Ausonia
   - slug: `emme-house-bed-breakfast-ausonia`
   - indirizzo: Piazza Italia, 03045 Monticelli FR
4. **Hotel - Ristorante "Al Piccolo Borgo"** — Ausonia
   - slug: `hotel-ristorante-al-piccolo-borgo-ausonia`
   - indirizzo: Via Minerva, 11, 03040 Castelnuovo Parano FR
5. **Hotel Ausonia** — Ausonia
   - slug: `hotel-ausonia-ausonia`
   - indirizzo: Traversa XV Pineta, 11, 48015 Milano Marittima RA
6. **Hotel Diana** — Ausonia
   - slug: `hotel-diana-ausonia`
   - indirizzo: Via Ausonia, 22, 03043 Cassino FR
7. **Hotel Maria Cristina 2 stelle** — Ausonia
   - slug: `hotel-maria-cristina-2-stelle-ausonia`
   - indirizzo: Via Provinciale, 5, 03045 Esperia FR
8. **Minturnae Hotel** — Ausonia
   - slug: `minturnae-hotel-ausonia`
   - indirizzo: Viale Pietro Fedele, 105, 04026 Marina di Minturno LT
9. **Terrazza incanto** — Ausonia
   - slug: `terrazza-incanto-ausonia`
   - indirizzo: Piazza Risorgimento, 8, 04023 Formia LT
10. **Affittacamere La piazzetta** — Austis
   - slug: `affittacamere-la-piazzetta-austis`
   - indirizzo: Corso V. Emanuele, 64, 08030 Austis NU
11. **Agriturismo Da Valore** — Austis
   - slug: `agriturismo-da-valore-austis`
   - indirizzo: Località Sa Paule, 08030 Austis NU
12. **B&B la collina dei ciliegi.** — Austis
   - slug: `b-b-la-collina-dei-ciliegi-austis`
   - indirizzo: Vico Gonare, 4, 08020 Sarule NU
13. **Hotel ristorante pizzeria Il Platano** — Austis
   - slug: `hotel-ristorante-pizzeria-il-platano-austis`
   - indirizzo: Viale Ghitti, 83, 08020 Ottana NU
14. **Hotel Taloro** — Austis
   - slug: `hotel-taloro-austis`
   - indirizzo: SS 128 Centrale Sarda, 08020 Gavoi NU
15. **KIKINA - Bed and Breakfast** — Austis
   - slug: `kikina-bed-and-breakfast-austis`
   - indirizzo: Via Carlo Alberto, 4, 08030 Austis NU
16. **Albergo Caprile Sas.** — Avegno
   - slug: `albergo-caprile-sas-avegno`
   - indirizzo: Via Giovanni Garaventa, 76, 16030 Uscio GE
17. **ANITA B&B** — Avegno
   - slug: `anita-b-b-avegno`
   - indirizzo: Via Vecchia Crocetta, 20, 16030 Uscio GE
18. **B&B I glicini** — Avegno
   - slug: `b-b-i-glicini-avegno`
   - indirizzo: Via S. Lorenzo, 16, 16030 Avegno GE
19. **B&B Passo Selvatico** — Avegno
   - slug: `b-b-passo-selvatico-avegno`
   - indirizzo: Passo Selvatico, 11, 16030 Avegno GE
20. **B&B Quincas Berro d'Agua** — Avegno
   - slug: `b-b-quincas-berro-d-agua-avegno`
   - indirizzo: Via Belvedere, 16030 Avegno GE
21. **Cà di Toni** — Avegno
   - slug: `ca-di-toni-avegno`
   - indirizzo: Passo Sepozzo Superiore, 5, 16030 Testana GE
22. **Casa Ori** — Avegno
   - slug: `casa-ori-avegno`
   - indirizzo: Via Guglielmo Marconi, 34, 16030 Salto GE
23. **Hotel Cenobio dei Dogi** — Avegno
   - slug: `hotel-cenobio-dei-dogi-avegno`
   - indirizzo: Via Nicolò Cuneo, 34, 16032 Camogli GE
24. **Hotel Elena** — Avegno
   - slug: `hotel-elena-avegno`
   - indirizzo: Corso Garibaldi, 5, 16036 Recco GE
25. **Hotel La Giara** — Avegno
   - slug: `hotel-la-giara-avegno`
   - indirizzo: Via Cavour, 79, 16036 Recco GE
26. **Locanda Bell'Aria** — Avegno
   - slug: `locanda-bell-aria-avegno`
   - indirizzo: Via Colle Caprile, 26, 16030 Uscio GE
27. **Locanda Da Nonno Puin (albergo)** — Avegno
   - slug: `locanda-da-nonno-puin-albergo-avegno`
   - indirizzo: Via Cristoforo Colombo, 47, 16047 Ferrada GE
28. **Lookyhotel** — Avegno
   - slug: `lookyhotel-avegno`
   - indirizzo: 16030 Canepa GE
29. **Manuelina Taste Hotel** — Avegno
   - slug: `manuelina-taste-hotel-avegno`
   - indirizzo: Via Roma, 296, 16036 Recco GE
30. **Soffio di Mare - Camogli** — Avegno
   - slug: `soffio-di-mare-camogli-avegno`
   - indirizzo: Scalinata Martiri delle Foibe, 21/1, 16032 Camogli GE
31. **Stella Marina** — Avegno
   - slug: `stella-marina-avegno`
   - indirizzo: Via Gio Bono Ferrari, 16, 16033 Camogli GE
32. **Trattoria Lagoscuro Albergo** — Avegno
   - slug: `trattoria-lagoscuro-albergo-avegno`
   - indirizzo: Via Antica Romana, 5, 16030 Avegno GE
33. **un posto al sole** — Avegno
   - slug: `un-posto-al-sole-avegno`
   - indirizzo: Via Arbora, 2, 16030 Avegno GE
34. **Villa Carmelina** — Avegno
   - slug: `villa-carmelina-avegno`
   - indirizzo: Via Verzemma, 33, 16036 Recco GE
35. **Albergo Feldhof** — Avelengo/Hafling
   - slug: `albergo-feldhof-avelengo-hafling`
   - indirizzo: Goyenweg, 11, 39017 Scena BZ