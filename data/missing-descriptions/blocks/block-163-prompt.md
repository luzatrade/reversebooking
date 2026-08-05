# Blocco 163/500 — 35 strutture senza descrizione IT

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

1. **Hotel Ristorante Il Nido Dell'Aquila** — Arzana
   - slug: `hotel-ristorante-il-nido-dell-aquila-arzana`
   - indirizzo: Località su settili, 08040 Villanova Strisaili OG
2. **Hotel Ristorante Pizzeria Bosco Selene** — Arzana
   - slug: `hotel-ristorante-pizzeria-bosco-selene-arzana`
   - indirizzo: Str. panoramica di Selene, 08045 Lanusei OG
3. **Hotel Sant'Efisio** — Arzana
   - slug: `hotel-sant-efisio-arzana`
   - indirizzo: Strada Provinciale per Talana Km. 4, 500, 1, 08040 Talana OG
4. **Locanda Sighimi** — Arzana
   - slug: `locanda-sighimi-arzana`
   - indirizzo: Via Indipendenza, n°41, 08045 Lanusei OG
5. **Monti e Mare BB** — Arzana
   - slug: `monti-e-mare-bb-arzana`
   - indirizzo: Via Antonio Gramsci, 6, 08045 Lanusei OG
6. **Oasi del benessere** — Arzana
   - slug: `oasi-del-benessere-arzana`
   - indirizzo: Località Tullargius, 1, 08040 Ilbono OG
7. **Redabba House - Rifugio naturalistico esperienziale in Ogliastra** — Arzana
   - slug: `redabba-house-rifugio-naturalistico-esperienzial-arzana`
   - indirizzo: Località Redabba, 08040 Arzana OG
8. **Agriturismo il VULCANO** — Arzano
   - slug: `agriturismo-il-vulcano-arzano`
   - indirizzo: Via Flauti, 8, 80040 San Sebastiano Al Vesuvio NA
9. **Agriturismo La Cascina** — Arzano
   - slug: `agriturismo-la-cascina-arzano`
   - indirizzo: Via Monte della Taglia (Contrada di San Nicola), 80030 Roccarainola NA
10. **B&B Frattamaggiore - The Roof Garden** — Arzano
   - slug: `b-b-frattamaggiore-the-roof-garden-arzano`
   - indirizzo: Via Carmelo Pezzullo, 22, 80027 Frattamaggiore NA
11. **B&B Le Canapine** — Arzano
   - slug: `b-b-le-canapine-arzano`
   - indirizzo: Via Ovidio, 2, 80027 Frattamaggiore NA
12. **B&B MAGEVA** — Arzano
   - slug: `b-b-mageva-arzano`
   - indirizzo: Via Mianella, 25, 80145 Napoli NA
13. **Casa Ary Bed and breakfast** — Arzano
   - slug: `casa-ary-bed-and-breakfast-arzano`
   - indirizzo: IV, Via Francesco D'Ambrosio, 25, 80027 Frattamaggiore NA
14. **Fattoria Alvaneta** — Arzano
   - slug: `fattoria-alvaneta-arzano`
   - indirizzo: Via Pantagnone, Contrada Alvaneta snc, 84034 Padula SA
15. **Hotel Cesirja** — Arzano
   - slug: `hotel-cesirja-arzano`
   - indirizzo: Via Eleonora Pimentel Fonseca, 20bis, 80020 Casavatore NA
16. **Hotel Europa** — Arzano
   - slug: `hotel-europa-arzano`
   - indirizzo: SP1, 206, 80144 Napoli NA
17. **Hotel Ferrari** — Arzano
   - slug: `hotel-ferrari-arzano`
   - indirizzo: Via Circumvallazione Esterna, 6, 80144 Napoli NA
18. **Hotel Giardino degli Aranci Frattamaggiore** — Arzano
   - slug: `hotel-giardino-degli-aranci-frattamaggiore-arzano`
   - indirizzo: Via Michelarcangelo Lupoli, 19, 80027 Frattamaggiore NA
19. **Hotel Il Salice** — Arzano
   - slug: `hotel-il-salice-arzano`
   - indirizzo: SP1, 80022 Arzano NA
20. **Suitebreak ARZANO** — Arzano
   - slug: `suitebreak-arzano-arzano`
   - indirizzo: Via Plauto, 6, 80144 Arzano NA
21. **Zia Bi Bed & Breakfast** — Arzano
   - slug: `zia-bi-bed-breakfast-arzano`
   - indirizzo: Via Ponti Rossi, 113, 80141 Napoli NA
22. **Agriturismo Villa Serena** — Arzergrande
   - slug: `agriturismo-villa-serena-arzergrande`
   - indirizzo: Via Nogia, 28, 30030 Vigonovo VE
23. **Albergo Trattoria alla Rampa** — Arzergrande
   - slug: `albergo-trattoria-alla-rampa-arzergrande`
   - indirizzo: Via Provinciale Sud, 262, 30030 Sandon VE
24. **B&B Casa Boscolo** — Arzergrande
   - slug: `b-b-casa-boscolo-arzergrande`
   - indirizzo: Via Dante Alighieri, 2, 35028 Piove di Sacco PD
25. **B&B Lella** — Arzergrande
   - slug: `b-b-lella-arzergrande`
   - indirizzo: Via Cristo, 46/A, 35028 Arzerello PD
26. **Casolare La Quercia** — Arzergrande
   - slug: `casolare-la-quercia-arzergrande`
   - indirizzo: Via Lovo, 5, 35020 Correzzola PD
27. **Hotel Ca 'Tron** — Arzergrande
   - slug: `hotel-ca-tron-arzergrande`
   - indirizzo: Via Cà Tron, 1, 30031 Dolo VE
28. **Hotel Florida** — Arzergrande
   - slug: `hotel-florida-arzergrande`
   - indirizzo: Via Alessio Valerio, 43, 35028 Piove di Sacco PD
29. **Hotel Ristorante da Toni** — Arzergrande
   - slug: `hotel-ristorante-da-toni-arzergrande`
   - indirizzo: Str. Romea, 12, 35020 Codevigo PD
30. **Hotel Villa Alighieri** — Arzergrande
   - slug: `hotel-villa-alighieri-arzergrande`
   - indirizzo: Via Dante A., 11, 30039 Stra VE
31. **Il Farfasole** — Arzergrande
   - slug: `il-farfasole-arzergrande`
   - indirizzo: Via Giovanni Pascoli, 113, 30030 Vigonovo VE
32. **Il Glicine** — Arzergrande
   - slug: `il-glicine-arzergrande`
   - indirizzo: Via Generale C. A. dalla Chiesa, 14, 35020 Campagnola PD
33. **Locanda Zabotto** — Arzergrande
   - slug: `locanda-zabotto-arzergrande`
   - indirizzo: Via D. Manin, 61, 30010 Lugo di Campagna Lupia VE
34. **Villa Gasparini** — Arzergrande
   - slug: `villa-gasparini-arzergrande`
   - indirizzo: Riviera Martiri della Libertà, 37, 30031 Dolo VE
35. **B&B ALLE SCALETTE - Bed and Breakfast Trissino (Vicenza)** — Arzignano
   - slug: `b-b-alle-scalette-bed-and-breakfast-trissino-vic-arzignano`
   - indirizzo: Via 4 Novembre, 37, 36070 Trissino VI