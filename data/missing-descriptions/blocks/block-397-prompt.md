# Blocco 397/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Erbanito** — Campora
   - slug: `agriturismo-erbanito-campora`
   - indirizzo: Contrada Palizzo, 6, 84030 San Rufo SA
2. **Agriturismo Il Piano della Corte** — Campora
   - slug: `agriturismo-il-piano-della-corte-campora`
   - indirizzo: SP269b, 84052 Ceraso SA
3. **Agriturismo L'Occhiano** — Campora
   - slug: `agriturismo-l-occhiano-campora`
   - indirizzo: Felitto, Difesa Lombi, 84055 Felitto SA
4. **Agriturismo La Fattoria D'Urso Gennaro** — Campora
   - slug: `agriturismo-la-fattoria-d-urso-gennaro-campora`
   - indirizzo: Contrada Casalicchio, 2, 84020 Aquara SA
5. **Agriturismo Le Prunelle** — Campora
   - slug: `agriturismo-le-prunelle-campora`
   - indirizzo: Località Maddaloni, 84040 Cannalonga SA
6. **Agriturismo Nonno Ninuccio** — Campora
   - slug: `agriturismo-nonno-ninuccio-campora`
   - indirizzo: Contrada Vetralongo Località Pantane, 84056 Gioi SA
7. **Agriturismo San Basilio** — Campora
   - slug: `agriturismo-san-basilio-campora`
   - indirizzo: Località Preolella, 84070 Salento SA
8. **Agriturismo San Giorgio** — Campora
   - slug: `agriturismo-san-giorgio-campora`
   - indirizzo: Via San Giorgio, 14, 84040 Casal Velino SA
9. **APRILE Bed and Breakfast** — Campora
   - slug: `aprile-bed-and-breakfast-campora`
   - indirizzo: Via Mercato, 4, 87032 Amantea CS
10. **Azienda Agrituristica La Rocca Degli Ulivi** — Campora
   - slug: `azienda-agrituristica-la-rocca-degli-ulivi-campora`
   - indirizzo: Strada Statale 12 Loc, Volpino, 84027 Sant'Angelo A Fasanella SA
11. **B&B La Baia del Porto** — Campora
   - slug: `b-b-la-baia-del-porto-campora`
   - indirizzo: Variante SS18 n°11, 87032 Amantea CS
12. **B&B La Rosa** — Campora
   - slug: `b-b-la-rosa-campora`
   - indirizzo: Via delle Rose, 21, 87032 Campora San Giovanni CS
13. **Domus Letizia** — Campora
   - slug: `domus-letizia-campora`
   - indirizzo: Largo Regina Margherita, 84040 Campora SA
14. **Le Querce Farmhouse** — Campora
   - slug: `le-querce-farmhouse-campora`
   - indirizzo: Via Crocicchie, 9, 84043 Agropoli SA
15. **Villa Lupara Agriturismo biologico** — Campora
   - slug: `villa-lupara-agriturismo-biologico-campora`
   - indirizzo: Via Fossa Lupara, 84125 Salerno SA
16. **Agriturismo Sirignano Wine Resort** — Camporeale
   - slug: `agriturismo-sirignano-wine-resort-camporeale`
   - indirizzo: 90046 Sirignano PA
17. **Agriturismo Tarantola** — Camporeale
   - slug: `agriturismo-tarantola-camporeale`
   - indirizzo: Str. Contrada Tarantola, 91011 Alcamo TP
18. **B&B Casa Azul** — Camporeale
   - slug: `b-b-casa-azul-camporeale`
   - indirizzo: Contrada Molinello, 31, 91011 Castellammare del Golfo TP
19. **B&B Terre di Gratia** — Camporeale
   - slug: `b-b-terre-di-gratia-camporeale`
   - indirizzo: Via Sciortino, 10, 90043 Camporeale PA
20. **Borgo degli Angeli Wellness & Resort** — Camporeale
   - slug: `borgo-degli-angeli-wellness-resort-camporeale`
   - indirizzo: SS 113 Settentrionale Sicula, 90047 Partinico PA
21. **Masseria Pernice** — Camporeale
   - slug: `masseria-pernice-camporeale`
   - indirizzo: SP 71 km 1, 90047 Monreale PA
22. **AGRITURISMO BORGO BIAIA** — Camporgiano
   - slug: `agriturismo-borgo-biaia-camporgiano`
   - indirizzo: Località Biaia, 1/a, 55031 Camporgiano LU
23. **Agriturismo Calabricchia** — Camporgiano
   - slug: `agriturismo-calabricchia-camporgiano`
   - indirizzo: Località Colle Aprico, 1, 55031 Colle Aprico LU
24. **Agriturismo Cilla** — Camporgiano
   - slug: `agriturismo-cilla-camporgiano`
   - indirizzo: Via Sant'Antonio, 23, 55039 Giuncugnano LU
25. **Agriturismo Il Corniolo** — Camporgiano
   - slug: `agriturismo-il-corniolo-camporgiano`
   - indirizzo: Località Le Prade, 25, 55033 Castiglione di Garfagnana LU
26. **Agriturismo La Grotta Della Faina** — Camporgiano
   - slug: `agriturismo-la-grotta-della-faina-camporgiano`
   - indirizzo: Villa Collemandina, Località Bosco, 55030 Lucca LU
27. **Agriturismo Polla Piscina Ristorante Azienda Vinicola** — Camporgiano
   - slug: `agriturismo-polla-piscina-ristorante-azienda-vin-camporgiano`
   - indirizzo: Località Polla, 17, 55031 Camporgiano LU
28. **Ai Canipai** — Camporgiano
   - slug: `ai-canipai-camporgiano`
   - indirizzo: Via Roma, 22, 55038 San Romano In Garfagnana LU
29. **Albergo Genzianella** — Camporgiano
   - slug: `albergo-genzianella-camporgiano`
   - indirizzo: Via Monte Sumbra, 2, 55030 Careggine LU
30. **Albergo Ristorante Belvedere** — Camporgiano
   - slug: `albergo-ristorante-belvedere-camporgiano`
   - indirizzo: SR 445, 57, 55034 Casone Carpinelli LU
31. **Antico Borgo di Isola Santa** — Camporgiano
   - slug: `antico-borgo-di-isola-santa-camporgiano`
   - indirizzo: Via della Torre, 1, 55030 Isola Santa LU
32. **B&B Il Casale delle Pianacce** — Camporgiano
   - slug: `b-b-il-casale-delle-pianacce-camporgiano`
   - indirizzo: Loc. Pianacce, SP 72 del Passo delle Radici, 29, 55033 Castiglione di Garfagnana LU
33. **B&B IL Vecchio Convento** — Camporgiano
   - slug: `b-b-il-vecchio-convento-camporgiano`
   - indirizzo: Piazza del Convento, 1, 55030 Vagli Sotto LU
34. **BeB da Franca** — Camporgiano
   - slug: `beb-da-franca-camporgiano`
   - indirizzo: Via Giuseppe Garibaldi, 65A, 55031 Camporgiano LU
35. **Hotel Ristorante Panoramico** — Camporgiano
   - slug: `hotel-ristorante-panoramico-camporgiano`
   - indirizzo: Via Fondo la Terra, 9, 55030 Villa Collemandina LU