# Blocco 187/500 — 35 strutture senza descrizione IT

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

1. **B&B Bagnolo Mella** — Azzano Mella
   - slug: `b-b-bagnolo-mella-azzano-mella`
   - indirizzo: Via Antonio Gramsci, 164, 25021 Bagnolo Mella BS
2. **Bar Locanda Crocevia** — Azzano Mella
   - slug: `bar-locanda-crocevia-azzano-mella`
   - indirizzo: Viale Caduti del Lavoro, 62, 25030 Castel Mella BS
3. **Bed And Breakfast la Terrazza** — Azzano Mella
   - slug: `bed-and-breakfast-la-terrazza-azzano-mella`
   - indirizzo: Viale della Stazione, 33, 25122 Brescia BS
4. **Hotel Antica Fonte** — Azzano Mella
   - slug: `hotel-antica-fonte-azzano-mella`
   - indirizzo: Via Fornaci, 34, 25131 Brescia BS
5. **Hotel Della Volta** — Azzano Mella
   - slug: `hotel-della-volta-azzano-mella`
   - indirizzo: Via della Volta, 101, 25124 Brescia BS
6. **Hotel Euro** — Azzano Mella
   - slug: `hotel-euro-azzano-mella`
   - indirizzo: Via Padana Superiore, 60, 25045 Castegnato BS
7. **Hotel Fiera di Brescia** — Azzano Mella
   - slug: `hotel-fiera-di-brescia-azzano-mella`
   - indirizzo: Via Orzinuovi, 135/139, 25125 Brescia BS
8. **Hotel L'Amalfitana** — Azzano Mella
   - slug: `hotel-l-amalfitana-azzano-mella`
   - indirizzo: SP9, 8, 25020 Dello BS
9. **Hotel Master** — Azzano Mella
   - slug: `hotel-master-azzano-mella`
   - indirizzo: Via Luigi Apollonio, 72, 25128 Brescia BS
10. **Hotel PriMotel** — Azzano Mella
   - slug: `hotel-primotel-azzano-mella`
   - indirizzo: Via Borgosatollo, 30, 25124 Brescia BS
11. **Il Colle** — Azzano Mella
   - slug: `il-colle-azzano-mella`
   - indirizzo: PIAZZA MAZZINI, 14, 25020 Capriano del Colle BS
12. **La Casa di Olga** — Azzano Mella
   - slug: `la-casa-di-olga-azzano-mella`
   - indirizzo: Via Donatello, 269, 25124 Brescia BS
13. **Le Camere Di Linda** — Azzano Mella
   - slug: `le-camere-di-linda-azzano-mella`
   - indirizzo: Via Pier Paolo Gorini, 6, 25123 Brescia BS
14. **B&B Aeroporto** — Azzano San Paolo
   - slug: `b-b-aeroporto-azzano-san-paolo`
   - indirizzo: Piazza IV Novembre, 22, 24052 Azzano San Paolo BG
15. **Bergamo City - Self Check-in** — Azzano San Paolo
   - slug: `bergamo-city-self-check-in-azzano-san-paolo`
   - indirizzo: Via Edmondo de Amicis, 4, 24127 Bergamo BG
16. **Bergamoinhome** — Azzano San Paolo
   - slug: `bergamoinhome-azzano-san-paolo`
   - indirizzo: Via S. Bernardino, 88, 24126 Bergamo BG
17. **Bonne Nuit Guest House - Airport Orio al Serio BGY** — Azzano San Paolo
   - slug: `bonne-nuit-guest-house-airport-orio-al-serio-bgy-azzano-san-paolo`
   - indirizzo: Via Cascina Portichetto, 3B, 24052 Azzano San Paolo BG
18. **Casa Leonardo Airport** — Azzano San Paolo
   - slug: `casa-leonardo-airport-azzano-san-paolo`
   - indirizzo: Viale Trieste, 29, 24052 Azzano San Paolo BG
19. **Elements B&B** — Azzano San Paolo
   - slug: `elements-b-b-azzano-san-paolo`
   - indirizzo: Piazza F.lli Piacentini, 16, 24052 Azzano San Paolo BG
20. **Foresteria Giulia** — Azzano San Paolo
   - slug: `foresteria-giulia-azzano-san-paolo`
   - indirizzo: Via Ferruccio dell'Orto, 24, 24126 Bergamo BG
21. **Grand Hotel Del Parco** — Azzano San Paolo
   - slug: `grand-hotel-del-parco-azzano-san-paolo`
   - indirizzo: Via Galeno, 8/14, 24040 Stezzano BG
22. **Hotel Cascata** — Azzano San Paolo
   - slug: `hotel-cascata-azzano-san-paolo`
   - indirizzo: Viale Trieste, 28, 24052 Azzano San Paolo BG
23. **Like Home - Boutique Hotel Bergamo** — Azzano San Paolo
   - slug: `like-home-boutique-hotel-bergamo-azzano-san-paolo`
   - indirizzo: Via Giacomo Leopardi, 1, 24052 Azzano San Paolo BG
24. **Little House Leonardo Airport** — Azzano San Paolo
   - slug: `little-house-leonardo-airport-azzano-san-paolo`
   - indirizzo: Via Galileo Galilei, 1, 24052 Azzano San Paolo BG
25. **VILLAFIORE** — Azzano San Paolo
   - slug: `villafiore-azzano-san-paolo`
   - indirizzo: Via Giosuè Carducci, 21, 24052 Azzano San Paolo BG
26. **Winter Garden Hotel** — Azzano San Paolo
   - slug: `winter-garden-hotel-azzano-san-paolo`
   - indirizzo: Via Padergnone, 52, 24050 Grassobbio BG
27. **B&B 7 laghi** — Azzate
   - slug: `b-b-7-laghi-azzate`
   - indirizzo: Via Bellini, 12 D, 21020 Buguggiate VA
28. **B&B Mansarda Pascoli** — Azzate
   - slug: `b-b-mansarda-pascoli-azzate`
   - indirizzo: Via Pascoli, 3, 21046 Malnate VA
29. **CAPOLAGO HOTEL** — Azzate
   - slug: `capolago-hotel-azzate`
   - indirizzo: Via per Bodio, 74, 21100 Varese VA
30. **Ermo Colle** — Azzate
   - slug: `ermo-colle-azzate`
   - indirizzo: Via Giacomo Leopardi, 31, 21022 Azzate VA
31. **Hotel Locanda Dei Mai Intees** — Azzate
   - slug: `hotel-locanda-dei-mai-intees-azzate`
   - indirizzo: Via Monte Grappa, 22, 21022 Azzate VA
32. **Hotel Villa Borghi** — Azzate
   - slug: `hotel-villa-borghi-azzate`
   - indirizzo: Piazza Borghi, 1, 21020 Varano Borghi VA
33. **Ristorante - Hotel Villa Baroni** — Azzate
   - slug: `ristorante-hotel-villa-baroni-azzate`
   - indirizzo: Via Acquadro, 14, 21020 Bodio Lomnago VA
34. **Villa Cagnola** — Azzate
   - slug: `villa-cagnola-azzate`
   - indirizzo: Via Guido, Via Cagnola, 21, 21045 Gazzada Schianno VA
35. **Villa Campo Dei Fiori B.B** — Azzate
   - slug: `villa-campo-dei-fiori-b-b-azzate`
   - indirizzo: Via della Piana, 6, 21020 Casciago VA