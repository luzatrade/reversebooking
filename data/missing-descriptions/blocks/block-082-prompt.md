# Blocco 82/500 — 35 strutture senza descrizione IT

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

1. **Bed And Breakfast Erba Gatta** — Alserio
   - slug: `bed-and-breakfast-erba-gatta-alserio`
   - indirizzo: Via Trieste, 8, 22036 Erba CO
2. **Hotel Nastro Azzurro** — Alserio
   - slug: `hotel-nastro-azzurro-alserio`
   - indirizzo: Via Chiesa, 8, 22040 Monguzzo CO
3. **Inverigo Hotel** — Alserio
   - slug: `inverigo-hotel-alserio`
   - indirizzo: Via Don C. Gnocchi, 81, 22044 Inverigo CO
4. **Villa Lorenzo** — Alserio
   - slug: `villa-lorenzo-alserio`
   - indirizzo: Via Giosuè Carducci, 18, Via S. Giuseppe, 2/Ingresso Eventi, 20836 Capriano MB
5. **Villa Oldrado** — Alserio
   - slug: `villa-oldrado-alserio`
   - indirizzo: Via Vittorio Vergani, 21, 22063 Cantù CO
6. **WayCo Rooms** — Alserio
   - slug: `wayco-rooms-alserio`
   - indirizzo: V. Statale per Lecco, 22030 Lipomo CO
7. **Agriturismo Bacchanalis** — Alta Val Tidone
   - slug: `agriturismo-bacchanalis-alta-val-tidone`
   - indirizzo: Località Negrese, 311, 29010 Ziano Piacentino PC
8. **Albergo Ristorante Baldazzi 1916 - Miele Restaurant** — Alta Val Tidone
   - slug: `albergo-ristorante-baldazzi-1916-miele-restauran-alta-val-tidone`
   - indirizzo: Via Vittorio Emanuele, 54, 27059 Zavattarello PV
9. **Albergo Ristorante Filietto** — Alta Val Tidone
   - slug: `albergo-ristorante-filietto-alta-val-tidone`
   - indirizzo: Località Costa Tamborlani, 1, 29022 Bobbio PC
10. **Antico Casale di Bobbio B&B** — Alta Val Tidone
   - slug: `antico-casale-di-bobbio-b-b-alta-val-tidone`
   - indirizzo: Piancasale, Vicolo Buelli, 8, 29022 Bobbio PC
11. **B&B Ca’ Növa** — Alta Val Tidone
   - slug: `b-b-ca-nova-alta-val-tidone`
   - indirizzo: SP7, 7, 27061 Mandasco PV
12. **B&B Casa Favari CIN IT033049C12IFS3XXN** — Alta Val Tidone
   - slug: `b-b-casa-favari-cin-it033049c12ifs3xxn-alta-val-tidone`
   - indirizzo: Località Casa Favari, SP44, 29031 Alta Val Tidone PC
13. **B&B Casa Piantone** — Alta Val Tidone
   - slug: `b-b-casa-piantone-alta-val-tidone`
   - indirizzo: Località Piantone, 1, 29031 Nibbiano PC
14. **B&B Il Giardino di Laura** — Alta Val Tidone
   - slug: `b-b-il-giardino-di-laura-alta-val-tidone`
   - indirizzo: SS 412 della Val Tidone, 70, 29010 Castelnovo Val Tidone PC
15. **B&b LA CASA COLONICA** — Alta Val Tidone
   - slug: `b-b-la-casa-colonica-alta-val-tidone`
   - indirizzo: Via Piane, 20, 27040 Montescano PV
16. **Bar Albergo Ristorante Penice** — Alta Val Tidone
   - slug: `bar-albergo-ristorante-penice-alta-val-tidone`
   - indirizzo: Frazione Casa Matti, 17, 19, 27050 Casa Matti PV
17. **Bioagriturismo Olistico Valtidone Verde** — Alta Val Tidone
   - slug: `bioagriturismo-olistico-valtidone-verde-alta-val-tidone`
   - indirizzo: Casa Canevaro, 3, 27059 Zavattarello PV
18. **Borgo dei Gatti - Albergo diffuso** — Alta Val Tidone
   - slug: `borgo-dei-gatti-albergo-diffuso-alta-val-tidone`
   - indirizzo: Via G. Garibaldi, 9, 27047 Golferenzo PV
19. **Castello di Tassara** — Alta Val Tidone
   - slug: `castello-di-tassara-alta-val-tidone`
   - indirizzo: 29031 Tassara PC
20. **Hotel Locanda Borgo Impero** — Alta Val Tidone
   - slug: `hotel-locanda-borgo-impero-alta-val-tidone`
   - indirizzo: Piazza De Cristoforis, 30, 29011 Borgonovo Val Tidone PC
21. **Luce Boutique Hotel** — Alta Val Tidone
   - slug: `luce-boutique-hotel-alta-val-tidone`
   - indirizzo: Via della Rocchetta, 1, 27040 Fortunago PV
22. **Residenze del Borgo** — Alta Val Tidone
   - slug: `residenze-del-borgo-alta-val-tidone`
   - indirizzo: Via Marconi, 27059 Zavattarello PV
23. **Valtidone Hotel** — Alta Val Tidone
   - slug: `valtidone-hotel-alta-val-tidone`
   - indirizzo: Str. Mottaziana, 10, 29011 Borgonovo Val Tidone PC
24. **Villa Auditorium** — Alta Val Tidone
   - slug: `villa-auditorium-alta-val-tidone`
   - indirizzo: Via Roma, 3, 27040 Fortunago PV
25. **"Rondanino" Ristorante Hotel** — Alta Valle Intelvi
   - slug: `rondanino-ristorante-hotel-alta-valle-intelvi`
   - indirizzo: Località Rondanino, 1, 22024 Alta Valle Intelvi CO
26. **Agriturismo La Nevera** — Alta Valle Intelvi
   - slug: `agriturismo-la-nevera-alta-valle-intelvi`
   - indirizzo: Località Caslè, 5, 22024 Lanzo D'intelvi CO
27. **Albergo Ristorante Belvedere** — Alta Valle Intelvi
   - slug: `albergo-ristorante-belvedere-alta-valle-intelvi`
   - indirizzo: Intelvi CO IT, Viale Guglielmo Poletti, 27, 22020 Alta Valle, CO
28. **Albergo Stella d'Italia** — Alta Valle Intelvi
   - slug: `albergo-stella-d-italia-alta-valle-intelvi`
   - indirizzo: P.za Roma, 1, 22010 Valsolda CO
29. **B&B "Michelina" nel CENTRO STORICO di Castiglione d'Intelvi - BED AND BREAKFAST vicino al LAGO di COMO e di Lugano** — Alta Valle Intelvi
   - slug: `b-b-michelina-nel-centro-storico-di-castiglione-alta-valle-intelvi`
   - indirizzo: Via Roma, 37, 22023 Castiglione D'intelvi CO
30. **B&B CA'SUANA** — Alta Valle Intelvi
   - slug: `b-b-ca-suana-alta-valle-intelvi`
   - indirizzo: Piazza, Via Martino Novi, 6, 22024 Lanzo D'intelvi CO
31. **Cavaria** — Alta Valle Intelvi
   - slug: `cavaria-alta-valle-intelvi`
   - indirizzo: Via Provinciale, 187, 22023 San Fedele Intelvi CO
32. **Hotel Corte di Santa Libera** — Alta Valle Intelvi
   - slug: `hotel-corte-di-santa-libera-alta-valle-intelvi`
   - indirizzo: Via Santa Liberata, 19, 22023 San Fedele Intelvi CO
33. **Hotel Funicolare** — Alta Valle Intelvi
   - slug: `hotel-funicolare-alta-valle-intelvi`
   - indirizzo: Viale Guglielmo Poletti, 30, 22024 Lanzo D'intelvi CO
34. **Hotel Milano** — Alta Valle Intelvi
   - slug: `hotel-milano-alta-valle-intelvi`
   - indirizzo: Via Martino Novi, 26, 22024 Lanzo D'intelvi CO
35. **Hotel Ristorante Valle Intelvi** — Alta Valle Intelvi
   - slug: `hotel-ristorante-valle-intelvi-alta-valle-intelvi`
   - indirizzo: Via Roma, 43, 22028 San Fedele Intelvi CO