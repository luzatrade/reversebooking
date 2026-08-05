# Blocco 210/500 — 35 strutture senza descrizione IT

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

1. **B&P La Gusteria** — Banchette
   - slug: `b-p-la-gusteria-banchette`
   - indirizzo: Via Quattro Martiri, 5, 10015 Ivrea TO
2. **Bed and Breakfast Il Tuchino** — Banchette
   - slug: `bed-and-breakfast-il-tuchino-banchette`
   - indirizzo: Piazza Lamarmora, 20, 10015 Ivrea TO
3. **Guest house "Borgo Yporegia"** — Banchette
   - slug: `guest-house-borgo-yporegia-banchette`
   - indirizzo: Via Corte D'Assise, 6, 10015 Ivrea TO
4. **Villa Silvia Olivetti Ivrea (Torino)** — Banchette
   - slug: `villa-silvia-olivetti-ivrea-torino-banchette`
   - indirizzo: Via Castellamonte, 46/1, 10010 Banchette TO
5. **Asia Hotel Bangkok** — Bangkok
   - slug: `asia-hotel-bangkok-bangkok`
   - indirizzo: 296 Phaya Thai Rd, Khwaeng Thanon Phetchaburi, Khet Ratchathewi, Krung Thep Maha Nakhon 10400
6. **Bangkok City Hotel** — Bangkok
   - slug: `bangkok-city-hotel-bangkok`
   - indirizzo: 268 Thanon Phetchaburi, Khwaeng Thanon Phetchaburi, Khet Ratchathewi, Krung Thep Maha Nakhon 10400
7. **Bangkok City Suite Hotel** — Bangkok
   - slug: `bangkok-city-suite-hotel-bangkok`
   - indirizzo: 1 Thanon Phetchaburi, Khwaeng Thung Phaya Thai, Khet Ratchathewi, Krung Thep Maha Nakhon 10400
8. **Centara Life Hotel Bangkok Phra Nakhon** — Bangkok
   - slug: `centara-life-hotel-bangkok-phra-nakhon-bangkok`
   - indirizzo: 78, Khwaeng Ban Phan Thom, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200
9. **Dinso Home Boutique Hotel** — Bangkok
   - slug: `dinso-home-boutique-hotel-bangkok`
   - indirizzo: 78 Parinayok Soi 3, Khwaeng Wat Bowon Niwet, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200
10. **Hotel Royal Bangkok** — Bangkok
   - slug: `hotel-royal-bangkok-bangkok`
   - indirizzo: 3 Floor, Room 302, 421/4 Yaowarat Rd, Khwaeng Samphanthawong, Khet Samphanthawong, Krung Thep Maha Nakhon 10100
11. **Nouvo City Hotel - โรงแรมนูโว ซิตี** — Bangkok
   - slug: `nouvo-city-hotel-bangkok`
   - indirizzo: 2 Soi Samsen 2, Khwaeng Ban Phan Thom, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200
12. **Pathumwan Princess Hotel** — Bangkok
   - slug: `pathumwan-princess-hotel-bangkok`
   - indirizzo: 444 Phaya Thai Rd, Khwaeng Wang Mai, Pathum Wan, Krung Thep Maha Nakhon 10330
13. **Prince Palace Hotel Bangkok** — Bangkok
   - slug: `prince-palace-hotel-bangkok-bangkok`
   - indirizzo: 488/800 Thanon Damrong Rak, Khwaeng Khlong Maha Nak, Khet Pom Prap Sattru Phai, Krung Thep Maha Nakhon 10100
14. **Rambuttri Village Hotel** — Bangkok
   - slug: `rambuttri-village-hotel-bangkok`
   - indirizzo: 95 Soi Ram Buttri, Khwaeng Chana Songkhram, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200
15. **Riva Surya Bangkok** — Bangkok
   - slug: `riva-surya-bangkok-bangkok`
   - indirizzo: 23 Thanon Phra Athit, Khwaeng Chana Songkhram, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200
16. **Royal Rattanakosin Hotel** — Bangkok
   - slug: `royal-rattanakosin-hotel-bangkok`
   - indirizzo: 2 Thanon Ratchadamnoen Klang, Khwaeng Wat Bowon Niwet, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200
17. **Siam@Siam Design Hotel Bangkok** — Bangkok
   - slug: `siam-siam-design-hotel-bangkok-bangkok`
   - indirizzo: Opposite National Stadium 865 Rama I Rd, Khwaeng Wang Mai, Pathum Wan, Krung Thep Maha Nakhon 10330
18. **Siri Grand Bangkok Hotel** — Bangkok
   - slug: `siri-grand-bangkok-hotel-bangkok`
   - indirizzo: 98 Soi Damnoen Klang Tai, Khwaeng Wat Bowon Niwet, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200
19. **Siri Ratchadamnoen Bangkok Hotel** — Bangkok
   - slug: `siri-ratchadamnoen-bangkok-hotel-bangkok`
   - indirizzo: 104 Soi Ratchadamnoen Klang Tai, Khwaeng Wat Bowon Niwet, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200
20. **Albergo Bar Ristorante PASSO BARANCA** — Bannio Anzino
   - slug: `albergo-bar-ristorante-passo-baranca-bannio-anzino`
   - indirizzo: Piazza monsignor Cocchinetti, 2, 28871 Bannio VB
21. **B&B Via Romita / Romita House** — Bannio Anzino
   - slug: `b-b-via-romita-romita-house-bannio-anzino`
   - indirizzo: Via Giuseppe Romita, 18b, 28845 Domodossola VB
22. **B&B Villa Rosa** — Bannio Anzino
   - slug: `b-b-villa-rosa-bannio-anzino`
   - indirizzo: Via Monte Rosa, 34, 28871 Bannio Anzino VB
23. **La Residenza dello Scoiattolo Bed And Breakfast** — Bannio Anzino
   - slug: `la-residenza-dello-scoiattolo-bed-and-breakfast-bannio-anzino`
   - indirizzo: Via S. Pietro, 21, 28871 Pontegrande VB
24. **Walser House Albergo Diffuso** — Bannio Anzino
   - slug: `walser-house-albergo-diffuso-bannio-anzino`
   - indirizzo: Via per San Gottardo, 13020 Rimella VC
25. **Agriturismo Carrera della Regina** — Banzi
   - slug: `agriturismo-carrera-della-regina-banzi`
   - indirizzo: SP169 km 48,800, 85010 Contrada Panetteria, Banzi PZ
26. **Al Borgo Saraceno** — Banzi
   - slug: `al-borgo-saraceno-banzi`
   - indirizzo: Vico Fiore, 13, 76014 Spinazzola BT
27. **B&B Palazzo Garibaldi** — Banzi
   - slug: `b-b-palazzo-garibaldi-banzi`
   - indirizzo: Corso Garibaldi, 42, 85013 Genzano di Lucania PZ
28. **Bed & Breakfast La Cattedrale - Venosa** — Banzi
   - slug: `bed-breakfast-la-cattedrale-venosa-banzi`
   - indirizzo: Via de Luca, 44, 85029 Venosa PZ
29. **Borgo San Barbato Resort Spa & Golf | 5 stelle lusso** — Banzi
   - slug: `borgo-san-barbato-resort-spa-golf-5-stelle-lusso-banzi`
   - indirizzo: Strada Statale 93 km 56,300 85024, 85024 Lavello PZ
30. **Complesso Turistico Latorraca - Ristorante Pizzeria B&B Pasticceria Bar Piscina** — Banzi
   - slug: `complesso-turistico-latorraca-ristorante-pizzeri-banzi`
   - indirizzo: Contrada Crognale, 1, 85026 Palazzo San Gervasio PZ
31. **Corso Vittorio Bed e Breakfast Venosa** — Banzi
   - slug: `corso-vittorio-bed-e-breakfast-venosa-banzi`
   - indirizzo: Via Vittorio Emanuele II, 134, 85029 Venosa PZ
32. **Hotel Kristall** — Banzi
   - slug: `hotel-kristall-banzi`
   - indirizzo: Piazza Municipio, 8, 85013 Genzano di Lucania PZ
33. **Hotel Venusia** — Banzi
   - slug: `hotel-venusia-banzi`
   - indirizzo: Via Accademia dei Rinascenti, 68, 85029 Venosa PZ
34. **Hotel Villa Ester** — Banzi
   - slug: `hotel-villa-ester-banzi`
   - indirizzo: S.S. 168, km. 30, 500, 85026 Palazzo San Gervasio PZ
35. **La Badia** — Banzi
   - slug: `la-badia-banzi`
   - indirizzo: Largo Urbano II, 7, 85010 Banzi PZ