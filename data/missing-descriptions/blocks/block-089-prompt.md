# Blocco 89/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Barco Di De Faveri Lucio E Mario S.s.** — Altivole
   - slug: `agriturismo-barco-di-de-faveri-lucio-e-mario-s-s-altivole`
   - indirizzo: Via Cornere, 5, 31030 Altivole TV
2. **Agriturismo Le Vele** — Altivole
   - slug: `agriturismo-le-vele-altivole`
   - indirizzo: Via Vallà, 15, 31030 Altivole TV
3. **Al Giorgione** — Altivole
   - slug: `al-giorgione-altivole`
   - indirizzo: Via Giorgione, 7b, 31030 Caselle TV
4. **Albergo Al Moretto di Luciana Rigato & C. S.a.s.** — Altivole
   - slug: `albergo-al-moretto-di-luciana-rigato-c-s-a-s-altivole`
   - indirizzo: Via S. Pio X, 10, 31033 Castelfranco Veneto TV
5. **Albergo Grappolo d'Oro** — Altivole
   - slug: `albergo-grappolo-d-oro-altivole`
   - indirizzo: Via Feltrina Sud, 183/A, 31044 Montebelluna TV
6. **ALLOGGIO AGRITURISTICO ZAMBON** — Altivole
   - slug: `alloggio-agrituristico-zambon-altivole`
   - indirizzo: Via Minarello, 29, 31050 Loc. Fossalunga, Vedelago TV
7. **B&B Al Lauro** — Altivole
   - slug: `b-b-al-lauro-altivole`
   - indirizzo: Via Lauro, 4, 31011 Villa D'asolo TV
8. **Fara1911** — Altivole
   - slug: `fara1911-altivole`
   - indirizzo: Via Piovega, 22, 31010 Fonte Alto TV
9. **HOME HOTEL** — Altivole
   - slug: `home-hotel-altivole`
   - indirizzo: Borgo Treviso, 196, 31033 Castelfranco Veneto TV
10. **Hotel Asolo** — Altivole
   - slug: `hotel-asolo-altivole`
   - indirizzo: Via Castellana, 9, 31011 Asolo TV
11. **Hotel Corone** — Altivole
   - slug: `hotel-corone-altivole`
   - indirizzo: Via Padova, 35, 31031 Caerano di San Marco TV
12. **Hotel Ezzelino** — Altivole
   - slug: `hotel-ezzelino-altivole`
   - indirizzo: Via G. Marconi, 55, 31020 San Zenone degli Ezzelini TV
13. **Hotel Palazzon Gradenigo** — Altivole
   - slug: `hotel-palazzon-gradenigo-altivole`
   - indirizzo: Via Palazzon, 5, 31039 Riese Pio X TV
14. **Hotel Relais Villa Annamaria bed and breakfast** — Altivole
   - slug: `hotel-relais-villa-annamaria-bed-and-breakfast-altivole`
   - indirizzo: Via Cavour, 1/G, 31036 Istrana TV
15. **Hotel San Marco** — Altivole
   - slug: `hotel-san-marco-altivole`
   - indirizzo: Via Buziol, 19, 31044 Montebelluna TV
16. **IDA Boutique Hotel** — Altivole
   - slug: `ida-boutique-hotel-altivole`
   - indirizzo: Via Bassanese, 327, 31010 Crespignaga TV
17. **Logis Albergo Alla Pineta** — Altivole
   - slug: `logis-albergo-alla-pineta-altivole`
   - indirizzo: Via Brigata Campania, 42/A, 31044 Montebelluna TV
18. **NAZIONALE Camere** — Altivole
   - slug: `nazionale-camere-altivole`
   - indirizzo: Via Silvio Pellico, 1/interno 1, 31044 Montebelluna TV
19. **Terrazza San Vettore** — Altivole
   - slug: `terrazza-san-vettore-altivole`
   - indirizzo: Via S. Vettore, 25, 31010 Maser TV
20. **Villa Busta Hotel** — Altivole
   - slug: `villa-busta-hotel-altivole`
   - indirizzo: Via Busta, 39, 31044 Montebelluna TV
21. **Agriturismo Dai Marchesin** — Alto
   - slug: `agriturismo-dai-marchesin-alto`
   - indirizzo: Via Roma, 21, 17030 Nasino SV
22. **Albergo Al Sole** — Alto
   - slug: `albergo-al-sole-alto`
   - indirizzo: Borgo Salino, 4, 18028 Aquila d'Arroscia IM
23. **Albergo dell'Angelo** — Alto
   - slug: `albergo-dell-angelo-alto`
   - indirizzo: Piazza Carenzi, 11, 18026 Pieve di Teco IM
24. **Albergo Ristorante Da Gin** — Alto
   - slug: `albergo-ristorante-da-gin-alto`
   - indirizzo: Via Pennavaire, 99, 17030 Colletta SV
25. **Albergo Ristorante Payarin** — Alto
   - slug: `albergo-ristorante-payarin-alto`
   - indirizzo: Ormea, 12078 Aimoni CN
26. **Albergo Ristorante San Carlo** — Alto
   - slug: `albergo-ristorante-san-carlo-alto`
   - indirizzo: SS28, 23, 12078 Ormea CN
27. **Antico Convento** — Alto
   - slug: `antico-convento-alto`
   - indirizzo: Frazione Mindino, 4, 12075 Garessio CN
28. **B&B Ligo** — Alto
   - slug: `b-b-ligo-alto`
   - indirizzo: Frazione Ligo, 24, 17038 Villanova d'Albenga SV
29. **B&B Rossociliegia** — Alto
   - slug: `b-b-rossociliegia-alto`
   - indirizzo: Via Pennavaire, 53, 17030 Magliocca SV
30. **Hotel L'Alpino** — Alto
   - slug: `hotel-l-alpino-alto`
   - indirizzo: Via Nazionale, 114, 18020 Pornassio IM
31. **Hotel Maria nella Ristorante** — Alto
   - slug: `hotel-maria-nella-ristorante-alto`
   - indirizzo: Via Cave, 1, 17057 Bardineto SV
32. **Hotel Momora** — Alto
   - slug: `hotel-momora-alto`
   - indirizzo: Piazza vittorio veneto, 17020 Bardineto SV
33. **Hotel Ponte di Nava** — Alto
   - slug: `hotel-ponte-di-nava-alto`
   - indirizzo: SS28, 28, 12078 Ormea CN
34. **I TRE LADRONI** — Alto
   - slug: `i-tre-ladroni-alto`
   - indirizzo: Via Roma, 22, 17030 Nasino SV
35. **Kalimera** — Alto
   - slug: `kalimera-alto`
   - indirizzo: Via Tembien, 1, 17020 Bardineto SV