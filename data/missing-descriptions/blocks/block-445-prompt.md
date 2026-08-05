# Blocco 445/500 — 35 strutture senza descrizione IT

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

1. **Residence Albergo Tre Re** — Carpineti
   - slug: `residence-albergo-tre-re-carpineti`
   - indirizzo: Via Roma, 17, 42035 Castelnovo ne' Monti RE
2. **Ristorante Al Ciocco** — Carpineti
   - slug: `ristorante-al-ciocco-carpineti`
   - indirizzo: Via Palloncino-tia, 2, 41045 Farneta MO
3. **Villa Clorè Hotel & Spa** — Carpineti
   - slug: `villa-clore-hotel-spa-carpineti`
   - indirizzo: Via per Palagano, 9, 41023 Lama Mocogno MO
4. **Agriturismo Via Del Campo** — Carpineto della Nora
   - slug: `agriturismo-via-del-campo-carpineto-della-nora`
   - indirizzo: Contrada Le Monache, 9, 65019 Pianella PE
5. **ALMOND B&B** — Carpineto della Nora
   - slug: `almond-b-b-carpineto-della-nora`
   - indirizzo: Vico Fonte Umano, 12, 65013 Fonte Umano PE
6. **B&B Aterno** — Carpineto della Nora
   - slug: `b-b-aterno-carpineto-della-nora`
   - indirizzo: Via Aterno, 65015 Montesilvano PE
7. **B&B Don Pasquale** — Carpineto della Nora
   - slug: `b-b-don-pasquale-carpineto-della-nora`
   - indirizzo: Piazza Duca Abruzzi, 18, 65010 Picciano PE
8. **B&B L'albero di Antonia** — Carpineto della Nora
   - slug: `b-b-l-albero-di-antonia-carpineto-della-nora`
   - indirizzo: Via Aristotele Pacini, 5, 64032 Atri TE
9. **B&b la Casa dei Nonni** — Carpineto della Nora
   - slug: `b-b-la-casa-dei-nonni-carpineto-della-nora`
   - indirizzo: Contrada S. Silvestro, 97, 64028 Silvi TE
10. **B&B La Casetta** — Carpineto della Nora
   - slug: `b-b-la-casetta-carpineto-della-nora`
   - indirizzo: Via S. Martino, 67, 65013 San Martino Bassa PE
11. **B&B La Colonna** — Carpineto della Nora
   - slug: `b-b-la-colonna-carpineto-della-nora`
   - indirizzo: Contrada Scarangi, 00032 Carpineto Romano RM
12. **B&B La Peschiera** — Carpineto della Nora
   - slug: `b-b-la-peschiera-carpineto-della-nora`
   - indirizzo: Via D. Alighieri, 113, 00032 Carpineto Romano RM
13. **Bed & Breakfast OASI** — Carpineto della Nora
   - slug: `bed-breakfast-oasi-carpineto-della-nora`
   - indirizzo: Via I Maggio, 16, 64025 Pineto TE
14. **Bed and Breakfast La Casa del Casale** — Carpineto della Nora
   - slug: `bed-and-breakfast-la-casa-del-casale-carpineto-della-nora`
   - indirizzo: Via del Casale, 3, 64026 Casal Thaulero TE
15. **Bed and Breakfast La Casa di Rinaldo** — Carpineto della Nora
   - slug: `bed-and-breakfast-la-casa-di-rinaldo-carpineto-della-nora`
   - indirizzo: Via Vomano Vecchio, 18, 64025 Pineto TE
16. **Bed and Breakfast Le Valli del Cerrano** — Carpineto della Nora
   - slug: `bed-and-breakfast-le-valli-del-cerrano-carpineto-della-nora`
   - indirizzo: Via Colle Cretone>via Arlini,52 64025, 64026 Pineto TE
17. **Casale Adriatico B&B** — Carpineto della Nora
   - slug: `casale-adriatico-b-b-carpineto-della-nora`
   - indirizzo: Via Arlini, 34, 64025 Pineto TE
18. **Sinilù B&B** — Carpineto della Nora
   - slug: `sinilu-b-b-carpineto-della-nora`
   - indirizzo: Via Indipendenza, 10, 64028 Pianacce TE
19. **B&B Villa Olimpia** — Carpineto Romano
   - slug: `b-b-villa-olimpia-carpineto-romano`
   - indirizzo: Piazza Regina Margherita, 00032 Carpineto Romano RM
20. **Hotel Colosseo Colleferro roma** — Carpineto Romano
   - slug: `hotel-colosseo-colleferro-roma-carpineto-romano`
   - indirizzo: Via Artigianato, 69, 00034 Colleferro RM
21. **Il Colle Rentrooms** — Carpineto Romano
   - slug: `il-colle-rentrooms-carpineto-romano`
   - indirizzo: Via pietralata, 03013 Ferentino FR
22. **Il Paradiso** — Carpineto Romano
   - slug: `il-paradiso-carpineto-romano`
   - indirizzo: Via Monti Appennini, 27, 04100 Latina LT
23. **Jo Sedio residenza** — Carpineto Romano
   - slug: `jo-sedio-residenza-carpineto-romano`
   - indirizzo: Via Cavour, 84, 00032 Carpineto Romano RM
24. **La Tana Delle Lepri** — Carpineto Romano
   - slug: `la-tana-delle-lepri-carpineto-romano`
   - indirizzo: SP11, 71/B, 03017 Morolo FR
25. **Agriturismo Il Tratturo** — Carpineto Sinello
   - slug: `agriturismo-il-tratturo-carpineto-sinello`
   - indirizzo: Via Vilignina 1, 50, 66054 Vasto CH
26. **Agriturismo Montagnola** — Carpineto Sinello
   - slug: `agriturismo-montagnola-carpineto-sinello`
   - indirizzo: Contrada Matritano, 69, 66030 Carpineto Sinello CH
27. **B&B BellaVista** — Carpineto Sinello
   - slug: `b-b-bellavista-carpineto-sinello`
   - indirizzo: Via Lota, 19/F, 66054 Vasto CH
28. **B&B IL Glicine Carpineto Sinello CH medio Vastese** — Carpineto Sinello
   - slug: `b-b-il-glicine-carpineto-sinello-ch-medio-vastes-carpineto-sinello`
   - indirizzo: Piazza Guglielmo Marconi, 3, 66030 Carpineto Sinello CH
29. **B&B La Dimora** — Carpineto Sinello
   - slug: `b-b-la-dimora-carpineto-sinello`
   - indirizzo: Via Terranova, 5, 66052 Gissi CH
30. **Bella Vista B&B Gissi | Camere - Appartamenti Vacanze** — Carpineto Sinello
   - slug: `bella-vista-b-b-gissi-camere-appartamenti-vacanz-carpineto-sinello`
   - indirizzo: Via Italia, 158, 66052 Gissi CH
31. **Cà Luna** — Carpineto Sinello
   - slug: `ca-luna-carpineto-sinello`
   - indirizzo: Viale Europa, 14, 66052 Gissi CH
32. **Villa Polercia** — Carpineto Sinello
   - slug: `villa-polercia-carpineto-sinello`
   - indirizzo: Contrada Polercia, 4, 66051 Cupello CH
33. **Agriturismo Torre Bruno** — Carpino
   - slug: `agriturismo-torre-bruno-carpino`
   - indirizzo: Localita' Coppa Calva, 71010 Carpino FG
34. **Agriturismo Villa Costanza** — Carpino
   - slug: `agriturismo-villa-costanza-carpino`
   - indirizzo: contrada Coppa, Via della Repubblica, 71010 Carpino FG
35. **B&B Donna Elena Vico del Gargano** — Carpino
   - slug: `b-b-donna-elena-vico-del-gargano-carpino`
   - indirizzo: V. Matassa, 15, 71018 Vico del Gargano FG