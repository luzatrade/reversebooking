# Blocco 244/500 — 35 strutture senza descrizione IT

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

1. **Il Villino Bed & Breakfast** — Belforte del Chienti
   - slug: `il-villino-bed-breakfast-belforte-del-chienti`
   - indirizzo: Via Giuseppe Piccioni, 3, 62020 Belforte del Chienti MC
2. **Interno Marche** — Belforte del Chienti
   - slug: `interno-marche-belforte-del-chienti`
   - indirizzo: Viale Cesare Battisti, 15, 62029 Tolentino MC
3. **Palazzo Bonfranceschi - residenza d'epoca** — Belforte del Chienti
   - slug: `palazzo-bonfranceschi-residenza-d-epoca-belforte-del-chienti`
   - indirizzo: Via Camillo Benso Conte di Cavour, 14, 62020 Belforte del Chienti MC
4. **Agriturismo Casa Ressia** — Belforte Monferrato
   - slug: `agriturismo-casa-ressia-belforte-monferrato`
   - indirizzo: Località Altavilla, 42, 12051 Alba CN
5. **Agriturismo Cascina Binelli** — Belforte Monferrato
   - slug: `agriturismo-cascina-binelli-belforte-monferrato`
   - indirizzo: Borgata Pianezzo, 75, 12063 Dogliani CN
6. **Agriturismo Castello Di Belforte** — Belforte Monferrato
   - slug: `agriturismo-castello-di-belforte-belforte-monferrato`
   - indirizzo: Vocabolo Belforte 36A, Frazione Fiore Di, 06059 Todi PG
7. **Agriturismo Paitin** — Belforte Monferrato
   - slug: `agriturismo-paitin-belforte-monferrato`
   - indirizzo: Località Rivoli, 17, 12051 Alba CN
8. **Al Chiar di Luna** — Belforte Monferrato
   - slug: `al-chiar-di-luna-belforte-monferrato`
   - indirizzo: Cascina Bensi, 32, 15070 Tagliolo Monferrato AL
9. **B&B La Diligenza** — Belforte Monferrato
   - slug: `b-b-la-diligenza-belforte-monferrato`
   - indirizzo: Str. Lercaro, 15, 15076 Ovada AL
10. **Cascina Giardini B&B** — Belforte Monferrato
   - slug: `cascina-giardini-b-b-belforte-monferrato`
   - indirizzo: 12051 Ricca-San Rocco Cherasca CN
11. **Hotel Belforte** — Belforte Monferrato
   - slug: `hotel-belforte-belforte-monferrato`
   - indirizzo: Regione Fornace, 6, 15070 Belforte Monferrato AL
12. **La Dimora di B. Cairoli** — Belforte Monferrato
   - slug: `la-dimora-di-b-cairoli-belforte-monferrato`
   - indirizzo: Via Cairoli, 100, 15076 Ovada AL
13. **Relais Chiarene** — Belforte Monferrato
   - slug: `relais-chiarene-belforte-monferrato`
   - indirizzo: Località Chiarene, n. 5, 12060 Novello CN
14. **Villa Belforte** — Belforte Monferrato
   - slug: `villa-belforte-belforte-monferrato`
   - indirizzo: Via Asti, 29, 14039 Tonco AT
15. **Vitae di Langa - Agriturismo** — Belforte Monferrato
   - slug: `vitae-di-langa-agriturismo-belforte-monferrato`
   - indirizzo: Via Guido Cane, 110, 12055 Valle Talloria CN
16. **B&B Castellani** — Belgioioso
   - slug: `b-b-castellani-belgioioso`
   - indirizzo: Via Giacomo Parodi, 11, 27100 Pavia PV
17. **Hotel Aurora** — Belgioioso
   - slug: `hotel-aurora-belgioioso`
   - indirizzo: Viale Vittorio Emanuele II, 25, 27100 Pavia PV
18. **Hotel Moderno Pavia** — Belgioioso
   - slug: `hotel-moderno-pavia-belgioioso`
   - indirizzo: Viale Vittorio Emanuele II, 41, 27100 Pavia PV
19. **Rooms of Love** — Belgioioso
   - slug: `rooms-of-love-belgioioso`
   - indirizzo: Viale Camillo Golgi, 40, 27100 Pavia PV
20. **Scuderia 100 Pertiche** — Belgioioso
   - slug: `scuderia-100-pertiche-belgioioso`
   - indirizzo: Strada Provinciale ex Strada Statale 412 della Val Tidone, 27019 Villanterio PV
21. **UniHo Hostel** — Belgioioso
   - slug: `uniho-hostel-belgioioso`
   - indirizzo: Via Lombroso, 15, 27100 Pavia PV
22. **Affittacamere - B&B - Via Mazzini** — Belgirate
   - slug: `affittacamere-b-b-via-mazzini-belgirate`
   - indirizzo: Via Mazzini, 12, 28838 Stresa VB
23. **Albergo Riva hotel** — Belgirate
   - slug: `albergo-riva-hotel-belgirate`
   - indirizzo: Via Lungolago, 14, 21038 Leggiuno VA
24. **B&B " Il Folletto del Lago "** — Belgirate
   - slug: `b-b-il-folletto-del-lago-belgirate`
   - indirizzo: CIN : IT103064C1243MAN4Y, Via Santi Giacomo e Filippo, 1, 28838 Levo VB
25. **B&B I Carcioni** — Belgirate
   - slug: `b-b-i-carcioni-belgirate`
   - indirizzo: Via Carcioni, 9a, 28832 Carcioni VB
26. **B&B Il Cappellaio di Erika** — Belgirate
   - slug: `b-b-il-cappellaio-di-erika-belgirate`
   - indirizzo: Via Italia, 114, 28833 Carpugnino VB
27. **B&B il Poggiolo** — Belgirate
   - slug: `b-b-il-poggiolo-belgirate`
   - indirizzo: Via della Motta, 3, 28838 Someraro VB
28. **B&B La Ciliegia Bianca** — Belgirate
   - slug: `b-b-la-ciliegia-bianca-belgirate`
   - indirizzo: Via per Magognino, 3, 28832 Belgirate VB
29. **Bed & Breakfast Torre Lara** — Belgirate
   - slug: `bed-breakfast-torre-lara-belgirate`
   - indirizzo: Via per Lesa, 1, 28832 Belgirate VB
30. **Fruit'n Joy** — Belgirate
   - slug: `fruit-n-joy-belgirate`
   - indirizzo: Via San Biagio, 2, 28838 Stresa VB
31. **Heavenly Lago Maggiore – Casa Vacanze** — Belgirate
   - slug: `heavenly-lago-maggiore-casa-vacanze-belgirate`
   - indirizzo: Via Panorama, 7, 28832 Belgirate VB
32. **Hotel Astoria** — Belgirate
   - slug: `hotel-astoria-belgirate`
   - indirizzo: Corso Umberto I, 31, 28838 Stresa VB
33. **Hotel Boston Stresa** — Belgirate
   - slug: `hotel-boston-stresa-belgirate`
   - indirizzo: Via Duchessa di Genova, 13, 28838 Stresa VB
34. **Hotel Elena** — Belgirate
   - slug: `hotel-elena-belgirate`
   - indirizzo: Piazza Luigi Cadorna, 15, 28838 Stresa VB
35. **Hotel Primavera** — Belgirate
   - slug: `hotel-primavera-belgirate`
   - indirizzo: Via Cavour, 39, 28838 Stresa VB