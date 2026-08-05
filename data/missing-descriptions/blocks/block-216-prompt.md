# Blocco 216/500 — 35 strutture senza descrizione IT

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

1. **Hotel Noce** — Barbariga
   - slug: `hotel-noce-barbariga`
   - indirizzo: Via dei Gelsi, 5, 25125 Brescia BS
2. **LA HOME** — Barbariga
   - slug: `la-home-barbariga`
   - indirizzo: Via Dante Alighieri, 43, 25080 Moniga del Garda BS
3. **Residence Barbara** — Barbariga
   - slug: `residence-barbara-barbariga`
   - indirizzo: Via dei Riali, 14, 25080 Moniga del Garda BS
4. **Villa Valeria** — Barbariga
   - slug: `villa-valeria-barbariga`
   - indirizzo: Via Massimo d'Azeglio, 16, 25128 Brescia BS
5. **Due Lanterne** — Barbata
   - slug: `due-lanterne-barbata`
   - indirizzo: Viale della Vittoria, 13, 24054 Calcio BG
6. **Hotel La Rocca Di Pisoni & C. (S.N.C.)** — Barbata
   - slug: `hotel-la-rocca-di-pisoni-c-s-n-c-barbata`
   - indirizzo: Via del Commercio, 24, 24058 Romano di Lombardia BG
7. **Hotel Regina 3.0** — Barbata
   - slug: `hotel-regina-3-0-barbata`
   - indirizzo: Via Provinciale, 35, 24058 Fara Olivana con Sola BG
8. **Hotel Ristorante Arpini** — Barbata
   - slug: `hotel-ristorante-arpini-barbata`
   - indirizzo: Via Roma, 48, 26010 Casale Cremasco CR
9. **Hotel Ristorante Pizzeria Ponte Cherio** — Barbata
   - slug: `hotel-ristorante-pizzeria-ponte-cherio-barbata`
   - indirizzo: Viale Papa Giovanni XXIII, 183, 24050 Palosco BG
10. **Agriturismo Corzano in Toscana** — Barberino di Mugello
   - slug: `agriturismo-corzano-in-toscana-barberino-di-mugello`
   - indirizzo: Via Bolognese, 26C, 50031 Barberino di Mugello FI
11. **Agriturismo Il Castelluccio Country Resort - Restaurant & SPA** — Barberino di Mugello
   - slug: `agriturismo-il-castelluccio-country-resort-resta-barberino-di-mugello`
   - indirizzo: Via Ariano, 19, 50031 Barberino di Mugello FI
12. **Agriturismo La Chiusuraccia** — Barberino di Mugello
   - slug: `agriturismo-la-chiusuraccia-barberino-di-mugello`
   - indirizzo: Via Croci, 3, 50031 Galliano FI
13. **Agriturismo Poggio agli Ulivi** — Barberino di Mugello
   - slug: `agriturismo-poggio-agli-ulivi-barberino-di-mugello`
   - indirizzo: Via Camoggiano, 2, 50031 Barberino di Mugello FI
14. **Albergo Mugello - Hotel Barberino** — Barberino di Mugello
   - slug: `albergo-mugello-hotel-barberino-barberino-di-mugello`
   - indirizzo: Via del Lago, 17, 50031 Barberino di Mugello FI
15. **B&B Colle Vignoni** — Barberino di Mugello
   - slug: `b-b-colle-vignoni-barberino-di-mugello`
   - indirizzo: Via dei Vignoni, 50031 Barberino di Mugello FI
16. **Camping Village Mugello Verde** — Barberino di Mugello
   - slug: `camping-village-mugello-verde-barberino-di-mugello`
   - indirizzo: Via Massorondinaio, 39, 50038 Scarperia e San Piero FI
17. **Hotel il Cavallo** — Barberino di Mugello
   - slug: `hotel-il-cavallo-barberino-di-mugello`
   - indirizzo: Viale della Repubblica, 7, 50031 Barberino di Mugello FI
18. **Il Casale di Santamettole** — Barberino di Mugello
   - slug: `il-casale-di-santamettole-barberino-di-mugello`
   - indirizzo: Via di Castello, 9, 50031 Barberino di Mugello FI
19. **Il Marrondindo Bed & Breakfast** — Barberino di Mugello
   - slug: `il-marrondindo-bed-breakfast-barberino-di-mugello`
   - indirizzo: Via Sant'Agata, 35b, 50031 Galliano FI
20. **Il Paiolo** — Barberino di Mugello
   - slug: `il-paiolo-barberino-di-mugello`
   - indirizzo: Via Cornocchio, 1, 50031 Barberino di Mugello FI
21. **Il Vignolino Home Restaurant - Bed & Breakfast** — Barberino di Mugello
   - slug: `il-vignolino-home-restaurant-bed-breakfast-barberino-di-mugello`
   - indirizzo: Via di Castello, 13, 50031 Barberino di Mugello FI
22. **Inn Hotel** — Barberino di Mugello
   - slug: `inn-hotel-barberino-di-mugello`
   - indirizzo: Via Enrico Fermi, 4, 50031 Barberino di Mugello FI
23. **La Valle de Medici** — Barberino di Mugello
   - slug: `la-valle-de-medici-barberino-di-mugello`
   - indirizzo: Via S. Gavino, 57/A, 50031 Barberino di Mugello FI
24. **Meridiana Country Hotel** — Barberino di Mugello
   - slug: `meridiana-country-hotel-barberino-di-mugello`
   - indirizzo: Via di Barberino, 253, 50041 Calenzano FI
25. **Poggio dei Medici Toscana** — Barberino di Mugello
   - slug: `poggio-dei-medici-toscana-barberino-di-mugello`
   - indirizzo: Via di S. Gavino, 27, 50038 Scarperia e San Piero FI
26. **Residence Mugello Resort** — Barberino di Mugello
   - slug: `residence-mugello-resort-barberino-di-mugello`
   - indirizzo: Via Fratelli Cervi, 16, 50038 Scarperia e San Piero FI
27. **Selvuccia Lodge** — Barberino di Mugello
   - slug: `selvuccia-lodge-barberino-di-mugello`
   - indirizzo: Località Coldaia, 9, 50037 San Piero a Sieve FI
28. **Tenuta Le Tre Virtù - Rooms & Organic Wine** — Barberino di Mugello
   - slug: `tenuta-le-tre-virtu-rooms-organic-wine-barberino-di-mugello`
   - indirizzo: Località Lucigliano, 13, 50037 Scarperia e San Piero FI
29. **Villa del lago** — Barberino di Mugello
   - slug: `villa-del-lago-barberino-di-mugello`
   - indirizzo: Via Gastone Nencini, 27, 50037 Barberino di Mugello FI
30. **Agriturismo Poggio alle Lame** — Barberino Tavarnelle
   - slug: `agriturismo-poggio-alle-lame-barberino-tavarnelle`
   - indirizzo: Str. delle Lame, 8, 50028 Tavarnelle Val di Pesa FI
31. **Al Gelso Bianco - Barberino Val d'Elsa** — Barberino Tavarnelle
   - slug: `al-gelso-bianco-barberino-val-d-elsa-barberino-tavarnelle`
   - indirizzo: Strada di Sant' Appiano, 47, 50028 Barberino Tavarnelle FI
32. **Antica Pieve B&B** — Barberino Tavarnelle
   - slug: `antica-pieve-b-b-barberino-tavarnelle`
   - indirizzo: Str. della Pieve, 1, 50028 Tavarnelle Val di Pesa FI
33. **Borgo Petrognano** — Barberino Tavarnelle
   - slug: `borgo-petrognano-barberino-tavarnelle`
   - indirizzo: Strada di Petrognano, 1, 50028 Petrognano FI
34. **Chianti Village Morrocco** — Barberino Tavarnelle
   - slug: `chianti-village-morrocco-barberino-tavarnelle`
   - indirizzo: Str. Morrocco, 36/A, 50028 Barberino Tavarnelle FI
35. **COMO Castello Del Nero** — Barberino Tavarnelle
   - slug: `como-castello-del-nero-barberino-tavarnelle`
   - indirizzo: Str. Spicciano, 7, 50028 Barberino Tavarnelle FI