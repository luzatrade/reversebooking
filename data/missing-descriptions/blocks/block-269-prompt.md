# Blocco 269/500 — 35 strutture senza descrizione IT

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

1. **Hotel Tricolore** — Bibbiano
   - slug: `hotel-tricolore-bibbiano`
   - indirizzo: Via I. Newton, 9/A, 42124 Villa Gaida RE
2. **Le Ruote** — Bibbiano
   - slug: `le-ruote-bibbiano`
   - indirizzo: Via della Volta, 9, 42030 Vezzano Sul Crostolo RE
3. **Osteria con Locanda Rossodivino** — Bibbiano
   - slug: `osteria-con-locanda-rossodivino-bibbiano`
   - indirizzo: Piazza Angelo Zanti, 11, 42025 Cavriago RE
4. **Ristorante Albergo La Maddalena** — Bibbiano
   - slug: `ristorante-albergo-la-maddalena-bibbiano`
   - indirizzo: Via Louis Pasteur, 5, 42020 Quattro Castella RE
5. **Albergo Ristorante BELLAVISTA** — Bibbiena
   - slug: `albergo-ristorante-bellavista-bibbiena`
   - indirizzo: Viale S. Francesco, 17, 52010 Chiusi della Verna AR
6. **Albergo Ristorante Brogi di Garbuglia Mario** — Bibbiena
   - slug: `albergo-ristorante-brogi-di-garbuglia-mario-bibbiena`
   - indirizzo: Via Selvaggia Mazzoni, 7, 52011 Bibbiena AR
7. **Albergo San Lorenzo** — Bibbiena
   - slug: `albergo-san-lorenzo-bibbiena`
   - indirizzo: Piazza Jacopo Bordoni, 2, 52014 Poppi AR
8. **B&B I Due Portali** — Bibbiena
   - slug: `b-b-i-due-portali-bibbiena`
   - indirizzo: Via Bernardo Dovizi, 15, 52011 Bibbiena AR
9. **B&B La Casa d'Artista** — Bibbiena
   - slug: `b-b-la-casa-d-artista-bibbiena`
   - indirizzo: Via Molino, 10, 52010 Ortignano AR
10. **Borgo Romena** — Bibbiena
   - slug: `borgo-romena-bibbiena`
   - indirizzo: Località Romena, 15, 52015 Pratovecchio AR
11. **Castello di Valenzano** — Bibbiena
   - slug: `castello-di-valenzano-bibbiena`
   - indirizzo: Località Valenzano, 97, 52010 Subbiano AR
12. **Da Giovanna** — Bibbiena
   - slug: `da-giovanna-bibbiena`
   - indirizzo: Viale S. Francesco, 33, 52010 Chiusi della Verna AR
13. **Fattoria di Marena - Agriturismo - Family Holidays** — Bibbiena
   - slug: `fattoria-di-marena-agriturismo-family-holidays-bibbiena`
   - indirizzo: loc. Fattoria di Marena, 52011 Bibbiena AR
14. **Hotel Borgo Antico Bibbiena** — Bibbiena
   - slug: `hotel-borgo-antico-bibbiena-bibbiena`
   - indirizzo: Via Cappucci, 2, 52011 Bibbiena AR
15. **Hotel Ristorante La Torricella** — Bibbiena
   - slug: `hotel-ristorante-la-torricella-bibbiena`
   - indirizzo: Località Torricella, 14, 52014 Poppi AR
16. **Il Giardino Hotel e Ristorante** — Bibbiena
   - slug: `il-giardino-hotel-e-ristorante-bibbiena`
   - indirizzo: Piazza Palagi, 2, 52011 Bibbiena AR
17. **Mike's Apartment** — Bibbiena
   - slug: `mike-s-apartment-bibbiena`
   - indirizzo: Via G. Borghi, 71, 52011 Bibbiena AR
18. **Palazzo Gatteschi** — Bibbiena
   - slug: `palazzo-gatteschi-bibbiena`
   - indirizzo: Via Falterona, 104, 52014 Poppi AR
19. **Parc Hotel** — Bibbiena
   - slug: `parc-hotel-bibbiena`
   - indirizzo: Via Roma, 214, 52014 Poppi AR
20. **Pastor Angelicus - La Verna** — Bibbiena
   - slug: `pastor-angelicus-la-verna-bibbiena`
   - indirizzo: Viale S. Francesco, 20, 52010 Chiusi della Verna AR
21. **Ristorante Casentino** — Bibbiena
   - slug: `ristorante-casentino-bibbiena`
   - indirizzo: Piazza della Repubblica, 6, 52014 Poppi AR
22. **Villa Giulia Fashion B&B** — Bibbiena
   - slug: `villa-giulia-fashion-b-b-bibbiena`
   - indirizzo: Via Palmiro Togliatti, 40, 52018 Strada AR
23. **Villa Le Greti** — Bibbiena
   - slug: `villa-le-greti-bibbiena`
   - indirizzo: Via Fiorentina, 52011 Soci AR
24. **Agriturismo Il Palazzino B&B** — Bibbona
   - slug: `agriturismo-il-palazzino-b-b-bibbona`
   - indirizzo: Loc. Il Palazzino, Via di Bacco, 10, 57020 Bibbona LI
25. **Agriturismo Nonna Stella** — Bibbona
   - slug: `agriturismo-nonna-stella-bibbona`
   - indirizzo: Via Campigliese, 8, 57020 Bibbona LI
26. **Beata Relais** — Bibbona
   - slug: `beata-relais-bibbona`
   - indirizzo: Via Roma, 37, 56040 Guardistallo PI
27. **Hotel Borgo al Mare** — Bibbona
   - slug: `hotel-borgo-al-mare-bibbona`
   - indirizzo: Via del Forte, 1, 57020 Marina di Bibbona LI
28. **Hotel Flora** — Bibbona
   - slug: `hotel-flora-bibbona`
   - indirizzo: Via del Mare, 26, 57020 Marina di Bibbona LI
29. **Hotel Nina** — Bibbona
   - slug: `hotel-nina-bibbona`
   - indirizzo: Via del Forte, 7, 57020 Marina di Bibbona LI
30. **Hotel Paradiso verde** — Bibbona
   - slug: `hotel-paradiso-verde-bibbona`
   - indirizzo: Piazza del Forte, 1, 57020 Marina di Bibbona LI
31. **Hotel Riva dei Cavalleggeri** — Bibbona
   - slug: `hotel-riva-dei-cavalleggeri-bibbona`
   - indirizzo: Via dei Cavalleggeri Nord, 7, 57020 Marina di Bibbona LI
32. **Hotel Riva Etrusca** — Bibbona
   - slug: `hotel-riva-etrusca-bibbona`
   - indirizzo: Via dei Melograni, 13, 57020 Marina di Bibbona LI
33. **Hotiday Marina di Bibbona** — Bibbona
   - slug: `hotiday-marina-di-bibbona-bibbona`
   - indirizzo: Via dei Cavalleggeri Nord, 3, 57020 Marina di Bibbona LI
34. **I Gigli di Mare** — Bibbona
   - slug: `i-gigli-di-mare-bibbona`
   - indirizzo: Via del Forte, 8, 57020 Marina di Bibbona LI
35. **La Casa nel Borgo** — Bibbona
   - slug: `la-casa-nel-borgo-bibbona`
   - indirizzo: Via Piave, 24, 57020 Bibbona LI