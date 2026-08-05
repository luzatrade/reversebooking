# Blocco 248/500 — 35 strutture senza descrizione IT

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

1. **CAMISI QH** — Bellinzago Lombardo
   - slug: `camisi-qh-bellinzago-lombardo`
   - indirizzo: Via della Orombella, 33, 20040 Cascina Orombella MI
2. **Cascina Cappelletta by Mesa** — Bellinzago Lombardo
   - slug: `cascina-cappelletta-by-mesa-bellinzago-lombardo`
   - indirizzo: Via Roma, 18, 20060 Masate MI
3. **Foresteria Sirio** — Bellinzago Lombardo
   - slug: `foresteria-sirio-bellinzago-lombardo`
   - indirizzo: Via Trento, 19/C, 20064 Gorgonzola MI
4. **Hotel Visconti** — Bellinzago Lombardo
   - slug: `hotel-visconti-bellinzago-lombardo`
   - indirizzo: Via C. Colombo, 3, 20066 Melzo MI
5. **Il Boschetto Societa Agricola Srl** — Bellinzago Lombardo
   - slug: `il-boschetto-societa-agricola-srl-bellinzago-lombardo`
   - indirizzo: Via G. Banfi, 4, 20876 Ornago MB
6. **La casa di Amos** — Bellinzago Lombardo
   - slug: `la-casa-di-amos-bellinzago-lombardo`
   - indirizzo: Via XX Settembre, 19, 20069 Vaprio d'Adda MI
7. **La locanda della Torre** — Bellinzago Lombardo
   - slug: `la-locanda-della-torre-bellinzago-lombardo`
   - indirizzo: Via Vittorio Emanuele, 9, 24040 Filago BG
8. **Società Agricola Oriolo** — Bellinzago Lombardo
   - slug: `societa-agricola-oriolo-bellinzago-lombardo`
   - indirizzo: Via Quattro Vie, 16, 20066 Melzo MI
9. **Agriturismo "La Farazzina"** — Bellinzago Novarese
   - slug: `agriturismo-la-farazzina-bellinzago-novarese`
   - indirizzo: Via Farazzina n.6, 28047 Oleggio NO
10. **Agriturismo Helianthus** — Bellinzago Novarese
   - slug: `agriturismo-helianthus-bellinzago-novarese`
   - indirizzo: Via Vallata Ticino, 7, Via Sant'Eusebio, FRAZ, 28047 LOC NO
11. **B&B Affittacamere Lively** — Bellinzago Novarese
   - slug: `b-b-affittacamere-lively-bellinzago-novarese`
   - indirizzo: Corso Risorgimento, 147/a, 28100 Novara NO
12. **B&B Il Gelsomino** — Bellinzago Novarese
   - slug: `b-b-il-gelsomino-bellinzago-novarese`
   - indirizzo: Via Giuseppe Verdi, 9, 21010 Ferno VA
13. **B&B KB** — Bellinzago Novarese
   - slug: `b-b-kb-bellinzago-novarese`
   - indirizzo: Via Raspagna, 93, 28047 Oleggio NO
14. **B&B London 2010** — Bellinzago Novarese
   - slug: `b-b-london-2010-bellinzago-novarese`
   - indirizzo: Via Don G. Zosi, 1, 21010 Castelnovate VA
15. **B&B Via Mazzini Mxp** — Bellinzago Novarese
   - slug: `b-b-via-mazzini-mxp-bellinzago-novarese`
   - indirizzo: Via Giuseppe Mazzini, 8, 21010 Castelnovate VA
16. **Bed&Breakfast Milano Malpensa 1** — Bellinzago Novarese
   - slug: `bed-breakfast-milano-malpensa-1-bellinzago-novarese`
   - indirizzo: Via Lonate Pozzolo, 1, 20022 Castano Primo MI
17. **La Bottega del Falegname** — Bellinzago Novarese
   - slug: `la-bottega-del-falegname-bellinzago-novarese`
   - indirizzo: Via Repubblica, 20, 20020 Vanzaghello MI
18. **B&B Costa D’Amalfi** — Bellizzi
   - slug: `b-b-costa-d-amalfi-bellizzi`
   - indirizzo: Via Campo Eminente, 14, 84092 Battipaglia SA
19. **B&B Esterina** — Bellizzi
   - slug: `b-b-esterina-bellizzi`
   - indirizzo: 84098 Sant'Antonio SA
20. **B&B La Villetta Salerno Airport** — Bellizzi
   - slug: `b-b-la-villetta-salerno-airport-bellizzi`
   - indirizzo: Via Monte Terminillo, 4, 84090 Pratole SA
21. **B&B The Princess | Vicino Aeroporto Salerno-Costa D'Amalfi** — Bellizzi
   - slug: `b-b-the-princess-vicino-aeroporto-salerno-costa-bellizzi`
   - indirizzo: Via Papa Pio XI, 21, 84090 Bivio-pratole SA
22. **B&B Villa Napoli** — Bellizzi
   - slug: `b-b-villa-napoli-bellizzi`
   - indirizzo: Via Guglielmo Noschese, 7, 84091 Battipaglia SA
23. **Radici 24** — Bellizzi
   - slug: `radici-24-bellizzi`
   - indirizzo: Via Fosso Pioppo, 18Q, 84091 Battipaglia SA
24. **Toc Toc Bed & Breakfast Pontecagnano** — Bellizzi
   - slug: `toc-toc-bed-breakfast-pontecagnano-bellizzi`
   - indirizzo: Corso Umberto I, 113, 84098 Pontecagnano Faiano SA
25. **Villa Ulivi B&B** — Bellizzi
   - slug: `villa-ulivi-b-b-bellizzi`
   - indirizzo: Via Ferdinando Magellano, 147, 84098 Pontecagnano Faiano SA
26. **Voltapensieri** — Bellizzi
   - slug: `voltapensieri-bellizzi`
   - indirizzo: Via Fosso Pioppo, 18, 84091 Battipaglia SA
27. **B&B A CASA DEI NONNI** — Bellona
   - slug: `b-b-a-casa-dei-nonni-bellona`
   - indirizzo: Via Fuori Porta Roma, 66, 81043 Capua CE
28. **B&B Anfiteatro Campano** — Bellona
   - slug: `b-b-anfiteatro-campano-bellona`
   - indirizzo: Via Pietro Mascagni, 14, 81055 Santa Maria Capua Vetere CE
29. **B&B Chapeau** — Bellona
   - slug: `b-b-chapeau-bellona`
   - indirizzo: Via Torrino, 14, 81022 Casagiove CE
30. **B&B CIVICO 152** — Bellona
   - slug: `b-b-civico-152-bellona`
   - indirizzo: Via Nazario Sauro, 152, 81041 Bellona CE
31. **b&b il cavajuolo** — Bellona
   - slug: `b-b-il-cavajuolo-bellona`
   - indirizzo: Via Roma, 81041 Vitulazio CE
32. **B&B Il Vicoletto (Vitulazio)** — Bellona
   - slug: `b-b-il-vicoletto-vitulazio-bellona`
   - indirizzo: Via Roma, 17, vico novara, 1, 81041 Vitulazio CE
33. **B&B Villa Cristina** — Bellona
   - slug: `b-b-villa-cristina-bellona`
   - indirizzo: Strada provinciale 107 II, n 68 B, 81040 Pontelatone CE
34. **B&B White One** — Bellona
   - slug: `b-b-white-one-bellona`
   - indirizzo: Via Parito, 81054 San Prisco CE
35. **Hotel Al Cavallino Bianco-Triflisco** — Bellona
   - slug: `hotel-al-cavallino-bianco-triflisco-bellona`
   - indirizzo: SP333-III, 31, 81041 Triflisco CE