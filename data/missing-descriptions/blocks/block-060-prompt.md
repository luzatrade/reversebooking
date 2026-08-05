# Blocco 60/500 — 35 strutture senza descrizione IT

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

1. **BORGO CAPRARI -affittacamere-** — Albinea
   - slug: `borgo-caprari-affittacamere-albinea`
   - indirizzo: Via Crostolo, 1, 42020 Albinea RE
2. **CASA EMILIA B&B Albinea** — Albinea
   - slug: `casa-emilia-b-b-albinea-albinea`
   - indirizzo: Via Giuseppe Garibaldi, 31/1, 42020 Albinea RE
3. **Casale Hortensia Hospitalite de Charme** — Albinea
   - slug: `casale-hortensia-hospitalite-de-charme-albinea`
   - indirizzo: Via Eduardo de Filippo, 16, 42123 Il Capriolo RE
4. **Hotel Europa** — Albinea
   - slug: `hotel-europa-albinea`
   - indirizzo: Viale Olimpia, 2, 42122 Reggio Emilia RE
5. **Hotel Italia** — Albinea
   - slug: `hotel-italia-albinea`
   - indirizzo: Via Bligny, 26, 42124 Reggio Emilia RE
6. **Hotel Parco Fola** — Albinea
   - slug: `hotel-parco-fola-albinea`
   - indirizzo: Via Giuseppe Garibaldi, 17, 42020 Albinea RE
7. **La casa nel bosco** — Albinea
   - slug: `la-casa-nel-bosco-albinea`
   - indirizzo: Via Cà Signori, 26, 42019 Scandiano RE
8. **La Maison Deux** — Albinea
   - slug: `la-maison-deux-albinea`
   - indirizzo: Via G. Matteotti, 2, 42020 Albinea RE
9. **Locanda Sant'Ambrogio** — Albinea
   - slug: `locanda-sant-ambrogio-albinea`
   - indirizzo: Via della Tibbia, 2/1, 42123 Reggio nell'Emilia RE
10. **Parco di Montebello** — Albinea
   - slug: `parco-di-montebello-albinea`
   - indirizzo: Via Fosse Ardeatine, 1, 42020 Quattro Castella RE
11. **Relais Roncolo 1888, an SLH Hotel** — Albinea
   - slug: `relais-roncolo-1888-an-slh-hotel-albinea`
   - indirizzo: Tenuta di Roncolo (Venturini Baldini, Via Filippo Turati, 42, 42020 Quattro Castella RE
12. **VERDENOCE Agriturismo** — Albinea
   - slug: `verdenoce-agriturismo-albinea`
   - indirizzo: Via Venturi, 9, 42020 Albinea RE
13. **Albergo ristorante - Valle D' Oro** — Albino
   - slug: `albergo-ristorante-valle-d-oro-albino`
   - indirizzo: Via Provinciale, 68, 24021 Albino BG
14. **B&B Casa Dolce Casa** — Albino
   - slug: `b-b-casa-dolce-casa-albino`
   - indirizzo: Via Grimoldo, 222, 24013 Oltre il Colle BG
15. **B&B Casaviva** — Albino
   - slug: `b-b-casaviva-albino`
   - indirizzo: Via Provinciale, 41, 24021 Albino BG
16. **Bed and Breakfast Il Ghiro** — Albino
   - slug: `bed-and-breakfast-il-ghiro-albino`
   - indirizzo: Via Poggio Ama, 14, 24020 Selvino BG
17. **Bed And Breakfast Montino** — Albino
   - slug: `bed-and-breakfast-montino-albino`
   - indirizzo: Via Campione, 18, 24020 Cene BG
18. **Bergamo BnB** — Albino
   - slug: `bergamo-bnb-albino`
   - indirizzo: Via Pradelli, 14, 24020 Villa di Serio BG
19. **Cà di Bonecc** — Albino
   - slug: `ca-di-bonecc-albino`
   - indirizzo: Via Piazzo, 1 C, 24021 Albino BG
20. **Casa vacanze Nonna ITA** — Albino
   - slug: `casa-vacanze-nonna-ita-albino`
   - indirizzo: Via Loverini, 6, 24021 Albino BG
21. **Hotel** — Albino
   - slug: `hotel-albino`
   - indirizzo: Via Ripa, 12, 24021 Albino BG
22. **La Ripa Boutique Hotel** — Albino
   - slug: `la-ripa-boutique-hotel-albino`
   - indirizzo: Via Ripa, 8, 24021 Albino BG
23. **Montecura Accoglienza e Ospitalità** — Albino
   - slug: `montecura-accoglienza-e-ospitalita-albino`
   - indirizzo: Via Monte Cura, 6, 24021 Albino BG
24. **Albergo Ristorante Michieletto** — Albiolo
   - slug: `albergo-ristorante-michieletto-albiolo`
   - indirizzo: Via Roma, 1312, 22070 Valmorea CO
25. **B&B Casa Ceruti** — Albiolo
   - slug: `b-b-casa-ceruti-albiolo`
   - indirizzo: Via Papa Giovanni XXIII, 4, 22079 Villa Guardia CO
26. **B&B Casa Charlie** — Albiolo
   - slug: `b-b-casa-charlie-albiolo`
   - indirizzo: Via Baggiolini Don Marco, 4, 21051 Arcisate VA
27. **B&B Fior di Campo** — Albiolo
   - slug: `b-b-fior-di-campo-albiolo`
   - indirizzo: Via Cartiera, 2, 22029 Uggiate con Ronago CO
28. **B&B Villa Verde Uggiate** — Albiolo
   - slug: `b-b-villa-verde-uggiate-albiolo`
   - indirizzo: Via Mulini, 40, 22029 Mulini CO
29. **Bar Ristorante Gonzaga Hotel** — Albiolo
   - slug: `bar-ristorante-gonzaga-hotel-albiolo`
   - indirizzo: Via dei Biancospini, 2, 21050 Gaggiolo VA
30. **Bis Hotel Varese** — Albiolo
   - slug: `bis-hotel-varese-albiolo`
   - indirizzo: Via Franco Ossola, 21100 Varese VA
31. **Ca' Rosa B&B** — Albiolo
   - slug: `ca-rosa-b-b-albiolo`
   - indirizzo: Via Ischia, 9, 21046 Malnate VA
32. **Casale al Foino** — Albiolo
   - slug: `casale-al-foino-albiolo`
   - indirizzo: Via Arturo Ferrarin, 34, 21056 Induno Olona VA
33. **Il Faggio Rosso** — Albiolo
   - slug: `il-faggio-rosso-albiolo`
   - indirizzo: Via Camillo Benso Conte di Cavour, 21B, 22070 Albiolo CO
34. **Impero Hotel** — Albiolo
   - slug: `impero-hotel-albiolo`
   - indirizzo: Via dei Bucaneve, 1, 21050 Gaggiolo VA
35. **La Casa sui Campi B&B** — Albiolo
   - slug: `la-casa-sui-campi-b-b-albiolo`
   - indirizzo: Via Monte Rosa, 27, 22043 Solbiate con Cagno CO