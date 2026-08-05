# Blocco 384/500 — 35 strutture senza descrizione IT

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

1. **Villa Ottocento** — Campertogno
   - slug: `villa-ottocento-campertogno`
   - indirizzo: Via San Rocco, 2, 13023 Campertogno VC
2. **Wild Side casa vacanze Valsesia** — Campertogno
   - slug: `wild-side-casa-vacanze-valsesia-campertogno`
   - indirizzo: Frazione Grampa, 4, 13020 Mollia VC
3. **Affittacamere Il Girasole** — Campi Bisenzio
   - slug: `affittacamere-il-girasole-campi-bisenzio`
   - indirizzo: Via Francesco Petrarca, 20, 50013 Campi Bisenzio FI
4. **Albergo Indicatore** — Campi Bisenzio
   - slug: `albergo-indicatore-campi-bisenzio`
   - indirizzo: Via XIII Martiri, 282, 50013 Campi Bisenzio FI
5. **Anda e Rianda Bed and Breakfast** — Campi Bisenzio
   - slug: `anda-e-rianda-bed-and-breakfast-campi-bisenzio`
   - indirizzo: Via Pistoiese, 79-81, 50013 San Donnino FI
6. **Art Hotel Museo** — Campi Bisenzio
   - slug: `art-hotel-museo-campi-bisenzio`
   - indirizzo: V.le della Repubblica, 289, 59100 Prato PO
7. **Bed and Breakfast Le Makè** — Campi Bisenzio
   - slug: `bed-and-breakfast-le-make-campi-bisenzio`
   - indirizzo: Via Castronella, 280, 50013 Campi Bisenzio FI
8. **Hotel Bisenzio** — Campi Bisenzio
   - slug: `hotel-bisenzio-campi-bisenzio`
   - indirizzo: Via dei Confini, 184, 50013 Campi Bisenzio FI
9. **Hotel Datini** — Campi Bisenzio
   - slug: `hotel-datini-campi-bisenzio`
   - indirizzo: Viale Guglielmo Marconi, 80, 59100 Prato PO
10. **Hotel Europa** — Campi Bisenzio
   - slug: `hotel-europa-campi-bisenzio`
   - indirizzo: Piazza della Stazione, 10, 50058 Signa FI
11. **Hotel Primo** — Campi Bisenzio
   - slug: `hotel-primo-campi-bisenzio`
   - indirizzo: Via Barberinese, 109, 50013 Campi Bisenzio FI
12. **ibis Firenze Nord Aeroporto** — Campi Bisenzio
   - slug: `ibis-firenze-nord-aeroporto-campi-bisenzio`
   - indirizzo: Cin: It048043a1j9xt7jsp, Via Volturno, 5, 50019 Sesto Fiorentino FI
13. **La Rugea - Le Spighe Resort** — Campi Bisenzio
   - slug: `la-rugea-le-spighe-resort-campi-bisenzio`
   - indirizzo: Via della Rugea, 9 Via della Rugea, 11, Via della Rugea, 13, 59100 Prato PO
14. **M2 Hotel** — Campi Bisenzio
   - slug: `m2-hotel-campi-bisenzio`
   - indirizzo: Via dei Confini, 207, 50013 Campi Bisenzio FI
15. **Tenuta La Rosa B&B** — Campi Bisenzio
   - slug: `tenuta-la-rosa-b-b-campi-bisenzio`
   - indirizzo: Via San Quirico, 85/interno 2, 50013 Campi Bisenzio FI
16. **The Gate Hotel** — Campi Bisenzio
   - slug: `the-gate-hotel-campi-bisenzio`
   - indirizzo: Area di servizio Firenze Nord, 50019, Area Di Servizio Firenze Nord, 50019 Sesto Fiorentino FI
17. **West Florence Hotel** — Campi Bisenzio
   - slug: `west-florence-hotel-campi-bisenzio`
   - indirizzo: Via Guido Guinizelli, 15, 50013 Campi Bisenzio FI
18. **Agave Bed&Breakfast** — Campi Salentina
   - slug: `agave-bed-breakfast-campi-salentina`
   - indirizzo: Via Filippo Turati, 19, 73012 Campi Salentina LE
19. **Agriturismo Li Calizzi Arte & Natura** — Campi Salentina
   - slug: `agriturismo-li-calizzi-arte-natura-campi-salentina`
   - indirizzo: Str. Vicinale Marini, 73051 Novoli LE
20. **B&B Il Negramaro** — Campi Salentina
   - slug: `b-b-il-negramaro-campi-salentina`
   - indirizzo: Via Guglielmo Pepe, 73010 Veglie LE
21. **B&B Italia** — Campi Salentina
   - slug: `b-b-italia-campi-salentina`
   - indirizzo: Strada 10, 21, 73041 Carmiano LE
22. **BECHTEL Martine B&B** — Campi Salentina
   - slug: `bechtel-martine-b-b-campi-salentina`
   - indirizzo: Via case sparse 280, 73019 Trepuzzi LE
23. **Bed and Breakfast Villa Rita** — Campi Salentina
   - slug: `bed-and-breakfast-villa-rita-campi-salentina`
   - indirizzo: Strada vicinale cornolaro SNC, Contrada Cupa, 73012 Campi Salentina LE
24. **CASA PARADISO** — Campi Salentina
   - slug: `casa-paradiso-campi-salentina`
   - indirizzo: Via del Convento, 89, 73010 Veglie LE
25. **Casino Vigneri B&B** — Campi Salentina
   - slug: `casino-vigneri-b-b-campi-salentina`
   - indirizzo: Via Andrano, 1, 73019 Trepuzzi LE
26. **Country House Borgo Fiore** — Campi Salentina
   - slug: `country-house-borgo-fiore-campi-salentina`
   - indirizzo: SS 7ter, 73015 Lecce LE
27. **Fenisia Guest House** — Campi Salentina
   - slug: `fenisia-guest-house-campi-salentina`
   - indirizzo: Via Taranto, 10, 73012 Campi Salentina LE
28. **Guerrieri Suites & Spa** — Campi Salentina
   - slug: `guerrieri-suites-spa-campi-salentina`
   - indirizzo: Via Pirrotta, 31, 73012 Campi Salentina LE
29. **La Focara B&B** — Campi Salentina
   - slug: `la-focara-b-b-campi-salentina`
   - indirizzo: Via Giotto, 1, 73051 Novoli LE
30. **Leone De Castris Wine Hotel** — Campi Salentina
   - slug: `leone-de-castris-wine-hotel-campi-salentina`
   - indirizzo: Via F. Marangi, 19, 73015 Salice Salentino LE
31. **Tenuta San Nicola** — Campi Salentina
   - slug: `tenuta-san-nicola-campi-salentina`
   - indirizzo: Veglie, Strada Provinciale, 73051 Novoli LE
32. **Villa delle Palme B&B** — Campi Salentina
   - slug: `villa-delle-palme-b-b-campi-salentina`
   - indirizzo: Via John Fitzgerald Kennedy, 173, 73019 Trepuzzi LE
33. **Virò B&B** — Campi Salentina
   - slug: `viro-b-b-campi-salentina`
   - indirizzo: Viale Stazione, 32, 73012 Campi Salentina LE
34. **B&B MONT MARS** — Campiglia Cervo
   - slug: `b-b-mont-mars-campiglia-cervo`
   - indirizzo: Località Thea Inf, n° 5, 11020 Fontainemore AO
35. **Hotel Fior di Roccia** — Campiglia Cervo
   - slug: `hotel-fior-di-roccia-campiglia-cervo`
   - indirizzo: Fraz. Gattinery, 3, 11020 Gaby AO