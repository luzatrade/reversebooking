# Blocco 263/500 — 35 strutture senza descrizione IT

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

1. **Quader nidi nel verde** — Berzo Inferiore
   - slug: `quader-nidi-nel-verde-berzo-inferiore`
   - indirizzo: Via Quadro, 25040 Bienno BS
2. **RoccaVerde Hotel** — Berzo Inferiore
   - slug: `roccaverde-hotel-berzo-inferiore`
   - indirizzo: Via Follo, 1, 25043 Breno BS
3. **Agriturismo Cà del Manét** — Berzo San Fermo
   - slug: `agriturismo-ca-del-manet-berzo-san-fermo`
   - indirizzo: Via dei Roncati, 13, 24060 San Paolo d'Argon BG
4. **Agriturismo con camere Green Valley** — Berzo San Fermo
   - slug: `agriturismo-con-camere-green-valley-berzo-san-fermo`
   - indirizzo: Via Valle Rossa, 73, 24020 Cene BG
5. **Agriturismo Ippolita Lucchetti** — Berzo San Fermo
   - slug: `agriturismo-ippolita-lucchetti-berzo-san-fermo`
   - indirizzo: Localita, Via Valle Rossa, 24020 Cene BG
6. **Agriturismo Terra e Lago** — Berzo San Fermo
   - slug: `agriturismo-terra-e-lago-berzo-san-fermo`
   - indirizzo: Via Giuseppe Garibaldi, 40, 25030 Paratico BS
7. **Albergo Ristorante della Torre - Wine bar, Enoteca in Val Cavallina** — Berzo San Fermo
   - slug: `albergo-ristorante-della-torre-wine-bar-enoteca-berzo-san-fermo`
   - indirizzo: Piazza Cavour, 26, 24069 Trescore Balneario BG
8. **B&B Gledizia** — Berzo San Fermo
   - slug: `b-b-gledizia-berzo-san-fermo`
   - indirizzo: Via Pietra di Credaro, 27, 24060 Credaro BG
9. **B&B Vinea Prisca Family Resort 1998** — Berzo San Fermo
   - slug: `b-b-vinea-prisca-family-resort-1998-berzo-san-fermo`
   - indirizzo: Via S. Bernardo, 1A, 24069 Cenate Sotto BG
10. **Boutique Hotel Roma 30** — Berzo San Fermo
   - slug: `boutique-hotel-roma-30-berzo-san-fermo`
   - indirizzo: Via Roma, 30, 24069 Trescore Balneario BG
11. **B&B Circuito** — Besana in Brianza
   - slug: `b-b-circuito-besana-in-brianza`
   - indirizzo: Via Roma, 21, 20853 Biassono MB
12. **Birabiro b&b - CIN IT108015C13TGU7TEW** — Besana in Brianza
   - slug: `birabiro-b-b-cin-it108015c13tgu7tew-besana-in-brianza`
   - indirizzo: Via Goito, 29, 20841 Carate Brianza MB
13. **B&b Il Pioppo Antico** — Besano
   - slug: `b-b-il-pioppo-antico-besano`
   - indirizzo: Via dei Tigli, 4, 21059 Viggiù VA
14. **Caroline Hotel** — Besano
   - slug: `caroline-hotel-besano`
   - indirizzo: Via Federico Motta, 4, 21050 Brusimpiano VA
15. **L’Helleboro** — Besano
   - slug: `l-helleboro-besano`
   - indirizzo: Via S. Elia, 88, 21059 Viggiu' VA
16. **Villa Rina** — Besano
   - slug: `villa-rina-besano`
   - indirizzo: Via Roma, 106, 21050 Porto Ceresio VA
17. **Aquarius** — Besate
   - slug: `aquarius-besate`
   - indirizzo: Via Morona, 73, 20090 Trezzano sul Naviglio MI
18. **B&B Magnolia** — Besate
   - slug: `b-b-magnolia-besate`
   - indirizzo: Via De Capitani, 35/2, 20080 Besate MI
19. **Hotel del Parco** — Besate
   - slug: `hotel-del-parco-besate`
   - indirizzo: Corso Milano, 95, 27029 Vigevano PV
20. **Hotel Morimondo** — Besate
   - slug: `hotel-morimondo-besate`
   - indirizzo: Corte dei Cistercensi, 6, 20081 Morimondo MI
21. **Hotel Motel 2000** — Besate
   - slug: `hotel-motel-2000-besate`
   - indirizzo: Viale Cristoforo Colombo, 55, 20090 Trezzano sul Naviglio MI
22. **Agritur Il Granello** — Besenello
   - slug: `agritur-il-granello-besenello`
   - indirizzo: Via Stradone Vecchio, 13, 38019 Ville d'Anaunia TN
23. **Agritur Maso Nello** — Besenello
   - slug: `agritur-maso-nello-besenello`
   - indirizzo: Via Pineta, 3 - loc. Maso Nello Faedo, 38098 S. Michele a/A TN
24. **Agritur Renetta** — Besenello
   - slug: `agritur-renetta-besenello`
   - indirizzo: Via di Campo, 12, 38019 Ville d'Anaunia TN
25. **Agriturismo Ruatti** — Besenello
   - slug: `agriturismo-ruatti-besenello`
   - indirizzo: Frazione Pracorno, 95, 38020 Pracorno TN
26. **Agriturismo Salizzoni** — Besenello
   - slug: `agriturismo-salizzoni-besenello`
   - indirizzo: Via Valentini, 31, 38060 Calliano TN
27. **Azienda Agricola Pratello** — Besenello
   - slug: `azienda-agricola-pratello-besenello`
   - indirizzo: Via Pratello, 26, 25080 Padenghe sul Garda BS
28. **B&B BlueMind** — Besenello
   - slug: `b-b-bluemind-besenello`
   - indirizzo: via Roma, 45, 38060 Besenello TN
29. **Garni Anna** — Besenello
   - slug: `garni-anna-besenello`
   - indirizzo: Via De Gasperi, 69, 38060 Besenello TN
30. **Agriturismo Battibue** — Besenzone
   - slug: `agriturismo-battibue-besenzone`
   - indirizzo: Via Battibue Localita Baselicaduce, 278, 29017 Fiorenzuola d'Arda PC
31. **Agriturismo La Terzola 3.0** — Besenzone
   - slug: `agriturismo-la-terzola-3-0-besenzone`
   - indirizzo: località Terzola, Via S. Protaso, 29017 Fiorenzuola d'Arda PC
32. **Agriturismo Le Colombaie** — Besenzone
   - slug: `agriturismo-le-colombaie-besenzone`
   - indirizzo: Via Bersano, 34, 29010 Besenzone PC
33. **Albergo San Donnino Fidenza** — Besenzone
   - slug: `albergo-san-donnino-fidenza-besenzone`
   - indirizzo: Via Agostino Berenini, 134, 43036 Fidenza PR
34. **B&B Caminata 415** — Besenzone
   - slug: `b-b-caminata-415-besenzone`
   - indirizzo: Loc. Caselle Caminata, 415, 29017 Fiorenzuola d'Arda PC
35. **B&B Casolare Fratina** — Besenzone
   - slug: `b-b-casolare-fratina-besenzone`
   - indirizzo: Vicolo Fratina, 3, 43016 Polesine Zibello PR