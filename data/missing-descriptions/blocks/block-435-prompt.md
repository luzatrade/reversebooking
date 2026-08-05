# Blocco 435/500 — 35 strutture senza descrizione IT

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

1. **B&B Crisalide** — Card�
   - slug: `b-b-crisalide-card`
   - indirizzo: Via Sant'Antonio, 14, 72015 Fasano BR
2. **B&B Guest House Ai Cappuccini, Noicattaro Ba** — Card�
   - slug: `b-b-guest-house-ai-cappuccini-noicattaro-ba-card`
   - indirizzo: Via Cappuccini, 60, Via Antonio Salandra, 4, 70016 Noicattaro BA
3. **B&B Relais Del Senatore** — Card�
   - slug: `b-b-relais-del-senatore-card`
   - indirizzo: Via S Benedetto, 33, 70044 Polignano a Mare BA
4. **Bed & Breakfast di Nonna Pina** — Card�
   - slug: `bed-breakfast-di-nonna-pina-card`
   - indirizzo: Via Leuca, 5, 72015 Torre Canne BR
5. **Bed & Breakfast Villa Cassandra** — Card�
   - slug: `bed-breakfast-villa-cassandra-card`
   - indirizzo: Via Turi, 54, 70013 Castellana Grotte BA
6. **Dameta B&B** — Card�
   - slug: `dameta-b-b-card`
   - indirizzo: Via Mancini, 18, 70014 Conversano BA
7. **Affittacamere Coletti** — Careggine
   - slug: `affittacamere-coletti-careggine`
   - indirizzo: Via Pergola, 20A, 55030 Roggio LU
8. **BB Daniela - Camere - Appartamento** — Careggine
   - slug: `bb-daniela-camere-appartamento-careggine`
   - indirizzo: Località Pianacce, 55033 Castiglione di Garfagnana LU
9. **Ceragetta Resort - BB Case vacanze Lago Isola Santa (chat sul sito)** — Careggine
   - slug: `ceragetta-resort-bb-case-vacanze-lago-isola-sant-careggine`
   - indirizzo: Località Salceta, 55030 Careggine LU
10. **Rifugio Alpi Apuane** — Careggine
   - slug: `rifugio-alpi-apuane-careggine`
   - indirizzo: Via del Taccino, 9, 55030 Careggine LU
11. **B&B Al Castel** — Carema
   - slug: `b-b-al-castel-carema`
   - indirizzo: Via Castello, 8, 11026 Pont-Saint-Martin AO
12. **Bed & Breakfast La Casa Antica Pont-Saint-Martin (AO)** — Carema
   - slug: `bed-breakfast-la-casa-antica-pont-saint-martin-a-carema`
   - indirizzo: Via Sant'Erasmo, 22, 11026 Pont-Saint-Martin AO
13. **Bed and Breakfast Soffio di Vento** — Carema
   - slug: `bed-and-breakfast-soffio-di-vento-carema`
   - indirizzo: Località Tour d'Hereraz, 11, 11020 Perloz AO
14. **d'ARTEmisia Chambre d'hôtes** — Carema
   - slug: `d-artemisia-chambre-d-hotes-carema`
   - indirizzo: Via Nazionale, 63, 11026 Pont-Saint-Martin AO
15. **Hotel Carla** — Carema
   - slug: `hotel-carla-carema`
   - indirizzo: Via Nazionale, 106, 11026 Pont-Saint-Martin AO
16. **Il Falco e la Volpe** — Carema
   - slug: `il-falco-e-la-volpe-carema`
   - indirizzo: Località Campiglie, 10010 Settimo Vittone TO
17. **Locanda Ristoro Maletto** — Carema
   - slug: `locanda-ristoro-maletto-carema`
   - indirizzo: Alpe Maletto, 10010 Carema TO
18. **Mini Hotel **** — Carema
   - slug: `mini-hotel-carema`
   - indirizzo: Via Umberto I', 5, 10010 Quincinetto TO
19. **San Martin Holidays Home** — Carema
   - slug: `san-martin-holidays-home-carema`
   - indirizzo: Via Sarus, 1/A, 11026 Pont-Saint-Martin AO
20. **B&B del Carlì** — Carenno
   - slug: `b-b-del-carli-carenno`
   - indirizzo: Via Giosuè Carducci, 8, 23802 Carenno LC
21. **Wanda's Farm** — Carentino
   - slug: `wanda-s-farm-carentino`
   - indirizzo: Via Alessandria, 27, 15022 Carentino AL
22. **All' Asilo** — Caresana
   - slug: `all-asilo-caresana`
   - indirizzo: Via ING.Pietro Bosso Patriota, 49, 15030 Villanova Monferrato AL
23. **Alfieri Guest House** — Caresanablot
   - slug: `alfieri-guest-house-caresanablot`
   - indirizzo: Via Vittorio Alfieri, 19, 13100 Vercelli VC
24. **B&B L’Altro Tempo** — Caresanablot
   - slug: `b-b-l-altro-tempo-caresanablot`
   - indirizzo: Via Leonardo Walter Manzone, 19, 13100 Vercelli VC
25. **B&B L'Antico Vicolo Vercelli** — Caresanablot
   - slug: `b-b-l-antico-vicolo-vercelli-caresanablot`
   - indirizzo: Corso Fiume, 105, 13100 Vercelli VC
26. **bnb il bicciolano 2** — Caresanablot
   - slug: `bnb-il-bicciolano-2-caresanablot`
   - indirizzo: Corso Mario Abbiate, 110, 13100 Vercelli VC
27. **Palazzo Cusani Charming Rooms** — Caresanablot
   - slug: `palazzo-cusani-charming-rooms-caresanablot`
   - indirizzo: Via San Michele, 7, 13100 Vercelli VC
28. **B&B Il Melograno** — Carezzano
   - slug: `b-b-il-melograno-carezzano`
   - indirizzo: Cascina Sposino 2, 15050 Costa Vescovato AL
29. **Country House dei Boschi** — Carezzano
   - slug: `country-house-dei-boschi-carezzano`
   - indirizzo: Via Sant’Agata, 1, 15051 Carezzano AL
30. **Gemma B&B** — Carezzano
   - slug: `gemma-b-b-carezzano`
   - indirizzo: Via Cinque Martiri, 21, 15050 Paderna AL
31. **la Campeggia** — Carezzano
   - slug: `la-campeggia-carezzano`
   - indirizzo: Via Sarizzola, 15050 Costa Vescovato AL
32. **Agriturismo - B&B - Donna Germana** — Carfizzi
   - slug: `agriturismo-b-b-donna-germana-carfizzi`
   - indirizzo: Via Madonna di Mare, 88811 Cirò Marina KR
33. **Agriturismo La Quercia** — Carfizzi
   - slug: `agriturismo-la-quercia-carfizzi`
   - indirizzo: ctr. Foresta, 88815 Strongoli KR
34. **Almarea case vacanza** — Carfizzi
   - slug: `almarea-case-vacanza-carfizzi`
   - indirizzo: Via San Luigi Gonzaga, 18, 88811 Cirò Marina KR
35. **B&B "Nonna Pina"** — Carfizzi
   - slug: `b-b-nonna-pina-carfizzi`
   - indirizzo: Via Chieti, 46, 88811 Cirò Marina KR