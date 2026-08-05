# Blocco 72/500 — 35 strutture senza descrizione IT

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

1. **B&B Alghero Aigua centro** — Alghero
   - slug: `b-b-alghero-aigua-centro-alghero`
   - indirizzo: Via Ambrogio Machin, 22, 07041 Alghero SS, Italia
2. **B&B Alghero Horizon** — Alghero
   - slug: `b-b-alghero-horizon-alghero`
   - indirizzo: Via Asfodelo, 17, 07041 Alghero SS, Italia
3. **B&B DaBi** — Alghero
   - slug: `b-b-dabi-alghero`
   - indirizzo: Via Brigata Sassari, 40, 07041 Alghero SS, Italia
4. **B&B Sardegna Sole e Mare (Sardenya Sol i Mar)** — Alghero
   - slug: `b-b-sardegna-sole-e-mare-sardenya-sol-i-mar-alghero`
   - indirizzo: Via Caravaggio, 33, 07041 Alghero SS, Italia
5. **Bed and Breakfast Casa Mia** — Alghero
   - slug: `bed-and-breakfast-casa-mia-alghero`
   - indirizzo: Via XX Settembre, 205, 07041 Alghero SS, Italia
6. **Boipeba Guest House** — Alghero
   - slug: `boipeba-guest-house-alghero`
   - indirizzo: Via L. Canepa, 12, 07041 Alghero SS, Italia
7. **Casa dei Liuti Luxury Guest House** — Alghero
   - slug: `casa-dei-liuti-luxury-guest-house-alghero`
   - indirizzo: Via Carlo Alberto, 70, 07041 Alghero SS, Italia
8. **Casa Felicidad Alguer** — Alghero
   - slug: `casa-felicidad-alguer-alghero`
   - indirizzo: Via Rodolfo Morandi, 2, 07041 Alghero SS, Italia
9. **Da Marilù Alghero - Guest House** — Alghero
   - slug: `da-marilu-alghero-guest-house-alghero`
   - indirizzo: Via Catalogna, 30, 07041 Alghero SS, Italia
10. **Dolmen Guest House** — Alghero
   - slug: `dolmen-guest-house-alghero`
   - indirizzo: Via E. Porrino, 62, 07041 Alghero SS, Italia
11. **Hotel San Francesco** — Alghero
   - slug: `hotel-san-francesco-alghero`
   - indirizzo: Via Ambrogio Machin, 2, 07041 Alghero SS, Italia
12. **Leolù Alghero Guesthouse Bed & Breakfast** — Alghero
   - slug: `leolu-alghero-guesthouse-bed-breakfast-alghero`
   - indirizzo: Via Rodolfo Morandi, 14, 07041 Alghero SS, Italia
13. **Monti Guest House Alghero** — Alghero
   - slug: `monti-guest-house-alghero-alghero`
   - indirizzo: Via Rodolfo Morandi, n 2, 07041 Alghero SS, Italia
14. **Ottocento Guest House** — Alghero
   - slug: `ottocento-guest-house-alghero`
   - indirizzo: Via Santa Barbara, 20, 07041 Alghero SS, Italia
15. **R & D Bed and Breakfast** — Alghero
   - slug: `r-d-bed-and-breakfast-alghero`
   - indirizzo: Via Oristano, 50, 07041 Alghero SS, Italia
16. **Sophora Guest House Alghero** — Alghero
   - slug: `sophora-guest-house-alghero-alghero`
   - indirizzo: Via Alberto La Marmora, 86, 07041 Alghero SS, Italia
17. **Tidu's home B&B** — Alghero
   - slug: `tidu-s-home-b-b-alghero`
   - indirizzo: Via Pasquale Paoli, 103, 07041 Alghero SS, Italia
18. **B & B Ametista Bergamo** — Algua
   - slug: `b-b-ametista-bergamo-algua`
   - indirizzo: Via IV Novembre, 54, 24010 Ponteranica BG
19. **B&B Angela Casa Vacanze Piccolo Appartamento** — Algua
   - slug: `b-b-angela-casa-vacanze-piccolo-appartamento-algua`
   - indirizzo: Via Giuseppe Mazzini, 90, 24023 Clusone BG
20. **B&B Bergamo Alta** — Algua
   - slug: `b-b-bergamo-alta-algua`
   - indirizzo: Via S. Lorenzo, 24, 24129 Bergamo BG
21. **B&B Cascina Ronco Grande** — Algua
   - slug: `b-b-cascina-ronco-grande-algua`
   - indirizzo: VIA Cascina ronco grande, 24060 Cenate Sopra BG
22. **B&B CENTRALE** — Algua
   - slug: `b-b-centrale-algua`
   - indirizzo: Via IV Novembre, 11, 24050 Orio al Serio BG
23. **B&B LEO** — Algua
   - slug: `b-b-leo-algua`
   - indirizzo: Frazione Rigosa, 49, 24010 Algua BG
24. **B&B San Francesco Class** — Algua
   - slug: `b-b-san-francesco-class-algua`
   - indirizzo: Via Monte Zucco, 1, 24016 San Pellegrino Terme BG
25. **Baita nel Bosco | BnB Rigosa** — Algua
   - slug: `baita-nel-bosco-bnb-rigosa-algua`
   - indirizzo: località Piazzol de Fopp, 3, 24010 Algua BG
26. **Bed & Breakfast Nettuno** — Algua
   - slug: `bed-breakfast-nettuno-algua`
   - indirizzo: Via Roma, 5, 24040 Comun Nuovo BG
27. **Bergamo Alta Guest House** — Algua
   - slug: `bergamo-alta-guest-house-algua`
   - indirizzo: Via Gombito, 4, 24129 Bergamo BG
28. **BGY Airport Guesthouse** — Algua
   - slug: `bgy-airport-guesthouse-algua`
   - indirizzo: Via Aldo Moro, 10, 24050 Nuova Betosca BG
29. **Cà Gioel** — Algua
   - slug: `ca-gioel-algua`
   - indirizzo: Via Martiri Libertà, 4, 24010 Ubiale Clanezzo BG
30. **GIO’EL Happiness Guest House** — Algua
   - slug: `gio-el-happiness-guest-house-algua`
   - indirizzo: Via Vittore Ghislandi, 55, 24125 Bergamo BG
31. **Sotto l'Alben** — Algua
   - slug: `sotto-l-alben-algua`
   - indirizzo: Via Roma, 697, 24013 Oltre il Colle BG
32. **Stay Bergamo Guesthouse** — Algua
   - slug: `stay-bergamo-guesthouse-algua`
   - indirizzo: Via S. Giorgio, 17, 24122 Bergamo BG
33. **Agriturismo "La Targa"** — Alia
   - slug: `agriturismo-la-targa-alia`
   - indirizzo: SS120, Km 5, 90052 Cerda PA
34. **Agriturismo Serra Moneta** — Alia
   - slug: `agriturismo-serra-moneta-alia`
   - indirizzo: Contrada Margimuto, 92020 Santo Stefano Quisquina AG
35. **B&B De Spuches House Via Liccio n.40/A Caccamo** — Alia
   - slug: `b-b-de-spuches-house-via-liccio-n-40-a-caccamo-alia`
   - indirizzo: Via Liccio, Via Siragusa, 90012 Caccamo PA