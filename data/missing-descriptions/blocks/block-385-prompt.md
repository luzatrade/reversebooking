# Blocco 385/500 — 35 strutture senza descrizione IT

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

1. **La Bursch Country House** — Campiglia Cervo
   - slug: `la-bursch-country-house-campiglia-cervo`
   - indirizzo: Frazione Oretto, 22, 13812 Campiglia Cervo BI
2. **Le Camere di Naturalys - ospitalità in azienda agricola** — Campiglia Cervo
   - slug: `le-camere-di-naturalys-ospitalita-in-azienda-agr-campiglia-cervo`
   - indirizzo: frazione Zuino 16, 11020 Gaby AO
3. **B&B Contarine** — Campiglia dei Berici
   - slug: `b-b-contarine-campiglia-dei-berici`
   - indirizzo: Via Doge Contarini, 9, 35030 Cinto Euganeo PD
4. **Hotel Ristorante Villa Lussana** — Campiglia dei Berici
   - slug: `hotel-ristorante-villa-lussana-campiglia-dei-berici`
   - indirizzo: Via Chiesa Teolo, 1, 35037 Teolo PD
5. **Acquaviva Experience Hotel** — Campiglia Marittima
   - slug: `acquaviva-experience-hotel-campiglia-marittima`
   - indirizzo: Via Aurelia Nord, 8, 57027 San Vincenzo LI
6. **Agriturismo La Fontanella & Glamping** — Campiglia Marittima
   - slug: `agriturismo-la-fontanella-glamping-campiglia-marittima`
   - indirizzo: Località Fontanella, 57028 Suvereto LI
7. **B&B Vecchia Fonte** — Campiglia Marittima
   - slug: `b-b-vecchia-fonte-campiglia-marittima`
   - indirizzo: Via di S. Vincenzo, 10, 57021 Campiglia Marittima LI
8. **Bed & Breakfast SUVERETO** — Campiglia Marittima
   - slug: `bed-breakfast-suvereto-campiglia-marittima`
   - indirizzo: Via Dante Alighieri, 4, 57028 Suvereto LI
9. **Belvedere Bed & Breakfast** — Campiglia Marittima
   - slug: `belvedere-bed-breakfast-campiglia-marittima`
   - indirizzo: Località Belvedere, 33, 57028 Suvereto LI
10. **Calidario Terme Etrusche Resort & Spa** — Campiglia Marittima
   - slug: `calidario-terme-etrusche-resort-spa-campiglia-marittima`
   - indirizzo: Via di Caldana, 6, 57021 Venturina Terme LI
11. **Campeggio Blucamp Natural Village** — Campiglia Marittima
   - slug: `campeggio-blucamp-natural-village-campiglia-marittima`
   - indirizzo: Via Tuttiventi, 18, 57021 Campiglia Marittima LI
12. **Castello Bonaria - Wine & SPA Resort Toscana** — Campiglia Marittima
   - slug: `castello-bonaria-wine-spa-resort-toscana-campiglia-marittima`
   - indirizzo: Via di Venturina, 17, 57021 Campiglia Marittima LI
13. **Civicouno Campiglia** — Campiglia Marittima
   - slug: `civicouno-campiglia-campiglia-marittima`
   - indirizzo: Via 25 Luglio, 1, 57021 Campiglia Marittima LI
14. **Hotel Grecale - Venturina Terme** — Campiglia Marittima
   - slug: `hotel-grecale-venturina-terme-campiglia-marittima`
   - indirizzo: Via della Comunità Europea, 22, 57021 Venturina Terme LI
15. **Hotel Ristorante Kontiki San Vincenzo - HOTEL vicino al mare con PISCINA, parcheggio e SPIAGGIA PRIVATA San Vincenzo** — Campiglia Marittima
   - slug: `hotel-ristorante-kontiki-san-vincenzo-hotel-vici-campiglia-marittima`
   - indirizzo: Via Umbria, 2, 57027 San Vincenzo LI
16. **Hotel The Flash - Venturina Terme** — Campiglia Marittima
   - slug: `hotel-the-flash-venturina-terme-campiglia-marittima`
   - indirizzo: Via della Stazione, 30, 57021 Campiglia Marittima LI
17. **Il Chiostro Appartamenti e Suites** — Campiglia Marittima
   - slug: `il-chiostro-appartamenti-e-suites-campiglia-marittima`
   - indirizzo: Via del Crocifisso, 14, 57028 Suvereto LI
18. **IL PIEVANO B&B** — Campiglia Marittima
   - slug: `il-pievano-b-b-campiglia-marittima`
   - indirizzo: Via delle Mimosa, 9, 57021 Cafaggio LI
19. **Le Corti di Montepitti Residence** — Campiglia Marittima
   - slug: `le-corti-di-montepitti-residence-campiglia-marittima`
   - indirizzo: Via Suveretana, 232, 57028 Suvereto LI
20. **Residence le Corti del Sole** — Campiglia Marittima
   - slug: `residence-le-corti-del-sole-campiglia-marittima`
   - indirizzo: Viale delle Terme, 32 e 34, 57021 Venturina Terme LI
21. **Residence Podere San Giuseppe** — Campiglia Marittima
   - slug: `residence-podere-san-giuseppe-campiglia-marittima`
   - indirizzo: Via Aurelia Sud, 55, 57027 San Vincenzo LI
22. **Riva degli Etruschi** — Campiglia Marittima
   - slug: `riva-degli-etruschi-campiglia-marittima`
   - indirizzo: Via della Principessa, 120, 57027 San Vincenzo LI
23. **Terme di Venturina** — Campiglia Marittima
   - slug: `terme-di-venturina-campiglia-marittima`
   - indirizzo: Viale delle Terme, 36/40, 57021 Venturina Terme LI
24. **Villa Terme di Caldana B&B** — Campiglia Marittima
   - slug: `villa-terme-di-caldana-b-b-campiglia-marittima`
   - indirizzo: Via del Parco Termale, 33, 57021 Venturina Terme LI
25. **Amaranto B&B** — Campiglione Fenile
   - slug: `amaranto-b-b-campiglione-fenile`
   - indirizzo: Via Cavour, 51, 10060 Campiglione Fenile TO
26. **Azienda Agrituristica Cascina Nuova** — Campiglione Fenile
   - slug: `azienda-agrituristica-cascina-nuova-campiglione-fenile`
   - indirizzo: Via Soleabò, 27, 12032 Barge CN
27. **Le 5 Frecce** — Campiglione Fenile
   - slug: `le-5-frecce-campiglione-fenile`
   - indirizzo: Strada Vecchia di Pinerolo, 6, 10060 Campiglione Fenile TO
28. **Agriturismo "Pri Cirili"** — Campione d'Italia
   - slug: `agriturismo-pri-cirili-campione-d-italia`
   - indirizzo: Via L. Bratuz, 6, 34070 Doberdò del Lago GO
29. **Agriturismo ai Feudi** — Campione d'Italia
   - slug: `agriturismo-ai-feudi-campione-d-italia`
   - indirizzo: Via Venuti, 11, 34072 Gradisca d'Isonzo GO
30. **Agriturismo alla Madonna Azienda agricola Paolo Vidoz** — Campione d'Italia
   - slug: `agriturismo-alla-madonna-azienda-agricola-paolo-campione-d-italia`
   - indirizzo: Stradone della Mainizza, 424, 34170 Gorizia GO
31. **Agriturismo Casa Campione** — Campione d'Italia
   - slug: `agriturismo-casa-campione-campione-d-italia`
   - indirizzo: Località Il Paduletto Frazione, Vicino Vivaio Forestale Le Venaie, 58036 Sticciano Scalo GR
32. **Azienda Agricola Campion** — Campione d'Italia
   - slug: `azienda-agricola-campion-campione-d-italia`
   - indirizzo: Via Campion, 2, 31049 Valdobbiadene TV
33. **B&B Il giardino botanico** — Campione d'Italia
   - slug: `b-b-il-giardino-botanico-campione-d-italia`
   - indirizzo: Via Mazzini, 21, 22026 Maslianico CO
34. **Campione 5** — Campione d'Italia
   - slug: `campione-5-campione-d-italia`
   - indirizzo: Via Francesco Campione, 5, 70124 Bari BA
35. **Casa sul lago** — Campione d'Italia
   - slug: `casa-sul-lago-campione-d-italia`
   - indirizzo: Via Campione 65, 6816 Bissone, Svizzera