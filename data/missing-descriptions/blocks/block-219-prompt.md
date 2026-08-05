# Blocco 219/500 — 35 strutture senza descrizione IT

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

1. **Olivia Balmes Hotel** — Barcelona
   - slug: `olivia-balmes-hotel-barcelona`
   - indirizzo: Carrer de Balmes, 117, 99, Eixample, 08008 Barcelona
2. **Oriente Atiram Hotels Barcelona** — Barcelona
   - slug: `oriente-atiram-hotels-barcelona-barcelona`
   - indirizzo: Rambla dels Caputxins, 45, Ciutat Vella, 08002 Barcelona
3. **Agriturismo Ai Monti** — Barcis
   - slug: `agriturismo-ai-monti-barcis`
   - indirizzo: Località Roppe, 8, 33080 Barcis PN
4. **Albergo Diffuso Lago di Barcis e Dolomiti Friulane** — Barcis
   - slug: `albergo-diffuso-lago-di-barcis-e-dolomiti-friula-barcis`
   - indirizzo: Via Giuseppe Garibaldi, 13, 33080 Barcis PN
5. **Albergo Regina** — Barcis
   - slug: `albergo-regina-barcis`
   - indirizzo: Piazzale della Puppa, 2, 33081 Piancavallo PN
6. **Albergo ristorante Alla Rosa** — Barcis
   - slug: `albergo-ristorante-alla-rosa-barcis`
   - indirizzo: Via Cavour, 1, 33080 Cimolais PN
7. **Albergo Ristorante Dolomiti Claut** — Barcis
   - slug: `albergo-ristorante-dolomiti-claut-barcis`
   - indirizzo: Via A. Giordani, 17, 33080 Claut PN
8. **La voce del tempo** — Barcis
   - slug: `la-voce-del-tempo-barcis`
   - indirizzo: Via Roma, 135, 33080 Erto e Casso PN
9. **Residence Belvedere - Barcis Holiday Rooms** — Barcis
   - slug: `residence-belvedere-barcis-holiday-rooms-barcis`
   - indirizzo: Via Tofane, 4, 33080 Barcis PN
10. **B&B Jasmyn Donnaz** — Bard
   - slug: `b-b-jasmyn-donnaz-bard`
   - indirizzo: de-Vaccaz 122, Località Ronc, 11020 Donnas AO
11. **B&B Vecchio Torchio** — Bard
   - slug: `b-b-vecchio-torchio-bard`
   - indirizzo: Via Vittorio Emanuele II, 28, 11020 Bard AO
12. **Chambres d'Hôtes casa Margherita** — Bard
   - slug: `chambres-d-hotes-casa-margherita-bard`
   - indirizzo: Frazione Tilly, 131, 11020 Tilly AO
13. **Dimora Gilles** — Bard
   - slug: `dimora-gilles-bard`
   - indirizzo: Via Vittorio Emanuele II, 81, 11020 Bard AO
14. **Hotel Ad Gallias** — Bard
   - slug: `hotel-ad-gallias-bard`
   - indirizzo: Via Vittorio Emanuele II, 5/7, 11020 Bard AO
15. **Hôtel Cavour et des Officiers** — Bard
   - slug: `hotel-cavour-et-des-officiers-bard`
   - indirizzo: Via Vittorio Emanuele II, 85, 11020 Bard AO
16. **Hotel Crabun** — Bard
   - slug: `hotel-crabun-bard`
   - indirizzo: Via Nazionale per Donnas, 3, 11026 Pont-Saint-Martin AO
17. **Hotel Posta** — Bard
   - slug: `hotel-posta-bard`
   - indirizzo: Duarf, 29, 11020 Issime AO
18. **La maison des vignerons b&b chambres d'hôtes** — Bard
   - slug: `la-maison-des-vignerons-b-b-chambres-d-hotes-bard`
   - indirizzo: Via Grand Vert, 224, 11020 Donnas AO
19. **Le Cœur du Pont** — Bard
   - slug: `le-c-ur-du-pont-bard`
   - indirizzo: Via Principe Tommaso, 104, 11020 Donnas AO
20. **Le Soleil** — Bard
   - slug: `le-soleil-bard`
   - indirizzo: Frazione Corliod, 9, 11020 Challand-Saint-Anselme AO
21. **Li Tzatagni** — Bard
   - slug: `li-tzatagni-bard`
   - indirizzo: Frazione Chateigne, 11020 Pontboset AO
22. **Lo Sougnet** — Bard
   - slug: `lo-sougnet-bard`
   - indirizzo: Fraz, Borgata Charvaz, 6, 11020 Hône AO
23. **MAB - Maison des Artistes Bard** — Bard
   - slug: `mab-maison-des-artistes-bard-bard`
   - indirizzo: Piazza Cavour, 3, 11020 Bard AO
24. **Ostello "Ou Crierel"** — Bard
   - slug: `ostello-ou-crierel-bard`
   - indirizzo: Località Fey, 2, 11020 Lillianes AO
25. **Riverside rooms** — Bard
   - slug: `riverside-rooms-bard`
   - indirizzo: località Trambesere, 11020 Pontboset AO
26. **Villa Sardino** — Bard
   - slug: `villa-sardino-bard`
   - indirizzo: Via Castello, 1, 10010 Settimo Vittone TO
27. **B&B I due Tigli** — Bardello con Malgesso e Bregano
   - slug: `b-b-i-due-tigli-bardello-con-malgesso-e-bregano`
   - indirizzo: Via Agostino Maretti, 39, 21028 Travedona-Monate VA
28. **B&B La Casa Rossa** — Bardello con Malgesso e Bregano
   - slug: `b-b-la-casa-rossa-bardello-con-malgesso-e-bregano`
   - indirizzo: Via Vignacce, 24, 21026 Gavirate VA
29. **Bed & Breakfast La Folaga** — Bardello con Malgesso e Bregano
   - slug: `bed-breakfast-la-folaga-bardello-con-malgesso-e-bregano`
   - indirizzo: Via Vignacce, 42/a, 21026 Gavirate VA
30. **Hotel Ristorante La Locanda** — Bardello con Malgesso e Bregano
   - slug: `hotel-ristorante-la-locanda-bardello-con-malgesso-e-bregano`
   - indirizzo: Piazza Garibaldi, 61, 21062 Cadrezzate con Osmate VA
31. **LA VIGNA - Agriturismo** — Bardello con Malgesso e Bregano
   - slug: `la-vigna-agriturismo-bardello-con-malgesso-e-bregano`
   - indirizzo: Via Campeggio, 257, 21009 Malgesso VA
32. **Marconi 11** — Bardello con Malgesso e Bregano
   - slug: `marconi-11-bardello-con-malgesso-e-bregano`
   - indirizzo: Via Marconi, 11, 21009 Bardello VA
33. **Sunset Hotel** — Bardello con Malgesso e Bregano
   - slug: `sunset-hotel-bardello-con-malgesso-e-bregano`
   - indirizzo: Via al Lido, 7, 21026 Gavirate VA
34. **Agriturismo Cergallina** — Bardi
   - slug: `agriturismo-cergallina-bardi`
   - indirizzo: Località Cergallina, 1, 29010 Vernasca PC
35. **Agriturismo e Ristorante Ca’ d’Alfieri** — Bardi
   - slug: `agriturismo-e-ristorante-ca-d-alfieri-bardi`
   - indirizzo: Località Predario, 29, 43032 Bardi PR