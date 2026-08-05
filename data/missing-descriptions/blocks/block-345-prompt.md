# Blocco 345/500 — 35 strutture senza descrizione IT

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

1. **Casa Sunrise - The Guest House** — Burgio
   - slug: `casa-sunrise-the-guest-house-burgio`
   - indirizzo: Via Modigliani, 32, 92019 Sciacca AG
2. **Hibrido Boutique Hotel & Spa** — Burgio
   - slug: `hibrido-boutique-hotel-spa-burgio`
   - indirizzo: Via Caricatore, 35, 92019 Sciacca AG
3. **Hotel Melqart** — Burgio
   - slug: `hotel-melqart-burgio`
   - indirizzo: Via Mulini, 11/12/14, 92019 Sciacca AG
4. **La Paloma Blanca Hotel** — Burgio
   - slug: `la-paloma-blanca-hotel-burgio`
   - indirizzo: Via Figuli, 5, 92019 Sciacca AG
5. **Le Casette del Porto** — Burgio
   - slug: `le-casette-del-porto-burgio`
   - indirizzo: Lungomare Cristoforo Colombo, 23, 92019 Sciacca AG
6. **Macramè Fazello** — Burgio
   - slug: `macrame-fazello-burgio`
   - indirizzo: Corso Tommaso Fazello, 97, 92019 Sciacca AG
7. **NottInCentro Guest House** — Burgio
   - slug: `nottincentro-guest-house-burgio`
   - indirizzo: Via Conzo, 45, 92019 Sciacca AG
8. **RoccaRegina Hotel** — Burgio
   - slug: `roccaregina-hotel-burgio`
   - indirizzo: Lungomare Cristoforo Colombo, 13, 92019 Sciacca AG
9. **Bedroom da Zio Tore - Affitti Brevi** — Burgos
   - slug: `bedroom-da-zio-tore-affitti-brevi-burgos`
   - indirizzo: Via Mattei, 08020 Ottana NU
10. **Agriturismo Il Torrione** — Buriasco
   - slug: `agriturismo-il-torrione-buriasco`
   - indirizzo: Strada del, Strada Galoppatoio, 20, 10064 Pinerolo TO
11. **Albergo Regina** — Buriasco
   - slug: `albergo-regina-buriasco`
   - indirizzo: Piazza Luigi Barbieri, 22, 10064 Pinerolo TO
12. **Bed And Breakfast la Taupinière** — Buriasco
   - slug: `bed-and-breakfast-la-taupiniere-buriasco`
   - indirizzo: Via Maestra Riva, 124, 10064 Riva TO
13. **Green Class Hotel Candiolo** — Buriasco
   - slug: `green-class-hotel-candiolo-buriasco`
   - indirizzo: Via Sestriere, 12, 10060 Candiolo TO
14. **Hotel Residence VigOne** — Buriasco
   - slug: `hotel-residence-vigone-buriasco`
   - indirizzo: Via Montagna, 3, 10067 Vigone TO
15. **Residenza ...la beccata - Società Agricola BEA s.s.** — Buriasco
   - slug: `residenza-la-beccata-societa-agricola-bea-s-s-buriasco`
   - indirizzo: Str. Santa Caterina, 8, 10064 Pinerolo TO
16. **Tenuta La Cascinetta** — Buriasco
   - slug: `tenuta-la-cascinetta-buriasco`
   - indirizzo: Regione Rena, 10060 Buriasco TO
17. **Cascina Donda Agriturismo** — Buronzo
   - slug: `cascina-donda-agriturismo-buronzo`
   - indirizzo: Str. Vicinale Battiana Corte, 13853 Lessona BI
18. **Agriturismo La Costa** — Busalla
   - slug: `agriturismo-la-costa-busalla`
   - indirizzo: Via Monte Pasubio, 55, 16018 Mignanego GE
19. **Agriturismo Le Giare** — Busalla
   - slug: `agriturismo-le-giare-busalla`
   - indirizzo: Via Carpeneli, 17, 16015 Casella GE
20. **Agriturismo Terra e Cielo** — Busalla
   - slug: `agriturismo-terra-e-cielo-busalla`
   - indirizzo: Via Bellavista, 27, 16010 Serra Riccò GE
21. **Albergo Birra** — Busalla
   - slug: `albergo-birra-busalla`
   - indirizzo: Località Birra, 3, 16010 Savignone GE
22. **Albergo Garré** — Busalla
   - slug: `albergo-garre-busalla`
   - indirizzo: Località Prelo, 56/A, 16010 San Bartolomeo GE
23. **Albergo Gelsomino** — Busalla
   - slug: `albergo-gelsomino-busalla`
   - indirizzo: Piazza San Rocco, 4, 16010 Serra Riccò GE
24. **Albergo Ristorante Vittoria** — Busalla
   - slug: `albergo-ristorante-vittoria-busalla`
   - indirizzo: Via Vittorio Veneto, 177, 16012 Busalla GE
25. **B&B A o Soâ** — Busalla
   - slug: `b-b-a-o-soa-busalla`
   - indirizzo: Via Broglio, 11, 16010 Savignone GE
26. **B&B Casa Galletti** — Busalla
   - slug: `b-b-casa-galletti-busalla`
   - indirizzo: Via Martiri di Voltaggio, 22, 16012 Busalla GE
27. **B&B e Home Restaurant Crocevia del Sale** — Busalla
   - slug: `b-b-e-home-restaurant-crocevia-del-sale-busalla`
   - indirizzo: Via Crocefieschi, 9, 16015 Casella GE
28. **B&B Il Poggio** — Busalla
   - slug: `b-b-il-poggio-busalla`
   - indirizzo: Via Vecchia, 16012 Salvarezza GE
29. **B&B La Moggia** — Busalla
   - slug: `b-b-la-moggia-busalla`
   - indirizzo: V. Giuseppe Levrero, 4, 16012 Busalla GE
30. **Hotel Balbi** — Busalla
   - slug: `hotel-balbi-busalla`
   - indirizzo: Via Balbi, 21 nero, 16126 Genova GE
31. **Hotel Castello Miramare** — Busalla
   - slug: `hotel-castello-miramare-busalla`
   - indirizzo: Via Pegli, 2, 16156 Genova GE
32. **Hotel Mediterranee** — Busalla
   - slug: `hotel-mediterranee-busalla`
   - indirizzo: Lungomare di Pegli, 69, 16156 Genova GE
33. **L'Ostelliere Hotel** — Busalla
   - slug: `l-ostelliere-hotel-busalla`
   - indirizzo: Frazione Monterotondo, 56, 15066 Gavi AL
34. **Palazzo Cicala** — Busalla
   - slug: `palazzo-cicala-busalla`
   - indirizzo: Piazza delle Scuole Pie, 10, 16123 Genova GE
35. **AQVAE Unconventional Country House** — Busano
   - slug: `aqvae-unconventional-country-house-busano`
   - indirizzo: Borgata S. Grato, 2, 10080 Oglianico TO