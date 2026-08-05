# Blocco 424/500 — 35 strutture senza descrizione IT

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

1. **Albergo Diffuso Tra Vicoli e Tramonti** — Capranica Prenestina
   - slug: `albergo-diffuso-tra-vicoli-e-tramonti-capranica-prenestina`
   - indirizzo: Via Vittorio de Sica, 2, 00030 Castel San Pietro Romano RM
2. **B&B Il Bacio e la Nocciola** — Capranica Prenestina
   - slug: `b-b-il-bacio-e-la-nocciola-capranica-prenestina`
   - indirizzo: Ventiquattresima Str. Bis, 47, 00030 Colle Spina RM
3. **Cascina 1956** — Capranica Prenestina
   - slug: `cascina-1956-capranica-prenestina`
   - indirizzo: Via Cori, 6, 00036 Palestrina RM
4. **Il Casale Delle Ginestre** — Capranica Prenestina
   - slug: `il-casale-delle-ginestre-capranica-prenestina`
   - indirizzo: 00030 Castel San Pietro Romano RM, Italia
5. **Lo scoiattolo b&b** — Capranica Prenestina
   - slug: `lo-scoiattolo-b-b-capranica-prenestina`
   - indirizzo: Via Cima, 1/A, 00033 Cave RM
6. **B&B QuattroStelle** — Caprarica di Lecce
   - slug: `b-b-quattrostelle-caprarica-di-lecce`
   - indirizzo: c.da Spezzaferro, snc, 73020 Cavallino LE
7. **La Casetta B&B** — Caprarica di Lecce
   - slug: `la-casetta-b-b-caprarica-di-lecce`
   - indirizzo: Via de Dominicis, 26, 73020 Cavallino LE
8. **La Curte Te Lu Pippi** — Caprarica di Lecce
   - slug: `la-curte-te-lu-pippi-caprarica-di-lecce`
   - indirizzo: Via Capece, 7, 73010 Caprarica di Lecce LE
9. **La Macchia B&B** — Caprarica di Lecce
   - slug: `la-macchia-b-b-caprarica-di-lecce`
   - indirizzo: Via Oronzo Potì, 47, 73026 Melendugno LE
10. **La Suite Negli Orti** — Caprarica di Lecce
   - slug: `la-suite-negli-orti-caprarica-di-lecce`
   - indirizzo: Via Case Sparse Li Mori, 73023 Lizzanello LE
11. **Li Mori Rooms** — Caprarica di Lecce
   - slug: `li-mori-rooms-caprarica-di-lecce`
   - indirizzo: Via Case Sparse Li Mori, snc, 73023 Lizzanello LE
12. **Masseria Stali, The Originals Relais** — Caprarica di Lecce
   - slug: `masseria-stali-the-originals-relais-caprarica-di-lecce`
   - indirizzo: Via vicinale, Via Cisterna Vecchia, 8, 73010 Caprarica di Lecce LE
13. **Monterussi B&B** — Caprarica di Lecce
   - slug: `monterussi-b-b-caprarica-di-lecce`
   - indirizzo: Via Caprarica, 113, 73020 Cavallino LE
14. **MyBed B&B** — Caprarica di Lecce
   - slug: `mybed-b-b-caprarica-di-lecce`
   - indirizzo: Via Francesco Petrarca, 7, 73020 Cavallino LE
15. **Rescio's Rooms B&B** — Caprarica di Lecce
   - slug: `rescio-s-rooms-b-b-caprarica-di-lecce`
   - indirizzo: Via Lizzanello, 97, 73020 Cavallino LE
16. **B&B Buongiorno Caprarola** — Caprarola
   - slug: `b-b-buongiorno-caprarola-caprarola`
   - indirizzo: Via Nicola Borgna e Giacomo Loppi, 5, 01032 Caprarola VT
17. **Il Vicolo bed and breakfast** — Caprarola
   - slug: `il-vicolo-bed-and-breakfast-caprarola`
   - indirizzo: Via S. Egidio, 3, 01032 Caprarola VT
18. **La Bella Venere - Lake Resort** — Caprarola
   - slug: `la-bella-venere-lake-resort-caprarola`
   - indirizzo: Localita' Scardenato, 01032 Caprarola VT
19. **La Valle di Vico | Agriturismo - Bed and Breakfast** — Caprarola
   - slug: `la-valle-di-vico-agriturismo-bed-and-breakfast-caprarola`
   - indirizzo: Strada Comunale Caproceca, 01032 Caprarola VT
20. **RIO VICANO Residence Hotel** — Caprarola
   - slug: `rio-vicano-residence-hotel-caprarola`
   - indirizzo: Via Cassia Cimina, km 19, 100 - civico, 1084, 01037 Ronciglione VT
21. **Rifugio Pian dell'Arma** — Caprauna
   - slug: `rifugio-pian-dell-arma-caprauna`
   - indirizzo: SP216, 12070 Caprauna CN
22. **Agriturismo La Casina** — Caprese Michelangelo
   - slug: `agriturismo-la-casina-caprese-michelangelo`
   - indirizzo: Via Casina Silvani, 171, 52033 Caprese Michelangelo AR
23. **Agriturismo Le Ceregne Bio** — Caprese Michelangelo
   - slug: `agriturismo-le-ceregne-bio-caprese-michelangelo`
   - indirizzo: Località le ceregne, 76, 52036 Pieve Santo Stefano AR
24. **AGRITURISMO PODERE TOVARI** — Caprese Michelangelo
   - slug: `agriturismo-podere-tovari-caprese-michelangelo`
   - indirizzo: Via Motina bassa, 68, 52031 Anghiari AR
25. **Agriturismo Priello** — Caprese Michelangelo
   - slug: `agriturismo-priello-caprese-michelangelo`
   - indirizzo: Localita' Priello, 244, 52033 Caprese Michelangelo AR
26. **Agriturismo Selvadonica** — Caprese Michelangelo
   - slug: `agriturismo-selvadonica-caprese-michelangelo`
   - indirizzo: Selvadonica, 151, 52033 Caprese Michelangelo AR
27. **Borgo Faeta Country Relais** — Caprese Michelangelo
   - slug: `borgo-faeta-country-relais-caprese-michelangelo`
   - indirizzo: Via Strapolino, 109, 52033 Caprese Michelangelo AR
28. **Casa Cappellino** — Caprese Michelangelo
   - slug: `casa-cappellino-caprese-michelangelo`
   - indirizzo: Via Lama, 4, 52033 Lama AR
29. **Euro hotel** — Caprese Michelangelo
   - slug: `euro-hotel-caprese-michelangelo`
   - indirizzo: SS3bis Area di Servizio Tevere Ovest, 52036, 52036 Pieve Santo Stefano AR
30. **Hotel Cristallo** — Caprese Michelangelo
   - slug: `hotel-cristallo-caprese-michelangelo`
   - indirizzo: Via Pratolino, 289A, 52033 Caprese Michelangelo AR
31. **Hotel Santo Stefano** — Caprese Michelangelo
   - slug: `hotel-santo-stefano-caprese-michelangelo`
   - indirizzo: Via Tiberina, 95, 52036 Pieve Santo Stefano AR
32. **La pecora e l agnello** — Caprese Michelangelo
   - slug: `la-pecora-e-l-agnello-caprese-michelangelo`
   - indirizzo: Via Capoluogo, 72, 52033 Caprese Michelangelo AR
33. **Locanda del Viandante Apartments&Pool - Valle di Mezzo** — Caprese Michelangelo
   - slug: `locanda-del-viandante-apartments-pool-valle-di-m-caprese-michelangelo`
   - indirizzo: Località Valle di Mezzo, 70, 52031 Ponte alla Piera, AR
34. **Ristorante Albergo La Buca di Michelangelo** — Caprese Michelangelo
   - slug: `ristorante-albergo-la-buca-di-michelangelo-caprese-michelangelo`
   - indirizzo: Via Capoluogo, 51, 52033 Caprese Michelangelo AR
35. **Terra Di Michelangelo** — Caprese Michelangelo
   - slug: `terra-di-michelangelo-caprese-michelangelo`
   - indirizzo: Loc, Via S. Polo, 70, 52033 Caprese Michelangelo AR