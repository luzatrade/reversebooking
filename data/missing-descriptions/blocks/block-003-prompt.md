# Blocco 3/500 — 35 strutture senza descrizione IT

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

1. **B&B Villa Milena** — Accadia
   - slug: `b-b-villa-milena-accadia`
   - indirizzo: Contrada Stratola, 1 /B/2° piano, 83031 Ariano Irpino AV
2. **Bed & Wine Rocco Zambri** — Accadia
   - slug: `bed-wine-rocco-zambri-accadia`
   - indirizzo: Largo Impisi, 5, 71023 Bovino FG
3. **Camera a Sud** — Accadia
   - slug: `camera-a-sud-accadia`
   - indirizzo: Piazza Marino Boffa, 13, 71023 Bovino FG
4. **Casa Giò** — Accadia
   - slug: `casa-gio-accadia`
   - indirizzo: Contrada Scarnecchia, 42, 83031 Ariano Irpino AV
5. **Domus Ansantica** — Accadia
   - slug: `domus-ansantica-accadia`
   - indirizzo: Contrada Toppoli, 83050, 83050 Villamaina AV
6. **L'Antico Monastero** — Accadia
   - slug: `l-antico-monastero-accadia`
   - indirizzo: Via Santa Maria delle Grazie, 18, 71028 Sant'Agata di Puglia FG
7. **La Candela Affittacamere** — Accadia
   - slug: `la-candela-affittacamere-accadia`
   - indirizzo: viale REGINA ELENA,36, Viale Regina Elena, 48/E, 71024 Candela FG
8. **Locanda Ballarò** — Accadia
   - slug: `locanda-ballaro-accadia`
   - indirizzo: contrada varco sn, 71026 Deliceto FG
9. **Maison Antoinette, Accadia (FG), Italia** — Accadia
   - slug: `maison-antoinette-accadia-fg-italia-accadia`
   - indirizzo: Piazza SS. Pietro e Paolo, 71021 Accadia FG
10. **Palazzo Petrilli** — Accadia
   - slug: `palazzo-petrilli-accadia`
   - indirizzo: Via Petrilli Nicola, 6, 83058 Trevico AV
11. **Residenza Sant'Antonio** — Accadia
   - slug: `residenza-sant-antonio-accadia`
   - indirizzo: Via Giuseppe Bracca, 33, 71023 Deliceto FG
12. **VIENIACASACCADIA** — Accadia
   - slug: `vieniacasaccadia-accadia`
   - indirizzo: Contrada rochiano, 71021 Accadia FG
13. **Villa Aurora** — Accadia
   - slug: `villa-aurora-accadia`
   - indirizzo: Contrada Piscone, 17, 83030 Villanova del Battista AV
14. **Villa Genny** — Accadia
   - slug: `villa-genny-accadia`
   - indirizzo: Viale Regina Margherita, 5, 71024 Candela FG
15. **Albergo Monte Nebin** — Acceglio
   - slug: `albergo-monte-nebin-acceglio`
   - indirizzo: Via Cavour, 26, 12020 Sampeyre CN
16. **Albergo Ristorante Le Marmotte** — Acceglio
   - slug: `albergo-ristorante-le-marmotte-acceglio`
   - indirizzo: Borgo Frere, 53, 12021 Acceglio CN
17. **Albergo Ristorante Ligure Di Soldà Debora e Soldà Barbara sas** — Acceglio
   - slug: `albergo-ristorante-ligure-di-solda-debora-e-sold-acceglio`
   - indirizzo: Via Vittorio Emanuele III, 3, 12010 Vinadio CN
18. **Albergo Roburent** — Acceglio
   - slug: `albergo-roburent-acceglio`
   - indirizzo: Via Nazionale, 15, 12010 Villaggio Primavera CN
19. **Antica Casa Occitana** — Acceglio
   - slug: `antica-casa-occitana-acceglio`
   - indirizzo: Borgata Palazzo, 24, 12020 Sampeyre CN
20. **Brieis Relais Alpino - Camere, Ristorante & Spa** — Acceglio
   - slug: `brieis-relais-alpino-camere-ristorante-spa-acceglio`
   - indirizzo: Borgata Brieis, 1, 12020 Marmora CN
21. **Hotel Alpi Cozie** — Acceglio
   - slug: `hotel-alpi-cozie-acceglio`
   - indirizzo: Borgo Villa, 109, 12021 Acceglio CN
22. **HOTEL LONDRA - Locanda Occitana - Quality Hotels** — Acceglio
   - slug: `hotel-londra-locanda-occitana-quality-hotels-acceglio`
   - indirizzo: Borgo Villa, 39, 12021 Acceglio CN
23. **Hotel Residence Torinetto** — Acceglio
   - slug: `hotel-residence-torinetto-acceglio`
   - indirizzo: Borgata Calchesio, 9, 12020 Sampeyre CN
24. **La Caso d'Elva - La tàula de m'aura** — Acceglio
   - slug: `la-caso-d-elva-la-taula-de-m-aura-acceglio`
   - indirizzo: Borgata Isaia, 12020 Elva CN
25. **La Locanda di Chialvetta** — Acceglio
   - slug: `la-locanda-di-chialvetta-acceglio`
   - indirizzo: Borgo Chialvetta, 18, 12021 Acceglio CN
26. **La Meiro** — Acceglio
   - slug: `la-meiro-acceglio`
   - indirizzo: Via dei Pinet, 1, 12020 Castelmagno CN
27. **Locanda Mistral** — Acceglio
   - slug: `locanda-mistral-acceglio`
   - indirizzo: Borgata Ponte Maira, 26, 12021 Ponte Maira CN
28. **Locanda Occitana Lou Pitavin** — Acceglio
   - slug: `locanda-occitana-lou-pitavin-acceglio`
   - indirizzo: Borgata Finello, 2, 12020 Marmora CN
29. **Morier** — Acceglio
   - slug: `morier-acceglio`
   - indirizzo: 12014 Demonte CN
30. **Oronaye Bed and Breakfast Acceglio - Valle Maira** — Acceglio
   - slug: `oronaye-bed-and-breakfast-acceglio-valle-maira-acceglio`
   - indirizzo: Frazione Chiappera 72, 12021 Acceglio CN
31. **Rifugio di Viviere** — Acceglio
   - slug: `rifugio-di-viviere-acceglio`
   - indirizzo: Borgata Viviere, 12021 Acceglio CN
32. **RIFUGIO LOU LINDAL** — Acceglio
   - slug: `rifugio-lou-lindal-acceglio`
   - indirizzo: Borgata Preit, 1, 12020 Canosio CN
33. **Sagna Rotonda** — Acceglio
   - slug: `sagna-rotonda-acceglio`
   - indirizzo: Borgata Sagna Rotonda, 12020 Marmora CN
34. **Visaisa Taverna & Foresteria** — Acceglio
   - slug: `visaisa-taverna-foresteria-acceglio`
   - indirizzo: Borgo Saretto, 6, 12021 Acceglio CN
35. **Agriturismo Grotta dell'Eremita** — Accettura
   - slug: `agriturismo-grotta-dell-eremita-accettura`
   - indirizzo: Contrada, 1, 85010 Castelmezzano PZ