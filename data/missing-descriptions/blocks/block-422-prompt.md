# Blocco 422/500 — 35 strutture senza descrizione IT

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

1. **LA VIGNA FIORITA** — Cappella Maggiore
   - slug: `la-vigna-fiorita-cappella-maggiore`
   - indirizzo: Via Col de Mar, 8, 31020 Tarzo TV
2. **Mani Sagge - Cantina Locanda Agriturismo Wine Bar** — Cappella Maggiore
   - slug: `mani-sagge-cantina-locanda-agriturismo-wine-bar-cappella-maggiore`
   - indirizzo: Via Manzana, 46, 31020 San Pietro di Feletto TV
3. **RISTORANTE e Hotel "Al Giardinetto"** — Cappella Maggiore
   - slug: `ristorante-e-hotel-al-giardinetto-cappella-maggiore`
   - indirizzo: Viale Roma, 5, 31014 Colle Umberto TV
4. **Agriturismo Terrapia** — Cappelle sul Tavo
   - slug: `agriturismo-terrapia-cappelle-sul-tavo`
   - indirizzo: Cda tavolaro, 65010 Moscufo PE
5. **Alexander’s Home | B&B** — Cappelle sul Tavo
   - slug: `alexander-s-home-b-b-cappelle-sul-tavo`
   - indirizzo: via Milano, 32, 65010 Collecorvino PE
6. **B&B Alèsia** — Cappelle sul Tavo
   - slug: `b-b-alesia-cappelle-sul-tavo`
   - indirizzo: Via Piceni, 33, 65015 Montesilvano PE
7. **B&B Il Paradiso** — Cappelle sul Tavo
   - slug: `b-b-il-paradiso-cappelle-sul-tavo`
   - indirizzo: Contrada Barbone, 20, 65010 Cappelle sul Tavo PE
8. **B&B La casa del nonno** — Cappelle sul Tavo
   - slug: `b-b-la-casa-del-nonno-cappelle-sul-tavo`
   - indirizzo: Via Silvio Pellico, 12, 65010 Spoltore PE
9. **B&B Raffaello a Mare** — Cappelle sul Tavo
   - slug: `b-b-raffaello-a-mare-cappelle-sul-tavo`
   - indirizzo: Via Raffaello Sanzio, 6, 65015 Montesilvano PE
10. **B&B Villa Grace** — Cappelle sul Tavo
   - slug: `b-b-villa-grace-cappelle-sul-tavo`
   - indirizzo: Via Matrino, 96, 65013 Città Sant'Angelo PE
11. **B&B VILLA MARIA** — Cappelle sul Tavo
   - slug: `b-b-villa-maria-cappelle-sul-tavo`
   - indirizzo: Via Danubio, 79, 65015 Montesilvano PE
12. **Brezza Marina** — Cappelle sul Tavo
   - slug: `brezza-marina-cappelle-sul-tavo`
   - indirizzo: Via Antonio Gramsci, 5, 65015 Montesilvano PE
13. **Giardino dei Principi d'Abruzzo** — Cappelle sul Tavo
   - slug: `giardino-dei-principi-d-abruzzo-cappelle-sul-tavo`
   - indirizzo: Via Leonardo Petruzzi, 30, 65013 Città Sant'Angelo PE
14. **Hotel Excelsior** — Cappelle sul Tavo
   - slug: `hotel-excelsior-cappelle-sul-tavo`
   - indirizzo: Via Bradano, 5, 65015 Montesilvano PE
15. **Hotel La Fonte a 300m uscita A14 Pescara Nord** — Cappelle sul Tavo
   - slug: `hotel-la-fonte-a-300m-uscita-a14-pescara-nord-cappelle-sul-tavo`
   - indirizzo: V.le L. Petruzzi, snc, 65013 Città Sant'Angelo (PE) PE
16. **Hotel Sole** — Cappelle sul Tavo
   - slug: `hotel-sole-cappelle-sul-tavo`
   - indirizzo: Via Aldo Moro, 106 G569+M3, Via Trentino, 4, 65015 Montesilvano PE
17. **La Vecchia Fornace** — Cappelle sul Tavo
   - slug: `la-vecchia-fornace-cappelle-sul-tavo`
   - indirizzo: S.S. 16 Bis Monte, 60, 65010 Spoltore PE
18. **LA VILLA IN CAMPAGNA** — Cappelle sul Tavo
   - slug: `la-villa-in-campagna-cappelle-sul-tavo`
   - indirizzo: Via Crocifisso, 17, 65013 Città Sant'Angelo PE
19. **Le margherite** — Cappelle sul Tavo
   - slug: `le-margherite-cappelle-sul-tavo`
   - indirizzo: Via Giovanni Boccaccio, 8, 65015 Montesilvano PE
20. **Leoni Hotel & Private Spa** — Cappelle sul Tavo
   - slug: `leoni-hotel-private-spa-cappelle-sul-tavo`
   - indirizzo: Via Giuseppe di Vittorio, Viale Colle delle More, 30, 65013 Città Sant'Angelo PE
21. **Nasz Hotel Just Blue** — Cappelle sul Tavo
   - slug: `nasz-hotel-just-blue-cappelle-sul-tavo`
   - indirizzo: Via Moncenisio, 26, 65015 Montesilvano PE
22. **Presentosa** — Cappelle sul Tavo
   - slug: `presentosa-cappelle-sul-tavo`
   - indirizzo: Via Giacomo Medici, 3, 65015 Montesilvano PE
23. **Residence Marco Polo** — Cappelle sul Tavo
   - slug: `residence-marco-polo-cappelle-sul-tavo`
   - indirizzo: Via Marco Polo, 1, 65015 Montesilvano PE
24. **B&B BiancaNeve** — Capracotta
   - slug: `b-b-biancaneve-capracotta`
   - indirizzo: Via Giovanni Paolo II', snc, 86082 Capracotta IS
25. **B&B Clarentia** — Capracotta
   - slug: `b-b-clarentia-capracotta`
   - indirizzo: Via Roma, 66040 Pizzoferrato CH
26. **B&B La Camia** — Capracotta
   - slug: `b-b-la-camia-capracotta`
   - indirizzo: Via Del Lavoro, 40, 67031 Castel di Sangro AQ
27. **B&b Masseria Cerasella** — Capracotta
   - slug: `b-b-masseria-cerasella-capracotta`
   - indirizzo: SS84, Km 5/900, 67033 Pescocostanzo AQ
28. **Bed & Breakfast 1421** — Capracotta
   - slug: `bed-breakfast-1421-capracotta`
   - indirizzo: Via Nicola Mosca, 2, 86082 Capracotta IS
29. **DIMORAME CAPRACOTTA** — Capracotta
   - slug: `dimorame-capracotta-capracotta`
   - indirizzo: Via Carfagna, 7, 86082 Capracotta IS
30. **Affittacamere La Terrazza** — Capraia e Limite
   - slug: `affittacamere-la-terrazza-capraia-e-limite`
   - indirizzo: Via Domenico Bartoloni, 55, 50053 Empoli FI
31. **Agriturismo Podere Dell'Anselmo** — Capraia e Limite
   - slug: `agriturismo-podere-dell-anselmo-capraia-e-limite`
   - indirizzo: Via Panfi Anselmo, 12, 50025 Montespertoli FI
32. **Agriturismo Tenuta Cantagallo** — Capraia e Limite
   - slug: `agriturismo-tenuta-cantagallo-capraia-e-limite`
   - indirizzo: Via Valicarda, 35/A, 50050 Capraia e Limite FI
33. **B&B Casa Fei** — Capraia e Limite
   - slug: `b-b-casa-fei-capraia-e-limite`
   - indirizzo: Via Manlio Romoli, 21, 50058 Signa FI
34. **B&B In Torre** — Capraia e Limite
   - slug: `b-b-in-torre-capraia-e-limite`
   - indirizzo: Via del Castello, 76/B, 50058 Signa FI
35. **B&B La Casa di Zefiro** — Capraia e Limite
   - slug: `b-b-la-casa-di-zefiro-capraia-e-limite`
   - indirizzo: Via Castra, 58/A, 50050 Limite Sull'Arno FI