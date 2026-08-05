# Blocco 236/500 — 35 strutture senza descrizione IT

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

1. **Alpi del Mare** — Bastia Mondov�
   - slug: `alpi-del-mare-bastia-mondov`
   - indirizzo: Piazza Mellano, 15, 12084 Mondovì CN
2. **B&B Bricco della Guardia** — Bastia Mondov�
   - slug: `b-b-bricco-della-guardia-bastia-mondov`
   - indirizzo: Via A. Borsarelli, 37/a, 12080 Briaglia CN
3. **B&B Bricco Fiore** — Bastia Mondov�
   - slug: `b-b-bricco-fiore-bastia-mondov`
   - indirizzo: Via Niella Tanaro, 5, 12080 Briaglia CN
4. **B&B HOTELS Park Hotel Mondovì** — Bastia Mondov�
   - slug: `b-b-hotels-park-hotel-mondovi-bastia-mondov`
   - indirizzo: Via Pietro Delvecchio, 2, 12084 Mondovì CN
5. **B&B Torre in Langa** — Bastia Mondov�
   - slug: `b-b-torre-in-langa-bastia-mondov`
   - indirizzo: Via Garibaldi, 67, 12061 Carrù CN
6. **B&B Vista Sulle Langhe** — Bastia Mondov�
   - slug: `b-b-vista-sulle-langhe-bastia-mondov`
   - indirizzo: Via Roma, 1, 12061 Carrù CN
7. **Bed e Breakfast Casa La Preziosa Mondovì** — Bastia Mondov�
   - slug: `bed-e-breakfast-casa-la-preziosa-mondovi-bastia-mondov`
   - indirizzo: Str. Rifreddo, 67, 12084 Rifreddo CN
8. **ca' del magu** — Bastia Mondov�
   - slug: `ca-del-magu-bastia-mondov`
   - indirizzo: via valmoretto, 9, 12080 San Michele Mondovì CN
9. **Casa Calleri** — Bastia Mondov�
   - slug: `casa-calleri-bastia-mondov`
   - indirizzo: Via A. Borsarelli, 6, 12080 Briaglia CN
10. **CASA REGINA MONTIS REGALIS** — Bastia Mondov�
   - slug: `casa-regina-montis-regalis-bastia-mondov`
   - indirizzo: Piazza Carlo Emanuele, 4, 12080 Vicoforte CN
11. **Duchessa Margherita Chateau & Hotel** — Bastia Mondov�
   - slug: `duchessa-margherita-chateau-hotel-bastia-mondov`
   - indirizzo: Via S. Rocco, 29, 12080 Vicoforte CN
12. **Hotel Portici** — Bastia Mondov�
   - slug: `hotel-portici-bastia-mondov`
   - indirizzo: Piazza Carlo Emanuele, 47, 12080 Vicoforte Santuario CN
13. **Hotel Ristorante Palazzo Di Mezzo** — Bastia Mondov�
   - slug: `hotel-ristorante-palazzo-di-mezzo-bastia-mondov`
   - indirizzo: Via Garibaldi, 4, 12061 Carrù CN
14. **I Perticali** — Bastia Mondov�
   - slug: `i-perticali-bastia-mondov`
   - indirizzo: Via Generale Uberto Revelli, 2, 12061 Carrù CN
15. **La Rocca Residence** — Bastia Mondov�
   - slug: `la-rocca-residence-bastia-mondov`
   - indirizzo: VICOLO DELLA ROCCA, 8, 12061 Carrù CN
16. **Le Camere del Vascello d'Oro** — Bastia Mondov�
   - slug: `le-camere-del-vascello-d-oro-bastia-mondov`
   - indirizzo: Via Ospedale, 38, 12061 Carrù CN
17. **B&B Camere Mariella** — Bastia Umbra
   - slug: `b-b-camere-mariella-bastia-umbra`
   - indirizzo: Via Mezzo Miglio, 06083 Bastia Umbra PG
18. **Camere I Monelli** — Bastia Umbra
   - slug: `camere-i-monelli-bastia-umbra`
   - indirizzo: Via Campiglione, 23, 06181 Assisi PG
19. **Camere la Basilica** — Bastia Umbra
   - slug: `camere-la-basilica-bastia-umbra`
   - indirizzo: Viale Patrono d'Italia, 17, 06181 Assisi PG
20. **Favorita Food&Wine Resort** — Bastia Umbra
   - slug: `favorita-food-wine-resort-bastia-umbra`
   - indirizzo: Via A. Costa, 18/20, 06083 Bastia Umbra PG
21. **Green Village Assisi - Hotel & Camping e Area di Sosta** — Bastia Umbra
   - slug: `green-village-assisi-hotel-camping-e-area-di-sos-bastia-umbra`
   - indirizzo: Via Campiglione, 110, 06181 Assisi PG
22. **Hotel Campiglione** — Bastia Umbra
   - slug: `hotel-campiglione-bastia-umbra`
   - indirizzo: Via Campiglione, 11/2, 06081 Assisi PG
23. **Hotel Cristallo Assisi** — Bastia Umbra
   - slug: `hotel-cristallo-assisi-bastia-umbra`
   - indirizzo: Via Los Angeles, 195, 06083 Assisi PG
24. **Hotel Il Cammino di Francesco** — Bastia Umbra
   - slug: `hotel-il-cammino-di-francesco-bastia-umbra`
   - indirizzo: Via Rodolfo Morandi, 2/4, 06083 Ospedalicchio PG
25. **Hotel Mom - Fraz.S.M.degli Angeli** — Bastia Umbra
   - slug: `hotel-mom-fraz-s-m-degli-angeli-bastia-umbra`
   - indirizzo: P.za Dante Alighieri, 3, 06181 Santa Maria degli Angeli PG
26. **Hotel Porta Nuova** — Bastia Umbra
   - slug: `hotel-porta-nuova-bastia-umbra`
   - indirizzo: Via, Viale Umberto I, 21, 06181 Assisi PG
27. **Hotel Santa Lucia** — Bastia Umbra
   - slug: `hotel-santa-lucia-bastia-umbra`
   - indirizzo: Via Ticino, 10, 06083 Bastia Umbra PG
28. **Hotel Turim** — Bastia Umbra
   - slug: `hotel-turim-bastia-umbra`
   - indirizzo: Via Campiglione, 3, 06083 Bastia Umbra PG
29. **Hotel Umbra** — Bastia Umbra
   - slug: `hotel-umbra-bastia-umbra`
   - indirizzo: Vicolo degli Archi, 6, 06181 Assisi PG
30. **Il Casale della Fornace** — Bastia Umbra
   - slug: `il-casale-della-fornace-bastia-umbra`
   - indirizzo: Via Enrico Mattei, 4/6, 06083 Bastia Umbra PG
31. **Le camere di Aisa** — Bastia Umbra
   - slug: `le-camere-di-aisa-bastia-umbra`
   - indirizzo: Via S. Pio X, 10, 06181 Santa Maria degli Angeli PG
32. **MiRa Assisi** — Bastia Umbra
   - slug: `mira-assisi-bastia-umbra`
   - indirizzo: Via della Libertà, 66, 06083 Bastia Umbra PG
33. **P&P Assisi Camere** — Bastia Umbra
   - slug: `p-p-assisi-camere-bastia-umbra`
   - indirizzo: Via Fosse Ardeatine, 26, 06083 Bastia Umbra PG
34. **Trattoria Santucci** — Bastia Umbra
   - slug: `trattoria-santucci-bastia-umbra`
   - indirizzo: Viale Patrono d'Italia, 40, 06181 Santa Maria degli Angeli PG
35. **Agriturismo Casa Pelizza** — Bastida Pancarana
   - slug: `agriturismo-casa-pelizza-bastida-pancarana`
   - indirizzo: Via Carona, 16, 27050 Bastida Pancarana PV