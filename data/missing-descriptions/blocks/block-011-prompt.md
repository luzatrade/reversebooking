# Blocco 11/500 — 35 strutture senza descrizione IT

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

1. **B&B Aquilegia** — Acqualagna
   - slug: `b-b-aquilegia-acqualagna`
   - indirizzo: Via Furlo, 12, 61041 Acqualagna PU
2. **B&B Canavaccio** — Acqualagna
   - slug: `b-b-canavaccio-acqualagna`
   - indirizzo: Via Nazionale, 45/C - Loc, 61029 Canavaccio PU
3. **B&B Fox's Hill** — Acqualagna
   - slug: `b-b-fox-s-hill-acqualagna`
   - indirizzo: loc.sant'andrea in serra d'ocre, 24, 61049 Urbania PU
4. **B&B La Corte di Nonna Quercia** — Acqualagna
   - slug: `b-b-la-corte-di-nonna-quercia-acqualagna`
   - indirizzo: SP111, 2, 61043 Cagli PU
5. **B&b Monte San Pietro** — Acqualagna
   - slug: `b-b-monte-san-pietro-acqualagna`
   - indirizzo: Località Monte S. Pietro, 98, 61049 Muraglione PU
6. **B&B Relais Druda** — Acqualagna
   - slug: `b-b-relais-druda-acqualagna`
   - indirizzo: Via Atanagi, 38, 61043 Cagli PU
7. **Bed & Breakfast del Teatro** — Acqualagna
   - slug: `bed-breakfast-del-teatro-acqualagna`
   - indirizzo: Via Giacomo Leopardi, 28, 61043 Cagli PU
8. **Cielo e Nuvole** — Acqualagna
   - slug: `cielo-e-nuvole-acqualagna`
   - indirizzo: V. Piero Gobetti, 15, 61043 Cagli PU
9. **Green B&B Urbino** — Acqualagna
   - slug: `green-b-b-urbino-acqualagna`
   - indirizzo: Via Bocca Trabaria Ovest, 63, 61029 Urbino PU
10. **InLoco - Natural Experience** — Acqualagna
   - slug: `inloco-natural-experience-acqualagna`
   - indirizzo: Via G. Marconi, 29, 61041 Acqualagna PU
11. **La Finestra Sul Fiume** — Acqualagna
   - slug: `la-finestra-sul-fiume-acqualagna`
   - indirizzo: Via Umberto I, 30, 61034 Fossombrone PU
12. **La Tana del Furlo B&B** — Acqualagna
   - slug: `la-tana-del-furlo-b-b-acqualagna`
   - indirizzo: STRADA MONTE PAGANUCCIO, 14, 61043 Cagli PU
13. **Le Cerque** — Acqualagna
   - slug: `le-cerque-acqualagna`
   - indirizzo: Via Bocca Trabaria Sud, 100, 61029 Urbino PU
14. **Residence La Collinetta - Hotel** — Acqualagna
   - slug: `residence-la-collinetta-hotel-acqualagna`
   - indirizzo: Via Cà Lupo, 27, 61043 Cagli PU
15. **Ristorante Hotel La Ginestra - Gola del Furlo** — Acqualagna
   - slug: `ristorante-hotel-la-ginestra-gola-del-furlo-acqualagna`
   - indirizzo: Via Furlo, 15-17, 61041 PASSO DEL FURLO PU
16. **Agriturismo Cascina Nuova** — Acquanegra Cremonese
   - slug: `agriturismo-cascina-nuova-acquanegra-cremonese`
   - indirizzo: Via Cà del Binda, 4, 26100 Cremona CR
17. **Amici Miei Rooms** — Acquanegra Cremonese
   - slug: `amici-miei-rooms-acquanegra-cremonese`
   - indirizzo: Via Bizzarra, 18, 26100 Cremona CR
18. **B & B Albergo Il Torchio Di Alchieri Moreno & C. Sas** — Acquanegra Cremonese
   - slug: `b-b-albergo-il-torchio-di-alchieri-moreno-c-sas-acquanegra-cremonese`
   - indirizzo: Via Mazza Luigi, 8, 26026 Pizzighettone CR
19. **B&B Casa del Profumo** — Acquanegra Cremonese
   - slug: `b-b-casa-del-profumo-acquanegra-cremonese`
   - indirizzo: Via Scalabrini, 42, 29121 Piacenza PC
20. **B&B Cascina le Madonne** — Acquanegra Cremonese
   - slug: `b-b-cascina-le-madonne-acquanegra-cremonese`
   - indirizzo: Via Pizzighettone, 4, 26028 Luignano CR
21. **B&B HOTEL Cremona** — Acquanegra Cremonese
   - slug: `b-b-hotel-cremona-acquanegra-cremonese`
   - indirizzo: Via Antiche Fornaci, 70, 26100 Cremona CR
22. **B&B HOTEL Piacenza** — Acquanegra Cremonese
   - slug: `b-b-hotel-piacenza-acquanegra-cremonese`
   - indirizzo: Via Alessandro Bolzoni, 1, 29122 Piacenza PC
23. **B&B la Viola** — Acquanegra Cremonese
   - slug: `b-b-la-viola-acquanegra-cremonese`
   - indirizzo: Via Rapari Pallavicini, 36, 29010 Castelvetro Piacentino PC
24. **B&B Spaziovitale** — Acquanegra Cremonese
   - slug: `b-b-spaziovitale-acquanegra-cremonese`
   - indirizzo: Via Amilcare Ponchielli, 3/5, 26024 Paderno Ponchielli CR
25. **Bed And Breakfast Marie** — Acquanegra Cremonese
   - slug: `bed-and-breakfast-marie-acquanegra-cremonese`
   - indirizzo: Via dei Fiori, 28, 26022 Castelverde CR
26. **Cremona Palace Hotel** — Acquanegra Cremonese
   - slug: `cremona-palace-hotel-acquanegra-cremonese`
   - indirizzo: Via Castelleone, 62, 26022 Costa Sant'Abramo CR
27. **FORESTERIA LOMBARDA BED and BIKE CREMONA** — Acquanegra Cremonese
   - slug: `foresteria-lombarda-bed-and-bike-cremona-acquanegra-cremonese`
   - indirizzo: Via Roma, 90, 26020 Crotta d'Adda CR
28. **Giardini Rooms** — Acquanegra Cremonese
   - slug: `giardini-rooms-acquanegra-cremonese`
   - indirizzo: Piazza Roma, 6, 26100 Cremona CR
29. **Hotel Cremona Di Lombardelli Carla** — Acquanegra Cremonese
   - slug: `hotel-cremona-di-lombardelli-carla-acquanegra-cremonese`
   - indirizzo: Viale Po, 131, 26100 Cremona CR
30. **Hotel Parco** — Acquanegra Cremonese
   - slug: `hotel-parco-acquanegra-cremonese`
   - indirizzo: Dei Due Ponti, 5, 29010 Castelvetro Piacentino PC
31. **Hotel Soresina** — Acquanegra Cremonese
   - slug: `hotel-soresina-acquanegra-cremonese`
   - indirizzo: Piazza della Repubblica, 13, 26015 Soresina CR
32. **Hotel Vecchio Casello** — Acquanegra Cremonese
   - slug: `hotel-vecchio-casello-acquanegra-cremonese`
   - indirizzo: Via Solferino, 164, 26012 Castelleone CR
33. **Hotel-Motel70** — Acquanegra Cremonese
   - slug: `hotel-motel70-acquanegra-cremonese`
   - indirizzo: Via Granelli, 75, 29010 San Nazzaro PC
34. **Le Maginot** — Acquanegra Cremonese
   - slug: `le-maginot-acquanegra-cremonese`
   - indirizzo: Località Babina, 6, 29010 Castelvetro Piacentino PC
35. **Mulino degli Orti S.n.c** — Acquanegra Cremonese
   - slug: `mulino-degli-orti-s-n-c-acquanegra-cremonese`
   - indirizzo: Via Cristoforo Colombo, 120, 29122 Piacenza PC