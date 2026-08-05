# Blocco 238/500 — 35 strutture senza descrizione IT

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

1. **B&B Cascina Nuova** — Battifollo
   - slug: `b-b-cascina-nuova-battifollo`
   - indirizzo: Via provinciale Ceva, 38, 12070 Mombasiglio CN
2. **CA' LUNA GUEST HOUSE** — Battifollo
   - slug: `ca-luna-guest-house-battifollo`
   - indirizzo: Str. Robé Giusta, 5a, 12084 Mondovì CN
3. **Villa Valentina B&B** — Battifollo
   - slug: `villa-valentina-b-b-battifollo`
   - indirizzo: Via delle Cappelle, 32, 12080 Vicoforte CN
4. **Albergo Riviera Spineta** — Battipaglia
   - slug: `albergo-riviera-spineta-battipaglia`
   - indirizzo: Via Spineta, 84091 Battipaglia SA
5. **B&B a Casa Vostra** — Battipaglia
   - slug: `b-b-a-casa-vostra-battipaglia`
   - indirizzo: Piazza Farina, 12/scala b, 2 piano, interno 5, 84091 Battipaglia SA
6. **B&B Da Nonno Mario** — Battipaglia
   - slug: `b-b-da-nonno-mario-battipaglia`
   - indirizzo: Via Giuseppe Mazzini, 110H, 84091 Battipaglia SA
7. **B&B dal Gallo** — Battipaglia
   - slug: `b-b-dal-gallo-battipaglia`
   - indirizzo: Strada Statale N. 19, 84091 Battipaglia SA civico 45, 84091 Battipaglia SA
8. **B&B Mazzini** — Battipaglia
   - slug: `b-b-mazzini-battipaglia`
   - indirizzo: Via Giuseppe Mazzini, 116, 84091 Battipaglia SA
9. **Blu Hotel** — Battipaglia
   - slug: `blu-hotel-battipaglia`
   - indirizzo: Via Lago Trasimeno, 30, 84098 Pontecagnano Faiano SA
10. **Hotel Commercio** — Battipaglia
   - slug: `hotel-commercio-battipaglia`
   - indirizzo: Via Variante, SS 18 Tirrena Inferiore, 54, 84091 Battipaglia SA
11. **Hotel Happy** — Battipaglia
   - slug: `hotel-happy-battipaglia`
   - indirizzo: Via Istituto Orientale, 31, 84091 Battipaglia SA
12. **Hotel Palace** — Battipaglia
   - slug: `hotel-palace-battipaglia`
   - indirizzo: Via Napoli, 29, 84091 Battipaglia SA
13. **Hotel Rosy Lido Lago Salerno** — Battipaglia
   - slug: `hotel-rosy-lido-lago-salerno-battipaglia`
   - indirizzo: Via Lido Lago, 5, 84091 Battipaglia SA
14. **Hotel San Luca** — Battipaglia
   - slug: `hotel-san-luca-battipaglia`
   - indirizzo: SS 18 Tirrena Inferiore, 18, 84091 Battipaglia SA
15. **Le comprese - B&B experience** — Battipaglia
   - slug: `le-comprese-b-b-experience-battipaglia`
   - indirizzo: Via Vincenzo Bellini, 4, 84091 Battipaglia SA
16. **Shamika Luxury Rooms** — Battipaglia
   - slug: `shamika-luxury-rooms-battipaglia`
   - indirizzo: Via Giosuè Carducci, 49, 84090 Pagliarone SA
17. **Suite123** — Battipaglia
   - slug: `suite123-battipaglia`
   - indirizzo: Via Giuseppe Mazzini, 116, 84091 Battipaglia SA
18. **Agri Village Pavia** — Battuda
   - slug: `agri-village-pavia-battuda`
   - indirizzo: Certosa di Pavia PV IT, Via S. Brizio, 15, 27012 Samperone PV
19. **Albergo della Corona** — Battuda
   - slug: `albergo-della-corona-battuda`
   - indirizzo: Via G. Matteotti, 20, 20082 Binasco MI
20. **B&B " La Casetta "** — Battuda
   - slug: `b-b-la-casetta-battuda`
   - indirizzo: Via Molino Nuovo, 6, 20080 Moncucco MI
21. **B&B Barbettini** — Battuda
   - slug: `b-b-barbettini-battuda`
   - indirizzo: Via della Roveda, 30, 27021 Bereguardo PV
22. **B&B La Casa di Miele** — Battuda
   - slug: `b-b-la-casa-di-miele-battuda`
   - indirizzo: Vicolo Re, 13, 27020 Marcignago PV
23. **Central Casarile - Suite & Rooms** — Battuda
   - slug: `central-casarile-suite-rooms-battuda`
   - indirizzo: Piazza Unita d'Italia, 8, 20059 Casarile MI
24. **Hotel la Goletta** — Battuda
   - slug: `hotel-la-goletta-battuda`
   - indirizzo: Strada Provinciale ex SS 35 dei Giovi, 37, 20082 Binasco MI
25. **Affitta Camere b&b Al Bosco Ficuzza** — Baucina
   - slug: `affitta-camere-b-b-al-bosco-ficuzza-baucina`
   - indirizzo: Via Vittorio Emanuele, 36, 90034 Ficuzza PA
26. **Agriresort Crapa Licca** — Baucina
   - slug: `agriresort-crapa-licca-baucina`
   - indirizzo: SP16, km 15/600, 90020 Ventimiglia di Sicilia PA
27. **Agriturismo Antica Masseria Di Salvo** — Baucina
   - slug: `agriturismo-antica-masseria-di-salvo-baucina`
   - indirizzo: Contrada Tumminia, 90030 Bolognetta PA
28. **Agriturismo Case Varisco Di Bartolomeo Varisco** — Baucina
   - slug: `agriturismo-case-varisco-di-bartolomeo-varisco-baucina`
   - indirizzo: Contrada Travesta 90020, 90020 Ventimiglia di Sicilia PA
29. **B&B A casa dell'artista** — Baucina
   - slug: `b-b-a-casa-dell-artista-baucina`
   - indirizzo: Via Trapani, 19, 90014 Casteldaccia PA
30. **Bed and Breakfast "La casa gialla"** — Baucina
   - slug: `bed-and-breakfast-la-casa-gialla-baucina`
   - indirizzo: Via Piani 14, 10, 90019 Trabia PA
31. **D’Aversa Rooms** — Baucina
   - slug: `d-aversa-rooms-baucina`
   - indirizzo: Via Arciprete Inglima, 90035 Marineo PA
32. **Hotel Tonnara Trabia** — Baucina
   - slug: `hotel-tonnara-trabia-baucina`
   - indirizzo: Largo Tonnara, SS 113 Settentrionale Sicula, 90019 Trabia PA
33. **Oleaster, B&B - Bolognetta** — Baucina
   - slug: `oleaster-b-b-bolognetta-baucina`
   - indirizzo: Via Roma, 145, 90030 Bolognetta PA
34. **B&B da Mari N° iun E6654 Via Arruga Dominigheddu Atza,29 Bauladu OR** — Bauladu
   - slug: `b-b-da-mari-n-iun-e6654-via-arruga-dominigheddu-bauladu`
   - indirizzo: Via Arruga Dominigheddu Atza, 29, 09070 Bauladu OR
35. **B&B Sa Domu de Palla** — Bauladu
   - slug: `b-b-sa-domu-de-palla-bauladu`
   - indirizzo: via Duminigheddu Atza, 17, 09070 Bauladu OR