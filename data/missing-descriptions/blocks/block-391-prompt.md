# Blocco 391/500 — 35 strutture senza descrizione IT

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

1. **Villa Medusa - Camper Sicilia** — Campobello di Mazara
   - slug: `villa-medusa-camper-sicilia-campobello-di-mazara`
   - indirizzo: Bosco Vecchio, 1/2, 91021 Campobello di Mazara TP
2. **Wind Resort** — Campobello di Mazara
   - slug: `wind-resort-campobello-di-mazara`
   - indirizzo: Contrada Puzziteddu, 91021 Campobello di Mazara TP
3. **Zahira Resort** — Campobello di Mazara
   - slug: `zahira-resort-campobello-di-mazara`
   - indirizzo: Via Tonnara Fontana, 180, 91021 Campobello di Mazara TP
4. **Hotel Lo Sciatore** — Campochiaro
   - slug: `hotel-lo-sciatore-campochiaro`
   - indirizzo: KM 388, KM 388,71, 86027 Campitello Matese CB
5. **Hotel Miletto & Spa** — Campochiaro
   - slug: `hotel-miletto-spa-campochiaro`
   - indirizzo: Via, 86027 Campitello Matese CB
6. **Il Palazzetto dei Briganti** — Campochiaro
   - slug: `il-palazzetto-dei-briganti-campochiaro`
   - indirizzo: Via Roma, 10, 86014 Guardiaregia CB
7. **Locanda Arcari** — Campochiaro
   - slug: `locanda-arcari-campochiaro`
   - indirizzo: Via Colle Croce, 1, 86014 Guardiaregia CB
8. **MoMa Roof Garden** — Campochiaro
   - slug: `moma-roof-garden-campochiaro`
   - indirizzo: Località Rio Freddo, 2, 86020 San Polo Matese CB
9. **VittoNico** — Campochiaro
   - slug: `vittonico-campochiaro`
   - indirizzo: Via dei Mugnai, 2, 82026 Morcone BN
10. **Why Not B&B** — Campochiaro
   - slug: `why-not-b-b-campochiaro`
   - indirizzo: Contrada Fonteiaova 38bis, 86020 San Polo Matese CB
11. **Agriturismo Villa Selvatico** — Campodarsego
   - slug: `agriturismo-villa-selvatico-campodarsego`
   - indirizzo: Via Pietro Selvatico, 1, 35010 Vigonza PD
12. **Casa di Accoglienza Lucia Valentini Terrani** — Campodarsego
   - slug: `casa-di-accoglienza-lucia-valentini-terrani-campodarsego`
   - indirizzo: Via Giusto de' Menabuoi, 64, 35132 Padova PD
13. **Il Viaggiatore B&B** — Campodarsego
   - slug: `il-viaggiatore-b-b-campodarsego`
   - indirizzo: Via Anconetta, 56/A, 35010 San Giorgio delle Pertiche PD
14. **Rosalimone B&B** — Campodarsego
   - slug: `rosalimone-b-b-campodarsego`
   - indirizzo: Via P. Massimiliano Kolbe, 38, 35011 Campodarsego PD
15. **Villa Da Ponte** — Campodarsego
   - slug: `villa-da-ponte-campodarsego`
   - indirizzo: Via Roma, 72, 35010 Cadoneghe PD
16. **Agritur Agrihouse - Val di Non, Trentino** — Campodenno
   - slug: `agritur-agrihouse-val-di-non-trentino-campodenno`
   - indirizzo: Vicolo della Rotonda, 3, 38010 Campodenno TN
17. **Agritur Casamela** — Campodenno
   - slug: `agritur-casamela-campodenno`
   - indirizzo: Via alle Tovare, 16, 38012 Taio TN
18. **Agritur La Pieve** — Campodenno
   - slug: `agritur-la-pieve-campodenno`
   - indirizzo: Via di Sant'Eusebio, 4, 38012 Torra TN
19. **Agritur Piccolo Fiore** — Campodenno
   - slug: `agritur-piccolo-fiore-campodenno`
   - indirizzo: Via S. Marcello, 40, 38012 Dardine TN
20. **Albergo Al Borghetto** — Campodenno
   - slug: `albergo-al-borghetto-campodenno`
   - indirizzo: Via Emanuele de Varda, 10, 38017 Mezzolombardo TN
21. **Albergo Nardelli** — Campodenno
   - slug: `albergo-nardelli-campodenno`
   - indirizzo: Via Lovernatico, 40, 38010 Sporminore TN
22. **Albergo Ristorante Scoiattolo** — Campodenno
   - slug: `albergo-ristorante-scoiattolo-campodenno`
   - indirizzo: 38010 Pineta TN, Italia
23. **ALPS LOVER** — Campodenno
   - slug: `alps-lover-campodenno`
   - indirizzo: Via Luc, 6, 38010 Lover TN
24. **B&b Al Trifoglio** — Campodenno
   - slug: `b-b-al-trifoglio-campodenno`
   - indirizzo: Via Castel Belasi, 8, 38010 Campodenno TN
25. **B&B Fai le Coccole** — Campodenno
   - slug: `b-b-fai-le-coccole-campodenno`
   - indirizzo: Via Al Belvedere, 49, 38010 Fai della Paganella TN
26. **B&B La casa del Sole Campodenno** — Campodenno
   - slug: `b-b-la-casa-del-sole-campodenno-campodenno`
   - indirizzo: Via Soì, 12, 38010 Campodenno TN
27. **B&B Pra da Lares** — Campodenno
   - slug: `b-b-pra-da-lares-campodenno`
   - indirizzo: sp, 124, 38010 Ton TN
28. **B&B Vivi l'Attimo** — Campodenno
   - slug: `b-b-vivi-l-attimo-campodenno`
   - indirizzo: Via Dossi, 6, 38010 Quetta TN
29. **Chalet Tovel - Mountain Lake** — Campodenno
   - slug: `chalet-tovel-mountain-lake-campodenno`
   - indirizzo: Località Lago di, 38019 Tovel TN
30. **Hotel | Ristorante Pizzeria "Dal Pez"** — Campodenno
   - slug: `hotel-ristorante-pizzeria-dal-pez-campodenno`
   - indirizzo: Via Alcide De Gasperi, 4, 38010 Denno TN
31. **Hotel Garni La Vigna - Adult Friendly** — Campodenno
   - slug: `hotel-garni-la-vigna-adult-friendly-campodenno`
   - indirizzo: Via G. Postal, 49a, 38098 San Michele all'Adige TN
32. **Hotel Rifugio Sores** — Campodenno
   - slug: `hotel-rifugio-sores-campodenno`
   - indirizzo: Via Predaia, 1, 38012 Tres TN
33. **Hotel Stella Alpina** — Campodenno
   - slug: `hotel-stella-alpina-campodenno`
   - indirizzo: Via Guglielmo Marconi, 16, 38010 Fai della Paganella TN
34. **Affittacamere le Benedettine** — Campodimele
   - slug: `affittacamere-le-benedettine-campodimele`
   - indirizzo: Via Alessandro Manzoni, 53, 04022 Fondi LT
35. **B&B CITY** — Campodimele
   - slug: `b-b-city-campodimele`
   - indirizzo: Via Roma, 78, 04022 Fondi LT