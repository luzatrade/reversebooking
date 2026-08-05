# Blocco 23/500 — 35 strutture senza descrizione IT

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

1. **Motel Europa** — Adro
   - slug: `motel-europa-adro`
   - indirizzo: V.le Europa, 6, 25036 Palazzolo sull'Oglio BS
2. **Relaisfranciacorta** — Adro
   - slug: `relaisfranciacorta-adro`
   - indirizzo: Via A. Manzoni, 29, 25040 Colombaro BS
3. **Rosa dei Venti** — Adro
   - slug: `rosa-dei-venti-adro`
   - indirizzo: Via Stazione Vecchia, 97, 25050 Provaglio d'Iseo BS
4. **Solive Franciacorta** — Adro
   - slug: `solive-franciacorta-adro`
   - indirizzo: Via Calvarole, 15, 25040 Corte Franca BS
5. **Stop** — Adro
   - slug: `stop-adro`
   - indirizzo: Via Sarnico, 94, 24060 Predore BG
6. **Agriturismo "Ai Progni "** — Affi
   - slug: `agriturismo-ai-progni-affi`
   - indirizzo: Via Progni, 7, 37010 Affi VR
7. **Agriturismo Riondel** — Affi
   - slug: `agriturismo-riondel-affi`
   - indirizzo: Località Coletto, 1, 37010 Affi VR
8. **B&B Da Patty** — Affi
   - slug: `b-b-da-patty-affi`
   - indirizzo: Via Don Gnocchi, 3, 37010 Affi VR
9. **B&B HOTEL Affi Lago di Garda** — Affi
   - slug: `b-b-hotel-affi-lago-di-garda-affi`
   - indirizzo: Via Crivellin, 1A, 37010 Affi VR
10. **B&B La Corte** — Affi
   - slug: `b-b-la-corte-affi`
   - indirizzo: Caorsa, 37010 Affi VR
11. **B&B La Magnolia** — Affi
   - slug: `b-b-la-magnolia-affi`
   - indirizzo: Via Beccherle Ingegner, 618, 37013 Ceredello VR
12. **Best Western Hotel Garda** — Affi
   - slug: `best-western-hotel-garda-affi`
   - indirizzo: Via G. Carducci, 2B, 37010 Affi VR
13. **Borgo Romantico Green Relais** — Affi
   - slug: `borgo-romantico-green-relais-affi`
   - indirizzo: Via Preela Poggi, 21, 37010 Cavaion Veronese VR
14. **Corte Castello** — Affi
   - slug: `corte-castello-affi`
   - indirizzo: Via Incaffi, 11, 37010 Affi VR
15. **Corte Impero Hotel & Restaurant** — Affi
   - slug: `corte-impero-hotel-restaurant-affi`
   - indirizzo: Via Pozzo dell'Amore, 35, 37010 Affi VR
16. **Eurocongressi Hotel** — Affi
   - slug: `eurocongressi-hotel-affi`
   - indirizzo: Via Lionello Fiumi, 24, 37010 Cavaion Veronese VR
17. **Hotel al Sole - ENJOY HOLIDAY** — Affi
   - slug: `hotel-al-sole-enjoy-holiday-affi`
   - indirizzo: Via Montesaline, 37010 Cavaion Veronese VR
18. **Hotel Andreis** — Affi
   - slug: `hotel-andreis-affi`
   - indirizzo: Hotel Andreis, Via Berengario, 26, 37010 Cavaion Veronese VR
19. **Hotel Fortuna** — Affi
   - slug: `hotel-fortuna-affi`
   - indirizzo: Via Costabella, 17/19, 37010 Albaré Stazione VR
20. **HOTEL La Dolce Vita** — Affi
   - slug: `hotel-la-dolce-vita-affi`
   - indirizzo: Via Ca' Nove, 9, 37010 Cavaion Veronese VR
21. **Hotel Valbella** — Affi
   - slug: `hotel-valbella-affi`
   - indirizzo: Via S. Colombano, 38, 37011 Bardolino VR
22. **Il Pigno** — Affi
   - slug: `il-pigno-affi`
   - indirizzo: Via Pigno, 37010 Affi VR
23. **Le Cocche** — Affi
   - slug: `le-cocche-affi`
   - indirizzo: Località Cocche, 2, 37010 Affi VR
24. **Relais San Michele** — Affi
   - slug: `relais-san-michele-affi`
   - indirizzo: Via Barbuzzola, 6, 37010 Rivoli Veronese VR
25. **Residence Fontanelle** — Affi
   - slug: `residence-fontanelle-affi`
   - indirizzo: Località Fontanelle, 2A, 37010 Cavaion Veronese VR
26. **Affittacamere Le Ginestre Colleferro** — Affile
   - slug: `affittacamere-le-ginestre-colleferro-affile`
   - indirizzo: Via Casilina, km 48, 00034 Colleferro RM
27. **Agriturismo Colle Tocci Subiaco** — Affile
   - slug: `agriturismo-colle-tocci-subiaco-affile`
   - indirizzo: Contrada Castagnola, 8, 00028 Subiaco RM
28. **Atlantic Park Hotel - Spa - Ristorante - Centro benessere - Piscina - Sala convegni** — Affile
   - slug: `atlantic-park-hotel-spa-ristorante-centro-beness-affile`
   - indirizzo: Via Prenestina Sud, 37, 03014 Fiuggi FR
29. **B&B Valmontone MagicLand - Casa del Girasole** — Affile
   - slug: `b-b-valmontone-magicland-casa-del-girasole-affile`
   - indirizzo: Via Luigi Petroselli, 50/int.2, 00030 Genazzano RM
30. **Bed and Breakfast - La Panarda** — Affile
   - slug: `bed-and-breakfast-la-panarda-affile`
   - indirizzo: W3FV+QV, 00028 Subiaco RM
31. **Bed and Breakfast Casa Rosella - Country House** — Affile
   - slug: `bed-and-breakfast-casa-rosella-country-house-affile`
   - indirizzo: Via Fontana Fresca, n° 25, 00030 Bellegra RM
32. **Belvedere Ristorante B&B** — Affile
   - slug: `belvedere-ristorante-b-b-affile`
   - indirizzo: Via dei Monasteri, 33, 00028 Subiaco RM
33. **Civico69 - Bar Pasticceria Bed&Breakfast** — Affile
   - slug: `civico69-bar-pasticceria-bed-breakfast-affile`
   - indirizzo: Corso Cesare Battisti, 69, 00028 Subiaco RM
34. **Foresteria del Monastero di S. Scolastica** — Affile
   - slug: `foresteria-del-monastero-di-s-scolastica-affile`
   - indirizzo: Piazzale Santa Scolastica, 1, 00028 Subiaco RM
35. **Hotel Cremona Ristorante Bar** — Affile
   - slug: `hotel-cremona-ristorante-bar-affile`
   - indirizzo: Via Palmiro Togliatti, 19, 00030 Genazzano RM