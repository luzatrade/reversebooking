# Blocco 42/500 — 35 strutture senza descrizione IT

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

1. **La Beverita** — Airole
   - slug: `la-beverita-airole`
   - indirizzo: Via dell'Opera, 10, 18039 Ventimiglia IM
2. **La Favorita Apricale** — Airole
   - slug: `la-favorita-apricale-airole`
   - indirizzo: Strada S. Pietro, 1, 18030 Apricale IM
3. **Lago Bin** — Airole
   - slug: `lago-bin-airole`
   - indirizzo: Regione Morga, 18030 Rocchetta Nervina IM
4. **Lo Scoiattolo** — Airole
   - slug: `lo-scoiattolo-airole`
   - indirizzo: Frazione Verrandi, 1, 18039 Ventimiglia IM
5. **Osteria e Camere La Pecora Nera** — Airole
   - slug: `osteria-e-camere-la-pecora-nera-airole`
   - indirizzo: Via degli Ulivi, 18, 18030 Rocchetta Nervina IM
6. **Talking Stones** — Airole
   - slug: `talking-stones-airole`
   - indirizzo: Via San Bernardo, 5, 18035 Dolceacqua IM
7. **Terre Bianche** — Airole
   - slug: `terre-bianche-airole`
   - indirizzo: Loc. Arcagna snc, 18035 Dolceacqua IM
8. **Un Mare di Fiori** — Airole
   - slug: `un-mare-di-fiori-airole`
   - indirizzo: Corso Nizza, 162, 18039 Ventimiglia IM
9. **"LA TAVERNA" B&B** — Airuno
   - slug: `la-taverna-b-b-airuno`
   - indirizzo: Via S. Francesco, 11, 23881 Airuno LC
10. **Agriturismo Prisma** — Airuno
   - slug: `agriturismo-prisma-airuno`
   - indirizzo: Campo Novo, 1, 23851 Villa Vergano LC
11. **Albergo Ristorante Costa** — Airuno
   - slug: `albergo-ristorante-costa-airuno`
   - indirizzo: Via Roma, 3/5, 24030 Costa Valle Imagna BG
12. **Albergo Rosa** — Airuno
   - slug: `albergo-rosa-airuno`
   - indirizzo: Via Calolzio, 6, 23802 Carenno LC
13. **B & B Villa Paradis** — Airuno
   - slug: `b-b-villa-paradis-airuno`
   - indirizzo: Via Postale Vecchia, 23881 Airuno LC
14. **B&B Al Roncaccio** — Airuno
   - slug: `b-b-al-roncaccio-airuno`
   - indirizzo: Via per Roncaccio, 11, 23885 Calco LC
15. **B&B La Poesia del Lago** — Airuno
   - slug: `b-b-la-poesia-del-lago-airuno`
   - indirizzo: Via Bagnolo, 6, 23848 Oggiono LC
16. **BlueLake Inn** — Airuno
   - slug: `bluelake-inn-airuno`
   - indirizzo: Via Cesare Cantù, lato sinistro, 7, 23854 Olginate LC
17. **casa airuno** — Airuno
   - slug: `casa-airuno-airuno`
   - indirizzo: Via Statale, 22, 23881 Airuno LC
18. **Hotel Locanda del Mel** — Airuno
   - slug: `hotel-locanda-del-mel-airuno`
   - indirizzo: Piazza Vittorio Veneto, 2, 23801 Calolziocorte LC
19. **Hotel Ristorante Due Platani** — Airuno
   - slug: `hotel-ristorante-due-platani-airuno`
   - indirizzo: Via Statale, 18, 23881 Airuno LC
20. **Hotel Ristorante Fatur Srl** — Airuno
   - slug: `hotel-ristorante-fatur-srl-airuno`
   - indirizzo: Via Roma, 2, 24034 Cisano Bergamasco BG
21. **Locanda Blue Airuno** — Airuno
   - slug: `locanda-blue-airuno-airuno`
   - indirizzo: Via Statale, 33, 23881 Airuno LC
22. **Maggioni 039 Ristorante B&B** — Airuno
   - slug: `maggioni-039-ristorante-b-b-airuno`
   - indirizzo: Via Belvedere, 28, 23874 Montevecchia LC
23. **Teresa Delle Fragole - Azienda agricola e agriturismo vegetariano/vegano** — Airuno
   - slug: `teresa-delle-fragole-azienda-agricola-e-agrituri-airuno`
   - indirizzo: Via Piave, 16, 23897 Viganò LC
24. **Villa Fiesta** — Airuno
   - slug: `villa-fiesta-airuno`
   - indirizzo: Via Piave, 43/4, 23848 Oggiono LC
25. **Villa Puccini - Bed and breakfast** — Airuno
   - slug: `villa-puccini-bed-and-breakfast-airuno`
   - indirizzo: Via Giacomo Puccini, 8, 23900 Lecco LC
26. **'L Calié** — Aisone
   - slug: `l-calie-aisone`
   - indirizzo: V. Massimo Barale, 27, 12010 Roaschia CN
27. **Agriturismo Fior Di Campo** — Aisone
   - slug: `agriturismo-fior-di-campo-aisone`
   - indirizzo: Via Prese, 1/A, 12025 Dronero CN
28. **Albergo Miramonti** — Aisone
   - slug: `albergo-miramonti-aisone`
   - indirizzo: Viale J. F. Kennedy, 2, 12010 Entracque CN
29. **Albergo Nasi** — Aisone
   - slug: `albergo-nasi-aisone`
   - indirizzo: Via Maestra, 35, 12010 Vinadio CN
30. **Albergo Regina delle Alpi** — Aisone
   - slug: `albergo-regina-delle-alpi-aisone`
   - indirizzo: Via Nazionale, 3, 12010 Pietraporzio CN
31. **Albergo Ristorante Strepeis** — Aisone
   - slug: `albergo-ristorante-strepeis-aisone`
   - indirizzo: Frazione Strepeis, 16, 12010 Vinadio CN
32. **B&B La Rocca Bianca** — Aisone
   - slug: `b-b-la-rocca-bianca-aisone`
   - indirizzo: Via Suor Benigna, 18, 12014 Festiona CN
33. **B&B Spada Reale** — Aisone
   - slug: `b-b-spada-reale-aisone`
   - indirizzo: V. Massimo Barale, 11, 12010 Roaschia CN
34. **Bed e Breakfast da Nonna Lucia** — Aisone
   - slug: `bed-e-breakfast-da-nonna-lucia-aisone`
   - indirizzo: Via Molini, 4, 12014 Demonte CN
35. **Bed&Book "L'elefantino"** — Aisone
   - slug: `bed-book-l-elefantino-aisone`
   - indirizzo: SP121, 8, 12010 Roccasparvera CN