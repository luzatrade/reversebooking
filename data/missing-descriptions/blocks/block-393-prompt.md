# Blocco 393/500 — 35 strutture senza descrizione IT

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

1. **Albergo Ristorante Campanile Azzurro** — Campodoro
   - slug: `albergo-ristorante-campanile-azzurro-campodoro`
   - indirizzo: Via Ronchi, 24, 35010 Ronchi di Campanile PD
2. **B&B El Criveo** — Campodoro
   - slug: `b-b-el-criveo-campodoro`
   - indirizzo: Via Tolleo, 32, 35016 Piazzola sul Brenta PD
3. **Colombara Farmhouse** — Campodoro
   - slug: `colombara-farmhouse-campodoro`
   - indirizzo: Via S. Giovanni Battista, 29, 35035 Mestrino PD
4. **Hotel Marco Effe** — Campodoro
   - slug: `hotel-marco-effe-campodoro`
   - indirizzo: Via Marco Polo, 63, 35035 Mestrino PD
5. **Hotel Pex Padova** — Campodoro
   - slug: `hotel-pex-padova-campodoro`
   - indirizzo: Via della Provvidenza, 31, 35030 Sarmeola PD
6. **Laghetto Ca' Brusà** — Campodoro
   - slug: `laghetto-ca-brusa-campodoro`
   - indirizzo: Via Vanzo Vecchio, 47A, 36043 Camisano Vicentino VI
7. **Acacia Resort** — Campofelice di Roccella
   - slug: `acacia-resort-campofelice-di-roccella`
   - indirizzo: Via Imera, 6, 90010 Campofelice di Roccella PA
8. **Agriturismo Le Campanelle** — Campofelice di Roccella
   - slug: `agriturismo-le-campanelle-campofelice-di-roccella`
   - indirizzo: Contrada, Via Olivazza, 90010 Lascari PA
9. **Campeggio Praia Mare** — Campofelice di Roccella
   - slug: `campeggio-praia-mare-campofelice-di-roccella`
   - indirizzo: Via Madonnina Di Gibilmanna, 91, 90010 Piana Calzata PA
10. **campofelice di roccella** — Campofelice di Roccella
   - slug: `campofelice-di-roccella-campofelice-di-roccella`
   - indirizzo: 90010 Campofelice di Roccella PA
11. **Carlton Hotel Riviera - Cefalù** — Campofelice di Roccella
   - slug: `carlton-hotel-riviera-cefalu-campofelice-di-roccella`
   - indirizzo: Contrada Capo Plaia, snc, 90015 Cefalù PA
12. **Casa Vacanze Sosta dei Garibaldini** — Campofelice di Roccella
   - slug: `casa-vacanze-sosta-dei-garibaldini-campofelice-di-roccella`
   - indirizzo: Via Roma, 21, 90010 Campofelice di Roccella PA
13. **Grand Palladium Sicilia Resort & Spa - All Inclusive** — Campofelice di Roccella
   - slug: `grand-palladium-sicilia-resort-spa-all-inclusive-campofelice-di-roccella`
   - indirizzo: Viale Himera, 7, 90010 Campofelice di Roccella PA
14. **Hotel Costa Verde** — Campofelice di Roccella
   - slug: `hotel-costa-verde-campofelice-di-roccella`
   - indirizzo: Via dell'Imprenditoria, 90015 Cefalù PA
15. **Hotel Dolcestate** — Campofelice di Roccella
   - slug: `hotel-dolcestate-campofelice-di-roccella`
   - indirizzo: Contrada Pistavecchia, 90010 Campofelice di Roccella PA
16. **I Mori Holiday Rooms** — Campofelice di Roccella
   - slug: `i-mori-holiday-rooms-campofelice-di-roccella`
   - indirizzo: Via Giuseppe Mazzini, 22, 90010 Lascari PA
17. **Le Dune Bed & Breakfast Lascari** — Campofelice di Roccella
   - slug: `le-dune-bed-breakfast-lascari-campofelice-di-roccella`
   - indirizzo: via del mare, C.da Salinelle, 15, 90010 Lascari PA
18. **Limen Wellness Hotel** — Campofelice di Roccella
   - slug: `limen-wellness-hotel-campofelice-di-roccella`
   - indirizzo: Contrada Pistavecchia, snc, 90010 Campofelice di Roccella PA
19. **Mangia's Himera Resort** — Campofelice di Roccella
   - slug: `mangia-s-himera-resort-campofelice-di-roccella`
   - indirizzo: Viale Delle Tribune, 90010 Campofelice di Roccella PA
20. **PALMAR boutique hotel** — Campofelice di Roccella
   - slug: `palmar-boutique-hotel-campofelice-di-roccella`
   - indirizzo: Lungomare del Mediterraneo, 39, 90010 Solfarelli PA
21. **Regina Stella B&B Lascari** — Campofelice di Roccella
   - slug: `regina-stella-b-b-lascari-campofelice-di-roccella`
   - indirizzo: Via Libertà, 10, 90010 Lascari PA
22. **Residence Privato Imperia Resort** — Campofelice di Roccella
   - slug: `residence-privato-imperia-resort-campofelice-di-roccella`
   - indirizzo: Contrada Pistavecchia, 90010 Campofelice di Roccella PA
23. **Agriturismo mare in Campagna** — Campofilone
   - slug: `agriturismo-mare-in-campagna-campofilone`
   - indirizzo: Contrada Marina, 54, 63861 Campofilone FM
24. **Agriturismo Vecchia Monta** — Campofilone
   - slug: `agriturismo-vecchia-monta-campofilone`
   - indirizzo: Contrada Montecamauro, 36, 63861 Campofilone FM
25. **B&B Da Fiorò** — Campofilone
   - slug: `b-b-da-fioro-campofilone`
   - indirizzo: Contrada Piana Santi, 86, 63061 Massignano AP
26. **B&B DA ZARE'** — Campofilone
   - slug: `b-b-da-zare-campofilone`
   - indirizzo: Contrada Marina, 54, 63861 Campofilone FM
27. **B&B Dal Capo** — Campofilone
   - slug: `b-b-dal-capo-campofilone`
   - indirizzo: Contrada Marina, 3, 63861 Campofilone FM
28. **B&B Land & Sea** — Campofilone
   - slug: `b-b-land-sea-campofilone`
   - indirizzo: Contrada Marina, 14, 63861 Campofilone FM
29. **B&B Villa Eugenia** — Campofilone
   - slug: `b-b-villa-eugenia-campofilone`
   - indirizzo: Contrada Marina, 51, 63861 Campofilone FM
30. **BnB La Casina dei Nonni** — Campofilone
   - slug: `bnb-la-casina-dei-nonni-campofilone`
   - indirizzo: Via Trento, 17, 63861 Campofilone FM
31. **Camping Village Fontana Marina** — Campofilone
   - slug: `camping-village-fontana-marina-campofilone`
   - indirizzo: Località Tre Camini, SS16, 63861 Campofilone FM
32. **Cumana Blu Residence** — Campofilone
   - slug: `cumana-blu-residence-campofilone`
   - indirizzo: Contrada Marina, 27, 63861 Campofilone FM
33. **GaeLeon B&B Campofilone** — Campofilone
   - slug: `gaeleon-b-b-campofilone-campofilone`
   - indirizzo: Unnamed Road, 63828 Campofilone FM Unnamed Road, 63828, 63861 Campofilone FM
34. **Hotel Cormorano** — Campofilone
   - slug: `hotel-cormorano-campofilone`
   - indirizzo: Via Giacomo Matteotti, 26, 63827 Pedaso FM
35. **Il Girasole** — Campofilone
   - slug: `il-girasole-campofilone`
   - indirizzo: Contrada S. Pietro, 38, 63061 Massignano AP