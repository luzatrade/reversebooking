# Blocco 415/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Il Quarto** — Capalbio
   - slug: `agriturismo-il-quarto-capalbio`
   - indirizzo: IV Ebreo, 15, 58014 Campigliola GR
2. **Agriturismo La Siesta** — Capalbio
   - slug: `agriturismo-la-siesta-capalbio`
   - indirizzo: 58010 Marsiliana GR
3. **Agriturismo La Verde Rosa** — Capalbio
   - slug: `agriturismo-la-verde-rosa-capalbio`
   - indirizzo: Strada Valle Lunga, 3A, 01014 Montalto di Castro VT
4. **Agriturismo Podere del Sole** — Capalbio
   - slug: `agriturismo-podere-del-sole-capalbio`
   - indirizzo: Località il fodero, 01014 Montalto di Castro VT
5. **Agriturismo podere l'Olmaia** — Capalbio
   - slug: `agriturismo-podere-l-olmaia-capalbio`
   - indirizzo: via Maremmana Spinicci, n.55, 58014 Marsiliana GR
6. **Albergo Del Lago** — Capalbio
   - slug: `albergo-del-lago-capalbio`
   - indirizzo: Via Umbria, 22, 58011 Capalbio Scalo GR
7. **B&B Borgo Vera** — Capalbio
   - slug: `b-b-borgo-vera-capalbio`
   - indirizzo: 58014 Mulino Santa Maria GR
8. **Capalbio Vacanze** — Capalbio
   - slug: `capalbio-vacanze-capalbio`
   - indirizzo: Via Genova, 5, 58010 Capalbio GR
9. **Casale Artemisia Capalbio** — Capalbio
   - slug: `casale-artemisia-capalbio-capalbio`
   - indirizzo: Strada Poggetti, 4/B, 58011 Capalbio GR
10. **Hotel Il Cipresso Capalbio** — Capalbio
   - slug: `hotel-il-cipresso-capalbio-capalbio`
   - indirizzo: Str. Sugherella, 3, 58011 Capalbio GR
11. **Hotel Valle del Buttero** — Capalbio
   - slug: `hotel-valle-del-buttero-capalbio`
   - indirizzo: Via I. Silone, 21, 58011 Capalbio GR
12. **Locanda Rossa** — Capalbio
   - slug: `locanda-rossa-capalbio`
   - indirizzo: Strada Capalbio Pescia Fiorentina, 11b, 58011 Capalbio GR
13. **Orti di Capalbio** — Capalbio
   - slug: `orti-di-capalbio-capalbio`
   - indirizzo: Via Val dei Ceppi, 8/a, 58011 Capalbio GR
14. **Podere 406** — Capalbio
   - slug: `podere-406-capalbio`
   - indirizzo: S.da Querciolare, 19, 01014 Montalto di Castro VT
15. **Resort Capalbio** — Capalbio
   - slug: `resort-capalbio-capalbio`
   - indirizzo: Località Poggetti, Strada Provinciale Pedemontana, 58, 58011 Casale Nuovo GR
16. **Agriturismo Biologico I Girasoli di Lari** — Capannoli
   - slug: `agriturismo-biologico-i-girasoli-di-lari-capannoli`
   - indirizzo: Via Giacomo Leopardi, 5, 56035 Cevoli PI
17. **Agriturismo Il Bosco** — Capannoli
   - slug: `agriturismo-il-bosco-capannoli`
   - indirizzo: Via del Bosco, 11, 56030 Selvatelle PI
18. **Agriturismo Podere Chiaromonte farm holiday farmhouse** — Capannoli
   - slug: `agriturismo-podere-chiaromonte-farm-holiday-farm-capannoli`
   - indirizzo: Località La Piaggia, 15, 56036 Forcoli PI
19. **Agriturismo Podere Chiasso Gherardo** — Capannoli
   - slug: `agriturismo-podere-chiasso-gherardo-capannoli`
   - indirizzo: Via S. Sebastiano, 50, 56037 Peccioli PI
20. **Agriturismo Polgara** — Capannoli
   - slug: `agriturismo-polgara-capannoli`
   - indirizzo: Via Querceto, 28, 56035 Casciana Terme Lari PI
21. **Agriturismo Terra Di Dio Toscanizzazione** — Capannoli
   - slug: `agriturismo-terra-di-dio-toscanizzazione-capannoli`
   - indirizzo: S.S. 439 Sarzanese Valdera, Località Bosco, 56033 Capannoli PI
22. **Albergo Montechiari Albergo Montechiari Sas Di Sutter Verena Rosa & C.** — Capannoli
   - slug: `albergo-montechiari-albergo-montechiari-sas-di-s-capannoli`
   - indirizzo: Via Fonte Vecchia, 21, 56036 Palaia PI
23. **Asilo Masi B&B Country House** — Capannoli
   - slug: `asilo-masi-b-b-country-house-capannoli`
   - indirizzo: Piazza S. Bartolomeo, 4, 56033 Capannoli PI
24. **Bed And Breakfast Catherina** — Capannoli
   - slug: `bed-and-breakfast-catherina-capannoli`
   - indirizzo: Via Raffaello Sanzio, 64, 56038 Ponsacco PI
25. **Casolare isabella** — Capannoli
   - slug: `casolare-isabella-capannoli`
   - indirizzo: Via Valdera Capannoli, 204, 56038 Ponsacco PI
26. **Farm Resort Tuscany Time** — Capannoli
   - slug: `farm-resort-tuscany-time-capannoli`
   - indirizzo: Via della Rimessa, 63, 56036 Palaia PI
27. **Il Boschetto** — Capannoli
   - slug: `il-boschetto-capannoli`
   - indirizzo: Via Fonte Vecchia, 10, 56036 Palaia PI
28. **Il Castello di San Ruffino** — Capannoli
   - slug: `il-castello-di-san-ruffino-capannoli`
   - indirizzo: Via S. Lorenzo, 6, 56035 San Ruffino PI
29. **La Fanciullaccia | Guesthouse Toscana** — Capannoli
   - slug: `la-fanciullaccia-guesthouse-toscana-capannoli`
   - indirizzo: Località Fonte a Valle, 64/1, 56033 San Pietro Belvedere PI
30. **La Sorgente Ristorante** — Capannoli
   - slug: `la-sorgente-ristorante-capannoli`
   - indirizzo: Via Volterrana, 56033 Loc. Bosco PI
31. **Room Rent Morrona** — Capannoli
   - slug: `room-rent-morrona-capannoli`
   - indirizzo: Via Andrea Baldi, 46, 56030 Terricciola PI
32. **San Ruffino Apartments** — Capannoli
   - slug: `san-ruffino-apartments-capannoli`
   - indirizzo: Via Belfiore, 30, 56035 Casciana Terme Lari PI
33. **Tenuta Quarrata in Villa San Giorgio** — Capannoli
   - slug: `tenuta-quarrata-in-villa-san-giorgio-capannoli`
   - indirizzo: Via di San Pietro Belvedere, 1, 56033 Capannoli PI
34. **Villa Casanova** — Capannoli
   - slug: `villa-casanova-capannoli`
   - indirizzo: Via Camugliano, 18, 56038 Ponsacco PI
35. **Affittacamere L'Arancio** — Capannori
   - slug: `affittacamere-l-arancio-capannori`
   - indirizzo: Via Romana, 57/59, 55110 Lucca LU