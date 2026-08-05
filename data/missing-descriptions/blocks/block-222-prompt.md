# Blocco 222/500 — 35 strutture senza descrizione IT

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

1. **AER HOTEL MALPENSA** — Barengo
   - slug: `aer-hotel-malpensa-barengo`
   - indirizzo: Via Gallarate, 35, 28047 Oleggio NO
2. **B&BMagicHouse Cin IT003106C1TA3BSIY9** — Barengo
   - slug: `b-bmagichouse-cin-it003106c1ta3bsiy9-barengo`
   - indirizzo: Corso Risorgimento, 45, 28100 Novara NO
3. **Bella Italia Palace Hotel** — Barengo
   - slug: `bella-italia-palace-hotel-barengo`
   - indirizzo: LARGO GUIDO DONEGANI 6, Corso Trieste, 54, 28100 Novara NO
4. **Casa Antonelli** — Barengo
   - slug: `casa-antonelli-barengo`
   - indirizzo: Via Novara, 45, 28074 Ghemme NO
5. **Casa Valletta** — Barengo
   - slug: `casa-valletta-barengo`
   - indirizzo: Via Valletta, 2, 28040 Mezzomerico NO
6. **Hotel Camelia** — Barengo
   - slug: `hotel-camelia-barengo`
   - indirizzo: Str. per Novara, 131, 28062 Cameri NO
7. **Hotel Villa delle Rose Malpensa - Novara** — Barengo
   - slug: `hotel-villa-delle-rose-malpensa-novara-barengo`
   - indirizzo: Via Gallarate, 136, 28047 Oleggio NO
8. **Il Corbezzolo** — Baressa
   - slug: `il-corbezzolo-baressa`
   - indirizzo: Via Antonio Gramsci, 2, 09090 Palmas Arborea OR
9. **Airport Inn Preturo** — Barete
   - slug: `airport-inn-preturo-barete`
   - indirizzo: Via Carlo d'Angiò, 23, 67100 L'Aquila AQ
10. **B&B L'Aquila del Parco** — Barete
   - slug: `b-b-l-aquila-del-parco-barete`
   - indirizzo: Via Colle Rosso, 26, 67017 Pizzoli AQ
11. **B&B La Fonte** — Barete
   - slug: `b-b-la-fonte-barete`
   - indirizzo: Via del Fiume, 22, 67100 L'Aquila AQ
12. **Bed & Breakfast Grandangolo** — Barete
   - slug: `bed-breakfast-grandangolo-barete`
   - indirizzo: SS17, 45, 67100 Sassa Scalo AQ
13. **Hotel Aquila noleggio e-bike** — Barete
   - slug: `hotel-aquila-noleggio-e-bike-barete`
   - indirizzo: V. Roma, 208, 67019 Scoppito AQ
14. **Hotel Canadian Ristorante Bar** — Barete
   - slug: `hotel-canadian-ristorante-bar-barete`
   - indirizzo: SS17, 67100 Località Casermette, L'Aquila AQ
15. **Hotel Il Portichetto** — Barete
   - slug: `hotel-il-portichetto-barete`
   - indirizzo: s.s. 80, km 5, 800, 67100 L'Aquila AQ
16. **Hotel La Compagnia Del Viaggiatore** — Barete
   - slug: `hotel-la-compagnia-del-viaggiatore-barete`
   - indirizzo: SS80, 159, 67100 L'Aquila AQ
17. **Hotel Ristorante Pizzeria Il Giardino** — Barete
   - slug: `hotel-ristorante-pizzeria-il-giardino-barete`
   - indirizzo: Via Sallustio, 12, 67012 Cagnano Amiterno AQ
18. **Il Fienile** — Barete
   - slug: `il-fienile-barete`
   - indirizzo: Via Picente, 7, 67010 Barete AQ
19. **il giardinaccio** — Barete
   - slug: `il-giardinaccio-barete`
   - indirizzo: Str. Vicinale dell'Aterno, 67100 L'Aquila AQ
20. **Il Roseto** — Barete
   - slug: `il-roseto-barete`
   - indirizzo: Via Delle Aie, località, Via delle Aie, Piazza Cansatessa, 17, 67100 L'Aquila AQ
21. **La Dimora di Stefy - Bed & Breakfast** — Barete
   - slug: `la-dimora-di-stefy-bed-breakfast-barete`
   - indirizzo: Via Francesco Paolo Tosti, 10B, 67100 L'Aquila AQ
22. **Le Farine Del Maestro - Mulino di Riolitto e Cavalli F.** — Barete
   - slug: `le-farine-del-maestro-mulino-di-riolitto-e-caval-barete`
   - indirizzo: STRADA PROVINCIALE 29, N.1, 67010 Barete AQ
23. **Le stanze di Bacco** — Barete
   - slug: `le-stanze-di-bacco-barete`
   - indirizzo: Via S. Giovanni, 53, 67012 Cagnano Amiterno AQ
24. **Un Passo Dal Cielo** — Barete
   - slug: `un-passo-dal-cielo-barete`
   - indirizzo: Via dell'Aquila, 7, 67100 Collebrincioni AQ
25. **Acchiappasogni Art Boutique Hotel** — Barga
   - slug: `acchiappasogni-art-boutique-hotel-barga`
   - indirizzo: Via di Mezzo, 21, 55051 Barga LU
26. **Agriturismo I Cedri** — Barga
   - slug: `agriturismo-i-cedri-barga`
   - indirizzo: Localita' alla Villa, 4, 55051 Barga LU
27. **Agriturismo Puro** — Barga
   - slug: `agriturismo-puro-barga`
   - indirizzo: Località Pozza, 1, 55051 Barga LU
28. **Albergo Alpino** — Barga
   - slug: `albergo-alpino-barga`
   - indirizzo: Viale Giovanni Pascoli, 41, 55051 Barga LU
29. **Albergo Gorizia - Fornaci di Barga** — Barga
   - slug: `albergo-gorizia-fornaci-di-barga-barga`
   - indirizzo: Viale Cesare Battisti, 16, 55051 Fornaci di Barga LU
30. **Friendly Hotel Affittacamere - Barga** — Barga
   - slug: `friendly-hotel-affittacamere-barga-barga`
   - indirizzo: Via di Mezzo, 17, 55051 Barga LU
31. **Hotel Ristorante La Lanterna** — Barga
   - slug: `hotel-ristorante-la-lanterna-barga`
   - indirizzo: Località alle Monache, 300, 55032 Castelnuovo di Garfagnana LU
32. **Hotel The Marquee** — Barga
   - slug: `hotel-the-marquee-barga`
   - indirizzo: Via Provinciale, 14, 55032 Castelnuovo di Garfagnana LU
33. **In Castello** — Barga
   - slug: `in-castello-barga`
   - indirizzo: Via Castello, 9, 55027 Gallicano LU
34. **La Fatina Lodge** — Barga
   - slug: `la-fatina-lodge-barga`
   - indirizzo: Località Gragnana, 6, 55051 Barga LU
35. **La Limonaia di Casagrande** — Barga
   - slug: `la-limonaia-di-casagrande-barga`
   - indirizzo: Località S. Maria, 14, 55051 Barga LU