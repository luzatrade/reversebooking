# Blocco 287/500 — 35 strutture senza descrizione IT

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

1. **Casa Natia** — Bompensiere
   - slug: `casa-natia-bompensiere`
   - indirizzo: Piazza Giuseppe Garibaldi, 12, 92026 Favara AG
2. **Corte dei Monaci** — Bompensiere
   - slug: `corte-dei-monaci-bompensiere`
   - indirizzo: C.da Cannarozzo. Strada Prov. 78, km 1, direzione diga di Naro., Prosecuzione via Sen. Sammartino, 92024 Canicattì AG
3. **Giallo Ficodindia Bed & Breakfast** — Bompensiere
   - slug: `giallo-ficodindia-bed-breakfast-bompensiere`
   - indirizzo: C/da Montagna Scalilli, 92024 Canicattì AG
4. **Guest House Regina Margherita** — Bompensiere
   - slug: `guest-house-regina-margherita-bompensiere`
   - indirizzo: Via Regina Margherita, 39, 92026 Favara AG
5. **Hotel Belvedere** — Bompensiere
   - slug: `hotel-belvedere-bompensiere`
   - indirizzo: Via Resistenza, 22, 92024 Canicattì AG
6. **La Locanda dei Fiori Agriturismo** — Bompensiere
   - slug: `la-locanda-dei-fiori-agriturismo-bompensiere`
   - indirizzo: FQHG+FV, 93010 Bompensiere CL
7. **La Zagara** — Bompensiere
   - slug: `la-zagara-bompensiere`
   - indirizzo: Via Zanella, 2, 92026 Favara AG
8. **Bed and Breakfast "Del corso"** — Bompietro
   - slug: `bed-and-breakfast-del-corso-bompietro`
   - indirizzo: C.so Umberto Ⅰ, 1, 90024 Gangi PA
9. **Agriturismo Garuti** — Bomporto
   - slug: `agriturismo-garuti-bomporto`
   - indirizzo: Via Carlo Testa, 16, 41030 Sorbara MO
10. **Agriturismo Le Gazze** — Bomporto
   - slug: `agriturismo-le-gazze-bomporto`
   - indirizzo: Via Gorzano, 4, 41031 Camposanto MO
11. **Albergo Residence Al Passatore** — Bomporto
   - slug: `albergo-residence-al-passatore-bomporto`
   - indirizzo: Via Ravarino Carpi, 113, 41030 Sorbara MO
12. **B&B il salice** — Bomporto
   - slug: `b-b-il-salice-bomporto`
   - indirizzo: Str. Nazionale per Carpi Nord, 1388, 41123 Ganaceto MO
13. **B&B La Quercia di Mery** — Bomporto
   - slug: `b-b-la-quercia-di-mery-bomporto`
   - indirizzo: Via D. Giambi, 2115, 41017 La Villa MO
14. **B&B Le Ragazze** — Bomporto
   - slug: `b-b-le-ragazze-bomporto`
   - indirizzo: Via dell'Olmo, 13, 41030 Sorbara MO
15. **Casa Carpanelli** — Bomporto
   - slug: `casa-carpanelli-bomporto`
   - indirizzo: Via Oppio, 88, 41015 Nonantola MO
16. **CONFIDENCE HOTEL SAN SILVESTRO** — Bomporto
   - slug: `confidence-hotel-san-silvestro-bomporto`
   - indirizzo: Via Canaletto, 129, 41030 San Prospero MO
17. **Hotel Corte Vecchia** — Bomporto
   - slug: `hotel-corte-vecchia-bomporto`
   - indirizzo: Via S. Geminiano, 1, 41030 San Prospero MO
18. **Hotel Riverside** — Bomporto
   - slug: `hotel-riverside-bomporto`
   - indirizzo: Via Emilia Est, 2456/s/P, 41018 San Cesario sul Panaro MO
19. **Hotel Rosso Frizzante** — Bomporto
   - slug: `hotel-rosso-frizzante-bomporto`
   - indirizzo: Via Falcone e Borsellino, 66, 41030 Sorbara MO
20. **Hotel Tre Torri** — Bomporto
   - slug: `hotel-tre-torri-bomporto`
   - indirizzo: Via Statale, 12/223/225, 41036 Medolla MO
21. **La Selvatica 50 B&B** — Bomporto
   - slug: `la-selvatica-50-b-b-bomporto`
   - indirizzo: Via Selvatica, 50, 41015 Nonantola MO
22. **Luna Sul Tetto** — Bomporto
   - slug: `luna-sul-tetto-bomporto`
   - indirizzo: Via Giordano Bruno, 7, 41012 Carpi MO
23. **Smart Hotel** — Bomporto
   - slug: `smart-hotel-bomporto`
   - indirizzo: Via Cesare Battisti, 25, 41012 Carpi MO
24. **Villa Tartaruga** — Bomporto
   - slug: `villa-tartaruga-bomporto`
   - indirizzo: Via Garzolè, 41/43, 41013 Castelfranco Emilia MO
25. **Villa Zaira** — Bomporto
   - slug: `villa-zaira-bomporto`
   - indirizzo: Via Ravarino Carpi, 154, 41030 Sorbara MO
26. **Alma bed & breakfast E7053** — Bonarcado
   - slug: `alma-bed-breakfast-e7053-bonarcado`
   - indirizzo: Via Santa Vittoria, 09078 Sennariolo OR
27. **Antica Dimora del Gruccione** — Bonarcado
   - slug: `antica-dimora-del-gruccione-bonarcado`
   - indirizzo: Via Michele Obinu, 31, 09075 Santu Lussurgiu OR
28. **B&B Mare Montagna.** — Bonarcado
   - slug: `b-b-mare-montagna-bonarcado`
   - indirizzo: Via Antonio Gramsci, 1, 09070 Bonarcado OR
29. **b&b Sa Murighesa** — Bonarcado
   - slug: `b-b-sa-murighesa-bonarcado`
   - indirizzo: Via Giuseppe Manno, 68, 09070 San Vero Milis OR
30. **Bisos ospitalità diffusa ecosostenibile** — Bonarcado
   - slug: `bisos-ospitalita-diffusa-ecosostenibile-bonarcado`
   - indirizzo: Via Roma, 1, 09070 Paulilatino OR
31. **Is Cheas Hotel & Restaurant** — Bonarcado
   - slug: `is-cheas-hotel-restaurant-bonarcado`
   - indirizzo: Località Is Cheas, 09070 San Vero Milis OR
32. **Mare Lughente** — Bonarcado
   - slug: `mare-lughente-bonarcado`
   - indirizzo: Via dei Tamerici, 31, 09073 S'Archittu OR
33. **Sa Murighessa albergo Santu Lussurgiu** — Bonarcado
   - slug: `sa-murighessa-albergo-santu-lussurgiu-bonarcado`
   - indirizzo: Via Giovanni Maria Angioi, 125, 09075 Santu Lussurgiu OR
34. **A Ca Mè** — Bonassola
   - slug: `a-ca-me-bonassola`
   - indirizzo: Via Ammiraglio Serra, 82 bis, 19011 Bonassola SP
35. **Affittacamere "Da Luca"** — Bonassola
   - slug: `affittacamere-da-luca-bonassola`
   - indirizzo: Via gavazzo, 18, 19011 Bonassola SP