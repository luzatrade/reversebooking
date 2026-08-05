# Blocco 466/500 — 35 strutture senza descrizione IT

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

1. **Park Hotel Cassano** — Cassano d'Adda
   - slug: `park-hotel-cassano-cassano-d-adda`
   - indirizzo: Via SP, 20062 Cassano d'Adda MI
2. **Agriturismo Tre Pini Cassano delle murge di Plantamura Felicia Antonia** — Cassano delle Murge
   - slug: `agriturismo-tre-pini-cassano-delle-murge-di-plan-cassano-delle-murge`
   - indirizzo: Via Vecchia per Altamura, SP79, km 16, 70020 Cassano delle Murge BA
3. **ARACOELI 20** — Cassano delle Murge
   - slug: `aracoeli-20-cassano-delle-murge`
   - indirizzo: Via Aracoeli, 20, 70020 Cassano delle Murge BA
4. **B&B Corte Campanile** — Cassano delle Murge
   - slug: `b-b-corte-campanile-cassano-delle-murge`
   - indirizzo: Viale Unità D'Italia, 37, 70020 Cassano delle Murge BA
5. **B&B L’altramurgia** — Cassano delle Murge
   - slug: `b-b-l-altramurgia-cassano-delle-murge`
   - indirizzo: Via Beato Giacomo da Bitetto, 18, 70020 Cassano delle Murge BA
6. **B&B L’incontro** — Cassano delle Murge
   - slug: `b-b-l-incontro-cassano-delle-murge`
   - indirizzo: Via Antonio Meucci, 1, 70029 Santeramo In Colle BA
7. **Cinquanta Sfumature B&b Luxury Suites** — Cassano delle Murge
   - slug: `cinquanta-sfumature-b-b-luxury-suites-cassano-delle-murge`
   - indirizzo: Via Ruffo Vincenzo, 1, 70020 Cassano delle Murge BA
8. **Finestre sul Borgo** — Cassano delle Murge
   - slug: `finestre-sul-borgo-cassano-delle-murge`
   - indirizzo: Corso Vittorio Emanuele III, 20, 70020 Cassano delle Murge BA
9. **Hotel Dell'Ulivo Di Cice Antonia** — Cassano delle Murge
   - slug: `hotel-dell-ulivo-di-cice-antonia-cassano-delle-murge`
   - indirizzo: Via Convento, 270, 70020 Cassano delle Murge BA
10. **Il Cantuccio** — Cassano delle Murge
   - slug: `il-cantuccio-cassano-delle-murge`
   - indirizzo: Via Cesare Cantu', 21, 70029 Santeramo in Colle BA
11. **Il Portico Hotel Resort B&B Luxury** — Cassano delle Murge
   - slug: `il-portico-hotel-resort-b-b-luxury-cassano-delle-murge`
   - indirizzo: Contrada Lagogemolo, 70020 Cassano delle Murge BA
12. **La Rosa Blu 2** — Cassano delle Murge
   - slug: `la-rosa-blu-2-cassano-delle-murge`
   - indirizzo: Via Undici Febbraio, 8, 70029 Santeramo in Colle BA
13. **Le Dimore del Garibaldi** — Cassano delle Murge
   - slug: `le-dimore-del-garibaldi-cassano-delle-murge`
   - indirizzo: Via Maggior Turitto, 59, 70020 Cassano delle Murge BA
14. **Palazzo Novecento B&B** — Cassano delle Murge
   - slug: `palazzo-novecento-b-b-cassano-delle-murge`
   - indirizzo: Piazza Giuseppe Garibaldi, 54, 70020 Cassano delle Murge BA
15. **Run House 07 Rooms & Apartments** — Cassano delle Murge
   - slug: `run-house-07-rooms-apartments-cassano-delle-murge`
   - indirizzo: Via Marcantonio Fiore, 7, 70020 Cassano delle Murge BA
16. **Agriturismo Agrihouse Da Marisa** — Cassano Irpino
   - slug: `agriturismo-agrihouse-da-marisa-cassano-irpino`
   - indirizzo: SP164, 3, 83040 Cassano Irpino AV
17. **Agriturismo La Follonella** — Cassano Irpino
   - slug: `agriturismo-la-follonella-cassano-irpino`
   - indirizzo: Via S. Francesco, 83048 Montella AV
18. **Agriturismo Torre Gialluise** — Cassano Irpino
   - slug: `agriturismo-torre-gialluise-cassano-irpino`
   - indirizzo: Via Cupa del Paradiso, SS428, 83040 Gesualdo AV
19. **Sanbarto la casa del borgo** — Cassano Irpino
   - slug: `sanbarto-la-casa-del-borgo-cassano-irpino`
   - indirizzo: Contrada Acquoleila, 12, 83040 Cassano Irpino AV
20. **Vinea del Selvatico Cascina Agricola** — Cassano Irpino
   - slug: `vinea-del-selvatico-cascina-agricola-cassano-irpino`
   - indirizzo: Contrada Selvatico, 83054 Sant'Angelo dei Lombardi AV
21. **Capriccio Art Hotel** — Cassano Spinola
   - slug: `capriccio-art-hotel-cassano-spinola`
   - indirizzo: Via Novi, 20, 15069 Serravalle Scrivia AL
22. **Relais Villa Pomela** — Cassano Spinola
   - slug: `relais-villa-pomela-cassano-spinola`
   - indirizzo: Strada Serravalle, 69, 15067 Novi Ligure AL
23. **Tenuta San Giorgio** — Cassano Spinola
   - slug: `tenuta-san-giorgio-cassano-spinola`
   - indirizzo: SP35ter, 15069 Serravalle Scrivia AL
24. **Villa Girardengo** — Cassano Spinola
   - slug: `villa-girardengo-cassano-spinola`
   - indirizzo: Via Trieste, 2, 15067 Novi Ligure AL
25. **Agriturismo Porta Pantalica** — Cassaro
   - slug: `agriturismo-porta-pantalica-cassaro`
   - indirizzo: c.da Mascà, 96010 Cassaro SR
26. **Casa Vendicari Boutique Hotel** — Cassaro
   - slug: `casa-vendicari-boutique-hotel-cassaro`
   - indirizzo: Contrada Vendicari, 96017 Noto SR
27. **Ciclamino Siracusa（仙客来华夏旅馆）** — Cassaro
   - slug: `ciclamino-siracusa-cassaro`
   - indirizzo: Via Tagliamento, 7/Scala C FLOOR A, 96100 Siracusa SR
28. **FICOPALA SUITES** — Cassaro
   - slug: `ficopala-suites-cassaro`
   - indirizzo: Viale Luigi Cadorna, 12, 96100 Siracusa SR
29. **Hotel Casale Milocca** — Cassaro
   - slug: `hotel-casale-milocca-cassaro`
   - indirizzo: Traversa Case Troia, 13, 96100 Siracusa SR
30. **Hotel Dei Coloniali - Siracusa** — Cassaro
   - slug: `hotel-dei-coloniali-siracusa-cassaro`
   - indirizzo: Via del Porto Grande, 46, 96100 Siracusa SR
31. **Hotel Palazzo Cavalieri** — Cassaro
   - slug: `hotel-palazzo-cavalieri-cassaro`
   - indirizzo: Via Malta, 42, 96100 Siracusa SR
32. **MIRA Borgo di Luce I Monasteri** — Cassaro
   - slug: `mira-borgo-di-luce-i-monasteri-cassaro`
   - indirizzo: Traversa Monasteri di Sotto, 3, 96100 Siracusa SR
33. **Villa delle Stelle** — Cassaro
   - slug: `villa-delle-stelle-cassaro`
   - indirizzo: Strada Provinciale 45, 96010 Cassaro SR
34. **Agriturismo al Maso** — Cassiglio
   - slug: `agriturismo-al-maso-cassiglio`
   - indirizzo: Via Bretto, 16, 24010 Camerata Cornello BG
35. **Agriturismo Al Sass** — Cassiglio
   - slug: `agriturismo-al-sass-cassiglio`
   - indirizzo: Via Provinciale, 20, 24010 Dossena BG