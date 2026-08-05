# Blocco 113/500 — 35 strutture senza descrizione IT

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

1. **Albergo Sole** — Angolo Terme
   - slug: `albergo-sole-angolo-terme`
   - indirizzo: Via Silvio Pellico, 10, 24020 Bratto BG
2. **Albergo Sorriso** — Angolo Terme
   - slug: `albergo-sorriso-angolo-terme`
   - indirizzo: Via Roccole, 1/3, 25041 Darfo Boario Terme BS
3. **Casa Amalia B&B** — Angolo Terme
   - slug: `casa-amalia-b-b-angolo-terme`
   - indirizzo: Via Roma, 8, 25047 Darfo Boario Terme BS
4. **Hotel Brescia** — Angolo Terme
   - slug: `hotel-brescia-angolo-terme`
   - indirizzo: Via Giuseppe Zanardelli, 6, 25047 Darfo Boario Terme BS
5. **Hotel Diana** — Angolo Terme
   - slug: `hotel-diana-angolo-terme`
   - indirizzo: V. Manifattura Vittorio Olcese, 12, 25047 Darfo Boario Terme BS
6. **Hotel Franini** — Angolo Terme
   - slug: `hotel-franini-angolo-terme`
   - indirizzo: Via Nazionale, 242, 24062 Costa Volpino BG
7. **Hotel PIzzeria Dovina** — Angolo Terme
   - slug: `hotel-pizzeria-dovina-angolo-terme`
   - indirizzo: Via Regina Elena, 6, 25040 Angolo Terme BS
8. **Hotel San Marco BB Boario Terme** — Angolo Terme
   - slug: `hotel-san-marco-bb-boario-terme-angolo-terme`
   - indirizzo: Via Don Guido Turla, 4, 25041 Boario Terme BS
9. **Il rifugio del Risol** — Angolo Terme
   - slug: `il-rifugio-del-risol-angolo-terme`
   - indirizzo: Via Foppi, 24020 Castione della Presolana BG
10. **Ostello Angolo Verde** — Angolo Terme
   - slug: `ostello-angolo-verde-angolo-terme`
   - indirizzo: Via Bregno, 1, 25040 Angolo Terme BS
11. **Osteria Carlì - Pisogne** — Angolo Terme
   - slug: `osteria-carli-pisogne-angolo-terme`
   - indirizzo: Via Don Andrea Boldini, 20/A, 25055 Fraine BS
12. **Rizzi Aquacharme Hotel & SPA** — Angolo Terme
   - slug: `rizzi-aquacharme-hotel-spa-angolo-terme`
   - indirizzo: Viale Giosuè Carducci, 11, 25047 Darfo Boario Terme BS
13. **B&B Al Castello di Lettere** — Angri
   - slug: `b-b-al-castello-di-lettere-angri`
   - indirizzo: Via Casa Sabatino, 25, 80050 Lettere NA
14. **B&B Del Corso Scafati** — Angri
   - slug: `b-b-del-corso-scafati-angri`
   - indirizzo: Cortile Rioles, n° 5, 84018 Scafati SA
15. **B&b Le Maioliche** — Angri
   - slug: `b-b-le-maioliche-angri`
   - indirizzo: Via Nazionale, 110, 84016 Sant'Egidio del Monte Albino SA
16. **B&B Rispoli** — Angri
   - slug: `b-b-rispoli-angri`
   - indirizzo: Via Satriano, 12, 84012 Angri SA
17. **Bed & Breakfast Vesuvio** — Angri
   - slug: `bed-breakfast-vesuvio-angri`
   - indirizzo: Via Della Resistenza, 99, 84018 Scafati SA
18. **Casa Anselmo Guest House (cinIT065088C2WJGMK8T6)** — Angri
   - slug: `casa-anselmo-guest-house-cinit065088c2wjgmk8t6-angri`
   - indirizzo: Via Ferrante, 13, 84016 Pagani SA
19. **COAST TO COAST ROOMS And POOL** — Angri
   - slug: `coast-to-coast-rooms-and-pool-angri`
   - indirizzo: Via Dante Alighieri, 28, 84010 Sant'Egidio del Monte Albino SA
20. **Corte San Lorenzo** — Angri
   - slug: `corte-san-lorenzo-angri`
   - indirizzo: Via Ugo Foscolo, 28, 84010 Sant'Egidio del Monte Albino SA
21. **Domus Monasteire - B&B Guesthouse** — Angri
   - slug: `domus-monasteire-b-b-guesthouse-angri`
   - indirizzo: V.Arcivescovo Carmine Cesarano, 14, 84016 Pagani SA
22. **Grand Hotel La Sonrisa** — Angri
   - slug: `grand-hotel-la-sonrisa-angri`
   - indirizzo: Via Stabia, 500, 80057 Sant'Antonio Abate NA
23. **Hotel Due Pini Conte S.R.L.** — Angri
   - slug: `hotel-due-pini-conte-s-r-l-angri`
   - indirizzo: Via del Monte, 40, 84012 Angri SA
24. **Hotel Scalinatella** — Angri
   - slug: `hotel-scalinatella-angri`
   - indirizzo: Via di Mezzo Ovest, 14, 84012 Angri SA
25. **Hotel Villa Clementina** — Angri
   - slug: `hotel-villa-clementina-angri`
   - indirizzo: Vicinale De Martino, 10, 84018 Scafati SA
26. **La Perla Luxury Rooms B&B** — Angri
   - slug: `la-perla-luxury-rooms-b-b-angri`
   - indirizzo: Traversa Cinque, 183, 84012 Angri SA
27. **Motel Luna Rossa** — Angri
   - slug: `motel-luna-rossa-angri`
   - indirizzo: Via Bosco, 6, 84010 Sant'Egidio del Monte Albino SA
28. **My Dream house Angri** — Angri
   - slug: `my-dream-house-angri-angri`
   - indirizzo: Via Nazionale, 40, 84012 Angri SA
29. **Palazzo Della Mura Hotel** — Angri
   - slug: `palazzo-della-mura-hotel-angri`
   - indirizzo: Via Brigadiere d'Anna, 33, 84012 Angri SA
30. **Residenza Carlucci** — Angri
   - slug: `residenza-carlucci-angri`
   - indirizzo: Via Badia, 101, 84012 Angri SA
31. **Villa Ante b&b** — Angri
   - slug: `villa-ante-b-b-angri`
   - indirizzo: Via Campia, 52, 84012 Angri SA
32. **Affittacamere Maison Manu** — Angrogna
   - slug: `affittacamere-maison-manu-angrogna`
   - indirizzo: Piazza Guglielmo Marconi, 3, 10063 Perosa Argentina TO
33. **B&B Blu Lavanda** — Angrogna
   - slug: `b-b-blu-lavanda-angrogna`
   - indirizzo: V. T. Fuhrmann, 74, 10062 Luserna San Giovanni TO
34. **B&B Il Girasole** — Angrogna
   - slug: `b-b-il-girasole-angrogna`
   - indirizzo: Borgata Moliera, 3, 10060 Perrero TO
35. **B&B La Draio** — Angrogna
   - slug: `b-b-la-draio-angrogna`
   - indirizzo: via Tagliaretto,13, 10066 Torre Pellice TO