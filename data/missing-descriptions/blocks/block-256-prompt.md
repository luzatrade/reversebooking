# Blocco 256/500 — 35 strutture senza descrizione IT

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

1. **Albergo da Gianni** — Berbenno
   - slug: `albergo-da-gianni-berbenno`
   - indirizzo: Via Tiolo, 37, 24019 Zogno BG
2. **Albergo Ristorante La Rua** — Berbenno
   - slug: `albergo-ristorante-la-rua-berbenno`
   - indirizzo: Via S. Gottardo, 49, 24012 Val Brembilla BG
3. **B&B Carmen** — Berbenno
   - slug: `b-b-carmen-berbenno`
   - indirizzo: Via Busi Cariani, 12, 24015 Fuipiano Al Brembo BG
4. **B&B I Baloss** — Berbenno
   - slug: `b-b-i-baloss-berbenno`
   - indirizzo: Via Europa, 25, 24030 Berbenno BG
5. **Bed & Breakfast “Castello Regina”** — Berbenno
   - slug: `bed-breakfast-castello-regina-berbenno`
   - indirizzo: Via Cavaglia, 10, 24012 Val Brembilla BG
6. **Agriturismo Olmo** — Berbenno di Valtellina
   - slug: `agriturismo-olmo-berbenno-di-valtellina`
   - indirizzo: Frazione Ponchiera, 500, 23100 Ponchiera SO
7. **B&B Le Ruote** — Berbenno di Valtellina
   - slug: `b-b-le-ruote-berbenno-di-valtellina`
   - indirizzo: Via Mulini, 128, 23010 Berbenno di Valtellina SO
8. **Grand Hotel della Posta** — Berbenno di Valtellina
   - slug: `grand-hotel-della-posta-berbenno-di-valtellina`
   - indirizzo: Piazza Garibaldi Giuseppe, 19, 23100 Sondrio SO
9. **Hotel Europa** — Berbenno di Valtellina
   - slug: `hotel-europa-berbenno-di-valtellina`
   - indirizzo: Lungomallero Luigi Cadorna, 27, 23100 Sondrio SO
10. **Hotel Ristorante Salyut Centro Congressi** — Berbenno di Valtellina
   - slug: `hotel-ristorante-salyut-centro-congressi-berbenno-di-valtellina`
   - indirizzo: Via Nazionale, 1297, 23010 Berbenno di Valtellina SO
11. **Le Corti Dei Sassi** — Berbenno di Valtellina
   - slug: `le-corti-dei-sassi-berbenno-di-valtellina`
   - indirizzo: Via Giuseppe Garibaldi, 115, 23010 Berbenno di Valtellina SO
12. **Agriturismo e Azienda Agricola IL MULINO DELLA ROCCA** — Berceto
   - slug: `agriturismo-e-azienda-agricola-il-mulino-della-r-berceto`
   - indirizzo: Roccaprebalza, 29A, 43042 Berceto PR
13. **Agriturismo I Tre Colli** — Berceto
   - slug: `agriturismo-i-tre-colli-berceto`
   - indirizzo: Via Vittorio Veneto, 85, 43045 Rubbiano PR
14. **Albergo della Roccia** — Berceto
   - slug: `albergo-della-roccia-berceto`
   - indirizzo: Via Martiri della Libertà, 2, 43040 Varano de' Melegari PR
15. **Albergo Trattoria Ghirardini** — Berceto
   - slug: `albergo-trattoria-ghirardini-berceto`
   - indirizzo: Località Bosco, 106, 43021 Corniglio PR
16. **Az. Agr. Il Paradiso - agriturismo** — Berceto
   - slug: `az-agr-il-paradiso-agriturismo-berceto`
   - indirizzo: Via Borgo Vecchio, 54027 Pontremoli MS
17. **B&b Casa Florida** — Berceto
   - slug: `b-b-casa-florida-berceto`
   - indirizzo: Via poderi, 35, 54027 Pontremoli MS
18. **Ca' del Moro Resort** — Berceto
   - slug: `ca-del-moro-resort-berceto`
   - indirizzo: Via Giovanni Bellotti, 2, 54027 Pontremoli MS
19. **Casa dei cuori - B&B - Azienda agricola - Natura e Relax** — Berceto
   - slug: `casa-dei-cuori-b-b-azienda-agricola-natura-e-rel-berceto`
   - indirizzo: Strada di Tordenaso, 39, 43013 Langhirano PR
20. **IL CORRIDORE - Piccolo Borgo Tralacosta** — Berceto
   - slug: `il-corridore-piccolo-borgo-tralacosta-berceto`
   - indirizzo: Case Sparse Tralacosta, 105, 43042 Berceto PR
21. **La Casa dei Nonni - Room & Breakfast** — Berceto
   - slug: `la-casa-dei-nonni-room-breakfast-berceto`
   - indirizzo: Via Pier Maria Rossi, 8, 43042 Berceto PR
22. **La Casa di Marty B&B** — Berceto
   - slug: `la-casa-di-marty-b-b-berceto`
   - indirizzo: Via Valenti, 8, 43042 Berceto PR
23. **La Ghiandaia - Casa vacanze B&B - Berceto** — Berceto
   - slug: `la-ghiandaia-casa-vacanze-b-b-berceto-berceto`
   - indirizzo: Località Piano di Bilù, 208 bis, 43042 Berceto PR
24. **La Lupa e l'Orso** — Berceto
   - slug: `la-lupa-e-l-orso-berceto`
   - indirizzo: Località la valle, 92, 43042 Berceto PR
25. **Notte Rosa Suites & Relax** — Berceto
   - slug: `notte-rosa-suites-relax-berceto`
   - indirizzo: Str. Caselle, 38, 43045 Fornovo di Taro PR
26. **Ristorante Hotel Bersè** — Berceto
   - slug: `ristorante-hotel-berse-berceto`
   - indirizzo: Loc. Groppo San Giovanni, 43042 Groppo san giovanni PR
27. **Segarati Relax Albergo Diffuso** — Berceto
   - slug: `segarati-relax-albergo-diffuso-berceto`
   - indirizzo: 43032 Segarati PR
28. **A Casa di Zia** — Berchidda
   - slug: `a-casa-di-zia-berchidda`
   - indirizzo: Via Giosuè Carducci, 14, 07027 Oschiri OT
29. **Agriturismo B&B Domo de Resteblas** — Berchidda
   - slug: `agriturismo-b-b-domo-de-resteblas-berchidda`
   - indirizzo: Strada del Lago Coghinas, 07022 Berchidda OT
30. **Agriturismo I Graniti** — Berchidda
   - slug: `agriturismo-i-graniti-berchidda`
   - indirizzo: Via nuoro2, 07020 Monti OT
31. **B&B Il Gallo di Gallura** — Berchidda
   - slug: `b-b-il-gallo-di-gallura-berchidda`
   - indirizzo: Corso Giacomo Matteotti, 28, 07029 Tempio Pausania OT
32. **B&B Meladormo** — Berchidda
   - slug: `b-b-meladormo-berchidda`
   - indirizzo: Località Lu Curosu, 07029 Tempio Pausania OT
33. **B&B Sa Soliana** — Berchidda
   - slug: `b-b-sa-soliana-berchidda`
   - indirizzo: Via Su Piattone, 29, 07020 Monti OT
34. **B&B San Michele** — Berchidda
   - slug: `b-b-san-michele-berchidda`
   - indirizzo: localita sa ena e sas multas, 07022 Berchidda OT
35. **B&B SAN PAOLO** — Berchidda
   - slug: `b-b-san-paolo-berchidda`
   - indirizzo: Via Giuncos Marinos, 07020 Monti OT