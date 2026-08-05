# Blocco 310/500 — 35 strutture senza descrizione IT

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

1. **Albergo d'Italia** — Bosconero
   - slug: `albergo-d-italia-bosconero`
   - indirizzo: Piazza Garibaldi, 7, 10034 Chivasso TO
2. **B&B Al Castello** — Bosconero
   - slug: `b-b-al-castello-bosconero`
   - indirizzo: Via del Castello, 3, 10090 Foglizzo TO
3. **B&B La Gerbolina** — Bosconero
   - slug: `b-b-la-gerbolina-bosconero`
   - indirizzo: Via Bertot, 10, 10090 San Giusto Canavese TO
4. **BLACKWOODHOME** — Bosconero
   - slug: `blackwoodhome-bosconero`
   - indirizzo: Via Dante Alighieri, 29, 10080 Bosconero TO
5. **Hotel Europa** — Bosconero
   - slug: `hotel-europa-bosconero`
   - indirizzo: Via Lungo Piazza D'Armi, 5, 10034 Chivasso TO
6. **Là Drint Bed & Breakfast** — Bosconero
   - slug: `la-drint-bed-breakfast-bosconero`
   - indirizzo: Via Perinzia, 13, 10080 San Benigno Canavese TO
7. **Lady Hamilton** — Bosconero
   - slug: `lady-hamilton-bosconero`
   - indirizzo: Via Gianni Micheletto, 82 bis, 10080 Feletto TO
8. **B&B Casamì** — Boscoreale
   - slug: `b-b-casami-boscoreale`
   - indirizzo: Via Armando Diaz, 79, 80041 Boscoreale NA
9. **B&B Laura / Villa Dionisio** — Boscoreale
   - slug: `b-b-laura-villa-dionisio-boscoreale`
   - indirizzo: Strada Provinciale Zabatta, 260, 80040 Terzigno NA
10. **B&B Pompeii Luxury** — Boscoreale
   - slug: `b-b-pompeii-luxury-boscoreale`
   - indirizzo: Viale Unità d'Italia, 3/4 piano, 80045 Pompei NA
11. **Borgo Alto - Bed and Breakfast** — Boscoreale
   - slug: `borgo-alto-bed-and-breakfast-boscoreale`
   - indirizzo: Via Tufano, 2, 80042 Boscotrecase NA
12. **Bosco De' Medici Hotel & Resort** — Boscoreale
   - slug: `bosco-de-medici-hotel-resort-boscoreale`
   - indirizzo: Via Antonio Segni, 43, 80045 Pompei NA
13. **Come a Casa Bed and Breakfast** — Boscoreale
   - slug: `come-a-casa-bed-and-breakfast-boscoreale`
   - indirizzo: Via Panoramica, 36, 80041 Boscoreale NA
14. **hotel bar De Rosa** — Boscoreale
   - slug: `hotel-bar-de-rosa-boscoreale`
   - indirizzo: Via Parrella, 2, 80040 Boscoreale NA
15. **Hotel Imperiale** — Boscoreale
   - slug: `hotel-imperiale-boscoreale`
   - indirizzo: Via Panoramica, 1, 80040 Terzigno NA
16. **hotel Imperiale Real Palace** — Boscoreale
   - slug: `hotel-imperiale-real-palace-boscoreale`
   - indirizzo: Via Nazionale Passanti, 1, 80041 Boscoreale NA
17. **Hotel LA DOLCE SIESTA** — Boscoreale
   - slug: `hotel-la-dolce-siesta-boscoreale`
   - indirizzo: Via Michelangelo Nappi, 74, 84018 Scafati SA
18. **Hotel la Fenice** — Boscoreale
   - slug: `hotel-la-fenice-boscoreale`
   - indirizzo: Via Passanti Flocco, 630, 80041 Boscoreale NA
19. **Hotel Pacha Mama** — Boscoreale
   - slug: `hotel-pacha-mama-boscoreale`
   - indirizzo: Via Panoramica, 26, 80042 Boscotrecase NA
20. **Hotel Sirio** — Boscoreale
   - slug: `hotel-sirio-boscoreale`
   - indirizzo: Via Cifelli, Traversa rendine, 40, 80042 Boscotrecase NA
21. **Palazzo Excelsus** — Boscoreale
   - slug: `palazzo-excelsus-boscoreale`
   - indirizzo: Via Errico Auricchio, 22, 80040 Terzigno NA
22. **Pompei Valley Boutique Hotel** — Boscoreale
   - slug: `pompei-valley-boutique-hotel-boscoreale`
   - indirizzo: Via Fossa di Valle, 29, 80045 Pompei NA
23. **Relais Country House Pompei Apartments** — Boscoreale
   - slug: `relais-country-house-pompei-apartments-boscoreale`
   - indirizzo: Trav, Tv.Andolfi, 15, 80045 Pompei NA
24. **Slopes Suites and Spa** — Boscoreale
   - slug: `slopes-suites-and-spa-boscoreale`
   - indirizzo: Via G. Matteotti, 35, 80042 Boscotrecase NA
25. **Vesuvio Inn Bed & Wine Experience** — Boscoreale
   - slug: `vesuvio-inn-bed-wine-experience-boscoreale`
   - indirizzo: ex complesso Giara, Via Panoramica, 6, 80042 Boscotrecase NA
26. **Villa Porpora** — Boscoreale
   - slug: `villa-porpora-boscoreale`
   - indirizzo: Tv.Andolfi, 25, 80045 Pompei NA
27. **Vitiello Maria's home** — Boscoreale
   - slug: `vitiello-maria-s-home-boscoreale`
   - indirizzo: Via Nolana, 455, 80045 Pompei NA
28. **B&B Villa Teresa - Boscotrecase** — Boscotrecase
   - slug: `b-b-villa-teresa-boscotrecase-boscotrecase`
   - indirizzo: Via Casavitelli, 222, 80042 Boscotrecase NA
29. **Bosco Mattavona b&b** — Boscotrecase
   - slug: `bosco-mattavona-b-b-boscotrecase`
   - indirizzo: Via Cifelli, 2B, 80042 Boscotrecase NA
30. **Hotel Il Castello** — Boscotrecase
   - slug: `hotel-il-castello-boscotrecase`
   - indirizzo: Via Panoramica, 6, 80040 Terzigno NA
31. **Hotel Il Rosone S.r.l.** — Boscotrecase
   - slug: `hotel-il-rosone-s-r-l-boscotrecase`
   - indirizzo: Via delle Colonne, 2, 80040 Trecase NA
32. **Hotel Villa Silvana** — Boscotrecase
   - slug: `hotel-villa-silvana-boscotrecase`
   - indirizzo: Via Nicola de Prisco, 15, 80041 Boscoreale NA
33. **Napul'è B&B** — Boscotrecase
   - slug: `napul-e-b-b-boscotrecase`
   - indirizzo: Via Mortaio, 36, 80042 Boscotrecase NA
34. **Palazzo d'Amaro Historical Residence** — Boscotrecase
   - slug: `palazzo-d-amaro-historical-residence-boscotrecase`
   - indirizzo: Via Carlo Alberto, 74, 80042 Boscotrecase NA
35. **Pangea Luxury Rooms Oplonti** — Boscotrecase
   - slug: `pangea-luxury-rooms-oplonti-boscotrecase`
   - indirizzo: Via Vittorio Veneto, 390, 80058 Torre Annunziata NA