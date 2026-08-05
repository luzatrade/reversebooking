# Blocco 302/500 — 35 strutture senza descrizione IT

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

1. **B&B CasaVerde Belluno** — Borgo Valbelluna
   - slug: `b-b-casaverde-belluno-borgo-valbelluna`
   - indirizzo: Via Rive di Villa, 37, 32026 Borgo Valbelluna BL
2. **Bed and Breakfast la Colombera** — Borgo Valbelluna
   - slug: `bed-and-breakfast-la-colombera-borgo-valbelluna`
   - indirizzo: Via Frontin, 116/A, 32026 Borgo Valbelluna BL
3. **Casa Rosetta** — Borgo Valbelluna
   - slug: `casa-rosetta-borgo-valbelluna`
   - indirizzo: Via Rive di Villa, 62, 32026 Borgo Valbelluna BL
4. **Hotel Ristorante Pizzeria Al Cavallino Rosso** — Borgo Valbelluna
   - slug: `hotel-ristorante-pizzeria-al-cavallino-rosso-borgo-valbelluna`
   - indirizzo: Via Bardies, 65, 32026 Borgo Valbelluna BL
5. **Il Fontego - B&B** — Borgo Valbelluna
   - slug: `il-fontego-b-b-borgo-valbelluna`
   - indirizzo: Corso 31 Ottobre, 6d, 32026 Borgo Valbelluna BL
6. **La Polluce bed and breakfast** — Borgo Valbelluna
   - slug: `la-polluce-bed-and-breakfast-borgo-valbelluna`
   - indirizzo: Via, Località Confos, 79, 32026 Borgo Valbelluna BL
7. **Panorama Dolomiti** — Borgo Valbelluna
   - slug: `panorama-dolomiti-borgo-valbelluna`
   - indirizzo: Via Galliano, 9, 32026 Mel BL
8. **Relais Poggio Pagnan Agriturismo 5 Girasoli** — Borgo Valbelluna
   - slug: `relais-poggio-pagnan-agriturismo-5-girasoli-borgo-valbelluna`
   - indirizzo: Via Zottier, 35, 32026 Zottier BL
9. **Agritur Maso Valli** — Borgo Valsugana
   - slug: `agritur-maso-valli-borgo-valsugana`
   - indirizzo: Via Per Telve, 3, 38051 Borgo Valsugana TN
10. **Agriturismo Fattoria Dalcastagnè** — Borgo Valsugana
   - slug: `agriturismo-fattoria-dalcastagne-borgo-valsugana`
   - indirizzo: Loc Mosili, 16, 38050 Torcegno TN
11. **Al Cacciatore - Albergo - Ristorante - Bar** — Borgo Valsugana
   - slug: `al-cacciatore-albergo-ristorante-bar-borgo-valsugana`
   - indirizzo: Località Prati di Monte, 38056 Levico Terme TN
12. **B&B AL GATTO NERO** — Borgo Valsugana
   - slug: `b-b-al-gatto-nero-borgo-valsugana`
   - indirizzo: Via Mazzini, 6, 38051 Borgo Valsugana TN
13. **B&B Casa d'Arte** — Borgo Valsugana
   - slug: `b-b-casa-d-arte-borgo-valsugana`
   - indirizzo: Vicolo delle Caodigne, 14/app.2, 38056 Levico Terme TN
14. **B&B Piagaro Borgo Valsugana** — Borgo Valsugana
   - slug: `b-b-piagaro-borgo-valsugana-borgo-valsugana`
   - indirizzo: Località Piagaro, 1, 38051 Borgo Valsugana TN
15. **BellaVista Relax Hotel** — Borgo Valsugana
   - slug: `bellavista-relax-hotel-borgo-valsugana`
   - indirizzo: Via Vittorio Emanuele III, 7, 38056 Levico Terme TN
16. **Hotel Eden Levico Terme** — Borgo Valsugana
   - slug: `hotel-eden-levico-terme-borgo-valsugana`
   - indirizzo: Via Vittorio Emanuele, 14, 38056 Levico Terme TN
17. **La Tana del Lupo** — Borgo Valsugana
   - slug: `la-tana-del-lupo-borgo-valsugana`
   - indirizzo: V. Fonde, n. 30, 38051 Borgo Valsugana TN
18. **La Villa degli Orti** — Borgo Valsugana
   - slug: `la-villa-degli-orti-borgo-valsugana`
   - indirizzo: Via per Torcegno, 05, 38051 Borgo Valsugana TN
19. **Locanda in Borgo Garni&Wellness** — Borgo Valsugana
   - slug: `locanda-in-borgo-garni-wellness-borgo-valsugana`
   - indirizzo: Corso Ausugum, 90, 38051 Borgo Valsugana TN
20. **Ostello Sportivo di Borgo Valsugana** — Borgo Valsugana
   - slug: `ostello-sportivo-di-borgo-valsugana-borgo-valsugana`
   - indirizzo: Via Piccola, 31, 38051 Borgo Valsugana TN
21. **San Giorgio Affittacamere Rent a Room** — Borgo Valsugana
   - slug: `san-giorgio-affittacamere-rent-a-room-borgo-valsugana`
   - indirizzo: Via Fratelli, 6, 38051 Borgo Valsugana TN
22. **Albergo-Ristorante"Parco alle Noci"tra la Cascata delle Marmore,Labro e valle Santa di S Francesco** — Borgo Velino
   - slug: `albergo-ristorante-parco-alle-noci-tra-la-cascat-borgo-velino`
   - indirizzo: Via S. Susanna, 21, 02010 Piedicolle RI
23. **Hotel Arcangelo** — Borgo Velino
   - slug: `hotel-arcangelo-borgo-velino`
   - indirizzo: Via Vaiano Nuova, 52, 02100 Rieti RI
24. **Hotel Ristorante "I Tre Orsacchiotti"** — Borgo Velino
   - slug: `hotel-ristorante-i-tre-orsacchiotti-borgo-velino`
   - indirizzo: Via Nazionale, 15, 02010 Castel Sant'Angelo RI
25. **Hotel Ristorante Da Valerio** — Borgo Velino
   - slug: `hotel-ristorante-da-valerio-borgo-velino`
   - indirizzo: Via Salaria per Roma, 4, 02015 Santa Rufina RI
26. **Hotel Togo Palace** — Borgo Velino
   - slug: `hotel-togo-palace-borgo-velino`
   - indirizzo: P.le Zamboni, 10, 02100 Rieti RI
27. **Agriturismo Azienda Agricola Marin** — Borgo Veneto
   - slug: `agriturismo-azienda-agricola-marin-borgo-veneto`
   - indirizzo: Via Chiesa Prà, 64, 35042 Este PD
28. **B&B Borgo Arcadia** — Borgo Veneto
   - slug: `b-b-borgo-arcadia-borgo-veneto`
   - indirizzo: Via Sabbioni, 21A, 36026 Pojana Maggiore VI
29. **Locanda Ca' Vejo srl** — Borgo Veneto
   - slug: `locanda-ca-vejo-srl-borgo-veneto`
   - indirizzo: V. Nello Gioachin, 34-36, 35040 Megliadino San Vitale PD
30. **Macri** — Borgo Veneto
   - slug: `macri-borgo-veneto`
   - indirizzo: Via Giacomo Matteotti, 88, 35044 Montagnana PD
31. **Ristorante Albergo Al Capitello** — Borgo Veneto
   - slug: `ristorante-albergo-al-capitello-borgo-veneto`
   - indirizzo: Via Capitello, 12, 35040 Megliadino San Vitale PD
32. **Villa Mari** — Borgo Veneto
   - slug: `villa-mari-borgo-veneto`
   - indirizzo: Via S Zeno, 25, 35044 Montagnana PD
33. **Agriturismo Cascina Margherita** — Borgo Vercelli
   - slug: `agriturismo-cascina-margherita-borgo-vercelli`
   - indirizzo: Cascina Margherita, 3, 28060 Ponzana NO
34. **Borgo Ramezzana Country House** — Borgo Vercelli
   - slug: `borgo-ramezzana-country-house-borgo-vercelli`
   - indirizzo: SP7, 3, 13039 Trino VC
35. **A Casa dei Gonzaga** — Borgo Virgilio
   - slug: `a-casa-dei-gonzaga-borgo-virgilio`
   - indirizzo: Via Saverio Bettinelli, 29, 46100 Mantova MN