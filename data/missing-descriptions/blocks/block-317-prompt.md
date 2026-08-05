# Blocco 317/500 — 35 strutture senza descrizione IT

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

1. **Appartamenti Kameriot** — Braies/Prags
   - slug: `appartamenti-kameriot-braies-prags`
   - indirizzo: Frazione Braies di Fuori, 70, 39030 Braies BZ
2. **Bruggerhof** — Braies/Prags
   - slug: `bruggerhof-braies-prags`
   - indirizzo: Frazione Braies di Fuori, 34, 39030 Braies BZ
3. **Försterhaus** — Braies/Prags
   - slug: `forsterhaus-braies-prags`
   - indirizzo: Loc. Braies di Dentro, 12, 39030 Braies BZ
4. **Garni Bergblick** — Braies/Prags
   - slug: `garni-bergblick-braies-prags`
   - indirizzo: Loc. Braies di Dentro, 2, 39030 Braies BZ
5. **Gasthof Dolomiten** — Braies/Prags
   - slug: `gasthof-dolomiten-braies-prags`
   - indirizzo: Schmieden 39, 39030 Braies BZ
6. **Gasthof Tuscherhof** — Braies/Prags
   - slug: `gasthof-tuscherhof-braies-prags`
   - indirizzo: Frazione Braies di Fuori, 72, 39030 Segheria BZ
7. **Haus Steiner** — Braies/Prags
   - slug: `haus-steiner-braies-prags`
   - indirizzo: Loc. Braies di Dentro, 52, 39030 Ferrara BZ
8. **Hotel Asterbel** — Braies/Prags
   - slug: `hotel-asterbel-braies-prags`
   - indirizzo: Frazione Braies di Fuori, 88, 39030 Braies BZ
9. **Hotel Edel.Weiss** — Braies/Prags
   - slug: `hotel-edel-weiss-braies-prags`
   - indirizzo: Frazione Braies di Fuori, 65, 39030 Braies BZ
10. **Hotel Erika** — Braies/Prags
   - slug: `hotel-erika-braies-prags`
   - indirizzo: Frazione Braies di Fuori, 66, 39030 Braies BZ
11. **Hotel Lago di Braies** — Braies/Prags
   - slug: `hotel-lago-di-braies-braies-prags`
   - indirizzo: St.Veit, 27, 39030 Braies BZ
12. **Hotel Pragserhof** — Braies/Prags
   - slug: `hotel-pragserhof-braies-prags`
   - indirizzo: St. Veit 35, 39030 Braies BZ
13. **Hotel Trenker** — Braies/Prags
   - slug: `hotel-trenker-braies-prags`
   - indirizzo: St.Veit, 13, 39030 Braies BZ
14. **Moserhof Agriturismo Refugium** — Braies/Prags
   - slug: `moserhof-agriturismo-refugium-braies-prags`
   - indirizzo: Loc. Braies di Dentro, 31, 39030 Braies BZ
15. **Pension Turmchalet** — Braies/Prags
   - slug: `pension-turmchalet-braies-prags`
   - indirizzo: Außerprags, 29, 39030 Prags, Autonome Provinz Bozen - Südtirol
16. **Residence Bergheim ***** — Braies/Prags
   - slug: `residence-bergheim-braies-prags`
   - indirizzo: Loc. Braies di Dentro, 37, 39030 Braies BZ
17. **romy`s b&b** — Braies/Prags
   - slug: `romy-s-b-b-braies-prags`
   - indirizzo: Frazione Braies di Fuori, 28/B, 39030 Braies BZ
18. **Steinwandterhof** — Braies/Prags
   - slug: `steinwandterhof-braies-prags`
   - indirizzo: St.Veit, 17, 39030 Braies BZ
19. **Agriturismo Cascina Lella** — Brallo di Pregola
   - slug: `agriturismo-cascina-lella-brallo-di-pregola`
   - indirizzo: loc. Lella, 7, 27057 Varzi PV
20. **Agriturismo Sulla Via Del Sale** — Brallo di Pregola
   - slug: `agriturismo-sulla-via-del-sale-brallo-di-pregola`
   - indirizzo: Loc. Piani di Lesima, 27050 Prodongo PV
21. **Albergo Ristorante Alpegiani Piercarlo** — Brallo di Pregola
   - slug: `albergo-ristorante-alpegiani-piercarlo-brallo-di-pregola`
   - indirizzo: Frazione Bralello, 42, 27050 Brallo di Pregola PV
22. **Albergo Ristorante La Pernice Rossa** — Brallo di Pregola
   - slug: `albergo-ristorante-la-pernice-rossa-brallo-di-pregola`
   - indirizzo: Località Roncassi, 27050, 27050 Menconico PV
23. **Altarelli B&B** — Brallo di Pregola
   - slug: `altarelli-b-b-brallo-di-pregola`
   - indirizzo: Località Altarelli, 9, 29022 Bobbio PC
24. **Appennino Pavese Albergo Ristorante** — Brallo di Pregola
   - slug: `appennino-pavese-albergo-ristorante-brallo-di-pregola`
   - indirizzo: Piazza Municipio, 1/5, 27050 Brallo di Pregola PV
25. **B&B Gli Acini** — Brallo di Pregola
   - slug: `b-b-gli-acini-brallo-di-pregola`
   - indirizzo: Piazza Case Nuove, 20, 27040 Pietra De' Giorgi PV
26. **B&B Il Cappon Magro Bobbio** — Brallo di Pregola
   - slug: `b-b-il-cappon-magro-bobbio-brallo-di-pregola`
   - indirizzo: Via G. Mazzini, 33, 29022 Bobbio PC
27. **B&B La Casa nel Bosco** — Brallo di Pregola
   - slug: `b-b-la-casa-nel-bosco-brallo-di-pregola`
   - indirizzo: 27050 Pregola PV
28. **B&B Surus** — Brallo di Pregola
   - slug: `b-b-surus-brallo-di-pregola`
   - indirizzo: SP186, 27050 Brallo di Pregola PV
29. **Bed and Breakfast Balli coi Lupi** — Brallo di Pregola
   - slug: `bed-and-breakfast-balli-coi-lupi-brallo-di-pregola`
   - indirizzo: Fraz. Santa Cristina, 17/B, 27057 Varzi PV
30. **Sport Hotel Prodongo** — Brallo di Pregola
   - slug: `sport-hotel-prodongo-brallo-di-pregola`
   - indirizzo: Loc. Piani di Lesima, 1, 27050 Prodongo PV
31. **Sunny House** — Brallo di Pregola
   - slug: `sunny-house-brallo-di-pregola`
   - indirizzo: 55, 27050 Pregola PV
32. **B&B A un passo dal mare** — Brancaleone
   - slug: `b-b-a-un-passo-dal-mare-brancaleone`
   - indirizzo: Via Romanda, 89035 Bova Marina RC
33. **Bed and Breakfast Sunrise** — Brancaleone
   - slug: `bed-and-breakfast-sunrise-brancaleone`
   - indirizzo: Via Lungomare, snc, 89036 Brancaleone RC
34. **Pensione Ristorante Bar 2001** — Brancaleone
   - slug: `pensione-ristorante-bar-2001-brancaleone`
   - indirizzo: Via Zelante, 89036 Brancaleone Marina RC
35. **Villa Beatrice** — Brancaleone
   - slug: `villa-beatrice-brancaleone`
   - indirizzo: Via Zelante, 50, 89036 Brancaleone RC