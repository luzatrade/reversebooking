# Blocco 73/500 — 35 strutture senza descrizione IT

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

1. **Bed and Breakfast Simoamour** — Alia
   - slug: `bed-and-breakfast-simoamour-alia`
   - indirizzo: Via Pietro Nenni, 73, 90025 Lercara Friddi PA
2. **Casa Lo Iacono** — Alia
   - slug: `casa-lo-iacono-alia`
   - indirizzo: SS121, 90027 Petralia Sottana PA
3. **Crocco D'Oro Di Sireci Vincenza** — Alia
   - slug: `crocco-d-oro-di-sireci-vincenza-alia`
   - indirizzo: Via Giuseppe Garibaldi, 75, 90022 Caltavuturo PA
4. **Equiturismo San Lorenzo - Villa KAMARA** — Alia
   - slug: `equiturismo-san-lorenzo-villa-kamara-alia`
   - indirizzo: Via San Lorenzo, 19, 92022 Cammarata AG
5. **Le Camere dell’Emiro** — Alia
   - slug: `le-camere-dell-emiro-alia`
   - indirizzo: Via Bagnati, 8, 90030 Castronovo di Sicilia PA
6. **Mandra Chiusilla** — Alia
   - slug: `mandra-chiusilla-alia`
   - indirizzo: Contrada Chiusilla, 90016 Collesano PA
7. **Masseria Acque di Palermo** — Alia
   - slug: `masseria-acque-di-palermo-alia`
   - indirizzo: SS121, km 195/700, 90030 Roccapalumba PA
8. **Porta Soprana luxury guest House & spa** — Alia
   - slug: `porta-soprana-luxury-guest-house-spa-alia`
   - indirizzo: Via Regina Elena, 19, 90020 Sclafani Bagni PA
9. **Sutta L'Archi** — Alia
   - slug: `sutta-l-archi-alia`
   - indirizzo: Via Archi, 23, 90021 Alia PA
10. **Trinacria Luxury Rooms Caccamo** — Alia
   - slug: `trinacria-luxury-rooms-caccamo-alia`
   - indirizzo: Corso Umberto I, 84, 90012 Caccamo PA
11. **Villa Dafne** — Alia
   - slug: `villa-dafne-alia`
   - indirizzo: Contrada Cozzo di Cicero, 90021 Alia PA
12. **Villa Della Mimosa** — Alia
   - slug: `villa-della-mimosa-alia`
   - indirizzo: Contrada Bordone, Alia 90021, 90021 Alia PA
13. **Villa Lachesi a Caccamo PA** — Alia
   - slug: `villa-lachesi-a-caccamo-pa-alia`
   - indirizzo: Contrada Santa Nicola s, n.c- 21, 90012 Caccamo PA
14. **Agriturismo 'U Vardar** — Aliano
   - slug: `agriturismo-u-vardar-aliano`
   - indirizzo: Contrada Galdo, 85030 San Chirico Raparo PZ
15. **Agriturismo Masseria Castiglione** — Aliano
   - slug: `agriturismo-masseria-castiglione-aliano`
   - indirizzo: 85010 Castiglione PZ
16. **Al Bosco delle Api** — Aliano
   - slug: `al-bosco-delle-api-aliano`
   - indirizzo: Contrada Parriello, snc, 85010 Gallicchio PZ
17. **B&B Coast to Coast - Basilicata** — Aliano
   - slug: `b-b-coast-to-coast-basilicata-aliano`
   - indirizzo: Via Pruzio, 8, 85010 Armento PZ
18. **Bed & Breakfast del Corso** — Aliano
   - slug: `bed-breakfast-del-corso-aliano`
   - indirizzo: Via Croce, 9, 85030 San Martino D'agri PZ
19. **BnB. Piter Pan** — Aliano
   - slug: `bnb-piter-pan-aliano`
   - indirizzo: Via Largo santa Maria della Rupe, per arrivare al parcheggio, Largo S. Lorenzo, 4, 85030 San Martino d'Agri PZ
20. **Casa dell'Americano** — Aliano
   - slug: `casa-dell-americano-aliano`
   - indirizzo: Via Martiri D'Ungheria, 6, 75010 Aliano MT
21. **Casa Vacanze ZIO PEPPE** — Aliano
   - slug: `casa-vacanze-zio-peppe-aliano`
   - indirizzo: Corso Vittorio Emanuele, 25, 85038 Senise PZ
22. **Girastrittue, Rooms for Rent** — Aliano
   - slug: `girastrittue-rooms-for-rent-aliano`
   - indirizzo: Via Conte di Salemi, 2, 75021 Colobraro MT
23. **Il Casale dei Calanchi** — Aliano
   - slug: `il-casale-dei-calanchi-aliano`
   - indirizzo: Località Pantano, 75010 Aliano MT
24. **Il Gattopardo** — Aliano
   - slug: `il-gattopardo-aliano`
   - indirizzo: Via S. Di Giacomo, 9, 85037 Sant'Arcangelo PZ
25. **Il Paesaggio Lunare - Affittacamere** — Aliano
   - slug: `il-paesaggio-lunare-affittacamere-aliano`
   - indirizzo: Via Sole, 20, 75010 Aliano MT
26. **La Casa dei Panorami** — Aliano
   - slug: `la-casa-dei-panorami-aliano`
   - indirizzo: Viale Vittorio Veneto, 19, 75021 Colobraro MT
27. **La Sterpina** — Aliano
   - slug: `la-sterpina-aliano`
   - indirizzo: Contrada La Sterpina, snc, 85037 San Brancato PZ
28. **Palazzo Scelzi** — Aliano
   - slug: `palazzo-scelzi-aliano`
   - indirizzo: Piazza S. Luigi Gonzaga, 1/A, 75010 Aliano MT
29. **Priore** — Aliano
   - slug: `priore-aliano`
   - indirizzo: Via Zanardelli, 2, 85012 Corleto Perticara PZ
30. **Terra d'Oriente - Affittacamere Gallicchio** — Aliano
   - slug: `terra-d-oriente-affittacamere-gallicchio-aliano`
   - indirizzo: Contrada S. Nicola, 85010 Gallicchio PZ
31. **Agriturismo Da.matra'** — Alice Bel Colle
   - slug: `agriturismo-da-matra-alice-bel-colle`
   - indirizzo: Str. Pizio, 16, 15016 Cassine AL
32. **Albergo Tenco by Bottega** — Alice Bel Colle
   - slug: `albergo-tenco-by-bottega-alice-bel-colle`
   - indirizzo: 15010 Ricaldone AL
33. **B&B A Casa di Anna** — Alice Bel Colle
   - slug: `b-b-a-casa-di-anna-alice-bel-colle`
   - indirizzo: Via Saborello, 27, 14049 Vaglio Serra AT
34. **B&B A Modo Mio** — Alice Bel Colle
   - slug: `b-b-a-modo-mio-alice-bel-colle`
   - indirizzo: Via, Regione Bagnario, 1, 15019 Strevi AL
35. **B&B Casa Fiorita** — Alice Bel Colle
   - slug: `b-b-casa-fiorita-alice-bel-colle`
   - indirizzo: Str. Moirano, 244, 15011 Ghiazza AL