# Blocco 153/500 — 35 strutture senza descrizione IT

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

1. **Hotel & Spa Villa Ida Ristorante** — Arnara
   - slug: `hotel-spa-villa-ida-ristorante-arnara`
   - indirizzo: Via Caragno, 27, 03024 Ceprano FR
2. **Il Giglio Rooms** — Arnara
   - slug: `il-giglio-rooms-arnara`
   - indirizzo: Contrada I Rotondi, 4, 03029 Sant'Angelo In Villa-giglio FR
3. **Il Piccolo Principe** — Arnara
   - slug: `il-piccolo-principe-arnara`
   - indirizzo: Via Forcella,30 Torrice, 03020 Frosinone FR
4. **L'Aia Antica - Ristorante Pizzeria Hotel a Frosinone, Castelmassimo** — Arnara
   - slug: `l-aia-antica-ristorante-pizzeria-hotel-a-frosino-arnara`
   - indirizzo: Via Castelmassimo, 435, 03029 Veroli FR
5. **Lual Hotel** — Arnara
   - slug: `lual-hotel-arnara`
   - indirizzo: Via Casilina Sud, 03026 Pofi FR
6. **Torre Dei Venti** — Arnara
   - slug: `torre-dei-venti-arnara`
   - indirizzo: Via Santo Stefano, 56, 03023 Ceccano FR
7. **Agriturismo La Crosa** — Arnasco
   - slug: `agriturismo-la-crosa-arnasco`
   - indirizzo: Frazione crosa, 10, 17030 Vendone SV
8. **Albergo Ristorante Cecchin** — Arnasco
   - slug: `albergo-ristorante-cecchin-arnasco`
   - indirizzo: Via Provinciale, 1, 17020 Balestrino SV
9. **Hotel Ca de Berna** — Arnasco
   - slug: `hotel-ca-de-berna-arnasco`
   - indirizzo: Via I. Lucifredi, 6, 17020 Balestrino SV
10. **Hotel Ristorante Hermitage** — Arnasco
   - slug: `hotel-ristorante-hermitage-arnasco`
   - indirizzo: Via Roma, 152, 17038 Villanova d'Albenga SV
11. **Il Poggio di Balestrino** — Arnasco
   - slug: `il-poggio-di-balestrino-arnasco`
   - indirizzo: Via I. Lucifredi, 9, 17020 Balestrino SV
12. **Relais Borgofasceo Ristorante & Camere** — Arnasco
   - slug: `relais-borgofasceo-ristorante-camere-arnasco`
   - indirizzo: Località Fasceo, 1, 17037 Ortovero SV
13. **Terrazza sul mare** — Arnasco
   - slug: `terrazza-sul-mare-arnasco`
   - indirizzo: Via Genova, Arnasco, SV 22, 17032 Arnasco SV
14. **Arryvo Hotel** — Arnesano
   - slug: `arryvo-hotel-arnesano`
   - indirizzo: Via Adua, 24, 73100 Lecce LE
15. **B & B Pozzillo San Rocco** — Arnesano
   - slug: `b-b-pozzillo-san-rocco-arnesano`
   - indirizzo: Strada vicinale, Via Pozzillo S. Rocco, 13, 73010 Arnesano LE
16. **B&B a Casa Mia** — Arnesano
   - slug: `b-b-a-casa-mia-arnesano`
   - indirizzo: Via Damiano Chiesa 73, Via Damiano Chiesa, 73/a, 73041 Carmiano LE
17. **B&B Casa di Anita** — Arnesano
   - slug: `b-b-casa-di-anita-arnesano`
   - indirizzo: Via Giuseppe Garibaldi, 73, 73010 Arnesano LE
18. **B&B Comfort Suit** — Arnesano
   - slug: `b-b-comfort-suit-arnesano`
   - indirizzo: Via Giacomo Matteotti, 100, 73047 Monteroni di Lecce LE
19. **B&b Ètoile** — Arnesano
   - slug: `b-b-etoile-arnesano`
   - indirizzo: Via Giuseppe Garibaldi, 8, 73010 Arnesano LE
20. **B&B il menhir** — Arnesano
   - slug: `b-b-il-menhir-arnesano`
   - indirizzo: Via Don Antonio Cruciato, 7, 73010 Lequile LE
21. **Dimora del Duca Lecce B&B** — Arnesano
   - slug: `dimora-del-duca-lecce-b-b-arnesano`
   - indirizzo: SP6, 10, 73047 Monteroni di Lecce LE
22. **Dimora Donna Rita** — Arnesano
   - slug: `dimora-donna-rita-arnesano`
   - indirizzo: Via Francesco Perulli, 1, 73100 Lecce LE
23. **Dimora La Cupa** — Arnesano
   - slug: `dimora-la-cupa-arnesano`
   - indirizzo: Via Michelangelo, 1, 73047 Monteroni di Lecce LE
24. **Hotel Aloisi** — Arnesano
   - slug: `hotel-aloisi-arnesano`
   - indirizzo: Via Taranto, 297, 73100 Lecce LE
25. **Le Chiese** — Arnesano
   - slug: `le-chiese-arnesano`
   - indirizzo: SC Lamia Russa, 73010 San Pietro in Lama LE
26. **Le Pentume** — Arnesano
   - slug: `le-pentume-arnesano`
   - indirizzo: 73010 Arnesano LE
27. **Lo Scacciapensieri Hotel & Restaurant** — Arnesano
   - slug: `lo-scacciapensieri-hotel-restaurant-arnesano`
   - indirizzo: Via Alcide de Gasperi, 73047 Monteroni di Lecce LE
28. **Mattandrè B&B** — Arnesano
   - slug: `mattandre-b-b-arnesano`
   - indirizzo: Via Gorizia, 9, 73047 Monteroni di Lecce LE
29. **Relais il Melograno** — Arnesano
   - slug: `relais-il-melograno-arnesano`
   - indirizzo: Via Mallacca-Zummari, 8, 73010 Arnesano LE
30. **Villa Di Noi** — Arnesano
   - slug: `villa-di-noi-arnesano`
   - indirizzo: Via dei Monti, 4, 73010 Arnesano LE
31. **Villa le more** — Arnesano
   - slug: `villa-le-more-arnesano`
   - indirizzo: Via Mallacca-Zummari, 6, 73010 Arnesano LE
32. **Villa Reginella** — Arnesano
   - slug: `villa-reginella-arnesano`
   - indirizzo: via Michele Laporta, 23, 73100 Lecce LE
33. **Agriturismo Il Barchetto** — Arola
   - slug: `agriturismo-il-barchetto-arola`
   - indirizzo: Via per Boleto, 28894 Madonna del Sasso VB
34. **Albergo & Ristorante Grand Italia a Quarona** — Arola
   - slug: `albergo-ristorante-grand-italia-a-quarona-arola`
   - indirizzo: Piazza Libertà, 27, 13017 Quarona VC
35. **B&B Melizio** — Arola
   - slug: `b-b-melizio-arola`
   - indirizzo: SP47, 10, 28017 San Maurizio d'Opaglio NO