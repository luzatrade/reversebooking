# Blocco 423/500 — 35 strutture senza descrizione IT

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

1. **Bed and Breakfast Borgo San Giusto** — Capraia e Limite
   - slug: `bed-and-breakfast-borgo-san-giusto-capraia-e-limite`
   - indirizzo: Via Salaiola, 151, 50053 Empoli FI
2. **Casa Ercoli - B&B VINCI** — Capraia e Limite
   - slug: `casa-ercoli-b-b-vinci-capraia-e-limite`
   - indirizzo: Via g. Verdi, 20, 50059 Spicchio-Sovigliana FI
3. **Country Hotel Borgo Sant'Ippolito - Ginestra Fiorentina** — Capraia e Limite
   - slug: `country-hotel-borgo-sant-ippolito-ginestra-fiore-capraia-e-limite`
   - indirizzo: Via Chiantigiana, 268, 50055 Ginestra Fiorentina FI
4. **Empoli Rooms** — Capraia e Limite
   - slug: `empoli-rooms-capraia-e-limite`
   - indirizzo: Via dei Cappuccini, 38, 50053 Empoli FI
5. **Hall Suites** — Capraia e Limite
   - slug: `hall-suites-capraia-e-limite`
   - indirizzo: Via Giuseppe del Papa, 76, 50053 Empoli FI
6. **Hotel Granducato** — Capraia e Limite
   - slug: `hotel-granducato-capraia-e-limite`
   - indirizzo: Piazza Dell'Unione Europea, 33/34, 50056 Montelupo Fiorentino FI
7. **Hotel I'Fiorino** — Capraia e Limite
   - slug: `hotel-i-fiorino-capraia-e-limite`
   - indirizzo: S. Allende, 97 A/B, 50050 Capraia E Limite FI
8. **Hotel Il Sole** — Capraia e Limite
   - slug: `hotel-il-sole-capraia-e-limite`
   - indirizzo: P.za don Giovanni Minzoni, 18, 50053 Empoli FI
9. **Hotel Ristorante Molo 73** — Capraia e Limite
   - slug: `hotel-ristorante-molo-73-capraia-e-limite`
   - indirizzo: Via Tosco Romagnola Sud, 112, 50053 Empoli FI
10. **Stil Hotel** — Capraia e Limite
   - slug: `stil-hotel-capraia-e-limite`
   - indirizzo: Via dei Macelli, 22, 50058 Signa FI
11. **Sweet Emily Bed & Breakfast** — Capraia e Limite
   - slug: `sweet-emily-bed-breakfast-capraia-e-limite`
   - indirizzo: Via Eugenio Curiel, 2, 50056 Montelupo Fiorentino FI
12. **Villa la Malva** — Capraia e Limite
   - slug: `villa-la-malva-capraia-e-limite`
   - indirizzo: Via Fratelli Buricchi, 35, 59015 Carmignano PO
13. **Villa Le Farnete - Relais and Events** — Capraia e Limite
   - slug: `villa-le-farnete-relais-and-events-capraia-e-limite`
   - indirizzo: Via Macia, 140, 59015 Comeana PO
14. **Albergo Ristorante Beppone** — Capraia Isola
   - slug: `albergo-ristorante-beppone-capraia-isola`
   - indirizzo: Via Assunzione, 78, 57032 Capraia Isola LI
15. **Azienda Agricola Biologica Valle Di Portovecchio** — Capraia Isola
   - slug: `azienda-agricola-biologica-valle-di-portovecchio-capraia-isola`
   - indirizzo: Localita' Il Pollaio, 1, 57032 Capraia Isola LI
16. **Capraia isola** — Capraia Isola
   - slug: `capraia-isola-capraia-isola`
   - indirizzo: Via Vittorio Emanuele, 23, 57032 Capraia Isola LI
17. **Caratteristica Casa Isola Capraia** — Capraia Isola
   - slug: `caratteristica-casa-isola-capraia-capraia-isola`
   - indirizzo: Casa, Via Carlo Alberto, 70, 57032 Capraia Isola LI
18. **eco-locazione turistica affitti brevi** — Capraia Isola
   - slug: `eco-locazione-turistica-affitti-brevi-capraia-isola`
   - indirizzo: Via Carlo Alberto, 6, 57032 Capraia Isola LI
19. **Gamberino** — Capraia Isola
   - slug: `gamberino-capraia-isola`
   - indirizzo: Via Cavo Nero, SNC, 57032 Capraia Isola LI
20. **Il Campo di Margherita Azienda Agricola** — Capraia Isola
   - slug: `il-campo-di-margherita-azienda-agricola-capraia-isola`
   - indirizzo: Loc Semaforo, 57032 Capraia Isola LI
21. **Il Saracino boutique suites** — Capraia Isola
   - slug: `il-saracino-boutique-suites-capraia-isola`
   - indirizzo: Via Lamberto Cibo, 30, 57032 Capraia Isola LI
22. **La Mandola eco Hostel** — Capraia Isola
   - slug: `la-mandola-eco-hostel-capraia-isola`
   - indirizzo: Via della Mandola, 57032 Capraia Isola LI
23. **Maisonette Tommy** — Capraia Isola
   - slug: `maisonette-tommy-capraia-isola`
   - indirizzo: Via Vittorio Emanuele, 15, 57032 Capraia Isola LI
24. **Palazzo Renzi** — Capraia Isola
   - slug: `palazzo-renzi-capraia-isola`
   - indirizzo: Via Genova, 46, 57032 Capraia Isola LI
25. **Al Casale Giallo B&B** — Capranica
   - slug: `al-casale-giallo-b-b-capranica`
   - indirizzo: Strada Campo Spinella, 01012 Capranica VT
26. **B&B dei Papi Boutique Hotel** — Capranica
   - slug: `b-b-dei-papi-boutique-hotel-capranica`
   - indirizzo: Via del Ginnasio, 8, 01100 Viterbo VT
27. **Bed & Breakfast Le Bacette** — Capranica
   - slug: `bed-breakfast-le-bacette-capranica`
   - indirizzo: Località Cucciale, snc, 01032 Caprarola VT
28. **Casale Fedele Bed and Breakfast** — Capranica
   - slug: `casale-fedele-bed-and-breakfast-capranica`
   - indirizzo: Str. S. Giovanni, 6, 01037 Ronciglione VT
29. **Casetta di vicolo corto** — Capranica
   - slug: `casetta-di-vicolo-corto-capranica`
   - indirizzo: Vicolo dell'Oca, 12, 01015 Sutri VT
30. **Donna Etrusca Sutri B&B** — Capranica
   - slug: `donna-etrusca-sutri-b-b-capranica`
   - indirizzo: Via degli Aruspici, 16, 01015 Sutri VT
31. **Hotel Capranica** — Capranica
   - slug: `hotel-capranica-capranica`
   - indirizzo: Corso Francesco Petrarca, 46, 01012 Capranica VT
32. **Nostra Signora del lago** — Capranica
   - slug: `nostra-signora-del-lago-capranica`
   - indirizzo: Via dei Faggi, 22, 01037 Ronciglione VT
33. **Relais Villa La Trinità** — Capranica
   - slug: `relais-villa-la-trinita-capranica`
   - indirizzo: Località Trinità, 2, 01012 Capranica VT
34. **Residenza Principe di Piemonte** — Capranica
   - slug: `residenza-principe-di-piemonte-capranica`
   - indirizzo: Piazza Principe di Piemonte, 3A, 01037 Ronciglione VT
35. **Agriturismo Le Cerquette Olevano Romano** — Capranica Prenestina
   - slug: `agriturismo-le-cerquette-olevano-romano-capranica-prenestina`
   - indirizzo: Contrada Lanetto, Casa, Contrada Casa Livieri, 00035 Olevano Romano RM