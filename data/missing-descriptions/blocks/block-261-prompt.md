# Blocco 261/500 — 35 strutture senza descrizione IT

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

1. **Air Hotel** — Bertinoro
   - slug: `air-hotel-bertinoro`
   - indirizzo: Via Nereo Morandi, 7, 47121 Forlì FC
2. **All'Ovile** — Bertinoro
   - slug: `all-ovile-bertinoro`
   - indirizzo: Str. Vernacchia Montevescovo, 29, 47014 Meldola FC
3. **B&B del Borgo Bertinoro** — Bertinoro
   - slug: `b-b-del-borgo-bertinoro-bertinoro`
   - indirizzo: Via Giuseppe Mazzini, 35, 47032 Bertinoro FC
4. **Casa delle ginestre** — Bertinoro
   - slug: `casa-delle-ginestre-bertinoro`
   - indirizzo: Via Tomba di Casetto, 736, 47522 Cesena FC
5. **Giardino34** — Bertinoro
   - slug: `giardino34-bertinoro`
   - indirizzo: Via S. Pellegrino Laziosi, 34, 47121 Forlì FC
6. **Grand Hotel Forlì** — Bertinoro
   - slug: `grand-hotel-forli-bertinoro`
   - indirizzo: Via Del Partigiano, 12/bis, 47121 Forlì FC
7. **Hotel Fontanelle** — Bertinoro
   - slug: `hotel-fontanelle-bertinoro`
   - indirizzo: Via Loreta, 271, 47032 Bertinoro FC
8. **Hotel La Colonna** — Bertinoro
   - slug: `hotel-la-colonna-bertinoro`
   - indirizzo: Piazza della Libertà, 8, 47032 Bertinoro FC
9. **Hotel Marta** — Bertinoro
   - slug: `hotel-marta-bertinoro`
   - indirizzo: Via Carlo Cignani, 11, 47121 Forlì FC
10. **Hotel Masini** — Bertinoro
   - slug: `hotel-masini-bertinoro`
   - indirizzo: Corso Giuseppe Garibaldi, 28, 47121 Forlì FC
11. **Hotel Michelangelo Forlì** — Bertinoro
   - slug: `hotel-michelangelo-forli-bertinoro`
   - indirizzo: Via Michelangelo Buonarroti, 4/6, 47122 Forlì FC
12. **Hotel Panorama Bertinoro** — Bertinoro
   - slug: `hotel-panorama-bertinoro-bertinoro`
   - indirizzo: Piazza della Libertà, 11, 47032 Bertinoro FC
13. **la cana dolce** — Bertinoro
   - slug: `la-cana-dolce-bertinoro`
   - indirizzo: Viale Carducci, 151, 47032 Bertinoro FC
14. **Mondo Antico B&B E VICOLETTO Appartamento Vacanza centro storico** — Bertinoro
   - slug: `mondo-antico-b-b-e-vicoletto-appartamento-vacanz-bertinoro`
   - indirizzo: Via Paiuncolo, 9, 47521 Cesena FC
15. **Respiro Glamping** — Bertinoro
   - slug: `respiro-glamping-bertinoro`
   - indirizzo: Via Pianazze, 1879, 47522 Cesena FC
16. **Romea Aparthotel Residence** — Bertinoro
   - slug: `romea-aparthotel-residence-bertinoro`
   - indirizzo: Via Romea, 605, 47522 Cesena FC
17. **affittacamere All'Antico Borgo** — Bertiolo
   - slug: `affittacamere-all-antico-borgo-bertiolo`
   - indirizzo: Via Tagliamento, 16, 33030 Camino Al Tagliamento UD
18. **ALBERTA** — Bertiolo
   - slug: `alberta-bertiolo`
   - indirizzo: Via Latisana, 12, 33032 Bertiolo UD
19. **B&B Dreon** — Bertiolo
   - slug: `b-b-dreon-bertiolo`
   - indirizzo: Via Giuseppe Mazzini, 11, 30025 Fossalta di Portogruaro VE
20. **B&B Gildo** — Bertiolo
   - slug: `b-b-gildo-bertiolo`
   - indirizzo: Via Margherita, 12, 33032 Bertiolo UD
21. **B&B Salvia e Rosmarino** — Bertiolo
   - slug: `b-b-salvia-e-rosmarino-bertiolo`
   - indirizzo: Piazza Mercato, 7, 33032 Bertiolo UD
22. **Bar Oasi Trattoria Affittacamere** — Bertiolo
   - slug: `bar-oasi-trattoria-affittacamere-bertiolo`
   - indirizzo: Via Roma, 107, 33050 Pocenia UD
23. **da Gastone** — Bertiolo
   - slug: `da-gastone-bertiolo`
   - indirizzo: Via Gabriele D'Annunzio, 48, 33050 Flambruzzo UD
24. **EDERA dei Guatto** — Bertiolo
   - slug: `edera-dei-guatto-bertiolo`
   - indirizzo: Via Latisana, 32, 33032 Bertiolo UD
25. **Fiori di Maggio** — Bertiolo
   - slug: `fiori-di-maggio-bertiolo`
   - indirizzo: Via Roveredo, 4, 33033 Muscletto UD
26. **Agriturismo Chioso di Sotto** — Bertonico
   - slug: `agriturismo-chioso-di-sotto-bertonico`
   - indirizzo: Via Roma, 34, 26010 Moscazzano CR
27. **Break Hotel** — Bertonico
   - slug: `break-hotel-bertonico`
   - indirizzo: Via Marconi, 5, 26864 Ospedaletto Lodigiano LO
28. **Casa Jomi Borghetto Lodigiano** — Bertonico
   - slug: `casa-jomi-borghetto-lodigiano-bertonico`
   - indirizzo: Via Troglio, 57, 26812 Borghetto Lodigiano LO
29. **Corte Stella - R.T.A.** — Bertonico
   - slug: `corte-stella-r-t-a-bertonico`
   - indirizzo: Via Antonio Zoncada, 56, 26845 Codogno LO
30. **Trattoria Del Cristo** — Bertonico
   - slug: `trattoria-del-cristo-bertonico`
   - indirizzo: Via del Cristo, 40, 26864 Ospedaletto Lodigiano LO
31. **Agriturismo Bella Ciao** — Berzano di San Pietro
   - slug: `agriturismo-bella-ciao-berzano-di-san-pietro`
   - indirizzo: Località, valle gervasio, 5/A, 14020 Berzano di San Pietro AT
32. **APS Casale Tierra Madre** — Berzano di San Pietro
   - slug: `aps-casale-tierra-madre-berzano-di-san-pietro`
   - indirizzo: Località, valle gervasio, 22, 14020 Berzano di San Pietro AT
33. **Cascina Cavana** — Berzano di San Pietro
   - slug: `cascina-cavana-berzano-di-san-pietro`
   - indirizzo: Asti, Valle Ochera, 34, 14020 Berzano di San Pietro AT
34. **La casa in collina B&B** — Berzano di San Pietro
   - slug: `la-casa-in-collina-b-b-berzano-di-san-pietro`
   - indirizzo: Valle Ochera, 26, 14020 Berzano di San Pietro AT
35. **B&B Casa Surì** — Berzano di Tortona
   - slug: `b-b-casa-suri-berzano-di-tortona`
   - indirizzo: Località Ercolina, 3, 15052 Casalnoceto AL