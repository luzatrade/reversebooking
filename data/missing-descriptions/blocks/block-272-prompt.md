# Blocco 272/500 — 35 strutture senza descrizione IT

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

1. **B&B Stella Vicopisano** — Bientina
   - slug: `b-b-stella-vicopisano-bientina`
   - indirizzo: Via Provinciale Le Per Fornacette, 6, 56010 Vicopisano PI
2. **Calamidoro Hotel** — Bientina
   - slug: `calamidoro-hotel-bientina`
   - indirizzo: V. del Tiglio, 143, 56030 Calcinaia PI
3. **Euro Hotel** — Bientina
   - slug: `euro-hotel-bientina`
   - indirizzo: Viale Europa, 6, 56021 Cascina PI
4. **Hotel Armonia** — Bientina
   - slug: `hotel-armonia-bientina`
   - indirizzo: Piazza Caduti Divisione Acqui Cefalonia Corfù, 11, 56025 Pontedera PI
5. **Hotel Boccaccio** — Bientina
   - slug: `hotel-boccaccio-bientina`
   - indirizzo: V. del Tiglio, 145, 56012 Calcinaia PI
6. **Hotel Il Falchetto** — Bientina
   - slug: `hotel-il-falchetto-bientina`
   - indirizzo: Piazza Caduti Divisione Acqui Cefalonia Corfù, 3, 56025 Pontedera PI
7. **Hotel la Pace Pontedera** — Bientina
   - slug: `hotel-la-pace-pontedera-bientina`
   - indirizzo: Via Belfiore, 4, 56025 Pontedera PI
8. **HOTEL PISA VALDERA** — Bientina
   - slug: `hotel-pisa-valdera-bientina`
   - indirizzo: Via dei Panieracci FI-PI-LI PONSACCO PI IT, 56025 Gello FI
9. **Hotel Residence Easy Space** — Bientina
   - slug: `hotel-residence-easy-space-bientina`
   - indirizzo: Via A. Meucci, 18, 56031 Bientina PI
10. **Hotel Sextum** — Bientina
   - slug: `hotel-sextum-bientina`
   - indirizzo: Via Jacopo del Polta, 51, 56031 Bientina PI
11. **Il Chiesino camere monolocali** — Bientina
   - slug: `il-chiesino-camere-monolocali-bientina`
   - indirizzo: Via Salvo D'Acquisto, 38i, 56025 Pontedera PI
12. **Il Poeta Albergo** — Bientina
   - slug: `il-poeta-albergo-bientina`
   - indirizzo: Via Francesca Sud, 248, 56020 Santa Maria A Monte PI
13. **Stanza Bellaria** — Bientina
   - slug: `stanza-bellaria-bientina`
   - indirizzo: Via U. della Bianca, 16, 56025 Pontedera PI
14. **Bed & Breakfast BENVENUTO** — Binago
   - slug: `bed-breakfast-benvenuto-binago`
   - indirizzo: Via Giacomo Matteotti, 21, 21040 Venegono Superiore VA
15. **Il Castelletto Hotel Ristorante Spa** — Binasco
   - slug: `il-castelletto-hotel-ristorante-spa-binasco`
   - indirizzo: Via dell'Ecologia, 7, 20080 Casarile MI
16. **Arca Pinta** — Binetto
   - slug: `arca-pinta-binetto`
   - indirizzo: Via Arco Pinto, 23, 70032 Bitonto BA
17. **B&b dei Nobili** — Binetto
   - slug: `b-b-dei-nobili-binetto`
   - indirizzo: Via Generale Palmiotti Michele, 39e, 70020 Bitetto BA
18. **B&b La Neviera Toritto** — Binetto
   - slug: `b-b-la-neviera-toritto-binetto`
   - indirizzo: Via Alcide De Gasperi, 1A, 70020 Toritto BA
19. **b&b savarini** — Binetto
   - slug: `b-b-savarini-binetto`
   - indirizzo: Via della Minerva, 7, 70027 Palo del Colle BA
20. **Bed & Breakfast by mARTina** — Binetto
   - slug: `bed-breakfast-by-martina-binetto`
   - indirizzo: Via Sant'Eligio, 3/5, 70026 Modugno BA
21. **bed and breakfast il Bosco** — Binetto
   - slug: `bed-and-breakfast-il-bosco-binetto`
   - indirizzo: Via Magenta, 30, 70032 Bitonto BA
22. **Bed and Breakfast: Nonna Rosa** — Binetto
   - slug: `bed-and-breakfast-nonna-rosa-binetto`
   - indirizzo: Via Pietro Colletta, 6, 70032 Bitonto BA
23. **Comeacasa B&B** — Binetto
   - slug: `comeacasa-b-b-binetto`
   - indirizzo: Via Lunga dei Greci, 47, 70027 Palo del Colle BA
24. **Dimora D'Amato** — Binetto
   - slug: `dimora-d-amato-binetto`
   - indirizzo: Via Roma, 3, 70025 Grumo Appula BA
25. **Dimora Nina** — Binetto
   - slug: `dimora-nina-binetto`
   - indirizzo: Via Torre, 36, 70028 Sannicandro di Bari BA
26. **Hotel Giardino** — Binetto
   - slug: `hotel-giardino-binetto`
   - indirizzo: Strada Statale 96, Km 118, 70026 Modugno BA
27. **La Torre Storica** — Binetto
   - slug: `la-torre-storica-binetto`
   - indirizzo: Piazza Santa Croce, 18, 70027 Palo del Colle BA
28. **San Vito Apartment** — Binetto
   - slug: `san-vito-apartment-binetto`
   - indirizzo: Via Forges Davanzati, 70, 70027 Palo del Colle BA
29. **Santalò Bed & Breakfast** — Binetto
   - slug: `santalo-bed-breakfast-binetto`
   - indirizzo: Corte San Eligio, Vico Storto Sant'Eligio, 9/10, 70032 Bitonto BA
30. **Tenuta Giannini Piscine** — Binetto
   - slug: `tenuta-giannini-piscine-binetto`
   - indirizzo: SP17, km 5, 70020 Binetto BA
31. **Terrazza Romanelli Suites** — Binetto
   - slug: `terrazza-romanelli-suites-binetto`
   - indirizzo: Corte Romanelli, 7, 70032 Bitonto BA
32. **Villa delle Querce Resort – Hotel - Wedding – Meeting** — Binetto
   - slug: `villa-delle-querce-resort-hotel-wedding-meeting-binetto`
   - indirizzo: Contrada Auricarro, Snc, 70027 Palo del Colle BA
33. **Vuelo** — Binetto
   - slug: `vuelo-binetto`
   - indirizzo: Via Cagliari, 19, 70026 Modugno BA
34. **B&B Balcone del Biellese Pettinengo** — Bioglio
   - slug: `b-b-balcone-del-biellese-pettinengo-bioglio`
   - indirizzo: Via Ennio Carando, 16, 13843 Pettinengo BI
35. **Casa Borio bed and breakfast e noleggio ebike** — Bioglio
   - slug: `casa-borio-bed-and-breakfast-e-noleggio-ebike-bioglio`
   - indirizzo: Via Capitano Fiorio Belletti, 73, 13841 Mornengo BI