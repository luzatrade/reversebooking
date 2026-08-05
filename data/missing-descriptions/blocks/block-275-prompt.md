# Blocco 275/500 — 35 strutture senza descrizione IT

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

1. **Foresteria di Serracavallo** — Bisignano
   - slug: `foresteria-di-serracavallo-bisignano`
   - indirizzo: Contrada Serracavallo, 87043 Bisignano CS
2. **Gusto West** — Bisignano
   - slug: `gusto-west-bisignano`
   - indirizzo: Cittadella Mediocrati, Piazza C.A. Dalla Chiesa, 26, 87043 Bisignano CS
3. **kabbala club** — Bisignano
   - slug: `kabbala-club-bisignano`
   - indirizzo: Via, 87010 Campo di Fieno CS
4. **la giara b&b** — Bisignano
   - slug: `la-giara-b-b-bisignano`
   - indirizzo: Via Caminona, 70, 87069 San Demetrio Corone CS
5. **UNA HOTELS Tenuta Contessa Farm & SPA Cosenza** — Bisignano
   - slug: `una-hotels-tenuta-contessa-farm-spa-cosenza-bisignano`
   - indirizzo: Loc. Contessa Soprana, 87010 Montalto Uffugo CS
6. **Villa "Santa Caterina"** — Bisignano
   - slug: `villa-santa-caterina-bisignano`
   - indirizzo: Via Cariglialto, 76, 87046 Montalto Uffugo CS
7. **Villa Inkanto Resort & SPA** — Bisignano
   - slug: `villa-inkanto-resort-spa-bisignano`
   - indirizzo: G783+38, 87043 Bisignano CS
8. **Villa Piero** — Bisignano
   - slug: `villa-piero-bisignano`
   - indirizzo: 87043 Bisignano CS
9. **Abbadia Borgo Del Sole** — Bistagno
   - slug: `abbadia-borgo-del-sole-bistagno`
   - indirizzo: Strada Sant'Antonio 24 Località Abba, 12060 Marsaglia CN
10. **Agriturismo - Costa dei Platani** — Bistagno
   - slug: `agriturismo-costa-dei-platani-bistagno`
   - indirizzo: Strada Comunale della Maggiora, 89, 15011 Acqui Terme AL
11. **Agriturismo San Desiderio** — Bistagno
   - slug: `agriturismo-san-desiderio-bistagno`
   - indirizzo: Regione S. Desiderio, 40, 14058 Monastero Bormida AT
12. **AZIENDA AGRITURISTICA IL CAMPASSO** — Bistagno
   - slug: `azienda-agrituristica-il-campasso-bistagno`
   - indirizzo: Regione Carpeneta, 21, 15019 Strevi AL
13. **B&B Al Sentiero** — Bistagno
   - slug: `b-b-al-sentiero-bistagno`
   - indirizzo: Regione Giovisio, 11, 15012 Bistagno AL
14. **B&B Casa Fossello** — Bistagno
   - slug: `b-b-casa-fossello-bistagno`
   - indirizzo: Regione Fossello, 7, 14040 Montabone AT
15. **B&B Cascina Malinverni** — Bistagno
   - slug: `b-b-cascina-malinverni-bistagno`
   - indirizzo: Regione Marenco, 13, 14042 Rocchetta Palafea AT
16. **B&B Da Levi Piana del Sole** — Bistagno
   - slug: `b-b-da-levi-piana-del-sole-bistagno`
   - indirizzo: Regione Presa, 71, 15010 Rivalta Bormida AL
17. **Cascina Marcantonio** — Bistagno
   - slug: `cascina-marcantonio-bistagno`
   - indirizzo: Strada Comunale della Maggiora, 140, 15011 Acqui Terme AL
18. **HOTEL MONTEVERDE** — Bistagno
   - slug: `hotel-monteverde-bistagno`
   - indirizzo: Corso Italia, 17, 15012 Bistagno AL
19. **MONTEVERDE APPARTAMENTI** — Bistagno
   - slug: `monteverde-appartamenti-bistagno`
   - indirizzo: Corso Italia, 16, 15012 Bistagno AL
20. **B&B Agorà** — Bitetto
   - slug: `b-b-agora-bitetto`
   - indirizzo: Piazza Aldo Moro, 19, 70020 Bitetto BA
21. **B&B La Maison da Francy** — Bitetto
   - slug: `b-b-la-maison-da-francy-bitetto`
   - indirizzo: Via Giannini, 34, 70020 Bitetto BA
22. **B&B Palazzo 1906** — Bitetto
   - slug: `b-b-palazzo-1906-bitetto`
   - indirizzo: Via Giuseppe Abbruzzese, 27, 70020 Bitetto BA
23. **Dimora Barone** — Bitetto
   - slug: `dimora-barone-bitetto`
   - indirizzo: Via Sant'Antonio, 4, 70020 Bitetto BA
24. **EPOCA B&B** — Bitetto
   - slug: `epoca-b-b-bitetto`
   - indirizzo: Via Gatti Francesco, 23, 70020 Bitetto BA
25. **Hotel Paradise Rooms** — Bitetto
   - slug: `hotel-paradise-rooms-bitetto`
   - indirizzo: Largo Vincenzo Carone, 4, 70020 Bitritto BA
26. **Le segrete casa vacanze** — Bitetto
   - slug: `le-segrete-casa-vacanze-bitetto`
   - indirizzo: Via Spirito Santo, 35, 70028 Sannicandro di Bari BA
27. **Magna Domus** — Bitetto
   - slug: `magna-domus-bitetto`
   - indirizzo: Via Guglielmo Marconi, 3, 70020 Bitetto BA
28. **Pugliese16** — Bitetto
   - slug: `pugliese16-bitetto`
   - indirizzo: Via Pugliese Giuseppe, 16, 70020 Bitetto BA
29. **Villa Nascente** — Bitetto
   - slug: `villa-nascente-bitetto`
   - indirizzo: SP207, 70020 Bitetto BA
30. **Antico Monastero** — Bitonto
   - slug: `antico-monastero-bitonto`
   - indirizzo: Via delle Marteri, 35, 70032 Bitonto BA
31. **B&B Dimora Bellavista | Sauna e Colazione Italiana** — Bitonto
   - slug: `b-b-dimora-bellavista-sauna-e-colazione-italiana-bitonto`
   - indirizzo: Corte Dei Guardia, 2, 70032 Bitonto BA
32. **B&B Il Solito Posto** — Bitonto
   - slug: `b-b-il-solito-posto-bitonto`
   - indirizzo: Via Vincenzo Rogadeo, 28, 70032 Bitonto BA
33. **Beb lungo tiflis** — Bitonto
   - slug: `beb-lungo-tiflis-bitonto`
   - indirizzo: Via Solferino, 27 70032, 70032 Bitonto BA
34. **Casa Apuliae B&b** — Bitonto
   - slug: `casa-apuliae-b-b-bitonto`
   - indirizzo: Piazza Cattedrale, 23, 70032 Bitonto BA
35. **Città Vecchia** — Bitonto
   - slug: `citta-vecchia-bitonto`
   - indirizzo: Arco la Rocca, 70032 Bitonto BA