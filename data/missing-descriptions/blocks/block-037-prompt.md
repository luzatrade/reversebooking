# Blocco 37/500 — 35 strutture senza descrizione IT

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

1. **Hotel Della Piana** — Aielli
   - slug: `hotel-della-piana-aielli`
   - indirizzo: Via Tiburtina Valeria, KM 112/700, 67051 Avezzano AQ
2. **Hotel Il Fortino** — Aielli
   - slug: `hotel-il-fortino-aielli`
   - indirizzo: 42°04'13.3"N 13°33'10.7"E, 67041 Aielli AQ
3. **Hotel Millepini** — Aielli
   - slug: `hotel-millepini-aielli`
   - indirizzo: Via Dante Alighieri, 67046 Ovindoli AQ
4. **Hotel Paradiso** — Aielli
   - slug: `hotel-paradiso-aielli`
   - indirizzo: Località Margine, 7, 67041 Aielli AQ
5. **Hotel Residence Il Feudo Dei Pierleoni** — Aielli
   - slug: `hotel-residence-il-feudo-dei-pierleoni-aielli`
   - indirizzo: 67041 Aielli AQ, Italia
6. **Hotel Ristorante Le Gole** — Aielli
   - slug: `hotel-ristorante-le-gole-aielli`
   - indirizzo: Contrada Sardellino 3, 67041 Aielli AQ
7. **Hotel Ristorante Mastrodattia** — Aielli
   - slug: `hotel-ristorante-mastrodattia-aielli`
   - indirizzo: Via Luigi Giuliani, 35, 67043 Celano AQ
8. **Hotel San Berardo** — Aielli
   - slug: `hotel-san-berardo-aielli`
   - indirizzo: Via Borgo Unrra Casas, snc, 67057 Pescina AQ
9. **Il Borgo** — Aielli
   - slug: `il-borgo-aielli`
   - indirizzo: Via R. Maccallini, 16, 67041 Aielli Stazione AQ
10. **Magnola Palace Hotel** — Aielli
   - slug: `magnola-palace-hotel-aielli`
   - indirizzo: Via del Ceraso, 89, 67046 Ovindoli AQ
11. **Park Hotel Benessere Spa & Sport** — Aielli
   - slug: `park-hotel-benessere-spa-sport-aielli`
   - indirizzo: Via del Ceraso, 178, 67046 Ovindoli AQ
12. **postAielli B&B** — Aielli
   - slug: `postaielli-b-b-aielli`
   - indirizzo: Piazza Regina Margherita, 10, 67041 Aielli AQ
13. **Ristorante Hotel Guerrinuccio** — Aielli
   - slug: `ristorante-hotel-guerrinuccio-aielli`
   - indirizzo: Via Sardellino, 4, 67041 Aielli AQ
14. **A'mantia Hotel** — Aiello Calabro
   - slug: `a-mantia-hotel-aiello-calabro`
   - indirizzo: Via Salvo D'Acquisto, 14, 87032 Amantea CS
15. **Agriturismo Bio il Mandorlo** — Aiello Calabro
   - slug: `agriturismo-bio-il-mandorlo-aiello-calabro`
   - indirizzo: Località chiaie 55, 87032 Amantea CS
16. **Agriturismo Fargani** — Aiello Calabro
   - slug: `agriturismo-fargani-aiello-calabro`
   - indirizzo: Localita' Fargani, 7, 87031 Aiello Calabro CS
17. **B&B Benvenuti al Sud** — Aiello Calabro
   - slug: `b-b-benvenuti-al-sud-aiello-calabro`
   - indirizzo: Via Convento, 4, 87031 Aiello Calabro CS
18. **B&B La Casetta della Nonna Belmonte Calabro** — Aiello Calabro
   - slug: `b-b-la-casetta-della-nonna-belmonte-calabro-aiello-calabro`
   - indirizzo: Via Ruccoli, 87033 Belmonte Calabro CS
19. **Dimore Morelli Amantea** — Aiello Calabro
   - slug: `dimore-morelli-amantea-aiello-calabro`
   - indirizzo: Via Genova, 13, 87032 Amantea CS
20. **Grand Hotel La Tonnara** — Aiello Calabro
   - slug: `grand-hotel-la-tonnara-aiello-calabro`
   - indirizzo: Via Tonnara, 9, 87032 Amantea CS
21. **hotel delle canne** — Aiello Calabro
   - slug: `hotel-delle-canne-aiello-calabro`
   - indirizzo: Via Stromboli, 229, 87032 Amantea CS
22. **Hotel la Principessa** — Aiello Calabro
   - slug: `hotel-la-principessa-aiello-calabro`
   - indirizzo: SS 18 Tirrena Inferiore, 87032 Amantea CS
23. **Hotel Palace Savuto** — Aiello Calabro
   - slug: `hotel-palace-savuto-aiello-calabro`
   - indirizzo: Contrada Cumbera, 87030 Malito CS
24. **Hotel Ristorante Marechiaro** — Aiello Calabro
   - slug: `hotel-ristorante-marechiaro-aiello-calabro`
   - indirizzo: Corso Europa, 62, 87032 Campora San Giovanni CS
25. **Hotel santa maria** — Aiello Calabro
   - slug: `hotel-santa-maria-aiello-calabro`
   - indirizzo: SS 18 Tirrena Inferiore, 207, 87032 Amantea CS
26. **Il Borgo della Marinella** — Aiello Calabro
   - slug: `il-borgo-della-marinella-aiello-calabro`
   - indirizzo: Via Formiciche, 35, 87032 Amantea CS
27. **Il Tempo Locanda - Ristorante - b&b** — Aiello Calabro
   - slug: `il-tempo-locanda-ristorante-b-b-aiello-calabro`
   - indirizzo: Via Roma, 87030 Cleto CS
28. **LIDO TIRRENO BEACH** — Aiello Calabro
   - slug: `lido-tirreno-beach-aiello-calabro`
   - indirizzo: Lungomare, 87032 Campora San Giovanni CS
29. **Mediterraneo Palace Hotel** — Aiello Calabro
   - slug: `mediterraneo-palace-hotel-aiello-calabro`
   - indirizzo: Via Stromboli, 79, 87032 Amantea CS
30. **Park Hotel Tyrrenian** — Aiello Calabro
   - slug: `park-hotel-tyrrenian-aiello-calabro`
   - indirizzo: SS 18 Tirrena Inferiore, 227, 87032 Amantea CS
31. **Ristorante Albergo Le Clarisse - Hotel 4 Stelle - Amantea (CS)** — Aiello Calabro
   - slug: `ristorante-albergo-le-clarisse-hotel-4-stelle-am-aiello-calabro`
   - indirizzo: Via Indipendenza, 27, 87032 Amantea CS
32. **Tillesia Affittacamere (MVM srls)** — Aiello Calabro
   - slug: `tillesia-affittacamere-mvm-srls-aiello-calabro`
   - indirizzo: Corso Vittorio Emanuele II, 87031 Aiello Calabro CS
33. **VILLA G&G CALABRIA** — Aiello Calabro
   - slug: `villa-g-g-calabria-aiello-calabro`
   - indirizzo: Via Lungomare Tirreno, 87032 Campora San Giovanni CS
34. **Agriturismo Il Cammino** — Aiello del Friuli
   - slug: `agriturismo-il-cammino-aiello-del-friuli`
   - indirizzo: Via Julia, 19, 33050 San Vito al Torre UD
35. **Al Castello di Aiello - Casa Vacanze** — Aiello del Friuli
   - slug: `al-castello-di-aiello-casa-vacanze-aiello-del-friuli`
   - indirizzo: Via F. Petrarca, 20, 33041 Aiello del Friuli UD