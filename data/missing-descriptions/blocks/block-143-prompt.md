# Blocco 143/500 — 35 strutture senza descrizione IT

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

1. **Antica Cascina di Borghetto** — Arena Po
   - slug: `antica-cascina-di-borghetto-arena-po`
   - indirizzo: Frazione Fornaci, 27, 26812 Fornaci LO
2. **B&B La torre** — Arena Po
   - slug: `b-b-la-torre-arena-po`
   - indirizzo: Via Carlo Achilli, 2, 27049 Stradella PV
3. **B&B Miele Millefiori** — Arena Po
   - slug: `b-b-miele-millefiori-arena-po`
   - indirizzo: località Schiaffinata 26, 27017 Pieve Porto Morone PV
4. **B&B Monteguzzo** — Arena Po
   - slug: `b-b-monteguzzo-arena-po`
   - indirizzo: Strada per Monteguzzo, 6, 27040 Cigognola PV
5. **Hotel Flamingo - Stradella** — Arena Po
   - slug: `hotel-flamingo-stradella-arena-po`
   - indirizzo: Via Giuseppe di Vittorio, 56, 27049 Stradella PV
6. **Hotel Motel 2 Castel San Giovanni** — Arena Po
   - slug: `hotel-motel-2-castel-san-giovanni-arena-po`
   - indirizzo: Strada Dogana Po, 15/A, 29015 Castel San Giovanni PC
7. **Hotel Rizzi** — Arena Po
   - slug: `hotel-rizzi-arena-po`
   - indirizzo: Via Borgonovo, 46, 29015 Castel San Giovanni PC
8. **M-Hotel Don Carlo** — Arena Po
   - slug: `m-hotel-don-carlo-arena-po`
   - indirizzo: Strada Bronese, SP617, 37, 27043 Broni PV
9. **Museo Grillo Camere d'Arte** — Arena Po
   - slug: `museo-grillo-camere-d-arte-arena-po`
   - indirizzo: Via G. Marconi, 4, 27040 Arena Po PV
10. **RISTORANTE DELL'ANGELO** — Arena Po
   - slug: `ristorante-dell-angelo-arena-po`
   - indirizzo: Via Tornello, 94, 27040 Mezzanino PV
11. **Affittacamere Onda Chiara** — Arenzano
   - slug: `affittacamere-onda-chiara-arenzano`
   - indirizzo: Piazza Zembi, 3, 16011 Arenzano GE
12. **Câ da Muntà** — Arenzano
   - slug: `ca-da-munta-arenzano`
   - indirizzo: Via Montà, 2, 16011 Arenzano GE
13. **Dimore di Mare affittacamere** — Arenzano
   - slug: `dimore-di-mare-affittacamere-arenzano`
   - indirizzo: Corso Giacomo Matteotti, 104, 16011 Arenzano GE
14. **Ena Hotel** — Arenzano
   - slug: `ena-hotel-arenzano`
   - indirizzo: Corso Giacomo Matteotti, 12, 16011 Arenzano GE
15. **Glem Rooms and Breakfast** — Arenzano
   - slug: `glem-rooms-and-breakfast-arenzano`
   - indirizzo: Via Sauli Pallavicino, 27/4, 16011 Arenzano GE
16. **Grand Hotel Arenzano** — Arenzano
   - slug: `grand-hotel-arenzano-arenzano`
   - indirizzo: Lungomare Stati Uniti, 2, 16011 Arenzano GE
17. **Hotel Eden Di Iovine Patrizia** — Arenzano
   - slug: `hotel-eden-di-iovine-patrizia-arenzano`
   - indirizzo: Via Trieste, 15, 16011 Arenzano GE
18. **Hotel Poggio** — Arenzano
   - slug: `hotel-poggio-arenzano`
   - indirizzo: Via Francia, 24, 16011 Arenzano GE
19. **Hotel Punta San Martino** — Arenzano
   - slug: `hotel-punta-san-martino-arenzano`
   - indirizzo: Via Punta S. Martino, 4, 16011 Arenzano GE
20. **Hotel Riviera** — Arenzano
   - slug: `hotel-riviera-arenzano`
   - indirizzo: Piazza Antonio Gramsci, 10, 16011 Arenzano GE
21. **Hotel Serena** — Arenzano
   - slug: `hotel-serena-arenzano`
   - indirizzo: Corso Giacomo Matteotti, 146/1, 16011 Arenzano GE
22. **Hotel Ulivi** — Arenzano
   - slug: `hotel-ulivi-arenzano`
   - indirizzo: Via Olivete, 12, 16011 Arenzano GE
23. **Hotel Vittoria** — Arenzano
   - slug: `hotel-vittoria-arenzano`
   - indirizzo: Via Sauli Pallavicino, 84, 16011 Arenzano GE
24. **Hotiday Arenzano Pineta** — Arenzano
   - slug: `hotiday-arenzano-pineta-arenzano`
   - indirizzo: Via Punta S. Martino, 4, 16011 Arenzano GE
25. **Locanda Vittoria** — Arenzano
   - slug: `locanda-vittoria-arenzano`
   - indirizzo: Via Raffaello Sanzio, 3, 16011 Arenzano GE
26. **Mirandola Suites** — Arenzano
   - slug: `mirandola-suites-arenzano`
   - indirizzo: Via Costa Frati, 10, 16011 Arenzano GE
27. **Via di Francia Residence Arenzano** — Arenzano
   - slug: `via-di-francia-residence-arenzano-arenzano`
   - indirizzo: Via Francia, 5, 16011 Arenzano GE
28. **Villa Figoli Suites** — Arenzano
   - slug: `villa-figoli-suites-arenzano`
   - indirizzo: Via Grecia, 1, 16011 Arenzano GE
29. **AdriroomsRho** — Arese
   - slug: `adriroomsrho-arese`
   - indirizzo: Via Bruno Buozzi, 31, 20017 Rho MI
30. **Anjoy&Bleev Rooms - Rho Fiera** — Arese
   - slug: `anjoy-bleev-rooms-rho-fiera-arese`
   - indirizzo: fronte Eni Station, Via Pace, 85, 20017 Rho MI
31. **ARESE B&B** — Arese
   - slug: `arese-b-b-arese`
   - indirizzo: Viale Alfa Romeo, 4a, 20044 Arese MI
32. **B&B Amelie** — Arese
   - slug: `b-b-amelie-arese`
   - indirizzo: Via Bruno Buozzi, 27, 20017 Rho MI
33. **Bed** — Arese
   - slug: `bed-arese`
   - indirizzo: Piazza della Libertà, 5, 20017 Rho MI
34. **Bed Rho Fiera** — Arese
   - slug: `bed-rho-fiera-arese`
   - indirizzo: Via Enrico Toti, 18, 20017 Rho MI
35. **Casagialla89** — Arese
   - slug: `casagialla89-arese`
   - indirizzo: Via Peloritana, 93, 20024 Garbagnate Milanese MI