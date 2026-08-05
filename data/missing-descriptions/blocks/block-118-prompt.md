# Blocco 118/500 — 35 strutture senza descrizione IT

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

1. **Affittacamere Lo verdze** — Antey-Saint-Andr�
   - slug: `affittacamere-lo-verdze-antey-saint-andr`
   - indirizzo: Frazione Nozon, 80, 11020 Torgnon AO
2. **Agriturismo Au Jardin Fleuri** — Antey-Saint-Andr�
   - slug: `agriturismo-au-jardin-fleuri-antey-saint-andr`
   - indirizzo: Frazione, Località Bourg, 7, 11020 Antey-Saint-André AO
3. **Agriturismo La Clochette - dormire a Torgnon** — Antey-Saint-Andr�
   - slug: `agriturismo-la-clochette-dormire-a-torgnon-antey-saint-andr`
   - indirizzo: Frazione Nozon, 90/75, 11020 Torgnon AO
4. **Albergo la Grolla, ristorante, pizzeria bar** — Antey-Saint-Andr�
   - slug: `albergo-la-grolla-ristorante-pizzeria-bar-antey-saint-andr`
   - indirizzo: frazione filey 41 frazione filey, Località Filey, 41A, 11020 Antey-Saint-André AO
5. **Albergo Maison Tissiere** — Antey-Saint-Andr�
   - slug: `albergo-maison-tissiere-antey-saint-andr`
   - indirizzo: Frazione Petit Antey, 9, Località Petit Antey, 9, 11020 Antey-Saint-André AO
6. **B&B Miravalle** — Antey-Saint-Andr�
   - slug: `b-b-miravalle-antey-saint-andr`
   - indirizzo: Località Lillaz, 1a, 11020 Antey-Saint-André AO
7. **DalaiLama Village** — Antey-Saint-Andr�
   - slug: `dalailama-village-antey-saint-andr`
   - indirizzo: Località Promiod, 1B, 11024 Châtillon AO
8. **Hotel des Roses** — Antey-Saint-Andr�
   - slug: `hotel-des-roses-antey-saint-andr`
   - indirizzo: Localita' Poutaz, 5, 11020 Antey-Saint-André AO
9. **Hotel du Soleil** — Antey-Saint-Andr�
   - slug: `hotel-du-soleil-antey-saint-andr`
   - indirizzo: Piazza Frutaz, 30, 11020 Mongnod AO
10. **Hotel Filey** — Antey-Saint-Andr�
   - slug: `hotel-filey-antey-saint-andr`
   - indirizzo: Località Filey, 4, 11020 Antey-Saint-André AO
11. **Jour et Nuit Gorret Katia** — Antey-Saint-Andr�
   - slug: `jour-et-nuit-gorret-katia-antey-saint-andr`
   - indirizzo: Frazione Verney, 2, 11020 Torgnon AO
12. **La Gran Becca Residence** — Antey-Saint-Andr�
   - slug: `la-gran-becca-residence-antey-saint-andr`
   - indirizzo: Loc, Località Champagne, 20, 11020 Antey-Saint-André AO
13. **Lo Barba** — Antey-Saint-Andr�
   - slug: `lo-barba-antey-saint-andr`
   - indirizzo: Località Lillaz, 8, 11020 Antey-Saint-André AO
14. **Maison du Tatà** — Antey-Saint-Andr�
   - slug: `maison-du-tata-antey-saint-andr`
   - indirizzo: Località Ruvère, 22, 11020 Antey-Saint-André AO
15. **Pensione Monte Cervino** — Antey-Saint-Andr�
   - slug: `pensione-monte-cervino-antey-saint-andr`
   - indirizzo: Località Ruvère, 3, 11020 Antey-Saint-André AO
16. **Relais du Foyer** — Antey-Saint-Andr�
   - slug: `relais-du-foyer-antey-saint-andr`
   - indirizzo: Località Panorama, 37, 11024 Châtillon AO
17. **Residence Beau Séjour** — Antey-Saint-Andr�
   - slug: `residence-beau-sejour-antey-saint-andr`
   - indirizzo: Località Champagne, 25, 11020 Antey-Saint-André AO
18. **Residence Bellevue** — Antey-Saint-Andr�
   - slug: `residence-bellevue-antey-saint-andr`
   - indirizzo: Località Fiernaz, 27, 11020 Fiernaz AO
19. **Residence Covalou** — Antey-Saint-Andr�
   - slug: `residence-covalou-antey-saint-andr`
   - indirizzo: Località Covalou, SR 46 della Valtournenche, 11020 Antey-Saint-Andrè AO
20. **Villaggio Turistico Camping Cervino** — Antey-Saint-Andr�
   - slug: `villaggio-turistico-camping-cervino-antey-saint-andr`
   - indirizzo: Località Nuarsaz, 26, 11020 Antey-Saint-André AO
21. **AgriQuartuccio b&b/Piscina salata** — Anticoli Corrado
   - slug: `agriquartuccio-b-b-piscina-salata-anticoli-corrado`
   - indirizzo: Strada Provinciale del Cavaliere, 67063 Oricola AQ
22. **Agriresort La Cerra** — Anticoli Corrado
   - slug: `agriresort-la-cerra-anticoli-corrado`
   - indirizzo: Strada Di San Gregorio Da Sassola, km 6, 800, 00019 Tivoli RM
23. **Agriturismo Al Giovenzano** — Anticoli Corrado
   - slug: `agriturismo-al-giovenzano-anticoli-corrado`
   - indirizzo: Strada Provinciale Sambuci Cerreto, 00020 Ciciliano RM
24. **Al Cavaliere Ristorante Albergo** — Anticoli Corrado
   - slug: `al-cavaliere-ristorante-albergo-anticoli-corrado`
   - indirizzo: Via Tiburtina Valeria km 67,200, 67063 Oricola AQ
25. **Al Seminario** — Anticoli Corrado
   - slug: `al-seminario-anticoli-corrado`
   - indirizzo: Via Teobaldi, 2, 00019 Tivoli RM
26. **Bed and Breakfast Villa d'Este** — Anticoli Corrado
   - slug: `bed-and-breakfast-villa-d-este-anticoli-corrado`
   - indirizzo: Via Boselli, 14, 00019 Tivoli RM
27. **Hotel Ristorante e centro sportivo Le Sequoie** — Anticoli Corrado
   - slug: `hotel-ristorante-e-centro-sportivo-le-sequoie-anticoli-corrado`
   - indirizzo: Via Tiburtina Valeria, 67061 Carsoli AQ
28. **La Giada** — Anticoli Corrado
   - slug: `la-giada-anticoli-corrado`
   - indirizzo: Vicolo del Duomo, 1, 00019 Tivoli RM
29. **Le Ville Tivoli - Suites, Gregoriana, Vesta Alloggio Turistico** — Anticoli Corrado
   - slug: `le-ville-tivoli-suites-gregoriana-vesta-alloggio-anticoli-corrado`
   - indirizzo: Viale Trieste, 45, 00019 Tivoli RM
30. **Agriturismo IL FRA'** — Antignano
   - slug: `agriturismo-il-fra-antignano`
   - indirizzo: Str. Pocola, 101, 14016 Tigliole AT
31. **Antico Tralcio Bed and Breakfast e Home Restaurant** — Antignano
   - slug: `antico-tralcio-bed-and-breakfast-e-home-restaura-antignano`
   - indirizzo: Via Malabaila, 1, 14010 Antignano AT
32. **B&B Al Canei** — Antignano
   - slug: `b-b-al-canei-antignano`
   - indirizzo: Frazione, Str. Variglie, 69, 14100 Asti AT
33. **B&B Cascina Bellavista Tigliole** — Antignano
   - slug: `b-b-cascina-bellavista-tigliole-antignano`
   - indirizzo: Str. Remondini, 21, 14016 Tigliole AT
34. **Ca' Nadin** — Antignano
   - slug: `ca-nadin-antignano`
   - indirizzo: Frazione Gorzano, 11, 14015 Gorzano AT
35. **Cascina Bricchetto** — Antignano
   - slug: `cascina-bricchetto-antignano`
   - indirizzo: Loc. Bramairate 161/A, 14100 Asti AT