# Blocco 12/500 — 35 strutture senza descrizione IT

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

1. **Affittacamere Cigole** — Acquanegra sul Chiese
   - slug: `affittacamere-cigole-acquanegra-sul-chiese`
   - indirizzo: Vicolo Martinoni, 3, 25020 Cigole BS
2. **Albergo Giulia Gonzaga** — Acquanegra sul Chiese
   - slug: `albergo-giulia-gonzaga-acquanegra-sul-chiese`
   - indirizzo: Via Vespasiano Gonzaga, 65, 46018 Sabbioneta MN
3. **B&B La Casa sul Fiume** — Acquanegra sul Chiese
   - slug: `b-b-la-casa-sul-fiume-acquanegra-sul-chiese`
   - indirizzo: Via Dante Alighieri, 54, 46010 San Martino dall'Argine MN
4. **Bed&Biker** — Acquanegra sul Chiese
   - slug: `bed-biker-acquanegra-sul-chiese`
   - indirizzo: Via XXIV Aprile, 12, 26042 Cingia de' Botti CR
5. **Camere della Perla** — Acquanegra sul Chiese
   - slug: `camere-della-perla-acquanegra-sul-chiese`
   - indirizzo: Via Donatore Dell'Avis Aido 12, 46010 Campitello MN
6. **Casa delle Rondini B&B** — Acquanegra sul Chiese
   - slug: `casa-delle-rondini-b-b-acquanegra-sul-chiese`
   - indirizzo: Via Giuseppe Mazzini, 5, 26040 Castelponzone CR
7. **Castellucchio Hotel | Castellucchio (Mantova)** — Acquanegra sul Chiese
   - slug: `castellucchio-hotel-castellucchio-mantova-acquanegra-sul-chiese`
   - indirizzo: Via Roma, 112, 46014 Castellucchio MN
8. **Corte Manzoglio** — Acquanegra sul Chiese
   - slug: `corte-manzoglio-acquanegra-sul-chiese`
   - indirizzo: Via Europa, Unita 35, 46010 Gazzuolo MN
9. **Corte Pioppazza** — Acquanegra sul Chiese
   - slug: `corte-pioppazza-acquanegra-sul-chiese`
   - indirizzo: Via Pioppazza, 1, 46040 Ceresara MN
10. **Corte Rachele** — Acquanegra sul Chiese
   - slug: `corte-rachele-acquanegra-sul-chiese`
   - indirizzo: Via Magnalupo, 28, 46014 Castellucchio MN
11. **Hotel Gambara** — Acquanegra sul Chiese
   - slug: `hotel-gambara-acquanegra-sul-chiese`
   - indirizzo: Via Campo Fiera, 22, 25020 Gambara BS
12. **Hotel La Quercia con Ristorante** — Acquanegra sul Chiese
   - slug: `hotel-la-quercia-con-ristorante-acquanegra-sul-chiese`
   - indirizzo: SS343, 9, 26037 San Giovanni in Croce CR
13. **Hotel Paris** — Acquanegra sul Chiese
   - slug: `hotel-paris-acquanegra-sul-chiese`
   - indirizzo: Via Giuseppe Garibaldi, 3, 46042 Castel Goffredo MN
14. **House Sabbioneta** — Acquanegra sul Chiese
   - slug: `house-sabbioneta-acquanegra-sul-chiese`
   - indirizzo: Via Colonna, 10, 46018 Sabbioneta MN
15. **il Giglio B&B** — Acquanegra sul Chiese
   - slug: `il-giglio-b-b-acquanegra-sul-chiese`
   - indirizzo: Str. S. Caminate, 2, 46041 Asola MN
16. **L'Alveare** — Acquanegra sul Chiese
   - slug: `l-alveare-acquanegra-sul-chiese`
   - indirizzo: Via Gambino, 11, 46034 Borgo Virgilio MN
17. **La Piazzetta Goito** — Acquanegra sul Chiese
   - slug: `la-piazzetta-goito-acquanegra-sul-chiese`
   - indirizzo: Piazza Giacomo Matteotti, 35, 46044 Goito MN
18. **Toson d'Oro Bed & Breakfast** — Acquanegra sul Chiese
   - slug: `toson-d-oro-bed-breakfast-acquanegra-sul-chiese`
   - indirizzo: Via dei Serviti, 10, 46018 Sabbioneta MN
19. **108 b&b** — Acquapendente
   - slug: `108-b-b-acquapendente`
   - indirizzo: Via Vittorio Veneto, 108, 01025 Grotte di Castro VT
20. **Agriturismo Il Sentiero** — Acquapendente
   - slug: `agriturismo-il-sentiero-acquapendente`
   - indirizzo: Strada Vicinale di Montepetrocco, 01021 Acquapendente VT
21. **Agriturismo Le Spighe** — Acquapendente
   - slug: `agriturismo-le-spighe-acquapendente`
   - indirizzo: SS cassia, km 140, 01020 Proceno VT
22. **Agriturismo Podernuovo Acquapendente** — Acquapendente
   - slug: `agriturismo-podernuovo-acquapendente-acquapendente`
   - indirizzo: Str. della Falconiera, 01021 Acquapendente VT
23. **Albergo Ristorante Toscana** — Acquapendente
   - slug: `albergo-ristorante-toscana-acquapendente`
   - indirizzo: Piazza Nazario Sauro, 5, 01021 Acquapendente VT
24. **Alloggi Per Uso Turistico A&M** — Acquapendente
   - slug: `alloggi-per-uso-turistico-a-m-acquapendente`
   - indirizzo: Via Cesare Battisti, 28, 01021 Acquapendente VT
25. **Alloggio 76** — Acquapendente
   - slug: `alloggio-76-acquapendente`
   - indirizzo: Via Poggio Graziano, 70, 01021 Acquapendente VT
26. **Alloggio Turistico San Pietro** — Acquapendente
   - slug: `alloggio-turistico-san-pietro-acquapendente`
   - indirizzo: Via Oriolo, 33, 01021 Acquapendente VT
27. **B&B CASA GALLI** — Acquapendente
   - slug: `b-b-casa-galli-acquapendente`
   - indirizzo: Via Casa Galli, 55, 05013 Castel Giorgio TR
28. **B&B Predio San Fernando** — Acquapendente
   - slug: `b-b-predio-san-fernando-acquapendente`
   - indirizzo: Predio San Fernando, Str. della Falconiera, 01021 Acquapendente VT
29. **B&B Quasi Toscana** — Acquapendente
   - slug: `b-b-quasi-toscana-acquapendente`
   - indirizzo: Via della Libertà, 7, 01021 Acquapendente VT
30. **Bed And Breakfast la Grotta** — Acquapendente
   - slug: `bed-and-breakfast-la-grotta-acquapendente`
   - indirizzo: Via Roma Nuova, 111, 05013 Castel Giorgio TR
31. **Casa Girolamo** — Acquapendente
   - slug: `casa-girolamo-acquapendente`
   - indirizzo: Via Fabrizio G., 7, 01021 Acquapendente VT
32. **EcoAlbergo Monte Rufeno** — Acquapendente
   - slug: `ecoalbergo-monte-rufeno-acquapendente`
   - indirizzo: Via Roma, 116, 01021 Acquapendente VT
33. **Il Teatro alloggio turistico** — Acquapendente
   - slug: `il-teatro-alloggio-turistico-acquapendente`
   - indirizzo: Piazza della Costituente, 8 A, 01021 Acquapendente VT
34. **L'Antico Camino Alloggio Turistico** — Acquapendente
   - slug: `l-antico-camino-alloggio-turistico-acquapendente`
   - indirizzo: Via Corgnolo, 36, 01021 Acquapendente VT
35. **La cascina della grotta di tufo** — Acquapendente
   - slug: `la-cascina-della-grotta-di-tufo-acquapendente`
   - indirizzo: Localita Pratolungo, 4B, 58010 Pratolungo GR