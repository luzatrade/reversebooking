# Blocco 192/500 — 35 strutture senza descrizione IT

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

1. **Al Podere Del Nonno Romolo** — Badia Tedalda
   - slug: `al-podere-del-nonno-romolo-badia-tedalda`
   - indirizzo: Via Case Al Vento, 65, 52037 Sansepolcro AR
2. **Albergo Bellavista - Monte Fumaiolo** — Badia Tedalda
   - slug: `albergo-bellavista-monte-fumaiolo-badia-tedalda`
   - indirizzo: Via Campo Madonna, 3, 47020 Balze FC
3. **Antiqua Camere** — Badia Tedalda
   - slug: `antiqua-camere-badia-tedalda`
   - indirizzo: Località S. Donato, 12, 52038 Sestino AR
4. **B&B fam. ACCIAI** — Badia Tedalda
   - slug: `b-b-fam-acciai-badia-tedalda`
   - indirizzo: forlì, cesena, di, Via Campo Madonna, 5, 47028 Balze FC
5. **B&B Il Gelso** — Badia Tedalda
   - slug: `b-b-il-gelso-badia-tedalda`
   - indirizzo: Via Serra di Sotto, 57, 47864 Maciano, Pennabilli RN
6. **Il Borgo Casteldelci** — Badia Tedalda
   - slug: `il-borgo-casteldelci-badia-tedalda`
   - indirizzo: Via Castello, 6, 47861 Casteldelci RN
7. **Monastero di Sant'Alberico Relais** — Badia Tedalda
   - slug: `monastero-di-sant-alberico-relais-badia-tedalda`
   - indirizzo: Località Sant'Alberico, 47028 Balze FC
8. **Oasi Cocchiola S.r.l.** — Badia Tedalda
   - slug: `oasi-cocchiola-s-r-l-badia-tedalda`
   - indirizzo: Strada vecchia di Cocchiola, Loca.ità Cocchiola, 52032 Badia Tedalda AR
9. **Relais Palazzo Di Luglio** — Badia Tedalda
   - slug: `relais-palazzo-di-luglio-badia-tedalda`
   - indirizzo: Via Marecchiese, Frazione Cignano, 35, 52037 Sansepolcro AR
10. **Ristorante Albergo Lago Verde** — Badia Tedalda
   - slug: `ristorante-albergo-lago-verde-badia-tedalda`
   - indirizzo: Via Strada per Soanne, 1, 47864 Soanne RN
11. **Albergo Dolomia** — Badia/Abtei
   - slug: `albergo-dolomia-badia-abtei`
   - indirizzo: Str. Pedraces, 25, 39036 Badia BZ
12. **Garnì Ciadinat** — Badia/Abtei
   - slug: `garni-ciadinat-badia-abtei`
   - indirizzo: Str. Pantansarè, 19, 39036 Badia BZ
13. **Garni Ciasa Urban** — Badia/Abtei
   - slug: `garni-ciasa-urban-badia-abtei`
   - indirizzo: Str. Pantansarè, 35, 39036 Badia BZ
14. **Hotel Cavallino** — Badia/Abtei
   - slug: `hotel-cavallino-badia-abtei`
   - indirizzo: Str. S. Linert, 52, 39036 San Leonardo BZ
15. **Hotel Gardenazza** — Badia/Abtei
   - slug: `hotel-gardenazza-badia-abtei`
   - indirizzo: Str. Damez, 55, 39036 Badia BZ
16. **Hotel Gran Ander** — Badia/Abtei
   - slug: `hotel-gran-ander-badia-abtei`
   - indirizzo: Str. Runcac, 29, 39036 Badia BZ
17. **Hotel Italia Corvara** — Badia/Abtei
   - slug: `hotel-italia-corvara-badia-abtei`
   - indirizzo: Str. Col Alt, 20, 39033 Corvara in Badia BZ
18. **Hotel La Müda** — Badia/Abtei
   - slug: `hotel-la-muda-badia-abtei`
   - indirizzo: Strada la Müda, 13, 39036 Badia BZ
19. **Hotel Melodia del Bosco** — Badia/Abtei
   - slug: `hotel-melodia-del-bosco-badia-abtei`
   - indirizzo: Str. Runcac, 8, 39036 Badia BZ
20. **Hotel Miramonti** — Badia/Abtei
   - slug: `hotel-miramonti-badia-abtei`
   - indirizzo: Str. Damez, 42, 39036 Badia BZ
21. **Hotel San Leonardo** — Badia/Abtei
   - slug: `hotel-san-leonardo-badia-abtei`
   - indirizzo: Str. S. Linert, 23, 39036 Badia BZ
22. **Hotel Serena Badia** — Badia/Abtei
   - slug: `hotel-serena-badia-badia-abtei`
   - indirizzo: Str. Pedraces, 32, 39036 Pedraces BZ
23. **Naturhotel Miraval** — Badia/Abtei
   - slug: `naturhotel-miraval-badia-abtei`
   - indirizzo: Str. Sompunt, 19, 39036 Badia BZ
24. **Pension Atlantic** — Badia/Abtei
   - slug: `pension-atlantic-badia-abtei`
   - indirizzo: Str. Pedraces, 5, 39036 Badia BZ
25. **Pension Ciasa Winkler** — Badia/Abtei
   - slug: `pension-ciasa-winkler-badia-abtei`
   - indirizzo: Str. S. Linert, 32, 39036 Badia BZ
26. **Pensione Rungg** — Badia/Abtei
   - slug: `pensione-rungg-badia-abtei`
   - indirizzo: Str. Pedraces, 76, 39036 Badia BZ
27. **Pic Hotel Runcac** — Badia/Abtei
   - slug: `pic-hotel-runcac-badia-abtei`
   - indirizzo: Str. Runcac, 4, 39036 Badia BZ
28. **Sporthotel Teresa** — Badia/Abtei
   - slug: `sporthotel-teresa-badia-abtei`
   - indirizzo: Strada Damez, 64 - Località, Str. Damez, 64, 39036 Pedraces BZ
29. **Ustaria Posta** — Badia/Abtei
   - slug: `ustaria-posta-badia-abtei`
   - indirizzo: Str. Pedraces, 43, 39036 Badia BZ
30. **Agriturismo Fassi** — Badolato
   - slug: `agriturismo-fassi-badolato`
   - indirizzo: Contrada Fassi, 88065 Guardavalle CZ
31. **Agriturismo Villa Vittoria** — Badolato
   - slug: `agriturismo-villa-vittoria-badolato`
   - indirizzo: Contrada Botteria, 88065 Guardavalle CZ
32. **agriturismo zangarsa** — Badolato
   - slug: `agriturismo-zangarsa-badolato`
   - indirizzo: Contrada Zangares, 88060 Badolato CZ
33. **Aquamarine Residence** — Badolato
   - slug: `aquamarine-residence-badolato`
   - indirizzo: Via Giuseppe Verdi, loc.Roella Sotto 12, 88060 Davoli CZ
34. **B & B Stillachiara** — Badolato
   - slug: `b-b-stillachiara-badolato`
   - indirizzo: Vico 1° San Domenico, 6, 88060 Badolato CZ
35. **Casa Vacanza Borgo Antico** — Badolato
   - slug: `casa-vacanza-borgo-antico-badolato`
   - indirizzo: Via Corsica, 8, 88060 Badolato CZ