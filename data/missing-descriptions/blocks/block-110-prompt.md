# Blocco 110/500 — 35 strutture senza descrizione IT

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

1. **Hotel Garni Andrianerhof** — Andriano/Andrian
   - slug: `hotel-garni-andrianerhof-andriano-andrian`
   - indirizzo: Via Gisshübel, 2, 39010 Andriano BZ
2. **Hotel Garni Sonngart** — Andriano/Andrian
   - slug: `hotel-garni-sonngart-andriano-andrian`
   - indirizzo: Via Vigneti, 4, 39010 Andriano BZ
3. **Hotel Stamserhof** — Andriano/Andrian
   - slug: `hotel-stamserhof-andriano-andrian`
   - indirizzo: Via del Sole, 2, 39010 Andriano BZ
4. **Landhaus Weingut** — Andriano/Andrian
   - slug: `landhaus-weingut-andriano-andrian`
   - indirizzo: Str. del Vino, 32 A, 39057 Appiano sulla strada del vino BZ
5. **PENSION FELSENEGG** — Andriano/Andrian
   - slug: `pension-felsenegg-andriano-andrian`
   - indirizzo: V. Casatsch, 8, 39010 Prissiano BZ
6. **Pension Grünwald** — Andriano/Andrian
   - slug: `pension-grunwald-andriano-andrian`
   - indirizzo: Via dei Bottai, 18, 39010 Andriano BZ
7. **Pension Runer** — Andriano/Andrian
   - slug: `pension-runer-andriano-andrian`
   - indirizzo: Via Silberleiten, 3, 39018 Terlano BZ
8. **Pension Zeder** — Andriano/Andrian
   - slug: `pension-zeder-andriano-andrian`
   - indirizzo: Via Wolfsthurn, 4, 39010 Andriano BZ
9. **Pensione Sunnwend** — Andriano/Andrian
   - slug: `pensione-sunnwend-andriano-andrian`
   - indirizzo: V. San Martino, 8, 39010 Prissiano BZ
10. **Rosengartenrhof** — Andriano/Andrian
   - slug: `rosengartenrhof-andriano-andrian`
   - indirizzo: Via Wolfsthurn, 11, 39010 Andriano BZ
11. **Schwarzer Adler** — Andriano/Andrian
   - slug: `schwarzer-adler-andriano-andrian`
   - indirizzo: Piazza S. Urbano, 4, 39010 Andriano BZ
12. **Agriturismo Lerno** — Anela
   - slug: `agriturismo-lerno-anela`
   - indirizzo: Loc. Nuraghe Lerno Circumlacuale, 07016 Pattada SS
13. **Agriturismo Sa E'Padedda** — Anela
   - slug: `agriturismo-sa-e-padedda-anela`
   - indirizzo: SP6, 07013 Mores SS
14. **Albergo La Madonnina** — Anela
   - slug: `albergo-la-madonnina-anela`
   - indirizzo: Corso Presidente A. Segni, 11, 07020 Buddusò OT
15. **Albergo Ristorante Terradoro** — Anela
   - slug: `albergo-ristorante-terradoro-anela`
   - indirizzo: SP1, 07014 Ozieri SS
16. **B&B dal Cardinale** — Anela
   - slug: `b-b-dal-cardinale-anela`
   - indirizzo: Via Cirenaica, 8, 07014 Ozieri SS
17. **B&B Medeles** — Anela
   - slug: `b-b-medeles-anela`
   - indirizzo: Via Ogliastra, 2, 07011 Bono SS
18. **Bed & Breakfast Montiju** — Anela
   - slug: `bed-breakfast-montiju-anela`
   - indirizzo: Via Alessandro Volta, 11, 07014 Ozieri SS
19. **Da laura** — Anela
   - slug: `da-laura-anela`
   - indirizzo: Via Funtana Etza, 8, 07010 Bottidda SS
20. **Domos Antigas** — Anela
   - slug: `domos-antigas-anela`
   - indirizzo: Via R. Elena, 57, 07010 Bottidda SS
21. **Hotel Funtana 'e Donne** — Anela
   - slug: `hotel-funtana-e-donne-anela`
   - indirizzo: località Funtana 'e Donne, 08020 Ottana NU
22. **Hotel Ristorante Le Tre Rose** — Anela
   - slug: `hotel-ristorante-le-tre-rose-anela`
   - indirizzo: Via Aldo Moro, 07011 Bono SS
23. **Hotel Ristorante Liberty** — Anela
   - slug: `hotel-ristorante-liberty-anela`
   - indirizzo: Via S. Martino, 7, 07016 Pattada SS
24. **Monte Pirastru - Country Resort** — Anela
   - slug: `monte-pirastru-country-resort-anela`
   - indirizzo: Loc, 07010 Nughedu di San Nicolo' SS
25. **Ristorante Hotel La Pineta** — Anela
   - slug: `ristorante-hotel-la-pineta-anela`
   - indirizzo: Via Belvedere, 1, 07016 Pattada SS
26. **S'apposentu 'e Santa Ruche** — Anela
   - slug: `s-apposentu-e-santa-ruche-anela`
   - indirizzo: Via Fratelli Cambosu, 18, 08020 Oniferi NU
27. **Sanctuary Armony** — Anela
   - slug: `sanctuary-armony-anela`
   - indirizzo: Via Parrocchia, 29, 07011 Bono SS
28. **Terme Aurora** — Anela
   - slug: `terme-aurora-anela`
   - indirizzo: Località San Saturnino, 07010 Benetutti SS
29. **Albergo Ampola** — Anfo
   - slug: `albergo-ampola-anfo`
   - indirizzo: Via Str. per Tremalzo, 6, 38067 Tiarno di Sopra TN
30. **Albergo Piccolo Hotel** — Anfo
   - slug: `albergo-piccolo-hotel-anfo`
   - indirizzo: Via Cerreto, 6, 25072 Bagolino BS
31. **Albergo Ristorante Belvedere** — Anfo
   - slug: `albergo-ristorante-belvedere-anfo`
   - indirizzo: Via Maniva, 75, 25060 Collio BS
32. **B&B Re' Perone** — Anfo
   - slug: `b-b-re-perone-anfo`
   - indirizzo: Via S. Antonio, 48, 25070 Anfo BS
33. **Bed & Breakfast Fiore** — Anfo
   - slug: `bed-breakfast-fiore-anfo`
   - indirizzo: Via Castello, 10, 25074 Crone BS
34. **Bed and Breakfast "Porto Vecchio"** — Anfo
   - slug: `bed-and-breakfast-porto-vecchio-anfo`
   - indirizzo: Via Lago, 13, 25070 Anfo BS
35. **Ca' del Ri** — Anfo
   - slug: `ca-del-ri-anfo`
   - indirizzo: Via Costa, 97/99, 25084 Gargnano BS