# Blocco 137/500 — 35 strutture senza descrizione IT

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

1. **Hotel Ristorante La Castellana** — Archi
   - slug: `hotel-ristorante-la-castellana-archi`
   - indirizzo: Via Piana La Fara, 18, 66041 Atessa CH
2. **Hotel Ristorante Leon D'Oro** — Archi
   - slug: `hotel-ristorante-leon-d-oro-archi`
   - indirizzo: Via Giacomo Matteotti, 3, 66032 Castel Frentano CH
3. **Hotel Ristorante Val di Sangro** — Archi
   - slug: `hotel-ristorante-val-di-sangro-archi`
   - indirizzo: c.da san tommaso, 121, 66040 Perano CH
4. **Hotel Select Wellness & Spa** — Archi
   - slug: `hotel-select-wellness-spa-archi`
   - indirizzo: Via Piazzano, 90, 66041 Atessa CH
5. **Il Castello di Perano** — Archi
   - slug: `il-castello-di-perano-archi`
   - indirizzo: Piane d'Archi-Quadroni, 66040 Perano CH
6. **Ristorante Hotel La Masseria** — Archi
   - slug: `ristorante-hotel-la-masseria-archi`
   - indirizzo: Via Piazzano, 69, 66041 Atessa CH
7. **Affittacamere Le Fonti** — Arcidosso
   - slug: `affittacamere-le-fonti-arcidosso`
   - indirizzo: Corso Toscana, 22, 58031 Arcidosso GR
8. **Agriturismo Antico Casale Pozzuolo** — Arcidosso
   - slug: `agriturismo-antico-casale-pozzuolo-arcidosso`
   - indirizzo: Pod. Pozzuolo, 1, 58038 Seggiano GR
9. **Agriturismo Le Casaline - Val d'Orcia** — Arcidosso
   - slug: `agriturismo-le-casaline-val-d-orcia-arcidosso`
   - indirizzo: Località Le Casaline, 58038 Seggiano GR
10. **Agriturismo Molino del Ponte** — Arcidosso
   - slug: `agriturismo-molino-del-ponte-arcidosso`
   - indirizzo: Strada Provinciale Cipressino, 58031 Arcidosso GR
11. **Albergo Generale Cantore - Monte Amiata -** — Arcidosso
   - slug: `albergo-generale-cantore-monte-amiata-arcidosso`
   - indirizzo: Località secondo rifugio Cantore,70, 53021 Abbadia San Salvatore SI
12. **Albergo Le Macinaie** — Arcidosso
   - slug: `albergo-le-macinaie-arcidosso`
   - indirizzo: Prato Delle Macinaie, 58033 Castel del Piano GR
13. **Albergo Ristorante Sella Monte Amiata** — Arcidosso
   - slug: `albergo-ristorante-sella-monte-amiata-arcidosso`
   - indirizzo: Località Vetta Amiata, 53021 Abbadia San Salvatore SI
14. **Bed & Breakfast Amiata Grosseto** — Arcidosso
   - slug: `bed-breakfast-amiata-grosseto-arcidosso`
   - indirizzo: Piazza Indipendenza, 12A, 58031 Arcidosso GR
15. **Grand Hotel Impero - Wellness & Exclusive SPA** — Arcidosso
   - slug: `grand-hotel-impero-wellness-exclusive-spa-arcidosso`
   - indirizzo: Via Roma, 7, 58033 Castel del Piano GR
16. **Hotel Eden** — Arcidosso
   - slug: `hotel-eden-arcidosso`
   - indirizzo: Via roma, 1, 58037 Santa Fiora GR
17. **Hotel Parco dei Faggi - Monte Amiata** — Arcidosso
   - slug: `hotel-parco-dei-faggi-monte-amiata-arcidosso`
   - indirizzo: 58038 Rifugio Cantore GR
18. **La Baita -M. Amiata - Appartamenti B&B** — Arcidosso
   - slug: `la-baita-m-amiata-appartamenti-b-b-arcidosso`
   - indirizzo: Via Pozzo Stella, 52, 58033 Castel del Piano GR
19. **La Colombaia Amiata** — Arcidosso
   - slug: `la-colombaia-amiata-arcidosso`
   - indirizzo: Fonte Canale, 3, 58031 Salaiola GR
20. **La corteccia del faggio** — Arcidosso
   - slug: `la-corteccia-del-faggio-arcidosso`
   - indirizzo: Primo rifugio amiatino 33, 53021 Abbadia San Salvatore SI
21. **La Fuga Luxury Experience** — Arcidosso
   - slug: `la-fuga-luxury-experience-arcidosso`
   - indirizzo: V. delle Mura, 27, 58037 Santa Fiora GR
22. **Locanda La Scottiglia** — Arcidosso
   - slug: `locanda-la-scottiglia-arcidosso`
   - indirizzo: Località Pescina, 29, 58038 Seggiano GR
23. **Ostello Portabene** — Arcidosso
   - slug: `ostello-portabene-arcidosso`
   - indirizzo: Via del Popolo, 34, 58031 Montelaterone GR
24. **Thalassa Locanda B&B e appartamento** — Arcidosso
   - slug: `thalassa-locanda-b-b-e-appartamento-arcidosso`
   - indirizzo: Via Talassese, 94, 58031 Arcidosso GR
25. **Toscana Wellness Resort | BZAR hotels** — Arcidosso
   - slug: `toscana-wellness-resort-bzar-hotels-arcidosso`
   - indirizzo: Località Aiole, 40, 58031 Arcidosso GR
26. **Albergo King** — Arcinazzo Romano
   - slug: `albergo-king-arcinazzo-romano`
   - indirizzo: Via Colle della Volpe, 6, 03014 Fiuggi FR
27. **Ambasciatori Place Hotel** — Arcinazzo Romano
   - slug: `ambasciatori-place-hotel-arcinazzo-romano`
   - indirizzo: Via dei Villini, 8, 03014 Fiuggi FR
28. **Belsito** — Arcinazzo Romano
   - slug: `belsito-arcinazzo-romano`
   - indirizzo: Via delle Rimembranze, 03010 Serrone FR
29. **Casale VerdeLuna Wine Resort** — Arcinazzo Romano
   - slug: `casale-verdeluna-wine-resort-arcinazzo-romano`
   - indirizzo: Località Civitella, 3, 03010 Piglio FR
30. **Hotel Livata Mountain Wellness** — Arcinazzo Romano
   - slug: `hotel-livata-mountain-wellness-arcinazzo-romano`
   - indirizzo: Viale dei Boschi, 28, 00028 Livata RM
31. **Hotel Mondial Park** — Arcinazzo Romano
   - slug: `hotel-mondial-park-arcinazzo-romano`
   - indirizzo: Via Sant'Emiliano, 82, 03014 Fiuggi FR
32. **Hotel San Giorgio** — Arcinazzo Romano
   - slug: `hotel-san-giorgio-arcinazzo-romano`
   - indirizzo: Via Prenestina, 31, 03014 Fiuggi FR
33. **Hotel San Giorgio - Fraz.Altipiani di Arcinazzo** — Arcinazzo Romano
   - slug: `hotel-san-giorgio-fraz-altipiani-di-arcinazzo-arcinazzo-romano`
   - indirizzo: Via Sublacense, 03010 Trevi nel Lazio FR
34. **Hotel Touring Wellness&beauty** — Arcinazzo Romano
   - slug: `hotel-touring-wellness-beauty-arcinazzo-romano`
   - indirizzo: Terme, Via Fonte Nuova, 6, 03014 Fiuggi FR
35. **Le Fattora** — Arcinazzo Romano
   - slug: `le-fattora-arcinazzo-romano`
   - indirizzo: Via Collepetto, 03010 Serrone FR