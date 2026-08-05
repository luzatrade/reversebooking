# Blocco 139/500 — 35 strutture senza descrizione IT

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

1. **B&B Al chiaro di Luna** — Arcola
   - slug: `b-b-al-chiaro-di-luna-arcola`
   - indirizzo: Via Aurelia Sud, 62, 19021 Arcola SP
2. **B&B Borgo degli Angeli Arcola** — Arcola
   - slug: `b-b-borgo-degli-angeli-arcola-arcola`
   - indirizzo: Via Indipendenza, 8, 19021 Arcola SP
3. **B&B Casa Lisa** — Arcola
   - slug: `b-b-casa-lisa-arcola`
   - indirizzo: Via Bruno Buozzi, 40, 19021 Arcola SP
4. **B&B Da Giusè** — Arcola
   - slug: `b-b-da-giuse-arcola`
   - indirizzo: Via Vico Porta, 4, 19021 Arcola SP
5. **B&B Gli Aceri** — Arcola
   - slug: `b-b-gli-aceri-arcola`
   - indirizzo: Via Pitelli, 10, 19021 Arcola SP
6. **B&B Il Cielo in una Casa** — Arcola
   - slug: `b-b-il-cielo-in-una-casa-arcola`
   - indirizzo: Piazza II Giugno, 15, 19021 Arcola SP
7. **B&B La Pergola** — Arcola
   - slug: `b-b-la-pergola-arcola`
   - indirizzo: Via G. Emanueli, 36, 19020 Piano di Valeriano-bottagna SP
8. **B&B Podere Morucciola** — Arcola
   - slug: `b-b-podere-morucciola-arcola`
   - indirizzo: Via Aurelia Nord, 133, 19021 Arcola SP
9. **Hotel Aurora** — Arcola
   - slug: `hotel-aurora-arcola`
   - indirizzo: Via Fiume, 143, 19122 La Spezia SP
10. **Hotel Le Stele** — Arcola
   - slug: `hotel-le-stele-arcola`
   - indirizzo: Strada Comunale Romito Trebiano, 19021 Romito Magra SP
11. **Hotel Nella** — Arcola
   - slug: `hotel-nella-arcola`
   - indirizzo: Via Genova, 591, 19134 La Spezia SP
12. **Hotel Nettuno** — Arcola
   - slug: `hotel-nettuno-arcola`
   - indirizzo: Via Paolo Mantegazza, 1, 19036 Lerici SP
13. **Hotel Stella Marina** — Arcola
   - slug: `hotel-stella-marina-arcola`
   - indirizzo: Via Giuseppe Garibaldi, 48, 19032 Lerici SP
14. **Lia Art Hotel** — Arcola
   - slug: `lia-art-hotel-arcola`
   - indirizzo: Via Giovanni Costantini, 48, 19124 La Spezia SP
15. **RTA La Pineta** — Arcola
   - slug: `rta-la-pineta-arcola`
   - indirizzo: Via Cisa Sud, 472, 19037 Santo Stefano di Magra SP
16. **Sarzana Park Hotel | BZAR hotels** — Arcola
   - slug: `sarzana-park-hotel-bzar-hotels-arcola`
   - indirizzo: Via della Cisa, Terza Traversa, 1, 19038 Sarzana SP
17. **Albergo Al Gambero** — Arcole
   - slug: `albergo-al-gambero-arcole`
   - indirizzo: Corso Vittorio Emanuele II, 37038 Soave VR
18. **B&B Antique Maison** — Arcole
   - slug: `b-b-antique-maison-arcole`
   - indirizzo: Via Fontana, 2f, 37038 Soave VR
19. **Best Western Plus Soave Hotel** — Arcole
   - slug: `best-western-plus-soave-hotel-arcole`
   - indirizzo: Località Ritonda, 82, 37047 San Bonifacio VR
20. **Emerald Green Residence** — Arcole
   - slug: `emerald-green-residence-arcole`
   - indirizzo: Via Antonio Meucci, 1/A, 37042 Caldiero VR
21. **Hotel Brusco** — Arcole
   - slug: `hotel-brusco-arcole`
   - indirizzo: Via Strà, 118, 37042 Caldiero VR
22. **Hotel Roxy Plaza** — Arcole
   - slug: `hotel-roxy-plaza-arcole`
   - indirizzo: Via S. Matteo, 4, 37038 Soave VR
23. **Star Soave Rooms** — Arcole
   - slug: `star-soave-rooms-arcole`
   - indirizzo: Corso Vittorio Emanuele II, 135, 37038 Soave VR
24. **Villabella Hotel Ristorante Pizzeria** — Arcole
   - slug: `villabella-hotel-ristorante-pizzeria-arcole`
   - indirizzo: Località Villabella, 11, 37047 San Bonifacio VR
25. **Albergo Al Corso** — Arconate
   - slug: `albergo-al-corso-arconate`
   - indirizzo: Corso Magenta, 137, 20025 Legnano MI
26. **Albergo Ristorante Brera** — Arconate
   - slug: `albergo-ristorante-brera-arconate`
   - indirizzo: Via Brera, 11, 20010 Inveruno MI
27. **Antico Albergo Madonna** — Arconate
   - slug: `antico-albergo-madonna-arconate`
   - indirizzo: C.so Sempione, 125, 20025 Legnano MI
28. **B&B VillAlbero** — Arconate
   - slug: `b-b-villalbero-arconate`
   - indirizzo: Via Francesco Petrarca, 6, 20001 Inveruno MI
29. **Ca’Melia B&B** — Arconate
   - slug: `ca-melia-b-b-arconate`
   - indirizzo: Via Giovanni Boccaccio, 2, 20020 Arconate MI
30. **Hotel 2C** — Arconate
   - slug: `hotel-2c-arconate`
   - indirizzo: Via Colli di S. Erasmo, 51, 20025 Legnano MI
31. **Hotel Legnano** — Arconate
   - slug: `hotel-legnano-arconate`
   - indirizzo: Via Luigi Galvani, 15, 20025 Legnano MI
32. **Hotel Montecarlo 3 Stelle** — Arconate
   - slug: `hotel-montecarlo-3-stelle-arconate`
   - indirizzo: Via Saronno, 4, 21053 Castellanza VA
33. **Hotel Motel Mediterraneo** — Arconate
   - slug: `hotel-motel-mediterraneo-arconate`
   - indirizzo: Via Augusto Righi, 35, 20035 Villa Cortese MI
34. **Hotel Ristorante Scià on Martin** — Arconate
   - slug: `hotel-ristorante-scia-on-martin-arconate`
   - indirizzo: V.le 2 Giugno, 1, 20010 Buscate MI
35. **In Curti 1913** — Arconate
   - slug: `in-curti-1913-arconate`
   - indirizzo: Via Paolo Castelnovo, 28, 20015 Parabiago MI