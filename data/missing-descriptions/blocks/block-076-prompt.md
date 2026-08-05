# Blocco 76/500 — 35 strutture senza descrizione IT

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

1. **Wundergarten Dimora dei frati** — Aliminusa
   - slug: `wundergarten-dimora-dei-frati-aliminusa`
   - indirizzo: Via Borgognone, 22, 90010 Gratteri PA
2. **Agriturismo Furfullanu** — Allai
   - slug: `agriturismo-furfullanu-allai`
   - indirizzo: Via case sparse, 58, 09058 Nurallao CA
3. **B&B Madau** — Allai
   - slug: `b-b-madau-allai`
   - indirizzo: Via Vitt. Emanuele, 36A, 09086 Samugheo OR
4. **Sardegna Grand Hotel Terme** — Allai
   - slug: `sardegna-grand-hotel-terme-allai`
   - indirizzo: SP23, 1, 09083 Fordongianus OR
5. **Hotel Adriana** — Alleghe
   - slug: `hotel-adriana-alleghe`
   - indirizzo: Corso Venezia, 20, 32022 Masaré BL
6. **Hotel Albe** — Alleghe
   - slug: `hotel-albe-alleghe`
   - indirizzo: Via Marmolada, Località Bosco Verde, 31, 32023 Rocca Pietore BL
7. **Hotel Ciclamino** — Alleghe
   - slug: `hotel-ciclamino-alleghe`
   - indirizzo: Corso Trieste, 8, 32022 Alleghe BL
8. **Hotel La Maison Wellness & SPA** — Alleghe
   - slug: `hotel-la-maison-wellness-spa-alleghe`
   - indirizzo: Via Masarè, 58, 32022 Alleghe BL
9. **Hotel Maè e Residence Panorama** — Alleghe
   - slug: `hotel-mae-e-residence-panorama-alleghe`
   - indirizzo: Via Masarei, 3, 32012 Val di Zoldo BL
10. **Hotel Mondeval** — Alleghe
   - slug: `hotel-mondeval-alleghe`
   - indirizzo: Via Piz del Corvo, 16, 32020 Santa Fosca BL
11. **Hotel Monte Civetta** — Alleghe
   - slug: `hotel-monte-civetta-alleghe`
   - indirizzo: Via Nazionale, 22, 32022 Caprile BL
12. **Hotel Nigritella** — Alleghe
   - slug: `hotel-nigritella-alleghe`
   - indirizzo: Via Santa Fosca, 17, 32020 Selva di Cadore BL
13. **Hotel Orso Grigio** — Alleghe
   - slug: `hotel-orso-grigio-alleghe`
   - indirizzo: Via Pescul, 103/105, 32020 Pescul BL
14. **Hotel Ristorante Aurora** — Alleghe
   - slug: `hotel-ristorante-aurora-alleghe`
   - indirizzo: Località Saviner di Laste, 60, 32023 Saviner di Laste BL
15. **Hotel Tea Dolomiti** — Alleghe
   - slug: `hotel-tea-dolomiti-alleghe`
   - indirizzo: Corso Italia, 86, 32022 Alleghe BL
16. **Hotel Valgranda **** Wellness & SPA** — Alleghe
   - slug: `hotel-valgranda-wellness-spa-alleghe`
   - indirizzo: Via Pecol, 11, 32012 Pecol BL
17. **Hotel Venezia** — Alleghe
   - slug: `hotel-venezia-alleghe`
   - indirizzo: Località Saviner di Laste, 50, 32023 Saviner di Laste BL
18. **Naturae Lodge** — Alleghe
   - slug: `naturae-lodge-alleghe`
   - indirizzo: Via Lungo Lago, 12, 32022 Alleghe BL
19. **Pineta Pastry Hotel** — Alleghe
   - slug: `pineta-pastry-hotel-alleghe`
   - indirizzo: Via Marmolada, 13, 32023 Rocca Pietore BL
20. **Sporthotel Europa** — Alleghe
   - slug: `sporthotel-europa-alleghe`
   - indirizzo: Via Europa, 10, 32022 Alleghe BL
21. **Affittacamere Relais de la Grandze** — Allein
   - slug: `affittacamere-relais-de-la-grandze-allein`
   - indirizzo: La Cretaz, 27, 11010 Doues AO
22. **Agriturismo Lo Ratele** — Allein
   - slug: `agriturismo-lo-ratele-allein`
   - indirizzo: frazione villa n3, 11010 Allein AO
23. **Al Caminetto** — Allein
   - slug: `al-caminetto-allein`
   - indirizzo: Via Canonico Giuseppe Brèan Nr, 33, 11100 Aosta AO
24. **Albergo Mont Velan** — Allein
   - slug: `albergo-mont-velan-allein`
   - indirizzo: Rue Du Grand Saint Bernard, 13, 11014 Saint-Oyen AO
25. **Albergo Residence Mont Gelè** — Allein
   - slug: `albergo-residence-mont-gele-allein`
   - indirizzo: Frazione Voueces, 3, 11010 Ollomont AO
26. **B&B EnChanté** — Allein
   - slug: `b-b-enchante-allein`
   - indirizzo: Frazione Chanté, 12, 11010 Chanté AO
27. **B&B Maison Cerise** — Allein
   - slug: `b-b-maison-cerise-allein`
   - indirizzo: 11010 Allein AO, Italia
28. **Camping Tunnel International** — Allein
   - slug: `camping-tunnel-international-allein`
   - indirizzo: Rue Chevrières, 4, 11014 Etroubles AO
29. **Chez Magan** — Allein
   - slug: `chez-magan-allein`
   - indirizzo: Frazione Crè, 35, 11010 Gignod AO
30. **CleMaison Antica Dimora - Appartamenti** — Allein
   - slug: `clemaison-antica-dimora-appartamenti-allein`
   - indirizzo: Frazione Clémencey, 6, 11010 Gignod AO
31. **Hostellerie Du Cheval Blanc** — Allein
   - slug: `hostellerie-du-cheval-blanc-allein`
   - indirizzo: Rue, Via Clavalité, 20, 11100 Aosta AO
32. **Hôtel Beau Sejour** — Allein
   - slug: `hotel-beau-sejour-allein`
   - indirizzo: Route Nationale du Grand Saint Bernard, 3, 11014 Etroubles AO
33. **Hotel Bellevue** — Allein
   - slug: `hotel-bellevue-allein`
   - indirizzo: Frazione La Ressaz, 3, 11010 Gignod AO
34. **Hotel Miage** — Allein
   - slug: `hotel-miage-allein`
   - indirizzo: loc, Frazione Pont Suaz, 252, 11020 Charvensod AO
35. **La Maison du Bon Megnadzo** — Allein
   - slug: `la-maison-du-bon-megnadzo-allein`
   - indirizzo: Località Chanet, 11010 Doues AO