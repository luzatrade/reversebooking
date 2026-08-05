# Blocco 319/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Terra di Zosagna** — Breda di Piave
   - slug: `agriturismo-terra-di-zosagna-breda-di-piave`
   - indirizzo: Via A. dal Vesco, 2, 31030 Breda di Piave TV
2. **B&B HOTEL Treviso** — Breda di Piave
   - slug: `b-b-hotel-treviso-breda-di-piave`
   - indirizzo: Via Gabriele D'Annunzio, 35, 31100 Treviso TV
3. **B&B HOTEL Treviso Al Fogher** — Breda di Piave
   - slug: `b-b-hotel-treviso-al-fogher-breda-di-piave`
   - indirizzo: Viale della Repubblica, 10, 31100 Treviso TV
4. **B&B Madam** — Breda di Piave
   - slug: `b-b-madam-breda-di-piave`
   - indirizzo: Via Risorgimento, 12, 31100 Treviso TV
5. **Big Brother B&B** — Breda di Piave
   - slug: `big-brother-b-b-breda-di-piave`
   - indirizzo: Viale Brigata Treviso, 24, 31100 Treviso TV
6. **Holiday La Marca** — Breda di Piave
   - slug: `holiday-la-marca-breda-di-piave`
   - indirizzo: V. Roma, 104, 31020 Lancenigo TV
7. **Hotel Agli Olmi** — Breda di Piave
   - slug: `hotel-agli-olmi-breda-di-piave`
   - indirizzo: Via Postumia Ovest, 130, 31048 Olmi TV
8. **Hotel al Giardino** — Breda di Piave
   - slug: `hotel-al-giardino-breda-di-piave`
   - indirizzo: Via Sant'Antonino, 300a, 31100 Treviso TV
9. **Hotel Colombo** — Breda di Piave
   - slug: `hotel-colombo-breda-di-piave`
   - indirizzo: Piazza Cristoforo Colombo, 1, 31030 Saletto-San Bartolomeo TV
10. **Hotel Dotto** — Breda di Piave
   - slug: `hotel-dotto-breda-di-piave`
   - indirizzo: Piazza Croce, 9 31052 Varago di, 31052 Varago TV
11. **Hotel Spresiano** — Breda di Piave
   - slug: `hotel-spresiano-breda-di-piave`
   - indirizzo: Via Giambattista Tiepolo, 10, 31027 Spresiano TV
12. **Hotel Tre Santi** — Breda di Piave
   - slug: `hotel-tre-santi-breda-di-piave`
   - indirizzo: Via Postumia, 25, 31100 Treviso TV
13. **La Casa di Campagna** — Breda di Piave
   - slug: `la-casa-di-campagna-breda-di-piave`
   - indirizzo: Via Isonzo, 31, 31027 Spresiano TV
14. **La casa di M:D M** — Breda di Piave
   - slug: `la-casa-di-m-d-m-breda-di-piave`
   - indirizzo: Via Brigata Emilia, 10a, 31030 Pero TV
15. **Locaziona Turistica Il Nido - Villetta a Treviso** — Breda di Piave
   - slug: `locaziona-turistica-il-nido-villetta-a-treviso-breda-di-piave`
   - indirizzo: Via Giuseppe e Luigi Olivi, 17, 31100 Treviso TV
16. **Thai Si Hotel & Royal Thai Spa** — Breda di Piave
   - slug: `thai-si-hotel-royal-thai-spa-breda-di-piave`
   - indirizzo: Via G. Vecellio, 56/A, 31027 Lovadina TV
17. **Travellers Lodge B&B** — Breda di Piave
   - slug: `travellers-lodge-b-b-breda-di-piave`
   - indirizzo: Viale Brigata Treviso, 32, 31100 Treviso TV
18. **UNA Hotels Le Terrazze Treviso · Hotel & Residence** — Breda di Piave
   - slug: `una-hotels-le-terrazze-treviso-hotel-residence-breda-di-piave`
   - indirizzo: V. Roma, 72/A-B, 31020 Villorba TV
19. **Villa Vitturi** — Breda di Piave
   - slug: `villa-vitturi-breda-di-piave`
   - indirizzo: Via Saltore, 1, 31052 Saltore TV
20. **Agriturismo Dai Gobbi** — Breganze
   - slug: `agriturismo-dai-gobbi-breganze`
   - indirizzo: Via Gobbi, 18, 36030 Fara Vicentino VI
21. **Albergo Ristorante Made With Love** — Breganze
   - slug: `albergo-ristorante-made-with-love-breganze`
   - indirizzo: Via Roma, 119, 36042 Breganze VI
22. **Antico Borgo Brunelli** — Breganze
   - slug: `antico-borgo-brunelli-breganze`
   - indirizzo: Contrà, Contrada Brunelli, 40, 36046 Lusiana Conco VI
23. **B&B Al Cantico** — Breganze
   - slug: `b-b-al-cantico-breganze`
   - indirizzo: Via Costa, 4 - loc, 36064 Colceresa VI
24. **B&B alloggi affittacamere ISBA** — Breganze
   - slug: `b-b-alloggi-affittacamere-isba-breganze`
   - indirizzo: Via Crosara, 66, 36042 Breganze VI
25. **B&B Cà Breganze** — Breganze
   - slug: `b-b-ca-breganze-breganze`
   - indirizzo: Via San Felice, 84, 36042 Breganze VI
26. **B&B La Ferrata** — Breganze
   - slug: `b-b-la-ferrata-breganze`
   - indirizzo: Via San Gaetano, 6, 36042 Breganze VI
27. **BANATIUM, Bar, Cucina, B&B** — Breganze
   - slug: `banatium-bar-cucina-b-b-breganze`
   - indirizzo: Viale Brenta, 2, 36056 Tezze sul Brenta VI
28. **bed and breakfast da Michela** — Breganze
   - slug: `bed-and-breakfast-da-michela-breganze`
   - indirizzo: Via Santa Eurosia, 57, 36042 Breganze VI
29. **Borghetto San Biagio** — Breganze
   - slug: `borghetto-san-biagio-breganze`
   - indirizzo: Via S. Biagio, 7, 36030 Grumolo Pedemonte VI
30. **Casa di Campagna Castello** — Breganze
   - slug: `casa-di-campagna-castello-breganze`
   - indirizzo: Via Belmonte, 13, 36030 Sarcedo VI
31. **Casa Lidia** — Breganze
   - slug: `casa-lidia-breganze`
   - indirizzo: Via San Gaetano, 50, 36042 Breganze VI
32. **Fattoria Sociale La Costa** — Breganze
   - slug: `fattoria-sociale-la-costa-breganze`
   - indirizzo: Via S. Giuseppe, 25, 36030 Sarcedo VI
33. **K-Farm Resort** — Breganze
   - slug: `k-farm-resort-breganze`
   - indirizzo: Via Marchiori, 16, 36034 Fondo Muri VI
34. **Locanda la Corte dei Galli** — Breganze
   - slug: `locanda-la-corte-dei-galli-breganze`
   - indirizzo: Località Pra' Secco, 1, 36010 Carrè VI
35. **Ristorante Hotel Pedrocchi** — Breganze
   - slug: `ristorante-hotel-pedrocchi-breganze`
   - indirizzo: Via Perlena, 63, 36030 San Giorgio di Perlena VI