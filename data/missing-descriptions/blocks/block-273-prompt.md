# Blocco 273/500 — 35 strutture senza descrizione IT

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

1. **Albergo Ristorante Valentino** — Bionaz
   - slug: `albergo-ristorante-valentino-bionaz`
   - indirizzo: Frazione Lexert, 5, 11010 Bionaz AO
2. **Appartamenti Vacanze Luseney** — Bionaz
   - slug: `appartamenti-vacanze-luseney-bionaz`
   - indirizzo: Frazione Plan de Veyne Chef Lieu, 13, 11010 Bionaz AO
3. **B&B Clé du Paradis** — Bionaz
   - slug: `b-b-cle-du-paradis-bionaz`
   - indirizzo: 11010 Bionaz AO
4. **B&B La Maison d'Antan** — Bionaz
   - slug: `b-b-la-maison-d-antan-bionaz`
   - indirizzo: Fraz, Balmes, 11010 Bionaz AO
5. **Camping Bar Ristorante Lac Lexert** — Bionaz
   - slug: `camping-bar-ristorante-lac-lexert-bionaz`
   - indirizzo: Frazione Lexert, 14, 11010 Bionaz AO
6. **Hotel Cristina** — Bionaz
   - slug: `hotel-cristina-bionaz`
   - indirizzo: Frazione Champagne, 1, 11020 Verrayes AO
7. **Hotel Rendez-Vous** — Bionaz
   - slug: `hotel-rendez-vous-bionaz`
   - indirizzo: Località Soleil, 3, 11024 Châtillon AO
8. **La Batise** — Bionaz
   - slug: `la-batise-bionaz`
   - indirizzo: Località, Frazione Plan de Veyne Chef Lieu, 11010 Bionaz AO
9. **La Tour** — Bionaz
   - slug: `la-tour-bionaz`
   - indirizzo: loc, Les Gallians, 1, 11010 Oyace AO
10. **Les Vrais Rayons** — Bionaz
   - slug: `les-vrais-rayons-bionaz`
   - indirizzo: Località Capoluogo, 31, 11020 Verrayes AO
11. **Locanda Lac Place Moulin** — Bionaz
   - slug: `locanda-lac-place-moulin-bionaz`
   - indirizzo: localita place moulin, 11010 Bionaz AO
12. **Maison Constance B&B** — Bionaz
   - slug: `maison-constance-b-b-bionaz`
   - indirizzo: Dzovennoz, 12, 11010 Bionaz AO
13. **Restaurant e B&B Alpe Rebelle Mountain Lodge** — Bionaz
   - slug: `restaurant-e-b-b-alpe-rebelle-mountain-lodge-bionaz`
   - indirizzo: Fraz. Loc. Chez-Chenoux, 1, 11010 Bionaz AO
14. **Albergo Trattoria Dazze** — Bione
   - slug: `albergo-trattoria-dazze-bione`
   - indirizzo: Via Angelo Gitti, 25060 Marcheno BS
15. **Hotel Trattoria Marcheno** — Bione
   - slug: `hotel-trattoria-marcheno-bione`
   - indirizzo: Viale Martiri d'Indipendenza, 98, 25060 Marcheno BS
16. **Agriturismo Bonu Suile** — Birori
   - slug: `agriturismo-bonu-suile-birori`
   - indirizzo: Località Caramarzos, 08017 Silanus NU
17. **B&B La Casa Antica** — Birori
   - slug: `b-b-la-casa-antica-birori`
   - indirizzo: Corso Umberto I, 142, 08015 Macomer NU
18. **Casa Castori** — Birori
   - slug: `casa-castori-birori`
   - indirizzo: Via Eleonora D'Arborea, 16, 08015 Macomer NU
19. **Hotel Ristorante Marghine di Mura Luigi & C. S.N.C.** — Birori
   - slug: `hotel-ristorante-marghine-di-mura-luigi-c-s-n-c-birori`
   - indirizzo: Via Vittorio Emanuele II, 3, 08015 Macomer NU
20. **Agriturismo Bozzone** — Bisaccia
   - slug: `agriturismo-bozzone-bisaccia`
   - indirizzo: SS303, 83046 Lacedonia AV
21. **B&B Giulimà** — Bisaccia
   - slug: `b-b-giulima-bisaccia`
   - indirizzo: Via A. Pertini, 35, 71020 Rocchetta Sant'Antonio FG
22. **Hotel Caputo** — Bisaccia
   - slug: `hotel-caputo-bisaccia`
   - indirizzo: Via Torino, 23, 83047 Lioni AV
23. **Il Piccolo Principe** — Bisaccia
   - slug: `il-piccolo-principe-bisaccia`
   - indirizzo: Via Cupa, 107, 83040 Cairano AV
24. **Agriturismo Montalbano** — Bisacquino
   - slug: `agriturismo-montalbano-bisacquino`
   - indirizzo: 92019 Località Scunchipani I AG
25. **Agriturismo Torre Tabia** — Bisacquino
   - slug: `agriturismo-torre-tabia-bisacquino`
   - indirizzo: Contrada San Marco - Ragana, 92019 Sciacca AG
26. **Antico Frantoio Sas / Cantina Murgia Lamanno** — Bisacquino
   - slug: `antico-frantoio-sas-cantina-murgia-lamanno-bisacquino`
   - indirizzo: Contrada Purcaria Mendolazza, Sambuca Di Sicilia, AG 92017, SP44, 92017 Sambuca di Sicilia AG
27. **B&B Benjamas** — Bisacquino
   - slug: `b-b-benjamas-bisacquino`
   - indirizzo: Largo Madonna Dell'aiuto 1bisacquino, 90032 Bisacquino PA
28. **B&B Chiaro di Luna - Corleone** — Bisacquino
   - slug: `b-b-chiaro-di-luna-corleone-bisacquino`
   - indirizzo: Via Discesa, Via D. Oddo, 9, 90034 Corleone PA
29. **Bed and Breakfast Sotto le Stelle** — Bisacquino
   - slug: `bed-and-breakfast-sotto-le-stelle-bisacquino`
   - indirizzo: Via S. Paolo, 35, 92010 Caltabellotta AG
30. **Casa Vacanze Prezioso** — Bisacquino
   - slug: `casa-vacanze-prezioso-bisacquino`
   - indirizzo: Cortile Vetrano, 7, 90032 Bisacquino PA
31. **Corleone bed and breakfast** — Bisacquino
   - slug: `corleone-bed-and-breakfast-bisacquino`
   - indirizzo: Via Ravenna, 6, 90034 Corleone PA
32. **Corleone Guesthouse** — Bisacquino
   - slug: `corleone-guesthouse-bisacquino`
   - indirizzo: Via Santa Lucia, 24, 90034 Corleone PA
33. **DREAM CORLEONE ONE** — Bisacquino
   - slug: `dream-corleone-one-bisacquino`
   - indirizzo: Discesa Santa Maria, 3, 90034 Corleone PA
34. **Fattoria Fratelli Marsolo** — Bisacquino
   - slug: `fattoria-fratelli-marsolo-bisacquino`
   - indirizzo: M7Q7+X2, 90032 Bisacquino PA
35. **Il Noce Antico** — Bisacquino
   - slug: `il-noce-antico-bisacquino`
   - indirizzo: Contrada Quaranta, 90033 Chiusa Sclafani PA