# Blocco 343/500 — 35 strutture senza descrizione IT

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

1. **Affittacamere Caliani** — Buonconvento
   - slug: `affittacamere-caliani-buonconvento`
   - indirizzo: Piazza Giacomo Matteotti, 6, 53022 Buonconvento SI
2. **Affittacamere Martelli** — Buonconvento
   - slug: `affittacamere-martelli-buonconvento`
   - indirizzo: Via Cassia, 18, 53022 Buonconvento SI
3. **Affittacamere Podere Il Crocifisso** — Buonconvento
   - slug: `affittacamere-podere-il-crocifisso-buonconvento`
   - indirizzo: Strada Statale Cassia Nord, 210, 53022 Buonconvento SI
4. **Agriturismo La Frattina** — Buonconvento
   - slug: `agriturismo-la-frattina-buonconvento`
   - indirizzo: Podere Frattina, 54, 53022 Buonconvento SI
5. **Agriturismo La Ripolina** — Buonconvento
   - slug: `agriturismo-la-ripolina-buonconvento`
   - indirizzo: Pod.Sant'Ignazio, SC di Piana, 173, 53022 Buonconvento SI
6. **Agriturismo Percenna** — Buonconvento
   - slug: `agriturismo-percenna-buonconvento`
   - indirizzo: Via Percenna alta, n. 61, 53022 Buonconvento SI
7. **Agriturismo Podere Cunina** — Buonconvento
   - slug: `agriturismo-podere-cunina-buonconvento`
   - indirizzo: Località Cunina di Sopra, 53022 Buonconvento SI
8. **Agriturismo Quarantallina** — Buonconvento
   - slug: `agriturismo-quarantallina-buonconvento`
   - indirizzo: Podere Quarantallino, 97, 53022 Buonconvento SI
9. **B&B Al Colle** — Buonconvento
   - slug: `b-b-al-colle-buonconvento`
   - indirizzo: Podere Casello, 118, 53022 Buonconvento SI
10. **Borgo Finocchieto** — Buonconvento
   - slug: `borgo-finocchieto-buonconvento`
   - indirizzo: Località Bibbiano, 53022 Buonconvento SI
11. **Casa Vacanze Fornace - Buonconvento** — Buonconvento
   - slug: `casa-vacanze-fornace-buonconvento-buonconvento`
   - indirizzo: Podere Fornace Palazzone 94, SS2, 94, 53022 Buonconvento SI
12. **Castiglion del Bosco, A Rosewood Hotel** — Buonconvento
   - slug: `castiglion-del-bosco-a-rosewood-hotel-buonconvento`
   - indirizzo: SP103, 53024 Castiglion del Bosco SI
13. **Hotel Albergo Ghibellino** — Buonconvento
   - slug: `hotel-albergo-ghibellino-buonconvento`
   - indirizzo: Via D. Alighieri, 2, 53022 Buonconvento SI
14. **La Sosta a Casa Anita** — Buonconvento
   - slug: `la-sosta-a-casa-anita-buonconvento`
   - indirizzo: Via del Sole, 80, 53022 Buonconvento SI
15. **Ombroneta (Casali di Bibbiano) Villa I Winery I Tuscany** — Buonconvento
   - slug: `ombroneta-casali-di-bibbiano-villa-i-winery-i-tu-buonconvento`
   - indirizzo: Bibbiano snc, SP103, 53022 Buonconvento SI
16. **Pieve Sprenna Agriturismo & Tuscan Restaurant** — Buonconvento
   - slug: `pieve-sprenna-agriturismo-tuscan-restaurant-buonconvento`
   - indirizzo: Località Serravalle, 53022 Buonconvento SI
17. **Podere Salicotto** — Buonconvento
   - slug: `podere-salicotto-buonconvento`
   - indirizzo: 53022 Buonconvento SI
18. **San Lorenzo Agriturismo** — Buonconvento
   - slug: `san-lorenzo-agriturismo-buonconvento`
   - indirizzo: Localita' Serravalle, n51, 53022 Buonconvento SI
19. **Villa Armena Luxury Relais** — Buonconvento
   - slug: `villa-armena-luxury-relais-buonconvento`
   - indirizzo: Località Armena, 53022 Buonconvento SI
20. **Albergo Diffuso Borgo dei Greci** — Buonvicino
   - slug: `albergo-diffuso-borgo-dei-greci-buonvicino`
   - indirizzo: Via Principe Umberto, 16, 87020 Buonvicino CS
21. **B&B Antica Locanda San Ciriaco** — Buonvicino
   - slug: `b-b-antica-locanda-san-ciriaco-buonvicino`
   - indirizzo: Via Principe Umberto, 87020 Buonvicino CS
22. **B&B ArteMare** — Buonvicino
   - slug: `b-b-artemare-buonvicino`
   - indirizzo: C.DA, Via Pietra Rossa, 20, 87023 Diamante CS
23. **B&B Biancamano** — Buonvicino
   - slug: `b-b-biancamano-buonvicino`
   - indirizzo: Via Roma, 12, 87020 Maierà CS
24. **B&B Diamante Raro** — Buonvicino
   - slug: `b-b-diamante-raro-buonvicino`
   - indirizzo: Via Antonello da Messina, 51, 87023 Diamante CS
25. **B&B Il Viaggiatore** — Buonvicino
   - slug: `b-b-il-viaggiatore-buonvicino`
   - indirizzo: Via Giovanni Verga, 18, 87023 Diamante CS
26. **B&B Stella Maris Di Salerno Giovanni** — Buonvicino
   - slug: `b-b-stella-maris-di-salerno-giovanni-buonvicino`
   - indirizzo: Via Cavour, 12, 87023 Diamante CS
27. **Beach Hotel** — Buonvicino
   - slug: `beach-hotel-buonvicino`
   - indirizzo: Via Ibico, 2, 87023 Diamante CS
28. **Civico 66 B&B a Diamante Riviera dei Cedri, Calabria** — Buonvicino
   - slug: `civico-66-b-b-a-diamante-riviera-dei-cedri-calab-buonvicino`
   - indirizzo: Via Bruxelles, 66, 87023 Diamante CS
29. **Eco Ostello - Grisolia (Parco del Pollino)** — Buonvicino
   - slug: `eco-ostello-grisolia-parco-del-pollino-buonvicino`
   - indirizzo: Via Annunziata, 87020 Grisolia CS
30. **Hotel Cristina con piscina** — Buonvicino
   - slug: `hotel-cristina-con-piscina-buonvicino`
   - indirizzo: Via Pietra Rossa, 24, 87023 Diamante CS
31. **Hotel Diadema Diamante** — Buonvicino
   - slug: `hotel-diadema-diamante-buonvicino`
   - indirizzo: Via Poseidone, 135/a, 87023 Diamante CS
32. **Hotel Diamond Residence** — Buonvicino
   - slug: `hotel-diamond-residence-buonvicino`
   - indirizzo: Via della Madonnina, 4, 87023 Diamante CS
33. **Hotel La Cometa** — Buonvicino
   - slug: `hotel-la-cometa-buonvicino`
   - indirizzo: Via Panoramica Loc. Ficazzana, 87023 Diamante CS
34. **Hotel Riviera Bleu** — Buonvicino
   - slug: `hotel-riviera-bleu-buonvicino`
   - indirizzo: Via Poseidone, 8, 87023 Diamante CS
35. **La Felce Imperial Hotel** — Buonvicino
   - slug: `la-felce-imperial-hotel-buonvicino`
   - indirizzo: Via Panoramica, 77, 87023 Diamante CS