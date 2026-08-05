# Blocco 464/500 — 35 strutture senza descrizione IT

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

1. **Grecinella** — Casole d'Elsa
   - slug: `grecinella-casole-d-elsa`
   - indirizzo: Loc. Grecinella, 28, SP27, 53031 Casole d'Elsa SI
2. **HOTEL AL VECCHIO PIETRETO** — Casole d'Elsa
   - slug: `hotel-al-vecchio-pietreto-casole-d-elsa`
   - indirizzo: Strada Vicinale del Pietreto, 73, 53034 Colle di Val d'Elsa SI
3. **HOTEL LA SELVA - HOLISTIC HOTEL** — Casole d'Elsa
   - slug: `hotel-la-selva-holistic-hotel-casole-d-elsa`
   - indirizzo: Località Podere Pagliano, 22, 53031 Casole d'Elsa SI
4. **Hotel Villa Belvedere** — Casole d'Elsa
   - slug: `hotel-villa-belvedere-casole-d-elsa`
   - indirizzo: Via Senese, 53034 Loc. Belvedere, Colle Val d’Elsa SI
5. **La casa di Arianna** — Casole d'Elsa
   - slug: `la-casa-di-arianna-casole-d-elsa`
   - indirizzo: 53031 Casole d'Elsa SI
6. **La Peschiera Casole d'Elsa - Agriturismo** — Casole d'Elsa
   - slug: `la-peschiera-casole-d-elsa-agriturismo-casole-d-elsa`
   - indirizzo: Località Cavallano, 8, 53031 Casole d'Elsa SI
7. **Monti 1824 - Cottages & Apartments** — Casole d'Elsa
   - slug: `monti-1824-cottages-apartments-casole-d-elsa`
   - indirizzo: Viale della Rimembranza, 12, 53031 Casole d'Elsa SI
8. **Podere la Ciabatta** — Casole d'Elsa
   - slug: `podere-la-ciabatta-casole-d-elsa`
   - indirizzo: Località Monti, 16, 53031 Casole d'Elsa SI
9. **Relax Hotel Acquaviva – Tuscany Hills** — Casole d'Elsa
   - slug: `relax-hotel-acquaviva-tuscany-hills-casole-d-elsa`
   - indirizzo: Località Acquaviva, 1, 53031 Casole d'Elsa SI
10. **Sportland la badia** — Casole d'Elsa
   - slug: `sportland-la-badia-casole-d-elsa`
   - indirizzo: Via Liguria, 1, 53034 Colle di Val d'Elsa SI
11. **Tenuta Colombaio** — Casole d'Elsa
   - slug: `tenuta-colombaio-casole-d-elsa`
   - indirizzo: Loc. Colombaio, Viale della Rimembranza, 27, 53034 Casole d'Elsa SI
12. **B&B La Casa di Giò** — Casoli
   - slug: `b-b-la-casa-di-gio-casoli`
   - indirizzo: Via della Pace, 9, 66034 Lanciano CH
13. **Lotus House Boutique B&b** — Casoli
   - slug: `lotus-house-boutique-b-b-casoli`
   - indirizzo: Contrada Villa Stanazzo, 202, 66034 Lanciano CH
14. **Palazzo Tilli** — Casoli
   - slug: `palazzo-tilli-casoli`
   - indirizzo: Largo del Fiore, 1, 66043 Casoli CH
15. **Residence La Piazzetta** — Casoli
   - slug: `residence-la-piazzetta-casoli`
   - indirizzo: Viale 4 Novembre, sn, 66015 Fara San Martino CH
16. **Agriturismo Sant'Anna** — Casorate Sempione
   - slug: `agriturismo-sant-anna-casorate-sempione`
   - indirizzo: Via Eugenio Villoresi, 140, 21019 Somma Lombardo VA
17. **B&B Il Poggio** — Casorate Sempione
   - slug: `b-b-il-poggio-casorate-sempione`
   - indirizzo: Via S. Martino, 11, 21011 Casorate Sempione VA
18. **Jet Hotel, Sure Hotel Collection by Best Western** — Casorate Sempione
   - slug: `jet-hotel-sure-hotel-collection-by-best-western-casorate-sempione`
   - indirizzo: Via Tiro a Segno, 22, 21013 Gallarate VA
19. **Novotel Milano Malpensa Airport** — Casorate Sempione
   - slug: `novotel-milano-malpensa-airport-casorate-sempione`
   - indirizzo: Via Al Campo, 99, 21010 Cardano al Campo VA
20. **B&B La Filanda di Francesca Meneghin** — Casorezzo
   - slug: `b-b-la-filanda-di-francesca-meneghin-casorezzo`
   - indirizzo: Via Europa, 14, 20010 Casorezzo MI
21. **BED & BREAKFAST IL CALIMUN** — Casorezzo
   - slug: `bed-breakfast-il-calimun-casorezzo`
   - indirizzo: Via dell'Asilo, 25, 20003 Casorezzo MI
22. **Crespi House - Cin IT015168C1KNATKFXZ** — Casorezzo
   - slug: `crespi-house-cin-it015168c1knatkfxz-casorezzo`
   - indirizzo: Via Valsugana, 1, 20015 Parabiago MI
23. **San Giacomo Horses & Agriturismo** — Casorezzo
   - slug: `san-giacomo-horses-agriturismo-casorezzo`
   - indirizzo: Strada, Cascina S. Giacomo, 20004 Arluno MI
24. **Hotel Kursaal - Camera day use - Napoli** — Casoria
   - slug: `hotel-kursaal-camera-day-use-napoli-casoria`
   - indirizzo: Via Raffaele Ruggiero, 289, 80125 Napoli NA
25. **Vertigo B&B** — Casoria
   - slug: `vertigo-b-b-casoria`
   - indirizzo: Via Lago Patria, 13, 80026 Casoria NA
26. **B&B La Sergiunga del Monferrato** — Casorzo Monferrato
   - slug: `b-b-la-sergiunga-del-monferrato-casorzo-monferrato`
   - indirizzo: Via Prato Casale, 37, 14032 Casorzo AT
27. **Casa** — Casorzo Monferrato
   - slug: `casa-casorzo-monferrato`
   - indirizzo: Cascina Milano n.7, frazione Mongetto, 15049 Vignale Monferrato AL
28. **Country House Montessino** — Casorzo Monferrato
   - slug: `country-house-montessino-casorzo-monferrato`
   - indirizzo: Cascina Montessino, 20, 15038 Ottiglio AL
29. **Agriturismo Caprareccia Bianca Holiday Apartments** — Casperia
   - slug: `agriturismo-caprareccia-bianca-holiday-apartment-casperia`
   - indirizzo: Via Santa Maria, 02041 Casperia RI
30. **Agriturismo le Mandriacce** — Casperia
   - slug: `agriturismo-le-mandriacce-casperia`
   - indirizzo: Via Piana, 11, 00060 Ponzano Romano RM
31. **B&B Colle Perrini Country House** — Casperia
   - slug: `b-b-colle-perrini-country-house-casperia`
   - indirizzo: Via Meleta, 24, 02041 Casperia RI
32. **Corte Buenavista Guest House** — Casperia
   - slug: `corte-buenavista-guest-house-casperia`
   - indirizzo: Vocabolo Chiorano, 12, 02046 Magliano Sabina RI
33. **Relais Borgo Gentile** — Casperia
   - slug: `relais-borgo-gentile-casperia`
   - indirizzo: Via dei tre colli SP, 53/N. 8, 02040 Tarano RI
34. **Ristorante Degli Angeli** — Casperia
   - slug: `ristorante-degli-angeli-casperia`
   - indirizzo: Vocabolo Madonna degli Angeli, 1, 02046 Madonna degli Angeli RI
35. **Agarthi Suites** — Caspoggio
   - slug: `agarthi-suites-caspoggio`
   - indirizzo: Via Fiorenza, 28, 23020 Boffetto SO