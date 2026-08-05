# Blocco 215/500 — 35 strutture senza descrizione IT

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

1. **Barbara & Breakfast CIN IT056004C1OEDSBXQI** — Barbarano Romano
   - slug: `barbara-breakfast-cin-it056004c1oedsbxqi-barbarano-romano`
   - indirizzo: Strada della Chiusa di Valleriani, 01010 Barbarano Romano VT
2. **BED AND BREAKFAST VILLA ROSALBA** — Barbarano Romano
   - slug: `bed-and-breakfast-villa-rosalba-barbarano-romano`
   - indirizzo: Strada Vicinale di Sant'Antonio, 01010 Barbarano Romano VT
3. **Casa Francigena** — Barbarano Romano
   - slug: `casa-francigena-barbarano-romano`
   - indirizzo: Strada Asmara, 76, 01019 Vetralla VT
4. **Da Beccone - Albergo Ristorante Pizzeria** — Barbarano Romano
   - slug: `da-beccone-albergo-ristorante-pizzeria-barbarano-romano`
   - indirizzo: Via Guglielmo Marconi, 26, 01010 Blera VT
5. **Il Casale del Popolo** — Barbarano Romano
   - slug: `il-casale-del-popolo-barbarano-romano`
   - indirizzo: Strada della Chiusa di Valleriani, 01010 Barbarano Romano VT
6. **La Ripa** — Barbarano Romano
   - slug: `la-ripa-barbarano-romano`
   - indirizzo: Via Marco Spurinas, 12, 01010 Blera VT
7. **Le casette del Borgo Antico** — Barbarano Romano
   - slug: `le-casette-del-borgo-antico-barbarano-romano`
   - indirizzo: V. del Lavatoio, n° 15, 01037 Ronciglione VT
8. **Le Terrazze di Casa Bonelli** — Barbarano Romano
   - slug: `le-terrazze-di-casa-bonelli-barbarano-romano`
   - indirizzo: Str. Forocassio, 43, 01019 Vetralla VT
9. **LOCANDA EPICA (Albergo Diffuso)** — Barbarano Romano
   - slug: `locanda-epica-albergo-diffuso-barbarano-romano`
   - indirizzo: Via Vittorio Emanuele II', 31, 01010 Barbarano Romano VT
10. **Rifugio del Pellegrino** — Barbarano Romano
   - slug: `rifugio-del-pellegrino-barbarano-romano`
   - indirizzo: Via dei Lucumoni, 33, 01015 Sutri VT
11. **Agriturismo Ercolana** — Barbaresco
   - slug: `agriturismo-ercolana-barbaresco`
   - indirizzo: Località Tinella, 25, 12050 Neviglie CN
12. **Azienda Agricola Rivella Silvia** — Barbaresco
   - slug: `azienda-agricola-rivella-silvia-barbaresco`
   - indirizzo: 17 Localita' Montestefano, Barbaresco, CN 12050, 12050 Barbaresco CN
13. **B&B Il Giardino sul Tetto** — Barbaresco
   - slug: `b-b-il-giardino-sul-tetto-barbaresco`
   - indirizzo: Via Secondo Paoletti, 9, 12050 Guarene CN
14. **Borgese Camere e Suites** — Barbaresco
   - slug: `borgese-camere-e-suites-barbaresco`
   - indirizzo: attenzione cxambio viabilità via Demaria fino, Via Circonvallazione, 1, 12052 Neive CN
15. **Bric d'Alû** — Barbaresco
   - slug: `bric-d-alu-barbaresco`
   - indirizzo: Str. Rabaja, 21, 12050 Barbaresco CN
16. **Ca dei Currà** — Barbaresco
   - slug: `ca-dei-curra-barbaresco`
   - indirizzo: Via Currà, 6, 12052 Neive CN
17. **Cantina Ca Trifolera Azienda Vitivinicola Degustazioni Negozio Cellar wine shop** — Barbaresco
   - slug: `cantina-ca-trifolera-azienda-vitivinicola-degust-barbaresco`
   - indirizzo: Località Trifolera, 15, 12050 Barbaresco CN
18. **Casa Boffa** — Barbaresco
   - slug: `casa-boffa-barbaresco`
   - indirizzo: Via Torino, 9/A, 12050 Barbaresco CN
19. **Casa vacanze per gruppi e famiglie -Villa Edy -Barbaresco CIN: IT004011C25AA776GZ** — Barbaresco
   - slug: `casa-vacanze-per-gruppi-e-famiglie-villa-edy-bar-barbaresco`
   - indirizzo: Strada Bernino, 6, 12050 Barbaresco CN
20. **Castello di Guarene - Relais & Chateaux** — Barbaresco
   - slug: `castello-di-guarene-relais-chateaux-barbaresco`
   - indirizzo: Via Alessandro Roero, 2, 12050 Guarene CN
21. **Dai Grésy** — Barbaresco
   - slug: `dai-gresy-barbaresco`
   - indirizzo: Via Vincenzo Giacosa, 19, 12050 Treiso CN
22. **Hotel le Botti** — Barbaresco
   - slug: `hotel-le-botti-barbaresco`
   - indirizzo: Str. Isola, 13, 12050 Guarene CN
23. **I Quattro Grappoli** — Barbaresco
   - slug: `i-quattro-grappoli-barbaresco`
   - indirizzo: Pastura 2, 12052 Neive CN
24. **Il Cortile di San Michele** — Barbaresco
   - slug: `il-cortile-di-san-michele-barbaresco`
   - indirizzo: Via Secondo Paoletti, 23, 12050 Guarene CN
25. **Relais Pqlin** — Barbaresco
   - slug: `relais-pqlin-barbaresco`
   - indirizzo: Str. Vietta, 2, 12050 Castagnito CN
26. **Ristorante Con Camere Cortiletto D'Alba** — Barbaresco
   - slug: `ristorante-con-camere-cortiletto-d-alba-barbaresco`
   - indirizzo: Corso Michele Coppino, 27, 12051 Alba CN
27. **Vin dell'Olmo** — Barbaresco
   - slug: `vin-dell-olmo-barbaresco`
   - indirizzo: Via Olmo, 30, 14054 Olmo AT
28. **Agriturismo Sangallo** — Barbariga
   - slug: `agriturismo-sangallo-barbariga`
   - indirizzo: Via Cogozzo di Sotto, 12, 25081 Bedizzole BS
29. **B&B Desenzano Bellavista Exclusive** — Barbariga
   - slug: `b-b-desenzano-bellavista-exclusive-barbariga`
   - indirizzo: Via S. Benedetto, 9, 25015 Desenzano del Garda BS
30. **B&B Dolce Risveglio** — Barbariga
   - slug: `b-b-dolce-risveglio-barbariga`
   - indirizzo: Via G. la Pira, 11, 25080 Raffa BS
31. **B&B Il Glicine** — Barbariga
   - slug: `b-b-il-glicine-barbariga`
   - indirizzo: Via Ersone, 3, 25081 Bedizzole BS
32. **B&B La Casarella** — Barbariga
   - slug: `b-b-la-casarella-barbariga`
   - indirizzo: Via Brescia, 32, 25080 Soiano BS
33. **Barbarino Casa Appartamento Vacanze** — Barbariga
   - slug: `barbarino-casa-appartamento-vacanze-barbariga`
   - indirizzo: Via S. Rocchino, 151, 25123 Brescia BS
34. **Corte al Lago Bed & Breakfast** — Barbariga
   - slug: `corte-al-lago-bed-breakfast-barbariga`
   - indirizzo: Via del Porto, 4, 25080 Moniga del Garda BS
35. **HC HOTEL MANERBIO LOFT** — Barbariga
   - slug: `hc-hotel-manerbio-loft-barbariga`
   - indirizzo: Via S. Martino del Carso, 45, 25025 Manerbio BS