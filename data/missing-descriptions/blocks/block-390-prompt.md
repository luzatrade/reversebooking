# Blocco 390/500 — 35 strutture senza descrizione IT

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

1. **B&B A casa di Rosy** — Campobasso
   - slug: `b-b-a-casa-di-rosy-campobasso`
   - indirizzo: Viale XXIV Maggio, 157, 86100 Campobasso CB
2. **B&B Al Civico 49** — Campobasso
   - slug: `b-b-al-civico-49-campobasso`
   - indirizzo: Via Salita S. Paolo, 49, 86100 Campobasso CB
3. **Central Campobasso** — Campobasso
   - slug: `central-campobasso-campobasso`
   - indirizzo: Via Pisa, 27, 86100 Campobasso CB
4. **Hotel La Tavernetta - Ristorante Pizzeria** — Campobasso
   - slug: `hotel-la-tavernetta-ristorante-pizzeria-campobasso`
   - indirizzo: Pesco Farese, 9, 86025 Ripalimosani CB
5. **Hotel San Giorgio** — Campobasso
   - slug: `hotel-san-giorgio-campobasso`
   - indirizzo: Via Insorti d'Ungheria, 38, 86100 Campobasso CB
6. **Residence Vazzieri** — Campobasso
   - slug: `residence-vazzieri-campobasso`
   - indirizzo: V. L. Pirandello, 71/a, 86100 Campobasso CB
7. **Villa D'Evoli** — Campobasso
   - slug: `villa-d-evoli-campobasso`
   - indirizzo: Contrada Lacone, 22, 86010 Castropignano CB
8. **Villa Del Sole Inn B&B Residence** — Campobasso
   - slug: `villa-del-sole-inn-b-b-residence-campobasso`
   - indirizzo: Via Colle dell'Orso, 128/A, 86100 Campobasso CB
9. **Agriturismo Baglio Làuria** — Campobello di Licata
   - slug: `agriturismo-baglio-lauria-campobello-di-licata`
   - indirizzo: Contrada Cicccobriglio, 92023 Campobello di Licata AG
10. **Antica Dimora San Girolamo** — Campobello di Licata
   - slug: `antica-dimora-san-girolamo-campobello-di-licata`
   - indirizzo: Via Piano S. Girolamo, 20, 92027 Licata AG
11. **Azienda Agricola Mandranova** — Campobello di Licata
   - slug: `azienda-agricola-mandranova-campobello-di-licata`
   - indirizzo: SS 115, km 217, 92044 Palma di Montechiaro AG
12. **B&B Licata SottoLeStelle** — Campobello di Licata
   - slug: `b-b-licata-sottolestelle-campobello-di-licata`
   - indirizzo: Via Gaetano de pasquali, 16A, 92027 Licata AG
13. **B&b V G** — Campobello di Licata
   - slug: `b-b-v-g-campobello-di-licata`
   - indirizzo: ma la struttura si trova 50 metri piu avanti sulla stessa strada seguite la strada fino al cancello con insegna V&Gti92044, Via Canicatti, 81, 92044 Palma di Montechiaro AG
14. **Baia D'Oro Hotel** — Campobello di Licata
   - slug: `baia-d-oro-hotel-campobello-di-licata`
   - indirizzo: SS115, 92027 Licata AG
15. **Case Albergo Al Cortiletto** — Campobello di Licata
   - slug: `case-albergo-al-cortiletto-campobello-di-licata`
   - indirizzo: Via S. Maria, 46, 92027 Licata AG
16. **La casa di Francesca** — Campobello di Licata
   - slug: `la-casa-di-francesca-campobello-di-licata`
   - indirizzo: Via Rosa Balistreri, 33, 92023 Campobello di Licata AG
17. **Palazzo Bella** — Campobello di Licata
   - slug: `palazzo-bella-campobello-di-licata`
   - indirizzo: Via Umberto, 29, 92023 Campobello di Licata AG
18. **Zirafi affittacamere** — Campobello di Licata
   - slug: `zirafi-affittacamere-campobello-di-licata`
   - indirizzo: Via Dalmazia, 21, 92023 Campobello di Licata AG
19. **Althea Palace Hotel** — Campobello di Mazara
   - slug: `althea-palace-hotel-campobello-di-mazara`
   - indirizzo: Via Caduti di Nassirya, snc, 91022 Castelvetrano TP
20. **B&B - Casa Vacanza Da Mati** — Campobello di Mazara
   - slug: `b-b-casa-vacanza-da-mati-campobello-di-mazara`
   - indirizzo: Via Zara, 8, 91021 Campobello di Mazara TP
21. **B&BVillaMariaTrefontane(TP)** — Campobello di Mazara
   - slug: `b-bvillamariatrefontane-tp-campobello-di-mazara`
   - indirizzo: Via Piemonte, Via 140 Est, 10, 91021 Tre Fontane TP
22. **Baglio Eldama** — Campobello di Mazara
   - slug: `baglio-eldama-campobello-di-mazara`
   - indirizzo: Ss115, contrada mortelluzzi, km 5.6, 91022 Castelvetrano TP
23. **Berlingeri Resort** — Campobello di Mazara
   - slug: `berlingeri-resort-campobello-di-mazara`
   - indirizzo: C.Da Berlingeri, 91026 Mazara del Vallo TP
24. **casa Bon Bon** — Campobello di Mazara
   - slug: `casa-bon-bon-campobello-di-mazara`
   - indirizzo: Via 50, n° 8, 91022 Triscina TP
25. **Centro - Archimede Rooms** — Campobello di Mazara
   - slug: `centro-archimede-rooms-campobello-di-mazara`
   - indirizzo: Via Ciullo D'Alcamo, 11, 91022 Castelvetrano TP
26. **Fratelli Clemente** — Campobello di Mazara
   - slug: `fratelli-clemente-campobello-di-mazara`
   - indirizzo: Via Milazzo, 55, 91022 Castelvetrano TP
27. **Hotel Admeto** — Campobello di Mazara
   - slug: `hotel-admeto-campobello-di-mazara`
   - indirizzo: Via Palinuro, 3, 91022 Marinella TP
28. **Hotel Club Ramuxara** — Campobello di Mazara
   - slug: `hotel-club-ramuxara-campobello-di-mazara`
   - indirizzo: Via Tonnara Fontana, 180, 91021 Campobello di Mazara TP
29. **Hotel La Rosa** — Campobello di Mazara
   - slug: `hotel-la-rosa-campobello-di-mazara`
   - indirizzo: Via Pigafetta, 2, 91022 Marinella TP
30. **Hotel Miramare Garzia - Albergo vista mare, Parco Archeologico Selinunte, Castelvetrano Trapani Sicilia** — Campobello di Mazara
   - slug: `hotel-miramare-garzia-albergo-vista-mare-parco-a-campobello-di-mazara`
   - indirizzo: Via Pigafetta, 2, 91022 Selinunte, Castelvetrano TP
31. **La Terrazza Sul Mar Mediterraneo** — Campobello di Mazara
   - slug: `la-terrazza-sul-mar-mediterraneo-campobello-di-mazara`
   - indirizzo: Via degli Argonauti, 24, 91022 Marinella TP
32. **Lu mé** — Campobello di Mazara
   - slug: `lu-me-campobello-di-mazara`
   - indirizzo: Via Paolo Borsellino, 5, 91026 Mazara del Vallo TP
33. **Mangia's Selinunte Resort** — Campobello di Mazara
   - slug: `mangia-s-selinunte-resort-campobello-di-mazara`
   - indirizzo: Contrada Belice di Mare, 91022 Selinunte TP
34. **Selinunte Boutique Hotel** — Campobello di Mazara
   - slug: `selinunte-boutique-hotel-campobello-di-mazara`
   - indirizzo: Via Giovanni Caboto, 118, 91022 Marinella TP
35. **Triscinamare** — Campobello di Mazara
   - slug: `triscinamare-campobello-di-mazara`
   - indirizzo: Via del Mediterraneo, 233, 91022 Castelvetrano TP