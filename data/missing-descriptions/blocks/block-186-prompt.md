# Blocco 186/500 — 35 strutture senza descrizione IT

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

1. **Cascina Via Piane Azeglio** — Azeglio
   - slug: `cascina-via-piane-azeglio-azeglio`
   - indirizzo: Via Piane, 78 bis, 10010 Azeglio TO
2. **Country House - Residenza di Campagna Fuori Porta d'Azeglio** — Azeglio
   - slug: `country-house-residenza-di-campagna-fuori-porta-azeglio`
   - indirizzo: Via Roma, 1 bis, 10010 Azeglio TO
3. **Hotel D'Azeglio** — Azeglio
   - slug: `hotel-d-azeglio-azeglio`
   - indirizzo: Via della Mattonaia, 43, 50121 Firenze FI
4. **Hotel Residence d'Azeglio Torino** — Azeglio
   - slug: `hotel-residence-d-azeglio-torino-azeglio`
   - indirizzo: Via Federico Menabrea, 20, 10126 Torino TO
5. **Il Giardino dei Semplici** — Azeglio
   - slug: `il-giardino-dei-semplici-azeglio`
   - indirizzo: Via Roma, 78, 10010 Azeglio TO
6. **AdisArtur Elegant B&B** — Azzanello
   - slug: `adisartur-elegant-b-b-azzanello`
   - indirizzo: Via Munizione, 14, 25034 Orzinuovi BS
7. **Agriturismo Corte Dei Semplici** — Azzanello
   - slug: `agriturismo-corte-dei-semplici-azzanello`
   - indirizzo: Località, Cascina Colombara, 4, 26020 Bordolano CR
8. **Agriturismo Padernello** — Azzanello
   - slug: `agriturismo-padernello-azzanello`
   - indirizzo: Via Cavour, 2, 25022 Borgo San Giacomo BS
9. **Osteria il Becco Fine Affittacamere** — Azzanello
   - slug: `osteria-il-becco-fine-affittacamere-azzanello`
   - indirizzo: Via Roma, 12, 26020 Cumignano sul Naviglio CR
10. **Albergo Villa Conte Riccardi** — Azzano d'Asti
   - slug: `albergo-villa-conte-riccardi-azzano-d-asti`
   - indirizzo: Via al Monte, 9, 14030 Rocca D'arazzo AT
11. **B&B La Crota** — Azzano d'Asti
   - slug: `b-b-la-crota-azzano-d-asti`
   - indirizzo: Località Valterza, 68, 14100 Asti AT
12. **B&B Lanterna delle Fate** — Azzano d'Asti
   - slug: `b-b-lanterna-delle-fate-azzano-d-asti`
   - indirizzo: Via Montemarzo, 26, 14030 Azzano d'Asti AT
13. **B&B Locanda dei fiori** — Azzano d'Asti
   - slug: `b-b-locanda-dei-fiori-azzano-d-asti`
   - indirizzo: Via Montemarzo, 2, 14030 Azzano d'Asti AT
14. **B&B Locanda della Sesta Felicità** — Azzano d'Asti
   - slug: `b-b-locanda-della-sesta-felicita-azzano-d-asti`
   - indirizzo: Via San Pancrazio, 3, 14049 Vaglio Serra AT
15. **Cascina Pontetto** — Azzano d'Asti
   - slug: `cascina-pontetto-azzano-d-asti`
   - indirizzo: Corso Alessandria, 526, 14100 Asti AT
16. **Il Fiordaliso** — Azzano d'Asti
   - slug: `il-fiordaliso-azzano-d-asti`
   - indirizzo: Via de Pianca, 14030 Azzano d'Asti AT
17. **Affittacamere "Al Santuario"** — Azzano Decimo
   - slug: `affittacamere-al-santuario-azzano-decimo`
   - indirizzo: Via Madonna di Rosa, 25, 33078 San Vito al Tagliamento PN
18. **Albergo Ristorante AL PORTICO** — Azzano Decimo
   - slug: `albergo-ristorante-al-portico-azzano-decimo`
   - indirizzo: Via Zuiano, 14, 33082 Azzano Decimo PN
19. **Albergo Tuan Srl** — Azzano Decimo
   - slug: `albergo-tuan-srl-azzano-decimo`
   - indirizzo: Via Nazionale, 3, 33080 Zoppola PN
20. **B&B Ca' Jole** — Azzano Decimo
   - slug: `b-b-ca-jole-azzano-decimo`
   - indirizzo: Via Fratte Praturlone, 33080 Fiume Veneto PN
21. **B&B Delta Majestic** — Azzano Decimo
   - slug: `b-b-delta-majestic-azzano-decimo`
   - indirizzo: Piazzale XX Settembre, 9/int.15, 33170 Pordenone PN
22. **B&B La Barchessa** — Azzano Decimo
   - slug: `b-b-la-barchessa-azzano-decimo`
   - indirizzo: Via S. Pietro in Piagno, 4, 33082 Azzano Decimo PN
23. **Ca' Muliner** — Azzano Decimo
   - slug: `ca-muliner-azzano-decimo`
   - indirizzo: Via Colle, 22, 33082 Azzano Decimo PN
24. **Camere da Mirna di Claudio Piccolo** — Azzano Decimo
   - slug: `camere-da-mirna-di-claudio-piccolo-azzano-decimo`
   - indirizzo: Via Italia, 33083 Villotta PN
25. **Ch Hotel Decimo Massimo** — Azzano Decimo
   - slug: `ch-hotel-decimo-massimo-azzano-decimo`
   - indirizzo: Via Don Bosco, 3, 33082 Azzano Decimo PN
26. **EX-L Hotel** — Azzano Decimo
   - slug: `ex-l-hotel-azzano-decimo`
   - indirizzo: Piazza Guglielmo Marconi, 34, 33080 Fiume Veneto PN
27. **Hotel Antica Locanda** — Azzano Decimo
   - slug: `hotel-antica-locanda-azzano-decimo`
   - indirizzo: Via Sclavons, 53, 33084 Cordenons PN
28. **Hotel Montereale** — Azzano Decimo
   - slug: `hotel-montereale-azzano-decimo`
   - indirizzo: Via Montereale, 18, 33170 Pordenone PN
29. **Hotel Naonis** — Azzano Decimo
   - slug: `hotel-naonis-azzano-decimo`
   - indirizzo: Via Musil, 1, 33084 Cordenons PN
30. **Hotel Ristorante Prata Verde** — Azzano Decimo
   - slug: `hotel-ristorante-prata-verde-azzano-decimo`
   - indirizzo: Via Angelo Dino de Carli, 42, 33080 Prata di Pordenone PN
31. **Hotel Santin** — Azzano Decimo
   - slug: `hotel-santin-azzano-decimo`
   - indirizzo: Viale delle Grazie, 9, 33170 Pordenone PN
32. **Ostello Europa** — Azzano Decimo
   - slug: `ostello-europa-azzano-decimo`
   - indirizzo: Via Pomponio Amalteo, 39, 33078 San Vito al Tagliamento PN
33. **Villa Yemaya** — Azzano Decimo
   - slug: `villa-yemaya-azzano-decimo`
   - indirizzo: Via Divisione Julia, 1, 33072 Casarsa della Delizia PN
34. **Albergo Civico 7** — Azzano Mella
   - slug: `albergo-civico-7-azzano-mella`
   - indirizzo: Viale Michelangelo, 25024 Leno BS
35. **Albergo Hotel Papillon** — Azzano Mella
   - slug: `albergo-hotel-papillon-azzano-mella`
   - indirizzo: Via Padana Superiore, 100, 25046 Cazzago San Martino BS