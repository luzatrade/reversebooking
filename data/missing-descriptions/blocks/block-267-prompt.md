# Blocco 267/500 — 35 strutture senza descrizione IT

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

1. **Agri Art Hotel Croce Vallone** — Biancavilla
   - slug: `agri-art-hotel-croce-vallone-biancavilla`
   - indirizzo: Contrada Croce Vallone, 95033 Biancavilla CT
2. **Agriturismo Travaglianti Etna's Excellence** — Biancavilla
   - slug: `agriturismo-travaglianti-etna-s-excellence-biancavilla`
   - indirizzo: Contrada Cavaliere - Bosco, 95038 Santa Maria di Licodia CT
3. **Bianca di Navarra House** — Biancavilla
   - slug: `bianca-di-navarra-house-biancavilla`
   - indirizzo: Via Brescia, 32, 95033 Biancavilla CT
4. **La Ginestra dell'Etna** — Biancavilla
   - slug: `la-ginestra-dell-etna-biancavilla`
   - indirizzo: C.da pulica, Snc, 95033 Biancavilla CT
5. **Residence Serra La Nave** — Biancavilla
   - slug: `residence-serra-la-nave-biancavilla`
   - indirizzo: contrada Serra La Nave, Piano Vetore, 95030 Ragalna CT
6. **B&B LA COLONNA** — Bianchi
   - slug: `b-b-la-colonna-bianchi`
   - indirizzo: Piazza dei Mille, 14/B, 88049 Soveria Mannelli CZ
7. **Bed and breakfast, da Peppino** — Bianchi
   - slug: `bed-and-breakfast-da-peppino-bianchi`
   - indirizzo: p.zza Roma, 2, 87050 Bianchi CS
8. **Bed Breakfast "Castagna "** — Bianchi
   - slug: `bed-breakfast-castagna-bianchi`
   - indirizzo: SS 109 della Piccola Sila, 31, 88040 Castagna CZ
9. **Chalet Lago** — Bianchi
   - slug: `chalet-lago-bianchi`
   - indirizzo: Località Carbonello All'interno del Sila Science Park 88055, 88055 Taverna CZ
10. **La Rosa nel Bicchiere** — Bianchi
   - slug: `la-rosa-nel-bicchiere-bianchi`
   - indirizzo: Località Polso, 88049 Soveria Mannelli CZ
11. **Ristorante Hotel Caligiuri** — Bianchi
   - slug: `ristorante-hotel-caligiuri-bianchi`
   - indirizzo: Piazza della Vittoria, 5, 88041 Decollatura CZ
12. **Tirituffo - B&B di campagna** — Bianchi
   - slug: `tirituffo-b-b-di-campagna-bianchi`
   - indirizzo: Via Provinciale, 53, 88049 Soveria Mannelli CZ
13. **Albergo San Giorgio** — Bianco
   - slug: `albergo-san-giorgio-bianco`
   - indirizzo: 89036 Brancaleone Marina RC, Italia
14. **B&B L'Oleandro Bianco** — Bianco
   - slug: `b-b-l-oleandro-bianco-bianco`
   - indirizzo: Via Lungomare Contrada Straci, s.n.c, 89030 Condofuri Marina RC
15. **Lovely Bianco - Rooms & Apartment** — Bianco
   - slug: `lovely-bianco-rooms-apartment-bianco`
   - indirizzo: Via C. Colombo, 99, 89032 Bianco RC
16. **Zefiro Residence** — Bianco
   - slug: `zefiro-residence-bianco`
   - indirizzo: Via Mediterraneo, 80, 89048 Siderno RC
17. **Hotel Novarello** — Biandrate
   - slug: `hotel-novarello-biandrate`
   - indirizzo: Via Dante Graziosi, 3, 28060 Granozzo con Monticello NO
18. **La Cupola** — Biandrate
   - slug: `la-cupola-biandrate`
   - indirizzo: Corso Milano, 43, 28100 Novara NO
19. **Motel Piranha** — Biandrate
   - slug: `motel-piranha-biandrate`
   - indirizzo: Strada Reg. 11 Novara-Vercelli, Snc, 28060 Orfengo NO
20. **B&B Art Garage Varese** — Biandronno
   - slug: `b-b-art-garage-varese-biandronno`
   - indirizzo: Via Rimembranze, 21, 21024 Biandronno VA
21. **Corte dei Brut** — Biandronno
   - slug: `corte-dei-brut-biandronno`
   - indirizzo: Via al Lago, 21, 21026 Gavirate VA
22. **Equirelais Dimora di Campagna - Suite e bistro'** — Biandronno
   - slug: `equirelais-dimora-di-campagna-suite-e-bistro-biandronno`
   - indirizzo: Via Scerèe, 66, 21020 Bodio Lomnago VA
23. **Green Hotel** — Biandronno
   - slug: `green-hotel-biandronno`
   - indirizzo: di Vergiate VA IT, Via S. Rocco, 29, 21029 Corgeno VA
24. **Residence Le Arcate** — Biandronno
   - slug: `residence-le-arcate-biandronno`
   - indirizzo: Via Guglielmo Marconi, 17, 21026 Gavirate VA
25. **B&B Cascina Piazzoli** — Bianzano
   - slug: `b-b-cascina-piazzoli-bianzano`
   - indirizzo: Via Torrezzo, 5, 24060 Monasterolo del Castello BG
26. **B&B La Bouganville** — Bianzano
   - slug: `b-b-la-bouganville-bianzano`
   - indirizzo: Via degli Alpini, 31, 24060 Vigolo BG
27. **B&B Notte e Dì** — Bianzano
   - slug: `b-b-notte-e-di-bianzano`
   - indirizzo: Via Armando Diaz, 32, 24060 Spinone Al Lago BG
28. **B&B Palazzo Eleonora** — Bianzano
   - slug: `b-b-palazzo-eleonora-bianzano`
   - indirizzo: Via Tribulina, 12, 24060 Monasterolo del Castello BG
29. **Hotel Miralago Ristorante** — Bianzano
   - slug: `hotel-miralago-ristorante-bianzano`
   - indirizzo: Via IV Novembre, 12, 24060 Bossico BG
30. **Hotel Ristorante Pizzeria Azzurra** — Bianzano
   - slug: `hotel-ristorante-pizzeria-azzurra-bianzano`
   - indirizzo: Via Nazionale, 25, 24060 Spinone al Lago BG
31. **Villa Harriet** — Bianzano
   - slug: `villa-harriet-bianzano`
   - indirizzo: Via San Rocco, 14, 24060 Sovere BG
32. **Vulcano Village** — Bianzano
   - slug: `vulcano-village-bianzano`
   - indirizzo: Piazza del Porto, 18, 24063 Castro BG
33. **Agriturismo prada** — Bianzone
   - slug: `agriturismo-prada-bianzone`
   - indirizzo: Via Prada, 21, 23030 Bianzone SO
34. **Albergo Ristorante S.Michele di Giovanni Della Bosca** — Bianzone
   - slug: `albergo-ristorante-s-michele-di-giovanni-della-b-bianzone`
   - indirizzo: Via Rasica, 1, 23037 Tirano SO
35. **Antico Filare** — Bianzone
   - slug: `antico-filare-bianzone`
   - indirizzo: Via Gianotti, 1, 23030 Bianzone SO