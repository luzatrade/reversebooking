# Blocco 102/500 — 35 strutture senza descrizione IT

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

1. **Dimora Rosae B&B** — Amorosi
   - slug: `dimora-rosae-b-b-amorosi`
   - indirizzo: Via Ferrovia, 4, 82037 Telese BN
2. **La Rosa Nel Cortile B&B** — Amorosi
   - slug: `la-rosa-nel-cortile-b-b-amorosi`
   - indirizzo: Via Roma, 56, 82031 Amorosi BN
3. **La terrazza sul Volturno B&B** — Amorosi
   - slug: `la-terrazza-sul-volturno-b-b-amorosi`
   - indirizzo: SP49, 151, 81010 Ruviano CE
4. **La Torre B&B Home and Relax** — Amorosi
   - slug: `la-torre-b-b-home-and-relax-amorosi`
   - indirizzo: 63 Via San Salvatore Bis, Via S. Salvatore, 59, 82031 Amorosi BN
5. **Lvna Telesja B&b Hotel** — Amorosi
   - slug: `lvna-telesja-b-b-hotel-amorosi`
   - indirizzo: Via T. Tasso, 13, 82037 Telese Terme BN
6. **Nerium house** — Amorosi
   - slug: `nerium-house-amorosi`
   - indirizzo: Via Telese, 268, 82031 Amorosi BN
7. **Villa Annamaria - B&B e casa vacanze** — Amorosi
   - slug: `villa-annamaria-b-b-e-casa-vacanze-amorosi`
   - indirizzo: Via S. Nicola, 7, 82031 Amorosi BN
8. **Villa Mariarosaria** — Amorosi
   - slug: `villa-mariarosaria-amorosi`
   - indirizzo: Via Campagnano, 82031 Amorosi BN
9. **Albergo Dal Cortesan** — Ampezzo
   - slug: `albergo-dal-cortesan-ampezzo`
   - indirizzo: V. Nazionale, 170, 33021 Ampezzo UD
10. **Albergo Galles** — Ampezzo
   - slug: `albergo-galles-ampezzo`
   - indirizzo: Via Divisione Julia, 89 Casteons, 33026 Paluzza UD
11. **Albergo Grimani** — Ampezzo
   - slug: `albergo-grimani-ampezzo`
   - indirizzo: V. Nazionale, 35, 33021 Ampezzo UD
12. **Albergo Ristorante alla Pagoda** — Ampezzo
   - slug: `albergo-ristorante-alla-pagoda-ampezzo`
   - indirizzo: Via Maiaso, 2, 33020 Enemonzo UD
13. **Albergo ristorante AriaPura** — Ampezzo
   - slug: `albergo-ristorante-ariapura-ampezzo`
   - indirizzo: S.da Esterna Corso, 7, 33021 Ampezzo UD
14. **Albergo ristorante pizzeria Italia** — Ampezzo
   - slug: `albergo-ristorante-pizzeria-italia-ampezzo`
   - indirizzo: Via Roma, 48, 33026 Paluzza UD
15. **Alpine Wellness Hotel e Ristorante Riglarhaus** — Ampezzo
   - slug: `alpine-wellness-hotel-e-ristorante-riglarhaus-ampezzo`
   - indirizzo: Frazione Lateis, 3, 33020 Sauris UD
16. **BIKE & BIKERS HOTEL RESTAURANT** — Ampezzo
   - slug: `bike-bikers-hotel-restaurant-ampezzo`
   - indirizzo: V. Nazionale, 5, 33021 Ampezzo UD
17. **Depandance - Albergo Grimani** — Ampezzo
   - slug: `depandance-albergo-grimani-ampezzo`
   - indirizzo: Piazza Zona Libera 1944, 9/interno, 33021 Ampezzo UD
18. **Hotel Davòst** — Ampezzo
   - slug: `hotel-davost-ampezzo`
   - indirizzo: Via Tagliamento, 26, 33024 Forni di Sopra UD
19. **Hotel Garnì Plueme | Sauris** — Ampezzo
   - slug: `hotel-garni-plueme-sauris-ampezzo`
   - indirizzo: fr, Via Sauris di Sotto, 26/a, 33020 Sauris UD
20. **Hotel Italia** — Ampezzo
   - slug: `hotel-italia-ampezzo`
   - indirizzo: Via Venezia, 35, 33024 Forni di Sopra UD
21. **Hotel Posta** — Ampezzo
   - slug: `hotel-posta-ampezzo`
   - indirizzo: V. Nazionale, 174, 33024 Forni di Sopra UD
22. **Hotel Ristorante Bellavista** — Ampezzo
   - slug: `hotel-ristorante-bellavista-ampezzo`
   - indirizzo: Viale Edelweiss, 11, 33020 Ravascletto UD
23. **Hotel Villa Alpina** — Ampezzo
   - slug: `hotel-villa-alpina-ampezzo`
   - indirizzo: Via Madonna della Salute, 18, 33024 Forni di Sopra UD
24. **La Stube** — Ampezzo
   - slug: `la-stube-ampezzo`
   - indirizzo: V. Nazionale, 276, 33024 Forni di Sopra UD
25. **Rifugio Tita Piaz / Perkhhite Tita Piaz** — Ampezzo
   - slug: `rifugio-tita-piaz-perkhhite-tita-piaz-ampezzo`
   - indirizzo: Loc. Passo Pura, Strada del Monte Pura, 33021 Ampezzo UD
26. **Armada Hotel Amsterdam** — Amsterdam
   - slug: `armada-hotel-amsterdam-amsterdam`
   - indirizzo: Keizersgracht 713-715, 1017 DX Amsterdam
27. **Ciao Papa Hotel Amsterdam Central Station** — Amsterdam
   - slug: `ciao-papa-hotel-amsterdam-central-station-amsterdam`
   - indirizzo: Nieuwendijk 15-1, 1012 LZ Amsterdam
28. **Hotel City Garden Amsterdam** — Amsterdam
   - slug: `hotel-city-garden-amsterdam-amsterdam`
   - indirizzo: Pieter Cornelisz Hooftstraat 162, 1071 CH Amsterdam
29. **Hotel Espresso City Center** — Amsterdam
   - slug: `hotel-espresso-city-center-amsterdam`
   - indirizzo: Overtoom 57, 1054 HC Amsterdam
30. **Hotel Estherea** — Amsterdam
   - slug: `hotel-estherea-amsterdam`
   - indirizzo: Singel 303-309, 1012 WJ Amsterdam
31. **Hotel Mai Amsterdam** — Amsterdam
   - slug: `hotel-mai-amsterdam-amsterdam`
   - indirizzo: Geldersekade 30, 1012 BJ Amsterdam
32. **Hotel NH City Centre Amsterdam** — Amsterdam
   - slug: `hotel-nh-city-centre-amsterdam-amsterdam`
   - indirizzo: Spuistraat 288-292, 1012 VX Amsterdam
33. **Hotel Notting Hill Amsterdam** — Amsterdam
   - slug: `hotel-notting-hill-amsterdam-amsterdam`
   - indirizzo: Westeinde 26, 1017 ZP Amsterdam
34. **Inntel Hotels Amsterdam Centre** — Amsterdam
   - slug: `inntel-hotels-amsterdam-centre-amsterdam`
   - indirizzo: Nieuwezijds Kolk 19, 1012 PV Amsterdam
35. **Leonardo Eden Hotel Amsterdam City Center** — Amsterdam
   - slug: `leonardo-eden-hotel-amsterdam-city-center-amsterdam`
   - indirizzo: Amstel 144, 1017 AE Amsterdam