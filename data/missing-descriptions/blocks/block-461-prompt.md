# Blocco 461/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo A Veggia Vigna** — Casanova Lerrone
   - slug: `agriturismo-a-veggia-vigna-casanova-lerrone`
   - indirizzo: Borgata Villa, 36, 17033 Garlenda SV
2. **Agriturismo Il Mulino del Castello** — Casanova Lerrone
   - slug: `agriturismo-il-mulino-del-castello-casanova-lerrone`
   - indirizzo: SP6, 67, 17033 Garlenda SV
3. **Agriturismo Le 3 Case** — Casanova Lerrone
   - slug: `agriturismo-le-3-case-casanova-lerrone`
   - indirizzo: Frazione Paravenna, 15, 17033 Garlenda SV
4. **Agriturismo U' Spigu Paravenna - Garlenda** — Casanova Lerrone
   - slug: `agriturismo-u-spigu-paravenna-garlenda-casanova-lerrone`
   - indirizzo: Frazione Paravenna, 14, 17033 Garlenda SV
5. **Borgata Cantone Country House B&B** — Casanova Lerrone
   - slug: `borgata-cantone-country-house-b-b-casanova-lerrone`
   - indirizzo: Borgata Cantone, 15, 17033 Garlenda SV
6. **Borgoameno** — Casanova Lerrone
   - slug: `borgoameno-casanova-lerrone`
   - indirizzo: Via Case Soprane, 2, 17033 Casanova Lerrone SV
7. **VILLA BARCA (Casa Carpe Diem)** — Casanova Lerrone
   - slug: `villa-barca-casa-carpe-diem-casanova-lerrone`
   - indirizzo: Frazione, Via Case Soprane, 25, 17033 Casanova Lerrone SV
8. **B&B Caselle Cascina Della Rocca** — Caselle Torinese
   - slug: `b-b-caselle-cascina-della-rocca-caselle-torinese`
   - indirizzo: Via del Lazzaretto, 10, 10072 Caselle Torinese TO
9. **B&B La Bilancia** — Caselle Torinese
   - slug: `b-b-la-bilancia-caselle-torinese`
   - indirizzo: Via Vernone, 20/D, 10072 Caselle Torinese TO
10. **Hotel Flying** — Caselle Torinese
   - slug: `hotel-flying-caselle-torinese`
   - indirizzo: Via Torino, 34, 10077 San Maurizio Canavese TO
11. **Hotel Niagara** — Caselle Torinese
   - slug: `hotel-niagara-caselle-torinese`
   - indirizzo: Via Carlo, Via C. Cravero, 70, 10072 Caselle Torinese TO
12. **Hotel Ristorante Ruatta** — Caselle Torinese
   - slug: `hotel-ristorante-ruatta-caselle-torinese`
   - indirizzo: via Devietti Goggia 80, Malanghero, San Maurizio Canavese - Caselle, 10077 Malanghero TO
13. **Il Sole caselle apartment B&B Bed & Breakfast** — Caselle Torinese
   - slug: `il-sole-caselle-apartment-b-b-bed-breakfast-caselle-torinese`
   - indirizzo: Via alle Fabbriche, 66, 10072 Caselle Torinese TO
14. **Jet Hotel** — Caselle Torinese
   - slug: `jet-hotel-caselle-torinese`
   - indirizzo: Via della Zecca, 9, 10072 Caselle Torinese TO
15. **La Boheme SMART Hotel** — Caselle Torinese
   - slug: `la-boheme-smart-hotel-caselle-torinese`
   - indirizzo: Str. delle Vallette, 52, 10151 Torino TO
16. **le Ginestre Bed And Breakfast** — Caselle Torinese
   - slug: `le-ginestre-bed-and-breakfast-caselle-torinese`
   - indirizzo: Via Vietta, 5, 10072 Caselle Torinese TO
17. **Max Motel - Art Gallery Room | Suite con Jacuzzi & Camere a Tema** — Caselle Torinese
   - slug: `max-motel-art-gallery-room-suite-con-jacuzzi-cam-caselle-torinese`
   - indirizzo: Viale Giacomo Medici del Vascello, 18, 10040 Druento TO
18. **Residence Mirage** — Caselle Torinese
   - slug: `residence-mirage-caselle-torinese`
   - indirizzo: Via degli Alpini, 1/1/C, 10072 Caselle Torinese TO
19. **ROSA VERDE** — Caselle Torinese
   - slug: `rosa-verde-caselle-torinese`
   - indirizzo: Strada S. Maurizio, 23, 10072 Caselle Torinese TO
20. **Artistic Charming House** — Caserta
   - slug: `artistic-charming-house-caserta`
   - indirizzo: Corso Trieste, 11, 81100 Caserta CE
21. **B & B a Casa di Adele** — Caserta
   - slug: `b-b-a-casa-di-adele-caserta`
   - indirizzo: Viale Alberto Beneduce, 11, 81100 Caserta CE
22. **B&B Roof Garden House** — Caserta
   - slug: `b-b-roof-garden-house-caserta`
   - indirizzo: Corso Trieste, 19, 81100 Caserta CE
23. **B&b Terrazza Filangiò** — Caserta
   - slug: `b-b-terrazza-filangio-caserta`
   - indirizzo: Via Roma, 162, 81100 Caserta CE
24. **B&B Vanvitelli** — Caserta
   - slug: `b-b-vanvitelli-caserta`
   - indirizzo: Via Alessandro de Franciscis, 50, 81100 Caserta CE
25. **Bed And Breakfast - Conte Spencer** — Caserta
   - slug: `bed-and-breakfast-conte-spencer-caserta`
   - indirizzo: Via S. Michele Arcangelo, 15, 81100 Caserta Vecchia CE
26. **Hotel Royal Caserta** — Caserta
   - slug: `hotel-royal-caserta-caserta`
   - indirizzo: Viale Vittorio Veneto, 13, 81020 Caserta CE
27. **Little Sweet Escape** — Caserta
   - slug: `little-sweet-escape-caserta`
   - indirizzo: Via Guglielmo Marconi, 31, 81100 Caserta CE
28. **Real Borbone** — Caserta
   - slug: `real-borbone-caserta`
   - indirizzo: Via A.S. Mazzocchi, 1, 81100 Caserta CE
29. **Sweet Dream** — Caserta
   - slug: `sweet-dream-caserta`
   - indirizzo: Via Roma, 105, 81100 Caserta CE
30. **The Essential** — Caserta
   - slug: `the-essential-caserta`
   - indirizzo: Via Fulvio Renella, 103, 81100 Caserta CE
31. **Alloggi Turistici Daniel** — Casier
   - slug: `alloggi-turistici-daniel-casier`
   - indirizzo: Strada Regionale Treviso-Mare 89, Via Treviso Mare, 4, 31057 Silea TV
32. **Antica Dimora Stucky** — Casier
   - slug: `antica-dimora-stucky-casier`
   - indirizzo: Via Sant'Antonino, 335, 31100 Treviso TV
33. **B&B Ca' Rina** — Casier
   - slug: `b-b-ca-rina-casier`
   - indirizzo: Via Tagliamento, 2F, 31022 Preganziol TV
34. **Civico 26** — Casier
   - slug: `civico-26-casier`
   - indirizzo: V. Nascimben, 26, 31100 Treviso TV
35. **Dafne Bnb** — Casier
   - slug: `dafne-bnb-casier`
   - indirizzo: Via G. Zompini, 4, 31100 Treviso TV