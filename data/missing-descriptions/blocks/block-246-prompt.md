# Blocco 246/500 — 35 strutture senza descrizione IT

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

1. **Bed and Rider "la tana del Biker"** — Bellano
   - slug: `bed-and-rider-la-tana-del-biker-bellano`
   - indirizzo: Via Taceno, 6, 23822 Bellano LC
2. **Hotel Il Portichetto** — Bellano
   - slug: `hotel-il-portichetto-bellano`
   - indirizzo: Via del Castellano, 9, 23828 Vezio LC
3. **Hotel Lauro** — Bellano
   - slug: `hotel-lauro-bellano`
   - indirizzo: Contrada Larga, 12, 22010 Santa Maria Rezzonico CO
4. **Hotel Restaurant Meridiana** — Bellano
   - slug: `hotel-restaurant-meridiana-bellano`
   - indirizzo: Via Carlo Alberto, 19, 23822 Bellano LC
5. **Hotel Sole** — Bellano
   - slug: `hotel-sole-bellano`
   - indirizzo: Via Statale, 263, 22010 San Siro CO
6. **Il Pontile Historic Center with AC by villavistalago Bellano** — Bellano
   - slug: `il-pontile-historic-center-with-ac-by-villavista-bellano`
   - indirizzo: Via Vittorio Veneto, 2, 23822 Bellano LC
7. **La Casa Sul Sasso B&B and apartments** — Bellano
   - slug: `la-casa-sul-sasso-b-b-and-apartments-bellano`
   - indirizzo: Via Madonnina Nr3, Via Castello, 3, 23824 Dervio LC
8. **La locanda del viandante** — Bellano
   - slug: `la-locanda-del-viandante-bellano`
   - indirizzo: Via Taceno, 11, 23822 Bellano LC
9. **Valle dei Mulini Rent Room&Apartments** — Bellano
   - slug: `valle-dei-mulini-rent-room-apartments-bellano`
   - indirizzo: via Colico, 28, 23822 Bellano LC
10. **Villa Anita** — Bellano
   - slug: `villa-anita-bellano`
   - indirizzo: Strada Nuova per Oro, 5-39, 23822 Bellano LC
11. **Villa Marina** — Bellano
   - slug: `villa-marina-bellano`
   - indirizzo: SP72, 5, 23822 Bellano LC
12. **Villa Rêverie - Boutique Hotel** — Bellano
   - slug: `villa-reverie-boutique-hotel-bellano`
   - indirizzo: Via Lecco, 12, 23822 Bellano LC
13. **Villa Stefy B&B** — Bellano
   - slug: `villa-stefy-b-b-bellano`
   - indirizzo: Via Valvarrone, 28, 23824 Dervio LC
14. **B&B Al Vicoletto** — Bellante
   - slug: `b-b-al-vicoletto-bellante`
   - indirizzo: Via Primo Riccitelli, 64020 Bellante TE
15. **B&B La Villetta** — Bellante
   - slug: `b-b-la-villetta-bellante`
   - indirizzo: Via Colle Izzano, 95A, 64020 Bellante TE
16. **Breaking Business Hotel** — Bellante
   - slug: `breaking-business-hotel-bellante`
   - indirizzo: Via Italia, 64023 Mosciano Sant'Angelo TE
17. **Casale dei Ciliegi** — Bellante
   - slug: `casale-dei-ciliegi-bellante`
   - indirizzo: Via Case Sparse, 64012 Floriano TE
18. **Castello di Petecciano Ristorante B&B - Eventi** — Bellante
   - slug: `castello-di-petecciano-ristorante-b-b-eventi-bellante`
   - indirizzo: Via Santa Maria Assunta, 45, 64023 Mosciano Sant'Angelo TE
19. **Cataleya Resort & Spa** — Bellante
   - slug: `cataleya-resort-spa-bellante`
   - indirizzo: Via Istria, 2/A, 64024 Notaresco TE
20. **Dimora Morello** — Bellante
   - slug: `dimora-morello-bellante`
   - indirizzo: Via della Stella, 21, 64027 Poggio Morello TE
21. **Il Casolare** — Bellante
   - slug: `il-casolare-bellante`
   - indirizzo: Via Fonte a Collina, 421, 64012 Floriano TE
22. **Il Parco Sul Mare Resort & SPA** — Bellante
   - slug: `il-parco-sul-mare-resort-spa-bellante`
   - indirizzo: Via Vascello, 17A, 64018 Tortoreto TE
23. **La Residenza di Campagna** — Bellante
   - slug: `la-residenza-di-campagna-bellante`
   - indirizzo: Contrada Chiareto 35, 64020 Bellante TE
24. **Villa Floriana** — Bellante
   - slug: `villa-floriana-bellante`
   - indirizzo: Via dell'Acquedotto, 2, 64018 Tortoreto TE
25. **Villa Monaco** — Bellante
   - slug: `villa-monaco-bellante`
   - indirizzo: Via S. Pertini, 34, 64023 Mosciano Sant'Angelo TE
26. **Villa Natura affittacamere & glampingdome** — Bellante
   - slug: `villa-natura-affittacamere-glampingdome-bellante`
   - indirizzo: via G. Falcone, 5, 64013 Corropoli TE
27. **Albergo La Conchiglia** — Bellaria-Igea Marina
   - slug: `albergo-la-conchiglia-bellaria-igea-marina`
   - indirizzo: Via Dalmazia, 12, 47814 Bellaria-Igea Marina RN
28. **B&B Hotel Villa Nora** — Bellaria-Igea Marina
   - slug: `b-b-hotel-villa-nora-bellaria-igea-marina`
   - indirizzo: Via Italia, 25, 47814 Bellaria-Igea Marina RN
29. **Hotel Bellaria** — Bellaria-Igea Marina
   - slug: `hotel-bellaria-bellaria-igea-marina`
   - indirizzo: Via Gradisca, 12, 47814 Bellaria-Igea Marina RN
30. **Hotel Capanni** — Bellaria-Igea Marina
   - slug: `hotel-capanni-bellaria-igea-marina`
   - indirizzo: Via Italia, 20, 47814 Bellaria-Igea Marina RN
31. **Hotel Gardenia Igea Marina** — Bellaria-Igea Marina
   - slug: `hotel-gardenia-igea-marina-bellaria-igea-marina`
   - indirizzo: Via Alfonso Pinzon, 128, 47814 Bellaria-Igea Marina RN
32. **Hotel Gradara** — Bellaria-Igea Marina
   - slug: `hotel-gradara-bellaria-igea-marina`
   - indirizzo: Via Italia, 31, 47814 Bellaria-Igea Marina RN
33. **Hotel Grado** — Bellaria-Igea Marina
   - slug: `hotel-grado-bellaria-igea-marina`
   - indirizzo: Via Quinto Pittore, 30, 47814 Bellaria-Igea Marina RN
34. **Hotel Italia** — Bellaria-Igea Marina
   - slug: `hotel-italia-bellaria-igea-marina`
   - indirizzo: Via Alfonso Pinzon, 214, 47814 Bellaria-Igea Marina RN
35. **Hotel Mexico** — Bellaria-Igea Marina
   - slug: `hotel-mexico-bellaria-igea-marina`
   - indirizzo: Via dei Pioppi, 15, 47814 Bellaria-Igea Marina RN