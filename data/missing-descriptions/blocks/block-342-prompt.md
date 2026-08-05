# Blocco 342/500 — 35 strutture senza descrizione IT

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

1. **B&B Domus De Janas** — Bulzi
   - slug: `b-b-domus-de-janas-bulzi`
   - indirizzo: Via Vittorio Emanuele, 72, 07035 Sedini SS
2. **B&B La Roccia** — Bulzi
   - slug: `b-b-la-roccia-bulzi`
   - indirizzo: Strada Statale 134 di Castel Sardo, 36, 07031 Castelsardo SS
3. **B&B La terra del benessere e Centro olistico** — Bulzi
   - slug: `b-b-la-terra-del-benessere-e-centro-olistico-bulzi`
   - indirizzo: Via Alfieri, 7, 07031 Castelsardo SS
4. **B&B Pani Silvio** — Bulzi
   - slug: `b-b-pani-silvio-bulzi`
   - indirizzo: Via Giacomo Leopardi, 6, 07034 Perfugas SS
5. **Castelsardo Resort** — Bulzi
   - slug: `castelsardo-resort-bulzi`
   - indirizzo: Località Baia Ostina, 07031 Castelsardo SS
6. **Hotel & SPA Riviera Castelsardo** — Bulzi
   - slug: `hotel-spa-riviera-castelsardo-bulzi`
   - indirizzo: Anglona Seafront, Lungomare Anglona, 1/B, 07031 Castelsardo SS
7. **Hotel Tartaruga Bianca** — Bulzi
   - slug: `hotel-tartaruga-bianca-bulzi`
   - indirizzo: Via Cristoforo Colombo, 43, 07039 Valledoria SS
8. **Il Ginepro** — Bulzi
   - slug: `il-ginepro-bulzi`
   - indirizzo: Via Regina Elena, 111, 07039 Valledoria SS
9. **Il Vecchio Casale** — Bulzi
   - slug: `il-vecchio-casale-bulzi`
   - indirizzo: Regione l'Ena di Preddi Larentu, 44, 07035 Sedini SS
10. **Janus Hotel** — Bulzi
   - slug: `janus-hotel-bulzi`
   - indirizzo: Via Roma, 85, 07031 Castelsardo SS
11. **Montiruju Hotel** — Bulzi
   - slug: `montiruju-hotel-bulzi`
   - indirizzo: Viale delle Terme, 1, 07030 Santa Maria Coghinas SS
12. **Su Arghentu Country Hotel** — Bulzi
   - slug: `su-arghentu-country-hotel-bulzi`
   - indirizzo: Località Bena e Traes, 07030 Laerru SS
13. **The Square Castelsardo** — Bulzi
   - slug: `the-square-castelsardo-bulzi`
   - indirizzo: Via R. Elena, 23, 07031 Castelsardo SS
14. **Affittacamere Falabella Teresa** — Buonabitacolo
   - slug: `affittacamere-falabella-teresa-buonabitacolo`
   - indirizzo: Via Roma, 18, 84032 Buonabitacolo SA
15. **Affittacamere Girasole** — Buonabitacolo
   - slug: `affittacamere-girasole-buonabitacolo`
   - indirizzo: Via Roma, 93, 84032 Buonabitacolo SA
16. **Agriturismo - Affittacamere "Il Tufo"** — Buonabitacolo
   - slug: `agriturismo-affittacamere-il-tufo-buonabitacolo`
   - indirizzo: Via Tempa Caselle 9, 84033 Montesano sulla Marcellana SA
17. **Agriturismo Dipinto dal Sole** — Buonabitacolo
   - slug: `agriturismo-dipinto-dal-sole-buonabitacolo`
   - indirizzo: Via Vicinale Peppina, n.2, 84034 Padula SA
18. **Agriturismo Il Castagneto - Padula** — Buonabitacolo
   - slug: `agriturismo-il-castagneto-padula-buonabitacolo`
   - indirizzo: Via Pantagnone, 84034 Padula SA
19. **Agriturismo il giardino dei ciliegi** — Buonabitacolo
   - slug: `agriturismo-il-giardino-dei-ciliegi-buonabitacolo`
   - indirizzo: Località Vesolo, 84030 Sanza SA
20. **B&B Agriturismo La Dolce Mela** — Buonabitacolo
   - slug: `b-b-agriturismo-la-dolce-mela-buonabitacolo`
   - indirizzo: Via Tempa Petrini, 3, 84032 Buonabitacolo SA
21. **Be and Be** — Buonabitacolo
   - slug: `be-and-be-buonabitacolo`
   - indirizzo: Via Giuseppe Garibaldi, 35, 84030 Montesano sulla Marcellana SA
22. **Cà del Conte** — Buonabitacolo
   - slug: `ca-del-conte-buonabitacolo`
   - indirizzo: Via Noce del Conte, 84034 Padula SA
23. **Casa Vacanze Nicola e Lina** — Buonabitacolo
   - slug: `casa-vacanze-nicola-e-lina-buonabitacolo`
   - indirizzo: Piazza Umberto I, 84030 Tortorella SA
24. **Da zia Giò** — Buonabitacolo
   - slug: `da-zia-gio-buonabitacolo`
   - indirizzo: Via Fusara, 84034 Padula SA
25. **Grand Hotel Certosa** — Buonabitacolo
   - slug: `grand-hotel-certosa-buonabitacolo`
   - indirizzo: Viale Certosa, 41, 84034 Padula SA
26. **Hotel Venezuela - Albergo** — Buonabitacolo
   - slug: `hotel-venezuela-albergo-buonabitacolo`
   - indirizzo: Via Cesare Battisti, 34, 84033 Montesano Scalo SA
27. **Il Giardino di Lavanda** — Buonabitacolo
   - slug: `il-giardino-di-lavanda-buonabitacolo`
   - indirizzo: via Tempa Carrozza 17, 84033 Montesano sulla Marcellana SA
28. **Natural House** — Buonabitacolo
   - slug: `natural-house-buonabitacolo`
   - indirizzo: 84032 Buonabitacolo SA
29. **Rosalinda Borgo Experience** — Buonabitacolo
   - slug: `rosalinda-borgo-experience-buonabitacolo`
   - indirizzo: Corso Garibaldi, 2, 84030 Casaletto Spartano SA
30. **Aia di Lazzaro | Agriturismo a Casalbore in Irpinia** — Buonalbergo
   - slug: `aia-di-lazzaro-agriturismo-a-casalbore-in-irpini-buonalbergo`
   - indirizzo: Sant'Elia, 16, 83034 Casalbore AV
31. **Avalon (Rione Castello)** — Buonalbergo
   - slug: `avalon-rione-castello-buonalbergo`
   - indirizzo: santa maria degli angeli, Salita Castello, 22, 82020 Pietrelcina BN
32. **B&B Agriturismo Grandola** — Buonalbergo
   - slug: `b-b-agriturismo-grandola-buonalbergo`
   - indirizzo: C.DA. Cerreta 6, 83037 Montecalvo Irpino AV
33. **Dimora Forgione B&B** — Buonalbergo
   - slug: `dimora-forgione-b-b-buonalbergo`
   - indirizzo: Vico Storto Valle, 2-4-6-8, 82020 Pietrelcina BN
34. **La Maison Du Pont Relais | Bed and breakfast Hotel Pietrelcina** — Buonalbergo
   - slug: `la-maison-du-pont-relais-bed-and-breakfast-hotel-buonalbergo`
   - indirizzo: Via Paduli, 82020 Pietrelcina BN
35. **Petra** — Buonalbergo
   - slug: `petra-buonalbergo`
   - indirizzo: Via nazionale, 32, 82020 Pietrelcina BN