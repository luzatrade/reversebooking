# Blocco 409/500 — 35 strutture senza descrizione IT

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

1. **Hotel del Sole** — Canosa di Puglia
   - slug: `hotel-del-sole-canosa-di-puglia`
   - indirizzo: Via Manfredonia, 259, 76016 Margherita di Savoia BT
2. **L'antico Palazzo** — Canosa di Puglia
   - slug: `l-antico-palazzo-canosa-di-puglia`
   - indirizzo: Via Ettore Carafa, 43/45, 76012 Canosa di Puglia BT
3. **La Dea Busa** — Canosa di Puglia
   - slug: `la-dea-busa-canosa-di-puglia`
   - indirizzo: Via Santa Lucia, 41, 76012 Canosa di Puglia BT
4. **La Perla delle Saline** — Canosa di Puglia
   - slug: `la-perla-delle-saline-canosa-di-puglia`
   - indirizzo: Via Armellina, 16, 76016 Margherita di Savoia BT
5. **Lunà - Le Dimore -** — Canosa di Puglia
   - slug: `luna-le-dimore-canosa-di-puglia`
   - indirizzo: Vico Nicola Nicolini, 14, 76012 Canosa di Puglia BT
6. **Luxury B&B IL Sogno** — Canosa di Puglia
   - slug: `luxury-b-b-il-sogno-canosa-di-puglia`
   - indirizzo: Via Taormina, 19, 71042 Cerignola FG
7. **Palazzo Rossi suite** — Canosa di Puglia
   - slug: `palazzo-rossi-suite-canosa-di-puglia`
   - indirizzo: Piazza Vincenzo Sinesi, 4, 76012 Canosa di Puglia BT
8. **SOTTOSOPRA** — Canosa di Puglia
   - slug: `sottosopra-canosa-di-puglia`
   - indirizzo: Via Fratelli Bandiera, 4, 76016 Margherita di Savoia BT
9. **Tenuta San Francesco** — Canosa di Puglia
   - slug: `tenuta-san-francesco-canosa-di-puglia`
   - indirizzo: S.S. 16 km. 736, 76015 Trinitapoli BT
10. **Agriturismo La Capezzagna** — Canosa Sannita
   - slug: `agriturismo-la-capezzagna-canosa-sannita`
   - indirizzo: Via Madonna del Rosario, 15, 66010 Ripa Teatina CH
11. **Agriturismo Montupoli** — Canosa Sannita
   - slug: `agriturismo-montupoli-canosa-sannita`
   - indirizzo: Via Montupoli Avenna, 99, 66010 Miglianico CH
12. **B&B La Casa Del Palombaro** — Canosa Sannita
   - slug: `b-b-la-casa-del-palombaro-canosa-sannita`
   - indirizzo: 66026 Villa Deo-villa Panaro CH
13. **B&B La Finestra Sui Tetti** — Canosa Sannita
   - slug: `b-b-la-finestra-sui-tetti-canosa-sannita`
   - indirizzo: Vico 7 S.M.Maggiore, 9, 66034 Lanciano CH
14. **B&B Primavera** — Canosa Sannita
   - slug: `b-b-primavera-canosa-sannita`
   - indirizzo: Via S. Leonardo, 11, 66010 Canosa Sannita CH
15. **Campeggio Torre Mucchia** — Canosa Sannita
   - slug: `campeggio-torre-mucchia-canosa-sannita`
   - indirizzo: 66026 Ortona CH, Italia
16. **Casale905** — Canosa Sannita
   - slug: `casale905-canosa-sannita`
   - indirizzo: SS538, 84, 66026 Crecchio CH
17. **Collina fiorita** — Canosa Sannita
   - slug: `collina-fiorita-canosa-sannita`
   - indirizzo: Contrada S. Biagio, 66010 Tollo CH
18. **Hotel La Bussola** — Canosa Sannita
   - slug: `hotel-la-bussola-canosa-sannita`
   - indirizzo: Lido Riccio, 66026 Ortona CH
19. **Hotel Mara** — Canosa Sannita
   - slug: `hotel-mara-canosa-sannita`
   - indirizzo: Lido Riccio, 66026 Ortona CH
20. **Magnificat Hotel&Resort** — Canosa Sannita
   - slug: `magnificat-hotel-resort-canosa-sannita`
   - indirizzo: Via Verso Tollo, 232/b, 66010 Canosa Sannita CH
21. **Villa Marusia** — Canosa Sannita
   - slug: `villa-marusia-canosa-sannita`
   - indirizzo: Contrada Santa Lucia, 3b, 66010 Tollo CH
22. **Agri b&b Lou Col, Canosio (CN)** — Canosio
   - slug: `agri-b-b-lou-col-canosio-cn-canosio`
   - indirizzo: Via, 12020 Colle San Giovanni CN
23. **Albergo diffuso Ceaglio** — Canosio
   - slug: `albergo-diffuso-ceaglio-canosio`
   - indirizzo: Frazione Vernetti, 5, 12020 Marmora CN
24. **Albergo La Pace** — Canosio
   - slug: `albergo-la-pace-canosio`
   - indirizzo: Via IV Novembre, 37, 12027 Pradleves CN
25. **Cà Virasoleh** — Canosio
   - slug: `ca-virasoleh-canosio`
   - indirizzo: Borgata Bedale, 18, 12020 Macra CN
26. **Camping Cianabie** — Canosio
   - slug: `camping-cianabie-canosio`
   - indirizzo: Borgata Paschero, 50, 12020 Sampeyre CN
27. **Pension La Marmu** — Canosio
   - slug: `pension-la-marmu-canosio`
   - indirizzo: Via Roma, 18, 12020 Marmora CN
28. **B&B da Max e Lory** — Canossa
   - slug: `b-b-da-max-e-lory-canossa`
   - indirizzo: Località Le Rette, 43024 La Villa PR
29. **B&B Il Tempo Ritrovato** — Canossa
   - slug: `b-b-il-tempo-ritrovato-canossa`
   - indirizzo: Località Rossena, 85, 42026 Rossena RE
30. **Bar - Hotel Vignale** — Canossa
   - slug: `bar-hotel-vignale-canossa`
   - indirizzo: Strada Pedemontana, 73, 43029 Vignale PR
31. **Dimidium B&B in Emilia** — Canossa
   - slug: `dimidium-b-b-in-emilia-canossa`
   - indirizzo: Via Selvapiana, 99, 42026 Canossa RE
32. **Villa Marconi B&B** — Canossa
   - slug: `villa-marconi-b-b-canossa`
   - indirizzo: Località Castello di Canossa, 5, 42026 Canossa RE
33. **Agripark** — Cansano
   - slug: `agripark-cansano`
   - indirizzo: Strada Comunale della Difesa, 1, 67030 Cansano AQ
34. **Hotel Natros** — Cansano
   - slug: `hotel-natros-cansano`
   - indirizzo: Piazza Municipio, 4, 67030 Rocca Pia AQ
35. **Villetta relax Cansano** — Cansano
   - slug: `villetta-relax-cansano-cansano`
   - indirizzo: Via Vicenne, 67030 Cansano AQ