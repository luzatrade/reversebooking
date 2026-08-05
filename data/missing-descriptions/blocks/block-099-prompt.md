# Blocco 99/500 — 35 strutture senza descrizione IT

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

1. **Bed & Breakfast Palazzo Sassatelli** — Amatrice
   - slug: `bed-breakfast-palazzo-sassatelli-amatrice`
   - indirizzo: Via Nicola Zabaglia, 10, 06043 Cascia PG
2. **Bed and Breakfast Emilia** — Amatrice
   - slug: `bed-and-breakfast-emilia-amatrice`
   - indirizzo: Via del Campo Sportivo, 2, 67012 Cagnano Amiterno AQ
3. **Hotel Bar “da Giovannino”** — Amatrice
   - slug: `hotel-bar-da-giovannino-amatrice`
   - indirizzo: Frazione S. Cipriano, 10, 02012 Amatrice RI
4. **Hotel Centrale Cascia** — Amatrice
   - slug: `hotel-centrale-cascia-amatrice`
   - indirizzo: Piazza Giuseppe Garibaldi, 9, 06043 Cascia PG
5. **Hotel Da Benito** — Amatrice
   - slug: `hotel-da-benito-amatrice`
   - indirizzo: Via Guglielmo Marconi, 4, 06046 Norcia PG
6. **Hotel Europa Gran Sasso** — Amatrice
   - slug: `hotel-europa-gran-sasso-amatrice`
   - indirizzo: Prati bassi, 64047 Pietracamela TE
7. **[SETTECENTO] Hotel** — Ambivere
   - slug: `settecento-hotel-ambivere`
   - indirizzo: Via Milano, 3, 24030 Presezzo BG
8. **Agriturismo Il Belvedere** — Ambivere
   - slug: `agriturismo-il-belvedere-ambivere`
   - indirizzo: Via Belvedere, 6, 24030 Palazzago BG
9. **Al-Colle** — Ambivere
   - slug: `al-colle-ambivere`
   - indirizzo: giovanni XXlll, Via Fontanella, 15, 24039 Sotto il Monte Giovanni XXIII BG
10. **Bellavista Ristorante Hotel** — Ambivere
   - slug: `bellavista-ristorante-hotel-ambivere`
   - indirizzo: Via Roncola Alta, 1, 24030 Roncola Alta BG
11. **Bes Hotel Terme a Palazzago** — Ambivere
   - slug: `bes-hotel-terme-a-palazzago-ambivere`
   - indirizzo: Via Gromlongo, 20, 24030 Palazzago BG
12. **Binario Magic Hotel** — Ambivere
   - slug: `binario-magic-hotel-ambivere`
   - indirizzo: Via Briantea, 26, 24030 Palazzago BG
13. **Hotel Borgo Brianteo** — Ambivere
   - slug: `hotel-borgo-brianteo-ambivere`
   - indirizzo: Via A. Diaz, 25/A, 24036 Ponte San Pietro BG
14. **Motel Soigne'** — Ambivere
   - slug: `motel-soigne-ambivere`
   - indirizzo: Via Dante Alighieri, 20, 24030 Mapello BG
15. **AGRITUR LA FENICE** — Amblar-Don
   - slug: `agritur-la-fenice-amblar-don`
   - indirizzo: Località Traversara, 58, 38028 Novella TN
16. **Agritur Scoiattolo** — Amblar-Don
   - slug: `agritur-scoiattolo-amblar-don`
   - indirizzo: Via Inama, 10, 38012 Predaia TN
17. **Albergo Stella Alpina** — Amblar-Don
   - slug: `albergo-stella-alpina-amblar-don`
   - indirizzo: Via ai Masi, 1, 38011 Amblar TN
18. **B&B Claudia** — Amblar-Don
   - slug: `b-b-claudia-amblar-don`
   - indirizzo: V. Alla Malga, 18, 38011 Don TN
19. **B&B Lupo** — Amblar-Don
   - slug: `b-b-lupo-amblar-don`
   - indirizzo: Via Roen, 37, 38011 Amblar-Don TN
20. **Casa della Lavanda** — Amblar-Don
   - slug: `casa-della-lavanda-amblar-don`
   - indirizzo: Via A. Manzoni, 8, 38011 Sarnonico TN
21. **Hotel Lady Maria** — Amblar-Don
   - slug: `hotel-lady-maria-amblar-don`
   - indirizzo: Via Giuseppe Garibaldi, 20, 38013 Fondo TN
22. **Hotel Parco Pineta - Pizzeria & Ristorante & Ristorante Indiano - Cavareno** — Amblar-Don
   - slug: `hotel-parco-pineta-pizzeria-ristorante-ristorant-amblar-don`
   - indirizzo: Via al Parco, 13, 38011 Cavareno TN
23. **Hotel Ristorante Stella Alpina** — Amblar-Don
   - slug: `hotel-ristorante-stella-alpina-amblar-don`
   - indirizzo: Via Cesare Battisti, 56, 38011 Sarnonico TN
24. **Hotel Rosa Resort** — Amblar-Don
   - slug: `hotel-rosa-resort-amblar-don`
   - indirizzo: Via de Zinis, 31, 38011 Cavareno TN
25. **Hotel Tannhof** — Amblar-Don
   - slug: `hotel-tannhof-amblar-don`
   - indirizzo: Pianizza di Sopra, 78, 39052 Caldaro BZ
26. **Hotel Waldheim Wellness & Restaurant** — Amblar-Don
   - slug: `hotel-waldheim-wellness-restaurant-amblar-don`
   - indirizzo: Bivio di Ruffrè, 1, 38010 Ruffrè-Mendola TN
27. **La Quiete Resort** — Amblar-Don
   - slug: `la-quiete-resort-amblar-don`
   - indirizzo: Via Guglielmo Marconi, 12, 38010 Romeno TN
28. **Panorama Designhotel** — Amblar-Don
   - slug: `panorama-designhotel-amblar-don`
   - indirizzo: Via Penegal, 21, 39052 Caldaro sulla strada del Vino BZ
29. **Pension Brunnenhof** — Amblar-Don
   - slug: `pension-brunnenhof-amblar-don`
   - indirizzo: Via delle Vigne, 15, 39052 Caldaro sulla strada del Vino BZ
30. **Piccolo Orso Bruno** — Amblar-Don
   - slug: `piccolo-orso-bruno-amblar-don`
   - indirizzo: Via de Zinis, 29, 38011 Cavareno TN
31. **Stella delle Alpi Wellness & Resort** — Amblar-Don
   - slug: `stella-delle-alpi-wellness-resort-amblar-don`
   - indirizzo: Via Mendola, 41, 38010 Ronzone TN
32. **VILLA NUOVA** — Amblar-Don
   - slug: `villa-nuova-amblar-don`
   - indirizzo: Via Mario Zucali, 37, 38010 Romeno TN
33. **VILLA NUOVA - Hotel - Ristorante & Pizzeria** — Amblar-Don
   - slug: `villa-nuova-hotel-ristorante-pizzeria-amblar-don`
   - indirizzo: Via Mario Zucali, 37, 38010 Romeno TN
34. **Abitatt** — Ameglia
   - slug: `abitatt-ameglia`
   - indirizzo: Via Melara, 29, 54035 Borghetto-melara MS
35. **Ala Bianca** — Ameglia
   - slug: `ala-bianca-ameglia`
   - indirizzo: Via Camisano, 94, 19031 Ameglia SP