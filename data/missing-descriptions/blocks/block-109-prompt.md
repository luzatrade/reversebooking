# Blocco 109/500 — 35 strutture senza descrizione IT

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

1. **HOTEL BELLA MORRA** — Andretta
   - slug: `hotel-bella-morra-andretta`
   - indirizzo: Via Montecalvario, 83040 Morra De Sanctis AV
2. **La dimora di Ipno** — Andretta
   - slug: `la-dimora-di-ipno-andretta`
   - indirizzo: Corso J. F. Kennedy, 145, 83059 Vallata AV
3. **Le Ali Del Vento** — Andretta
   - slug: `le-ali-del-vento-andretta`
   - indirizzo: Via Santa Sofia, 9, 83040 Cairano AV
4. **Le radici delle nuvole** — Andretta
   - slug: `le-radici-delle-nuvole-andretta`
   - indirizzo: Via Irpinia, 83040 Cairano AV
5. **Truni Farm Country House** — Andretta
   - slug: `truni-farm-country-house-andretta`
   - indirizzo: c.da Truni, 83044 Bisaccia AV
6. **Vicolo72** — Andretta
   - slug: `vicolo72-andretta`
   - indirizzo: Via Cipresso, 4-6, 83045 Calitri AV
7. **Albergo dei Pini** — Andria
   - slug: `albergo-dei-pini-andria`
   - indirizzo: Via Brindisi, 3, 76013 Andria BT
8. **ARCHÈO B&B** — Andria
   - slug: `archeo-b-b-andria`
   - indirizzo: Via Mulini, 7, 76123 Andria BT
9. **Artè Andria** — Andria
   - slug: `arte-andria-andria`
   - indirizzo: Via Mura S. Francesco, 16, 76123 Andria BT
10. **B&B Novilunio** — Andria
   - slug: `b-b-novilunio-andria`
   - indirizzo: Via la Corte, Via de Maioribus, 14, 76123 Andria BT
11. **B&B Palazzo Ducale** — Andria
   - slug: `b-b-palazzo-ducale-andria`
   - indirizzo: V. Vaglio, 30, 76123 Andria BT
12. **Blumoon** — Andria
   - slug: `blumoon-andria`
   - indirizzo: Via Ugo Foscolo, 24, 76123 Andria BT
13. **Borgomurgia** — Andria
   - slug: `borgomurgia-andria`
   - indirizzo: Via Corrado IV di Svevia, 9, 76123 Andria BT
14. **Club 64 Bed & Breakfast** — Andria
   - slug: `club-64-bed-breakfast-andria`
   - indirizzo: Via Bologna, 85, 76123 Andria BT
15. **Cristal Palace Hotel** — Andria
   - slug: `cristal-palace-hotel-andria`
   - indirizzo: Via Firenze, 35, 76123 Andria BT
16. **Dimora Delle Vigne** — Andria
   - slug: `dimora-delle-vigne-andria`
   - indirizzo: Via Pier delle Vigne, 20/22, 76123 Andria BT
17. **Fravina** — Andria
   - slug: `fravina-andria`
   - indirizzo: 2° Vicolo Antonio Giannotti, 3, 76123 Andria BT
18. **Il cortile degli ulivi** — Andria
   - slug: `il-cortile-degli-ulivi-andria`
   - indirizzo: Vicolo III Tutino, 76123 Andria BT
19. **Netium B&B** — Andria
   - slug: `netium-b-b-andria`
   - indirizzo: Via arco marchese, 27, 76123 Andria BT
20. **Orizzonte MHotel** — Andria
   - slug: `orizzonte-mhotel-andria`
   - indirizzo: 76123 Andria BT
21. **Poggio della Guardia - Montegrosso Rooms** — Andria
   - slug: `poggio-della-guardia-montegrosso-rooms-andria`
   - indirizzo: Viale dei Combattenti, 31, 76123 Montegrosso BT
22. **ROBERTO's Guest House** — Andria
   - slug: `roberto-s-guest-house-andria`
   - indirizzo: Via Sonnino, 8, 76123 Andria BT
23. **Santa Maria Vetere** — Andria
   - slug: `santa-maria-vetere-andria`
   - indirizzo: Piazza Santa Maria Vetere, 37, 76123 Andria BT
24. **Terrazzini Cibele** — Andria
   - slug: `terrazzini-cibele-andria`
   - indirizzo: Piazza Balilla, 4, 76123 Andria BT
25. **Trèscharme** — Andria
   - slug: `trescharme-andria`
   - indirizzo: Via Bologna, 107/a, 76123 Andria BT
26. **Villa Ceci Dimora di Storie** — Andria
   - slug: `villa-ceci-dimora-di-storie-andria`
   - indirizzo: Via Canosa, 150, 76123 Andria BT
27. **Aignerhof - Fam. Ausserer** — Andriano/Andrian
   - slug: `aignerhof-fam-ausserer-andriano-andrian`
   - indirizzo: Perdoniger Straße, 13, 39057 Appiano sulla strada del vino BZ
28. **Albergo Aquila Nera** — Andriano/Andrian
   - slug: `albergo-aquila-nera-andriano-andrian`
   - indirizzo: Piazza S. Urbano, 4, 39010 Andriano BZ
29. **Albergo Tschaufen** — Andriano/Andrian
   - slug: `albergo-tschaufen-andriano-andrian`
   - indirizzo: Tschaufen, 4, 39010 Meltina BZ
30. **Albergo Wieser** — Andriano/Andrian
   - slug: `albergo-wieser-andriano-andrian`
   - indirizzo: Perdonig 29, 39057 Appiano sulla strada del vino BZ
31. **Bed & Breakfast Trübenbach** — Andriano/Andrian
   - slug: `bed-breakfast-trubenbach-andriano-andrian`
   - indirizzo: Via Hocheppan, 11, 39010 Andriano BZ
32. **Garni Rebhof** — Andriano/Andrian
   - slug: `garni-rebhof-andriano-andrian`
   - indirizzo: Via Vilpiano, 19, 39010 Nalles BZ
33. **Gasthof Restaurant Jäger** — Andriano/Andrian
   - slug: `gasthof-restaurant-jager-andriano-andrian`
   - indirizzo: Via S. Apollonia, 5, 39010 Sirmiano BZ
34. **Haus Malesardi** — Andriano/Andrian
   - slug: `haus-malesardi-andriano-andrian`
   - indirizzo: Via Johann Gamper, 8, 39010 Andriano BZ
35. **Hotel Gantkofel** — Andriano/Andrian
   - slug: `hotel-gantkofel-andriano-andrian`
   - indirizzo: Via del Sole, 9, 39010 Andriano BZ