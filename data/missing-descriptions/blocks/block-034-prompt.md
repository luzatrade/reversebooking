# Blocco 34/500 — 35 strutture senza descrizione IT

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

1. **B & Beach** — Agropoli
   - slug: `b-beach-agropoli`
   - indirizzo: Via S. Marco, 204, 84043 Agropoli SA
2. **B&B Casa Vacanze Il Girasole** — Agropoli
   - slug: `b-b-casa-vacanze-il-girasole-agropoli`
   - indirizzo: Via Vincenzo Gregori Agropoli, 55, 84043 Agropoli SA
3. **B&B Costa Blu** — Agropoli
   - slug: `b-b-costa-blu-agropoli`
   - indirizzo: Via Palmiro Togliatti, 33, 84043 Agropoli SA
4. **B&B La Roccia** — Agropoli
   - slug: `b-b-la-roccia-agropoli`
   - indirizzo: Via Antonio De Curtis snc, 84043 Agropoli SA
5. **B&B Stella Marina Agropoli** — Agropoli
   - slug: `b-b-stella-marina-agropoli-agropoli`
   - indirizzo: Via Difesa, 96, 84043 Agropoli SA
6. **B&B Una terrazza sul mare** — Agropoli
   - slug: `b-b-una-terrazza-sul-mare-agropoli`
   - indirizzo: Pirandello Luigi, Via Pirandello, 84043 Agropoli SA
7. **B&B Zeropensieri** — Agropoli
   - slug: `b-b-zeropensieri-agropoli`
   - indirizzo: Viale Risorgimento, 83, 84043 Agropoli SA
8. **Cilento d'aMare Bed and Breakfast** — Agropoli
   - slug: `cilento-d-amare-bed-and-breakfast-agropoli`
   - indirizzo: Via Vicinale S. Marco, 31, 84043 Agropoli SA
9. **Hotel Residence la Darsena** — Agropoli
   - slug: `hotel-residence-la-darsena-agropoli`
   - indirizzo: Lungomare San Marco, 84043 Agropoli SA
10. **I DELFINI | Bed and Breakfast** — Agropoli
   - slug: `i-delfini-bed-and-breakfast-agropoli`
   - indirizzo: Via Toscanini, 9, 84043 Agropoli SA
11. **Il Rifugio d'aMare** — Agropoli
   - slug: `il-rifugio-d-amare-agropoli`
   - indirizzo: Via Moio, 42, 84043 Agropoli SA
12. **Le Terrazze** — Agropoli
   - slug: `le-terrazze-agropoli`
   - indirizzo: Via A. de Curtis, 84043 Agropoli SA
13. **M & M** — Agropoli
   - slug: `m-m-agropoli`
   - indirizzo: Via dei Mille, 23, 84043 Agropoli SA
14. **Marlè Rooms** — Agropoli
   - slug: `marle-rooms-agropoli`
   - indirizzo: Via Severino Capo, 13, 84043 Agropoli SA
15. **Noi 2 nel Cilento** — Agropoli
   - slug: `noi-2-nel-cilento-agropoli`
   - indirizzo: Via Taverne, 51, 84043 Agropoli SA
16. **Quasi In Porto** — Agropoli
   - slug: `quasi-in-porto-agropoli`
   - indirizzo: Via Giacomo Puccini, 18, 84043 Agropoli SA
17. **Villa Lery - Azzurra Home** — Agropoli
   - slug: `villa-lery-azzurra-home-agropoli`
   - indirizzo: Via Giuseppe Mazzini, 51, 84043 Agropoli SA
18. **VILLA MARIS** — Agropoli
   - slug: `villa-maris-agropoli`
   - indirizzo: Via Garofalo, 15, 84043 Agropoli SA
19. **Agriturismo L'Antigo Granaro** — Agugliano
   - slug: `agriturismo-l-antigo-granaro-agugliano`
   - indirizzo: Contrada San Luigi, 108, 60131 Gallignano AN
20. **Albergo Ristorante Al Belvedere** — Agugliano
   - slug: `albergo-ristorante-al-belvedere-agugliano`
   - indirizzo: Piazza Vittorio Emanuele II, 3, 60020 Agugliano AN
21. **B&B "Sole e Luna"- Parcheggio recintato - A14 Ancona Nord** — Agugliano
   - slug: `b-b-sole-e-luna-parcheggio-recintato-a14-ancona-agugliano`
   - indirizzo: Contrada Colonne, 12, 60020 Agugliano AN
22. **B&B Il Duca** — Agugliano
   - slug: `b-b-il-duca-agugliano`
   - indirizzo: G9CQ+M3, VIa Acquasalata, 13, 60020 Polverigi AN
23. **B&B Sotto la Luna** — Agugliano
   - slug: `b-b-sotto-la-luna-agugliano`
   - indirizzo: Contrada Frasca, 5a, 60020 Agugliano AN
24. **B&B Timeout- Polverigi - Bed and Breakfast CIN: IT042038 B459 SOVWOD** — Agugliano
   - slug: `b-b-timeout-polverigi-bed-and-breakfast-cin-it04-agugliano`
   - indirizzo: Via della Baviera, 21, 60020 Polverigi AN
25. **B&B Villa LeMarche** — Agugliano
   - slug: `b-b-villa-lemarche-agugliano`
   - indirizzo: Via Mulino di S. Filippo, 22, 60020 Polverigi AN
26. **CASA VACANZE ANTICO CASALE ANCONA** — Agugliano
   - slug: `casa-vacanze-antico-casale-ancona-agugliano`
   - indirizzo: Strada di Paglialonga, 3, 60020 Agugliano AN
27. **Country House La Cilicchia** — Agugliano
   - slug: `country-house-la-cilicchia-agugliano`
   - indirizzo: Contrada Colonne, 8, 60020 Agugliano AN
28. **La Casa del Sole e della Luna** — Agugliano
   - slug: `la-casa-del-sole-e-della-luna-agugliano`
   - indirizzo: Str. Castellano Montacuto, 43a, 60129 Ancona AN
29. **La Casina b&b** — Agugliano
   - slug: `la-casina-b-b-agugliano`
   - indirizzo: Via di Pontelungo, 60, 60131 Ancona AN
30. **LA GRADINA B&B** — Agugliano
   - slug: `la-gradina-b-b-agugliano`
   - indirizzo: Via Chiusa, 20, 60027 Aspio Terme AN
31. **La vite sul tetto** — Agugliano
   - slug: `la-vite-sul-tetto-agugliano`
   - indirizzo: Borgo Ruffini, 60020 Agugliano AN
32. **Agriturismo Il Castagneto - Appartamenti** — Agugliaro
   - slug: `agriturismo-il-castagneto-appartamenti-agugliaro`
   - indirizzo: Via Bagnara Alta, 1537, 35030 Vo' PD
33. **Agriturismo Podere Villa Alessi Di Giacomin Ivano & C. Sas** — Agugliaro
   - slug: `agriturismo-podere-villa-alessi-di-giacomin-ivan-agugliaro`
   - indirizzo: Via S. Pietro, 6, 35030 Faedo PD
34. **Agriturismo San Matteo - Lozzo Atestino** — Agugliaro
   - slug: `agriturismo-san-matteo-lozzo-atestino-agugliaro`
   - indirizzo: Via Roneghetto, 38, 35034 Lozzo Atestino PD
35. **Azienda Agrituristica Ai Gradoni** — Agugliaro
   - slug: `azienda-agrituristica-ai-gradoni-agugliaro`
   - indirizzo: Via Castelnuovo, 19, 35037 Castelnuovo PD