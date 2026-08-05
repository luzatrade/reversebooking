# Blocco 160/500 — 35 strutture senza descrizione IT

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

1. **Ranuncolo** — Arta Terme
   - slug: `ranuncolo-arta-terme`
   - indirizzo: Via Romano Linussio, 1, 33020 Sutrio UD
2. **Residence Da Benito** — Arta Terme
   - slug: `residence-da-benito-arta-terme`
   - indirizzo: Via Città di Noale, 9, 33022 Arta Terme UD
3. **Agriturismo Bressani** — Artegna
   - slug: `agriturismo-bressani-artegna`
   - indirizzo: Via dei Conti, 23, 33045 Nimis UD
4. **Al Collio Ristorante Hotel Pizzeria** — Artegna
   - slug: `al-collio-ristorante-hotel-pizzeria-artegna`
   - indirizzo: Via Centrale, 22, 33010 Reana del Rojale UD
5. **Albergo Centrale** — Artegna
   - slug: `albergo-centrale-artegna`
   - indirizzo: Via Giuseppe Garibaldi, 1, 33017 Tarcento UD
6. **Albergo Ristorante Belvedere** — Artegna
   - slug: `albergo-ristorante-belvedere-artegna`
   - indirizzo: Via Belvedere, 21, 33019 Tricesimo UD
7. **Albergo Ristorante Pizzeria Bar Sottocastello** — Artegna
   - slug: `albergo-ristorante-pizzeria-bar-sottocastello-artegna`
   - indirizzo: Viale Udine, 15, 33010 Cassacco UD
8. **Albergo Trattoria Al Castello** — Artegna
   - slug: `albergo-trattoria-al-castello-artegna`
   - indirizzo: Via Sottocastello, 26, 33010 Artegna UD
9. **All'antico ulivo** — Artegna
   - slug: `all-antico-ulivo-artegna`
   - indirizzo: Via Aplia Inferiore, 33011 Artegna UD
10. **B&B PRETITE** — Artegna
   - slug: `b-b-pretite-artegna`
   - indirizzo: Via del Trovo, 27, 33011 Artegna UD
11. **Bihotel** — Artegna
   - slug: `bihotel-artegna`
   - indirizzo: Via Carnia, 22, Via Osoppo, 18, 33030 Majano UD
12. **Cajeta Di Salone Luca E Emiliano & C. Snc** — Artegna
   - slug: `cajeta-di-salone-luca-e-emiliano-c-snc-artegna`
   - indirizzo: Piazza Mercato, 2, 33030 Buia UD
13. **Costantini Ristorante Albergo** — Artegna
   - slug: `costantini-ristorante-albergo-artegna`
   - indirizzo: Via Pontebbana, 12, 33017 Collalto UD
14. **Hotel & Caffé Pittini - Nuova gestione** — Artegna
   - slug: `hotel-caffe-pittini-nuova-gestione-artegna`
   - indirizzo: Piazzale della Stazione, 10, 33013 Gemona del Friuli UD
15. **Hotel Al Tarcentino** — Artegna
   - slug: `hotel-al-tarcentino-artegna`
   - indirizzo: Via Dante Alighieri, 18, 33017 Tarcento UD
16. **Hotel Da Si-Si** — Artegna
   - slug: `hotel-da-si-si-artegna`
   - indirizzo: Via Piovega, 19, 33013 Gemona del Friuli UD
17. **Hotel Pittis** — Artegna
   - slug: `hotel-pittis-artegna`
   - indirizzo: Via Andervolti, 2, 33010 Osoppo UD
18. **L'Oro do Nonna Adele** — Artegna
   - slug: `l-oro-do-nonna-adele-artegna`
   - indirizzo: 67CC+8M, 33045 Nimis UD
19. **La Vie en Rose B&B** — Artegna
   - slug: `la-vie-en-rose-b-b-artegna`
   - indirizzo: Via Tonzolano, 7, 33030 Buia UD
20. **Albergo Chiocchiò** — Artena
   - slug: `albergo-chiocchio-artena`
   - indirizzo: Via Santa Maria, 40, 00031 Artena RM
21. **B&B Del Corso - Colleferro** — Artena
   - slug: `b-b-del-corso-colleferro-artena`
   - indirizzo: Via Enrico Ferri, 8/10, 00034 Colleferro RM
22. **B&B dell'Artista** — Artena
   - slug: `b-b-dell-artista-artena`
   - indirizzo: Via Giuseppe Verdi, 12, 00031 Artena RM
23. **B&B IL Falco e l'Ulivo** — Artena
   - slug: `b-b-il-falco-e-l-ulivo-artena`
   - indirizzo: Via Boschetto, 21, 04010 Rocca Massima LT
24. **B&B Joy Country House** — Artena
   - slug: `b-b-joy-country-house-artena`
   - indirizzo: Via Palianese km 2 c.da Fontana degli Angeli, SP21, snc, 00034 Colleferro RM
25. **B&B La Chioccia - Affittacamere** — Artena
   - slug: `b-b-la-chioccia-affittacamere-artena`
   - indirizzo: Via Genazzano, 23, 00038 Valmontone RM
26. **B&B Relais Il Monaco** — Artena
   - slug: `b-b-relais-il-monaco-artena`
   - indirizzo: Via Monaco, 1, 00031 Artena RM
27. **B&B Rupe Antica di Enrica Latini** — Artena
   - slug: `b-b-rupe-antica-di-enrica-latini-artena`
   - indirizzo: Via Rupe, 27, 00031 Artena RM
28. **B&B Terra del Sole Valmontone** — Artena
   - slug: `b-b-terra-del-sole-valmontone-artena`
   - indirizzo: Via Artena, 68b, 00038 Valmontone RM
29. **Borgo Castello Sidra** — Artena
   - slug: `borgo-castello-sidra-artena`
   - indirizzo: Via Giulianello, 345, 00031 Artena RM
30. **Fashion Hotel** — Artena
   - slug: `fashion-hotel-artena`
   - indirizzo: Via della Pace, 1-2, 00038 Valmontone RM
31. **HOST'n GO** — Artena
   - slug: `host-n-go-artena`
   - indirizzo: Via delle Melazze, 4, 00034 Colleferro Scalo RM
32. **Hotel 1000 mt casello A1 autostrada Valmontone un minuto dal parco rainbow magicland -( Hotel Magnolia Valmontone)** — Artena
   - slug: `hotel-1000-mt-casello-a1-autostrada-valmontone-u-artena`
   - indirizzo: Via Aldo Moro, 61, 00038 Valmontone RM
33. **Hotel degli Amici** — Artena
   - slug: `hotel-degli-amici-artena`
   - indirizzo: Via Latina, 106, 00031 Artena RM
34. **Hotel La Quercia** — Artena
   - slug: `hotel-la-quercia-artena`
   - indirizzo: Via della Pace, Snc, 00038 Valmontone RM
35. **Il Faggio 17 B&B Artena** — Artena
   - slug: `il-faggio-17-b-b-artena-artena`
   - indirizzo: Via Colle del faggio17, 00031 Artena RM