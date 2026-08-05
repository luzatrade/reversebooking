# Blocco 357/500 — 35 strutture senza descrizione IT

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

1. **La Meridiana Country House** — Cairano
   - slug: `la-meridiana-country-house-cairano`
   - indirizzo: SP199, 83045 Calitri AV
2. **Ristorante Bike Hotel Gerardo Di Masi** — Cairano
   - slug: `ristorante-bike-hotel-gerardo-di-masi-cairano`
   - indirizzo: C.so S. Alfonso, 83040 Caposele AV
3. **Albergo Sant'Anna** — Cairate
   - slug: `albergo-sant-anna-cairate`
   - indirizzo: Via Giuseppe Mazzini, 29, 21058 Solbiate Olona VA
4. **B&B La Canonica** — Cairate
   - slug: `b-b-la-canonica-cairate`
   - indirizzo: Via Jesi, 3, 21050 Cairate VA
5. **Color House Malpensa B&B** — Cairate
   - slug: `color-house-malpensa-b-b-cairate`
   - indirizzo: Via Ugo Foscolo, 38 B, 21012 Cassano Magnago VA
6. **DoubleTree by Hilton Milan Malpensa Solbiate Olona** — Cairate
   - slug: `doubletree-by-hilton-milan-malpensa-solbiate-olo-cairate`
   - indirizzo: Via per Busto Arsizio, 7, 21058 Solbiate Olona VA
7. **Hotel Campo dei Fiori** — Cairate
   - slug: `hotel-campo-dei-fiori-cairate`
   - indirizzo: Via Dante Alighieri, 215, 21054 Fagnano Olona VA
8. **La Corte B&B** — Cairate
   - slug: `la-corte-b-b-cairate`
   - indirizzo: Via Felice Cavallotti, 6, 21054 Fagnano Olona VA
9. **Tommy Vitello B&B** — Cairate
   - slug: `tommy-vitello-b-b-cairate`
   - indirizzo: Via Mario Albino Bonicalza, 21012 Cassano Magnago VA
10. **Villa Terzaghi** — Cairate
   - slug: `villa-terzaghi-cairate`
   - indirizzo: Via S. Maurizio, 21055 Gorla Minore VA
11. **B&B Al giardino degli artisti** — Cairo Montenotte
   - slug: `b-b-al-giardino-degli-artisti-cairo-montenotte`
   - indirizzo: Via Lavagna, 3, 17014 Cairo Montenotte SV
12. **Ca'Brichella** — Cairo Montenotte
   - slug: `ca-brichella-cairo-montenotte`
   - indirizzo: Via Recoaro, 17014 Cairo Montenotte SV
13. **Casa Laiazzo Bed & Breakfast** — Cairo Montenotte
   - slug: `casa-laiazzo-bed-breakfast-cairo-montenotte`
   - indirizzo: Unnamed road, 17014 Rocchetta Cairo SV
14. **Cascina del Vai** — Cairo Montenotte
   - slug: `cascina-del-vai-cairo-montenotte`
   - indirizzo: Strada Ville, 140, 17014 Cairo Montenotte SV
15. **Hotel City** — Cairo Montenotte
   - slug: `hotel-city-cairo-montenotte`
   - indirizzo: Corso Brigate Partigiane, 5/M, 17014 Cairo Montenotte SV
16. **Hotel Ristorante La Torre Cairo Montenotte** — Cairo Montenotte
   - slug: `hotel-ristorante-la-torre-cairo-montenotte-cairo-montenotte`
   - indirizzo: Corso Italia, 29, 17014 Cairo Montenotte SV
17. **La Celestina (Nuova Gestione)** — Cairo Montenotte
   - slug: `la-celestina-nuova-gestione-cairo-montenotte`
   - indirizzo: Località Gallareto, 16, 17010 Piana Crixia SV
18. **Le Macine Relais** — Cairo Montenotte
   - slug: `le-macine-relais-cairo-montenotte`
   - indirizzo: Strada Ferrere, 11, 17014 Cairo Montenotte SV
19. **Moto Pareto B&B** — Cairo Montenotte
   - slug: `moto-pareto-b-b-cairo-montenotte`
   - indirizzo: Localita Zoppetti 8 Monteacuto 15010 Com, 15010 Pareto AL
20. **Pensione Alpi** — Cairo Montenotte
   - slug: `pensione-alpi-cairo-montenotte`
   - indirizzo: Via Ville, 19, 17014 Cairo Montenotte SV
21. **Villa Eugenia** — Cairo Montenotte
   - slug: `villa-eugenia-cairo-montenotte`
   - indirizzo: Str. Santa Maria, 21, 17014 Cairo Montenotte SV
22. **albergo silverado** — Caivano
   - slug: `albergo-silverado-caivano`
   - indirizzo: Via Bugnano, 59, 81030 Orta di Atella CE
23. **Altamu' B&B Acerra AFFITTACAMERE** — Caivano
   - slug: `altamu-b-b-acerra-affittacamere-caivano`
   - indirizzo: Via Gaetano Dublino, 49, 80011 Acerra NA
24. **Amaranto Hotel** — Caivano
   - slug: `amaranto-hotel-caivano`
   - indirizzo: Traversa I Murillo di Cardito, 80021 Afragola NA
25. **B&B CUBE FRATTAMAGGIORE** — Caivano
   - slug: `b-b-cube-frattamaggiore-caivano`
   - indirizzo: Via Roma, 12, 80027 Frattamaggiore NA
26. **B&B Dei Vicari** — Caivano
   - slug: `b-b-dei-vicari-caivano`
   - indirizzo: Via Riscatto, 43, 80027 Frattamaggiore NA
27. **B&B Il Vicoletto** — Caivano
   - slug: `b-b-il-vicoletto-caivano`
   - indirizzo: Via Viggiano, 9, 80020 Frattaminore NA
28. **B&B Reccia luxury rooms** — Caivano
   - slug: `b-b-reccia-luxury-rooms-caivano`
   - indirizzo: Traversa I Giuseppe Mazzini, 4, 80027 Frattamaggiore NA
29. **Bnb Villa Lendi** — Caivano
   - slug: `bnb-villa-lendi-caivano`
   - indirizzo: Via Carmelo Pezzullo, 22, 80027 Frattamaggiore NA
30. **Casa Affitto Breve Crispino** — Caivano
   - slug: `casa-affitto-breve-crispino-caivano`
   - indirizzo: Via Giovanni XXIII, 89, 80020 Frattaminore NA
31. **L'Aranceto B&B** — Caivano
   - slug: `l-aranceto-b-b-caivano`
   - indirizzo: Via Giacomo Bove, 6, 81047 Macerata Campania CE
32. **Villa Mafalda B&B** — Caivano
   - slug: `villa-mafalda-b-b-caivano`
   - indirizzo: Via Padre Mario Vergara, 29, 80027 Frattamaggiore NA
33. **Albergo San Gerardo** — Calabritto
   - slug: `albergo-san-gerardo-calabritto`
   - indirizzo: Via Santuario, 24, 83040 Caposele AV
34. **Bed and Breakfast "La Casa di Mimma"** — Calabritto
   - slug: `bed-and-breakfast-la-casa-di-mimma-calabritto`
   - indirizzo: SS165, 83040 Caposele AV
35. **Da Rosa Resort Srl** — Calabritto
   - slug: `da-rosa-resort-srl-calabritto`
   - indirizzo: Via Santuario Materdomini, 10, 83040 Materdomini AV