# Blocco 165/500 — 35 strutture senza descrizione IT

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

1. **Az. Agr. Galotta Rocco La Coppa** — Asciano
   - slug: `az-agr-galotta-rocco-la-coppa-asciano`
   - indirizzo: PODERE LA COPPA, 74, 53041 Asciano SI
2. **B&B Boscodisotto Siena** — Asciano
   - slug: `b-b-boscodisotto-siena-asciano`
   - indirizzo: Località Casa Rotta, 91/b, 53040 Rapolano Terme SI
3. **B&B Le Logge di Sopra** — Asciano
   - slug: `b-b-le-logge-di-sopra-asciano`
   - indirizzo: Loc. Le Logge Di Sopra, s.p. 438 km, 13+100, 53041 Asciano SI
4. **B&B San Paterno** — Asciano
   - slug: `b-b-san-paterno-asciano`
   - indirizzo: Strada Comunale S. Paterno, 30, 53040 Rapolano Terme SI
5. **Bed and Breakfast Casa Titty** — Asciano
   - slug: `bed-and-breakfast-casa-titty-asciano`
   - indirizzo: Via della Fraschetta, 22, 53040 Serre di Rapolano SI
6. **C'era una volta** — Asciano
   - slug: `c-era-una-volta-asciano`
   - indirizzo: Via Palmiro Togliatti, 32, 53041 Asciano SI
7. **Dependance "Il Bersagliere"** — Asciano
   - slug: `dependance-il-bersagliere-asciano`
   - indirizzo: Via Roma, 41, 53041 Asciano SI
8. **Hotel La Pace** — Asciano
   - slug: `hotel-la-pace-asciano`
   - indirizzo: Via Roma, 10, 53041 Asciano SI
9. **La Stalla de La Costa** — Asciano
   - slug: `la-stalla-de-la-costa-asciano`
   - indirizzo: Strada di S. Ripoli, 20, 53041 Asciano SI
10. **Palazzo Bizzarri** — Asciano
   - slug: `palazzo-bizzarri-asciano`
   - indirizzo: Via Giacomo Matteotti, 5, 53040 Serre di Rapolano SI
11. **Piccolo Hotel San Valentino** — Asciano
   - slug: `piccolo-hotel-san-valentino-asciano`
   - indirizzo: Strada Provinciale 451 "di Monte Oliveto", 53041 San Valentino, SI
12. **RESIDENCE LECCIO** — Asciano
   - slug: `residence-leccio-asciano`
   - indirizzo: Via Martiri della Libertà, 1, 53041 Asciano SI
13. **A un passo dalla piazza** — Ascoli Piceno
   - slug: `a-un-passo-dalla-piazza-ascoli-piceno`
   - indirizzo: Via Tito Afranio, 42, 63100 Ascoli Piceno AP
14. **Albergo Sant'Emidio** — Ascoli Piceno
   - slug: `albergo-sant-emidio-ascoli-piceno`
   - indirizzo: Via Minucia, 10, 63100 Ascoli Piceno AP
15. **B&b La collina su Ascoli** — Ascoli Piceno
   - slug: `b-b-la-collina-su-ascoli-ascoli-piceno`
   - indirizzo: Via Valle Venere, 21, 63100 Ascoli Piceno AP
16. **B&B La culla dei Sabini** — Ascoli Piceno
   - slug: `b-b-la-culla-dei-sabini-ascoli-piceno`
   - indirizzo: Via dei Sabini, 8, 63100 Ascoli Piceno AP
17. **B&B La Fontana Dei Cani** — Ascoli Piceno
   - slug: `b-b-la-fontana-dei-cani-ascoli-piceno`
   - indirizzo: Via Giuseppe Sacconi, 65, 63100 Ascoli Piceno AP
18. **B&B Maisonrua** — Ascoli Piceno
   - slug: `b-b-maisonrua-ascoli-piceno`
   - indirizzo: Rua dei Legnaiuoli, 4, 63100 Ascoli Piceno AP
19. **B&B Piceno** — Ascoli Piceno
   - slug: `b-b-piceno-ascoli-piceno`
   - indirizzo: Contrada Collecchio, 1, 63031 Castel di Lama AP
20. **B&B Stella** — Ascoli Piceno
   - slug: `b-b-stella-ascoli-piceno`
   - indirizzo: Via Urbino, 16, 63100 Ascoli Piceno AP
21. **Bed & Breakfast L'Arengo** — Ascoli Piceno
   - slug: `bed-breakfast-l-arengo-ascoli-piceno`
   - indirizzo: Corso V. Emanuele, 5, 63100 Ascoli Piceno AP
22. **Hotel Pennile** — Ascoli Piceno
   - slug: `hotel-pennile-ascoli-piceno`
   - indirizzo: Via Gaetano Spalvieri, 13/A, 63100 Ascoli Piceno AP
23. **Luxury B&B '700** — Ascoli Piceno
   - slug: `luxury-b-b-700-ascoli-piceno`
   - indirizzo: Via dei Soderini, 10, 63100 Ascoli Piceno AP
24. **Mirea's Rooms** — Ascoli Piceno
   - slug: `mirea-s-rooms-ascoli-piceno`
   - indirizzo: Via dei Ciclamini, 6, 63100 Ascoli Piceno AP
25. **Porta della musa** — Ascoli Piceno
   - slug: `porta-della-musa-ascoli-piceno`
   - indirizzo: Corso V. Emanuele, 13, 63100 Ascoli Piceno AP
26. **Affittacamere Number 1** — Ascoli Satriano
   - slug: `affittacamere-number-1-ascoli-satriano`
   - indirizzo: Via Fontana Nuova, 117, 71026 Deliceto FG
27. **Affittacamere Oscata** — Ascoli Satriano
   - slug: `affittacamere-oscata-ascoli-satriano`
   - indirizzo: Via Contrada Oscata, 15 (AV), 83044 Bisaccia AV
28. **Agriturismo Masseria Mascitelli** — Ascoli Satriano
   - slug: `agriturismo-masseria-mascitelli-ascoli-satriano`
   - indirizzo: S.P. 110 km 29+100, 71045 Orta Nova FG
29. **Albergo Italia** — Ascoli Satriano
   - slug: `albergo-italia-ascoli-satriano`
   - indirizzo: Via Giovanni Robbe, 21, 85024 Lavello PZ
30. **Albergo Ristorante La Rosa Dei Venti** — Ascoli Satriano
   - slug: `albergo-ristorante-la-rosa-dei-venti-ascoli-satriano`
   - indirizzo: Via Santa Maria delle Grazie, 15, 71024 Candela FG
31. **B&B Alla Corte del Duca** — Ascoli Satriano
   - slug: `b-b-alla-corte-del-duca-ascoli-satriano`
   - indirizzo: Via Massimo D'Azeglio, 8, 71022 Ascoli Satriano FG
32. **B&B La casa al Castello** — Ascoli Satriano
   - slug: `b-b-la-casa-al-castello-ascoli-satriano`
   - indirizzo: Vico Appulo, 12, 71022 Ascoli Satriano FG
33. **B&B Torre Covino** — Ascoli Satriano
   - slug: `b-b-torre-covino-ascoli-satriano`
   - indirizzo: Via T. Covino, 71022 Ascoli Satriano FG
34. **Bed & Breakfast Piazza Matteotti** — Ascoli Satriano
   - slug: `bed-breakfast-piazza-matteotti-ascoli-satriano`
   - indirizzo: Via G. Garibaldi, 51, 71047 Stornara FG
35. **FORESTERIA DEL BORGO ANTICO** — Ascoli Satriano
   - slug: `foresteria-del-borgo-antico-ascoli-satriano`
   - indirizzo: Largo Castello, 10, 71022 Ascoli Satriano FG