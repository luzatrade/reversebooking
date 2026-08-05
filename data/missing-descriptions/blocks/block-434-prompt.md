# Blocco 434/500 — 35 strutture senza descrizione IT

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

1. **B&B Le Betulle** — Cardano al Campo
   - slug: `b-b-le-betulle-cardano-al-campo`
   - indirizzo: Via Parma, 1, 21010 Cardano al Campo VA
2. **B&B MC FLY ROOMS (Malpensa airport)** — Cardano al Campo
   - slug: `b-b-mc-fly-rooms-malpensa-airport-cardano-al-campo`
   - indirizzo: Via C. Menotti, 7, 21013 Gallarate VA
3. **B&B Villa Bucceri** — Cardano al Campo
   - slug: `b-b-villa-bucceri-cardano-al-campo`
   - indirizzo: Via G. Oberdan, 7, 21010 Cardano Al Campo VA
4. **Cardano Hotel** — Cardano al Campo
   - slug: `cardano-hotel-cardano-al-campo`
   - indirizzo: Via Al Campo, 10, 21010 Cardano al Campo VA
5. **Cascina Anita** — Cardano al Campo
   - slug: `cascina-anita-cardano-al-campo`
   - indirizzo: Viale Adriatico, 10, 21017 Samarate VA
6. **Cristel Malpensa Bed & Breakfast** — Cardano al Campo
   - slug: `cristel-malpensa-bed-breakfast-cardano-al-campo`
   - indirizzo: Via dei Chiosetti, 20, 21010 Cardano Al Campo VA
7. **Fly Bed - For** — Cardano al Campo
   - slug: `fly-bed-for-cardano-al-campo`
   - indirizzo: Via Papa Giovanni XXIII, 166, 21010 Cardano al Campo VA
8. **Foresteria Villa Ormeni Malpensa** — Cardano al Campo
   - slug: `foresteria-villa-ormeni-malpensa-cardano-al-campo`
   - indirizzo: Via Gabriele D'annunzio, 10, 21010 Cardano al Campo VA
9. **La casa delle Betulle** — Cardano al Campo
   - slug: `la-casa-delle-betulle-cardano-al-campo`
   - indirizzo: Via XX Settembre, 16, 21010 Cardano al Campo VA
10. **La Siesta Bed & Residence** — Cardano al Campo
   - slug: `la-siesta-bed-residence-cardano-al-campo`
   - indirizzo: Viale Europa Ovest, 21, 21010 Cardano Al Campo VA
11. **Le Quattro Stelle Villa CIN: IT012032B4U8Y7CGSB** — Cardano al Campo
   - slug: `le-quattro-stelle-villa-cin-it012032b4u8y7cgsb-cardano-al-campo`
   - indirizzo: Via Dolomiti, 2A, 21010 Cardano al Campo VA
12. **Malpensa House** — Cardano al Campo
   - slug: `malpensa-house-cardano-al-campo`
   - indirizzo: Via G. Ferraris, 10, 21010 Cardano Al Campo VA
13. **Suite Room Malpensa B&B** — Cardano al Campo
   - slug: `suite-room-malpensa-b-b-cardano-al-campo`
   - indirizzo: Via dei Novaj, 21010 Cardano al Campo VA
14. **Affittacamere Su Maistu e'linna** — Cardedu
   - slug: `affittacamere-su-maistu-e-linna-cardedu`
   - indirizzo: Via Municipio, 4, 08040 Cardedu OG
15. **Agriturismo Donnolu** — Cardedu
   - slug: `agriturismo-donnolu-cardedu`
   - indirizzo: Loc. Suengiu, 08047 Tertenia OG
16. **Agriturismo e Agricampeggio Cirra** — Cardedu
   - slug: `agriturismo-e-agricampeggio-cirra-cardedu`
   - indirizzo: Agriturismo cirra, 08047 Tertenia OG
17. **Agriturismo Nuraghe Murtarba** — Cardedu
   - slug: `agriturismo-nuraghe-murtarba-cardedu`
   - indirizzo: Lago Santa Lucia, 08049 Villagrande Strisaili OG
18. **Agriturismo Ogliastra** — Cardedu
   - slug: `agriturismo-ogliastra-cardedu`
   - indirizzo: SS390, Località Genna e Sarbadore, 08040 Loceri OG
19. **Agriturismo S'Orgiola** — Cardedu
   - slug: `agriturismo-s-orgiola-cardedu`
   - indirizzo: Località, Via is Carcuris, 08040 Osini OG
20. **Agriturismo Sa Jana Holidays** — Cardedu
   - slug: `agriturismo-sa-jana-holidays-cardedu`
   - indirizzo: località Bacu e Ludu, 08040 Cardedu OG
21. **Agriturismo Sa Perda Arrubia(Solo pernottamento e uso cucina in comune)** — Cardedu
   - slug: `agriturismo-sa-perda-arrubia-solo-pernottamento-cardedu`
   - indirizzo: loc.perdarubia - strada provinciale s.paolo, 08040 Cardedu OG
22. **Agriturismo Su Barraccu** — Cardedu
   - slug: `agriturismo-su-barraccu-cardedu`
   - indirizzo: località Goene, 08040 Loceri OG
23. **Agriturismo Turudhis** — Cardedu
   - slug: `agriturismo-turudhis-cardedu`
   - indirizzo: Localita Turudhis Marina di Cea, 08048 Tortolì OG
24. **B&B Cardedu** — Cardedu
   - slug: `b-b-cardedu-cardedu`
   - indirizzo: Via Amsicora, 11, 08040 Cardedu OG
25. **@MYHOME** — Cardeto
   - slug: `myhome-cardeto`
   - indirizzo: Via Vittorio Veneto, 6, 89123 Reggio di Calabria RC
26. **Alfa & Phi (prezzo ridotto per prenotazioni dirette)** — Cardeto
   - slug: `alfa-phi-prezzo-ridotto-per-prenotazioni-dirette-cardeto`
   - indirizzo: Via Niccolò Tommaseo, 6/2° piano, 89124 Reggio di Calabria RC
27. **B&B Degli Ottimati** — Cardeto
   - slug: `b-b-degli-ottimati-cardeto`
   - indirizzo: Via Ottimati, 10, 89127 Reggio di Calabria RC
28. **C'ENTRO Hotel** — Cardeto
   - slug: `c-entro-hotel-cardeto`
   - indirizzo: Via San Paolo, 1, 89125 Reggio Calabria RC
29. **Malalbergo** — Cardeto
   - slug: `malalbergo-cardeto`
   - indirizzo: Via Giulia, 2B, 89125 Reggio di Calabria RC
30. **RighePois** — Cardeto
   - slug: `righepois-cardeto`
   - indirizzo: Via Gabriele D'Annunzio, 19, 89125 Reggio di Calabria RC
31. **B&B La Rotonda** — Cardito
   - slug: `b-b-la-rotonda-cardito`
   - indirizzo: Via Massimo Stanzione, 4, 80027 Frattamaggiore NA
32. **Oasi di Frattamaggiore** — Cardito
   - slug: `oasi-di-frattamaggiore-cardito`
   - indirizzo: Via Giovanni Pascoli, 15, 80027 Frattamaggiore NA
33. **Pavean Suites Frattaminore** — Cardito
   - slug: `pavean-suites-frattaminore-cardito`
   - indirizzo: Via Alcide De Gasperi, 10, 80020 Frattaminore NA
34. **Relax In Suite** — Cardito
   - slug: `relax-in-suite-cardito`
   - indirizzo: Via Emilio Scaglione, 281, 80145 Napoli NA
35. **B&B A Pochi Passi** — Card�
   - slug: `b-b-a-pochi-passi-card`
   - indirizzo: Via Fratelli Rosselli, 52, 70044 Polignano a Mare BA