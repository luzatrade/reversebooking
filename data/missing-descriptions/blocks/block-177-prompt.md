# Blocco 177/500 — 35 strutture senza descrizione IT

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

1. **Case Vacanze Gli Ulivi** — Aurigo
   - slug: `case-vacanze-gli-ulivi-aurigo`
   - indirizzo: SP24, 18021 Borgomaro IM
2. **Hotel Kristina** — Aurigo
   - slug: `hotel-kristina-aurigo`
   - indirizzo: Via Spianata Borgo Peri, 9, 18100 Imperia IM
3. **Hotel Ristorante La Pineta** — Aurigo
   - slug: `hotel-ristorante-la-pineta-aurigo`
   - indirizzo: Via Torino, 1, 18026 Colle San Bartolomeo IM
4. **Il Poggio di Maro'** — Aurigo
   - slug: `il-poggio-di-maro-aurigo`
   - indirizzo: Regione Poggio, 10, 18010 Badalucco IM
5. **Le Macine del Confluente B. & B.** — Aurigo
   - slug: `le-macine-del-confluente-b-b-aurigo`
   - indirizzo: Loc, Località Oxentina, snc, 18010 Badalucco IM
6. **Secret Gardens B&B** — Aurigo
   - slug: `secret-gardens-b-b-aurigo`
   - indirizzo: 18021 Borgomaro IM
7. **Sul Cammino** — Aurigo
   - slug: `sul-cammino-aurigo`
   - indirizzo: via Ramelli 14, 18024 Dolcedo IM
8. **Villa Desideri Agriturismo Dinoabbo** — Aurigo
   - slug: `villa-desideri-agriturismo-dinoabbo-aurigo`
   - indirizzo: Via roma, regione vissai snc, 18023 Lucinasco IM
9. **A casa di Ada B&B** — Auronzo di Cadore
   - slug: `a-casa-di-ada-b-b-auronzo-di-cadore`
   - indirizzo: Via Noà, 44, 32045 Santo Stefano di Cadore BL
10. **Affittacamere Al Rucksack** — Auronzo di Cadore
   - slug: `affittacamere-al-rucksack-auronzo-di-cadore`
   - indirizzo: Via Prof. Carlo Pais, 16, 32041 Auronzo di Cadore BL
11. **Agriturismo Moiè** — Auronzo di Cadore
   - slug: `agriturismo-moie-auronzo-di-cadore`
   - indirizzo: Via Valgrande, 52, 32040 Padola BL
12. **Albergo Juventus** — Auronzo di Cadore
   - slug: `albergo-juventus-auronzo-di-cadore`
   - indirizzo: Via Padova, 26, 32041 Auronzo di Cadore BL
13. **B&B Abete Bianco** — Auronzo di Cadore
   - slug: `b-b-abete-bianco-auronzo-di-cadore`
   - indirizzo: Via Cima Gogna, 17, 32041 Auronzo di Cadore BL
14. **B&B Al Castel** — Auronzo di Cadore
   - slug: `b-b-al-castel-auronzo-di-cadore`
   - indirizzo: Via Ajarnola, 56, 32040 Padola BL
15. **B&b Campitello 13** — Auronzo di Cadore
   - slug: `b-b-campitello-13-auronzo-di-cadore`
   - indirizzo: Via Campitello, 13, 32040 Campitello BL
16. **B&B Dimora Al Bivacco** — Auronzo di Cadore
   - slug: `b-b-dimora-al-bivacco-auronzo-di-cadore`
   - indirizzo: Via degli Alpini, 56, 32044 Pieve di Cadore BL
17. **B&B Il Bucaneve** — Auronzo di Cadore
   - slug: `b-b-il-bucaneve-auronzo-di-cadore`
   - indirizzo: Via Costa, 17G, 32045 Costalissoio BL
18. **B&b Meuble Bar Giustina** — Auronzo di Cadore
   - slug: `b-b-meuble-bar-giustina-auronzo-di-cadore`
   - indirizzo: Largo Tarin, 5, 32041 Auronzo di Cadore BL
19. **B&B Rossodisera** — Auronzo di Cadore
   - slug: `b-b-rossodisera-auronzo-di-cadore`
   - indirizzo: Via Calvi Pier Fortunato, 15, 32040 Domegge di Cadore BL
20. **B&B Verdi Armonie** — Auronzo di Cadore
   - slug: `b-b-verdi-armonie-auronzo-di-cadore`
   - indirizzo: Via Loreto, 36, 32040 Lozzo di Cadore BL
21. **Bed&Breakfast Bar La Coa** — Auronzo di Cadore
   - slug: `bed-breakfast-bar-la-coa-auronzo-di-cadore`
   - indirizzo: Via Roma, 10, 32041 Auronzo di Cadore BL
22. **Belvedere Alloggio Turistico** — Auronzo di Cadore
   - slug: `belvedere-alloggio-turistico-auronzo-di-cadore`
   - indirizzo: Via Riziò, 20, 32041 Auronzo di Cadore BL
23. **Cadore Haus** — Auronzo di Cadore
   - slug: `cadore-haus-auronzo-di-cadore`
   - indirizzo: Via Saletta, 30, 32041 Auronzo di Cadore BL
24. **Cedavécia Bed & Breakfast** — Auronzo di Cadore
   - slug: `cedavecia-bed-breakfast-auronzo-di-cadore`
   - indirizzo: Via Sala, 2, 32040 Comelico Superiore BL
25. **Fra Rose e Mughi** — Auronzo di Cadore
   - slug: `fra-rose-e-mughi-auronzo-di-cadore`
   - indirizzo: Via Cialoi, 14, 32040 Domegge di Cadore BL
26. **Hotel Auronzo Dolomites, Affiliated by Meliá** — Auronzo di Cadore
   - slug: `hotel-auronzo-dolomites-affiliated-by-melia-auronzo-di-cadore`
   - indirizzo: Via Roma, 30, 32041 Auronzo di Cadore BL
27. **La Culla B&B** — Auronzo di Cadore
   - slug: `la-culla-b-b-auronzo-di-cadore`
   - indirizzo: via ajarnola 48, check-in, Via Valgrande, 54, 32040 Padola BL
28. **Le Crode Auronzo** — Auronzo di Cadore
   - slug: `le-crode-auronzo-auronzo-di-cadore`
   - indirizzo: Via Pier Fortunato Calvi, 3, 32041 Auronzo di Cadore BL
29. **affittacamere il Tulipano beach Formia** — Ausonia
   - slug: `affittacamere-il-tulipano-beach-formia-ausonia`
   - indirizzo: Via Santo Janni Pescinola, 6, 04023 Formia LT
30. **AZIENDA AGRITURISTICA "LA TENUTA DEL FALCO"** — Ausonia
   - slug: `azienda-agrituristica-la-tenuta-del-falco-ausonia`
   - indirizzo: Via Ferdinandi, 1, 03030 Piedimonte San Germano FR
31. **B&B Holiday Formia beach** — Ausonia
   - slug: `b-b-holiday-formia-beach-ausonia`
   - indirizzo: Via Santo Janni Pescinola, 8, 04023 Formia LT
32. **B&B Le Terrazze** — Ausonia
   - slug: `b-b-le-terrazze-ausonia`
   - indirizzo: Via Appia Lato Napoli, 305, 04023 Formia LT
33. **B&B Maison Civico 13** — Ausonia
   - slug: `b-b-maison-civico-13-ausonia`
   - indirizzo: Via Provinciale, 13, 03040 Ausonia FR
34. **B&B Nonna Elvira** — Ausonia
   - slug: `b-b-nonna-elvira-ausonia`
   - indirizzo: Via Carlo Pisacane, 04021 Castelforte LT
35. **Bed & Breakfast Casa Fratelli Castelli** — Ausonia
   - slug: `bed-breakfast-casa-fratelli-castelli-ausonia`
   - indirizzo: Piazza G. Galilei, 4, 03040 Ausonia FR