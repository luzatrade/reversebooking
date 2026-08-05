# Blocco 378/500 — 35 strutture senza descrizione IT

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

1. **b&b Villa Arboretum** — Camerata Nuova
   - slug: `b-b-villa-arboretum-camerata-nuova`
   - indirizzo: SP48b, 00020 Camerata Nuova RM
2. **Elle Shelter** — Camerata Nuova
   - slug: `elle-shelter-camerata-nuova`
   - indirizzo: Via della Torre, 2, 67067 Scanzano AQ
3. **I Casali** — Camerata Nuova
   - slug: `i-casali-camerata-nuova`
   - indirizzo: Via Camerata, snc, 67069 Tagliacozzo AQ
4. **Affittacamere La Locomotiva** — Camerata Picena
   - slug: `affittacamere-la-locomotiva-camerata-picena`
   - indirizzo: Via Don Minzoni, 31, 60033 Chiaravalle AN
5. **Albergo Luminari** — Camerata Picena
   - slug: `albergo-luminari-camerata-picena`
   - indirizzo: Corso Giacomo Matteotti, 10, 60033 Chiaravalle AN
6. **Albergo Tenda Verde** — Camerata Picena
   - slug: `albergo-tenda-verde-camerata-picena`
   - indirizzo: Via C. Lorenzo Cesanelli, 4, 60015 Falconara Marittima AN
7. **B&B Aesis La Dolce Collina** — Camerata Picena
   - slug: `b-b-aesis-la-dolce-collina-camerata-picena`
   - indirizzo: Via Maccarata, 2, 60035 Jesi AN
8. **B&B Da Zia Ore** — Camerata Picena
   - slug: `b-b-da-zia-ore-camerata-picena`
   - indirizzo: Vicolo Bujo, 1, 60035 Jesi AN
9. **B&B Glicine** — Camerata Picena
   - slug: `b-b-glicine-camerata-picena`
   - indirizzo: Frazione Montesicuro, 211, 60131 Ancona AN
10. **B&B La Dimora dell'ereoporto anche a ore** — Camerata Picena
   - slug: `b-b-la-dimora-dell-ereoporto-anche-a-ore-camerata-picena`
   - indirizzo: Via Gino Tommasi, 11, 60015 Falconara Marittima AN
11. **B&B La Grancia** — Camerata Picena
   - slug: `b-b-la-grancia-camerata-picena`
   - indirizzo: Via Grancetta, 193, 60033 Grancetta AN
12. **B&B Lillac Cottage** — Camerata Picena
   - slug: `b-b-lillac-cottage-camerata-picena`
   - indirizzo: Frazione Montesicuro, 114, 60131 Ancona AN
13. **B&B Residenza Leonardo Falconara Marittima** — Camerata Picena
   - slug: `b-b-residenza-leonardo-falconara-marittima-camerata-picena`
   - indirizzo: Via Andrea Costa, 19, 60015 Falconara Marittima AN
14. **Country house Casale Del Gufo** — Camerata Picena
   - slug: `country-house-casale-del-gufo-camerata-picena`
   - indirizzo: Via Alberici, 6, 60033 Chiaravalle AN
15. **Hotel Albergo 2000 Ristorante Pizzeria Monsano- Jesi-Ancona** — Camerata Picena
   - slug: `hotel-albergo-2000-ristorante-pizzeria-monsano-j-camerata-picena`
   - indirizzo: Via Veneto, 1, 60030 Monsano AN
16. **Hotel duranti** — Camerata Picena
   - slug: `hotel-duranti-camerata-picena`
   - indirizzo: Via S. Giovanni, 10, 60020 Polverigi AN
17. **Locanda delle Saline** — Camerata Picena
   - slug: `locanda-delle-saline-camerata-picena`
   - indirizzo: Via Saline, 9, 60020 Camerata Picena AN
18. **Affitta Camere Novara** — Cameri
   - slug: `affitta-camere-novara-cameri`
   - indirizzo: Viale Dante Alighieri, 26/28, 28100 Novara NO
19. **B&B Il Broletto** — Cameri
   - slug: `b-b-il-broletto-cameri`
   - indirizzo: Via Nicolao Sottile, 6, 28100 Novara NO
20. **B&B Il Rosmarino** — Cameri
   - slug: `b-b-il-rosmarino-cameri`
   - indirizzo: Via Adamello, 8, 28066 Galliate NO
21. **B&B Mazzini15** — Cameri
   - slug: `b-b-mazzini15-cameri`
   - indirizzo: Corso Giuseppe Mazzini, 15, 28100 Novara NO
22. **B&B Villa Margherita** — Cameri
   - slug: `b-b-villa-margherita-cameri`
   - indirizzo: Via Castano Primo, 4, 21015 Lonate Pozzolo VA
23. **Corte Langosco** — Cameri
   - slug: `corte-langosco-cameri`
   - indirizzo: Cascina Picchetta, 95, 28062 Cameri NO
24. **LVG Hotel Collection - Cavour** — Cameri
   - slug: `lvg-hotel-collection-cavour-cameri`
   - indirizzo: Via S. Francesco D'Assisi, 6, 28100 Novara NO
25. **LVG Hotel Collection - Tornielli 9** — Cameri
   - slug: `lvg-hotel-collection-tornielli-9-cameri`
   - indirizzo: Via dei Tornielli, 9, 28100 Novara NO
26. **The Residence Galliate** — Cameri
   - slug: `the-residence-galliate-cameri`
   - indirizzo: Via Monte Nero, 73, 28066 Galliate NO
27. **Villa Calcaterra** — Cameri
   - slug: `villa-calcaterra-cameri`
   - indirizzo: Via Piave, 2, 28062 Cameri NO
28. **Agriturismo Il Colle Del Contadino** — Camerino
   - slug: `agriturismo-il-colle-del-contadino-camerino`
   - indirizzo: Contrada Valeano, 21, 62022 Castelraimondo MC
29. **Alla Scoperta delle Marche** — Camerino
   - slug: `alla-scoperta-delle-marche-camerino`
   - indirizzo: Via Andrea D’Accorso sn, Località Le Mosse, 62032 Camerino MC
30. **B&B Alce** — Camerino
   - slug: `b-b-alce-camerino`
   - indirizzo: Località Uvaiolo 28, 62027 San Severino Marche MC
31. **B&B Caselunghe** — Camerino
   - slug: `b-b-caselunghe-camerino`
   - indirizzo: Loc.Caselunghe, 2, 62032 Camerino MC
32. **Bed & Breakfast San Rocco** — Camerino
   - slug: `bed-breakfast-san-rocco-camerino`
   - indirizzo: Via di S. Rocco, 31, 62027 San Severino Marche MC
33. **Borgo Colle Ridente** — Camerino
   - slug: `borgo-colle-ridente-camerino`
   - indirizzo: via Colle Ridente 2, 62032 Camerino MC
34. **Borgo de' Varano by Hotel I Duchi** — Camerino
   - slug: `borgo-de-varano-by-hotel-i-duchi-camerino`
   - indirizzo: Piazza Macallè, 3, 62032 Morro MC
35. **Borgo Lanciano Resort & Spa** — Camerino
   - slug: `borgo-lanciano-resort-spa-camerino`
   - indirizzo: Località Lanciano, 5, 62022 Castelraimondo MC