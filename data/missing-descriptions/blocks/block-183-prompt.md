# Blocco 183/500 — 35 strutture senza descrizione IT

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

1. **B&B Le Maddalene - Boutique Hotel** — Avigliana
   - slug: `b-b-le-maddalene-boutique-hotel-avigliana`
   - indirizzo: Via delle Maddalene, 13, 10051 Avigliana TO
2. **B&B Novecento** — Avigliana
   - slug: `b-b-novecento-avigliana`
   - indirizzo: Corso Laghi, 42, 10051 Avigliana TO
3. **Hotel Chalet del Lago Avigliana** — Avigliana
   - slug: `hotel-chalet-del-lago-avigliana-avigliana`
   - indirizzo: Via Monginevro, 26, 10051 Avigliana TO
4. **Hotel Ninfa** — Avigliana
   - slug: `hotel-ninfa-avigliana`
   - indirizzo: Viale M. Gandhi, 9, 10051 Avigliana TO
5. **Locanda Monte San Giorgio** — Avigliana
   - slug: `locanda-monte-san-giorgio-avigliana`
   - indirizzo: Via Al Piano dei Castelli, 6, 10045 Piossasco TO
6. **B&B "La Dimora di Federico" di Canestrini Vitina** — Avigliano
   - slug: `b-b-la-dimora-di-federico-di-canestrini-vitina-avigliano`
   - indirizzo: Via Dante Alighieri, 85021 Lagopesole PZ
7. **B&B La Pigna** — Avigliano
   - slug: `b-b-la-pigna-avigliano`
   - indirizzo: Via Carabiniere Giovanni Ferullo, 85020 Filiano PZ
8. **B&B Le Gemme** — Avigliano
   - slug: `b-b-le-gemme-avigliano`
   - indirizzo: Via Lucania, 2, 85021 Lagopesole PZ
9. **Bed and breakfast Ruoti 1885** — Avigliano
   - slug: `bed-and-breakfast-ruoti-1885-avigliano`
   - indirizzo: Str. Ponte, 7, 85056 Ruoti PZ
10. **Gianturco Bed & Breakfast** — Avigliano
   - slug: `gianturco-bed-breakfast-avigliano`
   - indirizzo: Piazza Gianturco, 35, 85021 Avigliano PZ
11. **Hotel Natura** — Avigliano
   - slug: `hotel-natura-avigliano`
   - indirizzo: CONTRADA ABETINA, 2, 85056 Ruoti PZ
12. **Hotel Ristorante Summa** — Avigliano
   - slug: `hotel-ristorante-summa-avigliano`
   - indirizzo: Via delle Ginestre, 6, 85021 Avigliano PZ
13. **Juppi bed** — Avigliano
   - slug: `juppi-bed-avigliano`
   - indirizzo: Via Nazionale, 85021 Possidente PZ
14. **L’Arco Bed&Breakfast** — Avigliano
   - slug: `l-arco-bed-breakfast-avigliano`
   - indirizzo: via libertà, 13, 85021 Avigliano PZ
15. **Residence le Palme** — Avigliano
   - slug: `residence-le-palme-avigliano`
   - indirizzo: Via dei Mille, 45/f 85100, 85100 Potenza PZ
16. **San Lorenzo B&B** — Avigliano
   - slug: `san-lorenzo-b-b-avigliano`
   - indirizzo: Str. Taverna Penta, 8, 85056 Ruoti PZ
17. **TRE CANCELLI ROOMS** — Avigliano
   - slug: `tre-cancelli-rooms-avigliano`
   - indirizzo: Via Potito Petrone, 85100 Potenza PZ
18. **Agriturismo Cerqueti** — Avigliano Umbro
   - slug: `agriturismo-cerqueti-avigliano-umbro`
   - indirizzo: Vocabolo cerqueti, 05023 Morre TR
19. **Agriturismo Pane e Olio** — Avigliano Umbro
   - slug: `agriturismo-pane-e-olio-avigliano-umbro`
   - indirizzo: Fraz. Vasciano 22/L, 06059 Todi PG
20. **Agriturismo Pian delle Rose** — Avigliano Umbro
   - slug: `agriturismo-pian-delle-rose-avigliano-umbro`
   - indirizzo: Via Madonna delle Grazie, 8F, 05020 Avigliano Umbro TR
21. **Agriturismo Podere Acqualoreto** — Avigliano Umbro
   - slug: `agriturismo-podere-acqualoreto-avigliano-umbro`
   - indirizzo: Via Vocabolo Monneie, 24, 05023 Baschi TR
22. **B&B IL PINO CEDRO** — Avigliano Umbro
   - slug: `b-b-il-pino-cedro-avigliano-umbro`
   - indirizzo: Voc. Fontanamaio, 19, 05020 Avigliano Umbro TR
23. **Borgo Callauzzo Country House** — Avigliano Umbro
   - slug: `borgo-callauzzo-country-house-avigliano-umbro`
   - indirizzo: Vocabolo Callauzzo, 05020 Sismano TR
24. **Il Casale Di Mario** — Avigliano Umbro
   - slug: `il-casale-di-mario-avigliano-umbro`
   - indirizzo: Via Todi, 41, 05020 Montecchio TR
25. **La Pupazza Bed & Breakfast** — Avigliano Umbro
   - slug: `la-pupazza-bed-breakfast-avigliano-umbro`
   - indirizzo: Vocabolo Pantane, 50, 05020 Montecastrilli TR
26. **LaZita B&B** — Avigliano Umbro
   - slug: `lazita-b-b-avigliano-umbro`
   - indirizzo: SP38, Via San Giuseppe, 4, 05026 Castel dell'Aquila TR
27. **Agriturismo Al Palazzo** — Avio
   - slug: `agriturismo-al-palazzo-avio`
   - indirizzo: Piazza Marconi, 37020 Brentino VR
28. **Albergo Avio** — Avio
   - slug: `albergo-avio-avio`
   - indirizzo: Via Roma, 26, 25050 Temù BS
29. **Albergo Ristorante Alpino "Da Tullio"** — Avio
   - slug: `albergo-ristorante-alpino-da-tullio-avio`
   - indirizzo: Localita Madonna della Neve, 38063 Avio TN
30. **Baitone Alpino Nature Village** — Avio
   - slug: `baitone-alpino-nature-village-avio`
   - indirizzo: Via Gardesana, 516, 37018 Malcesine VR
31. **Hotel Corona** — Avio
   - slug: `hotel-corona-avio`
   - indirizzo: Via Centro, 1, 37013 Spiazzi VR
32. **Hotel Ristorante Pizzeria Belvedere** — Avio
   - slug: `hotel-ristorante-pizzeria-belvedere-avio`
   - indirizzo: Via Don Cesare Scala, 31, 37020 Brentino Belluno VR
33. **Hotel Zeni** — Avio
   - slug: `hotel-zeni-avio`
   - indirizzo: Via Roma, 16, 38060 Brentonico TN
34. **Perotti Mario e C. - Piccolo Fiore** — Avio
   - slug: `perotti-mario-e-c-piccolo-fiore-avio`
   - indirizzo: Viale Alcide Degasperi, 13, 38063 Avio TN
35. **Villa Monica** — Avio
   - slug: `villa-monica-avio`
   - indirizzo: Via Mantova, 8, 38060 Brentonico TN