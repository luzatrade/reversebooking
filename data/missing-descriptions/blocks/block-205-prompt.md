# Blocco 205/500 — 35 strutture senza descrizione IT

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

1. **Via Mameli 5 Inn** — Bajardo
   - slug: `via-mameli-5-inn-bajardo`
   - indirizzo: Via Goffredo Mameli, 5, 18038 Sanremo IM
2. **Via Palazzo 66 Sanremo Inn GuestHouse** — Bajardo
   - slug: `via-palazzo-66-sanremo-inn-guesthouse-bajardo`
   - indirizzo: Via Palazzo, 66, 18038 Sanremo IM
3. **Agriturismo Brusalino** — Balangero
   - slug: `agriturismo-brusalino-balangero`
   - indirizzo: località brusalino, 43/a, 12056 Mango CN
4. **Agriturismo Carlincarlota Ss Di Voghera Roberta & C.** — Balangero
   - slug: `agriturismo-carlincarlota-ss-di-voghera-roberta-balangero`
   - indirizzo: via Borio, 6, 12052 Neive CN
5. **Agriturismo Cascina Ponchietta** — Balangero
   - slug: `agriturismo-cascina-ponchietta-balangero`
   - indirizzo: Casali Ponchietta, Frazione S. Vito, 17, 12046 Montà CN
6. **Agriturismo Cascina Vignole** — Balangero
   - slug: `agriturismo-cascina-vignole-balangero`
   - indirizzo: Via Vignole, 2, 14014 Montafia AT
7. **Agriturismo Fiorendo** — Balangero
   - slug: `agriturismo-fiorendo-balangero`
   - indirizzo: Via Talucco Alto, 65, 10064 Pinerolo TO
8. **Agriturismo l'Arbo** — Balangero
   - slug: `agriturismo-l-arbo-balangero`
   - indirizzo: Via Bernardino Ferrari, 13816 Sagliano Micca BI
9. **Agriturismo La Chabranda** — Balangero
   - slug: `agriturismo-la-chabranda-balangero`
   - indirizzo: Via Long Erminio, 28, 10063 Pomaretto TO
10. **Agriturismo La Durinera** — Balangero
   - slug: `agriturismo-la-durinera-balangero`
   - indirizzo: Via Torino, 138, 10070 Robassomero TO
11. **Agriturismo La Natura** — Balangero
   - slug: `agriturismo-la-natura-balangero`
   - indirizzo: Via Benne dei Murisenghi, 8, 10060 Scalenghe TO
12. **Agriturismo la Virginia** — Balangero
   - slug: `agriturismo-la-virginia-balangero`
   - indirizzo: Via Valle Po, 70 Frazione Morra San Martino, 12036 Revello CN
13. **Agriturismo nelle Langhe - Il Gelso - appartamenti nella Valle del Barolo** — Balangero
   - slug: `agriturismo-nelle-langhe-il-gelso-appartamenti-n-balangero`
   - indirizzo: Borgata Croera, 34, 12064 La Morra CN
14. **Azienda Agrituristica Sa Mandra** — Balangero
   - slug: `azienda-agrituristica-sa-mandra-balangero`
   - indirizzo: Strada Provinciale 44, 1, 07041 Alghero SS
15. **Cascina Tre Tigli** — Balangero
   - slug: `cascina-tre-tigli-balangero`
   - indirizzo: Frazione Montegrosso, 120, 14010 Asti AT
16. **Hotel Corona Grossa** — Balangero
   - slug: `hotel-corona-grossa-balangero`
   - indirizzo: Stradale Lanzo, 2, 10070 Balangero TO
17. **CASCINA BAMBI** — Baldichieri d'Asti
   - slug: `cascina-bambi-baldichieri-d-asti`
   - indirizzo: Via Castellero, 34, 14011 Baldichieri d'Asti AT
18. **Cascina Lanè** — Baldichieri d'Asti
   - slug: `cascina-lane-baldichieri-d-asti`
   - indirizzo: Via Nazionale, 120, 14011 Baldichieri d'Asti AT
19. **Madama Vigna** — Baldichieri d'Asti
   - slug: `madama-vigna-baldichieri-d-asti`
   - indirizzo: Via Nazionale, 41, 14011 Baldichieri d'Asti AT
20. **Bed and Breakfast Castello di Strambinello** — Baldissero Canavese
   - slug: `bed-and-breakfast-castello-di-strambinello-baldissero-canavese`
   - indirizzo: Via Castello, 1, 10010 Strambinello TO
21. **CasaRosada Wellness-Healing Retreat** — Baldissero Canavese
   - slug: `casarosada-wellness-healing-retreat-baldissero-canavese`
   - indirizzo: Via Camillo Benso Conte di Cavour, 5, 10080 Vidracco TO
22. **Cascina Montiglio** — Baldissero Canavese
   - slug: `cascina-montiglio-baldissero-canavese`
   - indirizzo: Regione Montiglio, 10010 Quagliuzzo TO
23. **Hotel Rivarolo** — Baldissero Canavese
   - slug: `hotel-rivarolo-baldissero-canavese`
   - indirizzo: C.so Indipendenza, 76, 10086 Rivarolo Canavese TO
24. **Sina Villa Matilde** — Baldissero Canavese
   - slug: `sina-villa-matilde-baldissero-canavese`
   - indirizzo: Viale Marconi, 29, 10090 Romano Canavese TO
25. **Villa Soleil | Hotel Ivrea** — Baldissero Canavese
   - slug: `villa-soleil-hotel-ivrea-baldissero-canavese`
   - indirizzo: Via della Cartiera, 13, 10010 Colleretto Giacosa TO
26. **Agriturismo da Mamma** — Baldissero d'Alba
   - slug: `agriturismo-da-mamma-baldissero-d-alba`
   - indirizzo: Strada Scaparoni, 4, 12051 Alba CN
27. **Albergo dell'Agenzia** — Baldissero d'Alba
   - slug: `albergo-dell-agenzia-baldissero-d-alba`
   - indirizzo: Via Fossano, 21, 12042 Pollenzo CN
28. **AliseA Eco Residence** — Baldissero d'Alba
   - slug: `alisea-eco-residence-baldissero-d-alba`
   - indirizzo: Strada della Colla, 2, 12060 Pocapaglia CN
29. **Az. Agr. DEMARIE Giovanni di Demarie Aldo** — Baldissero d'Alba
   - slug: `az-agr-demarie-giovanni-di-demarie-aldo-baldissero-d-alba`
   - indirizzo: Via Castellinaldo, 16, 12040 Vezza d'Alba CN
30. **Casa a Pollenzo** — Baldissero d'Alba
   - slug: `casa-a-pollenzo-baldissero-d-alba`
   - indirizzo: Strada Crociera Burdina, 5, 12060 Pollenzo CN
31. **Casa Clara** — Baldissero d'Alba
   - slug: `casa-clara-baldissero-d-alba`
   - indirizzo: Località Roreto, 7, 12040 Monteu Roero CN
32. **Casa degli Orti** — Baldissero d'Alba
   - slug: `casa-degli-orti-baldissero-d-alba`
   - indirizzo: Strada Orti, 22 L, 12042 Bra CN
33. **Di Vin Roero** — Baldissero d'Alba
   - slug: `di-vin-roero-baldissero-d-alba`
   - indirizzo: Piazza S. Bernardo, 11, 12040 Vezza d'Alba CN
34. **Hotel Albergo Borgo San Martino** — Baldissero d'Alba
   - slug: `hotel-albergo-borgo-san-martino-baldissero-d-alba`
   - indirizzo: Str. Borgo S. Martino, 7, 12060 Macellai CN
35. **Hotel Giardini** — Baldissero d'Alba
   - slug: `hotel-giardini-baldissero-d-alba`
   - indirizzo: P.za XX Settembre, 28, 12042 Bra CN