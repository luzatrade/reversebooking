# Blocco 69/500 — 35 strutture senza descrizione IT

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

1. **Masseria l'Antico Frantoio** — Alezio
   - slug: `masseria-l-antico-frantoio-alezio`
   - indirizzo: SP52, 73014 Gallipoli LE
2. **Mirage B&B Alezio** — Alezio
   - slug: `mirage-b-b-alezio-alezio`
   - indirizzo: Via Raheli, 4, 73011 Alezio LE
3. **Ostello Salento** — Alezio
   - slug: `ostello-salento-alezio`
   - indirizzo: Via Pirelli, 6, 73011 Alezio LE
4. **Palazzo Aurora** — Alezio
   - slug: `palazzo-aurora-alezio`
   - indirizzo: Via Roma, 129, 73011 Alezio LE
5. **Palazzo Castriota Scanderberg B&B** — Alezio
   - slug: `palazzo-castriota-scanderberg-b-b-alezio`
   - indirizzo: Via Umberto I, 73011 Alezio LE
6. **Tenuta Doxi** — Alezio
   - slug: `tenuta-doxi-alezio`
   - indirizzo: SP194, 73017 Sannicola LE
7. **Tenuta La Baronessa - Masseria & Country Resort** — Alezio
   - slug: `tenuta-la-baronessa-masseria-country-resort-alezio`
   - indirizzo: Strada Provinciale Alezio / Tuglie, km 1, 73058 Tuglie LE
8. **Tenuta La Siesta** — Alezio
   - slug: `tenuta-la-siesta-alezio`
   - indirizzo: Contrada Alizza, Santo, Via Stefano Catalano, 73014 Gallipoli LE
9. **Tenuta Monticelli** — Alezio
   - slug: `tenuta-monticelli-alezio`
   - indirizzo: Str, Via Vicinale Santo Stefano, 73011 Alezio LE
10. **Via Gallipoli B&B** — Alezio
   - slug: `via-gallipoli-b-b-alezio`
   - indirizzo: Via Gallipoli, 86, 73011 Alezio LE
11. **Villa Maria B&B** — Alezio
   - slug: `villa-maria-b-b-alezio`
   - indirizzo: Via dei Garofani, 73014 Baia Verde LE
12. **Villarancia B&B** — Alezio
   - slug: `villarancia-b-b-alezio`
   - indirizzo: Via Giuseppe Garibaldi, 78, 73011 Alezio LE
13. **Agriturismo Casa Giusta** — Alfano
   - slug: `agriturismo-casa-giusta-alfano`
   - indirizzo: Via Madonna delle Grazie, 12/14, 84051 Foria SA
14. **Albergo Ristorante la Pergola** — Alfano
   - slug: `albergo-ristorante-la-pergola-alfano`
   - indirizzo: Via Nazionale, 37, 84070 San Giovanni a Piro SA
15. **Amaltea Bed and Breakfast** — Alfano
   - slug: `amaltea-bed-and-breakfast-alfano`
   - indirizzo: Via S. Margherita, 23, 84051 Centola SA
16. **Antico Sogno** — Alfano
   - slug: `antico-sogno-alfano`
   - indirizzo: Via Santa Sofia, 4, 84040 Alfano SA
17. **B&b Daniela** — Alfano
   - slug: `b-b-daniela-alfano`
   - indirizzo: Via Hangar, 25, 84067 Policastro Bussentino SA
18. **B&B Dimora di Igea** — Alfano
   - slug: `b-b-dimora-di-igea-alfano`
   - indirizzo: Via Madonna Della Neve, 84060 Massicelle SA
19. **B&B Domus Olea** — Alfano
   - slug: `b-b-domus-olea-alfano`
   - indirizzo: Via Scazzaro, 1, 84070 Policastro Bussentino SA
20. **B&B Donna Maja** — Alfano
   - slug: `b-b-donna-maja-alfano`
   - indirizzo: Via Donna Maria, 84051 San Severino SA
21. **B&B El Dorado** — Alfano
   - slug: `b-b-el-dorado-alfano`
   - indirizzo: VIA ISCA S. STEFANO, 58 A, 84051 Palinuro SA
22. **B&B Il Vicoletto Del Casale** — Alfano
   - slug: `b-b-il-vicoletto-del-casale-alfano`
   - indirizzo: Via Generale Imbriaco, 41 84050 Foria, 84051 Centola SA
23. **Country House la Contadina** — Alfano
   - slug: `country-house-la-contadina-alfano`
   - indirizzo: Localita' Mancelli, snc, 84040 Alfano SA
24. **Dimora Villa Rita** — Alfano
   - slug: `dimora-villa-rita-alfano`
   - indirizzo: Via del Mare, 37, 84060 Acquavena SA
25. **Hotel Borgo Antico** — Alfano
   - slug: `hotel-borgo-antico-alfano`
   - indirizzo: Via Vallone Cassiere, 84051 Centola SA
26. **Hotel Caluna Charme** — Alfano
   - slug: `hotel-caluna-charme-alfano`
   - indirizzo: SP17b, 84070 San Giovanni a Piro SA
27. **Hotel Ristorante Pizzeria Il Gabbiano** — Alfano
   - slug: `hotel-ristorante-pizzeria-il-gabbiano-alfano`
   - indirizzo: Via Fontana Vecchia, 28, 84030 Sanza SA
28. **Il Casale del Barone, SA** — Alfano
   - slug: `il-casale-del-barone-sa-alfano`
   - indirizzo: CONTRADA CIORLIA, 84070 San Giovanni a Piro SA
29. **Ispani Inn Resort** — Alfano
   - slug: `ispani-inn-resort-alfano`
   - indirizzo: Via Flavio Gioia, 7, 84050 Ispani SA
30. **Mansarda Fiorita** — Alfano
   - slug: `mansarda-fiorita-alfano`
   - indirizzo: Contrada Pozzo, 43, 84060 Abatemarco SA
31. **Scario Club** — Alfano
   - slug: `scario-club-alfano`
   - indirizzo: VII, Traversa n°7, Località Marcaneto, SNC, 84070 San Giovanni a Piro SA
32. **Statera Hotel Village** — Alfano
   - slug: `statera-hotel-village-alfano`
   - indirizzo: via Ferrovia, 84040 Celle di Bulgheria SA
33. **Affittacamere il Bucaneve** — Alfedena
   - slug: `affittacamere-il-bucaneve-alfedena`
   - indirizzo: Via Rione Orientale, 48, 67030 Barrea AQ
34. **affittacamere le rondini** — Alfedena
   - slug: `affittacamere-le-rondini-alfedena`
   - indirizzo: Via Roma, 19, 67030 Civitella Alfedena AQ
35. **Albergo Ai Quattro Camosci** — Alfedena
   - slug: `albergo-ai-quattro-camosci-alfedena`
   - indirizzo: Via Nazionale, 25, 67030 Civitella Alfedena AQ