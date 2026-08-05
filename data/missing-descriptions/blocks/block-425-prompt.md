# Blocco 425/500 — 35 strutture senza descrizione IT

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

1. **Tuscany Villa Resort** — Caprese Michelangelo
   - slug: `tuscany-villa-resort-caprese-michelangelo`
   - indirizzo: Via Marcena, 52033 Caprese Michelangelo AR
2. **Agricampeggio Alessandra Torrenova(ME), Case Vacanze, Camping Capo D'Orlando (ME)** — Capri Leone
   - slug: `agricampeggio-alessandra-torrenova-me-case-vacan-capri-leone`
   - indirizzo: Via del Mare, 98070 Zona Industriale Zappulla ME
3. **Agriturismo Villa Tecla** — Capri Leone
   - slug: `agriturismo-villa-tecla-capri-leone`
   - indirizzo: SP157, 98070 Capri Leone ME
4. **B&B Gàttina** — Capri Leone
   - slug: `b-b-gattina-capri-leone`
   - indirizzo: Contrada Gàttina, 11/a, 98074 Naso ME
5. **DOMUS LEONE - Nel Borgo di Capri Leone** — Capri Leone
   - slug: `domus-leone-nel-borgo-di-capri-leone-capri-leone`
   - indirizzo: Via Risorgimento, 23, 98070 Capri Leone ME
6. **La Via del Carretto - B&B** — Capri Leone
   - slug: `la-via-del-carretto-b-b-capri-leone`
   - indirizzo: Via Risorgimento, 28, 98070 Capri Leone ME
7. **Ristorante - Hotel - Sala Ricevimenti "Antica Filanda"** — Capri Leone
   - slug: `ristorante-hotel-sala-ricevimenti-antica-filanda-capri-leone`
   - indirizzo: Contrada da Raviola, SP157, 98070 Capri Leone ME
8. **Chalet Resort Al Vecchio Fienile - SUITES con sauna e cromoterapia - VAL DI FIEMME - Dolomiti del Trentino** — Capriana
   - slug: `chalet-resort-al-vecchio-fienile-suites-con-saun-capriana`
   - indirizzo: Frazione Dorà, 48, 38040 Valfloriana TN
9. **Fichtenhof** — Capriana
   - slug: `fichtenhof-capriana`
   - indirizzo: Gfrill, 23, 39040 Cauria Autonome Provinz Bozen - Südtirol
10. **Hotel Garni Edy Daiano Cavalese** — Capriana
   - slug: `hotel-garni-edy-daiano-cavalese-capriana`
   - indirizzo: Via, Costa dall'Or, 15, 38099 Daiano TN
11. **Maso Valfloriana** — Capriana
   - slug: `maso-valfloriana-capriana`
   - indirizzo: 30, 38040 Barcatta TN
12. **Pensione Maria** — Capriana
   - slug: `pensione-maria-capriana`
   - indirizzo: di Sover, Via dei Lagorai, 30, 38048 Piscine TN
13. **Piccolo Hotel** — Capriana
   - slug: `piccolo-hotel-capriana`
   - indirizzo: Piazza Dolomiti, 44, 39040 Trodena nel Parco naturale BZ
14. **Zum Löwen-Post HOTEL** — Capriana
   - slug: `zum-lowen-post-hotel-capriana`
   - indirizzo: Piazza Chiesa S. Biagio, 2, 39040 Trodena nel parco naturale BZ
15. **"Piccola Corte Antica" Bed & Breakfast** — Capriano del Colle
   - slug: `piccola-corte-antica-bed-breakfast-capriano-del-colle`
   - indirizzo: Via Dante, 24, 25020 Corticelle BS
16. **EQ Hotel** — Capriano del Colle
   - slug: `eq-hotel-capriano-del-colle`
   - indirizzo: Via del Ferro, 7, 25039 Travagliato BS
17. **Hotel Industria** — Capriano del Colle
   - slug: `hotel-industria-capriano-del-colle`
   - indirizzo: Via Orzinuovi, 58, 25125 Brescia BS
18. **La casa di Amelie** — Capriano del Colle
   - slug: `la-casa-di-amelie-capriano-del-colle`
   - indirizzo: Via E. Rinaldini, 52, 25020 Flero BS
19. **OneMhotel** — Capriano del Colle
   - slug: `onemhotel-capriano-del-colle`
   - indirizzo: Via Donatori di Sangue, 13, 25020 San Paolo BS
20. **Agriturismo Tenuta Montebello, azienda vinicola monferrato** — Capriata d'Orba
   - slug: `agriturismo-tenuta-montebello-azienda-vinicola-m-capriata-d-orba`
   - indirizzo: Loc. Montebello, 249, 15078 Rocca Grimalda AL
21. **B&B La Casa del Mugnaio** — Capriata d'Orba
   - slug: `b-b-la-casa-del-mugnaio-capriata-d-orba`
   - indirizzo: Via Provinciale, 27, 15060 Capriata d'Orba AL
22. **Hemanaire | Slow Living Valley** — Capriata d'Orba
   - slug: `hemanaire-slow-living-valley-capriata-d-orba`
   - indirizzo: Via Piazze, 25, 15010 Cremolino AL
23. **Locanda La Raia** — Capriata d'Orba
   - slug: `locanda-la-raia-capriata-d-orba`
   - indirizzo: Località Lomellina, 26, 15066 Gavi AL
24. **Residenza Novi** — Capriata d'Orba
   - slug: `residenza-novi-capriata-d-orba`
   - indirizzo: Via Cavanna, 82, 15067 Novi Ligure AL
25. **Villa Carolina Resort** — Capriata d'Orba
   - slug: `villa-carolina-resort-capriata-d-orba`
   - indirizzo: Località Montone, 1, 15060 Castelletto d'Orba AL
26. **B&B - B2in Suite and Office** — Capriate San Gervasio
   - slug: `b-b-b2in-suite-and-office-capriate-san-gervasio`
   - indirizzo: Via Vittorio Veneto, 46, 24042 Capriate San Gervasio BG
27. **B&B FAMILY FIRST, Piscina e Parco Giochi [Bed & Breakfast a Leolandia]** — Capriate San Gervasio
   - slug: `b-b-family-first-piscina-e-parco-giochi-bed-brea-capriate-san-gervasio`
   - indirizzo: Via Don Nazzaro Villa, 26, 24042 Capriate San Gervasio BG
28. **Affittacamere Varone** — Capriati a Volturno
   - slug: `affittacamere-varone-capriati-a-volturno`
   - indirizzo: Via Carpinete, 13, 86070 Montaquila IS
29. **Agriturismo Colle Bralle** — Capriati a Volturno
   - slug: `agriturismo-colle-bralle-capriati-a-volturno`
   - indirizzo: Via Colle Bralle, 1, 81014 Fontegreca CE
30. **Az. Agr. Sorve** — Capriati a Volturno
   - slug: `az-agr-sorve-capriati-a-volturno`
   - indirizzo: via Sorve, 11, 81014 Capriati A Volturno CE
31. **B&B** — Capriati a Volturno
   - slug: `b-b-capriati-a-volturno`
   - indirizzo: Via Niccolò Machiavelli, 18, 86079 Venafro IS
32. **B&B Ambrosia** — Capriati a Volturno
   - slug: `b-b-ambrosia-capriati-a-volturno`
   - indirizzo: Via Cairoli, 18, 86077 Pozzilli IS
33. **Bed and Breackfast La Vracia Rocchetta a Volturno** — Capriati a Volturno
   - slug: `bed-and-breackfast-la-vracia-rocchetta-a-volturn-capriati-a-volturno`
   - indirizzo: Via Madonna delle Grotte, 84, 86070 Rocchetta Nuova IS
34. **BED AND BREAKFAST ACANTO** — Capriati a Volturno
   - slug: `bed-and-breakfast-acanto-capriati-a-volturno`
   - indirizzo: via nazionale, Via nazionale, 86070 Macchia d'Isernia IS
35. **Bed and Breakfast IL CAVALIERE** — Capriati a Volturno
   - slug: `bed-and-breakfast-il-cavaliere-capriati-a-volturno`
   - indirizzo: Via Foglia, 1, 86077 Pozzilli IS