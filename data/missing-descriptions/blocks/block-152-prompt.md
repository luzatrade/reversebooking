# Blocco 152/500 — 35 strutture senza descrizione IT

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

1. **Hotel Arno** — Armo
   - slug: `hotel-arno-armo-3`
   - indirizzo: Via Lazzaretto, 17/4.to piano, 20124 Milano MI
2. **Hotel Arno** — Armo
   - slug: `hotel-arno-armo`
   - indirizzo: Viale Venezia, 24, 47042 Cesenatico FC
3. **Hotel Arno Bellariva** — Armo
   - slug: `hotel-arno-bellariva-armo`
   - indirizzo: Lungarno del Tempio, 16, 50121 Firenze FI
4. **Hotel Arno Rimini** — Armo
   - slug: `hotel-arno-rimini-armo`
   - indirizzo: Viale Giacinto Martinelli, 9, 47924 Rimini RN
5. **Il Sole di Poggi** — Armo
   - slug: `il-sole-di-poggi-armo`
   - indirizzo: Via S. Lorenzo, 4, 18100 Poggi IM
6. **Ville sull'Arno** — Armo
   - slug: `ville-sull-arno-armo`
   - indirizzo: Lungarno Cristoforo Colombo, 1/3/5, 50136 Firenze FI
7. **Albergo Omu Axiu - Ristorante tipico - Agriturismo e Museo** — Armungia
   - slug: `albergo-omu-axiu-ristorante-tipico-agriturismo-e-armungia`
   - indirizzo: Via Roma, 82, 09061 Orroli CA
8. **Aras Hotel Boutique** — Armungia
   - slug: `aras-hotel-boutique-armungia`
   - indirizzo: Via Umberto I, 12, 09049 Villasimius CA
9. **B&B Casa Licheri** — Armungia
   - slug: `b-b-casa-licheri-armungia`
   - indirizzo: Via La Marmora, 59, 09040 San Vito CA
10. **B&B Il Mandorlo** — Armungia
   - slug: `b-b-il-mandorlo-armungia`
   - indirizzo: Vicolo B Lamarmora, 09040 San Vito CA
11. **B&B Laura** — Armungia
   - slug: `b-b-laura-armungia`
   - indirizzo: Viale Dante Alighieri, 17, 09041 Dolianova CA
12. **B&B Martina** — Armungia
   - slug: `b-b-martina-armungia`
   - indirizzo: Vcolo "A, Via Vitt.Emanuele, 2, 09040 San Vito CA
13. **B&B Sa Specula** — Armungia
   - slug: `b-b-sa-specula-armungia`
   - indirizzo: B&B Sa Specula, Via La Marmora, 61, 09040 San Vito CA
14. **B&B Su Semucu** — Armungia
   - slug: `b-b-su-semucu-armungia`
   - indirizzo: Via Margherita, 3, 09040 Ballao CA
15. **B&B Teresina** — Armungia
   - slug: `b-b-teresina-armungia`
   - indirizzo: Via Milano, 3, 09040 Villasalto CA
16. **B&B Zia Chiarina** — Armungia
   - slug: `b-b-zia-chiarina-armungia`
   - indirizzo: Via Umberto 1°, 25, 09040 San Nicolò Gerrei CA
17. **Donna Raffaela guest house** — Armungia
   - slug: `donna-raffaela-guest-house-armungia`
   - indirizzo: Via G.Garibaldi, 7, 08047 Tertenia OG
18. **Hotel Club Torre Salinas** — Armungia
   - slug: `hotel-club-torre-salinas-armungia`
   - indirizzo: localita torresalinas, 09043 Muravera CA
19. **Hotel Il Falconiere** — Armungia
   - slug: `hotel-il-falconiere-armungia`
   - indirizzo: Unnamed Road, 09043, 09043 Muravera CA
20. **Hotel Rio Molas** — Armungia
   - slug: `hotel-rio-molas-armungia`
   - indirizzo: Localita' Rio Molas, 09043 Muravera CA
21. **Hotel Su Marmuri** — Armungia
   - slug: `hotel-su-marmuri-armungia`
   - indirizzo: Corso Vittorio Emanuele II, 20, 08040 Ulassai OG
22. **La Casa del Cuore** — Armungia
   - slug: `la-casa-del-cuore-armungia`
   - indirizzo: Via Ugo Foscolo, n°5, 09043 Muravera CA
23. **Murahera Guest House** — Armungia
   - slug: `murahera-guest-house-armungia`
   - indirizzo: Via Roma, 132, 09043 Muravera CA
24. **Ristorante Pizzeria Hotel La Lanterna nel bosco** — Armungia
   - slug: `ristorante-pizzeria-hotel-la-lanterna-nel-bosco-armungia`
   - indirizzo: Loc. Su tettioni, 08046 Perdasdefogu OG
25. **Sienda Cesira** — Armungia
   - slug: `sienda-cesira-armungia`
   - indirizzo: Via Santa Lucia, 15, 09043 Muravera CA
26. **Su Cunventu** — Armungia
   - slug: `su-cunventu-armungia`
   - indirizzo: V. Sarrabus, 17, 09043 Muravera CA
27. **Agriturismo Le Moulin Des Aravis** — Arnad
   - slug: `agriturismo-le-moulin-des-aravis-arnad`
   - indirizzo: Località Savin, 55, 11020 Pontboset AO
28. **Agriturismo Le Rocher Fleurì** — Arnad
   - slug: `agriturismo-le-rocher-fleuri-arnad`
   - indirizzo: Frazione Albard 11, 11020 Donnas AO
29. **Au coeur du village** — Arnad
   - slug: `au-coeur-du-village-arnad`
   - indirizzo: Frazione Pied de Ville, 21, 11020 Arnad AO
30. **L' Armanac de Toubie - Hotel & Restaurant** — Arnad
   - slug: `l-armanac-de-toubie-hotel-restaurant-arnad`
   - indirizzo: Frazione Clapey, 21, 11020 Arnad AO
31. **Maison de Noé** — Arnad
   - slug: `maison-de-noe-arnad`
   - indirizzo: Frazione Revie, 11020 Arnad AO
32. **Agriturismo Setteventi** — Arnara
   - slug: `agriturismo-setteventi-arnara`
   - indirizzo: Via Santa Lucia, 25, 03026 Pofi FR
33. **B&B da Lillo** — Arnara
   - slug: `b-b-da-lillo-arnara`
   - indirizzo: Via Fontana Unica, 43a, 03100 Frosinone FR
34. **Colle bella vista** — Arnara
   - slug: `colle-bella-vista-arnara`
   - indirizzo: 03027 Colle Alto-porciri FR
35. **Hotel - Ristorante Garibaldi** — Arnara
   - slug: `hotel-ristorante-garibaldi-arnara`
   - indirizzo: Via Plebiscito, 49, 03100 Frosinone FR