# Blocco 180/500 — 35 strutture senza descrizione IT

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

1. **Affittacamera Da Felice** — Avellino
   - slug: `affittacamera-da-felice-avellino`
   - indirizzo: Via Ferrari Canale, 13, 83028 Canale AV
2. **B&b Casicarillo 800** — Avellino
   - slug: `b-b-casicarillo-800-avellino`
   - indirizzo: Vicolo Casicarillo, 34, 83028 Serino AV
3. **B&B Torrette** — Avellino
   - slug: `b-b-torrette-avellino`
   - indirizzo: Via Nazionale, 148, 83013 Mercogliano AV
4. **Bed & Breakfast Villa Antinea** — Avellino
   - slug: `bed-breakfast-villa-antinea-avellino`
   - indirizzo: Via dei Due Principati, 36, 83100 Avellino AV
5. **Il Posto Accanto** — Avellino
   - slug: `il-posto-accanto-avellino`
   - indirizzo: Via Brigata Avellino, 21, 83100 Avellino AV
6. **Vea Resort Hotel** — Avellino
   - slug: `vea-resort-hotel-avellino`
   - indirizzo: Via S. Gerardo Maiella, 84085 Ciorani SA
7. **Villa Masullo Bed & Breakfast** — Avellino
   - slug: `villa-masullo-bed-breakfast-avellino`
   - indirizzo: Via Sala, 77, 83013 Torelli-torrette AV
8. **Albergo Piazzatorre** — Averara
   - slug: `albergo-piazzatorre-averara`
   - indirizzo: Via Centro, 21, 24010 Piazzatorre BG
9. **Albergo Ristorante Coira** — Averara
   - slug: `albergo-ristorante-coira-averara`
   - indirizzo: Via Muggiasca, 9, 24010 Colla-muggiasca BG
10. **Albergo Ristorante Luisella** — Averara
   - slug: `albergo-ristorante-luisella-averara`
   - indirizzo: Viale Europa, 12, 24017 Serina BG
11. **Albergo Ristorante Pizzo Tre Signori** — Averara
   - slug: `albergo-ristorante-pizzo-tre-signori-averara`
   - indirizzo: Via Comm Pietro Busi, 25, 24010 Valtorta BG
12. **Albergo Ristorante Sole** — Averara
   - slug: `albergo-ristorante-sole-averara`
   - indirizzo: Via Dottore Giuseppe Bonandrini, 4, 24010 Mezzoldo BG
13. **B&B 22 - Santa Brigida** — Averara
   - slug: `b-b-22-santa-brigida-averara`
   - indirizzo: Via Taleggio, 22, 24010 Santa Brigida BG
14. **B&B Luna** — Averara
   - slug: `b-b-luna-averara`
   - indirizzo: Via P. Boselli, 48, 24015 San Giovanni Bianco BG
15. **Bed and Breakfast - Santa Brigida** — Averara
   - slug: `bed-and-breakfast-santa-brigida-averara`
   - indirizzo: Via Monticello, 4, 24010 Colla-muggiasca BG
16. **Hotel Adler** — Averara
   - slug: `hotel-adler-averara`
   - indirizzo: Via Ronchi, 65, 24010 Foppolo BG
17. **Hotel Corona** — Averara
   - slug: `hotel-corona-averara`
   - indirizzo: Via S. Rocco, 8, 24010 Branzi BG
18. **HOTEL CRISTALLO di VENFRA srl** — Averara
   - slug: `hotel-cristallo-di-venfra-srl-averara`
   - indirizzo: 53, V. Ronchi, 24010 Foppolo BG
19. **Hotel Miramonti** — Averara
   - slug: `hotel-miramonti-averara`
   - indirizzo: Via Giuseppe Verdi, 2, 24017 Serina BG
20. **Hotel Ristorante Pedretti** — Averara
   - slug: `hotel-ristorante-pedretti-averara`
   - indirizzo: Via Umberto I, 23, 24010 Branzi BG
21. **Hotel Ristorante Pizzeria Molinari** — Averara
   - slug: `hotel-ristorante-pizzeria-molinari-averara`
   - indirizzo: z, Via Cari a Tutti, 34, 24010 Piazzolo BG
22. **Locanda al Lago** — Averara
   - slug: `locanda-al-lago-averara`
   - indirizzo: Via del Ponte, 1, 24010 Cassiglio BG
23. **Ostello Brembo - Camere e relax** — Averara
   - slug: `ostello-brembo-camere-e-relax-averara`
   - indirizzo: Via Orbrembo, 20, 24010 Camerata Cornello BG
24. **Ristorante Albergo Pierino Di Stracchi Daniela** — Averara
   - slug: `ristorante-albergo-pierino-di-stracchi-daniela-averara`
   - indirizzo: Via Roma, 16, 24010 Cusio BG
25. **Romantiche Orobie B&B** — Averara
   - slug: `romantiche-orobie-b-b-averara`
   - indirizzo: Via Oro, 24, 24010 Baresi BG
26. **B&B Dimora Normanna** — Aversa
   - slug: `b-b-dimora-normanna-aversa`
   - indirizzo: Via Isonzo, 42, 81031 Aversa CE
27. **B&B Sognando Vietri e Spa esclusiva** — Aversa
   - slug: `b-b-sognando-vietri-e-spa-esclusiva-aversa`
   - indirizzo: Via Isonzo, 81, 81031 Aversa CE
28. **GiardiniNormanni** — Aversa
   - slug: `giardininormanni-aversa`
   - indirizzo: Via Pietro Pirolo, 4, 81031 Aversa CE
29. **Harmonia** — Aversa
   - slug: `harmonia-aversa`
   - indirizzo: Via Arturo Garofano, 97, 81031 Aversa CE
30. **Hoa Suites** — Aversa
   - slug: `hoa-suites-aversa`
   - indirizzo: Via Roberto Vitale, 3, 81031 Aversa CE
31. **Hotel Artemide** — Aversa
   - slug: `hotel-artemide-aversa`
   - indirizzo: Piazza Antonio Ruberti, 81031 Aversa CE
32. **Hotel Chic** — Aversa
   - slug: `hotel-chic-aversa`
   - indirizzo: Km. 18.700, SS7bis, 80014 Giugliano in Campania NA
33. **Hotel del Sole** — Aversa
   - slug: `hotel-del-sole-aversa`
   - indirizzo: Piazza Giuseppe Mazzini, 27, 81031 Aversa CE
34. **HOTEL FUTURO** — Aversa
   - slug: `hotel-futuro-aversa`
   - indirizzo: Via Alfredo Nobel, 5, 81031 Aversa CE
35. **Hotel Glamour** — Aversa
   - slug: `hotel-glamour-aversa`
   - indirizzo: Vai avv.Aniello Palumbo numero 90, 80019 Qualiano NA