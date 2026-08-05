# Blocco 426/500 — 35 strutture senza descrizione IT

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

1. **Emmanuel Hotel Ristorante Bar** — Capriati a Volturno
   - slug: `emmanuel-hotel-ristorante-bar-capriati-a-volturno`
   - indirizzo: Via Atinense, 23, 86077 Pozzilli IS
2. **Hotel Dora - Parco della Ristorazione** — Capriati a Volturno
   - slug: `hotel-dora-parco-della-ristorazione-capriati-a-volturno`
   - indirizzo: SS 85 Venafrana, 86077 Pozzilli IS
3. **Hotel Le Ginestre** — Capriati a Volturno
   - slug: `hotel-le-ginestre-capriati-a-volturno`
   - indirizzo: Via Milano, 86074 Filignano IS
4. **Hotel Riggioni** — Capriati a Volturno
   - slug: `hotel-riggioni-capriati-a-volturno`
   - indirizzo: Via Atinense, 17/19, 86077 Pozzilli IS
5. **Masseria Mastrangelo** — Capriati a Volturno
   - slug: `masseria-mastrangelo-capriati-a-volturno`
   - indirizzo: via portelle, 17, 81010 Prata Sannita CE
6. **Ristorante Agriturismo Le Caiazzane** — Capriati a Volturno
   - slug: `ristorante-agriturismo-le-caiazzane-capriati-a-volturno`
   - indirizzo: Via Atinense, 33, 86077 Pozzilli IS
7. **Venafro Palace Hotel** — Capriati a Volturno
   - slug: `venafro-palace-hotel-capriati-a-volturno`
   - indirizzo: SS 85 Venafrana, 86079 Venafro IS
8. **Adagio Guesthouse** — Caprie
   - slug: `adagio-guesthouse-caprie`
   - indirizzo: Via Duca D'Aosta, 1, 10040 Novaretto TO
9. **B&B A casa di Aurora** — Caprie
   - slug: `b-b-a-casa-di-aurora-caprie`
   - indirizzo: Via Don Beniamino Pagliarello, 12, 10040 Novaretto TO
10. **B&B"Dal Conte"** — Caprie
   - slug: `b-b-dal-conte-caprie`
   - indirizzo: Via degli Orti, 6, 10055 Condove TO
11. **Pera Rionda Bed & Breakfast** — Caprie
   - slug: `pera-rionda-bed-breakfast-caprie`
   - indirizzo: Via Pietra Rotonda, 49, 10040 Caprie TO
12. **Kaliméra B&B** — Capriglia Irpina
   - slug: `kalimera-b-b-capriglia-irpina`
   - indirizzo: Via Malfitana, 18, 83010 Sant'Angelo a Scala AV
13. **Secret Garden B&B** — Capriglia Irpina
   - slug: `secret-garden-b-b-capriglia-irpina`
   - indirizzo: Piazza San Vito, 83010 Grottolella AV
14. **B&B Cascina Dei Levrieri** — Capriglio
   - slug: `b-b-cascina-dei-levrieri-capriglio`
   - indirizzo: Via Varo 6, 14014 Capriglio AT
15. **Cascina Piola** — Capriglio
   - slug: `cascina-piola-capriglio`
   - indirizzo: Via Fontana, 2, 14014 Capriglio AT
16. **CASCINA RURAL** — Capriglio
   - slug: `cascina-rural-capriglio`
   - indirizzo: Strada Val del Serro, 2 A, 14014 Montafia AT
17. **Relais Il Marchese del Grillo** — Capriglio
   - slug: `relais-il-marchese-del-grillo-capriglio`
   - indirizzo: Via Serra, 7, 14100 Capriglio AT
18. **Stanze in Campagna: Da Alberto** — Capriglio
   - slug: `stanze-in-campagna-da-alberto-capriglio`
   - indirizzo: Via Gallareto, 14, 14014 Montafia AT
19. **La Paladina Foresteria Lombarda** — Caprino Bergamasco
   - slug: `la-paladina-foresteria-lombarda-caprino-bergamasco`
   - indirizzo: Via Molino Sotto il Castello, 5, 24034 Cisano Bergamasco BG
20. **Ristorante e Residence La Marina** — Caprino Bergamasco
   - slug: `ristorante-e-residence-la-marina-caprino-bergamasco`
   - indirizzo: Via Don A. Bonanomi, 283, 24030 Pontida BG
21. **Agriturismo Cà del Baldo** — Caprino Veronese
   - slug: `agriturismo-ca-del-baldo-caprino-veronese`
   - indirizzo: Via Cappuccini, 32, 37013 Caprino Veronese VR
22. **Agriturismo Ca' del Laki** — Caprino Veronese
   - slug: `agriturismo-ca-del-laki-caprino-veronese`
   - indirizzo: Loc casette di, 8 Gaon VR
23. **Albergo Belvedere S.N.C. Di Lenotti Gianluigi & C.** — Caprino Veronese
   - slug: `albergo-belvedere-s-n-c-di-lenotti-gianluigi-c-caprino-veronese`
   - indirizzo: Via Pineta Sperane, 49, 37010 San Zeno di Montagna VR
24. **Albergo Sole S.A.S** — Caprino Veronese
   - slug: `albergo-sole-s-a-s-caprino-veronese`
   - indirizzo: Contrada Cà Schena, 1, 37010 San Zeno di Montagna VR
25. **B&B Fontana Rosa** — Caprino Veronese
   - slug: `b-b-fontana-rosa-caprino-veronese`
   - indirizzo: Località Caiar, 18, 37013 Caprino Veronese VR
26. **CORTE CAIAR Bed&Breakfast** — Caprino Veronese
   - slug: `corte-caiar-bed-breakfast-caprino-veronese`
   - indirizzo: CORTE CAIAR Bed&Breakfast, Località Caiar, 24, 37013 Caprino Veronese VR
27. **GardaZen Suites** — Caprino Veronese
   - slug: `gardazen-suites-caprino-veronese`
   - indirizzo: Via Monte Baldo, 24, 37013 Caprino Veronese VR
28. **Hotel Bellavista San Zeno di Montagna** — Caprino Veronese
   - slug: `hotel-bellavista-san-zeno-di-montagna-caprino-veronese`
   - indirizzo: Contrada Cà Montagna, 1, 37010 San Zeno di Montagna VR
29. **Locanda Al Centrale** — Caprino Veronese
   - slug: `locanda-al-centrale-caprino-veronese`
   - indirizzo: Via G. Mazzini, 29, 37013 Caprino Veronese VR
30. **Locanda Cà del Ponte** — Caprino Veronese
   - slug: `locanda-ca-del-ponte-caprino-veronese`
   - indirizzo: Via Costabella, 43, 37010 Albaré Stazione VR
31. **Palazzo di Primavera Guest House** — Caprino Veronese
   - slug: `palazzo-di-primavera-guest-house-caprino-veronese`
   - indirizzo: Piazza Vittoria, 4, 37013 Caprino Veronese VR
32. **Park Hotel Jolanda** — Caprino Veronese
   - slug: `park-hotel-jolanda-caprino-veronese`
   - indirizzo: Via degli Alpini, 7, 37010 San Zeno di Montagna VR
33. **POGGIO CAIAR Bed & Breakfast** — Caprino Veronese
   - slug: `poggio-caiar-bed-breakfast-caprino-veronese`
   - indirizzo: Località Caiar, 28, 37013 Caprino Veronese VR
34. **Relais Fontana Rosa** — Caprino Veronese
   - slug: `relais-fontana-rosa-caprino-veronese`
   - indirizzo: Località Caiar, 18, 37013 Caiar VR
35. **Residence La Filanda** — Caprino Veronese
   - slug: `residence-la-filanda-caprino-veronese`
   - indirizzo: Via Tavernole, 16, 37010 Costermano sul Garda VR