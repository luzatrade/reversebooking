# Blocco 309/500 — 35 strutture senza descrizione IT

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

1. **Bosa Queen House** — Bosa
   - slug: `bosa-queen-house-bosa`
   - indirizzo: Via del Carmine, 125, 09089 Bosa OR
2. **Carlo's House** — Bosa
   - slug: `carlo-s-house-bosa`
   - indirizzo: Via A. Lamarmora, 42, 09089 Bosa OR
3. **Corte Fiorita Albergo Diffuso** — Bosa
   - slug: `corte-fiorita-albergo-diffuso-bosa`
   - indirizzo: Lungo Temo Alcide De Gasperi, 45, 09089 Bosa OR
4. **Guesthouse di Giuseppe** — Bosa
   - slug: `guesthouse-di-giuseppe-bosa`
   - indirizzo: Via Montenegro, 81A, 09089 Bosa OR
5. **Hotel Isola Rossa Residenziale** — Bosa
   - slug: `hotel-isola-rossa-residenziale-bosa`
   - indirizzo: Località Campu'e Mare, 09089 Bosa OR
6. **HOTEL PALAZZO PISCHEDDA BOSA** — Bosa
   - slug: `hotel-palazzo-pischedda-bosa-bosa`
   - indirizzo: Via Roma, 20, 09089 Bosa OR
7. **Hotel Ristorante Mannu** — Bosa
   - slug: `hotel-ristorante-mannu-bosa`
   - indirizzo: Viale Alghero, 28, 08013 Bosa OR
8. **La Terrazza del Sole Guest House** — Bosa
   - slug: `la-terrazza-del-sole-guest-house-bosa`
   - indirizzo: Viale della Repubblica, 2, 09080 Bosa OR
9. **Madalen Guest House** — Bosa
   - slug: `madalen-guest-house-bosa`
   - indirizzo: Corso Vittorio Emanuele II, Piazza Costituzione, 69, 09089 Bosa OR
10. **Osa rooms** — Bosa
   - slug: `osa-rooms-bosa`
   - indirizzo: Via Chiassuolo, 15, 09089 Bosa OR
11. **Park Garden Guest House** — Bosa
   - slug: `park-garden-guest-house-bosa`
   - indirizzo: Via degli Artigiani, 3, 09089 Bosa OR
12. **Regnos Altos Boutique Rooms** — Bosa
   - slug: `regnos-altos-boutique-rooms-bosa`
   - indirizzo: Via del Carmine, 99, 09089 Bosa OR
13. **Sporting Hotel Stella Maris** — Bosa
   - slug: `sporting-hotel-stella-maris-bosa`
   - indirizzo: Via C. Colombo, 9, 09089 Bosa Marina OR
14. **Albergo Ristorante Leso 1815** — Bosco Chiesanuova
   - slug: `albergo-ristorante-leso-1815-bosco-chiesanuova`
   - indirizzo: Piazza XIII Comuni, 32, 37021 Bosco Chiesanuova VR
15. **Araldo Eco-Lodge** — Bosco Chiesanuova
   - slug: `araldo-eco-lodge-bosco-chiesanuova`
   - indirizzo: Via Carcereri, 22, 37021 Bosco Chiesanuova VR
16. **B & B Il Pettirosso** — Bosco Chiesanuova
   - slug: `b-b-il-pettirosso-bosco-chiesanuova`
   - indirizzo: Via Moron, 38, 37024 Negrar di Valpolicella VR
17. **b&b casamia** — Bosco Chiesanuova
   - slug: `b-b-casamia-bosco-chiesanuova`
   - indirizzo: Via S. Urbano, 1G, 37024 Molina VR
18. **B&B dalla ELI** — Bosco Chiesanuova
   - slug: `b-b-dalla-eli-bosco-chiesanuova`
   - indirizzo: Via Farinata degli Uberti, 37021 Bosco Chiesanuova VR
19. **BBmolina** — Bosco Chiesanuova
   - slug: `bbmolina-bosco-chiesanuova`
   - indirizzo: Via B. Bacilieri, 99, 37022 Molina VR
20. **Corte Tre Vigne** — Bosco Chiesanuova
   - slug: `corte-tre-vigne-bosco-chiesanuova`
   - indirizzo: Via S. Stefano, 10, 37020 Marano di Valpolicella VR
21. **da Andrea e Raffaella** — Bosco Chiesanuova
   - slug: `da-andrea-e-raffaella-bosco-chiesanuova`
   - indirizzo: Via Maso di Cerna, 7, 37020 Sant'Anna d'Alfaedo VR
22. **Dormire alla Ruota** — Bosco Chiesanuova
   - slug: `dormire-alla-ruota-bosco-chiesanuova`
   - indirizzo: Via S. Marco, 7, 37020 Verona VR
23. **Hotel Lessinia** — Bosco Chiesanuova
   - slug: `hotel-lessinia-bosco-chiesanuova`
   - indirizzo: Piazza Alpini, 3, 37021 Bosco Chiesanuova VR
24. **Hotel Ristorante Casa Leon d’Oro** — Bosco Chiesanuova
   - slug: `hotel-ristorante-casa-leon-d-oro-bosco-chiesanuova`
   - indirizzo: Piazza Guglielmo Marconi, 45, 37021 Bosco Chiesanuova VR
25. **Hotel Ristorante Frizzolan** — Bosco Chiesanuova
   - slug: `hotel-ristorante-frizzolan-bosco-chiesanuova`
   - indirizzo: Piazza Borgo, 5, 37021 Bosco Chiesanuova VR
26. **Hotel Ristorante Piccola Mantova** — Bosco Chiesanuova
   - slug: `hotel-ristorante-piccola-mantova-bosco-chiesanuova`
   - indirizzo: Via Aleardo Aleardi, 12, 37021 Bosco Chiesanuova VR
27. **Le Camere Della Bice** — Bosco Chiesanuova
   - slug: `le-camere-della-bice-bosco-chiesanuova`
   - indirizzo: Contrada Bottega, 2, 37020 Negrar di Valpolicella VR
28. **Locanda Alla Porchetta** — Bosco Chiesanuova
   - slug: `locanda-alla-porchetta-bosco-chiesanuova`
   - indirizzo: Via S. Peretto, 18, 37024 Negrar di Valpolicella VR
29. **Ongar Relax** — Bosco Chiesanuova
   - slug: `ongar-relax-bosco-chiesanuova`
   - indirizzo: Contrada Ongar, 37021 Bosco Chiesanuova VR
30. **Casa Lidia Gavi** — Bosco Marengo
   - slug: `casa-lidia-gavi-bosco-marengo`
   - indirizzo: Frazione Rovereto, 65, 15066 Gavi AL
31. **Cascina Folletto** — Bosco Marengo
   - slug: `cascina-folletto-bosco-marengo`
   - indirizzo: SC Veneziana, 9, 15057 Tortona AL
32. **Cascina Merlanetta - Agriturismo & Fattoria didattica** — Bosco Marengo
   - slug: `cascina-merlanetta-agriturismo-fattoria-didattic-bosco-marengo`
   - indirizzo: Via Ovada, 42, 15072 Casal Cermelli AL
33. **Fattoria del Soul** — Bosco Marengo
   - slug: `fattoria-del-soul-bosco-marengo`
   - indirizzo: Via Ovada, 111, 15072 Portanuova AL
34. **La Cascina Grossa** — Bosco Marengo
   - slug: `la-cascina-grossa-bosco-marengo`
   - indirizzo: Via Antonio Gramsci, 2 in, 15122 Cascinagrossa AL
35. **Lacetoliera b&b casa storica** — Bosco Marengo
   - slug: `lacetoliera-b-b-casa-storica-bosco-marengo`
   - indirizzo: Via V. Ricci, 15062 Bosco Marengo AL