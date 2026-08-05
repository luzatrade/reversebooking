# Blocco 432/500 — 35 strutture senza descrizione IT

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

1. **B&B L'Infinito** — Carbognano
   - slug: `b-b-l-infinito-carbognano`
   - indirizzo: Via Aldo Moro, 13, 01030 Carbognano VT
2. **Dimore Santa Maria** — Carbognano
   - slug: `dimore-santa-maria-carbognano`
   - indirizzo: Via San Maria, 5, 01030 Carbognano VT
3. **Ros's house** — Carbognano
   - slug: `ros-s-house-carbognano`
   - indirizzo: Via Ugo Petrucci, 5, 01030 Corchiano VT
4. **Agriturismo Cascina San Carlo** — Carbonara al Ticino
   - slug: `agriturismo-cascina-san-carlo-carbonara-al-ticino`
   - indirizzo: 527F+X2 Cascina San Carlo Loc. S. Spirito, Cascina Santo Spirito, 27027 Gropello Cairoli PV
5. **Corte Cairoli B&B** — Carbonara al Ticino
   - slug: `corte-cairoli-b-b-carbonara-al-ticino`
   - indirizzo: Via Cairoli, 13, 27027 Gropello Cairoli PV
6. **Country House** — Carbonara al Ticino
   - slug: `country-house-carbonara-al-ticino`
   - indirizzo: Via Villanova, 5, 27020 Zerbolò PV
7. **Plaza Hotel** — Carbonara al Ticino
   - slug: `plaza-hotel-carbonara-al-ticino`
   - indirizzo: Via Palmiro Togliatti, 39, 27028 San Martino Siccomario PV
8. **Relais Torre dei Torti - Luxury Bed and Breakfast** — Carbonara al Ticino
   - slug: `relais-torre-dei-torti-luxury-bed-and-breakfast-carbonara-al-ticino`
   - indirizzo: Via Torre de Torti, 16, 27051 Cava Manara PV
9. **B&B Nola Casa Hyria** — Carbonara di Nola
   - slug: `b-b-nola-casa-hyria-carbonara-di-nola`
   - indirizzo: V. Nazionale delle Puglie, 160, 80035 Nola NA
10. **Complesso Villa Lina** — Carbonara di Nola
   - slug: `complesso-villa-lina-carbonara-di-nola`
   - indirizzo: Via Muro D'Arce, Via Foce, 84087 Sarno SA
11. **GLAM B&B room** — Carbonara di Nola
   - slug: `glam-b-b-room-carbonara-di-nola`
   - indirizzo: Via Botteghelle, 80047 San Giuseppe Vesuviano NA
12. **Hotel Belsito** — Carbonara di Nola
   - slug: `hotel-belsito-carbonara-di-nola`
   - indirizzo: Via S. Paolo Belsito, 126, 80035 Nola NA
13. **Hotel I Gigli & Ristorante** — Carbonara di Nola
   - slug: `hotel-i-gigli-ristorante-carbonara-di-nola`
   - indirizzo: Via Giacomo Puccini, 32, 80035 Nola NA
14. **Hotel il Giardino degli Aranci a Nola** — Carbonara di Nola
   - slug: `hotel-il-giardino-degli-aranci-a-nola-carbonara-di-nola`
   - indirizzo: Via Parrocchia, 152, 80035 Nola NA
15. **Hotel Saturday** — Carbonara di Nola
   - slug: `hotel-saturday-carbonara-di-nola`
   - indirizzo: Via Nuova Sarno, 80036 Palma Campania NA
16. **Il Poggio Delle Rose** — Carbonara di Nola
   - slug: `il-poggio-delle-rose-carbonara-di-nola`
   - indirizzo: Via Marini Boschetto 3, 83020 Domicella AV
17. **La casa dei coloni** — Carbonara di Nola
   - slug: `la-casa-dei-coloni-carbonara-di-nola`
   - indirizzo: SS367, 80035 Cappella degli Spiriti NA
18. **Masseria Marini - HOTEL** — Carbonara di Nola
   - slug: `masseria-marini-hotel-carbonara-di-nola`
   - indirizzo: Via del Destino, 14, 80047 San Giuseppe NA
19. **Palazzo 22 B&B** — Carbonara di Nola
   - slug: `palazzo-22-b-b-carbonara-di-nola`
   - indirizzo: Via San Pietro, 22, 80035 Nola NA
20. **Raphaëlle Relais** — Carbonara di Nola
   - slug: `raphaelle-relais-carbonara-di-nola`
   - indirizzo: Via S. M. LA Scala, 41, 80047 San Giuseppe NA
21. **B&B Villa Carmen** — Carbonara Scrivia
   - slug: `b-b-villa-carmen-carbonara-scrivia`
   - indirizzo: SP134, 25, 15050 Spineto Scrivia AL
22. **Il Carrettino Country Hotel tortona** — Carbonara Scrivia
   - slug: `il-carrettino-country-hotel-tortona-carbonara-scrivia`
   - indirizzo: Strada Provinciale per Pozzolo Formigaro, 15, 15057 Tortona AL
23. **Malpassuti Resort** — Carbonara Scrivia
   - slug: `malpassuti-resort-carbonara-scrivia`
   - indirizzo: Vicolo A. Cantù, 11, 15050 Carbonara Scrivia AL
24. **Spineto House** — Carbonara Scrivia
   - slug: `spineto-house-carbonara-scrivia`
   - indirizzo: Via Bruno Buozzi, 6, 15050 Spineto Scrivia AL
25. **B&B Siris Affittacamere** — Carbone
   - slug: `b-b-siris-affittacamere-carbone`
   - indirizzo: Contrada Pietrapica, 85032 Chiaromonte PZ
26. **Hotel & Ricevimenti Piccolo Paradiso – Latronico** — Carbone
   - slug: `hotel-ricevimenti-piccolo-paradiso-latronico-carbone`
   - indirizzo: Contrada Torre, KM 17,470, 85043 Latronico PZ
27. **Hotel Mulino Iannarelli** — Carbone
   - slug: `hotel-mulino-iannarelli-carbone`
   - indirizzo: Mezzana Salice, 85030 San Severino Lucano PZ
28. **Hotel Sette e Mezzo** — Carbone
   - slug: `hotel-sette-e-mezzo-carbone`
   - indirizzo: e caduti di, Via Aldo Moro e Caduti Via Fani, 30, 85040 Castelluccio Superiore PZ
29. **Leukòs Bed and Breakfast** — Carbone
   - slug: `leukos-bed-and-breakfast-carbone`
   - indirizzo: Via Ciro Fontana, 85031 Castelsaraceno PZ
30. **Terrazze sul Frido** — Carbone
   - slug: `terrazze-sul-frido-carbone`
   - indirizzo: C/da conocchielle 11, 85040 Viggianello PZ
31. **A casa di Ita** — Carbonera
   - slug: `a-casa-di-ita-carbonera`
   - indirizzo: Via Trieste, 48D, 31020 Fontane TV
32. **B&B Al Parco Storga** — Carbonera
   - slug: `b-b-al-parco-storga-carbonera`
   - indirizzo: Via M. Gandino, 38, 31100 Treviso TV
33. **Bed & Breakfast Via Barbano** — Carbonera
   - slug: `bed-breakfast-via-barbano-carbonera`
   - indirizzo: Via Barbano da Treviso, 22, 31100 Treviso TV
34. **Bed and breakfast Canziane - Treviso** — Carbonera
   - slug: `bed-and-breakfast-canziane-treviso-carbonera`
   - indirizzo: Via Grande di Carbonera, 54, 31030 Carbonera TV
35. **Best Western Titian Inn Hotel Treviso** — Carbonera
   - slug: `best-western-titian-inn-hotel-treviso-carbonera`
   - indirizzo: Via Callalta, 87, 31057 Silea TV