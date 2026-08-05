# Blocco 144/500 — 35 strutture senza descrizione IT

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

1. **Exclusive Passion** — Arese
   - slug: `exclusive-passion-arese`
   - indirizzo: Via Magenta, 85, 20017 Rho MI
2. **Expo Residence Rho** — Arese
   - slug: `expo-residence-rho-arese`
   - indirizzo: Via Pace, 23, 20017 Rho MI
3. **Fish Art Restaurant** — Arese
   - slug: `fish-art-restaurant-arese`
   - indirizzo: Via Milano, 40, 20021 Bollate MI
4. **Golf Hotel Resort** — Arese
   - slug: `golf-hotel-resort-arese`
   - indirizzo: Via Alessandro Manzoni, 45, 20045 Lainate MI
5. **Holiday Rooms Rho** — Arese
   - slug: `holiday-rooms-rho-arese`
   - indirizzo: Via Monfalcone, 5, 20017 Rho MI
6. **Hotel La Torretta** — Arese
   - slug: `hotel-la-torretta-arese`
   - indirizzo: Via Trento, 111, 20021 Bollate MI
7. **Hotel Litta Palace** — Arese
   - slug: `hotel-litta-palace-arese`
   - indirizzo: Via Lepetit, 1, 20045 Lainate MI
8. **Hotel Ristorante Pizzeria Al Mulino** — Arese
   - slug: `hotel-ristorante-pizzeria-al-mulino-arese`
   - indirizzo: Via Repubblica, 75, 20021 Bollate MI
9. **Infinity Passion** — Arese
   - slug: `infinity-passion-arese`
   - indirizzo: Via Magenta, 85 a, 20017 Rho MI
10. **Italiana Hotels Milano Rho Fiera** — Arese
   - slug: `italiana-hotels-milano-rho-fiera-arese`
   - indirizzo: Via Alessandro Volta, 54, 20017 Rho MI
11. **Moon Palace** — Arese
   - slug: `moon-palace-arese`
   - indirizzo: Giada • Centro Commerciale, Viale dei Platani, 16, 20040 Arese MI
12. **OnlyRoomsRho** — Arese
   - slug: `onlyroomsrho-arese`
   - indirizzo: Via Bruno Buozzi, 31, 20017 Rho MI
13. **Placido's B&B** — Arese
   - slug: `placido-s-b-b-arese`
   - indirizzo: Via Confalonieri, 18, 20017 Rho MI
14. **A Point Arezzo Park Hotel** — Arezzo
   - slug: `a-point-arezzo-park-hotel-arezzo`
   - indirizzo: Località Battifolle, 36T, 52100 Arezzo AR
15. **Aretium - B&B** — Arezzo
   - slug: `aretium-b-b-arezzo`
   - indirizzo: Via Benedetto Varchi, 4, 52100 Arezzo AR
16. **B&B Arezzo Allegra Toscana - bed&breakfast Apartments & Short lets** — Arezzo
   - slug: `b-b-arezzo-allegra-toscana-bed-breakfast-apartme-arezzo`
   - indirizzo: Corso Italia, 108, 52100 Arezzo AR
17. **B&B HOTEL Arezzo** — Arezzo
   - slug: `b-b-hotel-arezzo-arezzo`
   - indirizzo: Via Einstein, 4, 52100 Arezzo AR
18. **Bibi Boutique Arezzo** — Arezzo
   - slug: `bibi-boutique-arezzo-arezzo`
   - indirizzo: Via Fontanella, 9, 52100 Arezzo AR
19. **BioBenessere B&B** — Arezzo
   - slug: `biobenessere-b-b-arezzo`
   - indirizzo: Via Nazario Sauro, n.18, 52100 Arezzo AR
20. **Casa Volpi** — Arezzo
   - slug: `casa-volpi-arezzo`
   - indirizzo: Via Simone Martini, 29, 52100 Arezzo AR
21. **Etrusco Arezzo Hotel, Sure Hotel Collection by Best Western** — Arezzo
   - slug: `etrusco-arezzo-hotel-sure-hotel-collection-by-be-arezzo`
   - indirizzo: Via Alessandro Fleming, 39, 52100 Arezzo AR
22. **Garden Hotel** — Arezzo
   - slug: `garden-hotel-arezzo`
   - indirizzo: Loc, SS679, 36/b, 52100 Arezzo AR
23. **Graziella Patio Hotel** — Arezzo
   - slug: `graziella-patio-hotel-arezzo`
   - indirizzo: Via Cavour, 23, 52100 Arezzo AR
24. **Hotel Cecco** — Arezzo
   - slug: `hotel-cecco-arezzo`
   - indirizzo: Corso Italia, 215, 52100 Arezzo AR
25. **Hotel Continentale** — Arezzo
   - slug: `hotel-continentale-arezzo`
   - indirizzo: Piazza Guido Monaco, 7, 52100 Arezzo AR
26. **Hotel Il Gentiluomo** — Arezzo
   - slug: `hotel-il-gentiluomo-arezzo`
   - indirizzo: Via Raccordo Autostradale, Accesso dal distributore Beyfin, Località S. Giuliano, 1/A, 52100 Arezzo AR
27. **Hotel l'Aretino** — Arezzo
   - slug: `hotel-l-aretino-arezzo`
   - indirizzo: Via della Madonna del Prato, 83, 52100 Arezzo AR
28. **Hotel Planet International** — Arezzo
   - slug: `hotel-planet-international-arezzo`
   - indirizzo: Località Rigutino Est, 161/162, 52100 Arezzo AR
29. **I Portici Hotel - - residenza D'epoca-Arezzo** — Arezzo
   - slug: `i-portici-hotel-residenza-d-epoca-arezzo-arezzo`
   - indirizzo: Via Roma, 18, 52100 Arezzo AR
30. **Minerva Hotel Arezzo** — Arezzo
   - slug: `minerva-hotel-arezzo-arezzo`
   - indirizzo: Via Fiorentina, 4, 52100 Arezzo AR
31. **Terra d'Arezzo** — Arezzo
   - slug: `terra-d-arezzo-arezzo`
   - indirizzo: Piazza di Murello, 4, 52100 Arezzo AR
32. **THE HOMESTAY - Arezzo** — Arezzo
   - slug: `the-homestay-arezzo-arezzo`
   - indirizzo: Via Marco Perennio, 23/c, 52100 Arezzo AR
33. **B&B Cherry en Rose** — Argegno
   - slug: `b-b-cherry-en-rose-argegno`
   - indirizzo: Località Cendraro Monte, 89, 22025 Lezzeno CO
34. **B&B Garzola** — Argegno
   - slug: `b-b-garzola-argegno`
   - indirizzo: V. Pasquale Castelli, 24, 22010 Ossuccio CO
35. **B&B Il Nido dello Svasso** — Argegno
   - slug: `b-b-il-nido-dello-svasso-argegno`
   - indirizzo: Via Vittorio Emanuele, 41A, 22010 Sorico CO