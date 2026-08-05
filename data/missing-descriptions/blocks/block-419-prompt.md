# Blocco 419/500 — 35 strutture senza descrizione IT

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

1. **Tufaro B&B** — Capodrise
   - slug: `tufaro-b-b-capodrise`
   - indirizzo: Via S. Lorenzo, 3, 81047 Macerata Campania CE
2. **Valentino Bed and Breakfast** — Capodrise
   - slug: `valentino-bed-and-breakfast-capodrise`
   - indirizzo: Via Retella, 81020 Capodrise CE
3. **Casa Campanella Resort** — Capoliveri
   - slug: `casa-campanella-resort-capoliveri`
   - indirizzo: Localita' Madonnina, 1, 57031 Capoliveri LI
4. **Country Hotel Residence Pilade** — Capoliveri
   - slug: `country-hotel-residence-pilade-capoliveri`
   - indirizzo: Località Mola, 5, 57031 Mola LI
5. **Elba Travels** — Capoliveri
   - slug: `elba-travels-capoliveri`
   - indirizzo: Localita' Morcone, 23, 57031 Capoliveri LI
6. **Hotel Anfora** — Capoliveri
   - slug: `hotel-anfora-capoliveri`
   - indirizzo: Località Naregno, 57031 Naregno LI
7. **Hotel Antares** — Capoliveri
   - slug: `hotel-antares-capoliveri`
   - indirizzo: 57031 Lido di Capoliveri LI
8. **Hotel Belmare** — Capoliveri
   - slug: `hotel-belmare-capoliveri`
   - indirizzo: Banchina 4 Novembre, 21, 57036 Porto Azzurro LI
9. **Hotel Capo di Stella** — Capoliveri
   - slug: `hotel-capo-di-stella-capoliveri`
   - indirizzo: Via Capo di Stella, 57031 Lacona LI
10. **Hotel Dino** — Capoliveri
   - slug: `hotel-dino-capoliveri`
   - indirizzo: Localita' Pareti, 1, 57031 Capoliveri LI
11. **Hotel e Residence Cala di Mola** — Capoliveri
   - slug: `hotel-e-residence-cala-di-mola-capoliveri`
   - indirizzo: Via Provinciale Ovest, 131, 57036 Porto Azzurro LI
12. **Hotel Frank's** — Capoliveri
   - slug: `hotel-frank-s-capoliveri`
   - indirizzo: Località Naregno, 34, 57031 Capoliveri LI
13. **Hotel Golfo Azzurro** — Capoliveri
   - slug: `hotel-golfo-azzurro-capoliveri`
   - indirizzo: Via Claris Appiani, 5, 57031 Capoliveri LI
14. **Hotel Plaza** — Capoliveri
   - slug: `hotel-plaza-capoliveri`
   - indirizzo: Loc. Fanaletto, 1, 57036 Porto Azzurro LI
15. **Hotel Stella Maris** — Capoliveri
   - slug: `hotel-stella-maris-capoliveri`
   - indirizzo: Localita' Pareti, 57031 Capoliveri LI
16. **Hotel Villa Rodriguez - B&B Capoliveri Isola d'Elba** — Capoliveri
   - slug: `hotel-villa-rodriguez-b-b-capoliveri-isola-d-elb-capoliveri`
   - indirizzo: Loc, 57031 Naregno LI
17. **I Fiori di Salici** — Capoliveri
   - slug: `i-fiori-di-salici-capoliveri`
   - indirizzo: località salici, 2, 57031 Capoliveri LI
18. **Innamorata - Capoliveri (li)** — Capoliveri
   - slug: `innamorata-capoliveri-li-capoliveri`
   - indirizzo: Via Innamorata, 13, 57031 Innamorata LI
19. **JR Resort Elba International** — Capoliveri
   - slug: `jr-resort-elba-international-capoliveri`
   - indirizzo: Località Baia delle Fontanelle, 57031 Naregno LI
20. **Le Acacie Hotel & Residence Isola d'Elba** — Capoliveri
   - slug: `le-acacie-hotel-residence-isola-d-elba-capoliveri`
   - indirizzo: Località Naregno, 57031 Capoliveri, Isola d' Elba LI
21. **Le Calanchiole Camping Village isola d'Elba** — Capoliveri
   - slug: `le-calanchiole-camping-village-isola-d-elba-capoliveri`
   - indirizzo: 13 Localita' Calanchiole, 57031 Capoliveri LI
22. **Residential Hotel Villaggio Innamorata** — Capoliveri
   - slug: `residential-hotel-villaggio-innamorata-capoliveri`
   - indirizzo: 57031 Innamorata LI
23. **Agriturismo Albergotti** — Capolona
   - slug: `agriturismo-albergotti-capolona`
   - indirizzo: Località Ceciliano, 78, 52100 Arezzo AR
24. **AGRITURISMO Azienda Agricola Il Pozzo** — Capolona
   - slug: `agriturismo-azienda-agricola-il-pozzo-capolona`
   - indirizzo: Località Il Pozzo, 31b, 52010 Capolona AR
25. **Agriturismo Borgo Ornina** — Capolona
   - slug: `agriturismo-borgo-ornina-capolona`
   - indirizzo: Strada per Ornina, 121, 52016 Castel Focognano AR
26. **Agriturismo Cuprena** — Capolona
   - slug: `agriturismo-cuprena-capolona`
   - indirizzo: Località Marcena, 59, 52100 Arezzo AR
27. **Agriturismo Molinvecchio sul Capraia** — Capolona
   - slug: `agriturismo-molinvecchio-sul-capraia-capolona`
   - indirizzo: Località L'Abate, 52010 Talla AR
28. **Agriturismo Rossodisera** — Capolona
   - slug: `agriturismo-rossodisera-capolona`
   - indirizzo: Località Libbia, 9, 52100 Arezzo AR
29. **B&B Lavanda e Rosmarino** — Capolona
   - slug: `b-b-lavanda-e-rosmarino-capolona`
   - indirizzo: Località il Cipresso, 187, 52010 Cenina AR
30. **Bio Agriturismo Il Vigno** — Capolona
   - slug: `bio-agriturismo-il-vigno-capolona`
   - indirizzo: Localita' Il Vigno 262, 52033 Caprese Michelangelo AR
31. **Casina della Burraia** — Capolona
   - slug: `casina-della-burraia-capolona`
   - indirizzo: loc La casina 46, 52010 Subbiano AR
32. **Fattoria de Toscani** — Capolona
   - slug: `fattoria-de-toscani-capolona`
   - indirizzo: Località Ornina Bassa 109-A, 52016 Castel Focognano AR
33. **Hotel le Capanne** — Capolona
   - slug: `hotel-le-capanne-capolona`
   - indirizzo: Località Il Matto, 44/45, 52040 Arezzo AR
34. **Il Casotto** — Capolona
   - slug: `il-casotto-capolona`
   - indirizzo: Localita, Via di Vallebona, 83, 52010 Chiusi della Verna AR
35. **Il Paradiso** — Capolona
   - slug: `il-paradiso-capolona`
   - indirizzo: Località il Paradiso, 306, 52010 Capolona AR