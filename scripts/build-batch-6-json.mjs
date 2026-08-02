/**
 * Generates data/italy-luxury-hotels-batch-6-20.json from master card definitions.
 */
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../data/italy-luxury-hotels-batch-6-20.json");

const hotels = [
  {
    name: "Mandarin Oriental, Milan",
    city: "Milano",
    address: "Via Andegari, 9, 20121 Milano (MI), Italia",
    phone: "+39 02 8731 8888",
    email: "momln-reservations@mohg.com",
    website: "https://www.mandarinoriental.com/en/milan/porta-nova",
    latitude: 45.469167,
    longitude: 9.191389,
    slug: "mandarin-oriental-milan",
    description_en: `Located in the heart of Milan's fashion district, Mandarin Oriental, Milan combines Italian interior design by Antonio Citterio with Oriental luxury. Housed within four restored 18th-century palazzos, the hotel features guest rooms and suites adorned with neutral tones, custom furnishings, and marble bathrooms. Guests can enjoy fine dining at the 2-Michelin-starred Seta restaurant, relax in the courtyard garden, or indulge in holistic treatments at the extensive underground spa.

Key Amenities:
- 2-Michelin-starred Seta restaurant and Mandarin Garden bistro
- 900 sqm holistic Spa with indoor swimming pool and fitness center
- Private inner courtyard garden for outdoor dining and cocktails
- 24-hour dedicated concierge and valet parking
- Pet-friendly luxury amenities

Location & Nearby Attractions:
- Via Montenapoleone / Shopping District: 2-minute walk
- La Scala Theatre: 3-minute walk
- Duomo di Milano: 8-minute walk
- Milan Linate Airport (LIN): 8 km (5 miles)`,
    description: `Passeggi tra quattro palazzi del XVIII secolo elegantemente riconvertiti nel centro di Milano. Dopo uno shopping esclusivo tra le boutique di Via Montenapoleone, ti rilassi nel giardino interno prima di una cena raffinata firmata dallo chef Antonio Guida.

Nel cuore del Quadrilatero della Moda, Mandarin Oriental, Milan unisce il design italiano di Antonio Citterio al lusso orientale. Ospitato in quattro palazzi del XVIII secolo restaurati, l'hotel offre camere e suite con tonalità neutre, arredi su misura e bagni in marmo. Gli ospiti possono gustare l'alta cucina al ristorante Seta con due stelle Michelin, rilassarsi nel giardino interno o concedersi trattamenti olistici nella vasta spa sotterranea.

Servizi principali:
- Ristorante Seta con due stelle Michelin e bistrot Mandarin Garden
- Spa olistica di 900 mq con piscina coperta e centro fitness
- Giardino interno privato per cene all'aperto e cocktail
- Concierge dedicato 24 ore su 24 e parcheggio con servizio valet
- Servizi di lusso pet-friendly

Posizione e attrazioni vicine:
- Via Montenapoleone / Quadrilatero della Moda: 2 minuti a piedi
- Teatro alla Scala: 3 minuti a piedi
- Duomo di Milano: 8 minuti a piedi
- Aeroporto di Milano Linate (LIN): 8 km`,
  },
  {
    name: "Hotel Principe di Savoia",
    city: "Milano",
    address: "Piazza della Repubblica, 17, 20124 Milano (MI), Italia",
    phone: "+39 02 62301",
    email: "reservations.hps@dorchestercollection.com",
    website: "https://www.dorchestercollection.com/milan/hotel-principe-di-savoia",
    latitude: 45.479167,
    longitude: 9.196944,
    slug: "hotel-principe-di-savoia-milan",
    description_en: `Located on Piazza della Repubblica, Hotel Principe di Savoia (part of the Dorchester Collection) offers classic Italian luxury combined with Art Deco touches. The rooms showcase rich damask fabrics, dark wood furniture, and Carrara marble bathrooms. The rooftop Club 10 Fitness & Beauty Center features a heated pool and panoramic views across the Milanese skyline.

Key Amenities:
- Rooftop Club 10 Spa with heated indoor pool, sauna, and gym
- Acanto Restaurant serving classic Italian cuisine
- Iconic Principe Bar with custom crystal chandelier
- Complimentary private limousine shuttle to the city center
- Extensive banqueting and meeting halls

Location & Nearby Attractions:
- Milano Centrale Railway Station: 10-minute walk
- Brera District: 15-minute walk
- Duomo di Milano: 2 km (1.2 miles)
- Milan Malpensa Airport (MXP): 50 km (31 miles)`,
    description: `Varca la maestosa hall in stile neoclassico del Principe di Savoia, punto di riferimento del jet set internazionale fin dagli anni '20. La giornata si conclude alla Club 10 Spa all'ultimo piano, dove la piscina riscaldata regala una vista sui grattacieli di Porta Nuova.

Situato in Piazza della Repubblica, l'Hotel Principe di Savoia (Dorchester Collection) offre il classico lusso italiano con tocchi Art Déco. Le camere presentano ricchi tessuti damascati, mobili in legno scuro e bagni in marmo di Carrara. La Club 10 Fitness & Beauty Center all'ultimo piano dispone di piscina riscaldata e vista panoramica sullo skyline milanese.

Servizi principali:
- Club 10 Spa sul tetto con piscina coperta riscaldata, sauna e palestra
- Ristorante Acanto con cucina italiana classica
- Iconico Principe Bar con lampadario in cristallo su misura
- Navetta limousine privata gratuita verso il centro città
- Ampie sale per banchetti e meeting

Posizione e attrazioni vicine:
- Stazione Milano Centrale: 10 minuti a piedi
- Quartiere Brera: 15 minuti a piedi
- Duomo di Milano: 2 km
- Aeroporto di Milano Malpensa (MXP): 50 km`,
  },
  {
    name: "Park Hyatt Milano",
    city: "Milano",
    address: "Via Tommaso Grossi, 1, 20121 Milano (MI), Italia",
    phone: "+39 02 8821 1234",
    email: "milan.park@hyatt.com",
    website: "https://www.hyatt.com/en-US/hotel/italy/park-hyatt-milan/milph",
    latitude: 45.466111,
    longitude: 9.189722,
    slug: "park-hyatt-milan",
    description_en: `Situated steps from Galleria Vittorio Emanuele II and Piazza del Duomo, Park Hyatt Milano offers discreet luxury inside a restored 1870 palazzo. Designed with travertine stone, Venetian plaster, and custom artwork, the hotel features rooms with high ceilings and generous marble bathrooms. Facilities include fine dining options, a cocktail lounge, and an intimate spa retreat.

Key Amenities:
- Pellico 3 fine dining restaurant and Mio Lab cocktail lounge
- AQVAM Spa with Turkish bath and hydrotherapy tub
- 24-hour fitness center with Technogym equipment
- Dedicated concierge and private airport transfers
- Pet-friendly VIP program

Location & Nearby Attractions:
- Galleria Vittorio Emanuele II: 1-minute walk
- Duomo di Milano: 2-minute walk
- La Scala Theatre: 3-minute walk
- Milan Linate Airport (LIN): 7 km (4.3 miles)`,
    description: `Esci direttamente nella Galleria Vittorio Emanuele II per un tour delle boutique d'alta moda. Rientrato nell'hotel, ti godi il silenzio degli ambienti rifiniti in pietra travertino ed un aperitivo sartoriale al Mio Lab.

A due passi dalla Galleria Vittorio Emanuele II e da Piazza del Duomo, Park Hyatt Milano offre un lusso discreto in un palazzo del 1870 restaurato. Realizzato con travertino, stucco veneziano e opere d'arte su misura, l'hotel presenta camere con soffitti alti e ampi bagni in marmo. Le strutture includono ristorazione d'eccellenza, cocktail lounge e un'intima spa.

Servizi principali:
- Ristorante di alta cucina Pellico 3 e cocktail lounge Mio Lab
- AQVAM Spa con bagno turco e vasca idromassaggio
- Centro fitness 24 ore con attrezzatura Technogym
- Concierge dedicato e transfer aeroportuali privati
- Programma VIP pet-friendly

Posizione e attrazioni vicine:
- Galleria Vittorio Emanuele II: 1 minuto a piedi
- Duomo di Milano: 2 minuti a piedi
- Teatro alla Scala: 3 minuti a piedi
- Aeroporto di Milano Linate (LIN): 7 km`,
  },
  {
    name: "Portrait Milano",
    city: "Milano",
    address: "Corso Venezia, 11, 20121 Milano (MI), Italia",
    phone: "+39 02 3679 9500",
    email: "reservations.milano@portraitcollection.com",
    website: "https://www.portraitcollection.com/milano/en/",
    latitude: 45.467778,
    longitude: 9.198333,
    slug: "portrait-milano",
    description_en: `Owned by the Lungarno Collection (Ferragamo family), Portrait Milano has restored one of Europe's oldest seminaries into a luxury hotel and lifestyle hub. The property centers around a 2,800 sqm historic baroque courtyard framed by double loggias. Rooms display classic Italian design accents, hardwood floors, and vibrant crimson or emerald silk details.

Key Amenities:
- Historic colonnade piazza featuring luxury boutiques and dining
- 10_11 Bar, Restaurant, and Garden
- The Longevity Suite wellness center with subterranean pool
- Dedicated lifestyle team and butler service
- Direct entrance from Corso Venezia and Via Sant'Andrea

Location & Nearby Attractions:
- Corso Venezia & Quadrilatero della Moda: At the doorstep
- Via Montenapoleone: 3-minute walk
- Duomo di Milano: 10-minute walk
- Milan Linate Airport (LIN): 7.5 km (4.6 miles)`,
    description: `Attraversi la monumentale porta barocca dell'ex Seminario Arcivescovile del 1565 per accedere a una maestosa piazza colonnata di 2.800 mq. Tra boutique d'alta gamma, ristoranti e suite dal design haute couture firmato Ferragamo, vivi l'anima più sofisticata di Milano.

Di proprietà della Lungarno Collection (famiglia Ferragamo), Portrait Milano ha restaurato uno dei seminari più antichi d'Europa trasformandolo in hotel di lusso e lifestyle hub. La struttura ruota attorno a un cortile barocco storico di 2.800 mq incorniciato da doppie logge. Le camere presentano accenti del design italiano classico, pavimenti in legno e dettagli in seta cremisi o smeraldo.

Servizi principali:
- Piazza storica a colonnato con boutique di lusso e ristorazione
- 10_11 Bar, Restaurant and Garden
- The Longevity Suite con piscina sotterranea
- Team lifestyle dedicato e servizio maggiordomo
- Ingresso diretto da Corso Venezia e Via Sant'Andrea

Posizione e attrazioni vicine:
- Corso Venezia e Quadrilatero della Moda: sulla porta
- Via Montenapoleone: 3 minuti a piedi
- Duomo di Milano: 10 minuti a piedi
- Aeroporto di Milano Linate (LIN): 7,5 km`,
  },
  {
    name: "Armani Hotel Milano",
    city: "Milano",
    address: "Via Alessandro Manzoni, 31, 20121 Milano (MI), Italia",
    phone: "+39 02 8883 8888",
    email: "milan@armanihotels.com",
    website: "https://www.armanihotels.com/en/hotels/armani-hotel-milano/",
    latitude: 45.470278,
    longitude: 9.1925,
    slug: "armani-hotel-milan",
    description_en: `Embodying the signature aesthetic of Giorgio Armani, Armani Hotel Milano occupies a rationalist building on Via Manzoni. Rooms are fitted with minimalist lines, muted greige tones, backlit onyx walls, and state-of-the-art iPad controls. The top floors house a panoramic glass-walled spa, a lounge bar, and a fine dining restaurant overlooking the city.

Key Amenities:
- Panoramic Armani/SPA with relaxation pool and saunas
- Michelin-selected Armani/Ristorante with city views
- Armani/Bamboo Bar for aperitifs and nightlife
- Dedicated Lifestyle Managers for every guest
- Direct access to the Armani/Manzoni 31 concept store

Location & Nearby Attractions:
- Via Montenapoleone: 1-minute walk
- Pinacoteca di Brera: 5-minute walk
- Duomo di Milano: 8-minute walk
- Milan Linate Airport (LIN): 8 km (5 miles)`,
    description: `Entra nel palazzo a forma di "A" disegnato da Enrico Griffini negli anni '30 e completamente personalizzato da Giorgio Armani. Dalle tonalità greige delle suite fino alle ampie vetrate della SPA panoramica all'ottavo piano, ogni dettaglio trasmette armonia ed eleganza minimale.

Incarnando l'estetica distintiva di Giorgio Armani, Armani Hotel Milano occupa un edificio razionalista in Via Manzoni. Le camere presentano linee minimaliste, tonalità greige, pareti in onice retroilluminate e controlli iPad all'avanguardia. I piani superiori ospitano una spa panoramica a parete vetrata, lounge bar e ristorante di alta cucina con vista sulla città.

Servizi principali:
- Armani/SPA panoramica con piscina relax e saune
- Armani/Ristorante selezionato dalla Michelin con vista città
- Armani/Bamboo Bar per aperitivi e nightlife
- Lifestyle Manager dedicati per ogni ospite
- Accesso diretto al concept store Armani/Manzoni 31

Posizione e attrazioni vicine:
- Via Montenapoleone: 1 minuto a piedi
- Pinacoteca di Brera: 5 minuti a piedi
- Duomo di Milano: 8 minuti a piedi
- Aeroporto di Milano Linate (LIN): 8 km`,
  },
  {
    name: "The St. Regis Florence",
    city: "Firenze",
    address: "Piazza Ognissanti, 1, 50123 Firenze (FI), Italia",
    phone: "+39 055 27161",
    email: "stregisflorence@stregis.com",
    website: "https://www.marriott.com/en-us/hotels/flrxf-the-st-regis-florence/overview/",
    latitude: 43.771667,
    longitude: 11.245278,
    slug: "the-st-regis-florence",
    description_en: `Designed in the 15th century by Filippo Brunelleschi, The St. Regis Florence is a landmark palace on the banks of the Arno River. Interiors feature antique crystal chandeliers, Florentine frescoes, brocade wall coverings, and marble finishings. The property provides the signature St. Regis Butler Service, customized spa suites, and fine dining beneath a stained-glass glass ceiling.

Key Amenities:
- Signature St. Regis Butler Service
- Winter Garden Restaurant & Bar with stained-glass atrium
- Iridium Suites Spa featuring My Blend by Clarins
- Historic champagne sabering ritual every evening
- Fitness center and private valet parking

Location & Nearby Attractions:
- Santa Maria Novella Station: 5-minute walk
- Ponte Vecchio: 8-minute walk
- Uffizi Gallery: 12-minute walk
- Florence Airport (FLR): 7 km (4.3 miles)`,
    description: `Ti affacci dal balcone della tua suite per guardare scorrere il fiume Arno con il Ponte Vecchio all'orizzonte. Di ritorno nel Salone Winter Garden sotto il soffitto a vetrata colorata, assisti al rituale serale dello sciabolato del champagne.

Progettato nel XV secolo da Filippo Brunelleschi, The St. Regis Florence è un palazzo storico sulle rive dell'Arno. Gli interni presentano lampadari antichi in cristallo, affreschi fiorentini, rivestimenti in broccato e finiture in marmo. La struttura offre il Butler Service St. Regis, suite spa personalizzate e alta cucina sotto una vetrata colorata.

Servizi principali:
- Butler Service St. Regis
- Winter Garden Restaurant & Bar con atrio in vetro colorato
- Iridium Suites Spa con My Blend by Clarins
- Rituale storico dello sciabolato del champagne ogni sera
- Centro fitness e parcheggio valet privato

Posizione e attrazioni vicine:
- Stazione Santa Maria Novella: 5 minuti a piedi
- Ponte Vecchio: 8 minuti a piedi
- Galleria degli Uffizi: 12 minuti a piedi
- Aeroporto di Firenze (FLR): 7 km`,
  },
  {
    name: "Hotel Eden",
    city: "Roma",
    address: "Via Ludovisi, 49, 00187 Roma (RM), Italia",
    phone: "+39 06 478121",
    email: "reservations.her@dorchestercollection.com",
    website: "https://www.dorchestercollection.com/rome/hotel-eden",
    latitude: 41.906944,
    longitude: 12.487778,
    slug: "hotel-eden-rome",
    description_en: `Located near Villa Borghese and the Spanish Steps, Hotel Eden (Dorchester Collection) combines traditional Roman style with bright, modern interiors. Rooms feature high ceilings, fine marble bathrooms, and tall windows. The top floor houses the Michelin-starred La Terrazza restaurant, offering panoramic 360-degree vistas across the skyline of Rome.

Key Amenities:
- Michelin-starred rooftop restaurant La Terrazza
- Il Giardino Ristorante & Bar with outdoor terrace views
- The Eden Spa offering Sonya Dakar and Mei treatments
- Vaulted wine cellar for private tastings
- Valet parking and luxury car service

Location & Nearby Attractions:
- Via Veneto: 3-minute walk
- Villa Borghese Gardens: 3-minute walk
- Spanish Steps: 5-minute walk
- Rome Fiumicino Airport (FCO): 30 km (18.6 miles)`,
    description: `Sorseggi un cocktail sartoriale sulla terrazza dell'Hotel Eden ammirando la Cupola di San Pietro e il Vittoriano tinti di arancione. La posizione privilegiata tra Via Veneto e Villa Borghese regala un rifugio riservato a pochi passi dal centro dinamico di Roma.

Vicino a Villa Borghese e alla Scalinata di Trinità dei Monti, Hotel Eden (Dorchester Collection) unisce lo stile romano tradizionale a interni luminosi e moderni. Le camere presentano soffitti alti, bagni in marmo pregiato e finestre a tutta altezza. L'ultimo piano ospita il ristorante La Terrazza con stella Michelin e vista panoramica a 360 gradi sullo skyline di Roma.

Servizi principali:
- Ristorante La Terrazza sul tetto con stella Michelin
- Il Giardino Ristorante & Bar con terrazza esterna
- The Eden Spa con trattamenti Sonya Dakar e Mei
- Cantina a volta per degustazioni private
- Parcheggio valet e servizio auto di lusso

Posizione e attrazioni vicine:
- Via Veneto: 3 minuti a piedi
- Villa Borghese: 3 minuti a piedi
- Scalinata di Trinità dei Monti: 5 minuti a piedi
- Aeroporto di Roma Fiumicino (FCO): 30 km`,
  },
  {
    name: "The St. Regis Rome",
    city: "Roma",
    address: "Via Vittorio Emanuele Orlando, 3, 00185 Roma (RM), Italia",
    phone: "+39 06 47091",
    email: "stregisrome@stregis.com",
    website: "https://www.marriott.com/en-us/hotels/romxr-the-st-regis-rome/overview/",
    latitude: 41.903333,
    longitude: 12.494444,
    slug: "the-st-regis-rome",
    description_en: `Opened in 1894 by César Ritz, The St. Regis Rome is a historic palace hotel near Piazza della Repubblica. Following a full renovation, the property blends Belle Époque architecture with modern art installations and contemporary furnishings. Guests enjoy personalized butler services, spacious rooms with high ceilings, and an impressive ballroom decorated with Mario Spinetti frescoes.

Key Amenities:
- Signature St. Regis Butler Service for suite guests
- LUMEN Cocktails & Cuisine lounge bar and restaurant
- Kami Spa offering Asian wellness therapies
- Historic Ritz Ballroom with original 19th-century frescoes
- Private art tours and curated experiences

Location & Nearby Attractions:
- Piazza della Repubblica: 2-minute walk
- Baths of Diocletian: 3-minute walk
- Via Veneto: 10-minute walk
- Rome Fiumicino Airport (FCO): 31 km (19.2 miles)`,
    description: `Attraversi la hall restaurata con dettagli d'arte contemporanea e stucchi dorati originali dell'era di César Ritz. Il maggiordomo privato cura ogni dettaglio del tuo soggiorno prima dell'aperitivo nella maestosa sala LUMEN.

Aperto nel 1894 da César Ritz, The St. Regis Rome è un palazzo storico vicino a Piazza della Repubblica. Dopo una ristrutturazione completa, la struttura fonde architettura Belle Époque, installazioni d'arte moderna e arredi contemporanei. Gli ospiti godono di servizio maggiordomo personalizzato, camere spaziose con soffitti alti e un'imponente sala da ballo con affreschi di Mario Spinetti.

Servizi principali:
- Butler Service St. Regis per gli ospiti in suite
- LUMEN Cocktails & Cuisine lounge bar e ristorante
- Kami Spa con terapie benessere asiatiche
- Storica Ritz Ballroom con affreschi originali del XIX secolo
- Tour d'arte privati ed esperienze curate

Posizione e attrazioni vicine:
- Piazza della Repubblica: 2 minuti a piedi
- Terme di Diocleziano: 3 minuti a piedi
- Via Veneto: 10 minuti a piedi
- Aeroporto di Roma Fiumicino (FCO): 31 km`,
  },
  {
    name: "Hotel de Russie",
    city: "Roma",
    address: "Via del Babuino, 9, 00187 Roma (RM), Italia",
    phone: "+39 06 328881",
    email: "reservations.derussie@roccofortehotels.com",
    website: "https://www.roccofortehotels.com/hotels-and-resorts/hotel-de-russie/",
    latitude: 41.909722,
    longitude: 12.477222,
    slug: "hotel-de-russie-rome",
    description_en: `Situated between Piazza del Popolo and the Spanish Steps, Hotel de Russie (a Rocco Forte Hotel) is famous for its terraced 2,800 sqm Secret Garden. Designed by Giuseppe Valadier, the property features a mix of classic Roman motifs and modern interior lines. Guests can dine alfresco under citrus trees, enjoy hydrotherapy treatments at the spa, or relax in custom-designed suites.

Key Amenities:
- Terraced 2,800 sqm Secret Garden
- World-famous Stravinskij Bar for open-air cocktails
- Le Jardin de Russie Italian fine dining restaurant
- De Russie Spa with saltwater hydrotherapy pool and sauna
- Direct access to the Via del Babuino shopping district

Location & Nearby Attractions:
- Piazza del Popolo: 1-minute walk
- Spanish Steps: 5-minute walk
- Villa Borghese Entrance: 5-minute walk
- Rome Fiumicino Airport (FCO): 30 km (18.6 miles)`,
    description: `Passeggi tra le piazze e le terrazze del Giardino Segreto dell'Hotel de Russie sorseggiando un cocktail firmato al famoso Stravinskij Bar. Un'oasi verde e tranquilla nascosta tra Via del Babuino e la scalinata di Trinità dei Monti.

Tra Piazza del Popolo e la Scalinata di Trinità dei Monti, Hotel de Russie (Rocco Forte Hotels) è famoso per il Giardino Segreto terrazzato di 2.800 mq. Progettato da Giuseppe Valadier, la struttura unisce motivi romani classici e linee interne moderne. Gli ospiti possono cenare all'aperto sotto gli agrumi, concedersi idroterapia in spa o rilassarsi in suite su misura.

Servizi principali:
- Giardino Segreto terrazzato di 2.800 mq
- Il celebre Stravinskij Bar per cocktail all'aperto
- Ristorante di alta cucina italiana Le Jardin de Russie
- De Russie Spa con piscina idroterapia salata e sauna
- Accesso diretto al quartiere dello shopping di Via del Babuino

Posizione e attrazioni vicine:
- Piazza del Popolo: 1 minuto a piedi
- Scalinata di Trinità dei Monti: 5 minuti a piedi
- Ingresso Villa Borghese: 5 minuti a piedi
- Aeroporto di Roma Fiumicino (FCO): 30 km`,
  },
  {
    name: "Villa Cora",
    city: "Firenze",
    address: "Viale Machiavelli, 18, 50125 Firenze (FI), Italia",
    phone: "+39 055 228790",
    email: "booking@villacora.it",
    website: "https://www.villacora.it",
    latitude: 43.757778,
    longitude: 11.246667,
    slug: "villa-cora-florence",
    description_en: `Built in the late 19th century by Baron Oppenheim, Villa Cora is an eclectic aristocratic mansion located inside a private park overlooking the Boboli Gardens. The property showcases ornate chandeliers, original frescoes, mirror halls, and oriental decor elements. Features include an outdoor heated swimming pool, a rooftop terrace, and a wellness spa.

Key Amenities:
- Outdoor heated swimming pool surrounded by a rose garden
- Bellevue rooftop terrace with views over Florence
- Le Pasha restaurant serving Tuscan and Italian specialties
- Bene Spa featuring a tepidarium, sauna, and massage suites
- Free shuttle service to Florence city center

Location & Nearby Attractions:
- Boboli Gardens: 5-minute walk
- Pitti Palace: 10-minute walk
- Ponte Vecchio: 15-minute walk
- Florence Airport (FLR): 9 km (5.5 miles)`,
    description: `Ti rilassi a bordo della piscina riscaldata immersa nel parco di rose di Villa Cora, sulle colline che sovrastano il Giardino di Boboli. I saloni affrescati, gli stucchi dorati e la vista panoramica su Firenze evocano l'atmosfera delle grandi residenze aristocratiche dell'800.

Costruita alla fine del XIX secolo dal barone Oppenheim, Villa Cora è una dimora aristocratica eclettica in un parco privato con vista sui Giardini di Boboli. La struttura presenta lampadari ornati, affreschi originali, sale degli specchi e elementi decorativi orientali. Tra le dotazioni: piscina riscaldata all'aperto, terrazza sul tetto e spa benessere.

Servizi principali:
- Piscina riscaldata all'aperto circondata da un roseto
- Terrazza Bellevue sul tetto con vista su Firenze
- Ristorante Le Pasha con specialità toscane e italiane
- Bene Spa con tepidarium, sauna e suite massaggi
- Navetta gratuita verso il centro di Firenze

Posizione e attrazioni vicine:
- Giardino di Boboli: 5 minuti a piedi
- Palazzo Pitti: 10 minuti a piedi
- Ponte Vecchio: 15 minuti a piedi
- Aeroporto di Firenze (FLR): 9 km`,
  },
  {
    name: "Belmond Villa San Michele",
    city: "Fiesole",
    address: "Via Doccia, 4, 50014 Fiesole (FI), Italia",
    phone: "+39 055 5678200",
    email: "vsm.reservations@belmond.com",
    website: "https://www.belmond.com/hotels/europe/italy/fiesole/belmond-villa-san-michele/",
    latitude: 43.805556,
    longitude: 11.296944,
    slug: "belmond-villa-san-michele-fiesole",
    description_en: `Set on the hills of Fiesole, Belmond Villa San Michele is a restored 15th-century Franciscan monastery featuring a facade attributed to Michelangelo. The hotel combines historical architecture with terraced gardens, lemon groves, and ancient cloisters. Rooms feature wooden beams, terracotta floors, and carved furniture, accompanied by an outdoor pool overlooking Florence.

Key Amenities:
- Panoramic outdoor swimming pool overlooking the Florentine valley
- La Loggia fine dining restaurant on the historic arched terrace
- On-site Italian Cookery School for private classes
- Terraced botanical gardens and lemon groves
- Private shuttle transfers to Florence historic center

Location & Nearby Attractions:
- Fiesole Main Square (Piazza Mino): 10-minute walk
- Florence City Center (Piazza del Duomo): 15-minute drive (8 km)
- Uffizi Gallery: 8.5 km (5.2 miles)
- Florence Airport (FLR): 12 km (7.4 miles)`,
    description: `Dalla terrazza a picco sulla collina di Fiesole, contempli l'intero panorama di Firenze con la Cupola del Brunelleschi e la Torre del Mangia in prima linea. Passeggi tra i giardini di limoni di un ex monastero francescano con la facciata attribuita a Michelangelo.

Sulle colline di Fiesole, Belmond Villa San Michele è un ex monastero francescano del XV secolo restaurato, con facciata attribuita a Michelangelo. L'hotel unisce architettura storica, giardini terrazzati, limoneti e antichi chiostri. Le camere presentano travi in legno, pavimenti in cotto e mobili intagliati, con piscina all'aperto affacciata su Firenze.

Servizi principali:
- Piscina panoramica all'aperto sulla valle fiorentina
- Ristorante di alta cucina La Loggia sulla terrazza ad arco storica
- Scuola di cucina italiana in loco per lezioni private
- Giardini botanici terrazzati e limoneti
- Navetta privata verso il centro storico di Firenze

Posizione e attrazioni vicine:
- Piazza Mino (centro di Fiesole): 10 minuti a piedi
- Centro di Firenze (Piazza del Duomo): 15 minuti in auto (8 km)
- Galleria degli Uffizi: 8,5 km
- Aeroporto di Firenze (FLR): 12 km`,
  },
  {
    name: "Hotel Santa Caterina",
    city: "Amalfi",
    address: "Via Nazionale Statale Amalfitana, 9, 84011 Amalfi (SA), Italia",
    phone: "+39 089 871235",
    email: "info@hotelsantacaterina.it",
    website: "https://www.hotelsantacaterina.it",
    latitude: 40.630556,
    longitude: 14.593611,
    slug: "hotel-santa-caterina-amalfi",
    description_en: `Perched on a cliff surrounded by fruit orchards and olive groves, Hotel Santa Caterina is a late 19th-century Art Nouveau villa near Amalfi. Rooms feature bright Vietri hand-painted tiles, private balconies facing the sea, and classic Italian furniture. The property features glass elevators cut into the rock to reach the private sea-level beach club and saltwater pool.

Key Amenities:
- Private cliffside beach club with heated saltwater pool
- Glass elevators built directly into the rock face
- Michelin-starred Glicine restaurant and seaside Al Mare bistro
- Wellness center offering citrus-based treatments and massages
- Complimentary shuttle service into Amalfi town

Location & Nearby Attractions:
- Amalfi Town Center & Duomo: 10-minute walk (1 km)
- Ravello: 7 km (4.3 miles)
- Positano: 15 km (9.3 miles)
- Naples International Airport (NAP): 65 km (40 miles)`,
    description: `Scendi con gli ascensori scavati direttamente nella roccia fino al beach club privato dove la piscina d'acqua di mare riscaldata si affaccia sulle acque azzurre di Amalfi. Intorno a te, limoneti a terrazza e la brezza mediterranea.

Arroccata su una scogliera circondata da frutteti e uliveti, Hotel Santa Caterina è una villa liberty della fine dell'800 vicino ad Amalfi. Le camere presentano luminose maioliche di Vietri dipinte a mano, balconi privati sul mare e mobili italiani classici. La struttura dispone di ascensori di vetro nella roccia per raggiungere il beach club privato a livello del mare e la piscina di acqua salata.

Servizi principali:
- Beach club privato sulla scogliera con piscina di acqua salata riscaldata
- Ascensori di vetro scavati nella roccia
- Ristorante Glicine con stella Michelin e bistrot Al Mare sul mare
- Centro benessere con trattamenti agli agrumi e massaggi
- Navetta gratuita verso il centro di Amalfi

Posizione e attrazioni vicine:
- Centro di Amalfi e Duomo: 10 minuti a piedi (1 km)
- Ravello: 7 km
- Positano: 15 km
- Aeroporto di Napoli Capodichino (NAP): 65 km`,
  },
  {
    name: "Il San Pietro di Positano",
    city: "Positano",
    address: "Via Laurito, 2, 84017 Positano (SA), Italia",
    phone: "+39 089 875455",
    email: "reservations@ilsanpietro.it",
    website: "https://www.ilsanpietro.it",
    latitude: 40.622222,
    longitude: 14.498889,
    slug: "il-san-pietro-di-positano",
    description_en: `Built into the cliffs overlooking the bay of Positano, Il San Pietro di Positano (Relais & Châteaux) offers panoramic sea views from every suite. The interiors boast hand-painted tiles, custom bench seating, and expansive private terraces embedded with bougainvillea. Guests have access to a private beach cove, a cliffside tennis court, and an exclusive yacht for daily excursions.

Key Amenities:
- Michelin-starred Zass restaurant and beachside Carlino restaurant
- Private beach cove accessed via cliff elevator
- Seaside regulation tennis court right at the water's edge
- Spa center with organic treatments and Turkish bath
- Private yacht available for guest charters

Location & Nearby Attractions:
- Positano Town Center: 2 km (Complimentary shuttle available)
- Praiano: 5 km (3.1 miles)
- Amalfi: 14 km (8.7 miles)
- Naples International Airport (NAP): 60 km (37 miles)`,
    description: `Ti godi la privacy assoluta della tua terrazza privata sospesa sul mare prima di scendere in ascensore attraverso la roccia fino alla baia privata. Un punto di riferimento dell'ospitalità di lusso con viste sulle fucine colorate di Positano.

Incastonato nelle scogliere sulla baia di Positano, Il San Pietro di Positano (Relais & Châteaux) offre viste panoramiche sul mare da ogni suite. Gli interni vantano maioliche dipinte a mano, sedute su misura e ampie terrazze private tra bouganville. Gli ospiti accedono a una caletta privata, un campo da tennis sulla scogliera e uno yacht esclusivo per escursioni giornaliere.

Servizi principali:
- Ristorante Zass con stella Michelin e Carlino sulla spiaggia
- Caletta privata raggiungibile con ascensore nella scogliera
- Campo da tennis regolamentare a picco sul mare
- Centro spa con trattamenti biologici e bagno turco
- Yacht privato disponibile per charter degli ospiti

Posizione e attrazioni vicine:
- Centro di Positano: 2 km (navetta gratuita disponibile)
- Praiano: 5 km
- Amalfi: 14 km
- Aeroporto di Napoli Capodichino (NAP): 60 km`,
  },
  {
    name: "J.K. Place Capri",
    city: "Capri",
    address: "Via Provinciale Marina Grande, 225, 80073 Capri (NA), Italia",
    phone: "+39 081 8384001",
    email: "info@jkcapri.com",
    website: "https://www.jkcapri.com",
    latitude: 40.556667,
    longitude: 14.238611,
    slug: "jk-place-capri",
    description_en: `Situated on a cliff above Marina Grande, J.K. Place Capri combines coastal elegance with intimate townhouse design by Michele Bönan. Featuring nautical blue and white tones, high ceilings, classical statues, and private balconies overlooking the Tyrrhenian Sea, the property delivers boutique hospitality. Facilities include a sea-view pool deck, a wellness spa, and a Mediterranean kitchen.

Key Amenities:
- Outdoor swimming pool with sun terrace overlooking the Gulf of Naples
- J.K. Lounge restaurant and cocktail bar serving local seafood
- J.K. Spa with steam room, sauna, and customized facial treatments
- Private dock assistance and island tour organization
- Dedicated concierge and luxury vessel transfers

Location & Nearby Attractions:
- Marina Grande Beach & Port: 5-minute walk
- Capri Piazzetta: 10-minute drive / funicular ride
- Blue Grotto (Grotta Azzurra): 20 minutes by boat
- Naples Port / Airport: Direct ferry connections from Marina Grande`,
    description: `Rilassati sulle chaise-longue a bordo piscina ammirando l'intero Golfo di Napoli, avvolto dagli interni raffinati firmati dall'architetto Michele Bönan. L'atmosfera intima di una dimora privata a due passi dal mare di Capri.

Su una scogliera sopra Marina Grande, J.K. Place Capri unisce eleganza costiera e design da townhouse intimo firmato Michele Bönan. Con tonalità blu e bianche marine, soffitti alti, statue classiche e balconi privati sul Tirreno, la struttura offre ospitalità boutique. Le dotazioni includono solarium con piscina vista mare, spa benessere e cucina mediterranea.

Servizi principali:
- Piscina all'aperto con terrazza solarium sul Golfo di Napoli
- J.K. Lounge ristorante e cocktail bar con pesce locale
- J.K. Spa con bagno di vapore, sauna e trattamenti viso personalizzati
- Assistenza molo privato e organizzazione tour dell'isola
- Concierge dedicato e transfer con imbarcazioni di lusso

Posizione e attrazioni vicine:
- Spiaggia e porto di Marina Grande: 5 minuti a piedi
- Piazzetta di Capri: 10 minuti in auto / funicolare
- Grotta Azzurra: 20 minuti in barca
- Porto e aeroporto di Napoli: collegamenti diretti in traghetto da Marina Grande`,
  },
  {
    name: "Mezzatorre Hotel & Thermal Spa",
    city: "Forio",
    address: "Via Mezzatorre, 23, 80075 Forio (NA), Italia",
    phone: "+39 081 986111",
    email: "reservations@mezzatorre.com",
    website: "https://www.mezzatorre.com",
    latitude: 40.758056,
    longitude: 13.877222,
    slug: "mezzatorre-hotel-thermal-spa-ischia",
    description_en: `Located in Forio d'Ischia and managed by Pellicano Hotels, Mezzatorre Hotel & Thermal Spa surrounds a 16th-century watchtower overlooking a private bay. The property blends vintage retro touches with island architecture, offering rooms tucked into the pine forest or inside the historic tower. The resort centers on its thermal waters, offering curative baths, a seawater pool, and seaside dining.

Key Amenities:
- Thermal health spa with 3 hydrotherapy pools fed by private springs
- Outdoor seawater pool on a cliffside wooden deck
- Ristorante La Torre and La Baia seaside grill
- Private bay with sun loungers and boat dock
- Tennis court inside the 7-hectare private pine park

Location & Nearby Attractions:
- San Montano Bay & Negombo Thermal Park: 1.5 km (0.9 miles)
- Forio Town Center: 3 km (1.8 miles)
- Ischia Porto: 10 km (6.2 miles)
- Naples International Airport (NAP): Ferry connection via Ischia Porto`,
    description: `Ti tuffi nelle acque termali curative della spa ricavate all'interno dell'antica torre del XVI secolo, circondata da una pineta privata di 7 ettari. I tramonti sul mare di Forio completano l'atmosfera riservata targata Pellicano Hotels.

A Forio d'Ischia e gestito da Pellicano Hotels, Mezzatorre Hotel & Thermal Spa circonda una torre di avvistamento del XVI secolo su una baia privata. La struttura fonde tocchi vintage retrò e architettura isolana, con camere nella pineta o nella torre storica. Il resort ruota attorno alle acque termali, con bagni curativi, piscina di acqua di mare e ristorazione sul mare.

Servizi principali:
- Spa termale con 3 piscine idroterapiche alimentate da sorgenti private
- Piscina di acqua di mare all'aperto su pontile in legno a picco sul mare
- Ristorante La Torre e grill La Baia sul mare
- Baia privata con lettini e molo per imbarcazioni
- Campo da tennis nella pineta privata di 7 ettari

Posizione e attrazioni vicine:
- Baia di San Montano e Parco Termale Negombo: 1,5 km
- Centro di Forio: 3 km
- Ischia Porto: 10 km
- Aeroporto di Napoli Capodichino (NAP): collegamento in traghetto via Ischia Porto`,
  },
  {
    name: "Monastero Santa Rosa Hotel & Spa",
    city: "Conca dei Marini",
    address: "Via Roma, 2, 84010 Conca dei Marini (SA), Italia",
    phone: "+39 089 8321199",
    email: "info@monasterosantarosa.com",
    website: "https://www.monasterosantarosa.com",
    latitude: 40.623611,
    longitude: 14.571944,
    slug: "monastero-santa-rosa-conca-dei-marini",
    description_en: `Perched on a cliff edge in Conca dei Marini between Amalfi and Positano, Monastero Santa Rosa is a restored 17th-century Dominican monastery. Maintaining its historic architecture, vaulted ceilings, and quiet cloisters, the resort features 20 guest rooms with views of the Gulf of Salerno. Highlights include a multi-tiered garden, an infinity pool, and a thermal spa suite.

Key Amenities:
- Heated infinity pool carved into the cliff edge
- Michelin-starred Ristorante Il Refettorio
- 800 sqm Thermal Spa with vaulted ceilings and Santa Maria Novella products
- 4-tier terraced botanical gardens with sea panoramas
- Shuttle service to Amalfi town center

Location & Nearby Attractions:
- Emerald Grotto (Grotta dello Smeraldo): 1.5 km (0.9 miles)
- Amalfi Town: 5 km (3.1 miles)
- Positano: 15 km (9.3 miles)
- Naples International Airport (NAP): 62 km (38.5 miles)`,
    description: `Passeggi nei giardini a terrazza disposti su quattro livelli prima di tuffarti nella piscina infinity a sfioro a picco sul mare. L'accurato restauro di un convento di clausura del XVII secolo regala pace, alta cucina ed una spa termale ricavata nelle antiche volte.

A picco sulla scogliera a Conca dei Marini, tra Amalfi e Positano, Monastero Santa Rosa è un convento domenicano del XVII secolo restaurato. Conservando architettura storica, volte e chiostri silenziosi, il resort offre 20 camere con vista sul Golfo di Salerno. Tra i punti di forza: giardino su più livelli, piscina infinity e suite spa termale.

Servizi principali:
- Piscina infinity riscaldata scavata nel bordo della scogliera
- Ristorante Il Refettorio con stella Michelin
- Thermal Spa di 800 mq con volte e prodotti Santa Maria Novella
- Giardini botanici terrazzati su 4 livelli con panorama mare
- Navetta verso il centro di Amalfi

Posizione e attrazioni vicine:
- Grotta dello Smeraldo: 1,5 km
- Amalfi: 5 km
- Positano: 15 km
- Aeroporto di Napoli Capodichino (NAP): 62 km`,
  },
  {
    name: "Fonteverde Lifestyle Center",
    city: "San Casciano dei Bagni",
    address: "Località Terme, 1, 53040 San Casciano dei Bagni (SI), Italia",
    phone: "+39 0578 57241",
    email: "info@fonteverderesort.com",
    website: "https://www.fonteverderesort.com",
    latitude: 42.868611,
    longitude: 11.875278,
    slug: "fonteverde-lifestyle-center-san-casciano",
    description_en: `Built by Grand Duke Ferdinand I de' Medici in 1607, Fonteverde Lifestyle Center is a 5-star thermal spa resort set in the southern Val d'Orcia hills. The property features indoor and outdoor thermal pools fed directly by hot springs rich in calcium, sulfur, and magnesium. Guests enjoy medical thermal treatments, luxury suites with Tuscan antiques, and fine dining.

Key Amenities:
- 7 thermal swimming pools (indoor and outdoor hydrotherapy circuits)
- State-of-the-art medical wellness center and spa
- Ferdinando I fine dining restaurant serving Tuscan cuisine
- Dedicated thermal pool for pets
- Heliport and private parking

Location & Nearby Attractions:
- San Casciano dei Bagni Historic Village: 1 km (0.6 miles)
- Pienza: 35 km (21.7 miles)
- Orvieto: 40 km (25 miles)
- Rome Fiumicino Airport (FCO): 170 km (105 miles)`,
    description: `Immergiti nelle vasche termali calde all'aperto alimentate da sorgenti naturali ricche di minerali, con lo sguardo perso tra i calanchi della Val d'Orcia. Il palazzo fatto erigere dal Granduca Ferdinando I de' Medici nel 1607 unisce la tradizione termale toscana alla medicina olistica modernissima.

Costruito dal Granduca Ferdinando I de' Medici nel 1607, Fonteverde Lifestyle Center è un resort termale 5 stelle nelle colline meridionali della Val d'Orcia. La struttura dispone di piscine termali interne ed esterne alimentate da sorgenti calde ricche di calcio, zolfo e magnesio. Gli ospiti godono di trattamenti termali medici, suite di lusso con antiquariato toscano e alta cucina.

Servizi principali:
- 7 piscine termali (percorsi idroterapici interni ed esterni)
- Centro medico benessere e spa all'avanguardia
- Ristorante di alta cucina Ferdinando I con cucina toscana
- Piscina termale dedicata agli animali domestici
- Eliporto e parcheggio privato

Posizione e attrazioni vicine:
- Borgo storico di San Casciano dei Bagni: 1 km
- Pienza: 35 km
- Orvieto: 40 km
- Aeroporto di Roma Fiumicino (FCO): 170 km`,
  },
  {
    name: "Verdura Resort, a Rocco Forte Hotel",
    city: "Calamonaci",
    address: "SS 115 Km 131, 92019 Sciacca / Calamonaci (AG), Italia",
    phone: "+39 0925 998001",
    email: "reservations.verduraresort@roccofortehotels.com",
    website: "https://www.roccofortehotels.com/hotels-and-resorts/verdura-resort/",
    latitude: 37.472778,
    longitude: 13.189722,
    slug: "verdura-resort-a-rocco-forte-hotel-calamonaci",
    place_id: "ChIJf45dtExBGhMRMxmqYHPXD0g",
    description_en: `Nestled across 230 hectares of Mediterranean coastline near Sciacca and Calamonaci, Verdura Resort (a Rocco Forte Hotel) combines modern eco-architecture with Sicilian landscapes. Rooms feature private terraces facing the sea, warm earth tones, and local stone accents. The resort offers championship golf courses, a 4,000 sqm spa, private beaches, and culinary options.

Key Amenities:
- Two 18-hole championship golf courses designed by Kyle Phillips
- 4,000 sqm Irene Forte Spa with 4 outdoor thalassotherapy pools
- 60-meter outdoor infinity pool and private beach access
- 4 restaurants and 5 bars serving regional Mediterranean dishes
- 6 tennis courts and water sports center

Location & Nearby Attractions:
- Sciacca Historic Town: 15-minute drive (12 km)
- Valley of the Temples (Agrigento): 40 km (25 miles)
- Selinunte Archaeological Park: 45 km (28 miles)
- Palermo Falcone-Borsellino Airport (PMO): 120 km (74 miles)`,
    description: `Ti alleni sui due campi da golf da campionato a 18 buche affacciati sul Mar Mediterraneo prima di rigenerarti tra le vasche per talassoterapia della Irene Forte Spa. Una tenuta di 230 ettari immersa negli aranceti e negli uliveti della costa agrigentina.

Su 230 ettari di costa mediterranea vicino a Sciacca e Calamonaci, Verdura Resort (Rocco Forte Hotels) unisce eco-architettura moderna e paesaggi siciliani. Le camere presentano terrazze private sul mare, tonalità calde della terra e accenti in pietra locale. Il resort offre campi da golf da campionato, spa di 4.000 mq, spiagge private e proposte gastronomiche.

Servizi principali:
- Due campi da golf da campionato a 18 buche firmati Kyle Phillips
- Irene Forte Spa di 4.000 mq con 4 piscine esterne di talassoterapia
- Piscina infinity all'aperto da 60 metri e accesso alla spiaggia privata
- 4 ristoranti e 5 bar con cucina mediterranea regionale
- 6 campi da tennis e centro sport acquatici

Posizione e attrazioni vicine:
- Centro storico di Sciacca: 15 minuti in auto (12 km)
- Valle dei Templi (Agrigento): 40 km
- Parco archeologico di Selinunte: 45 km
- Aeroporto di Palermo Falcone-Borsellino (PMO): 120 km`,
  },
  {
    name: "Therasia Resort Sea & Spa",
    city: "Frazzanò",
    address: "Località Capo Grillo, 98050 Vulcano / Frazzanò, Lipari (ME), Italia",
    phone: "+39 090 9852555",
    email: "info@therasiaresort.it",
    website: "https://www.therasiaresort.it",
    latitude: 38.423056,
    longitude: 14.96,
    slug: "therasia-resort-sea-spa-frazzan",
    place_id: "ChIJy24F2rZ-FhMR_0Z8ZJWasnM",
    description_en: `Located on the promontory of Capo Grillo on Vulcano Island (in the municipality of Lipari/Frazzanò cataloging), Therasia Resort Sea & Spa is constructed from local black lava stone, tufo, and cedar wood. Overlooking the entire Aeolian archipelago, the hotel offers light-filled whitewashed rooms with sea-view terraces. Highlights include Michelin-starred fine dining and private platforms for sea swimming.

Key Amenities:
- Two infinity saltwater pools directly facing Lipari's sea stacks
- Michelin-starred Il Cappero and plant-based Tenerumi restaurants
- Vulcano Spa with warm indoor pool, hydrotherapy, and sauna
- Private wooden platforms for direct access into the sea
- Free shuttle service to Vulcano port and mud baths

Location & Nearby Attractions:
- Vulcano Port & Mud Baths: 3 km (1.8 miles)
- Island of Lipari: 10 minutes by hydrofoil
- Mount Vulcano Crater Hike: 2.5 km (1.5 miles)
- Catania Fontanarossa Airport (CTA): Transfer via Milazzo Port`,
    description: `Ammiri il tramonto sui Faraglioni di Lipari dalla piscina a sfioro incastonata nella roccia lavica nera di Capo Grillo. Gli aromi della macchia mediterranea e le proposte gastronomiche stellate rendono unica l'esperienza sull'Isola di Vulcano.

Sul promontorio di Capo Grillo sull'Isola di Vulcano, Therasia Resort Sea & Spa è costruito con pietra lavica nera locale, tufo e legno di cedro. Con vista sull'intero arcipelago eoliano, l'hotel offre camere bianche luminose con terrazze vista mare. Tra i punti di forza: alta cucina con stella Michelin e piattaforme private per il bagno in mare.

Servizi principali:
- Due piscine infinity di acqua salata affacciate sui faraglioni di Lipari
- Ristoranti Il Cappero con stella Michelin e Tenerumi plant-based
- Vulcano Spa con piscina coperta calda, idroterapia e sauna
- Piattaforme in legno private per l'accesso diretto al mare
- Navetta gratuita verso il porto di Vulcano e le fanghe

Posizione e attrazioni vicine:
- Porto di Vulcano e fanghe termali: 3 km
- Isola di Lipari: 10 minuti in aliscafo
- Escursione al cratere del Vulcano: 2,5 km
- Aeroporto di Catania Fontanarossa (CTA): transfer via porto di Milazzo`,
  },
  {
    name: "Mandarin Oriental, Lago di Como",
    city: "Blevio",
    address: "Via Édouard Castaing, 28, 22020 Blevio (CO), Italia",
    phone: "+39 031 32511",
    email: "mocmo-reservations@mohg.com",
    website: "https://www.mandarinoriental.com/en/lake-como/blevio",
    latitude: 45.836111,
    longitude: 9.098889,
    slug: "mandarin-oriental-lago-di-como-blevio",
    place_id: "ChIJBdleLVgnhEcRzdGeXAlV5j0",
    description_en: `Housed in the 19th-century Villa Roccabruna in Blevio, Mandarin Oriental, Lago di Como blends Asian hospitality with Italian design along the eastern shore of Lake Como. Surrounded by a botanical park, the resort offers suites with private garden terraces or lake balconies. The property features a floating pool on the lake, fine dining, and a subterranean wellness center.

Key Amenities:
- Heated outdoor pool floating directly on the waters of Lake Como
- Fine dining restaurant L'Aria and CO.MO Bar & Bistro
- Underground Spa with thermal circuit, ice pool, and indoor pool
- Private botanical park with century-old trees
- Private dock for boat tours and water taxi transfers

Location & Nearby Attractions:
- Como City Center: 5 km (3.1 miles)
- Bellagio: 25 km (15.5 miles)
- Villa Carlotta: 20 km (12.4 miles)
- Milan Malpensa Airport (MXP): 55 km (34 miles)`,
    description: `Ti rilassi sulla piscina floating sospesa sulle acque del lago mentre lo sguardo spazia tra le montagne lussureggianti e le dimore d'epoca di Blevio. Una dimora del XIX secolo che fu il rifugio della soprano Giuditta Pasta, oggi trasformata in un santuario di lusso riservato.

Ospitato nella Villa Roccabruna del XIX secolo a Blevio, Mandarin Oriental, Lago di Como fonde l'ospitalità asiatica al design italiano sulla riva orientale del Lago di Como. Circondato da un parco botanico, il resort offre suite con terrazze giardino private o balconi sul lago. La struttura dispone di piscina galleggiante sul lago, alta cucina e centro benessere sotterraneo.

Servizi principali:
- Piscina riscaldata all'aperto galleggiante sulle acque del Lago di Como
- Ristorante di alta cucina L'Aria e CO.MO Bar & Bistro
- Spa sotterranea con circuito termale, piscina del ghiaccio e piscina coperta
- Parco botanico privato con alberi secolari
- Molo privato per tour in barca e water taxi

Posizione e attrazioni vicine:
- Centro di Como: 5 km
- Bellagio: 25 km
- Villa Carlotta: 20 km
- Aeroporto di Milano Malpensa (MXP): 55 km`,
  },
];

writeFileSync(OUT, JSON.stringify(hotels, null, 2) + "\n");
console.log(`Wrote ${hotels.length} hotels to ${OUT}`);
