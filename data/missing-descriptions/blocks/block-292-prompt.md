# Blocco 292/500 — 35 strutture senza descrizione IT

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

1. **Appartamenti Nica e Diego - Nica Sas** — Borca di Cadore
   - slug: `appartamenti-nica-e-diego-nica-sas-borca-di-cadore`
   - indirizzo: Via Olivo Sala, 106B, 32040 Borca di Cadore BL
2. **Baita Deona** — Borca di Cadore
   - slug: `baita-deona-borca-di-cadore`
   - indirizzo: Passo Cibiana, Via Pianezze, 61, 32040 Cibiana di Cadore BL
3. **Borca di Cadore** — Borca di Cadore
   - slug: `borca-di-cadore-borca-di-cadore`
   - indirizzo: Viale della Stazione, 14, 32040 Cancia BL
4. **Chalet Al Lago** — Borca di Cadore
   - slug: `chalet-al-lago-borca-di-cadore`
   - indirizzo: Via al Lago, 73, 32046 San Vito di Cadore BL
5. **Dolomiti Lodge ristorante Villa Gaia** — Borca di Cadore
   - slug: `dolomiti-lodge-ristorante-villa-gaia-borca-di-cadore`
   - indirizzo: Via della Stazione, 13, 32040 Venas di Cadore BL
6. **Dolomiti Sport Hotel** — Borca di Cadore
   - slug: `dolomiti-sport-hotel-borca-di-cadore`
   - indirizzo: V. Roma, 33, 32046 San Vito di Cadore BL
7. **HG Casa Montana - Guest House** — Borca di Cadore
   - slug: `hg-casa-montana-guest-house-borca-di-cadore`
   - indirizzo: Via Costa, 9, 32046 San Vito di Cadore BL
8. **Hotel "Il Cardo"** — Borca di Cadore
   - slug: `hotel-il-cardo-borca-di-cadore`
   - indirizzo: Via Belvedere, 91, 32046 San Vito di Cadore BL
9. **Hotel Boite** — Borca di Cadore
   - slug: `hotel-boite-borca-di-cadore`
   - indirizzo: Via Metanopoli, 32040 Corte BL
10. **Hotel Meublé Barancio** — Borca di Cadore
   - slug: `hotel-meuble-barancio-borca-di-cadore`
   - indirizzo: Via Belvedere, 108, 32046 San Vito di Cadore BL
11. **Hotel Villa Ines** — Borca di Cadore
   - slug: `hotel-villa-ines-borca-di-cadore`
   - indirizzo: Via Taulen Marceana, 1, 32040 Villanova BL
12. **Residence Corte** — Borca di Cadore
   - slug: `residence-corte-borca-di-cadore`
   - indirizzo: Via Metanopoli, 32040 Borca di Cadore BL
13. **Agriturismo Casali Scjs** — Bordano
   - slug: `agriturismo-casali-scjs-bordano`
   - indirizzo: Strada Scjs, 1 33010, 33010 Venzone UD
14. **B&B Agli ulivi** — Bordano
   - slug: `b-b-agli-ulivi-bordano`
   - indirizzo: Via Val di Fiemme, 15, 33013 Gemona UD
15. **Civico17** — Bordano
   - slug: `civico17-bordano`
   - indirizzo: Piazza Municipio, 17, 33010 Venzone UD
16. **Sleep in Venzone** — Bordano
   - slug: `sleep-in-venzone-bordano`
   - indirizzo: Via Pietro Petrolo, 14, 33010 Venzone UD
17. **Sleep In Venzone Depandance** — Bordano
   - slug: `sleep-in-venzone-depandance-bordano`
   - indirizzo: Via Pietro Petrolo, 10, 33010 Venzone UD
18. **Affittacamere A Feneira** — Bordighera
   - slug: `affittacamere-a-feneira-bordighera`
   - indirizzo: Via Annunziata, 14, 18030 San Biagio della Cima IM
19. **Agriturismo C'Era Una Volta...** — Bordighera
   - slug: `agriturismo-c-era-una-volta-bordighera`
   - indirizzo: Str. Ciaixe, 18033 Camporosso IM
20. **Albergo Piccolo Paradiso** — Bordighera
   - slug: `albergo-piccolo-paradiso-bordighera`
   - indirizzo: Via G. Marconi, 101, 18019 Vallecrosia al Mare IM
21. **B&B Acqua Di Mare** — Bordighera
   - slug: `b-b-acqua-di-mare-bordighera`
   - indirizzo: Via dei Pescatori, 6, 18012 Bordighera IM
22. **CASA ODELLO suite and the sea** — Bordighera
   - slug: `casa-odello-suite-and-the-sea-bordighera`
   - indirizzo: Via Vittorio Veneto, 9, 18012 Bordighera IM
23. **Gold Hotel** — Bordighera
   - slug: `gold-hotel-bordighera`
   - indirizzo: Via Cesare Balbo, 7, 18012 Bordighera IM
24. **Grand Hotel del Mare Resort & Spa** — Bordighera
   - slug: `grand-hotel-del-mare-resort-spa-bordighera`
   - indirizzo: Via Portico della Punta, 34, 18012 Bordighera IM
25. **Hotel Elandra** — Bordighera
   - slug: `hotel-elandra-bordighera`
   - indirizzo: Via Vittorio Emanuele II, 61, 18012 Bordighera IM
26. **HOTEL LORA** — Bordighera
   - slug: `hotel-lora-bordighera`
   - indirizzo: Via dei Bagni, 1, 18012 Bordighera IM
27. **Hotel Marligure** — Bordighera
   - slug: `hotel-marligure-bordighera`
   - indirizzo: SS 1, 22, 18012 Bordighera IM
28. **Hotel Parigi** — Bordighera
   - slug: `hotel-parigi-bordighera`
   - indirizzo: Lungomare Argentina, 16-18, 18012 Bordighera IM
29. **Hotel Piccolo Lido** — Bordighera
   - slug: `hotel-piccolo-lido-bordighera`
   - indirizzo: Lungomare Argentina, 2, 18012 Bordighera IM
30. **Hotel Riviera** — Bordighera
   - slug: `hotel-riviera-bordighera`
   - indirizzo: Via Bel Soggiorno, 2/4, 18012 Bordighera IM
31. **Hotel Villa Elisa & Spa** — Bordighera
   - slug: `hotel-villa-elisa-spa-bordighera`
   - indirizzo: Via Romana, 70, 18012 Bordighera IM
32. **Hotel Villa Miki Bordighera** — Bordighera
   - slug: `hotel-villa-miki-bordighera-bordighera`
   - indirizzo: Via Lagazzi, 14, 18012 Bordighera IM
33. **Raphael Hotel** — Bordighera
   - slug: `raphael-hotel-bordighera`
   - indirizzo: Via Angeli Custodi, 128, 18019 Vallecrosia IM
34. **Villa Caterina** — Bordighera
   - slug: `villa-caterina-bordighera`
   - indirizzo: 114, Corso Italia, 112, 18012 Bordighera IM
35. **Villa Bottini - La Limonaia** — Bordolano
   - slug: `villa-bottini-la-limonaia-bordolano`
   - indirizzo: Via Cairoli 23 Monasterolo di, 26010 Robecco d'Oglio CR