# Blocco 175/500 — 35 strutture senza descrizione IT

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

1. **Ramandolo club** — Attimis
   - slug: `ramandolo-club-attimis`
   - indirizzo: Via del Borgo, 12, 33045 Nimis UD
2. **Tenuta Valdomini S. Agricola R.L.** — Attimis
   - slug: `tenuta-valdomini-s-agricola-r-l-attimis`
   - indirizzo: Borgo Piccoli, 33040 Piccoli UD
3. **Bed & Breakfast Sa Lumenaria** — Atzara
   - slug: `bed-breakfast-sa-lumenaria-atzara`
   - indirizzo: Viale Stazione, n°5, 08038 Sorgono NU
4. **Hotel Sa Valasa** — Atzara
   - slug: `hotel-sa-valasa-atzara`
   - indirizzo: Località Lago di Gusana, 08020 Gavoi NU
5. **La Plaza Affittacamere Ollolai** — Atzara
   - slug: `la-plaza-affittacamere-ollolai-atzara`
   - indirizzo: Piazza Guglielmo Marconi, 4, 08020 Ollolai NU
6. **B&B APARTMENT FIORISOL** — Augusta
   - slug: `b-b-apartment-fiorisol-augusta`
   - indirizzo: Via Megara, 44, 96011 Augusta SR
7. **B&B Augusta** — Augusta
   - slug: `b-b-augusta-augusta`
   - indirizzo: Via Papa Giovanni XXIII, 26, 96011 Augusta SR
8. **B&B Garden Holiday** — Augusta
   - slug: `b-b-garden-holiday-augusta`
   - indirizzo: Viale Edoardo Garrone, 14, 96010 Città Giardino SR
9. **B&B Giosa** — Augusta
   - slug: `b-b-giosa-augusta`
   - indirizzo: via dante alighieri, n19, 96011 Augusta SR
10. **B&B Mare di Augusta - La finestra sul porto** — Augusta
   - slug: `b-b-mare-di-augusta-la-finestra-sul-porto-augusta`
   - indirizzo: Via Adua, 2, 96011 Augusta SR
11. **B&B Vecchia Darsena** — Augusta
   - slug: `b-b-vecchia-darsena-augusta`
   - indirizzo: Via Darsena, 4, 96011 Augusta SR
12. **B&Brucoli** — Augusta
   - slug: `b-brucoli-augusta`
   - indirizzo: 96011 Bongiovanni II SR
13. **Capo Campolato Hotel & Banqueting** — Augusta
   - slug: `capo-campolato-hotel-banqueting-augusta`
   - indirizzo: Contrada Campolato, 96011 Brucoli SR
14. **Casepicarmo Guest House & Epicure Spa** — Augusta
   - slug: `casepicarmo-guest-house-epicure-spa-augusta`
   - indirizzo: Via Epicarmo, 133, 96011 Augusta SR
15. **Città della Notte - hotel tra Catania e Siracusa, Sicily hotel, cinema multisala, teatro, sala congressi, discoteca.** — Augusta
   - slug: `citta-della-notte-hotel-tra-catania-e-siracusa-s-augusta`
   - indirizzo: Strada provinciale 3, Bivio Augusta, Contrada Campana, 96010, 96010 Melilli SR
16. **GUEST HOUSE GOLFO XIFONIO** — Augusta
   - slug: `guest-house-golfo-xifonio-augusta`
   - indirizzo: Via Xifonia, 83, 96011 Augusta SR
17. **Guest House San Domenico** — Augusta
   - slug: `guest-house-san-domenico-augusta`
   - indirizzo: Vicolo S. Domenico, 6, 96011 Augusta SR
18. **Hotel La Bussola** — Augusta
   - slug: `hotel-la-bussola-augusta`
   - indirizzo: SS 114 Orientale Sicula, 30, 96010 Priolo Gargallo SR
19. **Hotel La Cavalera** — Augusta
   - slug: `hotel-la-cavalera-augusta`
   - indirizzo: Via delle Palme, 26, 96011 Augusta SR
20. **Hotel Villa Marina** — Augusta
   - slug: `hotel-villa-marina-augusta`
   - indirizzo: Via Spinelli, 60, 96011 Augusta SR
21. **Il Triangolo Hotel** — Augusta
   - slug: `il-triangolo-hotel-augusta`
   - indirizzo: Via Lungomare, 7, 96011 Agnone Bagni SR
22. **Krinò Cafè Hotel** — Augusta
   - slug: `krino-cafe-hotel-augusta`
   - indirizzo: Viale America, 7, 96011 Augusta SR
23. **Mangia's Brucoli, Sicily, Autograph Collection** — Augusta
   - slug: `mangia-s-brucoli-sicily-autograph-collection-augusta`
   - indirizzo: Contrada Gisira, 96010 Brucoli SR
24. **Venus Sea Garden Hotel** — Augusta
   - slug: `venus-sea-garden-hotel-augusta`
   - indirizzo: Via Pantelleria, 22, 96011 Augusta SR
25. **Villa Dei Cesari** — Augusta
   - slug: `villa-dei-cesari-augusta`
   - indirizzo: Via Barone Zuppello, 84, 96011 Augusta SR
26. **Albergo Terme Forlenza** — Auletta
   - slug: `albergo-terme-forlenza-auletta`
   - indirizzo: SP429a, 84024 Contursi Terme SA
27. **B&B Anastasia** — Auletta
   - slug: `b-b-anastasia-auletta`
   - indirizzo: Corso Giuseppe Garibaldi, 40, 84021 Buccino SA
28. **B&B L'Oasi** — Auletta
   - slug: `b-b-l-oasi-auletta`
   - indirizzo: Strada Regionale 94a, 84031 Auletta SA
29. **Bed and Breakfast Mezzanotte** — Auletta
   - slug: `bed-and-breakfast-mezzanotte-auletta`
   - indirizzo: Contrada gara gara, 85050 Balvano PZ
30. **Elia Hotel** — Auletta
   - slug: `elia-hotel-auletta`
   - indirizzo: Localita' Frascineta, 84021 Buccino SA
31. **Hotel Ristorante "Zi Marianna"** — Auletta
   - slug: `hotel-ristorante-zi-marianna-auletta`
   - indirizzo: Contrada Muraglione, 9, 84030 Pertosa SA
32. **Hotel Terme Capasso** — Auletta
   - slug: `hotel-terme-capasso-auletta`
   - indirizzo: Via Nazionale Bagni, 100/2 km, 84024 Sa SA
33. **Palazzo Gentilizio de Maffutiis** — Auletta
   - slug: `palazzo-gentilizio-de-maffutiis-auletta`
   - indirizzo: Via Luca Beatrice, 84031 Auletta SA
34. **Palazzo Sabini** — Auletta
   - slug: `palazzo-sabini-auletta`
   - indirizzo: Via Casale Sottano, 38, 84030 Pertosa SA
35. **A Casa Di Marilù** — Aulla
   - slug: `a-casa-di-marilu-aulla`
   - indirizzo: Via San Rocco, 32, 54035 Pulica MS