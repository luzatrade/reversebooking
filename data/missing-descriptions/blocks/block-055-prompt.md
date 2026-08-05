# Blocco 55/500 — 35 strutture senza descrizione IT

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

1. **Grand Hotel La Chiusa di Chietri** — Alberobello
   - slug: `grand-hotel-la-chiusa-di-chietri-alberobello`
   - indirizzo: SS 172 dei Trulli, km 29, 800, 70011 Alberobello BA
2. **Grand Hotel Olimpo** — Alberobello
   - slug: `grand-hotel-olimpo-alberobello`
   - indirizzo: Via 7 Liberatori della Selva, 4b, 70011 Alberobello BA
3. **Hotel "Ramapendula"** — Alberobello
   - slug: `hotel-ramapendula-alberobello`
   - indirizzo: Via Locorotondo, Snc, 70011 Alberobello BA
4. **Hotel Astoria** — Alberobello
   - slug: `hotel-astoria-alberobello`
   - indirizzo: Viale Bari, 11, 70011 Alberobello BA
5. **Hotel Cavaliere** — Alberobello
   - slug: `hotel-cavaliere-alberobello`
   - indirizzo: Via Tommaso Siciliani, 47, 70015 Noci BA
6. **Hotel Colle del Sole** — Alberobello
   - slug: `hotel-colle-del-sole-alberobello`
   - indirizzo: Via Indipendenza, 63, 70011 Alberobello BA
7. **Hotel Cuor Di Puglia** — Alberobello
   - slug: `hotel-cuor-di-puglia-alberobello`
   - indirizzo: Via M.Viterbo, 3, 70011 Alberobello BA
8. **Hotel Donatello Alberobello** — Alberobello
   - slug: `hotel-donatello-alberobello-alberobello`
   - indirizzo: Via Angelo Turi, 96, 70011 Coreggia BA
9. **Hotel Lanzillotta** — Alberobello
   - slug: `hotel-lanzillotta-alberobello`
   - indirizzo: Piazza Re Ferdinando IV di Borbone , numero 33, 70011, Piazza Re Ferdinando IV di Borbone, 31, 70011 Alberobello BA
10. **Hotel Silva** — Alberobello
   - slug: `hotel-silva-alberobello`
   - indirizzo: Largo Svevo Italo, 7, 70011 Alberobello BA
11. **Hotel Sovrano** — Alberobello
   - slug: `hotel-sovrano-alberobello`
   - indirizzo: Viale Alcide De Gasperi, 2, 70011 Alberobello BA
12. **I Trulli del Fauno** — Alberobello
   - slug: `i-trulli-del-fauno-alberobello`
   - indirizzo: Strada Comunale Gabellota, 15c, 70011 Alberobello BA
13. **Le Alcove Luxury Hotel nei Trulli** — Alberobello
   - slug: `le-alcove-luxury-hotel-nei-trulli-alberobello`
   - indirizzo: Piazza Re Ferdinando IV di Borbone, 7, 70011 Alberobello BA
14. **San Marco Boutique Rooms** — Alberobello
   - slug: `san-marco-boutique-rooms-alberobello`
   - indirizzo: Via Monte S. Marco, 17, 70011 Alberobello BA
15. **Tipico Resort in Trulli** — Alberobello
   - slug: `tipico-resort-in-trulli-alberobello`
   - indirizzo: Via Brigata Regina, 47, 70011 Alberobello BA
16. **Trulli e Puglia Resort** — Alberobello
   - slug: `trulli-e-puglia-resort-alberobello`
   - indirizzo: P.za Gabriele D'Annunzio, 2, 70011 Alberobello BA
17. **Trulli Holiday Albergo Diffuso** — Alberobello
   - slug: `trulli-holiday-albergo-diffuso-alberobello`
   - indirizzo: Piazza XXVII Maggio, 38, 70011 Alberobello BA
18. **Trullidea Albergo diffuso** — Alberobello
   - slug: `trullidea-albergo-diffuso-alberobello`
   - indirizzo: Via Monte Sabotino, 10, 70011 Alberobello BA
19. **Affittacamere "La Torre"** — Alberona
   - slug: `affittacamere-la-torre-alberona`
   - indirizzo: Via Roma, 45, 71032 Biccari FG
20. **Affittacamere Palazzo 1892** — Alberona
   - slug: `affittacamere-palazzo-1892-alberona`
   - indirizzo: Corso Vittorio Emanuele III, 16, 82023 Castelvetere in Val Fortore BN
21. **Agriturismo Regio Tratturo** — Alberona
   - slug: `agriturismo-regio-tratturo-alberona`
   - indirizzo: Strada Provinciale 30, Baselice, BN, 82020 Baselice BN
22. **Albergo Michelangelo** — Alberona
   - slug: `albergo-michelangelo-alberona`
   - indirizzo: Via Michelangelo Buonarroti, 82028 San Bartolomeo In Galdo BN
23. **B&B Belvedere Castelluccio Valmaggiore** — Alberona
   - slug: `b-b-belvedere-castelluccio-valmaggiore-alberona`
   - indirizzo: Via Sotto le Mura, 66, 71020 Castelluccio Valmaggiore FG
24. **B&b Borgo Sciugolo** — Alberona
   - slug: `b-b-borgo-sciugolo-alberona`
   - indirizzo: Via Sciugolo, 2b, 82020 Baselice BN
25. **B&B Poggio Marano** — Alberona
   - slug: `b-b-poggio-marano-alberona`
   - indirizzo: Località Marano, 7, 82028 San Bartolomeo in Galdo BN
26. **BORA B&B** — Alberona
   - slug: `bora-b-b-alberona`
   - indirizzo: Via Sant'Antonio, 72, 71029 Troia FG
27. **Casa Al Lago B&B** — Alberona
   - slug: `casa-al-lago-b-b-alberona`
   - indirizzo: Contrada Mazzocca, snc, 82020 Foiao Di Val Forotre BN
28. **Dragonfly affittacamere** — Alberona
   - slug: `dragonfly-affittacamere-alberona`
   - indirizzo: Via G. Leopardi, 2, 71030 Motta Montecorvino FG
29. **Hotel Palace Lucera** — Alberona
   - slug: `hotel-palace-lucera-alberona`
   - indirizzo: G78R+48 Zona Industriale di Lucera, SP5, 71036 Lucera FG
30. **I Templari di Alberona** — Alberona
   - slug: `i-templari-di-alberona-alberona`
   - indirizzo: Via Ripa, 22, 71031 Alberona FG
31. **Il Viandante Bed & Breakfast** — Alberona
   - slug: `il-viandante-bed-breakfast-alberona`
   - indirizzo: Via Colonnello Lorenzo D'Avanzo, 122, 71039 Roseto Valfortore FG
32. **La Balconata Ristorante - Pizzeria - Hotel diffusion** — Alberona
   - slug: `la-balconata-ristorante-pizzeria-hotel-diffusion-alberona`
   - indirizzo: Via XXIV Maggio, 6, 71030 Volturino FG
33. **La Veranda Fiorita** — Alberona
   - slug: `la-veranda-fiorita-alberona`
   - indirizzo: Via Roma, 17, 71038 Pietramontecorvino FG
34. **Locanda di Ody** — Alberona
   - slug: `locanda-di-ody-alberona`
   - indirizzo: Via Roma, 50, 71038 Pietramontecorvino FG
35. **Pacifico Rooms affittacamere** — Alberona
   - slug: `pacifico-rooms-affittacamere-alberona`
   - indirizzo: Via Costa, 48a, 82028 San Bartolomeo in Galdo BN