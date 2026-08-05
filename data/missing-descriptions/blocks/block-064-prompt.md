# Blocco 64/500 — 35 strutture senza descrizione IT

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

1. **LOCANDA CAVALLO BIANCO** — Albugnano
   - slug: `locanda-cavallo-bianco-albugnano`
   - indirizzo: Via Torino, 94, 14020 Robella AT
2. **Paladino** — Albugnano
   - slug: `paladino-albugnano`
   - indirizzo: Via General Sachero, 9, 10090 Sciolze TO
3. **Agriturismo Cascina Bonpiumazzo** — Albuzzano
   - slug: `agriturismo-cascina-bonpiumazzo-albuzzano`
   - indirizzo: Str. Cascina Bompiumazzo, 250, 27100 Pavia PV
4. **Albergo Leon d'oro** — Albuzzano
   - slug: `albergo-leon-d-oro-albuzzano`
   - indirizzo: Via Nino Bixio, 35, 29015 Castel San Giovanni PC
5. **ArteMista | Ostello e Centro Culturale** — Albuzzano
   - slug: `artemista-ostello-e-centro-culturale-albuzzano`
   - indirizzo: Via Castello, 4, 27010 Spessa PV
6. **B&B Amaca - affitti brevi** — Albuzzano
   - slug: `b-b-amaca-affitti-brevi-albuzzano`
   - indirizzo: Via Alessandro Brambilla, 90, 27100 Pavia PV
7. **B&B Eclipse** — Albuzzano
   - slug: `b-b-eclipse-albuzzano`
   - indirizzo: Via Raffaello Sanzio, 15, 27010 Albuzzano PV
8. **B&B Il Pettirosso** — Albuzzano
   - slug: `b-b-il-pettirosso-albuzzano`
   - indirizzo: Corso Partigiani, 34, 27012 Certosa di Pavia PV
9. **B&B Paola e Francesco miglior prezzo/qualità CIN IT018137C1UV3UL8KZ** — Albuzzano
   - slug: `b-b-paola-e-francesco-miglior-prezzo-qualita-cin-albuzzano`
   - indirizzo: Via Gramsci, 50, 27028 Loc. Bivio Cava, PV
10. **Cascina Marzana** — Albuzzano
   - slug: `cascina-marzana-albuzzano`
   - indirizzo: Cascina Marzana, 27100 Pavia PV
11. **Guest House Maiocchi** — Albuzzano
   - slug: `guest-house-maiocchi-albuzzano`
   - indirizzo: Viale Camillo Golgi, 42, 27100 Pavia PV
12. **Hotel Albergo Ristorante Le Gronde** — Albuzzano
   - slug: `hotel-albergo-ristorante-le-gronde-albuzzano`
   - indirizzo: Via Togliatti, 102, 27051 Mezzana Corti PV
13. **Hotel Cavaliere** — Albuzzano
   - slug: `hotel-cavaliere-albuzzano`
   - indirizzo: Via Felice Cavallotti, 50, 27011 Belgioioso PV
14. **Hotel Certosa** — Albuzzano
   - slug: `hotel-certosa-albuzzano`
   - indirizzo: Via Palmiro Togliatti, 8, 27012 Certosa di Pavia PV
15. **Hotel De La Ville** — Albuzzano
   - slug: `hotel-de-la-ville-albuzzano`
   - indirizzo: Via Ticino, 44, 27021 Bereguardo PV
16. **Hotel Italia** — Albuzzano
   - slug: `hotel-italia-albuzzano`
   - indirizzo: Corso Partigiani, 48, 27012 Certosa di Pavia PV
17. **Hotel Italia** — Albuzzano
   - slug: `hotel-italia-albuzzano-2`
   - indirizzo: Via G. Mazzini, 4, 27049 Stradella PV
18. **Hotel Monumento** — Albuzzano
   - slug: `hotel-monumento-albuzzano`
   - indirizzo: Via Giuseppe Di Vittorio, 29 A 300 METRI DAL MONUMENTO DELLA CERTOSA DI, 27010 Giussago PV
19. **Hotel Motel del Duca** — Albuzzano
   - slug: `hotel-motel-del-duca-albuzzano`
   - indirizzo: Via Togliatti, 115, 27051 Cava Manara PV
20. **Locanda della Stazione** — Albuzzano
   - slug: `locanda-della-stazione-albuzzano`
   - indirizzo: Viale Vittorio Emanuele II, 14, 27100 Pavia PV
21. **LVG Hotel Collection - Riz** — Albuzzano
   - slug: `lvg-hotel-collection-riz-albuzzano`
   - indirizzo: Via dei Longobardi, 3, 27010 San Genesio ed Uniti PV
22. **Pavia Ostello** — Albuzzano
   - slug: `pavia-ostello-albuzzano`
   - indirizzo: Via Brenta, 3, 27100 Pavia PV
23. **Affittacamere Garibaldi** — Alcamo
   - slug: `affittacamere-garibaldi-alcamo`
   - indirizzo: Corso VI Aprile, 165, 91011 Alcamo TP
24. **Albergo La Principessa** — Alcamo
   - slug: `albergo-la-principessa-alcamo`
   - indirizzo: Via Canapè, 5, 91011 Alcamo TP
25. **Alkamuri Posh Hotel & Spa** — Alcamo
   - slug: `alkamuri-posh-hotel-spa-alcamo`
   - indirizzo: Via Madonna del Riposo, 145, 91011 Alcamo TP
26. **B&B Aliva** — Alcamo
   - slug: `b-b-aliva-alcamo`
   - indirizzo: Via Giovanni Amendola, 49, 91011 Alcamo TP
27. **B&B Pelagos** — Alcamo
   - slug: `b-b-pelagos-alcamo`
   - indirizzo: Contrada Intavolata, 100, 91014 Castellammare del Golfo TP
28. **Bed and Breakfast Castellammare del Golfo Crimiso** — Alcamo
   - slug: `bed-and-breakfast-castellammare-del-golfo-crimis-alcamo`
   - indirizzo: Via Rosario Livatino, 30, 91014 Castellammare del Golfo TP
29. **Casale Ginisara - B&B - Agriturismo - Castellammare del golfo** — Alcamo
   - slug: `casale-ginisara-b-b-agriturismo-castellammare-de-alcamo`
   - indirizzo: Contrada Ginisara, 6, 91014 Castellammare del Golfo TP
30. **Ciuri' affittacamere** — Alcamo
   - slug: `ciuri-affittacamere-alcamo`
   - indirizzo: Piazza Falcone e Borsellino, 35, 91011 Alcamo TP
31. **Enny Camere** — Alcamo
   - slug: `enny-camere-alcamo`
   - indirizzo: Via 182 in Contrada Palmeri, 16/b, Contrada S. Gaetano, 16, 91011 Alcamo TP
32. **Hotel Centrale Spa & Relax** — Alcamo
   - slug: `hotel-centrale-spa-relax-alcamo`
   - indirizzo: Via Giovanni Amendola, 24, 91011 Alcamo TP
33. **Hotel La Battigia** — Alcamo
   - slug: `hotel-la-battigia-alcamo`
   - indirizzo: Lungomare La Battigia, 91011 Alcamo Marina TP
34. **Ideal Residence & SPA** — Alcamo
   - slug: `ideal-residence-spa-alcamo`
   - indirizzo: Via Ludovico Ariosto, 22, 91011 Alcamo TP
35. **La Blanca Resort & SPA** — Alcamo
   - slug: `la-blanca-resort-spa-alcamo`
   - indirizzo: Contrada Molinello, 91011 Alcamo TP