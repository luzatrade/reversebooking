# Blocco 13/500 — 35 strutture senza descrizione IT

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

1. **Pensione Italia** — Acquapendente
   - slug: `pensione-italia-acquapendente`
   - indirizzo: Corso Cavour, 53, 01023 Bolsena VT
2. **Ristorante-Albergo Nuovo Castello** — Acquapendente
   - slug: `ristorante-albergo-nuovo-castello-acquapendente`
   - indirizzo: Via Vincenzo Cardarelli, 6, 01021 Torre Alfina VT
3. **A Due Passi Dal Mare B&B** — Acquappesa
   - slug: `a-due-passi-dal-mare-b-b-acquappesa`
   - indirizzo: Via C. Colombo, 13, 87020 Marina di Acquappesa CS
4. **Albergo Bed And Breakfast Terme Luigiane** — Acquappesa
   - slug: `albergo-bed-and-breakfast-terme-luigiane-acquappesa`
   - indirizzo: Contrada Pantana, 14, 87020 Terme Luigiane CS
5. **Albergo Marina Blu** — Acquappesa
   - slug: `albergo-marina-blu-acquappesa`
   - indirizzo: Via Strada Statale 18, 211, 87020 Marina CS
6. **Athena Palace Hotel** — Acquappesa
   - slug: `athena-palace-hotel-acquappesa`
   - indirizzo: Via del Mare, 2, 87020 Intavolata CS
7. **B&B Antico Casale** — Acquappesa
   - slug: `b-b-antico-casale-acquappesa`
   - indirizzo: Via S. Croce, 12, 87024 Scarcelli CS
8. **B&B La Terrazza** — Acquappesa
   - slug: `b-b-la-terrazza-acquappesa`
   - indirizzo: Piazza del Popolo, 14, 87022 Cetraro CS
9. **B&B Verzavò** — Acquappesa
   - slug: `b-b-verzavo-acquappesa`
   - indirizzo: Località, n, 8, 87022 Ponte Arenazza CS
10. **Grand Hotel delle Terme** — Acquappesa
   - slug: `grand-hotel-delle-terme-acquappesa`
   - indirizzo: Via Terme, 87020 Guardia Piemontese CS
11. **Hotel La Castellana** — Acquappesa
   - slug: `hotel-la-castellana-acquappesa`
   - indirizzo: Località La Praia, 87021 Belvedere Marittimo CS
12. **Hotel Le Mimose** — Acquappesa
   - slug: `hotel-le-mimose-acquappesa`
   - indirizzo: Contrada Pantana, 9, 87020 Acquappesa CS
13. **Hotel Parco delle Rose** — Acquappesa
   - slug: `hotel-parco-delle-rose-acquappesa`
   - indirizzo: Contrada Pantana, 87020 Terme Luigiane CS
14. **Hotel Piccolo Mondo** — Acquappesa
   - slug: `hotel-piccolo-mondo-acquappesa`
   - indirizzo: km 302, SS 18 Tirrena Inferiore, 16, 87020 Acquappesa CS
15. **HOTEL Rodian** — Acquappesa
   - slug: `hotel-rodian-acquappesa`
   - indirizzo: Contrada Pantana, 69, 87020 Terme Luigiane CS
16. **Hotel Sea Garden** — Acquappesa
   - slug: `hotel-sea-garden-acquappesa`
   - indirizzo: Via C. Colombo, 40, 87020 Acquappesa CS
17. **Hotel Valeria del Mar** — Acquappesa
   - slug: `hotel-valeria-del-mar-acquappesa`
   - indirizzo: Via Ser Luca, 87021 Serluca-calabaia Isola Palazza, CS
18. **Hotel Zilema** — Acquappesa
   - slug: `hotel-zilema-acquappesa`
   - indirizzo: SS 18 Tirrena Inferiore, 271, 87020 Guardia Piemontese CS
19. **Larus Hotel** — Acquappesa
   - slug: `larus-hotel-acquappesa`
   - indirizzo: V Traversa, Viale Aldo Moro, 87020 Sangineto Lido CS
20. **LUNA E STELLE Bed e Breakfast** — Acquappesa
   - slug: `luna-e-stelle-bed-e-breakfast-acquappesa`
   - indirizzo: Loc. Pietrabianca, 11, 87020 Sangineto CS
21. **Meridian Hotel** — Acquappesa
   - slug: `meridian-hotel-acquappesa`
   - indirizzo: Via Amerigo Vespucci, 1, 87020 Guardia Piemontese CS
22. **Santa Rosa Centro Vacanze** — Acquappesa
   - slug: `santa-rosa-centro-vacanze-acquappesa`
   - indirizzo: Via Aldo Moro Quinta Traversa, 87020 Sangineto CS
23. **B&B Bellaria Rooms** — Acquaro
   - slug: `b-b-bellaria-rooms-acquaro`
   - indirizzo: Via Roma, 2/4, 89900 Longobardi VV
24. **B&B Civico 6** — Acquaro
   - slug: `b-b-civico-6-acquaro`
   - indirizzo: Via S. Nicola, 89054 Galatro RC
25. **B&B Domenico Cesarelli** — Acquaro
   - slug: `b-b-domenico-cesarelli-acquaro`
   - indirizzo: Via Giudecca, 127, 89832 Arena VV
26. **B&B Il Girasole** — Acquaro
   - slug: `b-b-il-girasole-acquaro-2`
   - indirizzo: Via Umberto I, 146, 89852 Paravati VV
27. **B&B Il Girasole** — Acquaro
   - slug: `b-b-il-girasole-acquaro`
   - indirizzo: Viale Affaccio, 55, 89900 Vibo Valentia VV
28. **B&B Le Casette** — Acquaro
   - slug: `b-b-le-casette-acquaro`
   - indirizzo: Piazza Umberto I, 47, 89843 Sant'Onofrio VV
29. **B&B Via del Sole** — Acquaro
   - slug: `b-b-via-del-sole-acquaro`
   - indirizzo: Strada Statale 18, 324, 89851 Vena VV
30. **B&B Villa Maracujà** — Acquaro
   - slug: `b-b-villa-maracuja-acquaro`
   - indirizzo: Via nazionale ss18 Strada, Comunale Contura Campana, 89851 Ionadi VV
31. **B&B Villa Mery** — Acquaro
   - slug: `b-b-villa-mery-acquaro`
   - indirizzo: Località Gianmondo, 89852 Mileto VV
32. **Bed and Breakfast "Home Pacifico"** — Acquaro
   - slug: `bed-and-breakfast-home-pacifico-acquaro`
   - indirizzo: Contrada Cocari, snc, 89843 Sant'Onofrio VV
33. **Bed and Breakfast Amarcord** — Acquaro
   - slug: `bed-and-breakfast-amarcord-acquaro`
   - indirizzo: Via Arno, 89023 Laureana di Borrello RC
34. **BnB Nonna Cristina** — Acquaro
   - slug: `bnb-nonna-cristina-acquaro`
   - indirizzo: Via Cassiodoro, 12, 89824 Vecchio Abitato VV
35. **Donna Melina B&B** — Acquaro
   - slug: `donna-melina-b-b-acquaro`
   - indirizzo: Via Real Badia, 35, 89852 Mileto VV