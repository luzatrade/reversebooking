# Blocco 387/500 — 35 strutture senza descrizione IT

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

1. **Ace Rooms Vsg** — Campo Calabro
   - slug: `ace-rooms-vsg-campo-calabro`
   - indirizzo: Via Guglielmo Marconi, 22, 89018 Villa San Giovanni RC
2. **Altafiumara Resort & Spa** — Campo Calabro
   - slug: `altafiumara-resort-spa-campo-calabro`
   - indirizzo: Cannitello, Via Petrello, 89018 Villa San Giovanni RC
3. **B&B A due passi dal mare** — Campo Calabro
   - slug: `b-b-a-due-passi-dal-mare-campo-calabro`
   - indirizzo: Via Lungomare Catona 83, 89135 Reggio Calabria RC
4. **B&B Mare Nostrum** — Campo Calabro
   - slug: `b-b-mare-nostrum-campo-calabro`
   - indirizzo: "Via Villaggio Limoneto, 49, 89135 Catona RC
5. **B&Benny** — Campo Calabro
   - slug: `b-benny-campo-calabro`
   - indirizzo: Via Nazionale, 1/D, 89135 Gallico RC
6. **Blu Infinito Bed & Breakfast** — Campo Calabro
   - slug: `blu-infinito-bed-breakfast-campo-calabro`
   - indirizzo: Via Petrello, 85, 89018 Villa San Giovanni RC
7. **LA CONCA Hotel** — Campo Calabro
   - slug: `la-conca-hotel-campo-calabro`
   - indirizzo: Via Solaro Inferiore, 1, 89018 Villa San Giovanni RC
8. **Agriturismo Capriccio di Giove** — Campo di Giove
   - slug: `agriturismo-capriccio-di-giove-campo-di-giove`
   - indirizzo: Via della Stazione, n 8, 67030 Cansano AQ
9. **Agriturismo COSTA DEL GALLO B&B** — Campo di Giove
   - slug: `agriturismo-costa-del-gallo-b-b-campo-di-giove`
   - indirizzo: Via Provinciale per Pacentro Km 4+400, 67030 Sulmona AQ
10. **Agriturismo Primo Campo** — Campo di Giove
   - slug: `agriturismo-primo-campo-campo-di-giove`
   - indirizzo: via Minucia, 67033 Pescocostanzo AQ
11. **Albergo Pensione Fonte Romana** — Campo di Giove
   - slug: `albergo-pensione-fonte-romana-campo-di-giove`
   - indirizzo: Via Caramanico, 9, 67030 Campo di Giove AQ
12. **B&B Casa Antonetti** — Campo di Giove
   - slug: `b-b-casa-antonetti-campo-di-giove`
   - indirizzo: Via Largo Colle, 21/23, 67030 Campo di Giove AQ
13. **B&B Il Vecchio Lupo Campo di Giove** — Campo di Giove
   - slug: `b-b-il-vecchio-lupo-campo-di-giove-campo-di-giove`
   - indirizzo: Via Ricciardi, 3, 67030 Campo di Giove AQ
14. **B&B La Pretèra** — Campo di Giove
   - slug: `b-b-la-pretera-campo-di-giove`
   - indirizzo: Via Dante, 28, 67030 Campo di Giove AQ
15. **Bed and Breakfast “Pastore Abruzzese”** — Campo di Giove
   - slug: `bed-and-breakfast-pastore-abruzzese-campo-di-giove`
   - indirizzo: Via Alessandro Volta, 4, 67030 Campo di Giove AQ
16. **Camping Orsa Minore** — Campo di Giove
   - slug: `camping-orsa-minore-campo-di-giove-2`
   - indirizzo: Via G. Marconi, 16, 67030 Campo di Giove AQ
17. **Camping Orsa Minore** — Campo di Giove
   - slug: `camping-orsa-minore-campo-di-giove`
   - indirizzo: Via Pinete Del Pizzalto, 9, 67030 Campo di Giove AQ
18. **Fattoria Tana della Volpe** — Campo di Giove
   - slug: `fattoria-tana-della-volpe-campo-di-giove`
   - indirizzo: Contrada Castelluccio, 67030 Pacentro AQ
19. **Hotel Abruzzo** — Campo di Giove
   - slug: `hotel-abruzzo-campo-di-giove`
   - indirizzo: Viale Sulmona, 40, 67030 Campo di Giove AQ
20. **Locanda Camilla** — Campo di Giove
   - slug: `locanda-camilla-campo-di-giove`
   - indirizzo: Piazza G. Del Mastro, 67030 Campo di Giove AQ
21. **Masseria la Rocca di Alessandro Pelini** — Campo di Giove
   - slug: `masseria-la-rocca-di-alessandro-pelini-campo-di-giove`
   - indirizzo: Loc. San Pietro, 67030 Pacentro AQ
22. **Pensione Ristorante Belvedere** — Campo di Giove
   - slug: `pensione-ristorante-belvedere-campo-di-giove`
   - indirizzo: via berardino de vincentiis, 36, 67030 Campo di Giove AQ
23. **Terrazzo d'Abruzzo** — Campo di Giove
   - slug: `terrazzo-d-abruzzo-campo-di-giove`
   - indirizzo: Via San Antonio Abate, 29, 66017 Palena CH
24. **Agriturismo Bacherhof** — Campo di Trens/Freienfeld
   - slug: `agriturismo-bacherhof-campo-di-trens-freienfeld`
   - indirizzo: 279, 39049 Val di Vizze BZ
25. **Albergo Bellavista** — Campo di Trens/Freienfeld
   - slug: `albergo-bellavista-campo-di-trens-freienfeld`
   - indirizzo: Località Dosso, 11, 39040 Campo di Trens BZ
26. **Albergo Larch** — Campo di Trens/Freienfeld
   - slug: `albergo-larch-campo-di-trens-freienfeld`
   - indirizzo: Via Brennero, 1, 39040 Campo di Trens BZ
27. **Anett hotel** — Campo di Trens/Freienfeld
   - slug: `anett-hotel-campo-di-trens-freienfeld`
   - indirizzo: Via Giovo, 24, 39040 Racines BZ
28. **Hotel Gasthaus Post** — Campo di Trens/Freienfeld
   - slug: `hotel-gasthaus-post-campo-di-trens-freienfeld`
   - indirizzo: Freienfeld . Südtirol . Italien IT, Innozenz-Barat-Straße, 5, 39040 Campo di Trens in
29. **Hotel Ratschingserhof** — Campo di Trens/Freienfeld
   - slug: `hotel-ratschingserhof-campo-di-trens-freienfeld`
   - indirizzo: Via Stanghe, 4, 39040 Stanghe BZ
30. **Hotel Restaurant Schaurhof** — Campo di Trens/Freienfeld
   - slug: `hotel-restaurant-schaurhof-campo-di-trens-freienfeld`
   - indirizzo: Frazione Novale di Sotto, 20, 39049 Vipiteno BZ
31. **Hotel Sachsenklemme** — Campo di Trens/Freienfeld
   - slug: `hotel-sachsenklemme-campo-di-trens-freienfeld`
   - indirizzo: Via Sacco, 1, 39045 Fortezza BZ
32. **Hotel Saxl** — Campo di Trens/Freienfeld
   - slug: `hotel-saxl-campo-di-trens-freienfeld`
   - indirizzo: Via Brennero, 5, 39040 Campo di Trens BZ
33. **Hotel Schwarzer Adler** — Campo di Trens/Freienfeld
   - slug: `hotel-schwarzer-adler-campo-di-trens-freienfeld`
   - indirizzo: Piazza Città, 39049 Vipiteno BZ
34. **Hotel Sonnenheim** — Campo di Trens/Freienfeld
   - slug: `hotel-sonnenheim-campo-di-trens-freienfeld`
   - indirizzo: Flaines, 203, 39049 Prati BZ
35. **Hotel Tonnerhof** — Campo di Trens/Freienfeld
   - slug: `hotel-tonnerhof-campo-di-trens-freienfeld`
   - indirizzo: Frazione Telves Sopra, 12, 39040 Telves di Sopra BZ