# Blocco 164/500 — 35 strutture senza descrizione IT

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

1. **Corte Di Emma** — Arzignano
   - slug: `corte-di-emma-arzignano`
   - indirizzo: V. Vignaga, 37, 36071 Arzignano VI
2. **el Canfin** — Arzignano
   - slug: `el-canfin-arzignano`
   - indirizzo: Contrada Frigon, 34, 36054 Montebello Vicentino VI
3. **El Piron di Giuliana Faggiana** — Arzignano
   - slug: `el-piron-di-giuliana-faggiana-arzignano`
   - indirizzo: Via Giovanni XXIII Papa, 2, 36070 San Pietro Mussolino VI
4. **Hotel Ca Masieri** — Arzignano
   - slug: `hotel-ca-masieri-arzignano`
   - indirizzo: Via Masieri, 16, 36070 Trissino VI
5. **Hotel Zenari** — Arzignano
   - slug: `hotel-zenari-arzignano`
   - indirizzo: Via B. Isnardo, 15/17, 36072 Chiampo VI
6. **La Pietra Nera** — Arzignano
   - slug: `la-pietra-nera-arzignano`
   - indirizzo: Via Ranfani, 5, 37035 San Giovanni Ilarione VR
7. **Locanda Castagna** — Arzignano
   - slug: `locanda-castagna-arzignano`
   - indirizzo: Via Rio Torto, 50, 36071 Arzignano VI
8. **Ristorante Trattoria Albergo Isetta** — Arzignano
   - slug: `ristorante-trattoria-albergo-isetta-arzignano`
   - indirizzo: Contrada Pederiva, 96, 36044 Grancona VI
9. **Affittacamere Il Centenario** — Ascea
   - slug: `affittacamere-il-centenario-ascea`
   - indirizzo: Via XXIV Maggio, 1, 84046 Ascea SA
10. **Agriturismo il Pozzo** — Ascea
   - slug: `agriturismo-il-pozzo-ascea`
   - indirizzo: Via Ardisani, 29, 84040 Casal Velino SA
11. **Agriturismo Terra di Elea** — Ascea
   - slug: `agriturismo-terra-di-elea-ascea`
   - indirizzo: Via Stampella 6 - S.P. 87, 84046 Ascea SA
12. **Albergo Elea** — Ascea
   - slug: `albergo-elea-ascea`
   - indirizzo: Corso Elea, 69, 84046 Marina di Ascea SA
13. **B&B La Chianarella** — Ascea
   - slug: `b-b-la-chianarella-ascea`
   - indirizzo: Via Porta Rosa, 17, 84046 Marina di Ascea SA
14. **Casa del Sole** — Ascea
   - slug: `casa-del-sole-ascea`
   - indirizzo: 84052 Località Paradiso SA
15. **DonnaRumma Hotel** — Ascea
   - slug: `donnarumma-hotel-ascea`
   - indirizzo: Via Nettuno, 1-5, 84040 Marina di Casal Velino SA
16. **Hotel Europa** — Ascea
   - slug: `hotel-europa-ascea`
   - indirizzo: Via Velia, 2, 84040 Marina di Casal Velino SA
17. **Hotel Il Porto - Trattoria del Mar** — Ascea
   - slug: `hotel-il-porto-trattoria-del-mar-ascea`
   - indirizzo: Via Angelo Lista, 42, 84040 Marina di Casal Velino SA
18. **Hotel Porta Rosa** — Ascea
   - slug: `hotel-porta-rosa-ascea`
   - indirizzo: Viale Magna Graecia, 84046 Marina di Ascea SA
19. **Hotel Villa Mar@dona** — Ascea
   - slug: `hotel-villa-mar-dona-ascea`
   - indirizzo: Via Nettuno, 84046 Ascea SA
20. **HOTEL VILLAGGIO COPACABANA** — Ascea
   - slug: `hotel-villaggio-copacabana-ascea`
   - indirizzo: Via Isola, 84040 Marina di Casal Velino SA
21. **Il Paradiso di Hyele** — Ascea
   - slug: `il-paradiso-di-hyele-ascea`
   - indirizzo: Via contrada pennino,9, 84046 Ascea SA
22. **L'Oasi del Fauno Country House** — Ascea
   - slug: `l-oasi-del-fauno-country-house-ascea`
   - indirizzo: Via Varco della Spina, 84040 Casal Velino SA
23. **La Casa sul Blu** — Ascea
   - slug: `la-casa-sul-blu-ascea`
   - indirizzo: Via Praiano, 12, 84066 Pisciotta SA
24. **MagicoMar Hotel** — Ascea
   - slug: `magicomar-hotel-ascea`
   - indirizzo: Viale Esperia, 84046 Marina di Ascea SA
25. **Marulivo Boutique Hotel** — Ascea
   - slug: `marulivo-boutique-hotel-ascea`
   - indirizzo: Via Castello, 21, 84066 Pisciotta SA
26. **Olimpia Cilento Resort** — Ascea
   - slug: `olimpia-cilento-resort-ascea`
   - indirizzo: Viale delle Sirene, 84046 Marina di Ascea SA
27. **Palazzo del Baglivo Hotel & Spa Cilento** — Ascea
   - slug: `palazzo-del-baglivo-hotel-spa-cilento-ascea`
   - indirizzo: Via Vittoria 16 Frazione Casigliano, 84074 Mercato Cilento SA
28. **Villa Laura Residence Hotel Apartments & Studios** — Ascea
   - slug: `villa-laura-residence-hotel-apartments-studios-ascea`
   - indirizzo: Via Dionisio, 84046 Marina di Ascea SA
29. **Acetylene B&B** — Asciano
   - slug: `acetylene-b-b-asciano`
   - indirizzo: Via Provinciale Nord, 7/int. 5, 53040 Rapolano Terme SI
30. **Agriturismo Dipinture** — Asciano
   - slug: `agriturismo-dipinture-asciano`
   - indirizzo: Via Grottoli, 36, 53041 Asciano SI
31. **Agriturismo Il Molinello** — Asciano
   - slug: `agriturismo-il-molinello-asciano`
   - indirizzo: Molinello, 53041 Asciano SI
32. **Agriturismo Monte Oliveto Maggiore** — Asciano
   - slug: `agriturismo-monte-oliveto-maggiore-asciano`
   - indirizzo: Via delle Piazze, 14, 53041 Chiusure SI
33. **Agriturismo Paradiso Di Rughi Fabio** — Asciano
   - slug: `agriturismo-paradiso-di-rughi-fabio-asciano`
   - indirizzo: Str. Vicinale del Piano, 32, 53041 Asciano SI
34. **Alle Terme B&B Bio Rooms** — Asciano
   - slug: `alle-terme-b-b-bio-rooms-asciano`
   - indirizzo: Via S. Sebastiano, 27, 53040 Rapolano Terme SI
35. **Antico Granaione B&B Residenza d'Epoca IT052026B9LCNLYMEY** — Asciano
   - slug: `antico-granaione-b-b-residenza-d-epoca-it052026b-asciano`
   - indirizzo: Via Fratelli Rosselli, 53040 Serre di Rapolano SI