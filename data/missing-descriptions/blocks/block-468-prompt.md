# Blocco 468/500 — 35 strutture senza descrizione IT

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

1. **A Modo Mio** — Cassinelle
   - slug: `a-modo-mio-cassinelle`
   - indirizzo: Via Santuario, 53A, 15074 Molare AL
2. **Agriturismo La Rossa** — Cassinelle
   - slug: `agriturismo-la-rossa-cassinelle`
   - indirizzo: Strada per Cremolino, 15, 15010 Morsasco AL
3. **Agriturismo Aia** — Cassinetta di Lugagnano
   - slug: `agriturismo-aia-cassinetta-di-lugagnano`
   - indirizzo: ALZAIA NAVIGLIO GRANDE N. 1, Cascina dei Piatti, 20081 Cassinetta di Lugagnano MI
4. **Aria di casa Experience** — Cassino
   - slug: `aria-di-casa-experience-cassino`
   - indirizzo: Via degli Eroi, 6, 03043 Cassino FR
5. **B&B Le Palme** — Cassino
   - slug: `b-b-le-palme-cassino`
   - indirizzo: Via Sant'Antonino, 63, 03043 Cassino FR
6. **Best Western Hotel Rocca** — Cassino
   - slug: `best-western-hotel-rocca-cassino`
   - indirizzo: Via Sferracavalli, 105, 03043 Cassino FR
7. **Domus Cassino Centro** — Cassino
   - slug: `domus-cassino-centro-cassino`
   - indirizzo: Viale Dante, 6, 03043 Cassino FR
8. **Edra Palace Hotel** — Cassino
   - slug: `edra-palace-hotel-cassino`
   - indirizzo: Via Ausonia, 03043 Cassino FR
9. **Hotel Forum Palace Cassino** — Cassino
   - slug: `hotel-forum-palace-cassino-cassino`
   - indirizzo: Via Casilina Nord, km. 136,500/180, 03043 Cassino FR
10. **Hotel Piazza Marconi** — Cassino
   - slug: `hotel-piazza-marconi-cassino`
   - indirizzo: Via Guglielmo Marconi, 25, 03043 Cassino FR
11. **IL COLOSSEO B&B CASSINO** — Cassino
   - slug: `il-colosseo-b-b-cassino-cassino`
   - indirizzo: V.Gaetano di Biasio, 222, 03043 Cassino FR
12. **Agriturismo Il Magicorto** — Cassola
   - slug: `agriturismo-il-magicorto-cassola`
   - indirizzo: Via Don Luigi Bressan, 46, 36022 San Zeno VI
13. **Albergo Ristorante Nazionale Da Mirella** — Cassola
   - slug: `albergo-ristorante-nazionale-da-mirella-cassola`
   - indirizzo: Via Nazionale, 74, 36056 Tezze sul Brenta VI
14. **Hotel Miramonti** — Cassola
   - slug: `hotel-miramonti-cassola`
   - indirizzo: Via Guglielmo Marconi, 1, 36020 Pove del Grappa VI
15. **Hotel Ristorante Al Bassanello** — Cassola
   - slug: `hotel-ristorante-al-bassanello-cassola`
   - indirizzo: Via Trozzetti, 2, 36061 Bassano del Grappa VI
16. **Hotel Villa Ca' Sette** — Cassola
   - slug: `hotel-villa-ca-sette-cassola`
   - indirizzo: Via Cunizza da Romano, 4, 36061 Bassano del Grappa VI
17. **Hotel Volpara** — Cassola
   - slug: `hotel-volpara-cassola`
   - indirizzo: Via Carlo Eger, 8, 31020 Liedolo di San Zenone degli Ezzellini TV
18. **Villa Tiziano Residence** — Cassola
   - slug: `villa-tiziano-residence-cassola`
   - indirizzo: Viale dei Tigli, 53, 36067 Rosà VI
19. **Gruppo Luxe Domus** — Cassolnovo
   - slug: `gruppo-luxe-domus-cassolnovo`
   - indirizzo: Via Vecchia per Cilavegna, 39, 27029 Vigevano PV
20. **Il Cascinale** — Cassolnovo
   - slug: `il-cascinale-cassolnovo`
   - indirizzo: Hotel Ristorante Il Cascinale, Via Vigevano, 31, 28065 Cerano NO
21. **N'UOVO Agriturismo** — Cassolnovo
   - slug: `n-uovo-agriturismo-cassolnovo`
   - indirizzo: Via Cascina del Pozzo, 1, 27023 Cassolnovo PV
22. **Paraiso Madera Bed and Breakfast** — Castagnaro
   - slug: `paraiso-madera-bed-and-breakfast-castagnaro`
   - indirizzo: Via Possessione, 37049 Carpi VR
23. **Tenuta la Pila - Agriturismo Verona** — Castagnaro
   - slug: `tenuta-la-pila-agriturismo-verona-castagnaro`
   - indirizzo: Via Pila, 42, 37049 Villa Bartolomea VR
24. **Agricamping La Gallinella** — Castagneto Carducci
   - slug: `agricamping-la-gallinella-castagneto-carducci`
   - indirizzo: b, Strada Comunale di Segalari, 101b, 57022 Castagneto Carducci LI
25. **Agriturismo Podere Carducci** — Castagneto Carducci
   - slug: `agriturismo-podere-carducci-castagneto-carducci`
   - indirizzo: Strada Comunale di Segalari, 152, 57022 Castagneto Carducci LI
26. **Boutique Carolina - Hotel Di Nardo Group** — Castagneto Carducci
   - slug: `boutique-carolina-hotel-di-nardo-group-castagneto-carducci`
   - indirizzo: Via Marco Polo, 57022 Marina di Castagneto Carducci LI
27. **Campastrello Sport Hotel & Residence** — Castagneto Carducci
   - slug: `campastrello-sport-hotel-residence-castagneto-carducci`
   - indirizzo: Via Campastrello, 1, 57022 Castagneto Carducci LI
28. **Canado Family Hotel** — Castagneto Carducci
   - slug: `canado-family-hotel-castagneto-carducci`
   - indirizzo: Località Villa Emilia, 361, 57022 Castagneto Carducci LI
29. **Casone Ugolino | Hotel con appartamenti e camere | Ristorante pizzeria** — Castagneto Carducci
   - slug: `casone-ugolino-hotel-con-appartamenti-e-camere-r-castagneto-carducci`
   - indirizzo: Via del Casone Ugolino, 24/24/32, 57022 Castagneto Carducci LI
30. **Country Hotel Zi Martino** — Castagneto Carducci
   - slug: `country-hotel-zi-martino-castagneto-carducci`
   - indirizzo: Strada Provinciale Bolgherese, 262, 57022 San Giusto LI
31. **Etrusconia Hotel Castagneto Carducci** — Castagneto Carducci
   - slug: `etrusconia-hotel-castagneto-carducci-castagneto-carducci`
   - indirizzo: Via Walfredo della Gherardesca, 2, 57022 Marina di Castagneto Carducci LI
32. **Hotel Carlo's** — Castagneto Carducci
   - slug: `hotel-carlo-s-castagneto-carducci`
   - indirizzo: SP 329 Passo di Bocca di Valle, 266, 57022 Castagneto Carducci LI
33. **Hotel Cucciolo** — Castagneto Carducci
   - slug: `hotel-cucciolo-castagneto-carducci`
   - indirizzo: Via Vecchia Aurelia, 161, 57022 Donoratico LI
34. **Hotel i Ginepri** — Castagneto Carducci
   - slug: `hotel-i-ginepri-castagneto-carducci`
   - indirizzo: Viale Italia, 13, 57022 Marina di Castagneto Carducci LI
35. **Hotel Villa Bolgheri - Hotel di Nardo Group** — Castagneto Carducci
   - slug: `hotel-villa-bolgheri-hotel-di-nardo-group-castagneto-carducci`
   - indirizzo: Via della Triglia, 4, 57022 Marina di Castagneto Carducci LI