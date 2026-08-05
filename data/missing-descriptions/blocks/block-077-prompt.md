# Blocco 77/500 — 35 strutture senza descrizione IT

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

1. **Locanda La Clusaz** — Allein
   - slug: `locanda-la-clusaz-allein`
   - indirizzo: SS27, 1/a, 11010 Gignod AO
2. **Maien Piolet Milieu** — Allein
   - slug: `maien-piolet-milieu-allein`
   - indirizzo: Località Piolet, 11010 Doues AO
3. **Maison Bertin** — Allein
   - slug: `maison-bertin-allein`
   - indirizzo: Ruelle Marcoz, 1, 11014 Etroubles AO
4. **Mochettaz** — Allein
   - slug: `mochettaz-allein`
   - indirizzo: Corso Ivrea, 107, 11100 Aosta AO
5. **SUISSE Hotel** — Allein
   - slug: `suisse-hotel-allein`
   - indirizzo: Via Roma, 26, 11010 Saint-Rhémy AO
6. **Agriturismo Bardanella** — Allerona
   - slug: `agriturismo-bardanella-allerona`
   - indirizzo: Voc Bardanella, 78, 05011 Allerona TR
7. **Agriturismo Belvedere Delle Crete** — Allerona
   - slug: `agriturismo-belvedere-delle-crete-allerona`
   - indirizzo: Vocabolo Belvedere, 44/a, 05011 Allerona TR
8. **Agriturismo Casale Mulinaccino** — Allerona
   - slug: `agriturismo-casale-mulinaccino-allerona`
   - indirizzo: della Montagna, 38, 05015 Fabro TR
9. **Agriturismo Il Colombaio** — Allerona
   - slug: `agriturismo-il-colombaio-allerona`
   - indirizzo: Località Colombaiolo, Via di Parrano, Snc, 05010 Montegabbione TR
10. **Agriturismo Pian di Frattina** — Allerona
   - slug: `agriturismo-pian-di-frattina-allerona`
   - indirizzo: Contrada della Montagna, 43, 05015 Fabro TR
11. **agriturismo riparossa** — Allerona
   - slug: `agriturismo-riparossa-allerona`
   - indirizzo: vocabolo villa crespi 6, 05011 Allerona TR
12. **Agriturismo San Pietro Aquaeortus** — Allerona
   - slug: `agriturismo-san-pietro-aquaeortus-allerona`
   - indirizzo: Via Vocabolo Leprara 24, 05011 Allerona TR
13. **Agriturismo Selvella** — Allerona
   - slug: `agriturismo-selvella-allerona`
   - indirizzo: Localita' Selvella, 5, 05011 Allerona TR
14. **B&B Campitelli** — Allerona
   - slug: `b-b-campitelli-allerona`
   - indirizzo: Via Campitelli, 114, 05011 Allerona TR
15. **B&B Locanda Toscanini** — Allerona
   - slug: `b-b-locanda-toscanini-allerona`
   - indirizzo: Piazza Arturo Toscanini, 3, 53040 Cetona SI
16. **Casale Il Ventaglio** — Allerona
   - slug: `casale-il-ventaglio-allerona`
   - indirizzo: Strada Piani, 05016 Ficulle TR
17. **Hotel Il Focolare** — Allerona
   - slug: `hotel-il-focolare-allerona`
   - indirizzo: Contrada della Stazione, 57, 05015 Fabro TR
18. **Il Casale di Lavinia** — Allerona
   - slug: `il-casale-di-lavinia-allerona`
   - indirizzo: Contrada della Piaggia, 2A, 05015 Fabro TR
19. **La Pergoletta a Castello, dal 1925** — Allerona
   - slug: `la-pergoletta-a-castello-dal-1925-allerona`
   - indirizzo: Via Cairoli, 05014 Castel Viscardo TR
20. **Six Keys Guesthouse** — Allerona
   - slug: `six-keys-guesthouse-allerona`
   - indirizzo: Via Nuova, 9, 05011 Allerona TR
21. **Albergo Vittoria 3 stelle** — Alliste
   - slug: `albergo-vittoria-3-stelle-alliste`
   - indirizzo: Piazza San Martino, 11, 73057 Taviano LE
22. **Aurosa Vacanze Bed and Breakfast** — Alliste
   - slug: `aurosa-vacanze-bed-and-breakfast-alliste`
   - indirizzo: Via Capitano Antonio Cutrupia, 23, 73040 Alliste LE
23. **B&B Casa del Corso** — Alliste
   - slug: `b-b-casa-del-corso-alliste`
   - indirizzo: Corso Vittorio Emanuele II, 28, 73057 Taviano LE
24. **B&B MARESALENTO** — Alliste
   - slug: `b-b-maresalento-alliste`
   - indirizzo: Via Fiumi Marina, 71, 73055 Racale LE
25. **B&B Palazzo dei Don** — Alliste
   - slug: `b-b-palazzo-dei-don-alliste`
   - indirizzo: Via Addolorata, 30, 73055 Racale LE
26. **B&B Santa Potenza** — Alliste
   - slug: `b-b-santa-potenza-alliste`
   - indirizzo: S.da Provinciale 266, 73040 Felline LE
27. **Corterè B&B** — Alliste
   - slug: `cortere-b-b-alliste`
   - indirizzo: Via le Croci, 23, 73040 Alliste LE
28. **Don Alfonso, dimora d'epoca** — Alliste
   - slug: `don-alfonso-dimora-d-epoca-alliste`
   - indirizzo: Via Dante Alighieri, 73055 Racale LE
29. **DONNA FIORA Antica Dimora** — Alliste
   - slug: `donna-fiora-antica-dimora-alliste`
   - indirizzo: Via P. Leone, 9, 73040 Alliste LE
30. **Hotel Giardino dei Pini** — Alliste
   - slug: `hotel-giardino-dei-pini-alliste`
   - indirizzo: S.da Provinciale 266, 73040 Alliste LE
31. **Il Giardino di Paola B&B** — Alliste
   - slug: `il-giardino-di-paola-b-b-alliste`
   - indirizzo: Via Macagnino, 5, 73040 Alliste LE
32. **La Gemma del Salento** — Alliste
   - slug: `la-gemma-del-salento-alliste`
   - indirizzo: Via Mazzini, 35A, 73055 Racale LE
33. **Le Colonne B&B** — Alliste
   - slug: `le-colonne-b-b-alliste`
   - indirizzo: Via Monte Santo Michele, 3, 73055 Racale LE
34. **Le Gemelle Boutique Hotel** — Alliste
   - slug: `le-gemelle-boutique-hotel-alliste`
   - indirizzo: Via Morelli, 2, 73055 Torre Suda LE
35. **Lux b&b taviano** — Alliste
   - slug: `lux-b-b-taviano-alliste`
   - indirizzo: Via Acaia, 3, 73057 Taviano LE