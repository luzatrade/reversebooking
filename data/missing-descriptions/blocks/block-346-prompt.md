# Blocco 346/500 — 35 strutture senza descrizione IT

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

1. **La Bonauda Affittacamere** — Busano
   - slug: `la-bonauda-affittacamere-busano`
   - indirizzo: Frazione Gallenca, 98, 10087 Valperga TO
2. **Agli Alteni** — Busca
   - slug: `agli-alteni-busca`
   - indirizzo: Via Circonvallazione Est, 18/b, 12020 Villafalletto CN
3. **agriturismo le lasarde** — Busca
   - slug: `agriturismo-le-lasarde-busca`
   - indirizzo: Cajot San Bernardo, 1, 12020 Venasca CN
4. **Agriturismo Tetto Garrone** — Busca
   - slug: `agriturismo-tetto-garrone-busca`
   - indirizzo: Via della Campagna, 45, 12100 Roata Rossi CN
5. **Albergo Ristorante La Pineta** — Busca
   - slug: `albergo-ristorante-la-pineta-busca`
   - indirizzo: Piazzale Sant'Anna, 6, 12020 Roccabruna CN
6. **B&B. l'uovo e la faina** — Busca
   - slug: `b-b-l-uovo-e-la-faina-busca`
   - indirizzo: Via Morra S. Giovanni, 119, 12022 Busca CN
7. **Bed & Breakfast Cascina dell' Eco Busca** — Busca
   - slug: `bed-breakfast-cascina-dell-eco-busca-busca`
   - indirizzo: Via Ceresa, 88/E, 12022 Busca CN
8. **Ca' d'Giorgetto Resort** — Busca
   - slug: `ca-d-giorgetto-resort-busca`
   - indirizzo: Via Colonia, 32, 12022 Madonna del Campanile di Busca CN
9. **Casa del Bosco Busca** — Busca
   - slug: `casa-del-bosco-busca-busca`
   - indirizzo: Via Cuneo, 125, 12022 Busca CN
10. **Hotel Antico Podere Propano** — Busca
   - slug: `hotel-antico-podere-propano-busca`
   - indirizzo: Via di Torino, 75, 12037 Saluzzo CN
11. **Il Giramondo** — Busca
   - slug: `il-giramondo-busca`
   - indirizzo: Via Demaria, 5 Fraz. Castelletto, 12022 Busca CN
12. **L Ramassin** — Busca
   - slug: `l-ramassin-busca`
   - indirizzo: Str. S. Martino, 86, 12022 Busca CN
13. **Airport Hotel Malpensa** — Buscate
   - slug: `airport-hotel-malpensa-buscate`
   - indirizzo: Via Luigi Pirandello, 16, 21015 Lonate Pozzolo VA
14. **B&B Il Giardino Nascosto** — Buscate
   - slug: `b-b-il-giardino-nascosto-buscate`
   - indirizzo: Via Goito, 19, 21052 Busto Arsizio VA
15. **B&B La Corte Della Nonna** — Buscate
   - slug: `b-b-la-corte-della-nonna-buscate`
   - indirizzo: Via Camillo Benso Conte di Cavour, 8, 21017 Samarate VA
16. **Il Piccolo Mondo Antico** — Buscate
   - slug: `il-piccolo-mondo-antico-buscate`
   - indirizzo: Via G. Giusti, 24, 21053 Castellanza VA
17. **Savany B&Apartments** — Buscate
   - slug: `savany-b-apartments-buscate`
   - indirizzo: Via Giacomo Puccini, 5, 20010 Buscate MI
18. **St. Gregory B&B** — Buscate
   - slug: `st-gregory-b-b-buscate`
   - indirizzo: Piazza S. Gregorio, 5/6, 21057 Olgiate Olona VA
19. **Addimura - Sicilian Retreat Center** — Buscemi
   - slug: `addimura-sicilian-retreat-center-buscemi`
   - indirizzo: c.da Fontanabotte, 96010 Palazzolo Acreide SR
20. **AURIENZIA ROOMS** — Buscemi
   - slug: `aurienzia-rooms-buscemi`
   - indirizzo: Via Aldo Moro, 78, 97100 Ragusa RG
21. **B&B Anapama** — Buscemi
   - slug: `b-b-anapama-buscemi`
   - indirizzo: Unnamed Road, 96010, 96010 Palazzolo Acreide SR
22. **B&B Terrazzo su Ibla** — Buscemi
   - slug: `b-b-terrazzo-su-ibla-buscemi`
   - indirizzo: via Giuseppe, Via Tenente Giuseppe Schembari, 2, 97100 Ragusa RG
23. **Casa Agorà** — Buscemi
   - slug: `casa-agora-buscemi`
   - indirizzo: Via Nicolò Zocco, 4, 96010 Palazzolo Acreide SR
24. **Dimora di Catullo - Ospitalità di Charme** — Buscemi
   - slug: `dimora-di-catullo-ospitalita-di-charme-buscemi`
   - indirizzo: Via Carlo Alberto, 42/44, 96010 Palazzolo Acreide SR
25. **Joanne B&B** — Buscemi
   - slug: `joanne-b-b-buscemi`
   - indirizzo: Via Messina, 25, 96010 Canicattini Bagni SR
26. **Lues Rooms** — Buscemi
   - slug: `lues-rooms-buscemi`
   - indirizzo: Via dei Sospiri, 6, 97100 Ragusa RG
27. **New Villa Carlotta** — Buscemi
   - slug: `new-villa-carlotta-buscemi`
   - indirizzo: Via Gandhi, 3, 97100 Ragusa RG
28. **Oasi Iblea Affittacamere Bed and Breakfast Casa Vacanze Hotel Ragusa** — Buscemi
   - slug: `oasi-iblea-affittacamere-bed-and-breakfast-casa-buscemi`
   - indirizzo: Corso Italia, 380, 97100 Ragusa RG
29. **RTA Palazzo Judica** — Buscemi
   - slug: `rta-palazzo-judica-buscemi`
   - indirizzo: Ronco Grossi, 10, 96010 Palazzolo Acreide SR
30. **Sud Est B&B** — Buscemi
   - slug: `sud-est-b-b-buscemi`
   - indirizzo: Via Giuliano, 10, 96010 Palazzolo Acreide SR
31. **Agriturismo Baglio Fontana** — Buseto Palizzolo
   - slug: `agriturismo-baglio-fontana-buseto-palizzolo`
   - indirizzo: Via Palermo, 26, 91012 Buseto Palizzolo TP
32. **ALBA MARINA B&B** — Buseto Palizzolo
   - slug: `alba-marina-b-b-buseto-palizzolo`
   - indirizzo: Viale C. Colombo, 139, 91030 Castelluzzo TP
33. **Appartamento Siria Busith** — Buseto Palizzolo
   - slug: `appartamento-siria-busith-buseto-palizzolo`
   - indirizzo: Via Andrea Spada, 92, 91012 Buseto Palizzolo TP
34. **B&B** — Buseto Palizzolo
   - slug: `b-b-buseto-palizzolo`
   - indirizzo: Via Palermo, 62, 91012 Buseto Palizzolo TP
35. **B&B Angela** — Buseto Palizzolo
   - slug: `b-b-angela-buseto-palizzolo`
   - indirizzo: Via Segesta, 65, 91012 Buseto Palizzolo TP