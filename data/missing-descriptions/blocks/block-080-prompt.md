# Blocco 80/500 — 35 strutture senza descrizione IT

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

1. **B&B In Riva al Lago** — Almese
   - slug: `b-b-in-riva-al-lago-almese`
   - indirizzo: Via Monginevro, 2, 10051 Avigliana TO
2. **B&B La Curandera** — Almese
   - slug: `b-b-la-curandera-almese`
   - indirizzo: Piazza S. Michele, 1, 10090 Rosta TO
3. **B&B La Magnolia** — Almese
   - slug: `b-b-la-magnolia-almese`
   - indirizzo: Via Bruere, 24, 10098 Rivoli TO
4. **B&B La Marmotta** — Almese
   - slug: `b-b-la-marmotta-almese`
   - indirizzo: borgata, Via Ruffinera, 28, 10050 Coazze TO
5. **B&B Sanpancrazio** — Almese
   - slug: `b-b-sanpancrazio-almese`
   - indirizzo: Via San Pancrazio, Passare da via Torino, Via S. Rocco, 24, 10050 Vaie TO
6. **Casa Conte Rosso** — Almese
   - slug: `casa-conte-rosso-almese`
   - indirizzo: Piazza Conte Rosso, 20, 10051 Avigliana TO
7. **Casa dei Nonni - Bed & Breakfast** — Almese
   - slug: `casa-dei-nonni-bed-breakfast-almese`
   - indirizzo: Via G. Puccini, 28, 10044 Pianezza TO
8. **Casa Didé Hotel Location** — Almese
   - slug: `casa-dide-hotel-location-almese`
   - indirizzo: Via A. Abegg, 16, 10050 San Didero TO
9. **Cascina Bucolica** — Almese
   - slug: `cascina-bucolica-almese`
   - indirizzo: Via Colgiansesco, 12, 10091 Alpignano TO
10. **Hotel Caprice** — Almese
   - slug: `hotel-caprice-almese`
   - indirizzo: Via Pinerolo, 1, 10051 Avigliana TO
11. **Hotel Davide** — Almese
   - slug: `hotel-davide-almese`
   - indirizzo: Via Legnano, 21, 10098 Rivoli TO
12. **Hotel Garden Rivoli** — Almese
   - slug: `hotel-garden-rivoli-almese`
   - indirizzo: Corso Susa, 381, 10098 Rivoli TO
13. **La Rosseria B&B** — Almese
   - slug: `la-rosseria-b-b-almese`
   - indirizzo: Via Umberto I, 79, 10057 Sant'Ambrogio di Torino TO
14. **Rivoli Hotel** — Almese
   - slug: `rivoli-hotel-almese`
   - indirizzo: C.so Primo Levi, 150, 10098 Rivoli TO
15. **Tulip Inn Turin West Hotel** — Almese
   - slug: `tulip-inn-turin-west-hotel-almese`
   - indirizzo: Corso C. G. Allamano, 153, 10098 Rivoli TO
16. **Active Alm Hotel Moena** — Alm�
   - slug: `active-alm-hotel-moena-alm`
   - indirizzo: Via de S. Pellegrino, 11, 38035 Moena TN
17. **Almare' B&b** — Alm�
   - slug: `almare-b-b-alm`
   - indirizzo: V.Lago di Bracciano, 36, 72012 Torre Santa Sabina BR
18. **B&B Alalama** — Alm�
   - slug: `b-b-alalama-alm`
   - indirizzo: Via S. Vito, 103, 70044 Polignano a Mare BA
19. **B&B AlMaré** — Alm�
   - slug: `b-b-almare-alm`
   - indirizzo: Via dei Bougainvillea 6^ Traversa Contrada, Via Misti Quota 13, 74024 Manduria TA
20. **B&B Atelier della Montagna** — Alm�
   - slug: `b-b-atelier-della-montagna-alm`
   - indirizzo: Via Bertulli, 64, 24013 Zambla Alta BG
21. **Bed & Breakfast Aia Grande Puglia / Apulien** — Alm�
   - slug: `bed-breakfast-aia-grande-puglia-apulien-alm`
   - indirizzo: Via Uggiano, 73020 Uggiano la Chiesa LE
22. **Bed breakfast "Albero del Miglio"** — Alm�
   - slug: `bed-breakfast-albero-del-miglio-alm`
   - indirizzo: Contrada Scizzo, 28, 70016 Noicattaro BA
23. **Lamapulia | Eventi & Suite con SPA Privata** — Alm�
   - slug: `lamapulia-eventi-suite-con-spa-privata-alm`
   - indirizzo: SP57, 65, 70016 Noicattaro BA
24. **Agriturismo Ca' D'oro** — Alonte
   - slug: `agriturismo-ca-d-oro-alonte`
   - indirizzo: Via Ingegnere Guido Salvagnini, 60, 36040 Monticello di Fara VI
25. **Agriturismo Castel Bricon** — Alonte
   - slug: `agriturismo-castel-bricon-alonte`
   - indirizzo: Via Castelbriccon, 3, 36045 Lonigo VI
26. **Corte Quadri** — Alonte
   - slug: `corte-quadri-alonte`
   - indirizzo: Via Ponte spin, 17/L, 36045 Lonigo VI
27. **Hotel Fracanzana** — Alonte
   - slug: `hotel-fracanzana-alonte`
   - indirizzo: Via Fracanzana, 3, 36054 Montebello Vicentino VI
28. **La Barchessa di Villa Pisani** — Alonte
   - slug: `la-barchessa-di-villa-pisani-alonte`
   - indirizzo: di Lonigo, Via Risaie, 1/3, 36045 Bagnolo VI
29. **La Pria Wine Resort** — Alonte
   - slug: `la-pria-wine-resort-alonte`
   - indirizzo: Villa Trevisan, Via Roma, 43, 36045 Alonte VI
30. **Villa Le Meridiane - short term rental apartments** — Alonte
   - slug: `villa-le-meridiane-short-term-rental-apartments-alonte`
   - indirizzo: Via Giuseppe Mazzini, 12, 36053 Gambellara VI
31. **Villa San Fermo** — Alonte
   - slug: `villa-san-fermo-alonte`
   - indirizzo: Via S. Fermo, 17, 36045 Lonigo VI
32. **Albergo Al Ponte Della Vittoria - Ristorante dai Tedeschi** — Alpago
   - slug: `albergo-al-ponte-della-vittoria-ristorante-dai-t-alpago`
   - indirizzo: Via Monte Grappa, 1, 32100 Belluno BL
33. **Albergo Al Sasso** — Alpago
   - slug: `albergo-al-sasso-alpago`
   - indirizzo: Via Cansiglio, 9, 32010 Tambre BL
34. **Albergo All'Alba** — Alpago
   - slug: `albergo-all-alba-alpago`
   - indirizzo: Via Tambruz, 89, 32010 Tambre BL
35. **Albergo Alla Spiaggia** — Alpago
   - slug: `albergo-alla-spiaggia-alpago`
   - indirizzo: Viale Al Lago, 5, 32016 Alpago BL