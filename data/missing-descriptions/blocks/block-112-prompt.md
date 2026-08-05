# Blocco 112/500 — 35 strutture senza descrizione IT

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

1. **Anghiari** — Anghiari
   - slug: `anghiari-anghiari`
   - indirizzo: 52031 Anghiari AR
2. **Anghiari Hotel** — Anghiari
   - slug: `anghiari-hotel-anghiari`
   - indirizzo: Via della Battaglia, 16, 52031 Anghiari AR
3. **Antica Dimora del Pellegrino** — Anghiari
   - slug: `antica-dimora-del-pellegrino-anghiari`
   - indirizzo: 14, Loc. Bagnolo del, Anghiari, 52031 Ponte Alla Piera AR
4. **B&B del Lago** — Anghiari
   - slug: `b-b-del-lago-anghiari`
   - indirizzo: Via della Ginestra, n. 14, 52037 Gragnano AR
5. **B&B Vigna del Poggio** — Anghiari
   - slug: `b-b-vigna-del-poggio-anghiari`
   - indirizzo: Via Fausto Vagnetti, 4, 52031 Anghiari AR
6. **Bed & Breakfast Locanda del Viandante** — Anghiari
   - slug: `bed-breakfast-locanda-del-viandante-anghiari`
   - indirizzo: Località Cerreto, 11, 52031 Ponte Alla Piera AR
7. **Casa Donella B&B** — Anghiari
   - slug: `casa-donella-b-b-anghiari`
   - indirizzo: Via di S. Marino, 2, 52037 Gricignano AR
8. **Casa vacanze Il Nido sulla Ruga** — Anghiari
   - slug: `casa-vacanze-il-nido-sulla-ruga-anghiari`
   - indirizzo: Corso Giacomo Matteotti, 31, 52031 Anghiari AR
9. **Il Cardo Resort** — Anghiari
   - slug: `il-cardo-resort-anghiari`
   - indirizzo: Loc. San Lorenzo, 108, 52031 Anghiari AR
10. **Il cielo di Anghiari** — Anghiari
   - slug: `il-cielo-di-anghiari-anghiari`
   - indirizzo: Corso Giacomo Matteotti, 30, 52031 Anghiari AR
11. **Il Giardino Nascosto Affittacamere** — Anghiari
   - slug: `il-giardino-nascosto-affittacamere-anghiari`
   - indirizzo: Via delle Mura di Sopra, 60, 52031 Anghiari AR
12. **La casa degli esposti** — Anghiari
   - slug: `la-casa-degli-esposti-anghiari`
   - indirizzo: Via Taglieschi, 7, 52031 Anghiari AR
13. **Nero Gioconda Affittacamere** — Anghiari
   - slug: `nero-gioconda-affittacamere-anghiari`
   - indirizzo: Via del Castello Antico, 14, 52031 Anghiari AR
14. **B&B Corte San Tomaso** — Angiari
   - slug: `b-b-corte-san-tomaso-angiari`
   - indirizzo: Via Argine, 13, 37040 Bonavigo VR
15. **B&B Il Glicine** — Angiari
   - slug: `b-b-il-glicine-angiari`
   - indirizzo: Riviera Luigi Balzan, 604, 45021 Badia Polesine RO
16. **Bed & Breakfast AL 16** — Angiari
   - slug: `bed-breakfast-al-16-angiari`
   - indirizzo: Lungadige Scrami, 16, 37045 Legnago VR
17. **Corte Ramedello** — Angiari
   - slug: `corte-ramedello-angiari`
   - indirizzo: Via Ramedello, 2, 37053 Cerea VR
18. **Hostiliae Ciminiera Hotel** — Angiari
   - slug: `hostiliae-ciminiera-hotel-angiari`
   - indirizzo: Piazza Mondadori Milano, 8, 46035 Ostiglia MN
19. **Hotel & Residence Villa Bartolomea** — Angiari
   - slug: `hotel-residence-villa-bartolomea-angiari`
   - indirizzo: Via dell'Accoglienza, 4, 37049 Villa Bartolomea VR
20. **Hotel Aldo Moro** — Angiari
   - slug: `hotel-aldo-moro-angiari`
   - indirizzo: Via Guglielmo Marconi, 27, 35044 Montagnana PD
21. **Hotel City Verona** — Angiari
   - slug: `hotel-city-verona-angiari`
   - indirizzo: Via Madonnina, 36, 37057 San Giovanni Lupatoto VR
22. **Hotel Milano** — Angiari
   - slug: `hotel-milano-angiari`
   - indirizzo: Via Madonnina, 4, 37057 San Giovanni Lupatoto VR
23. **Hotel Nuovo Sole** — Angiari
   - slug: `hotel-nuovo-sole-angiari`
   - indirizzo: Via Madonna, 332, 37051 Bovolone VR
24. **Hotel Ristorante Pergola** — Angiari
   - slug: `hotel-ristorante-pergola-angiari`
   - indirizzo: Via Verona, 140, 37045 Legnago VR
25. **Hotel Salieri SRL** — Angiari
   - slug: `hotel-salieri-srl-angiari`
   - indirizzo: Viale dei Caduti, 64, 37045 Legnago VR
26. **La Campagnola 1926 Ristorante Hotel** — Angiari
   - slug: `la-campagnola-1926-ristorante-hotel-angiari`
   - indirizzo: A. Manzoni 28 37059, 37059 Campagnola VR
27. **Soave Country House** — Angiari
   - slug: `soave-country-house-angiari`
   - indirizzo: Via Dr. Guglielmo, Via Dr. G. Soave, 15, 37050 Angiari VR
28. **Villa Brama** — Angiari
   - slug: `villa-brama-angiari`
   - indirizzo: Via Santa Eurosia, 21, 37045 Legnago VR
29. **Agriturismo Il Moro** — Angolo Terme
   - slug: `agriturismo-il-moro-angolo-terme`
   - indirizzo: Località Sorline, 25040 Angolo BS
30. **Agriturismo Le Frise** — Angolo Terme
   - slug: `agriturismo-le-frise-angolo-terme`
   - indirizzo: Via Plagne, 12, 25040 Rive Dei Balti BS
31. **Agriturismo Ruc del Lac** — Angolo Terme
   - slug: `agriturismo-ruc-del-lac-angolo-terme`
   - indirizzo: Via Lago Moro, 25047 Darfo Boario Terme BS
32. **Agriturismo Scraleca** — Angolo Terme
   - slug: `agriturismo-scraleca-angolo-terme`
   - indirizzo: Località, Via Rodino, 25040 Angolo Terme BS
33. **Agriturismo Serec | Ristorante e B&B** — Angolo Terme
   - slug: `agriturismo-serec-ristorante-e-b-b-angolo-terme`
   - indirizzo: Via Serec, 25040 Angolo Terme BS
34. **Albergo Legazzuolo** — Angolo Terme
   - slug: `albergo-legazzuolo-angolo-terme`
   - indirizzo: Via Legazzuolo di Montecampione, 1, 25050 Artogne BS
35. **Albergo Rusen** — Angolo Terme
   - slug: `albergo-rusen-angolo-terme`
   - indirizzo: Via Vittorio Veneto, 114, 25042 Borno BS