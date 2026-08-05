# Blocco 487/500 — 35 strutture senza descrizione IT

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

1. **Hotel Borges Chiado** — Lisbon
   - slug: `hotel-borges-chiado-lisbon`
   - indirizzo: R. Garrett 108, 1200-205 Lisboa
2. **Hotel Britania Art Deco Lisboa** — Lisbon
   - slug: `hotel-britania-art-deco-lisboa-lisbon`
   - indirizzo: Rua Rodrigues Sampaio, 17, 1150-278 Lisboa
3. **Hotel Marquês de Pombal** — Lisbon
   - slug: `hotel-marques-de-pombal-lisbon`
   - indirizzo: Av. da Liberdade 243, 1250-143 Lisboa
4. **Hotel Mundial** — Lisbon
   - slug: `hotel-mundial-lisbon`
   - indirizzo: Praça Martim Moniz 2, 1100-341 Lisboa
5. **Hotel Santa Justa Lisboa** — Lisbon
   - slug: `hotel-santa-justa-lisboa-lisbon`
   - indirizzo: R. dos Correeiros 204, 1100-170 Lisboa
6. **Hotel Vincci Baixa** — Lisbon
   - slug: `hotel-vincci-baixa-lisbon`
   - indirizzo: R. do Comércio 32 38, 1100-150 Lisboa
7. **Inspira Liberdade Boutique Hotel** — Lisbon
   - slug: `inspira-liberdade-boutique-hotel-lisbon`
   - indirizzo: R. de Santa Marta 48, 1150-297 Lisboa
8. **Internacional Design Hotel** — Lisbon
   - slug: `internacional-design-hotel-lisbon`
   - indirizzo: Rua da Betesga 3, 1100-090 Lisboa
9. **Lisbon City Hotel by City Hotels** — Lisbon
   - slug: `lisbon-city-hotel-by-city-hotels-lisbon`
   - indirizzo: Av. Alm. Reis 49, 1150-010 Lisboa
10. **Central Hotel London** — London
   - slug: `central-hotel-london-london`
   - indirizzo: 16-18 Argyle St, London WC1H 8EG
11. **City London Hotel** — London
   - slug: `city-london-hotel-london`
   - indirizzo: 30 Borough Rd, London SE1 0AJ
12. **Holiday Inn Express London - Southwark by IHG** — London
   - slug: `holiday-inn-express-london-southwark-by-ihg-london`
   - indirizzo: 103-109 Southwark St, London SE1 0JQ
13. **Hotel Indigo London - 1 Leicester Square by IHG** — London
   - slug: `hotel-indigo-london-1-leicester-square-by-ihg-london`
   - indirizzo: 1 Leicester Square, London WC2H 7NA
14. **Hyde London City** — London
   - slug: `hyde-london-city-london`
   - indirizzo: 15 Old Bailey, London EC4M 7EF
15. **Leonardo Royal London St Paul's** — London
   - slug: `leonardo-royal-london-st-paul-s-london`
   - indirizzo: 10 Godliman St, London EC4V 5AJ
16. **London Hotel** — London
   - slug: `london-hotel-london`
   - indirizzo: London SW1V 2BB
17. **Lost Property St Paul's London - Curio Collection by Hilton** — London
   - slug: `lost-property-st-paul-s-london-curio-collection-london`
   - indirizzo: 3-5 Ludgate Hill, London EC4M 7AA
18. **master St. Paul's Serviced Apartments** — London
   - slug: `master-st-paul-s-serviced-apartments-london`
   - indirizzo: 9 Creed Ln, London EC4V 5BR
19. **ME London** — London
   - slug: `me-london-london`
   - indirizzo: 336-337 Strand, London WC2R 1HA
20. **Novotel London Blackfriars** — London
   - slug: `novotel-london-blackfriars-london`
   - indirizzo: Novotel, 46 Blackfriars Rd, London SE1 8NZ
21. **Premier Inn London Holborn hotel** — London
   - slug: `premier-inn-london-holborn-hotel-london`
   - indirizzo: 27-29 Red Lion St, London WC1R 4PS
22. **Strand Palace** — London
   - slug: `strand-palace-london`
   - indirizzo: 372 Strand, London WC2R 0JJ
23. **The Londoner Hotel** — London
   - slug: `the-londoner-hotel-london`
   - indirizzo: 38 Leicester Square, London WC2H 7DX
24. **The Westin London City** — London
   - slug: `the-westin-london-city-london`
   - indirizzo: 60 Upper Thames St., London EC4V 3AD
25. **Al Tuscany Bed & Breakfast** — Lucca
   - slug: `al-tuscany-bed-breakfast-lucca`
   - indirizzo: Via Cenami, 17, 55100 Lucca LU, Italia
26. **Albergo alla Corte degli Angeli** — Lucca
   - slug: `albergo-alla-corte-degli-angeli-lucca`
   - indirizzo: V. Degli Angeli, 23, 55100 Lucca LU, Italia
27. **Albergo Moderno Lucca** — Lucca
   - slug: `albergo-moderno-lucca-lucca`
   - indirizzo: in, Via Vincenzo Civitali, 38, 55100 Lucca LU, Italia
28. **At Home Bed and Breakfast** — Lucca
   - slug: `at-home-bed-and-breakfast-lucca`
   - indirizzo: Via dell'Anfiteatro, 32, 55100 Lucca LU, Italia
29. **B&B Antica Corte dei Principi** — Lucca
   - slug: `b-b-antica-corte-dei-principi-lucca`
   - indirizzo: Via Olivo, 2, 55100 Lucca LU, Italia
30. **B&B Evelina** — Lucca
   - slug: `b-b-evelina-lucca`
   - indirizzo: Via Streghi, 12, 55100 Lucca LU, Italia
31. **B&B Franco's Villa - Bed and Breakfast Lucca - Culliness** — Lucca
   - slug: `b-b-franco-s-villa-bed-and-breakfast-lucca-culli-lucca`
   - indirizzo: Via del Santo, 236, 55023 Diecimo LU, Italia
32. **B&B Villa Anna** — Lucca
   - slug: `b-b-villa-anna-lucca`
   - indirizzo: Viale Luigi Cadorna, 41, 55100 Lucca LU, Italia
33. **Bed & Breakfast La Boheme** — Lucca
   - slug: `bed-breakfast-la-boheme-lucca`
   - indirizzo: Via del Moro, 2, 55100 Lucca LU, Italia
34. **Bed & Breakfast La gemma di Elena** — Lucca
   - slug: `bed-breakfast-la-gemma-di-elena-lucca`
   - indirizzo: Via della Zecca, 33, 55100 Lucca LU, Italia
35. **Bed and Breakfast Lucca Fora** — Lucca
   - slug: `bed-and-breakfast-lucca-fora-lucca`
   - indirizzo: Via Pesciatina, 143, 55012 Lunata LU, Italia