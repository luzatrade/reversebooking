# Blocco 174/500 — 35 strutture senza descrizione IT

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

1. **La finestra sul cortile** — Atri
   - slug: `la-finestra-sul-cortile-atri`
   - indirizzo: Portico tre case, 14, 64032 Atri TE
2. **La Terrazza Motta** — Atri
   - slug: `la-terrazza-motta-atri`
   - indirizzo: Contrada Torroni, 7, 64032 Atri TE
3. **Agriturismo Tenuta Santo Stefano** — Atripalda
   - slug: `agriturismo-tenuta-santo-stefano-atripalda`
   - indirizzo: SP17, 83050 Santo Stefano del Sole AV
4. **Bellavigna Country House** — Atripalda
   - slug: `bellavigna-country-house-atripalda`
   - indirizzo: Contrada Carrani, 83030 Montefalcione AV
5. **Borgo San Gregorio - Wine Resort** — Atripalda
   - slug: `borgo-san-gregorio-wine-resort-atripalda`
   - indirizzo: Località Cerza Grossa, snc, 83050 Sorbo Serpico AV
6. **Grand Hotel Irpinia, Acquafidia Family SPA & Meeting** — Atripalda
   - slug: `grand-hotel-irpinia-acquafidia-family-spa-meetin-atripalda`
   - indirizzo: Via Rivarano, 83013 Mercogliano AV
7. **Green Park Hotel** — Atripalda
   - slug: `green-park-hotel-atripalda`
   - indirizzo: Via Domenico Antonio Vaccaro, 0, 83013 Mercogliano AV
8. **Latte e Letto** — Atripalda
   - slug: `latte-e-letto-atripalda`
   - indirizzo: Via Antonio Gramsci, 14, 83100 Avellino AV
9. **Agriturismo Le Querce** — Attigliano
   - slug: `agriturismo-le-querce-attigliano`
   - indirizzo: Via Pontone Lucia, 31, 01020 Bomarzo VT
10. **Agriturismo Poggio Degli Ulivi** — Attigliano
   - slug: `agriturismo-poggio-degli-ulivi-attigliano`
   - indirizzo: Località Poggio Sant'Anselmo, 01020 Bomarzo VT
11. **Albergo Hotel Millenium** — Attigliano
   - slug: `albergo-hotel-millenium-attigliano`
   - indirizzo: Via Tuscania, 01028 Orte VT
12. **Albergo Ristorante Hotel Tevere** — Attigliano
   - slug: `albergo-ristorante-hotel-tevere-attigliano`
   - indirizzo: Via Terni, 10, 01028 Orte VT
13. **B&B Podere Pontepietra** — Attigliano
   - slug: `b-b-podere-pontepietra-attigliano`
   - indirizzo: Strada Provinciale Sorianese, 01038 Soriano nel Cimino VT
14. **Casavacanze Sant'Eugenia** — Attigliano
   - slug: `casavacanze-sant-eugenia-attigliano`
   - indirizzo: 05012 Attigliano TR, Italia
15. **Hotel Aquila ORTE** — Attigliano
   - slug: `hotel-aquila-orte-attigliano`
   - indirizzo: Via Lazio, 4, 01028 Caldare VT
16. **Hotel il Roscio** — Attigliano
   - slug: `hotel-il-roscio-attigliano`
   - indirizzo: Località Pantaniccio, 12, 05012 Attigliano TR
17. **Hotel Lazio Ristorante** — Attigliano
   - slug: `hotel-lazio-ristorante-attigliano`
   - indirizzo: Via Lazio, 1, 01028 Caldare VT
18. **Hotel Ristorante da Rosanna** — Attigliano
   - slug: `hotel-ristorante-da-rosanna-attigliano`
   - indirizzo: Via C. A. dalla Chiesa, 3, 05012 Attigliano TR
19. **La Bastia Hotel** — Attigliano
   - slug: `la-bastia-hotel-attigliano`
   - indirizzo: Via Giovanni XXIII, 39, 01038 Soriano Nel Cimino VT
20. **La Locanda del Principe** — Attigliano
   - slug: `la-locanda-del-principe-attigliano`
   - indirizzo: Strada Ortana Km. 18.600, 01038 Soriano Nel Cimino VT
21. **Olivo Country Club** — Attigliano
   - slug: `olivo-country-club-attigliano`
   - indirizzo: Via di Pantanetta, snc, 01030 Bassano in Teverina VT
22. **Ristorante Le Fossate** — Attigliano
   - slug: `ristorante-le-fossate-attigliano`
   - indirizzo: Loc. fossate 121, 05024 Giove TR
23. **Un Posto Carino** — Attigliano
   - slug: `un-posto-carino-attigliano`
   - indirizzo: V. Monte Cavallo, snc, 01020 Mugnano In Teverina VT
24. **Agriturismo Ai Faris** — Attimis
   - slug: `agriturismo-ai-faris-attimis`
   - indirizzo: Borgo Faris, 32/6, 33040 Attimis UD
25. **Agriturismo B&B da Laura - Paravano** — Attimis
   - slug: `agriturismo-b-b-da-laura-paravano-attimis`
   - indirizzo: Via del Torre, 8, 33040 Primulacco UD
26. **Agriturismo Clochiatti** — Attimis
   - slug: `agriturismo-clochiatti-attimis`
   - indirizzo: Via I. Nievo, 13, 33040 Ravosa-magredis UD
27. **Albergo Al Trieste** — Attimis
   - slug: `albergo-al-trieste-attimis`
   - indirizzo: Piazza XXIX Settembre, 29, 33045 Nimis UD
28. **Albergo Ristorante Pizzeria Al Parco** — Attimis
   - slug: `albergo-ristorante-pizzeria-al-parco-attimis`
   - indirizzo: Piazza B. di Prampero, 1, 33010 Tavagnacco UD
29. **Alloggio Agriturismo Cort di Branc** — Attimis
   - slug: `alloggio-agriturismo-cort-di-branc-attimis`
   - indirizzo: Piazza S. Martino, 6, 33040 Povoletto UD
30. **B&B Scaccia Pensieri** — Attimis
   - slug: `b-b-scaccia-pensieri-attimis`
   - indirizzo: Via Angelo Angeli, 128, 33017 Tarcento UD
31. **Bed and breakfast** — Attimis
   - slug: `bed-and-breakfast-attimis`
   - indirizzo: Via Borgo di Sopra, 21, 33010 Cassacco UD
32. **Borgo di Ponte Holiday Apartments & Rooms** — Attimis
   - slug: `borgo-di-ponte-holiday-apartments-rooms-attimis`
   - indirizzo: Via Scipione di Manzano, 5, 33043 Cividale del Friuli UD
33. **Dai Minisins** — Attimis
   - slug: `dai-minisins-attimis`
   - indirizzo: Via S. Martino, 37, 33010 Reana del Rojale UD
34. **I Comelli Agriturismo** — Attimis
   - slug: `i-comelli-agriturismo-attimis`
   - indirizzo: Largo Armando Diaz, 8, 33045 Nimis UD
35. **La Vrata Gialla - B&B Taipana** — Attimis
   - slug: `la-vrata-gialla-b-b-taipana-attimis`
   - indirizzo: Frazione Montemaggiore, 2, 33040 Taipana UD