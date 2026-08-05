# Blocco 259/500 — 35 strutture senza descrizione IT

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

1. **Hotel Nikolai Residence** — Berlin
   - slug: `hotel-nikolai-residence-berlin`
   - indirizzo: Am Nußbaum 5, 10178 Berlin
2. **Maritim proArte Hotel Berlin** — Berlin
   - slug: `maritim-proarte-hotel-berlin-berlin`
   - indirizzo: Friedrichstraße 151 Dorotheenstraße 65 (Navigationsadresse, 10117 Berlin
3. **Meliá Berlin** — Berlin
   - slug: `melia-berlin-berlin`
   - indirizzo: Friedrichstraße 103, 10117 Berlin
4. **Monbijou Hotel** — Berlin
   - slug: `monbijou-hotel-berlin`
   - indirizzo: Monbijou Hotel, Monbijoupl. 1, 10178 Berlin
5. **Steigenberger Hotel am Kanzleramt** — Berlin
   - slug: `steigenberger-hotel-am-kanzleramt-berlin`
   - indirizzo: Ella-Trebe-Straße 5, 10557 Berlin
6. **Albergo Locanda Primavera** — Berlingo
   - slug: `albergo-locanda-primavera-berlingo`
   - indirizzo: Via Brescia, 18, 25050 Rodengo Saiano BS
7. **B&B Franciacorta Rodengo Saiano** — Berlingo
   - slug: `b-b-franciacorta-rodengo-saiano-berlingo`
   - indirizzo: Via Privata Stretta, 5, 25050 Rodengo Saiano BS
8. **B&B il melograno** — Berlingo
   - slug: `b-b-il-melograno-berlingo`
   - indirizzo: Via Guglielmo Marconi, 8C, 25030 Berlingo BS
9. **B&B Morgana** — Berlingo
   - slug: `b-b-morgana-berlingo`
   - indirizzo: 17/A, Via Campagna, 25030 Castrezzato BS
10. **Bed & breakfast COVIDAFRANCIACORTA** — Berlingo
   - slug: `bed-breakfast-covidafranciacorta-berlingo`
   - indirizzo: Via Galileo Galilei, 8, 25030 Castrezzato BS
11. **Casa 774 B&B Franciacorta** — Berlingo
   - slug: `casa-774-b-b-franciacorta-berlingo`
   - indirizzo: Via Luigi Pirandello, 34, 25050 Passirano BS
12. **Foresteria La Corte** — Berlingo
   - slug: `foresteria-la-corte-berlingo`
   - indirizzo: Via X Giornate, 22, 25030 Castrezzato BS
13. **Hotel Franciacorta 3 STELLE** — Berlingo
   - slug: `hotel-franciacorta-3-stelle-berlingo`
   - indirizzo: Via Donatori di Sangue, 10/D, 25050 Paderno Franciacorta BS
14. **il Glicine B&B e RISTORANTE** — Berlingo
   - slug: `il-glicine-b-b-e-ristorante-berlingo`
   - indirizzo: Via Calchera, 32, 25046 Cazzago San Martino BS
15. **Villa Fenaroli Palace Hotel** — Berlingo
   - slug: `villa-fenaroli-palace-hotel-berlingo`
   - indirizzo: Via Giuseppe Mazzini, 14, 25086 Rezzato BS
16. **Villa Franca in Franciacorta** — Berlingo
   - slug: `villa-franca-in-franciacorta-berlingo`
   - indirizzo: Via IV Novembre, 5A, 25050 Passirano BS
17. **Agriturismo Casa Ricotta** — Bernalda
   - slug: `agriturismo-casa-ricotta-bernalda`
   - indirizzo: Strada Casa Ricotta, 1, 75012 Bernalda MT
18. **Agriturismo La Volpe e la Stella** — Bernalda
   - slug: `agriturismo-la-volpe-e-la-stella-bernalda`
   - indirizzo: C.da Sant'Agata, 75024 Montescaglioso MT
19. **Albergo diffuso Il Borgo Ritrovato** — Bernalda
   - slug: `albergo-diffuso-il-borgo-ritrovato-bernalda`
   - indirizzo: Via N. Andrisani, 25, 75024 Montescaglioso MT
20. **B&B Casa Venezia** — Bernalda
   - slug: `b-b-casa-venezia-bernalda`
   - indirizzo: Via Trieste, 10, 75012 Bernalda MT
21. **B&B IL Sogno** — Bernalda
   - slug: `b-b-il-sogno-bernalda`
   - indirizzo: Via Fiume, 37, 75024 Montescaglioso MT
22. **B&B Ristorante Pizzeria L'Oasi Metaponto (Matera)** — Bernalda
   - slug: `b-b-ristorante-pizzeria-l-oasi-metaponto-matera-bernalda`
   - indirizzo: Via del Lido, 47, 75012 Lido di Metaponto MT
23. **B&B Soprattutto** — Bernalda
   - slug: `b-b-soprattutto-bernalda`
   - indirizzo: P.za Cirillo, 12, 75023 Montalbano Jonico MT
24. **B&B VILLA DEGLI ANGELI** — Bernalda
   - slug: `b-b-villa-degli-angeli-bernalda`
   - indirizzo: Via Madonna degli Angeli, 75012 Bernalda MT
25. **Blue Iris Home** — Bernalda
   - slug: `blue-iris-home-bernalda`
   - indirizzo: Viale delle Sirene, 55, 75012 Lido di Metaponto MT
26. **Borgo San Gaetano** — Bernalda
   - slug: `borgo-san-gaetano-bernalda`
   - indirizzo: Corso Metaponto, 25, 75012 Bernalda MT
27. **Domus Dams B&B** — Bernalda
   - slug: `domus-dams-b-b-bernalda`
   - indirizzo: Via Giambattista Gattini, 1, 75024 Montescaglioso MT
28. **Foresteria dell'Abbazia** — Bernalda
   - slug: `foresteria-dell-abbazia-bernalda`
   - indirizzo: Piazza Cavalieri di Vittorio Veneto, 75024 Montescaglioso MT
29. **Hotel Forliano - Sala Ricevimenti Minerva** — Bernalda
   - slug: `hotel-forliano-sala-ricevimenti-minerva-bernalda`
   - indirizzo: Strada Statale Basentana, Km. 90, 100, 75012 Bernalda MT
30. **Hotel Giardino Giamperduto** — Bernalda
   - slug: `hotel-giardino-giamperduto-bernalda`
   - indirizzo: Via Giamperduto, 37, 75012 Bernalda MT
31. **Hotel Palatinum** — Bernalda
   - slug: `hotel-palatinum-bernalda`
   - indirizzo: S.da Statale 106 Jonica, 75012 Metaponto MT
32. **Hotel Sacco** — Bernalda
   - slug: `hotel-sacco-bernalda`
   - indirizzo: Via del Lido, 7, 75012 Metaponto MT
33. **House Pitagorici Bernalda** — Bernalda
   - slug: `house-pitagorici-bernalda-bernalda`
   - indirizzo: Via Giuseppe Verdi, 36, 75012 Bernalda MT
34. **Masseria Scannaturco** — Bernalda
   - slug: `masseria-scannaturco-bernalda`
   - indirizzo: V. Demetra, 75020 Marina di Pisticci MT
35. **Pensione Afrodite** — Bernalda
   - slug: `pensione-afrodite-bernalda`
   - indirizzo: Viale Europa, 48, 75012 Metaponto MT