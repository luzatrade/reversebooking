# Blocco 344/500 — 35 strutture senza descrizione IT

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

1. **Leukos Home Relais Bed e Breakfast A DIAMANTE** — Buonvicino
   - slug: `leukos-home-relais-bed-e-breakfast-a-diamante-buonvicino`
   - indirizzo: Via Panoramica, 15, 87023 Diamante CS
2. **Vista d'amare B&B** — Buonvicino
   - slug: `vista-d-amare-b-b-buonvicino`
   - indirizzo: via, 87020 Celle CS
3. **B&B Le Camelie** — Burago di Molgora
   - slug: `b-b-le-camelie-burago-di-molgora`
   - indirizzo: Via Leonardo da Vinci, 16, 20875 Burago di Molgora MB
4. **B&b Rosy** — Burago di Molgora
   - slug: `b-b-rosy-burago-di-molgora`
   - indirizzo: Via A. Gramsci, 30, 20875 Burago di Molgora MB
5. **Brianteo Hotel Residence and Restaurant** — Burago di Molgora
   - slug: `brianteo-hotel-residence-and-restaurant-burago-di-molgora`
   - indirizzo: Via M. Luther King, 3/5, 20875 Burago di Molgora MB
6. **Il Giuggiolo Bed & Breakfast** — Burago di Molgora
   - slug: `il-giuggiolo-bed-breakfast-burago-di-molgora`
   - indirizzo: Via Panoramica, 18, 23887 Olgiate Molgora LC
7. **La Casa di Arianna B&B** — Burago di Molgora
   - slug: `la-casa-di-arianna-b-b-burago-di-molgora`
   - indirizzo: Via Burago, 25, 20871 Vimercate MB
8. **La Casetta Verde B&B** — Burago di Molgora
   - slug: `la-casetta-verde-b-b-burago-di-molgora`
   - indirizzo: Via Mirasole, 109, 23887 Olgiate Molgora LC
9. **OverMotel** — Burago di Molgora
   - slug: `overmotel-burago-di-molgora`
   - indirizzo: Via Rossino, 3, 20871 Vimercate MB
10. **Rana B&B** — Burago di Molgora
   - slug: `rana-b-b-burago-di-molgora`
   - indirizzo: Via Roncello, 6H, 20876 Ornago MB
11. **B&B La Casa sulla Spiaggia** — Burcei
   - slug: `b-b-la-casa-sulla-spiaggia-burcei`
   - indirizzo: Via Mar Egeo, 51, 09045 Quartu Sant'Elena CA
12. **B&B San Gregorio** — Burcei
   - slug: `b-b-san-gregorio-burcei`
   - indirizzo: Via del Castagno, 14, 09048 San Gregorio CA
13. **B&B Sette Fratelli IUN E4439** — Burcei
   - slug: `b-b-sette-fratelli-iun-e4439-burcei`
   - indirizzo: Via dei Gerani, 19, 09048 Villaggio delle Mimose CA
14. **Best Western Hotel Residence Italia** — Burcei
   - slug: `best-western-hotel-residence-italia-burcei`
   - indirizzo: Via Panzini, 67, 09045 Quartu Sant'Elena CA
15. **Centrale Hotel RistoPizza Caffè** — Burcei
   - slug: `centrale-hotel-ristopizza-caffe-burcei`
   - indirizzo: Piazza Azuni, 6/7, 09045 Quartu Sant'Elena CA
16. **Free Zone Bed and Breakfast** — Burcei
   - slug: `free-zone-bed-and-breakfast-burcei`
   - indirizzo: Via del Corbezzolo, 13, 09040 L'annunziata CA
17. **Hotel Califfo** — Burcei
   - slug: `hotel-califfo-burcei`
   - indirizzo: Via Leonardo Da Vinci, 124, 09045 Quartu Sant'Elena CA
18. **Hotel Soleo** — Burcei
   - slug: `hotel-soleo-burcei`
   - indirizzo: Via Firenze, 87, 09045 Quartu Sant'Elena CA
19. **I Ginepri Ristorante Hotel** — Burcei
   - slug: `i-ginepri-ristorante-hotel-burcei`
   - indirizzo: SS 125 Orientale Sarda, 12, 09044 Quartucciu CA
20. **Il Locandiere - affittacamere - Cagliari** — Burcei
   - slug: `il-locandiere-affittacamere-cagliari-burcei`
   - indirizzo: Via delle Fresie, 12 b, 09045 Quartu Sant'Elena CA
21. **La casa dei Girasoli** — Burcei
   - slug: `la-casa-dei-girasoli-burcei`
   - indirizzo: Via Nazionale, 159, 09069 Maracalagonis CA
22. **La Fattoria delle Tartarughe - Tortoises Farm Eco&Veg friendly Lodge** — Burcei
   - slug: `la-fattoria-delle-tartarughe-tortoises-farm-eco-burcei`
   - indirizzo: SS 125 Orientale Sarda, km 24.350, 09048 Sinnai CA
23. **Meravisola Costa Rei Affittacamere/Guesthouse/B&B** — Burcei
   - slug: `meravisola-costa-rei-affittacamere-guesthouse-b-burcei`
   - indirizzo: Via Sardegna, 23, 09040 Olia Speciosa CA
24. **Old Rooms** — Burcei
   - slug: `old-rooms-burcei`
   - indirizzo: Via Sicilia, 37, 09045 Quartu Sant'Elena CA
25. **Phi Hotel Sighientu** — Burcei
   - slug: `phi-hotel-sighientu-burcei`
   - indirizzo: Via Serchio, 139, 09045 Quartu Sant'Elena CA
26. **Relax tra Mare e Monti-Affittacamere Quartu Sant Elena- vicino Cagliari Villasimius CIN:IT092051C2000P1677** — Burcei
   - slug: `relax-tra-mare-e-monti-affittacamere-quartu-sant-burcei`
   - indirizzo: via Niu Crobu, 44/44a, 09045 Quartu Sant'Elena CA
27. **Sa Dom'è Malloru** — Burcei
   - slug: `sa-dom-e-malloru-burcei`
   - indirizzo: Via delle Ciliegie, SNC, 09040 Burcei CA
28. **Spacebility Beach** — Burcei
   - slug: `spacebility-beach-burcei`
   - indirizzo: Via Neapolis, 12, 09045 Quartu Sant'Elena CA
29. **Villa Arya Holiday Rooms** — Burcei
   - slug: `villa-arya-holiday-rooms-burcei`
   - indirizzo: Via Versilia, 33, 09045 Quartu Sant'Elena CA
30. **B&B Colibrì** — Burgio
   - slug: `b-b-colibri-burgio`
   - indirizzo: Via Olivella, 113, 92019 Sciacca AG
31. **B&B Il Campanile** — Burgio
   - slug: `b-b-il-campanile-burgio`
   - indirizzo: Piazza Inveges, 15, 92019 Sciacca AG
32. **B&B Porta di Mare** — Burgio
   - slug: `b-b-porta-di-mare-burgio`
   - indirizzo: Vicolo I, Via Porta di Mare, 10, 92019 Sciacca AG
33. **Beb casa anzelmo** — Burgio
   - slug: `beb-casa-anzelmo-burgio`
   - indirizzo: Via F. Crispi, 95, 92010 Burgio AG
34. **Casa Dei Sogni** — Burgio
   - slug: `casa-dei-sogni-burgio`
   - indirizzo: 92010 Burgio AG, Italia
35. **Casa di Angela** — Burgio
   - slug: `casa-di-angela-burgio`
   - indirizzo: Rione Fratelli Bandiera, 14, 92019 Sciacca AG