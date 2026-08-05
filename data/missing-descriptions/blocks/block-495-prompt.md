# Blocco 495/500 — 35 strutture senza descrizione IT

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

1. **Villa Amore** — Ravello
   - slug: `villa-amore-ravello`
   - indirizzo: Via dei Fusco, 5, 84010 Ravello SA
2. **Villa Margherita** — Ravello
   - slug: `villa-margherita-ravello`
   - indirizzo: Via Santa Margherita, 7, 84010 Ravello SA
3. **Villa Piedimonte** — Ravello
   - slug: `villa-piedimonte-ravello`
   - indirizzo: Via della Repubblica, 1, 84010 Ravello SA
4. **B&B HOTEL Ravenna** — Ravenna
   - slug: `b-b-hotel-ravenna-ravenna`
   - indirizzo: Viale della Lirica, 141, 48124 Ravenna RA, Italia
5. **Exclusive ApartHotel La Reunion** — Ravenna
   - slug: `exclusive-aparthotel-la-reunion-ravenna`
   - indirizzo: Via Corrado Ricci, 29, 48121 Ravenna RA
6. **Hotel Centrale Byron** — Ravenna
   - slug: `hotel-centrale-byron-ravenna`
   - indirizzo: Via IV Novembre, 14, 48122 Ravenna RA
7. **Hotel Minerva** — Ravenna
   - slug: `hotel-minerva-ravenna`
   - indirizzo: V.le Pier Maroncelli, 1, 48121 Ravenna RA
8. **Hotel Mosaico** — Ravenna
   - slug: `hotel-mosaico-ravenna`
   - indirizzo: Via Darsena, 9, 48121 Ravenna RA
9. **Hotel NH Ravenna** — Ravenna
   - slug: `hotel-nh-ravenna-ravenna`
   - indirizzo: Piazza Goffredo Mameli, 1, 48100 Ravenna RA
10. **Hotel Palazzo Bezzi** — Ravenna
   - slug: `hotel-palazzo-bezzi-ravenna`
   - indirizzo: Via di Roma, 45, 48121 Ravenna RA
11. **Hotel Palazzo Galletti Abbiosi** — Ravenna
   - slug: `hotel-palazzo-galletti-abbiosi-ravenna`
   - indirizzo: via di, Via di Roma, 140, 48121 Ravenna RA
12. **Hotel Ravenna** — Ravenna
   - slug: `hotel-ravenna-ravenna`
   - indirizzo: V.le Pier Maroncelli, 12, 48121 Ravenna RA
13. **Hotel Sant'Andrea** — Ravenna
   - slug: `hotel-sant-andrea-ravenna`
   - indirizzo: Via Carlo Cattaneo, 33, 48121 Ravenna RA
14. **Maison degli Artisti** — Ravenna
   - slug: `maison-degli-artisti-ravenna`
   - indirizzo: Via Armando Diaz, 42, 48121 Ravenna RA
15. **Valentino Luxury Rooms | B&B Ravenna** — Ravenna
   - slug: `valentino-luxury-rooms-b-b-ravenna-ravenna`
   - indirizzo: Via Antica Zecca, 6, 48121 Ravenna RA
16. **B&B Centrale** — Reggio di Calabria
   - slug: `b-b-centrale-reggio-di-calabria`
   - indirizzo: Via Antonio Brancati, 1/C, 89123 Reggio di Calabria RC
17. **Correttori House** — Reggio di Calabria
   - slug: `correttori-house-reggio-di-calabria`
   - indirizzo: Via dei Correttori 8
18. **Didimos Town Hotel** — Reggio di Calabria
   - slug: `didimos-town-hotel-reggio-di-calabria`
   - indirizzo: Via Francesco Cananzi, 6, 89123 Reggio di Calabria RC
19. **Domus Nova** — Reggio di Calabria
   - slug: `domus-nova-reggio-di-calabria`
   - indirizzo: Via dei Correttori, 15, 89127 Reggio Calabria (RC)
20. **è Hotel** — Reggio di Calabria
   - slug: `e-hotel-reggio-di-calabria`
   - indirizzo: Via Giunchi, 89121 Reggio di Calabria RC
21. **Grand Hotel Excelsior** — Reggio di Calabria
   - slug: `grand-hotel-excelsior-reggio-di-calabria`
   - indirizzo: Via Vittorio Veneto, 66, 89123 Reggio Calabria RC
22. **Hotel Eubea** — Reggio di Calabria
   - slug: `hotel-eubea-reggio-di-calabria`
   - indirizzo: Via Gaeta, 9, 89127 Reggio Calabria RC
23. **Hotel Medinblu** — Reggio di Calabria
   - slug: `hotel-medinblu-reggio-di-calabria`
   - indirizzo: Via Demetrio Tripepi, 98, 89125 Reggio di Calabria RC
24. **Hotel Palace Masoanri’s** — Reggio di Calabria
   - slug: `hotel-palace-masoanri-s-reggio-di-calabria`
   - indirizzo: Via Vittorio Veneto, 95, 89123 Reggio Calabria RC
25. **Lungomare Hotel** — Reggio di Calabria
   - slug: `lungomare-hotel-reggio-di-calabria`
   - indirizzo: Viale Genoese Zerbi, 13, 89123 Reggio di Calabria RC
26. **Palazzo Bibbi - Rooms to Live** — Reggio di Calabria
   - slug: `palazzo-bibbi-rooms-to-live-reggio-di-calabria`
   - indirizzo: Via San Francesco da Paola, 63, 89127 Reggio di Calabria RC
27. **Residence Sirio** — Reggio di Calabria
   - slug: `residence-sirio-reggio-di-calabria`
   - indirizzo: Via Al Foro Boario, 16, 89129 Reggio Calabria RC
28. **Torrione Hotel** — Reggio di Calabria
   - slug: `torrione-hotel-reggio-di-calabria`
   - indirizzo: Via del Torrione, 67, 89125 Reggio Calabria RC
29. **Town House Cavour** — Reggio di Calabria
   - slug: `town-house-cavour-reggio-di-calabria`
   - indirizzo: Via Cavour, 19, 89127 Reggio Calabria (RC)
30. **Town House Morgana** — Reggio di Calabria
   - slug: `town-house-morgana-reggio-di-calabria`
   - indirizzo: Via Fata Morgana, 2c, 89125 Reggio Calabria (RC)
31. **Trip Room & Breakfast** — Reggio di Calabria
   - slug: `trip-room-breakfast-reggio-di-calabria`
   - indirizzo: Via Possidonea, 10, 89125 Reggio Calabria RC
32. **Affita camere La casa di Ines San Gimignano** — San Gimignano
   - slug: `affita-camere-la-casa-di-ines-san-gimignano-san-gimignano`
   - indirizzo: Via delle Romite, 2, 53037 San Gimignano SI, Italia
33. **Antico Borgo Il Cardino** — San Gimignano
   - slug: `antico-borgo-il-cardino-san-gimignano`
   - indirizzo: Località il Cardino, 35, 53030 San Gimignano SI, Italia
34. **Bed and Breakfast Il Fienile** — San Gimignano
   - slug: `bed-and-breakfast-il-fienile-san-gimignano`
   - indirizzo: Via Vecchia per Poggibonsi, Località Casa Nera, 1, 53037 San Gimignano SI, Italia
35. **Casa da Rosetta** — San Gimignano
   - slug: `casa-da-rosetta-san-gimignano`
   - indirizzo: Via delle Romite, 15/21/25, 53037 San Gimignano SI, Italia