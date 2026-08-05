# Blocco 463/500 — 35 strutture senza descrizione IT

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

1. **Villa Casola B&B** — Casola di Napoli
   - slug: `villa-casola-b-b-casola-di-napoli`
   - indirizzo: Via, 84017 Nocelle SA
2. **Villa le Zagare Relais e SPA** — Casola di Napoli
   - slug: `villa-le-zagare-relais-e-spa-casola-di-napoli`
   - indirizzo: Via Visitazione, 68, 80054 Gragnano NA
3. **Agriturismo Casa Turchetti** — Casola in Lunigiana
   - slug: `agriturismo-casa-turchetti-casola-in-lunigiana`
   - indirizzo: Cattognano 19, 54015 Cattognano MS
4. **Agriturismo Il Macereto** — Casola in Lunigiana
   - slug: `agriturismo-il-macereto-casola-in-lunigiana`
   - indirizzo: via macereto, 2, 54013 Fivizzano MS
5. **Agriturismo La Praduscella di Bonfigli Armandina** — Casola in Lunigiana
   - slug: `agriturismo-la-praduscella-di-bonfigli-armandina-casola-in-lunigiana`
   - indirizzo: Località Praduscella 1 Moncigoli, Fivizzano 54011, 54011 Fivizzano MS
6. **Azienda agricola Chinca - Agriturismo "Il Melo" di Francesca Chinca** — Casola in Lunigiana
   - slug: `azienda-agricola-chinca-agriturismo-il-melo-di-f-casola-in-lunigiana`
   - indirizzo: Loc. Ceresola, 1 fraz, 54013 San Terenzo Monti MS
7. **B&B Il Girasole** — Casola in Lunigiana
   - slug: `b-b-il-girasole-casola-in-lunigiana`
   - indirizzo: Via Gignola, 3, 54035 Fosdinovo MS
8. **B&B La Luna dei Medici** — Casola in Lunigiana
   - slug: `b-b-la-luna-dei-medici-casola-in-lunigiana`
   - indirizzo: Via Roma, 119, 54013 Fivizzano MS
9. **B&b La Risorgiva** — Casola in Lunigiana
   - slug: `b-b-la-risorgiva-casola-in-lunigiana`
   - indirizzo: SP16, 54013 Fivizzano MS
10. **Ca'luni B&B** — Casola in Lunigiana
   - slug: `ca-luni-b-b-casola-in-lunigiana`
   - indirizzo: Via del Carmine, 149, 54014 Casola In Lunigiana MS
11. **Casa Vinicia** — Casola in Lunigiana
   - slug: `casa-vinicia-casola-in-lunigiana`
   - indirizzo: Via della Stazione, 15, 54014 Equi Terme MS
12. **Castello Malaspina di Fosdinovo** — Casola in Lunigiana
   - slug: `castello-malaspina-di-fosdinovo-casola-in-lunigiana`
   - indirizzo: Via Papiriana, 2, 54035 Fosdinovo MS
13. **Le chianine dei Tognoli** — Casola in Lunigiana
   - slug: `le-chianine-dei-tognoli-casola-in-lunigiana`
   - indirizzo: Via Castel dell'Aquila, 54013 Gragnola MS
14. **podere groppini** — Casola in Lunigiana
   - slug: `podere-groppini-casola-in-lunigiana`
   - indirizzo: Via Groppini, 54013 Fivizzano MS
15. **Spino Fiorito Stay** — Casola in Lunigiana
   - slug: `spino-fiorito-stay-casola-in-lunigiana`
   - indirizzo: Via Per Vedriano, 11, 54014 Casola in Lunigiana MS
16. **Agriturismo Caminata** — Casola Valsenio
   - slug: `agriturismo-caminata-casola-valsenio`
   - indirizzo: Via Olivelli, 38, 48032 Casola Valsenio RA
17. **Agriturismo I Monti di Salecchio** — Casola Valsenio
   - slug: `agriturismo-i-monti-di-salecchio-casola-valsenio`
   - indirizzo: Località Salecchio, 7, 50035 Palazzuolo Sul Senio FI
18. **Agriturismo Il Poggiolo** — Casola Valsenio
   - slug: `agriturismo-il-poggiolo-casola-valsenio`
   - indirizzo: via della Sintria, 9, 48032 Casola Valsenio RA
19. **Agriturismo La Ca' Nova** — Casola Valsenio
   - slug: `agriturismo-la-ca-nova-casola-valsenio`
   - indirizzo: Via Breta, 29, 48032 Casola Valsenio RA
20. **Agriturismo Mariano** — Casola Valsenio
   - slug: `agriturismo-mariano-casola-valsenio`
   - indirizzo: Via Cardello, 81, 48032 Casola Valsenio RA
21. **B&B Cà del Grillo** — Casola Valsenio
   - slug: `b-b-ca-del-grillo-casola-valsenio`
   - indirizzo: Unnamed Road,40022, Via Montanara Sud, 4175 c, 40022 Castel del Rio BO
22. **B&B Casetta Folli** — Casola Valsenio
   - slug: `b-b-casetta-folli-casola-valsenio`
   - indirizzo: Via Fra Angelo Pianori, 48013 Brisighella RA
23. **B&B Fava** — Casola Valsenio
   - slug: `b-b-fava-casola-valsenio`
   - indirizzo: Via Belfiore, 11, 48032 Casola Valsenio RA
24. **B&B Serra** — Casola Valsenio
   - slug: `b-b-serra-casola-valsenio`
   - indirizzo: Via Serra, 3295, 48014 Castel Bolognese RA
25. **Hotel Ristorante Europa Palazzuolo sul Senio** — Casola Valsenio
   - slug: `hotel-ristorante-europa-palazzuolo-sul-senio-casola-valsenio`
   - indirizzo: Via Maghinardo Pagani, 4, 50035 Palazzuolo sul Senio FI
26. **Il Cardello Locanda** — Casola Valsenio
   - slug: `il-cardello-locanda-casola-valsenio`
   - indirizzo: Via Cardello, 11, 48032 Casola Valsenio RA
27. **Relais & Ristorante Mevigo** — Casola Valsenio
   - slug: `relais-ristorante-mevigo-casola-valsenio`
   - indirizzo: Via del Monte, 35, 48032 Casola Valsenio RA
28. **Villaggio della Salute Più** — Casola Valsenio
   - slug: `villaggio-della-salute-piu-casola-valsenio`
   - indirizzo: Via Sillaro, 27, 40050 Monterenzio BO
29. **Agriturismo I Casali** — Casole d'Elsa
   - slug: `agriturismo-i-casali-casole-d-elsa`
   - indirizzo: Via Podere I Casali, 121, 53031 Casole d'Elsa SI
30. **Agriturismo Podere Tremulini** — Casole d'Elsa
   - slug: `agriturismo-podere-tremulini-casole-d-elsa`
   - indirizzo: Podere Tremulini, 53031 Casole d'Elsa SI
31. **Agriturismo Solaio di Arianna Paolini** — Casole d'Elsa
   - slug: `agriturismo-solaio-di-arianna-paolini-casole-d-elsa`
   - indirizzo: Via di Solaio 145/A - Località Solaio, 53031 Casole d'Elsa SI
32. **Antica Fonte Resort** — Casole d'Elsa
   - slug: `antica-fonte-resort-casole-d-elsa`
   - indirizzo: Localita' Podere Casanova, 53031 Casole d'Elsa SI
33. **Bed & Breakfast Palazzo delle Erbe** — Casole d'Elsa
   - slug: `bed-breakfast-palazzo-delle-erbe-casole-d-elsa`
   - indirizzo: Via Roma, 66, 53031 Casole d'Elsa SI
34. **Borgo al Cerro** — Casole d'Elsa
   - slug: `borgo-al-cerro-casole-d-elsa`
   - indirizzo: Localita' Podere Casanova, 53031 Casole d'Elsa SI
35. **Castello di Casole, A Belmond Hotel, Tuscany** — Casole d'Elsa
   - slug: `castello-di-casole-a-belmond-hotel-tuscany-casole-d-elsa`
   - indirizzo: Località Querceto, 53031 Casole d'Elsa SI