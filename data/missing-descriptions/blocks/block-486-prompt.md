# Blocco 486/500 — 35 strutture senza descrizione IT

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

1. **Black Market Hotel** — Ischia
   - slug: `black-market-hotel-ischia`
   - indirizzo: Via Baldassarre Cossa, 48, 80077 Ischia NA, Italia
2. **Blu D’Alia Exclusive Rooms** — Ischia
   - slug: `blu-d-alia-exclusive-rooms-ischia`
   - indirizzo: Via Michele Mazzella, 82, 80077 Ischia NA, Italia
3. **Grand Hotel Ischia & Lido - Aurum Hotels** — Ischia
   - slug: `grand-hotel-ischia-lido-aurum-hotels-ischia`
   - indirizzo: Via Emanuele Gianturco, 33, 80077 Ischia NA, Italia
4. **Hotel Annabelle Ischia** — Ischia
   - slug: `hotel-annabelle-ischia-ischia`
   - indirizzo: Via Federico Variopinto, 6, 80077 Ischia NA, Italia
5. **Hotel Atlantic** — Ischia
   - slug: `hotel-atlantic-ischia`
   - indirizzo: Via Leonardo Mazzella, 40, 80077 Ischia NA, Italia
6. **Hotel Europa** — Ischia
   - slug: `hotel-europa-ischia`
   - indirizzo: Via Antonio Sogliuzzo, 25, 80077 Ischia NA, Italia
7. **Hotel Myage** — Ischia
   - slug: `hotel-myage-ischia`
   - indirizzo: Via Castiglione, 70, 80074 Ischia NA, Italia
8. **Hotel Ristorante Da Maria** — Ischia
   - slug: `hotel-ristorante-da-maria-ischia`
   - indirizzo: Via Cartaromana, 79, 80077 Ischia NA, Italia
9. **Hotel Rivamare** — Ischia
   - slug: `hotel-rivamare-ischia`
   - indirizzo: Via Enea, 26, 80077 Ischia NA, Italia
10. **Hotel Villa Cecilia** — Ischia
   - slug: `hotel-villa-cecilia-ischia`
   - indirizzo: Via Vincenzo, Traversa Mirabella, 36, 80077 Ischia NA, Italia
11. **Hotel Villa Ireos** — Ischia
   - slug: `hotel-villa-ireos-ischia`
   - indirizzo: Via Quercia, 26, 80074 Casamicciola Terme NA, Italia
12. **Liferooms** — Ischia
   - slug: `liferooms-ischia`
   - indirizzo: Corso Vittoria Colonna, 212, 80077 Ischia NA, Italia
13. **Relais Bijoux Bed and Breakfast - Isola d'Ischia** — Ischia
   - slug: `relais-bijoux-bed-and-breakfast-isola-d-ischia-ischia`
   - indirizzo: Via Pendio di Lapillo, 1b, 80077 Ischia NA, Italia
14. **Villa Bina Sea Hotel** — Ischia
   - slug: `villa-bina-sea-hotel-ischia`
   - indirizzo: Via Succhivo, 55, 80081 Sant'Angelo NA, Italia
15. **Villa Lieta** — Ischia
   - slug: `villa-lieta-ischia`
   - indirizzo: Via Luigi Mazzella, 25, 80077 Ischia NA, Italia
16. **AHC Grand Bazaar Hotel** — Istanbul
   - slug: `ahc-grand-bazaar-hotel-istanbul`
   - indirizzo: Mimar Kemalettin, Abıhayat Sok. No:1, 34490 Fatih/İstanbul
17. **Blue Ottoman Hotel** — Istanbul
   - slug: `blue-ottoman-hotel-istanbul`
   - indirizzo: Sultan Ahmet, Tavukhane Sk. NO:13, 34122 Fatih/İstanbul
18. **City Center Hotel** — Istanbul
   - slug: `city-center-hotel-istanbul`
   - indirizzo: Katip Mustafa Çelebi, Sıraselviler Caddesi & Billurcu Çıkmazı No:1, 34433 Beyoğlu/İstanbul
19. **Crowne Plaza Istanbul - Old City, an IHG Hotel** — Istanbul
   - slug: `crowne-plaza-istanbul-old-city-an-ihg-hotel-istanbul`
   - indirizzo: Balabanağa, Fethibey Cd. Laleli, 34134 Fatih/İstanbul
20. **Grand Bazaar Hotel** — Istanbul
   - slug: `grand-bazaar-hotel-istanbul`
   - indirizzo: Mimar Kemalettin, Beyazıt Karakol Sk., 34126 Fatih/İstanbul
21. **Grand Hyatt Istanbul** — Istanbul
   - slug: `grand-hyatt-istanbul-istanbul`
   - indirizzo: Harbiye, Taşkışla Cd. No:1, 34367 Şişli/İstanbul
22. **Hotel Saba, İstanbul** — Istanbul
   - slug: `hotel-saba-istanbul-istanbul`
   - indirizzo: Binbirdirek, Şht. Mehmetpaşa Ykş. No:6, 34122 Fatih/İstanbul
23. **İmagine İstanbul Hotel - Sultanahmet** — Istanbul
   - slug: `imagine-istanbul-hotel-sultanahmet-istanbul`
   - indirizzo: Emin Sinan, Pertevpaşa Sok. No: 57, 34126 Fatih/İstanbul
24. **Radisson Hotel Istanbul Sultanahmet** — Istanbul
   - slug: `radisson-hotel-istanbul-sultanahmet-istanbul`
   - indirizzo: Sultanahmet TR, Sultanahmet Mah, Kennedy Cad. No:12, 34122 Fatih/İstanbul
25. **Ring Stone Hotels Bosphorus** — Istanbul
   - slug: `ring-stone-hotels-bosphorus-istanbul`
   - indirizzo: Asmalı Mescit, İstiklal Cd. No:182, 34430 Beyoğlu/İstanbul
26. **Rixos Pera İstanbul** — Istanbul
   - slug: `rixos-pera-istanbul-istanbul`
   - indirizzo: Kamer Hatun, Meşrutiyet Cd. No:44, 34435 Beyoğlu/İstanbul
27. **Sheraton Istanbul City Center** — Istanbul
   - slug: `sheraton-istanbul-city-center-istanbul`
   - indirizzo: Hacıahmet, Kurtuluş Deresi Cd. No:23, 34440 Beyoğlu/İstanbul
28. **Sura Hagia Sophia Hotel İstanbul** — Istanbul
   - slug: `sura-hagia-sophia-hotel-istanbul-istanbul`
   - indirizzo: Alemdar, Ticarethane Sk. No:10, 34122 Fatih/İstanbul
29. **The Elysium Taksim** — Istanbul
   - slug: `the-elysium-taksim-istanbul`
   - indirizzo: İnönü, Harbiye Çayırı Sk. No:1, 34373 Şişli/İstanbul
30. **The Story Hotel Pera** — Istanbul
   - slug: `the-story-hotel-pera-istanbul`
   - indirizzo: Tomtom, Kumbaracı Yokuşu Sok. No:66, 34435 Beyoğlu/İstanbul
31. **138 Liberdade Hotel** — Lisbon
   - slug: `138-liberdade-hotel-lisbon`
   - indirizzo: Av. da Liberdade 138 142, 1250-001 Lisboa
32. **BessaHotel Liberdade** — Lisbon
   - slug: `bessahotel-liberdade-lisbon`
   - indirizzo: Av. da Liberdade 29, 1250-139 Lisboa
33. **Brown's Central Hotel** — Lisbon
   - slug: `brown-s-central-hotel-lisbon`
   - indirizzo: R. da Assunção 75, 1100-042 Lisboa
34. **Czar Lisbon Hotel** — Lisbon
   - slug: `czar-lisbon-hotel-lisbon`
   - indirizzo: Av. Alm. Reis 103, 1150-020 Lisboa
35. **Holiday Inn Express Lisbon - Ave. Liberdade by IHG** — Lisbon
   - slug: `holiday-inn-express-lisbon-ave-liberdade-by-ihg-lisbon`
   - indirizzo: R. Alexandre Herculano 40, 1250-011 Lisboa