# Blocco 237/500 — 35 strutture senza descrizione IT

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

1. **Agriturismo Corti della Gualdana** — Bastida Pancarana
   - slug: `agriturismo-corti-della-gualdana-bastida-pancarana`
   - indirizzo: Strada Gualdana, 15, 27058 Campoferro PV
2. **Hotel Motel Flower** — Bastida Pancarana
   - slug: `hotel-motel-flower-bastida-pancarana`
   - indirizzo: Via Lecco, 14, 27027 Gropello Cairoli PV
3. **Lenti Affittacamere** — Bastida Pancarana
   - slug: `lenti-affittacamere-bastida-pancarana`
   - indirizzo: Via del Motodromo, 4, 27040 Castelletto di Branduzzo PV
4. **Oasilandia** — Bastida Pancarana
   - slug: `oasilandia-bastida-pancarana`
   - indirizzo: SP19, 27020 Dorno PV
5. **Villa Cantoni** — Bastida Pancarana
   - slug: `villa-cantoni-bastida-pancarana`
   - indirizzo: V. della Libertà, 110, 27027 Gropello Cairoli PV
6. **Agriturismo Borgo Delle Vigne** — Bastiglia
   - slug: `agriturismo-borgo-delle-vigne-bastiglia`
   - indirizzo: Via Francesco Raibolini il Francia, 55, 40069 Zola Predosa BO
7. **Agriturismo Corte Tamellini** — Bastiglia
   - slug: `agriturismo-corte-tamellini-bastiglia`
   - indirizzo: Località Tamellini, 13, 37038 Soave VR
8. **Agriturismo Fattoria Quercia** — Bastiglia
   - slug: `agriturismo-fattoria-quercia-bastiglia`
   - indirizzo: Via Mulino, 909, 40050 Castello di Serravalle BO
9. **Agriturismo Il Bove** — Bastiglia
   - slug: `agriturismo-il-bove-bastiglia`
   - indirizzo: Via Salimbene da Parma, 115, 42124 Reggio Emilia RE
10. **Agriturismo Il Cavicchio** — Bastiglia
   - slug: `agriturismo-il-cavicchio-bastiglia`
   - indirizzo: Via del Cavicchio, 14, 40067 Pianoro BO
11. **Agriturismo La Bellis** — Bastiglia
   - slug: `agriturismo-la-bellis-bastiglia`
   - indirizzo: Unnamed Road,46035, 46035 Comuna Bellis MN
12. **Agriturismo La Lepre Bianca** — Bastiglia
   - slug: `agriturismo-la-lepre-bianca-bastiglia`
   - indirizzo: Via di Renazzo, 88, 44045 Renazzo FE
13. **Agriturismo La Volta delle Rondini** — Bastiglia
   - slug: `agriturismo-la-volta-delle-rondini-bastiglia`
   - indirizzo: Via Stradella, n°11, 41043 Formigine MO
14. **Agriturismo San Polo** — Bastiglia
   - slug: `agriturismo-san-polo-bastiglia`
   - indirizzo: Via S. Polo, 5, 41014 Castelvetro di Modena MO
15. **Alloggio Cantalupo** — Bastiglia
   - slug: `alloggio-cantalupo-bastiglia`
   - indirizzo: Via Giardini Sud, 170, 41043 Formigine MO
16. **B&B Il Naviglio** — Bastiglia
   - slug: `b-b-il-naviglio-bastiglia`
   - indirizzo: 31, Via Borsara, 41030 Bastiglia MO
17. **B&B Quattrol** — Bastiglia
   - slug: `b-b-quattrol-bastiglia`
   - indirizzo: Via S. Clemente Valle, 9/B, 41030 Bastiglia MO
18. **B&B Real Pidkova** — Bastiglia
   - slug: `b-b-real-pidkova-bastiglia`
   - indirizzo: Via Canaletto, 34, 41030 Bastiglia MO
19. **Il terrazzo sul tramonto - Bastiglia (MO)** — Bastiglia
   - slug: `il-terrazzo-sul-tramonto-bastiglia-mo-bastiglia`
   - indirizzo: Via Borsara, 9C, 41030 Bastiglia MO
20. **La Barbera Azienda Agrituristica** — Bastiglia
   - slug: `la-barbera-azienda-agrituristica-bastiglia`
   - indirizzo: Via Lunga, 28, 41014 Castelvetro di Modena MO
21. **La Bastiglia Boutique Hotel Spa Ristorante** — Bastiglia
   - slug: `la-bastiglia-boutique-hotel-spa-ristorante-bastiglia`
   - indirizzo: Via Salnitraria, 06038 Spello PG
22. **La Corte Gialla** — Bastiglia
   - slug: `la-corte-gialla-bastiglia`
   - indirizzo: Via Zanini, 5, 41012 Carpi MO
23. **Le Cardinal** — Bastiglia
   - slug: `le-cardinal-bastiglia`
   - indirizzo: Via Canaletto, 23, 41030 Modena MO
24. **Continental Terme Hotel** — Battaglia Terme
   - slug: `continental-terme-hotel-battaglia-terme`
   - indirizzo: Via Neroniana, 8, 35036 Montegrotto Terme PD
25. **Hotel Des Bains Thermae Resort** — Battaglia Terme
   - slug: `hotel-des-bains-thermae-resort-battaglia-terme`
   - indirizzo: Via Mezzavia, 22, 35036 Montegrotto Terme PD
26. **Hotel Montegrotto Terme Mioni Royal San** — Battaglia Terme
   - slug: `hotel-montegrotto-terme-mioni-royal-san-battaglia-terme`
   - indirizzo: Piazzale Stazione, 10, 35036 Montegrotto Terme PD
27. **Hotel Ostello Battaglia** — Battaglia Terme
   - slug: `hotel-ostello-battaglia-battaglia-terme`
   - indirizzo: Via Galzignana, 18, 35041 Battaglia Terme PD
28. **Hotel Splendid - Galzignano Resort Terme & Golf** — Battaglia Terme
   - slug: `hotel-splendid-galzignano-resort-terme-golf-battaglia-terme`
   - indirizzo: Viale delle Terme, 84, 35030 Galzignano Terme PD
29. **Hotel Sporting - Galzignano Resort Terme & Golf** — Battaglia Terme
   - slug: `hotel-sporting-galzignano-resort-terme-golf-battaglia-terme`
   - indirizzo: Viale delle Terme, 84, 35030 Padova, PD
30. **Hotel Terme Apollo** — Battaglia Terme
   - slug: `hotel-terme-apollo-battaglia-terme`
   - indirizzo: Via S. Pio X, 4, 35036 Montegrotto Terme PD
31. **Hotel Terme Delle Nazioni** — Battaglia Terme
   - slug: `hotel-terme-delle-nazioni-battaglia-terme`
   - indirizzo: Via Mezzavia, 20, 35036 Montegrotto Terme PD
32. **Hotel Terme Millepini** — Battaglia Terme
   - slug: `hotel-terme-millepini-battaglia-terme`
   - indirizzo: Via Cataio, 42, 35036 Montegrotto Terme PD
33. **Hotel Terme Neroniane** — Battaglia Terme
   - slug: `hotel-terme-neroniane-battaglia-terme`
   - indirizzo: Via Neroniana, 21, 35036 Montegrotto Terme PD
34. **Radisson Blu Resort, Terme di Galzignano** — Battaglia Terme
   - slug: `radisson-blu-resort-terme-di-galzignano-battaglia-terme`
   - indirizzo: Viale delle Terme, 84, 35030 Galzignano Terme PD
35. **Agriturismo LA BOTALLA** — Battifollo
   - slug: `agriturismo-la-botalla-battifollo`
   - indirizzo: Via dei Castagneti, 11, 12070 Scagnello CN