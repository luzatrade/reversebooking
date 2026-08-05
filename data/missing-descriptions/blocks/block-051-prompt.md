# Blocco 51/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Il Leone della Torre** — Albaredo d'Adige
   - slug: `agriturismo-il-leone-della-torre-albaredo-d-adige`
   - indirizzo: Via Fondo, 2, 37050 Concamarise VR
2. **B&B Artemide** — Albaredo d'Adige
   - slug: `b-b-artemide-albaredo-d-adige`
   - indirizzo: Via Motte Crosaron, 41, 37040 Arcole VR
3. **B&B Casetta 42** — Albaredo d'Adige
   - slug: `b-b-casetta-42-albaredo-d-adige`
   - indirizzo: Via Braggio, 133, 37040 Santo Stefano VR
4. **B&B da Natallia** — Albaredo d'Adige
   - slug: `b-b-da-natallia-albaredo-d-adige`
   - indirizzo: Via I. Forante, 39, 37055 Ronco all'Adige VR
5. **B&B I Tre Pini (CIN: IT023050B4AMRIMKGE)** — Albaredo d'Adige
   - slug: `b-b-i-tre-pini-cin-it023050b4amrimkge-albaredo-d-adige`
   - indirizzo: Via Moreno Zoppi, 8, 37032 Monteforte d'Alpone VR
6. **BeB Il Conte** — Albaredo d'Adige
   - slug: `beb-il-conte-albaredo-d-adige`
   - indirizzo: Piazza Gazzolo, 31, 37040 Gazzolo VR
7. **Bed & Breakfast la Casa delle Zie** — Albaredo d'Adige
   - slug: `bed-breakfast-la-casa-delle-zie-albaredo-d-adige`
   - indirizzo: Via N. Vecchietti, 16, 37044 Cologna Veneta VR
8. **Borgo Antico Affittacamere Soave Verona** — Albaredo d'Adige
   - slug: `borgo-antico-affittacamere-soave-verona-albaredo-d-adige`
   - indirizzo: Corso Vittorio Emanuele, 43, 37038 Soave VR
9. **Camere Solidea** — Albaredo d'Adige
   - slug: `camere-solidea-albaredo-d-adige`
   - indirizzo: Via Desmontà, 17A, 37040 Veronella VR
10. **Hotel Bareta** — Albaredo d'Adige
   - slug: `hotel-bareta-albaredo-d-adige`
   - indirizzo: Via Strà, 89, 37042 Caldiero VR
11. **Hotel Cangrande** — Albaredo d'Adige
   - slug: `hotel-cangrande-albaredo-d-adige`
   - indirizzo: Viale del Commercio, 20, 37038 Soave VR
12. **Hotel Ristorante da Gianni** — Albaredo d'Adige
   - slug: `hotel-ristorante-da-gianni-albaredo-d-adige`
   - indirizzo: Via S. Pierino, 109, 37051 Bovolone VR
13. **Hotel Stadio** — Albaredo d'Adige
   - slug: `hotel-stadio-albaredo-d-adige`
   - indirizzo: Via Fiume, 14/A, 37047 San Bonifacio VR
14. **Hotel Stazione | Ex Hotel Lini** — Albaredo d'Adige
   - slug: `hotel-stazione-ex-hotel-lini-albaredo-d-adige`
   - indirizzo: Via della Libertà, 110, 37053 Cerea VR
15. **Hotel Tolin** — Albaredo d'Adige
   - slug: `hotel-tolin-albaredo-d-adige`
   - indirizzo: Via XX Settembre, 37055 Ronco All'Adige VR
16. **La casa del sogno** — Albaredo d'Adige
   - slug: `la-casa-del-sogno-albaredo-d-adige`
   - indirizzo: Via Vittorio Veneto, 20, 37032 Monteforte d'Alpone VR
17. **Le Tre Stelle** — Albaredo d'Adige
   - slug: `le-tre-stelle-albaredo-d-adige`
   - indirizzo: Via Saletto, 50, 37055 Ronco All'Adige VR
18. **Soave Guest House - Locazione Turistica** — Albaredo d'Adige
   - slug: `soave-guest-house-locazione-turistica-albaredo-d-adige`
   - indirizzo: Via Giuseppe Mazzini, 18, 37038 Soave VR
19. **Villanova Hotel** — Albaredo d'Adige
   - slug: `villanova-hotel-albaredo-d-adige`
   - indirizzo: Via Villanova, 6B, 37047 San Bonifacio VR
20. **Albergo Coira** — Albaredo per San Marco
   - slug: `albergo-coira-albaredo-per-san-marco`
   - indirizzo: Via Tavino, 24010 Colla-muggiasca BG
21. **Albergo Ristorante Pizzeria Miralago** — Albaredo per San Marco
   - slug: `albergo-ristorante-pizzeria-miralago-albaredo-per-san-marco`
   - indirizzo: Via Ezio Vanoni, 4, 23010 Campo SO
22. **Albergo Ristorante VALLUNGA - NEGOZIO ALIMENTARI E PRODOTTI TIPICI** — Albaredo per San Marco
   - slug: `albergo-ristorante-vallunga-negozio-alimentari-e-albaredo-per-san-marco`
   - indirizzo: Via Roma, 12, 23010 Tartano SO
23. **CAsa Priula** — Albaredo per San Marco
   - slug: `casa-priula-albaredo-per-san-marco`
   - indirizzo: Via Brasa, 14, 23010 Albaredo per San Marco SO
24. **Hotel Le Pinete** — Albaredo per San Marco
   - slug: `hotel-le-pinete-albaredo-per-san-marco`
   - indirizzo: Via Monte Secco, 27, 24010 Piazzatorre BG
25. **Hotel Milano** — Albaredo per San Marco
   - slug: `hotel-milano-albaredo-per-san-marco`
   - indirizzo: Via Centro, 19, 24010 Piazzatorre BG
26. **Hotel Miramonti** — Albaredo per San Marco
   - slug: `hotel-miramonti-albaredo-per-san-marco`
   - indirizzo: V. Zocca, 12, 23010 Val Masino SO
27. **Hotel Ristorante Maloia** — Albaredo per San Marco
   - slug: `hotel-ristorante-maloia-albaredo-per-san-marco`
   - indirizzo: Via Spluga, 43, 23015 Dubino SO
28. **Hotel Ristorante Pizzeria Culmine** — Albaredo per San Marco
   - slug: `hotel-ristorante-pizzeria-culmine-albaredo-per-san-marco`
   - indirizzo: Via Merlina, 50, 23011 Ardenno SO
29. **Hotel Ristorante Stelvio** — Albaredo per San Marco
   - slug: `hotel-ristorante-stelvio-albaredo-per-san-marco`
   - indirizzo: Via Stelvio, 111, 23014 Delebio SO
30. **Hotel Rustichella** — Albaredo per San Marco
   - slug: `hotel-rustichella-albaredo-per-san-marco`
   - indirizzo: Via Moss, 5, 23010 Val Masino SO
31. **Hotel Saligari** — Albaredo per San Marco
   - slug: `hotel-saligari-albaredo-per-san-marco`
   - indirizzo: Via Mario Copes, 397, 23020 Verceia SO
32. **Hotel Sasso Remenno** — Albaredo per San Marco
   - slug: `hotel-sasso-remenno-albaredo-per-san-marco`
   - indirizzo: 21, V. Zocca, 23010 Val Masino SO
33. **La Brace - Hotel Ristorante Bar** — Albaredo per San Marco
   - slug: `la-brace-hotel-ristorante-bar-albaredo-per-san-marco`
   - indirizzo: Via Piani, 1, 23010 Forcola SO
34. **La Casa di Anna** — Albaredo per San Marco
   - slug: `la-casa-di-anna-albaredo-per-san-marco`
   - indirizzo: Via Valeriana, 10/a, 23014 Delebio SO
35. **La Ruota Hotel** — Albaredo per San Marco
   - slug: `la-ruota-hotel-albaredo-per-san-marco`
   - indirizzo: Viale Stelvio, 180, 23017 Morbegno SO