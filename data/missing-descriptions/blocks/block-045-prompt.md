# Blocco 45/500 — 35 strutture senza descrizione IT

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

1. **Hotel Dufour** — Alagna Valsesia
   - slug: `hotel-dufour-alagna-valsesia`
   - indirizzo: Località Edelboden Superiore, 34, 11020 Tache AO
2. **Hotel Lo Scoiattolo** — Alagna Valsesia
   - slug: `hotel-lo-scoiattolo-alagna-valsesia`
   - indirizzo: Località Tache, 6, 11020 Gressoney-La-Trinité AO
3. **Hotel Lysjoch** — Alagna Valsesia
   - slug: `hotel-lysjoch-alagna-valsesia`
   - indirizzo: Loc. Fohre 4, Localita' Fohre, 4, 11020 Tache AO
4. **Hotel Residence Valverde** — Alagna Valsesia
   - slug: `hotel-residence-valverde-alagna-valsesia`
   - indirizzo: Località Edelboden Superiore, 30, 11020 Gressoney-La-Trinité AO
5. **Residence Walsertal** — Alagna Valsesia
   - slug: `residence-walsertal-alagna-valsesia`
   - indirizzo: 1 , Gressoney-La-Trinité Aosta Valley, Italia, 11020 Tschaval AO
6. **Abruzzo Borgo** — Alanno
   - slug: `abruzzo-borgo-alanno`
   - indirizzo: Via Piccianesi, 75, 65020 Alanno PE
7. **Agriturismo La Masseria** — Alanno
   - slug: `agriturismo-la-masseria-alanno`
   - indirizzo: Via Prati, 56, 65020 Alanno PE
8. **Aron Only Suites B&B Pescara** — Alanno
   - slug: `aron-only-suites-b-b-pescara-alanno`
   - indirizzo: Viale Regina Elena, 20, 65122 Piano Primo PE
9. **B&B Cuore Verde** — Alanno
   - slug: `b-b-cuore-verde-alanno`
   - indirizzo: Via Prati, 51, 65020, CIN:IT068002C1LT09UQLQ Alanno PE
10. **B&B Il Sogno** — Alanno
   - slug: `b-b-il-sogno-alanno`
   - indirizzo: Via Sopportico, Via Educandato, 8, 66100 Chieti CH
11. **Casa Aurora B&B** — Alanno
   - slug: `casa-aurora-b-b-alanno`
   - indirizzo: Viale B. Croce, 180, 66100 Scalo, CH
12. **Halanus Agriexperience** — Alanno
   - slug: `halanus-agriexperience-alanno`
   - indirizzo: Via Gabriele d'Annunzio, 54A, 65020 Alanno PE
13. **Halanus Hotel & Resort** — Alanno
   - slug: `halanus-hotel-resort-alanno`
   - indirizzo: Via Paolo Borsellino, 16, 65020 Alanno Scalo PE
14. **Hotel Villa Alessandra** — Alanno
   - slug: `hotel-villa-alessandra-alanno`
   - indirizzo: Via Gabriele d'Annunzio, 15, 65020 Alanno PE
15. **La Piccola Oasi** — Alanno
   - slug: `la-piccola-oasi-alanno`
   - indirizzo: Via dei Vestini, 70/b, 66100 Chieti CH
16. **Mary's Dream** — Alanno
   - slug: `mary-s-dream-alanno`
   - indirizzo: Via Circonvallazione, 24, 65020 Lettomanoppello PE
17. **Oasi Macerina** — Alanno
   - slug: `oasi-macerina-alanno`
   - indirizzo: Via Macerino, 16, 65020 Alanno PE
18. **resort regis** — Alanno
   - slug: `resort-regis-alanno`
   - indirizzo: Via Pescarina, 1, 65020 Turrivalignani PE
19. **Villa Tra Mare e Monti** — Alanno
   - slug: `villa-tra-mare-e-monti-alanno`
   - indirizzo: Via Sant'Agata, 39, 65020 Alanno PE
20. **Albergo Primula** — Alassio
   - slug: `albergo-primula-alassio`
   - indirizzo: Vico Sant'Erasmo, 4, 17021 Alassio SV
21. **Allegroitalia Alassio Rosa** — Alassio
   - slug: `allegroitalia-alassio-rosa-alassio`
   - indirizzo: Via Privata Maddalena Conti, 10, 17021 Alassio SV
22. **B&B Hotel Bel Sit** — Alassio
   - slug: `b-b-hotel-bel-sit-alassio`
   - indirizzo: Via Don Boselli, 28, 17021 Alassio SV
23. **Hotel Adler** — Alassio
   - slug: `hotel-adler-alassio`
   - indirizzo: Via P. Ferreri, 77, 17021 Alassio SV
24. **Hotel Aida** — Alassio
   - slug: `hotel-aida-alassio`
   - indirizzo: Via Flavio Gioia, 25, 17021 Alassio SV
25. **Hotel Alla Fontanella** — Alassio
   - slug: `hotel-alla-fontanella-alassio`
   - indirizzo: Vico al Tienna, 22, 17021 Alassio SV
26. **Hotel Badano** — Alassio
   - slug: `hotel-badano-alassio`
   - indirizzo: Via Antonio Gramsci, 36, 17021 Alassio SV
27. **Hotel Danio Lungomare** — Alassio
   - slug: `hotel-danio-lungomare-alassio`
   - indirizzo: Via Roma, 23, 17021 Alassio SV
28. **Hotel Gabbiano** — Alassio
   - slug: `hotel-gabbiano-alassio`
   - indirizzo: Via Leonardo da Vinci, 226, 17021 Alassio SV
29. **Hotel Garden** — Alassio
   - slug: `hotel-garden-alassio`
   - indirizzo: Via Privata Amelia Ferro, 1, 17021 Alassio SV
30. **Hotel Lamberti** — Alassio
   - slug: `hotel-lamberti-alassio`
   - indirizzo: Via Antonio Gramsci, 57, 17021 Alassio SV
31. **Hotel Lydia** — Alassio
   - slug: `hotel-lydia-alassio`
   - indirizzo: Via Leonardo da Vinci, 87, 17021 Alassio SV
32. **Hotel Regina** — Alassio
   - slug: `hotel-regina-alassio`
   - indirizzo: Viale Daniel Hanbury, 220, 17021 Alassio SV
33. **Hotel Riva Alassio** — Alassio
   - slug: `hotel-riva-alassio-alassio`
   - indirizzo: Corso Europa, 64, 17021 Alassio SV
34. **Hotel San Giorgio** — Alassio
   - slug: `hotel-san-giorgio-alassio`
   - indirizzo: Viale Daniel Hanbury, 190/F, 17021 Alassio SV
35. **Hotel Savoia Alassio** — Alassio
   - slug: `hotel-savoia-alassio-alassio`
   - indirizzo: Via Milano, 14, 17021 Alassio SV