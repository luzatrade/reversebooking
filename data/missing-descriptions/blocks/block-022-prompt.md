# Blocco 22/500 — 35 strutture senza descrizione IT

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

1. **Callort** — Adrara San Rocco
   - slug: `callort-adrara-san-rocco`
   - indirizzo: Via Panoramica, 1, 24060 San Fermo BG
2. **Hotel Ristorante Miranda** — Adrara San Rocco
   - slug: `hotel-ristorante-miranda-adrara-san-rocco`
   - indirizzo: Via Cornello, 8, 24060 Riva di Solto BG
3. **La Romanella** — Adrara San Rocco
   - slug: `la-romanella-adrara-san-rocco`
   - indirizzo: Via Nazionale, 3600, 24060 Ranzanico Lago BG
4. **Narciso Home** — Adrara San Rocco
   - slug: `narciso-home-adrara-san-rocco`
   - indirizzo: Via dei Narcisi, 10, 24060 Grone BG
5. **Riviera 86** — Adrara San Rocco
   - slug: `riviera-86-adrara-san-rocco`
   - indirizzo: Via del Tonale e della Mendola, 184, 24060 Piangaiano BG
6. **Adria bnb Nature Resort** — Adria
   - slug: `adria-bnb-nature-resort-adria`
   - indirizzo: Via Laura Renovati, 35, 45011 Adria RO
7. **Albergo Minuetto** — Adria
   - slug: `albergo-minuetto-adria`
   - indirizzo: Via Ex Riformati, 45011 Adria RO
8. **B&B Ca' Bianca** — Adria
   - slug: `b-b-ca-bianca-adria`
   - indirizzo: SP45, 45011 Adria RO
9. **B&B La Mandragola** — Adria
   - slug: `b-b-la-mandragola-adria`
   - indirizzo: Via II Febbraio, 94/A, 44033 Berra FE
10. **Bed & Breakfast Hotel Corte Zen** — Adria
   - slug: `bed-breakfast-hotel-corte-zen-adria`
   - indirizzo: Via Arginelli, 45011 Fasana Polesine RO
11. **Hotel Adria** — Adria
   - slug: `hotel-adria-adria-4`
   - indirizzo: Radnička ul. 46, 20000, Dubrovnik, Croazia
12. **Hotel Adria** — Adria
   - slug: `hotel-adria-adria-5`
   - indirizzo: Via Luigi Zuppetta, 10, 70121 Bari BA
13. **Hotel Adria** — Adria
   - slug: `hotel-adria-adria`
   - indirizzo: Viale 2 Giugno angolo, Via XIII Traversa, 19, 48015 Milano Marittima RA
14. **Hotel Adria** — Adria
   - slug: `hotel-adria-adria-3`
   - indirizzo: Via Gabriele D'Annunzio, 19, 47843 Misano Adriatico RN
15. **Hotel Adria** — Adria
   - slug: `hotel-adria-adria-2`
   - indirizzo: Via Cappuccina, 34, 30172 Venezia VE
16. **Hotel Adria beach club** — Adria
   - slug: `hotel-adria-beach-club-adria`
   - indirizzo: Viale G. Carducci, 281, 47042 Villamarina FC
17. **Hotel Adria Bellaria** — Adria
   - slug: `hotel-adria-bellaria-adria`
   - indirizzo: Via Rovereto, 9, 47814 Bellaria-Igea Marina RN
18. **Hotel Adria Nuova** — Adria
   - slug: `hotel-adria-nuova-adria`
   - indirizzo: Viale Gabriele D'Annunzio, 6, 47921 Rimini RN
19. **Hotel Leon Bianco** — Adria
   - slug: `hotel-leon-bianco-adria`
   - indirizzo: Piazza Camillo Benso di Cavour, 9, 45011 Adria RO
20. **Hotel Mauro** — Adria
   - slug: `hotel-mauro-adria`
   - indirizzo: Via Roma, 30/B, 45019 Taglio di Po RO
21. **Hotel Stella D'Italia** — Adria
   - slug: `hotel-stella-d-italia-adria`
   - indirizzo: Viale Umberto Maddalena, 4, 45011 Adria RO
22. **Hotel Tessarin** — Adria
   - slug: `hotel-tessarin-adria`
   - indirizzo: Piazza Venezia, 4, 45019 Taglio di Po RO
23. **Momi's Hotel** — Adria
   - slug: `momi-s-hotel-adria`
   - indirizzo: Via Piave, 10, 30014 Cavarzere VE
24. **Point Hotel Conselve** — Adria
   - slug: `point-hotel-conselve-adria`
   - indirizzo: Viale dell'Industria, 2, 35026 Conselve PD
25. **Ristorante Locanda 7 Mari** — Adria
   - slug: `ristorante-locanda-7-mari-adria`
   - indirizzo: Via Luigi Pirandello, 1, 45014 Porto Viro RO
26. **Al Lago** — Adro
   - slug: `al-lago-adro`
   - indirizzo: Via Sole delle Alpi, 24, 25030 Adro BS
27. **B&B A due passi dal Lago** — Adro
   - slug: `b-b-a-due-passi-dal-lago-adro`
   - indirizzo: Via F. Pezzotti, 20, 25030 Adro BS
28. **B&B Corte Sant’Angelo** — Adro
   - slug: `b-b-corte-sant-angelo-adro`
   - indirizzo: Via Sant' Angelo, 25050 Passirano BS
29. **Borgo Santa Giulia** — Adro
   - slug: `borgo-santa-giulia-adro`
   - indirizzo: Via Brescia, 3, 25040 Corte Franca BS
30. **HILL COLLE - Camere & Bistrot** — Adro
   - slug: `hill-colle-camere-bistrot-adro`
   - indirizzo: Via Trieste, 8/A, 25030 Erbusco BS
31. **Hotel Empire Resort** — Adro
   - slug: `hotel-empire-resort-adro`
   - indirizzo: Via del Dossello, n.30, 25049 Clusane BS
32. **L’Albereta Relais & Châteaux** — Adro
   - slug: `l-albereta-relais-chateaux-adro`
   - indirizzo: Via Vittorio Emanuele, 23, 25030 Erbusco BS
33. **La casa in collina** — Adro
   - slug: `la-casa-in-collina-adro`
   - indirizzo: Via Bellavista, 9, 25030 Erbusco BS
34. **La Terrazza Sulle Vigne** — Adro
   - slug: `la-terrazza-sulle-vigne-adro`
   - indirizzo: Via Sant' Afra, 8, 25040 Corte Franca BS
35. **Lake and More Suite Hotel** — Adro
   - slug: `lake-and-more-suite-hotel-adro`
   - indirizzo: Via XXIV Maggio, 40, 25030 Paratico BS