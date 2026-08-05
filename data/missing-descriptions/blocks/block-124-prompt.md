# Blocco 124/500 — 35 strutture senza descrizione IT

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

1. **Hotel Roma** — Aosta
   - slug: `hotel-roma-aosta`
   - indirizzo: Via Torino, 7, 11100 Aosta AO
2. **Hotel Saint Pierre** — Aosta
   - slug: `hotel-saint-pierre-aosta`
   - indirizzo: Rue Corrado Gex, 61, 11010 Saint-Pierre AO
3. **Hotel Village** — Aosta
   - slug: `hotel-village-aosta`
   - indirizzo: Torrent de Maillod, 1, 11020 Quart AO
4. **La Belle Epoque** — Aosta
   - slug: `la-belle-epoque-aosta`
   - indirizzo: Rue Claude d'Avise, 18, 11100 Aosta AO
5. **La Méizòn de Sara** — Aosta
   - slug: `la-meizon-de-sara-aosta`
   - indirizzo: Via Sant'Anselmo, 134, 11100 Aosta AO
6. **Le Pageot** — Aosta
   - slug: `le-pageot-aosta`
   - indirizzo: Viale Giorgio Carrel, 31, 11100 Aosta AO
7. **Maison Borbey Guesthouse** — Aosta
   - slug: `maison-borbey-guesthouse-aosta`
   - indirizzo: Frazione Capoluogo, 73, 11020 Charvensod AO
8. **Mon Emile** — Aosta
   - slug: `mon-emile-aosta`
   - indirizzo: Località Bret, 24, 11020 Saint-Christophe AO
9. **Norden Palace** — Aosta
   - slug: `norden-palace-aosta`
   - indirizzo: Corso Battaglione Aosta, 30, 11100 Aosta AO
10. **Agriturismo Borgo di Cortolla** — Apecchio
   - slug: `agriturismo-borgo-di-cortolla-apecchio`
   - indirizzo: Vocabolo Cortolla, 105, 06026 PERUGIA PG
11. **Agriturismo ca'Licozzo** — Apecchio
   - slug: `agriturismo-ca-licozzo-apecchio`
   - indirizzo: Loc. Ca' Licozzo, 61046 Piobbico PU
12. **Agriturismo Chignoni** — Apecchio
   - slug: `agriturismo-chignoni-apecchio`
   - indirizzo: Vocabolo Chignoni, 61042 Apecchio PU
13. **Agriturismo Fontesomma** — Apecchio
   - slug: `agriturismo-fontesomma-apecchio`
   - indirizzo: Vocabolo Fonte Somma, 85, 61042 Apecchio PU
14. **Agriturismo Le Capannacce** — Apecchio
   - slug: `agriturismo-le-capannacce-apecchio`
   - indirizzo: Località Sant'Andrea in Serra D'Ocre, 23, 61049 Urbania PU
15. **Agriturismo Piandimolino** — Apecchio
   - slug: `agriturismo-piandimolino-apecchio`
   - indirizzo: Vocabolo Pian di Molino, 16, 61042 Pian di Molino PU
16. **Albergo Montenerone** — Apecchio
   - slug: `albergo-montenerone-apecchio`
   - indirizzo: Via Roma, 28, 61046 Piobbico PU
17. **B&B Casa Balducci** — Apecchio
   - slug: `b-b-casa-balducci-apecchio`
   - indirizzo: Via Don Luigi Sturzo, 7, 61040 Mercatello Sul Metauro PU
18. **B&B Mulino della Ricavata** — Apecchio
   - slug: `b-b-mulino-della-ricavata-apecchio`
   - indirizzo: Località Porta Celle, 5, 61049 Urbania PU
19. **Casale il Sogno** — Apecchio
   - slug: `casale-il-sogno-apecchio`
   - indirizzo: Località Casalecchi, 25, 06026 Pietralunga PG
20. **Casale La Spina** — Apecchio
   - slug: `casale-la-spina-apecchio`
   - indirizzo: Vocabolo Spina, 61042 Apecchio PU
21. **Castello della Pieve** — Apecchio
   - slug: `castello-della-pieve-apecchio`
   - indirizzo: 61040 Castello della Pieve, Province of Pesaro and Urbino
22. **Hotel Bramante & Spa** — Apecchio
   - slug: `hotel-bramante-spa-apecchio`
   - indirizzo: Via Roma, 92, 61049 Urbania PU
23. **Hotel Ristorante Candeleto** — Apecchio
   - slug: `hotel-ristorante-candeleto-apecchio`
   - indirizzo: Via delle Querce, 3, 06026 Pietralunga PG
24. **La Locanda del Borgo** — Apecchio
   - slug: `la-locanda-del-borgo-apecchio`
   - indirizzo: Via Roma, 139, 06026 Pietralunga PG
25. **La Tavola Marche** — Apecchio
   - slug: `la-tavola-marche-apecchio`
   - indirizzo: Via Candigliano, Localita Ca'Camone, 61048 Sant'Angelo in Vado PU
26. **Monte Paradiso Agriturismo** — Apecchio
   - slug: `monte-paradiso-agriturismo-apecchio`
   - indirizzo: vocal. Gorghe, 21, 06026 Perugia PG
27. **Palazzo Donati** — Apecchio
   - slug: `palazzo-donati-apecchio`
   - indirizzo: Corso Bencivenni, 29, 61040 Mercatello sul Metauro PU
28. **Relais Valguerriera** — Apecchio
   - slug: `relais-valguerriera-apecchio`
   - indirizzo: Località Valguerriera, 61042 Apecchio PU
29. **AFFITTACAMERE L'ANGELICA** — Apice
   - slug: `affittacamere-l-angelica-apice`
   - indirizzo: Contrada Schivito, 68, 83035 Grottaminarda AV
30. **Agriturismo "Al Castello del Principe"** — Apice
   - slug: `agriturismo-al-castello-del-principe-apice`
   - indirizzo: Via Federico II, 82018 Località Cubante BN
31. **Agriturismo Tenuta della Madama** — Apice
   - slug: `agriturismo-tenuta-della-madama-apice`
   - indirizzo: Contrada Festola, 83030 Venticano AV
32. **Agriturismo Villa Luisa** — Apice
   - slug: `agriturismo-villa-luisa-apice`
   - indirizzo: Via Federico II, 28, 82018 Calvi BN
33. **B&B Artistico Relax** — Apice
   - slug: `b-b-artistico-relax-apice`
   - indirizzo: Via Appia, 130, 83030 Castello del Lago AV
34. **B&B Domus D'Italia** — Apice
   - slug: `b-b-domus-d-italia-apice`
   - indirizzo: Contrada Pozzillo, 16, 83036 Mirabella Eclano AV
35. **B&B Domus Tua** — Apice
   - slug: `b-b-domus-tua-apice`
   - indirizzo: Via S. Giuseppe, 82020 Pietrelcina BN