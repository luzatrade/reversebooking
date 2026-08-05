# Blocco 19/500 — 35 strutture senza descrizione IT

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

1. **Il Sambuco innamorato country house** — Acqui Terme
   - slug: `il-sambuco-innamorato-country-house-acqui-terme`
   - indirizzo: Via Luigi Ivaldi 34, 15011 Acqui Terme AL
2. **L'Alloro** — Acqui Terme
   - slug: `l-alloro-acqui-terme`
   - indirizzo: Via Belletti, 53, 15010 Alessandria AL
3. **La Contea B&B** — Acqui Terme
   - slug: `la-contea-b-b-acqui-terme`
   - indirizzo: Str. Moirano, 140/A, 15011 Acqui Terme AL
4. **Relais Borgo Del Gallo** — Acqui Terme
   - slug: `relais-borgo-del-gallo-acqui-terme`
   - indirizzo: Località Valle Prati 1, Valle Prati, 1, 15010 Cavatore AL
5. **Verdmont** — Acqui Terme
   - slug: `verdmont-acqui-terme`
   - indirizzo: Italia, Regione Faetta, 19/21, 15011 Acqui Terme AL
6. **Villa Gioia Country House** — Acqui Terme
   - slug: `villa-gioia-country-house-acqui-terme`
   - indirizzo: Passeggiata Fonte Fredda, 36b, 15011 Acqui Terme AL
7. **Villa Scati** — Acqui Terme
   - slug: `villa-scati-acqui-terme`
   - indirizzo: Località Quartino, 1, 15010 Melazzo AL
8. **Agriturismo 3 Elle Blues of Rivers** — Acri
   - slug: `agriturismo-3-elle-blues-of-rivers-acri`
   - indirizzo: Contrada Duglia, 60, 87041 Acri CS
9. **B&B Sandro Pertini** — Acri
   - slug: `b-b-sandro-pertini-acri`
   - indirizzo: Corso Sandro Pertini, 55, 87041 Acri CS
10. **Domus Grand Hotel** — Acri
   - slug: `domus-grand-hotel-acri`
   - indirizzo: Via G. L. Bernini, 6, 87036 Rende CS
11. **Floris Hotel** — Acri
   - slug: `floris-hotel-acri`
   - indirizzo: Via E. Maiorana, 22, 87036 Rende CS
12. **Hotel 660** — Acri
   - slug: `hotel-660-acri`
   - indirizzo: Contrada Cocozello, 96, 87041 Acri CS
13. **Hotel Ausonia** — Acri
   - slug: `hotel-ausonia-acri`
   - indirizzo: Contrada Chiubica, snc, 87064 Corigliano CS
14. **Hotel Europa** — Acri
   - slug: `hotel-europa-acri`
   - indirizzo: Via Kennedy, 29L, 87036 Rende CS
15. **Hotel San Francesco** — Acri
   - slug: `hotel-san-francesco-acri`
   - indirizzo: Via Giuseppe Ungaretti, 2, 87036 Rende CS
16. **Hotel Tania** — Acri
   - slug: `hotel-tania-acri`
   - indirizzo: Contrada Mezzofato, 18, 87064 Cantinella CS
17. **La Locanda dei Cocomeri** — Acri
   - slug: `la-locanda-dei-cocomeri-acri`
   - indirizzo: Via Coretta, 53, 87040 Montalto Uffugo CS
18. **La Rosa dei Venti** — Acri
   - slug: `la-rosa-dei-venti-acri`
   - indirizzo: Via Don Giovanni Minzoni, 2, 87041 Acri CS
19. **Le Stanze Di Nu Café** — Acri
   - slug: `le-stanze-di-nu-cafe-acri`
   - indirizzo: Via Primavera di Praga, 87041 Acri CS
20. **Motel Kratos** — Acri
   - slug: `motel-kratos-acri`
   - indirizzo: Via Torre Grande, 87043 Bisignano CS
21. **Nunù Bed and Breakfast** — Acri
   - slug: `nunu-bed-and-breakfast-acri`
   - indirizzo: Via Carlo Alberto Dalla Chiesa, 24/A, 87041 Acri CS
22. **Piazza Salotto** — Acri
   - slug: `piazza-salotto-acri`
   - indirizzo: Via F. Maradea, 14, 87064 Corigliano-Rossano CS
23. **Relais Il Mulino** — Acri
   - slug: `relais-il-mulino-acri`
   - indirizzo: Contrada Santa Domenica, Contrada Chiubbica, 87064 Corigliano CS
24. **Residence Vittoria** — Acri
   - slug: `residence-vittoria-acri`
   - indirizzo: Via Alcide de Gasperi, 375, 87041 Acri CS
25. **SUPERSONIK Hotel - Ristorante/Pizzeria** — Acri
   - slug: `supersonik-hotel-ristorante-pizzeria-acri`
   - indirizzo: Viale della Repubblica, 65, 87041 Acri CS
26. **Agriturismo Cisogna** — Acuto
   - slug: `agriturismo-cisogna-acuto`
   - indirizzo: SC Cisogna, 03012 San Filippo FR
27. **Agriturismo Le Valli** — Acuto
   - slug: `agriturismo-le-valli-acuto`
   - indirizzo: Via Prenestina, km 32.800, 03010 Acuto FR
28. **Agriturismo San Lorenzo** — Acuto
   - slug: `agriturismo-san-lorenzo-acuto`
   - indirizzo: Via Prenestina, 96, 03014 Fiuggi FR
29. **B&B La Locanda** — Acuto
   - slug: `b-b-la-locanda-acuto`
   - indirizzo: Piazza Trento e Trieste, 17, 03014 Fiuggi FR
30. **Bel Sito** — Acuto
   - slug: `bel-sito-acuto`
   - indirizzo: Via Fiume, 4, 03014 Fiuggi FR
31. **Best Western Hotel Colaiaco** — Acuto
   - slug: `best-western-hotel-colaiaco-acuto`
   - indirizzo: Via Anticolana, 5, 03012 Anagni FR
32. **Hotel Belsito Wellness & Spa Fiuggi** — Acuto
   - slug: `hotel-belsito-wellness-spa-fiuggi-acuto`
   - indirizzo: Via Rettifilo, 23, 03014 Fiuggi FR
33. **Hotel Continentale** — Acuto
   - slug: `hotel-continentale-acuto`
   - indirizzo: Via Rettifilo, 30, 03014 Fiuggi FR
34. **Hotel dei Pini** — Acuto
   - slug: `hotel-dei-pini-acuto`
   - indirizzo: Via Vallicelle, 19, 03014 Fiuggi FR
35. **Hotel delle Terme & Spa** — Acuto
   - slug: `hotel-delle-terme-spa-acuto`
   - indirizzo: Via dei Villini, 57, 03014 Fiuggi FR