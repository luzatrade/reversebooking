# Blocco 262/500 — 35 strutture senza descrizione IT

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

1. **casa cigana** — Berzano di Tortona
   - slug: `casa-cigana-berzano-di-tortona`
   - indirizzo: Strada Comunale per Vho, 15057 Tortona AL
2. **Casa della seteria Sironi** — Berzano di Tortona
   - slug: `casa-della-seteria-sironi-berzano-di-tortona`
   - indirizzo: Via Calcinara Ottone, 6, 15057 Tortona AL
3. **Country HouseTenuta Terensano** — Berzano di Tortona
   - slug: `country-housetenuta-terensano-berzano-di-tortona`
   - indirizzo: Corso Roma, SP100, km 4, 5, 15059 Monleale AL
4. **Hotel Oasi Bar Ristorante** — Berzano di Tortona
   - slug: `hotel-oasi-bar-ristorante-berzano-di-tortona`
   - indirizzo: Strada Statale per Voghera, 87, 15057 Tortona AL
5. **Hotel Villa Giulia** — Berzano di Tortona
   - slug: `hotel-villa-giulia-berzano-di-tortona`
   - indirizzo: Strada Statale per Alessandria, 7/A, 15057 Tortona AL
6. **La Corte Nascosta Volpedo** — Berzano di Tortona
   - slug: `la-corte-nascosta-volpedo-berzano-di-tortona`
   - indirizzo: Frazione Cà Barbieri, 8, 15059 Volpedo AL
7. **Montegualdone** — Berzano di Tortona
   - slug: `montegualdone-berzano-di-tortona`
   - indirizzo: S.da Montegualdone, 13, 15050 Cascine AL
8. **Volpedo Hostel** — Berzano di Tortona
   - slug: `volpedo-hostel-berzano-di-tortona`
   - indirizzo: Via Giuseppe Mazzini, 32, 15059 Volpedo AL
9. **Agriturismo il Viandante** — Berzo Demo
   - slug: `agriturismo-il-viandante-berzo-demo`
   - indirizzo: Via Medaglia D'Argento, 2, 25050 Sellero BS
10. **Agriturismo Valsaviore** — Berzo Demo
   - slug: `agriturismo-valsaviore-berzo-demo`
   - indirizzo: Località Planost, 25040 Cevo BS
11. **Albergo Cumili'** — Berzo Demo
   - slug: `albergo-cumili-berzo-demo`
   - indirizzo: Via Stazione, 1, 25044 Capo di Ponte BS
12. **Albergo Meuble' Aurora** — Berzo Demo
   - slug: `albergo-meuble-aurora-berzo-demo`
   - indirizzo: Via Monte Colmo, 8, 25048 Edolo BS
13. **Albergo Ristorante Pizzeria Eternità** — Berzo Demo
   - slug: `albergo-ristorante-pizzeria-eternita-berzo-demo`
   - indirizzo: Via Nazionale, 45, 25040 Malonno BS
14. **B&B Borno, Borno Bed & Breakfast** — Berzo Demo
   - slug: `b-b-borno-borno-bed-breakfast-berzo-demo`
   - indirizzo: Via Vittorio Veneto, 39A, 25042 Borno BS
15. **B&B Il Pettirosso** — Berzo Demo
   - slug: `b-b-il-pettirosso-berzo-demo`
   - indirizzo: Via Guglielmo Marconi, 25, 25040 Malonno BS
16. **B&B LE AQUANE** — Berzo Demo
   - slug: `b-b-le-aquane-berzo-demo`
   - indirizzo: V. Mossino, 1, 25040 Ono San Pietro BS
17. **B&B San Rocco** — Berzo Demo
   - slug: `b-b-san-rocco-berzo-demo`
   - indirizzo: Via 25 Aprile, 30, 25044 Capo di Ponte BS
18. **B&B Valtili** — Berzo Demo
   - slug: `b-b-valtili-berzo-demo`
   - indirizzo: Località Valtilì, 1, 25040 Berzo Demo BS
19. **Bed & Breakfast "Alla Fontana"** — Berzo Demo
   - slug: `bed-breakfast-alla-fontana-berzo-demo`
   - indirizzo: Via S. Paolo, 46, 25040 Villa BS
20. **CAMERE CA' TUNIN . A pochi minuti a piedi dalla stazione retica e italiana. Ideale per il Trenino Rosso.** — Berzo Demo
   - slug: `camere-ca-tunin-a-pochi-minuti-a-piedi-dalla-sta-berzo-demo`
   - indirizzo: Via don Luigi Albonico, 18, 23037 Tirano SO
21. **Camping & Chalet Pian della Regina** — Berzo Demo
   - slug: `camping-chalet-pian-della-regina-berzo-demo`
   - indirizzo: Loc. Plà de le Egie, 25040 Cevo BS
22. **Corte Giorgi B&B** — Berzo Demo
   - slug: `corte-giorgi-b-b-berzo-demo`
   - indirizzo: Via Foppo, 49, 25043 Breno BS
23. **Foresteria Antica Farmacia** — Berzo Demo
   - slug: `foresteria-antica-farmacia-berzo-demo`
   - indirizzo: Via Nazionale, n° 4, 25051 Cedegolo BS
24. **Foresteria Sopra le Nuvole** — Berzo Demo
   - slug: `foresteria-sopra-le-nuvole-berzo-demo`
   - indirizzo: Via Pineta, 10, 25040 Cevo BS
25. **PerBaccoBar Bed and Breakfast Brescia** — Berzo Demo
   - slug: `perbaccobar-bed-and-breakfast-brescia-berzo-demo`
   - indirizzo: Via Nuova, 2, 25040 Ono San Pietro BS
26. **Apartment Suite Oasi Verde** — Berzo Inferiore
   - slug: `apartment-suite-oasi-verde-berzo-inferiore`
   - indirizzo: Via dei Tornanti, 4, 25040 Bienno BS
27. **B & B "La Casa di Clara"** — Berzo Inferiore
   - slug: `b-b-la-casa-di-clara-berzo-inferiore`
   - indirizzo: Via Alessandro Manzoni, 38, 25040 Esine BS
28. **B&B a la Ria** — Berzo Inferiore
   - slug: `b-b-a-la-ria-berzo-inferiore`
   - indirizzo: Via Ripa, 117, 25040 Bienno BS
29. **Eremo di Bienno** — Berzo Inferiore
   - slug: `eremo-di-bienno-berzo-inferiore`
   - indirizzo: Via San Pietro, 11, 25040 Bienno BS
30. **Graffitipark Hotel Ristorante** — Berzo Inferiore
   - slug: `graffitipark-hotel-ristorante-berzo-inferiore`
   - indirizzo: Via Sebastiano Briscioli, 42, 25044 Capo di Ponte BS
31. **Hotel Giardino Breno** — Berzo Inferiore
   - slug: `hotel-giardino-breno-berzo-inferiore`
   - indirizzo: Viale 28 Aprile, 7, 25043 Breno BS
32. **Hotel Ristorante Oasi Verde** — Berzo Inferiore
   - slug: `hotel-ristorante-oasi-verde-berzo-inferiore`
   - indirizzo: Via dei Tornanti, 4, 25040 Bienno BS
33. **La Torre a Colori B&B** — Berzo Inferiore
   - slug: `la-torre-a-colori-b-b-berzo-inferiore`
   - indirizzo: Via Torre, 21, 25040 Esine BS
34. **Manzoni 124** — Berzo Inferiore
   - slug: `manzoni-124-berzo-inferiore`
   - indirizzo: Via Alessandro Manzoni, 124, 25040 Esine BS
35. **Pasticceria Caffetteria Bed and Breakfast Quadretto** — Berzo Inferiore
   - slug: `pasticceria-caffetteria-bed-and-breakfast-quadre-berzo-inferiore`
   - indirizzo: Via Contrizio, 32, 25040 Bienno BS