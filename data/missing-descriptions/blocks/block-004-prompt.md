# Blocco 4/500 — 35 strutture senza descrizione IT

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

1. **Aura Glamping** — Accettura
   - slug: `aura-glamping-accettura`
   - indirizzo: Contrada Montepiano, 75011 Accettura MT
2. **B&b A due passi** — Accettura
   - slug: `b-b-a-due-passi-accettura`
   - indirizzo: Vico I Michele torraca, 5, 85010 Pietrapertosa PZ
3. **B&B A Due Passi - hotel Bed and Breakfast e Affitta camere** — Accettura
   - slug: `b-b-a-due-passi-hotel-bed-and-breakfast-e-affitt-accettura`
   - indirizzo: Vicolo II Forno, 15, 75014 Grassano MT
4. **B&B Al Vico Pepe** — Accettura
   - slug: `b-b-al-vico-pepe-accettura`
   - indirizzo: Vico Storto Pepe, 17, 85010 Castelmezzano PZ
5. **B&B da Rosario** — Accettura
   - slug: `b-b-da-rosario-accettura`
   - indirizzo: Via della Pineta n. 4, 85010 Campomaggiore PZ
6. **B&B Vigna del Duca** — Accettura
   - slug: `b-b-vigna-del-duca-accettura`
   - indirizzo: Vicolo II Forno, 6, 75014 Grassano MT
7. **B&B Villa Le Arcate** — Accettura
   - slug: `b-b-villa-le-arcate-accettura`
   - indirizzo: Via Luigi Einaudi, 15, 85012 Corleto Perticara PZ
8. **Convil Hotel** — Accettura
   - slug: `convil-hotel-accettura`
   - indirizzo: Localita' Conche, 85012 Corleto Perticara PZ
9. **Dar Dhiafa** — Accettura
   - slug: `dar-dhiafa-accettura`
   - indirizzo: Vicolo II Capo le Grotte, 13, 75014 Grassano MT
10. **Fenì Home Bed & Breakfast Tricarico** — Accettura
   - slug: `feni-home-bed-breakfast-tricarico-accettura`
   - indirizzo: Via Scotellaro Rocco, 68, 75019 Tricarico MT
11. **Hotel Antico Pastificio Sarubbi** — Accettura
   - slug: `hotel-antico-pastificio-sarubbi-accettura`
   - indirizzo: Via Roma, 107, 75018 Stigliano MT
12. **Hotel Croccia Accettura** — Accettura
   - slug: `hotel-croccia-accettura-accettura`
   - indirizzo: Via Salita Bastione, 34, 75011 Accettura MT
13. **Hotel La Salitella** — Accettura
   - slug: `hotel-la-salitella-accettura`
   - indirizzo: SS 407 Basentana, Snc, 75017 Salandra MT
14. **Hotel Mariano** — Accettura
   - slug: `hotel-mariano-accettura`
   - indirizzo: Via principe di Napoli, 65, 75018 Stigliano MT
15. **Hotel Ristorante 407** — Accettura
   - slug: `hotel-ristorante-407-accettura`
   - indirizzo: Via Scalo Ferroviario, 31/33, 75010 Scalo Ferroviario Grassano-garaguso MT
16. **Hotel San Giuliano** — Accettura
   - slug: `hotel-san-giuliano-accettura`
   - indirizzo: Piazza Peppino Cartoscelli, 7, 75011 Accettura MT
17. **La Panoramica** — Accettura
   - slug: `la-panoramica-accettura`
   - indirizzo: Via Michele Trivigno, 19, 85010 Castelmezzano PZ
18. **Mirutt B&B & Wellness** — Accettura
   - slug: `mirutt-b-b-wellness-accettura`
   - indirizzo: Vico Primo Castello, 8, 85010 Castelmezzano PZ
19. **Palazzo Laureano - Dimora Storica** — Accettura
   - slug: `palazzo-laureano-dimora-storica-accettura`
   - indirizzo: Via Duomo, 8, 75019 Tricarico MT
20. **Abruzzo Segreto bed & breakfast** — Acciano
   - slug: `abruzzo-segreto-bed-breakfast-acciano`
   - indirizzo: Via S. Girolamo, 3, 67020 Navelli AQ
21. **Agriturismo Il Pozzo dei Desideri** — Acciano
   - slug: `agriturismo-il-pozzo-dei-desideri-acciano`
   - indirizzo: Via della Torre, 67020 San Pio delle Camere AQ
22. **Albergo Ma.Re** — Acciano
   - slug: `albergo-ma-re-acciano`
   - indirizzo: Via Nerino Fracasso, 4, 65026 Popoli PE
23. **Albergo Ristorante Monte Selva** — Acciano
   - slug: `albergo-ristorante-monte-selva-acciano`
   - indirizzo: SS. 17 Km 53, 67021 Barisciano AQ
24. **alloggio taddei** — Acciano
   - slug: `alloggio-taddei-acciano`
   - indirizzo: S.da Provinciale Barisciano Caste de Monte, 5, 67021 Barisciano AQ
25. **B&B BellaVista** — Acciano
   - slug: `b-b-bellavista-acciano`
   - indirizzo: Via Gran Sasso, n°4, 65026 Popoli PE
26. **B&B Goriano Valli** — Acciano
   - slug: `b-b-goriano-valli-acciano`
   - indirizzo: Via Principale, 13, 67020 Goriano Valli AQ
27. **B&B Il Minotauro** — Acciano
   - slug: `b-b-il-minotauro-acciano`
   - indirizzo: Via Ricasso, 75, 67030 Vittorito AQ
28. **B&B La grotta di nonno Vittorio** — Acciano
   - slug: `b-b-la-grotta-di-nonno-vittorio-acciano`
   - indirizzo: Via Carapelle, 5, 67020 San Pio delle Camere AQ
29. **B&B Sotto Le Volte** — Acciano
   - slug: `b-b-sotto-le-volte-acciano`
   - indirizzo: 15bis, Via del Municipio, 67020 Navelli AQ
30. **Bed & Breakfast La Solagna** — Acciano
   - slug: `bed-breakfast-la-solagna-acciano`
   - indirizzo: Strada Interpoderale S. Lorenzo, 1, 67020 Acciano AQ
31. **Charme in Perillis** — Acciano
   - slug: `charme-in-perillis-acciano`
   - indirizzo: via Colle, sn, 67020 San Benedetto in Perillis AQ
32. **Collis Petri Relais** — Acciano
   - slug: `collis-petri-relais-acciano`
   - indirizzo: Via Dietro le Mura, 3, 67020 Collepietro AQ
33. **Hotel Lory** — Acciano
   - slug: `hotel-lory-acciano`
   - indirizzo: Via Oreste Ranelletti, 335, 67043 Celano AQ
34. **Hotel Tre Monti** — Acciano
   - slug: `hotel-tre-monti-acciano`
   - indirizzo: V. Tiburtina Valeria, 1, 65026 Popoli PE
35. **il Vecchio Olmo** — Acciano
   - slug: `il-vecchio-olmo-acciano`
   - indirizzo: Via Lugnano, 67020 Gagliano Aterno AQ