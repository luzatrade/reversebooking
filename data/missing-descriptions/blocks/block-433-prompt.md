# Blocco 433/500 — 35 strutture senza descrizione IT

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

1. **Hotel Ala** — Carbonera
   - slug: `hotel-ala-carbonera`
   - indirizzo: Via Antonio Scarpa, 20, 31100 Treviso TV
2. **Hotel Aurora** — Carbonera
   - slug: `hotel-aurora-carbonera`
   - indirizzo: Piazzale dell'Ospedale, 23, 31100 Treviso TV
3. **Hotel Due Ragni & Ristorante** — Carbonera
   - slug: `hotel-due-ragni-ristorante-carbonera`
   - indirizzo: Viale G. G. Felissent, 9, 31020 Villorba TV
4. **Hotel Rovere** — Carbonera
   - slug: `hotel-rovere-carbonera`
   - indirizzo: Viale G. G. Felissent, 17, 31100 Treviso TV
5. **Hotel Roy Treviso** — Carbonera
   - slug: `hotel-roy-treviso-carbonera`
   - indirizzo: Via Cendon, 16, 31057 Silea TV
6. **Locanda San Tomaso** — Carbonera
   - slug: `locanda-san-tomaso-carbonera`
   - indirizzo: Viale B. Burchiellati, 5, 31100 Treviso TV
7. **Locazione turistica Ca' Gemma** — Carbonera
   - slug: `locazione-turistica-ca-gemma-carbonera`
   - indirizzo: Via Cal di Breda, 118, 31100 Treviso TV
8. **Palazzina 300** — Carbonera
   - slug: `palazzina-300-carbonera`
   - indirizzo: P.za dei Signori, 8, 31100 Treviso TV
9. **Trevisi27** — Carbonera
   - slug: `trevisi27-carbonera`
   - indirizzo: Vicolo Trevisi, 27, 31100 Treviso TV
10. **"La Pintadera Sarda"** — Carbonia
   - slug: `la-pintadera-sarda-carbonia`
   - indirizzo: Via G. M. Angioi, 4, 09013 Carbonia CI
11. **B&B A casa di Angela** — Carbonia
   - slug: `b-b-a-casa-di-angela-carbonia`
   - indirizzo: Località, Rione Cannas di Sopra, snc, 09013 Carbonia CI
12. **B&B Del Viale** — Carbonia
   - slug: `b-b-del-viale-carbonia`
   - indirizzo: Viale Della Libertà, 1, 09013 Bacu Abis CI
13. **B&B Il Sogno di Mario** — Carbonia
   - slug: `b-b-il-sogno-di-mario-carbonia`
   - indirizzo: Via Lubiana, 186, 09013 Carbonia CI
14. **B&B Le Dune** — Carbonia
   - slug: `b-b-le-dune-carbonia`
   - indirizzo: Via Italia, 303, 09010 Sant'Anna Arresi CI
15. **B&B Luna Blu** — Carbonia
   - slug: `b-b-luna-blu-carbonia`
   - indirizzo: Via Sebastiano Satta, 47, 09013 Carbonia CI
16. **B&B Oasi** — Carbonia
   - slug: `b-b-oasi-carbonia`
   - indirizzo: Via Alessandria, 09013 Bacu Abis CI
17. **B&b Paolo e Daniela** — Carbonia
   - slug: `b-b-paolo-e-daniela-carbonia`
   - indirizzo: Via Sebastiano Satta, 1021, 09013 Carbonia CI
18. **BED and BREAKFAST Domus de Janas** — Carbonia
   - slug: `bed-and-breakfast-domus-de-janas-carbonia`
   - indirizzo: Via Grazia Deledda, 59, 09010 Gonnesa CI
19. **BED AND BREAKFAST IL Nido SANT'ANTIOCO** — Carbonia
   - slug: `bed-and-breakfast-il-nido-sant-antioco-carbonia`
   - indirizzo: Via Nazionale, 110, 09017 Sant'Antioco CI
20. **Beppo's B&B** — Carbonia
   - slug: `beppo-s-b-b-carbonia`
   - indirizzo: Via Sabin, 13, 09013 Carbonia CI
21. **Hotel Monte Sirai** — Carbonia
   - slug: `hotel-monte-sirai-carbonia`
   - indirizzo: Via Nazionale, 84, 09013 Carbonia CI
22. **Hotel Ristorante Aquarius** — Carbonia
   - slug: `hotel-ristorante-aquarius-carbonia`
   - indirizzo: Via Sardegna, 3, 09013 Carbonia CI
23. **Hotel Villaggio Ristorante Pizzeria Museo TANIT** — Carbonia
   - slug: `hotel-villaggio-ristorante-pizzeria-museo-tanit-carbonia`
   - indirizzo: Sp2, Via Pedemontana, Snc, 09013 Sirai CI
24. **L'Aurora Viola** — Carbonia
   - slug: `l-aurora-viola-carbonia`
   - indirizzo: Via Antonio Gramsci, 84, 09013 Carbonia CI
25. **Lu' Hotel - Carbonia** — Carbonia
   - slug: `lu-hotel-carbonia-carbonia`
   - indirizzo: Via Costituente, snc, 09013 Carbonia CI
26. **Nina B&B** — Carbonia
   - slug: `nina-b-b-carbonia`
   - indirizzo: Via Sebastiano Satta, 65, 09013 Carbonia CI
27. **Salvia B&B** — Carbonia
   - slug: `salvia-b-b-carbonia`
   - indirizzo: Via Catania, 20, 09013 Carbonia CI
28. **Tzia Lillina B&B** — Carbonia
   - slug: `tzia-lillina-b-b-carbonia`
   - indirizzo: Via Cesare Battisti, 12, 09016 Iglesias CI
29. **B&B Villa degli Aceri** — Carcare
   - slug: `b-b-villa-degli-aceri-carcare`
   - indirizzo: Largo Don Minzoni, 2, 17043 Carcare SV
30. **Hotel San Marco** — Carcare
   - slug: `hotel-san-marco-carcare`
   - indirizzo: Via Ruggero Leoncavallo, 24, 17100 Savona SV
31. **Casa Alpina Don Guanella** — Carcoforo
   - slug: `casa-alpina-don-guanella-carcoforo`
   - indirizzo: Via Horlovono, 16, 28876 Macugnaga VB
32. **Rifugio Massero** — Carcoforo
   - slug: `rifugio-massero-carcoforo`
   - indirizzo: Localita' Alpe Massero, 13026 Carcoforo VC
33. **A casa di Alfonso Malpensa Airport** — Cardano al Campo
   - slug: `a-casa-di-alfonso-malpensa-airport-cardano-al-campo`
   - indirizzo: Via Ceresio, 10, 21010 Cardano al Campo VA
34. **B&B GRANDSON** — Cardano al Campo
   - slug: `b-b-grandson-cardano-al-campo`
   - indirizzo: Via Falcone e Borsellino, 16, 21010 Cardano Al Campo VA
35. **B&B I fiori di Malpensa** — Cardano al Campo
   - slug: `b-b-i-fiori-di-malpensa-cardano-al-campo`
   - indirizzo: Via Alcide De Gasperi, 7, 21010 Ferno VA