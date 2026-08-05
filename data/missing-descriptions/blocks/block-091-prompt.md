# Blocco 91/500 — 35 strutture senza descrizione IT

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

1. **Rifugio Alpenrose** — Alto Sermenza
   - slug: `rifugio-alpenrose-alto-sermenza`
   - indirizzo: Località Tetto Minocco, 12, 13026 Carcoforo VC
2. **Ristorante Dei Pescatori** — Alto Sermenza
   - slug: `ristorante-dei-pescatori-alto-sermenza`
   - indirizzo: Via Ponte, 6, 13020 Piode VC
3. **"A casa di Simona"** — Altofonte
   - slug: `a-casa-di-simona-altofonte`
   - indirizzo: Circonvallazione Di Monreale, 30, 90131 Palermo PA
4. **ABT L'AURA** — Altofonte
   - slug: `abt-l-aura-altofonte`
   - indirizzo: Piazza S. Francesco Saverio, 4, 90134 Palermo PA
5. **Affittacamere Vivere la Ciambra** — Altofonte
   - slug: `affittacamere-vivere-la-ciambra-altofonte`
   - indirizzo: Via G. Millunzi, 4, 90046 Monreale PA
6. **Agriturismo Argomesi** — Altofonte
   - slug: `agriturismo-argomesi-altofonte`
   - indirizzo: Contrada Dingoli, 90037 Piana degli Albanesi PA
7. **Al Balhara Resort** — Altofonte
   - slug: `al-balhara-resort-altofonte`
   - indirizzo: Via Aquino, 126, 90046 Monreale PA
8. **B&B A Casa di Simona** — Altofonte
   - slug: `b-b-a-casa-di-simona-altofonte`
   - indirizzo: Via Fecatello Pantuso, 6, 90046 Monreale PA
9. **B&B al Giardino** — Altofonte
   - slug: `b-b-al-giardino-altofonte`
   - indirizzo: Via Frassinelli e Mulini, 75, 90046 Monreale PA
10. **B&B Casa Lilla** — Altofonte
   - slug: `b-b-casa-lilla-altofonte`
   - indirizzo: Via A. Veneziano, 112, 90046 Monreale PA
11. **B&B Casa Normanna** — Altofonte
   - slug: `b-b-casa-normanna-altofonte`
   - indirizzo: Via Venero, 186, 90046 Monreale PA
12. **B&b Casa Rossa di Matri srl** — Altofonte
   - slug: `b-b-casa-rossa-di-matri-srl-altofonte`
   - indirizzo: Via Pietro Novelli, 297, 90046 Monreale PA
13. **B&B Monreale Locanda Re Ruggero** — Altofonte
   - slug: `b-b-monreale-locanda-re-ruggero-altofonte`
   - indirizzo: Via Arcivescovado, 9, 90046 Monreale PA
14. **Due Cani Luxury Rooms** — Altofonte
   - slug: `due-cani-luxury-rooms-altofonte`
   - indirizzo: Roma - Palazzo Ganci, Via Roma, 118, 90133 Palermo PA
15. **Fuddia Room & Suite** — Altofonte
   - slug: `fuddia-room-suite-altofonte`
   - indirizzo: Via Cuba, 29, 90129 Palermo PA
16. **GUEST HOUSE PIANA DEGLI ALBANESI** — Altofonte
   - slug: `guest-house-piana-degli-albanesi-altofonte`
   - indirizzo: Via Umberto I, 37, 90037 Piana degli Albanesi PA
17. **Hotel Italia** — Altofonte
   - slug: `hotel-italia-altofonte`
   - indirizzo: Via Roma, 62, 90133 Palermo PA
18. **La Cubba** — Altofonte
   - slug: `la-cubba-altofonte`
   - indirizzo: Via Cuba, 63, 90129 Palermo PA
19. **Palazzo Ducale Suites - Bed and Breakfast** — Altofonte
   - slug: `palazzo-ducale-suites-bed-and-breakfast-altofonte`
   - indirizzo: Via Duca degli Abruzzi, 8, 90046 Monreale PA
20. **Residence Hotel Gloria** — Altofonte
   - slug: `residence-hotel-gloria-altofonte`
   - indirizzo: Via Enrico Toti, 30, 90128 Palermo PA
21. **Villa Tiziana** — Altofonte
   - slug: `villa-tiziana-altofonte`
   - indirizzo: Via Ponte Parco, 17, 90046 Monreale PA
22. **B&B ANTICA BALBIA** — Altomonte
   - slug: `b-b-antica-balbia-altomonte`
   - indirizzo: Via Paladino, 10, 87042 Altomonte CS
23. **B&B del Castagneto** — Altomonte
   - slug: `b-b-del-castagneto-altomonte`
   - indirizzo: Via Don Vincenzo Balsano, 40, 87018 San Marco Argentano CS
24. **B&B del Cavaliere** — Altomonte
   - slug: `b-b-del-cavaliere-altomonte`
   - indirizzo: Via D. Camporota, 20, 87012 Castrovillari CS
25. **B&B La casa nella prateria** — Altomonte
   - slug: `b-b-la-casa-nella-prateria-altomonte`
   - indirizzo: Contrada Pantaleo, 87042 Altomonte CS
26. **B&B Palazzo Pancaro** — Altomonte
   - slug: `b-b-palazzo-pancaro-altomonte`
   - indirizzo: 87042 Altomonte CS, Italia
27. **D'Ambra** — Altomonte
   - slug: `d-ambra-altomonte`
   - indirizzo: Via Dalla Chiesa Carlo Alberto, 1, 87042 Altomonte CS
28. **Hotel Del Sole** — Altomonte
   - slug: `hotel-del-sole-altomonte`
   - indirizzo: Contrada Bianchino, 54, 87012 Castrovillari CS
29. **Hotel Ferramonti** — Altomonte
   - slug: `hotel-ferramonti-altomonte`
   - indirizzo: Contrada Ferramonti, 32, 87040 Tarsia CS
30. **Hotel Palazzo Salerno** — Altomonte
   - slug: `hotel-palazzo-salerno-altomonte`
   - indirizzo: Piazza Giuseppe Garibaldi, 3, 87017 Roggiano Gravina CS
31. **Le Mimose B&B** — Altomonte
   - slug: `le-mimose-b-b-altomonte`
   - indirizzo: Via Giovanni Verga, 9, 87019 Spezzano Albanese CS
32. **Ostelli Vento del sud** — Altomonte
   - slug: `ostelli-vento-del-sud-altomonte`
   - indirizzo: Via San Giacomo, 9, 87042 Altomonte CS
33. **Agriturismo Tenute Di Badia** — Altopascio
   - slug: `agriturismo-tenute-di-badia-altopascio`
   - indirizzo: località Fattoria 10, Badia Pozzeveri, 55011 Altopascio LU
34. **Agriturismo Villa Monica** — Altopascio
   - slug: `agriturismo-villa-monica-altopascio`
   - indirizzo: Via Romana Trav. n.1, 129, 55015 Montecarlo LU
35. **Antica Casa Dei Rassicurati** — Altopascio
   - slug: `antica-casa-dei-rassicurati-altopascio`
   - indirizzo: Via della Collegiata, 2, 55015 Montecarlo LU