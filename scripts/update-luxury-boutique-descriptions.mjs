/**
 * Aggiorna descrizioni e slug per 25 hotel luxury/boutique su Supabase.
 * Usage: node scripts/update-luxury-boutique-descriptions.mjs
 */

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local"), override: true });

const { createClient } = await import("@supabase/supabase-js");

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const HOTELS = [
  {
    old_slug: "grand-hotel-tremezzo-tremezzina",
    slug: "grand-hotel-tremezzo-lake-como",
    description_en: `Facing Bellagio with sweeping views over Lake Como and the Grigne mountains, the 5-star luxury Grand Hotel Tremezzo is an iconic Art Nouveau palace set within a 20,000 sqm botanical park. The hotel offers opulent accommodations featuring period decor and marble bathrooms, alongside three swimming pools—including a floating pool directly on the lake. Guests can enjoy fine dining options curated in collaboration with legendary Italian culinary heritage and relax at the award-winning T Spa.

Key Amenities:
- 3 swimming pools (including a floating pool on Lake Como)
- World-class T Spa with hammam, sauna, and panoramic relaxation lounge
- Fine dining restaurants and lakeside wine bar
- Private Venetian motorboats for lake tours
- Tennis court and fitness center

Location & Nearby Attractions:
- Villa Carlotta & Botanical Gardens: 2-minute walk
- Bellagio (via Ferry from Tremezzo Pier): 10-minute boat ride
- Villa del Balbianello: 3.5 km (2.1 miles)
- Milan Malpensa Airport (MXP): 80 km (50 miles)`,
    description: `Affacciato su Bellagio con vista mozzafiato sul Lago di Como e sulle montagne delle Grigne, il Grand Hotel Tremezzo 5 stelle lusso è un'iconica residenza in stile Art Nouveau immersa in un parco botanico di 20.000 mq. L'hotel offre alloggi sontuosi con arredi d'epoca e bagni in marmo, tre piscine — tra cui una galleggiante direttamente sul lago — ristorazione d'eccellenza e la premiata T Spa.

Servizi principali:
- 3 piscine (inclusa una piscina galleggiante sul Lago di Como)
- T Spa di livello mondiale con hammam, sauna e lounge relax panoramica
- Ristoranti di alta cucina e wine bar sul lago
- Motoscafi veneziani privati per tour sul lago
- Campo da tennis e centro fitness

Posizione e attrazioni vicine:
- Villa Carlotta e Giardino Botanico: 2 minuti a piedi
- Bellagio (via traghetto dal molo di Tremezzo): 10 minuti in barca
- Villa del Balbianello: 3,5 km
- Aeroporto di Milano Malpensa (MXP): 80 km`,
  },
  {
    old_slug: "le-sirenuse-positano",
    slug: "le-sirenuse-positano",
    description_en: `Located in the heart of Positano, Le Sirenuse is an internationally acclaimed 5-star luxury hotel set in a 18th-century private summer house. Perched 70 meters above the sea, the property offers whitewashed interiors, hand-painted Vietri tile floors, and museum-quality antique furnishings. Almost all rooms feature private balconies overlooking the colorful cliffs and Mediterranean waters, accompanied by a champagne bar, an outdoor pool, and an AVEDA spa.

Key Amenities:
- Outdoor swimming pool on a cliffside terrace with sea views
- Michelin-recommended La Sponda restaurant lit by 400 candles nightly
- Franco's Bar and Don't Worry Bar
- AVEDA Spa with sauna, granite steam room, and ice room
- Complimentary morning boat excursions on a wooden vintage boat

Location & Nearby Attractions:
- Spiaggia Grande (Positano Main Beach): 3-minute walk downhill
- Church of Santa Maria Assunta: 4-minute walk
- Amalfi: 16 km (10 miles)
- Naples International Airport (NAP): 60 km (37 miles)`,
    description: `Nel cuore di Positano, Le Sirenuse è un hotel di lusso 5 stelle di fama internazionale, ospitato in una villa estiva privata del XVIII secolo. Arroccata a 70 metri sul mare, la struttura offre interni bianchi, pavimenti in maiolica di Vietri dipinti a mano e arredi antichi di qualità museale. Quasi tutte le camere dispongono di balconi privati con vista sulle scogliere colorate e sul Mediterraneo, affiancati da champagne bar, piscina all'aperto e AVEDA spa.

Servizi principali:
- Piscina all'aperto su terrazza a picco sul mare
- Ristorante La Sponda consigliato dalla Michelin, illuminato da 400 candele ogni sera
- Franco's Bar e Don't Worry Bar
- AVEDA Spa con sauna, bagno di vapore in granito e stanza del ghiaccio
- Escursioni mattutine gratuite in barca vintage di legno

Posizione e attrazioni vicine:
- Spiaggia Grande (spiaggia principale di Positano): 3 minuti a piedi in discesa
- Chiesa di Santa Maria Assunta: 4 minuti a piedi
- Amalfi: 16 km
- Aeroporto internazionale di Napoli (NAP): 60 km`,
  },
  {
    old_slug: "four-seasons-hotel-firenze",
    slug: "four-seasons-hotel-firenze",
    description_en: `Nestled within Florence's largest private park, the 5-star Four Seasons Hotel Firenze combines two restored Renaissance structures: the 15th-century Palazzo della Gherardesca and a 16th-century former convent. The hotel showcases original museum-grade frescoes, bas-reliefs, and vaulted ceilings. Guests can relax in an outdoor heated pool, indulge in the multi-level luxury spa, or dine at the Michelin-starred restaurant set against botanical gardens.

Key Amenities:
- 11-acre private historical park (Giardino della Gherardesca)
- Michelin-starred Il Palagio restaurant
- Outdoor heated pool and sun deck
- Two-story spa featuring Officina Profumo-Farmaceutica di Santa Maria Novella products
- Dedicated concierge service and private valet parking

Location & Nearby Attractions:
- Accademia Gallery (Michelangelo's David): 8-minute walk
- Florence Duomo (Santa Maria del Fiore): 12-minute walk
- Piazza della Signoria & Uffizi Gallery: 15-minute walk
- Florence Airport (FLR): 8 km (5 miles)`,
    description: `Immerso nel più grande parco privato di Firenze, il Four Seasons Hotel Firenze 5 stelle unisce due strutture rinascimentali restaurate: il Palazzo della Gherardesca del XV secolo e un ex convento del XVI secolo. L'hotel espone affreschi, bassorilievi e soffitti a volta originali di qualità museale. Gli ospiti possono rilassarsi in una piscina riscaldata all'aperto, nella spa di lusso su più livelli o cenare al ristorante stellato Michelin affacciato sui giardini botanici.

Servizi principali:
- Parco storico privato di 4,5 ettari (Giardino della Gherardesca)
- Ristorante stellato Michelin Il Palagio
- Piscina riscaldata all'aperto e solarium
- Spa su due piani con prodotti Officina Profumo-Farmaceutica di Santa Maria Novella
- Concierge dedicato e parcheggio custodito privato

Posizione e attrazioni vicine:
- Galleria dell'Accademia (David di Michelangelo): 8 minuti a piedi
- Duomo di Firenze (Santa Maria del Fiore): 12 minuti a piedi
- Piazza della Signoria e Galleria degli Uffizi: 15 minuti a piedi
- Aeroporto di Firenze (FLR): 8 km`,
  },
  {
    old_slug: "hotel-hassler-roma",
    slug: "hotel-hassler-roma",
    description_en: `Perched atop the Spanish Steps, Hotel Hassler Roma is one of Rome's most celebrated luxury family-owned hotels. Offering panoramas over the Eternal City, including St. Peter's Basilica and the Colosseum, the hotel features classic European elegance, marble finishings, and plush silk drapery. The property houses a Michelin-starred rooftop restaurant, a secluded courtyard garden, and an exclusive wellness center.

Key Amenities:
- Michelin-starred panoramic rooftop restaurant Imàgo
- Palm Court garden restaurant and cocktail bar
- Amorvero Spa with sauna, Turkish bath, and fitness room
- Rooftop terrace with 360-degree views over Rome
- Personal butler service for suites

Location & Nearby Attractions:
- Spanish Steps & Piazza di Spagna: 1-minute walk (at the doorstep)
- Via Condotti Shopping District: 3-minute walk
- Trevi Fountain: 8-minute walk
- Rome Fiumicino Airport (FCO): 30 km (18.6 miles)`,
    description: `Arroccato in cima alla Scalinata di Trinità dei Monti, l'Hotel Hassler Roma è uno degli hotel di lusso a conduzione familiare più celebri di Roma. Con panorami sulla Città Eterna, dalla Basilica di San Pietro al Colosseo, l'hotel offre eleganza classica europea, finiture in marmo e drappeggi in seta pregiata. La struttura ospita un ristorante panoramico stellato Michelin, un giardino interno riservato e un esclusivo centro benessere.

Servizi principali:
- Ristorante panoramico stellato Michelin Imàgo
- Ristorante Palm Court e cocktail bar nel giardino
- Amorvero Spa con sauna, bagno turco e sala fitness
- Terrazza panoramica con vista a 360 gradi su Roma
- Servizio maggiordomo personale per le suite

Posizione e attrazioni vicine:
- Scalinata di Trinità dei Monti e Piazza di Spagna: 1 minuto a piedi (sulla porta)
- Via Condotti: 3 minuti a piedi
- Fontana di Trevi: 8 minuti a piedi
- Aeroporto di Roma Fiumicino (FCO): 30 km`,
  },
  {
    old_slug: "san-domenico-palace-taormina",
    slug: "san-domenico-palace-taormina",
    description_en: `Occupying a restored 14th-century Dominican convent on a rocky promontory, San Domenico Palace offers views of Mount Etna and the Ionian Sea. Combining monastic architectural heritage with modern luxury, the hotel features cloisters, terraced gardens, and an infinity pool suspended over the sea. Guests enjoy two-Michelin-starred Sicilian dining, custom-designed suites, and personalized Mediterranean wellness experiences.

Key Amenities:
- Heated outdoor infinity pool overlooking the Ionian Sea and Mount Etna
- Two-Michelin-starred Principe Cerami restaurant
- Historic cloisters and terraced Italian gardens
- Beauty and wellness treatment rooms
- 24-hour Four Seasons personal concierge service

Location & Nearby Attractions:
- Taormina Historic Town Center (Corso Umberto): 2-minute walk
- Greek Theatre of Taormina: 8-minute walk
- Isola Bella: 10-minute drive / Cable car access
- Catania Fontanarossa Airport (CTA): 65 km (40 miles)`,
    description: `Ospitato in un convento domenicano del XIV secolo restaurato su un promontorio roccioso, il San Domenico Palace offre viste sull'Etna e sul Mar Ionio. Unendo il patrimonio architettonico monastico al lusso contemporaneo, l'hotel dispone di chiostri, giardini terrazzati e una piscina a sfioro sospesa sul mare. Gli ospiti possono gustare la cucina siciliana due stelle Michelin, suite su misura e percorsi benessere mediterranei personalizzati.

Servizi principali:
- Piscina a sfioro riscaldata all'aperto con vista sul Mar Ionio e sull'Etna
- Ristorante due stelle Michelin Principe Cerami
- Chiostri storici e giardini all'italiana terrazzati
- Sale trattamenti beauty e benessere
- Concierge personale Four Seasons 24 ore su 24

Posizione e attrazioni vicine:
- Centro storico di Taormina (Corso Umberto): 2 minuti a piedi
- Teatro Greco di Taormina: 8 minuti a piedi
- Isola Bella: 10 minuti in auto / accesso funivia
- Aeroporto di Catania Fontanarossa (CTA): 65 km`,
  },
  {
    old_slug: "qc-termeroma-fiumicino",
    slug: "qc-termeroma-resort-spa-fiumicino",
    description_en: `Set within the protected nature reserve of the Oasi di Porto, QC Termeroma is a 5-star spa resort inspired by ancient Roman baths. Constructed in the style of a classical country manor, the property features a thermal wellness circuit, including underground stone baths, outdoor hydrotherapy pools, and scented saunas. Rooms are designed with natural tones and white wood, surrounded by olive groves and pine trees.

Key Amenities:
- Expansive Roman thermal spa circuit with indoor/outdoor pools
- Subterranean hydro-massage baths, bio-saunas, and relaxation rooms
- Daily wellness buffet breakfast and evening Aperititerme
- Full menu of massages and facial treatments
- Free Wi-Fi and airport shuttle options

Location & Nearby Attractions:
- Rome Fiumicino Airport (FCO): 5-minute drive (3.5 km)
- Archaeological Park of Ostia Antica: 10-minute drive
- Rome City Center (Colosseum/Piazza Venezia): 25 km (15.5 miles)
- Tyrrhenian Sea Beaches: 10-minute drive`,
    description: `Immerso nella riserva naturale protetta dell'Oasi di Porto, QC Termeroma è un resort spa 5 stelle ispirato alle antiche terme romane. Costruito nello stile di una villa di campagna classica, la struttura offre un percorso benessere termale con bagni in pietra sotterranei, piscine idroterapiche all'aperto e saune aromatiche. Le camere sono arredate con toni naturali e legno bianco, circondate da uliveti e pini.

Servizi principali:
- Ampio percorso spa termale romano con piscine interne ed esterne
- Bagni idromassaggio sotterranei, bio-saune e sale relax
- Colazione benessere a buffet quotidiana e Aperititerme serale
- Menu completo di massaggi e trattamenti viso
- Wi-Fi gratuito e servizio navetta per l'aeroporto

Posizione e attrazioni vicine:
- Aeroporto di Roma Fiumicino (FCO): 5 minuti in auto (3,5 km)
- Parco archeologico di Ostia Antica: 10 minuti in auto
- Centro di Roma (Colosseo/Piazza Venezia): 25 km
- Spiagge del Mar Tirreno: 10 minuti in auto`,
  },
  {
    old_slug: "lefay-resort-spa-dolomiti-pinzolo",
    slug: "lefay-resort-spa-dolomiti-pinzolo",
    description_en: `Located in Pinzolo within the Adamello Brenta National Park, Lefay Resort & SPA Dolomiti is an eco-luxury sanctuary integrating mountain architecture with sustainable technology. The resort features a 5,000 sqm spa spread across four levels, offering indoor and outdoor heated pools, a salt-water lake, and a signature health method combining Classical Chinese Medicine with Western research. Rooms feature oak wood, local stone, and glass fireplaces.

Key Amenities:
- 5,000 sqm Lefay SPA with thermal water, saunas, and salt lake
- Indoor-outdoor heated infinity pool facing the Dolomites
- Grual organic fine dining restaurant
- Ski-in/Ski-out access to the Madonna di Campiglio ski area
- Electric vehicle charging stations and underground garage

Location & Nearby Attractions:
- Pinzolo Cable Car (Skirama Dolomiti): 800 meters
- Madonna di Campiglio: 12 km (7.5 miles)
- Lake Garda (Riva del Garda): 50 km (31 miles)
- Verona Villafranca Airport (VRN): 140 km (87 miles)`,
    description: `Situato a Pinzolo nel Parco Nazionale dell'Adamello Brenta, il Lefay Resort & SPA Dolomiti è un santuario eco-luxury che integra architettura montana e tecnologia sostenibile. Il resort dispone di una spa di 5.000 mq su quattro livelli, con piscine riscaldate interne ed esterne, lago salato e un metodo salute che unisce Medicina Cinese Classica e ricerca occidentale. Le camere presentano legno di rovere, pietra locale e caminetti in vetro.

Servizi principali:
- Lefay SPA di 5.000 mq con acqua termale, saune e lago salato
- Piscina a sfioro riscaldata interno-esterna con vista sulle Dolomiti
- Ristorante di alta cucina biologica Grual
- Accesso sci-in/sci-out all'area sciistica di Madonna di Campiglio
- Stazioni di ricarica per veicoli elettrici e garage sotterraneo

Posizione e attrazioni vicine:
- Funivia di Pinzolo (Skirama Dolomiti): 800 metri
- Madonna di Campiglio: 12 km
- Lago di Garda (Riva del Garda): 50 km
- Aeroporto di Verona Villafranca (VRN): 140 km`,
  },
  {
    old_slug: "rosewood-castiglion-del-bosco-montalcino",
    slug: "rosewood-castiglion-del-bosco-montalcino",
    description_en: `Located within a 5,000-acre estate in the UNESCO-protected Val d'Orcia, Rosewood Castiglion del Bosco is a restored 800-year-old Tuscan village (borgo). The estate includes stone villas with private heated pools, a medieval castle ruin, and an active Brunello di Montalcino winery. Suites feature local craftsmanship, antique furnishings, and stone fireplaces, accompanied by an infinity pool with views over rolling hills.

Key Amenities:
- Private 18-hole Tom Weiskopf-designed private golf course
- On-site winery with Brunello di Montalcino tasting tours
- Heated outdoor infinity pool overlooking Val d'Orcia
- Rosewood Spa with organic Tuscan treatments
- Culinary academy and organic kitchen garden

Location & Nearby Attractions:
- Montalcino: 12 km (7.5 miles)
- Siena: 42 km (26 miles)
- Pienza: 35 km (21.7 miles)
- Florence Airport (FLR): 115 km (71 miles)`,
    description: `Situato in una tenuta di 2.000 ettari nella Val d'Orcia patrimonio UNESCO, Rosewood Castiglion del Bosco è un borgo toscano restaurato di 800 anni. La tenuta comprende ville in pietra con piscine riscaldate private, rovine di un castello medievale e una cantina attiva di Brunello di Montalcino. Le suite presentano artigianato locale, arredi antichi e caminetti in pietra, affiancate da una piscina a sfioro con vista sulle colline.

Servizi principali:
- Campo da golf privato 18 buche progettato da Tom Weiskopf
- Cantina in loco con degustazioni di Brunello di Montalcino
- Piscina a sfioro riscaldata all'aperto con vista sulla Val d'Orcia
- Rosewood Spa con trattamenti biologici toscani
- Accademia culinaria e orto biologico

Posizione e attrazioni vicine:
- Montalcino: 12 km
- Siena: 42 km
- Pienza: 35 km
- Aeroporto di Firenze (FLR): 115 km`,
  },
  {
    old_slug: "belmond-hotel-cipriani-venezia",
    slug: "belmond-hotel-cipriani-venice",
    description_en: `Located on Giudecca Island across the lagoon from St. Mark's Square, Belmond Hotel Cipriani offers Venetian luxury away from the city crowds. Set among private gardens and vineyards, the hotel features Venetian-style decor, Fortuny fabrics, and Murano glass chandeliers. The property boasts the only Olympic-sized heated saltwater swimming pool in central Venice, alongside Michelin-starred dining and private wooden launch transfers.

Key Amenities:
- Olympic-sized heated saltwater swimming pool
- Michelin-starred Oro restaurant
- Private 24/7 wooden launch boat transfer to St. Mark's Square
- Casanova Wellness Centre set within historical gardens
- Private tennis court overlooking the lagoon

Location & Nearby Attractions:
- St. Mark's Square (Piazza San Marco): 5-minute private boat ride
- Doge's Palace & Bridge of Sighs: 5-minute private boat ride
- Gallerie dell'Accademia: 10-minute boat ride
- Venice Marco Polo Airport (VCE): 30 minutes by water taxi`,
    description: `Situato sull'isola della Giudecca di fronte a Piazza San Marco, il Belmond Hotel Cipriani offre il lusso veneziano lontano dalla folla cittadina. Immerso tra giardini privati e vigneti, l'hotel presenta arredi in stile veneziano, tessuti Fortuny e lampadari in vetro di Murano. La struttura vanta l'unica piscina olimpionica di acqua salata riscaldata nel centro di Venezia, oltre a ristorazione stellata Michelin e trasferimenti privati in motoscafo di legno.

Servizi principali:
- Piscina olimpionica di acqua salata riscaldata
- Ristorante stellato Michelin Oro
- Trasferimento privato 24/7 in motoscafo di legno per Piazza San Marco
- Casanova Wellness Centre immerso nei giardini storici
- Campo da tennis privato con vista sulla laguna

Posizione e attrazioni vicine:
- Piazza San Marco: 5 minuti in barca privata
- Palazzo Ducale e Ponte dei Sospiri: 5 minuti in barca privata
- Gallerie dell'Accademia: 10 minuti in barca
- Aeroporto di Venezia Marco Polo (VCE): 30 minuti in motoscafo`,
  },
  {
    old_slug: "hotel-cala-di-volpe-arzachena",
    slug: "hotel-cala-di-volpe-porto-cervo",
    description_en: `Designed by architect Jacques Couëlle to resemble a traditional Sardinian fishing village, Hotel Cala di Volpe sits on a private bay along the Costa Smeralda. Featuring pastel-colored towers, terracotta roofs, and hand-carved wooden accents, the property offers a Mediterranean escape. Facilities include a saltwater swimming pool, private beaches, a Matsuhisa Nobu restaurant, and private boat docks.

Key Amenities:
- Saltwater swimming pool
- Matsuhisa at Cala di Volpe (Nobu Japanese cuisine)
- Private beach accessible via hotel launch boat
- Pevero Golf Club access with dedicated transfers
- Shiseido Spa and fitness center

Location & Nearby Attractions:
- Porto Cervo Town Center: 6 km (3.7 miles)
- Pevero Golf Club: 2 km (1.2 miles)
- Capriccioli Beach: 2.5 km (1.5 miles)
- Olbia Costa Smeralda Airport (OLB): 28 km (17.3 miles)`,
    description: `Progettato dall'architetto Jacques Couëlle per assomigliare a un tradizionale villaggio di pescatori sardo, l'Hotel Cala di Volpe sorge su una baia privata lungo la Costa Smeralda. Con torri pastello, tetti in terracotta e dettagli in legno intagliato a mano, la struttura offre un rifugio mediterraneo. I servizi includono piscina di acqua salata, spiagge private, il ristorante Matsuhisa Nobu e pontili per imbarcazioni private.

Servizi principali:
- Piscina di acqua salata
- Matsuhisa at Cala di Volpe (cucina giapponese Nobu)
- Spiaggia privata raggiungibile con lancia dell'hotel
- Accesso al Pevero Golf Club con trasferimenti dedicati
- Shiseido Spa e centro fitness

Posizione e attrazioni vicine:
- Centro di Porto Cervo: 6 km
- Pevero Golf Club: 2 km
- Spiaggia di Capriccioli: 2,5 km
- Aeroporto di Olbia Costa Smeralda (OLB): 28 km`,
  },
  {
    old_slug: "villa-d-este-cernobbio",
    slug: "villa-d-este-cernobbio-lake-como",
    description_en: `Originally built in 1568 as a royal summer residence, Villa d'Este is a 5-star resort located on the shores of Lake Como in Cernobbio. Set within a 25-acre UNESCO-listed park featuring Renaissance mosaics and double avenue of cypresses, the estate offers antique furniture, silk wall coverings, and marble bathrooms. The property is known for its floating swimming pool on the lake, private golf club, and classic service.

Key Amenities:
- Iconic floating pool on Lake Como plus indoor pool
- 25-acre private Renaissance park and gardens
- 8 tennis courts, squash court, and health club
- Veranda fine dining restaurant overlooking the lake
- Private marina with vintage boat rentals

Location & Nearby Attractions:
- Cernobbio Town Center: 5-minute walk
- Como City Center: 5 km (3.1 miles)
- Villa Pizzo: 1.5 km (0.9 miles)
- Milan Malpensa Airport (MXP): 55 km (34 miles)`,
    description: `Costruita originariamente nel 1568 come residenza estiva reale, Villa d'Este è un resort 5 stelle sulle rive del Lago di Como a Cernobbio. Immersa in un parco di 10 ettari patrimonio UNESCO con mosaici rinascimentali e doppio viale di cipressi, la tenuta offre mobili antichi, rivestimenti in seta e bagni in marmo. La struttura è celebre per la piscina galleggiante sul lago, il golf club privato e il servizio classico.

Servizi principali:
- Iconica piscina galleggiante sul Lago di Como e piscina interna
- Parco e giardini rinascimentali privati di 10 ettari
- 8 campi da tennis, campo squash e health club
- Ristorante di alta cucina Veranda con vista sul lago
- Marina privata con noleggio barche d'epoca

Posizione e attrazioni vicine:
- Centro di Cernobbio: 5 minuti a piedi
- Centro di Como: 5 km
- Villa Pizzo: 1,5 km
- Aeroporto di Milano Malpensa (MXP): 55 km`,
  },
  {
    old_slug: "belmond-hotel-caruso-ravello",
    slug: "belmond-hotel-caruso-ravello",
    description_en: `Perched on a cliff 350 meters above the Tyrrhenian Sea, Belmond Hotel Caruso occupies a restored 11th-century palace in Ravello. The hotel features original 18th-century frescoes, terraced olive groves, and an infinity pool that merges with the horizon of the Amalfi Coast. Rooms offer sea or garden views, marble bathrooms, and private balconies or terraces.

Key Amenities:
- Panoramic infinity pool suspended over the sea
- Ristorante Belvedere serving regional Mediterranean cuisine
- Outdoor spa treatments set in terraced gardens
- Complimentary daily boat cruises along the Amalfi coastline
- Shuttle service to Amalfi and Positano

Location & Nearby Attractions:
- Villa Rufolo (Ravello Festival Venue): 3-minute walk
- Villa Cimbrone: 8-minute walk
- Amalfi Town: 6 km (3.7 miles)
- Naples International Airport (NAP): 60 km (37 miles)`,
    description: `Arroccato su una scogliera a 350 metri sul Mar Tirreno, il Belmond Hotel Caruso occupa un palazzo dell'XI secolo restaurato a Ravello. L'hotel presenta affreschi originali del XVIII secolo, uliveti terrazzati e una piscina a sfioro che si fonde con l'orizzonte della Costiera Amalfitana. Le camere offrono vista mare o giardino, bagni in marmo e balconi o terrazze private.

Servizi principali:
- Piscina a sfioro panoramica sospesa sul mare
- Ristorante Belvedere con cucina mediterranea regionale
- Trattamenti spa all'aperto nei giardini terrazzati
- Crociere giornaliere gratuite in barca lungo la costa amalfitana
- Servizio navetta per Amalfi e Positano

Posizione e attrazioni vicine:
- Villa Rufolo (sede del Ravello Festival): 3 minuti a piedi
- Villa Cimbrone: 8 minuti a piedi
- Amalfi: 6 km
- Aeroporto internazionale di Napoli (NAP): 60 km`,
  },
  {
    old_slug: "grand-hotel-quisisana-capri",
    slug: "grand-hotel-quisisana-capri",
    description_en: `Open since 1845, the Grand Hotel Quisisana is a historic 5-star flagship hotel on the island of Capri. Featuring a white facade, the property is located in the center of Capri town. Guests can enjoy lush gardens, an outdoor swimming pool surrounded by orange trees, and private balconies overlooking the Faraglioni rocks or the Mediterranean garden. The hotel houses multiple restaurants, a theatre, and a spa.

Key Amenities:
- Outdoor swimming pool with sun terrace and poolside bar
- Rendez-Vous restaurant and Quisi Bar on the main promenade
- Quisi Spa with indoor pool, sauna, and beauty treatments
- Private tennis courts
- Dedicated island porter and concierge services

Location & Nearby Attractions:
- Piazzetta di Capri (Main Square): 1-minute walk
- Via Camerelle (Luxury Shopping): Located directly on the street
- Faraglioni Rocks Overlook: 10-minute walk
- Marina Grande (Ferry Port): 10-minute funicular/taxi ride`,
    description: `Aperto dal 1845, il Grand Hotel Quisisana è un hotel storico 5 stelle di punta sull'isola di Capri. Con la sua facciata bianca, la struttura si trova nel centro di Capri. Gli ospiti possono godere di giardini rigogliosi, una piscina all'aperto circondata da aranci e balconi privati con vista sui Faraglioni o sul giardino mediterraneo. L'hotel ospita più ristoranti, un teatro e una spa.

Servizi principali:
- Piscina all'aperto con solarium e bar a bordo piscina
- Ristorante Rendez-Vous e Quisi Bar sul lungomare principale
- Quisi Spa con piscina interna, sauna e trattamenti beauty
- Campi da tennis privati
- Servizi portiere e concierge dedicati all'isola

Posizione e attrazioni vicine:
- Piazzetta di Capri: 1 minuto a piedi
- Via Camerelle (shopping di lusso): direttamente sulla strada
- Belvedere sui Faraglioni: 10 minuti a piedi
- Marina Grande (porto traghetti): 10 minuti in funicolare/taxi`,
  },
  {
    old_slug: "hotel-danieli-venezia",
    slug: "hotel-danieli-venice",
    description_en: `Located steps from St. Mark's Square, Hotel Danieli is composed of three Venetian palaces dating back to the 14th, 19th, and 20th centuries, centered around the gothic Palazzo Dandolo. The hotel features pink marble columns, Murano glass chandeliers, hand-carved wooden staircases, and antique tapestries. Its rooftop restaurant offers vistas across the Venetian Lagoon toward San Giorgio Maggiore.

Key Amenities:
- Terrazza Danieli rooftop restaurant with lagoon views
- In-room massage and beauty services
- 24-hour fitness center
- Direct private water taxi access via private boat dock
- Concierge service and private tour arrangements

Location & Nearby Attractions:
- St. Mark's Square & Basilica: 2-minute walk
- Doge's Palace: 1-minute walk
- Bridge of Sighs: 1-minute walk
- Rialto Bridge: 10-minute walk`,
    description: `A pochi passi da Piazza San Marco, l'Hotel Danieli è composto da tre palazzi veneziani risalenti al XIV, XIX e XX secolo, centrati sul gotico Palazzo Dandolo. L'hotel presenta colonne in marmo rosa, lampadari in vetro di Murano, scale in legno intagliato a mano e arazzi antichi. Il ristorante panoramico offre viste sulla Laguna verso San Giorgio Maggiore.

Servizi principali:
- Ristorante panoramico Terrazza Danieli con vista sulla laguna
- Servizi massaggio e beauty in camera
- Centro fitness aperto 24 ore
- Accesso diretto con motoscafo privato dal molo dell'hotel
- Concierge e organizzazione tour privati

Posizione e attrazioni vicine:
- Piazza San Marco e Basilica: 2 minuti a piedi
- Palazzo Ducale: 1 minuto a piedi
- Ponte dei Sospiri: 1 minuto a piedi
- Ponte di Rialto: 10 minuti a piedi`,
  },
  {
    old_slug: "borgo-egnazia-fasano",
    slug: "borgo-egnazia-savelletri-di-fasano",
    description_en: `Constructed entirely from local white tufo limestone, Borgo Egnazia is a 5-star resort designed in the style of a traditional Apulian village. Surrounded by ancient olive groves along the Adriatic coast, the property offers a main building (La Corte), a village area (Il Borgo), and private villas with personal pools. The resort features the award-winning Vair Spa, four swimming pools, and a Michelin-starred restaurant.

Key Amenities:
- Vair Spa focusing on psycho-emotional wellness and local ingredients
- 4 swimming pools (2 outdoor heated, 1 indoor, 1 family pool)
- Michelin-starred Due Camini restaurant
- 18-hole championship San Domenico Golf Club adjacent
- Two private beach clubs (Cala Masciola and La Fonte)

Location & Nearby Attractions:
- San Domenico Golf Club: 1-minute drive
- Savelletri Fishing Village: 2 km (1.2 miles)
- Alberobello (UNESCO Trulli Town): 25 km (15.5 miles)
- Bari Karol Wojtyła Airport (BRI): 55 km (34 miles)`,
    description: `Costruito interamente in pietra calcarea bianca locale, Borgo Egnazia è un resort 5 stelle progettato nello stile di un tradizionale villaggio pugliese. Circondato da antichi uliveti lungo la costa adriatica, la struttura offre un edificio principale (La Corte), un'area borgo (Il Borgo) e ville private con piscina personale. Il resort dispone della premiata Vair Spa, quattro piscine e un ristorante stellato Michelin.

Servizi principali:
- Vair Spa dedicata al benessere psico-emotivo e agli ingredienti locali
- 4 piscine (2 riscaldate all'aperto, 1 interna, 1 family pool)
- Ristorante stellato Michelin Due Camini
- San Domenico Golf Club campionato 18 buche adiacente
- Due beach club privati (Cala Masciola e La Fonte)

Posizione e attrazioni vicine:
- San Domenico Golf Club: 1 minuto in auto
- Borgo marinaro di Savelletri: 2 km
- Alberobello (città dei trulli UNESCO): 25 km
- Aeroporto di Bari Karol Wojtyła (BRI): 55 km`,
  },
  {
    old_slug: "radisson-collection-palazzo-touring-milano",
    slug: "radisson-collection-palazzo-touring-milano",
    description_en: `Housed in the historic headquarters of the Touring Club Italiano in central Milan, the 5-star Radisson Collection Hotel, Palazzo Touring Club combines 19th-century architecture with contemporary Italian design. The hotel offers 89 tailored rooms, an inner courtyard bistro, and a subterranean wellness spa built within the building's original foundations.

Key Amenities:
- Subterranean Spa with sauna, steam bath, and relaxation area
- On-site fine dining restaurant Berton Al Kalés
- Inner courtyard lounge bar and bistro
- Fully equipped fitness center
- High-speed Wi-Fi and 24-hour concierge service

Location & Nearby Attractions:
- Piazza del Duomo & Milan Cathedral: 500 meters (6-minute walk)
- Teatro alla Scala: 10-minute walk
- Palazzo Reale & Museo del Novecento: 5-minute walk
- Missori Metro Station (M3 Line): 2-minute walk`,
    description: `Ospitato nella storica sede del Touring Club Italiano nel centro di Milano, il Radisson Collection Hotel, Palazzo Touring Club 5 stelle unisce architettura ottocentesca e design italiano contemporaneo. L'hotel offre 89 camere sartoriali, un bistrot nel cortile interno e una spa benessere sotterranea ricavata nelle fondamenta originali dell'edificio.

Servizi principali:
- Spa sotterranea con sauna, bagno turco e area relax
- Ristorante gourmet in loco Berton Al Kalés
- Lounge bar e bistrot nel cortile interno
- Centro fitness completamente attrezzato
- Wi-Fi ad alta velocità e concierge 24 ore su 24

Posizione e attrazioni vicine:
- Piazza del Duomo e Duomo di Milano: 500 metri (6 minuti a piedi)
- Teatro alla Scala: 10 minuti a piedi
- Palazzo Reale e Museo del Novecento: 5 minuti a piedi
- Fermata Metro Missori (linea M3): 2 minuti a piedi`,
  },
  {
    old_slug: "the-boutique-houses-bologna",
    slug: "the-boutique-houses-bologna",
    description_en: `Located along Via Castiglione in Bologna's historic center, The Boutique Houses is an intimate bed & breakfast set within a restored nobleman's palace. Featuring high ceilings, contemporary design pieces, and antique elements, the property offers suites equipped with king-size beds, coffee machines, and artisan breakfast options served daily.

Key Amenities:
- Spacious designer suites with private marble bathrooms
- Artisanal breakfast with locally sourced Emilian products
- High-speed Wi-Fi and smart entertainment systems
- Climate-controlled rooms with soundproofing
- Personalized check-in and local tour arrangements

Location & Nearby Attractions:
- Two Towers (Asinelli & Garisenda): 4-minute walk
- Piazza Maggiore & Basilica di San Petronio: 6-minute walk
- Giardini Margherita Park: 10-minute walk
- Bologna Centrale Train Station: 1.8 km (10-minute taxi ride)`,
    description: `Situato lungo Via Castiglione nel centro storico di Bologna, The Boutique Houses è un intimo bed & breakfast in un palazzo nobiliare restaurato. Soffitti alti, pezzi di design contemporaneo ed elementi antichi caratterizzano suite con letti king-size, macchine per il caffè e colazione artigianale servita ogni giorno.

Servizi principali:
- Ampie suite di design con bagni privati in marmo
- Colazione artigianale con prodotti emiliani a km zero
- Wi-Fi ad alta velocità e sistemi smart entertainment
- Camere climatizzate e insonorizzate
- Check-in personalizzato e organizzazione tour locali

Posizione e attrazioni vicine:
- Due Torri (Asinelli e Garisenda): 4 minuti a piedi
- Piazza Maggiore e Basilica di San Petronio: 6 minuti a piedi
- Giardini Margherita: 10 minuti a piedi
- Stazione di Bologna Centrale: 1,8 km (10 minuti in taxi)`,
  },
  {
    old_slug: "hotel-indigo-verona-grand-hotel-des-arts",
    slug: "hotel-indigo-verona-grand-hotel-des-arts",
    description_en: `Situated between Verona's central station and the Roman Arena, Hotel Indigo Verona is a 4-star boutique hotel inspired by the city's operatic and theatrical heritage. Featuring artwork, sculptured accents, and custom furnishings, the hotel offers 62 rooms, a private garden courtyard, and a cocktail lounge.

Key Amenities:
- Private interior garden with outdoor cocktail service
- Arya Bar & Lounge for local wine tastings and light dining
- On-site garage and private parking options
- Meeting facilities and business lounge
- Complimentary high-speed Wi-Fi

Location & Nearby Attractions:
- Arena di Verona & Piazza Bra: 7-minute walk
- Juliet's House (Casa di Giulietta): 12-minute walk
- Verona Porta Nuova Railway Station: 8-minute walk
- Castelvecchio Bridge: 10-minute walk`,
    description: `Situato tra la stazione centrale di Verona e l'Arena romana, Hotel Indigo Verona è un boutique hotel 4 stelle ispirato all'eredità operistica e teatrale della città. Opere d'arte, dettagli scultorei e arredi su misura accompagnano 62 camere, un giardino privato e un cocktail lounge.

Servizi principali:
- Giardino interno privato con servizio cocktail all'aperto
- Arya Bar & Lounge per degustazioni di vini locali e light dining
- Garage in loco e parcheggio privato su prenotazione
- Sale meeting e business lounge
- Wi-Fi ad alta velocità gratuito

Posizione e attrazioni vicine:
- Arena di Verona e Piazza Bra: 7 minuti a piedi
- Casa di Giulietta: 12 minuti a piedi
- Stazione di Verona Porta Nuova: 8 minuti a piedi
- Ponte di Castelvecchio: 10 minuti a piedi`,
  },
  {
    old_slug: "bb-suite-riviera-rimini",
    slug: "suite-riviera-bb-rimini-viserba",
    description_en: `Positioned directly on the seaside promenade of Rimini Viserba, B&B Suite Riviera offers modern beachfront accommodations. Featuring a clean design with light wood accents, all suites include soundproof floor-to-ceiling windows, hydro-massage showers, and private balconies with panoramic Adriatic Sea views.

Key Amenities:
- Beachfront location with direct access to partner beach clubs
- Panoramic ocean-view breakfast hall with daily fresh buffet
- Modern suites with chromotherapy showers and private balconies
- Free high-speed Wi-Fi throughout the property
- Bicycle rental service for coastal riding

Location & Nearby Attractions:
- Viserba Beach Promenade: Direct access (0 meters)
- Italia in Miniatura Theme Park: 2.5 km (5-minute drive)
- Rimini Marina & Ferris Wheel: 4.5 km (8-minute drive)
- Rimini Viserba Train Station: 600 meters`,
    description: `Affacciato direttamente sul lungomare di Rimini Viserba, il B&B Suite Riviera offre sistemazioni moderne fronte mare. Design essenziale con accenti in legno chiaro, suite insonorizzate con finestre a tutta altezza, docce con idromassaggio e balconi privati con vista panoramica sull'Adriatico.

Servizi principali:
- Posizione fronte mare con accesso diretto a stabilimenti partner
- Sala colazione panoramica vista oceano con buffet fresco giornaliero
- Suite moderne con docce cromoterapiche e balconi privati
- Wi-Fi ad alta velocità gratuito in tutta la struttura
- Servizio noleggio biciclette per pedalate costiere

Posizione e attrazioni vicine:
- Lungomare di Viserba: accesso diretto (0 metri)
- Parco tematico Italia in Miniatura: 2,5 km (5 minuti in auto)
- Porto Canale e Ruota Panoramica di Rimini: 4,5 km (8 minuti in auto)
- Stazione di Rimini Viserba: 600 metri`,
  },
  {
    old_slug: "link126-boutique-bb-parma",
    slug: "link126-boutique-bb-parma",
    description_en: `Located in a peaceful green district just outside central Parma, Link126 Boutique B&B is an eco-friendly hi-tech property. Featuring floor-to-ceiling windows, private garden access, smart-home automation, and private parking, this B&B provides quiet surroundings alongside artisan breakfast selections from local food producers.

Key Amenities:
- Private enclosed garden with outdoor seating areas
- Eco-sustainable design with advanced home automation
- Secure private parking with EV charging stations
- Gourmet breakfast featuring Parmigiano Reggiano and local cured meats
- Smart TVs and high-speed Wi-Fi in all units

Location & Nearby Attractions:
- Parma Historic Center & Piazza Duomo: 8-minute drive
- Teatro Regio di Parma: 10-minute drive
- Parco Ducale: 10-minute drive
- A1 Highway (Parma Nord Exit): 4-minute drive`,
    description: `In una tranquilla area verde alle porte del centro di Parma, Link126 Boutique B&B è una struttura eco-friendly hi-tech. Ampie vetrate a tutta altezza, accesso al giardino privato, domotica e parcheggio privato offrono quiete e colazioni artigianali con prodotti locali.

Servizi principali:
- Giardino privato recintato con zone relax all'aperto
- Design eco-sostenibile con domotica avanzata
- Parcheggio privato custodito con colonnine per auto elettriche
- Colazione gourmet con Parmigiano Reggiano e salumi locali
- Smart TV e Wi-Fi ad alta velocità in tutte le unità

Posizione e attrazioni vicine:
- Centro storico di Parma e Piazza Duomo: 8 minuti in auto
- Teatro Regio di Parma: 10 minuti in auto
- Parco Ducale: 10 minuti in auto
- Autostrada A1 (uscita Parma Nord): 4 minuti in auto`,
  },
  {
    old_slug: "nh-collection-porta-rossa-firenze",
    slug: "nh-collection-porta-rossa-florence",
    description_en: `Considered one of Italy's oldest operating hotels, NH Collection Porta Rossa is a 5-star boutique hotel centered around the 13th-century Torre Monalda. The property preserves authentic 14th-century frescoes, stained glass, and vaulted ceilings, paired with minimalist contemporary Italian furnishings and marble bathrooms.

Key Amenities:
- Historical tower suite with 360-degree views over Florence
- Breakfast hall set beneath original 14th-century frescoes
- Cocktail bar and lounge
- Dedicated concierge and valet parking service
- High-speed Wi-Fi and espresso machines in all rooms

Location & Nearby Attractions:
- Ponte Vecchio: 3-minute walk
- Piazza della Signoria & Uffizi Gallery: 4-minute walk
- Florence Cathedral (Duomo): 6-minute walk
- Via de' Tornabuoni (High-Fashion Shopping): 1-minute walk`,
    description: `Considerato tra i più antichi hotel ancora in attività in Italia, l'NH Collection Porta Rossa è un boutique hotel 5 stelle costruito attorno alla Torre Monalda del XIII secolo. La struttura conserva autentici affreschi del XIV secolo, vetrate colorate e volte a crociera, abbinate ad arredi italiani contemporanei minimalisti e bagni in marmo.

Servizi principali:
- Suite nella torre storica con vista a 360 gradi su Firenze
- Sala colazione sotto gli affreschi originali del XIV secolo
- Cocktail bar e lounge
- Concierge dedicato e servizio parcheggio con valletto
- Wi-Fi ad alta velocità e macchine per espresso in tutte le camere

Posizione e attrazioni vicine:
- Ponte Vecchio: 3 minuti a piedi
- Piazza della Signoria e Galleria degli Uffizi: 4 minuti a piedi
- Cattedrale di Firenze (Duomo): 6 minuti a piedi
- Via de' Tornabuoni (shopping alta moda): 1 minuto a piedi`,
  },
  {
    old_slug: "hotel-viu-milan-milano",
    slug: "hotel-viu-milan",
    description_en: `Featuring a vertical garden facade and a rooftop swimming pool, Hotel VIU Milan is a 5-star lifestyle hotel designed by Molteni&C architecture studio. Located near Porta Garibaldi, the property offers floor-to-ceiling windows, warm wood finishings, fine dining by Michelin-starred chefs, and vistas over the Milanese skyline.

Key Amenities:
- Outdoor rooftop pool and lounge bar (VIU Terrace)
- Gourmet dining at Morelli Restaurant and Bulk Bistro
- Wellness center with Technogym equipment, sauna, and steam room
- Floor-to-ceiling soundproof windows in all rooms
- 24-hour room service and private parking

Location & Nearby Attractions:
- Corso Como & Piazza Gae Aulenti: 10-minute walk
- Brera Art District: 12-minute walk
- Sempione Park & Sforza Castle: 10-minute walk
- Monumentale Metro Station (M5 Line): 3-minute walk`,
    description: `Con una facciata a giardino verticale e una piscina sul rooftop, Hotel VIU Milan è un lifestyle hotel 5 stelle firmato dallo studio di architettura Molteni&C. Vicino a Porta Garibaldi, la struttura offre finestre a tutta altezza, finiture in legno caldo, alta cucina con chef stellati Michelin e viste sullo skyline milanese.

Servizi principali:
- Piscina all'aperto sul tetto e lounge bar (VIU Terrace)
- Ristorazione gourmet al Morelli Restaurant e Bulk Bistro
- Centro benessere con Technogym, sauna e bagno turco
- Finestre insonorizzate dal pavimento al soffitto in tutte le camere
- Room service 24 ore su 24 e parcheggio privato

Posizione e attrazioni vicine:
- Corso Como e Piazza Gae Aulenti: 10 minuti a piedi
- Quartiere artistico di Brera: 12 minuti a piedi
- Parco Sempione e Castello Sforzesco: 10 minuti a piedi
- Fermata Metro Monumentale (linea M5): 3 minuti a piedi`,
  },
  {
    old_slug: "palazzo-magnani-ferroni-firenze",
    slug: "palazzo-magnani-ferroni-florence",
    description_en: `Set within a 16th-century Renaissance palace in the Oltrarno district, Palazzo Magnani Ferroni is an All-Suite historical residence. Suites feature authentic antiques, Murano glass chandeliers, stone fireplaces, and restored ceiling frescoes. Guests have access to a private rooftop terrace with views across the Florentine skyline.

Key Amenities:
- Panoramic rooftop terrace overlooking the Duomo and Tuscan hills
- In-suite breakfast and personal butler service options
- On-site fitness center and private massage room
- Historic reading room with wood-burning fireplace
- High-speed Wi-Fi and private driver arrangements

Location & Nearby Attractions:
- Ponte Vecchio: 5-minute walk
- Pitti Palace & Boboli Gardens: 6-minute walk
- Piazza Santo Spirito: 3-minute walk
- Uffizi Gallery: 8-minute walk`,
    description: `In un palazzo rinascimentale del XVI secolo nel quartiere Oltrarno, Palazzo Magnani Ferroni è una residenza storica all-suite. Le suite presentano antiquariato autentico, lampadari in vetro di Murano, camini in pietra e affreschi restaurati. Gli ospiti accedono a una terrazza panoramica privata con vista sullo skyline fiorentino.

Servizi principali:
- Terrazza panoramica sul tetto con vista sul Duomo e sulle colline toscane
- Colazione in suite e opzione servizio maggiordomo personale
- Centro fitness in loco e sala massaggi privata
- Sala lettura storica con camino a legna
- Wi-Fi ad alta velocità e organizzazione autista privato

Posizione e attrazioni vicine:
- Ponte Vecchio: 5 minuti a piedi
- Palazzo Pitti e Giardino di Boboli: 6 minuti a piedi
- Piazza Santo Spirito: 3 minuti a piedi
- Galleria degli Uffizi: 8 minuti a piedi`,
  },
  {
    old_slug: "hotel-palazzo-victoria-vicenza",
    slug: "hotel-palazzo-victoria-vicenza",
    description_en: `Located along Corso Palladio in Vicenza's pedestrian center, Hotel Palazzo Victoria incorporates visible Roman archaeological ruins into its contemporary design. The property features glass floors over ancient stone structures, restored parquet flooring, leather seating, and an interior courtyard lounge.

Key Amenities:
- Inner glass-covered courtyard with visible Roman archaeological excavations
- Lounge bar serving regional Veneto wines and aperitifs
- Reading lounge and meeting spaces
- Complimentary bicycle rental for city touring
- High-speed Wi-Fi and 24-hour reception desk

Location & Nearby Attractions:
- Basilica Palladiana & Piazza dei Signori: 3-minute walk
- Teatro Olimpico: 6-minute walk
- Palazzo Chiericati: 5-minute walk
- Vicenza Central Station: 12-minute walk`,
    description: `Situato lungo Corso Palladio nel centro pedonale di Vicenza, Hotel Palazzo Victoria integra visibili rovine archeologiche romane nel design contemporaneo. Pavimenti in vetro su strutture antiche, parquet restaurato, sedute in pelle e lounge nel cortile interno.

Servizi principali:
- Cortile interno coperto da vetro con scavi archeologici romani visibili
- Lounge bar con vini veneti regionali e aperitivi
- Sala lettura e spazi meeting
- Noleggio biciclette gratuito per tour in città
- Wi-Fi ad alta velocità e reception 24 ore su 24

Posizione e attrazioni vicine:
- Basilica Palladiana e Piazza dei Signori: 3 minuti a piedi
- Teatro Olimpico: 6 minuti a piedi
- Palazzo Chiericati: 5 minuti a piedi
- Stazione centrale di Vicenza: 12 minuti a piedi`,
  },
  {
    old_slug: "corte-galluresi-ferrara",
    slug: "corte-galluresi-bb-ferrara",
    description_en: `Situated inside Ferrara's Renaissance city walls, Corte Galluresi is a boutique B&B set around a private garden courtyard. The property blends historic architectural elements like wooden ceiling beams and exposed brick with modern home automation, offering quiet suites in the heart of the city.

Key Amenities:
- Private landscaped garden courtyard
- Quiet air-conditioned suites with smart-home tech
- Artisanal breakfast served with local Emilian pastries
- Complimentary Wi-Fi and coffee/tea making facilities in room
- Secure bike storage for exploring the city cycling paths

Location & Nearby Attractions:
- Estense Castle (Castello Estense): 7-minute walk
- Ferrara Cathedral (San Giorgio): 6-minute walk
- Palazzo dei Diamanti: 12-minute walk
- Renaissance City Walls Walkway: 5-minute walk`,
    description: `All'interno delle mura rinascimentali di Ferrara, Corte Galluresi è un B&B boutique costruito attorno a un giardino privato. Travi in legno, mattoni a vista e domotica moderna si fondono in suite silenziose nel cuore della città.

Servizi principali:
- Cortile-giardino privato curato
- Suite silenziose climatizzate con tecnologia smart-home
- Colazione artigianale con pasticceria emiliana locale
- Wi-Fi gratuito e set per tè e caffè in camera
- Deposito biciclette sicuro per le piste ciclabili cittadine

Posizione e attrazioni vicine:
- Castello Estense: 7 minuti a piedi
- Cattedrale di Ferrara (San Giorgio): 6 minuti a piedi
- Palazzo dei Diamanti: 12 minuti a piedi
- Passeggiata sulle Mura Rinascimentali: 5 minuti a piedi`,
  },
];

async function main() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error("Mancano NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY");
    process.exit(1);
  }

  let success = 0;
  const migrations = [];

  for (const hotel of HOTELS) {
    const { old_slug, slug, description_en, description } = hotel;
    const update = { description_en, description };
    if (slug !== old_slug) {
      update.slug = slug;
      migrations.push({ old_slug, new_slug: slug });
    }

    const { data: existing } = await sb
      .from("onboarding_hotels")
      .select("slug")
      .or(`slug.eq.${old_slug},slug.eq.${slug}`)
      .maybeSingle();

    if (!existing) {
      console.error(`NON TROVATO: ${old_slug} / ${slug}`);
      process.exitCode = 1;
      continue;
    }

    const lookupSlug = existing.slug;

    const { error } = await sb.from("onboarding_hotels").update(update).eq("slug", lookupSlug);

    if (error) {
      console.error(`ERRORE ${old_slug}:`, error.message);
      process.exitCode = 1;
      continue;
    }

    success++;
    const slugNote = slug !== old_slug ? ` → ${slug}` : "";
    console.log(`OK ${old_slug}${slugNote} (IT ${description.length} / EN ${description_en.length} chars)`);
  }

  console.log(`\nSlug migration summary (${migrations.length} changed):`);
  if (migrations.length === 0) {
    console.log("  (none)");
  } else {
    for (const { old_slug, new_slug } of migrations) {
      console.log(`  ${old_slug} → ${new_slug}`);
    }
  }

  console.log(`\nCompleted: ${success}/${HOTELS.length} succeeded`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
