# Blocco 418/500 — 35 strutture senza descrizione IT

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

1. **B&B Stella Marina** — Capo d'Orlando
   - slug: `b-b-stella-marina-capo-d-orlando`
   - indirizzo: Via Trazzera Marina, 296, 98071 Capo d'Orlando ME
2. **Bed and Breakfast Villa Dora** — Capo d'Orlando
   - slug: `bed-and-breakfast-villa-dora-capo-d-orlando`
   - indirizzo: Via Trazzera Marina, 22, 98071 Capo d'Orlando ME
3. **Hotel Santa Lucia Capo d'Orlando** — Capo d'Orlando
   - slug: `hotel-santa-lucia-capo-d-orlando-capo-d-orlando`
   - indirizzo: Via Consolare Antica, 161, 98071 Capo d'Orlando ME
4. **My Dream - Bed And Breakfast e Affitta Camere - Capo d'Orlando** — Capo d'Orlando
   - slug: `my-dream-bed-and-breakfast-e-affitta-camere-capo-capo-d-orlando`
   - indirizzo: Via del Porto, 98071 Capo d'Orlando ME
5. **Qurchiti - Boutique Rooms** — Capo d'Orlando
   - slug: `qurchiti-boutique-rooms-capo-d-orlando`
   - indirizzo: Via Messina, 36, 98071 Capo d'Orlando ME
6. **Testa di Monaco Natural Beach** — Capo d'Orlando
   - slug: `testa-di-monaco-natural-beach-capo-d-orlando`
   - indirizzo: Via Nazionale km 100+400, 98071 Capo d'Orlando ME
7. **Vuelle Residence** — Capo d'Orlando
   - slug: `vuelle-residence-capo-d-orlando`
   - indirizzo: Largo Vittorio Pisani, 10, 98071 Capo d'Orlando ME
8. **Affittacamere Mary** — Capo di Ponte
   - slug: `affittacamere-mary-capo-di-ponte`
   - indirizzo: Via Castello, 9/A, 25050 Rodengo Saiano BS
9. **B&B La Rosa Celtica** — Capo di Ponte
   - slug: `b-b-la-rosa-celtica-capo-di-ponte`
   - indirizzo: Via Colombera, 16, 25044 Capo di Ponte BS
10. **B&B Villa Ca'Praja** — Capo di Ponte
   - slug: `b-b-villa-ca-praja-capo-di-ponte`
   - indirizzo: via per Gianala, località Risech, 1, 38091 Valdaone TN
11. **Casa vacanze Ca del Tita** — Capo di Ponte
   - slug: `casa-vacanze-ca-del-tita-capo-di-ponte`
   - indirizzo: Via Annunciata Cocchetti, 12, 25044 Capo di Ponte BS
12. **I Due Loft** — Capo di Ponte
   - slug: `i-due-loft-capo-di-ponte`
   - indirizzo: Via Piana, 20b, 25040 Nadro BS
13. **La Ca dei Fu** — Capo di Ponte
   - slug: `la-ca-dei-fu-capo-di-ponte`
   - indirizzo: Via Imavilla, 25044 Pescarzo BS
14. **Al Centesimo Chilometro 100: Ristoro del Pellegrino** — Capodimonte
   - slug: `al-centesimo-chilometro-100-ristoro-del-pellegri-capodimonte`
   - indirizzo: Via Asinello, 164, 01027 Montefiascone VT
15. **B&B Monte Tavolino** — Capodimonte
   - slug: `b-b-monte-tavolino-capodimonte`
   - indirizzo: località monte tavolino, 01010 Capodimonte VT
16. **La casa di Bedelia** — Capodimonte
   - slug: `la-casa-di-bedelia-capodimonte`
   - indirizzo: Via dei Pini, 01010 Capodimonte VT
17. **LAKO Hostel** — Capodimonte
   - slug: `lako-hostel-capodimonte`
   - indirizzo: Viale Regina Margherita, 48, 01010 Capodimonte VT
18. **Les Petites Maisons** — Capodimonte
   - slug: `les-petites-maisons-capodimonte`
   - indirizzo: Via Nino Bixio, 21, 01010 Marta VT
19. **Locanda Maddalena - Accoglienza pellegrini - Alloggio turistico** — Capodimonte
   - slug: `locanda-maddalena-accoglienza-pellegrini-alloggi-capodimonte`
   - indirizzo: Via Verentana, 71, 01027 Montefiascone VT
20. **Poggiolindo B&B** — Capodimonte
   - slug: `poggiolindo-b-b-capodimonte`
   - indirizzo: Strada Vicinale, snc, 01010, 01010 Capodimonte VT
21. **Ristorante Hotel Riva blu** — Capodimonte
   - slug: `ristorante-hotel-riva-blu-capodimonte`
   - indirizzo: Viale Regina Margherita, 7, 01010 Capodimonte VT
22. **The Lake** — Capodimonte
   - slug: `the-lake-capodimonte`
   - indirizzo: Viale Regina Margherita, snc, 01010 Capodimonte VT
23. **B&B Alle porte di Caserta** — Capodrise
   - slug: `b-b-alle-porte-di-caserta-capodrise`
   - indirizzo: Via Caduti sul Lavoro, 14, 81022 Casagiove CE
24. **B&B Benny** — Capodrise
   - slug: `b-b-benny-capodrise`
   - indirizzo: Via A. Manzoni, 42, 81020 San Marco Evangelista CE
25. **B&B Le Corti** — Capodrise
   - slug: `b-b-le-corti-capodrise`
   - indirizzo: Via Mantova, 13, 81022 Casagiove CE
26. **B&B San Marco Hotel** — Capodrise
   - slug: `b-b-san-marco-hotel-capodrise`
   - indirizzo: Viale della Libertà, 177, 81020 San Marco Evangelista CE
27. **B&B Tartaglione** — Capodrise
   - slug: `b-b-tartaglione-capodrise`
   - indirizzo: Via Giulio Antonio Acquaviva, 36, 81100 Caserta CE
28. **Carmen's Home Caserta Sud** — Capodrise
   - slug: `carmen-s-home-caserta-sud-capodrise`
   - indirizzo: Piazza Matilde Serao, 9/Scala B1B, interno 3, 81020 San Nicola la Strada CE
29. **Grand Hotel Vanvitelli** — Capodrise
   - slug: `grand-hotel-vanvitelli-capodrise`
   - indirizzo: Viale Carlo III, 81100 San Marco Evangelista CE
30. **home josephine Bed and Breakfast B&B Caserta** — Capodrise
   - slug: `home-josephine-bed-and-breakfast-b-b-caserta-capodrise`
   - indirizzo: Via Fulvio Renella, 107, 81100 Caserta CE
31. **Hotel Novotel Caserta Sud** — Capodrise
   - slug: `hotel-novotel-caserta-sud-capodrise`
   - indirizzo: Ss 87 Sannitica, Km 22 600, 81020 Capodrise CE
32. **Il Tulipano** — Capodrise
   - slug: `il-tulipano-capodrise`
   - indirizzo: Via Clanio, 60, 81025 Marcianise CE
33. **PISANI HOTEL SRL** — Capodrise
   - slug: `pisani-hotel-srl-capodrise`
   - indirizzo: Viale Carlo III, 166, 81020 Caserta CE
34. **Reggia & Dintorni ROOMS a Caserta** — Capodrise
   - slug: `reggia-dintorni-rooms-a-caserta-capodrise`
   - indirizzo: Corso Trieste, 146, 81100 Caserta CE
35. **Stile Raro** — Capodrise
   - slug: `stile-raro-capodrise`
   - indirizzo: Via del Redentore, 14-15, 81100 Caserta CE