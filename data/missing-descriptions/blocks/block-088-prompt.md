# Blocco 88/500 — 35 strutture senza descrizione IT

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

1. **B&B L'arcobaleno** — Altino
   - slug: `b-b-l-arcobaleno-altino`
   - indirizzo: contrada pagani, 23, 66010 Palombaro CH
2. **B&B La casa di Mamie e Papi** — Altino
   - slug: `b-b-la-casa-di-mamie-e-papi-altino`
   - indirizzo: Via Dentro le Mura, 7, 66020 Paglieta CH
3. **B&B" del Castello"** — Altino
   - slug: `b-b-del-castello-altino`
   - indirizzo: Via Duca degli Abruzzi, 18, 66040 Roccascalegna CH
4. **BB/Casavacanze Corneto** — Altino
   - slug: `bb-casavacanze-corneto-altino`
   - indirizzo: Contrada Corneto, 66042 Bomba CH
5. **Eden Hotel Residence** — Altino
   - slug: `eden-hotel-residence-altino`
   - indirizzo: Contrada Rosciavizza, 68, 66030 Mozzagrogna CH
6. **Hotel Domus** — Altino
   - slug: `hotel-domus-altino`
   - indirizzo: Via Nazionale, 351, 66040 Altino CH
7. **Hotel Paradiso** — Altino
   - slug: `hotel-paradiso-altino`
   - indirizzo: Viale delle Piane, 62, 66019 Torricella Peligna CH
8. **Il Castello** — Altino
   - slug: `il-castello-altino`
   - indirizzo: Largo Castello, 4, 66041 Atessa CH
9. **Il Giardinotto Bed&Breakfast** — Altino
   - slug: `il-giardinotto-bed-breakfast-altino`
   - indirizzo: Via Supportico, 15, 66040 Altino CH
10. **Il pettirosso** — Altino
   - slug: `il-pettirosso-altino`
   - indirizzo: Contrada Fonte, 11, 66040 Altino CH
11. **La Sorgente** — Altino
   - slug: `la-sorgente-altino`
   - indirizzo: Via S. Pietro, 2, 66015 Fara San Martino CH
12. **Nonno Peppe B&B** — Altino
   - slug: `nonno-peppe-b-b-altino`
   - indirizzo: Via Maligni, 6, 66040 Perano CH
13. **Ospitati - B&B Le Tre Chiavi** — Altino
   - slug: `ospitati-b-b-le-tre-chiavi-altino`
   - indirizzo: Corso Roma, 64, 66041 Castel Frentano CH
14. **Palazzo Pulieri, dimora storica del 1500** — Altino
   - slug: `palazzo-pulieri-dimora-storica-del-1500-altino`
   - indirizzo: Via Roma, 45, 66040 Altino CH
15. **Rosato Casa Vacanze** — Altino
   - slug: `rosato-casa-vacanze-altino`
   - indirizzo: Via della Chiesa, n°10, 66040 Altino CH
16. **Agriturismo Da Celestina** — Altissimo
   - slug: `agriturismo-da-celestina-altissimo`
   - indirizzo: Via Zini, 40, 36071 Arzignano VI
17. **Agriturismo Riva Ratta** — Altissimo
   - slug: `agriturismo-riva-ratta-altissimo`
   - indirizzo: Via Campestrini, 52, 36075 Montecchio Maggiore VI
18. **Albergo Ristorante Roma** — Altissimo
   - slug: `albergo-ristorante-roma-altissimo`
   - indirizzo: Via Garibaldi, 12, 36078 Valdagno VI
19. **Alloggi Alla Rotonda** — Altissimo
   - slug: `alloggi-alla-rotonda-altissimo`
   - indirizzo: Via Garziere, 49, 36014 Santorso VI
20. **Amagi Home** — Altissimo
   - slug: `amagi-home-altissimo`
   - indirizzo: Via Vicentini, 7, 37030 Montecchia di Crosara VR
21. **Angolo di Paradiso** — Altissimo
   - slug: `angolo-di-paradiso-altissimo`
   - indirizzo: Via Laita S. Pietro, 36070 Altissimo VI
22. **B&B Ca' Panisacco** — Altissimo
   - slug: `b-b-ca-panisacco-altissimo`
   - indirizzo: c.da Frati di Santa Maria 2, 36078 Valdagno VI
23. **Casalloro** — Altissimo
   - slug: `casalloro-altissimo`
   - indirizzo: Via Nanti, 10, 36073 Cornedo Vicentino VI
24. **Hotel Albergo al Sole** — Altissimo
   - slug: `hotel-albergo-al-sole-altissimo`
   - indirizzo: Via S. Giovanni, 47, 36034 Malo VI
25. **Hotel Miramonti** — Altissimo
   - slug: `hotel-miramonti-altissimo`
   - indirizzo: Via Guglielmo Marconi, 3, 36015 Schio VI
26. **Hotel Ristorante Ponte Nuovo** — Altissimo
   - slug: `hotel-ristorante-ponte-nuovo-altissimo`
   - indirizzo: Via Molino, 33, 36070 Altissimo VI
27. **Hotel Ristorante Villa I Pini** — Altissimo
   - slug: `hotel-ristorante-villa-i-pini-altissimo`
   - indirizzo: Via Schio, 77, 36034 Malo VI
28. **La Pieve Hotel** — Altissimo
   - slug: `la-pieve-hotel-altissimo`
   - indirizzo: Via Pieve, 69, 36072 Chiampo VI
29. **La Rindola** — Altissimo
   - slug: `la-rindola-altissimo`
   - indirizzo: Via Campanella, 18, 36070 Altissimo VI
30. **Le Andrianelle Ristorante - Hotel** — Altissimo
   - slug: `le-andrianelle-ristorante-hotel-altissimo`
   - indirizzo: Via Loggia, 10, 36034 Malo VI
31. **Le Camere di Marietta** — Altissimo
   - slug: `le-camere-di-marietta-altissimo`
   - indirizzo: Piazza S. Rocco, 9, 37028 San Rocco VR
32. **Locanda Perinella** — Altissimo
   - slug: `locanda-perinella-altissimo`
   - indirizzo: Via Bregonza, 19, 36070 Brogliano VI
33. **Schio Hotel** — Altissimo
   - slug: `schio-hotel-altissimo`
   - indirizzo: Via Campagnola, 21/A, 36015 Schio VI
34. **Susanna Alloggio Turistico** — Altissimo
   - slug: `susanna-alloggio-turistico-altissimo`
   - indirizzo: V. Postale Vecchia, 14/a, 36070 Trissino VI
35. **Vecia Osteria DAL MENGA - Ristorante - Hotel - Enoteca - Cocktail Bar** — Altissimo
   - slug: `vecia-osteria-dal-menga-ristorante-hotel-enoteca-altissimo`
   - indirizzo: P.za Cavalieri di Vittorio Veneto, 17, 36036 Torrebelvicino VI