# Blocco 401/500 — 35 strutture senza descrizione IT

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

1. **La vispa ceresa** — Canale
   - slug: `la-vispa-ceresa-canale`
   - indirizzo: Via Regina Elena, 7, 12050 Castellinaldo d'Alba CN
2. **Lange Priocca B&B** — Canale
   - slug: `lange-priocca-b-b-canale`
   - indirizzo: Strada Sabbione, 20, 12040 Priocca CN
3. **Spa Roero Relax Resort** — Canale
   - slug: `spa-roero-relax-resort-canale`
   - indirizzo: Via Valentino, 16, 12043 Canale CN
4. **Villa Cornarea** — Canale
   - slug: `villa-cornarea-canale`
   - indirizzo: Via Valentino, 12043 Canale CN
5. **Villa Tiboldi** — Canale
   - slug: `villa-tiboldi-canale`
   - indirizzo: Località Tiboldi, 127, 12043 Canale CN
6. **Albergo Felice - Hotel Falcade** — Canale d'Agordo
   - slug: `albergo-felice-hotel-falcade-canale-d-agordo`
   - indirizzo: Lungo Tegosa, 43, 32020 Caviola BL
7. **Albergo Ristorante Alle Codole** — Canale d'Agordo
   - slug: `albergo-ristorante-alle-codole-canale-d-agordo`
   - indirizzo: Via XX Agosto, 29, 32020 Canale d'Agordo BL
8. **Albergo Rondinella** — Canale d'Agordo
   - slug: `albergo-rondinella-canale-d-agordo`
   - indirizzo: Frazione Feder, 64/66, 32020 Canale d'Agordo BL
9. **B&B Dolomites** — Canale d'Agordo
   - slug: `b-b-dolomites-canale-d-agordo`
   - indirizzo: Via al Forn, 1, 32020 Canale d'Agordo BL
10. **B&B El Lares | B&B L'avez** — Canale d'Agordo
   - slug: `b-b-el-lares-b-b-l-avez-canale-d-agordo`
   - indirizzo: Via Lotta, 34, 32020 Canale d'Agordo BL
11. **Garnì Costa** — Canale d'Agordo
   - slug: `garni-costa-canale-d-agordo`
   - indirizzo: Piazza Serafini, 6, 32020 Canale d'Agordo BL
12. **Hotel Belvedere** — Canale d'Agordo
   - slug: `hotel-belvedere-canale-d-agordo`
   - indirizzo: Via Giuseppe Garibaldi, 28, 32020 Piè Falcade BL
13. **Hotel Centrale** — Canale d'Agordo
   - slug: `hotel-centrale-canale-d-agordo`
   - indirizzo: Piazza Kennedy, 1, 32022 Alleghe BL
14. **Hotel Cristallo** — Canale d'Agordo
   - slug: `hotel-cristallo-canale-d-agordo`
   - indirizzo: Strada Statale 346 del Passo di S. Pellegrino, 22, 38035 Moena TN
15. **Hotel Marianna** — Canale d'Agordo
   - slug: `hotel-marianna-canale-d-agordo`
   - indirizzo: Via Pian, 28, 32020 Rocca Pietore BL
16. **Hotel Orsa Maggiore** — Canale d'Agordo
   - slug: `hotel-orsa-maggiore-canale-d-agordo`
   - indirizzo: Corso Italia, 57, 32020 Piè Falcade BL
17. **Hotel Tyrolia Valverde** — Canale d'Agordo
   - slug: `hotel-tyrolia-valverde-canale-d-agordo`
   - indirizzo: Snc, Località Malga Ciapela, 32020 Rocca Pietore BL
18. **Residence Panorama** — Canale d'Agordo
   - slug: `residence-panorama-canale-d-agordo`
   - indirizzo: Localita' Caverson, 2, 32020 Falcade BL
19. **TEA San Pellegrino** — Canale d'Agordo
   - slug: `tea-san-pellegrino-canale-d-agordo`
   - indirizzo: Località la Mora, 9, 32020 Falcade BL
20. **Agriturismo Casale Sasso** — Canale Monterano
   - slug: `agriturismo-casale-sasso-canale-monterano`
   - indirizzo: Via Monte li Pozzi, 17, 00052 Cerveteri RM
21. **Agriturismo Fontelupo** — Canale Monterano
   - slug: `agriturismo-fontelupo-canale-monterano`
   - indirizzo: Via della Selciatella, 8, 00062 Bracciano RM
22. **Agriturismo Voltarina** — Canale Monterano
   - slug: `agriturismo-voltarina-canale-monterano`
   - indirizzo: Via del tostino, 2, 00062 Bracciano RM
23. **Casacocò** — Canale Monterano
   - slug: `casacoco-canale-monterano`
   - indirizzo: Via Fonte del Gatto, 00066 Manziana RM
24. **Il Casale della Merenda** — Canale Monterano
   - slug: `il-casale-della-merenda-canale-monterano`
   - indirizzo: di merenda 7,, Via Casale, 00060 Canale Monterano RM
25. **La Corte dei Signoretti** — Canale Monterano
   - slug: `la-corte-dei-signoretti-canale-monterano`
   - indirizzo: Via Monterano, 5, 00060 Canale Monterano RM
26. **La Torretta** — Canale Monterano
   - slug: `la-torretta-canale-monterano`
   - indirizzo: S.S. 493 km 32,600, 00060 Canale Monterano RM
27. **Terme di Stigliano - Hotel & Spa** — Canale Monterano
   - slug: `terme-di-stigliano-hotel-spa-canale-monterano`
   - indirizzo: Via Bagni di Stigliano, 2, 00060 Canale Monterano RM
28. **Villa Clodia Relais Weddings** — Canale Monterano
   - slug: `villa-clodia-relais-weddings-canale-monterano`
   - indirizzo: Via del Mattiolo, 3, 00066 Manziana RM
29. **Villa TOJI** — Canale Monterano
   - slug: `villa-toji-canale-monterano`
   - indirizzo: Via del Pero, 1, 00062 Bracciano RM
30. **Al Saraceno - Antica Dimora** — Canaro
   - slug: `al-saraceno-antica-dimora-canaro`
   - indirizzo: Via della Paglia, 26/A, 44121 Ferrara FE
31. **Casaforte La Bastide** — Canaro
   - slug: `casaforte-la-bastide-canaro`
   - indirizzo: Via dei Calzolai, 457, 44123 Ferrara FE
32. **Dimora della Ghiara** — Canaro
   - slug: `dimora-della-ghiara-canaro`
   - indirizzo: Via Formignana, 21, 44121 Ferrara FE
33. **Eco Rooms Ferrara - Affittacamere** — Canaro
   - slug: `eco-rooms-ferrara-affittacamere-canaro`
   - indirizzo: Via del Gambero, 10, 44121 Ferrara FE
34. **Albergo Azola** — Canazei
   - slug: `albergo-azola-canazei`
   - indirizzo: Via de Piè, 7, 38032 Canazei TN
35. **Albergo Canazei** — Canazei
   - slug: `albergo-canazei-canazei`
   - indirizzo: Via di Parèda, 34, 38032 Canazei TN