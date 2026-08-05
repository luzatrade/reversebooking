# Blocco 327/500 — 35 strutture senza descrizione IT

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

1. **Ostello della Gioventù Brindisi** — Brindisi
   - slug: `ostello-della-gioventu-brindisi-brindisi`
   - indirizzo: Via Nicola Brandi, 2, 72100 Brindisi BR
2. **Palazzo Virgilio Hotel Brindisi** — Brindisi
   - slug: `palazzo-virgilio-hotel-brindisi-brindisi`
   - indirizzo: Corso Umberto I, 149, 72100 Brindisi BR
3. **PDS Rooms** — Brindisi
   - slug: `pds-rooms-brindisi`
   - indirizzo: Via Bastioni S. Giorgio, 18, 72100 Brindisi BR
4. **B&B Blunotte** — Brindisi Montagna
   - slug: `b-b-blunotte-brindisi-montagna`
   - indirizzo: Via Nicola Vaccaro, 35, 85100 Potenza PZ
5. **B&B Potenza.it** — Brindisi Montagna
   - slug: `b-b-potenza-it-brindisi-montagna`
   - indirizzo: V.le Guglielmo Marconi, 122, 85100 Potenza PZ
6. **Caporella Dimora della via Appia** — Brindisi Montagna
   - slug: `caporella-dimora-della-via-appia-brindisi-montagna`
   - indirizzo: Via Caporella, 28, 85100 Potenza PZ
7. **Il Gelsomino** — Brindisi Montagna
   - slug: `il-gelsomino-brindisi-montagna`
   - indirizzo: Via Regina Margherita, 50, 85010 Castelmezzano PZ
8. **Masseria Straziuso La Vaccariccia** — Brindisi Montagna
   - slug: `masseria-straziuso-la-vaccariccia-brindisi-montagna`
   - indirizzo: SP38, 85010 Contrada Valle della Lamia, PZ
9. **Tourist Hotel** — Brindisi Montagna
   - slug: `tourist-hotel-brindisi-montagna`
   - indirizzo: Via Vescovado, 4, 85100 Potenza PZ
10. **Albergo Sacro Monte Varese** — Brinzio
   - slug: `albergo-sacro-monte-varese-brinzio`
   - indirizzo: Via Bianchi Salvatore, 5, 21100 Varese VA
11. **B&B Palazzo Ronchelli Location per eventi** — Brinzio
   - slug: `b-b-palazzo-ronchelli-location-per-eventi-brinzio`
   - indirizzo: Via Mazzini, 10, 21030 Castello Cabiaglio VA
12. **Agriturismo Cascina Del Castello** — Briona
   - slug: `agriturismo-cascina-del-castello-briona`
   - indirizzo: Via alla Rocca, 4, 28072 Briona NO
13. **Centenario Affittacamere** — Briona
   - slug: `centenario-affittacamere-briona`
   - indirizzo: Via Mazzini, 10, 28073 Fara Novarese NO
14. **Le Fare - Your rooms on the hill** — Briona
   - slug: `le-fare-your-rooms-on-the-hill-briona`
   - indirizzo: Via Stazione, 4, 28073 Fara Novarese NO
15. **Agriturismo Cascina Rossano** — Brione
   - slug: `agriturismo-cascina-rossano-brione`
   - indirizzo: Via Rossano, 2, 25050 Provaglio d'Iseo BS
16. **Agriturismo I Due Angeli** — Brione
   - slug: `agriturismo-i-due-angeli-brione`
   - indirizzo: Via Pianello, 19, 25050 Ome BS
17. **Albergo Meuble Pomaro** — Brione
   - slug: `albergo-meuble-pomaro-brione`
   - indirizzo: Via Staffoli, 2, 25064 Gussago BS
18. **Albergo Rosa S.N.C. Di Sina Michele E C** — Brione
   - slug: `albergo-rosa-s-n-c-di-sina-michele-e-c-brione`
   - indirizzo: Via Roma, 47, 25049 Iseo BS
19. **b&b Ai Bonde** — Brione
   - slug: `b-b-ai-bonde-brione`
   - indirizzo: Via A. Manzoni, 23, 25050 Ome BS
20. **B&B CASA DEL VICOLO** — Brione
   - slug: `b-b-casa-del-vicolo-brione`
   - indirizzo: Vicolo Nas, 10, 25050 Ome BS
21. **B&B la Piazzetta** — Brione
   - slug: `b-b-la-piazzetta-brione`
   - indirizzo: Via Foina, 45, 25040 Monticelli Brusati BS
22. **Corte Martinola Bed & Breakfast in Franciacorta** — Brione
   - slug: `corte-martinola-bed-breakfast-in-franciacorta-brione`
   - indirizzo: Vicolo Martinola, 3, 25050 Ome BS
23. **Hotel Araba Fenice** — Brione
   - slug: `hotel-araba-fenice-brione`
   - indirizzo: Via Caproni, 246, 25049 Pilzone BS
24. **Hotel La Fonte** — Brione
   - slug: `hotel-la-fonte-brione`
   - indirizzo: Via dei Sabbioni, 16, 25050 Ome BS
25. **Hotel Rivalago** — Brione
   - slug: `hotel-rivalago-brione`
   - indirizzo: Via L. Cadorna, 7, 25058 Sulzano BS
26. **Hotel Villa San Giuseppe** — Brione
   - slug: `hotel-villa-san-giuseppe-brione`
   - indirizzo: Via Nobile Osvaldo Fenaroli, 1, 25050 Provaglio d'Iseo BS
27. **Hotel-Ristorante San Michele** — Brione
   - slug: `hotel-ristorante-san-michele-brione`
   - indirizzo: Via S. Michele, 5, 25050 Ome BS
28. **Ome sweet Ome** — Brione
   - slug: `ome-sweet-ome-brione`
   - indirizzo: Via Cerezzata, 19, 25050 Ome BS
29. **Al Vecchio Lavatoio** — Briosco
   - slug: `al-vecchio-lavatoio-briosco`
   - indirizzo: Via Como, 27, 23886 Nava LC
30. **Bala Dream House** — Briosco
   - slug: `bala-dream-house-briosco`
   - indirizzo: Via Alessandro Volta, 2, 20843 Verano Brianza MB
31. **Agriturismo e Cantina La Sabbiona** — Brisighella
   - slug: `agriturismo-e-cantina-la-sabbiona-brisighella`
   - indirizzo: Via di Oriolo, 10, 48018 Faenza RA
32. **Albergo La Meridiana** — Brisighella
   - slug: `albergo-la-meridiana-brisighella`
   - indirizzo: Viale delle Terme, 19, 48013 Brisighella RA
33. **Albergo Ristorante La Rocca** — Brisighella
   - slug: `albergo-ristorante-la-rocca-brisighella`
   - indirizzo: Via delle Volte, 10, 48013 Brisighella RA
34. **Antico Borgo Hotel-Ristorante** — Brisighella
   - slug: `antico-borgo-hotel-ristorante-brisighella`
   - indirizzo: Via Belvedere, 6, 48025 Riolo Terme RA
35. **B&B Portico di Paola** — Brisighella
   - slug: `b-b-portico-di-paola-brisighella`
   - indirizzo: Via Zolle, 27, 48013 Brisighella RA