# Blocco 469/500 — 35 strutture senza descrizione IT

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

1. **Hotel Villa Tirreno** — Castagneto Carducci
   - slug: `hotel-villa-tirreno-castagneto-carducci`
   - indirizzo: Via della Triglia, 4, 57022 Marina di Castagneto Carducci LI
2. **LOCANDA ROMA sleep & food** — Castagneto Carducci
   - slug: `locanda-roma-sleep-food-castagneto-carducci`
   - indirizzo: Via Vecchia Aurelia, 183, 57024 Donoratico LI
3. **Marina Di Castagneto Carducci** — Castagneto Carducci
   - slug: `marina-di-castagneto-carducci-castagneto-carducci`
   - indirizzo: Via del Corallo, 3, 57022 Marina di Castagneto Carducci LI
4. **Paradú EcoVillage & Resort** — Castagneto Carducci
   - slug: `paradu-ecovillage-resort-castagneto-carducci`
   - indirizzo: Località Paradù, 383, 57022 Donoratico LI
5. **Relais Le Fornacelle** — Castagneto Carducci
   - slug: `relais-le-fornacelle-castagneto-carducci`
   - indirizzo: Loc. Le Fornacelle, 231, 57022 Castagneto Carducci LI
6. **Tombolo Talasso Resort** — Castagneto Carducci
   - slug: `tombolo-talasso-resort-castagneto-carducci`
   - indirizzo: Via del Corallo, 3, 57022 Marina di Castagneto Carducci LI
7. **Tuscany Hotel Alle Dune** — Castagneto Carducci
   - slug: `tuscany-hotel-alle-dune-castagneto-carducci`
   - indirizzo: Via Milano, 14, 57022 Castagneto Carducci LI
8. **Villa Curiel** — Castagneto Carducci
   - slug: `villa-curiel-castagneto-carducci`
   - indirizzo: Via Antonio Gramsci, 4/C, 57022 Castagneto Carducci LI
9. **Albergo Martin** — Castagneto Po
   - slug: `albergo-martin-castagneto-po`
   - indirizzo: Via Giuseppe Raimondo, 16, 10088 Volpiano TO
10. **Hotel Chivasso ex Hotel Ritz** — Castagneto Po
   - slug: `hotel-chivasso-ex-hotel-ritz-castagneto-po`
   - indirizzo: V. Roma, 17/f, 10034 Chivasso TO
11. **Hotel La Meridiana** — Castagneto Po
   - slug: `hotel-la-meridiana-castagneto-po`
   - indirizzo: Piazza Vittorio Veneto, 2B, 10036 Settimo Torinese TO
12. **Hotel La Noce** — Castagneto Po
   - slug: `hotel-la-noce-castagneto-po`
   - indirizzo: Piazza Garibaldi, 10, 10034 Chivasso TO
13. **Relais Castello di San Sebastiano Po** — Castagneto Po
   - slug: `relais-castello-di-san-sebastiano-po-castagneto-po`
   - indirizzo: Via Novarina, 9, 10020 San Sebastiano Da Po TO
14. **Ristorante Hotel Belvedere** — Castagneto Po
   - slug: `ristorante-hotel-belvedere-castagneto-po`
   - indirizzo: Via Annibale Caro, 12, 10156 Torino TO
15. **Agriturismo Cascina Varìe** — Castagnito
   - slug: `agriturismo-cascina-varie-castagnito`
   - indirizzo: Via Variglie, 3, 12050 San Giuseppe CN
16. **Agriturismo Costa Catterina** — Castagnito
   - slug: `agriturismo-costa-catterina-castagnito`
   - indirizzo: Via Castellinaldo, 14, 12050 Castagnito CN
17. **B&B CASA MARGOT** — Castagnito
   - slug: `b-b-casa-margot-castagnito`
   - indirizzo: Via Roma, 9, 12052 Neive CN
18. **B&B Marzia** — Castagnito
   - slug: `b-b-marzia-castagnito`
   - indirizzo: Str. Osteria, 9, 12051 Alba CN
19. **Bed & Breakfast I Pini** — Castagnito
   - slug: `bed-breakfast-i-pini-castagnito`
   - indirizzo: Via Alba, 28A, 12050 Castagnito CN
20. **Bed and Breakfast MADERA** — Castagnito
   - slug: `bed-and-breakfast-madera-castagnito`
   - indirizzo: Frazione Bassi, 10, 12050 Bassi CN
21. **Ca' dei Vini d'Alba** — Castagnito
   - slug: `ca-dei-vini-d-alba-castagnito`
   - indirizzo: Via Roma, 18, 12050 Castagnito CN
22. **Cascina Baresane Da Amabile** — Castagnito
   - slug: `cascina-baresane-da-amabile-castagnito`
   - indirizzo: Str. Baresane, 32, 12051 Alba CN
23. **Cascina Cortine** — Castagnito
   - slug: `cascina-cortine-castagnito`
   - indirizzo: Viale Bouillargues, 15, 12050 Guarene CN
24. **CastaHotel 4 Stelle** — Castagnito
   - slug: `castahotel-4-stelle-castagnito`
   - indirizzo: Via 4 Novembre, 83, 12050 Castagnito CN
25. **Corte Bellora Residence** — Castagnito
   - slug: `corte-bellora-residence-castagnito`
   - indirizzo: Via San Sudario, 17 12050, 12050 Alba CN
26. **Le Aromatiche** — Castagnito
   - slug: `le-aromatiche-castagnito`
   - indirizzo: Via Serra, 23, 12050 Castagnito CN
27. **Mari’s House** — Castagnito
   - slug: `mari-s-house-castagnito`
   - indirizzo: Via S. Licerio, 2A, 12050 Castagnito CN
28. **Villa Vecchio** — Castagnito
   - slug: `villa-vecchio-castagnito`
   - indirizzo: Via Castellinaldo, 14/b, 12050 Castagnito CN
29. **Albergo Roma** — Castagnole delle Lanze
   - slug: `albergo-roma-castagnole-delle-lanze`
   - indirizzo: Via Bettica, 23, 14054 Castagnole delle Lanze AT
30. **Antica Casa Fiore** — Castagnole delle Lanze
   - slug: `antica-casa-fiore-castagnole-delle-lanze`
   - indirizzo: 14054 Castagnole delle Lanze AT
31. **B&b Nonna GIULINA camere - Rooms** — Castagnole delle Lanze
   - slug: `b-b-nonna-giulina-camere-rooms-castagnole-delle-lanze`
   - indirizzo: Via della Vittoria, 18, 14054 Castagnole delle Lanze AT
32. **Bricco Aivè** — Castagnole delle Lanze
   - slug: `bricco-aive-castagnole-delle-lanze`
   - indirizzo: SC Carlina, 10, 14055 Costigliole d'Asti AT
33. **Cascina Rita** — Castagnole delle Lanze
   - slug: `cascina-rita-castagnole-delle-lanze`
   - indirizzo: Via Val Guarena, n.28, 14054 Castagnole delle Lanze AT
34. **Dimora Cortese** — Castagnole delle Lanze
   - slug: `dimora-cortese-castagnole-delle-lanze`
   - indirizzo: Via Auberti, 3, 14054 Castagnole delle Lanze AT
35. **Dimora Relax** — Castagnole delle Lanze
   - slug: `dimora-relax-castagnole-delle-lanze`
   - indirizzo: Strada Ginestre, 14055 Costigliole d'Asti AT