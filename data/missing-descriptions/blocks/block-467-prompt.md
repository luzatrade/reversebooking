# Blocco 467/500 — 35 strutture senza descrizione IT

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

1. **AGRITURISMO CA' DI FRANCHI'** — Cassiglio
   - slug: `agriturismo-ca-di-franchi-cassiglio`
   - indirizzo: Via Cima Prato di Mezzo, 24010 Cornalta BG
2. **Agriturismo Ca' di Racc** — Cassiglio
   - slug: `agriturismo-ca-di-racc-cassiglio`
   - indirizzo: Loc. Selvadagnone, snc, 24020 Valgoglio BG
3. **Agriturismo Grabbia** — Cassiglio
   - slug: `agriturismo-grabbia-cassiglio`
   - indirizzo: Via Grabbia, 7, 24015 San Giovanni Bianco BG
4. **Agriturismo I Larici** — Cassiglio
   - slug: `agriturismo-i-larici-cassiglio`
   - indirizzo: Via Foppo, 14, 24015 San Giovanni Bianco BG
5. **Agriturismo I Pascoli -Azienda Agricola Al Casot- cucina casalinga** — Cassiglio
   - slug: `agriturismo-i-pascoli-azienda-agricola-al-casot-cassiglio`
   - indirizzo: Via Treviglio, 986, 24045 Fara Gera d'Adda BG
6. **AGRITURISMO LA FRUSLINA** — Cassiglio
   - slug: `agriturismo-la-fruslina-cassiglio`
   - indirizzo: Frazione, 24016 Santa Croce BG
7. **B&B Adelché** — Cassiglio
   - slug: `b-b-adelche-cassiglio`
   - indirizzo: Via Costa San Gallo, Località, 3, 24015 Costa San Gallo-Santuario BG
8. **Albergo Ristorante Il Griso** — Cassina de' Pecchi
   - slug: `albergo-ristorante-il-griso-cassina-de-pecchi`
   - indirizzo: Via Nuova Cassanese, 94, 20052 Vignate MI
9. **Hotel Arcobaleno** — Cassina de' Pecchi
   - slug: `hotel-arcobaleno-cassina-de-pecchi`
   - indirizzo: Via Giuseppe di Vittorio, 5, 20055 Vimodrone MI
10. **Hotel EL Paso** — Cassina de' Pecchi
   - slug: `hotel-el-paso-cassina-de-pecchi`
   - indirizzo: SP13, 20060 Liscate MI
11. **Hotel Riviera** — Cassina de' Pecchi
   - slug: `hotel-riviera-cassina-de-pecchi`
   - indirizzo: Via Rivoltana, 2, 20054 Segrate MI
12. **In Giardino B&B** — Cassina de' Pecchi
   - slug: `in-giardino-b-b-cassina-de-pecchi`
   - indirizzo: Via Centauro, 3, 20051 Cassina De' Pecchi MI
13. **Residence Le Querce** — Cassina de' Pecchi
   - slug: `residence-le-querce-cassina-de-pecchi`
   - indirizzo: Via Giuseppe Verdi, 2, 20063 Cernusco sul Naviglio MI
14. **Albergo Da Angela** — Cassina Rizzardi
   - slug: `albergo-da-angela-cassina-rizzardi`
   - indirizzo: Via Risorgimento, 28, 22070 Luisago CO
15. **B&B Casa Rosa** — Cassina Rizzardi
   - slug: `b-b-casa-rosa-cassina-rizzardi`
   - indirizzo: Via Parini, 8, 22070 Luisago CO
16. **Drive Motel** — Cassina Rizzardi
   - slug: `drive-motel-cassina-rizzardi`
   - indirizzo: Via Manzoni, 22070 Montano CO
17. **Appartamenti LECCO per brevi periodi** — Cassina Valsassina
   - slug: `appartamenti-lecco-per-brevi-periodi-cassina-valsassina`
   - indirizzo: Via Gorizia, 54, 23900 Lecco LC
18. **B&B CASCINA CORNELLA CIN: IT097029C1OAXEL54H** — Cassina Valsassina
   - slug: `b-b-cascina-cornella-cin-it097029c1oaxel54h-cassina-valsassina`
   - indirizzo: LOC, Via Giovanni Pascoli, 16, 23814 Cremeno LC
19. **B&b del bosco e del lago Elimar** — Cassina Valsassina
   - slug: `b-b-del-bosco-e-del-lago-elimar-cassina-valsassina`
   - indirizzo: Corso Promessi Sposi, 20, 23900 Lecco LC
20. **Borgo Dei Pescatori** — Cassina Valsassina
   - slug: `borgo-dei-pescatori-cassina-valsassina`
   - indirizzo: Via Plava, 11, 23900 Lecco LC
21. **Casa al Lago** — Cassina Valsassina
   - slug: `casa-al-lago-cassina-valsassina`
   - indirizzo: Via Battisti, 6, 23900 Lecco LC
22. **Da Gigi Crandola Ristorante Albergo** — Cassina Valsassina
   - slug: `da-gigi-crandola-ristorante-albergo-cassina-valsassina`
   - indirizzo: P.za IV Novembre, 4, 23832 Crandola Valsassina LC
23. **La Tana del Luppolo** — Cassina Valsassina
   - slug: `la-tana-del-luppolo-cassina-valsassina`
   - indirizzo: Via Lecco, 5, 23868 Valmadrera LC
24. **Maso Zambo - Mountain Lodge and Restaurant** — Cassina Valsassina
   - slug: `maso-zambo-mountain-lodge-and-restaurant-cassina-valsassina`
   - indirizzo: Via per, Via Mezzacca, 6, 23817 Cassina Valsassina LC
25. **Agriturist Rupestr** — Cassinasco
   - slug: `agriturist-rupestr-cassinasco`
   - indirizzo: Regione Pian Canelli, 12, 14053 Canelli AT
26. **B&B Asinistravolti** — Cassinasco
   - slug: `b-b-asinistravolti-cassinasco`
   - indirizzo: Regione Gibelli - Canelli - Cassinasco (AT), 14057 Canelli - Cassinasco AT
27. **Casa Calendula** — Cassinasco
   - slug: `casa-calendula-cassinasco`
   - indirizzo: Regione Fosselli, 18, 14050 Cassinasco AT
28. **Rifugio Escursionistico ex-scuola Grassi, Bubbio** — Cassinasco
   - slug: `rifugio-escursionistico-ex-scuola-grassi-bubbio-cassinasco`
   - indirizzo: Regione, Cascina Grassi, 38, 14051 Bubbio AT
29. **Ristorante - Albergo Madonna della Neve** — Cassinasco
   - slug: `ristorante-albergo-madonna-della-neve-cassinasco`
   - indirizzo: Regione Madonna delle Neve, 2, 14050 Cessole AT
30. **Vigna Rocchetta** — Cassinasco
   - slug: `vigna-rocchetta-cassinasco`
   - indirizzo: Regione Fleisa 1/2, 14042 Rocchetta Palafea AT
31. **Agriturismo il Buonvicino** — Cassine
   - slug: `agriturismo-il-buonvicino-cassine`
   - indirizzo: Strada Ricaldone di Sotto, 64, 15016 Cassine AL
32. **Agriturismo La.ti.mi.da** — Cassine
   - slug: `agriturismo-la-ti-mi-da-cassine`
   - indirizzo: Strada Ricaldone Di Sotto, 28, 15016 Cassine AL
33. **Albergo Nuovo Gianduja** — Cassine
   - slug: `albergo-nuovo-gianduja-cassine`
   - indirizzo: Viale Einaudi, 24, 15011 Acqui Terme AL
34. **Casa Pizio** — Cassine
   - slug: `casa-pizio-cassine`
   - indirizzo: Str. Pizio, 6, 15016 Cassine AL
35. **Ristorante Pizzeria B & B Passeggeri ampio dehor estivo** — Cassine
   - slug: `ristorante-pizzeria-b-b-passeggeri-ampio-dehor-e-cassine`
   - indirizzo: Corso Guglielmo Marconi, 14, 15016 Cassine AL