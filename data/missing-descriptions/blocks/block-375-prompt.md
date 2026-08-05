# Blocco 375/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo La Casa Del Ghiro** — Calvizzano
   - slug: `agriturismo-la-casa-del-ghiro-calvizzano`
   - indirizzo: Via S. Nicola, 15, 80050 Franche NA
2. **Agriturismo La Lobra** — Calvizzano
   - slug: `agriturismo-la-lobra-calvizzano`
   - indirizzo: Via Fontanella, 17, 80061 Massa Lubrense NA
3. **Agriturismo La Montagna** — Calvizzano
   - slug: `agriturismo-la-montagna-calvizzano`
   - indirizzo: Via Rossi, 60, 80030 Scisciano NA
4. **Agriturismo Le Grotte** — Calvizzano
   - slug: `agriturismo-le-grotte-calvizzano`
   - indirizzo: Via Circumvallazione Esterna, 223, 80019 Qualiano NA
5. **Agriturismo Primaluce Sorrento** — Calvizzano
   - slug: `agriturismo-primaluce-sorrento-calvizzano`
   - indirizzo: Via Rivezzoli, 9, 80067 Sorrento NA
6. **Agriturismo Restaurant Fattoria Terranova** — Calvizzano
   - slug: `agriturismo-restaurant-fattoria-terranova-calvizzano`
   - indirizzo: Via Pontone, 10, 80061 Sant'Agata sui Due Golfi NA
7. **Agriturismo San Martino** — Calvizzano
   - slug: `agriturismo-san-martino-calvizzano`
   - indirizzo: Via Pietrarsa, 17, 80078 Pozzuoli NA
8. **Antico Casale Colli Di San Pietro** — Calvizzano
   - slug: `antico-casale-colli-di-san-pietro-calvizzano`
   - indirizzo: Via Cermenna, 47, 80063 Piano di Sorrento NA
9. **B&B La casa di Vale** — Calvizzano
   - slug: `b-b-la-casa-di-vale-calvizzano`
   - indirizzo: Corso Umberto I, 90, 80034 Marigliano NA
10. **Hotel Ristorante Donato S.R.L.** — Calvizzano
   - slug: `hotel-ristorante-donato-s-r-l-calvizzano`
   - indirizzo: Viale della Resistenza, 73, 80012 Calvizzano NA
11. **Il Giardino dell'Orco** — Calvizzano
   - slug: `il-giardino-dell-orco-calvizzano`
   - indirizzo: Via Lago Averno, Lato Sinistro, 6, 80078 Pozzuoli NA
12. **Il Giglio della Valle** — Calvizzano
   - slug: `il-giglio-della-valle-calvizzano`
   - indirizzo: Viale privato Monsignor Vito Moio, 80016 Marano di Napoli NA
13. **Il Quarto Miglio** — Calvizzano
   - slug: `il-quarto-miglio-calvizzano`
   - indirizzo: Via Cesare Pavese, 17A, 80010 Quarto NA
14. **La Colombaia** — Calvizzano
   - slug: `la-colombaia-calvizzano`
   - indirizzo: Via Grotte S. Lazzaro, 9, 81043 Capua CE
15. **Tenuta Monte Sant'Angelo** — Calvizzano
   - slug: `tenuta-monte-sant-angelo-calvizzano`
   - indirizzo: Via Ventilabro, 67, 80126 Napoli NA
16. **B&B Ca' Poggio** — Camagna Monferrato
   - slug: `b-b-ca-poggio-camagna-monferrato`
   - indirizzo: Via Ca' Poggio, 17, 15049 Vignale Monferrato AL
17. **Ca’ Magna** — Camagna Monferrato
   - slug: `ca-magna-camagna-monferrato`
   - indirizzo: Via Sotto Orti, 19, 15030 Camagna Monferrato AL
18. **Domus Amica** — Camagna Monferrato
   - slug: `domus-amica-camagna-monferrato`
   - indirizzo: Via Marconi, 101, 15037 Lu e Cuccaro Monferrato AL
19. **Hotel Ariotto Village** — Camagna Monferrato
   - slug: `hotel-ariotto-village-camagna-monferrato`
   - indirizzo: Strada Cappelletta, 3, 15030 Terruggia AL
20. **Locanda degli Ultimi** — Camagna Monferrato
   - slug: `locanda-degli-ultimi-camagna-monferrato`
   - indirizzo: Via S. Rocco, 15, 15049 San Rocco AL
21. **Villa Rocco Country House** — Camagna Monferrato
   - slug: `villa-rocco-country-house-camagna-monferrato`
   - indirizzo: Strada per Rosignano, 11, 15039 Ozzano Monferrato AL
22. **B&B La Casa Di Alice** — Camaiore
   - slug: `b-b-la-casa-di-alice-camaiore`
   - indirizzo: Via del Leccio, 49, 55041 Montemagno LU
23. **B&B Relais dell'Angelo** — Camaiore
   - slug: `b-b-relais-dell-angelo-camaiore`
   - indirizzo: Via XX Settembre, 146, 55041 Camaiore LU
24. **Bed & Breakfast Antica Fattoria La Verdina** — Camaiore
   - slug: `bed-breakfast-antica-fattoria-la-verdina-camaiore`
   - indirizzo: Via della Verdina, 36, 55041 Camaiore LU
25. **Bed & Breakfast da Ferro** — Camaiore
   - slug: `bed-breakfast-da-ferro-camaiore`
   - indirizzo: V. Sarzanese Nord, 5310, 55040 Piano di Conca LU
26. **Casa del Sole | Bed & Breakfast** — Camaiore
   - slug: `casa-del-sole-bed-breakfast-camaiore`
   - indirizzo: Via della Verdina, 100, 55041 Camaiore LU
27. **Casa Nostra Camaiore** — Camaiore
   - slug: `casa-nostra-camaiore-camaiore`
   - indirizzo: Via Fonda, 93, 55041 Camaiore LU
28. **Hotel Biagi** — Camaiore
   - slug: `hotel-biagi-camaiore`
   - indirizzo: Viale Ermenegildo Pistelli, 12, 55041 Lido di Camaiore LU
29. **Hotel Eros** — Camaiore
   - slug: `hotel-eros-camaiore`
   - indirizzo: Via del Fortino, 50, 55041 Camaiore LU
30. **Hotel Lido Inn** — Camaiore
   - slug: `hotel-lido-inn-camaiore`
   - indirizzo: Via Adolfo Massei, 4, 55041 Lido di Camaiore LU
31. **Hotel Liù** — Camaiore
   - slug: `hotel-liu-camaiore`
   - indirizzo: Via Italica, 48, 55041 Lido di Camaiore LU
32. **Hotel Piccadilly** — Camaiore
   - slug: `hotel-piccadilly-camaiore`
   - indirizzo: Viale Ermenegildo Pistelli, 101, 55041 Lido di Camaiore LU
33. **Hotel Regina** — Camaiore
   - slug: `hotel-regina-camaiore`
   - indirizzo: Via G. Papini, 30, 55043 Lido di Camaiore LU
34. **La Stagione dell'Arte** — Camaiore
   - slug: `la-stagione-dell-arte-camaiore`
   - indirizzo: Via Vittorio Emanuele, 185, 55041 Camaiore LU
35. **La Stagione dell'Arte B&B LGBTQ+ Friendly** — Camaiore
   - slug: `la-stagione-dell-arte-b-b-lgbtq-friendly-camaiore`
   - indirizzo: Via Sotto la Chiesa, 227, 55040 Stiava LU