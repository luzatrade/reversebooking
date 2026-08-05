# Blocco 281/500 — 35 strutture senza descrizione IT

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

1. **Rifugio “La Baita Alpe Seccio”** — Boccioleto
   - slug: `rifugio-la-baita-alpe-seccio-boccioleto`
   - indirizzo: Alpe Seccio, 13022 Boccioleto VC
2. **Albergo Ristorante Moleta** — Bocenago
   - slug: `albergo-ristorante-moleta-bocenago`
   - indirizzo: Via Nazionale, 28, 38088 Spiazzo TN
3. **Aparthotel Strembo** — Bocenago
   - slug: `aparthotel-strembo-bocenago`
   - indirizzo: Via Fantoma, 10, 38080 Strembo TN
4. **B&B Ai Larici** — Bocenago
   - slug: `b-b-ai-larici-bocenago`
   - indirizzo: Via Zeledria, 45, 38080 Bocenago TN
5. **B&B Casa Nostra** — Bocenago
   - slug: `b-b-casa-nostra-bocenago`
   - indirizzo: Via Regina Elena, 67/A, 38080 Caderzone Terme TN
6. **B&B il Ciliegio di Maura** — Bocenago
   - slug: `b-b-il-ciliegio-di-maura-bocenago`
   - indirizzo: Via Massimeno, 22, 38086 Massimeno TN
7. **B&B Piazzi.** — Bocenago
   - slug: `b-b-piazzi-bocenago`
   - indirizzo: Via Bassett, 26, 38080 Caderzone Terme TN
8. **B&B Rendena Chalet** — Bocenago
   - slug: `b-b-rendena-chalet-bocenago`
   - indirizzo: Via Fantoma, 17, 38080 Strembo TN
9. **BEPY - Hotel garni** — Bocenago
   - slug: `bepy-hotel-garni-bocenago`
   - indirizzo: Via Suta Li Casi 2, Viale Dolomiti, 45, 38086 Giustino TN
10. **Garnì Costa Verde S.r.l** — Bocenago
   - slug: `garni-costa-verde-s-r-l-bocenago`
   - indirizzo: Loc. Costa, 38080 Bocenago TN
11. **Hotel Ferrari Pinzolo** — Bocenago
   - slug: `hotel-ferrari-pinzolo-bocenago`
   - indirizzo: Via Giacomo Matteotti, 42, 38086 Pinzolo TN
12. **Hotel Garni' La Palu'** — Bocenago
   - slug: `hotel-garni-la-palu-bocenago`
   - indirizzo: Via Sorano, 2, 38086 Pinzolo TN
13. **Hotel Mezzosoldo** — Bocenago
   - slug: `hotel-mezzosoldo-bocenago`
   - indirizzo: Via Nazionale, Frazione Mortaso, 196, 38088 Spiazzo TN
14. **Hotel Miramonti** — Bocenago
   - slug: `hotel-miramonti-bocenago`
   - indirizzo: Viale Dolomiti, 73, 38086 Giustino TN
15. **Hotel Regina Elena** — Bocenago
   - slug: `hotel-regina-elena-bocenago`
   - indirizzo: Via Regina Elena, 35, 38080 Caderzone Terme TN
16. **Hotel Residence La Locanda** — Bocenago
   - slug: `hotel-residence-la-locanda-bocenago`
   - indirizzo: Viale Dolomiti, 20, 38086 Giustino TN
17. **Hotel Rio** — Bocenago
   - slug: `hotel-rio-bocenago`
   - indirizzo: Via A. Diaz, 34, 38080 Caderzone Terme TN
18. **La CRI Bed & Breakfast** — Bocenago
   - slug: `la-cri-bed-breakfast-bocenago`
   - indirizzo: Via Suta Casi, 11, 38086 Giustino TN
19. **Villa Golf** — Bocenago
   - slug: `villa-golf-bocenago`
   - indirizzo: Via Mantova, 25, 38080 Caderzone TN
20. **Villa Ilaria** — Bocenago
   - slug: `villa-ilaria-bocenago`
   - indirizzo: Via S. Giuliano, 24, 38080 Caderzone TN
21. **A Casa di Luca** — Boffalora d'Adda
   - slug: `a-casa-di-luca-boffalora-d-adda`
   - indirizzo: Via Guglielmo Marconi, 23, 20060 San Martino Olearo MI
22. **B&B L’almanacco** — Boffalora d'Adda
   - slug: `b-b-l-almanacco-boffalora-d-adda`
   - indirizzo: Via Salvador Allende, 5/B, 26815 Motta Vigana LO
23. **B&B Lodi Centro** — Boffalora d'Adda
   - slug: `b-b-lodi-centro-boffalora-d-adda`
   - indirizzo: Via Marsala, 49/A, 26900 Lodi LO
24. **La Fraccina** — Boffalora d'Adda
   - slug: `la-fraccina-boffalora-d-adda`
   - indirizzo: Contrada Fraccina, 26016 Spino d'Adda CR
25. **La Mansarda B&B** — Boffalora d'Adda
   - slug: `la-mansarda-b-b-boffalora-d-adda`
   - indirizzo: Via Sant'Antonio, 5, 20066 Melzo MI
26. **B&B da Mary** — Boffalora sopra Ticino
   - slug: `b-b-da-mary-boffalora-sopra-ticino`
   - indirizzo: Via Camillo Benso Cavour, 17, 20013 Magenta MI
27. **B&B La Corte Sul Naviglio** — Boffalora sopra Ticino
   - slug: `b-b-la-corte-sul-naviglio-boffalora-sopra-ticino`
   - indirizzo: Via Calderari, 4, 20010 Boffalora sopra Ticino MI
28. **B&B NIK900** — Boffalora sopra Ticino
   - slug: `b-b-nik900-boffalora-sopra-ticino`
   - indirizzo: Via G. Garibaldi, 77, 20010 Boffalora Sopra Ticino MI
29. **Al Piccolo Scoglio - Room & Breakfast** — Bogliasco
   - slug: `al-piccolo-scoglio-room-breakfast-bogliasco`
   - indirizzo: Via Piero Schiaffino, 118, 16032 Camogli GE
30. **Albergo Diana** — Bogliasco
   - slug: `albergo-diana-bogliasco`
   - indirizzo: Salita Inferiore di Santa Tecla, 20A, 16132 Genova GE
31. **Albergo Novecento 1 stella** — Bogliasco
   - slug: `albergo-novecento-1-stella-bogliasco`
   - indirizzo: Via Gropallo, 4/interno 12, 16122 Genova GE
32. **B&B Gaslini & Mare** — Bogliasco
   - slug: `b-b-gaslini-mare-bogliasco`
   - indirizzo: Via Redipuglia, 5, 16147 Genova GE
33. **B&B Villa Shiverty** — Bogliasco
   - slug: `b-b-villa-shiverty-bogliasco`
   - indirizzo: Via XXV Aprile, 19, 16030 Pieve Ligure GE
34. **Bosmi Bed&Language Liguria** — Bogliasco
   - slug: `bosmi-bed-language-liguria-bogliasco`
   - indirizzo: Via B. Cairoli, 44, 16030 Sori GE
35. **Camping Genova Est** — Bogliasco
   - slug: `camping-genova-est-bogliasco`
   - indirizzo: Via Guglielmo Marconi, 16031 Località Cassa, Bogliasco GE