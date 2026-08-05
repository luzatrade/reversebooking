# Blocco 227/500 — 35 strutture senza descrizione IT

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

1. **Villa Costanza** — Barni
   - slug: `villa-costanza-barni`
   - indirizzo: V. Milano, 40, 22030 Magreglio CO
2. **Agriturismo Bianconiglio - B&B Langhe del Barolo** — Barolo
   - slug: `agriturismo-bianconiglio-b-b-langhe-del-barolo-barolo`
   - indirizzo: loc. Perno 30, 12065 Monforte d'Alba CN
3. **Agriturismo Cascina Rocca B&B** — Barolo
   - slug: `agriturismo-cascina-rocca-b-b-barolo`
   - indirizzo: Frazione Annunziata Rocca 117/B, 12064 La Morra CN
4. **Agriturismo Il Gioco Dell'Oca** — Barolo
   - slug: `agriturismo-il-gioco-dell-oca-barolo`
   - indirizzo: Via Alba, 83, 12060 Barolo CN
5. **Agriturismo Le Viole** — Barolo
   - slug: `agriturismo-le-viole-barolo`
   - indirizzo: Via delle Viole, 14, 12060 Barolo CN
6. **ASILO LUX APARTMENTS** — Barolo
   - slug: `asilo-lux-apartments-barolo`
   - indirizzo: Via Enrico Ghisolfi, Via Asilo, 6, 12060 Barolo CN
7. **B&B Casa in Barolo** — Barolo
   - slug: `b-b-casa-in-barolo-barolo`
   - indirizzo: Vicolo del Pozzo, 3, 12060 Barolo CN
8. **Ca' San Ponzio - Affittacamere** — Barolo
   - slug: `ca-san-ponzio-affittacamere-barolo`
   - indirizzo: Via Rittane, 7, 12060 Vergne CN
9. **Casa Svizzera - Agriturismo in Barolo** — Barolo
   - slug: `casa-svizzera-agriturismo-in-barolo-barolo`
   - indirizzo: Via Roma, 65, 12060 Barolo CN
10. **Casacolbert , Barolo** — Barolo
   - slug: `casacolbert-barolo-barolo`
   - indirizzo: Via Acqua Gelata, 1, 12060 Barolo CN
11. **Ciabot delle Aie - Dormi nelle Langhe di Barolo** — Barolo
   - slug: `ciabot-delle-aie-dormi-nelle-langhe-di-barolo-barolo`
   - indirizzo: Via Preda, 1, 12060 Barolo CN
12. **Dimora Palma Barolo** — Barolo
   - slug: `dimora-palma-barolo-barolo`
   - indirizzo: Via XXV Aprile, 22, 12060 Barolo CN
13. **Eleìra Luxury Accommodations** — Barolo
   - slug: `eleira-luxury-accommodations-barolo`
   - indirizzo: Via Cavour, 5, 12060 Barolo CN
14. **Hotel Barolo** — Barolo
   - slug: `hotel-barolo-barolo`
   - indirizzo: Via Lomondo, 2, 12060 Barolo CN
15. **La Giolitta Accomodations di Daniela Vacca** — Barolo
   - slug: `la-giolitta-accomodations-di-daniela-vacca-barolo`
   - indirizzo: Via Cesare Battisti, 13, 12060 Barolo CN
16. **La Rosa Gialla - Bio Appartamenti e camere di charme a Barolo** — Barolo
   - slug: `la-rosa-gialla-bio-appartamenti-e-camere-di-char-barolo`
   - indirizzo: Via Vergne, 2, 12060 Barolo CN
17. **La Terrazza Sul Bosco** — Barolo
   - slug: `la-terrazza-sul-bosco-barolo`
   - indirizzo: Via Conforso, 5, 12060 Barolo CN
18. **The Green Guesthouse** — Barolo
   - slug: `the-green-guesthouse-barolo`
   - indirizzo: Frazione Vergne, 83, 12068 Barolo CN
19. **TorreBarolo** — Barolo
   - slug: `torrebarolo-barolo`
   - indirizzo: Via Gioberti, 4, 12060 Barolo CN
20. **Villa Carla Barolo** — Barolo
   - slug: `villa-carla-barolo-barolo`
   - indirizzo: Via Monforte, 10, 12060 Barolo CN
21. **Vineho** — Barolo
   - slug: `vineho-barolo`
   - indirizzo: Via delle Viole, 3, 12060 Barolo CN
22. **B&B Poesie di Viaggio** — Barone Canavese
   - slug: `b-b-poesie-di-viaggio-barone-canavese`
   - indirizzo: Via Stazione, 29, 10010 Candia Canavese TO
23. **Castello di Pavone** — Barone Canavese
   - slug: `castello-di-pavone-barone-canavese`
   - indirizzo: Via Dietro Castello, 10018 Pavone Canavese TO
24. **DE SANTI B&B** — Barone Canavese
   - slug: `de-santi-b-b-barone-canavese`
   - indirizzo: Via Roma, 79, 10010 Candia Canavese TO
25. **Hotel Erbaluce** — Barone Canavese
   - slug: `hotel-erbaluce-barone-canavese`
   - indirizzo: Via Circonvallazione Nuova, 1, 10014 Caluso TO
26. **Le Ali del Falco** — Barone Canavese
   - slug: `le-ali-del-falco-barone-canavese`
   - indirizzo: Via Morozzo, 13, 10090 Cuceglio TO
27. **Le Antiche Volte bed & breakfast** — Barone Canavese
   - slug: `le-antiche-volte-bed-breakfast-barone-canavese`
   - indirizzo: Via XX Settembre, 10, 10090 Montalenghe TO
28. **Locanda della Contea** — Barone Canavese
   - slug: `locanda-della-contea-barone-canavese`
   - indirizzo: SP53, 17, 10090 Montalenghe TO
29. **Tenuta Roletto** — Barone Canavese
   - slug: `tenuta-roletto-barone-canavese`
   - indirizzo: Via Porta Pia, 69/71, 10090 Cuceglio TO
30. **Villa Albaluce** — Barone Canavese
   - slug: `villa-albaluce-barone-canavese`
   - indirizzo: Via V. Alfieri, 9, 10014 Caluso TO
31. **B&B da Nonna Teresa** — Baronissi
   - slug: `b-b-da-nonna-teresa-baronissi`
   - indirizzo: Via Ferreria, 15, 84081 Baronissi SA
32. **B&B Gli Agrumi | Bed and Breakfast Salerno - Università** — Baronissi
   - slug: `b-b-gli-agrumi-bed-and-breakfast-salerno-univers-baronissi`
   - indirizzo: Via Vigna, 84081 Baronissi SA
33. **B&B IL CAVALIERE** — Baronissi
   - slug: `b-b-il-cavaliere-baronissi`
   - indirizzo: Via D. Cirillo, 71, 84081 Baronissi SA
34. **B&B La Casetta Rossa** — Baronissi
   - slug: `b-b-la-casetta-rossa-baronissi`
   - indirizzo: Via Bellini, 27, 84081 Orignano SA
35. **B&B La Tinta** — Baronissi
   - slug: `b-b-la-tinta-baronissi`
   - indirizzo: Via Trinità, 22, 84081 Baronissi SA