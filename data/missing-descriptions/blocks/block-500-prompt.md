# Blocco 500/500 — 15 strutture senza descrizione IT

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

1. **BoutiqueHOTEL Donauwalzer** — Vienna
   - slug: `boutiquehotel-donauwalzer-vienna`
   - indirizzo: Hernalser Gürtel 27, 1170 Wien
2. **Flemings Selection Hotel Wien-City** — Vienna
   - slug: `flemings-selection-hotel-wien-city-vienna`
   - indirizzo: Josefstädter Str. 10-12, 1080 Wien
3. **Holiday Inn - the niu, Franz Vienna, an IHG Hotel** — Vienna
   - slug: `holiday-inn-the-niu-franz-vienna-an-ihg-hotel-vienna`
   - indirizzo: Dresdner Str. 111, 1200 Wien
4. **Hotel Am Parkring** — Vienna
   - slug: `hotel-am-parkring-vienna`
   - indirizzo: Parkring 12, 1010 Wien
5. **Hotel Astoria Vienna, Curio Collection by Hilton** — Vienna
   - slug: `hotel-astoria-vienna-curio-collection-by-hilton-vienna`
   - indirizzo: Kärntner Strasse 32-34, Führichgasse 1, 1010 Wien
6. **Hotel Das Tigra** — Vienna
   - slug: `hotel-das-tigra-vienna`
   - indirizzo: Tiefer Graben 14-20, 1010 Wien
7. **Hotel Grand Ferdinand Wien** — Vienna
   - slug: `hotel-grand-ferdinand-wien-vienna`
   - indirizzo: Schubertring 10-12, 1010 Wien
8. **Hotel Royal** — Vienna
   - slug: `hotel-royal-vienna`
   - indirizzo: Singerstraße 3/10 Stock, 1010 Wien
9. **Hotel Sans Souci Wien** — Vienna
   - slug: `hotel-sans-souci-wien-vienna`
   - indirizzo: Burggasse 2, 1070 Wien
10. **Jaz in the City Vienna** — Vienna
   - slug: `jaz-in-the-city-vienna-vienna`
   - indirizzo: Windmühlgasse 28, 1060 Wien
11. **Le Méridien Vienna** — Vienna
   - slug: `le-meridien-vienna-vienna`
   - indirizzo: Robert-Stolz-Platz 1, 1010 Wien
12. **Leonardo Hotel Vienna Hauptbahnhof** — Vienna
   - slug: `leonardo-hotel-vienna-hauptbahnhof-vienna`
   - indirizzo: Gerhard-Bronner-Straße 5, 1100 Wien
13. **Rosewood Vienna** — Vienna
   - slug: `rosewood-vienna-vienna`
   - indirizzo: Peterspl. 7, 1010 Wien
14. **The Guesthouse Vienna** — Vienna
   - slug: `the-guesthouse-vienna-vienna`
   - indirizzo: Führichgasse 10, 1010 Wien
15. **The Ritz-Carlton, Vienna** — Vienna
   - slug: `the-ritz-carlton-vienna-vienna`
   - indirizzo: Schubertring 5-7, 1010 Wien