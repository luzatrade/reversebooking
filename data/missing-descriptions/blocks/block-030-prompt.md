# Blocco 30/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Guado Cannavina** — Agnone
   - slug: `agriturismo-guado-cannavina-agnone`
   - indirizzo: Contrada Macchia, 11, 86082 Capracotta IS
2. **Agriturismo Masseria Santa Lucia** — Agnone
   - slug: `agriturismo-masseria-santa-lucia-agnone`
   - indirizzo: Contrada Fonte Sambuco, 23a, 86081 Agnone IS
3. **Albergo Conte Max** — Agnone
   - slug: `albergo-conte-max-agnone`
   - indirizzo: via Vallesorda, 86082 Capracotta IS
4. **Albergo Italia** — Agnone
   - slug: `albergo-italia-agnone`
   - indirizzo: Piazza XX Settembre, 11, 86081 Agnone IS
5. **B & B L'ABBRACCIO AGNONE** — Agnone
   - slug: `b-b-l-abbraccio-agnone-agnone`
   - indirizzo: Corso Vittorio Emanuele, 185, 86081 Agnone IS
6. **B&B Largo Alighieri** — Agnone
   - slug: `b-b-largo-alighieri-agnone`
   - indirizzo: Via Alighieri, 6, 66045 Schiavi di Abruzzo CH
7. **B&B Tirassegno** — Agnone
   - slug: `b-b-tirassegno-agnone`
   - indirizzo: Via Pasquale e Ettore Marinelli, 11, 86081 Agnone IS
8. **Bellavista** — Agnone
   - slug: `bellavista-agnone`
   - indirizzo: Via Vittorio Veneto, 46, 86020 Roccavivara CB
9. **Borgo San Pietro** — Agnone
   - slug: `borgo-san-pietro-agnone`
   - indirizzo: Via Montebello, 54, 86081 Agnone IS
10. **chevalier claudio** — Agnone
   - slug: `chevalier-claudio-agnone`
   - indirizzo: Contrada S. Onofrio, 196, 86081 Agnone IS
11. **Domus Hotel Resort & Spa** — Agnone
   - slug: `domus-hotel-resort-spa-agnone`
   - indirizzo: Variante Esterna, 86091 Bagnoli del Trigno IS
12. **Hotel Il Duca del Sannio** — Agnone
   - slug: `hotel-il-duca-del-sannio-agnone`
   - indirizzo: Via Marconi, 26, 86081 Agnone IS
13. **Hotel La Rampa** — Agnone
   - slug: `hotel-la-rampa-agnone`
   - indirizzo: Via Marina Nuova, 7, 84060 Agnone Cilento SA
14. **Hotel Monte Campo** — Agnone
   - slug: `hotel-monte-campo-agnone`
   - indirizzo: C.da Santa Lucia, 86082 Capracotta IS
15. **La Dimora del Sergente** — Agnone
   - slug: `la-dimora-del-sergente-agnone`
   - indirizzo: Largo del Carmelo, 9, Via V. Veneto, 14, 86083 Carovilli IS
16. **Locanda La Campana** — Agnone
   - slug: `locanda-la-campana-agnone`
   - indirizzo: Vico Polito, 15, 86081 Agnone IS
17. **Locanda Mammì** — Agnone
   - slug: `locanda-mammi-agnone`
   - indirizzo: Contrada Castelnuovo, 86, 86081 Agnone IS
18. **Masseria Acquasalsa** — Agnone
   - slug: `masseria-acquasalsa-agnone`
   - indirizzo: Contrada Rigaini, 33, 86081 Agnone IS
19. **Rifugio dei Sanniti** — Agnone
   - slug: `rifugio-dei-sanniti-agnone`
   - indirizzo: Strada Provinciale Sangritana, 66040 Borrello CH
20. **Agriturismo Rocca dei Marchesi Brescia** — Agnosine
   - slug: `agriturismo-rocca-dei-marchesi-brescia-agnosine`
   - indirizzo: Via Silvio Moretti, 86, 25070 Sabbio Chiese BS
21. **Al Poggio Verde** — Agnosine
   - slug: `al-poggio-verde-agnosine`
   - indirizzo: Via del Fango, 29, 25070 Barghe BS
22. **ALBERGO LODRINO - Zeta affittacamere** — Agnosine
   - slug: `albergo-lodrino-zeta-affittacamere-agnosine`
   - indirizzo: Via Kennedy, 6E, 25060 Lodrino BS
23. **Albergo Milena** — Agnosine
   - slug: `albergo-milena-agnosine`
   - indirizzo: Via S. Giovanni Bosco, 14, 25063 Gardone Val Trompia BS
24. **Alla Vecchia Contrada B&B** — Agnosine
   - slug: `alla-vecchia-contrada-b-b-agnosine`
   - indirizzo: Via Iᵒ Maggio, 6, 25070 Provaglio Val Sabbia BS
25. **B&B Al Caseificio** — Agnosine
   - slug: `b-b-al-caseificio-agnosine`
   - indirizzo: Via Nazionale, 70, 25070 Barghe BS
26. **B&B L' Acero** — Agnosine
   - slug: `b-b-l-acero-agnosine`
   - indirizzo: Via S. Giovanni, 9, 25070 Casto BS
27. **B&B Settesette6** — Agnosine
   - slug: `b-b-settesette6-agnosine`
   - indirizzo: Via Fossane, 15, 25070 Barghe BS
28. **Bed & breakfast Isola Verde** — Agnosine
   - slug: `bed-breakfast-isola-verde-agnosine`
   - indirizzo: Via Resolvino, 4, 25060 Lodrino BS
29. **Borgo alla Sorgente, Lago di Garda, antica dimora** — Agnosine
   - slug: `borgo-alla-sorgente-lago-di-garda-antica-dimora-agnosine`
   - indirizzo: Via Sopranico, 51, 25080 Vallio Terme BS
30. **Corte Torchio B&B** — Agnosine
   - slug: `corte-torchio-b-b-agnosine`
   - indirizzo: Via Odorici, 21, 25077 Trobiolo BS
31. **DiVino Rooms Deluxe** — Agnosine
   - slug: `divino-rooms-deluxe-agnosine`
   - indirizzo: Via Parrocchiale, 22/B, 25070 Sabbio Chiese BS
32. **Hotel al Vecchio Palazzo** — Agnosine
   - slug: `hotel-al-vecchio-palazzo-agnosine`
   - indirizzo: Piazza A. Passerini, 5, 25070 Casto BS
33. **Hotel Igea** — Agnosine
   - slug: `hotel-igea-agnosine`
   - indirizzo: Viale della Stazione, 15, 25122 Brescia BS
34. **La Sosta di Nozza Ristorante Hotel e Catering** — Agnosine
   - slug: `la-sosta-di-nozza-ristorante-hotel-e-catering-agnosine`
   - indirizzo: Via T. Secchi, 117, 25078 Vestone BS
35. **Locanda Ferandi** — Agnosine
   - slug: `locanda-ferandi-agnosine`
   - indirizzo: Via Roma, 22, 25080 Vallio Terme BS