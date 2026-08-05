# Blocco 356/500 — 35 strutture senza descrizione IT

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

1. **Il Rifugio Verde** — Caiazzo
   - slug: `il-rifugio-verde-caiazzo`
   - indirizzo: SP247, 11, 81013 Caiazzo CE
2. **Le Piracante Bed&Breakfast** — Caiazzo
   - slug: `le-piracante-bed-breakfast-caiazzo`
   - indirizzo: Via Lavandaio, 27, 81013 Caiazzo CE
3. **LORY'S HOME via valardo n. 6bis Caiazzo (ce)** — Caiazzo
   - slug: `lory-s-home-via-valardo-n-6bis-caiazzo-ce-caiazzo`
   - indirizzo: Via Valardo, 6bis, 81013 Caiazzo CE
4. **Mandevilla Home** — Caiazzo
   - slug: `mandevilla-home-caiazzo`
   - indirizzo: Piazza Porta Vetere, 4, 81013 Caiazzo CE
5. **Santa Lucia B&B** — Caiazzo
   - slug: `santa-lucia-b-b-caiazzo`
   - indirizzo: Via Montegarofalo II, 5, 81013 Santa Lucia CE
6. **Tenuta Pezzapane** — Caiazzo
   - slug: `tenuta-pezzapane-caiazzo`
   - indirizzo: Via Volturno, 4 Via Volturno, 1ª traversa, 1, 81010 Alvignanello CE
7. **Agriturismo Tischlerhof** — Caines/Kuens
   - slug: `agriturismo-tischlerhof-caines-kuens`
   - indirizzo: Via Passo Giovo, 26, 39019 Tirolo BZ
8. **Albergo Sonnbichl** — Caines/Kuens
   - slug: `albergo-sonnbichl-caines-kuens`
   - indirizzo: 39010 Rifiano BZ, Italia
9. **Appartement-Hotel Anthea / Pension Pichler** — Caines/Kuens
   - slug: `appartement-hotel-anthea-pension-pichler-caines-kuens`
   - indirizzo: Via del Seminario, 30, 39019 Tirolo BZ
10. **Berggütl** — Caines/Kuens
   - slug: `berggutl-caines-kuens`
   - indirizzo: Haslachstrasse, 17, 39019 Tirolo BZ
11. **Feldhof Apartments - Chalet** — Caines/Kuens
   - slug: `feldhof-apartments-chalet-caines-kuens`
   - indirizzo: Via Passo Giovo, 10, 39010 Caines BZ
12. **Furggerhof** — Caines/Kuens
   - slug: `furggerhof-caines-kuens`
   - indirizzo: Via del Castello, 5, 39019 Tirolo BZ
13. **Hotel Brunnhofer** — Caines/Kuens
   - slug: `hotel-brunnhofer-caines-kuens`
   - indirizzo: Via Aica, 33, 39019 Tirolo BZ
14. **Hotel Haselried** — Caines/Kuens
   - slug: `hotel-haselried-caines-kuens`
   - indirizzo: Via del Seminario, 28, 39019 Tirolo BZ
15. **Hotel Hofbrunn** — Caines/Kuens
   - slug: `hotel-hofbrunn-caines-kuens`
   - indirizzo: Via Passo Giovo, 14, 39010 Rifiano BZ
16. **Hotel Restaurant Tannerhof** — Caines/Kuens
   - slug: `hotel-restaurant-tannerhof-caines-kuens`
   - indirizzo: Schennastraße 20, 39017 Scena BZ
17. **Hotel Sonnenhof** — Caines/Kuens
   - slug: `hotel-sonnenhof-caines-kuens`
   - indirizzo: Via Caines, 43, 39010 Caines BZ
18. **Hotel Stefanie** — Caines/Kuens
   - slug: `hotel-stefanie-caines-kuens`
   - indirizzo: Via Ling, 30, 39019 Tirolo BZ
19. **Hotel Weger** — Caines/Kuens
   - slug: `hotel-weger-caines-kuens`
   - indirizzo: Via Passo Giovo, 16, 39019 Tirolo BZ
20. **Hotel Zirmerhof** — Caines/Kuens
   - slug: `hotel-zirmerhof-caines-kuens`
   - indirizzo: Via Hohlgasse, 40, 39010 Rifiano BZ
21. **Laimerhof** — Caines/Kuens
   - slug: `laimerhof-caines-kuens`
   - indirizzo: Via Passo Giovo, 82, 39010 Rifiano BZ
22. **Pension Ferienwohnungen St. Corbinian** — Caines/Kuens
   - slug: `pension-ferienwohnungen-st-corbinian-caines-kuens`
   - indirizzo: Via Passo Giovo, 5, 39010 Caines BZ
23. **Pension Schweigkofler** — Caines/Kuens
   - slug: `pension-schweigkofler-caines-kuens`
   - indirizzo: Via Passo Giovo, 23, 39019 Tirolo BZ
24. **Pensione Kleon** — Caines/Kuens
   - slug: `pensione-kleon-caines-kuens`
   - indirizzo: Via Hohlgasse, 10, 39010 Rifiano BZ
25. **Tannerhof Bed & Breakfast** — Caines/Kuens
   - slug: `tannerhof-bed-breakfast-caines-kuens`
   - indirizzo: Via Passo Giovo, 1, 39010 Caines BZ
26. **Tiroler Kreuz Restaurant Hotel Dorf Tirol** — Caines/Kuens
   - slug: `tiroler-kreuz-restaurant-hotel-dorf-tirol-caines-kuens`
   - indirizzo: Haslachstrasse, 117, 39019 Tirolo BZ
27. **Agriturismo Dell'Altopiano Serle** — Caino
   - slug: `agriturismo-dell-altopiano-serle-caino`
   - indirizzo: Via Carnevale, 11, 25080 Serle BS
28. **Agriturismo B&B Caffè e Vino** — Caiolo
   - slug: `agriturismo-b-b-caffe-e-vino-caiolo`
   - indirizzo: Via Roi, 102, 23010 Caiolo SO
29. **Azienda Agrituristica Ribunta'** — Caiolo
   - slug: `azienda-agrituristica-ribunta-caiolo`
   - indirizzo: Località S. Bernardo, 52, 23010 Caiolo SO
30. **Balibà Ride & Relax** — Caiolo
   - slug: `baliba-ride-relax-caiolo`
   - indirizzo: Via Ezio Vanoni, 493, 23012 Castione Andevenno SO
31. **Bed and Breakfast CARUNEI** — Caiolo
   - slug: `bed-and-breakfast-carunei-caiolo`
   - indirizzo: Via Sottomonte, 13, 23020 Poggiridenti SO
32. **Menegola Gabriele - Agriturismo Cavria** — Caiolo
   - slug: `menegola-gabriele-agriturismo-cavria-caiolo`
   - indirizzo: Via Piatta, 1/d, 23012 Castione Andevenno SO
33. **Residenza Sassella** — Caiolo
   - slug: `residenza-sassella-caiolo`
   - indirizzo: Piazza del Santuario, 7, 23100 Sondrio SO
34. **Valtellina Mon Amour** — Caiolo
   - slug: `valtellina-mon-amour-caiolo`
   - indirizzo: Via Fiorenza, 70, 23020 Piateda SO
35. **Hotel Happy Hour** — Cairano
   - slug: `hotel-happy-hour-cairano`
   - indirizzo: Via SS. Ofantina km6 + 300, 83040 Morra De Sanctis AV