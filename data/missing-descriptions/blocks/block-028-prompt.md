# Blocco 28/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Lu Nodu - Trinita d'Aglutu e Vignola** — Aglientu
   - slug: `agriturismo-lu-nodu-trinita-d-aglutu-e-vignola-aglientu`
   - indirizzo: SP90, 07038 Trinità d'Agultu e Vignola OT
2. **Agriturismo Lu Stabbiacciu** — Aglientu
   - slug: `agriturismo-lu-stabbiacciu-aglientu`
   - indirizzo: Loc. Stabbiacciu, 391, 07020 Aglientu OT
3. **B & B Rena Majore** — Aglientu
   - slug: `b-b-rena-majore-aglientu`
   - indirizzo: Via Nettuno, 55, 07020 Rena Majore OT
4. **B&B li salcuneddi** — Aglientu
   - slug: `b-b-li-salcuneddi-aglientu`
   - indirizzo: B&B li salcuneddi, Li salcuneddi, 07020 Aglientu SS
5. **Bed and Bike Antico Mulino** — Aglientu
   - slug: `bed-and-bike-antico-mulino-aglientu`
   - indirizzo: Via Molino, 07020 Aglientu OT
6. **Borgo dei Pescatori Resort** — Aglientu
   - slug: `borgo-dei-pescatori-resort-aglientu`
   - indirizzo: Località Lu Lamoni, 07020 Vignola Mare OT
7. **Club Esse Gallura Beach** — Aglientu
   - slug: `club-esse-gallura-beach-aglientu`
   - indirizzo: Str. Monti Russu, 07020 Aglientu OT
8. **Club Hotel Ragno d'Oro** — Aglientu
   - slug: `club-hotel-ragno-d-oro-aglientu`
   - indirizzo: SP90, 07020 Aglientu OT
9. **Hotel Boutique Jatika** — Aglientu
   - slug: `hotel-boutique-jatika-aglientu`
   - indirizzo: Via del Fiume, snc, 07020 Vignola Mare OT
10. **Hotel Petri Marini** — Aglientu
   - slug: `hotel-petri-marini-aglientu`
   - indirizzo: Circonvallazione Vignola Mare, sn, 07020 Aglientu OT
11. **Hotel Ristorante Pizzeria La Sorgente** — Aglientu
   - slug: `hotel-ristorante-pizzeria-la-sorgente-aglientu`
   - indirizzo: Via Romana, 2, 07020 Aglientu Tempio
12. **Hotel Santa Maria** — Aglientu
   - slug: `hotel-santa-maria-aglientu`
   - indirizzo: Loc. Larinzeddu, 33H5+2F, 07020 Vignola Mare OT
13. **La Casa del Poeta** — Aglientu
   - slug: `la-casa-del-poeta-aglientu`
   - indirizzo: Lu Corru Biancu, 07020 Aglientu OT
14. **On The Beach La Rena Beddha** — Aglientu
   - slug: `on-the-beach-la-rena-beddha-aglientu`
   - indirizzo: Via del Fiume, 34, 07020 Vignola Mare OT
15. **Residence Baia dei Mirti** — Aglientu
   - slug: `residence-baia-dei-mirti-aglientu`
   - indirizzo: 43FG+HM, 07020 Aglientu OT
16. **Residence Lu Lamoni Costa Nord** — Aglientu
   - slug: `residence-lu-lamoni-costa-nord-aglientu`
   - indirizzo: Villaggio Mirice, 07020 Lu Lamoni OT
17. **Sardinia Beach Apartments** — Aglientu
   - slug: `sardinia-beach-apartments-aglientu`
   - indirizzo: Villaggio Mirice, 07020 Lu Lamoni OT
18. **Villamarina** — Aglientu
   - slug: `villamarina-aglientu`
   - indirizzo: Str. Naracu Nieddu, 07020 Aglientu OT
19. **ASC Hotel** — Agli�
   - slug: `asc-hotel-agli`
   - indirizzo: V. di Castelsecco, 8H, 52100 Arezzo AR
20. **Hotel Agli Alboretti** — Agli�
   - slug: `hotel-agli-alboretti-agli`
   - indirizzo: Rio Terà Foscarini, 884, 30123 Venezia VE
21. **Hotel Agli Artisti** — Agli�
   - slug: `hotel-agli-artisti-agli`
   - indirizzo: Calle Priuli dei Cavaletti, 99/c, 30121 Venezia VE
22. **Hotel Agorà** — Agli�
   - slug: `hotel-agora-agli`
   - indirizzo: Via Staffetta, 207, 80014 Lago Patria NA
23. **Hotel al Sotoportego** — Agli�
   - slug: `hotel-al-sotoportego-agli`
   - indirizzo: Sotoportego del Magazen, 5595/A, 30135 Venezia VE
24. **Hotel Alle Acque** — Agli�
   - slug: `hotel-alle-acque-agli`
   - indirizzo: Via Acque, 9, 36045 Lonigo VI
25. **Hotel Bali** — Agli�
   - slug: `hotel-bali-agli`
   - indirizzo: Via Leonardo Da Vinci, 41, 55049 Viareggio LU
26. **Hotel Bella Italia** — Agli�
   - slug: `hotel-bella-italia-agli`
   - indirizzo: Via Bell'Italia, 2A, 37019 Peschiera del Garda VR
27. **Hotel Garden** — Agli�
   - slug: `hotel-garden-agli`
   - indirizzo: Via Roma, 8, 87028 Praia a Mare CS
28. **Hotel Giulietta** — Agli�
   - slug: `hotel-giulietta-agli`
   - indirizzo: Viale A. Galli, 3, 47838 Riccione RN
29. **Hotel Gli Dei** — Agli�
   - slug: `hotel-gli-dei-agli`
   - indirizzo: Via Coste D'Agnano, 21, 80078 Pozzuoli NA
30. **Hotel Italia** — Agli�
   - slug: `hotel-italia-agli`
   - indirizzo: Viale A. Vespucci, 3, 54100 Marina di Massa MS
31. **Hotel Italia** — Agli�
   - slug: `hotel-italia-agli-2`
   - indirizzo: Via Goffredo Mameli, 58/66, 37126 Verona VR
32. **HOTEL LAURA** — Agli�
   - slug: `hotel-laura-agli`
   - indirizzo: Via Costanziaca, 3, 30013 Ca' Ballarin VE
33. **Hotel Relais agli Olivi** — Agli�
   - slug: `hotel-relais-agli-olivi-agli`
   - indirizzo: Via A. Salieri, 14, 37017 Lazise VR
34. **The Green Park Hotel** — Agli�
   - slug: `the-green-park-hotel-agli`
   - indirizzo: Via delle Batterie, 166, 30013 Cavallino-Treporti VE
35. **"Le camille" ristorante, pizzeria & locanda** — Agna
   - slug: `le-camille-ristorante-pizzeria-locanda-agna`
   - indirizzo: Località Scolo Branco, 2, 45011 Adria RO