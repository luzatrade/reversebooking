# Blocco 36/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Sa Tanchitta** — Aidomaggiore
   - slug: `agriturismo-sa-tanchitta-aidomaggiore`
   - indirizzo: 09080 Ula Tirso OR, Italia
2. **B&B Baddesalighes** — Aidomaggiore
   - slug: `b-b-baddesalighes-aidomaggiore`
   - indirizzo: Via Badde Salighes, 77, 08011 Bolotana NU
3. **B&B Catedda** — Aidomaggiore
   - slug: `b-b-catedda-aidomaggiore`
   - indirizzo: Via S. Pietro, 46, 09076 Sedilo OR
4. **B&B Il Lupo Rosso** — Aidomaggiore
   - slug: `b-b-il-lupo-rosso-aidomaggiore`
   - indirizzo: Via Roma, 52, 09075 Santu Lussurgiu OR
5. **B&B Il Melograno Paulilatino** — Aidomaggiore
   - slug: `b-b-il-melograno-paulilatino-aidomaggiore`
   - indirizzo: Via Giovanni Caboto, 1/a, 09070 Paulilatino OR
6. **B&B Linu Ruiu** — Aidomaggiore
   - slug: `b-b-linu-ruiu-aidomaggiore`
   - indirizzo: Via Giovanni Maria Angioi, 79, 09075 Santu Lussurgiu OR
7. **Binzas Betzas Agriturismo** — Aidomaggiore
   - slug: `binzas-betzas-agriturismo-aidomaggiore`
   - indirizzo: Via Marconi, 16, 09076 Sedilo OR
8. **Deiana** — Aidomaggiore
   - slug: `deiana-aidomaggiore`
   - indirizzo: Viale Azuni, 86, 09075 Santu Lussurgiu OR
9. **DOMO Anninnìa - Ghilarza Guest House** — Aidomaggiore
   - slug: `domo-anninnia-ghilarza-guest-house-aidomaggiore`
   - indirizzo: Via C. Battisti, 34, 09074 Ghilarza OR
10. **Hotel l'anfora** — Aidomaggiore
   - slug: `hotel-l-anfora-aidomaggiore`
   - indirizzo: Area di servizio sulla 131, km 103 Tramatza OR
11. **Hotel Ristorante Badde Rosa** — Aidomaggiore
   - slug: `hotel-ristorante-badde-rosa-aidomaggiore`
   - indirizzo: Localita' Minadorzu, 08011 Bolotana NU
12. **Locanda Sottobosco** — Aidomaggiore
   - slug: `locanda-sottobosco-aidomaggiore`
   - indirizzo: Via dell'Ontano, 2, 09075 San Leonardo De Siete Fuentes OR
13. **Pietro e Graziella** — Aidomaggiore
   - slug: `pietro-e-graziella-aidomaggiore`
   - indirizzo: Via Emilia, 6, 08038 Sorgono NU
14. **Sa Mola Hotel Ristorante** — Aidomaggiore
   - slug: `sa-mola-hotel-ristorante-aidomaggiore`
   - indirizzo: Via Superga, 09070 Bonarcado OR
15. **The Templars Guesthouse** — Aidomaggiore
   - slug: `the-templars-guesthouse-aidomaggiore`
   - indirizzo: Via Agostino Obinu, 36, 09075 Santu Lussurgiu OR
16. **Agriresort Leano** — Aidone
   - slug: `agriresort-leano-aidone`
   - indirizzo: C.da Leano (KM3,SP16, SP16, 94015 Piazza Armerina EN
17. **Agriturismo Bannata** — Aidone
   - slug: `agriturismo-bannata-aidone`
   - indirizzo: C.da Bannata SS 117 bis, km 41, 94100 Piazza Armerina EN
18. **Agriturismo Il Drago** — Aidone
   - slug: `agriturismo-il-drago-aidone`
   - indirizzo: Contrada Dragofosso, 94010 Aidone EN
19. **Agriturismo il drago p.zza Armerina** — Aidone
   - slug: `agriturismo-il-drago-p-zza-armerina-aidone`
   - indirizzo: Unnamed Road, 94010, 94010 Aidone EN
20. **Agriturismo Salemi** — Aidone
   - slug: `agriturismo-salemi-aidone`
   - indirizzo: Contrada Leano, 94015 Piazza Armerina EN
21. **Bed & Breakfast Le Giare** — Aidone
   - slug: `bed-breakfast-le-giare-aidone`
   - indirizzo: Via Domenico Minolfi, 13, 94010 Aidone EN
22. **GH Hotel & Restaurant** — Aidone
   - slug: `gh-hotel-restaurant-aidone`
   - indirizzo: Via Generale Gaeta, 32, 94015 Piazza Armerina EN
23. **Hotel Villa Romana** — Aidone
   - slug: `hotel-villa-romana-aidone`
   - indirizzo: P.za Alcide de Gasperi, 18, 94015 Piazza Armerina EN
24. **La casa rossa** — Aidone
   - slug: `la-casa-rossa-aidone`
   - indirizzo: Via Piersanti Mattarella, 94015 Piazza Armerina EN
25. **La Regina di Saba** — Aidone
   - slug: `la-regina-di-saba-aidone`
   - indirizzo: Via Pergola, 2, 94015 Piazza Armerina EN
26. **Monia rooms&hospitality** — Aidone
   - slug: `monia-rooms-hospitality-aidone`
   - indirizzo: Via Chiaranda', 87, 94015 Piazza Armerina EN
27. **Morgantina Servizi&acc soc coop** — Aidone
   - slug: `morgantina-servizi-acc-soc-coop-aidone`
   - indirizzo: Via Adelasia, 42, 94010 Aidone EN
28. **Parco degli Ulivi Ricevimenti Hotel** — Aidone
   - slug: `parco-degli-ulivi-ricevimenti-hotel-aidone`
   - indirizzo: Via Vecchia Ferrovia, 95040 Mirabella Imbaccari CT
29. **Park Hotel Paradiso** — Aidone
   - slug: `park-hotel-paradiso-aidone`
   - indirizzo: Contrada Sant'Andrea, 94015 Piazza Armerina EN
30. **Ristorante e Hotel Al Ritrovo** — Aidone
   - slug: `ristorante-e-hotel-al-ritrovo-aidone`
   - indirizzo: SS117bis, 94015 Enna EN
31. **Villa Trigona** — Aidone
   - slug: `villa-trigona-aidone`
   - indirizzo: Contrada, Via Salvatore Bauccio, 94016 Piazza Armerina EN
32. **Alba Sporting Hotel** — Aielli
   - slug: `alba-sporting-hotel-aielli`
   - indirizzo: SS. Ovindoli, Viale Antonio Martini, 1, 67048 Rovere AQ
33. **B&B Arco dei Sogni** — Aielli
   - slug: `b-b-arco-dei-sogni-aielli`
   - indirizzo: SS 696 del Parco Regionale Sirente-Velino, 67043 Celano AQ
34. **B&b n' gima all' ara** — Aielli
   - slug: `b-b-n-gima-all-ara-aielli`
   - indirizzo: V. Vallone, 5, 67041 Aielli AQ
35. **Grand Hotel delle Rocche, Ristorante Le Terrazze** — Aielli
   - slug: `grand-hotel-delle-rocche-ristorante-le-terrazze-aielli`
   - indirizzo: Via Comunale per Secinaro, 220, 67048 Rocca di Mezzo AQ