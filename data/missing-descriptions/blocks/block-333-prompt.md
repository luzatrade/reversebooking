# Blocco 333/500 — 35 strutture senza descrizione IT

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

1. **Albergo Ristorante Tre Denti** — Bruino
   - slug: `albergo-ristorante-tre-denti-bruino`
   - indirizzo: Via Roma, 25, 10060 Cantalupa TO
2. **Albergo Stazione** — Bruino
   - slug: `albergo-stazione-bruino`
   - indirizzo: Piazza Paracleto, 2, 10040 Piobesi Torinese TO
3. **Chiuso definitivamente Hotel To** — Bruino
   - slug: `chiuso-definitivamente-hotel-to-bruino`
   - indirizzo: Sesta Strada Interporto Sito Sud, 10040 Rivalta di Torino TO
4. **Hotel Torino TENUTA CANTA** — Bruino
   - slug: `hotel-torino-tenuta-canta-bruino`
   - indirizzo: XGG7+F8, 10040 Volvera TO
5. **Ristorante Hotel Celestino** — Bruino
   - slug: `ristorante-hotel-celestino-bruino`
   - indirizzo: Corso Italia, 10, 10040 Piobesi Torinese TO
6. **Villa Party B&B Tiffany** — Bruino
   - slug: `villa-party-b-b-tiffany-bruino`
   - indirizzo: Via Susa - Pinerolo, 62, 10090 Bruino TO
7. **4 Racconti** — Brumano
   - slug: `4-racconti-brumano`
   - indirizzo: Via Monsignore B. Cappelletti, 3, 24037 Brumano BG
8. **B & b La Genzianella - Morterone** — Brumano
   - slug: `b-b-la-genzianella-morterone-brumano`
   - indirizzo: Localita` Medalunga, 2, 23811 Morterone LC
9. **MIRAMONTINO Mountain Suite & Spa** — Brumano
   - slug: `miramontino-mountain-suite-spa-brumano`
   - indirizzo: Via V. Emanuele, 33, 24037 Rota d'Imagna BG
10. **Rifugio Resegone Brumano** — Brumano
   - slug: `rifugio-resegone-brumano-brumano`
   - indirizzo: Loc. Croci, 24037 Brumano BG
11. **albergo Vista Lago Brunate** — Brunate
   - slug: `albergo-vista-lago-brunate-brunate`
   - indirizzo: Via Roma, 25, 22034 Brunate CO
12. **Alle Vigne 5** — Brunate
   - slug: `alle-vigne-5-brunate`
   - indirizzo: Via alle Vigne, 5, 22034 Brunate CO
13. **Antica Dimora I Faggi di San Giorgio** — Brunate
   - slug: `antica-dimora-i-faggi-di-san-giorgio-brunate`
   - indirizzo: Via alle Colme, 11, 22034 Brunate CO
14. **B&B Brunate Kangucavallo** — Brunate
   - slug: `b-b-brunate-kangucavallo-brunate`
   - indirizzo: Via Regonda, 2, 22034 Brunate CO
15. **B&B Villa al Sole** — Brunate
   - slug: `b-b-villa-al-sole-brunate`
   - indirizzo: Via per Civiglio, 54, 22034 Brunate CO
16. **Baita Sorriso** — Brunate
   - slug: `baita-sorriso-brunate`
   - indirizzo: 38, Via ai Piani, 22034 Brunate CO
17. **Bellavista Boutique Hotel e Ristorante** — Brunate
   - slug: `bellavista-boutique-hotel-e-ristorante-brunate`
   - indirizzo: Piazza Bonacossa, 2, 22034 Brunate CO
18. **Casa di Emanuele - B&B** — Brunate
   - slug: `casa-di-emanuele-b-b-brunate`
   - indirizzo: Via Monte Rosa, 26, 22034 Brunate CO
19. **Hotel Marco'S** — Brunate
   - slug: `hotel-marco-s-brunate`
   - indirizzo: Via Coloniola, 43, 22100 Como CO
20. **Hotel Paradiso Como** — Brunate
   - slug: `hotel-paradiso-como-brunate`
   - indirizzo: Via Giacomo Scalini, 70, 22034 Brunate CO
21. **Il Vecchio Borgo** — Brunate
   - slug: `il-vecchio-borgo-brunate`
   - indirizzo: Piazza Giacomo Matteotti, 1, 22100 Como CO
22. **Laura B&B** — Brunate
   - slug: `laura-b-b-brunate`
   - indirizzo: Via Alessandro Volta, 40, 22034 Brunate CO
23. **Locanda Volta** — Brunate
   - slug: `locanda-volta-brunate`
   - indirizzo: Via Alessandro Volta, 40, 22034 Brunate CO
24. **Nuvole Garden Hotel Lake Como** — Brunate
   - slug: `nuvole-garden-hotel-lake-como-brunate`
   - indirizzo: Piazza Bonacossa, 12, 22034 Brunate CO
25. **Ristorante - Hotel Locanda Milano 1873** — Brunate
   - slug: `ristorante-hotel-locanda-milano-1873-brunate`
   - indirizzo: Via Alessandro Volta, 62, 22034 Brunate CO
26. **SunsetLake** — Brunate
   - slug: `sunsetlake-brunate`
   - indirizzo: Via Parco Nidrino, 20, 22034 Brunate CO
27. **Agriturismo Barsentello** — Brunello
   - slug: `agriturismo-barsentello-brunello`
   - indirizzo: Strada Comunale Chiancarosa, 73, 70017 Putignano BA
28. **Agriturismo Conte Brunello** — Brunello
   - slug: `agriturismo-conte-brunello-brunello`
   - indirizzo: Via Panoramica, 13, 25087 Salò BS
29. **Agriturismo Il Monterosso** — Brunello
   - slug: `agriturismo-il-monterosso-brunello`
   - indirizzo: Via Al Monte Rosso 6 unica strada aperta: parte da, Viale Giuseppe Azari, n. 127, 28925 Verbania VB
30. **Agriturismo La Quercia, Camere, Ristorante, Pranzo Tutti I Giorni, Day Use Hotel** — Brunello
   - slug: `agriturismo-la-quercia-camere-ristorante-pranzo-brunello`
   - indirizzo: Via Angelo, 1, 83010 Grottolella AV
31. **Azienda Agricola Corte Merina** — Brunello
   - slug: `azienda-agricola-corte-merina-brunello`
   - indirizzo: Località Merina, 28801 Cossogno VB
32. **Baita Eleonora** — Brunello
   - slug: `baita-eleonora-brunello`
   - indirizzo: via per, Vicolo Schignano, snc, 22010 Argegno CO
33. **Goccia d'oro Ranch** — Brunello
   - slug: `goccia-d-oro-ranch-brunello`
   - indirizzo: Via Cervinia, 21100 Varese VA
34. **Il Rifugio degli Artisti B&B** — Brunello
   - slug: `il-rifugio-degli-artisti-b-b-brunello`
   - indirizzo: Viale S. Pedrino, 21, 21100 Varese VA
35. **Agalma** — Brunico/Bruneck
   - slug: `agalma-brunico-bruneck`
   - indirizzo: Via Centrale, 8, 39031 Brunico BZ