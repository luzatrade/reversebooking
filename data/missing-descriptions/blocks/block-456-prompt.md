# Blocco 456/500 — 35 strutture senza descrizione IT

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

1. **Tenuta Le Tre Rose** — Casaletto Spartano
   - slug: `tenuta-le-tre-rose-casaletto-spartano`
   - indirizzo: Via grizzosa, 9, 84079 Vibonati SA
2. **Tenuta Vallina** — Casaletto Spartano
   - slug: `tenuta-vallina-casaletto-spartano`
   - indirizzo: Contrada Vallina, 84030 Tortorella SA
3. **Agriturismo Fattoria Primaluce** — Casaletto Vaprio
   - slug: `agriturismo-fattoria-primaluce-casaletto-vaprio`
   - indirizzo: Fattoria Primaluce, 26016 Spino d'Adda CR
4. **Galli Guest House** — Casaletto Vaprio
   - slug: `galli-guest-house-casaletto-vaprio`
   - indirizzo: Via Umberto I°, 29, 26025 Pandino CR
5. **attico marsiglie** — Casalfiumanese
   - slug: `attico-marsiglie-casalfiumanese`
   - indirizzo: Via Marsiglie, 6, 40020 Casalfiumanese BO
6. **Euro Hotel** — Casalfiumanese
   - slug: `euro-hotel-casalfiumanese`
   - indirizzo: Via Ugo la Malfa, 10, 40026 Imola BO
7. **Hotel Castello - Congressi Artemide** — Casalfiumanese
   - slug: `hotel-castello-congressi-artemide-casalfiumanese`
   - indirizzo: Viale Terme, 1010/B, 40024 Castel San Pietro Terme BO
8. **Hotel Ciclamino** — Casalfiumanese
   - slug: `hotel-ciclamino-casalfiumanese`
   - indirizzo: Via Limisano, 3, 48025 Riolo Terme RA
9. **Hotel Dozza** — Casalfiumanese
   - slug: `hotel-dozza-casalfiumanese`
   - indirizzo: Via Emilia, 42, 40060 Toscanella BO
10. **Hotel La Torretta** — Casalfiumanese
   - slug: `hotel-la-torretta-casalfiumanese`
   - indirizzo: Viale Terme, 1559, 40024 Castel San Pietro Terme BO
11. **Hotel Ristorante Senio** — Casalfiumanese
   - slug: `hotel-ristorante-senio-casalfiumanese`
   - indirizzo: 20 Via Firenze, 48025 Riolo Terme RA
12. **Hotel Terme di Castel San Pietro** — Casalfiumanese
   - slug: `hotel-terme-di-castel-san-pietro-casalfiumanese`
   - indirizzo: Viale Terme, 1113, 40024 Castel San Pietro Terme BO
13. **Il Giardino Segreto** — Casalfiumanese
   - slug: `il-giardino-segreto-casalfiumanese`
   - indirizzo: Via Emilia, 94, 40026 Imola BO
14. **Il Tiglio B&B** — Casalfiumanese
   - slug: `il-tiglio-b-b-casalfiumanese`
   - indirizzo: Via Calanco, 76, 40060 Dozza BO
15. **Park Hotel** — Casalfiumanese
   - slug: `park-hotel-casalfiumanese`
   - indirizzo: Viale Terme, 1010, 40024 Castel San Pietro Terme BO
16. **Villa Casetti** — Casalfiumanese
   - slug: `villa-casetti-casalfiumanese`
   - indirizzo: Via Casalino, 3, 40026 Casalfiumanese BO
17. **Zappi Cycling Hotel** — Casalfiumanese
   - slug: `zappi-cycling-hotel-casalfiumanese`
   - indirizzo: Via Firenze, 11, 48025 Riolo Terme RA
18. **Agriturismo Al Ghèt** — Casalgrande
   - slug: `agriturismo-al-ghet-casalgrande`
   - indirizzo: Via Bassa, 20, 42013 Salvaterra RE
19. **Agriturismo Casa Fonsi** — Casalgrande
   - slug: `agriturismo-casa-fonsi-casalgrande`
   - indirizzo: Via Campomaggiore, 9, 40050 Monteveglio BO
20. **Agriturismo Corte dei Landi** — Casalgrande
   - slug: `agriturismo-corte-dei-landi-casalgrande`
   - indirizzo: Via del Castello, 33, 42124 Reggio nell'Emilia RE
21. **Agriturismo Il Casale Grande** — Casalgrande
   - slug: `agriturismo-il-casale-grande-casalgrande`
   - indirizzo: Località San Paolo, 16, 06049 Spoleto PG
22. **Borgo Del Castello** — Casalgrande
   - slug: `borgo-del-castello-casalgrande`
   - indirizzo: Via Castello Casalgrande, 6, 42013 Casalgrande RE
23. **Casa Agostino** — Casalgrande
   - slug: `casa-agostino-casalgrande`
   - indirizzo: Via Europa, 50, 42013 Casalgrande RE
24. **Casa della Ludo B&B** — Casalgrande
   - slug: `casa-della-ludo-b-b-casalgrande`
   - indirizzo: di, Via Statutaria, 152, 42013 Sant'Antonino RE
25. **CASA EMANUELA 'Il nostro nido d'amore "** — Casalgrande
   - slug: `casa-emanuela-il-nostro-nido-d-amore-casalgrande`
   - indirizzo: Via Canale, 44, 42013 Casalgrande RE
26. **Casalgrande Hotel** — Casalgrande
   - slug: `casalgrande-hotel-casalgrande`
   - indirizzo: Via XXV Aprile, 27, 42013 Casalgrande RE
27. **La Riserva** — Casalgrande
   - slug: `la-riserva-casalgrande`
   - indirizzo: Via Colatore, 36, 42013 Casalgrande RE
28. **La Ruota Rooms** — Casalgrande
   - slug: `la-ruota-rooms-casalgrande`
   - indirizzo: Via Livatino Rosario, 8, 42013 Casalgrande RE
29. **B&B Villa Albina** — Casalgrasso
   - slug: `b-b-villa-albina-casalgrasso`
   - indirizzo: Via Piave, 91, 10040 La Loggia TO
30. **Boulevard 900** — Casalgrasso
   - slug: `boulevard-900-casalgrasso`
   - indirizzo: Viale Umberto I, nr.41, 12036 Revello CN
31. **Cascina Lai - Camere private in affitto** — Casalgrasso
   - slug: `cascina-lai-camere-private-in-affitto-casalgrasso`
   - indirizzo: Via Luserna, 7, 10026 Santena TO
32. **Agriturismo Camigliatello "La Corte dei Pini"** — Casali del Manco
   - slug: `agriturismo-camigliatello-la-corte-dei-pini-casali-del-manco`
   - indirizzo: Contrada Colle Lungo snc, 87058 Colle Lungo CS
33. **B&B Morelli Home** — Casali del Manco
   - slug: `b-b-morelli-home-casali-del-manco`
   - indirizzo: Piazza Europa, 14, 87100 Cosenza CS
34. **B&B Svevo** — Casali del Manco
   - slug: `b-b-svevo-casali-del-manco`
   - indirizzo: Piazza Santa Teresa, 10, 87100 Cosenza CS
35. **Centro Sportivo lorica, B&BForesteria, Canoe, Pedalò, Bar Ristorante, Sala eventi, Terrazza panoramica.** — Casali del Manco
   - slug: `centro-sportivo-lorica-b-bforesteria-canoe-pedal-casali-del-manco`
   - indirizzo: Lungolago, 87055 San Giovanni in Fiore CS