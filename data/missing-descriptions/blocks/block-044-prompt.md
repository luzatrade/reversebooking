# Blocco 44/500 — 35 strutture senza descrizione IT

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

1. **B&B Ca' D'ambra** — Ala di Stura
   - slug: `b-b-ca-d-ambra-ala-di-stura`
   - indirizzo: Via Monti, 1, 10070 Bonzo TO
2. **B&B La Crestolina - CIN IT001003C1VBAR23UF** — Ala di Stura
   - slug: `b-b-la-crestolina-cin-it001003c1vbar23uf-ala-di-stura`
   - indirizzo: Frazione Cresto, 49, 10070 Ala di Stura TO
3. **baite del baus** — Ala di Stura
   - slug: `baite-del-baus-ala-di-stura`
   - indirizzo: Frazione Martassina, 33, 10070 Ala di Stura TO
4. **bnbuja** — Ala di Stura
   - slug: `bnbuja-ala-di-stura`
   - indirizzo: Frazione Mondrone, 10070 Ala di Stura TO
5. **Casa Curnet** — Ala di Stura
   - slug: `casa-curnet-ala-di-stura`
   - indirizzo: Frazione Cornetti, 61, 10070 Balme TO
6. **Grand Hotel Ala di Stura** — Ala di Stura
   - slug: `grand-hotel-ala-di-stura-ala-di-stura`
   - indirizzo: Via Pian del Tetto, 2, 10070 Ala di Stura TO
7. **Hotel Raggio di Sole** — Ala di Stura
   - slug: `hotel-raggio-di-sole-ala-di-stura`
   - indirizzo: Via Ceres, 7, 10070 Ala di Stura TO
8. **il nido d'Ala** — Ala di Stura
   - slug: `il-nido-d-ala-ala-di-stura`
   - indirizzo: Via Ceres, 15, 10070 Ala di Stura TO
9. **Les Montagnards** — Ala di Stura
   - slug: `les-montagnards-ala-di-stura`
   - indirizzo: Frazione Cornetti, 73, 10070 Balme TO
10. **Rifugio Lungimala** — Ala di Stura
   - slug: `rifugio-lungimala-ala-di-stura`
   - indirizzo: 10070 Ala di Stura TO
11. **Villa Biino 200s** — Ala di Stura
   - slug: `villa-biino-200s-ala-di-stura`
   - indirizzo: Via Balme, 19, 10070 Ala di Stura TO
12. **Agriturismo Alagna** — Alagna
   - slug: `agriturismo-alagna-alagna`
   - indirizzo: Frazione Rusa, 13021 Alagna Valsesia VC
13. **Albergo Montagna di Luce** — Alagna
   - slug: `albergo-montagna-di-luce-alagna`
   - indirizzo: Frazione Pedemonte, 19, 13021 Alagna Valsesia VC
14. **Albergo Monte Rosa** — Alagna
   - slug: `albergo-monte-rosa-alagna`
   - indirizzo: Piazza degli alberghi, 12, 13021 Alagna Valsesia VC
15. **B & B Slapiana** — Alagna
   - slug: `b-b-slapiana-alagna`
   - indirizzo: Frazione Piana Fontana 12, 13020 Mollia VC
16. **B&B Alpe Sattal** — Alagna
   - slug: `b-b-alpe-sattal-alagna`
   - indirizzo: Loc. Alpe Sattal, 13021 Alagna Valsesia VC
17. **Casa dei Fiori** — Alagna
   - slug: `casa-dei-fiori-alagna`
   - indirizzo: Frazione Bonda, 28, 13021 Alagna Valsesia VC
18. **Hotel Cristallo Alagna Valsesia** — Alagna
   - slug: `hotel-cristallo-alagna-valsesia-alagna`
   - indirizzo: Piazza Degli Alberghi, 7, 13021 Alagna Valsesia VC
19. **Hotel NH Collection Alagna Mirtillo Rosso** — Alagna
   - slug: `hotel-nh-collection-alagna-mirtillo-rosso-alagna`
   - indirizzo: Strada della Barriera, 8, 13021 Riva Valdobbia VC
20. **L'aria di Casa** — Alagna
   - slug: `l-aria-di-casa-alagna`
   - indirizzo: Via Martiri della Libertà incrocio, Via dei Walser, 39, 13021 Alagna Valsesia VC
21. **LE MIE RADICI** — Alagna
   - slug: `le-mie-radici-alagna`
   - indirizzo: Frazione Failungo, 45, 13020 Pila VC
22. **Mh Olen Hotel** — Alagna
   - slug: `mh-olen-hotel-alagna`
   - indirizzo: Frazione Bonda, 17, 13021 Alagna Valsesia VC
23. **MIRA Alagna Mountain Resort & SPA** — Alagna
   - slug: `mira-alagna-mountain-resort-spa-alagna`
   - indirizzo: Via Martiri della Libertà, 1, 13021 Alagna Valsesia VC
24. **Pensione Genzianella** — Alagna
   - slug: `pensione-genzianella-alagna`
   - indirizzo: 13021 Alagna Valsesia VC
25. **Pietre Gemelle Resort** — Alagna
   - slug: `pietre-gemelle-resort-alagna`
   - indirizzo: Località, Via Pietre Gemelle, 13021 Riva Valdobbia VC
26. **Residence Indren Hus** — Alagna
   - slug: `residence-indren-hus-alagna`
   - indirizzo: Via dei Walser, 18, 13021 Alagna Valsesia VC
27. **Residence Kalipe** — Alagna
   - slug: `residence-kalipe-alagna`
   - indirizzo: Via dei Walser, 14, 13021 Alagna Valsesia VC
28. **Residence Mary di Ferraris Stefania** — Alagna
   - slug: `residence-mary-di-ferraris-stefania-alagna`
   - indirizzo: Frazione alla Chiesa, 1, 13021 Alagna Valsesia VC
29. **Rifugio Casa Lobietti** — Alagna
   - slug: `rifugio-casa-lobietti-alagna`
   - indirizzo: Otra Sesia, 4, 13020 Mollia VC
30. **Tre Alberi Liberi** — Alagna
   - slug: `tre-alberi-liberi-alagna`
   - indirizzo: Via Nicolao Sottile, 7, 13021 Riva Valdobbia VC
31. **Zimmer Casa Prati di Marisa Castagnola** — Alagna
   - slug: `zimmer-casa-prati-di-marisa-castagnola-alagna`
   - indirizzo: 13021 Alagna Valsesia VC
32. **Appartamenti Baita Reale** — Alagna Valsesia
   - slug: `appartamenti-baita-reale-alagna-valsesia`
   - indirizzo: Frazione reale inferiore, 6, 13021 Alagna Valsesia VC
33. **B&B La posa sul lago** — Alagna Valsesia
   - slug: `b-b-la-posa-sul-lago-alagna-valsesia`
   - indirizzo: Regione Santa Croce, 4, SP11, 13029 Rimasco VC
34. **Chalet du Lys** — Alagna Valsesia
   - slug: `chalet-du-lys-alagna-valsesia`
   - indirizzo: Località Staffal, 14, 11020 Tache AO
35. **Ellex** — Alagna Valsesia
   - slug: `ellex-alagna-valsesia`
   - indirizzo: Localita' Tschaval, 6, 11020 Gressoney-La-Trinité AO