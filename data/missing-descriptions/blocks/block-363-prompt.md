# Blocco 363/500 — 35 strutture senza descrizione IT

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

1. **Villa Scorzi - Relais de Charme** — Calci
   - slug: `villa-scorzi-relais-de-charme-calci`
   - indirizzo: Via del Lungomonte Pisano, 2, 56011 Calci PI
2. **B&B Al Castello Castelmezzano** — Calciano
   - slug: `b-b-al-castello-castelmezzano-calciano`
   - indirizzo: Vico Largo Castello, 34, 85010 Castelmezzano PZ
3. **B&B Villino Francesca** — Calciano
   - slug: `b-b-villino-francesca-calciano`
   - indirizzo: Contrada Serra delle Vigne, 75019 snc MT
4. **Gianmaria B&B** — Calciano
   - slug: `gianmaria-b-b-calciano`
   - indirizzo: Via Fratelli Cervi, 1, 75019 Tricarico MT
5. **Motel Basentum** — Calciano
   - slug: `motel-basentum-calciano`
   - indirizzo: Scalo MT IT, Contrada Pantano, 75017, 75017 Salandra MT
6. **Agriturismo Podere Travalda** — Calcinaia
   - slug: `agriturismo-podere-travalda-calcinaia`
   - indirizzo: Via di Travalda, 10, 56025 Pontedera PI
7. **B&B Arivellini** — Calcinaia
   - slug: `b-b-arivellini-calcinaia`
   - indirizzo: Via Loris Baroni, 2, 56010 Vicopisano PI
8. **B&B Il Viale** — Calcinaia
   - slug: `b-b-il-viale-calcinaia`
   - indirizzo: Viale IV Novembre, 10/12, 56025 Pontedera PI
9. **Le Carabattole Bed & Breakfast** — Calcinaia
   - slug: `le-carabattole-bed-breakfast-calcinaia`
   - indirizzo: Via Butese, 1, 56010 Campomaggiore PI
10. **Villa Lenzi's B&B (TrOvare TUSCANY)** — Calcinaia
   - slug: `villa-lenzi-s-b-b-trovare-tuscany-calcinaia`
   - indirizzo: Viale Armando Diaz, 83, 56010 Vicopisano PI
11. **Villa Maya** — Calcinaia
   - slug: `villa-maya-calcinaia`
   - indirizzo: Via Piccina, 14, 56021 Cascina PI
12. **Bergamo Self Check-in | Le Muraine** — Calcinate
   - slug: `bergamo-self-check-in-le-muraine-calcinate`
   - indirizzo: Via Alberico da Rosciate, 9, 24124 Bergamo BG
13. **Albergo Trattoria Regina** — Calcinato
   - slug: `albergo-trattoria-regina-calcinato`
   - indirizzo: Via XXIV Maggio, 61, 25017 Lonato del Garda BS
14. **B&B La Pergola di Sant'Antonio** — Calcinato
   - slug: `b-b-la-pergola-di-sant-antonio-calcinato`
   - indirizzo: Via S. Antonio, 15, 25017 Lonato del Garda BS
15. **Bed and Breakfast Al Fiume** — Calcinato
   - slug: `bed-and-breakfast-al-fiume-calcinato`
   - indirizzo: V. Gavardina, 27, 25081 Bedizzole BS
16. **Bed and Breakfast La Villetta** — Calcinato
   - slug: `bed-and-breakfast-la-villetta-calcinato`
   - indirizzo: Via Felice Cavallotti, 228, 25018 Montichiari BS
17. **Corte Mira** — Calcinato
   - slug: `corte-mira-calcinato`
   - indirizzo: Via Brodenella, 1B, 25017 Lonato del Garda BS
18. **Hotel Ristorante La Grotta** — Calcinato
   - slug: `hotel-ristorante-la-grotta-calcinato`
   - indirizzo: Via dei Mandorli, 22, 46043 Castiglione delle Stiviere MN
19. **Sullivan Ristorante & Hotel** — Calcinato
   - slug: `sullivan-ristorante-hotel-calcinato`
   - indirizzo: Via Statale 11, 135 Ponte San Marco di, 25011 Brescia BS
20. **Hotel Ristorante La Bettola** — Calcio
   - slug: `hotel-ristorante-la-bettola-calcio`
   - indirizzo: Via Bonaita, 7, 24059 Urgnano BG
21. **La Fenice** — Calcio
   - slug: `la-fenice-calcio`
   - indirizzo: Via G. Matteotti, 28, 25032 Chiari BS
22. **Palazzo Barbò** — Calcio
   - slug: `palazzo-barbo-calcio`
   - indirizzo: Via San Rocco, 3, 24050 Torre Pallavicina BG
23. **B&B - Villa Cuten** — Calco
   - slug: `b-b-villa-cuten-calco`
   - indirizzo: Via Italia, 17, 23885 Calco LC
24. **B&B Il Torchio** — Calco
   - slug: `b-b-il-torchio-calco`
   - indirizzo: Via Ghislanzoni, Località Vescogna, 24, 23885 Calco LC
25. **Cascina Vedu** — Calco
   - slug: `cascina-vedu-calco`
   - indirizzo: Via Salvador Allende, 10, 23807 Merate LC
26. **Hotel Locanda Leonardo** — Calco
   - slug: `hotel-locanda-leonardo-calco`
   - indirizzo: Via Padri Serviti, 1, 23801 Calolziocorte LC
27. **Locanda Al Bersò** — Calco
   - slug: `locanda-al-berso-calco`
   - indirizzo: Via Nazionale, 25, 23885 Calco LC
28. **Das Badl Smart Retreat** — Caldaro sulla strada del vino/Kaltern an der Weinstra�e
   - slug: `das-badl-smart-retreat-caldaro-sulla-strada-del-vino-ka`
   - indirizzo: Pozzo, 34, 39052 Caldaro BZ
29. **Das Kaltern** — Caldaro sulla strada del vino/Kaltern an der Weinstra�e
   - slug: `das-kaltern-caldaro-sulla-strada-del-vino-ka`
   - indirizzo: Pianizza di Sopra, 65, 39052 Caldaro BZ
30. **Das Wanda - 4 Sterne B&B Adults Only Hotel** — Caldaro sulla strada del vino/Kaltern an der Weinstra�e
   - slug: `das-wanda-4-sterne-b-b-adults-only-hotel-caldaro-sulla-strada-del-vino-ka`
   - indirizzo: Via Garnellen, 18, 39052 Caldaro BZ
31. **Designhotel Gius la Residenza** — Caldaro sulla strada del vino/Kaltern an der Weinstra�e
   - slug: `designhotel-gius-la-residenza-caldaro-sulla-strada-del-vino-ka`
   - indirizzo: Trutsch, 01, 39052 Caldaro BZ
32. **Frühstückspension Roter Adler** — Caldaro sulla strada del vino/Kaltern an der Weinstra�e
   - slug: `fruhstuckspension-roter-adler-caldaro-sulla-strada-del-vino-ka`
   - indirizzo: Via dell Oro, 4, 39052 Caldaro BZ
33. **Haus Marlene** — Caldaro sulla strada del vino/Kaltern an der Weinstra�e
   - slug: `haus-marlene-caldaro-sulla-strada-del-vino-ka`
   - indirizzo: Via Heppenheim, 42, 39052 Caldaro sulla strada del Vino BZ
34. **Hotel Goldener Stern** — Caldaro sulla strada del vino/Kaltern an der Weinstra�e
   - slug: `hotel-goldener-stern-caldaro-sulla-strada-del-vino-ka`
   - indirizzo: Via Andreas Hofer Strasse, 28, 39052 Caldaro sulla strada del Vino BZ
35. **Hotel Malga** — Caldaro sulla strada del vino/Kaltern an der Weinstra�e
   - slug: `hotel-malga-caldaro-sulla-strada-del-vino-ka`
   - indirizzo: Malga, 7/c, 39052 Caldaro BZ