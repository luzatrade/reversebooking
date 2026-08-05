# Blocco 366/500 — 35 strutture senza descrizione IT

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

1. **Albergo Due Spade** — Caldonazzo
   - slug: `albergo-due-spade-caldonazzo`
   - indirizzo: Piazza Municipio, 2, 38052 Caldonazzo TN
2. **B&B & Appartamenti Alla Loggia Dell'imperatore** — Caldonazzo
   - slug: `b-b-appartamenti-alla-loggia-dell-imperatore-caldonazzo`
   - indirizzo: Via G. Prati, 27, 38056 Levico Terme TN
3. **Castello Errante Bio Bed & Breakfast** — Caldonazzo
   - slug: `castello-errante-bio-bed-breakfast-caldonazzo`
   - indirizzo: Via della Villa, 3, 38052 Caldonazzo TN
4. **Hotel Garden Levico** — Caldonazzo
   - slug: `hotel-garden-levico-caldonazzo`
   - indirizzo: Via Vittorio Emanuele, 22, 38056 Levico Terme TN
5. **Hotel Paoli** — Caldonazzo
   - slug: `hotel-paoli-caldonazzo`
   - indirizzo: Lochere, 6, 38052 Caldonazzo TN
6. **Hotel Sport** — Caldonazzo
   - slug: `hotel-sport-caldonazzo`
   - indirizzo: Via Giovanni Segantini, 4, 38056 Levico Terme TN
7. **Lido di Caldonazzo** — Caldonazzo
   - slug: `lido-di-caldonazzo-caldonazzo`
   - indirizzo: Via Lungo Lago, 1, 38052 Caldonazzo TN
8. **b&b Calvino** — Calendasco
   - slug: `b-b-calvino-calendasco`
   - indirizzo: Via Giuseppe Sidoli, 40, 29121 Piacenza PC
9. **B&B Molinetto** — Calendasco
   - slug: `b-b-molinetto-calendasco`
   - indirizzo: Str. Al Molinetto, 100, 29121 Piacenza PC
10. **IL TRAMONTO SUL PO** — Calendasco
   - slug: `il-tramonto-sul-po-calendasco`
   - indirizzo: Loc. Masero, 2, 29010 Calendasco PC
11. **Ostello Bar Ristorante le Tre Corone di Marian Rose Slater** — Calendasco
   - slug: `ostello-bar-ristorante-le-tre-corone-di-marian-r-calendasco`
   - indirizzo: Via Mazzini Nuova, 59, 29010 Calendasco PC
12. **Salotto Corso Garibaldi** — Calendasco
   - slug: `salotto-corso-garibaldi-calendasco`
   - indirizzo: Corso G.Garibaldi, 45, 29121 Piacenza PC
13. **B&B HOTEL Calenzano First** — Calenzano
   - slug: `b-b-hotel-calenzano-first-calenzano`
   - indirizzo: Via Dino Ciolli, 5, 50041 Calenzano FI
14. **B&B HOTEL Prato City Center** — Calenzano
   - slug: `b-b-hotel-prato-city-center-calenzano`
   - indirizzo: Via Bettino, 4, 59100 Prato PO
15. **B&B Le Margherite** — Calenzano
   - slug: `b-b-le-margherite-calenzano`
   - indirizzo: Via Giacomo Puccini, 283, 50041 Calenzano FI
16. **Fantastic Garden Hotel & Ristorante** — Calenzano
   - slug: `fantastic-garden-hotel-ristorante-calenzano`
   - indirizzo: Viale XX Settembre, 200, 50019 Sesto Fiorentino FI
17. **Hotel 500 Firenze** — Calenzano
   - slug: `hotel-500-firenze-calenzano`
   - indirizzo: Via Tomerello, 1, 50013 Campi Bisenzio FI
18. **Hotel Delta Florence** — Calenzano
   - slug: `hotel-delta-florence-calenzano`
   - indirizzo: Via Vittorio Emanuele, 3, 50041 Calenzano FI
19. **Hotel Etrusco** — Calenzano
   - slug: `hotel-etrusco-calenzano`
   - indirizzo: Viale Pratese, 76/78, 50019 Sesto Fiorentino FI
20. **Hotel ibis Firenze Prato Est** — Calenzano
   - slug: `hotel-ibis-firenze-prato-est-calenzano`
   - indirizzo: Località Capalle, Via Fratelli Cervi, 50013 Campi Bisenzio FI
21. **Hotel La Selva** — Calenzano
   - slug: `hotel-la-selva-calenzano`
   - indirizzo: Via di Barberino, 221, 50041 Calenzano FI
22. **Hotel La Villetta** — Calenzano
   - slug: `hotel-la-villetta-calenzano`
   - indirizzo: Via Baldanzese, 73, 50041 Calenzano FI
23. **Hotel Valmarina** — Calenzano
   - slug: `hotel-valmarina-calenzano`
   - indirizzo: Via Baldanzese, 146, 50041 Calenzano FI
24. **JR Hotels Gigli Firenze** — Calenzano
   - slug: `jr-hotels-gigli-firenze-calenzano`
   - indirizzo: Via degli Olmi, 7, 50041 Calenzano FI
25. **Le Camere di Mario** — Calenzano
   - slug: `le-camere-di-mario-calenzano`
   - indirizzo: Vaiano PO IT, Via Emilio Bertini, 27, 59021 Schignano PO
26. **Novotel Firenze Nord Aeroporto** — Calenzano
   - slug: `novotel-firenze-nord-aeroporto-calenzano`
   - indirizzo: Via Tevere 23 Osmannoro, Sesto Fiorentino, 50019 Florence, FI
27. **Residenza San Matteo** — Calenzano
   - slug: `residenza-san-matteo-calenzano`
   - indirizzo: VAI DI PRATO, 2, 50141 Calenzano FI
28. **Starhotels Vespucci** — Calenzano
   - slug: `starhotels-vespucci-calenzano`
   - indirizzo: Via San Quirico, 292/A, 50010 Campi Bisenzio FI
29. **Agriturismo Castione** — Calestano
   - slug: `agriturismo-castione-calestano`
   - indirizzo: Via Deledda, 5, 43030 Calestano PR
30. **Anime Salve B&B E-BIKE Home Restaurant** — Calestano
   - slug: `anime-salve-b-b-e-bike-home-restaurant-calestano`
   - indirizzo: Via Carpintero, 6, 43038 Sala Baganza PR
31. **B&B Avamposto di Alpicella** — Calestano
   - slug: `b-b-avamposto-di-alpicella-calestano`
   - indirizzo: Via Canesano, Località Alpicella, 22, 43030 Calestano PR
32. **B&B Casa di Arola** — Calestano
   - slug: `b-b-casa-di-arola-calestano`
   - indirizzo: Strada Provinciale per Torrechiara, 22, 43013 Arola PR
33. **B&B Corte Vecchi** — Calestano
   - slug: `b-b-corte-vecchi-calestano`
   - indirizzo: Str. Monticello, 7, 43044 Ozzano Taro PR
34. **B&B della Canadella** — Calestano
   - slug: `b-b-della-canadella-calestano`
   - indirizzo: Via della Bassa, 9, 43037 Bassa PR
35. **B&B La Costa** — Calestano
   - slug: `b-b-la-costa-calestano`
   - indirizzo: Via La Costa 3, 43030 Ravarano PR