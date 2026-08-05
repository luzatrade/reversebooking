# Blocco 243/500 — 35 strutture senza descrizione IT

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

1. **Masseria Belfiore** — Belfiore
   - slug: `masseria-belfiore-belfiore`
   - indirizzo: S.P. 28 Ostuni – Francavilla Fontana Km 6, 72017 Contrada Boccadoro, Ostuni BR
2. **Villa Belfiore Hotel** — Belfiore
   - slug: `villa-belfiore-hotel-belfiore`
   - indirizzo: Via Pioppa, 27, 44020 Ostellato FE
3. **Agriturismo Ca'Betania** — Belforte all'Isauro
   - slug: `agriturismo-ca-betania-belforte-all-isauro`
   - indirizzo: Localita Betania, 34, 61040 Mercatello sul Metauro PU
4. **Albergo Balcone Sul Metauro** — Belforte all'Isauro
   - slug: `albergo-balcone-sul-metauro-belforte-all-isauro`
   - indirizzo: Via Alessandro Manzoni, 20, 61049 Peglio PU
5. **Albergo Ester** — Belforte all'Isauro
   - slug: `albergo-ester-belforte-all-isauro`
   - indirizzo: Corso Giovanni XXIII, 56, 61026 Piandimeleto PU
6. **Antica Locanda La Diligenza** — Belforte all'Isauro
   - slug: `antica-locanda-la-diligenza-belforte-all-isauro`
   - indirizzo: Piazza del Pino, 9, 61040 Borgo Pace PU
7. **B&B "La Pace"** — Belforte all'Isauro
   - slug: `b-b-la-pace-belforte-all-isauro`
   - indirizzo: Località Campo Località Bottegno snc, 61026 Belforte all'isauro PU
8. **B&B Country House Locanda Le Querce** — Belforte all'Isauro
   - slug: `b-b-country-house-locanda-le-querce-belforte-all-isauro`
   - indirizzo: Località Calmugnaio, 103, 61020 Frontino PU
9. **Hotel Anna** — Belforte all'Isauro
   - slug: `hotel-anna-belforte-all-isauro`
   - indirizzo: Vicolo Francioni, 4, 61021 Carpegna PU
10. **Hotel Arca** — Belforte all'Isauro
   - slug: `hotel-arca-belforte-all-isauro`
   - indirizzo: Via P. Gori, 71, 61028 Sassocorvaro PU
11. **Hotel Ristorante Santa Chiara da Franco** — Belforte all'Isauro
   - slug: `hotel-ristorante-santa-chiara-da-franco-belforte-all-isauro`
   - indirizzo: Corso Giuseppe Garibaldi, 26, 61048 Sant'Angelo in Vado PU
12. **Hotel Ulisse** — Belforte all'Isauro
   - slug: `hotel-ulisse-belforte-all-isauro`
   - indirizzo: Via Nicola Amaducci, 16, 61021 Carpegna PU
13. **Il Poggio** — Belforte all'Isauro
   - slug: `il-poggio-belforte-all-isauro`
   - indirizzo: Via Poggio, 22, 61021 Carpegna PU
14. **La Grotta dei Folletti** — Belforte all'Isauro
   - slug: `la-grotta-dei-folletti-belforte-all-isauro`
   - indirizzo: Località Bruciata, 29/a, 61040 Mercatello sul Metauro PU
15. **Locanda delle Storie** — Belforte all'Isauro
   - slug: `locanda-delle-storie-belforte-all-isauro`
   - indirizzo: Via Castello, 10, 61023 Pietrarubbia PU
16. **Palazzo Santinelli B&b** — Belforte all'Isauro
   - slug: `palazzo-santinelli-b-b-belforte-all-isauro`
   - indirizzo: Corso Giuseppe Garibaldi, 20, 61048 Sant'Angelo in Vado PU
17. **Residenza d'epoca San Girolamo Casa e Vacanza Location per Eventi Frontino** — Belforte all'Isauro
   - slug: `residenza-d-epoca-san-girolamo-casa-e-vacanza-lo-belforte-all-isauro`
   - indirizzo: Via San Girolamo, 61021 Frontino PU
18. **Ristorante locanda Il Mandriano** — Belforte all'Isauro
   - slug: `ristorante-locanda-il-mandriano-belforte-all-isauro`
   - indirizzo: Via Cantoniera, 70, 61021 Carpegna PU
19. **Agriturismo Colle Casini Cortesi** — Belforte del Chienti
   - slug: `agriturismo-colle-casini-cortesi-belforte-del-chienti`
   - indirizzo: contrada Collarsone 10, 62020 Caldarola MC
20. **Agriturismo Colle Regnano** — Belforte del Chienti
   - slug: `agriturismo-colle-regnano-belforte-del-chienti`
   - indirizzo: Contrada Casadicristo, 11, 62029 Tolentino MC
21. **Agriturismo Villa Ninetta** — Belforte del Chienti
   - slug: `agriturismo-villa-ninetta-belforte-del-chienti`
   - indirizzo: Contrada San Pietro, 4, 62020 Caldarola MC
22. **Albergo Ristorante Da Lorè** — Belforte del Chienti
   - slug: `albergo-ristorante-da-lore-belforte-del-chienti`
   - indirizzo: Via Nazionale, 34, 62020 Serrapetrona MC
23. **Azzurro di Vallepietra** — Belforte del Chienti
   - slug: `azzurro-di-vallepietra-belforte-del-chienti`
   - indirizzo: Contrada Case Nuove 13/a, 62020 Camporotondo di Fiastrone MC
24. **b&b antegiano** — Belforte del Chienti
   - slug: `b-b-antegiano-belforte-del-chienti`
   - indirizzo: Via Madonna d'Antegiano, 3, 62020 Belforte del Chienti MC
25. **B&B La Mimosa** — Belforte del Chienti
   - slug: `b-b-la-mimosa-belforte-del-chienti`
   - indirizzo: Via Palmiro Togliatti, 10, 62020 Belforte del Chienti MC
26. **Bed & Breakfast La Pinturetta** — Belforte del Chienti
   - slug: `bed-breakfast-la-pinturetta-belforte-del-chienti`
   - indirizzo: Via Fornaci, 26, 62020 Belforte del Chienti MC
27. **Chiaroscuro Belforte Del Chienti Hotel** — Belforte del Chienti
   - slug: `chiaroscuro-belforte-del-chienti-hotel-belforte-del-chienti`
   - indirizzo: Via Nazionale, 29, 62020 Belforte del Chienti MC
28. **Collina d’Oro** — Belforte del Chienti
   - slug: `collina-d-oro-belforte-del-chienti`
   - indirizzo: Via Fornaci sabine, 6, 62020 Belforte del Chienti MC
29. **Coroncina Country Relais** — Belforte del Chienti
   - slug: `coroncina-country-relais-belforte-del-chienti`
   - indirizzo: Via Fossa, 1, 62020 Belforte del Chienti MC
30. **Country House L'Incanto dei Sibillini** — Belforte del Chienti
   - slug: `country-house-l-incanto-dei-sibillini-belforte-del-chienti`
   - indirizzo: SP 502, Km 68/750, 62020 Casigliano MC
31. **Due Torri** — Belforte del Chienti
   - slug: `due-torri-belforte-del-chienti`
   - indirizzo: Via S. Francesco, 21, 62027 San Severino Marche MC
32. **Hotel Cluentum** — Belforte del Chienti
   - slug: `hotel-cluentum-belforte-del-chienti`
   - indirizzo: Nuova S.S, Contrada S. Martino, 77 Km 69 + 141, 62029 Tolentino MC
33. **Hotel Milano** — Belforte del Chienti
   - slug: `hotel-milano-belforte-del-chienti`
   - indirizzo: Via Roma, 13, 62029 Tolentino MC
34. **Hotel Ristorante Ferranti** — Belforte del Chienti
   - slug: `hotel-ristorante-ferranti-belforte-del-chienti`
   - indirizzo: Via Nazionale, 60, 62020 Serrapetrona MC
35. **Hotel Ristorante Il Cavaliere** — Belforte del Chienti
   - slug: `hotel-ristorante-il-cavaliere-belforte-del-chienti`
   - indirizzo: Via Mariani, 33, 62032 Polverina MC