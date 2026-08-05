# Blocco 283/500 — 35 strutture senza descrizione IT

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

1. **Boutique Hotel Palazzo Corso Umberto** — Bojano
   - slug: `boutique-hotel-palazzo-corso-umberto-bojano`
   - indirizzo: Corso Umberto I, 19, 86021 Bojano CB
2. **I Malatesta casa vacanze** — Bojano
   - slug: `i-malatesta-casa-vacanze-bojano`
   - indirizzo: Localitá Malatesta, 60/68, 86021 Bojano CB
3. **Il campanile** — Bojano
   - slug: `il-campanile-bojano`
   - indirizzo: Via Guglielmo Marconi, 3, 86096 Santa Maria del Molise IS
4. **Le Finestre sulla Piazza** — Bojano
   - slug: `le-finestre-sulla-piazza-bojano`
   - indirizzo: Corso F. Amatuzio, 6, 86021 Bojano CB
5. **Agriturismo La Villa** — Bolano
   - slug: `agriturismo-la-villa-bolano`
   - indirizzo: Villa Località, 30, 19020 Bolano SP
6. **Agriturismo Paradiso di San Prospero** — Bolano
   - slug: `agriturismo-paradiso-di-san-prospero-bolano`
   - indirizzo: Via Meretta, 17, 19020 Bottagna SP
7. **B&B Alla Fortezza** — Bolano
   - slug: `b-b-alla-fortezza-bolano`
   - indirizzo: Via fusicchio, 18, 19038 Sarzana SP
8. **B&B Amici - Bed and Breakfast La Spezia** — Bolano
   - slug: `b-b-amici-bed-and-breakfast-la-spezia-bolano`
   - indirizzo: Via Provinciale Spezia, 116, 19020 Piano di Valeriano-bottagna SP
9. **B&B Buio Pesto IT011004C1ZMS2M9OQ** — Bolano
   - slug: `b-b-buio-pesto-it011004c1zms2m9oq-bolano`
   - indirizzo: Via Feletta, 22, 19020 Ceparana SP
10. **B&B Gli Oleandri** — Bolano
   - slug: `b-b-gli-oleandri-bolano`
   - indirizzo: Via Nuova, 47, 19020 Bolano SP
11. **Borgovecchio** — Bolano
   - slug: `borgovecchio-bolano`
   - indirizzo: Via Borgovecchio, 10, 19020 Bolano SP
12. **Elicrim** — Bolano
   - slug: `elicrim-bolano`
   - indirizzo: Via Alessandro Volta, 23, 19037 Santo Stefano di Magra SP
13. **Hotel Mirador** — Bolano
   - slug: `hotel-mirador-bolano`
   - indirizzo: Via del Gaggio, 22, 54010 Podenzana MS
14. **Il Borgo Di Pegui** — Bolano
   - slug: `il-borgo-di-pegui-bolano`
   - indirizzo: Frazione Pegui, 23, 19020 Calice al Cornoviglio SP
15. **La Rosa del Golfo dei Poeti** — Bolano
   - slug: `la-rosa-del-golfo-dei-poeti-bolano`
   - indirizzo: Corso Nazionale, 320, 19125 La Spezia SP
16. **Relax nella natura** — Bolano
   - slug: `relax-nella-natura-bolano`
   - indirizzo: Via Lavaggia, 8, 19020 Bolano SP
17. **Residence Monte Bello** — Bolano
   - slug: `residence-monte-bello-bolano`
   - indirizzo: via Monte Bello di Fondo, 19020 Bolano SP
18. **Villa Altar** — Bolano
   - slug: `villa-altar-bolano`
   - indirizzo: Via Nuova, 26, 19020 Bolano SP
19. **Casa Gaia - CIN IT016084C2RJ6U6TQH** — Bolgare
   - slug: `casa-gaia-cin-it016084c2rj6u6tqh-bolgare`
   - indirizzo: Via Rasetto, 6, 24060 Costa di Mezzate BG
20. **Hotel Fontana Santa** — Bolgare
   - slug: `hotel-fontana-santa-bolgare`
   - indirizzo: Via Fontana Santa, 2, 24064 Grumello del Monte BG
21. **Hotel Motel Gold** — Bolgare
   - slug: `hotel-motel-gold-bolgare`
   - indirizzo: Strada Statale 573 Ogliese, 24050 Calcinate BG
22. **Hotel Ristorante Ponte Autostrada** — Bolgare
   - slug: `hotel-ristorante-ponte-autostrada-bolgare`
   - indirizzo: Via Cassinone, 46, 24068 Seriate BG
23. **Motel Prince** — Bolgare
   - slug: `motel-prince-bolgare`
   - indirizzo: Via Ninola, 16, 24050 Calcinate BG
24. **Nippon Tranquillity** — Bolgare
   - slug: `nippon-tranquillity-bolgare`
   - indirizzo: Via G. Pascoli, 10, 24060 Gorlago BG
25. **Piccolo Hotel Motel** — Bolgare
   - slug: `piccolo-hotel-motel-bolgare`
   - indirizzo: SP94, 24050 Palosco BG
26. **Resort degli Angeli** — Bolgare
   - slug: `resort-degli-angeli-bolgare`
   - indirizzo: Via Alessandro Manzoni, 5, 24060 Carobbio degli Angeli BG
27. **Viola Mhotel** — Bolgare
   - slug: `viola-mhotel-bolgare`
   - indirizzo: Via Brescia, 94, 24064 Grumello del Monte BG
28. **Acca Palace** — Bollate
   - slug: `acca-palace-bollate`
   - indirizzo: Via Giovanni Nicotera, 9, 20161 Milano MI
29. **BED & BREAKFAST SAKURA** — Bollate
   - slug: `bed-breakfast-sakura-bollate`
   - indirizzo: Via Gerolamo Forni, 70, 20161 Milano MI
30. **Best Western Mirage Hotel Fiera** — Bollate
   - slug: `best-western-mirage-hotel-fiera-bollate`
   - indirizzo: Via Valassina, 95, 20037 Paderno Dugnano MI
31. **Hotel Amico Milano Certosa** — Bollate
   - slug: `hotel-amico-milano-certosa-bollate`
   - indirizzo: Via Varesina, 214, 20156 Milano MI
32. **Hotel Da Vinci Milano** — Bollate
   - slug: `hotel-da-vinci-milano-bollate`
   - indirizzo: Via Senigallia, 6, 20161 Milano MI
33. **Hotel Salus Milano** — Bollate
   - slug: `hotel-salus-milano-bollate`
   - indirizzo: Via Pellegrino Rossi, 59, 20161 Milano MI
34. **Michelangelo Apartments** — Bollate
   - slug: `michelangelo-apartments-bollate`
   - indirizzo: Via IV Novembre, 27, 20032 Cormano MI
35. **Naitly Milano Dergano** — Bollate
   - slug: `naitly-milano-dergano-bollate`
   - indirizzo: Via Privata Don Bartolomeo Grazioli, 4, 20161 Milano MI