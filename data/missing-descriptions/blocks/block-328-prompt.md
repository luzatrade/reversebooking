# Blocco 328/500 — 35 strutture senza descrizione IT

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

1. **Baccagnano** — Brisighella
   - slug: `baccagnano-brisighella`
   - indirizzo: Via Baccagnano, 24, 48013 Brisighella RA
2. **Bed&Wine** — Brisighella
   - slug: `bed-wine-brisighella`
   - indirizzo: Via XXIV Maggio, 18, 48013 Brisighella RA
3. **Borgo Rossi - Agriturismo Relais** — Brisighella
   - slug: `borgo-rossi-agriturismo-relais-brisighella`
   - indirizzo: Via Purocielo, 3, 48013 Brisighella RA
4. **Brisighella GreenWellness** — Brisighella
   - slug: `brisighella-greenwellness-brisighella`
   - indirizzo: Via Corte, 86, 48013 Brisighella RA
5. **Casa Maghinardo** — Brisighella
   - slug: `casa-maghinardo-brisighella`
   - indirizzo: Via Porta Fiorentina, 15, 48013 Brisighella RA
6. **Contea Di Val D'Amone** — Brisighella
   - slug: `contea-di-val-d-amone-brisighella`
   - indirizzo: Via Molino del Rosso, 18, 48013 Brisighella RA
7. **Hotel Albergo Locanda la Cavallina ***** — Brisighella
   - slug: `hotel-albergo-locanda-la-cavallina-brisighella`
   - indirizzo: Via Moreda, 6, 48013 Brisighella RA
8. **Hotel Cristallo** — Brisighella
   - slug: `hotel-cristallo-brisighella`
   - indirizzo: Via Firenze, 7, 48025 Riolo Terme RA
9. **Hotel Serena** — Brisighella
   - slug: `hotel-serena-brisighella`
   - indirizzo: Via Firenze, 16, 48025 Riolo Terme RA
10. **Modus Aquae** — Brisighella
   - slug: `modus-aquae-brisighella`
   - indirizzo: Via Bacello, 29, 48013 Brisighella RA
11. **Modus Vivendi Hotel & Spa** — Brisighella
   - slug: `modus-vivendi-hotel-spa-brisighella`
   - indirizzo: Via Roma, 5D, 48013 Brisighella RA
12. **Relais Varnello** — Brisighella
   - slug: `relais-varnello-brisighella`
   - indirizzo: Via Rontana, 34, 48013 Brisighella RA
13. **Trerè Agriturismo e Vini a Faenza** — Brisighella
   - slug: `trere-agriturismo-e-vini-a-faenza-brisighella`
   - indirizzo: Via Casale, 19, 48018 Faenza RA
14. **Villa Liverzano - Boutique Eco-Agriturismo** — Brisighella
   - slug: `villa-liverzano-boutique-eco-agriturismo-brisighella`
   - indirizzo: V. Chiesa di Rontana, 10, 48013 Brisighella RA
15. **Albergo La Perla** — Brissago-Valtravaglia
   - slug: `albergo-la-perla-brissago-valtravaglia`
   - indirizzo: Via Passo Piazza, 6, 28826 Trarego VB
16. **Bed & Breakfast "La Casa del Borgo"** — Brissago-Valtravaglia
   - slug: `bed-breakfast-la-casa-del-borgo-brissago-valtravaglia`
   - indirizzo: Via Basso, 10\D, 21030 Brissago-Valtravaglia VA
17. **Affittacamere Le Clocher du Mont Blanc** — Brissogne
   - slug: `affittacamere-le-clocher-du-mont-blanc-brissogne`
   - indirizzo: Località Pallù, 140, 11020 Brissogne AO
18. **Chambres d'Amis • L'Antico Fienile** — Brissogne
   - slug: `chambres-d-amis-l-antico-fienile-brissogne`
   - indirizzo: Frazione Bondina, 11020 Brissogne AO
19. **Hotel Biancaneve** — Brissogne
   - slug: `hotel-biancaneve-brissogne`
   - indirizzo: Frazione Neyran Dessus, 70, 11020 Brissogne AO
20. **Lo Stambecco Bianco B&B - Camere immerse nella natura vicino piste da sci** — Brissogne
   - slug: `lo-stambecco-bianco-b-b-camere-immerse-nella-nat-brissogne`
   - indirizzo: Frazione Grand-Brissogne 72, 11020 Brissogne AO
21. **AgriRelais San Giovanni** — Brittoli
   - slug: `agrirelais-san-giovanni-brittoli`
   - indirizzo: NUCLEO CAPODACQUA, 36, 67022 Capestrano AQ
22. **Agriturismo La Fara** — Brittoli
   - slug: `agriturismo-la-fara-brittoli`
   - indirizzo: Contrada Fara, 23, 65010 Carpineto della Nora PE
23. **Agriturismo La Fattoria Di Maria Donata** — Brittoli
   - slug: `agriturismo-la-fattoria-di-maria-donata-brittoli`
   - indirizzo: Contrada Cesura, 65020 Cugnoli PE
24. **AGRITURISMO LA LINDERA** — Brittoli
   - slug: `agriturismo-la-lindera-brittoli`
   - indirizzo: VIA LINDERA, 7, 65020 Corvara PE
25. **Agriturismo Laperegina** — Brittoli
   - slug: `agriturismo-laperegina-brittoli`
   - indirizzo: C.da Pretara, Via Vadarcone 6, 65020 Corvara PE
26. **Agriturismo Piccolo Albero** — Brittoli
   - slug: `agriturismo-piccolo-albero-brittoli`
   - indirizzo: Contrada Castelluccio, 6d, 65014 Loreto Aprutino PE
27. **Azienda Agrituristica Capo d'Acqua di Ursini Alfredo** — Brittoli
   - slug: `azienda-agrituristica-capo-d-acqua-di-ursini-alf-brittoli`
   - indirizzo: nucleo Capodacqua, 37, 67022 Capestrano AQ
28. **B&B Luce** — Brittoli
   - slug: `b-b-luce-brittoli`
   - indirizzo: Via della Repubblica, 111, 65022 Bussi sul Tirino PE
29. **Casa delle More** — Brittoli
   - slug: `casa-delle-more-brittoli`
   - indirizzo: Contrada Olmo della Biocca snc, 65010 Civitaquana PE
30. **Clementina B&B** — Brittoli
   - slug: `clementina-b-b-brittoli`
   - indirizzo: Via Santa Maria, 2, 65010 Brittoli PE
31. **Hotel Ristorante La Bilancia** — Brittoli
   - slug: `hotel-ristorante-la-bilancia-brittoli`
   - indirizzo: contrada palazzo, 11, 65014 Loreto Aprutino PE
32. **I Racconti del Fiume** — Brittoli
   - slug: `i-racconti-del-fiume-brittoli`
   - indirizzo: Via della Repubblica, 190, 65022 Bussi sul Tirino PE
33. **La Locanda delle Streghe - Relais Ristorante** — Brittoli
   - slug: `la-locanda-delle-streghe-relais-ristorante-brittoli`
   - indirizzo: Via della Pineta, 24, 67023 Castel del Monte AQ
34. **1711 - Luxury Guest House** — Brivio
   - slug: `1711-luxury-guest-house-brivio`
   - indirizzo: Via Fontana, 5, 23885 Arlate LC
35. **Agriturismo Deviscio B&B** — Brivio
   - slug: `agriturismo-deviscio-b-b-brivio`
   - indirizzo: 23900 Deviscio LC