# Blocco 286/500 — 35 strutture senza descrizione IT

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

1. **Fattoria del Pino** — Bolzano Novarese
   - slug: `fattoria-del-pino-bolzano-novarese`
   - indirizzo: Regione Brascino, 30, 28010 Pisogno NO
2. **Hotel Lo Scoiattolo** — Bolzano Novarese
   - slug: `hotel-lo-scoiattolo-bolzano-novarese`
   - indirizzo: Via per Nebbiuno, 20, 28040 Massino Visconti NO
3. **Notte sul Lago** — Bolzano Novarese
   - slug: `notte-sul-lago-bolzano-novarese`
   - indirizzo: SP229, Via Fratelli Rosselli, 19, 28024 Gozzano NO
4. **Agriturismo Ae Noseare** — Bolzano Vicentino
   - slug: `agriturismo-ae-noseare-bolzano-vicentino`
   - indirizzo: Via Adige, 37, 36040 Marola VI
5. **Agriturismo Sartori Terenzio** — Bolzano Vicentino
   - slug: `agriturismo-sartori-terenzio-bolzano-vicentino`
   - indirizzo: Via Piave, 1, 36050 Quinto Vicentino VI
6. **B&B Kristina** — Bolzano Vicentino
   - slug: `b-b-kristina-bolzano-vicentino`
   - indirizzo: Via Piave, 81, 36050 Valproto VI
7. **B&B Relax** — Bolzano Vicentino
   - slug: `b-b-relax-bolzano-vicentino`
   - indirizzo: Via Battaglione Vestone, 5a, 36100 Vicenza VI
8. **Hotel Green** — Bolzano Vicentino
   - slug: `hotel-green-bolzano-vicentino`
   - indirizzo: Via Aeroporti, 135/137, 36030 Caldogno VI
9. **Hotel le Sorgenti** — Bolzano Vicentino
   - slug: `hotel-le-sorgenti-bolzano-vicentino`
   - indirizzo: Via Acque, 6, 36050 Bolzano Vicentino VI
10. **HOTEL QUERINI. Essential Business Hotel a Sandrigo** — Bolzano Vicentino
   - slug: `hotel-querini-essential-business-hotel-a-sandrig-bolzano-vicentino`
   - indirizzo: Viale della Repubblica, 27, 36066 Sandrigo VI
11. **Hotel Rizzi** — Bolzano Vicentino
   - slug: `hotel-rizzi-bolzano-vicentino`
   - indirizzo: Via Revoloni, 2, 36010 Monticello Conte Otto VI
12. **Hotel Scaldaferro** — Bolzano Vicentino
   - slug: `hotel-scaldaferro-bolzano-vicentino`
   - indirizzo: Via Scaldaferro 3, 36066 Sandrigo VI
13. **Hotel Victoria & Residence** — Bolzano Vicentino
   - slug: `hotel-victoria-residence-bolzano-vicentino`
   - indirizzo: Str. Padana verso Padova, 52, 36100 Vicenza VI
14. **Hotel Zenit** — Bolzano Vicentino
   - slug: `hotel-zenit-bolzano-vicentino`
   - indirizzo: P.za del Popolo, 16, 35010 Carmignano di Brenta PD
15. **IL SELESE** — Bolzano Vicentino
   - slug: `il-selese-bolzano-vicentino`
   - indirizzo: Via Parmesana, 1/b, 36010 Monticello Conte Otto VI
16. **Locanda Grego** — Bolzano Vicentino
   - slug: `locanda-grego-bolzano-vicentino`
   - indirizzo: Via Roma, 24, 36050 Bolzano Vicentino VI
17. **PALAZZO OTELLO 1847 WELLNESS & SPA** — Bolzano Vicentino
   - slug: `palazzo-otello-1847-wellness-spa-bolzano-vicentino`
   - indirizzo: Corso Antonio Fogazzaro, 4, 43100 Vicenza VI
18. **Residenza Capitello 48** — Bolzano Vicentino
   - slug: `residenza-capitello-48-bolzano-vicentino`
   - indirizzo: Via Capitello, 48, 36010 Provincia di Vicenza VI
19. **Viest Hotel** — Bolzano Vicentino
   - slug: `viest-hotel-bolzano-vicentino`
   - indirizzo: Via U. Scarpelli, 41, 36100 Vicenza VI
20. **Anthurium GuestHouse** — Bomarzo
   - slug: `anthurium-guesthouse-bomarzo`
   - indirizzo: Via Vigna della Corte, 01020 Bomarzo VT
21. **B & B Il Moai** — Bomarzo
   - slug: `b-b-il-moai-bomarzo`
   - indirizzo: Via Sandro Pertini, 10, 01030 Vitorchiano VT
22. **B&B Il Grifo** — Bomarzo
   - slug: `b-b-il-grifo-bomarzo`
   - indirizzo: Piazza Pepe, 4, 01020 Bomarzo VT
23. **Hotel Bagnaia** — Bomarzo
   - slug: `hotel-bagnaia-bomarzo`
   - indirizzo: Via Generale Antonio Gandin, 11/A, 01100 Viterbo VT
24. **Il Buongiorno B&B** — Bomarzo
   - slug: `il-buongiorno-b-b-bomarzo`
   - indirizzo: Via Madonna del Piano, 27, 01020 Bomarzo VT
25. **Il Palazzetto B&B** — Bomarzo
   - slug: `il-palazzetto-b-b-bomarzo`
   - indirizzo: Via Giambologna, 7, 01100 Viterbo VT
26. **La Casa Del Sole** — Bomarzo
   - slug: `la-casa-del-sole-bomarzo`
   - indirizzo: Via della Rupe, 01020 Bomarzo VT
27. **La Casa di Brancaleone Vitorchiano** — Bomarzo
   - slug: `la-casa-di-brancaleone-vitorchiano-bomarzo`
   - indirizzo: Vicolo Tortuoso, 12, 01030 Vitorchiano VT
28. **La mansarda del Sacro Bosco** — Bomarzo
   - slug: `la-mansarda-del-sacro-bosco-bomarzo`
   - indirizzo: vicolo del Sole, 8, 01020 Bomarzo VT
29. **Villa Farfalla Bianca** — Bomarzo
   - slug: `villa-farfalla-bianca-bomarzo`
   - indirizzo: Str. Mazzatosta, 14 C, 01030 Vitorchiano VT
30. **Agriturismo Olimpo** — Bomba
   - slug: `agriturismo-olimpo-bomba`
   - indirizzo: Contrada Montebello, 4, 66047 Villa Santa Maria CH
31. **Hotel Santamaria** — Bomba
   - slug: `hotel-santamaria-bomba`
   - indirizzo: Piazza Guglielmo Marconi, 19, 66047 Villa Santa Maria CH
32. **i tre falchi Bed & Breakfast** — Bomba
   - slug: `i-tre-falchi-bed-breakfast-bomba`
   - indirizzo: Contrada Tutoglio, 14, 66040 Pennadomo CH
33. **Pennadomo Climbing House** — Bomba
   - slug: `pennadomo-climbing-house-bomba`
   - indirizzo: Via Orientale, 66040 Pennadomo CH
34. **Albergo Diffuso Montedoro** — Bompensiere
   - slug: `albergo-diffuso-montedoro-bompensiere`
   - indirizzo: Via Flaminia, 1, 93010 Montedoro CL
35. **B&B Eyexei Domus** — Bompensiere
   - slug: `b-b-eyexei-domus-bompensiere`
   - indirizzo: Via Monsignor Costantino de Simone, 22, 92100 Agrigento AG