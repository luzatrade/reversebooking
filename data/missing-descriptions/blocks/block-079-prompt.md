# Blocco 79/500 — 35 strutture senza descrizione IT

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

1. **Bed & Breakfast “All’Angolo” Sale** — Alluvioni Piovera
   - slug: `bed-breakfast-all-angolo-sale-alluvioni-piovera`
   - indirizzo: Piazza Giuseppe Garibaldi, 19, 15045 Sale AL
2. **Cà degli Ovi** — Alluvioni Piovera
   - slug: `ca-degli-ovi-alluvioni-piovera`
   - indirizzo: STRADA DELLE ROCCHE, 4, 15048 Valenza AL
3. **Cascina dei Gelsi** — Alluvioni Piovera
   - slug: `cascina-dei-gelsi-alluvioni-piovera`
   - indirizzo: Via Cerchetta, 12, 15045 Gerbidi AL
4. **La Fornace | agriturismo | holiday farmhouse** — Alluvioni Piovera
   - slug: `la-fornace-agriturismo-holiday-farmhouse-alluvioni-piovera`
   - indirizzo: V.le Teresa Michel, 52, 15121 Alessandria AL
5. **La Residenza Del Vescovo** — Alluvioni Piovera
   - slug: `la-residenza-del-vescovo-alluvioni-piovera`
   - indirizzo: Via M. A. Corti, 79, 27030 Gambarana PV
6. **Marinella G.H.** — Alluvioni Piovera
   - slug: `marinella-g-h-alluvioni-piovera`
   - indirizzo: Via Cavour, 103, 27056 Cornale PV
7. **Monferrato Inn** — Alluvioni Piovera
   - slug: `monferrato-inn-alluvioni-piovera`
   - indirizzo: Via degli Orti, 9, 15040 Rivarone AL
8. **Agriturismo Al Robale** — Almenno San Bartolomeo
   - slug: `agriturismo-al-robale-almenno-san-bartolomeo`
   - indirizzo: Via Cabinetti, 2, 24030 Almenno San Bartolomeo BG
9. **b&b Al vecchio Molino** — Almenno San Bartolomeo
   - slug: `b-b-al-vecchio-molino-almenno-san-bartolomeo`
   - indirizzo: Via Guglielmo Marconi, 16, 24030 Valbrembo BG
10. **B&B da Isa di Pesenti Isabella** — Almenno San Bartolomeo
   - slug: `b-b-da-isa-di-pesenti-isabella-almenno-san-bartolomeo`
   - indirizzo: Via Roma, 87/A, 24010 Sedrina BG
11. **Bed and Breakfast Cascina Valgrande** — Almenno San Bartolomeo
   - slug: `bed-and-breakfast-cascina-valgrande-almenno-san-bartolomeo`
   - indirizzo: Via Secchia 50, Via Secchia, 46, 24030 Palazzago BG
12. **Bergamum F.L.** — Almenno San Bartolomeo
   - slug: `bergamum-f-l-almenno-san-bartolomeo`
   - indirizzo: Via Burattini, 5, 24123 Bergamo BG
13. **Bio&B Cascina Montebello** — Almenno San Bartolomeo
   - slug: `bio-b-cascina-montebello-almenno-san-bartolomeo`
   - indirizzo: Via Montebello, 4, 24030 Palazzago BG
14. **Cà Baetti L’antica Corte Foresteria** — Almenno San Bartolomeo
   - slug: `ca-baetti-l-antica-corte-foresteria-almenno-san-bartolomeo`
   - indirizzo: Via Ca' Baetti, 8, 24030 Roncola BG
15. **Ca' del Cuco** — Almenno San Bartolomeo
   - slug: `ca-del-cuco-almenno-san-bartolomeo`
   - indirizzo: Via Salvano, 24, 24030 Palazzago BG
16. **Casa di Giuly BnB Guest House** — Almenno San Bartolomeo
   - slug: `casa-di-giuly-bnb-guest-house-almenno-san-bartolomeo`
   - indirizzo: Via Sigismondi, 40B, 24018 Villa d'Almè BG
17. **Cascina Belvedì Ristorante Albergo** — Almenno San Bartolomeo
   - slug: `cascina-belvedi-ristorante-albergo-almenno-san-bartolomeo`
   - indirizzo: Via Belvedere, 4, 24010 Ubiale Clanezzo BG
18. **Due Lune B&B** — Almenno San Bartolomeo
   - slug: `due-lune-b-b-almenno-san-bartolomeo`
   - indirizzo: Via S. Giorgio, 11, 24031 Almenno San Salvatore BG
19. **Hotel 5 Vie** — Almenno San Bartolomeo
   - slug: `hotel-5-vie-almenno-san-bartolomeo`
   - indirizzo: Via Garibaldi, 14, 24031 Almenno San Salvatore BG
20. **Hotel Camoretti** — Almenno San Bartolomeo
   - slug: `hotel-camoretti-almenno-san-bartolomeo`
   - indirizzo: Via Camoretti, 2-2/A, 24030 Almenno San Bartolomeo BG
21. **Hotel La Quercia** — Almenno San Bartolomeo
   - slug: `hotel-la-quercia-almenno-san-bartolomeo`
   - indirizzo: Via Dorotina, 11, 24030 Mozzo BG
22. **Hotel Le Cornelle** — Almenno San Bartolomeo
   - slug: `hotel-le-cornelle-almenno-san-bartolomeo`
   - indirizzo: Via Cornelle, 18, 24030 Valbrembo BG
23. **Hotel Mazzoleni** — Almenno San Bartolomeo
   - slug: `hotel-mazzoleni-almenno-san-bartolomeo`
   - indirizzo: Piazza Guglielmo Marconi, 5, 24030 Roncola BG
24. **Hotel Ristorante Dei Pini** — Almenno San Bartolomeo
   - slug: `hotel-ristorante-dei-pini-almenno-san-bartolomeo`
   - indirizzo: Via Alcide De Gasperi, 47, 24030 Mapello BG
25. **Hotel Ventolosa VaL Brembana** — Almenno San Bartolomeo
   - slug: `hotel-ventolosa-val-brembana-almenno-san-bartolomeo`
   - indirizzo: Via Ventolosa, 23, 24018 Villa d'Almè BG
26. **Il Posto delle Rose** — Almenno San Bartolomeo
   - slug: `il-posto-delle-rose-almenno-san-bartolomeo`
   - indirizzo: Via Masconzano, 2, 24031 Masconzano BG
27. **Niji Hotel & Restaurant** — Almenno San Bartolomeo
   - slug: `niji-hotel-restaurant-almenno-san-bartolomeo`
   - indirizzo: Via Dante Alighieri, 22, 24030 Mapello BG
28. **Aldeia Bianca** — Almenno San Salvatore
   - slug: `aldeia-bianca-almenno-san-salvatore`
   - indirizzo: Via Regina Teodolinda, 2, 24031 Almenno San Salvatore BG
29. **B&B Santa Lucia** — Almenno San Salvatore
   - slug: `b-b-santa-lucia-almenno-san-salvatore`
   - indirizzo: Via Giuseppe Garibaldi, 16, 24122 Bergamo BG
30. **BnB La Casa di Anna** — Almenno San Salvatore
   - slug: `bnb-la-casa-di-anna-almenno-san-salvatore`
   - indirizzo: Via Fogazzaro, 9, 24018 Villa d'Almè BG
31. **Hotel Relais San Vigilio** — Almenno San Salvatore
   - slug: `hotel-relais-san-vigilio-almenno-san-salvatore`
   - indirizzo: Via al Castello, 7, 24129 Bergamo BG
32. **Il Sole** — Almenno San Salvatore
   - slug: `il-sole-almenno-san-salvatore`
   - indirizzo: Via Bartolomeo Colleoni, 1, 24129 Bergamo BG
33. **B&B 503 di Alessio e Orsola** — Almese
   - slug: `b-b-503-di-alessio-e-orsola-almese`
   - indirizzo: Via Roma, 20, 10050 Chiusa di San Michele TO
34. **B&B Caterina.c** — Almese
   - slug: `b-b-caterina-c-almese`
   - indirizzo: Via Betulle, 35, 10040 Val della Torre TO
35. **B&B Certosa 1515** — Almese
   - slug: `b-b-certosa-1515-almese`
   - indirizzo: Via Sacra di San Michele, 51, 10051 Avigliana TO