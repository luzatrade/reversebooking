# Blocco 285/500 — 35 strutture senza descrizione IT

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

1. **Meriggio Agriturismo** — Bolognola
   - slug: `meriggio-agriturismo-bolognola`
   - indirizzo: Frazione Meriggio, 11/bis, 62035 Fiastra MC
2. **Palazzo Rossi | Historic Boutique Home in Marche** — Bolognola
   - slug: `palazzo-rossi-historic-boutique-home-in-marche-bolognola`
   - indirizzo: Piazza della Libertà, 77, 62028 Sarnano MC
3. **Rifugio del Fargno** — Bolognola
   - slug: `rifugio-del-fargno-bolognola`
   - indirizzo: Forcella del Fargno, 62039 Ussita MC
4. **Sasso Bianco** — Bolognola
   - slug: `sasso-bianco-bolognola`
   - indirizzo: Via Madonna Sasso Bianco, 5, 62033 San Lorenzo Al Lago MC
5. **Agriturismo Sa Pigalva** — Bolotana
   - slug: `agriturismo-sa-pigalva-bolotana`
   - indirizzo: Loc. Sa Pigalva, 07010 Tula SS
6. **Agriturismo Santa Sarbana** — Bolotana
   - slug: `agriturismo-santa-sarbana-bolotana`
   - indirizzo: Loc. Benaoes, 08017 Silanus NU
7. **Agriturismo Su Francadu** — Bolotana
   - slug: `agriturismo-su-francadu-bolotana`
   - indirizzo: SP19, 09073 Cuglieri OR
8. **B&b da Zia Carmela** — Bolotana
   - slug: `b-b-da-zia-carmela-bolotana`
   - indirizzo: Vico Martini, 17, 08011 Bolotana NU
9. **B&b sa sartoria** — Bolotana
   - slug: `b-b-sa-sartoria-bolotana`
   - indirizzo: Piazza Corte Bella, 1, 08011 Bolotana NU
10. **Il melograno** — Bolotana
   - slug: `il-melograno-bolotana`
   - indirizzo: Via G. Marconi, 202, 08011 Bolotana NU
11. **Ristorante S'Iscopalzu** — Bolotana
   - slug: `ristorante-s-iscopalzu-bolotana`
   - indirizzo: Loc. S'Icopalzu, 08020 Osidda NU
12. **Agriturismo Le Vigne lago di Bolsena** — Bolsena
   - slug: `agriturismo-le-vigne-lago-di-bolsena-bolsena`
   - indirizzo: Località le Vigne, 157/B, 01023 Bolsena VT
13. **B&b ANNA** — Bolsena
   - slug: `b-b-anna-bolsena`
   - indirizzo: Via Giuseppe Savastano, 40, 01023 Bolsena VT
14. **Casale 1541** — Bolsena
   - slug: `casale-1541-bolsena`
   - indirizzo: Via Acqua della Croce, 25, 01023 Bolsena VT
15. **Hotel Columbus sul Lago 4 stelle** — Bolsena
   - slug: `hotel-columbus-sul-lago-4-stelle-bolsena`
   - indirizzo: LUNGOLAGO, Viale Nicola Colesanti, 27, 01023 Bolsena VT
16. **Hotel Eden** — Bolsena
   - slug: `hotel-eden-bolsena`
   - indirizzo: Via Cassia Nord, km 114/200, 01023 Bolsena VT
17. **Hotel Holiday** — Bolsena
   - slug: `hotel-holiday-bolsena`
   - indirizzo: Viale Armando Diaz, 38, 01023 Bolsena VT
18. **Hotel Lido Beach & Palace** — Bolsena
   - slug: `hotel-lido-beach-palace-bolsena`
   - indirizzo: km 114, 800, Via Cassia Nord, 01023 Bolsena VT
19. **Hotel Nazionale** — Bolsena
   - slug: `hotel-nazionale-bolsena`
   - indirizzo: Via Antonio Gramsci, 50, 01023 Bolsena VT
20. **Hotel Royal** — Bolsena
   - slug: `hotel-royal-bolsena`
   - indirizzo: Piazzale Dante Alighieri, 8/10, 01023 Bolsena VT
21. **Hotel Zodiaco - Bolsena** — Bolsena
   - slug: `hotel-zodiaco-bolsena-bolsena`
   - indirizzo: Via IV Novembre, 8, 01023 Bolsena VT
22. **Il Palazzetto** — Bolsena
   - slug: `il-palazzetto-bolsena`
   - indirizzo: Corso della Repubblica, 16, 01023 Bolsena VT
23. **Il VesConte** — Bolsena
   - slug: `il-vesconte-bolsena`
   - indirizzo: Piazza S. Rocco, 12, 01023 Bolsena VT
24. **Le Naiadi Park Hotel** — Bolsena
   - slug: `le-naiadi-park-hotel-bolsena`
   - indirizzo: Viale Luigi Cadorna, 95, 01023 Bolsena VT
25. **Loriana Park Hotel sul Lago** — Bolsena
   - slug: `loriana-park-hotel-sul-lago-bolsena`
   - indirizzo: Viale Luigi Cadorna, 33, 01023 Bolsena VT
26. **Ludwig Boutique Hotel & Spa** — Bolsena
   - slug: `ludwig-boutique-hotel-spa-bolsena`
   - indirizzo: Viale Luigi Cadorna, 15/B, 01023 Bolsena VT
27. **PALAZZO BOTTINO a Bolsena** — Bolsena
   - slug: `palazzo-bottino-a-bolsena-bolsena`
   - indirizzo: Via del Bottino, 28, 01023 Bolsena VT
28. **Platani Hotel & SPA** — Bolsena
   - slug: `platani-hotel-spa-bolsena`
   - indirizzo: Via Roma, 2, 01023 Bolsena VT
29. **Villa Gualterio** — Bolsena
   - slug: `villa-gualterio-bolsena`
   - indirizzo: Viale Nicola Colesanti, 38, 01023 Bolsena VT
30. **Albergo Piccadilly** — Boltiere
   - slug: `albergo-piccadilly-boltiere`
   - indirizzo: Piazza Affari, 44, 24040 Verdellino BG
31. **Dalmine Luxury Suite** — Boltiere
   - slug: `dalmine-luxury-suite-boltiere`
   - indirizzo: Via Dante Alighieri, 40/C, 24044 Dalmine BG
32. **Villa Fenix Osio Sotto 2** — Boltiere
   - slug: `villa-fenix-osio-sotto-2-boltiere`
   - indirizzo: Via Michelangelo Buonarroti, 8, 24046 Rio Isolo BG
33. **1928 Guest House** — Bolzano Novarese
   - slug: `1928-guest-house-bolzano-novarese`
   - indirizzo: Via Cremosina, 15, 28076 Pogno NO
34. **B&B CasaFrancisca Wellness Beach** — Bolzano Novarese
   - slug: `b-b-casafrancisca-wellness-beach-bolzano-novarese`
   - indirizzo: Via Leopoldo Marangoni, 16, 28024 Gozzano NO
35. **B&B La corte di Alzo** — Bolzano Novarese
   - slug: `b-b-la-corte-di-alzo-bolzano-novarese`
   - indirizzo: Via Pietro Durio, 60, 28010 Alzo NO