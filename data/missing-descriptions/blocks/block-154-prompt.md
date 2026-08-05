# Blocco 154/500 — 35 strutture senza descrizione IT

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

1. **CASA FANTINI / lake time** — Arola
   - slug: `casa-fantini-lake-time-arola`
   - indirizzo: Via Roma, 2, 28010 Pella NO
2. **Hotel Panoramico Ristorante SPA Lago d'Orta Adults Only** — Arola
   - slug: `hotel-panoramico-ristorante-spa-lago-d-orta-adul-arola`
   - indirizzo: Via Giuseppe Frua, 31, 28894 Madonna del Sasso VB
3. **Locanda di Orta - Bed & Breakfast di Charme** — Arola
   - slug: `locanda-di-orta-bed-breakfast-di-charme-arola`
   - indirizzo: Via Olina, 18, 28016 Orta San Giulio NO
4. **Luci dal Lago** — Arola
   - slug: `luci-dal-lago-arola`
   - indirizzo: Via Repubblica, 72, 28887 Omegna VB
5. **Aparthotel Arona** — Arona
   - slug: `aparthotel-arona-arona`
   - indirizzo: Piazza del Popolo, 36, 28041 Arona NO
6. **B&B White Lilac, Arona, Lago Maggiore** — Arona
   - slug: `b-b-white-lilac-arona-lago-maggiore-arona`
   - indirizzo: Via Verbano, 70, 28041 Arona NO
7. **Cavaedium Guest House** — Arona
   - slug: `cavaedium-guest-house-arona`
   - indirizzo: Vicolo Renò, 6, 28041 Arona NO
8. **Hotel Atlantic** — Arona
   - slug: `hotel-atlantic-arona`
   - indirizzo: Corso Repubblica, 124, 28041 Arona NO
9. **Hotel Spagna** — Arona
   - slug: `hotel-spagna-arona`
   - indirizzo: Via S. Carlo, 8, 28041 Arona NO
10. **Hotel Villa Paradiso** — Arona
   - slug: `hotel-villa-paradiso-arona`
   - indirizzo: Via Sempione, 125, 28046 Meina NO
11. **LVG Hotel Collection - CasAlbergo** — Arona
   - slug: `lvg-hotel-collection-casalbergo-arona`
   - indirizzo: Via Cicognola, 15, 28053 Castelletto sopra Ticino NO
12. **Room country-lake CIN IT003062C2TWFVPSBF** — Arona
   - slug: `room-country-lake-cin-it003062c2twfvpsbf-arona`
   - indirizzo: Via G. Garibaldi, 2, 28040 Dormelletto NO
13. **Affitta Camere Arosio** — Arosio
   - slug: `affitta-camere-arosio-arosio`
   - indirizzo: Via Enrico Arosio, 1, 20900 Monza MB
14. **Albergo La Nuova Locanda** — Arosio
   - slug: `albergo-la-nuova-locanda-arosio`
   - indirizzo: Via Enrico Toti, 1, 22060 Carugo CO
15. **Cascina Guasto** — Arosio
   - slug: `cascina-guasto-arosio`
   - indirizzo: Via Guasto, 1, 22060 Arosio CO
16. **Trattoria da Santino** — Arosio
   - slug: `trattoria-da-santino-arosio`
   - indirizzo: Cascina Incasate, 9, 22060 Incasate CO
17. **Affittacamere B&B La Dimora dei Ciliegi** — Arpaia
   - slug: `affittacamere-b-b-la-dimora-dei-ciliegi-arpaia`
   - indirizzo: Via Misciuni, 25, 82011 Forchia BN
18. **B&B Sant'Agata - Sant' Agata de'Goti (BN)** — Arpaia
   - slug: `b-b-sant-agata-sant-agata-de-goti-bn-arpaia`
   - indirizzo: Via Martorano, 116, 82019 Sant'Agata Dé Goti BN
19. **EF Luxury Living B&B - Rooms and SPA** — Arpaia
   - slug: `ef-luxury-living-b-b-rooms-and-spa-arpaia`
   - indirizzo: Via Ponte di Ferro, SS7, 82011 Paolisi BN
20. **Hotel Nola Maddaloni 4 stelle** — Arpaia
   - slug: `hotel-nola-maddaloni-4-stelle-arpaia`
   - indirizzo: Via Nazionale delle Puglie km 55, 900, 80030 Tufino NA
21. **Villa Agata** — Arpaia
   - slug: `villa-agata-arpaia`
   - indirizzo: Via Palata-Pompilio, 3, 82011 Cagni BN
22. **Villa Sirena Ricevimenti** — Arpaia
   - slug: `villa-sirena-ricevimenti-arpaia`
   - indirizzo: Viale S.Alfonso, 30, 82015 Durazzano BN
23. **Anthemis** — Arpaise
   - slug: `anthemis-arpaise`
   - indirizzo: Via Principe di Napoli, 12, 83014 Ospedaletto d'Alpinolo AV
24. **B&B Piazza Roma Rooms** — Arpaise
   - slug: `b-b-piazza-roma-rooms-arpaise`
   - indirizzo: Via Orbilio Pupillo, 12, 82100 Benevento BN
25. **Bed & breakfast "La Villetta"** — Arpaise
   - slug: `bed-breakfast-la-villetta-arpaise`
   - indirizzo: Via Antonio Segni, 16, 82100 Benevento BN
26. **1870 - Bed & Breakfast** — Arpino
   - slug: `1870-bed-breakfast-arpino`
   - indirizzo: SP144, 21, 03033 Arpino FR
27. **Agriturismo La Pietra** — Arpino
   - slug: `agriturismo-la-pietra-arpino`
   - indirizzo: SP167, 36, 03033 Arpino FR
28. **Agriturismo La Staccionata** — Arpino
   - slug: `agriturismo-la-staccionata-arpino`
   - indirizzo: Via Selvelle, 14, 03033 Arpino FR
29. **Agriturismo La Torretta** — Arpino
   - slug: `agriturismo-la-torretta-arpino`
   - indirizzo: Via Fornariello, 1, 03033 Arpino FR
30. **Agriturismo Le Faeta** — Arpino
   - slug: `agriturismo-le-faeta-arpino`
   - indirizzo: Via Vitillo Snc, 03033 Arpino FR
31. **Agriturismo Tre Casali** — Arpino
   - slug: `agriturismo-tre-casali-arpino`
   - indirizzo: Contrada Vagni, 03033 Arpino FR
32. **Agriturismo Valle Reale** — Arpino
   - slug: `agriturismo-valle-reale-arpino`
   - indirizzo: Via Montenero, 03033 Arpino FR
33. **B&B la Madonnina** — Arpino
   - slug: `b-b-la-madonnina-arpino`
   - indirizzo: Via Vano Scaffa, 2, 03033, 03033 Arpino FR
34. **Bartolomè** — Arpino
   - slug: `bartolome-arpino`
   - indirizzo: Via Collebianco, 10, 03033 Arpino FR
35. **Bed & Breakfast Sotto la Torre** — Arpino
   - slug: `bed-breakfast-sotto-la-torre-arpino`
   - indirizzo: Via Madonnella, 7, 03033 Arpino FR