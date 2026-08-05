# Blocco 347/500 — 35 strutture senza descrizione IT

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

1. **B&B Baglio Ferlito** — Buseto Palizzolo
   - slug: `b-b-baglio-ferlito-buseto-palizzolo`
   - indirizzo: Via Pietro Randazzo Sindaco, 55, 91012 Buseto Palizzolo TP
2. **B&B Castiglione Custonaci** — Buseto Palizzolo
   - slug: `b-b-castiglione-custonaci-buseto-palizzolo`
   - indirizzo: piano terra, Via Piemonte, 4, 91015 Custonaci TP
3. **B&B La Dimora di Pepè** — Buseto Palizzolo
   - slug: `b-b-la-dimora-di-pepe-buseto-palizzolo`
   - indirizzo: Via Regina Margherita, 37, 91015 Custonaci TP
4. **B&B Oasi nel Deserto** — Buseto Palizzolo
   - slug: `b-b-oasi-nel-deserto-buseto-palizzolo`
   - indirizzo: Traversa di, Via Purgatorio, 14, 91015 Custonaci TP
5. **B&B U Puzzu Ranne** — Buseto Palizzolo
   - slug: `b-b-u-puzzu-ranne-buseto-palizzolo`
   - indirizzo: Via Firenze, 124, 91012 Buseto Palizzolo TP
6. **Baglio Minaudo** — Buseto Palizzolo
   - slug: `baglio-minaudo-buseto-palizzolo`
   - indirizzo: Via Roma, 78, 91012 Buseto Palizzolo TP
7. **Baglio Mustazza (Casa Vacanze)** — Buseto Palizzolo
   - slug: `baglio-mustazza-casa-vacanze-buseto-palizzolo`
   - indirizzo: Via Battaglia, 66, 91012 Buseto Palizzolo TP
8. **Baglio Pocoroba** — Buseto Palizzolo
   - slug: `baglio-pocoroba-buseto-palizzolo`
   - indirizzo: Contrada Pocoroba, 1, 91014 Castellammare del Golfo TP
9. **Bed & Breakfast Val di Erice** — Buseto Palizzolo
   - slug: `bed-breakfast-val-di-erice-buseto-palizzolo`
   - indirizzo: Via Antonino Carollo, 7, 91019 Valderice TP
10. **Hotel Terra Degli Elimi** — Buseto Palizzolo
   - slug: `hotel-terra-degli-elimi-buseto-palizzolo`
   - indirizzo: Via Palermo, 69, 91012 Buseto Palizzolo TP
11. **MANZIL Country House (La locanda del Viandante)** — Buseto Palizzolo
   - slug: `manzil-country-house-la-locanda-del-viandante-buseto-palizzolo`
   - indirizzo: Via SP Lenzi - Tangi snc, Tangi Sottana, 91019 Valderice TP
12. **Raggi di Sole** — Buseto Palizzolo
   - slug: `raggi-di-sole-buseto-palizzolo`
   - indirizzo: Via Arezzo, 18, 91015 Custonaci TP
13. **Villa Pollina Bed & Breakfast e Piscina Buseto Palizzolo** — Buseto Palizzolo
   - slug: `villa-pollina-bed-breakfast-e-piscina-buseto-pal-buseto-palizzolo`
   - indirizzo: Via Pietro Randazzo Sindaco, 81, 91012 Buseto Palizzolo TP
14. **Villa Zina Family Resort** — Buseto Palizzolo
   - slug: `villa-zina-family-resort-buseto-palizzolo`
   - indirizzo: Via Viterbo, 20, 91015 Custonaci TP
15. **Albergo Da Rocco** — Bussero
   - slug: `albergo-da-rocco-bussero`
   - indirizzo: Via Bertarini, 54, 20061 Carugate MI
16. **B&B Fuoco e Aria** — Bussero
   - slug: `b-b-fuoco-e-aria-bussero`
   - indirizzo: Via Caravaggio, 11, 20041 Bussero MI
17. **B&B Le Magnolie** — Bussero
   - slug: `b-b-le-magnolie-bussero`
   - indirizzo: Via Bergamo, 3, 20041 Bussero MI
18. **BaBuHaus Bed & Breakfast** — Bussero
   - slug: `babuhaus-bed-breakfast-bussero`
   - indirizzo: Via Martin Luther King, 7, 20060 Bussero MI
19. **Ferrari Hotel Milano** — Bussero
   - slug: `ferrari-hotel-milano-bussero`
   - indirizzo: V. Clemente Alberti, 37, 20061 Carugate MI
20. **For You Hotel** — Bussero
   - slug: `for-you-hotel-bussero`
   - indirizzo: Via Giuseppe Mazzini, 3f, 20063 Cernusco sul Naviglio MI
21. **GuestHost - Il Nido di Clo** — Bussero
   - slug: `guesthost-il-nido-di-clo-bussero`
   - indirizzo: Via Naviglio, 6, 20063 Cernusco sul Naviglio MI
22. **Hotel Senator** — Bussero
   - slug: `hotel-senator-bussero`
   - indirizzo: Via Milano, 37/b, 20064 Gorgonzola MI
23. **La casa di Max** — Bussero
   - slug: `la-casa-di-max-bussero`
   - indirizzo: Via XXV Aprile, 20061 Carugate MI
24. **Le stanze di Mina** — Bussero
   - slug: `le-stanze-di-mina-bussero`
   - indirizzo: Piazza Decorati al Valore Civile, piano 7, 20051 Cassina de' Pecchi MI
25. **Agriturismo Corte Ghiara** — Busseto
   - slug: `agriturismo-corte-ghiara-busseto`
   - indirizzo: Str. Ghiara-Sabbioni, 68, 43012 Fontanellato PR
26. **Agriturismo Mascudiera** — Busseto
   - slug: `agriturismo-mascudiera-busseto`
   - indirizzo: Mascudiera, 29017 Fiorenzuola d'Arda PC
27. **Alle Roncole - Ristorante Con Locanda Busseto** — Busseto
   - slug: `alle-roncole-ristorante-con-locanda-busseto-busseto`
   - indirizzo: Strada Processione, 179, 43011 Busseto PR
28. **B&B L'Albero della Gioia** — Busseto
   - slug: `b-b-l-albero-della-gioia-busseto`
   - indirizzo: Via XXV Aprile, 145, 29010 Forno PC
29. **Bed & Breakfast "Il Pavone"** — Busseto
   - slug: `bed-breakfast-il-pavone-busseto`
   - indirizzo: Str. Bianca, 39, 43011 Busseto PR
30. **Bed & Breakfast Il Trovatore Busseto** — Busseto
   - slug: `bed-breakfast-il-trovatore-busseto-busseto`
   - indirizzo: Via Musini, 36, 43011 Busseto PR
31. **Hotel Arda - Ristorante - Pizzeria** — Busseto
   - slug: `hotel-arda-ristorante-pizzeria-busseto`
   - indirizzo: Via Luigi Scapuzzi, 35, 29017 Fiorenzuola d'Arda PC
32. **Hotel La Voglia** — Busseto
   - slug: `hotel-la-voglia-busseto`
   - indirizzo: Via Repubblica, 50, 29010 Villanova sull'Arda PC
33. **La Corte del Mulino** — Busseto
   - slug: `la-corte-del-mulino-busseto`
   - indirizzo: Via Nazionale Emilia, 70, 43015 Sanguinaro PR
34. **Le Colombaie - Maison de Charme** — Busseto
   - slug: `le-colombaie-maison-de-charme-busseto`
   - indirizzo: Presso cascina "Le Colombaie", Via Bersano, 32, 29010 Bersano di Besenzone PC
35. **Locanda del Lupo** — Busseto
   - slug: `locanda-del-lupo-busseto`
   - indirizzo: Via Garibaldi, 64, 43019 Soragna PR