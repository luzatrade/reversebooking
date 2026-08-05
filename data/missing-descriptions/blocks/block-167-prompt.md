# Blocco 167/500 — 35 strutture senza descrizione IT

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

1. **Wellness & Relax Hotel Erica** — Asiago
   - slug: `wellness-relax-hotel-erica-asiago`
   - indirizzo: Viale G. Garibaldi, 55, 36012 Asiago VI
2. **Agriturismo Campanella** — Asigliano Veneto
   - slug: `agriturismo-campanella-asigliano-veneto`
   - indirizzo: Via Campanella, 15, 36040 Sossano VI
3. **B&B al Doremi** — Asigliano Veneto
   - slug: `b-b-al-doremi-asigliano-veneto`
   - indirizzo: Via Brigata Cadore, 53, 36020 Castegnero VI
4. **CASA STEFY** — Asigliano Veneto
   - slug: `casa-stefy-asigliano-veneto`
   - indirizzo: Via Alberi, 34, 35044 Montagnana PD
5. **Corte delle Giuggiole** — Asigliano Veneto
   - slug: `corte-delle-giuggiole-asigliano-veneto`
   - indirizzo: Via Casino, 2/a, 37044 Cologna Veneta VR
6. **LA VILLA** — Asigliano Veneto
   - slug: `la-villa-asigliano-veneto`
   - indirizzo: Via Alberi, 45, 35044 Montagnana PD
7. **Quari Hotel Restaurant & Pizza** — Asigliano Veneto
   - slug: `quari-hotel-restaurant-pizza-asigliano-veneto`
   - indirizzo: Via Quari Destra, 3, 37044 Quari Destra VR
8. **B&B Gaietta** — Asigliano Vercellese
   - slug: `b-b-gaietta-asigliano-vercellese`
   - indirizzo: Via Boschetti, 3, 15040 Frassineto Po AL
9. **B&B Sant'Andrea** — Asigliano Vercellese
   - slug: `b-b-sant-andrea-asigliano-vercellese`
   - indirizzo: Via Galileo Ferraris, 108, 13100 Vercelli VC
10. **Blue Ribbon Hotel, Ristorante e Pizzeria** — Asigliano Vercellese
   - slug: `blue-ribbon-hotel-ristorante-e-pizzeria-asigliano-vercellese`
   - indirizzo: Corso Novara, 67, 13100 Vercelli VC
11. **Cerruti Hotel** — Asigliano Vercellese
   - slug: `cerruti-hotel-asigliano-vercellese`
   - indirizzo: Corso Novara, 71, 13100 Vercelli VC
12. **Hotel Garibaldi Vercelli** — Asigliano Vercellese
   - slug: `hotel-garibaldi-vercelli-asigliano-vercellese`
   - indirizzo: Via Thaon de Revel, 87, 13100 Vercelli VC
13. **Hotel Il Convento** — Asigliano Vercellese
   - slug: `hotel-il-convento-asigliano-vercellese`
   - indirizzo: Via Hermada, 3/A, 13039 Trino VC
14. **Hotel Matteotti Vercelli** — Asigliano Vercellese
   - slug: `hotel-matteotti-vercelli-asigliano-vercellese`
   - indirizzo: Corso Giacomo Matteotti, 35, 13100 Vercelli VC
15. **La Mondina** — Asigliano Vercellese
   - slug: `la-mondina-asigliano-vercellese`
   - indirizzo: Via Cerretta, 13040 Palazzolo Vercellese VC
16. **Tenuta del Vecchio Mulino** — Asigliano Vercellese
   - slug: `tenuta-del-vecchio-mulino-asigliano-vercellese`
   - indirizzo: Via Roma, 119, 13010 Motta de' Conti VC
17. **Agriturismo Corte Fattori** — Asola
   - slug: `agriturismo-corte-fattori-asola`
   - indirizzo: Via Moscatello, 129, 46040 Castellaro Lagusello MN
18. **Agriturismo Dondino** — Asola
   - slug: `agriturismo-dondino-asola`
   - indirizzo: Strada Cavallara, 4, 46040 Cavriana MN
19. **Agriturismo le Fontanelle da Valente** — Asola
   - slug: `agriturismo-le-fontanelle-da-valente-asola`
   - indirizzo: Via Rampina di S. Giorgio, 20, 25018 Montichiari BS
20. **Agriturismo Scannaporco** — Asola
   - slug: `agriturismo-scannaporco-asola`
   - indirizzo: Via Cervo, 2c, 46040 Scannaporco MN
21. **B&B Al Tramonto** — Asola
   - slug: `b-b-al-tramonto-asola`
   - indirizzo: VIA NUOVA ITALIA, SP18, 22, 46040 Monzambano MN
22. **B&B COCO** — Asola
   - slug: `b-b-coco-asola`
   - indirizzo: Via Giuseppe Garibaldi, 9, 25012 Calvisano BS
23. **B&B Conca Verde** — Asola
   - slug: `b-b-conca-verde-asola`
   - indirizzo: Via Bagatino, 16, 46040 Cavriana MN
24. **Casa Autunno** — Asola
   - slug: `casa-autunno-asola`
   - indirizzo: Strada Sale, 39, 46040 Monzambano MN
25. **Hotel Ristorante Alla Corte dei Bicchi** — Asola
   - slug: `hotel-ristorante-alla-corte-dei-bicchi-asola`
   - indirizzo: Via Guidizzolo, 10, 46040 Cavriana MN
26. **Hotel Ristorante Nuvole** — Asola
   - slug: `hotel-ristorante-nuvole-asola`
   - indirizzo: SP87, 26042 Vidiceto CR
27. **Pilgrim's Hotel** — Asola
   - slug: `pilgrim-s-hotel-asola`
   - indirizzo: SP33, 9, 26030 Cicognolo CR
28. **Al Reparo** — Asolo
   - slug: `al-reparo-asolo`
   - indirizzo: Via Rive, 31, 31040 Onigo TV
29. **B&B ANTICO MAGLIO** — Asolo
   - slug: `b-b-antico-maglio-asolo`
   - indirizzo: Via Foresto di Pagnano, 40/A, 31011 Asolo TV
30. **B&B Asolo Casa Pagnano** — Asolo
   - slug: `b-b-asolo-casa-pagnano-asolo`
   - indirizzo: Via Vallorgana, 22, 31011 Pagnano TV
31. **B&B Casasolana** — Asolo
   - slug: `b-b-casasolana-asolo`
   - indirizzo: Via Sottocastello, 18, 31011 Asolo TV
32. **B&B Do None** — Asolo
   - slug: `b-b-do-none-asolo`
   - indirizzo: Via Calò, 26, 31011 Asolo TV
33. **B&B La Fabbrica delle Idee** — Asolo
   - slug: `b-b-la-fabbrica-delle-idee-asolo`
   - indirizzo: Via Menegoni, 43, 31010 Fonte TV
34. **B&B SWEET DREAMS** — Asolo
   - slug: `b-b-sweet-dreams-asolo`
   - indirizzo: Via Rù, 6, 31010 Fonte Alto TV
35. **B&B Zia Maria** — Asolo
   - slug: `b-b-zia-maria-asolo`
   - indirizzo: Via Carpenedo, 18, 31010 Fonte TV