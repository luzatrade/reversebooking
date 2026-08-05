# Blocco 361/500 — 35 strutture senza descrizione IT

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

1. **B&B Il Siriaco** — Calatabiano
   - slug: `b-b-il-siriaco-calatabiano`
   - indirizzo: Via Crujllas, 95011 Calatabiano CT
2. **B&B Villa Magnolia Taormina** — Calatabiano
   - slug: `b-b-villa-magnolia-taormina-calatabiano`
   - indirizzo: V.le dei Giardini, 15, 98039 Taormina ME
3. **BellaLimone** — Calatabiano
   - slug: `bellalimone-calatabiano`
   - indirizzo: Strada pegno quaderaro 26, 95011 Calatabiano CT
4. **Castello San Marco charming resort & spa** — Calatabiano
   - slug: `castello-san-marco-charming-resort-spa-calatabiano`
   - indirizzo: Via S. Marco, 40, 95011 Calatabiano CT
5. **I TRE CUORI** — Calatabiano
   - slug: `i-tre-cuori-calatabiano`
   - indirizzo: Contrada Feo Coniglio, 98039 Trappitello ME
6. **Il Maniero** — Calatabiano
   - slug: `il-maniero-calatabiano`
   - indirizzo: Piazza di Gesù e Maria, 2, 95011 Calatabiano CT
7. **La Terra Dei Sogni Country Hotel** — Calatabiano
   - slug: `la-terra-dei-sogni-country-hotel-calatabiano`
   - indirizzo: Via Catania Messina, 14, 95013 Fiumefreddo di Sicilia CT
8. **Laboratorio Gourmet presso Agriturismo Terrenia** — Calatabiano
   - slug: `laboratorio-gourmet-presso-agriturismo-terrenia-calatabiano`
   - indirizzo: Via Santa Filomena, 28/30, 98039 Taormina ME
9. **Marty Luxury B&B** — Calatabiano
   - slug: `marty-luxury-b-b-calatabiano`
   - indirizzo: Via Caduti di Nassiria, 23, 95011 Calatabiano CT
10. **Minissale Farmhouse** — Calatabiano
   - slug: `minissale-farmhouse-calatabiano`
   - indirizzo: Strada Pegno Quaderaro SN, 95011 Calatabiano CT
11. **PARADISE SICILY ROOMS LICENZA:IT087010C25WIUB6FL** — Calatabiano
   - slug: `paradise-sicily-rooms-licenza-it087010c25wiub6fl-calatabiano`
   - indirizzo: Via S. Marco, 15, 95011 Calatabiano CT
12. **Serra San Biagio** — Calatabiano
   - slug: `serra-san-biagio-calatabiano`
   - indirizzo: Via Angelo d'Arrigo, 13, 95011 Calatabiano CT
13. **Stella & Luna** — Calatabiano
   - slug: `stella-luna-calatabiano`
   - indirizzo: Via Garibaldi, 136, 95011 Calatabiano CT
14. **Villa delle Vacanze** — Calatabiano
   - slug: `villa-delle-vacanze-calatabiano`
   - indirizzo: Via Salvatore Calandruccio, 2, 95013 Fiumefreddo Sicilia CT
15. **villa liliya** — Calatabiano
   - slug: `villa-liliya-calatabiano`
   - indirizzo: Via Ponte Boria, 19/21, 95013 Fiumefreddo Sicilia CT
16. **Agriturismo L' Olivo** — Calatafimi-Segesta
   - slug: `agriturismo-l-olivo-calatafimi-segesta`
   - indirizzo: Contrada Piraino, 91013 Calatafimi-Segesta TP
17. **Angimbè Relais** — Calatafimi-Segesta
   - slug: `angimbe-relais-calatafimi-segesta`
   - indirizzo: S.s. 113 Km 338, 4, 91013 Calatafimi TP
18. **Baglio Fastuchera** — Calatafimi-Segesta
   - slug: `baglio-fastuchera-calatafimi-segesta`
   - indirizzo: 91011 Alcamo TP, Italia
19. **Baglio Segesta** — Calatafimi-Segesta
   - slug: `baglio-segesta-calatafimi-segesta`
   - indirizzo: Contrada Segesta, 91013 Segesta, Calatafimi Segesta TP
20. **Hotel MillePini** — Calatafimi-Segesta
   - slug: `hotel-millepini-calatafimi-segesta`
   - indirizzo: Belvedere Francesco Vivona, 4, 91013 Calatafimi TP
21. **La Corte del Sole Segesta** — Calatafimi-Segesta
   - slug: `la-corte-del-sole-segesta-calatafimi-segesta`
   - indirizzo: SP57, 91014 Castellammare del Golfo TP
22. **La Suite di Segesta** — Calatafimi-Segesta
   - slug: `la-suite-di-segesta-calatafimi-segesta`
   - indirizzo: Contrada Segesta Barbaro snc Strada Provinciale Segesta Tempio, gps: nord.37.943000 est.12.851600, 91013 Calatafimi TP
23. **Le Palme b&b** — Calatafimi-Segesta
   - slug: `le-palme-b-b-calatafimi-segesta`
   - indirizzo: Contrada Sinagia, 1312, 91018 Salemi TP
24. **Locanda Scirocco** — Calatafimi-Segesta
   - slug: `locanda-scirocco-calatafimi-segesta`
   - indirizzo: Corso Giuseppe Garibaldi, 117, 91014 Castellammare del Golfo TP
25. **Luce del golfo** — Calatafimi-Segesta
   - slug: `luce-del-golfo-calatafimi-segesta`
   - indirizzo: Via Ferrantelli, 8, 91014 Castellammare del Golfo TP
26. **Tenute Margana** — Calatafimi-Segesta
   - slug: `tenute-margana-calatafimi-segesta`
   - indirizzo: Contrada Margana, 91013 Calatafimi TP
27. **"in centro"** — Calcata
   - slug: `in-centro-calcata`
   - indirizzo: Corso Vittorio Emanuele, 62, 00063 Campagnano di Roma RM
28. **Agrimar** — Calcata
   - slug: `agrimar-calcata`
   - indirizzo: Località Monte Cerasa, 2, 00068 Rignano Flaminio RM
29. **Agriturismo "I Tre Tigli" - Ristorante - Pizzeria - Eventi - Camere** — Calcata
   - slug: `agriturismo-i-tre-tigli-ristorante-pizzeria-even-calcata`
   - indirizzo: Località Monte Cerasa, 00068 Rignano Flaminio RM
30. **Agriturismo Cavalieri** — Calcata
   - slug: `agriturismo-cavalieri-calcata`
   - indirizzo: Via della Gabelletta, 1, 01033 Civita Castellana VT
31. **Agriturismo Il cielo in terra** — Calcata
   - slug: `agriturismo-il-cielo-in-terra-calcata`
   - indirizzo: Località Monte Fontana, 1, 00060 Sant'Oreste RM
32. **AGRITURISMO LA ROSA DEI VENTI** — Calcata
   - slug: `agriturismo-la-rosa-dei-venti-calcata`
   - indirizzo: Meterano, 13, 00060 Mazzano Romano RM
33. **Agriturismo Le Forre Del Treja "CASALE"** — Calcata
   - slug: `agriturismo-le-forre-del-treja-casale-calcata`
   - indirizzo: Via Castel Sant'Elia, 5, Via Castel Sant'Elia, 7, 01033 Civita Castellana VT
34. **B&b Mariposa** — Calcata
   - slug: `b-b-mariposa-calcata`
   - indirizzo: Via dei Tigli, 9, 01030 Monterosi VT
35. **B&B Mimì e Cocò** — Calcata
   - slug: `b-b-mimi-e-coco-calcata`
   - indirizzo: Via Antonio Gramsci, 15, 01033 Civita Castellana VT