# Blocco 155/500 — 35 strutture senza descrizione IT

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

1. **Casa Vicolo Parco Arpino** — Arpino
   - slug: `casa-vicolo-parco-arpino-arpino`
   - indirizzo: Via Capitano Federico Ciccodicola, 18, 03033 Arpino FR
2. **Hotel Il Cavalier D'Arpino** — Arpino
   - slug: `hotel-il-cavalier-d-arpino-arpino`
   - indirizzo: Via Vittoria Colonna, 21, 03033 Arpino FR
3. **I Giardini Dell'Acropoli** — Arpino
   - slug: `i-giardini-dell-acropoli-arpino`
   - indirizzo: 03033, Via Civitavecchia, 03033 Arpino FR
4. **Il Laureto Srl Societa' Agricola** — Arpino
   - slug: `il-laureto-srl-societa-agricola-arpino`
   - indirizzo: 03033 Colle Carino FR
5. **La Suite di Arpino** — Arpino
   - slug: `la-suite-di-arpino-arpino`
   - indirizzo: Via Marco Agrippa, 24, 03033 Arpino FR
6. **Marco Tullio Cicerone** — Arpino
   - slug: `marco-tullio-cicerone-arpino`
   - indirizzo: Piazza Municipio, 7, 03033 piano secondo FR
7. **Tenuta La Fagiana** — Arpino
   - slug: `tenuta-la-fagiana-arpino`
   - indirizzo: Contrada Vagni, 64, 03033 Arpino FR
8. **Tirotarico Agriturismo** — Arpino
   - slug: `tirotarico-agriturismo-arpino`
   - indirizzo: Via Bartolone, 5, 03033 Arpino FR
9. **Agriturismo Casavecchia dei Sibillini** — Arquata del Tronto
   - slug: `agriturismo-casavecchia-dei-sibillini-arquata-del-tronto`
   - indirizzo: Frazione Abetito Colle, 31, 63094 Montegallo AP
10. **Agriturismo La Valle Dei Bronzetti** — Arquata del Tronto
   - slug: `agriturismo-la-valle-dei-bronzetti-arquata-del-tronto`
   - indirizzo: SP473, 06043 Civita PG
11. **Agriturismo la Valle delle Aquile** — Arquata del Tronto
   - slug: `agriturismo-la-valle-delle-aquile-arquata-del-tronto`
   - indirizzo: Codice CIR: 054035B501015066 Codice CIN: IT054035B501015066, Via del Pian Perduto, snc, 06046 Norcia PG
12. **Agriturismo le Castellare** — Arquata del Tronto
   - slug: `agriturismo-le-castellare-arquata-del-tronto`
   - indirizzo: Colleregnone, 1, 63088 Montemonaco AP
13. **Agriturismo Monte Veletta** — Arquata del Tronto
   - slug: `agriturismo-monte-veletta-arquata-del-tronto`
   - indirizzo: Via Sibilla, 09, 06046 Norcia PG
14. **agriturismo ristorante guerrin meschino** — Arquata del Tronto
   - slug: `agriturismo-ristorante-guerrin-meschino-arquata-del-tronto`
   - indirizzo: Via Del Pian Grande, 1, 06046 Castelluccio PG
15. **B&B Il Castagneto Dei Sibillini** — Arquata del Tronto
   - slug: `b-b-il-castagneto-dei-sibillini-arquata-del-tronto`
   - indirizzo: Frazione Abetito Colle, 111, 63094 Abetito AP
16. **B&B Nonna Pia** — Arquata del Tronto
   - slug: `b-b-nonna-pia-arquata-del-tronto`
   - indirizzo: Frazione Favalanciata, 5, 63095 Favalanciata AP
17. **Locanda De' Senari** — Arquata del Tronto
   - slug: `locanda-de-senari-arquata-del-tronto`
   - indirizzo: 06046 Castelluccio PG
18. **Albergo Il Portico Ristorante Pizzeria** — Arquata Scrivia
   - slug: `albergo-il-portico-ristorante-pizzeria-arquata-scrivia`
   - indirizzo: Via Giancarlo Odino, 83, 15060 Carrosio AL
19. **B&B - La Fortezza di Gavi** — Arquata Scrivia
   - slug: `b-b-la-fortezza-di-gavi-arquata-scrivia`
   - indirizzo: Via Giuseppe Garibaldi, 52, 15066 Gavi AL
20. **B&B DELY** — Arquata Scrivia
   - slug: `b-b-dely-arquata-scrivia`
   - indirizzo: Via Roma, 89, 15061 Arquata Scrivia AL
21. **B&B Villa S. Anna** — Arquata Scrivia
   - slug: `b-b-villa-s-anna-arquata-scrivia`
   - indirizzo: SP144, 23, 15061 Arquata Scrivia AL
22. **Cascina Angela** — Arquata Scrivia
   - slug: `cascina-angela-arquata-scrivia`
   - indirizzo: SP168, 7, 15066 Gavi AL
23. **Cascina degli Ulivi** — Arquata Scrivia
   - slug: `cascina-degli-ulivi-arquata-scrivia`
   - indirizzo: Strada Mazzola, 14, 15067 Novi Ligure AL
24. **Dory's apartment** — Arquata Scrivia
   - slug: `dory-s-apartment-arquata-scrivia`
   - indirizzo: S.da Per Rigoroso, 4, 15061 Arquata Scrivia AL
25. **Hotel Al Castello** — Arquata Scrivia
   - slug: `hotel-al-castello-arquata-scrivia`
   - indirizzo: Piazza Dante Alighieri, 11/R, 15066 Gavi AL
26. **La Pradellina B&B Arquata Scrivia Allevamento Jack Russell Terrier e Australian Cattle Dog** — Arquata Scrivia
   - slug: `la-pradellina-b-b-arquata-scrivia-allevamento-ja-arquata-scrivia`
   - indirizzo: Località Pradella, 67, 15061 Arquata Scrivia AL
27. **Le stanze dei Visconti** — Arquata Scrivia
   - slug: `le-stanze-dei-visconti-arquata-scrivia`
   - indirizzo: Via Cesare Anfosso, 67, 15060 Voltaggio AL
28. **Locanda Del Daino #casadicaccia** — Arquata Scrivia
   - slug: `locanda-del-daino-casadicaccia-arquata-scrivia`
   - indirizzo: Via Oratorio, 33, 15060 Grondona AL
29. **Ostello Voltaggio** — Arquata Scrivia
   - slug: `ostello-voltaggio-arquata-scrivia`
   - indirizzo: Piazza de Ferrari, 1, 15060 Voltaggio AL
30. **ViaBasso11 Guest House** — Arquata Scrivia
   - slug: `viabasso11-guest-house-arquata-scrivia`
   - indirizzo: Via Giacomo Basso, 11, 15067 Novi Ligure AL
31. **Villa Paradiso Charme&Design** — Arquata Scrivia
   - slug: `villa-paradiso-charme-design-arquata-scrivia`
   - indirizzo: Via Moriassi, 75, 15061 Arquata Scrivia AL
32. **Villa Sparina Resort** — Arquata Scrivia
   - slug: `villa-sparina-resort-arquata-scrivia`
   - indirizzo: Frazione Monterotondo, 56, 15066 Gavi AL
33. **Agriturismo Borgo Buzzaccarini Rocca di Castello** — Arqu� Petrarca
   - slug: `agriturismo-borgo-buzzaccarini-rocca-di-castello-arqu-petrarca`
   - indirizzo: Via Marendole, 15, 35043 Monselice PD
34. **Agriturismo Franciscus di Bressanin Fiammetta** — Arqu� Petrarca
   - slug: `agriturismo-franciscus-di-bressanin-fiammetta-arqu-petrarca`
   - indirizzo: Via Valleselle, 16, 35032 Arquà Petrarca PD
35. **Albergo Villa del Poeta - Ristorante Il Canzoniere** — Arqu� Petrarca
   - slug: `albergo-villa-del-poeta-ristorante-il-canzoniere-arqu-petrarca`
   - indirizzo: Via Zane, 5, 35032 Arquà Petrarca PD