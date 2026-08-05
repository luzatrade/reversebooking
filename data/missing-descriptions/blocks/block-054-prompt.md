# Blocco 54/500 — 35 strutture senza descrizione IT

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

1. **Albergo Ristorante Torino** — Albenga
   - slug: `albergo-ristorante-torino-albenga`
   - indirizzo: Viale Italia, 25, 17031 Albenga SV
2. **Albium Hotel** — Albenga
   - slug: `albium-hotel-albenga`
   - indirizzo: Lungomare Cristoforo Colombo, 1, 17031 Albenga SV
3. **B&B Elisir** — Albenga
   - slug: `b-b-elisir-albenga`
   - indirizzo: Via Leonardo Da Vinci, 28, 17031 Albenga SV
4. **B&B Le Terrazze** — Albenga
   - slug: `b-b-le-terrazze-albenga`
   - indirizzo: Via della Chiesa, 6, 17031 Bastia SV
5. **Hotel Pescetto** — Albenga
   - slug: `hotel-pescetto-albenga`
   - indirizzo: Via Dalmazia, 8, 17031 Albenga SV
6. **La Corte Albenga** — Albenga
   - slug: `la-corte-albenga-albenga`
   - indirizzo: Via Trieste, 13, 17031 Albenga SV
7. **La Dimora Del Conte Bracco B.** — Albenga
   - slug: `la-dimora-del-conte-bracco-b-albenga`
   - indirizzo: Piazza S. Francesco, 39, 17031 Albenga SV
8. **La Gallina nel Castello citr 009002** — Albenga
   - slug: `la-gallina-nel-castello-citr-009002-albenga`
   - indirizzo: 17031 Albenga SV
9. **Ricaroka Hotel Ristorante Pizzeria** — Albenga
   - slug: `ricaroka-hotel-ristorante-pizzeria-albenga`
   - indirizzo: Viale dei Mille, 74/76, 17031 Albenga SV
10. **Salvia e Rosmarino - Affittacamere in Liguria** — Albenga
   - slug: `salvia-e-rosmarino-affittacamere-in-liguria-albenga`
   - indirizzo: Via Crose, 51, 17038 Villanova d'Albenga SV
11. **solemare** — Albenga
   - slug: `solemare-albenga`
   - indirizzo: Lungomare Cristoforo Colombo, 15, 17031 Albenga SV
12. **Stazione de Sole** — Albenga
   - slug: `stazione-de-sole-albenga`
   - indirizzo: Via Monsignore Belgrano, 4, 17031 Albenga SV
13. **Villamir** — Albenga
   - slug: `villamir-albenga`
   - indirizzo: Regione Carrai, 9, 17031 Albenga SV
14. **Agriturismo Alpi** — Albera Ligure
   - slug: `agriturismo-alpi-albera-ligure`
   - indirizzo: Frazione Borassi, 46, 15060 Roccaforte Ligure AL
15. **Agriturismo La Sereta** — Albera Ligure
   - slug: `agriturismo-la-sereta-albera-ligure`
   - indirizzo: Località Sereta, 47/A, 15060 Fraconalto AL
16. **Albergo Capannette di Pei** — Albera Ligure
   - slug: `albergo-capannette-di-pei-albera-ligure`
   - indirizzo: Localita' Capannette, 26, 29020 Zerba PC
17. **Albergo Ristorante Locanda Belvedere Pey** — Albera Ligure
   - slug: `albergo-ristorante-locanda-belvedere-pey-albera-ligure`
   - indirizzo: Località Pey, 22, 29020 Zerba PC
18. **B&B Casa Adele** — Albera Ligure
   - slug: `b-b-casa-adele-albera-ligure`
   - indirizzo: Via G. Brodolini, 18, 15069 Serravalle Scrivia AL
19. **B&B Forest View** — Albera Ligure
   - slug: `b-b-forest-view-albera-ligure`
   - indirizzo: Frazione Sottovalle, 59, 15061 Arquata Scrivia AL
20. **B&B Griffondoro** — Albera Ligure
   - slug: `b-b-griffondoro-albera-ligure`
   - indirizzo: Via Santa Caterina, 26, 15060 Cantalupo Ligure AL
21. **B&B Il Podestà** — Albera Ligure
   - slug: `b-b-il-podesta-albera-ligure`
   - indirizzo: Via Gatti, 16, Via Gatti, 14, 15050 Garbagna AL
22. **B&B La Collina dei ciliegi** — Albera Ligure
   - slug: `b-b-la-collina-dei-ciliegi-albera-ligure`
   - indirizzo: Via Sardigliano, 20, 15063 Cassano Spinola AL
23. **Casa borgata** — Albera Ligure
   - slug: `casa-borgata-albera-ligure`
   - indirizzo: Via Borgata, 15060 Variana AL
24. **Casa Vicino** — Albera Ligure
   - slug: `casa-vicino-albera-ligure`
   - indirizzo: frazione Pallavicino, 22, 15060 Cantalupo Ligure AL
25. **Dulcius ex asperis Bed & breakfast** — Albera Ligure
   - slug: `dulcius-ex-asperis-bed-breakfast-albera-ligure`
   - indirizzo: Località Casa Lucchelli, 27050 Casa Zanré-lucchelli PV
26. **Hotel Ristorante Da Bruno** — Albera Ligure
   - slug: `hotel-ristorante-da-bruno-albera-ligure`
   - indirizzo: Loc. San Nazzaro, 11, 15060 Albera Ligure AL
27. **I Cappuccini Wellness** — Albera Ligure
   - slug: `i-cappuccini-wellness-albera-ligure`
   - indirizzo: Via Alcide de Gasperi, 3, 27057 Varzi PV
28. **Il fienile b&b** — Albera Ligure
   - slug: `il-fienile-b-b-albera-ligure`
   - indirizzo: Via Montespineto, 10, 15060 Stazzano AL
29. **L'Antica dimora sul fiume** — Albera Ligure
   - slug: `l-antica-dimora-sul-fiume-albera-ligure`
   - indirizzo: Via Vecchia Centro, 7, 15060 Astrata AL
30. **La Casa di Nonna Fò** — Albera Ligure
   - slug: `la-casa-di-nonna-fo-albera-ligure`
   - indirizzo: 2, Via Cesare Anfosso, 30, 15060 Voltaggio AL
31. **La Casa di Nonna Pina** — Albera Ligure
   - slug: `la-casa-di-nonna-pina-albera-ligure`
   - indirizzo: frazione Vigo 13, 15060 Albera Ligure AL
32. **La Corte Di Nando** — Albera Ligure
   - slug: `la-corte-di-nando-albera-ligure`
   - indirizzo: SP186, 8, 27057 Varzi PV
33. **Villart** — Albera Ligure
   - slug: `villart-albera-ligure`
   - indirizzo: Via IV Novembre, 11, 15050 Villaromagnano AL
34. **Arboris Belli Hotel** — Alberobello
   - slug: `arboris-belli-hotel-alberobello`
   - indirizzo: Via Indipendenza, 49/c, 70011 Alberobello BA
35. **Casa Albergo Sant'Antonio** — Alberobello
   - slug: `casa-albergo-sant-antonio-alberobello`
   - indirizzo: Via Isonzo, 8A, 70011 Alberobello BA