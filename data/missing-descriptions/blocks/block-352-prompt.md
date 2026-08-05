# Blocco 352/500 — 35 strutture senza descrizione IT

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

1. **Abbamele** — Cabras
   - slug: `abbamele-cabras`
   - indirizzo: Via Trieste, 54, 09072 Cabras OR
2. **Albergo Diffuso Aquae Sinis** — Cabras
   - slug: `albergo-diffuso-aquae-sinis-cabras`
   - indirizzo: Via Cesare Battisti, 44, 09072 Cabras OR
3. **Alice Bed and Breakfast** — Cabras
   - slug: `alice-bed-and-breakfast-cabras`
   - indirizzo: Corso Italia, 72, 09072 Cabras OR
4. **Artista B&B** — Cabras
   - slug: `artista-b-b-cabras`
   - indirizzo: via Lanusei, 14, 09072 Cabras OR
5. **B&B DiVino** — Cabras
   - slug: `b-b-divino-cabras`
   - indirizzo: Via Salvator Angelo de Castro, 125, 09072 Cabras OR
6. **Bed & Breakfast Gi & Giò** — Cabras
   - slug: `bed-breakfast-gi-gio-cabras`
   - indirizzo: Via Tharros, 187, 09072 Cabras OR
7. **Civico 47** — Cabras
   - slug: `civico-47-cabras`
   - indirizzo: Via Sassari, 47, 09072 Cabras OR
8. **Domo La Laguna** — Cabras
   - slug: `domo-la-laguna-cabras`
   - indirizzo: P.za Stagno, 09072 Cabras OR
9. **Il Tuo Relax** — Cabras
   - slug: `il-tuo-relax-cabras`
   - indirizzo: Via Giuseppe Garibaldi, 35, 09072 Cabras OR
10. **La Terrazza** — Cabras
   - slug: `la-terrazza-cabras`
   - indirizzo: secondo piano, Via XX Settembre, n°-12, 09170 Oristano OR
11. **Monte Prama B&B Cabras** — Cabras
   - slug: `monte-prama-b-b-cabras-cabras`
   - indirizzo: Via Armando Diaz, 55, 09072 Cabras OR
12. **Palazzo Ma.Ri.lu.** — Cabras
   - slug: `palazzo-ma-ri-lu-cabras`
   - indirizzo: Via Asproni, 7, 09072 Cabras OR
13. **Sa Pedrera Country Hotel** — Cabras
   - slug: `sa-pedrera-country-hotel-cabras`
   - indirizzo: Strada Provinciale Cabras - S. Giovanni di Sinis, Km 7, 5, 09072 Cabras OR
14. **Agriturismo Cicala Giuseppe Faso** — Caccamo
   - slug: `agriturismo-cicala-giuseppe-faso-caccamo`
   - indirizzo: Contrada Misa, 90012 Caccamo PA
15. **B&B Villa Fenice** — Caccamo
   - slug: `b-b-villa-fenice-caccamo`
   - indirizzo: Contrada Ognibene, 90018 Termini Imerese PA
16. **Casa Di Sylwia** — Caccamo
   - slug: `casa-di-sylwia-caccamo`
   - indirizzo: Via Torre dei Saccari, 18, 90018 Termini Imerese PA
17. **Casi Javuti** — Caccamo
   - slug: `casi-javuti-caccamo`
   - indirizzo: 90014 Casteldaccia PA
18. **Da Carlo** — Caccamo
   - slug: `da-carlo-caccamo`
   - indirizzo: Via Luigi Pirandello, 18, 90020 Scillato PA
19. **Hotel Piccolo** — Caccamo
   - slug: `hotel-piccolo-caccamo`
   - indirizzo: Via Ciaula, 10, 90018 Termini Imerese PA
20. **Il Cortile Holiday House** — Caccamo
   - slug: `il-cortile-holiday-house-caccamo`
   - indirizzo: Via Orto degli Angeli, 16, 90012 Caccamo PA
21. **La Casetta Di Rosina** — Caccamo
   - slug: `la-casetta-di-rosina-caccamo`
   - indirizzo: Piazza Zafferana, 22, 90012 Caccamo PA
22. **LA ROCCA ALBERGO RISTORANTE SALA RICEVIMENTI PIZZERIA** — Caccamo
   - slug: `la-rocca-albergo-ristorante-sala-ricevimenti-piz-caccamo`
   - indirizzo: Via Case Vecchie, 12, 90020 Roccapalumba PA
23. **Orto Raccolto** — Caccamo
   - slug: `orto-raccolto-caccamo`
   - indirizzo: Contrada Arancio, 90018 Termini Imerese PA
24. **Villa Calcasacco casa vacanza** — Caccamo
   - slug: `villa-calcasacco-casa-vacanza-caccamo`
   - indirizzo: C.da Calcasacco, 90018 Termini Imerese PA
25. **Agriturismo Canciumati Di Certo Mario Francesco** — Caccuri
   - slug: `agriturismo-canciumati-di-certo-mario-francesco-caccuri`
   - indirizzo: Contrada Canciumati, 1, 88833 Caccuri KR
26. **Grancia del Vurdoj** — Caccuri
   - slug: `grancia-del-vurdoj-caccuri`
   - indirizzo: Granciadelvurdoj@gmail.com, 88833 Caccuri KR
27. **Az. Agri. piccoli frutti rossi** — Cadegliano-Viconago
   - slug: `az-agri-piccoli-frutti-rossi-cadegliano-viconago`
   - indirizzo: località Cognolo, 21031 Cadegliano-Viconago VA
28. **B&B Villa Claudia** — Cadegliano-Viconago
   - slug: `b-b-villa-claudia-cadegliano-viconago`
   - indirizzo: Via Asilo, 13a, 21030 Marchirolo VA
29. **BB Cadore Casa Vacanza** — Cadegliano-Viconago
   - slug: `bb-cadore-casa-vacanza-cadegliano-viconago`
   - indirizzo: Via Lazio, 6, 21100 Varese VA
30. **Minerva Residence** — Cadegliano-Viconago
   - slug: `minerva-residence-cadegliano-viconago`
   - indirizzo: Via Ponte Tresa, 60, 21031 Cadegliano-Viconago VA
31. **Rosso Di Sera** — Cadegliano-Viconago
   - slug: `rosso-di-sera-cadegliano-viconago`
   - indirizzo: Via Camer, 8, 21031 Cadegliano-Viconago VA
32. **Villa Floreal, Ferienwohnungen** — Cadegliano-Viconago
   - slug: `villa-floreal-ferienwohnungen-cadegliano-viconago`
   - indirizzo: Via Francesco Monico, 30, 21031 Cadegliano-Viconago VA
33. **Agriturismo Aquila Nera** — Cadelbosco di Sopra
   - slug: `agriturismo-aquila-nera-cadelbosco-di-sopra`
   - indirizzo: RE, Via Ponte Forca, 65, 42023 Ponte Forca RE
34. **Agriturismo Due Papaveri** — Cadelbosco di Sopra
   - slug: `agriturismo-due-papaveri-cadelbosco-di-sopra`
   - indirizzo: Via Spinzola, 42, 41026 Benedello, Pavullo MO
35. **Agriturismo Il Salice** — Cadelbosco di Sopra
   - slug: `agriturismo-il-salice-cadelbosco-di-sopra`
   - indirizzo: Val Parma, 45, 43028 Tizzano Val Parma PR