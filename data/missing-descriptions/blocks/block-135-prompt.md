# Blocco 135/500 — 35 strutture senza descrizione IT

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

1. **L'Ulivo Affittacamere** — Arbus
   - slug: `l-ulivo-affittacamere-arbus`
   - indirizzo: Via Guglielmo Marconi, 1, 09035 Gonnosfanadiga VS
2. **S’Ena Hotel Ristorante Pizzeria Grill** — Arbus
   - slug: `s-ena-hotel-ristorante-pizzeria-grill-arbus`
   - indirizzo: Località Sa Perda Marcada s.n. - SS 126, Km 77, 400, 09031 Arbus VS
3. **Sa Rocca Sport & Resort** — Arbus
   - slug: `sa-rocca-sport-resort-arbus`
   - indirizzo: Strada Statale 196 di Villacidro, 09036 Guspini VS
4. **Agriturismo da Merlo** — Arcade
   - slug: `agriturismo-da-merlo-arcade`
   - indirizzo: Via Parmenide, 7, 30174 Venezia VE
5. **Agriturismo Da Zeffi** — Arcade
   - slug: `agriturismo-da-zeffi-arcade`
   - indirizzo: Via Fonfa, 32, 31027 Spresiano TV
6. **Agriturismo Due Carpini** — Arcade
   - slug: `agriturismo-due-carpini-arcade`
   - indirizzo: Via Menegazzi, 21 31049, 31049 Santo Stefano TV
7. **Agriturismo Papaveri e Papere di azienda agricola Bottazzin Raffaela e figli -Caltana Ve** — Arcade
   - slug: `agriturismo-papaveri-e-papere-di-azienda-agricol-arcade`
   - indirizzo: Via Caltana, 1/b, 30036 Caltana VE
8. **Albergo Arcade** — Arcade
   - slug: `albergo-arcade-arcade`
   - indirizzo: Via Lagomaggio, 143/C, 47921 Rimini RN
9. **Arca Guest House** — Arcade
   - slug: `arca-guest-house-arcade`
   - indirizzo: Via Vittorio Veneto, 2, 31022 Frescada TV
10. **Arcade Luxury Loft** — Arcade
   - slug: `arcade-luxury-loft-arcade`
   - indirizzo: Via Mazzini, 106, 88060 Montepaone Lido CZ
11. **Azienda Agricola Ca' Piadera** — Arcade
   - slug: `azienda-agricola-ca-piadera-arcade`
   - indirizzo: Via Piadera, 6, 31020 Nogarolo TV
12. **B & B degli Artisti** — Arcade
   - slug: `b-b-degli-artisti-arcade`
   - indirizzo: Via Trieste, 33, 31030 Arcade TV
13. **B&B Al sogno di Laura** — Arcade
   - slug: `b-b-al-sogno-di-laura-arcade`
   - indirizzo: Via Arrigo Boito, 13, 31100 Treviso TV
14. **B&B Alla Suite** — Arcade
   - slug: `b-b-alla-suite-arcade`
   - indirizzo: Via Mario Gerlin, 11, 31053 Pieve di Soligo TV
15. **B&B Doberdo** — Arcade
   - slug: `b-b-doberdo-arcade`
   - indirizzo: Via Doberdo, 8, 31020 Fontane TV
16. **Borgo Antico** — Arcade
   - slug: `borgo-antico-arcade`
   - indirizzo: Str. Feltrina, 54, 31100 Treviso TV
17. **Casa vacanze La Madonnetta** — Arcade
   - slug: `casa-vacanze-la-madonnetta-arcade`
   - indirizzo: Via del Donatore, 14, 31030 Arcade TV
18. **Col delle Rane** — Arcade
   - slug: `col-delle-rane-arcade`
   - indirizzo: Via Mercato Vecchio, 18, 31031 Caerano di San Marco TV
19. **Crazy Love** — Arcade
   - slug: `crazy-love-arcade`
   - indirizzo: Via Circonvallazione, 83, 80059 Torre del Greco NA
20. **Fiori e Frutti Agri-Resort** — Arcade
   - slug: `fiori-e-frutti-agri-resort-arcade`
   - indirizzo: Via Gatta, 76C, 30170 Venezia VE
21. **TERZOPIANO** — Arcade
   - slug: `terzopiano-arcade`
   - indirizzo: Via dei Dall'Oro, 24, 31100 Treviso TV
22. **Villa Della Zonca** — Arcade
   - slug: `villa-della-zonca-arcade`
   - indirizzo: Via Madonnetta, 51, 31030 Arcade TV
23. **B&B Belvedere** — Arce
   - slug: `b-b-belvedere-arce`
   - indirizzo: Via Costarelle, 29, 03032 Arce FR
24. **b&b da Natalina** — Arce
   - slug: `b-b-da-natalina-arce`
   - indirizzo: Via di Mezzo, 6, 03032 Arce FR
25. **B&B Le Viole** — Arce
   - slug: `b-b-le-viole-arce`
   - indirizzo: Via Milite Ignoto, 23, 03032 Arce FR
26. **Beb Da Tina** — Arce
   - slug: `beb-da-tina-arce`
   - indirizzo: Via Montello, 95, 03038 Roccasecca FR
27. **Casale dei ricordi B&B, Home restaurant** — Arce
   - slug: `casale-dei-ricordi-b-b-home-restaurant-arce`
   - indirizzo: Via Fontanelle, 03032 Arce FR
28. **Hotel Ristorante Borgo Antico** — Arce
   - slug: `hotel-ristorante-borgo-antico-arce`
   - indirizzo: Via Campidoglio, 266, 03024 Ceprano FR
29. **La casa di Mascia** — Arce
   - slug: `la-casa-di-mascia-arce`
   - indirizzo: Via Ortella, 03038 Roccasecca FR
30. **Palazzo Tronconi bed & breakfast** — Arce
   - slug: `palazzo-tronconi-bed-breakfast-arce`
   - indirizzo: Palazzo Tronconi, Via Corte Vecchia, 44, 03032 Arce FR
31. **Villa Anna** — Arce
   - slug: `villa-anna-arce`
   - indirizzo: Via S. Liberatore, 7, 03030 Castrocielo FR
32. **B&B da Girometta** — Arcene
   - slug: `b-b-da-girometta-arcene`
   - indirizzo: In fondo al cortile, Via G. Pascoli, 38, 24040 Pontirolo Nuovo BG
33. **Bed and Breakfast La Delice** — Arcene
   - slug: `bed-and-breakfast-la-delice-arcene`
   - indirizzo: Via Brigata Alpina Orobica, 18 B, 24044 Dalmine BG
34. **Bes Hotel Villa Zoia** — Arcene
   - slug: `bes-hotel-villa-zoia-arcene`
   - indirizzo: Via Cardinal G. Testa, 12, 24040 Boltiere BG
35. **Botanique Hotel Vergani** — Arcene
   - slug: `botanique-hotel-vergani-arcene`
   - indirizzo: Via Adda, 22, 24045 Fara Gera d'Adda BG