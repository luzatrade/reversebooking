# Blocco 128/500 — 35 strutture senza descrizione IT

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

1. **Residenza Stella Alpina** — Aprica
   - slug: `residenza-stella-alpina-aprica`
   - indirizzo: Corso Roma, 3, 23031 Aprica SO
2. **Rezidence Baitone, Aprica** — Aprica
   - slug: `rezidence-baitone-aprica-aprica`
   - indirizzo: Via Europa, 43, 23031 Aprica SO
3. **Agriturismo Aurivu** — Apricale
   - slug: `agriturismo-aurivu-apricale`
   - indirizzo: Via G. Matteotti, 34, 18012 Vallebona IM
4. **Agriturismo dalla Mimmi** — Apricale
   - slug: `agriturismo-dalla-mimmi-apricale`
   - indirizzo: Località Praeli, 18035 Dolceacqua IM
5. **Apricus Boutique Hotel** — Apricale
   - slug: `apricus-boutique-hotel-apricale`
   - indirizzo: Via IV Novembre, 1, 18030 Apricale IM
6. **B&B Il Pianolo** — Apricale
   - slug: `b-b-il-pianolo-apricale`
   - indirizzo: Loc. Villa, 8, 18030 Perinaldo IM
7. **B&B La Casa Rosa** — Apricale
   - slug: `b-b-la-casa-rosa-apricale`
   - indirizzo: Corso de Sonnaz, 35, 18037 Pigna IM
8. **B&B Le Gemme** — Apricale
   - slug: `b-b-le-gemme-apricale`
   - indirizzo: Via Castello, 2, 18035 Dolceacqua IM
9. **Da Marta** — Apricale
   - slug: `da-marta-apricale`
   - indirizzo: Via Martiri della Liberta, 54, 18030 Apricale IM
10. **La Paramira** — Apricale
   - slug: `la-paramira-apricale`
   - indirizzo: Via Casai, 7, 18037 Pigna IM
11. **Locanda Dei Carugi** — Apricale
   - slug: `locanda-dei-carugi-apricale`
   - indirizzo: Via Roma, 12, 18030 Apricale IM
12. **Muntaecara** — Apricale
   - slug: `muntaecara-apricale`
   - indirizzo: A, Via Fiume, 14, 18030 Apricale IM
13. **Normanna** — Apricale
   - slug: `normanna-apricale`
   - indirizzo: Strada Morghe, snc, 18035 Dolceacqua IM
14. **Sul Ponte** — Apricale
   - slug: `sul-ponte-apricale`
   - indirizzo: Via S. Rocco, 18037 Pigna IM
15. **Agriturismo Masseria Cannella** — Apricena
   - slug: `agriturismo-masseria-cannella-apricena`
   - indirizzo: SP35, 71010 Lesina FG
16. **B & B da Rocco** — Apricena
   - slug: `b-b-da-rocco-apricena`
   - indirizzo: Cin:IT071027B400104351, Via U. Foscolo, 20/A, 71010 Lesina FG
17. **B&B Berlen** — Apricena
   - slug: `b-b-berlen-apricena`
   - indirizzo: Via Tommaso Fiore, 3, 71017 Torremaggiore FG
18. **B&B Cavour** — Apricena
   - slug: `b-b-cavour-apricena`
   - indirizzo: Via Cavour, 23, 71017 Torremaggiore FG
19. **B&B Colors** — Apricena
   - slug: `b-b-colors-apricena`
   - indirizzo: Corso Vittorio Emanuele, 35A, 71010 Lesina FG
20. **B&b da nonna rosa** — Apricena
   - slug: `b-b-da-nonna-rosa-apricena`
   - indirizzo: Via Morgagni, 9, 71016 San Severo FG
21. **B&B Federico II** — Apricena
   - slug: `b-b-federico-ii-apricena`
   - indirizzo: Corso Generale Torelli, 71011 Apricena FG
22. **B&B STELLE DELLA DAUNIA** — Apricena
   - slug: `b-b-stelle-della-daunia-apricena`
   - indirizzo: Via Volturno, 76, 71016 San Severo FG
23. **Bed & Breakfast Corso Roma** — Apricena
   - slug: `bed-breakfast-corso-roma-apricena`
   - indirizzo: Piazzale Andrea Costa, 2, 71011 Apricena FG
24. **Bed & Breakfast Porta del Gargano** — Apricena
   - slug: `bed-breakfast-porta-del-gargano-apricena`
   - indirizzo: C.da Iancuglia SS 272 Km 12,50, 71014 San Marco in Lamis FG
25. **Bed Breakfast Al Castello** — Apricena
   - slug: `bed-breakfast-al-castello-apricena`
   - indirizzo: via Mons.Giuseppe, Via Monsignor G. Lariccia, 115, 71017 Torremaggiore FG
26. **Grotta degli Ulivi** — Apricena
   - slug: `grotta-degli-ulivi-apricena`
   - indirizzo: Contrada Dell'Incoronata, 71011 Apricena FG
27. **Happy b&b** — Apricena
   - slug: `happy-b-b-apricena`
   - indirizzo: Via Bezzecca, 9, 71017 Torremaggiore FG
28. **IL PANORAMA** — Apricena
   - slug: `il-panorama-apricena`
   - indirizzo: Via Alberto Sabin, 14, 71017 Torremaggiore FG
29. **L'Ulivo** — Apricena
   - slug: `l-ulivo-apricena`
   - indirizzo: Via Adige, 15, 71016 San Severo FG
30. **Malucri Resort** — Apricena
   - slug: `malucri-resort-apricena`
   - indirizzo: Corso del Popolo, 80, 71014 Borgo Celano FG
31. **Sweet Room - B&B San Severo** — Apricena
   - slug: `sweet-room-b-b-san-severo-apricena`
   - indirizzo: Via Emanuele De Deo, 24, 71016 San Severo FG
32. **Teresa Masselli B&B** — Apricena
   - slug: `teresa-masselli-b-b-apricena`
   - indirizzo: Via Teresa Masselli, 27, 71016 San Severo FG
33. **Agriturismo Il Costrano** — Aprigliano
   - slug: `agriturismo-il-costrano-aprigliano`
   - indirizzo: Cnt Costrano, 87051 Aprigliano CS
34. **Agriturismo Pietro Falcone** — Aprigliano
   - slug: `agriturismo-pietro-falcone-aprigliano`
   - indirizzo: Str. Cimitero, 87053 Celico CS
35. **Alma B&B Home Cosenza** — Aprigliano
   - slug: `alma-b-b-home-cosenza-aprigliano`
   - indirizzo: V. Francesco Cilea, 11, 87100 Cosenza CS