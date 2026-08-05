# Blocco 93/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Pupigliano** — Alviano
   - slug: `agriturismo-pupigliano-alviano`
   - indirizzo: Vocabolo Pupigliano, 3, 05020 Alviano TR
2. **B&B Fontanelle** — Alviano
   - slug: `b-b-fontanelle-alviano`
   - indirizzo: Vocabolo Fontanelle, 7, 05020 Alviano TR
3. **Hotel Alviano** — Alviano
   - slug: `hotel-alviano-alviano`
   - indirizzo: Str. della Stazione, 7, 05020 Alviano TR
4. **A' Vadera** — Alvignano
   - slug: `a-vadera-alvignano`
   - indirizzo: Via castello, 24, 81010 Ruviano CE
5. **Agriturismo Genovesi** — Alvignano
   - slug: `agriturismo-genovesi-alvignano`
   - indirizzo: Via Genovesi, 12, 81012 Alvignano CE
6. **Agriturismo San Marco** — Alvignano
   - slug: `agriturismo-san-marco-alvignano`
   - indirizzo: Località, Via S. Ferdinando, 81010 Dragoni CE
7. **Atomos** — Alvignano
   - slug: `atomos-alvignano`
   - indirizzo: Via moleta, 2, 81012 Alvignano CE
8. **B&B LA CASA DEI FIORI** — Alvignano
   - slug: `b-b-la-casa-dei-fiori-alvignano`
   - indirizzo: Via Telese, 166, 82031 Amorosi BN
9. **De Matteo B&B** — Alvignano
   - slug: `de-matteo-b-b-alvignano`
   - indirizzo: Vicolo S. Giovanni Battista, 81013 Caiazzo CE
10. **La Dimora di Euterpe** — Alvignano
   - slug: `la-dimora-di-euterpe-alvignano`
   - indirizzo: Via Orientale, 22, 81010 Ruviano CE
11. **Mulino Bencivenga** — Alvignano
   - slug: `mulino-bencivenga-alvignano`
   - indirizzo: Via S. Giacomo, 1, 81012 Alvignano CE
12. **Petrus Rooms** — Alvignano
   - slug: `petrus-rooms-alvignano`
   - indirizzo: Via Ponte, 32, 81013 Caiazzo CE
13. **Villa Falcone B&B** — Alvignano
   - slug: `villa-falcone-b-b-alvignano`
   - indirizzo: Via Faraoni, 99, 81012 Alvignano CE
14. **Villa Ortensia D'Avalos** — Alvignano
   - slug: `villa-ortensia-d-avalos-alvignano`
   - indirizzo: Via Antonio Genovesi, 2, 81012 Alvignano CE
15. **“A casa di” bed and breakfast** — Alvito
   - slug: `a-casa-di-bed-and-breakfast-alvito`
   - indirizzo: Piazza Umberto I, 1, 03041 Alvito FR
16. **Accogliente Dimora nel Centro Storico di Alvito Dinamica Real Estate** — Alvito
   - slug: `accogliente-dimora-nel-centro-storico-di-alvito-alvito`
   - indirizzo: Via Ospedale, 34, 03041 Alvito FR
17. **Agriturismo La Fattoria** — Alvito
   - slug: `agriturismo-la-fattoria-alvito`
   - indirizzo: Via Macerino, 03046 San Donato Val di Comino FR
18. **Al Romito** — Alvito
   - slug: `al-romito-alvito`
   - indirizzo: Via Madonna delle Fosse, 1, 03030 Santopadre FR
19. **B&B - La Finestra sul Lago - Bed and Breakfast** — Alvito
   - slug: `b-b-la-finestra-sul-lago-bed-and-breakfast-alvito`
   - indirizzo: Via Carpello, 20, 03030 Posta Fibreno FR
20. **B&B Al Colle** — Alvito
   - slug: `b-b-al-colle-alvito`
   - indirizzo: Via Colle, 48, 03030 Pescosolido FR
21. **B&B Casal Cominium** — Alvito
   - slug: `b-b-casal-cominium-alvito`
   - indirizzo: Via S. Andrea, 22/A, 03046 San Donato Val di Comino FR
22. **B&B Castrum** — Alvito
   - slug: `b-b-castrum-alvito`
   - indirizzo: Piazza Guglielmo Marconi, 03030 Santopadre FR
23. **B&B Il Caùto** — Alvito
   - slug: `b-b-il-cauto-alvito`
   - indirizzo: Via Caio Mario, 43, 03033 Arpino FR
24. **Fons Clara Domus et Eventi** — Alvito
   - slug: `fons-clara-domus-et-eventi-alvito`
   - indirizzo: Via Colle Laturo, s.n.c, 03030 Fontechiari FR
25. **Il casale della regina** — Alvito
   - slug: `il-casale-della-regina-alvito`
   - indirizzo: Via Abate I. Rea, 03033 Arpino FR
26. **Il Tiglio** — Alvito
   - slug: `il-tiglio-alvito`
   - indirizzo: Via S. Nicola, 03041 Alvito FR
27. **Italy Farm Stay** — Alvito
   - slug: `italy-farm-stay-alvito`
   - indirizzo: VIA Colledardo, 8, 03030 Pescosolido FR
28. **Relais Colle Buono** — Alvito
   - slug: `relais-colle-buono-alvito`
   - indirizzo: Via Colle Buono, 2, 03041 Serre di Conca FR
29. **Relais Valle dell'Aquila** — Alvito
   - slug: `relais-valle-dell-aquila-alvito`
   - indirizzo: Loc. Massarella, 2, 03040 Settefrati FR
30. **Rifugio Orsa Maggiore** — Alvito
   - slug: `rifugio-orsa-maggiore-alvito`
   - indirizzo: SR666, 03030 Campoli Appennino FR
31. **Tenuta Del Daino** — Alvito
   - slug: `tenuta-del-daino-alvito`
   - indirizzo: Via Fontanelle, 6, 03041 Alvito FR
32. **The Wishing Well** — Alvito
   - slug: `the-wishing-well-alvito`
   - indirizzo: Via Piana, 03040 Gallinaro FR
33. **Viale dei Ciliegi** — Alvito
   - slug: `viale-dei-ciliegi-alvito`
   - indirizzo: Via S. Rocco Contrada Maiale, snc, 03041 Alvito FR
34. **VICTORIA Affitti Brevi** — Alvito
   - slug: `victoria-affitti-brevi-alvito`
   - indirizzo: Via Maggiore Galliano, 30, 03040 Gallinaro FR
35. **Agriturismo La soglia del parco** — Alzano Lombardo
   - slug: `agriturismo-la-soglia-del-parco-alzano-lombardo`
   - indirizzo: Via Zanino Colle, 17, 24020 Ranica BG