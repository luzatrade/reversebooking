# Blocco 197/500 — 35 strutture senza descrizione IT

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

1. **Hotel Terme Bagni di Lucca** — Bagni di Lucca
   - slug: `hotel-terme-bagni-di-lucca-bagni-di-lucca`
   - indirizzo: Via del Paretaio, 1, 55021 Bagni di Lucca LU
2. **La Locanda Di Pio Di Leseanu Daniela C. S.A.S.** — Bagni di Lucca
   - slug: `la-locanda-di-pio-di-leseanu-daniela-c-s-a-s-bagni-di-lucca`
   - indirizzo: Via Selve, 15, 55022 Bagni di Lucca LU
3. **La Ninfa • Hotel & Ristorante** — Bagni di Lucca
   - slug: `la-ninfa-hotel-ristorante-bagni-di-lucca`
   - indirizzo: Via di Serraglia, 78, 55022 Bagni di Lucca LU
4. **Park Hotel Regina - Piscine riscaldate** — Bagni di Lucca
   - slug: `park-hotel-regina-piscine-riscaldate-bagni-di-lucca`
   - indirizzo: Viale Umberto I', 157, 55022 Bagni di Lucca LU
5. **Tenuta la Fratta** — Bagni di Lucca
   - slug: `tenuta-la-fratta-bagni-di-lucca`
   - indirizzo: Loc.la Fratta, 55022 Fornoli LU
6. **Villa Debora Bed & Breakfast** — Bagni di Lucca
   - slug: `villa-debora-bed-breakfast-bagni-di-lucca`
   - indirizzo: Via Controneria, 1, 55022 Bagni di Lucca LU
7. **Villa Lucchesi** — Bagni di Lucca
   - slug: `villa-lucchesi-bagni-di-lucca`
   - indirizzo: Viale Roma, 24, 55022 Bagni di Lucca LU
8. **Villa Rosalena** — Bagni di Lucca
   - slug: `villa-rosalena-bagni-di-lucca`
   - indirizzo: loc. Camaione di sotto 21Ponte a Serraglio, 55022 Bagni di Lucca LU
9. **Agriturismo Villa Dauphiné** — Bagno a Ripoli
   - slug: `agriturismo-villa-dauphine-bagno-a-ripoli`
   - indirizzo: Via Roma, 563, 50012 Bagno A Ripoli FI
10. **Antella Residence** — Bagno a Ripoli
   - slug: `antella-residence-bagno-a-ripoli`
   - indirizzo: Bagno a Ripoli FI IT, Via Romanelli, 37/B, 50012 Antella FI
11. **B&B Dolce Miele** — Bagno a Ripoli
   - slug: `b-b-dolce-miele-bagno-a-ripoli`
   - indirizzo: Via della Martellina, 40E, 50012 Bagno A Ripoli FI
12. **b&b i due cipressi** — Bagno a Ripoli
   - slug: `b-b-i-due-cipressi-bagno-a-ripoli`
   - indirizzo: Via di Vacciano, 26, 50012 Grassina FI
13. **B&B Il Tabernacolo** — Bagno a Ripoli
   - slug: `b-b-il-tabernacolo-bagno-a-ripoli`
   - indirizzo: Via Aretina, 45, 50136 Firenze FI
14. **Casa Martellina - Holiday Home** — Bagno a Ripoli
   - slug: `casa-martellina-holiday-home-bagno-a-ripoli`
   - indirizzo: Via della Martellina, 15, 50012 Bagno A Ripoli FI
15. **Florence Country Relais** — Bagno a Ripoli
   - slug: `florence-country-relais-bagno-a-ripoli`
   - indirizzo: Pian di Mugnone, 2, 50014 Fiesole FI
16. **Hotel Bologna** — Bagno a Ripoli
   - slug: `hotel-bologna-bagno-a-ripoli`
   - indirizzo: Via Orcagna, 50, 50121 Firenze FI
17. **Hotel Grifone Firenze** — Bagno a Ripoli
   - slug: `hotel-grifone-firenze-bagno-a-ripoli`
   - indirizzo: Via Gaetano Pilati, 20/22, 50136 Firenze FI
18. **Hotel Villa Olmi Firenze** — Bagno a Ripoli
   - slug: `hotel-villa-olmi-firenze-bagno-a-ripoli`
   - indirizzo: Via Del Crocifisso Del Lume, 18, 50126 Firenze FI
19. **hu Firenze camping in town** — Bagno a Ripoli
   - slug: `hu-firenze-camping-in-town-bagno-a-ripoli`
   - indirizzo: Via Generale C. A. dalla Chiesa, 1/3, 50136 Firenze FI
20. **Il porto relais b&b** — Bagno a Ripoli
   - slug: `il-porto-relais-b-b-bagno-a-ripoli`
   - indirizzo: Via Alessandro Sinigaglia, 50012 Bagno a Ripoli FI
21. **Italiana Hotels** — Bagno a Ripoli
   - slug: `italiana-hotels-bagno-a-ripoli`
   - indirizzo: Viale Europa, 205, 50126 Firenze FI
22. **La Corte di Ripoli** — Bagno a Ripoli
   - slug: `la-corte-di-ripoli-bagno-a-ripoli`
   - indirizzo: Via della Nave A Rovezzano, 16, 50012 Bagno a Ripoli FI
23. **Le Civette Country Resort** — Bagno a Ripoli
   - slug: `le-civette-country-resort-bagno-a-ripoli`
   - indirizzo: Via del Carota, 3, 50012 Bagno a Ripoli FI
24. **Poggio Baronti B&B** — Bagno a Ripoli
   - slug: `poggio-baronti-b-b-bagno-a-ripoli`
   - indirizzo: Via dell'Eremo, 3, 50012 Bagno a Ripoli FI
25. **Together Florence Urban Resort** — Bagno a Ripoli
   - slug: `together-florence-urban-resort-bagno-a-ripoli`
   - indirizzo: Via Alcide de Gasperi, 6, 50012 Bagno a Ripoli FI
26. **Villa il Colle B&B** — Bagno a Ripoli
   - slug: `villa-il-colle-b-b-bagno-a-ripoli`
   - indirizzo: Bagno a Ripoli FI IT, Via Montisoni, 45, 50012 Antella FI
27. **Villa Il Padule B&B Dimora Storica Firenze Sud** — Bagno a Ripoli
   - slug: `villa-il-padule-b-b-dimora-storica-firenze-sud-bagno-a-ripoli`
   - indirizzo: Via del Padule, 33, 50012 Bagno a Ripoli FI
28. **Villa Medicea di Lilliano, Wine Estate** — Bagno a Ripoli
   - slug: `villa-medicea-di-lilliano-wine-estate-bagno-a-ripoli`
   - indirizzo: Via Lilliano e Meoli, 82, 50012 Grassina FI
29. **Agriturismo al Monte** — Bagno di Romagna
   - slug: `agriturismo-al-monte-bagno-di-romagna`
   - indirizzo: Via Montegranelli Montesalvetti, 17, 47021 Bagno di Romagna FC
30. **Agriturismo Incisa** — Bagno di Romagna
   - slug: `agriturismo-incisa-bagno-di-romagna`
   - indirizzo: Località Incisa, 233, 47021 Bagno di Romagna FC
31. **Albergo Del Ponte** — Bagno di Romagna
   - slug: `albergo-del-ponte-bagno-di-romagna`
   - indirizzo: Via Camillo Benso Conte di Cavour, 42, 47021 San Piero In Bagno FC
32. **Albergo Roma** — Bagno di Romagna
   - slug: `albergo-roma-bagno-di-romagna`
   - indirizzo: Via Della Fonte, 2, 47021 Bagno di Romagna FC
33. **Borgo I Tre Baroni** — Bagno di Romagna
   - slug: `borgo-i-tre-baroni-bagno-di-romagna`
   - indirizzo: Via di Camaldoli, 52, 52014 Moggiona AR
34. **Ca' Serafina** — Bagno di Romagna
   - slug: `ca-serafina-bagno-di-romagna`
   - indirizzo: Piazza Ricasoli, 8, 47021 Bagno di Romagna FC
35. **Hotel Balneum** — Bagno di Romagna
   - slug: `hotel-balneum-bagno-di-romagna`
   - indirizzo: Via Lungo Savio, 17, 47021 Bagno di Romagna FC