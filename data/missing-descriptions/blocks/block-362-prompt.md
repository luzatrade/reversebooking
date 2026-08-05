# Blocco 362/500 — 35 strutture senza descrizione IT

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

1. **Bnb Sole e Luna** — Calcata
   - slug: `bnb-sole-e-luna-calcata`
   - indirizzo: V. Garibaldi, 21, 01030 Calcata Vecchia VT
2. **Francalancia Country Resort** — Calcata
   - slug: `francalancia-country-resort-calcata`
   - indirizzo: Via Pian Braccone, 8, 00060 Castelnuovo di Porto RM
3. **Hotel Antico Residence Roma** — Calcata
   - slug: `hotel-antico-residence-roma-calcata`
   - indirizzo: Via Cassia, Km 37, 01036 Nepi VT
4. **Hotel Sassacci** — Calcata
   - slug: `hotel-sassacci-calcata`
   - indirizzo: Via Flaminia, Km 56, 01033 Civita Castellana VT
5. **La Casa sui Tetti** — Calcata
   - slug: `la-casa-sui-tetti-calcata`
   - indirizzo: V. San Giovanni, 43, 01030 Calcata Vecchia VT
6. **La Dolce Sosta** — Calcata
   - slug: `la-dolce-sosta-calcata`
   - indirizzo: Via di Baccano, 00063 Poggio Dell'ellera RM
7. **MAISONETTE Fata Bislacca** — Calcata
   - slug: `maisonette-fata-bislacca-calcata`
   - indirizzo: V. Tripoli, 8, 01030 Calcata Vecchia VT
8. **Romea** — Calcata
   - slug: `romea-calcata`
   - indirizzo: Piazza Cesare Leonelli, 3, 00063 Campagnano di Roma RM
9. **STANZA D'ARTISTA CALCATA** — Calcata
   - slug: `stanza-d-artista-calcata-calcata`
   - indirizzo: P.zza Roma, 8/piano terra, 01030 Calcata Vecchia VT
10. **A un passo dal lago** — Calceranica al Lago
   - slug: `a-un-passo-dal-lago-calceranica-al-lago`
   - indirizzo: CIN IT022034C1D76JFWPK - CIR 17476, Via Andanta, 12, 38052 Caldonazzo TN
11. **agriturismo la barberina** — Calceranica al Lago
   - slug: `agriturismo-la-barberina-calceranica-al-lago`
   - indirizzo: Piazza Sugarina, 8, 38050 Calceranica al Lago TN
12. **Agriturismo Verdecrudo** — Calceranica al Lago
   - slug: `agriturismo-verdecrudo-calceranica-al-lago`
   - indirizzo: località Maso Murari, 1, 38050 Calceranica al Lago TN
13. **Albergo alla Torre** — Calceranica al Lago
   - slug: `albergo-alla-torre-calceranica-al-lago`
   - indirizzo: Via della Villa, 37, 38052 Caldonazzo TN
14. **Albergo Micamada** — Calceranica al Lago
   - slug: `albergo-micamada-calceranica-al-lago`
   - indirizzo: Via S. Pietro, 3, 38050 Calceranica al Lago TN
15. **Alla Pieve** — Calceranica al Lago
   - slug: `alla-pieve-calceranica-al-lago`
   - indirizzo: Via don Enrico Angeli, 38, 38050 Calceranica al Lago TN
16. **B&B Alba sul Lago** — Calceranica al Lago
   - slug: `b-b-alba-sul-lago-calceranica-al-lago`
   - indirizzo: Maso Toldi, 5, 38057 Pergine Valsugana TN
17. **B&B Casa sul Lago** — Calceranica al Lago
   - slug: `b-b-casa-sul-lago-calceranica-al-lago`
   - indirizzo: Via Lungo Lago, 42, 38050 Calceranica al Lago TN
18. **Energy Hotel** — Calceranica al Lago
   - slug: `energy-hotel-calceranica-al-lago`
   - indirizzo: Corso Alpini, 1, 38050 Calceranica al Lago TN
19. **Hotel Al Sorriso** — Calceranica al Lago
   - slug: `hotel-al-sorriso-calceranica-al-lago`
   - indirizzo: Via Segantini, 14, 38056 Levico Terme TN
20. **Hotel Dolomiti** — Calceranica al Lago
   - slug: `hotel-dolomiti-calceranica-al-lago-2`
   - indirizzo: Via Vicenza, 37, 38049 Vattaro TN
21. **Hotel Dolomiti** — Calceranica al Lago
   - slug: `hotel-dolomiti-calceranica-al-lago`
   - indirizzo: Traversa Lido, 8, 38056 Levico Terme TN
22. **Hotel Garnì Bellavista** — Calceranica al Lago
   - slug: `hotel-garni-bellavista-calceranica-al-lago`
   - indirizzo: Viale Venezia, 12, 38050 Calceranica al Lago TN
23. **Hotel la Piroga** — Calceranica al Lago
   - slug: `hotel-la-piroga-calceranica-al-lago`
   - indirizzo: Via Penisola Verde, 1, 38050 Calceranica al Lago TN
24. **Hotel Tomei** — Calceranica al Lago
   - slug: `hotel-tomei-calceranica-al-lago`
   - indirizzo: Via Dante Alighieri a VATTARO, 1, Via Dante Alighieri, 1, 38049 Vattaro TN
25. **Agriturismo Al Palazzaccio** — Calci
   - slug: `agriturismo-al-palazzaccio-calci`
   - indirizzo: Via del Seminario, 11, 56011 Calci PI
26. **Agriturismo Rosselmini - Tuscany** — Calci
   - slug: `agriturismo-rosselmini-tuscany-calci`
   - indirizzo: Via Rosselmini, 10, 56011 Calci PI
27. **Agriturismo Villa Buieri** — Calci
   - slug: `agriturismo-villa-buieri-calci`
   - indirizzo: Via della Certosa, 2, 56011 Pisa PI
28. **Azienda Agricola Podere del Pari srl** — Calci
   - slug: `azienda-agricola-podere-del-pari-srl-calci`
   - indirizzo: Via di Pari, 6, 56011 Calci PI
29. **B&B Antica Toscana- Casa Vacanze - Appartamenti** — Calci
   - slug: `b-b-antica-toscana-casa-vacanze-appartamenti-calci`
   - indirizzo: Via Eugenio III, 5, 56011 Calci PI
30. **B&B Gli Olivi** — Calci
   - slug: `b-b-gli-olivi-calci`
   - indirizzo: Via F. Ruschi, 174, 56011 Calci PI
31. **B&B Villamorosa** — Calci
   - slug: `b-b-villamorosa-calci`
   - indirizzo: Via Provinciale Vicarese, 27, 56010 Vicopisano PI
32. **Hotel da Carlos** — Calci
   - slug: `hotel-da-carlos-calci`
   - indirizzo: Via Nuova per Pisa, 5901, 55100 Lucca LU
33. **L' Angolo Verde - Bed & Breakfast** — Calci
   - slug: `l-angolo-verde-bed-breakfast-calci`
   - indirizzo: Via Piastroni, 56, 56021 Cascina PI
34. **La Fabbrica Calci** — Calci
   - slug: `la-fabbrica-calci-calci`
   - indirizzo: Via Don Minzoni, 30, 56011 Calci PI
35. **Ninfeo dell' Arancera** — Calci
   - slug: `ninfeo-dell-arancera-calci`
   - indirizzo: loc villa Scorzi, 4, 56011 Calci PI