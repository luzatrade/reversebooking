# Blocco 81/500 — 35 strutture senza descrizione IT

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

1. **Albergo Bortoluzzi** — Alpago
   - slug: `albergo-bortoluzzi-alpago`
   - indirizzo: Via Giacomo Matteotti, 1, 32016 Farra D'Alpago BL
2. **Albergo Cappello** — Alpago
   - slug: `albergo-cappello-alpago`
   - indirizzo: Via Sebastiano Ricci, 8, 32100 Belluno BL
3. **Albergo Casa Sperti** — Alpago
   - slug: `albergo-casa-sperti-alpago`
   - indirizzo: Frazione, Via dei Spert, 1, 32016 Farra d´Alpago, BL
4. **Albergo Delle Alpi** — Alpago
   - slug: `albergo-delle-alpi-alpago`
   - indirizzo: Via Jacopo Tasso, 13, 32100 Belluno BL
5. **Albergo Ristorante Cima I Pra'** — Alpago
   - slug: `albergo-ristorante-cima-i-pra-alpago`
   - indirizzo: Via Cima I Prà, 48, 32014 Ponte nellʼAlpi BL
6. **Alla Posta Guest House Locazione Turistica** — Alpago
   - slug: `alla-posta-guest-house-locazione-turistica-alpago`
   - indirizzo: Via S. Antonio, 9, 32016 Garna BL
7. **Casa Alpago** — Alpago
   - slug: `casa-alpago-alpago`
   - indirizzo: Via Cansiglio, Via Giuseppe Garibaldi, 72b, 32016 Alpago BL
8. **Dolada Ristorante & Boutique hotel** — Alpago
   - slug: `dolada-ristorante-boutique-hotel-alpago`
   - indirizzo: Via Dolada, 21, 32016 Plois BL
9. **Hotel 1301 Inn** — Alpago
   - slug: `hotel-1301-inn-alpago`
   - indirizzo: Via Barcis, 5, 33081 Aviano PN
10. **Hotel Bella Italia Piancavallo** — Alpago
   - slug: `hotel-bella-italia-piancavallo-alpago`
   - indirizzo: Via Barcis, 24, 33081 Aviano PN
11. **Hotel Capri** — Alpago
   - slug: `hotel-capri-alpago`
   - indirizzo: Rione Santa Caterina, 51, 32014 Ponte nelle Alpi BL
12. **Hotel da Benito** — Alpago
   - slug: `hotel-da-benito-alpago`
   - indirizzo: Frazione Pian di Vedoia, 7, 32014 Ponte nelle Alpi BL
13. **Hotel Dante** — Alpago
   - slug: `hotel-dante-alpago`
   - indirizzo: Via Lizzona, 32014 Lizzona BL
14. **Hotel Europa Belluno** — Alpago
   - slug: `hotel-europa-belluno-alpago`
   - indirizzo: Via Vittorio Veneto, 158/o, 32100 Belluno BL
15. **Sport Hotel** — Alpago
   - slug: `sport-hotel-alpago`
   - indirizzo: Piazzale della Puppa, 5, 33081 Piancavallo PN
16. **Suite Hotel Astor** — Alpago
   - slug: `suite-hotel-astor-alpago`
   - indirizzo: P.za, dei Martiri, 26, 32100 Belluno BL
17. **Albergo Ristorante Bergagna** — Alpette
   - slug: `albergo-ristorante-bergagna-alpette`
   - indirizzo: V. Guglielmo Marconi, 19, 10085 Pont Canavese TO
18. **B&B Il riposo del guerriero.** — Alpette
   - slug: `b-b-il-riposo-del-guerriero-alpette`
   - indirizzo: Frazione Ritornato, 259, 10070 Corio TO
19. **B&B Valle Orco** — Alpette
   - slug: `b-b-valle-orco-alpette`
   - indirizzo: Località Apparè 48, 10080 Sparone TO
20. **Hotel Italia - Coassolo** — Alpette
   - slug: `hotel-italia-coassolo-alpette`
   - indirizzo: Via Capoluogo, 188, 10070 Coassolo Torinese TO
21. **Hôtellerie Valle Sacra B&B Centro benessere e spa** — Alpette
   - slug: `hotellerie-valle-sacra-b-b-centro-benessere-e-sp-alpette`
   - indirizzo: Via Prato Domenica, 3, 10080 Cintano TO
22. **Il Pettirosso** — Alpette
   - slug: `il-pettirosso-alpette`
   - indirizzo: Str. Filia, 71, 10081 Castellamonte TO
23. **Stella d'Italia camere e bar caffetteria** — Alpette
   - slug: `stella-d-italia-camere-e-bar-caffetteria-alpette`
   - indirizzo: Via Locana, 35, 10080 Sparone TO
24. **B&B Casa V-Ale** — Alpignano
   - slug: `b-b-casa-v-ale-alpignano`
   - indirizzo: Piazza IV Novembre, 7, 10093 Collegno TO
25. **Blu Hotel, Sure Hotel Collection by Best Western** — Alpignano
   - slug: `blu-hotel-sure-hotel-collection-by-best-western-alpignano`
   - indirizzo: Via Torino, 154, 10093 Collegno TO
26. **Casa Delle Ortensie** — Alpignano
   - slug: `casa-delle-ortensie-alpignano`
   - indirizzo: Via Dieci Martiri del Maiolo, 2, 10091 Alpignano TO
27. **Diamante Motel Hotel Torino Collegno** — Alpignano
   - slug: `diamante-motel-hotel-torino-collegno-alpignano`
   - indirizzo: Via Nazioni Unite, 11, 10093 Collegno TO
28. **Hotel Gallia - Centro Congressi** — Alpignano
   - slug: `hotel-gallia-centro-congressi-alpignano`
   - indirizzo: Via Torino, 29/A, 10044 Pianezza TO
29. **Hotel Motel Prestige** — Alpignano
   - slug: `hotel-motel-prestige-alpignano`
   - indirizzo: Str. del Portone, 102, 10095 Grugliasco TO
30. **La Finestra sulla Reggia** — Alpignano
   - slug: `la-finestra-sulla-reggia-alpignano`
   - indirizzo: Via Andrea Mensa, Piazza della Repubblica, 37/G, 10078 Venaria Reale TO
31. **Le Fantasie di Tizi** — Alpignano
   - slug: `le-fantasie-di-tizi-alpignano`
   - indirizzo: Via Valdellatorre, 147, 10091 Alpignano TO
32. **Phi Hotel Homy Druento** — Alpignano
   - slug: `phi-hotel-homy-druento-alpignano`
   - indirizzo: Via Manzoni, 42, 10040 Druento TO
33. **Piccolo Hotel Allamano** — Alpignano
   - slug: `piccolo-hotel-allamano-alpignano`
   - indirizzo: Str. del Gerbido, 106, 10095 Grugliasco TO
34. **Vald Hotel** — Alpignano
   - slug: `vald-hotel-alpignano`
   - indirizzo: Via Lanzo, 35, 10040 Val della Torre TO
35. **B&B La Corte del Segrino** — Alserio
   - slug: `b-b-la-corte-del-segrino-alserio`
   - indirizzo: Via Segrino, 7/F, 22035 Canzo CO