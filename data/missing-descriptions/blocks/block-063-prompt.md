# Blocco 63/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Il Sorbo** — Albosaggia
   - slug: `agriturismo-il-sorbo-albosaggia`
   - indirizzo: Località Campelli snc, 23010 Albosaggia SO
2. **Agriturismo Stella Orobica** — Albosaggia
   - slug: `agriturismo-stella-orobica-albosaggia`
   - indirizzo: V. Torchione, 32, 23010 Albosaggia SO
3. **Agriturismo Terra del Sole** — Albosaggia
   - slug: `agriturismo-terra-del-sole-albosaggia`
   - indirizzo: V. Adda, 2624, 23010 Albosaggia SO
4. **B&B Ca' Murada** — Albosaggia
   - slug: `b-b-ca-murada-albosaggia`
   - indirizzo: V. Donadelli, 20, 23100 Albosaggia SO
5. **B&B Ca' Virò** — Albosaggia
   - slug: `b-b-ca-viro-albosaggia`
   - indirizzo: Via Coltra, 21 A, 23010 Torchione SO
6. **B&B Il Germoglio** — Albosaggia
   - slug: `b-b-il-germoglio-albosaggia`
   - indirizzo: Via Balzarro, 21 C, 23012 Castione Andevenno SO
7. **B&B Il Grappolo Valtellina** — Albosaggia
   - slug: `b-b-il-grappolo-valtellina-albosaggia`
   - indirizzo: Via Stelvio, 34, 23030 Bianzone SO
8. **B&B Panemiele** — Albosaggia
   - slug: `b-b-panemiele-albosaggia`
   - indirizzo: Via Bonfadini, 23, 23100 Sondrio SO
9. **B&B Sopralapanca** — Albosaggia
   - slug: `b-b-sopralapanca-albosaggia`
   - indirizzo: Via Roma, 4, 23010 Postalesio SO
10. **Cà ROSSA - B&B** — Albosaggia
   - slug: `ca-rossa-b-b-albosaggia`
   - indirizzo: Via Cà Rossa, 336, 23020 Montagna In Valtellina SO
11. **Ca' Dottori** — Albosaggia
   - slug: `ca-dottori-albosaggia`
   - indirizzo: Via Dottori, 16, 23010 valtellina SO
12. **Chalet Monaci Alla Fontana** — Albosaggia
   - slug: `chalet-monaci-alla-fontana-albosaggia`
   - indirizzo: Via Monaci, 12/C, 23010 Albosaggia SO
13. **Fiada Holiday Home** — Albosaggia
   - slug: `fiada-holiday-home-albosaggia`
   - indirizzo: Via Torre, 10, 23010 Albosaggia SO
14. **Guest House Le Cassandre** — Albosaggia
   - slug: `guest-house-le-cassandre-albosaggia`
   - indirizzo: Località Tarchi, 80, 23100 Sondrio SO
15. **Hotel Campelli** — Albosaggia
   - slug: `hotel-campelli-albosaggia`
   - indirizzo: Via Moia, 6, 23010 Albosaggia SO
16. **Luna di miele** — Albosaggia
   - slug: `luna-di-miele-albosaggia`
   - indirizzo: Via Monaci, 165, 23010 Albosaggia SO
17. **Orobie Holiday Apartments** — Albosaggia
   - slug: `orobie-holiday-apartments-albosaggia`
   - indirizzo: Vicolo Cà Pedruzzi, 7, 23010 Albosaggia SO
18. **'l piasì** — Albugnano
   - slug: `l-piasi-albugnano`
   - indirizzo: Via Boranco, 2, 14020 Cortanze AT
19. **Agriturismo Arcobaleno fattoria Didattica** — Albugnano
   - slug: `agriturismo-arcobaleno-fattoria-didattica-albugnano`
   - indirizzo: Borgata Pratorotondo, 65, 14020 Aramengo AT
20. **Agriturismo la Luna Nera** — Albugnano
   - slug: `agriturismo-la-luna-nera-albugnano`
   - indirizzo: Via Cascinetta, 25, 14010 Cortazzone AT
21. **Albergo Ristorante Ciocca** — Albugnano
   - slug: `albergo-ristorante-ciocca-albugnano`
   - indirizzo: Piazza Dante, 10, 14022 Castelnuovo Don Bosco AT
22. **Alle Tre Colline Agriturismo e Cantina - Albugnano** — Albugnano
   - slug: `alle-tre-colline-agriturismo-e-cantina-albugnano-albugnano`
   - indirizzo: Località Vezzolano, 60, 14022 Albugnano AT
23. **B&B Al Bric** — Albugnano
   - slug: `b-b-al-bric-albugnano`
   - indirizzo: Via Trotta, 3, 10090 San Raffaele Cimena TO
24. **B&B I colori del Monferrato** — Albugnano
   - slug: `b-b-i-colori-del-monferrato-albugnano`
   - indirizzo: Via Asti, 10, 14026 Montiglio AT
25. **B&B Naturin - Vegan Eco Farm** — Albugnano
   - slug: `b-b-naturin-vegan-eco-farm-albugnano`
   - indirizzo: VIA CASCINA COLOMBARO, 2, 10020 Piazzo TO
26. **Bed & Breakfast “Bed & Box”** — Albugnano
   - slug: `bed-breakfast-bed-box-albugnano`
   - indirizzo: CIN IT001112C1NL3MU5RS, Str. Foratella, 74, 10090 Gassino Torinese TO
27. **Bed and breakfast al riccio** — Albugnano
   - slug: `bed-and-breakfast-al-riccio-albugnano`
   - indirizzo: Str. Roletto - Rocca, 4, 14023 Cocconato AT
28. **Bed and Breakfast Ca d' Pinin** — Albugnano
   - slug: `bed-and-breakfast-ca-d-pinin-albugnano`
   - indirizzo: Località Sant Emiliano, 15, 14022 Albugnano AT
29. **C'era una volta** — Albugnano
   - slug: `c-era-una-volta-albugnano`
   - indirizzo: Frazione Nevissano, 8, 14022 Castelnuovo Don Bosco AT
30. **Ca' Borgo Vecchio di Coppero Cristina** — Albugnano
   - slug: `ca-borgo-vecchio-di-coppero-cristina-albugnano`
   - indirizzo: Borgo Garibaldi, 11, 10020 Brusasco TO
31. **Ca'Mariuccia Agriturismo biologico** — Albugnano
   - slug: `ca-mariuccia-agriturismo-biologico-albugnano`
   - indirizzo: Località Sant Emiliano, 14022 Albugnano AT
32. **Cascina Rosengana** — Albugnano
   - slug: `cascina-rosengana-albugnano`
   - indirizzo: Via E. Liprandi, 50, 14023 Cocconato AT
33. **La Casa di Neh B&B** — Albugnano
   - slug: `la-casa-di-neh-b-b-albugnano`
   - indirizzo: Tetti Allasio, 26, 10090 Tetti Alassio TO
34. **La Corte del Barbio** — Albugnano
   - slug: `la-corte-del-barbio-albugnano`
   - indirizzo: Via Giuseppe Mazzini, 36, 14020 Aramengo AT
35. **La Volpe tra le Vigne** — Albugnano
   - slug: `la-volpe-tra-le-vigne-albugnano`
   - indirizzo: Cascine Vironi, 29, 14022 Castelnuovo Don Bosco AT