# Blocco 360/500 — 35 strutture senza descrizione IT

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

1. **Hotel Sicilia - Enna** — Calascibetta
   - slug: `hotel-sicilia-enna-calascibetta`
   - indirizzo: Piazza Napoleone Colajanni, 7, 94100 Enna EN
2. **Sicily Center rooms** — Calascibetta
   - slug: `sicily-center-rooms-calascibetta`
   - indirizzo: Via Annunziata, 53, 94010 Calascibetta EN
3. **Una Casa al Belvedere** — Calascibetta
   - slug: `una-casa-al-belvedere-calascibetta`
   - indirizzo: Piazza Francesco Crispi, 9, 94100 Enna EN
4. **Angeli in Terrazza** — Calascio
   - slug: `angeli-in-terrazza-calascio`
   - indirizzo: Via di Mezzo la Terra, 23, 67020 Calascio AQ
5. **B&B Acca' Lascio** — Calascio
   - slug: `b-b-acca-lascio-calascio`
   - indirizzo: Via Preta Jerta, 10, 67020 Calascio AQ
6. **B&B Il Girasole / CIN: IT066030C2GHMBEQDO** — Calascio
   - slug: `b-b-il-girasole-cin-it066030c2ghmbeqdo-calascio`
   - indirizzo: Via San Cipriano, 3, 67020 Castelvecchio Calvisio AQ
7. **Destasù Bed & Wellness** — Calascio
   - slug: `destasu-bed-wellness-calascio`
   - indirizzo: V.le dei Pini, 73, 67023 Castel del Monte AQ
8. **Palazzo Diamante** — Calascio
   - slug: `palazzo-diamante-calascio`
   - indirizzo: Via Diamante Volpe, 67020 Calascio AQ
9. **Residenza Storica LE CIVETTE** — Calascio
   - slug: `residenza-storica-le-civette-calascio`
   - indirizzo: Via S. Angelo, 7/9, 67023 Castel del Monte AQ
10. **Rocca Calascio - Albergo Diffuso** — Calascio
   - slug: `rocca-calascio-albergo-diffuso-calascio`
   - indirizzo: Localita' Rocca, 67020 Calascio AQ
11. **Sextantio Albergo Diffuso, Santo Stefano di Sessanio** — Calascio
   - slug: `sextantio-albergo-diffuso-santo-stefano-di-sessa-calascio`
   - indirizzo: Via Principe Umberto, 67020 Santo Stefano di Sessanio AQ
12. **Affittacamere Calabisso** — Calasetta
   - slug: `affittacamere-calabisso-calasetta`
   - indirizzo: Via Savoia, 19, 09011 Calasetta CI
13. **B&B "S'Accorru"** — Calasetta
   - slug: `b-b-s-accorru-calasetta`
   - indirizzo: Via Sicilia, 17, 09017 Sant'Antioco CI
14. **B&B Bella Calasetta** — Calasetta
   - slug: `b-b-bella-calasetta-calasetta`
   - indirizzo: Via Giuseppe Mazzini, 67, 09011 Calasetta CI
15. **B&B Ca' Margò** — Calasetta
   - slug: `b-b-ca-margo-calasetta`
   - indirizzo: Piazza Villanova, 34, 09011 Calasetta CI
16. **B&B Four Seasons** — Calasetta
   - slug: `b-b-four-seasons-calasetta`
   - indirizzo: Via Str. Vecchia, 63, 09011 Calasetta CI
17. **B&B Le Tre Spiagge** — Calasetta
   - slug: `b-b-le-tre-spiagge-calasetta`
   - indirizzo: Via Dante, 1, 09011 Calasetta CI
18. **B&B Margherita** — Calasetta
   - slug: `b-b-margherita-calasetta`
   - indirizzo: Via Guglielmo Oberdan, 30, 09011 Calasetta CI
19. **B&B Villa Acquamarina** — Calasetta
   - slug: `b-b-villa-acquamarina-calasetta`
   - indirizzo: Via Bonifacio, 11, 09011 Calasetta CI
20. **Bobo House Calasetta** — Calasetta
   - slug: `bobo-house-calasetta-calasetta`
   - indirizzo: Via Savoia, 42, 09011 Calasetta CI
21. **Calasetta Residence** — Calasetta
   - slug: `calasetta-residence-calasetta`
   - indirizzo: Via delle Rondini, 10, 09011 Calasetta CI
22. **Casa Giulia** — Calasetta
   - slug: `casa-giulia-calasetta`
   - indirizzo: Via Guglielmo Oberdan, 1, 09011 Calasetta CI
23. **Casa vacanza Asfodelo** — Calasetta
   - slug: `casa-vacanza-asfodelo-calasetta`
   - indirizzo: Via N. Sauro, 74, 09011 Calasetta CI
24. **Hotel Cala di Seta Calasetta** — Calasetta
   - slug: `hotel-cala-di-seta-calasetta-calasetta`
   - indirizzo: Viale R. Margherita, 61, 09011 Calasetta CI
25. **Hotel Le Sabbie Calasetta** — Calasetta
   - slug: `hotel-le-sabbie-calasetta-calasetta`
   - indirizzo: Vico Secondo delle Sabbie, 4, 09011 Calasetta CI
26. **Hotel Luci del Faro** — Calasetta
   - slug: `hotel-luci-del-faro-calasetta`
   - indirizzo: Località Spiaggia Grande, 09011 Calasetta CI
27. **Hotel Stella del sud** — Calasetta
   - slug: `hotel-stella-del-sud-calasetta`
   - indirizzo: Loc. Spiaggia grande, 09011 Calasetta CI
28. **I Tre Schen - Albergo Rurale** — Calasetta
   - slug: `i-tre-schen-albergo-rurale-calasetta`
   - indirizzo: Strada Sisineddu, 14, 09011 Calasetta CI
29. **Oasi Blu** — Calasetta
   - slug: `oasi-blu-calasetta`
   - indirizzo: 09011 Calasetta CI
30. **Ristorante 1° Maggio hotel paola** — Calasetta
   - slug: `ristorante-1-maggio-hotel-paola-calasetta`
   - indirizzo: strada Punta, km 2, 09014 Tonnare CI
31. **Antico Borgo Country Hotel** — Calatabiano
   - slug: `antico-borgo-country-hotel-calatabiano`
   - indirizzo: Traversa I Calatabiano Pasteria, 8, 95011 Calatabiano CT
32. **Arcobaleno dell'Etna** — Calatabiano
   - slug: `arcobaleno-dell-etna-calatabiano`
   - indirizzo: Contrada, Via S. Giorgio, 95011 Calatabiano CT
33. **Assinos Palace Hotel** — Calatabiano
   - slug: `assinos-palace-hotel-calatabiano`
   - indirizzo: Via Consolare Valeria, 33, 98035 Giardini Naxos ME
34. **B&B Domus Candida** — Calatabiano
   - slug: `b-b-domus-candida-calatabiano`
   - indirizzo: V. Umberto I, 122, 95011 Calatabiano CT
35. **B&B I Colori Del Sole** — Calatabiano
   - slug: `b-b-i-colori-del-sole-calatabiano`
   - indirizzo: Via Giuseppe La Farina, 15, 95013 Fiumefreddo Sicilia CT