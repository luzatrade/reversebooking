# Blocco 203/500 — 35 strutture senza descrizione IT

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

1. **B&B Civita Nova** — Bagnoregio
   - slug: `b-b-civita-nova-bagnoregio`
   - indirizzo: Via Don S. Nello Ponziani, 19, 01022 Bagnoregio VT
2. **B&B Il Cardellino** — Bagnoregio
   - slug: `b-b-il-cardellino-bagnoregio`
   - indirizzo: Località Colle Ombroso, 17, 05010 Porano TR
3. **B&B Il Soffio di Eolo** — Bagnoregio
   - slug: `b-b-il-soffio-di-eolo-bagnoregio`
   - indirizzo: Via Ponterado snc, 01022 Loc. Salci, Bagnoregio VT
4. **B&B La Polinnia** — Bagnoregio
   - slug: `b-b-la-polinnia-bagnoregio`
   - indirizzo: di Paola, Piazza S. Francesco, 7, 01022 Bagnoregio VT
5. **B&B Le Camere del Bocconcino** — Bagnoregio
   - slug: `b-b-le-camere-del-bocconcino-bagnoregio`
   - indirizzo: Via Giacomo Matteotti, 1, 01022 Bagnoregio VT
6. **B&B Podere Ospedaletto** — Bagnoregio
   - slug: `b-b-podere-ospedaletto-bagnoregio`
   - indirizzo: Loc. Podere Ospedaletto, 01023 Bolsena VT
7. **Bed and Breakfast del Prato** — Bagnoregio
   - slug: `bed-and-breakfast-del-prato-bagnoregio`
   - indirizzo: Via della Cassa, 5, 01022 Bagnoregio VT
8. **Bellavista** — Bagnoregio
   - slug: `bellavista-bagnoregio`
   - indirizzo: Via Francalancia, 22, 01022 Bagnoregio VT
9. **CORTE DELLA MAESTA' - ANTICA RESIDENZA** — Bagnoregio
   - slug: `corte-della-maesta-antica-residenza-bagnoregio`
   - indirizzo: Vicolo della Maestà, 01022 Civita VT
10. **Hotel Divino Amore** — Bagnoregio
   - slug: `hotel-divino-amore-bagnoregio`
   - indirizzo: Via Fidanza, 25, 01022 Bagnoregio VT
11. **Hotel Ristorante Romantica Pucci** — Bagnoregio
   - slug: `hotel-ristorante-romantica-pucci-bagnoregio`
   - indirizzo: Piazza Cavour, 1, 01022 Bagnoregio VT
12. **Il giardino di Elena** — Bagnoregio
   - slug: `il-giardino-di-elena-bagnoregio`
   - indirizzo: Via Cesare Mangioli, 52, 01022 Bagnoregio VT
13. **Il Palazzetto Affittacamere** — Bagnoregio
   - slug: `il-palazzetto-affittacamere-bagnoregio`
   - indirizzo: Corso Giuseppe Mazzini, 113, 01022 Bagnoregio VT
14. **La Dimora del Principe** — Bagnoregio
   - slug: `la-dimora-del-principe-bagnoregio`
   - indirizzo: Via F. Monaldeschi, 13, 01022 Bagnoregio VT
15. **Palazzo Mazzini** — Bagnoregio
   - slug: `palazzo-mazzini-bagnoregio`
   - indirizzo: Corso Giuseppe Mazzini, 71, 01022 Bagnoregio VT
16. **Albergo Al Ponte** — Bagolino
   - slug: `albergo-al-ponte-bagolino`
   - indirizzo: Via Maniva, 37, 25060 Collio BS
17. **Albergo Ristorante Bar Gelateria "Al Tempo Perduto"** — Bagolino
   - slug: `albergo-ristorante-bar-gelateria-al-tempo-perdut-bagolino`
   - indirizzo: Via S. Rocco, 46, 25072 Bagolino BS
18. **B&B COCCINELLA** — Bagolino
   - slug: `b-b-coccinella-bagolino`
   - indirizzo: Via Caduti, 136, 25072 Ponte Caffaro BS
19. **B&B La Vittoria** — Bagolino
   - slug: `b-b-la-vittoria-bagolino`
   - indirizzo: Via Roma, 7, 25070 Treviso Bresciano BS
20. **B&B le rose località coste 2 idro bs** — Bagolino
   - slug: `b-b-le-rose-localita-coste-2-idro-bs-bagolino`
   - indirizzo: Località Coste, 2, 25074 Idro BS
21. **Bed And Breakfast El Piastrol** — Bagolino
   - slug: `bed-and-breakfast-el-piastrol-bagolino`
   - indirizzo: Via Fioravante Moreschi, 42, 25072 Bagolino BS
22. **Hotel Tiziana Garnì** — Bagolino
   - slug: `hotel-tiziana-garni-bagolino`
   - indirizzo: Via Dosso, 51, 25084 Gargnano BS
23. **Ostello** — Bagolino
   - slug: `ostello-bagolino`
   - indirizzo: Via dei Quadri Ⅱ, 2, 25072 Ponte Caffaro BS
24. **Affittacamere Le Nonne** — Baia e Latina
   - slug: `affittacamere-le-nonne-baia-e-latina`
   - indirizzo: Vico Borrelli, 81051 Statigliano CE
25. **B&B Il Rifugio - bed-and-breakfast** — Baia e Latina
   - slug: `b-b-il-rifugio-bed-and-breakfast-baia-e-latina`
   - indirizzo: 81050 Camigliano CE
26. **Habitat Luxury Suites** — Baia e Latina
   - slug: `habitat-luxury-suites-baia-e-latina`
   - indirizzo: Via Aldo Moro, 4, 81041 Bellona CE
27. **Hotel Rosso di Sera** — Baia e Latina
   - slug: `hotel-rosso-di-sera-baia-e-latina`
   - indirizzo: SP183, 25, 81051 Pietramelara CE
28. **Re Di Cuori Hotel** — Baia e Latina
   - slug: `re-di-cuori-hotel-baia-e-latina`
   - indirizzo: Via Ceraselle, 156, 81059 Caianello CE
29. **B&B Dolci Sogni - Bed & Breakfast Mugnano del Cardinale** — Baiano
   - slug: `b-b-dolci-sogni-bed-breakfast-mugnano-del-cardin-baiano`
   - indirizzo: Via Roma, 33, 83027 Mugnano del Cardinale AV
30. **B&B I Due Angeli** — Baiano
   - slug: `b-b-i-due-angeli-baiano`
   - indirizzo: Via Quercia, 41, 83020 Sirignano AV
31. **B&B Nola** — Baiano
   - slug: `b-b-nola-baiano`
   - indirizzo: Vicolo P. Fellecchia, 47, 80035 Nola NA
32. **La Casa di Lina** — Baiano
   - slug: `la-casa-di-lina-baiano`
   - indirizzo: Via G. di Vittorio, 30, 83020 Sperone AV
33. **Lapietra_hotelescapes** — Baiano
   - slug: `lapietra-hotelescapes-baiano`
   - indirizzo: Via Nuova Saviano, 157, 80040 San Gennaro Vesuviano NA
34. **Agrirelais La Bolla** — Bairo
   - slug: `agrirelais-la-bolla-bairo`
   - indirizzo: Via Circonvallazione, 11, 10011 Agliè TO
35. **Antharesworld** — Bairo
   - slug: `antharesworld-bairo`
   - indirizzo: Via Lido, 33, 10010 Candia Canavese TO