# Blocco 479/500 — 35 strutture senza descrizione IT

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

1. **Aléa Rooms** — Condr�
   - slug: `alea-rooms-condr`
   - indirizzo: Via Cosimo di Palma, 9, 73100 Lecce LE
2. **Antiche Volte B&B** — Condr�
   - slug: `antiche-volte-b-b-condr`
   - indirizzo: Via Antonello Coniger, 22, 73100 Lecce LE
3. **B&B Dimi House** — Condr�
   - slug: `b-b-dimi-house-condr`
   - indirizzo: Via Filippo Bacile, 19, 73100 Lecce LE
4. **B&B Il Giardino della Scuncerta** — Condr�
   - slug: `b-b-il-giardino-della-scuncerta-condr`
   - indirizzo: Via Giovanni Andrea Coppola, 38, 73100 Lecce LE
5. **B&B Lecce Mon Amour** — Condr�
   - slug: `b-b-lecce-mon-amour-condr`
   - indirizzo: Via Giuseppe Mantovano, 8, 73100 Lecce LE
6. **B&B Mamma Splendora** — Condr�
   - slug: `b-b-mamma-splendora-condr`
   - indirizzo: Via Guglielmotto D'Otranto, 19, 73100 Lecce LE
7. **B&B Manzoni** — Condr�
   - slug: `b-b-manzoni-condr`
   - indirizzo: 73100 Lecce LE, Italia
8. **B&B Nidi di Feo** — Condr�
   - slug: `b-b-nidi-di-feo-condr`
   - indirizzo: Via Adriatica, 128, 73100 Lecce LE
9. **B&B SALento Garden di Manno Stefano** — Condr�
   - slug: `b-b-salento-garden-di-manno-stefano-condr`
   - indirizzo: Via Vittorio Tondi, 2, 73100 Lecce LE
10. **BnB FICO - B&B - Bed&Breakfast** — Condr�
   - slug: `bnb-fico-b-b-bed-breakfast-condr`
   - indirizzo: Via de Jacobis, 30, 73100 Lecce LE
11. **Dimora dei Salentini B&B** — Condr�
   - slug: `dimora-dei-salentini-b-b-condr`
   - indirizzo: Via di Casanello, 18, 73100 Lecce LE
12. **Distinto Suite & Rooms B&B** — Condr�
   - slug: `distinto-suite-rooms-b-b-condr`
   - indirizzo: Via G. Oberdan, 43, 73100 Lecce LE
13. **Don Nino B&B** — Condr�
   - slug: `don-nino-b-b-condr`
   - indirizzo: Via Giovanni Camillo Palma, 65/A, 73100 Lecce LE
14. **Five Rooms - Dimore Centro Lecce** — Condr�
   - slug: `five-rooms-dimore-centro-lecce-condr`
   - indirizzo: Via Francesco Casotti, 17, 73100 Lecce LE
15. **Hotel Condor Taormina** — Condr�
   - slug: `hotel-condor-taormina-condr`
   - indirizzo: Via Dietro Cappuccini, 25, 98039 Taormina ME
16. **Il Cortile Delle Esperidi B&B** — Condr�
   - slug: `il-cortile-delle-esperidi-b-b-condr`
   - indirizzo: Via g. Candido, 20, 73100 Lecce LE
17. **Lecce House B&B** — Condr�
   - slug: `lecce-house-b-b-condr`
   - indirizzo: Via Michele Saponaro, 9, 73100 Lecce LE
18. **Lu Cuccuviu B&B** — Condr�
   - slug: `lu-cuccuviu-b-b-condr`
   - indirizzo: Via Filippo Corridoni, 7, 73100 Lecce LE
19. **NovantaNove B&B** — Condr�
   - slug: `novantanove-b-b-condr`
   - indirizzo: Via Giuseppe Zanardelli, 99, 73100 Lecce LE
20. **Dimora SIQU** — Contessa Entellina
   - slug: `dimora-siqu-contessa-entellina`
   - indirizzo: Via Camillo Benso Conte di Cavour, 60, 92013 Menfi AG
21. **La Regina di Adrano** — Contessa Entellina
   - slug: `la-regina-di-adrano-contessa-entellina`
   - indirizzo: Contrada Adragna, 92017 Sambuca di Sicilia AG
22. **Marigiò Menfi** — Contessa Entellina
   - slug: `marigio-menfi-contessa-entellina`
   - indirizzo: Via Palermo, 8, 92013 Menfi AG
23. **Villa Salisà - Hotel Lido Fiori - Menfi** — Contessa Entellina
   - slug: `villa-salisa-hotel-lido-fiori-menfi-contessa-entellina`
   - indirizzo: Via Dei Salici, n. 10, 92013 Menfi AG
24. **Agrirelais Principe SPA** — Corleone
   - slug: `agrirelais-principe-spa-corleone`
   - indirizzo: 252Q+68, 90046 Monreale PA
25. **Albergo Belvedere con ristorante e pizzeria** — Corleone
   - slug: `albergo-belvedere-con-ristorante-e-pizzeria-corleone`
   - indirizzo: Viale Scanderbeg, 2, 90082 Santa Cristina Gela PA
26. **Bed & Breakfast e Casa Vacanza Corleone | Cuor di Leone** — Corleone
   - slug: `bed-breakfast-e-casa-vacanza-corleone-cuor-di-le-corleone`
   - indirizzo: Via S. Aldisio, 107, 90034 Corleone PA
27. **Il Gattopardo Bed & Breakfast** — Corleone
   - slug: `il-gattopardo-bed-breakfast-corleone`
   - indirizzo: Via Sant'Agostino, 21, 90034 Corleone PA
28. **L' edera** — Corleone
   - slug: `l-edera-corleone`
   - indirizzo: Via Giovanni Verga, 3, 90034 Corleone PA
29. **Albergo Baglio Santacroce** — Custonaci
   - slug: `albergo-baglio-santacroce-custonaci`
   - indirizzo: S.S. 187, km 12, 300, 91019 Valderice TP
30. **B&B Aurora Custonaci- Bed & Breakfast Custonaci** — Custonaci
   - slug: `b-b-aurora-custonaci-bed-breakfast-custonaci-custonaci`
   - indirizzo: Via la Spezia, 3, 91015 Custonaci TP
31. **B&B Coppola - San Vito Lo Capo** — Custonaci
   - slug: `b-b-coppola-san-vito-lo-capo-custonaci`
   - indirizzo: Via Amba Alagi, 23, 91030 Castelluzzo TP
32. **B&B LA MIA ISOLA** — Custonaci
   - slug: `b-b-la-mia-isola-custonaci`
   - indirizzo: Via Amba Alagi, 157, 91030 Castelluzzo TP
33. **B&B Olea** — Custonaci
   - slug: `b-b-olea-custonaci`
   - indirizzo: Viale C. Colombo, 297, 91030 Castelluzzo TP
34. **Cala Buguto Hotel Ristorante** — Custonaci
   - slug: `cala-buguto-hotel-ristorante-custonaci`
   - indirizzo: Via D/1, 23, 91015 Scurati TP
35. **Catarin** — Custonaci
   - slug: `catarin-custonaci`
   - indirizzo: Via Don Bartolo, 37, 91030 Castelluzzo TP