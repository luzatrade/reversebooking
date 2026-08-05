# Blocco 201/500 — 35 strutture senza descrizione IT

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

1. **Hotel Sporting** — Bagnolo in Piano
   - slug: `hotel-sporting-bagnolo-in-piano`
   - indirizzo: Via G. Fontanesi, 2, 42012 Campagnola Emilia RE
2. **Hotel Villa Petra** — Bagnolo in Piano
   - slug: `hotel-villa-petra-bagnolo-in-piano`
   - indirizzo: Via della Costituzione, 44, 42017 Novellara RE
3. **Le Palme** — Bagnolo in Piano
   - slug: `le-palme-bagnolo-in-piano`
   - indirizzo: Via Roma, 27, 42011 Bagnolo in Piano RE
4. **Residence a Reggio Emilia Pieverossa** — Bagnolo in Piano
   - slug: `residence-a-reggio-emilia-pieverossa-bagnolo-in-piano`
   - indirizzo: Via Str. Vecchia, 13, 42011 Bagnolo in Piano RE
5. **Silver Hotel Residence** — Bagnolo in Piano
   - slug: `silver-hotel-residence-bagnolo-in-piano`
   - indirizzo: Via Olimpia, 1/R, 42011 Bagnolo in Piano RE
6. **Albergo Odeon** — Bagnolo Mella
   - slug: `albergo-odeon-bagnolo-mella`
   - indirizzo: Via G. Matteotti, 6, 25016 Ghedi BS
7. **Antica Filanda** — Bagnolo Mella
   - slug: `antica-filanda-bagnolo-mella`
   - indirizzo: Via Filande, 34, 25125 Brescia BS
8. **B&B Millefiori** — Bagnolo Mella
   - slug: `b-b-millefiori-bagnolo-mella`
   - indirizzo: Via Contrada del mangano, 14, 25122 Brescia BS
9. **Contegnaga B&B** — Bagnolo Mella
   - slug: `contegnaga-b-b-bagnolo-mella`
   - indirizzo: Via S. Martino, 47, 25020 Flero BS
10. **Hotel Alla Sosta** — Bagnolo Mella
   - slug: `hotel-alla-sosta-bagnolo-mella`
   - indirizzo: Via Alcide de Gasperi, 93, 25086 Rezzato BS
11. **Hotel La Pina** — Bagnolo Mella
   - slug: `hotel-la-pina-bagnolo-mella`
   - indirizzo: Via Giuseppe Garibaldi, 98, 25086 Rezzato BS
12. **Hotel Santa Giulia** — Bagnolo Mella
   - slug: `hotel-santa-giulia-bagnolo-mella`
   - indirizzo: Via Sandro Pertini, 16, 25014 Castenedolo BS
13. **Hotel Sogno** — Bagnolo Mella
   - slug: `hotel-sogno-bagnolo-mella`
   - indirizzo: Via Alcide de Gasperi, 261, 25086 Rezzato BS
14. **Hotel Trotter** — Bagnolo Mella
   - slug: `hotel-trotter-bagnolo-mella`
   - indirizzo: Via Brescia, 35, 25024 Leno BS
15. **Le Rondini** — Bagnolo Mella
   - slug: `le-rondini-bagnolo-mella`
   - indirizzo: Via Borgo, 3, 25021 Bagnolo Mella BS
16. **Agriturismo A Nostro Mizoun** — Bagnolo Piemonte
   - slug: `agriturismo-a-nostro-mizoun-bagnolo-piemonte`
   - indirizzo: Località Durandin, 39, 12030 Ostana CN
17. **Agriturismo Ai Prüsot** — Bagnolo Piemonte
   - slug: `agriturismo-ai-prusot-bagnolo-piemonte`
   - indirizzo: Via Maddalena, 47, 12031 Bagnolo Piemonte CN
18. **Agriturismo Ca' del Clat - Azienda Agricola Dolci Bacche della me** — Bagnolo Piemonte
   - slug: `agriturismo-ca-del-clat-azienda-agricola-dolci-b-bagnolo-piemonte`
   - indirizzo: Via Bibiana, 27, 12031 Bagnolo Piemonte CN
19. **Agriturismo Cascine Del Castello Di Bagnolo** — Bagnolo Piemonte
   - slug: `agriturismo-cascine-del-castello-di-bagnolo-bagnolo-piemonte`
   - indirizzo: Via Palazzo, 10, 12031 Bagnolo Piemonte CN
20. **Alter Hotel** — Bagnolo Piemonte
   - slug: `alter-hotel-bagnolo-piemonte`
   - indirizzo: Piazza Stazione, 1, 12032 Barge CN
21. **B&B L'Orto di Ortensia** — Bagnolo Piemonte
   - slug: `b-b-l-orto-di-ortensia-bagnolo-piemonte`
   - indirizzo: Via Minette, 7, 12031 Bagnolo Piemonte CN
22. **Bargiolina** — Bagnolo Piemonte
   - slug: `bargiolina-bagnolo-piemonte`
   - indirizzo: Via Antica Torriana, 11, 12032 Barge CN
23. **CA' NOSTRA B&B** — Bagnolo Piemonte
   - slug: `ca-nostra-b-b-bagnolo-piemonte`
   - indirizzo: Via Roma, 61, 12031 Bagnolo Piemonte CN
24. **Castello di Bagnolo, Parco e Agriturismo** — Bagnolo Piemonte
   - slug: `castello-di-bagnolo-parco-e-agriturismo-bagnolo-piemonte`
   - indirizzo: Via Palazzo, 9, 12032 Bagnolo Piemonte CN
25. **Hotel Prealpina** — Bagnolo Piemonte
   - slug: `hotel-prealpina-bagnolo-piemonte`
   - indirizzo: Via Barge, 2, 12031 Bagnolo Piemonte CN
26. **La casa di cate & adry** — Bagnolo Piemonte
   - slug: `la-casa-di-cate-adry-bagnolo-piemonte`
   - indirizzo: Via Roma, 176, 12030 Envie CN
27. **Locanda la Via del Sale** — Bagnolo Piemonte
   - slug: `locanda-la-via-del-sale-bagnolo-piemonte`
   - indirizzo: Via Segheria, 4, 12030 Sanfront CN
28. **Red White Green Violet Pink appartament** — Bagnolo Piemonte
   - slug: `red-white-green-violet-pink-appartament-bagnolo-piemonte`
   - indirizzo: Piazza S. Pietro, 18, 12031 Bagnolo Piemonte CN
29. **VILLA LE ROSE** — Bagnolo Piemonte
   - slug: `villa-le-rose-bagnolo-piemonte`
   - indirizzo: Via S. Michele, 1, 10061 Cavour TO
30. **Villa Maria Sole - Bed & Breakfast** — Bagnolo Piemonte
   - slug: `villa-maria-sole-bed-breakfast-bagnolo-piemonte`
   - indirizzo: Via Traversa Barge, 4, 12036 Revello CN
31. **Al Parco b&b** — Bagnolo San Vito
   - slug: `al-parco-b-b-bagnolo-san-vito`
   - indirizzo: Via Castiglione della Pescaia, 1, 46027 San Benedetto Po MN
32. **Albergo Meuble' La Corte** — Bagnolo San Vito
   - slug: `albergo-meuble-la-corte-bagnolo-san-vito`
   - indirizzo: Via Romana Zaita, 31, 46031 Bagnolo San Vito MN
33. **B&B A Casa Mia** — Bagnolo San Vito
   - slug: `b-b-a-casa-mia-bagnolo-san-vito`
   - indirizzo: Via II Giugno, 12/A, 46031 Bagnolo San Vito MN
34. **B&B Casa Silingardi** — Bagnolo San Vito
   - slug: `b-b-casa-silingardi-bagnolo-san-vito`
   - indirizzo: Via Roma, 46, 46031 Bagnolo San Vito MN
35. **B&B HOTEL Mantova Cristallo** — Bagnolo San Vito
   - slug: `b-b-hotel-mantova-cristallo-bagnolo-san-vito`
   - indirizzo: Via Cisa, 1/e, 46034 Borgo Virgilio MN