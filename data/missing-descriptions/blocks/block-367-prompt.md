# Blocco 367/500 — 35 strutture senza descrizione IT

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

1. **B&B La Vecchia Quercia** — Calestano
   - slug: `b-b-la-vecchia-quercia-calestano`
   - indirizzo: Str. Spagnano, 29, 43045 Fornovo di Taro PR
2. **B&B Langhirano - La Ca' Vecia** — Calestano
   - slug: `b-b-langhirano-la-ca-vecia-calestano`
   - indirizzo: Str. per Riano, 11, 43013 Langhirano PR
3. **Bar Albergo Ristorante Mantovani** — Calestano
   - slug: `bar-albergo-ristorante-mantovani-calestano`
   - indirizzo: V. Giuseppe Mazzini, 2, 43030 Calestano PR
4. **BB Cancabaia Parma** — Calestano
   - slug: `bb-cancabaia-parma-calestano`
   - indirizzo: Via Martiri della Libertà, 70, 43037 Lesignano de' Bagni PR
5. **BB Villa al Parco** — Calestano
   - slug: `bb-villa-al-parco-calestano`
   - indirizzo: Via G. Adorni, 2, 43038 Sala Baganza PR
6. **Il Bordone del Pellegrino - B&B** — Calestano
   - slug: `il-bordone-del-pellegrino-b-b-calestano`
   - indirizzo: Strada Castello di Casola, 34, 43040 Terenzo PR
7. **La Rasora** — Calestano
   - slug: `la-rasora-calestano`
   - indirizzo: Str. Val Sporzana, 1, 43045 Fornovo di Taro PR
8. **La Stanza dei Ventagli** — Calestano
   - slug: `la-stanza-dei-ventagli-calestano`
   - indirizzo: Via Pascoli, 3, 43030 Calestano PR
9. **Le Spine B&B** — Calestano
   - slug: `le-spine-b-b-calestano`
   - indirizzo: Loc, 43042 Cavazzola PR
10. **Liudmila BB Viazzano** — Calestano
   - slug: `liudmila-bb-viazzano-calestano`
   - indirizzo: Str. del Pagano, 99, 43040 Varano de' Melegari PR
11. **Agriturismo della Barcareccia** — Calice al Cornoviglio
   - slug: `agriturismo-della-barcareccia-calice-al-cornoviglio`
   - indirizzo: Loc. Borra di Cuccaro, 19020 Calice Al Cornoviglio SP
12. **Agriturismo I Due Ghiri - 5 Terre - Calice al Cornoviglio** — Calice al Cornoviglio
   - slug: `agriturismo-i-due-ghiri-5-terre-calice-al-cornov-calice-al-cornoviglio`
   - indirizzo: Località Usurana, 1, 19020 Usurana SP
13. **Agriturismo La Debbia Ranch** — Calice al Cornoviglio
   - slug: `agriturismo-la-debbia-ranch-calice-al-cornoviglio`
   - indirizzo: 19020, località la debbia, di, 19020 Rocchetta di Vara SP
14. **Albergo " La Greppia " IT045013A1DAL7ET9C** — Calice al Cornoviglio
   - slug: `albergo-la-greppia-it045013a1dal7et9c-calice-al-cornoviglio`
   - indirizzo: V. Provinciale, 3, 54010 Montedivalli-chiesa MS
15. **Albergo Manganelli** — Calice al Cornoviglio
   - slug: `albergo-manganelli-calice-al-cornoviglio`
   - indirizzo: P.za S. Nicolò, 5, 54028 Villafranca in Lunigiana MS
16. **B&B Cinque Terre tra il Filo di Arianna** — Calice al Cornoviglio
   - slug: `b-b-cinque-terre-tra-il-filo-di-arianna-calice-al-cornoviglio`
   - indirizzo: Via Valle, 111, 19020 Polverara SP
17. **B&B Impronte nel bosco** — Calice al Cornoviglio
   - slug: `b-b-impronte-nel-bosco-calice-al-cornoviglio`
   - indirizzo: Località Pantanelli, 14, 19020 Calice al Cornoviglio SP
18. **Hotel La Trigola** — Calice al Cornoviglio
   - slug: `hotel-la-trigola-calice-al-cornoviglio`
   - indirizzo: Via Antonio Gramsci, 65, 19037 Santo Stefano di Magra SP
19. **Locanda l'Aia di Piero** — Calice al Cornoviglio
   - slug: `locanda-l-aia-di-piero-calice-al-cornoviglio`
   - indirizzo: Via Provinciale, 8, 19020 Valdonica SP
20. **Mirador 2.0** — Calice al Cornoviglio
   - slug: `mirador-2-0-calice-al-cornoviglio`
   - indirizzo: Via del Gaggio, 22, 54010 Podenzana MS
21. **Agriturismo del Ponte** — Calice Ligure
   - slug: `agriturismo-del-ponte-calice-ligure`
   - indirizzo: Via Ferriere, 3, 17020 Rialto SV
22. **Agriturismo San Sebastiano** — Calice Ligure
   - slug: `agriturismo-san-sebastiano-calice-ligure`
   - indirizzo: Via Don Mario Scarrone, 3, 17024 Finale Ligure SV
23. **BeB Diavolo Furbetto** — Calice Ligure
   - slug: `beb-diavolo-furbetto-calice-ligure`
   - indirizzo: Via Guglielmo Marconi, 25, 17020 Feglino SV
24. **Casa Viola dimora di campagna** — Calice Ligure
   - slug: `casa-viola-dimora-di-campagna-calice-ligure`
   - indirizzo: Via Bricco, Via Emilio Scanavino, 2, 17020 Calice Ligure SV
25. **Freeride Outdoor Village - Finale Ligure** — Calice Ligure
   - slug: `freeride-outdoor-village-finale-ligure-calice-ligure`
   - indirizzo: Via Calice, 15 B, 17024 Finale Ligure SV
26. **Hotel Giardino delle Rose** — Calice Ligure
   - slug: `hotel-giardino-delle-rose-calice-ligure`
   - indirizzo: Via S. Francesco, 2, 17024 Finale Ligure SV
27. **Hotel Victoria** — Calice Ligure
   - slug: `hotel-victoria-calice-ligure`
   - indirizzo: Via S. Francesco, 5, 17024 Finale Ligure SV
28. **L'erica** — Calice Ligure
   - slug: `l-erica-calice-ligure`
   - indirizzo: Piazza Annunziata, 3, 17024 Gorra SV
29. **La Contessa** — Calice Ligure
   - slug: `la-contessa-calice-ligure`
   - indirizzo: Via Don Mario Scarrone, 33, 17024 Finale Ligure SV
30. **La Rocca di Campogrande** — Calice Ligure
   - slug: `la-rocca-di-campogrande-calice-ligure`
   - indirizzo: Via Campogrande, 25, 17020 Calice Ligure SV
31. **La Rocca di Perti** — Calice Ligure
   - slug: `la-rocca-di-perti-calice-ligure`
   - indirizzo: Loc. Chiazzari, 3, 17024 Finale Ligure SV
32. **Oasi** — Calice Ligure
   - slug: `oasi-calice-ligure`
   - indirizzo: Via Generale Stefano Cagna, 25, 17024 Finale Ligure SV
33. **Sotto la Rocca** — Calice Ligure
   - slug: `sotto-la-rocca-calice-ligure`
   - indirizzo: Via Calice, 206, 17024 Finale Ligure SV
34. **Agricola Chiani** — Calimera
   - slug: `agricola-chiani-calimera`
   - indirizzo: SP29, 73026 Melendugno LE
35. **Agriturismo Tenuta Don Giovanni** — Calimera
   - slug: `agriturismo-tenuta-don-giovanni-calimera`
   - indirizzo: Strada Provinciale Melendugno San Foca km 0, 73026 Melendugno LE