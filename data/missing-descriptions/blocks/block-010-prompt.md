# Blocco 10/500 — 35 strutture senza descrizione IT

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

1. **Dolcedorme del Pollino** — Acquaformosa
   - slug: `dolcedorme-del-pollino-acquaformosa`
   - indirizzo: Contrada Campotenese, 87016 Morano Calabro CS
2. **Green Bed And Breakfast** — Acquaformosa
   - slug: `green-bed-and-breakfast-acquaformosa`
   - indirizzo: Via Acquaformosa, 10, 87012 Castrovillari CS
3. **Hotel Food & Drink** — Acquaformosa
   - slug: `hotel-food-drink-acquaformosa`
   - indirizzo: Via Aldo Moro, 14, 87042 Altomonte CS
4. **Hotel Toscano** — Acquaformosa
   - slug: `hotel-toscano-acquaformosa`
   - indirizzo: Contrada Canna, 29, 87040 Tarsia CS
5. **Ka Millordi** — Acquaformosa
   - slug: `ka-millordi-acquaformosa`
   - indirizzo: Vico Ruga Carso, 87010 Frascineto CS
6. **LA COSTA affittacamere ristorante b&b** — Acquaformosa
   - slug: `la-costa-affittacamere-ristorante-b-b-acquaformosa`
   - indirizzo: Località Costa Del Mulino, 87020 Orsomarso CS
7. **Rifugio Montano** — Acquaformosa
   - slug: `rifugio-montano-acquaformosa`
   - indirizzo: Valle del Fiume Argentino, 87020 Orsomarso CS
8. **Ristorante Hotel Barbieri** — Acquaformosa
   - slug: `ristorante-hotel-barbieri-acquaformosa`
   - indirizzo: Via Italo Barbieri, 30, 87042 Altomonte CS
9. **Ristorante Pizzeria Bed and Breakfast INSONNIA** — Acquaformosa
   - slug: `ristorante-pizzeria-bed-and-breakfast-insonnia-acquaformosa`
   - indirizzo: Via Piano della Fiera, SNc, 87010 San Sosti CS
10. **Tik Tak Bed and Breakfast** — Acquaformosa
   - slug: `tik-tak-bed-and-breakfast-acquaformosa`
   - indirizzo: Via Orologio, 62, 87020 Verbicaro CS
11. **Agriturismo Colombare** — Acquafredda
   - slug: `agriturismo-colombare-acquafredda`
   - indirizzo: Str. Casalmoro, 20, 46042 Castel Goffredo MN
12. **Albergo La Piana** — Acquafredda
   - slug: `albergo-la-piana-acquafredda`
   - indirizzo: Str. Montichiari, 67, 25016 Ghedi BS
13. **Albergo Ristorante Agriturismo "Al Ciliegio" di Filippini Angela** — Acquafredda
   - slug: `albergo-ristorante-agriturismo-al-ciliegio-di-fi-acquafredda`
   - indirizzo: Via Mantova, 2, 46040 Casaloldo MN
14. **Albergo Ristorante La Pieve** — Acquafredda
   - slug: `albergo-ristorante-la-pieve-acquafredda`
   - indirizzo: Via Giacomo Matteotti, 14, 46046 Medole MN
15. **Albergo Villa Francesca Beauty Spa Isorella** — Acquafredda
   - slug: `albergo-villa-francesca-beauty-spa-isorella-acquafredda`
   - indirizzo: via statale, 45, 25010 Isorella BS
16. **AMIRA PALACE HOTEL** — Acquafredda
   - slug: `amira-palace-hotel-acquafredda`
   - indirizzo: Via Svizzera, 9B, 46042 Castel Goffredo MN
17. **B&B Il Fienile** — Acquafredda
   - slug: `b-b-il-fienile-acquafredda`
   - indirizzo: Via Fenil Salò, 4, 25011 Calcinato BS
18. **B&B Santa Cristina** — Acquafredda
   - slug: `b-b-santa-cristina-acquafredda`
   - indirizzo: Via Bornate, 15, 25018 Montichiari BS
19. **Bellavista** — Acquafredda
   - slug: `bellavista-acquafredda`
   - indirizzo: Via Soldana, 8, 46043 Medole MN
20. **Civico 43** — Acquafredda
   - slug: `civico-43-acquafredda`
   - indirizzo: Via Madonna del Castello, 43, 25013 Carpenedolo BS
21. **Hotel Club San Diego** — Acquafredda
   - slug: `hotel-club-san-diego-acquafredda`
   - indirizzo: Via Nazionale, 59, 85046 Acquafredda PZ
22. **Hotel Ristorante Pizzeria Faro** — Acquafredda
   - slug: `hotel-ristorante-pizzeria-faro-acquafredda`
   - indirizzo: Via Mantova, 60, 25018 Montichiari BS
23. **Hotel Spa Villa del Mare** — Acquafredda
   - slug: `hotel-spa-villa-del-mare-acquafredda`
   - indirizzo: Via Acquafredda, SS 18 Tirrena Inferiore, 7, 85046 Maratea PZ
24. **La Spia d'Italia Hotel & Ristorante** — Acquafredda
   - slug: `la-spia-d-italia-hotel-ristorante-acquafredda`
   - indirizzo: Via dei Francesi, 2, 46040 Solferino MN
25. **La Stazione Hotel(LA VECCHIA TRAMVIA)** — Acquafredda
   - slug: `la-stazione-hotel-la-vecchia-tramvia-acquafredda`
   - indirizzo: Viale Erasmo Boschetti, 51, 46043 Castiglione delle Stiviere MN
26. **Le Stanze Di Duchessa** — Acquafredda
   - slug: `le-stanze-di-duchessa-acquafredda`
   - indirizzo: Via Andrea Botturi, 33, 46042 Castel Goffredo MN
27. **Les Suites** — Acquafredda
   - slug: `les-suites-acquafredda`
   - indirizzo: Via Adami, 37, 46041 Asola MN
28. **Monticlaris Foresteria Self Contained** — Acquafredda
   - slug: `monticlaris-foresteria-self-contained-acquafredda`
   - indirizzo: Viale Europa, 6, 25018 Montichiari BS
29. **Palazzo Bed and Breakfast** — Acquafredda
   - slug: `palazzo-bed-and-breakfast-acquafredda`
   - indirizzo: Via Macallè, 13, 25012 Mezzane BS
30. **Park Hotel Ristorante Pizzeria** — Acquafredda
   - slug: `park-hotel-ristorante-pizzeria-acquafredda`
   - indirizzo: 46040 Casalmoro MN, Italia
31. **Agriturismo Alla Vecchia Quercia** — Acqualagna
   - slug: `agriturismo-alla-vecchia-quercia-acqualagna`
   - indirizzo: Via Montaiate, 26, 61045 Pergola PU
32. **Albergo Italia - Urbino (pu)** — Acqualagna
   - slug: `albergo-italia-urbino-pu-acqualagna`
   - indirizzo: Corso Giuseppe Garibaldi, 32, 61029 Urbino PU
33. **Albergo Leon D'Oro** — Acqualagna
   - slug: `albergo-leon-d-oro-acqualagna`
   - indirizzo: Via Flaminia, 213, 61041 Acqualagna PU
34. **Albergo Shine Acqualagna** — Acqualagna
   - slug: `albergo-shine-acqualagna-acqualagna`
   - indirizzo: Via Aldo Gamba, 56, 61041 Acqualagna PU
35. **B & B Casa Filippini** — Acqualagna
   - slug: `b-b-casa-filippini-acqualagna`
   - indirizzo: P.za Mercato, 3, 61034 Fossombrone PU