# Blocco 294/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo La Longa** — Borgaro Torinese
   - slug: `agriturismo-la-longa-borgaro-torinese`
   - indirizzo: Via Lunga, 78, 10046 Poirino TO
2. **Agriturismo Parco Campofelice** — Borgaro Torinese
   - slug: `agriturismo-parco-campofelice-borgaro-torinese`
   - indirizzo: 85, Via Torino Poligono, 10040 Lombardore TO
3. **Agriturismo Perla** — Borgaro Torinese
   - slug: `agriturismo-perla-borgaro-torinese`
   - indirizzo: 10 Localita, Moncucco torinese, 14024 Pogliano AT
4. **Agriturismo San Felice** — Borgaro Torinese
   - slug: `agriturismo-san-felice-borgaro-torinese`
   - indirizzo: Via S. Felice, 185, 10025 Pino Torinese TO
5. **B&B HOTEL Borgaro Torinese** — Borgaro Torinese
   - slug: `b-b-hotel-borgaro-torinese-borgaro-torinese`
   - indirizzo: Via Lanzo, 163, 10071 Borgaro Torinese TO
6. **Agriturismo "Casale del Principe"** — Borgetto
   - slug: `agriturismo-casale-del-principe-borgetto`
   - indirizzo: 90046 Dammusi PA
7. **Agriturismo Masseria La Chiusa** — Borgetto
   - slug: `agriturismo-masseria-la-chiusa-borgetto`
   - indirizzo: Contrada Chiusa, 90048 San Giuseppe Jato PA
8. **al baglio apartments** — Borgetto
   - slug: `al-baglio-apartments-borgetto`
   - indirizzo: Vicolo Manganelli, 4, 90047 Partinico PA
9. **B&B Alba** — Borgetto
   - slug: `b-b-alba-borgetto`
   - indirizzo: SS 113 Settentrionale Sicula, 209, 90049 Terrasini PA
10. **B&B e SPA Del Centro** — Borgetto
   - slug: `b-b-e-spa-del-centro-borgetto`
   - indirizzo: Via Crupi, 37, 90047 Partinico PA
11. **B&B Rose Antiche Sicily** — Borgetto
   - slug: `b-b-rose-antiche-sicily-borgetto`
   - indirizzo: Via dei Mulini, snc/Pianoterra, 90047 Partinico PA
12. **B&B Torre Turrisi** — Borgetto
   - slug: `b-b-torre-turrisi-borgetto`
   - indirizzo: Contrada Turrisi, 90047 Partinico PA
13. **Baglio Carta** — Borgetto
   - slug: `baglio-carta-borgetto`
   - indirizzo: C.da bosco Falconeria, SP17, 90047 Partinico PA
14. **Bed and Breakfast Federico II** — Borgetto
   - slug: `bed-and-breakfast-federico-ii-borgetto`
   - indirizzo: Via Enrico Berlinguer, 1, 90088 San Cipirello PA
15. **Calajo Resort** — Borgetto
   - slug: `calajo-resort-borgetto`
   - indirizzo: SS113, Contrada S. Cataldo, 90040 Trappeto PA
16. **CDSHotels Terrasini - Città del Mare** — Borgetto
   - slug: `cdshotels-terrasini-citta-del-mare-borgetto`
   - indirizzo: SS 113, Km 301.100, 90049 Terrasini PA
17. **ciuri ciuri b&b - via livatino 16** — Borgetto
   - slug: `ciuri-ciuri-b-b-via-livatino-16-borgetto`
   - indirizzo: Via Livatino, 16, 90047 Partinico PA
18. **Da rosy** — Borgetto
   - slug: `da-rosy-borgetto`
   - indirizzo: Via Frisella, 57/57, 90047 Partinico PA
19. **Esmaralda's House of Love** — Borgetto
   - slug: `esmaralda-s-house-of-love-borgetto`
   - indirizzo: Via Seneca, 3, 90049 Terrasini PA
20. **Hotel Ristorante Castello di Giuliano** — Borgetto
   - slug: `hotel-ristorante-castello-di-giuliano-borgetto`
   - indirizzo: Via Pietro Merra, 50, 90040 Montelepre PA
21. **Il Baglio della Luna** — Borgetto
   - slug: `il-baglio-della-luna-borgetto`
   - indirizzo: SS 113 Settentrionale Sicula, 90047 Partinico PA
22. **Kalsa sicilian rooms** — Borgetto
   - slug: `kalsa-sicilian-rooms-borgetto`
   - indirizzo: Via Vittorio Emanuele Orlando, 7, 90047 Partinico PA
23. **New River Hotel** — Borgetto
   - slug: `new-river-hotel-borgetto`
   - indirizzo: SS 186, Km 24, 90042 Borgetto PA
24. **Perla del Golfo Resort** — Borgetto
   - slug: `perla-del-golfo-resort-borgetto`
   - indirizzo: Via Omero, 90049 Terrasini PA
25. **Agriturismo "Il glicine e la lucerna"** — Borghetto d'Arroscia
   - slug: `agriturismo-il-glicine-e-la-lucerna-borghetto-d-arroscia`
   - indirizzo: Via Principale, 4, 18028 Ranzo IM
26. **Agriturismo Borgo del Canto** — Borghetto d'Arroscia
   - slug: `agriturismo-borgo-del-canto-borghetto-d-arroscia`
   - indirizzo: Borgata Canto, 14, 18028 Aquila d'Arroscia IM
27. **Agriturismo La Chouette** — Borghetto d'Arroscia
   - slug: `agriturismo-la-chouette-borghetto-d-arroscia`
   - indirizzo: Via San Sebastiano 4, Nirasca, 18026 Pieve di Teco IM
28. **AGRITURISMO LA FATTORIA** — Borghetto d'Arroscia
   - slug: `agriturismo-la-fattoria-borghetto-d-arroscia`
   - indirizzo: 18028 Costa Bacelega IM
29. **Albergo Negro** — Borghetto d'Arroscia
   - slug: `albergo-negro-borghetto-d-arroscia`
   - indirizzo: Via Canadà, 10, 18020 Cenova IM
30. **aMaccia** — Borghetto d'Arroscia
   - slug: `amaccia-borghetto-d-arroscia`
   - indirizzo: Via Umberto I, n 54, 18028 Ranzo IM
31. **Bala Perdua** — Borghetto d'Arroscia
   - slug: `bala-perdua-borghetto-d-arroscia`
   - indirizzo: Via Sant'Antonio, 25, Fraz. Lovegno, 18026 Pieve di Teco IM
32. **B&B Cascina Delle Signore** — Borghetto di Borbera
   - slug: `b-b-cascina-delle-signore-borghetto-di-borbera`
   - indirizzo: Via Dante Alighieri, 13, 15060 Vignole Borbera AL
33. **Cascina Formighezzo** — Borghetto di Borbera
   - slug: `cascina-formighezzo-borghetto-di-borbera`
   - indirizzo: Località Formighezzo, 5, 15060 Grondona AL
34. **Il Poggiolo in Val borbera** — Borghetto di Borbera
   - slug: `il-poggiolo-in-val-borbera-borghetto-di-borbera`
   - indirizzo: Strada Provinciale Cantalupo Dernice, 7, 15056 Vigoponzo AL
35. **La Traversina Agriturismo di Charme** — Borghetto di Borbera
   - slug: `la-traversina-agriturismo-di-charme-borghetto-di-borbera`
   - indirizzo: La Traversina Agriturismo di Charme 109, 15060 Stazzano AL