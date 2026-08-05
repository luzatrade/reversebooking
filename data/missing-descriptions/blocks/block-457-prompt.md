# Blocco 457/500 — 35 strutture senza descrizione IT

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

1. **Dimora "De Matera"** — Casali del Manco
   - slug: `dimora-de-matera-casali-del-manco`
   - indirizzo: Via Antonio Serra, 24, 87100 Cosenza CS
2. **Dimora Storica Giostra Vecchia - Palazzo Grisolia 1809** — Casali del Manco
   - slug: `dimora-storica-giostra-vecchia-palazzo-grisolia-casali-del-manco`
   - indirizzo: Via Giostra Vecchia, 2, 87100 Cosenza CS
3. **Hotel Casa del Maestro - Lorica** — Casali del Manco
   - slug: `hotel-casa-del-maestro-lorica-casali-del-manco`
   - indirizzo: Via Nazionale, 14, 87050 Lorica CS
4. **HOTEL PARK 108 - SPA - Centro Benessere - Palestra - Ristorante in Sila** — Casali del Manco
   - slug: `hotel-park-108-spa-centro-benessere-palestra-ris-casali-del-manco`
   - indirizzo: Via Nazionale, 86, 87055 Lorica CS
5. **Hotel Ristorante Aquila & Edelweiss** — Casali del Manco
   - slug: `hotel-ristorante-aquila-edelweiss-casali-del-manco`
   - indirizzo: Via Stazione, 15, 87052 Camigliatello Silano CS
6. **Hotel Ruscello** — Casali del Manco
   - slug: `hotel-ruscello-casali-del-manco`
   - indirizzo: Galleria Cavaliere, 87053 Spezzano della Sila CS
7. **Lorica Suite Lago** — Casali del Manco
   - slug: `lorica-suite-lago-casali-del-manco`
   - indirizzo: SP245, 87059 Lorica CS
8. **LorichiAmo B&b** — Casali del Manco
   - slug: `lorichiamo-b-b-casali-del-manco`
   - indirizzo: Via Nazionale, 62, 87055 Lorica CS
9. **Old Calabria Torre Camigliati** — Casali del Manco
   - slug: `old-calabria-torre-camigliati-casali-del-manco`
   - indirizzo: Via dei Camigliati, 18, 87052 Camigliatello Silano CS
10. **Palazzo Lupinacci Dimora Storica** — Casali del Manco
   - slug: `palazzo-lupinacci-dimora-storica-casali-del-manco`
   - indirizzo: Piazza Tommaso Ortale, 20, 87100 Cosenza CS
11. **Residenza Lorica - Prenota Hotel in Sila, sul lago Arvo - Parco Nazionale della Sila - Ristorante - Pizzeria** — Casali del Manco
   - slug: `residenza-lorica-prenota-hotel-in-sila-sul-lago-casali-del-manco`
   - indirizzo: SS108bis, 87055 Lorica CS
12. **Ristorante Albergo Rifugio Montescuro** — Casali del Manco
   - slug: `ristorante-albergo-rifugio-montescuro-casali-del-manco`
   - indirizzo: V. Valico Montescuro, 87053 Celico CS
13. **Affittacamere Borgocapo** — Casalincontrada
   - slug: `affittacamere-borgocapo-casalincontrada`
   - indirizzo: Via Maiella, 151, 66012 Casalincontrada CH
14. **Agriturismo Ciuccunit** — Casalincontrada
   - slug: `agriturismo-ciuccunit-casalincontrada`
   - indirizzo: Via Alento Strada Conunale, 107, 66012 Casalincontrada CH
15. **CASALE DEL SOLE** — Casalincontrada
   - slug: `casale-del-sole-casalincontrada`
   - indirizzo: Contrada Piano di Coccia, 26, 65020 Rosciano PE
16. **Desy B&B** — Casalincontrada
   - slug: `desy-b-b-casalincontrada`
   - indirizzo: Via dei Vestini, 70/A, 66100 Chieti CH
17. **Le Mirage** — Casalincontrada
   - slug: `le-mirage-casalincontrada`
   - indirizzo: Via dei Vestini, 70b, 66100 Chieti CH
18. **Agriturismo Cascina Graziosa AGMA** — Casalino
   - slug: `agriturismo-cascina-graziosa-agma-casalino`
   - indirizzo: Cascina Graziosa, 1, 28060 Casalino NO
19. **Il Giarolo Bed & Breakfast cameriano casalino novara** — Casalino
   - slug: `il-giarolo-bed-breakfast-cameriano-casalino-nova-casalino`
   - indirizzo: Via Giarolo, 9, 28060 Cameriano NO
20. **Al Torrione - Foresteria** — Casalmaggiore
   - slug: `al-torrione-foresteria-casalmaggiore`
   - indirizzo: Via Vaghi, 13, 26041 Casalmaggiore CR
21. **Albergo Il Gufo** — Casalmaggiore
   - slug: `albergo-il-gufo-casalmaggiore`
   - indirizzo: Str. Chiesa di Roncopascolo, 35, 43126 Parma PR
22. **Alla Curva del Fiume** — Casalmaggiore
   - slug: `alla-curva-del-fiume-casalmaggiore`
   - indirizzo: Strada Del Porto Vecchio, 1, 43017 San Secondo Parmense PR
23. **B&B A Casa Mia** — Casalmaggiore
   - slug: `b-b-a-casa-mia-casalmaggiore`
   - indirizzo: Via Maria Callas, 15, 43122 Parma PR
24. **B&B il Bijou** — Casalmaggiore
   - slug: `b-b-il-bijou-casalmaggiore`
   - indirizzo: Via Azzo Porzio, 59, 26041 Casalmaggiore CR
25. **Castramajora Alloggi** — Casalmaggiore
   - slug: `castramajora-alloggi-casalmaggiore`
   - indirizzo: Via Camillo Benso Conte di Cavour, 52, 26041 Casalmaggiore CR
26. **Green Hotel Di Roberta Di Pastena** — Casalmaggiore
   - slug: `green-hotel-di-roberta-di-pastena-casalmaggiore`
   - indirizzo: Via Parma, 144, 42028 Poviglio RE
27. **Hotel Motel Padus Meublè Parma** — Casalmaggiore
   - slug: `hotel-motel-padus-meuble-parma-casalmaggiore`
   - indirizzo: Piazzale del lavoro, 2, 43018 Trecasali PR
28. **Hotel Trattoria Contini** — Casalmaggiore
   - slug: `hotel-trattoria-contini-casalmaggiore`
   - indirizzo: Via G. Marconi, 85, 43058 Sorbolo PR
29. **TLcafè Hospitality B&B formula** — Casalmaggiore
   - slug: `tlcafe-hospitality-b-b-formula-casalmaggiore`
   - indirizzo: Str. di Mezzo, 5, 43017 San Secondo Parmense PR
30. **Albergo Corvetto Corso Lodi** — Casalmaiocco
   - slug: `albergo-corvetto-corso-lodi-casalmaiocco`
   - indirizzo: Piazzale Luigi Emanuele Corvetto, 05, 20139 Milano MI
31. **B&B B&G Melegnano** — Casalmaiocco
   - slug: `b-b-b-g-melegnano-casalmaiocco`
   - indirizzo: Via Piave, 19, 20077 Melegnano MI
32. **Residence Borromeo Service** — Casalmaiocco
   - slug: `residence-borromeo-service-casalmaiocco`
   - indirizzo: Via Edmondo de Amicis, 6, 20068 Peschiera Borromeo MI
33. **Agriturismo Antica Fornace** — Casalmorano
   - slug: `agriturismo-antica-fornace-casalmorano`
   - indirizzo: Via Bergamo, 9, 26015 Soresina CR
34. **Abbazia** — Casalmoro
   - slug: `abbazia-casalmoro`
   - indirizzo: Via Saverio Bettinelli, 19, 46100 Mantova MN
35. **Affittacamere Ca’ Biscòtt** — Casalmoro
   - slug: `affittacamere-ca-biscott-casalmoro`
   - indirizzo: Via San Cataldo, 97, 46034 Borgo Virgilio MN