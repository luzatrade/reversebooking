# Blocco 130/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Tre Morene** — Aquara
   - slug: `agriturismo-tre-morene-aquara`
   - indirizzo: 84060 Monteforte Cilento SA
2. **Aquamaris Design Suite & Spa** — Aquara
   - slug: `aquamaris-design-suite-spa-aquara`
   - indirizzo: Via Linora, 28, 84047 Licinella-Torre di Paestum SA
3. **B&B Le Grazie** — Aquara
   - slug: `b-b-le-grazie-aquara`
   - indirizzo: Via Madonna delle Grazie, 69, 84065 Piaggine SA
4. **B&B O' Stiavucco** — Aquara
   - slug: `b-b-o-stiavucco-aquara`
   - indirizzo: Via S. Teodoro, 69, 84020 Corleto Monforte SA
5. **La Casa Di Federico** — Aquara
   - slug: `la-casa-di-federico-aquara`
   - indirizzo: Via Annunziata, 84020 Aquara SA
6. **La Casa di Nenna** — Aquara
   - slug: `la-casa-di-nenna-aquara`
   - indirizzo: Via Pietro Guglielmotti, 84070 Trentinara SA
7. **La Chiocciola** — Aquara
   - slug: `la-chiocciola-aquara`
   - indirizzo: Via Sansalone, 16, 84060 Trentinara SA
8. **La Terrazza di Laurino** — Aquara
   - slug: `la-terrazza-di-laurino-aquara`
   - indirizzo: Via Pescorubino, 84057 Laurino SA
9. **Masusà** — Aquara
   - slug: `masusa-aquara`
   - indirizzo: Via S. Leonardo, snc, 84020 Aquara SA
10. **Tenuta Canale** — Aquara
   - slug: `tenuta-canale-aquara`
   - indirizzo: SP44, snc, 84020 Aquara SA
11. **Agriturismo Cascina il Poggio** — Aquila d'Arroscia
   - slug: `agriturismo-cascina-il-poggio-aquila-d-arroscia`
   - indirizzo: Frazione Marmoreo, 97, 17033 Casanova Lerrone SV
12. **Agriturismo Le Merline** — Aquila d'Arroscia
   - slug: `agriturismo-le-merline-aquila-d-arroscia`
   - indirizzo: Via Costa de Ferrari, 3, 17032 Chiesa SV
13. **Albergo Ristorante Aquila** — Aquila d'Arroscia
   - slug: `albergo-ristorante-aquila-aquila-d-arroscia`
   - indirizzo: Borgata Canto, 8, 18028 Aquila di Arroscia IM
14. **Arvé Bed & Breakfast** — Aquila d'Arroscia
   - slug: `arve-bed-breakfast-aquila-d-arroscia`
   - indirizzo: Via Isonzo, 6, 17030 Castelbianco SV
15. **B&B 8A CASTELBIANCO** — Aquila d'Arroscia
   - slug: `b-b-8a-castelbianco-aquila-d-arroscia`
   - indirizzo: Via Giuseppe Mazzini, 10/1, 17030 Castelbianco SV
16. **Ca' di Vissai** — Aquila d'Arroscia
   - slug: `ca-di-vissai-aquila-d-arroscia`
   - indirizzo: 17032 Menosio SV, Italia
17. **Ca' Do Diao** — Aquila d'Arroscia
   - slug: `ca-do-diao-aquila-d-arroscia`
   - indirizzo: Località Varavo Inferiore, 15, 17030 Onzo SV
18. **Gli Ulivi** — Aquila d'Arroscia
   - slug: `gli-ulivi-aquila-d-arroscia`
   - indirizzo: frazione maremo, 9, 17033 Casanova Lerrone SV
19. **Il Calderone** — Aquila d'Arroscia
   - slug: `il-calderone-aquila-d-arroscia`
   - indirizzo: Via Villa 30, 18020 Ubaga IM
20. **La casa dei Nonni Castelbianco** — Aquila d'Arroscia
   - slug: `la-casa-dei-nonni-castelbianco-aquila-d-arroscia`
   - indirizzo: Via Vesallo, 18, 17030 Castelbianco SV
21. **La Guardia B&B** — Aquila d'Arroscia
   - slug: `la-guardia-b-b-aquila-d-arroscia`
   - indirizzo: case Soprani, 1, 12078 Prale CN
22. **La Libellula Rossa** — Aquila d'Arroscia
   - slug: `la-libellula-rossa-aquila-d-arroscia`
   - indirizzo: Via Bassi, 40, 17030 Erli SV
23. **Lo Sporting** — Aquila d'Arroscia
   - slug: `lo-sporting-aquila-d-arroscia`
   - indirizzo: Via Matteotti, 15, frazione Perati, 17030 Nasino SV
24. **Agriturismo Pelos** — Aquileia
   - slug: `agriturismo-pelos-aquileia`
   - indirizzo: Via Udine, 38, 33050 Ruda UD
25. **Albergo ristorante Ragno D'oro** — Aquileia
   - slug: `albergo-ristorante-ragno-d-oro-aquileia`
   - indirizzo: SS 14 Trieste /venezia, 33059 Villa Vicentina UD
26. **Albergo Villa Reale** — Aquileia
   - slug: `albergo-villa-reale-aquileia`
   - indirizzo: Via Colombo, 11, 34073 Grado GO
27. **Alla Basilica** — Aquileia
   - slug: `alla-basilica-aquileia`
   - indirizzo: Viale Stazione, 2, 33051 Aquileia UD
28. **Casa Delneri Boutique Hotel Adults Only** — Aquileia
   - slug: `casa-delneri-boutique-hotel-adults-only-aquileia`
   - indirizzo: Via XXIV Maggio, 18, Via XXIV Maggio, 16, 33051 Aquileia UD
29. **Holiday Grado** — Aquileia
   - slug: `holiday-grado-aquileia`
   - indirizzo: Via S. Pellico, 6, 34073 Grado GO
30. **Hotel Abbazia** — Aquileia
   - slug: `hotel-abbazia-aquileia`
   - indirizzo: Via Colombo, 12, 34073 Grado GO
31. **Hotel Bellavista** — Aquileia
   - slug: `hotel-bellavista-aquileia`
   - indirizzo: Viale Italia, 48, 34073 Grado GO
32. **Hotel Carol Grado** — Aquileia
   - slug: `hotel-carol-grado-aquileia`
   - indirizzo: Riva Ugo. Foscolo, 13, 34073 Grado GO
33. **Hotel Eden Grado** — Aquileia
   - slug: `hotel-eden-grado-aquileia`
   - indirizzo: Via Marco Polo, 2, 34073 Grado GO
34. **Hotel Eldorado, Depandance & Apartments** — Aquileia
   - slug: `hotel-eldorado-depandance-apartments-aquileia`
   - indirizzo: Viale Argine Moreri, 81, 34073 Grado GO
35. **Hotel Lido** — Aquileia
   - slug: `hotel-lido-aquileia`
   - indirizzo: Via Francesco Morosini, 12, 34073 Grado GO