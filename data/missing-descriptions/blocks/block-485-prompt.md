# Blocco 485/500 — 35 strutture senza descrizione IT

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

1. **White Suite B&B Lecce** — Frazzan�
   - slug: `white-suite-b-b-lecce-frazzan`
   - indirizzo: Via Antonello Coniger, 5, 73100 Lecce LE
2. **Affittacamere ilsoleventiquattrore** — Furci Siculo
   - slug: `affittacamere-ilsoleventiquattrore-furci-siculo`
   - indirizzo: Via Pasquale Simone Neri, 98023 Furci Siculo ME
3. **La Zagara B&B** — Furci Siculo
   - slug: `la-zagara-b-b-furci-siculo`
   - indirizzo: Via Manzoni, 5, 98023 Furci Siculo ME
4. **Quattro Venti** — Furci Siculo
   - slug: `quattro-venti-furci-siculo`
   - indirizzo: Via Calatafimi, 6, 98023 Furci Siculo ME
5. **AGRITURISMO AGRI** — Furnari
   - slug: `agriturismo-agri-furnari`
   - indirizzo: Contrada carone, Snc, 98054 Furnari ME
6. **Borgo Abacena Country Resort** — Furnari
   - slug: `borgo-abacena-country-resort-furnari`
   - indirizzo: SP116, 98060 Tripi ME
7. **Corallo Residence Portorosa** — Furnari
   - slug: `corallo-residence-portorosa-furnari`
   - indirizzo: Complesso turistico Portorosa, Via Prestipaolo, 98054 Furnari ME
8. **Home and Relax** — Furnari
   - slug: `home-and-relax-furnari`
   - indirizzo: Via Risorgimento, 98054 Furnari ME
9. **Hotel Atlantis** — Furnari
   - slug: `hotel-atlantis-furnari`
   - indirizzo: Via Prestipaolo, 1, 98054 Furnari ME
10. **La Casa di Mariù** — Furnari
   - slug: `la-casa-di-mariu-furnari`
   - indirizzo: Contrada S. Filippo, 1, 98054 Furnari ME
11. **Laguna Azzurra Portorosa** — Furnari
   - slug: `laguna-azzurra-portorosa-furnari`
   - indirizzo: Via Prestipaolo, 98054 Porto Rosa, ME
12. **Portorosa Village** — Furnari
   - slug: `portorosa-village-furnari`
   - indirizzo: Via Prestipaolo, 27, 98054 Tonnarella ME
13. **Residence Baia dei Delfini** — Furnari
   - slug: `residence-baia-dei-delfini-furnari`
   - indirizzo: Via Prestipaolo, 98054 Tonnarella ME
14. **Tindari Resort** — Furnari
   - slug: `tindari-resort-furnari`
   - indirizzo: Via Prestipaolo, 27, 98054 Furnari ME
15. **VOI Baia di Tindari Resort** — Furnari
   - slug: `voi-baia-di-tindari-resort-furnari`
   - indirizzo: Via Vespri Siciliani, 98054 Furnari ME
16. **Albergo Sabbie D'oro** — Gaggi
   - slug: `albergo-sabbie-d-oro-gaggi`
   - indirizzo: Via Schisò, 12, 98035 Giardini-Naxos ME
17. **B&B Civico 115 - Gaggi (ME)** — Gaggi
   - slug: `b-b-civico-115-gaggi-me-gaggi`
   - indirizzo: Via Umberto, 115, 98030 Gaggi ME
18. **Bed and Breakfast Alcantara Natura** — Gaggi
   - slug: `bed-and-breakfast-alcantara-natura-gaggi`
   - indirizzo: Contrada Cupparo, 10, 98036 Graniti ME
19. **Hotel Eliseo** — Gaggi
   - slug: `hotel-eliseo-gaggi`
   - indirizzo: Via Consolare Valeria, 1, 98035 Giardini Naxos ME
20. **Hotel Villa Nefele** — Gaggi
   - slug: `hotel-villa-nefele-gaggi`
   - indirizzo: Via Vulcano, 2, 98035 Giardini-Naxos ME
21. **Il Borgo Alcantara** — Gaggi
   - slug: `il-borgo-alcantara-gaggi`
   - indirizzo: SP81, 95012 Mitogio CT
22. **Lucia & Giovanni B&b** — Gaggi
   - slug: `lucia-giovanni-b-b-gaggi`
   - indirizzo: Via Montello,21 angolo, Via Regina Margherita, 98035 Giardini Naxos ME
23. **New Naxos Village** — Gaggi
   - slug: `new-naxos-village-gaggi`
   - indirizzo: Via Consolare Valeria, 118/L, 98035 Giardini-Naxos ME
24. **Sicily in Love** — Gaggi
   - slug: `sicily-in-love-gaggi`
   - indirizzo: Via degli Ulivi, 3, 98039 Taormina ME
25. **Villa Seta Bed & Breakfast** — Gaggi
   - slug: `villa-seta-bed-breakfast-gaggi`
   - indirizzo: Via della Seta, 2, 98035 Chianchitta-pallio ME
26. **A-MURI b&b** — Gangi
   - slug: `a-muri-b-b-gangi`
   - indirizzo: Via Termini F. Paolo, 23, 90024 Gangi PA
27. **Antico Borgo Buonanotte** — Gangi
   - slug: `antico-borgo-buonanotte-gangi`
   - indirizzo: Contrada Buonanotte, 90010 San Mauro Castelverde PA
28. **Hotel Gangi** — Gangi
   - slug: `hotel-gangi-gangi`
   - indirizzo: Viale Generale Ciancio, 68, 94015 Piazza Armerina EN
29. **Santa Lucia B&B** — Gangi
   - slug: `santa-lucia-b-b-gangi`
   - indirizzo: Via S. Lucia, 5, 90024 Gangi PA
30. **Terrematte - Turismo Rurale** — Gangi
   - slug: `terrematte-turismo-rurale-gangi`
   - indirizzo: C/da Chiaretta, 90028 Polizzi Generosa PA
31. **B&B HOTEL Ischia San Nicola** — Ischia
   - slug: `b-b-hotel-ischia-san-nicola-ischia`
   - indirizzo: Via Parroco d'Abundo 69 80075 Forio, d Ischia, NA, Italia
32. **B&B La Piazzetta** — Ischia
   - slug: `b-b-la-piazzetta-ischia`
   - indirizzo: Corso Vittoria Colonna, 122/1° Piano, 80077 Ischia NA, Italia
33. **Bed and Breakfast Ischia Villa al Porto** — Ischia
   - slug: `bed-and-breakfast-ischia-villa-al-porto-ischia`
   - indirizzo: Via Iasolino, 146B, 80077 Ischia NA, Italia
34. **Bed and Breakfast Napoli Plebiscito** — Ischia
   - slug: `bed-and-breakfast-napoli-plebiscito-ischia`
   - indirizzo: Via Chiaia, 216/2º piano, 80121 Napoli NA, Italia
35. **Bed and Breakfast Sweet Home Ischia** — Ischia
   - slug: `bed-and-breakfast-sweet-home-ischia-ischia`
   - indirizzo: Via Circonvallazione, 155, 80076 Lacco Ameno NA, Italia