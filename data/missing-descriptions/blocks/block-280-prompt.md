# Blocco 280/500 — 35 strutture senza descrizione IT

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

1. **Rifugio Pra la Peira** — Bobbio Pellice
   - slug: `rifugio-pra-la-peira-bobbio-pellice`
   - indirizzo: località Pra la Peira, 10065 Pramollo TO
2. **The Old Fountain** — Bobbio Pellice
   - slug: `the-old-fountain-bobbio-pellice`
   - indirizzo: Via Inverso Rolandi, 41, 10066 Torre Pellice TO
3. **Agriturismo L'Antico Sapore** — Boca
   - slug: `agriturismo-l-antico-sapore-boca`
   - indirizzo: CODICE CIN IT003019B5NLXE3BNY/ Codice CIR 003019-AGR-00002, Str. vicinale Bellaria, 3, 28010 Boca NO
4. **Albergo Aurora** — Boca
   - slug: `albergo-aurora-boca`
   - indirizzo: Via IV Novembre, 8, 28075 Grignasco NO
5. **Albergo Valsesiana** — Boca
   - slug: `albergo-valsesiana-boca`
   - indirizzo: Corso XXV Aprile, 37, 28024 Gozzano NO
6. **B&B Le Coccinelle Grignasco** — Boca
   - slug: `b-b-le-coccinelle-grignasco-boca`
   - indirizzo: Via Alessandro Volta, 47, 28075 Grignasco NO
7. **Hotel Baiardo** — Boca
   - slug: `hotel-baiardo-boca`
   - indirizzo: Via Novara, 337, 28078 Romagnano Sesia NO
8. **Hotel del Corso** — Boca
   - slug: `hotel-del-corso-boca`
   - indirizzo: Corso Sempione, 110, 28021 Borgomanero NO
9. **Hotel Rinaldo Apartments** — Boca
   - slug: `hotel-rinaldo-apartments-boca`
   - indirizzo: Via U. Foscolo, 31, 28021 Borgomanero NO
10. **Le Colline di Maggiora** — Boca
   - slug: `le-colline-di-maggiora-boca`
   - indirizzo: Via dei Mille, 26, 28014 Maggiora NO
11. **Momi** — Boca
   - slug: `momi-boca`
   - indirizzo: Corso Garibaldi, 48, 28021 Borgomanero NO
12. **Otium B&B** — Boca
   - slug: `otium-b-b-boca`
   - indirizzo: Cascina Stoccada, 5, 28010 Cavallirio NO
13. **B&B & VITA con piscina** — Bocchigliero
   - slug: `b-b-vita-con-piscina-bocchigliero`
   - indirizzo: Via Bulgaria, 17, 87060 Mirto CS
14. **B&B 3 Medaglie** — Bocchigliero
   - slug: `b-b-3-medaglie-bocchigliero`
   - indirizzo: Via Alessandro Volta, 14, 87036 Rende CS
15. **B&B Casa Federico** — Bocchigliero
   - slug: `b-b-casa-federico-bocchigliero`
   - indirizzo: Via Calvario, 34, 87055 San Giovanni in Fiore CS
16. **B&B Casa Gabriele** — Bocchigliero
   - slug: `b-b-casa-gabriele-bocchigliero`
   - indirizzo: Contrada Oliveto Longo, 87064 Corigliano-Rossano CS
17. **B&B DON EMILIO** — Bocchigliero
   - slug: `b-b-don-emilio-bocchigliero`
   - indirizzo: Via Antonio Gramsci, 87052 Moccone CS
18. **B&B La Casa di Gioacchino** — Bocchigliero
   - slug: `b-b-la-casa-di-gioacchino-bocchigliero`
   - indirizzo: Via G. B. Falcone, 4, 87055 San Giovanni in Fiore CS
19. **B&B Loricaly** — Bocchigliero
   - slug: `b-b-loricaly-bocchigliero`
   - indirizzo: Via Michele de Marco, 87055 Lorica CS
20. **B&B Mamma Elena** — Bocchigliero
   - slug: `b-b-mamma-elena-bocchigliero`
   - indirizzo: Via Roma, 8, 87050 Rovito CS
21. **B&B Mastro Giò** — Bocchigliero
   - slug: `b-b-mastro-gio-bocchigliero`
   - indirizzo: Via Marco Polo, 22, 87055 San Giovanni in Fiore CS
22. **B&b Risveglio nel Borgo** — Bocchigliero
   - slug: `b-b-risveglio-nel-borgo-bocchigliero`
   - indirizzo: Via Vincenzo Monaco, 55, 87010 San Donato di Ninea CS
23. **B&B Rossini Luxury 2 - COSENZA** — Bocchigliero
   - slug: `b-b-rossini-luxury-2-cosenza-bocchigliero`
   - indirizzo: Traversa S. Proclo, 87100 Cosenza CS
24. **B&B Villacristiano** — Bocchigliero
   - slug: `b-b-villacristiano-bocchigliero`
   - indirizzo: Via A. de Gasperi, 32b, 87040 Marano Marchesato CS
25. **Bed & Breakfast Lufra** — Bocchigliero
   - slug: `bed-breakfast-lufra-bocchigliero`
   - indirizzo: Via G. Marconi, 80, 87036 Rende CS
26. **Casale Marcalia - Bed & Breakfast** — Bocchigliero
   - slug: `casale-marcalia-bed-breakfast-bocchigliero`
   - indirizzo: Contrada Marcalia, sn, 87064 Corigliano CS
27. **hotel e azienda agricola Renzini** — Bocchigliero
   - slug: `hotel-e-azienda-agricola-renzini-bocchigliero`
   - indirizzo: Via Russi, 193, 87060 Bocchigliero CS
28. **Il Falco e il Gabbiano B&B** — Bocchigliero
   - slug: `il-falco-e-il-gabbiano-b-b-bocchigliero`
   - indirizzo: Via Monaco, 87064 Schiavonea CS
29. **La Casina B&B** — Bocchigliero
   - slug: `la-casina-b-b-bocchigliero`
   - indirizzo: Via dei Navigatori, 87064 Schiavonea CS
30. **Mini B&B - Enrico Fermi** — Bocchigliero
   - slug: `mini-b-b-enrico-fermi-bocchigliero`
   - indirizzo: Via Enrico Fermi, 23, 87036 Quattromiglia CS
31. **Ntrizzi - workshop, b&b, wellbeing** — Bocchigliero
   - slug: `ntrizzi-workshop-b-b-wellbeing-bocchigliero`
   - indirizzo: Via Motta, 90, 87066 Longobucco CS
32. **B&B Al Vicolo del Gallo** — Boccioleto
   - slug: `b-b-al-vicolo-del-gallo-boccioleto`
   - indirizzo: Vicolo del gallo, 5, 13019 Varallo VC
33. **B&B Il Barsot** — Boccioleto
   - slug: `b-b-il-barsot-boccioleto`
   - indirizzo: Via Pela, 7, 28028 Pettenasco NO
34. **Boccioleto Resort&Spa** — Boccioleto
   - slug: `boccioleto-resort-spa-boccioleto`
   - indirizzo: Via Collegalli, 3, 50050 Montaione FI
35. **Ospitalità rurale familiare Land Wasser** — Boccioleto
   - slug: `ospitalita-rurale-familiare-land-wasser-boccioleto`
   - indirizzo: 13020 Bocciolaro VC