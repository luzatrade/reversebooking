# Blocco 268/500 — 35 strutture senza descrizione IT

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

1. **Combolo Hotel e Ristorante** — Bianzone
   - slug: `combolo-hotel-e-ristorante-bianzone`
   - indirizzo: Via Roma, 5, 23036 Teglio SO
2. **Foresteria Stazzona** — Bianzone
   - slug: `foresteria-stazzona-bianzone`
   - indirizzo: Via Giambonelli, 23030 Villa di Tirano SO
3. **Hotel Centrale** — Bianzone
   - slug: `hotel-centrale-bianzone`
   - indirizzo: Via Don Luigi Albonico,, Via Antonio Caimi, 27, 23037 Tirano SO
4. **Hotel Miravalle** — Bianzone
   - slug: `hotel-miravalle-bianzone`
   - indirizzo: Via Roma, 70, 23036 Teglio SO
5. **Hotel Ristorante Bellavista Teglio** — Bianzone
   - slug: `hotel-ristorante-bellavista-teglio-bianzone`
   - indirizzo: Via Roma, 32, 23036 Teglio SO
6. **Hotel Ristorante Residence La Rosa** — Bianzone
   - slug: `hotel-ristorante-residence-la-rosa-bianzone`
   - indirizzo: Via Fratelli Lazzaroni, 9, 23036 Teglio SO
7. **IL POSTO AL SOLE B&B e FORESTERIA LOMBARDA** — Bianzone
   - slug: `il-posto-al-sole-b-b-e-foresteria-lombarda-bianzone`
   - indirizzo: Via Somasassa, 31, 23036 Teglio SO
8. **La Vita in Campagna** — Bianzone
   - slug: `la-vita-in-campagna-bianzone`
   - indirizzo: Via Campagna, 61, 23030 Villa di Tirano SO
9. **Terra Hotel | Boutique hotel in the heart of Valtellina** — Bianzone
   - slug: `terra-hotel-boutique-hotel-in-the-heart-of-valte-bianzone`
   - indirizzo: Viale Italia, 77, 23037 Tirano SO
10. **Agriturismo Greppi** — Bianz�
   - slug: `agriturismo-greppi-bianz`
   - indirizzo: Str. Saluggia, 110, 13044 Crescentino VC
11. **Antica Osteria La Colombara** — Bianz�
   - slug: `antica-osteria-la-colombara-bianz`
   - indirizzo: SP7, 5, 13046 Livorno Ferraris VC
12. **Bed & Breakfast Regis** — Bianz�
   - slug: `bed-breakfast-regis-bianz`
   - indirizzo: Via Paolo Regis, 9, 10034 Chivasso TO
13. **Casa del Movimento Lento** — Bianz�
   - slug: `casa-del-movimento-lento-bianz`
   - indirizzo: Via al Castello, 8, 13883 Roppolo BI
14. **Hotel Royal** — Bianz�
   - slug: `hotel-royal-bianz`
   - indirizzo: Via Al Lago, 19, 13886 Viverone BI
15. **Osteria La Colombara** — Bianz�
   - slug: `osteria-la-colombara-bianz`
   - indirizzo: Cascina Michelina, 1 - Colombara, SP7, 5, 13046 Livorno Ferraris VC
16. **Tenuta Favorita** — Bianz�
   - slug: `tenuta-favorita-bianz`
   - indirizzo: Strada della Favorita, 1, 13040 Fontanetto Po VC
17. **AL SUITE** — Biassono
   - slug: `al-suite-biassono`
   - indirizzo: Via S. Rocco, 86, 20851 Lissone MB
18. **AS Hotel Monza** — Biassono
   - slug: `as-hotel-monza-biassono`
   - indirizzo: Viale Lombardia, 76/78, 20900 Monza MB
19. **Helios Hotel** — Biassono
   - slug: `helios-hotel-biassono`
   - indirizzo: Viale Elvezia, 4, 20900 Monza MB
20. **Hotel Motel Ascot** — Biassono
   - slug: `hotel-motel-ascot-biassono`
   - indirizzo: Via Giulio Colzani, 10, 20851 Lissone MB
21. **Hotel Re** — Biassono
   - slug: `hotel-re-biassono`
   - indirizzo: Via Nuova Valassina, 110, 20851 Lissone MB
22. **The Regency Hotel** — Biassono
   - slug: `the-regency-hotel-biassono`
   - indirizzo: V.le Valassina, 230, 20851 Lissone MB
23. **Agriturismo Il Filare** — Bibbiano
   - slug: `agriturismo-il-filare-bibbiano`
   - indirizzo: Strada Monte Rosso, 2, 43024 Bazzano PR
24. **Agriturismo La Vigna Dei Peri** — Bibbiano
   - slug: `agriturismo-la-vigna-dei-peri-bibbiano`
   - indirizzo: Via Ancona, 10, 42020 Quattro Castella RE
25. **Albergo Papillon** — Bibbiano
   - slug: `albergo-papillon-bibbiano`
   - indirizzo: Piazza G. Matteotti, 5, 42020 San Polo d'Enza RE
26. **Albergo Paradise** — Bibbiano
   - slug: `albergo-paradise-bibbiano`
   - indirizzo: Via Ernesto Arduini, 6, 42025 Cavriago RE
27. **B&B - Corte Bebbi** — Bibbiano
   - slug: `b-b-corte-bebbi-bibbiano`
   - indirizzo: Via Lazzaro Spallanzani, 119 - Loc, Via Spallanzani Lazzaro, 119, 42021 Barco RE
28. **B&B Le Tre Gemme** — Bibbiano
   - slug: `b-b-le-tre-gemme-bibbiano`
   - indirizzo: Via Resga, 11, 43022 Montechiarugolo PR
29. **B&B San Giorgio** — Bibbiano
   - slug: `b-b-san-giorgio-bibbiano`
   - indirizzo: Via Mazzola, 8, 43029 Traversetolo PR
30. **Bed and Breakfast Quattro Colli** — Bibbiano
   - slug: `bed-and-breakfast-quattro-colli-bibbiano`
   - indirizzo: Via I. Lenin, 81, 42020 Quattro Castella RE
31. **BORGODIECI Camere e Colazione** — Bibbiano
   - slug: `borgodieci-camere-e-colazione-bibbiano`
   - indirizzo: Via Don Pasquino Borghi, 10, 42021 Bibbiano RE
32. **Hotel Barabba** — Bibbiano
   - slug: `hotel-barabba-bibbiano`
   - indirizzo: Via Filippo Turati, 29, 42020 Roncolo RE
33. **Hotel Conte Verde** — Bibbiano
   - slug: `hotel-conte-verde-bibbiano`
   - indirizzo: Str. per Barco, 1, 42027 Montecchio Emilia RE
34. **Hotel Corte Business** — Bibbiano
   - slug: `hotel-corte-business-bibbiano`
   - indirizzo: Via Bruno Buozzi, 7, 42025 Corte Tegge RE
35. **Hotel Select** — Bibbiano
   - slug: `hotel-select-bibbiano`
   - indirizzo: Via Vittorio Veneto, 10, 42027 Montecchio Emilia RE