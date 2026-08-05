# Blocco 277/500 — 35 strutture senza descrizione IT

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

1. **Rifugio di Galte** — Bitti
   - slug: `rifugio-di-galte-bitti`
   - indirizzo: Via Cagliari, 20, 08020 Galtellì NU
2. **AFFITTACAMERE LA MANDORLA** — Bivona
   - slug: `affittacamere-la-mandorla-bivona`
   - indirizzo: Via Monte Cassino, 2, 92010 Caltabellotta AG
3. **Agriturismo Le Zarafe** — Bivona
   - slug: `agriturismo-le-zarafe-bivona`
   - indirizzo: Contrada Giraffe, 92010 Caltabellotta AG
4. **B&B MONTEMARE** — Bivona
   - slug: `b-b-montemare-bivona`
   - indirizzo: Via Pola, 92, 92100 Agrigento AG
5. **Casa Marconi Affittacamere Ribera** — Bivona
   - slug: `casa-marconi-affittacamere-ribera-bivona`
   - indirizzo: Via Guglielmo Marconi, 152, 92016 Ribera AG
6. **Casa Presenza** — Bivona
   - slug: `casa-presenza-bivona`
   - indirizzo: Contrada Carbonia, 92020 Santa Elisabetta AG
7. **Costa Makauda Residence** — Bivona
   - slug: `costa-makauda-residence-bivona`
   - indirizzo: Contrada Macauda, 92019 Sciacca AG
8. **La Casetta di Giorgio** — Bivona
   - slug: `la-casetta-di-giorgio-bivona`
   - indirizzo: Via Fontanelle, 10, 92010 Siculiana AG
9. **Oasi del Borgo** — Bivona
   - slug: `oasi-del-borgo-bivona`
   - indirizzo: Piazza dei Pini, 9, 92016 Borgo Bonsignore AG
10. **Aria e Sole** — Bivongi
   - slug: `aria-e-sole-bivongi`
   - indirizzo: Contrada Strano, 89041 Caulonia RC
11. **B&B A due Passi dal Mare** — Bivongi
   - slug: `b-b-a-due-passi-dal-mare-bivongi`
   - indirizzo: Via Arlesiana, 2, 89041 Caulonia Marina RC
12. **B&B e Appartamenti Magna Grecia** — Bivongi
   - slug: `b-b-e-appartamenti-magna-grecia-bivongi`
   - indirizzo: viale Magna Grecia &via Pitagora, 89041 Caulonia RC
13. **B&B Palazzo Stillitano** — Bivongi
   - slug: `b-b-palazzo-stillitano-bivongi`
   - indirizzo: Via XXI Aprile, 18, 89049 Stilo RC
14. **B&B Piccola Dimora Villa Candido** — Bivongi
   - slug: `b-b-piccola-dimora-villa-candido-bivongi`
   - indirizzo: Piazza Carnovale, Monumento a Tommaso Campanella, 89049 Stilo RC
15. **Borgo della Longevita' B&B** — Bivongi
   - slug: `borgo-della-longevita-b-b-bivongi`
   - indirizzo: Via Margherita, 23, 89040 Bivongi RC
16. **Hotel Duca di Calabria** — Bivongi
   - slug: `hotel-duca-di-calabria-bivongi`
   - indirizzo: Via Conte Ruggiero, n°87, 89822 Spadola VV
17. **Hotel Federica** — Bivongi
   - slug: `hotel-federica-bivongi`
   - indirizzo: Via Nazionale, 89040 Riace RC
18. **Il Moscardino Country Resort** — Bivongi
   - slug: `il-moscardino-country-resort-bivongi`
   - indirizzo: Via Alfonso Scrivo, 56, 89822 Serra San Bruno VV
19. **Le tre sorelle** — Bivongi
   - slug: `le-tre-sorelle-bivongi`
   - indirizzo: Via del Progresso, 2, 89040 Bivongi RC
20. **Pasitea B&B Luxury** — Bivongi
   - slug: `pasitea-b-b-luxury-bivongi`
   - indirizzo: Via Monsignor Tedeschi, 5, 89822 Serra San Bruno VV
21. **Tenuta de l'Annunziata - Natural Relais** — Bizzarone
   - slug: `tenuta-de-l-annunziata-natural-relais-bizzarone`
   - indirizzo: Via Dante Alighieri, 13, 22029 Uggiate con Ronago CO
22. **Agriturismo B&B Casariga Poia Comano Terme** — Bleggio Superiore
   - slug: `agriturismo-b-b-casariga-poia-comano-terme-bleggio-superiore`
   - indirizzo: Località Col Longhe, 2, 38077 Poia TN
23. **Agriturismo Maso Alle Rose** — Bleggio Superiore
   - slug: `agriturismo-maso-alle-rose-bleggio-superiore`
   - indirizzo: località al canal, 1, 38071 Cavrasto TN
24. **Albergo Genzianella S.N.C.** — Bleggio Superiore
   - slug: `albergo-genzianella-s-n-c-bleggio-superiore`
   - indirizzo: Via Alcide Degasperi, 38075 Fiavè TN
25. **Az. Agricola Agritur Maso Pra' Cavai** — Bleggio Superiore
   - slug: `az-agricola-agritur-maso-pra-cavai-bleggio-superiore`
   - indirizzo: Località Maton, 1, 38071 Madice TN
26. **B&B Cappeler** — Bleggio Superiore
   - slug: `b-b-cappeler-bleggio-superiore`
   - indirizzo: Localita' Cappeler, 38079 Tione di Trento TN
27. **B&B Casa Gori** — Bleggio Superiore
   - slug: `b-b-casa-gori-bleggio-superiore`
   - indirizzo: Frazione Madice, 11, 38071 Madice TN
28. **B&B da Erica** — Bleggio Superiore
   - slug: `b-b-da-erica-bleggio-superiore`
   - indirizzo: Frazione Madice, 15, 38071 Bleggio Superiore TN
29. **Hotel Carlone** — Bleggio Superiore
   - slug: `hotel-carlone-bleggio-superiore`
   - indirizzo: Via Roma, 40, 38087 Breguzzo TN
30. **Hotel Delle Rose** — Bleggio Superiore
   - slug: `hotel-delle-rose-bleggio-superiore`
   - indirizzo: Via Arco, 34, 38074 Ceniga TN
31. **Hotel Posta** — Bleggio Superiore
   - slug: `hotel-posta-bleggio-superiore`
   - indirizzo: Via Cesare Battisti, 8, 38077 Ponte Arche TN
32. **Hotel Ristorante Bel Sit** — Bleggio Superiore
   - slug: `hotel-ristorante-bel-sit-bleggio-superiore`
   - indirizzo: Via G. Marconi, 34, 38077 Comano Terme TN
33. **Il Moleta Affittacamere** — Bleggio Superiore
   - slug: `il-moleta-affittacamere-bleggio-superiore`
   - indirizzo: Frazione Rango, 37, 38071 Bleggio Superiore TN
34. **Piccolo Hotel Orlandi** — Bleggio Superiore
   - slug: `piccolo-hotel-orlandi-bleggio-superiore`
   - indirizzo: Via Cesare Battisti, 198, 38077 Comano Terme TN
35. **Ristorante Albergo Dolomiti** — Bleggio Superiore
   - slug: `ristorante-albergo-dolomiti-bleggio-superiore`
   - indirizzo: Via 4 Novembre, 35, 38079 Tione di Trento TN