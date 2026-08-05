# Blocco 315/500 — 35 strutture senza descrizione IT

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

1. **Hotel Edelweiss Mantova** — Bovolone
   - slug: `hotel-edelweiss-mantova-bovolone`
   - indirizzo: Via Roma, 109, 46033 Castel d'Ario MN
2. **Hotel Gelmini** — Bovolone
   - slug: `hotel-gelmini-bovolone`
   - indirizzo: Via Belfiore, 54, 37135 Verona VR
3. **HOTEL RISTORANTE SASSO** — Bovolone
   - slug: `hotel-ristorante-sasso-bovolone`
   - indirizzo: Via S. Pierino, 318, 37051 Bovolone VR
4. **Hotel-Residence Il Chiostro** — Bovolone
   - slug: `hotel-residence-il-chiostro-bovolone`
   - indirizzo: Via Roma, 85, 37050 Oppeano VR
5. **Muraless Art Hotel Verona - World Hotels Crafted** — Bovolone
   - slug: `muraless-art-hotel-verona-world-hotels-crafted-bovolone`
   - indirizzo: Via Scuderlando, 122, 37060 Castel d'Azzano VR
6. **Tenuta Molino dei Sassi | Ristorante - Matrimoni - Eventi - Hotel** — Bovolone
   - slug: `tenuta-molino-dei-sassi-ristorante-matrimoni-eve-bovolone`
   - indirizzo: Via Ronchesana, 2, 37059 Zevio VR
7. **B&B Casa Mortarino in 15040 Bozzole (Alessandria)** — Bozzole
   - slug: `b-b-casa-mortarino-in-15040-bozzole-alessandria-bozzole`
   - indirizzo: Via Vittorio Emanuele, 8, 15040 Bozzole AL
8. **B&B La Corte delle Rose** — Bozzole
   - slug: `b-b-la-corte-delle-rose-bozzole`
   - indirizzo: Viale Marchesi della Valle, 17, 15040 Bozzole AL
9. **Hotel Bozzole** — Bozzole
   - slug: `hotel-bozzole-bozzole`
   - indirizzo: Vicolo Bonacossa, 1/11, 15040 Bozzole AL
10. **Agriturismo Corte Palazzo** — Bozzolo
   - slug: `agriturismo-corte-palazzo-bozzolo`
   - indirizzo: Str. Mosio, 14, 46010 Marcaria MN
11. **Albergo Ristorante Al Duca Sabbioneta** — Bozzolo
   - slug: `albergo-ristorante-al-duca-sabbioneta-bozzolo`
   - indirizzo: Via della Stamperia, 18, 46018 Sabbioneta MN
12. **B&B Il Glicine** — Bozzolo
   - slug: `b-b-il-glicine-bozzolo`
   - indirizzo: Via Isole, 7 bis/A, 46010 San Martino Dall'argine MN
13. **BeB da Nina** — Bozzolo
   - slug: `beb-da-nina-bozzolo`
   - indirizzo: Via Pesenti, 40, 46018 Sabbioneta MN
14. **Bed and breakfast-Borgo dei Duchi** — Bozzolo
   - slug: `bed-and-breakfast-borgo-dei-duchi-bozzolo`
   - indirizzo: Via Guglielmo Marconi, 88, 46017 Rivarolo Mantovano MN
15. **CONFIDENCE HOTEL VIADANA (Ex Motel Giglio)** — Bozzolo
   - slug: `confidence-hotel-viadana-ex-motel-giglio-bozzolo`
   - indirizzo: Via Gerbolina, 1/H, 46019 Viadana MN
16. **Hotel Il Duca Barbablù** — Bozzolo
   - slug: `hotel-il-duca-barbablu-bozzolo`
   - indirizzo: Via della Stamperia, 18, 46018 Sabbioneta MN
17. **Turismo Rurale "La Garzaga"** — Bozzolo
   - slug: `turismo-rurale-la-garzaga-bozzolo`
   - indirizzo: Via Garzaga, 8, 46040 Ceresara MN
18. **Villa Dei Tigli** — Bozzolo
   - slug: `villa-dei-tigli-bozzolo`
   - indirizzo: Via Cantarana, 20, 46040 Rodigo MN
19. **Albergo Cantine Ascheri** — Bra
   - slug: `albergo-cantine-ascheri-bra`
   - indirizzo: Via G. Piumati, 25, 12042 Bra CN
20. **B&B Asfodelo Rooms e Camere** — Bra
   - slug: `b-b-asfodelo-rooms-e-camere-bra`
   - indirizzo: Via Vittorio Emanuele II, 23, 12042 Bra CN
21. **B&B HOTEL Cherasco Langhe** — Bra
   - slug: `b-b-hotel-cherasco-langhe-bra`
   - indirizzo: Via Savigliano, 116, 12062 Cherasco CN
22. **Bed&Bra** — Bra
   - slug: `bed-bra-bra`
   - indirizzo: Via Tagliamento, 13, 12042 Bra CN
23. **Bra Inn** — Bra
   - slug: `bra-inn-bra`
   - indirizzo: Via Provvidenza, 8, 12042 Bra CN
24. **Guest house LangAmore** — Bra
   - slug: `guest-house-langamore-bra`
   - indirizzo: Via Regina Margherita, 6, 12042 Pollenzo CN
25. **Hotel Terre dei Salici** — Bra
   - slug: `hotel-terre-dei-salici-bra`
   - indirizzo: S.da Reale, 47, 12030 Caramagna Piemonte CN
26. **Hotel The Marin's** — Bra
   - slug: `hotel-the-marin-s-bra`
   - indirizzo: Via Cuneo, 125/A, 12042 Bra CN
27. **Il Cortile** — Bra
   - slug: `il-cortile-bra`
   - indirizzo: Via G. B. Gandino, 1B, 12042 Bra CN
28. **L'Ombra della Collina Bra** — Bra
   - slug: `l-ombra-della-collina-bra-bra`
   - indirizzo: Via Mendicità Istruita, 47, 12042 Bra CN
29. **La Buschera** — Bra
   - slug: `la-buschera-bra`
   - indirizzo: Piazza Carlo Alberto, 19, 12042 Bra CN
30. **Phi Hotel Cavalieri** — Bra
   - slug: `phi-hotel-cavalieri-bra`
   - indirizzo: Piazza Giovanni Arpino, 37, 12042 Bra CN
31. **Porte ad Arco** — Bra
   - slug: `porte-ad-arco-bra`
   - indirizzo: Piazza Caduti per la Libertà, 29, 12042 Bra CN
32. **Ristorante Albergo Badellino** — Bra
   - slug: `ristorante-albergo-badellino-bra`
   - indirizzo: P.za XX Settembre, 4, 12042 Bra CN
33. **B&B La Dea** — Bracca
   - slug: `b-b-la-dea-bracca`
   - indirizzo: Via Sottoripa, 1, 24010 Bracca BG
34. **Casa Vecia** — Bracca
   - slug: `casa-vecia-bracca`
   - indirizzo: via madasco, 5, 24010 Bracca BG
35. **Hotel Avogadro** — Bracca
   - slug: `hotel-avogadro-bracca`
   - indirizzo: Via S. Carlo, 40, 24016 San Pellegrino Terme BG