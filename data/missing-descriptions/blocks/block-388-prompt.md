# Blocco 388/500 — 35 strutture senza descrizione IT

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

1. **Hotel Wieser** — Campo di Trens/Freienfeld
   - slug: `hotel-wieser-campo-di-trens-freienfeld`
   - indirizzo: Frazione Stilfes, 55, 39040 Campo di Trens BZ
2. **Leitenhof** — Campo di Trens/Freienfeld
   - slug: `leitenhof-campo-di-trens-freienfeld`
   - indirizzo: Afens 279/A, 39049 Val di Vizze BZ
3. **Naturhotel Rainer** — Campo di Trens/Freienfeld
   - slug: `naturhotel-rainer-campo-di-trens-freienfeld`
   - indirizzo: Jaufental, Mittertal 48, 39040 Racines BZ
4. **Pension Wiesenhof** — Campo di Trens/Freienfeld
   - slug: `pension-wiesenhof-campo-di-trens-freienfeld`
   - indirizzo: Località Fuldres, 23, 39040 Fuldres BZ
5. **Romantik Hotel & Restaurant Stafler** — Campo di Trens/Freienfeld
   - slug: `romantik-hotel-restaurant-stafler-campo-di-trens-freienfeld`
   - indirizzo: Via Mules, 10, 39040 Vipiteno BZ
6. **Sporthotel Zoll** — Campo di Trens/Freienfeld
   - slug: `sporthotel-zoll-campo-di-trens-freienfeld`
   - indirizzo: Via Brennero, 48/a, 39049 Vipiteno BZ
7. **Wirtshaus & Hotel Lener** — Campo di Trens/Freienfeld
   - slug: `wirtshaus-hotel-lener-campo-di-trens-freienfeld`
   - indirizzo: Via Blieger, 2, 39040 Campo di Trens BZ
8. **Agriturismo Gli Orti di Bertin : Camping e B&B e Centro Eventi in Liguria** — Campo Ligure
   - slug: `agriturismo-gli-orti-di-bertin-camping-e-b-b-e-c-campo-ligure`
   - indirizzo: Via Valle Ponzema, 175, 16013 Campo Ligure GE
9. **Albergo Eco del Mare** — Campo Ligure
   - slug: `albergo-eco-del-mare-campo-ligure`
   - indirizzo: Via Madonnina Inferiore, 5, 16016 Cogoleto GE
10. **Albergo Villa Margherita** — Campo Ligure
   - slug: `albergo-villa-margherita-campo-ligure`
   - indirizzo: Via Francia, 39, 16010 Tiglieto GE
11. **CASA DEL PELLEGRINO** — Campo Ligure
   - slug: `casa-del-pellegrino-campo-ligure`
   - indirizzo: Piazza Santuario della Guardia, 30, 16014 Ceranesi GE
12. **Hotel Ristorante La Pineta** — Campo Ligure
   - slug: `hotel-ristorante-la-pineta-campo-ligure`
   - indirizzo: Via al Deserto, 2, 16016 Cogoleto GE
13. **Hotel Serafino** — Campo Ligure
   - slug: `hotel-serafino-campo-ligure`
   - indirizzo: Via Verona, 8, 16152 Genova GE
14. **Hotel Sirenella** — Campo Ligure
   - slug: `hotel-sirenella-campo-ligure`
   - indirizzo: Via Don Giovanni Verità, 4/R, 16158 Genova GE
15. **Il Glicine B&B Molare** — Campo Ligure
   - slug: `il-glicine-b-b-molare-campo-ligure`
   - indirizzo: Aperto da Marzo a Dicembre, CIN IT006095C1ESLCFTMZ, Via Michele Bonaria, 2, 15074 Molare AL
16. **La Buscarella** — Campo Ligure
   - slug: `la-buscarella-campo-ligure`
   - indirizzo: Via Pian del Rosso, 23, 16013 Campo Ligure GE
17. **Nonno Toni** — Campo Ligure
   - slug: `nonno-toni-campo-ligure`
   - indirizzo: Via della Giustizia, 8, 16013 Campo Ligure GE
18. **Rifugio Nido del Biancone** — Campo Ligure
   - slug: `rifugio-nido-del-biancone-campo-ligure`
   - indirizzo: SP165, 15060 Capanne di Marcarolo AL
19. **Turchino** — Campo Ligure
   - slug: `turchino-campo-ligure`
   - indirizzo: Via Isola Giugno, n°109, 16013 Campo Ligure GE
20. **Club Hotel Marina 2** — Campo nell'Elba
   - slug: `club-hotel-marina-2-campo-nell-elba`
   - indirizzo: Traversa di Via Segagnana, 245, 57034 Campo nell'Elba LI
21. **Eco Hotel Montemerlo** — Campo nell'Elba
   - slug: `eco-hotel-montemerlo-campo-nell-elba`
   - indirizzo: Via del Canaletto, 240, 57034 Fetovaia LI
22. **Elba Vibe Smart Hotel** — Campo nell'Elba
   - slug: `elba-vibe-smart-hotel-campo-nell-elba`
   - indirizzo: Via per Portoferraio, 2978, 57034 Campo nell'Elba LI
23. **Hotel Anna** — Campo nell'Elba
   - slug: `hotel-anna-campo-nell-elba`
   - indirizzo: via del canaletto, località Fetovaia, 215/c, 57034 Fetovaia LI
24. **Hotel b&b La Conchiglia** — Campo nell'Elba
   - slug: `hotel-b-b-la-conchiglia-campo-nell-elba`
   - indirizzo: Loc. Cavoli, 57034 Campo nell'Elba LI
25. **Hotel da Fine** — Campo nell'Elba
   - slug: `hotel-da-fine-campo-nell-elba`
   - indirizzo: Via Vallebuia, 4, 57034 Seccheto LI
26. **Hotel Eden Park** — Campo nell'Elba
   - slug: `hotel-eden-park-campo-nell-elba`
   - indirizzo: Via Pian di Mezzo, 917, 57034 Marina di Campo LI
27. **Hotel Elba** — Campo nell'Elba
   - slug: `hotel-elba-campo-nell-elba`
   - indirizzo: Via Vecchia Aurelia, 301, 57016 Rosignano Marittimo LI
28. **HOTEL GALLI - WELLNESS & SPA** — Campo nell'Elba
   - slug: `hotel-galli-wellness-spa-campo-nell-elba`
   - indirizzo: Via Fetovaia, 115, 57034 Campo nell'Elba LI
29. **Hotel la Stella** — Campo nell'Elba
   - slug: `hotel-la-stella-campo-nell-elba`
   - indirizzo: Via della Costa, 6639, 57034 Seccheto LI
30. **Hotel Lilly** — Campo nell'Elba
   - slug: `hotel-lilly-campo-nell-elba`
   - indirizzo: Viale degli Etruschi, 333, 57034 Marina di Campo LI
31. **Hotel Lo Scirocco** — Campo nell'Elba
   - slug: `hotel-lo-scirocco-campo-nell-elba`
   - indirizzo: Via Fetovaia, 84, 57034 Campo nell'Elba LI
32. **Hotel Mirage - Marina di Campo** — Campo nell'Elba
   - slug: `hotel-mirage-marina-di-campo-campo-nell-elba`
   - indirizzo: Viale degli Etruschi, 405, 57034 Campo nell'Elba LI
33. **Hotel Santa Caterina - Isola d'Elba** — Campo nell'Elba
   - slug: `hotel-santa-caterina-isola-d-elba-campo-nell-elba`
   - indirizzo: Viale Elba, 85, 57034 Marina di Campo LI
34. **Hotel Sardi** — Campo nell'Elba
   - slug: `hotel-sardi-campo-nell-elba`
   - indirizzo: Via del Maestrale, 1, 57030 Pomonte LI
35. **Hotel Villa Etrusca** — Campo nell'Elba
   - slug: `hotel-villa-etrusca-campo-nell-elba`
   - indirizzo: Viale degli Etruschi, 283, 57034 Campo nell'Elba LI