# Blocco 257/500 — 35 strutture senza descrizione IT

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

1. **B&B Villa Teresa** — Berchidda
   - slug: `b-b-villa-teresa-berchidda`
   - indirizzo: Viale Italia, 30, 07027 Oschiri OT
2. **Bed & Breakfast Su Dezzi** — Berchidda
   - slug: `bed-breakfast-su-dezzi-berchidda`
   - indirizzo: 07022 Berchidda OT
3. **Borgo Lu Puleu** — Berchidda
   - slug: `borgo-lu-puleu-berchidda`
   - indirizzo: Loc. Su Puleu, 07034 Perfugas SS
4. **Cantina Perandria** — Berchidda
   - slug: `cantina-perandria-berchidda`
   - indirizzo: Strada Statale 389 di Buddusò e del Correboi, 07020 Monti OT
5. **Hotel Ristorante Nuovo Limbara** — Berchidda
   - slug: `hotel-ristorante-nuovo-limbara-berchidda`
   - indirizzo: Via Coghinas, 1, 07022 Berchidda OT
6. **HOTEL SOS CHELVOS** — Berchidda
   - slug: `hotel-sos-chelvos-berchidda`
   - indirizzo: Via Umberto I, 52, 07022 Berchidda OT
7. **Kenza Rooms** — Berchidda
   - slug: `kenza-rooms-berchidda`
   - indirizzo: Via Poerio, 5, 07029 Tempio Pausania OT
8. **La dolce vita** — Berchidda
   - slug: `la-dolce-vita-berchidda`
   - indirizzo: Via Fertilia, 6, 07029 Tempio Pausania OT
9. **Vallicciola - Monte Limbara Nature Hotel** — Berchidda
   - slug: `vallicciola-monte-limbara-nature-hotel-berchidda`
   - indirizzo: Località Vallicciola, Monte Limbara, 07029 Tempio Pausania OT
10. **Vermentino in Jazz** — Berchidda
   - slug: `vermentino-in-jazz-berchidda`
   - indirizzo: Via del Vermentino, 07022 Berchidda OT
11. **Albergo Ristorante Della Torre** — Beregazzo con Figliaro
   - slug: `albergo-ristorante-della-torre-beregazzo-con-figliaro`
   - indirizzo: Via Vittorio Emanuele II, 3, 22012 Cernobbio CO
12. **Il Cortile B&B da Manu, Maggy & Hope** — Beregazzo con Figliaro
   - slug: `il-cortile-b-b-da-manu-maggy-hope-beregazzo-con-figliaro`
   - indirizzo: Via Buschi Attilio, 1, 22100 Como CO
13. **Agriturismo Cascina Mora** — Bereguardo
   - slug: `agriturismo-cascina-mora-bereguardo`
   - indirizzo: Str. Cascina Mora, 800, 27100 Pavia PV
14. **B&B Due Fiumi 1908** — Bereguardo
   - slug: `b-b-due-fiumi-1908-bereguardo`
   - indirizzo: Via Garibaldi, 20, 27020 Travacò Siccomario PV
15. **bed and breakfast la casa dei frutti di bosco** — Bereguardo
   - slug: `bed-and-breakfast-la-casa-dei-frutti-di-bosco-bereguardo`
   - indirizzo: Via Palestro, 20, 27026 Garlasco PV
16. **Un letto nel cortile - Casa vacanze** — Bereguardo
   - slug: `un-letto-nel-cortile-casa-vacanze-bereguardo`
   - indirizzo: Vicolo Cortile, 21, 27021 Bereguardo PV
17. **Agorà Cafè & Hotel - Calamandrana** — Bergamasco
   - slug: `agora-cafe-hotel-calamandrana-bergamasco`
   - indirizzo: Piazza Dante, 6, 14042 Calamandrana AT
18. **Agriturismo "Le Due Cascine"** — Bergamasco
   - slug: `agriturismo-le-due-cascine-bergamasco`
   - indirizzo: Regione Mariano, 14053 San Marzano Oliveto AT
19. **Allegro Holiday** — Bergamasco
   - slug: `allegro-holiday-bergamasco`
   - indirizzo: Strada Baglio, Regione Croci, 66, 14049 Nizza Monferrato AT
20. **Almaranto Relais Boutique Hotel** — Bergamasco
   - slug: `almaranto-relais-boutique-hotel-bergamasco`
   - indirizzo: Regione Quartino, 6, 14042 Calamandrana AT
21. **B&B Il Boschetto** — Bergamasco
   - slug: `b-b-il-boschetto-bergamasco`
   - indirizzo: Strada Provinciale Nizza-Alessandria, 14046 Bruno AT
22. **CASCINA BELVEDERE** — Bergamasco
   - slug: `cascina-belvedere-bergamasco`
   - indirizzo: Cascina Belvedere, 18, 15044 Quargnento AL
23. **Castello di Oviglio** — Bergamasco
   - slug: `castello-di-oviglio-bergamasco`
   - indirizzo: Via XXIV Maggio, 1, 15026 Oviglio AL
24. **Il Noccioletto** — Bergamasco
   - slug: `il-noccioletto-bergamasco`
   - indirizzo: Via Alessandria, 51, 14046 Cascina Gherlobbia AT
25. **Locanda Cossetti Ranch Winery** — Bergamasco
   - slug: `locanda-cossetti-ranch-winery-bergamasco`
   - indirizzo: Regione Zucca, 1, 14045 Incisa Scapaccino AT
26. **Monferrato Guest House - Il Murôn** — Bergamasco
   - slug: `monferrato-guest-house-il-muron-bergamasco`
   - indirizzo: Via Cavour, 56, 15026 Carentino AL
27. **Agriturismo Corte Matiola** — Bergantino
   - slug: `agriturismo-corte-matiola-bergantino`
   - indirizzo: Strada Libioli, 15, 46020 Libioli MN
28. **Agriturismo Olianina** — Bergantino
   - slug: `agriturismo-olianina-bergantino`
   - indirizzo: Via Gaiardina, 4, 46036 Borgo Mantovano MN
29. **Albergo Cavallucci** — Bergantino
   - slug: `albergo-cavallucci-bergantino`
   - indirizzo: Via XXIX Luglio 1848, 29, 46028 Sermide MN
30. **Albergo Hotel La Gardenia** — Bergantino
   - slug: `albergo-hotel-la-gardenia-bergantino`
   - indirizzo: Via Arginino, 4304, 45032 Bergantino RO
31. **B&B da Mary** — Bergantino
   - slug: `b-b-da-mary-bergantino`
   - indirizzo: Via Santo, 2, 37060 Pampuro VR
32. **B&B Le Tortore** — Bergantino
   - slug: `b-b-le-tortore-bergantino`
   - indirizzo: Via Gilseppe Sani, 27, 45037 Melara RO
33. **Green House in Campagna** — Bergantino
   - slug: `green-house-in-campagna-bergantino`
   - indirizzo: Via Dell'Artigianato, 7, 45037 Melara RO
34. **Hotel Doria Ristorante** — Bergantino
   - slug: `hotel-doria-ristorante-bergantino`
   - indirizzo: Str. Abetone Brennero Est, 63, 46035 Ostiglia MN
35. **Hotel Meridiana** — Bergantino
   - slug: `hotel-meridiana-bergantino`
   - indirizzo: Via prov. Eridania 2 ( Interno Via Saba ), 45035 Castelmassa RO