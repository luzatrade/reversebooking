# Blocco 439/500 — 35 strutture senza descrizione IT

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

1. **Hotel Castiglione** — Carlino
   - slug: `hotel-castiglione-carlino`
   - indirizzo: Lungomare Trieste, 126, 33054 Lignano Sabbiadoro UD
2. **Hotel Elvia** — Carlino
   - slug: `hotel-elvia-carlino`
   - indirizzo: Via Miramare, 2, 33054 Lignano Sabbiadoro UD
3. **Hotel Italia Palace** — Carlino
   - slug: `hotel-italia-palace-carlino`
   - indirizzo: Viale Italia, 7, 33054 Lignano Sabbiadoro UD
4. **Hotel Miramare** — Carlino
   - slug: `hotel-miramare-carlino`
   - indirizzo: Via Aquileia, 49, 33054 Lignano Sabbiadoro UD
5. **Hotel Regina** — Carlino
   - slug: `hotel-regina-carlino`
   - indirizzo: Via Lilienfeld, 4, 33054 Lignano Sabbiadoro UD
6. **Hotel Trieste** — Carlino
   - slug: `hotel-trieste-carlino`
   - indirizzo: Via Terza Armata, 40, 33058 San Giorgio di Nogaro UD
7. **Hotel Villa Franca** — Carlino
   - slug: `hotel-villa-franca-carlino`
   - indirizzo: Lungomare Trieste, 118, 33054 Lignano Sabbiadoro UD
8. **JO Hotel Wellness & Spa** — Carlino
   - slug: `jo-hotel-wellness-spa-carlino`
   - indirizzo: Via Udine, 7/9, 33050 Marano Lagunare UD
9. **Pensione Imperia** — Carlino
   - slug: `pensione-imperia-carlino`
   - indirizzo: Viale dei Platani, 80, 33054 Lignano Sabbiadoro UD
10. **AQUAMADRE Suites** — Carloforte
   - slug: `aquamadre-suites-carloforte`
   - indirizzo: Via Armando Diaz, 34, 09014 Carloforte CI
11. **B&B Mencin** — Carloforte
   - slug: `b-b-mencin-carloforte`
   - indirizzo: Via Porta Leone, 24, 09014 Carloforte CI
12. **Domo Cicindela Boutique Rooms Centro Carloforte** — Carloforte
   - slug: `domo-cicindela-boutique-rooms-centro-carloforte-carloforte`
   - indirizzo: Piazza Carlo Emanuele III, 17, 09014 Carloforte CI
13. **Garden Rooms** — Carloforte
   - slug: `garden-rooms-carloforte`
   - indirizzo: Strada Provinciale 102, Km 2/3, 09014 Carloforte CI
14. **Guardia dei Mori** — Carloforte
   - slug: `guardia-dei-mori-carloforte`
   - indirizzo: Localita' Nassetta, 09014 Carloforte CI
15. **Hotel California** — Carloforte
   - slug: `hotel-california-carloforte`
   - indirizzo: Via Giuseppe Cavallera, 15, 09014 Carloforte CI
16. **Hotel Galman** — Carloforte
   - slug: `hotel-galman-carloforte`
   - indirizzo: località Bellavista, 09014 Carloforte CI
17. **Hotel Hieracon** — Carloforte
   - slug: `hotel-hieracon-carloforte`
   - indirizzo: Corso C. Cavour, 62, 09014 Carloforte CI
18. **Hotel Lido degli Spagnoli** — Carloforte
   - slug: `hotel-lido-degli-spagnoli-carloforte`
   - indirizzo: Viale Adriatico, 32, 09010 Portoscuso CI
19. **Hotel Villa Pimpina** — Carloforte
   - slug: `hotel-villa-pimpina-carloforte`
   - indirizzo: Via Genova, 106/108, 09014 Carloforte CI
20. **Le Saline Suites** — Carloforte
   - slug: `le-saline-suites-carloforte`
   - indirizzo: Via Berlinguer, 12, 09014 Carloforte CI
21. **Lu' Hotel Carloforte** — Carloforte
   - slug: `lu-hotel-carloforte-carloforte`
   - indirizzo: Corso Battellieri, 26, 09014 Carloforte CI
22. **Nichotel** — Carloforte
   - slug: `nichotel-carloforte`
   - indirizzo: Via Garibaldi, 7, 09014 Carloforte CI
23. **Panoramic Studio Carloforte** — Carloforte
   - slug: `panoramic-studio-carloforte-carloforte`
   - indirizzo: Via Enrico Berlinguer, 14, 09014 Carloforte CI
24. **Residenza Cuntin Carloforte** — Carloforte
   - slug: `residenza-cuntin-carloforte-carloforte`
   - indirizzo: Via Cesare Battisti, 11, 09014 Carloforte CI
25. **Trilli EcoBnb** — Carloforte
   - slug: `trilli-ecobnb-carloforte`
   - indirizzo: Via Giuseppe Mazzini, 15, 09014 Carloforte CI
26. **Affittacamere Sogni d'Oro** — Carlopoli
   - slug: `affittacamere-sogni-d-oro-carlopoli`
   - indirizzo: Via Cristoforo Colombo, 67, 88046 Lamezia Terme CZ
27. **B e B Pontepiccolo - Villa Giglio Group** — Carlopoli
   - slug: `b-e-b-pontepiccolo-villa-giglio-group-carlopoli`
   - indirizzo: Viale Papa, Viale Pio X, 232, 88100 Catanzaro CZ
28. **B&B I Portici** — Carlopoli
   - slug: `b-b-i-portici-carlopoli`
   - indirizzo: Via Padre Antonio da Olivadi, 5, 88100 Catanzaro CZ
29. **B&B La Casa Dama Guest-House** — Carlopoli
   - slug: `b-b-la-casa-dama-guest-house-carlopoli`
   - indirizzo: Vico S. Giacomo, 88046 Lamezia Terme CZ
30. **B&B Lamezia Terme Centro - CIN IT079160C1S4XXGAYS** — Carlopoli
   - slug: `b-b-lamezia-terme-centro-cin-it079160c1s4xxgays-carlopoli`
   - indirizzo: Via Isonzo, 23, 88046 Lamezia Terme CZ
31. **B&B SAN GIOVANNI - CIN IT079160C1Y3BCOQ6Y** — Carlopoli
   - slug: `b-b-san-giovanni-cin-it079160c1y3bcoq6y-carlopoli`
   - indirizzo: Vico I°, Piazza San Giovanni, 8, 88046 Lamezia Terme CZ
32. **La casa di Anna** — Carlopoli
   - slug: `la-casa-di-anna-carlopoli`
   - indirizzo: Via Damiano Chiesa, 20, 88046 Lamezia Terme CZ
33. **La Gerosa Guest House** — Carlopoli
   - slug: `la-gerosa-guest-house-carlopoli`
   - indirizzo: Via del Progresso, 472, 88046 Lamezia Terme CZ
34. **Villa Maria** — Carlopoli
   - slug: `villa-maria-carlopoli`
   - indirizzo: Via Gioacchino Murat, 108, 88046 Lamezia Terme CZ
35. **Albergo Ristorante SAN MARCO** — Carmagnola
   - slug: `albergo-ristorante-san-marco-carmagnola`
   - indirizzo: Via S. Francesco di Sales, 18, 10022 Carmagnola TO