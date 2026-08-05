# Blocco 230/500 — 35 strutture senza descrizione IT

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

1. **Hotel Barzano** — Barzan�
   - slug: `hotel-barzano-barzan`
   - indirizzo: Via Pirovano, 4, 23891 Barzanò LC
2. **Masseria Agrituristica Lama San Giorgio** — Barzan�
   - slug: `masseria-agrituristica-lama-san-giorgio-barzan`
   - indirizzo: SP84, km 8.700, 70018 Rutigliano BA
3. **"Albergo Maggio"** — Barzio
   - slug: `albergo-maggio-barzio`
   - indirizzo: Piazza S. Maria, 20, 23814 Cremeno LC
4. **Albergo Ristorante Esposito** — Barzio
   - slug: `albergo-ristorante-esposito-barzio`
   - indirizzo: Via Francesca Manzoni, 33, 23816 Barzio LC
5. **B&B Rocca di Bajedo** — Barzio
   - slug: `b-b-rocca-di-bajedo-barzio`
   - indirizzo: Via Rocca, 14, 23818 Pasturo LC
6. **B&B Villa Cavallier** — Barzio
   - slug: `b-b-villa-cavallier-barzio`
   - indirizzo: Via Arola, 1, 23816 Barzio LC
7. **Bed and Breakfast La Cà di Sala** — Barzio
   - slug: `bed-and-breakfast-la-ca-di-sala-barzio`
   - indirizzo: Viale Vittorio Veneto, 41, 23832 Margno LC
8. **Bianco Hotel** — Barzio
   - slug: `bianco-hotel-barzio`
   - indirizzo: Via Provinciale, 5, 23819 Primaluna LC
9. **Como's Lake Mountains** — Barzio
   - slug: `como-s-lake-mountains-barzio`
   - indirizzo: Via Noccoli, 5, 23814 Cremeno LC
10. **Foresteria Botton d'oro** — Barzio
   - slug: `foresteria-botton-d-oro-barzio`
   - indirizzo: Via Pagafone, 1, 24030 Fuipiano Valle Imagna BG
11. **Garni Le Grigne** — Barzio
   - slug: `garni-le-grigne-barzio`
   - indirizzo: Via ai Castagneti, 2, 23816 Barzio LC
12. **Hotel Ballestrin** — Barzio
   - slug: `hotel-ballestrin-barzio`
   - indirizzo: Via Coldogna, 1, 23816 Barzio LC
13. **Hotel Centrale** — Barzio
   - slug: `hotel-centrale-barzio`
   - indirizzo: Via Solferino, 11, 23825 Esino Lario LC
14. **Hotel Ristorante Moderno & Spa** — Barzio
   - slug: `hotel-ristorante-moderno-spa-barzio`
   - indirizzo: Via Dante Alighieri, 2, 24030 Fuipiano Valle Imagna BG
15. **Hotel Ristorante Sassi Rossi** — Barzio
   - slug: `hotel-ristorante-sassi-rossi-barzio`
   - indirizzo: SP67, 1, 23832 Crandola Valsassina LC
16. **Hotel Vittoria** — Barzio
   - slug: `hotel-vittoria-barzio`
   - indirizzo: Via Roma, 31, 23816 Barzio LC
17. **Agriturismo Il Vecchio Portico** — Basaluzzo
   - slug: `agriturismo-il-vecchio-portico-basaluzzo`
   - indirizzo: Località San Bernardino, 5, 15060 Capriata d'Orba AL
18. **Agriturismo San Matteo** — Basaluzzo
   - slug: `agriturismo-san-matteo-basaluzzo`
   - indirizzo: Cascina Roma, 15060 Francavilla Bisio AL
19. **Albergo Ristorante Italia** — Basaluzzo
   - slug: `albergo-ristorante-italia-basaluzzo`
   - indirizzo: Via XX Settembre, 28, 15060 Silvano d'Orba AL
20. **B&B Le Strade del Gavi** — Basaluzzo
   - slug: `b-b-le-strade-del-gavi-basaluzzo`
   - indirizzo: VIA 24 MAGGIO, 15060 Francavilla Bisio AL
21. **B&B Pervinca** — Basaluzzo
   - slug: `b-b-pervinca-basaluzzo`
   - indirizzo: Località Schierano, 182, 15078 Rocca Grimalda AL
22. **Bed&Breakfast Ferriera 8** — Basaluzzo
   - slug: `bed-breakfast-ferriera-8-basaluzzo`
   - indirizzo: Via della Ferriera, 8, 15067 Novi Ligure AL
23. **GD Hotels** — Basaluzzo
   - slug: `gd-hotels-basaluzzo`
   - indirizzo: Via Belvedere, 45, 15068 Pozzolo Formigaro AL
24. **L' Aurora** — Basaluzzo
   - slug: `l-aurora-basaluzzo`
   - indirizzo: Via Francesco Crispi, 7, 15067 Novi Ligure AL
25. **MANZONI37** — Basaluzzo
   - slug: `manzoni37-basaluzzo`
   - indirizzo: Via Alessandro Manzoni, 37, 15067 Novi Ligure AL
26. **Passaparola Due Di Giordano Alfredo** — Basaluzzo
   - slug: `passaparola-due-di-giordano-alfredo-basaluzzo`
   - indirizzo: Via Novi, 26, 15060 Basaluzzo AL
27. **Ristorante Hotel Villa Magnolia Predosa** — Basaluzzo
   - slug: `ristorante-hotel-villa-magnolia-predosa-basaluzzo`
   - indirizzo: Via Ovada, 111, 15077 Predosa AL
28. **Villa Capannina** — Basaluzzo
   - slug: `villa-capannina-basaluzzo`
   - indirizzo: Str. Sotto Belvedere, 1, 15067 Novi Ligure AL
29. **Agriturismo Borgo San Francesco** — Bascap�
   - slug: `agriturismo-borgo-san-francesco-bascap`
   - indirizzo: Via Borgo del Majno, 1, 20079 Cascina Colombaia MI
30. **Agriturismo Tenuta Camillo** — Bascap�
   - slug: `agriturismo-tenuta-camillo-bascap`
   - indirizzo: SP159, 27010 Bascapè PV
31. **AN Hotel Milano Melegnano** — Bascap�
   - slug: `an-hotel-milano-melegnano-bascap`
   - indirizzo: Via Don Dossetti 2, 20074 Francolino MI
32. **AN Hotel Milano San Donato** — Bascap�
   - slug: `an-hotel-milano-san-donato-bascap`
   - indirizzo: Via Milano, 2, 20097 San Donato Milanese MI
33. **B&b Rozzano affittacamere** — Bascap�
   - slug: `b-b-rozzano-affittacamere-bascap`
   - indirizzo: Viale Milano, 24, 20089 Rozzano MI
34. **Hotel Majestic** — Bascap�
   - slug: `hotel-majestic-bascap`
   - indirizzo: Viale Lombardia, 48, 20098 Area Industriale MI
35. **Hotel Moonlight** — Bascap�
   - slug: `hotel-moonlight-bascap`
   - indirizzo: Sp40, Km .10700, 27010 Siziano PV