# Blocco 151/500 — 35 strutture senza descrizione IT

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

1. **Centro Di Spiritualita' Maria Candida** — Armeno
   - slug: `centro-di-spiritualita-maria-candida-armeno`
   - indirizzo: Viale Cadorna, 19, 28011 Armeno NO
2. **Hotel Cortese** — Armeno
   - slug: `hotel-cortese-armeno`
   - indirizzo: Via II Riviere, 24c, 28011 Armeno NO
3. **Hotel Madonna di Luciago** — Armeno
   - slug: `hotel-madonna-di-luciago-armeno`
   - indirizzo: Via Mottarone, 62, 28011 Armeno NO
4. **Hotel Ristorante la Bussola** — Armeno
   - slug: `hotel-ristorante-la-bussola-armeno`
   - indirizzo: Via Panoramica, 24, 28016 Orta San Giulio NO
5. **Hotel Ristorante Leon d'Oro** — Armeno
   - slug: `hotel-ristorante-leon-d-oro-armeno`
   - indirizzo: Piazza Mario Motta, 42, 28016 Orta San Giulio NO
6. **Hotel Santa Caterina** — Armeno
   - slug: `hotel-santa-caterina-armeno`
   - indirizzo: Via Marconi, 10, 28016 Orta San Giulio NO
7. **La Sibilla Cusiana Hotel & Residence** — Armeno
   - slug: `la-sibilla-cusiana-hotel-residence-armeno`
   - indirizzo: Via Provinciale, 48, 28028 Pettenasco NO
8. **Le Farfalle di Armeno CIN:IT003006C1PFUA6AR5** — Armeno
   - slug: `le-farfalle-di-armeno-cin-it003006c1pfua6ar5-armeno`
   - indirizzo: Via Farfareno, 14, 28011 Armeno NO
9. **Locanda Tempi Lontani** — Armeno
   - slug: `locanda-tempi-lontani-armeno`
   - indirizzo: Via Umberto I, 3, 28010 Miasino NO
10. **Ristorante Madonna Della Neve** — Armeno
   - slug: `ristorante-madonna-della-neve-armeno`
   - indirizzo: Via Principale, 1, 28028 Pettenasco NO
11. **Affittacamere "Il Portale"** — Armento
   - slug: `affittacamere-il-portale-armento`
   - indirizzo: Via G. B. Romano, 32, 85039 Spinoso PZ
12. **Affittacamere Divino** — Armento
   - slug: `affittacamere-divino-armento`
   - indirizzo: Via San Rocco, 45, 85039 Spinoso PZ
13. **B&B "nonna Rosa"** — Armento
   - slug: `b-b-nonna-rosa-armento`
   - indirizzo: Via Vincenzo Caputi, 24, 85050 Grumento Nova PZ
14. **B&B Casa Baronale** — Armento
   - slug: `b-b-casa-baronale-armento`
   - indirizzo: Piazza Piano della Corte, 5, 85031 Castelsaraceno PZ
15. **B&B Il Belvedere** — Armento
   - slug: `b-b-il-belvedere-armento`
   - indirizzo: Vico Storto S. Oronzio, 22, 85059 Viggiano PZ
16. **Hotel Kiris** — Armento
   - slug: `hotel-kiris-armento`
   - indirizzo: 85059 Case Rosse PZ
17. **Hotel Park Grumentum** — Armento
   - slug: `hotel-park-grumentum-armento`
   - indirizzo: 85050 Grumento Nova PZ
18. **Hotel Theotokos** — Armento
   - slug: `hotel-theotokos-armento`
   - indirizzo: Via Don Francesco Romagnano, 2, 85059 Viggiano PZ
19. **Il Borgo Delle Arti** — Armento
   - slug: `il-borgo-delle-arti-armento`
   - indirizzo: Contrada Itlei, 85010 Armento PZ
20. **Il Castello** — Armento
   - slug: `il-castello-armento`
   - indirizzo: III, Vico I Castello, 10, 85059 Viggiano PZ
21. **Il Sospiro B&B** — Armento
   - slug: `il-sospiro-b-b-armento`
   - indirizzo: Via Cavour, 11, 85039 Spinoso PZ
22. **A’Mare - Luxury B&B Spa & Social Food** — Armo
   - slug: `a-mare-luxury-b-b-spa-social-food-armo`
   - indirizzo: Corso Europa, 82, 18013 Diano Marina IM
23. **Arcadia Marina** — Armo
   - slug: `arcadia-marina-armo`
   - indirizzo: Via Fiume, 1, 18100 Imperia IM
24. **Arno Boutique Hotel** — Armo
   - slug: `arno-boutique-hotel-armo`
   - indirizzo: Corso Italia, 13, 50123 Firenze FI
25. **B&B Ariadamare** — Armo
   - slug: `b-b-ariadamare-armo`
   - indirizzo: Via del Fonti, 10 D, 18038 Sanremo IM
26. **B&B Ca' de Rossana** — Armo
   - slug: `b-b-ca-de-rossana-armo`
   - indirizzo: Via Padre Semeria, 490, 18038 Sanremo IM
27. **B&B Home Restaurant AGAI** — Armo
   - slug: `b-b-home-restaurant-agai-armo`
   - indirizzo: Località Morchetto, 25, 18030 Isolabona IM
28. **B&B Il Mirto** — Armo
   - slug: `b-b-il-mirto-armo`
   - indirizzo: Via Cason della Guardia, 29, 18100 Imperia IM
29. **B&B La Vista del Poggio** — Armo
   - slug: `b-b-la-vista-del-poggio-armo`
   - indirizzo: Via Poggio, 10, 18011 Castellaro IM
30. **B&B Note di mare** — Armo
   - slug: `b-b-note-di-mare-armo`
   - indirizzo: Via G. Menotti Serrati, 12/a, 18100 Imperia IM
31. **B&B Ti Vengo a Cercare** — Armo
   - slug: `b-b-ti-vengo-a-cercare-armo`
   - indirizzo: Via Principe Amedeo, 14, 18011 Castellaro IM
32. **Bed & Breakfast Luotti** — Armo
   - slug: `bed-breakfast-luotti-armo`
   - indirizzo: Frazione Prale, 35, 12078 Ormea CN
33. **Bed and Breakfast Il Giardino sul Mare** — Armo
   - slug: `bed-and-breakfast-il-giardino-sul-mare-armo`
   - indirizzo: Corso Villaregia, 51, 18015 Riva Ligure IM
34. **Hotel Arno** — Armo
   - slug: `hotel-arno-armo-4`
   - indirizzo: Viale G. Baccelli, 210, 53042 Chianciano Terme SI
35. **Hotel Arno** — Armo
   - slug: `hotel-arno-armo-2`
   - indirizzo: Via Sicilia, 42, 47843 Misano Adriatico RN