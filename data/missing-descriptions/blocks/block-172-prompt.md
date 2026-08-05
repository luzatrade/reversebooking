# Blocco 172/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Domus Otium** — Atena Lucana
   - slug: `agriturismo-domus-otium-atena-lucana`
   - indirizzo: Tempo degli Arnici, 84030 Atena Lucana SA
2. **B&B - Home Holiday Villa Santa Elena** — Atena Lucana
   - slug: `b-b-home-holiday-villa-santa-elena-atena-lucana`
   - indirizzo: Via Valle Maura, 61, 84036 Sala Consilina SA
3. **B&B Adamà-Inbar cooks italian** — Atena Lucana
   - slug: `b-b-adama-inbar-cooks-italian-atena-lucana`
   - indirizzo: Via Stretta della Croce, 84030 Atena Lucana SA
4. **Caffè del Viale** — Atena Lucana
   - slug: `caffe-del-viale-atena-lucana`
   - indirizzo: Viale Kennedy, 5, 84030 Atena Lucana SA
5. **Casa Aurora** — Atena Lucana
   - slug: `casa-aurora-atena-lucana`
   - indirizzo: Vico III Corso S. Nicola, 84030 Atena Lucana SA
6. **Family Center Hotel** — Atena Lucana
   - slug: `family-center-hotel-atena-lucana`
   - indirizzo: Località Sant'Antuono,snc, 84035 Polla SA
7. **Grand Hotel Osman** — Atena Lucana
   - slug: `grand-hotel-osman-atena-lucana`
   - indirizzo: Via Nazionale, 25, 84030 San Giuseppe SA
8. **Hotel - Ristorante Villa Torre Antica** — Atena Lucana
   - slug: `hotel-ristorante-villa-torre-antica-atena-lucana`
   - indirizzo: Via Indipendenza, 32, 84030 Atena Lucana SA
9. **Hotel Antichi Feudi Dimora d'Epoca** — Atena Lucana
   - slug: `hotel-antichi-feudi-dimora-d-epoca-atena-lucana`
   - indirizzo: Str. S. Francesco, 2, 84039 Teggiano SA
10. **Hotel Belvedere** — Atena Lucana
   - slug: `hotel-belvedere-atena-lucana`
   - indirizzo: incrocio, Via del Belvedere, Via Annia, 84035 Polla SA
11. **Hotel Hermitage** — Atena Lucana
   - slug: `hotel-hermitage-atena-lucana`
   - indirizzo: Località Tempio, 41, 84035 Polla SA
12. **Hotel Vallisdea** — Atena Lucana
   - slug: `hotel-vallisdea-atena-lucana`
   - indirizzo: V. San Maria della Misericordia, 84036 Sala Consilina SA
13. **Hotel Villa Venus Resort & Spa** — Atena Lucana
   - slug: `hotel-villa-venus-resort-spa-atena-lucana`
   - indirizzo: Contrada Mascero, 5, 84030 Atena Lucana SA
14. **Kristall Palace Hotel** — Atena Lucana
   - slug: `kristall-palace-hotel-atena-lucana`
   - indirizzo: Svincolo Autostradale, 84030 Atena Lucana SA
15. **Magic Hotel** — Atena Lucana
   - slug: `magic-hotel-atena-lucana`
   - indirizzo: Via Nazionale, 2, 84030 Atena Lucana SA
16. **Motel Forum Srl** — Atena Lucana
   - slug: `motel-forum-srl-atena-lucana`
   - indirizzo: Uscita autostradale SA-RC, 84035 Polla SA
17. **Ristorante Hotel Insteia** — Atena Lucana
   - slug: `ristorante-hotel-insteia-atena-lucana`
   - indirizzo: Via Annia, 2, 84035 Polla SA
18. **Amber Hotel Italy** — Atessa
   - slug: `amber-hotel-italy-atessa`
   - indirizzo: Corso del Popolo, 17, 66020 Villalfonsina CH
19. **B&B Alexander** — Atessa
   - slug: `b-b-alexander-atessa`
   - indirizzo: Piazza Papa Giovanni Paolo I, 66020 Pollutri CH
20. **B&B ex Albergo Centrale Atessa** — Atessa
   - slug: `b-b-ex-albergo-centrale-atessa-atessa`
   - indirizzo: Via Roma, 7, 66041 Atessa CH
21. **B&B La Ciammaruca** — Atessa
   - slug: `b-b-la-ciammaruca-atessa`
   - indirizzo: Via Coste D'uschio, 19, 66020 Pollutri CH
22. **Gaeta Rooms** — Atessa
   - slug: `gaeta-rooms-atessa`
   - indirizzo: Frazione Camicie, 14, 66034 Lanciano CH
23. **Hotel Sangro** — Atessa
   - slug: `hotel-sangro-atessa`
   - indirizzo: V.le Frentano, 97, 66030 Mozzagrogna CH
24. **La Locanda Del Re** — Atessa
   - slug: `la-locanda-del-re-atessa`
   - indirizzo: cda Pallano, 23 cda, Contrada Pallano, 23, 66020 Villalfonsina CH
25. **Ospitati - B&B Sangro** — Atessa
   - slug: `ospitati-b-b-sangro-atessa`
   - indirizzo: Piazza Abruzzo, 1, 66041 Atessa CH
26. **Albergo Diffuso La Castellana Residenza d'epoca** — Atina
   - slug: `albergo-diffuso-la-castellana-residenza-d-epoca-atina`
   - indirizzo: Vicolo Costarella, 41, 03046 San Donato Val di Comino FR
27. **Albergo Sotto le Stelle** — Atina
   - slug: `albergo-sotto-le-stelle-atina`
   - indirizzo: Via Giustino Ferri, 1, 03040 Picinisco FR
28. **Bed & Breakfast Il Feudo** — Atina
   - slug: `bed-breakfast-il-feudo-atina`
   - indirizzo: Via del Feudo, 14, 03030 Pennacchia FR
29. **Fontana Vecchia** — Atina
   - slug: `fontana-vecchia-atina`
   - indirizzo: Via Vecchia Sferracavallo, 1247, 03042 Atina FR
30. **Hotel Des Reves Poggio di Casalucense** — Atina
   - slug: `hotel-des-reves-poggio-di-casalucense-atina`
   - indirizzo: Via Sferracavalli, 3886, 03049 Olivella FR
31. **Hotel Villa Fortuna** — Atina
   - slug: `hotel-villa-fortuna-atina`
   - indirizzo: Via dei Sanniti, 365, 03042 Atina Inferiore FR
32. **Palazzo del Senatore** — Atina
   - slug: `palazzo-del-senatore-atina`
   - indirizzo: Piazza Giuseppe Garibaldi, 16, 03042 Atina FR
33. **Villa Visocchi B&B** — Atina
   - slug: `villa-visocchi-b-b-atina`
   - indirizzo: Via Villa Orrea, 547, 03042 Atina Inferiore FR
34. **A'Scalinatella - Affittacamere** — Atrani
   - slug: `a-scalinatella-affittacamere-atrani`
   - indirizzo: Piazza Umberto I, 5/6, 84010 Amalfi SA
35. **Affittacamere La Piazzetta Di Salice Alfredo** — Atrani
   - slug: `affittacamere-la-piazzetta-di-salice-alfredo-atrani`
   - indirizzo: Salita Rascica, 1, 84011 Amalfi SA