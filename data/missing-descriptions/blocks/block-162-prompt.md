# Blocco 162/500 — 35 strutture senza descrizione IT

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

1. **Colonna Resort** — Arzachena
   - slug: `colonna-resort-arzachena`
   - indirizzo: Spiaggia Capo Ferro, 07021 Porto Cervo OT
2. **Grand Hotel Cannigione** — Arzachena
   - slug: `grand-hotel-cannigione-arzachena`
   - indirizzo: Via Monti Corru, 07021 Cannigione OT
3. **Hotel Citti** — Arzachena
   - slug: `hotel-citti-arzachena`
   - indirizzo: Viale Costa Smeralda, 197, 07021 Arzachena OT
4. **Hotel la Bisaccia** — Arzachena
   - slug: `hotel-la-bisaccia-arzachena`
   - indirizzo: Via Baja Sardinia, 1, 07021 Arzachena OT
5. **Hotel Libyssonis** — Arzachena
   - slug: `hotel-libyssonis-arzachena`
   - indirizzo: Via del Lentischio, 1, 07046 Porto Torres SS
6. **Hotel Micalosu** — Arzachena
   - slug: `hotel-micalosu-arzachena`
   - indirizzo: Località Micalosu, Snc, 07021 Arzachena OT
7. **Hotel Olimpia** — Arzachena
   - slug: `hotel-olimpia-arzachena`
   - indirizzo: Via del Mare, snc, 07021 Baja Sardinia OT
8. **Hotel Pedra Santa** — Arzachena
   - slug: `hotel-pedra-santa-arzachena`
   - indirizzo: Località Pulicinu, 07021 Arzachena OT
9. **Hotel Punta Est** — Arzachena
   - slug: `hotel-punta-est-arzachena`
   - indirizzo: Via i Cedri, 07021 Baja Sardinia OT
10. **Hotel Soleado** — Arzachena
   - slug: `hotel-soleado-arzachena`
   - indirizzo: Via Lido, 19, 07041 Alghero SS
11. **La Jacia Hotel & Resort** — Arzachena
   - slug: `la-jacia-hotel-resort-arzachena`
   - indirizzo: Via Giuseppe Salaris, 07021 Mucchi Bianchi OT
12. **LH Pedraladda Resort** — Arzachena
   - slug: `lh-pedraladda-resort-arzachena`
   - indirizzo: Via Zirulia, 50, 07031 Castelsardo SS
13. **Li Finistreddi Exclusive Country Retreat** — Arzachena
   - slug: `li-finistreddi-exclusive-country-retreat-arzachena`
   - indirizzo: Loc. Micalosu, via le Finestrelle, 07021 Cannigione OT
14. **Romazzino, a Belmond Hotel, Costa Smeralda** — Arzachena
   - slug: `romazzino-a-belmond-hotel-costa-smeralda-arzachena`
   - indirizzo: Via Romazzino, 4, 07021 Arzachena OT
15. **Stazzo Lu Ciaccaru** — Arzachena
   - slug: `stazzo-lu-ciaccaru-arzachena`
   - indirizzo: Via lu Ciaccaru, 19, 07021 Arzachena OT
16. **B&B Treviglio** — Arzago d'Adda
   - slug: `b-b-treviglio-arzago-d-adda`
   - indirizzo: Via dei Facchetti, 2, 24047 Treviglio BG
17. **BED AND BREAKFAST CON BAGNO PRIVATO** — Arzago d'Adda
   - slug: `bed-and-breakfast-con-bagno-privato-arzago-d-adda`
   - indirizzo: Via Martiri della Libertà, 41, 26019 Vailate CR
18. **BV Hotel** — Arzago d'Adda
   - slug: `bv-hotel-arzago-d-adda`
   - indirizzo: Via Provinciale per Verdello, 11, 24053 Brignano Gera d'Adda BG
19. **Castello Visconteo - Hotel e Ricevimenti** — Arzago d'Adda
   - slug: `castello-visconteo-hotel-e-ricevimenti-arzago-d-adda`
   - indirizzo: Piazza Giuseppe, Piazza Generale Domenico Perrucchetti, 3a, 20062 Cassano d'Adda MI
20. **Hotel Ristorante Julia Villa Maggi Ponti** — Arzago d'Adda
   - slug: `hotel-ristorante-julia-villa-maggi-ponti-arzago-d-adda`
   - indirizzo: Via Isola Ponti, 1, 20062 Cassano d'Adda MI
21. **Hotel Treviglio** — Arzago d'Adda
   - slug: `hotel-treviglio-arzago-d-adda`
   - indirizzo: P.le Giuseppe Verdi, 7, 24047 Treviglio BG
22. **Locanda** — Arzago d'Adda
   - slug: `locanda-arzago-d-adda`
   - indirizzo: Via Bergamo, 12, 20060 Gessate MI
23. **Motel Best** — Arzago d'Adda
   - slug: `motel-best-arzago-d-adda`
   - indirizzo: Via Lodi, 2, 24040 Arzago d'Adda BG
24. **Aer Sana Locazione Turistica** — Arzana
   - slug: `aer-sana-locazione-turistica-arzana`
   - indirizzo: Via Don Bosco, 12, 08040 Arzana OG
25. **Affittacamere il Vicoletto Aria Ona** — Arzana
   - slug: `affittacamere-il-vicoletto-aria-ona-arzana`
   - indirizzo: Via Vittorio Emanuele, 25, 08049 Villagrande Strisaili OG
26. **Albergo Villa Selene** — Arzana
   - slug: `albergo-villa-selene-arzana`
   - indirizzo: Coroddis, 08045 Lanusei OG
27. **B&B La Corte Dei Baroni** — Arzana
   - slug: `b-b-la-corte-dei-baroni-arzana`
   - indirizzo: Via Ferdinando Podda, 4, 08040 Loceri OG
28. **Cantos & Sonos** — Arzana
   - slug: `cantos-sonos-arzana`
   - indirizzo: SP56, 08040 Lotzorai OG
29. **Cortemalis Hostel** — Arzana
   - slug: `cortemalis-hostel-arzana`
   - indirizzo: Strada Statale 198 di Seui e Lanusei, 87, 08040 Ilbono OG
30. **Hotel Antica Posada** — Arzana
   - slug: `hotel-antica-posada-arzana`
   - indirizzo: Via Vittorio Emanuele, 7, 08040 Loceri OG
31. **Hotel Belvedere** — Arzana
   - slug: `hotel-belvedere-arzana`
   - indirizzo: Via Umberto, 22, 08045 Lanusei OG
32. **Hotel Dei Tacchi** — Arzana
   - slug: `hotel-dei-tacchi-arzana`
   - indirizzo: Vico III' Dante, 7, 08040 Osini NU
33. **HOTEL MARIE CLAIRE** — Arzana
   - slug: `hotel-marie-claire-arzana`
   - indirizzo: Via dei Ciclamini, 08045 Lanusei OG
34. **Hotel Murru** — Arzana
   - slug: `hotel-murru-arzana`
   - indirizzo: Piazza Roma, 1, 08040 Arzana OG
35. **Hotel Orlando Experience** — Arzana
   - slug: `hotel-orlando-experience-arzana`
   - indirizzo: Localita Santa Barbara, 08049 Villagrande Strisaili OG