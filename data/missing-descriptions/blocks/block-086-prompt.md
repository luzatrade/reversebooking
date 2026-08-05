# Blocco 86/500 — 35 strutture senza descrizione IT

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

1. **Cascina Manu** — Altavilla Monferrato
   - slug: `cascina-manu-altavilla-monferrato`
   - indirizzo: Varenghino e Buscarolo, 84, 15030 Rosignano Monferrato AL
2. **Cascina Trapella** — Altavilla Monferrato
   - slug: `cascina-trapella-altavilla-monferrato`
   - indirizzo: Str. S. Martino, 40, 15033 Roncaglia AL
3. **I Castagnoni - Country Resort & Wellness** — Altavilla Monferrato
   - slug: `i-castagnoni-country-resort-wellness-altavilla-monferrato`
   - indirizzo: Varenghino e Buscarolo, 67, 15030 Castagnoni AL
4. **La Quercia Rossa** — Altavilla Monferrato
   - slug: `la-quercia-rossa-altavilla-monferrato`
   - indirizzo: Str. Grazzano, 22, 14036 Moncalvo AT
5. **Le Libellule Relais** — Altavilla Monferrato
   - slug: `le-libellule-relais-altavilla-monferrato`
   - indirizzo: Via Ca' Dietro Pavese, 5, 15049 Vignale Monferrato AL
6. **Monferrato Resort** — Altavilla Monferrato
   - slug: `monferrato-resort-altavilla-monferrato`
   - indirizzo: Località, Cascina Palau, 25, 15020 Cereseto AL
7. **Relais dal Cavaliere** — Altavilla Monferrato
   - slug: `relais-dal-cavaliere-altavilla-monferrato`
   - indirizzo: Str. Bricco, 11, 14036 Castellino AT
8. **Tenuta Montemagno Relais & Wines** — Altavilla Monferrato
   - slug: `tenuta-montemagno-relais-wines-altavilla-monferrato`
   - indirizzo: Via Cascina Valfossato, 9, 14030 Montemagno Monferrato AT
9. **Villa Morneto - Relais & Agriturismo** — Altavilla Monferrato
   - slug: `villa-morneto-relais-agriturismo-altavilla-monferrato`
   - indirizzo: Via Ca' Morneto, 3, 15049 Vignale Monferrato AL
10. **Astrea Wellness & Spa** — Altavilla Silentina
   - slug: `astrea-wellness-spa-altavilla-silentina`
   - indirizzo: Via Falagato, 39, 84045 Altavilla Silentina SA
11. **Biancolivo Country House** — Altavilla Silentina
   - slug: `biancolivo-country-house-altavilla-silentina`
   - indirizzo: Contrada Scalareta, 74, 84045 Altavilla Silentina SA
12. **Casale Degli Ulivi Prestige** — Altavilla Silentina
   - slug: `casale-degli-ulivi-prestige-altavilla-silentina`
   - indirizzo: Via Frolla, 1, 84045 Altavilla Silentina SA
13. **Quota 424** — Altavilla Silentina
   - slug: `quota-424-altavilla-silentina`
   - indirizzo: Contrada Piano delle Rose, 9, 84045 Altavilla Silentina SA
14. **Tenuta Ferrara Hauteville** — Altavilla Silentina
   - slug: `tenuta-ferrara-hauteville-altavilla-silentina`
   - indirizzo: Via Vigna delle Canne, 42, 84045 Cerrelli SA
15. **Villa Lucilla** — Altavilla Silentina
   - slug: `villa-lucilla-altavilla-silentina`
   - indirizzo: via molino vecchio, 15, 84045 Altavilla Silentina SA
16. **Albergo Ristorante Tavernelle** — Altavilla Vicentina
   - slug: `albergo-ristorante-tavernelle-altavilla-vicentina`
   - indirizzo: Viale Verona, 6, 36077 Altavilla Vicentina VI
17. **Best Western Hotel Tre Torri** — Altavilla Vicentina
   - slug: `best-western-hotel-tre-torri-altavilla-vicentina`
   - indirizzo: Via Tavernelle, 71, 36077 Altavilla Vicentina VI
18. **Casa Clara** — Altavilla Vicentina
   - slug: `casa-clara-altavilla-vicentina`
   - indirizzo: Via Alessandro Manzoni, 6, 36077 Altavilla Vicentina VI
19. **GHV Hotel & SPA** — Altavilla Vicentina
   - slug: `ghv-hotel-spa-altavilla-vicentina`
   - indirizzo: Via Carpaneda, 5, 36051 Creazzo VI
20. **Gli Olmi** — Altavilla Vicentina
   - slug: `gli-olmi-altavilla-vicentina`
   - indirizzo: Via Como, 2, 36051 Creazzo VI
21. **Hotel & Residence Castelli** — Altavilla Vicentina
   - slug: `hotel-residence-castelli-altavilla-vicentina`
   - indirizzo: Viale Trieste, 73, 36075 Montecchio Maggiore VI
22. **Hotel Castagna** — Altavilla Vicentina
   - slug: `hotel-castagna-altavilla-vicentina`
   - indirizzo: Via Archimede, 2, 36075 Montecchio Maggiore VI
23. **Hotel Giada Viale del Sole** — Altavilla Vicentina
   - slug: `hotel-giada-viale-del-sole-altavilla-vicentina`
   - indirizzo: Viale del Sole, 142, 36100 Vicenza VI
24. **Hotel Locanda Botella** — Altavilla Vicentina
   - slug: `hotel-locanda-botella-altavilla-vicentina`
   - indirizzo: Via S. Bernardino, 69, 36075 Montecchio Maggiore VI
25. **Hotel New Genziana** — Altavilla Vicentina
   - slug: `hotel-new-genziana-altavilla-vicentina`
   - indirizzo: Via G. Mazzini, 75, 36077 Altavilla Vicentina VI
26. **Key Hotel Vicenza** — Altavilla Vicentina
   - slug: `key-hotel-vicenza-altavilla-vicentina`
   - indirizzo: V.le G. Trissino, 89, 36100 Vicenza VI
27. **L'Abbraccio della Vigna - Alloggio Agrituristico - Agriturismo** — Altavilla Vicentina
   - slug: `l-abbraccio-della-vigna-alloggio-agrituristico-a-altavilla-vicentina`
   - indirizzo: Via Selva Alta, 1, 36075 Montecchio Maggiore VI
28. **Locanda Degli Ulivi (Hotel e Ristorante sui Colli Berici) - Arcugnano (VI)** — Altavilla Vicentina
   - slug: `locanda-degli-ulivi-hotel-e-ristorante-sui-colli-altavilla-vicentina`
   - indirizzo: Via S. Giustina, 6, 36057 Arcugnano VI
29. **Ostello Olimpico Vicenza** — Altavilla Vicentina
   - slug: `ostello-olimpico-vicenza-altavilla-vicentina`
   - indirizzo: Viale Antonio Giuriolo, 7/9, 36100 Vicenza VI
30. **Palace Hotel La Conchiglia d'Oro** — Altavilla Vicentina
   - slug: `palace-hotel-la-conchiglia-d-oro-altavilla-vicentina`
   - indirizzo: Via Bassano, 7, 36100 Vicenza VI
31. **Ristorante Crichelon** — Altavilla Vicentina
   - slug: `ristorante-crichelon-altavilla-vicentina`
   - indirizzo: Via Napoleone Bonaparte, 4, 36077 Altavilla Vicentina VI
32. **SHG Hotel De La Ville** — Altavilla Vicentina
   - slug: `shg-hotel-de-la-ville-altavilla-vicentina`
   - indirizzo: Viale Verona, 12, 36100 Vicenza VI
33. **Valmarana Morosini Hotel** — Altavilla Vicentina
   - slug: `valmarana-morosini-hotel-altavilla-vicentina`
   - indirizzo: Via G. Marconi, 97, 36077 Altavilla Vicentina VI
34. **Villa Valmarana De Toni-Dimora Storica** — Altavilla Vicentina
   - slug: `villa-valmarana-de-toni-dimora-storica-altavilla-vicentina`
   - indirizzo: villavalmaranadetoni@gmail.com, Via IV Novembre, 13, 36051 Creazzo VI
35. **Acquarello** — Altidona
   - slug: `acquarello-altidona`
   - indirizzo: Contrada Acquarello, 10/11, 63868 Lapedona FM