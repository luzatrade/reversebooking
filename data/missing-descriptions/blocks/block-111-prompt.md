# Blocco 111/500 — 35 strutture senza descrizione IT

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

1. **Camere Zimmer al lago** — Anfo
   - slug: `camere-zimmer-al-lago-anfo`
   - indirizzo: Via Lago, 12, 25070 Anfo BS
2. **Hotel Adria Resort** — Anfo
   - slug: `hotel-adria-resort-anfo`
   - indirizzo: Piazza Caduti, 4, 25088 Toscolano Maderno BS
3. **Hotel Bonardi** — Anfo
   - slug: `hotel-bonardi-anfo`
   - indirizzo: Via Maniva, 256, 25060 Collio BS
4. **Hotel Lido** — Anfo
   - slug: `hotel-lido-anfo`
   - indirizzo: Via Colletta, 64, 25084 Gargnano BS
5. **Hotel Mariano** — Anfo
   - slug: `hotel-mariano-anfo`
   - indirizzo: Via Sasso, 8, 25084 Gargnano BS
6. **Hotel Ristorante da Rita** — Anfo
   - slug: `hotel-ristorante-da-rita-anfo`
   - indirizzo: Via Roma, 140, 38083 Borgo Chiese TN
7. **Hotel Sorriso** — Anfo
   - slug: `hotel-sorriso-anfo`
   - indirizzo: Via Religione, 5, 25088 Toscolano Maderno BS
8. **Il Giardino degli Elfi** — Anfo
   - slug: `il-giardino-degli-elfi-anfo`
   - indirizzo: Via Roma, 100, 25078 Pertica Bassa BS
9. **Lago Idro Glamping Boutique by Vacanze col cuore** — Anfo
   - slug: `lago-idro-glamping-boutique-by-vacanze-col-cuore-anfo`
   - indirizzo: Via Carlo Alberto dalla Chiesa, 7, 25070 Anfo BS
10. **Locanda Genzianella** — Anfo
   - slug: `locanda-genzianella-anfo`
   - indirizzo: Via dei Patrioti, 40, 25084 Costa BS
11. **Villa delle Palme** — Anfo
   - slug: `villa-delle-palme-anfo`
   - indirizzo: Via Ponte, 3, 25084 Gargnano BS
12. **Agriturismo La Camelia** — Angera
   - slug: `agriturismo-la-camelia-angera`
   - indirizzo: Via Prati Bassi, 62, 21020 Taino VA
13. **Arona Palace** — Angera
   - slug: `arona-palace-angera`
   - indirizzo: Piazza S. Graziano, 31, 28041 Arona NO
14. **Cascina Armonia** — Angera
   - slug: `cascina-armonia-angera`
   - indirizzo: Via Milano, 84, 21021 Angera VA
15. **Cascina Canée** — Angera
   - slug: `cascina-canee-angera`
   - indirizzo: Via Prato Chiuso, 36, 21021 Angera VA
16. **Hotel Aries** — Angera
   - slug: `hotel-aries-angera`
   - indirizzo: Via Sempione, 37, 28040 Lesa NO
17. **Hotel Capri** — Angera
   - slug: `hotel-capri-angera`
   - indirizzo: Via Sempione, 131, 28040 Lesa NO
18. **Hotel Concorde** — Angera
   - slug: `hotel-concorde-angera`
   - indirizzo: Via Verbano, 1, 28041 Arona NO
19. **Hotel dei Tigli - Angera** — Angera
   - slug: `hotel-dei-tigli-angera-angera`
   - indirizzo: Via Paletta, 20, 21021 Angera VA
20. **Hotel Florida** — Angera
   - slug: `hotel-florida-angera`
   - indirizzo: Piazza del Popolo, 32, 28041 Arona NO
21. **Hotel Giardino** — Angera
   - slug: `hotel-giardino-angera`
   - indirizzo: Corso Repubblica, 1, 28041 Arona NO
22. **Hotel Pavone** — Angera
   - slug: `hotel-pavone-angera`
   - indirizzo: Via Borromeo Federico, 10, 21021 Angera VA
23. **Hotel Ponti Angera** — Angera
   - slug: `hotel-ponti-angera-angera`
   - indirizzo: Piazza Garibaldi, 21, 21021 Angera VA
24. **Il Sole di Ranco** — Angera
   - slug: `il-sole-di-ranco-angera`
   - indirizzo: Indirizzo Commerciale:, Piazza Venezia, 5, 21020 Ranco VA
25. **Little Square Arona** — Angera
   - slug: `little-square-arona-angera`
   - indirizzo: Via Giacomo Matteotti, 13, 28041 Arona NO
26. **Poggio del poeta** — Angera
   - slug: `poggio-del-poeta-angera`
   - indirizzo: Via Ai Pozzi, 21021 Barzola VA
27. **Relais Cascina al Campaccio** — Angera
   - slug: `relais-cascina-al-campaccio-angera`
   - indirizzo: Via Campaccio, 1, 21020 Taino VA
28. **Ristorante San Carlo** — Angera
   - slug: `ristorante-san-carlo-angera`
   - indirizzo: Via Verbano, 4, 28041 Arona NO
29. **Affittacamere "44 Ricci"** — Anghiari
   - slug: `affittacamere-44-ricci-anghiari`
   - indirizzo: Corso Giacomo Matteotti, 44, 52031 Anghiari AR
30. **Affittacamere Bellavista** — Anghiari
   - slug: `affittacamere-bellavista-anghiari`
   - indirizzo: Via della Bozzia, 52031 Anghiari AR
31. **Affittacamere Casa Margherita** — Anghiari
   - slug: `affittacamere-casa-margherita-anghiari`
   - indirizzo: Via del Comune, 14, 52031 Anghiari AR
32. **Affittacamere Casa Sofia** — Anghiari
   - slug: `affittacamere-casa-sofia-anghiari`
   - indirizzo: Via Infrantoio, 45, 52031 Anghiari AR
33. **Agriturismo Terre di Anghiari** — Anghiari
   - slug: `agriturismo-terre-di-anghiari-anghiari`
   - indirizzo: Via di Motina, 94, 52031 Anghiari AR
34. **Agriturismo Terre di Beba _ Wine & Hospitality** — Anghiari
   - slug: `agriturismo-terre-di-beba-wine-hospitality-anghiari`
   - indirizzo: loc. la casaccia, 10, 52031 Anghiari AR
35. **Albergo La Meridiana di Chieli Mario** — Anghiari
   - slug: `albergo-la-meridiana-di-chieli-mario-anghiari`
   - indirizzo: Piazza IV Novembre, 8, 52031 Anghiari AR