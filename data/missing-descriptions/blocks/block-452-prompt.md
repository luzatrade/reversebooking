# Blocco 452/500 — 35 strutture senza descrizione IT

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

1. **Il Tremolar della Marina** — Casalbordino
   - slug: `il-tremolar-della-marina-casalbordino`
   - indirizzo: Contrada Termini, 40, 66021 Casalbordino CH
2. **Selene B&B** — Casalbordino
   - slug: `selene-b-b-casalbordino`
   - indirizzo: Via Raffaello, 1, 66021 Casalbordino CH
3. **Affitta camere Bellavista** — Casalbore
   - slug: `affitta-camere-bellavista-casalbore`
   - indirizzo: Via Calisi, 21, 82029 San Marco dei Cavoti BN
4. **I due piccioncini** — Casalbore
   - slug: `i-due-piccioncini-casalbore`
   - indirizzo: SS90, 83035 Grottaminarda AV
5. **Oasi Masseria Sant'Elia eco agriturismo Casalbore Cucina Contadina** — Casalbore
   - slug: `oasi-masseria-sant-elia-eco-agriturismo-casalbor-casalbore`
   - indirizzo: Contrada Sant'Elia Necropoli, 24, 83034 Casalbore AV
6. **B&B Il Quadrifoglio** — Casalborgone
   - slug: `b-b-il-quadrifoglio-casalborgone`
   - indirizzo: Regione Montariolo, 24, 10090 Sciolze TO
7. **Bed and breakfast - b&b Viavai** — Casalborgone
   - slug: `bed-and-breakfast-b-b-viavai-casalborgone`
   - indirizzo: Via Valfrè, 7, 10020 Casalborgone TO
8. **Ca'diFra b&b** — Casalborgone
   - slug: `ca-difra-b-b-casalborgone`
   - indirizzo: Via Regina Elena, 3, 10020 Casalborgone TO
9. **Castello di Casalborgone** — Casalborgone
   - slug: `castello-di-casalborgone-casalborgone`
   - indirizzo: Via Broglia, 3, 10020 Casalborgone TO
10. **Emeroteca del 900** — Casalborgone
   - slug: `emeroteca-del-900-casalborgone`
   - indirizzo: Strada Cerro, 35, 10020 Casalborgone TO
11. **Freedom Reins fattoria e B&B** — Casalborgone
   - slug: `freedom-reins-fattoria-e-b-b-casalborgone`
   - indirizzo: Str. Nin, 18, 10020 Casalborgone TO
12. **Villa Giordana** — Casalborgone
   - slug: `villa-giordana-casalborgone`
   - indirizzo: Str. Ceriaglio, 13, 10020 Casalborgone TO
13. **Agriturismo Murikè** — Casalbuono
   - slug: `agriturismo-murike-casalbuono`
   - indirizzo: 84067 Santa Marina SA, Italia
14. **B&B L'Arco Antico** — Casalbuono
   - slug: `b-b-l-arco-antico-casalbuono`
   - indirizzo: Via Papa Giovanni XXIII, 84030 Casalbuono SA
15. **Hotel Caimo** — Casalbuono
   - slug: `hotel-caimo-casalbuono`
   - indirizzo: Via dei Gladioli, 3, 85042 Lagonegro PZ
16. **Hotel Palazzo Cestari** — Casalbuono
   - slug: `hotel-palazzo-cestari-casalbuono`
   - indirizzo: Via Dottor Nicola Cestari, 60, 84033 Montesano sulla Marcellana SA
17. **Il Tiglio Bed & Breakfast rural house** — Casalbuono
   - slug: `il-tiglio-bed-breakfast-rural-house-casalbuono`
   - indirizzo: Contrada S. Maria la Mattina, 27, 84034 Padula SA
18. **Tenuta Le Cascine agriturismo di Petrosino Teresa** — Casalbuono
   - slug: `tenuta-le-cascine-agriturismo-di-petrosino-teres-casalbuono`
   - indirizzo: 84030 Vallonsecco SA
19. **B&B La Stazione** — Casalbuttano ed Uniti
   - slug: `b-b-la-stazione-casalbuttano-ed-uniti`
   - indirizzo: Via Ferruccio Ghinaglia, 29, 26100 Cremona CR
20. **B&B Sole e Luna** — Casalbuttano ed Uniti
   - slug: `b-b-sole-e-luna-casalbuttano-ed-uniti`
   - indirizzo: Via Manini, 87, 26100 Cremona CR
21. **Pensione S.Giorgio** — Casalbuttano ed Uniti
   - slug: `pensione-s-giorgio-casalbuttano-ed-uniti`
   - indirizzo: Via Felice Cavallotti, 44, 26011 Casalbuttano CR
22. **Residenza La Torre camere e appartamenti** — Casalbuttano ed Uniti
   - slug: `residenza-la-torre-camere-e-appartamenti-casalbuttano-ed-uniti`
   - indirizzo: Via Sortita, 5, 26026 Pizzighettone CR
23. **B&B Campobasso Il girasole - A casa di Ale** — Casalciprano
   - slug: `b-b-campobasso-il-girasole-a-casa-di-ale-casalciprano`
   - indirizzo: Contrada Peschiatura n, 29, 86010 Oratino CB
24. **B&B Il Vigneto** — Casalciprano
   - slug: `b-b-il-vigneto-casalciprano`
   - indirizzo: Strada Comunale, Contrada Lenze, 6, 86010 Oratino CB
25. **Tre Archi** — Casalciprano
   - slug: `tre-archi-casalciprano`
   - indirizzo: Contrada Vicenne, 34, 86010 Castropignano CB
26. **Agriturismo Borgo Cerquelle** — Casalduni
   - slug: `agriturismo-borgo-cerquelle-casalduni`
   - indirizzo: C.da Cerquelle, 166, 82027 Pontelandolfo BN
27. **Agriturismo La Botte** — Casalduni
   - slug: `agriturismo-la-botte-casalduni`
   - indirizzo: Contrada Monterone, 14, 82020 Fragneto Monforte BN
28. **B&B Al Castello** — Casalduni
   - slug: `b-b-al-castello-casalduni`
   - indirizzo: Corso Vittorio Emanuele, 6, 82027 Pontelandolfo BN
29. **Bed and Breakfast Adriano** — Casalduni
   - slug: `bed-and-breakfast-adriano-casalduni`
   - indirizzo: Via G.U Domenico Ocone, 68, 82030 Ponte BN
30. **Grand Hotel Telese** — Casalduni
   - slug: `grand-hotel-telese-casalduni`
   - indirizzo: Strada Provinciale 15, 1 82037 Telese Terme, 82037 09:00 - 17:00Telese BN
31. **A.D.R Holiday Home** — Casale Corte Cerro
   - slug: `a-d-r-holiday-home-casale-corte-cerro`
   - indirizzo: Via Roma, 1, 28881 Casale Corte Cerro VB
32. **Albergo Ristorante Cicin** — Casale Corte Cerro
   - slug: `albergo-ristorante-cicin-casale-corte-cerro`
   - indirizzo: Via Novara, 1/31, 28881 Casale Corte Cerro VB
33. **B&B Al Mutpron** — Casale Corte Cerro
   - slug: `b-b-al-mutpron-casale-corte-cerro`
   - indirizzo: Via Crebbia, 13, 28881 Casale Corte Cerro VB
34. **B&B Tra i Laghi** — Casale Corte Cerro
   - slug: `b-b-tra-i-laghi-casale-corte-cerro`
   - indirizzo: Via Guglielmo Marconi, 53, 28881 Casale Corte Cerro VB
35. **BB Antica Corte di Omegna** — Casale Corte Cerro
   - slug: `bb-antica-corte-di-omegna-casale-corte-cerro`
   - indirizzo: Via Curotti, 74, 28887 Omegna VB