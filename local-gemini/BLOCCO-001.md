# HotelsDrop — Blocco 001 (35 hotel)

## Come usare questo file

1. **Copia** tutto il testo sotto la riga `--- COPIA IN GEMINI DA QUI ---` fino a `--- FINE COPIA ---`
2. **Incolla** in Gemini (meglio con ricerca web attiva)
3. Gemini ti risponde con un JSON
4. **Incolla** quel JSON qui sotto, nella sezione `RISPOSTA GEMINI`, oppure incollalo direttamente nel chat con l’agente Cursor
5. L’agente importa le descrizioni nel database (solo testi verificati; il resto va in `not_found`)

---

--- COPIA IN GEMINI DA QUI ---

# Blocco 1/500 — 35 strutture senza descrizione IT

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

1. **Delight Rooms** — Abbiategrasso
   - slug: `delight-rooms-abbiategrasso`
   - indirizzo: Via Roma, 4, 20011 Corbetta MI
2. **La Cardinala** — Abbiategrasso
   - slug: `la-cardinala-abbiategrasso`
   - indirizzo: Via Volturno, 6, 20081 Abbiategrasso MI
3. **Mahthildis Agriturismo B&B** — Abbiategrasso
   - slug: `mahthildis-agriturismo-b-b-abbiategrasso`
   - indirizzo: Cascina Grande, 1, 20080 Vermezzo con Zelo MI
4. **Nuovo Hotel Italia** — Abbiategrasso
   - slug: `nuovo-hotel-italia-abbiategrasso`
   - indirizzo: Piazza Castello, 31, 20081 Abbiategrasso MI
5. **SanMartino67** — Abbiategrasso
   - slug: `sanmartino67-abbiategrasso`
   - indirizzo: Corso S. Martino, 67, 20081 Abbiategrasso MI
6. **Agriturismo le Dogane** — Abetone Cutigliano
   - slug: `agriturismo-le-dogane-abetone-cutigliano`
   - indirizzo: Località Lambure, 1, 51028 San Marcello Piteglio PT
7. **Albergo Ristorante Bar Sichi** — Abetone Cutigliano
   - slug: `albergo-ristorante-bar-sichi-abetone-cutigliano`
   - indirizzo: Viale Beatrice, 59, 51024 Abetone Cutigliano PT
8. **Albergo Ristorante La Villa - Abetone Cutigliano** — Abetone Cutigliano
   - slug: `albergo-ristorante-la-villa-abetone-cutigliano-abetone-cutigliano`
   - indirizzo: Via del Sestaione, 118, 51024 Abetone PT
9. **Albergo Sport** — Abetone Cutigliano
   - slug: `albergo-sport-abetone-cutigliano`
   - indirizzo: Via Brennero, 542, 51024 Abetone PT
10. **Albergo Valle Verde** — Abetone Cutigliano
   - slug: `albergo-valle-verde-abetone-cutigliano`
   - indirizzo: Via Giardini Sud, 18, 41027 Pievepelago MO
11. **B&B Chalet** — Abetone Cutigliano
   - slug: `b-b-chalet-abetone-cutigliano`
   - indirizzo: Via Brennero, 504, 51024 Abetone PT
12. **B&B Dahu** — Abetone Cutigliano
   - slug: `b-b-dahu-abetone-cutigliano`
   - indirizzo: Via Uccelliera, 47, 51024 Abetone PT
13. **Bed and Breakfast Regina** — Abetone Cutigliano
   - slug: `bed-and-breakfast-regina-abetone-cutigliano`
   - indirizzo: Via dell'Uccelliera, 9, 51024 Abetone PT
14. **Da Tosca** — Abetone Cutigliano
   - slug: `da-tosca-abetone-cutigliano`
   - indirizzo: Via Brennero, 85, 51024 Le Regine PT
15. **HG Abetone & Piramidi Resort** — Abetone Cutigliano
   - slug: `hg-abetone-piramidi-resort-abetone-cutigliano`
   - indirizzo: Via Brennero, 456, 51024 Abetone PT
16. **Hotel Bellavista** — Abetone Cutigliano
   - slug: `hotel-bellavista-abetone-cutigliano`
   - indirizzo: Via Brennero, 383, 51024 Abetone Cutigliano PT
17. **Hotel Bristol** — Abetone Cutigliano
   - slug: `hotel-bristol-abetone-cutigliano`
   - indirizzo: Via Giardini, 274, 41022 Dogana Nuova MO
18. **Hotel La Valle** — Abetone Cutigliano
   - slug: `hotel-la-valle-abetone-cutigliano`
   - indirizzo: Via Carega, 10, 51024 Cutigliano PT
19. **Hotel Ristorante Pizzeria Primula** — Abetone Cutigliano
   - slug: `hotel-ristorante-pizzeria-primula-abetone-cutigliano`
   - indirizzo: Via Brennero, 195, 51024 Abetone PT
20. **I Pionieri** — Abetone Cutigliano
   - slug: `i-pionieri-abetone-cutigliano`
   - indirizzo: Via Val di Luce, 54, 51024 Abetone PT
21. **Palazzo 42 - boutique hotel & suites - Hotel 4 Stelle Pistoia** — Abetone Cutigliano
   - slug: `palazzo-42-boutique-hotel-suites-hotel-4-stelle-abetone-cutigliano`
   - indirizzo: Via Curtatone e Montanara, 42, 51100 Pistoia PT
22. **Pensione Ristorante Noemi** — Abetone Cutigliano
   - slug: `pensione-ristorante-noemi-abetone-cutigliano`
   - indirizzo: Via Brennero, 244, 51024 Le Regine PT
23. **Residenza Riva** — Abetone Cutigliano
   - slug: `residenza-riva-abetone-cutigliano`
   - indirizzo: Via Brennero, 407, 51024 Abetone Cutigliano PT
24. **Val di Luce SPA Resort** — Abetone Cutigliano
   - slug: `val-di-luce-spa-resort-abetone-cutigliano`
   - indirizzo: Via Val di Luce, 22, 51024 Abetone PT
25. **Villa Patrizia** — Abetone Cutigliano
   - slug: `villa-patrizia-abetone-cutigliano`
   - indirizzo: Viale Europa, 9, 51021 Cutigliano PT
26. **Albergo Miramonti** — Abriola
   - slug: `albergo-miramonti-abriola`
   - indirizzo: V. Caserma Lucania, 30, 85100 Potenza PZ
27. **B&B 85centro** — Abriola
   - slug: `b-b-85centro-abriola`
   - indirizzo: Via Giuseppe Mazzini, 85, 85100 Potenza PZ
28. **Basilicata Al Volo** — Abriola
   - slug: `basilicata-al-volo-abriola`
   - indirizzo: L.go San Giacomo, 1, 85010 Brindisi Montagna PZ
29. **Bouganville Hill Resort & Wellness Space** — Abriola
   - slug: `bouganville-hill-resort-wellness-space-abriola`
   - indirizzo: S.P. 83, Snc, 85055 Picerno PZ
30. **Dimora storica Giorni resort & spa** — Abriola
   - slug: `dimora-storica-giorni-resort-spa-abriola`
   - indirizzo: Via Umberto I, 85010 Pignola PZ
31. **Hotel Giubileo** — Abriola
   - slug: `hotel-giubileo-abriola`
   - indirizzo: SS92, 85010 Località Rifreddo, Pignola PZ
32. **Hotel Imperial** — Abriola
   - slug: `hotel-imperial-abriola`
   - indirizzo: Terza Traversa Via Nazionale, 1, 85050 Brienza PZ
33. **Hotel La Piana** — Abriola
   - slug: `hotel-la-piana-abriola`
   - indirizzo: Via Gerhard Rohlfs, 7, 85050 Tito PZ
34. **Hotel Ristorante Il Volturino** — Abriola
   - slug: `hotel-ristorante-il-volturino-abriola`
   - indirizzo: Via Salvatore Milito, 3, 85010 Calvello PZ
35. **Hotel Sellata** — Abriola
   - slug: `hotel-sellata-abriola`
   - indirizzo: sp, Contrada Sellata, 5, 85010 Abriola PZ

--- FINE COPIA ---

---

## RISPOSTA GEMINI (incolla qui il JSON, oppure nel chat Cursor)

Sostituisci questo esempio con la risposta di Gemini:

```json
{
  "updates": [],
  "not_found": []
}
```
