# Blocco 412/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Foglie** — Cantiano
   - slug: `agriturismo-foglie-cantiano`
   - indirizzo: Frazione S. Bartolomeo di Burano, 06024 Gubbio PG
2. **B&B Dimora Morelli** — Cantiano
   - slug: `b-b-dimora-morelli-cantiano`
   - indirizzo: Via del Bottagnone, 36, 06024 Gubbio PG
3. **B&B Il Poggetto** — Cantiano
   - slug: `b-b-il-poggetto-cantiano`
   - indirizzo: Via Poggetto, 41, 61040 Serra Sant'Abbondio PU
4. **Castello Cortevecchio Gubbio Umbria** — Cantiano
   - slug: `castello-cortevecchio-gubbio-umbria-cantiano`
   - indirizzo: Localita' Nogna, 09, 06024 Gubbio PG
5. **Civico 10** — Cantiano
   - slug: `civico-10-cantiano`
   - indirizzo: Via Del Camignano, 10, 06024 Gubbio PG
6. **Hotel La Rocca** — Cantiano
   - slug: `hotel-la-rocca-cantiano`
   - indirizzo: Via Monte Ingino, 15, 06024 Gubbio PG
7. **Hotel San Marco Gubbio** — Cantiano
   - slug: `hotel-san-marco-gubbio-cantiano`
   - indirizzo: Via Campo di Marte, 2, 06024 Gubbio PG
8. **L'Inferno di Dante Gubbio B&B** — Cantiano
   - slug: `l-inferno-di-dante-gubbio-b-b-cantiano`
   - indirizzo: Via Gioia, 13, 06024 Gubbio PG
9. **LA PINETA Hotel Ristorante** — Cantiano
   - slug: `la-pineta-hotel-ristorante-cantiano`
   - indirizzo: Localita' Monte Calvario, 40, 06027 Scheggia e Pascelupo PG
10. **La Stazione Di Posta** — Cantiano
   - slug: `la-stazione-di-posta-cantiano`
   - indirizzo: SS3, 61044 Cantiano PU
11. **OSTELLO DEL VOLO** — Cantiano
   - slug: `ostello-del-volo-cantiano`
   - indirizzo: Frazione Villa Scirca, 32, 06028 Scirca PG
12. **Albergo Pialpetta** — Cantoira
   - slug: `albergo-pialpetta-cantoira`
   - indirizzo: Piazza San Lorenzo, 1, 10070 Groscavallo TO
13. **Albergo Ristorante Albero Fiorito** — Cantoira
   - slug: `albergo-ristorante-albero-fiorito-cantoira`
   - indirizzo: Via Valnera, 53, 10070 Chialamberto TO
14. **Albergo Ristorante Valli di Lanzo** — Cantoira
   - slug: `albergo-ristorante-valli-di-lanzo-cantoira`
   - indirizzo: Via Roma, 11, 10070 Ceres TO
15. **B&B Villino Oberto** — Cantoira
   - slug: `b-b-villino-oberto-cantoira`
   - indirizzo: Borgata Cortevecchio, 5, 10080 Ceresole Reale TO
16. **Camping La Roccia** — Cantoira
   - slug: `camping-la-roccia-cantoira`
   - indirizzo: Strada Provinciale 33 dir 1, 1, 10070 Cantoira TO
17. **Hotel la cascata** — Cantoira
   - slug: `hotel-la-cascata-cantoira`
   - indirizzo: Frazione Gere Sopra, 1, 10080 Noasca TO
18. **Mianda del goletto** — Cantoira
   - slug: `mianda-del-goletto-cantoira`
   - indirizzo: Regione Germane, 10, 10070 Ceres TO
19. **Rifugio Salvin** — Cantoira
   - slug: `rifugio-salvin-cantoira`
   - indirizzo: Località Salvin, 10070 Monastero di Lanzo TO
20. **Abate Masseria & Resort** — Cant�
   - slug: `abate-masseria-resort-cant`
   - indirizzo: Zona F, 83/C, 70015 Noci BA
21. **Aria di Casa Country Resort** — Cant�
   - slug: `aria-di-casa-country-resort-cant`
   - indirizzo: Via Malvischi, 20, 70011 Alberobello BA
22. **B&B Antico Ulivo** — Cant�
   - slug: `b-b-antico-ulivo-cant`
   - indirizzo: Contrada Peroscia, 16, 70043 Monopoli BA
23. **b&b in masseria Agli antichi trulli** — Cant�
   - slug: `b-b-in-masseria-agli-antichi-trulli-cant`
   - indirizzo: S.P. 239, Strada Provinciale Noci Alberobello, 70015 Noci BA
24. **B&B LA CASCATA** — Cant�
   - slug: `b-b-la-cascata-cant`
   - indirizzo: Zona F, 87/A, 70015 Noci BA
25. **B&B Salita Delle Pere** — Cant�
   - slug: `b-b-salita-delle-pere-cant`
   - indirizzo: Contrada Terranova, 78, 70043 Monopoli BA
26. **B&B Una Perla Nel Verde** — Cant�
   - slug: `b-b-una-perla-nel-verde-cant`
   - indirizzo: Strada Comunale Lama di Forchia, 17, 70017 Putignano BA
27. **Cant del Gal** — Cant�
   - slug: `cant-del-gal-cant`
   - indirizzo: Localita' Sabbionade, 1, 38054 Fiera di Primiero TN
28. **Dimora Carucci** — Cant�
   - slug: `dimora-carucci-cant`
   - indirizzo: Strada Provinciale per Castellaneta, 6/D, 70015 Noci BA
29. **Dimora Pozzo Epifani** — Cant�
   - slug: `dimora-pozzo-epifani-cant`
   - indirizzo: Via Pozzo Epifani, 26, 70015 Noci BA
30. **I trulli di eva** — Cant�
   - slug: `i-trulli-di-eva-cant`
   - indirizzo: Zona F, 89/C, 70015 Noci BA
31. **Le Corti del Casale - Bed & Breakfast** — Cant�
   - slug: `le-corti-del-casale-bed-breakfast-cant`
   - indirizzo: Contrada Monte Olimpo, 17, 70011 Alberobello BA
32. **San Lorenzo Suites** — Cant�
   - slug: `san-lorenzo-suites-cant`
   - indirizzo: Corso Umberto I, 8, 70017 Putignano BA
33. **Santarosa Relais** — Cant�
   - slug: `santarosa-relais-cant`
   - indirizzo: Via Santa Rosa, 5, 70015 Noci BA
34. **Agriturismo Le Macine- Poggio Cono,TE** — Canzano
   - slug: `agriturismo-le-macine-poggio-cono-te-canzano`
   - indirizzo: Frazione, 64100 Poggio Cono TE
35. **B&B I Tre Ulivi** — Canzano
   - slug: `b-b-i-tre-ulivi-canzano`
   - indirizzo: Via Santa Maria di Propezzano, 36, 64020 Morro d'Oro TE