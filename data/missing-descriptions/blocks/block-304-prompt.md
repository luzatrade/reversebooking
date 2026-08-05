# Blocco 304/500 — 35 strutture senza descrizione IT

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

1. **Casa Alpina "Evelina Ostorero"** — Borgone Susa
   - slug: `casa-alpina-evelina-ostorero-borgone-susa`
   - indirizzo: Borgata Ferria, 12, 10050 Forno di Coazze TO
2. **Centro San Michele** — Borgone Susa
   - slug: `centro-san-michele-borgone-susa`
   - indirizzo: Borgata Adret, 10050 San Giorio di Susa TO
3. **Hotel Napoleon Susa** — Borgone Susa
   - slug: `hotel-napoleon-susa-borgone-susa`
   - indirizzo: Via Mazzini, 44, 10059 Susa TO
4. **La Casa di Bianca CIN IT001255C1PXZ7KJXA** — Borgone Susa
   - slug: `la-casa-di-bianca-cin-it001255c1pxz7kjxa-borgone-susa`
   - indirizzo: Via Bertassi, 35, 10057 Sant'Ambrogio di Torino TO
5. **Paradise Bruzolo** — Borgone Susa
   - slug: `paradise-bruzolo-borgone-susa`
   - indirizzo: Località Posta, 7, 10050 Bruzolo TO
6. **Pràcatinat Hotel & Restaurant** — Borgone Susa
   - slug: `pracatinat-hotel-restaurant-borgone-susa`
   - indirizzo: Località Prà Catinat, 2, 10060 Fenestrelle TO
7. **Relais Bosco Verde** — Borgone Susa
   - slug: `relais-bosco-verde-borgone-susa`
   - indirizzo: Via Assietta, 14, 10094 Giaveno TO
8. **Agriturismo Ca' Vida** — Borgonovo Val Tidone
   - slug: `agriturismo-ca-vida-borgonovo-val-tidone`
   - indirizzo: Viale dei Mille, 37, 29010 Ziano Piacentino PC
9. **Agriturismo Croara Vecchia** — Borgonovo Val Tidone
   - slug: `agriturismo-croara-vecchia-borgonovo-val-tidone`
   - indirizzo: Località Croara Vecchia, 5, 29010 Gazzola PC
10. **Agriturismo Il Corniolo** — Borgonovo Val Tidone
   - slug: `agriturismo-il-corniolo-borgonovo-val-tidone`
   - indirizzo: Frazione Castelnovo val tidone. Dal ufficio postale di Castelnovo girare a destra e proseguire per 800mt, "STRADA DEL CORNIOLO, 29011 Borgonovo Val Tidone PC
11. **Agriturismo Il Cortile** — Borgonovo Val Tidone
   - slug: `agriturismo-il-cortile-borgonovo-val-tidone`
   - indirizzo: Via Montanara, 29011 Borgonovo Val Tidone PC
12. **AZ.AGR.WILDMANN** — Borgonovo Val Tidone
   - slug: `az-agr-wildmann-borgonovo-val-tidone`
   - indirizzo: 64, Loc Ruino, 27061 Ruino PV
13. **B&B Oasi Val Luretta** — Borgonovo Val Tidone
   - slug: `b-b-oasi-val-luretta-borgonovo-val-tidone`
   - indirizzo: Località Ca' del Verme, 29010 Gazzola PC
14. **De Chloé S.S.Agr. - Villa Chloé** — Borgonovo Val Tidone
   - slug: `de-chloe-s-s-agr-villa-chloe-borgonovo-val-tidone`
   - indirizzo: Località Castelrotto, 11, 27047 Montecalvo Versiggia PV
15. **Locanda dei Melograni - Lungacque** — Borgonovo Val Tidone
   - slug: `locanda-dei-melograni-lungacque-borgonovo-val-tidone`
   - indirizzo: Località Maruffi, 55, 29020 Caratta PC
16. **Relais La Colombara** — Borgonovo Val Tidone
   - slug: `relais-la-colombara-borgonovo-val-tidone`
   - indirizzo: Frazione Pigazzano, 29020 Travo PC
17. **Villa Paradiso** — Borgonovo Val Tidone
   - slug: `villa-paradiso-borgonovo-val-tidone`
   - indirizzo: Localita' Chignoli, 143, 29011 Borgonovo Val Tidone PC
18. **Albergo '900** — Borgoratto Alessandrino
   - slug: `albergo-900-borgoratto-alessandrino`
   - indirizzo: Via Padana Est, 23, 15028 Quattordio AL
19. **Cascina La Maddalena Bed & Wine** — Borgoratto Alessandrino
   - slug: `cascina-la-maddalena-bed-wine-borgoratto-alessandrino`
   - indirizzo: Località Piani Del Padrone, 257, 15078 San Giacomo AL
20. **HM MotelHotel** — Borgoratto Alessandrino
   - slug: `hm-motelhotel-borgoratto-alessandrino`
   - indirizzo: Via Carlo Mussa, 694, 15073 Castellazzo Bormida AL
21. **Villa Marengo Guest House** — Borgoratto Alessandrino
   - slug: `villa-marengo-guest-house-borgoratto-alessandrino`
   - indirizzo: Via Genova, 189, 15122 Spinetta Marengo AL
22. **Agriturismo Cascina Serzego** — Borgoratto Mormorolo
   - slug: `agriturismo-cascina-serzego-borgoratto-mormorolo`
   - indirizzo: loc. cascina Serzego, 27050 Val di Nizza PV
23. **Agriturismo della Costa** — Borgoratto Mormorolo
   - slug: `agriturismo-della-costa-borgoratto-mormorolo`
   - indirizzo: Frazione Costa Cavalieri, 10, 27040 Costa Cavalieri PV
24. **Bed & Breakfast Oasi di Pace** — Borgoratto Mormorolo
   - slug: `bed-breakfast-oasi-di-pace-borgoratto-mormorolo`
   - indirizzo: Frazione Pianazzo, 5, 27040 Borgoratto Mormorolo PV
25. **Il Melo Rosso** — Borgoratto Mormorolo
   - slug: `il-melo-rosso-borgoratto-mormorolo`
   - indirizzo: Località Cà de Vecchi, 1, 27040 Fortunago PV
26. **La Locanda del Molino Azienda Agricola Madreselva** — Borgoratto Mormorolo
   - slug: `la-locanda-del-molino-azienda-agricola-madreselv-borgoratto-mormorolo`
   - indirizzo: Località Molino della Signora, 10, 27040 Fortunago PV
27. **Agrialloggio Verde Fiore di Gambaro Roberto** — Borgoricco
   - slug: `agrialloggio-verde-fiore-di-gambaro-roberto-borgoricco`
   - indirizzo: Via A. Volta, 65A, 35010 Vigonza PD
28. **Albergo Residence Roma** — Borgoricco
   - slug: `albergo-residence-roma-borgoricco`
   - indirizzo: Borgo Trento Trieste, 57, 35012 Camposampiero PD
29. **Alla Casa dei Nonni** — Borgoricco
   - slug: `alla-casa-dei-nonni-borgoricco`
   - indirizzo: Via Rossignolo, 29, 35011 Campodarsego PD
30. **Amoler Agriturismo** — Borgoricco
   - slug: `amoler-agriturismo-borgoricco`
   - indirizzo: Via Le Basse, 29, 30035 Mirano VE
31. **B&B Villa Berti** — Borgoricco
   - slug: `b-b-villa-berti-borgoricco`
   - indirizzo: Via Berti, 38, 35010 Sant'Ambrogio PD
32. **Casa Bernardo Bed & Breakfast** — Borgoricco
   - slug: `casa-bernardo-bed-breakfast-borgoricco`
   - indirizzo: Via Roma, 126, 35010 Villanova di Camposampiero PD
33. **Hotel "Al Pino Verde"** — Borgoricco
   - slug: `hotel-al-pino-verde-borgoricco`
   - indirizzo: Via Borgo Padova, 114, 35012 Camposampiero PD
34. **Hotel Antille** — Borgoricco
   - slug: `hotel-antille-borgoricco`
   - indirizzo: Via Monte Rosa, 2, 30030 Cazzago VE
35. **Hotel Tabina - Santa Maria di Sala** — Borgoricco
   - slug: `hotel-tabina-santa-maria-di-sala-borgoricco`
   - indirizzo: Via Noalese, 143, 30036 Tabina VE