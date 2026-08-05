# Blocco 78/500 — 35 strutture senza descrizione IT

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

1. **Mari Giò Room & Restaurant** — Alliste
   - slug: `mari-gio-room-restaurant-alliste`
   - indirizzo: Via Enrico Toti, 20, 73040 Alliste LE
2. **Palummare Agri Hotel Relais** — Alliste
   - slug: `palummare-agri-hotel-relais-alliste`
   - indirizzo: Via Longa, 73040 Alliste LE
3. **Rosso Salento B&B** — Alliste
   - slug: `rosso-salento-b-b-alliste`
   - indirizzo: Via Antonaci, 10, 73040 Alliste LE
4. **Salenterra B&B** — Alliste
   - slug: `salenterra-b-b-alliste`
   - indirizzo: Piazza Indipendenza, 73040 Alliste LE
5. **Salenthouse** — Alliste
   - slug: `salenthouse-alliste`
   - indirizzo: Via Gallipoli, 197, 73055 Racale LE
6. **Acquamarina** — Allumiere
   - slug: `acquamarina-allumiere`
   - indirizzo: Via delle Rose, 47A, 00053 Civitavecchia RM
7. **Autenticum Agriturismo Tolfa** — Allumiere
   - slug: `autenticum-agriturismo-tolfa-allumiere`
   - indirizzo: Via della Rocca, 14, 00059 Tolfa RM
8. **B&B MABELL** — Allumiere
   - slug: `b-b-mabell-allumiere`
   - indirizzo: Via Sant'Agostino, 7a, 00053 Civitavecchia RM
9. **B&B Rosa Dei Venti** — Allumiere
   - slug: `b-b-rosa-dei-venti-allumiere`
   - indirizzo: Via Annibal Caro, 137, 00059 Tolfa RM
10. **bed and breakfast Casale Fernando** — Allumiere
   - slug: `bed-and-breakfast-casale-fernando-allumiere`
   - indirizzo: Località Pianbovaro, snc, 01016 Tarquinia VT
11. **Casa dei Faggi, Tolfa** — Allumiere
   - slug: `casa-dei-faggi-tolfa-allumiere`
   - indirizzo: Via dei Faggi, 13, 00059 Tolfa RM
12. **Convento dei Cappuccini** — Allumiere
   - slug: `convento-dei-cappuccini-allumiere`
   - indirizzo: Via Annibal Caro, 135, 00059 Tolfa RM
13. **Country House Villacolle B&B** — Allumiere
   - slug: `country-house-villacolle-b-b-allumiere`
   - indirizzo: Loc. Monte Pietroso, snc, 00051 Allumiere RM
14. **Hotel Baia Del Sole** — Allumiere
   - slug: `hotel-baia-del-sole-allumiere`
   - indirizzo: Via Daniele Rossi, snc, 00053 Civitavecchia RM
15. **Hotel Borgo del Mare** — Allumiere
   - slug: `hotel-borgo-del-mare-allumiere`
   - indirizzo: Via Olimpia, 3, 00053 Civitavecchia RM
16. **Hotel Mediterraneo** — Allumiere
   - slug: `hotel-mediterraneo-allumiere`
   - indirizzo: Viale Giuseppe Garibaldi, 38, 00053 Civitavecchia RM
17. **Hotel Traiano** — Allumiere
   - slug: `hotel-traiano-allumiere`
   - indirizzo: Via Fabio Filzi, 1, 00053 Civitavecchia RM
18. **I Tre Leoni Affittacamere** — Allumiere
   - slug: `i-tre-leoni-affittacamere-allumiere`
   - indirizzo: Via delle Ginestre, 1, 00053 Civitavecchia RM
19. **La casetta degli Etruschi** — Allumiere
   - slug: `la-casetta-degli-etruschi-allumiere`
   - indirizzo: Via Bandita dei Buoi, 5, 00051 Allumiere RM
20. **Locanda Villa Naumanni** — Allumiere
   - slug: `locanda-villa-naumanni-allumiere`
   - indirizzo: SP Valle del Mignone snc, 01016 Tarquinia VT
21. **Maison De Revel B&B Civitavecchia** — Allumiere
   - slug: `maison-de-revel-b-b-civitavecchia-allumiere`
   - indirizzo: Lungomare Ammiraglio Thaon de Revel, 30, 00053 Civitavecchia RM
22. **Oasi del Relax** — Allumiere
   - slug: `oasi-del-relax-allumiere`
   - indirizzo: Via G.M.Amicizia, Via Amicizia, 7/n°7, 00053 Civitavecchia RM
23. **Quattro Stelle al Porto** — Allumiere
   - slug: `quattro-stelle-al-porto-allumiere`
   - indirizzo: Via Neghelli, 2A, 00053 Civitavecchia RM
24. **Suites Matteotti 57 Civitavecchia** — Allumiere
   - slug: `suites-matteotti-57-civitavecchia-allumiere`
   - indirizzo: Viale Giacomo Matteotti, 57, 00053 Civitavecchia RM
25. **Tenuta dell'Argento** — Allumiere
   - slug: `tenuta-dell-argento-allumiere`
   - indirizzo: Via Colline dell'Argento, 00053 Civitavecchia RM
26. **Agriturismo Castello Beccaria** — Alluvioni Piovera
   - slug: `agriturismo-castello-beccaria-alluvioni-piovera`
   - indirizzo: Piazza Paltineri, 12, 27037 Pieve del Cairo PV
27. **Albergo La Chiocciola. Pizzeria Ristorante** — Alluvioni Piovera
   - slug: `albergo-la-chiocciola-pizzeria-ristorante-alluvioni-piovera`
   - indirizzo: Via Dante Alighieri, 35, 15045 Sale AL
28. **Albergo Ristorante Cannone D'Oro** — Alluvioni Piovera
   - slug: `albergo-ristorante-cannone-d-oro-alluvioni-piovera`
   - indirizzo: Via Dante Alighieri, 6, 15045 Sale AL
29. **Albergo Ristorante Dal Furlan** — Alluvioni Piovera
   - slug: `albergo-ristorante-dal-furlan-alluvioni-piovera`
   - indirizzo: Piazza Cesare Battisti, 16, 15122 San Giuliano AL
30. **Antica Casa Santa Maria Giardino** — Alluvioni Piovera
   - slug: `antica-casa-santa-maria-giardino-alluvioni-piovera`
   - indirizzo: Str. Monte Valenza, 6, 15040 Pomaro Monferrato AL
31. **B&B Antico Pioppo** — Alluvioni Piovera
   - slug: `b-b-antico-pioppo-alluvioni-piovera`
   - indirizzo: Via Orti Grandi, 21, 15045 Sale AL
32. **B&B LA CASCINA** — Alluvioni Piovera
   - slug: `b-b-la-cascina-alluvioni-piovera`
   - indirizzo: Via S. Giuliano Nuovo, 97, 15122 Alessandria AL
33. **B&B La Corte dei Samidagi** — Alluvioni Piovera
   - slug: `b-b-la-corte-dei-samidagi-alluvioni-piovera`
   - indirizzo: Str. per Montecastello, 3, 15040 Pietra Marazzi AL
34. **B&B La Cortevecchia** — Alluvioni Piovera
   - slug: `b-b-la-cortevecchia-alluvioni-piovera`
   - indirizzo: via Giovanni Poggio, 2, 15122 Lobbi AL
35. **B&B Le Piote** — Alluvioni Piovera
   - slug: `b-b-le-piote-alluvioni-piovera`
   - indirizzo: SCENDERE IN V. VALMIGLIARO, Via Valmigliaro, 8R, 15122 Valle San Bartolomeo AL