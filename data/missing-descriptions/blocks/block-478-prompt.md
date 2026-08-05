# Blocco 478/500 — 35 strutture senza descrizione IT

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

1. **Hotel 5 Terre** — Cinque Terre
   - slug: `hotel-5-terre-cinque-terre`
   - indirizzo: Via IV Novembre, 21, 19016 Monterosso al Mare SP
2. **Hotel la Spiaggia** — Cinque Terre
   - slug: `hotel-la-spiaggia-cinque-terre`
   - indirizzo: Via Fegina, 96, 19016 Monterosso al Mare SP
3. **Hotel Margherita** — Cinque Terre
   - slug: `hotel-margherita-cinque-terre`
   - indirizzo: Via Roma, 72, 19016 Monterosso al Mare SP
4. **Hotel Marina** — Cinque Terre
   - slug: `hotel-marina-cinque-terre`
   - indirizzo: zona traffico limitato, parcheggio su prenotazione, https://maps.app.goo.gl/YUHSc3yBjd2KFGh67?g_st=com.google.maps.preview, Via Buranco, 40, 19016 Monterosso al Mare SP
5. **Hotel Palme** — Cinque Terre
   - slug: `hotel-palme-cinque-terre`
   - indirizzo: Via IV Novembre, 18, 19016 Monterosso al Mare SP
6. **Hotel Pasquale** — Cinque Terre
   - slug: `hotel-pasquale-cinque-terre`
   - indirizzo: Via Fegina, 4, 19016 Monterosso al Mare SP
7. **Hotel Ristorante Porto Roca** — Cinque Terre
   - slug: `hotel-ristorante-porto-roca-cinque-terre`
   - indirizzo: Via Corone, 1, 19016 Monterosso al Mare SP
8. **Hotel Souvenir** — Cinque Terre
   - slug: `hotel-souvenir-cinque-terre`
   - indirizzo: Via Vincenzo Gioberti, 24, 19016 Monterosso al Mare SP
9. **La Cabana Rooms** — Cinque Terre
   - slug: `la-cabana-rooms-cinque-terre`
   - indirizzo: Loc. La Cabana, 2, 19016 Monterosso al Mare SP
10. **Villino Wanda** — Cinque Terre
   - slug: `villino-wanda-cinque-terre`
   - indirizzo: Via IV Novembre, 72, 19016 Monterosso al Mare SP
11. **Agriturismo Case Tabarani** — Collesano
   - slug: `agriturismo-case-tabarani-collesano`
   - indirizzo: C/da Tabarani, 90016 Collesano PA
12. **Agriturismo Dispenza** — Collesano
   - slug: `agriturismo-dispenza-collesano`
   - indirizzo: SP9, 90016 Collesano PA
13. **Agriturismo Ilardo** — Collesano
   - slug: `agriturismo-ilardo-collesano`
   - indirizzo: c/da favara, 90016 Collesano PA
14. **Agriturismo Volpignano** — Collesano
   - slug: `agriturismo-volpignano-collesano`
   - indirizzo: Contrada Volpignano, 90016 Collesano PA
15. **AZIENDA AGRICOLA ROCCA DI MEZZOGIORNO** — Collesano
   - slug: `azienda-agricola-rocca-di-mezzogiorno-collesano`
   - indirizzo: Contrada, 90020 Scillato PA
16. **Bed & Breakfast Arcobaleno Cefalù** — Collesano
   - slug: `bed-breakfast-arcobaleno-cefalu-collesano`
   - indirizzo: Via dei Francescani, 90015 Cefalù PA
17. **Casena Mongerrati** — Collesano
   - slug: `casena-mongerrati-collesano`
   - indirizzo: 90016 Mongerrati PA
18. **Da Concettina** — Collesano
   - slug: `da-concettina-collesano`
   - indirizzo: Salita Orologio, 6, 90010 Gratteri PA
19. **Piano Torre Park Hotel** — Collesano
   - slug: `piano-torre-park-hotel-collesano`
   - indirizzo: Contrada Piano Torre, 90010 Isnello PA
20. **Abraxia B&B** — Comiso
   - slug: `abraxia-b-b-comiso`
   - indirizzo: Piazza S. Biagio, 15, 97013 Comiso RG
21. **Abraxia Guest House** — Comiso
   - slug: `abraxia-guest-house-comiso`
   - indirizzo: Viale Europa, 3, 97013 Comiso RG
22. **Antares** — Comiso
   - slug: `antares-comiso`
   - indirizzo: Via Imbriani, 10, 97013 Comiso RG
23. **Artemisia Resort, Hotel Ragusa** — Comiso
   - slug: `artemisia-resort-hotel-ragusa-comiso`
   - indirizzo: Via Enrico Caruso, 13, 97100 Ragusa RG
24. **Hotel Poggio Del Sole** — Comiso
   - slug: `hotel-poggio-del-sole-comiso`
   - indirizzo: SP25, Km 5,7, 97100 Ragusa RG
25. **la TerrazzaSPA B&B** — Comiso
   - slug: `la-terrazzaspa-b-b-comiso`
   - indirizzo: Via Generale Amato, 102 II° e III° Piano, 97013 Comiso RG
26. **Relais Parco Cavalonga Hotel** — Comiso
   - slug: `relais-parco-cavalonga-hotel-comiso`
   - indirizzo: SP80, km 3.200, 97100 Donnafugata RG
27. **Thomas'home Comiso** — Comiso
   - slug: `thomas-home-comiso-comiso`
   - indirizzo: Via Spallanzani, 66, 97013 Comiso RG
28. **A Due Passi Dal Centro Sweet rooms** — Comitini
   - slug: `a-due-passi-dal-centro-sweet-rooms-comitini`
   - indirizzo: Via II Ortolani, 4, 92100 Agrigento AG
29. **B&B Holiday Home Zolfare** — Comitini
   - slug: `b-b-holiday-home-zolfare-comitini`
   - indirizzo: Via Vittorio Emanuele II, 90, 92020 Comitini AG
30. **B&B My Home** — Comitini
   - slug: `b-b-my-home-comitini`
   - indirizzo: Via Imera, 280, 92100 Agrigento AG
31. **Casa di Luca** — Comitini
   - slug: `casa-di-luca-comitini`
   - indirizzo: Via Barone Lamberto Montaperto, 3, 92100 Agrigento AG
32. **Cortile Baronello** — Comitini
   - slug: `cortile-baronello-comitini`
   - indirizzo: Cortile Baronello, 15, 92100 Agrigento AG
33. **Dimora Fraula Casa Vacanze** — Comitini
   - slug: `dimora-fraula-casa-vacanze-comitini`
   - indirizzo: Via S. Leonardo, 8, 92100 Agrigento AG
34. **Guest House Artemide** — Comitini
   - slug: `guest-house-artemide-comitini`
   - indirizzo: Via Gioeni, 57, 92100 Agrigento AG
35. **KALGHEROS** — Comitini
   - slug: `kalgheros-comitini`
   - indirizzo: Via Atenea, 305, 92100 Agrigento AG