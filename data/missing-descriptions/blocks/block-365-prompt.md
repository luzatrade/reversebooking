# Blocco 365/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Wellness IL TEMPO DELLE MELE** — Caldes
   - slug: `agriturismo-wellness-il-tempo-delle-mele-caldes`
   - indirizzo: Strada Provinciale, 65, 38022 Caldes TN
2. **Albergo Alla Rocca** — Caldes
   - slug: `albergo-alla-rocca-caldes`
   - indirizzo: V. del Tonale, 22, 38022 Caldes TN
3. **Albergo Tuenno** — Caldes
   - slug: `albergo-tuenno-caldes`
   - indirizzo: Piazza Alpini, 25, 38019 Ville d'Anaunia TN
4. **Alle Meridiane** — Caldes
   - slug: `alle-meridiane-caldes`
   - indirizzo: Via alla Cros, 1, 38025 Dimaro Folgarida TN
5. **B&B Il Sorriso dei Nonni** — Caldes
   - slug: `b-b-il-sorriso-dei-nonni-caldes`
   - indirizzo: Frazione Pracorno, 136, 38020 Rabbi TN
6. **B&B Soreghina Malè** — Caldes
   - slug: `b-b-soreghina-male-caldes`
   - indirizzo: Via Molini, 13, 38027 Malé TN
7. **Casa Fellin 1891 B&B** — Caldes
   - slug: `casa-fellin-1891-b-b-caldes`
   - indirizzo: Via Enrico Bergamo, 12, 38023 Cles TN
8. **Chalet ai mulini** — Caldes
   - slug: `chalet-ai-mulini-caldes`
   - indirizzo: STRADA PER LE GLARE, Località Glare, 38022 Caldes TN
9. **Hotel Diffuso - Garnì della Locanda Elisa** — Caldes
   - slug: `hotel-diffuso-garni-della-locanda-elisa-caldes`
   - indirizzo: Piazza Centrale, 11, 38025 Dimaro Folgarida TN
10. **Hotel Garni Meledrio** — Caldes
   - slug: `hotel-garni-meledrio-caldes`
   - indirizzo: Via Campiglio, 24, 38025 Dimaro Folgarida TN
11. **Hotel Garni' Maria** — Caldes
   - slug: `hotel-garni-maria-caldes`
   - indirizzo: V. Nazionale, 582/b Loc, 38025 Monclassico TN
12. **Hotel Henriette** — Caldes
   - slug: `hotel-henriette-caldes`
   - indirizzo: Via Trento, 36, 38027 Malé TN
13. **Hotel Sole** — Caldes
   - slug: `hotel-sole-caldes`
   - indirizzo: Via Guglielmo Marconi, 3, 38027 Malé TN
14. **Kaiserkrone Chalet & Spa** — Caldes
   - slug: `kaiserkrone-chalet-spa-caldes`
   - indirizzo: Piazza Giovanni Serra, 3, 38025 Dimaro TN
15. **Lastè Nature Mountain Hotel** — Caldes
   - slug: `laste-nature-mountain-hotel-caldes`
   - indirizzo: Località Molini, 11, 38022 Caldes TN
16. **Le Rocce Val di Non** — Caldes
   - slug: `le-rocce-val-di-non-caldes`
   - indirizzo: Vicolo de le Giarberie, accesso da, Via Lanza, 8, 38019 Ville d'Anaunia TN
17. **Park Hotel Bellevue** — Caldes
   - slug: `park-hotel-bellevue-caldes`
   - indirizzo: Via Campo Carlo Magno, 3, 38025 Dimaro TN
18. **Sporthotel Rosatti** — Caldes
   - slug: `sporthotel-rosatti-caldes`
   - indirizzo: Via Campiglio, 14, 38025 Dimaro TN
19. **Albergo Ristorante Grobberio** — Caldiero
   - slug: `albergo-ristorante-grobberio-caldiero`
   - indirizzo: Via Mezzavilla, 69, 37036 Marcellise VR
20. **B&B Acquagrossa** — Caldiero
   - slug: `b-b-acquagrossa-caldiero`
   - indirizzo: Via Acquagrossa, 6a, 37036 San Martino Buon Albergo VR
21. **Best Western Hotel Turismo** — Caldiero
   - slug: `best-western-hotel-turismo-caldiero`
   - indirizzo: Via Nazionale, 58, 37036 San Martino Buon Albergo VR
22. **Brixius - CIN:IT023042C1YJLOAXV4** — Caldiero
   - slug: `brixius-cin-it023042c1yjloaxv4-caldiero`
   - indirizzo: Via Alta, 5, 37030 San Briccio VR
23. **DAMARANTO RISTORANTE CON CAMERE** — Caldiero
   - slug: `damaranto-ristorante-con-camere-caldiero`
   - indirizzo: Corso Vittorio Emanuele II, 50, 37038 Soave VR
24. **Via Verdi B&B** — Caldiero
   - slug: `via-verdi-b-b-caldiero`
   - indirizzo: Via Giuseppe Verdi, 3, 37030 Vago VR
25. **Villa Turco Berti Luxury Apartments & SPA** — Caldiero
   - slug: `villa-turco-berti-luxury-apartments-spa-caldiero`
   - indirizzo: Piazza Giacomo Matteotti, 23, 37042 Caldiero VR
26. **Agriturismo alla Corte** — Caldogno
   - slug: `agriturismo-alla-corte-caldogno`
   - indirizzo: Strada Statale Pasubio, 109, 36030 Costabissara VI
27. **Agriturismo Il Grande Portico** — Caldogno
   - slug: `agriturismo-il-grande-portico-caldogno`
   - indirizzo: Via S. Cristoforo, 44, 36030 Costabissara VI
28. **Agriturismo Maddalene 101** — Caldogno
   - slug: `agriturismo-maddalene-101-caldogno`
   - indirizzo: Str. Maddalene, 101, 36100 Vicenza VI
29. **Bed & Breakfast Alla Pergola** — Caldogno
   - slug: `bed-breakfast-alla-pergola-caldogno`
   - indirizzo: Vicolo Don Antonio Menin, 21, 36030 Caldogno VI
30. **CityHotel Cristina Vicenza** — Caldogno
   - slug: `cityhotel-cristina-vicenza-caldogno`
   - indirizzo: Corso SS. Felice e Fortunato, 32, 36100 Vicenza VI
31. **Hotel Doge** — Caldogno
   - slug: `hotel-doge-caldogno`
   - indirizzo: Via A. Lamarmora, 20, 36100 Vicenza VI
32. **Hotel Villa** — Caldogno
   - slug: `hotel-villa-caldogno`
   - indirizzo: V.Roma, 1, 36030 Villaverla VI
33. **Trattoria Lovise** — Caldogno
   - slug: `trattoria-lovise-caldogno`
   - indirizzo: Via G. Marconi, 17, 36030 Costabissara VI
34. **Vicenza Tiepolo Hotel** — Caldogno
   - slug: `vicenza-tiepolo-hotel-caldogno`
   - indirizzo: Viale S. Lazzaro, 110, 36100 Vicenza VI
35. **Villa Solatia** — Caldogno
   - slug: `villa-solatia-caldogno`
   - indirizzo: Via Stadio, 16, 36030 Rettorgole VI