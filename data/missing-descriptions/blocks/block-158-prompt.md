# Blocco 158/500 — 35 strutture senza descrizione IT

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

1. **Albergo Ristorante Da Marco al Cerbaro** — Arsiero
   - slug: `albergo-ristorante-da-marco-al-cerbaro-arsiero`
   - indirizzo: Contrà Cerbaro, 1, 36015 Schio VI
2. **Albergo Speranza** — Arsiero
   - slug: `albergo-speranza-arsiero`
   - indirizzo: Via Patrioti, 21, 36012 Asiago VI
3. **B&B Cappuccini** — Arsiero
   - slug: `b-b-cappuccini-arsiero`
   - indirizzo: Via Cappuccini, 23, 36015 Schio VI
4. **B&B Flauto Magico** — Arsiero
   - slug: `b-b-flauto-magico-arsiero`
   - indirizzo: Via Garibaldi, 21, 36030 Caltrano VI
5. **Giorgio e Flora Ristorante e Locanda** — Arsiero
   - slug: `giorgio-e-flora-ristorante-e-locanda-arsiero`
   - indirizzo: Via Baldono, 1, 36010 Velo d'Astico VI
6. **Hotel Alpi** — Arsiero
   - slug: `hotel-alpi-arsiero`
   - indirizzo: Corso IV Novembre, 6/8, 36012 Asiago VI
7. **Hotel Belvedere** — Arsiero
   - slug: `hotel-belvedere-arsiero`
   - indirizzo: Via Val Posina, 71, 36016 Thiene VI
8. **Hotel Ristorante Al Prato** — Arsiero
   - slug: `hotel-ristorante-al-prato-arsiero`
   - indirizzo: Contrà Sarcello, 4, 36040 Tonezza del Cimone VI
9. **Il Capriolo Felice - Agriturismo** — Arsiero
   - slug: `il-capriolo-felice-agriturismo-arsiero`
   - indirizzo: Via Montepiano, 41, 36040 Lastebasse VI
10. **Il Giglio Alloggio** — Arsiero
   - slug: `il-giglio-alloggio-arsiero`
   - indirizzo: Via G. Snichelotto, 18, 36015 Schio VI
11. **La Casa Dei Gelsomini** — Arsiero
   - slug: `la-casa-dei-gelsomini-arsiero`
   - indirizzo: Via Lago di Sotto, 9, 36010 Lago VI
12. **La Vigneta** — Arsiero
   - slug: `la-vigneta-arsiero`
   - indirizzo: Via dei Longhi, 17, 36011 Arsiero VI
13. **Residence Hotel Cimbro** — Arsiero
   - slug: `residence-hotel-cimbro-arsiero`
   - indirizzo: Piazza Cimbri, 4, 36010 Roana VI
14. **Ristorante Albergo Al Garibaldino** — Arsiero
   - slug: `ristorante-albergo-al-garibaldino-arsiero`
   - indirizzo: Via Sareo, 5, 36010 Posina VI
15. **Agriturismo Bellavista** — Arsita
   - slug: `agriturismo-bellavista-arsita`
   - indirizzo: Contrada San Vito, 3, 64031 Arsita TE
16. **Agriturismo La Vecchia Fontana** — Arsita
   - slug: `agriturismo-la-vecchia-fontana-arsita`
   - indirizzo: C. da Flagnano, 1, 65017 Roccafinadamo PE
17. **Albergo Ristorante Bar San Lorenzo** — Arsita
   - slug: `albergo-ristorante-bar-san-lorenzo-arsita`
   - indirizzo: Via Nazionale, 27, 64039 Val Vomano TE
18. **Alloggio Agrituristico Bellavista** — Arsita
   - slug: `alloggio-agrituristico-bellavista-arsita`
   - indirizzo: Via degli Angeli, 64030 Ronzano TE
19. **alloggio agrituristico le ginestre** — Arsita
   - slug: `alloggio-agrituristico-le-ginestre-arsita`
   - indirizzo: 64031 Colle dei Cerri TE, Italia
20. **B&B il Ghiro e la Luna** — Arsita
   - slug: `b-b-il-ghiro-e-la-luna-arsita`
   - indirizzo: Contrada Valle Iannina, 64031 Arsita TE
21. **B&B Il Girasole** — Arsita
   - slug: `b-b-il-girasole-arsita`
   - indirizzo: Frazione Villa Frio, 13, 64030 Basciano TE
22. **B&B MARA E MONTI** — Arsita
   - slug: `b-b-mara-e-monti-arsita`
   - indirizzo: Fraz. Case Vaddino-Chiarino. snc, 64049 Tossicia TE
23. **Bed and Breakfast Casa Donà** — Arsita
   - slug: `bed-and-breakfast-casa-dona-arsita`
   - indirizzo: Contrada Localita Casale, 17, 65017 Penne PE
24. **Colle degli Angeli** — Arsita
   - slug: `colle-degli-angeli-arsita`
   - indirizzo: Vico de Santis, 65017 Penne PE
25. **Colle Dei Venti** — Arsita
   - slug: `colle-dei-venti-arsita`
   - indirizzo: Contrada S. Vito, 7, 64031 Arsita TE
26. **Hotel Pina** — Arsita
   - slug: `hotel-pina-arsita`
   - indirizzo: Contrada S. Gabriele, 183, 64045 Isola del Gran Sasso d'Italia TE
27. **Hotel Vomano** — Arsita
   - slug: `hotel-vomano-arsita`
   - indirizzo: Viale Risorgimento, 113, 64046 Montorio al Vomano TE
28. **Il Giardino Di Maria - Pizzeria - Piadineria - Bed and Breakfast** — Arsita
   - slug: `il-giardino-di-maria-pizzeria-piadineria-bed-and-arsita`
   - indirizzo: SP37a, 6, 64041 Colledoro TE
29. **Il Parco dei Poeti Bed & Breakfast** — Arsita
   - slug: `il-parco-dei-poeti-bed-breakfast-arsita`
   - indirizzo: Contrada, SP23a, 64036 Stampalone TE
30. **La Locanda Del Brigante** — Arsita
   - slug: `la-locanda-del-brigante-arsita`
   - indirizzo: Via Colli, 59, 65010 Farindola PE
31. **La loggia antica** — Arsita
   - slug: `la-loggia-antica-arsita`
   - indirizzo: Contrada Carbonesca, 64033 Arsita TE
32. **La Via del Parco** — Arsita
   - slug: `la-via-del-parco-arsita`
   - indirizzo: Contrada Collemesolo, 16, 64031 Arsita TE
33. **Podere VignaLago** — Arsita
   - slug: `podere-vignalago-arsita`
   - indirizzo: Contrada Poggioragone, 10, 65014 Loreto Aprutino PE
34. **Ristorante -Camere "La Locanda del Voltigno"** — Arsita
   - slug: `ristorante-camere-la-locanda-del-voltigno-arsita`
   - indirizzo: Contrada Santa Maria, 10, 65010 Villa Celiera PE
35. **Bed & Wellness Fisterre** — Arsi�
   - slug: `bed-wellness-fisterre-arsi`
   - indirizzo: Via Fisterre, 3, 32100 Belluno BL