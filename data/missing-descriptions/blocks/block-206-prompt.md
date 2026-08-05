# Blocco 206/500 — 35 strutture senza descrizione IT

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

1. **Hotel Medea** — Baldissero d'Alba
   - slug: `hotel-medea-baldissero-d-alba`
   - indirizzo: Corso Unità d'Italia, 64d, 12051 Alba CN
2. **L'Ottavo Sapore - Ospitalità Rurale** — Baldissero d'Alba
   - slug: `l-ottavo-sapore-ospitalita-rurale-baldissero-d-alba`
   - indirizzo: Località Avai, 44.789436009446526, 7.916596136795743, 12040 Monteu Roero CN
3. **La collina dei Passeri** — Baldissero d'Alba
   - slug: `la-collina-dei-passeri-baldissero-d-alba`
   - indirizzo: Str. Meccia, 5, 12060 Pocapaglia CN
4. **La noisette B&B** — Baldissero d'Alba
   - slug: `la-noisette-b-b-baldissero-d-alba`
   - indirizzo: Via Stazione, 34, 12066 Monticello d'Alba CN
5. **Parco Didattico Le Colline di Giuca C/O Agriturismo I Bageta** — Baldissero d'Alba
   - slug: `parco-didattico-le-colline-di-giuca-c-o-agrituri-baldissero-d-alba`
   - indirizzo: Località Sigola, 36, 12040 Baldissero d'Alba CN
6. **Pocoburro Ca' d'arte** — Baldissero d'Alba
   - slug: `pocoburro-ca-d-arte-baldissero-d-alba`
   - indirizzo: Via Castello, 2, 12040 Montaldo Roero CN
7. **Villa Adriana** — Baldissero d'Alba
   - slug: `villa-adriana-baldissero-d-alba`
   - indirizzo: Vicolo Fossaretto, 6, 12042 Bra CN
8. **Agriturismo Ai Guiet** — Baldissero Torinese
   - slug: `agriturismo-ai-guiet-baldissero-torinese`
   - indirizzo: Via Superga, 48, 10020 Baldissero Torinese TO
9. **azienda agricola La Collina di Laura Bartolomeo** — Baldissero Torinese
   - slug: `azienda-agricola-la-collina-di-laura-bartolomeo-baldissero-torinese`
   - indirizzo: Via Superga, 47/11, 10020 Baldissero Torinese TO
10. **B&B Il Sogno** — Baldissero Torinese
   - slug: `b-b-il-sogno-baldissero-torinese`
   - indirizzo: Corso Palermo, 46, 10152 Torino TO
11. **B&B Il Sussurro Della Collina** — Baldissero Torinese
   - slug: `b-b-il-sussurro-della-collina-baldissero-torinese`
   - indirizzo: Via Lunga, 74, 10099 San Mauro Torinese TO
12. **CXTurin | Vanchiglia Campus & Hotel** — Baldissero Torinese
   - slug: `cxturin-vanchiglia-campus-hotel-baldissero-torinese`
   - indirizzo: Corso Regina Margherita, 2, 10153 Torino TO
13. **Hotel Elite** — Baldissero Torinese
   - slug: `hotel-elite-baldissero-torinese`
   - indirizzo: Via Trento, 35, 10099 San Mauro Torinese TO
14. **Hotel La Pace Sas** — Baldissero Torinese
   - slug: `hotel-la-pace-sas-baldissero-torinese`
   - indirizzo: Via Roma, 36, 10099 San Mauro Torinese TO
15. **Hotel Miramonti** — Baldissero Torinese
   - slug: `hotel-miramonti-baldissero-torinese`
   - indirizzo: P.za Derna, 238, 10154 Torino TO
16. **Hotel Ponte Sassi** — Baldissero Torinese
   - slug: `hotel-ponte-sassi-baldissero-torinese`
   - indirizzo: Piazza Alberto Pasini, 3, 10132 Torino TO
17. **Hotel Residence** — Baldissero Torinese
   - slug: `hotel-residence-baldissero-torinese`
   - indirizzo: Via Ribordone, 12, 10156 Torino TO
18. **Loft Regio Parco** — Baldissero Torinese
   - slug: `loft-regio-parco-baldissero-torinese`
   - indirizzo: Via Modena, 31, 10152 Torino TO
19. **TRE MERLOT** — Baldissero Torinese
   - slug: `tre-merlot-baldissero-torinese`
   - indirizzo: Via Chieri, 66/2, 10020 Baldissero Torinese TO
20. **AmarMare Bed & Breakfast** — Balestrate
   - slug: `amarmare-bed-breakfast-balestrate`
   - indirizzo: Via Panorama, 90047 Partinico PA
21. **b&b Casa Ruffino** — Balestrate
   - slug: `b-b-casa-ruffino-balestrate`
   - indirizzo: Via Madonna del Ponte, 49, 90041 Balestrate PA
22. **B&B I TRAMONTI DEL GOLFO** — Balestrate
   - slug: `b-b-i-tramonti-del-golfo-balestrate`
   - indirizzo: Via Pio la Torre, 90041 Balestrate PA
23. **B&B Stanze del Mare** — Balestrate
   - slug: `b-b-stanze-del-mare-balestrate`
   - indirizzo: Via Libertà, 38, 90041 Balestrate PA
24. **Balestrate Center Rooms** — Balestrate
   - slug: `balestrate-center-rooms-balestrate`
   - indirizzo: Via Pitrè, 17, 90041 Balestrate PA
25. **Bed and Breakfast "La casa sul mare "** — Balestrate
   - slug: `bed-and-breakfast-la-casa-sul-mare-balestrate`
   - indirizzo: Via della Repubblica, 13, 90041 Balestrate PA
26. **Casa Quinzio B&B** — Balestrate
   - slug: `casa-quinzio-b-b-balestrate`
   - indirizzo: Via D.d'Aosta, 99, 90041 Balestrate PA
27. **Case Playa** — Balestrate
   - slug: `case-playa-balestrate`
   - indirizzo: Contrada Forgia, 90041 Balestrate PA
28. **Hotel Costa Azul** — Balestrate
   - slug: `hotel-costa-azul-balestrate`
   - indirizzo: Contrada Forgia, 90041 Balestrate PA
29. **Hotel Marina Holiday Resort & Spa** — Balestrate
   - slug: `hotel-marina-holiday-resort-spa-balestrate`
   - indirizzo: Via Riva dei Pescatori, s.n., Via del Mare, 1, 90041 Balestrate PA
30. **Il Girasole B & B** — Balestrate
   - slug: `il-girasole-b-b-balestrate`
   - indirizzo: Via Lepanto, 11, 90041 Balestrate PA
31. **La Balestra B&B** — Balestrate
   - slug: `la-balestra-b-b-balestrate`
   - indirizzo: Via V. Emanuele Orlando, 24, 90041 Balestrate PA
32. **La Casa dei palmizi** — Balestrate
   - slug: `la-casa-dei-palmizi-balestrate`
   - indirizzo: Via Giuseppe Mazzini, 65, 90041 Balestrate PA
33. **La Maiolica B&B** — Balestrate
   - slug: `la-maiolica-b-b-balestrate`
   - indirizzo: Via Monte Grappa, 88b, 90041 Balestrate PA
34. **Le Vele di Balestrate** — Balestrate
   - slug: `le-vele-di-balestrate-balestrate`
   - indirizzo: Via Giacomo Leopardi, 4, 90041 Balestrate PA
35. **Orlando Bayview** — Balestrate
   - slug: `orlando-bayview-balestrate`
   - indirizzo: Via Giovanni Pascoli, 1, 90041 Balestrate PA