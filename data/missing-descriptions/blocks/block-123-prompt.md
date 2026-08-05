# Blocco 123/500 — 35 strutture senza descrizione IT

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

1. **Grand Hotel Dino** — Anzola d'Ossola
   - slug: `grand-hotel-dino-anzola-d-ossola`
   - indirizzo: Corso Giuseppe Garibaldi, 20, 28831 Baveno VB
2. **Hotel Bettina** — Anzola d'Ossola
   - slug: `hotel-bettina-anzola-d-ossola`
   - indirizzo: Via Saglio Mauro, 4, 28802 Mergozzo VB
3. **Hotel Carillon** — Anzola d'Ossola
   - slug: `hotel-carillon-anzola-d-ossola`
   - indirizzo: Str. Nazionale del Sempione, 2, 28831 Baveno VB
4. **Hotel La Pieve** — Anzola d'Ossola
   - slug: `hotel-la-pieve-anzola-d-ossola`
   - indirizzo: Via Mario Massari, 23, 28886 Pieve Vergonte VB
5. **Hotel Milano e Ristorante Carpinus** — Anzola d'Ossola
   - slug: `hotel-milano-e-ristorante-carpinus-anzola-d-ossola`
   - indirizzo: Piazza Luigi Secchi, 3, 28817 Miazzina VB
6. **Hotel Monte Mazzoccone** — Anzola d'Ossola
   - slug: `hotel-monte-mazzoccone-anzola-d-ossola`
   - indirizzo: Via Quarelli, 28898 Quarna Sopra VB
7. **Hotel Ristorante Croce Bianca** — Anzola d'Ossola
   - slug: `hotel-ristorante-croce-bianca-anzola-d-ossola`
   - indirizzo: Via Giuseppe Mazzini, 2, 28887 Omegna VB
8. **Hotel Ristorante Romagna** — Anzola d'Ossola
   - slug: `hotel-ristorante-romagna-anzola-d-ossola`
   - indirizzo: Via Sempione, 21, 28831 Baveno VB
9. **Hotel Rosa** — Anzola d'Ossola
   - slug: `hotel-rosa-anzola-d-ossola`
   - indirizzo: Via Monte Grappa, 29, 28831 Baveno VB
10. **La Locanda al lago** — Anzola d'Ossola
   - slug: `la-locanda-al-lago-anzola-d-ossola`
   - indirizzo: Via 42 Martiri, 24, 28924 Fondotoce VB
11. **La Locanda di Colloro** — Anzola d'Ossola
   - slug: `la-locanda-di-colloro-anzola-d-ossola`
   - indirizzo: Via Premosello 16, Frazione Colloro, 28803 Premosello-chiovenda VB
12. **VILLA CHIOVENDA Residenza d'Epoca** — Anzola d'Ossola
   - slug: `villa-chiovenda-residenza-d-epoca-anzola-d-ossola`
   - indirizzo: Via Professor Giuseppe Chiovenda, 60, 28803 Premosello-chiovenda VB
13. **Villa e Palazzo Aminta Hotel, Beauty & SPA** — Anzola d'Ossola
   - slug: `villa-e-palazzo-aminta-hotel-beauty-spa-anzola-d-ossola`
   - indirizzo: Via Sempione Nord, 123, 28838 Stresa VB
14. **Accogliente appartamento Anzola dell' emilia** — Anzola dell'Emilia
   - slug: `accogliente-appartamento-anzola-dell-emilia-anzola-dell-emilia`
   - indirizzo: Via Emilia, 125, 40011 Anzola dell'Emilia BO
15. **Alan Hotel** — Anzola dell'Emilia
   - slug: `alan-hotel-anzola-dell-emilia`
   - indirizzo: Via Emilia, 46/B, 40011 Anzola dell'Emilia BO
16. **B&B Antico fienile** — Anzola dell'Emilia
   - slug: `b-b-antico-fienile-anzola-dell-emilia`
   - indirizzo: Via Emilia, 64/A, 40011 Anzola dell'Emilia BO
17. **B&B Pitstop** — Anzola dell'Emilia
   - slug: `b-b-pitstop-anzola-dell-emilia`
   - indirizzo: Via Emilia, 22, 40011 Anzola dell'Emilia BO
18. **Bed & Breakfast Anzola** — Anzola dell'Emilia
   - slug: `bed-breakfast-anzola-anzola-dell-emilia`
   - indirizzo: casa singola, Via XXV Aprile, 7, 40011 Anzola dell'Emilia BO
19. **carla's house** — Anzola dell'Emilia
   - slug: `carla-s-house-anzola-dell-emilia`
   - indirizzo: Via del Risorgimento, 37, 40011 Anzola dell'Emilia BO
20. **Emilia381 Suite** — Anzola dell'Emilia
   - slug: `emilia381-suite-anzola-dell-emilia`
   - indirizzo: Via Emilia, 381, 40011 Anzola dell'Emilia BO
21. **Hotel Motel Maxim Bologna** — Anzola dell'Emilia
   - slug: `hotel-motel-maxim-bologna-anzola-dell-emilia`
   - indirizzo: Via Stradellazzo, 1, 40011 Anzola dell'Emilia BO
22. **Hotel Samoggia** — Anzola dell'Emilia
   - slug: `hotel-samoggia-anzola-dell-emilia`
   - indirizzo: Via Samoggia, 92, 40056 Crespellano BO
23. **Hotel Verdemilia** — Anzola dell'Emilia
   - slug: `hotel-verdemilia-anzola-dell-emilia`
   - indirizzo: Via Emilia, 65, 40011 Anzola dell'Emilia BO
24. **La collinetta B&B** — Anzola dell'Emilia
   - slug: `la-collinetta-b-b-anzola-dell-emilia`
   - indirizzo: Via Provinciale, 57, 40056 Crespellano BO
25. **la Viola** — Anzola dell'Emilia
   - slug: `la-viola-anzola-dell-emilia`
   - indirizzo: Via Giacomo Matteotti, 31, 40011 Anzola dell'Emilia BO
26. **Mb bed & breakfast** — Anzola dell'Emilia
   - slug: `mb-bed-breakfast-anzola-dell-emilia`
   - indirizzo: Via delle Scuderie, 16/2, 40069 Zola Predosa BO
27. **San Vincenzo Rooms** — Anzola dell'Emilia
   - slug: `san-vincenzo-rooms-anzola-dell-emilia`
   - indirizzo: Via Stradellazzo, 8, 40011 Anzola dell'Emilia BO
28. **Santa Caterina 1604 Suites** — Anzola dell'Emilia
   - slug: `santa-caterina-1604-suites-anzola-dell-emilia`
   - indirizzo: Via Emilia, 78A, 40011 Anzola dell'Emilia BO
29. **Albergo Mancuso del Voison** — Aosta
   - slug: `albergo-mancuso-del-voison-aosta`
   - indirizzo: Chemin de Voison, 32, 11100 Aosta AO
30. **B&B Ambrosia** — Aosta
   - slug: `b-b-ambrosia-aosta`
   - indirizzo: Frazione Arpuilles, 94H, 11100 Aosta AO
31. **B&B HOTEL Milano Aosta** — Aosta
   - slug: `b-b-hotel-milano-aosta-aosta`
   - indirizzo: Piazza Duca d'Aosta, 16, 20124 Milano MI
32. **B&B Le Rêve Charmant** — Aosta
   - slug: `b-b-le-reve-charmant-aosta`
   - indirizzo: Via Marché-Vaudan, 6, 11100 Aosta AO
33. **Domus Antica Aosta** — Aosta
   - slug: `domus-antica-aosta-aosta`
   - indirizzo: Via Édouard Aubert, 56, 11100 Aosta AO
34. **HB Aosta Hotel** — Aosta
   - slug: `hb-aosta-hotel-aosta`
   - indirizzo: Via Malherbes, 18/A, 11100 Aosta AO
35. **Hotel Express Aosta** — Aosta
   - slug: `hotel-express-aosta-aosta`
   - indirizzo: L'Île-des-Lapins 33, Località Autoporto, 33, 11020 Pollein AO