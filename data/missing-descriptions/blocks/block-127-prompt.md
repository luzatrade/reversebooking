# Blocco 127/500 — 35 strutture senza descrizione IT

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

1. **Villa Quiete Hotel Ristorante** — Appignano
   - slug: `villa-quiete-hotel-ristorante-appignano`
   - indirizzo: Via Enrico Mattei, 6, 62010 Montecassiano MC
2. **Villa Scuderi Country House** — Appignano
   - slug: `villa-scuderi-country-house-appignano`
   - indirizzo: Contrada Saletta, 39, 62019 Recanati MC
3. **Villa Verdefiore** — Appignano
   - slug: `villa-verdefiore-appignano`
   - indirizzo: Contrada Verdefiore, 43/a, 62010 Appignano MC
4. **Agriturismo Alla Solagna** — Appignano del Tronto
   - slug: `agriturismo-alla-solagna-appignano-del-tronto`
   - indirizzo: Contrada la Rocca, 29, 63079 Colli del Tronto AP
5. **Agriturismo Castrum - Agriturismo Marche** — Appignano del Tronto
   - slug: `agriturismo-castrum-agriturismo-marche-appignano-del-tronto`
   - indirizzo: Contrada Gaico, 3, 63081 Castorano AP
6. **Agriturismo Fiorenire** — Appignano del Tronto
   - slug: `agriturismo-fiorenire-appignano-del-tronto`
   - indirizzo: C. da Filette, 9, 63072 Castignano AP
7. **Corte Del Sole** — Appignano del Tronto
   - slug: `corte-del-sole-appignano-del-tronto`
   - indirizzo: Viale dei Mutilati e Invalidi del Lavoro, 63100 Ascoli Piceno AP
8. **Dimora nel borgo** — Appignano del Tronto
   - slug: `dimora-nel-borgo-appignano-del-tronto`
   - indirizzo: Corso Serpente Aureo, 27, 63073 Offida AP
9. **Hotel & Residenza 100 Torri** — Appignano del Tronto
   - slug: `hotel-residenza-100-torri-appignano-del-tronto`
   - indirizzo: Via Costanzo Mazzoni, 6, 63100 Ascoli Piceno AP
10. **Hotel Casale** — Appignano del Tronto
   - slug: `hotel-casale-appignano-del-tronto`
   - indirizzo: via Casale Superiore, 146, 63079 Colli del Tronto AP
11. **Hotel Del Duca** — Appignano del Tronto
   - slug: `hotel-del-duca-appignano-del-tronto`
   - indirizzo: Via Giosuè del Duca, 15, 63069 Montedinove AP
12. **Hotel Palazzo Ciotti Ascoli Piceno** — Appignano del Tronto
   - slug: `hotel-palazzo-ciotti-ascoli-piceno-appignano-del-tronto`
   - indirizzo: Piazza Arringo, 49, 63100 Ascoli Piceno AP
13. **Il Gigante** — Appignano del Tronto
   - slug: `il-gigante-appignano-del-tronto`
   - indirizzo: Contrada Valle Orta, 63083 Appignano del Tronto AP
14. **La Neviera Nel Pozzo** — Appignano del Tronto
   - slug: `la-neviera-nel-pozzo-appignano-del-tronto`
   - indirizzo: Via San Martino, 33, 63073 Offida AP
15. **Relais Cocci Grifoni - Panoramic Wine Resort** — Appignano del Tronto
   - slug: `relais-cocci-grifoni-panoramic-wine-resort-appignano-del-tronto`
   - indirizzo: Contrada Ciafone, 120, 63073 Offida AP
16. **Residence gli Ulivi** — Appignano del Tronto
   - slug: `residence-gli-ulivi-appignano-del-tronto`
   - indirizzo: Viale dei Mutilati e Invalidi del Lavoro, 63100 Ascoli Piceno AP
17. **Ristorante Hotel Teta** — Appignano del Tronto
   - slug: `ristorante-hotel-teta-appignano-del-tronto`
   - indirizzo: Via Borgo Garibaldi, 120, 63072 Castignano AP
18. **Albergo "Arisch"** — Aprica
   - slug: `albergo-arisch-aprica`
   - indirizzo: Via Privata Gemelli, Sn, 23031 Aprica SO
19. **Albergo "Ginepro"** — Aprica
   - slug: `albergo-ginepro-aprica`
   - indirizzo: Via Adamello, 27, 23031 Aprica BS
20. **Albergo Aprica** — Aprica
   - slug: `albergo-aprica-aprica-2`
   - indirizzo: Via Trento, 7, 25047 Darfo Boario Terme BS
21. **Albergo Aprica** — Aprica
   - slug: `albergo-aprica-aprica`
   - indirizzo: Corso Roma, 253, 23031 Aprica SO
22. **Albergo Cioccarelli** — Aprica
   - slug: `albergo-cioccarelli-aprica`
   - indirizzo: Via Adamello, 10, 23031 Aprica SO
23. **Albergo Hotel Iscla** — Aprica
   - slug: `albergo-hotel-iscla-aprica`
   - indirizzo: Via Tonale, 10, 25040 Monno BS
24. **Albergo Miramonti** — Aprica
   - slug: `albergo-miramonti-aprica`
   - indirizzo: Via Libertà, 11, 25040 Corteno Golgi BS
25. **Appartamenti Vacanze Aprica** — Aprica
   - slug: `appartamenti-vacanze-aprica-aprica`
   - indirizzo: Via Europa, 39, 23031 Aprica SO
26. **B&B Penak** — Aprica
   - slug: `b-b-penak-aprica`
   - indirizzo: Corso Roma, 200, 23031 Aprica SO
27. **Cristallo Wellness Hotel** — Aprica
   - slug: `cristallo-wellness-hotel-aprica`
   - indirizzo: Via Pineta, 2, 25040 San Pietro BS
28. **Hotel Italia** — Aprica
   - slug: `hotel-italia-aprica`
   - indirizzo: Corso Roma, 146, 23031 Aprica SO
29. **Hotel Meublè Ambrosini** — Aprica
   - slug: `hotel-meuble-ambrosini-aprica`
   - indirizzo: Via Magnolta, 7, 23031 Aprica SO
30. **Hotel Posta** — Aprica
   - slug: `hotel-posta-aprica`
   - indirizzo: Corso Roma, 16, 23031 Aprica SO
31. **Hotel Torena** — Aprica
   - slug: `hotel-torena-aprica`
   - indirizzo: Corso Roma, 93, 23031 Aprica SO
32. **Hotel Urri** — Aprica
   - slug: `hotel-urri-aprica`
   - indirizzo: Corso Roma, 80, 23031 Aprica SO
33. **Hotel-Residence - San Lorenzo.** — Aprica
   - slug: `hotel-residence-san-lorenzo-aprica`
   - indirizzo: Via Palabione, 26, 23031 Aprica SO
34. **Residence Hotel Biancaneve** — Aprica
   - slug: `residence-hotel-biancaneve-aprica`
   - indirizzo: Via Italia, 33, 23031 Aprica SO
35. **Residence Hotel Serenella** — Aprica
   - slug: `residence-hotel-serenella-aprica`
   - indirizzo: Via Europa, 142, 23031 Aprica SO