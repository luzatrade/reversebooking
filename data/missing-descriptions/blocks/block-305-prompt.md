# Blocco 305/500 — 35 strutture senza descrizione IT

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

1. **HOTEL VILLA MARY** — Borgoricco
   - slug: `hotel-villa-mary-borgoricco`
   - indirizzo: Via Luxore, 1E, 30036 Santa Maria di Sala VE
2. **La Rotonda Relais** — Borgoricco
   - slug: `la-rotonda-relais-borgoricco`
   - indirizzo: Via Roma, 37, 31050 Badoere TV
3. **Locanda & Ristorante Al Gallo Nero** — Borgoricco
   - slug: `locanda-ristorante-al-gallo-nero-borgoricco`
   - indirizzo: Via Desman, 162, 35010 Borgoricco PD
4. **LOCANDA PATOEA ALLOGGI** — Borgoricco
   - slug: `locanda-patoea-alloggi-borgoricco`
   - indirizzo: Via Desman, 300/A, 35010 Borgoricco PD
5. **Park Hotel Villa Giustinian** — Borgoricco
   - slug: `park-hotel-villa-giustinian-borgoricco`
   - indirizzo: Via Miranese, 85, 30035 Mirano VE
6. **Ristorante Locanda Gallo** — Borgoricco
   - slug: `ristorante-locanda-gallo-borgoricco`
   - indirizzo: V. Cazzaghetto, 44, 30031 Dolo VE
7. **Tenuta Le Risare** — Borgoricco
   - slug: `tenuta-le-risare-borgoricco`
   - indirizzo: Via Stradone, 2, 35010 Campo San Martino PD
8. **Villa Myosotis** — Borgoricco
   - slug: `villa-myosotis-borgoricco`
   - indirizzo: V. Cavin di Sala, 78, 30035 Mirano VE
9. **Villa Paradiso Borgoricco** — Borgoricco
   - slug: `villa-paradiso-borgoricco-borgoricco`
   - indirizzo: V. Menini, 31, 35010 San Michele delle Badesse PD
10. **Affittacamere Da Angela** — Borgorose
   - slug: `affittacamere-da-angela-borgorose`
   - indirizzo: Via Piedimonte, 3, 02021 Borgorose RI
11. **Albergo La Duchessa** — Borgorose
   - slug: `albergo-la-duchessa-borgorose`
   - indirizzo: V. Marsicana, 4/6, 02021 Corvaro RI
12. **Appartamenti Il Capomandro** — Borgorose
   - slug: `appartamenti-il-capomandro-borgorose`
   - indirizzo: Piazza Antonio e Filippo Placidi, 02021, 02021 Sant'Anatolia RI
13. **B&B Leofreni Natura** — Borgorose
   - slug: `b-b-leofreni-natura-borgorose`
   - indirizzo: 02024 Leofreni RI
14. **B&B mo si** — Borgorose
   - slug: `b-b-mo-si-borgorose`
   - indirizzo: Via Ottavio Liberatore, 13, 67050 Massa D'Albe AQ
15. **B&B Sole e Luna** — Borgorose
   - slug: `b-b-sole-e-luna-borgorose`
   - indirizzo: Via Aranoria, 15, 67068 Scurcola Marsicana AQ
16. **B&B VALLE GIO'** — Borgorose
   - slug: `b-b-valle-gio-borgorose`
   - indirizzo: Via Fonte Vecchia, 32, 67062 Magliano de' Marsi AQ
17. **Il Casale della Biodiversità** — Borgorose
   - slug: `il-casale-della-biodiversita-borgorose`
   - indirizzo: S. P. Dorsale Palentina km 7+450, 67067 Scanzano AQ
18. **M'ami B&B** — Borgorose
   - slug: `m-ami-b-b-borgorose`
   - indirizzo: Zona Industriale snc, 67062 Magliano de' Marsi AQ
19. **Relais Magione Papale** — Borgorose
   - slug: `relais-magione-papale-borgorose`
   - indirizzo: Via Porta Napoli, 67/1, 67100 L'Aquila AQ
20. **Albergo Armida Di Scaroni Pietro** — Borgosatollo
   - slug: `albergo-armida-di-scaroni-pietro-borgosatollo`
   - indirizzo: V. Macina, 42, 25014 Macina BS
21. **Albergo Livio** — Borgosatollo
   - slug: `albergo-livio-borgosatollo`
   - indirizzo: V. delle Bettole, 68, 25134 Brescia BS
22. **Hotel Ai Ronchi - Ristorante e Parcheggio** — Borgosatollo
   - slug: `hotel-ai-ronchi-ristorante-e-parcheggio-borgosatollo`
   - indirizzo: Viale della Bornata, 22, 25123 Brescia BS
23. **Albergo Ristorante Sacro Monte** — Borgosesia
   - slug: `albergo-ristorante-sacro-monte-borgosesia`
   - indirizzo: Località, Via Sacro Monte, 14, 13019 Varallo VC
24. **Appartamenti del Borgo** — Borgosesia
   - slug: `appartamenti-del-borgo-borgosesia`
   - indirizzo: Via Nicolao Sottile, 31, 13011 Borgosesia VC
25. **B&b Lo scoiattolo e la noce** — Borgosesia
   - slug: `b-b-lo-scoiattolo-e-la-noce-borgosesia`
   - indirizzo: Corso G. Matteotti, 329, 13037 Serravalle Sesia VC
26. **Bilocale Vecchio Borgo** — Borgosesia
   - slug: `bilocale-vecchio-borgo-borgosesia`
   - indirizzo: Via XX Settembre, 42, 13011 Borgosesia VC
27. **Guest House Maiori** — Borgosesia
   - slug: `guest-house-maiori-borgosesia`
   - indirizzo: Corso G. Matteotti, 328, 13037 Serravalle Sesia VC
28. **Relax** — Borgosesia
   - slug: `relax-borgosesia`
   - indirizzo: Frazione Caggi 22, 13011 Borgosesia VC
29. **Villa Agnona** — Borgosesia
   - slug: `villa-agnona-borgosesia`
   - indirizzo: Via Casazza, 20, 13011 Borgosesia VC
30. **Agriturismo - Il canto delle Rane** — Bormida
   - slug: `agriturismo-il-canto-delle-rane-bormida`
   - indirizzo: Via Calice, 17, 17024 Finale Ligure SV
31. **Bed & Breakfast La Casa di Magalì** — Bormida
   - slug: `bed-breakfast-la-casa-di-magali-bormida`
   - indirizzo: Località Chiesa, 45, 17045 Bormida SV
32. **Bed & Breakfast Lumagin** — Bormida
   - slug: `bed-breakfast-lumagin-bormida`
   - indirizzo: Via Benne, 59, 17020 Feglino SV
33. **Casa di Anna** — Bormida
   - slug: `casa-di-anna-bormida`
   - indirizzo: Via Madonna della Neve, 78, 17020 Tovo San Giacomo SV
34. **CasaCirio agriturismo** — Bormida
   - slug: `casacirio-agriturismo-bormida`
   - indirizzo: Via Bolla, 4, 17020 Vene SV
35. **I Lamoi** — Bormida
   - slug: `i-lamoi-bormida`
   - indirizzo: Via della Pineta, 17024 Finale Ligure SV