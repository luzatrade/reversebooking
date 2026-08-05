# Blocco 100/500 — 35 strutture senza descrizione IT

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

1. **Albergo - Ristorante Gori** — Ameglia
   - slug: `albergo-ristorante-gori-ameglia`
   - indirizzo: Via XXV Aprile, 32, 19031 Ameglia SP
2. **Altera House** — Ameglia
   - slug: `altera-house-ameglia`
   - indirizzo: Via Circonvallazione, 3, 19031 Ameglia SP
3. **Alveari e Nidi Affittacamere** — Ameglia
   - slug: `alveari-e-nidi-affittacamere-ameglia`
   - indirizzo: Via Pisanello, 142, 19031 Ameglia SP
4. **B&B Casa Nadia** — Ameglia
   - slug: `b-b-casa-nadia-ameglia`
   - indirizzo: Via Poggio Scafa, 8, 19031 Fiumaretta di Ameglia SP
5. **B&B Villa Ai due Pini** — Ameglia
   - slug: `b-b-villa-ai-due-pini-ameglia`
   - indirizzo: Via Pisanello, 159, 19031 Ameglia SP
6. **Firmafede Guest House - Affittacamere** — Ameglia
   - slug: `firmafede-guest-house-affittacamere-ameglia`
   - indirizzo: Via Aurelia, 135/B, 19038 Sarzana SP
7. **Hotel al Sant'Andrea | BZAR hotels** — Ameglia
   - slug: `hotel-al-sant-andrea-bzar-hotels-ameglia`
   - indirizzo: Via Variante Aurelia, 34, 19038 Sarzana SP
8. **Hotel Sette Archi** — Ameglia
   - slug: `hotel-sette-archi-ameglia`
   - indirizzo: Via C. A. Fabbricotti, 242, 19031 Bocca di Magra SP
9. **Il Casale del Magra** — Ameglia
   - slug: `il-casale-del-magra-ameglia`
   - indirizzo: Via Don Minzoni, 12, 19031 Ameglia SP
10. **Le Camere di Giò** — Ameglia
   - slug: `le-camere-di-gio-ameglia`
   - indirizzo: Via XXV Aprile, 30A, 19031 Ameglia SP
11. **Le Pinette B&B** — Ameglia
   - slug: `le-pinette-b-b-ameglia`
   - indirizzo: Via Pisanello, 205, 19031 Ameglia SP
12. **Le Sirene** — Ameglia
   - slug: `le-sirene-ameglia`
   - indirizzo: Località Fiascherino, 47, 19032 Lerici SP
13. **Plumbago Blue** — Ameglia
   - slug: `plumbago-blue-ameglia`
   - indirizzo: Via Pisanello, 134, 19031 Ameglia SP
14. **Résidence Italia - Luni Mare** — Ameglia
   - slug: `residence-italia-luni-mare-ameglia`
   - indirizzo: Via Antonio Gramsci, 3, 19034 Luni Mare SP
15. **Un Angelo Alla Mia Tavola** — Ameglia
   - slug: `un-angelo-alla-mia-tavola-ameglia`
   - indirizzo: Via Canaletto, 45, 19038 Sarzana SP
16. **"La Villa"** — Amelia
   - slug: `la-villa-amelia`
   - indirizzo: Via Roma - Strada Statale 205, 36, 05022 Amelia TR
17. **AFFITTACAMERE B&B NONNA ANITA** — Amelia
   - slug: `affittacamere-b-b-nonna-anita-amelia`
   - indirizzo: Via Tuderte, 467, 05035 Narni TR
18. **Agriturismo Marinella** — Amelia
   - slug: `agriturismo-marinella-amelia`
   - indirizzo: Strada di Scendone, 6, 05022 Amelia TR
19. **Albergo e Appartamenti Le Stanze del Giglio** — Amelia
   - slug: `albergo-e-appartamenti-le-stanze-del-giglio-amelia`
   - indirizzo: Via del Campanile, 2, 05035 Narni TR
20. **B&B44** — Amelia
   - slug: `b-b44-amelia`
   - indirizzo: Piazza Augusto Vera, 2, 05022 Amelia TR
21. **Casa Del Sole** — Amelia
   - slug: `casa-del-sole-amelia`
   - indirizzo: Via Tiberina, 72, 05035 Narni TR
22. **Casale Malva** — Amelia
   - slug: `casale-malva-amelia`
   - indirizzo: Strada dei Termini, 7, 05035 Narni TR
23. **Casale Viridi** — Amelia
   - slug: `casale-viridi-amelia`
   - indirizzo: Via Tiberina, 05035 Narni Scalo TR
24. **Dimora della Jana** — Amelia
   - slug: `dimora-della-jana-amelia`
   - indirizzo: 05024 Giove TR
25. **Hotel Fina** — Amelia
   - slug: `hotel-fina-amelia`
   - indirizzo: Via Tuderte, 419, 05035 Narni TR
26. **Hotel Narnia** — Amelia
   - slug: `hotel-narnia-amelia`
   - indirizzo: Viale della Stazione, 12, 05035 Narni Scalo TR
27. **Hotel Umbria** — Amelia
   - slug: `hotel-umbria-amelia`
   - indirizzo: Località Pantaniccio, 14, 05012 Attigliano TR
28. **L' Albero degli Struzzi** — Amelia
   - slug: `l-albero-degli-struzzi-amelia`
   - indirizzo: Via Ortana, 58, 05028 Penna in Teverina TR
29. **La Corte Di Alice** — Amelia
   - slug: `la-corte-di-alice-amelia`
   - indirizzo: Vicolo dell'Aquila, 4, 05020 Lugnano In Teverina TR
30. **Locanda Fosca Umbra** — Amelia
   - slug: `locanda-fosca-umbra-amelia`
   - indirizzo: Via Tiberina, 164, 05035 Taizzano TR
31. **Marco & Andrea - Agriturismo Collepina** — Amelia
   - slug: `marco-andrea-agriturismo-collepina-amelia`
   - indirizzo: Località Collepina, 05022 Amelia TR
32. **Villa Magnolia** — Amelia
   - slug: `villa-magnolia-amelia`
   - indirizzo: Via S. Giuseppe, 22, 01030 Bassano in Teverina VT
33. **Agriturismo Masseria Farina** — Amendolara
   - slug: `agriturismo-masseria-farina-amendolara`
   - indirizzo: c.da Falabella, 87070 Amendolara CS
34. **Alba de Mar B&B** — Amendolara
   - slug: `alba-de-mar-b-b-amendolara`
   - indirizzo: Contrada Civita, 87070 Villaggio Baia del Castello CS
35. **B&B Apollonia Roseto Capo Spulico** — Amendolara
   - slug: `b-b-apollonia-roseto-capo-spulico-amendolara`
   - indirizzo: Via Piano Marina, 49, 87070 Borgata Marina CS