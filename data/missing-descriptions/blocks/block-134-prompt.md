# Blocco 134/500 — 35 strutture senza descrizione IT

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

1. **Le Sei Palme** — Arborea
   - slug: `le-sei-palme-arborea`
   - indirizzo: Strada a Mare, 6, 09092 Arborea OR
2. **Locanda del Gallo Bianco** — Arborea
   - slug: `locanda-del-gallo-bianco-arborea`
   - indirizzo: Piazza Maria Ausiliatrice, 8/10, 09092 Arborea OR
3. **Memo's Affittacamere - Room & Breakfast-** — Arborea
   - slug: `memo-s-affittacamere-room-breakfast-arborea`
   - indirizzo: Strada 26 est, 09092 Arborea OR
4. **Mistral 2 Hotel** — Arborea
   - slug: `mistral-2-hotel-arborea`
   - indirizzo: Via XX Settembre, 34, 09170 Oristano OR
5. **Agriturismo La Biandrina** — Arborio
   - slug: `agriturismo-la-biandrina-arborio`
   - indirizzo: Via Cascina Massara, 1, 28064 Carpignano Sesia NO
6. **Albergo L'Angolo** — Arborio
   - slug: `albergo-l-angolo-arborio`
   - indirizzo: via torino, 3, 13040 Carisio VC
7. **Albergo ristorante Vittoria** — Arborio
   - slug: `albergo-ristorante-vittoria-arborio`
   - indirizzo: Piazza Verdi, 1, 13048 Santhià VC
8. **Albergo Tina** — Arborio
   - slug: `albergo-tina-arborio`
   - indirizzo: Via G. Matteotti, 21, 13836 Cossato BI
9. **B&b Villa Sofia CIN IT003065B4KE2KB9YH** — Arborio
   - slug: `b-b-villa-sofia-cin-it003065b4ke2kb9yh-arborio`
   - indirizzo: Via Don Giovanni Francione, 28073 Fara Novarese NO
10. **Casa Il Grappolo** — Arborio
   - slug: `casa-il-grappolo-arborio`
   - indirizzo: Piazza Umberto 1°, 2, 28015 Agnellengo NO
11. **Cravero Osteria Contemporanea - Rooms** — Arborio
   - slug: `cravero-osteria-contemporanea-rooms-arborio`
   - indirizzo: Via Novara, 8, 28010 Caltignaga NO
12. **Hotel Ristorante Paladini** — Arborio
   - slug: `hotel-ristorante-paladini-arborio`
   - indirizzo: Str. Complanare, 16, 13040 Carisio VC
13. **La Bettola** — Arborio
   - slug: `la-bettola-arborio`
   - indirizzo: SS Vercelli-Biella, 4, 13040 Carisio VC
14. **Locanda dei Tigli** — Arborio
   - slug: `locanda-dei-tigli-arborio`
   - indirizzo: Frazione Ponzone, 260, 13835 Valdilana BI
15. **Locanda della Stazione** — Arborio
   - slug: `locanda-della-stazione-arborio`
   - indirizzo: Via Francesco Cesone, 12, 13853 Lessona BI
16. **Resort Al Castello - Hibou Bistrot** — Arborio
   - slug: `resort-al-castello-hibou-bistrot-arborio`
   - indirizzo: Via S. Giuseppe, 15, 28064 Sillavengo NO
17. **Sole** — Arborio
   - slug: `sole-arborio`
   - indirizzo: Via Borgosesia, 13045 Gattinara VC
18. **Tenuta Valtoppa** — Arborio
   - slug: `tenuta-valtoppa-arborio`
   - indirizzo: /B, Via Fiume Sesia, 1, 28064 Sillavengo NO
19. **VICOLUNGO Glamour Lodge & Spa** — Arborio
   - slug: `vicolungo-glamour-lodge-spa-arborio`
   - indirizzo: Via Case Sparse, 1, 28060 Vicolungo NO
20. **Agriturismo Costa Verde** — Arbus
   - slug: `agriturismo-costa-verde-arbus`
   - indirizzo: Località Pitzuamu, 09031 Arbus VS
21. **Agriturismo l'Aquila Arbus** — Arbus
   - slug: `agriturismo-l-aquila-arbus-arbus`
   - indirizzo: Loc. Punta Is Gennas, 09031 Arbus VS
22. **Agriturismo Rocce Bianche** — Arbus
   - slug: `agriturismo-rocce-bianche-arbus`
   - indirizzo: Loc. Bidderdi, 09031 Arbus VS
23. **Anima Sardinia** — Arbus
   - slug: `anima-sardinia-arbus`
   - indirizzo: LOC. Gutturu Mandara S.P. 83 33,840 km 09010 Fluminimaggiore, 09010 fluminimnaggiore CI
24. **b&b antoclo** — Arbus
   - slug: `b-b-antoclo-arbus`
   - indirizzo: Via Sassari, 103, 09039 Villacidro VS
25. **B&B Babay** — Arbus
   - slug: `b-b-babay-arbus`
   - indirizzo: SD IT, Via G. Carducci, 94, 09036 Guspini VS
26. **B&B L'Asfodelo** — Arbus
   - slug: `b-b-l-asfodelo-arbus`
   - indirizzo: Via Antas, 40, 09010 Fluminimaggiore CI
27. **B&B La Genuina** — Arbus
   - slug: `b-b-la-genuina-arbus`
   - indirizzo: Via G.Mazzini, 29, 09036 Guspini VS
28. **B&B/Affittacamere Ba.Lù.** — Arbus
   - slug: `b-b-affittacamere-ba-lu-arbus`
   - indirizzo: Via Gioacchino Rossini, 1/3, 09036 Guspini CI
29. **centro di turismo equestre Shangrila'** — Arbus
   - slug: `centro-di-turismo-equestre-shangrila-arbus`
   - indirizzo: Via San Giovanni, 09010 Fluminimaggiore CI
30. **Domo Villa Argoi** — Arbus
   - slug: `domo-villa-argoi-arbus`
   - indirizzo: Loc. Punta Argoi, 09031 Ingurtosu VS
31. **Hotel Corsaro Nero** — Arbus
   - slug: `hotel-corsaro-nero-arbus`
   - indirizzo: Localita Costa Verde, 09031 Arbus VS
32. **Hotel Le Dune Piscinas** — Arbus
   - slug: `hotel-le-dune-piscinas-arbus`
   - indirizzo: via Bau, 1, località Piscinas, di, 09031 Ingurtosu VS
33. **Hotel Meridiana** — Arbus
   - slug: `hotel-meridiana-arbus`
   - indirizzo: Via Repubblica, 172, 09031 Arbus VS
34. **Hotel Tarthesh** — Arbus
   - slug: `hotel-tarthesh-arbus`
   - indirizzo: Via Parigi, snc, 09036 Guspini VS
35. **Il Quinto Moro** — Arbus
   - slug: `il-quinto-moro-arbus`
   - indirizzo: Vico I Costituzione, 4, 09031 Arbus CI