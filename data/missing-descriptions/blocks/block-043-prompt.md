# Blocco 43/500 — 35 strutture senza descrizione IT

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

1. **Hotel Corborant** — Aisone
   - slug: `hotel-corborant-aisone`
   - indirizzo: Frazione Bagni di Vinadio, 1, Bagni di Vinadio, 1, 12010 Vinadio CN
2. **Hotel Quadrifoglio** — Aisone
   - slug: `hotel-quadrifoglio-aisone`
   - indirizzo: Via C L N, 20, 12023 Caraglio CN
3. **Hotel Ristorante Moderno** — Aisone
   - slug: `hotel-ristorante-moderno-aisone`
   - indirizzo: Largo Mistral, 7, 12014 Demonte CN
4. **Il Nocciolo** — Aisone
   - slug: `il-nocciolo-aisone`
   - indirizzo: frazione Bedoira, 17, 12010 Gaiola CN
5. **Residenza Tre Corone** — Aisone
   - slug: `residenza-tre-corone-aisone`
   - indirizzo: Via Vittorio Emanuele III, 10, 12010 Vinadio CN
6. **Stura River Village RAFTING** — Aisone
   - slug: `stura-river-village-rafting-aisone`
   - indirizzo: Regione, Via Stiera, 6, 12010 Gaiola CN
7. **Ai Vellutai** — Ala
   - slug: `ai-vellutai-ala`
   - indirizzo: Via Mario Soini, 34, 38061 Ala TN
8. **Albergo Garnì Toresela** — Ala
   - slug: `albergo-garni-toresela-ala`
   - indirizzo: Strada Rivana, 5, 38060 Nago-Torbole TN
9. **Aparthotel Bellavista** — Ala
   - slug: `aparthotel-bellavista-ala`
   - indirizzo: Via Monte Vignola, 9, 38060 Polsa TN
10. **Azienda vitivinicola Alessandro Secchi** — Ala
   - slug: `azienda-vitivinicola-alessandro-secchi-ala`
   - indirizzo: Località Coleri, 10, 38061 Ala TN
11. **B&b Cà Ulivi** — Ala
   - slug: `b-b-ca-ulivi-ala`
   - indirizzo: Località Sgardaiolo, 20, 38061 Ala TN
12. **Bar Pizzeria Etrusca B&B** — Ala
   - slug: `bar-pizzeria-etrusca-b-b-ala`
   - indirizzo: P.zza Polsa, Piazza Polsa, 38060 Brentonico TN
13. **Camping Polsa **** — Ala
   - slug: `camping-polsa-ala`
   - indirizzo: Via Monte Vignola, 11, 38060 Polsa TN
14. **Casa alla Fontana** — Ala
   - slug: `casa-alla-fontana-ala`
   - indirizzo: Via Gubert, 7, 38061 Ala TN
15. **Giulio Mountain B&B** — Ala
   - slug: `giulio-mountain-b-b-ala`
   - indirizzo: Le Ville, 51, 38061 Sega di Ala TN
16. **Hotel Baldo** — Ala
   - slug: `hotel-baldo-ala`
   - indirizzo: Strada Provinciale 8, 4, 37020 Ferrara di Monte Baldo VR
17. **Hotel Benaco Torbole** — Ala
   - slug: `hotel-benaco-torbole-ala`
   - indirizzo: Via Benaco, 7, 38069 Nago-Torbole TN
18. **Hotel Dolomiti - Azzurro Club Vacanze** — Ala
   - slug: `hotel-dolomiti-azzurro-club-vacanze-ala`
   - indirizzo: Via Lucciole, 2, 38060 Polsa TN
19. **Hotel Polsa** — Ala
   - slug: `hotel-polsa-ala`
   - indirizzo: Piazza Polsa, 1, 38060 Brentonico TN
20. **Hotel Shangri-La** — Ala
   - slug: `hotel-shangri-la-ala`
   - indirizzo: C.so Passo Buole, 13, 38061 Ala TN
21. **hotel sole del baldo** — Ala
   - slug: `hotel-sole-del-baldo-ala`
   - indirizzo: Via de la Pizzagrola, 38060 San Valentino TN
22. **Hotel Vela** — Ala
   - slug: `hotel-vela-ala`
   - indirizzo: Via Str. Granda, 2, 38062 Nago-Torbole TN
23. **Il Sogno** — Ala
   - slug: `il-sogno-ala`
   - indirizzo: Via Castelbarco, 10, 38063 Sabbionara TN
24. **La Pineta** — Ala
   - slug: `la-pineta-ala`
   - indirizzo: C.so Passo Buole, 38, 38061 Ala TN
25. **Locanda Alpina - Albergo** — Ala
   - slug: `locanda-alpina-albergo-ala`
   - indirizzo: Sega di Ala, 37020 Ala TN
26. **Rifugio Fos-ce** — Ala
   - slug: `rifugio-fos-ce-ala`
   - indirizzo: 38060 San Valentino TN
27. **Agriturismo Al pra di Muriet** — Ala di Stura
   - slug: `agriturismo-al-pra-di-muriet-ala-di-stura`
   - indirizzo: Fraz.Berno, 5, 10050 Venaus TO
28. **AGRITURISMO EDELWEISS PRALI** — Ala di Stura
   - slug: `agriturismo-edelweiss-prali-ala-di-stura`
   - indirizzo: 10060 Pomieri TO
29. **Agriturismo La ferme du Grand Paradis** — Ala di Stura
   - slug: `agriturismo-la-ferme-du-grand-paradis-ala-di-stura`
   - indirizzo: Frazione Valnontey, 32, 11012 Cogne AO
30. **Agriturismo La Sforzata - Da Dormire** — Ala di Stura
   - slug: `agriturismo-la-sforzata-da-dormire-ala-di-stura`
   - indirizzo: Via Torino Pianezza, 69, 10093 Collegno TO
31. **Agriturismo la Viggni de Crest** — Ala di Stura
   - slug: `agriturismo-la-viggni-de-crest-ala-di-stura`
   - indirizzo: Via de Beauregard, 29, 11100 Aosta AO
32. **Agriturismo Plan de la Tour** — Ala di Stura
   - slug: `agriturismo-plan-de-la-tour-ala-di-stura`
   - indirizzo: Frazione Epinel, 198, 11012 Cogne AO
33. **Agriturismo Serras D'ala** — Ala di Stura
   - slug: `agriturismo-serras-d-ala-ala-di-stura`
   - indirizzo: Localita Tanca Liandro, 09070 Siamaggiore OR
34. **Agriturismo Usurtala** — Ala di Stura
   - slug: `agriturismo-usurtala-ala-di-stura`
   - indirizzo: Località Usurtala, 08026 Orani NU
35. **ALBERGO RISTORANTE ALA DA SILLA DI CASTAGNERI** — Ala di Stura
   - slug: `albergo-ristorante-ala-da-silla-di-castagneri-ala-di-stura`
   - indirizzo: Via Villar, 10, 10070 Ala di Stura TO