# Blocco 491/500 — 35 strutture senza descrizione IT

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

1. **La Casa del Viandante** — Modena
   - slug: `la-casa-del-viandante-modena`
   - indirizzo: Via Emilia Ovest, 500, 41123 Modena MO, Italia
2. **La Corte Dei Sogni** — Modena
   - slug: `la-corte-dei-sogni-modena`
   - indirizzo: Stradello Romano, 8, 41122 Modena MO, Italia
3. **Loft Albinelli** — Modena
   - slug: `loft-albinelli-modena`
   - indirizzo: Via Luigi Albinelli, 40, 41121 Modena MO, Italia
4. **Pisacane61** — Modena
   - slug: `pisacane61-modena`
   - indirizzo: Via Carlo Pisacane, 61, 41122 Modena MO, Italia
5. **Residence Da Giò - B&B a Modena vicino all'Hesperia e al centro storico-Case Vacanze A Modena** — Modena
   - slug: `residence-da-gio-b-b-a-modena-vicino-all-hesperi-modena`
   - indirizzo: Via Archirola, 29, 41124 Modena MO, Italia
6. **Room & breakfast canalino 21** — Modena
   - slug: `room-breakfast-canalino-21-modena`
   - indirizzo: Via Canalino, 21, 41121 Modena MO, Italia
7. **Salotto delle Arti** — Modena
   - slug: `salotto-delle-arti-modena`
   - indirizzo: Rua del Muro, 86, 41121 Modena MO, Italia
8. **Villa Argiolas Bed & Breakfast** — Modena
   - slug: `villa-argiolas-bed-breakfast-modena`
   - indirizzo: Via Alessandro Argiolas, 34, 41126 Modena MO, Italia
9. **villa sofia b&b** — Modena
   - slug: `villa-sofia-b-b-modena`
   - indirizzo: Via M. Bonacini, 6, 41121 Modena MO, Italia
10. **Bold Hotel München Zentrum** — Munich
   - slug: `bold-hotel-munchen-zentrum-munich`
   - indirizzo: Lindwurmstraße 70A, 80337 München-Ludwigsvorstadt-Isarvorstadt
11. **Hotel Brack** — Munich
   - slug: `hotel-brack-munich`
   - indirizzo: Lindwurmstraße 153, 80337 München
12. **Hotel Eder** — Munich
   - slug: `hotel-eder-munich`
   - indirizzo: Zweigstraße 8, 80336 München-Ludwigsvorstadt-Isarvorstadt
13. **Hotel Europäischer Hof** — Munich
   - slug: `hotel-europaischer-hof-munich`
   - indirizzo: Bayerstraße 31, 80335 München-Ludwigsvorstadt-Isarvorstadt
14. **Hotel Excelsior Munich** — Munich
   - slug: `hotel-excelsior-munich-munich`
   - indirizzo: Schützenstr 11, 80335 München-Ludwigsvorstadt-Isarvorstadt
15. **Hotel Gio** — Munich
   - slug: `hotel-gio-munich`
   - indirizzo: Häberlstraße 9, 80337 München-Ludwigsvorstadt-Isarvorstadt
16. **Hotel Italia** — Munich
   - slug: `hotel-italia-munich`
   - indirizzo: Schillerstraße 19, 80336 München
17. **Hotel Mariandl** — Munich
   - slug: `hotel-mariandl-munich`
   - indirizzo: Goethestraße 51, 80336 München-Ludwigsvorstadt-Isarvorstadt
18. **Hotel S16** — Munich
   - slug: `hotel-s16-munich`
   - indirizzo: Schillerstraße 16, 80336 München
19. **Hotel Wallis** — Munich
   - slug: `hotel-wallis-munich`
   - indirizzo: Schwanthalerstraße 8, 80336 München
20. **Hotel Westend - München** — Munich
   - slug: `hotel-westend-munchen-munich`
   - indirizzo: Schwanthalerstraße 121, 80339 München
21. **Koenigshof, a Luxury Collection Hotel, Munich** — Munich
   - slug: `koenigshof-a-luxury-collection-hotel-munich-munich`
   - indirizzo: Karlsplatz 25, 80335 München
22. **Munich Deluxe Hotel** — Munich
   - slug: `munich-deluxe-hotel-munich`
   - indirizzo: Schwanthalerstraße 116, 80339 München-Schwanthalerhöhe
23. **Platzl Hotel** — Munich
   - slug: `platzl-hotel-munich`
   - indirizzo: Sparkassenstraße 10, 80331 München-Altstadt-Lehel
24. **Schmellergarten** — Munich
   - slug: `schmellergarten-munich`
   - indirizzo: Schmellerstraße 20, 80337 München-Ludwigsvorstadt-Isarvorstadt
25. **1 Hotel Central Park** — New York
   - slug: `1-hotel-central-park-new-york`
   - indirizzo: 1414 6th Ave, New York, NY 10019
26. **Ameritania Hotel at Times Square** — New York
   - slug: `ameritania-hotel-at-times-square-new-york`
   - indirizzo: 230 W 54th St, New York, NY 10019
27. **Belvedere Hotel** — New York
   - slug: `belvedere-hotel-new-york`
   - indirizzo: 319 W 48th St, New York, NY 10036
28. **Dream Midtown, by Hyatt** — New York
   - slug: `dream-midtown-by-hyatt-new-york`
   - indirizzo: 210 W 55th St, New York, NY 10019
29. **Hampton Inn Manhattan/Times Square Central** — New York
   - slug: `hampton-inn-manhattan-times-square-central-new-york`
   - indirizzo: 220 W 41st St, New York, NY 10036
30. **Hilton Club The Central at 5th New York** — New York
   - slug: `hilton-club-the-central-at-5th-new-york-new-york`
   - indirizzo: 12 E 48th St, New York, NY 10017
31. **Hilton Garden Inn New York/Central Park South-Midtown West** — New York
   - slug: `hilton-garden-inn-new-york-central-park-south-mi-new-york`
   - indirizzo: 237 W 54th St, New York, NY 10019
32. **Hotel Riu Plaza New York Times Square** — New York
   - slug: `hotel-riu-plaza-new-york-times-square-new-york`
   - indirizzo: 305 W 46th St, New York, NY 10036
33. **Paramount Times Square - A Generator Hotel** — New York
   - slug: `paramount-times-square-a-generator-hotel-new-york`
   - indirizzo: 235 W 46th St, New York, NY 10036
34. **Park Central Hotel New York** — New York
   - slug: `park-central-hotel-new-york-new-york`
   - indirizzo: 870 7th Ave, New York, NY 10019
35. **Sanctuary Hotel New York** — New York
   - slug: `sanctuary-hotel-new-york-new-york`
   - indirizzo: 132 W 47th St, New York, NY 10036