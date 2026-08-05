# Blocco 32/500 — 35 strutture senza descrizione IT

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

1. **agriturismo "da attilio"** — Agra
   - slug: `agriturismo-da-attilio-agra`
   - indirizzo: Località Marcalone, 28822 Cannobio VB
2. **Agriturismo ristorante Voeuja** — Agra
   - slug: `agriturismo-ristorante-voeuja-agra`
   - indirizzo: Via Longhirolo, 9, 21016 Luino VA
3. **Al Rost B&B** — Agra
   - slug: `al-rost-b-b-agra`
   - indirizzo: Via Dumenza, 64, 21016 Poppino VA
4. **Albergo Maccagno** — Agra
   - slug: `albergo-maccagno-agra`
   - indirizzo: Piazza Vittorio Veneto, 1/3, 21061 Maccagno con Pino e Veddasca VA
5. **Albergo Paradiso** — Agra
   - slug: `albergo-paradiso-agra`
   - indirizzo: Via Giuseppe Verdi, 5A, 21061 Maccagno con Pino e Veddasca VA
6. **B&B Magnolia** — Agra
   - slug: `b-b-magnolia-agra`
   - indirizzo: Via A. Giovanola, 36, 28822 Cannobio VB
7. **B&B Villa Viola** — Agra
   - slug: `b-b-villa-viola-agra`
   - indirizzo: Via Carlo Viola, 1, 21010 Curiglia VA
8. **Fattoria Roccolo** — Agra
   - slug: `fattoria-roccolo-agra`
   - indirizzo: Locolità Roccolo, 1, 21010 Dumenza VA
9. **Foresteria Al Campanile** — Agra
   - slug: `foresteria-al-campanile-agra`
   - indirizzo: Via dei Caduti Piazza della Chiesa, 21010 Curiglia con Monteviasco VA
10. **Garni Viggiona** — Agra
   - slug: `garni-viggiona-agra`
   - indirizzo: Via Verbano, 3, 28826 Viggiona VB
11. **Hotel Elvezia** — Agra
   - slug: `hotel-elvezia-agra`
   - indirizzo: Viale S. Carlo Borromeo, 4, 28822 Cannobio VB
12. **Hotel Montegrino Lakeview** — Agra
   - slug: `hotel-montegrino-lakeview-agra`
   - indirizzo: Via Cadorna, 26, 21010 Montegrino Valtravaglia VA
13. **Hotel Torre Imperiale** — Agra
   - slug: `hotel-torre-imperiale-agra`
   - indirizzo: Piazza Roma, 1, 21061 Maccagno con Pino e Veddasca VA
14. **Hotel Villa Palmira** — Agra
   - slug: `hotel-villa-palmira-agra`
   - indirizzo: Via D. Uccelli, 24, 28822 Cannobio VB
15. **Il Giardino Segreto** — Agra
   - slug: `il-giardino-segreto-agra`
   - indirizzo: CIR 012092-CNI-00001, Via Felice Cavallotti, 34, 21016 Luino VA
16. **Park Hotel Italia** — Agra
   - slug: `park-hotel-italia-agra`
   - indirizzo: Viale delle Magnolie, 19, 28821 Cannero Riviera VB
17. **Residence Eden Rock Cannobio** — Agra
   - slug: `residence-eden-rock-cannobio-agra`
   - indirizzo: 28822 Sant'Agata VB
18. **Residence Villa Margherita** — Agra
   - slug: `residence-villa-margherita-agra`
   - indirizzo: Casali Darbedo, 2, 28822 Cannobio VB
19. **Rifugio Campiglio** — Agra
   - slug: `rifugio-campiglio-agra`
   - indirizzo: Località Alpe Pradecolo, 1, 21010 Dumenza VA
20. **Villa Porta Colmegna** — Agra
   - slug: `villa-porta-colmegna-agra`
   - indirizzo: Via Angelo Palazzi, 1, 21016 Luino VA
21. **Agriturismo Cascina Magana** — Agrate Brianza
   - slug: `agriturismo-cascina-magana-agrate-brianza`
   - indirizzo: Cascina Magana, 2, 20875 Burago di Molgora MB
22. **Agriturismo Galbusera Bianca** — Agrate Brianza
   - slug: `agriturismo-galbusera-bianca-agrate-brianza`
   - indirizzo: Via Galbusera Bianca, 2, 23888 La Valletta Brianza LC
23. **Agriturismo I Gelsi** — Agrate Brianza
   - slug: `agriturismo-i-gelsi-agrate-brianza`
   - indirizzo: Via S. Dionigi, 11, 23870 Cernusco Lombardone LC
24. **Agriturismo La Camilla** — Agrate Brianza
   - slug: `agriturismo-la-camilla-agrate-brianza`
   - indirizzo: Via Dante, 267, 20863 Concorezzo MB
25. **Agriturismo le Giuggiole** — Agrate Brianza
   - slug: `agriturismo-le-giuggiole-agrate-brianza`
   - indirizzo: Str. per Cascina Bragosa, 20042 Pessano con Bornago MI
26. **Azienda Agricola Bio e Agriturismo Brusignone** — Agrate Brianza
   - slug: `azienda-agricola-bio-e-agriturismo-brusignone-agrate-brianza`
   - indirizzo: Via Alcide De Gasperi, 31 20842, 20842 Montesiro MB
27. **B&B Irene ( affittacamere )** — Agrate Brianza
   - slug: `b-b-irene-affittacamere-agrate-brianza`
   - indirizzo: Via Rodolfo Morandi, n°25, 20864 Agrate Brianza MB
28. **beat house&apartments** — Agrate Brianza
   - slug: `beat-house-apartments-agrate-brianza`
   - indirizzo: Via G. Matteotti, 70, 20864 Agrate Brianza MB
29. **Bervius** — Agrate Brianza
   - slug: `bervius-agrate-brianza`
   - indirizzo: Via Paracelso, 26, 20864 Agrate Brianza MB
30. **Cascina Bressanella | Agriturismo | Ortofrutta Km0** — Agrate Brianza
   - slug: `cascina-bressanella-agriturismo-ortofrutta-km0-agrate-brianza`
   - indirizzo: Via della Cascina Selva, 11, 20842 Besana in Brianza MB
31. **Cascina Costa** — Agrate Brianza
   - slug: `cascina-costa-agrate-brianza`
   - indirizzo: località Costa, 12, 23893 Cassago Brianza LC
32. **FondoBrugarolo** — Agrate Brianza
   - slug: `fondobrugarolo-agrate-brianza`
   - indirizzo: Via A Manzoni, 15, 20884 Sulbiate MB
33. **Mercure Milano Agrate Brianza** — Agrate Brianza
   - slug: `mercure-milano-agrate-brianza-agrate-brianza`
   - indirizzo: Via Cardano, 2, 20864 Agrate Brianza MB
34. **Bogogno Golf Resort (Hotel 4 Stelle)** — Agrate Conturbia
   - slug: `bogogno-golf-resort-hotel-4-stelle-agrate-conturbia`
   - indirizzo: Via San Isidoro, 1, 28010 Bogogno NO
35. **Camping Italia Lido** — Agrate Conturbia
   - slug: `camping-italia-lido-agrate-conturbia`
   - indirizzo: Via Cicognola, 104, 28053 Castelletto sopra Ticino NO