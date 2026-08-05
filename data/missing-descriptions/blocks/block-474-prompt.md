# Blocco 474/500 — 35 strutture senza descrizione IT

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

1. **B&B civico 51** — Castroreale
   - slug: `b-b-civico-51-castroreale`
   - indirizzo: Corso Palmiro Togliatti, 51 A, 98044 Cattafi ME
2. **B&B Le 2 Cantine** — Castroreale
   - slug: `b-b-le-2-cantine-castroreale`
   - indirizzo: Via S. Pietro, 9, 98053 Castroreale ME
3. **B&B Màkari holiday home** — Castroreale
   - slug: `b-b-makari-holiday-home-castroreale`
   - indirizzo: Via Catili, 105, 98051 Barcellona Pozzo di Gotto ME
4. **B&b Nuovo Borgo** — Castroreale
   - slug: `b-b-nuovo-borgo-castroreale`
   - indirizzo: Corso Cavour, 5, 98060 Campogrande ME
5. **La casa di Maria** — Castroreale
   - slug: `la-casa-di-maria-castroreale`
   - indirizzo: Corso Umberto I, 16, 98053 Castroreale ME
6. **La Casetta B&B** — Castroreale
   - slug: `la-casetta-b-b-castroreale`
   - indirizzo: Via Piave, 35, 98057 Milazzo ME
7. **Shining Moon** — Castroreale
   - slug: `shining-moon-castroreale`
   - indirizzo: Via Granaro, 2, 98059 Rodì Milici ME
8. **Altavilla Boutique Hotel Catanzaro** — Catanzaro
   - slug: `altavilla-boutique-hotel-catanzaro-catanzaro`
   - indirizzo: Via Italia, 33, 88100 Catanzaro CZ
9. **Area 19 - Bar Apartments** — Catanzaro
   - slug: `area-19-bar-apartments-catanzaro`
   - indirizzo: Viale Vincenzo de Filippis, 109, 88100 Catanzaro CZ
10. **Benny Hotel** — Catanzaro
   - slug: `benny-hotel-catanzaro`
   - indirizzo: Via Gioacchino da Fiore, 2, 88100 Catanzaro CZ
11. **San Giovanni Apartment - Guest House** — Catanzaro
   - slug: `san-giovanni-apartment-guest-house-catanzaro`
   - indirizzo: Via S. Giorgio, n12, 88100 Catanzaro CZ
12. **B&B del Casale Valenti** — Catenanuova
   - slug: `b-b-del-casale-valenti-catenanuova`
   - indirizzo: Via Milano, 36, 94010 Catenanuova EN
13. **Beb Il Viandante di Edoardo Daidone** — Catenanuova
   - slug: `beb-il-viandante-di-edoardo-daidone-catenanuova`
   - indirizzo: Via Alessandro Manzoni, 54/A, 94010 Catenanuova EN
14. **SIVillage** — Catenanuova
   - slug: `sivillage-catenanuova`
   - indirizzo: Contrada Agnelleria, 95032 Belpasso CT
15. **B&b A due Passi dal sole** — Cattolica Eraclea
   - slug: `b-b-a-due-passi-dal-sole-cattolica-eraclea`
   - indirizzo: Via dei Giardini, 9/A, 92014 Porto Empedocle AG
16. **B&B A Robba de Pupi** — Cattolica Eraclea
   - slug: `b-b-a-robba-de-pupi-cattolica-eraclea`
   - indirizzo: CDA Inficherna, 2, 92100 Agrigento AG
17. **B&B a Siculiana - Santa Lucia al Mare** — Cattolica Eraclea
   - slug: `b-b-a-siculiana-santa-lucia-al-mare-cattolica-eraclea`
   - indirizzo: Via Fontanelle, 2, 92010 Siculiana AG
18. **B&B Don Angelo Miramare** — Cattolica Eraclea
   - slug: `b-b-don-angelo-miramare-cattolica-eraclea`
   - indirizzo: Via Miramare, 15, 92010 Realmonte AG
19. **B&B Figli dei Fiori da Leo e Ginella** — Cattolica Eraclea
   - slug: `b-b-figli-dei-fiori-da-leo-e-ginella-cattolica-eraclea`
   - indirizzo: Via Stazione, 22, 92010 Realmonte AG
20. **B&B in residence...a due passi dalla scala dei turchi** — Cattolica Eraclea
   - slug: `b-b-in-residence-a-due-passi-dalla-scala-dei-tur-cattolica-eraclea`
   - indirizzo: Via dei Pini, 1, 92014 Porto Empedocle AG
21. **B&B Le Mangiatoie Del Cavaliere** — Cattolica Eraclea
   - slug: `b-b-le-mangiatoie-del-cavaliere-cattolica-eraclea`
   - indirizzo: Via Piemonte, 15, 92010 Montallegro AG
22. **B&B Mammaliturchi** — Cattolica Eraclea
   - slug: `b-b-mammaliturchi-cattolica-eraclea`
   - indirizzo: Via Linosa, 8, 92010 Realmonte AG
23. **B&B MarìSicilia** — Cattolica Eraclea
   - slug: `b-b-marisicilia-cattolica-eraclea`
   - indirizzo: Via Gardenie, 7, 92014 Porto Empedocle AG
24. **Bed & Breakfast Eraclea Minoa Mare** — Cattolica Eraclea
   - slug: `bed-breakfast-eraclea-minoa-mare-cattolica-eraclea`
   - indirizzo: Viale Eracle, 6, 92011 Eraclea Minoa AG
25. **Bed and Breakfast La Torre** — Cattolica Eraclea
   - slug: `bed-and-breakfast-la-torre-cattolica-eraclea`
   - indirizzo: Via Pergola, 1, 92010 Realmonte AG
26. **Eraclea Minoa Village S.R.L.** — Cattolica Eraclea
   - slug: `eraclea-minoa-village-s-r-l-cattolica-eraclea`
   - indirizzo: Viale Eracle, 2, 92011 Eraclea Minoa AG
27. **LUMIE DI SICILIA** — Cattolica Eraclea
   - slug: `lumie-di-sicilia-cattolica-eraclea`
   - indirizzo: Via Platani PIANO, TERRA, 92014 Porto Empedocle AG
28. **Scaturchi** — Cattolica Eraclea
   - slug: `scaturchi-cattolica-eraclea`
   - indirizzo: Via Linosa, 92010 Punta Grande AG
29. **Torre Letus** — Cattolica Eraclea
   - slug: `torre-letus-cattolica-eraclea`
   - indirizzo: Via Volturno, 2, 92010 Montallegro AG
30. **Villa Maria Sofia scala dei turchi Realmonte Agrigento** — Cattolica Eraclea
   - slug: `villa-maria-sofia-scala-dei-turchi-realmonte-agr-cattolica-eraclea`
   - indirizzo: SP68, 169, 92010 Realmonte AG
31. **Amber Hotel - Cebu** — Cebu
   - slug: `amber-hotel-cebu-cebu`
   - indirizzo: Don Julio Llorente St, Cebu City, 6000 Cebu
32. **Bayfront Hotel Cebu - Capitol Site** — Cebu
   - slug: `bayfront-hotel-cebu-capitol-site-cebu`
   - indirizzo: M.P. Yap, Corner F. Ramos Ext, Cebu City, 6000 Cebu
33. **Cebu Parklane International Hotel** — Cebu
   - slug: `cebu-parklane-international-hotel-cebu`
   - indirizzo: N Escario St, Cebu City, 6000 Cebu
34. **Cebu R Hotel** — Cebu
   - slug: `cebu-r-hotel-cebu`
   - indirizzo: 101 Don Mariano Cui St, Cebu City, 6000 Cebu
35. **Crown Regency Hotel & Towers** — Cebu
   - slug: `crown-regency-hotel-towers-cebu`
   - indirizzo: Osmeña Blvd, Cebu City, 6000 Cebu