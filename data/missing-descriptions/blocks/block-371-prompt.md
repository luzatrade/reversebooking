# Blocco 371/500 — 35 strutture senza descrizione IT

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

1. **Il Rustico** — Caltagirone
   - slug: `il-rustico-caltagirone`
   - indirizzo: Via Francesco Crispi 246, angolo piazza G.Attaguile 12, 95042 Grammichele CT
2. **La camera sul corso** — Caltagirone
   - slug: `la-camera-sul-corso-caltagirone`
   - indirizzo: Via Silvio Pellico, 435, 95042 Grammichele CT
3. **Palazzo Aprile Affittacamere - CIN: IT087011C1DWBV3WZX** — Caltagirone
   - slug: `palazzo-aprile-affittacamere-cin-it087011c1dwbv3-caltagirone`
   - indirizzo: Via Luigi Sturzo, 35, 95041 Caltagirone CT
4. **Palazzo dei Vespri** — Caltagirone
   - slug: `palazzo-dei-vespri-caltagirone`
   - indirizzo: Via Vespri, 30/palazzo n°30, 95041 Caltagirone CT
5. **Palazzo Sant'Elia** — Caltagirone
   - slug: `palazzo-sant-elia-caltagirone`
   - indirizzo: Via S. Pietro, 7, 95041 Caltagirone CT
6. **Valle Verde Di Paolo E Maria Teresa Filia Snc** — Caltagirone
   - slug: `valle-verde-di-paolo-e-maria-teresa-filia-snc-caltagirone`
   - indirizzo: Via Falcone e Borsellino, 32, 95042 Grammichele CT
7. **Vecchia Masseria** — Caltagirone
   - slug: `vecchia-masseria-caltagirone`
   - indirizzo: Cda Cutuminello Km 68, SS117bis, 95041 Caltagirone CT
8. **Villa D'Andrea** — Caltagirone
   - slug: `villa-d-andrea-caltagirone`
   - indirizzo: S.V. n.102 km 0 Corvacchio, Caltagirone CT IT, 900, 95041 Albanazzo CT
9. **Antico Albergo Italia** — Caltanissetta
   - slug: `antico-albergo-italia-caltanissetta`
   - indirizzo: Via Ronchi, 2, 94016 Pietraperzia EN
10. **ART B&B** — Caltanissetta
   - slug: `art-b-b-caltanissetta`
   - indirizzo: Viale della Regione, 45, 93100 Caltanissetta CL
11. **B&B Antico Rione** — Caltanissetta
   - slug: `b-b-antico-rione-caltanissetta`
   - indirizzo: Via XX Settembre, 107, 93100 Caltanissetta CL
12. **B&B Caltanissetta** — Caltanissetta
   - slug: `b-b-caltanissetta-caltanissetta`
   - indirizzo: Via Gravina, 6, 93100 Caltanissetta CL
13. **B&B Caltanissetta Giulia** — Caltanissetta
   - slug: `b-b-caltanissetta-giulia-caltanissetta`
   - indirizzo: Corso Umberto I, 85, 93100 Caltanissetta CL
14. **B&B Piazza Garibaldi** — Caltanissetta
   - slug: `b-b-piazza-garibaldi-caltanissetta`
   - indirizzo: Piazza Giuseppe Garibaldi, 11, 93100 Caltanissetta CL
15. **B&B Thule** — Caltanissetta
   - slug: `b-b-thule-caltanissetta`
   - indirizzo: Piazza Guglielmo Marconi, 9, 93100 Caltanissetta CL
16. **B&B Trieste Caltanissetta** — Caltanissetta
   - slug: `b-b-trieste-caltanissetta-caltanissetta`
   - indirizzo: V.le Trieste, 194, 93100 Caltanissetta CL
17. **B&B Villa da Antonio** — Caltanissetta
   - slug: `b-b-villa-da-antonio-caltanissetta`
   - indirizzo: Via Due Fontane, 102, 93100 Caltanissetta CL
18. **B&B Villa Fiocchi Caltanissetta** — Caltanissetta
   - slug: `b-b-villa-fiocchi-caltanissetta-caltanissetta`
   - indirizzo: Via Senatore Giuseppe Alessi, 112, 93100 Caltanissetta CL
19. **Giovita Room and Suite** — Caltanissetta
   - slug: `giovita-room-and-suite-caltanissetta`
   - indirizzo: Via XX Settembre, 16, 93100 Caltanissetta CL
20. **Hotel 900** — Caltanissetta
   - slug: `hotel-900-caltanissetta`
   - indirizzo: Via Berengario Gaetani, 5, 93100 Caltanissetta CL
21. **Hotel Marconi** — Caltanissetta
   - slug: `hotel-marconi-caltanissetta`
   - indirizzo: Via John Fitzgerald Kennedy, 5, 94016 Pietraperzia EN
22. **Hotel San Michele** — Caltanissetta
   - slug: `hotel-san-michele-caltanissetta`
   - indirizzo: Via Fasci Siciliani, 6, 93100 Caltanissetta CL
23. **Hotel Ventura** — Caltanissetta
   - slug: `hotel-ventura-caltanissetta`
   - indirizzo: SS640, 93100 Caltanissetta CL
24. **Hotel Villa Flora Relais** — Caltanissetta
   - slug: `hotel-villa-flora-relais-caltanissetta`
   - indirizzo: Contrada Bigini, sn, 93100 Caltanissetta CL
25. **Palazzo Cosentino** — Caltanissetta
   - slug: `palazzo-cosentino-caltanissetta`
   - indirizzo: Via Camillo Benso Conte di Cavour, 4, 93100 Caltanissetta CL
26. **Qal’at Apart Hotel** — Caltanissetta
   - slug: `qal-at-apart-hotel-caltanissetta`
   - indirizzo: Via John F. Kennedy, 16, 93100 Caltanissetta CL
27. **A casa del Nonno** — Caltavuturo
   - slug: `a-casa-del-nonno-caltavuturo`
   - indirizzo: Via 4 Novembre, 23/primo piano, 90010 Isnello PA
28. **B&B Caltart** — Caltavuturo
   - slug: `b-b-caltart-caltavuturo`
   - indirizzo: Via N. Machiavelli, 12, 90022 Caltavuturo PA
29. **B&B Panorama** — Caltavuturo
   - slug: `b-b-panorama-caltavuturo`
   - indirizzo: Via Isnello, 34, 90013 Castelbuono PA
30. **Casa della Nonna** — Caltavuturo
   - slug: `casa-della-nonna-caltavuturo`
   - indirizzo: Via Stesicoro, 11, 90022 Caltavuturo PA
31. **Olinad rooms** — Caltavuturo
   - slug: `olinad-rooms-caltavuturo`
   - indirizzo: Via G. Guzzio, 36, 90013 Castelbuono PA
32. **Paradiso delle Madonie Hotel** — Caltavuturo
   - slug: `paradiso-delle-madonie-hotel-caltavuturo`
   - indirizzo: V. Dante Alighieri, 82, 90013 Castelbuono PA
33. **VeraLuce Affittacamere** — Caltavuturo
   - slug: `veraluce-affittacamere-caltavuturo`
   - indirizzo: Via Vittorio Emanuele, 25, 90022 Caltavuturo PA
34. **VILLAROSE** — Caltavuturo
   - slug: `villarose-caltavuturo`
   - indirizzo: CONTRADA CONIGLIERA SNC, 90013 Castelbuono PA
35. **Agriturismo Cascina Moretta** — Caltignaga
   - slug: `agriturismo-cascina-moretta-caltignaga`
   - indirizzo: Via Cascina Moretta, 1 Alzate di, 28015 Momo NO