# Blocco 427/500 — 35 strutture senza descrizione IT

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

1. **Tenuta La Presa** — Caprino Veronese
   - slug: `tenuta-la-presa-caprino-veronese`
   - indirizzo: Loc. La Presa, 1, 37013 Caprino Veronese VR
2. **Albergo Capriolo** — Capriolo
   - slug: `albergo-capriolo-capriolo`
   - indirizzo: Via Statale Ovest, 28, 41029 Sestola MO
3. **Azienda Agricola Ricci Curbastro** — Capriolo
   - slug: `azienda-agricola-ricci-curbastro-capriolo`
   - indirizzo: Via Adro, 37, 25031 Capriolo BS
4. **B&B Civico 69 Franciacorta** — Capriolo
   - slug: `b-b-civico-69-franciacorta-capriolo`
   - indirizzo: Via Giovanni Pascoli, 1, 25031 Capriolo BS
5. **Casitamia** — Capriolo
   - slug: `casitamia-capriolo`
   - indirizzo: Via del Dossello, 42, 25049 Clusane BS
6. **Corte Lantieri Ristorante Agriturismo** — Capriolo
   - slug: `corte-lantieri-ristorante-agriturismo-capriolo`
   - indirizzo: Via Videtti, 23, 25031 Capriolo BS
7. **Ripa Del Bosco** — Capriolo
   - slug: `ripa-del-bosco-capriolo`
   - indirizzo: Via Valle, 21, 25031 Capriolo BS
8. **ACCADEMIA VINE LODGE** — Capriva del Friuli
   - slug: `accademia-vine-lodge-capriva-del-friuli`
   - indirizzo: Via degli Alpini, 2, 34070 Capriva del Friuli GO
9. **Affittacamere Dal Rosso** — Capriva del Friuli
   - slug: `affittacamere-dal-rosso-capriva-del-friuli`
   - indirizzo: Località Scedina, 25, 34070 San Floriano del Collio GO
10. **Al Pompiere - Wine and rooms** — Capriva del Friuli
   - slug: `al-pompiere-wine-and-rooms-capriva-del-friuli`
   - indirizzo: Via Sant'Antonio, 2, 34070 Capriva del Friuli GO
11. **Albergo da Gon - Cormons** — Capriva del Friuli
   - slug: `albergo-da-gon-cormons-capriva-del-friuli`
   - indirizzo: Via G. Donizetti, 15b, 34071 Borgnano GO
12. **Albergo Isonzo Pizzeria Tre Stelle** — Capriva del Friuli
   - slug: `albergo-isonzo-pizzeria-tre-stelle-capriva-del-friuli`
   - indirizzo: Strada della Mainizza, 207, 34170 Gorizia GO
13. **Appartamenti nelle Vigne** — Capriva del Friuli
   - slug: `appartamenti-nelle-vigne-capriva-del-friuli`
   - indirizzo: Via Spessa, 10, 34071 Capriva del Friuli GO
14. **B&B Luna sul Collio** — Capriva del Friuli
   - slug: `b-b-luna-sul-collio-capriva-del-friuli`
   - indirizzo: Via Lauterbach, 25, 34070 Capriva del Friuli GO
15. **Casa Ottavia** — Capriva del Friuli
   - slug: `casa-ottavia-capriva-del-friuli`
   - indirizzo: Via Stazione, 17, 34070 Mossa GO
16. **Castello di Spessa Golf Wine Resort & Spa** — Capriva del Friuli
   - slug: `castello-di-spessa-golf-wine-resort-spa-capriva-del-friuli`
   - indirizzo: Via Spessa, 1, 34070 Capriva del Friuli GO
17. **Giardini di Eva B&B** — Capriva del Friuli
   - slug: `giardini-di-eva-b-b-capriva-del-friuli`
   - indirizzo: Località Bucuie, 6/A, 34070 San Floriano del Collio GO
18. **Hotel Conti Formentini** — Capriva del Friuli
   - slug: `hotel-conti-formentini-capriva-del-friuli`
   - indirizzo: Via Oslavia, 2, 34070 San Floriano del Collio GO
19. **Hotel Ristorante Ai Due Leoni Farra D'Isonzo** — Capriva del Friuli
   - slug: `hotel-ristorante-ai-due-leoni-farra-d-isonzo-capriva-del-friuli`
   - indirizzo: Via G. Verdi, 55/57, 34072 Farra d'Isonzo GO
20. **La Casa Griunit** — Capriva del Friuli
   - slug: `la-casa-griunit-capriva-del-friuli`
   - indirizzo: Via Giuseppe Mazzini, 26, 34070 Capriva del Friuli GO
21. **Relais Russiz Superiore** — Capriva del Friuli
   - slug: `relais-russiz-superiore-capriva-del-friuli`
   - indirizzo: Via Russiz, 7, 34070 Capriva del Friuli GO
22. **Sot Dal Tor** — Capriva del Friuli
   - slug: `sot-dal-tor-capriva-del-friuli`
   - indirizzo: Piazza Vittoria, 10, 34070 Capriva del Friuli GO
23. **Tavernetta Al Castello** — Capriva del Friuli
   - slug: `tavernetta-al-castello-capriva-del-friuli`
   - indirizzo: Via Spessa, 7, 34070 Capriva del Friuli GO
24. **Villa Rosi Affittacamere** — Capriva del Friuli
   - slug: `villa-rosi-affittacamere-capriva-del-friuli`
   - indirizzo: Via Risorgimento, 2, 34071 Cormons GO
25. **A casa di Agata** — Capua
   - slug: `a-casa-di-agata-capua`
   - indirizzo: Viale Ferrovia, 28, 81043 Capua CE
26. **A Casa di Marco** — Capua
   - slug: `a-casa-di-marco-capua`
   - indirizzo: Vico Riccardo, 81043 Capua CE
27. **Antica Capua Bed and Breakfast** — Capua
   - slug: `antica-capua-bed-and-breakfast-capua`
   - indirizzo: Via Alcide de Gasperi, 189, 81055 Santa Maria Capua Vetere CE
28. **B&B a Capua - Carlo V House Hotel** — Capua
   - slug: `b-b-a-capua-carlo-v-house-hotel-capua`
   - indirizzo: Via Alessio Mazzocchi, 38, 81043 Capua CE
29. **B&B a Capua - I PORTICI del centro** — Capua
   - slug: `b-b-a-capua-i-portici-del-centro-capua`
   - indirizzo: Vico Paolo Bottoni, 15, 81043 Capua CE
30. **B&B Grazia Bed and Breakfast a Capua** — Capua
   - slug: `b-b-grazia-bed-and-breakfast-a-capua-capua`
   - indirizzo: Via Falliti, Traversa Privata, 9, 81043 Capua CE
31. **B&B L'AURORA CAPUA** — Capua
   - slug: `b-b-l-aurora-capua-capua`
   - indirizzo: Via Fuori Porta Roma, 111, 81043 Capua CE
32. **beb porta roma** — Capua
   - slug: `beb-porta-roma-capua`
   - indirizzo: Via Fuori Porta Roma, 207, 81043 Capua CE
33. **Carioca Aparthotel** — Capua
   - slug: `carioca-aparthotel-capua`
   - indirizzo: Via Martiri di Nassirya, 100, 81043 Capua CE
34. **Casa aragona b&b** — Capua
   - slug: `casa-aragona-b-b-capua`
   - indirizzo: Viale Ferrovia, 2, 81043 Capua CE
35. **Garden Inn** — Capua
   - slug: `garden-inn-capua`
   - indirizzo: Via Brezza, 57, 81043 Capua CE