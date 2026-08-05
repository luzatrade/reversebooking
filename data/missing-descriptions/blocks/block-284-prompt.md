# Blocco 284/500 — 35 strutture senza descrizione IT

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

1. **Wbh Bovisa** — Bollate
   - slug: `wbh-bovisa-bollate`
   - indirizzo: Via Fra Giovanni Pantaleo, 3, 20158 Milano MI
2. **7 Lakes - Aparthotel Rta** — Bollengo
   - slug: `7-lakes-aparthotel-rta-bollengo`
   - indirizzo: Strada Statale del Lago di Viverone, 24, 10010 Germanina TO
3. **B&B La Pausa - B&B economico del pellegrino sulla Via Francigena, vicino la Serra Morenica di Ivrea** — Bollengo
   - slug: `b-b-la-pausa-b-b-economico-del-pellegrino-sulla-bollengo`
   - indirizzo: Via G. Cossavella, 54A, 10012 Bollengo TO
4. **agriturismo "Borgo Madonna degli Angeli" (Farm holidays) - Residence & Village // NO RISTORAZIONE (e NO ingressi giornalieri)** — Bolognano
   - slug: `agriturismo-borgo-madonna-degli-angeli-farm-holi-bolognano`
   - indirizzo: Strada Provinciale Madonna degli Angeli, 13, 65028 Torre De' Passeri PE
5. **Agriturismo Il Casolare Di Nonno Mario.** — Bolognano
   - slug: `agriturismo-il-casolare-di-nonno-mario-bolognano`
   - indirizzo: Via Santa Maria Arabona, 129, 65024 Manoppello PE
6. **B&B Da Nonna Concetta** — Bolognano
   - slug: `b-b-da-nonna-concetta-bolognano`
   - indirizzo: Contrada Olivuccia 2, 65020 San Valentino in Abruzzo Citeriore PE
7. **B&b La Baronata - Pescosansonesco (Pe)** — Bolognano
   - slug: `b-b-la-baronata-pescosansonesco-pe-bolognano`
   - indirizzo: Via Municipio, 4, 65020 Pescosansonesco PE
8. **B&B la cascata** — Bolognano
   - slug: `b-b-la-cascata-bolognano`
   - indirizzo: Viale dei Colli, 65, 65020 Bolognano PE
9. **B&B La Cisterna di Bolognano** — Bolognano
   - slug: `b-b-la-cisterna-di-bolognano-bolognano`
   - indirizzo: Via Neviera, 25/27, 65010 Bolognano PE
10. **B&B La Maison de Martine** — Bolognano
   - slug: `b-b-la-maison-de-martine-bolognano`
   - indirizzo: Via di Sopra, 18, 65020 Bolognano PE
11. **B&B Villa Carolina** — Bolognano
   - slug: `b-b-villa-carolina-bolognano`
   - indirizzo: Viale della Repubblica, 84, 65029 San Valentino In Abruzzo Citeriore PE
12. **Villa Vista Monti** — Bolognano
   - slug: `villa-vista-monti-bolognano`
   - indirizzo: Santa Maria del Monte 1, 65020 Bolognano PE
13. **Agriturismo Sant'Agata** — Bolognetta
   - slug: `agriturismo-sant-agata-bolognetta`
   - indirizzo: Contrada Sant'Agata, 90037 Piana degli Albanesi PA
14. **Ai Monachelli** — Bolognetta
   - slug: `ai-monachelli-bolognetta`
   - indirizzo: Via Monachelli, 8, 90030 Bolognetta PA
15. **Albergo Casetta Bianca** — Bolognetta
   - slug: `albergo-casetta-bianca-bolognetta`
   - indirizzo: Via Enrico Alliata, 83, 90014 Casteldaccia PA
16. **B&B A' NASSA** — Bolognetta
   - slug: `b-b-a-nassa-bolognetta`
   - indirizzo: Via Cascino, 90019 Trabia PA
17. **B&B Puvogel** — Bolognetta
   - slug: `b-b-puvogel-bolognetta`
   - indirizzo: Via Pietro Sanfilippo, Via F. Crispi, snc, 90017 Porticello PA
18. **Dormo Da Lia Srl** — Bolognetta
   - slug: `dormo-da-lia-srl-bolognetta`
   - indirizzo: Via Case Nuove, 34, 90019 San Nicola l'Arena PA
19. **Flyhouse Sicilia** — Bolognetta
   - slug: `flyhouse-sicilia-bolognetta`
   - indirizzo: Via Gioacchino Rossini, 90037 Santa Cristina Gela PA
20. **Holiday StoppHouse** — Bolognetta
   - slug: `holiday-stopphouse-bolognetta`
   - indirizzo: Via L.25, 15, 90036 Portella di Mare PA
21. **Home from Home** — Bolognetta
   - slug: `home-from-home-bolognetta`
   - indirizzo: Strada Provinciale, Contrada Scozzari, 134, 90030 Bolognetta PA
22. **Villa Franca** — Bolognetta
   - slug: `villa-franca-bolognetta`
   - indirizzo: SS113, km, 90017 Santa Flavia PA
23. **Villa Matilde** — Bolognetta
   - slug: `villa-matilde-bolognetta`
   - indirizzo: Via Passi III, 90010 Altavilla Milicia PA
24. **Agriturismo Le Casette Fiastra** — Bolognola
   - slug: `agriturismo-le-casette-fiastra-bolognola`
   - indirizzo: Via Campobonomo, 26, 62035 Campobonomo MC
25. **Agriturismo Nonnu Luì** — Bolognola
   - slug: `agriturismo-nonnu-lui-bolognola`
   - indirizzo: villa, 8, 63857 Garulla Superiore FM
26. **B&B La Villa - Lago di Fiastra** — Bolognola
   - slug: `b-b-la-villa-lago-di-fiastra-bolognola`
   - indirizzo: Via Villa, 1, 62035 Fiastra MC
27. **Baita Solaria** — Bolognola
   - slug: `baita-solaria-bolognola`
   - indirizzo: Loc. Santa Maria Maddalena, 62028 Sarnano MC
28. **Fonte La Castellana** — Bolognola
   - slug: `fonte-la-castellana-bolognola`
   - indirizzo: Contrada Grassetti, 121, 62028 Sarnano MC
29. **Hermitage Sibillini** — Bolognola
   - slug: `hermitage-sibillini-bolognola`
   - indirizzo: Sassotetto, 4, 62028 Sarnano MC
30. **Hotel Bocaneve Ristorante** — Bolognola
   - slug: `hotel-bocaneve-ristorante-bolognola`
   - indirizzo: 62035 Bolognola MC, Italia
31. **Hotel Crystal** — Bolognola
   - slug: `hotel-crystal-bolognola`
   - indirizzo: Via Piè la Costa, 1/A, 62039 Ussita MC
32. **Hotel Eden** — Bolognola
   - slug: `hotel-eden-bolognola`
   - indirizzo: Via Alcide de Gasperi, 26, 62028 Sarnano MC
33. **Il Borgo delle Sibille** — Bolognola
   - slug: `il-borgo-delle-sibille-bolognola`
   - indirizzo: Via della Costa, 310, 62028 Sarnano MC
34. **LA CAPANNA - Pintura di Bolognola** — Bolognola
   - slug: `la-capanna-pintura-di-bolognola-bolognola`
   - indirizzo: 62035 Pintura MC
35. **La Locanda del Serafino** — Bolognola
   - slug: `la-locanda-del-serafino-bolognola`
   - indirizzo: via cairoli, 31a, 62028 Sarnano MC