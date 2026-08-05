# Blocco 320/500 — 35 strutture senza descrizione IT

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

1. **Sweet Hotel** — Breganze
   - slug: `sweet-hotel-breganze`
   - indirizzo: P.zza Libertà, 11, 36060 Longa VI
2. **Villa San Biagio** — Breganze
   - slug: `villa-san-biagio-breganze`
   - indirizzo: Via S. Biagio, 29, 36064 Colceresa VI
3. **Ai 4 soli** — Bregnano
   - slug: `ai-4-soli-bregnano`
   - indirizzo: Via P. Togliatti, 1, 22072 Cermenate CO
4. **B&B Les Fleurettes** — Bregnano
   - slug: `b-b-les-fleurettes-bregnano`
   - indirizzo: Vicolo Privato Appennini, 22074 Lomazzo CO
5. **Foresteria La Torretta** — Bregnano
   - slug: `foresteria-la-torretta-bregnano`
   - indirizzo: Piazza Concordia, 2, 22073 Fino Mornasco CO
6. **Hotel Gardenia FIERA** — Bregnano
   - slug: `hotel-gardenia-fiera-bregnano`
   - indirizzo: Via Maestri Comacini, 22, 22072 Cermenate CO
7. **Just Hotel Saronno** — Bregnano
   - slug: `just-hotel-saronno-bregnano`
   - indirizzo: Via Strà Madonna, 15, 21047 Saronno VA
8. **La Macina Agriturismo** — Bregnano
   - slug: `la-macina-agriturismo-bregnano`
   - indirizzo: Via Beato Michele Carcano, 1, 22070 Bregnano CO
9. **B&B Casa Lulù** — Brembate
   - slug: `b-b-casa-lulu-brembate`
   - indirizzo: Via Pista Crespi, 44, 24041 Brembate BG
10. **B&B Lolly** — Brembate
   - slug: `b-b-lolly-brembate`
   - indirizzo: VIA Antonio Locatelli, 64, 24041 Brembate BG
11. **B&B Oasi Brembate** — Brembate
   - slug: `b-b-oasi-brembate-brembate`
   - indirizzo: Via Grignano, 31, 24041 Brembate BG
12. **B&B Pontevecchio** — Brembate
   - slug: `b-b-pontevecchio-brembate`
   - indirizzo: Via San Vittore, 18, 24041 Brembate BG
13. **Golden Teal & Silver Birch apartments** — Brembate
   - slug: `golden-teal-silver-birch-apartments-brembate`
   - indirizzo: Via Palma Il Vecchio, 4, 24128 Bergamo BG
14. **Hotel Tech** — Brembate
   - slug: `hotel-tech-brembate`
   - indirizzo: Via Vittorio Veneto, 31, 24041 Brembate BG
15. **B&B Il Borghetto** — Brembate di Sopra
   - slug: `b-b-il-borghetto-brembate-di-sopra`
   - indirizzo: Via Monte dei Gobbi, 10, 24030 Mozzo BG
16. **Green Stay - Foresteria Bergamo** — Brembate di Sopra
   - slug: `green-stay-foresteria-bergamo-brembate-di-sopra`
   - indirizzo: Via Pietro Mascagni, 81, 24129 Bergamo BG
17. **Le Lanterne BnB Jacuzzi Suite** — Brembate di Sopra
   - slug: `le-lanterne-bnb-jacuzzi-suite-brembate-di-sopra`
   - indirizzo: Via Cà Frerì, 5, 24018 Villa d'Almè BG
18. **Locanda Scotti** — Brembate di Sopra
   - slug: `locanda-scotti-brembate-di-sopra`
   - indirizzo: Via Bergamo, 12, 24030 Paladina BG
19. **Grande Albergo Roma** — Brembio
   - slug: `grande-albergo-roma-brembio`
   - indirizzo: Via Cittadella, 14, 29121 Piacenza PC
20. **B&B Castello Sannazzaro - Per soggiorni romantici, vicino Casale Monferrato** — Breme
   - slug: `b-b-castello-sannazzaro-per-soggiorni-romantici-breme`
   - indirizzo: Via Roma, 5, 15036 Giarole AL
21. **B&B Mezzaluna - Ca' d'la Tonilla** — Breme
   - slug: `b-b-mezzaluna-ca-d-la-tonilla-breme`
   - indirizzo: Via Mezzaluna, 12, 27020 Breme PV
22. **Bed & Breakfast L'Infernot** — Breme
   - slug: `bed-breakfast-l-infernot-breme`
   - indirizzo: Strada Madonna delle Grazie, 4, 15030 Rosignano Monferrato AL
23. **Il Cortile di Greta** — Breme
   - slug: `il-cortile-di-greta-breme`
   - indirizzo: Frazione Trisogli 5 Cuccaro Monferrato AL IT, e, 15037 Lu e Cuccaro Monferrato AL
24. **Locanda Trento** — Breme
   - slug: `locanda-trento-breme`
   - indirizzo: Via Trento, 12, 27036 Mortara PV
25. **B&B “La Corte dei Gelsi”** — Brendola
   - slug: `b-b-la-corte-dei-gelsi-brendola`
   - indirizzo: via Postumia, 27, 36040 Brendola VI
26. **B&B La Quiete** — Brendola
   - slug: `b-b-la-quiete-brendola`
   - indirizzo: Piazza del Popolo, 3, 36040 Brendola VI
27. **Bed and Breakfast a Vicenza El Pavejo** — Brendola
   - slug: `bed-and-breakfast-a-vicenza-el-pavejo-brendola`
   - indirizzo: Via San Vito, n. 66, 36040 Brendola VI
28. **HOTEL VERDI VICENZA** — Brendola
   - slug: `hotel-verdi-vicenza-brendola`
   - indirizzo: Via Lanza, 8, 36100 Vicenza VI
29. **B&B La Casa di Agnes** — Brenna
   - slug: `b-b-la-casa-di-agnes-brenna`
   - indirizzo: Via Ramarino, 9, 22066 Mariano Comense CO
30. **B&B La finestra sul giardino** — Brenna
   - slug: `b-b-la-finestra-sul-giardino-brenna`
   - indirizzo: V.le Ospedale, 11, 22063 Cantù CO
31. **Bed & Breakfast Brenna** — Brenna
   - slug: `bed-breakfast-brenna-brenna`
   - indirizzo: Via Cardano, 77, 22100 Como CO
32. **Casa Maria** — Brenna
   - slug: `casa-maria-brenna`
   - indirizzo: Via S. Francesco D'Assisi, 26, 22063 Cantù CO
33. **Villa gianna** — Brenna
   - slug: `villa-gianna-brenna`
   - indirizzo: Via Privata Garzonio, 1, 22044 Inverigo CO
34. **Aktivhotel Panorama Hotel** — Brennero/Brenner
   - slug: `aktivhotel-panorama-hotel-brennero-brenner`
   - indirizzo: Via Sant'Antonio, 176, 39041 Brennero BZ
35. **Albergo Moarwirt** — Brennero/Brenner
   - slug: `albergo-moarwirt-brennero-brenner`
   - indirizzo: Via Roma, 11, 39041 Colle Isarco BZ