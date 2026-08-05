# Blocco 218/500 — 35 strutture senza descrizione IT

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

1. **Hubertusstube** — Barbiano/Barbian
   - slug: `hubertusstube-barbiano-barbian`
   - indirizzo: S.Katherina/ Novale, 117 A, 39040 Laion BZ
2. **Mair Josef** — Barbiano/Barbian
   - slug: `mair-josef-barbiano-barbian`
   - indirizzo: Ganderbachstraße, Via Rio Gondo, 12, 39040 Barbiano BZ
3. **Marxhof** — Barbiano/Barbian
   - slug: `marxhof-barbiano-barbian`
   - indirizzo: Heiliggrab, Via Barbiano, 7, 39040 Barbiano BZ
4. **Oberpalwitterhof** — Barbiano/Barbian
   - slug: `oberpalwitterhof-barbiano-barbian`
   - indirizzo: Via Rosengarten, 28, 39040 Barbiano BZ
5. **Pensione Troglerhof** — Barbiano/Barbian
   - slug: `pensione-troglerhof-barbiano-barbian`
   - indirizzo: 39040 Laion BZ, Italia
6. **Planatscherhof** — Barbiano/Barbian
   - slug: `planatscherhof-barbiano-barbian`
   - indirizzo: 39040 Barbiano BZ, Italia
7. **Agrodolce** — Barcellona Pozzo di Gotto
   - slug: `agrodolce-barcellona-pozzo-di-gotto`
   - indirizzo: Via Giuseppe Garibaldi, 367, 98051 Barcellona Pozzo di Gotto ME
8. **B&B Via Nazionale** — Barcellona Pozzo di Gotto
   - slug: `b-b-via-nazionale-barcellona-pozzo-di-gotto`
   - indirizzo: Via Archi Nazionale, 16, 98044 Olivarella-Corriolo ME
9. **Bed and Breakfast Ro.Ma.** — Barcellona Pozzo di Gotto
   - slug: `bed-and-breakfast-ro-ma-barcellona-pozzo-di-gotto`
   - indirizzo: Via Caldà, 52, 98051 Barcellona Pozzo di Gotto ME
10. **Borgo San Giovanni** — Barcellona Pozzo di Gotto
   - slug: `borgo-san-giovanni-barcellona-pozzo-di-gotto`
   - indirizzo: Strada Statale S. Antonino, 7, 98057 Barcellona Pozzo di Gotto ME
11. **Cinquecento B&B** — Barcellona Pozzo di Gotto
   - slug: `cinquecento-b-b-barcellona-pozzo-di-gotto`
   - indirizzo: Via Giosuè Carducci, 30, 98051 Barcellona Pozzo di Gotto ME
12. **Hotel Ristorante all'Antico Pozzo** — Barcellona Pozzo di Gotto
   - slug: `hotel-ristorante-all-antico-pozzo-barcellona-pozzo-di-gotto`
   - indirizzo: Via Milite Ignoto, 67, 98051 Barcellona Pozzo di Gotto ME
13. **I3Mori** — Barcellona Pozzo di Gotto
   - slug: `i3mori-barcellona-pozzo-di-gotto`
   - indirizzo: Via Spiaggia Cantoni, N° 64, 98051 Barcellona Pozzo di Gotto ME
14. **Idria B&B** — Barcellona Pozzo di Gotto
   - slug: `idria-b-b-barcellona-pozzo-di-gotto`
   - indirizzo: Via Catili, 130, 98051 Barcellona Pozzo di Gotto ME
15. **Il Casale Dei Conti B & B** — Barcellona Pozzo di Gotto
   - slug: `il-casale-dei-conti-b-b-barcellona-pozzo-di-gotto`
   - indirizzo: Via Giacomo Medici, 440, 98051 Barcellona Pozzo di Gotto ME
16. **La casa di Matilde Rooms di Roberta Cannarozzo** — Barcellona Pozzo di Gotto
   - slug: `la-casa-di-matilde-rooms-di-roberta-cannarozzo-barcellona-pozzo-di-gotto`
   - indirizzo: Via degli Studi, 46, 98051 Barcellona Pozzo di Gotto ME
17. **LA FORESTERIA DI MAESTINA** — Barcellona Pozzo di Gotto
   - slug: `la-foresteria-di-maestina-barcellona-pozzo-di-gotto`
   - indirizzo: Via Spine Sante, 188, 98051 Barcellona Pozzo di Gotto ME
18. **My friend Umberto** — Barcellona Pozzo di Gotto
   - slug: `my-friend-umberto-barcellona-pozzo-di-gotto`
   - indirizzo: Via Umberto I, 37, 98051 Barcellona Pozzo di Gotto ME
19. **Residence Mareblu** — Barcellona Pozzo di Gotto
   - slug: `residence-mareblu-barcellona-pozzo-di-gotto`
   - indirizzo: Stretto I Bartolella, 38, 98051 Barcellona Pozzo di Gotto ME
20. **Seme d'Arancia ::: Bed & Breakfast** — Barcellona Pozzo di Gotto
   - slug: `seme-d-arancia-bed-breakfast-barcellona-pozzo-di-gotto`
   - indirizzo: Via Operai, 50, 98051 Barcellona Pozzo di Gotto ME
21. **Unico Hotel** — Barcellona Pozzo di Gotto
   - slug: `unico-hotel-barcellona-pozzo-di-gotto`
   - indirizzo: Via Operai, 193, 98051 Barcellona Pozzo di Gotto ME
22. **Villa Manno** — Barcellona Pozzo di Gotto
   - slug: `villa-manno-barcellona-pozzo-di-gotto`
   - indirizzo: Via Ragusa, 31/2, 98051 Barcellona Pozzo di Gotto ME
23. **Andante Drassanes** — Barcelona
   - slug: `andante-drassanes-barcelona`
   - indirizzo: Av. de les Drassanes, 23, Ciutat Vella, 08001 Barcelona
24. **Dorma Plaza Catalunya** — Barcelona
   - slug: `dorma-plaza-catalunya-barcelona`
   - indirizzo: Ronda de la Univ., 18, Eixample, 08007 Barcelona
25. **Hotel Barcelona Center** — Barcelona
   - slug: `hotel-barcelona-center-barcelona`
   - indirizzo: Calle de Balmes, 103, floor 7, Eixample, 08008 Barcelona
26. **Hotel Barcelona Universal** — Barcelona
   - slug: `hotel-barcelona-universal-barcelona`
   - indirizzo: Avinguda del Paral·lel, 76-80, Ciutat Vella, 08001 Barcelona
27. **Hotel Casa Sagnier** — Barcelona
   - slug: `hotel-casa-sagnier-barcelona`
   - indirizzo: Rambla de Catalunya, 104, Eixample, 08008 Barcelona
28. **Hotel Ginebra** — Barcelona
   - slug: `hotel-ginebra-barcelona`
   - indirizzo: Rambla de Catalunya, 1, 3 - 1, Eixample, 08007 Barcelona
29. **Hotel Granvia** — Barcelona
   - slug: `hotel-granvia-barcelona`
   - indirizzo: Gran Via de les Corts Catalanes, 642, Eixample, 08007 Barcelona
30. **Hotel Jazz** — Barcelona
   - slug: `hotel-jazz-barcelona`
   - indirizzo: Carrer de Pelai, 3 Parking:, Ronda de la Univ., 4, Eixample, 08001 Barcelona
31. **Hotel Praktik Rambla** — Barcelona
   - slug: `hotel-praktik-rambla-barcelona`
   - indirizzo: Rambla de Catalunya, 27, Eixample, 08007 Barcelona
32. **Hotel SERHS Rivoli Rambla Barcelona** — Barcelona
   - slug: `hotel-serhs-rivoli-rambla-barcelona-barcelona`
   - indirizzo: La Rambla, 128, Ciutat Vella, 08002 Barcelona
33. **Hotel Sixties** — Barcelona
   - slug: `hotel-sixties-barcelona`
   - indirizzo: Passatge de Gutenberg, 7, Ciutat Vella, 08001 Barcelona
34. **Lamaro Hotel Barcelona** — Barcelona
   - slug: `lamaro-hotel-barcelona-barcelona`
   - indirizzo: Av. de la Catedral, 7, Ciutat Vella, 08002 Barcelona
35. **Musik Boutique Hotel** — Barcelona
   - slug: `musik-boutique-hotel-barcelona`
   - indirizzo: Carrer de Sant Pere Més Baix, 62, Ciutat Vella, 08003 Barcelona