import {
  getCityPhotoVariants,
  resolveCanonicalCityId,
  unsplashPhoto,
  TRAVEL_PHOTOS,
} from "@/lib/destination-slider/cityPhotos";
import { getCatalogLandmarkHighlights } from "@/data/catalogLandmarks";
import { formatPoiLabel } from "@/lib/destination-slider/slideLabels";
import type { DestinationSliderSlide } from "@/types/destination-slider";

export type CityHighlight = {
  id: string;
  nameIt: string;
  nameEn: string;
  photoUrl: string;
  /** Ricerca Commons se manca photoUrl (raro). */
  commonsSearch?: string;
  hintIt?: string;
  hintEn?: string;
};

function w(
  id: string,
  nameIt: string,
  nameEn: string,
  photoUrl: string,
  hintIt: string,
  hintEn: string,
): CityHighlight {
  return { id, nameIt, nameEn, photoUrl, hintIt, hintEn };
}

const P = TRAVEL_PHOTOS;
const u = unsplashPhoto;

function h(
  id: string,
  nameIt: string,
  nameEn: string,
  photoId: string,
  hintIt: string,
  hintEn: string,
): CityHighlight {
  return { id, nameIt, nameEn, photoUrl: u(photoId), hintIt, hintEn };
}

const highlightsByCityId: Record<string, CityHighlight[]> = {
  "IT-ROM": [
    h("rome-colosseum", "Colosseo", "Colosseum", P.colosseum, "Icona imperiale", "Imperial landmark"),
    h("rome-pantheon", "Pantheon", "Pantheon", P.romePantheon, "Cupola e colonne", "Dome & columns"),
    h("rome-trastevere", "Trastevere", "Trastevere", P.romeTrasteverse, "Vicoli e trattorie", "Alleys & trattorias"),
    h("rome-sunrise", "Colosseo all'alba", "Colosseum at dawn", P.colosseumSunrise, "Luce dorata", "Golden light"),
  ],
  "IT-MIL": [
    h("mil-duomo", "Duomo di Milano", "Milan Cathedral", P.milanDuomo, "Piazza del Duomo", "Duomo square"),
    h("mil-galleria", "Galleria Vittorio Emanuele II", "Galleria Vittorio Emanuele II", P.milanGalleria, "Portici iconici", "Iconic arcades"),
    h("mil-navigli", "Navigli", "Navigli canals", P.canal, "Vita notturna", "Nightlife"),
    h("mil-night", "Milano by night", "Milan at night", P.night, "Luci in centro", "City lights"),
  ],
  "IT-FLR": [
    h("flr-duomo", "Duomo di Firenze", "Florence Cathedral", P.florence, "Centro UNESCO", "UNESCO center"),
    h("flr-ponte", "Ponte Vecchio", "Ponte Vecchio", P.florencePonteVecchio, "Sull'Arno", "On the Arno"),
    h("flr-arno", "Lungarni", "Arno riverfront", P.canal, "Tramonto sull'Arno", "Arno sunset"),
    h("flr-street", "Oltrarno", "Oltrarno", P.europeStreet, "Artigianato", "Craftsmen quarter"),
  ],
  "IT-VCE": [
    h("vce-canal", "Canal Grande", "Grand Canal", P.veniceGrandCanal, "In gondola", "By gondola"),
    h("vce-sunset", "Venezia al tramonto", "Venice at sunset", P.veniceSunset, "Luci sull'acqua", "Lights on water"),
    h("vce-bridge", "Ponte di Rialto", "Rialto Bridge", P.canal, "Cuore di Venezia", "Heart of Venice"),
    h("vce-street", "Calli e campielli", "Alleys & squares", P.europeStreet, "Centro storico", "Historic center"),
  ],
  "IT-REG": [
    w(
      "reg-lungomare",
      "Lungomare Falcomatà",
      "Falcomatà promenade",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Reggio_Calabria_-_Lungomare_Falcomat%C3%A0_-_4.jpg/960px-Reggio_Calabria_-_Lungomare_Falcomat%C3%A0_-_4.jpg",
      "Passeggiata sul mare",
      "Seaside walk",
    ),
    w(
      "reg-mura",
      "Mura Greche",
      "Greek Walls",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mura_Greche_Reggio_Calabria.jpg/960px-Mura_Greche_Reggio_Calabria.jpg",
      "Parco archeologico",
      "Archaeological park",
    ),
    w(
      "reg-magna",
      "Museo Magna Grecia",
      "National Archaeological Museum",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Bronzi_Di_Riace_Statua_A%2BB.jpg/960px-Bronzi_Di_Riace_Statua_A%2BB.jpg",
      "Bronzi di Riace",
      "Riace Bronzes",
    ),
    w(
      "reg-castello",
      "Castello Aragonese",
      "Aragonese Castle",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Castello_Aragonese_-_Reggio_Calabria_02.jpg/960px-Castello_Aragonese_-_Reggio_Calabria_02.jpg",
      "Vista sul porto",
      "Harbour view",
    ),
    w(
      "reg-duomo",
      "Duomo di Reggio",
      "Reggio Cathedral",
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Duomo_reggio_calabria_statua_santo_stefano.jpg",
      "Centro storico",
      "Historic center",
    ),
    w(
      "reg-stretto",
      "Stretto di Messina",
      "Strait of Messina",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Stretto_Di_Messina_Reggio_Calabria_Tramonto_%28120307611%29.jpeg/960px-Stretto_Di_Messina_Reggio_Calabria_Tramonto_%28120307611%29.jpeg",
      "Tramonto",
      "Sunset",
    ),
    w(
      "reg-mura-lungomare",
      "Mura Greche e lungomare",
      "Greek Walls & seafront",
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Reggio_calabria_mura_greche_lungomare.jpg",
      "Itinerario iconico",
      "Iconic route",
    ),
  ],
  "IT-NAP": [
    h("nap-vesuvio", "Vesuvio e golfo", "Vesuvius & bay", P.naplesVesuvius, "Panorama iconico", "Iconic view"),
    h("nap-coast", "Costa napoletana", "Naples coast", P.naplesCoast, "Mare e scogliere", "Sea & cliffs"),
    h("nap-center", "Centro storico", "Historic center", P.naplesSpaccanapoli, "Spaccanapoli", "Spaccanapoli"),
    h("nap-food", "Quartieri vivaci", "Lively districts", P.naplesPizza, "Pizza e mercati", "Pizza & markets"),
  ],
  "IT-TRN": [
    h("trn-mole", "Mole Antonelliana", "Mole Antonelliana", P.turinMole, "Simbolo di Torino", "Turin landmark"),
    h("trn-center", "Centro storico", "Historic center", P.milanGalleria, "Piazze sabaude", "Savoy squares"),
    h("trn-river", "Lungo Po", "Po riverfront", P.lakeComoBoat, "Passeggiata sul fiume", "Riverside walk"),
    h("trn-night", "Torino by night", "Turin at night", P.milanNight, "Luci cittadine", "City lights"),
  ],
  "IT-BLQ": [
    h("blq-towers", "Due Torri", "Two Towers", P.bolognaPiazza, "Centro medievale", "Medieval center"),
    h("blq-portico", "Portici UNESCO", "UNESCO porticoes", P.florenceOltrarno, "A piedi in città", "Walk the city"),
    h("blq-food", "Quadrilatero", "Quadrilatero market", P.naplesPizza, "Cucina emiliana", "Emilian cuisine"),
    h("blq-piazza", "Piazza Maggiore", "Piazza Maggiore", P.bolognaPiazza, "Cuore di Bologna", "Heart of Bologna"),
  ],
  "IT-VRN": [
    h("vrn-arena", "Arena di Verona", "Verona Arena", P.veronaArena, "Lirica sotto le stelle", "Opera under the stars"),
    h("vrn-romeo", "Casa di Giulietta", "Juliet's House", P.veniceAlley, "Centro storico", "Historic center"),
    h("vrn-adige", "Lungadige", "Adige river", P.lakeComoBoat, "Passeggiata", "Riverside walk"),
    h("vrn-piazza", "Piazza delle Erbe", "Piazza delle Erbe", P.veronaArena, "Mercato", "Market square"),
  ],
  "IT-PMO": [
    h("pmo-cathedral", "Cattedrale", "Palermo Cathedral", P.taorminaCorso, "Centro storico", "Historic center"),
    h("pmo-market", "Mercati storici", "Historic markets", P.naplesPizza, "Street food", "Street food"),
    h("pmo-sea", "Mondello", "Mondello beach", P.taorminaIsolaBella, "Mare cristallino", "Clear sea"),
    h("pmo-culture", "Musei e palazzi", "Museums & palaces", P.taormina, "Arabo-normanno", "Arab-Norman"),
  ],
  "IT-CTA": [
    h("cta-etna", "Etna", "Mount Etna", P.naplesVesuvius, "Vulcano attivo", "Active volcano"),
    h("cta-historic", "Centro barocco", "Baroque center", P.taorminaCorso, "Piazza Duomo", "Duomo square"),
    h("cta-coast", "Riviera ionica", "Ionian coast", P.taorminaCoast, "Lungomare", "Seafront"),
    h("cta-sea", "Scogliere nere", "Black lava coast", P.taorminaIsolaBella, "Mare e lava", "Sea and lava"),
  ],
  "IT-MAT": [
    h("mat-sassi", "Sassi di Matera", "Sassi di Matera", P.bolognaPiazza, "Patrimonio UNESCO", "UNESCO site"),
    h("mat-cave", "Chiese rupestri", "Rock churches", P.romePantheon, "Storia millenaria", "Ancient history"),
    h("mat-view", "Panorama", "Panoramic view", P.veronaArena, "Tramonto", "Sunset views"),
    h("mat-street", "Vicoli", "Alleyways", P.florenceOltrarno, "Atmosfera unica", "Unique atmosphere"),
  ],
  "IT-SOR": [
    h("sor-positano", "Positano", "Positano", P.amalfiPositanoHill, "Case colorate", "Colorful houses"),
    h("sor-sea", "Vista dal mare", "Sea view", P.amalfiPositanoSea, "Costiera", "Amalfi Coast"),
    h("sor-cliffs", "Scogliere", "Coastal cliffs", P.amalfiCoastCliffs, "Panorama", "Panorama"),
    h("sor-colors", "Villaggi costieri", "Coastal villages", P.amalfiPositanoColors, "Vista iconica", "Iconic view"),
  ],
  "IT-CQT": [
    h("cqt-village", "Manarola", "Manarola", P.cinqueTerre, "Borgo sul mare", "Seaside village"),
    h("cqt-trail", "Sentiero Azzurro", "Blue Trail", P.beach, "Trekking panoramico", "Scenic hike"),
    h("cqt-coast", "Scogliere liguri", "Ligurian cliffs", P.europeStreet, "Costa UNESCO", "UNESCO coast"),
    h("cqt-sea", "Mare Ligure", "Ligurian Sea", P.culture, "Acque cristalline", "Crystal waters"),
  ],
  "IT-CMO": [
    h("cmo-lake", "Lago di Como", "Lake Como", P.lakeComo, "Ville e monti", "Villas & mountains"),
    h("cmo-bellagio", "Bellagio", "Bellagio", P.europeStreet, "Perla del lago", "Pearl of the lake"),
    h("cmo-villa", "Ville storiche", "Historic villas", P.culture, "Giardini sul lago", "Lake gardens"),
    h("cmo-boat", "Tour in barca", "Boat tour", P.canal, "Vista dal lago", "Lake view"),
  ],
  "IT-BRI": [
    h("bri-trulli", "Alberobello", "Alberobello", P.pugliaTrulli, "Trulli UNESCO", "UNESCO trulli"),
    h("bri-sea", "Costa adriatica", "Adriatic coast", P.pugliaPolignano, "Mare e spiagge", "Sea & beaches"),
    h("bri-old", "Centro storico", "Historic center", P.pugliaOldTown, "Bari vecchia", "Old Bari"),
    h("bri-food", "Cucina pugliese", "Puglia cuisine", P.pugliaFood, "Orecchiette e mare", "Pasta & sea"),
  ],
  "IT-LCC": [
    h("lcc-old", "Lecce barocca", "Baroque Lecce", P.pugliaOldTown, "Pietra leccese", "Lecce stone"),
    h("lcc-coast", "Costa salentina", "Salento coast", P.pugliaCoast, "Mare cristallino", "Crystal sea"),
    h("lcc-food", "Piazze storiche", "Historic squares", P.pugliaFood, "Centro storico", "Historic center"),
    h("lcc-sea", "Borghi sul mare", "Seaside villages", P.pugliaPolignano, "Adriatico e Ionio", "Adriatic and Ionian"),
  ],
  "IT-TAR": [
    h("tar-mare", "Mar Grande", "Mar Grande", P.pugliaCoast, "Città dei due mari", "City of two seas"),
    h("tar-center", "Centro storico", "Historic center", P.pugliaOldTown, "Città vecchia", "Old town"),
    h("tar-food", "Tradizione marinara", "Seafood tradition", P.pugliaFood, "Sapori pugliesi", "Puglia flavors"),
    h("tar-coast", "Litorale ionico", "Ionian coast", P.pugliaPolignano, "Spiagge e scogliere", "Beaches and cliffs"),
  ],
  "IT-AGR": [
    h("agr-valley", "Valle dei Templi", "Valley of the Temples", P.taormina, "Patrimonio UNESCO", "UNESCO heritage"),
    h("agr-sea", "Scala dei Turchi", "Scala dei Turchi", P.taorminaIsolaBella, "Falesie bianche", "White cliffs"),
    h("agr-old", "Centro storico", "Historic center", P.taorminaCorso, "Vicoli siciliani", "Sicilian alleys"),
    h("agr-coast", "Costa agrigentina", "Agrigento coast", P.taorminaCoast, "Mare mediterraneo", "Mediterranean sea"),
  ],
  "IT-CAG": [
    h("cag-beach", "Costa smeralda", "Emerald Coast", P.sardinia, "Mare turchese", "Turquoise sea"),
    h("cag-coast", "Spiagge della Sardegna", "Sardinian beaches", P.beach, "Paradiso mediterraneo", "Mediterranean paradise"),
    h("cag-old", "Centro storico", "Historic center", P.europeStreet, "Cagliari", "Cagliari"),
    h("cag-nature", "Natura selvaggia", "Wild nature", P.culture, "Scogliere e macchia", "Cliffs & scrubland"),
  ],
  "IT-TAO": [
    h("tao-greek", "Teatro Greco", "Greek Theatre", P.taormina, "Vista sull'Etna", "Etna views"),
    h("tao-corso", "Corso Umberto", "Corso Umberto", P.taorminaCorso, "Passeggiata", "Evening stroll"),
    h("tao-beach", "Isola Bella", "Isola Bella", P.taorminaIsolaBella, "Baia turchese", "Turquoise bay"),
    h("tao-coast", "Costa siciliana", "Sicilian coast", P.naplesCoast, "Mare cristallino", "Crystal sea"),
  ],
  "IT-CAP": [
    h("cap-faraglioni", "Faraglioni", "Faraglioni", P.amalfiPositanoSea, "Icona di Capri", "Capri landmark"),
    h("cap-marina", "Marina Piccola", "Marina Piccola", P.amalfiPositanoHill, "Acque turchesi", "Turquoise waters"),
    h("cap-cliffs", "Scogliere", "Cliffs", P.amalfiCoastCliffs, "Panorama sul Tirreno", "Tyrrhenian view"),
    h("cap-sunset", "Tramonto a Capri", "Capri sunset", P.amalfiPositanoColors, "Luce dorata", "Golden light"),
  ],
  "IT-OLB": [
    h("olb-coast", "Costa Smeralda", "Emerald Coast", P.sardiniaEmerald, "Acque cristalline", "Crystal waters"),
    h("olb-beach", "Spiagge del nord", "Northern beaches", P.sardiniaBeach, "Sabbia chiara", "White sand"),
    h("olb-nature", "Scogliere granitiche", "Granite cliffs", P.sardiniaCliffs, "Natura selvaggia", "Wild nature"),
    h("olb-town", "Centro di Olbia", "Olbia center", P.sardiniaCagliari, "Passeggiata serale", "Evening walk"),
  ],
  "IT-AHO": [
    h("aho-old", "Alghero vecchia", "Old Alghero", P.sardiniaCagliari, "Mura sul mare", "Sea walls"),
    h("aho-coast", "Riviera del corallo", "Coral Riviera", P.sardiniaBeach, "Spiagge turchesi", "Turquoise beaches"),
    h("aho-cliffs", "Capo Caccia", "Capo Caccia", P.sardiniaCliffs, "Scogliere calcaree", "Limestone cliffs"),
    h("aho-sunset", "Tramonto in rada", "Bay sunset", P.sardiniaEmerald, "Vista panoramica", "Panoramic view"),
  ],
  "FR-PAR": [
    h("par-eiffel", "Torre Eiffel", "Eiffel Tower", P.paris, "Champ de Mars", "Champ de Mars"),
    h("par-seine", "Rive gauche", "Left Bank", P.parisSeine, "Sulla Senna", "On the Seine"),
    h("par-street", "Montmartre", "Montmartre", P.parisStreet, "Sacré-Cœur", "Sacré-Cœur"),
    h("par-night", "Luci della città", "City lights", P.night, "Sera parigina", "Parisian evening"),
  ],
  "GB-LON": [
    h("lon-bridge", "Tower Bridge", "Tower Bridge", P.london, "Thames", "River Thames"),
    h("lon-bigben", "Big Ben", "Big Ben", P.londonBigBen, "Westminster", "Westminster"),
    h("lon-eye", "London Eye", "London Eye", P.londonBridge, "South Bank", "South Bank"),
    h("lon-night", "Luci notturne", "Night lights", P.night, "Skyline", "Skyline"),
  ],
  "ES-BCN": [
    h("bcn-sagrada", "Sagrada Família", "Sagrada Família", P.barcelonaSagrada, "Gaudí", "Gaudí"),
    h("bcn-aerial", "Skyline", "Skyline", P.barcelonaAerial, "Vista aerea", "Aerial view"),
    h("bcn-gothic", "Barrio Gótico", "Gothic Quarter", P.europeStreet, "Storia medievale", "Medieval history"),
    h("bcn-beach", "Barceloneta", "Barceloneta", P.beach, "Mare urbano", "Urban beach"),
  ],
  "ES-MAD": [
    h("mad-plaza", "Plaza Mayor", "Plaza Mayor", P.madridPlaza, "Centro", "City center"),
    h("mad-palace", "Palacio Real", "Royal Palace", P.madridPalace, "Madrid classico", "Classic Madrid"),
    h("mad-park", "Parco del Retiro", "Retiro Park", P.culture, "Verde in città", "Green oasis"),
    h("mad-food", "Tapas", "Tapas bars", P.night, "Mercato di San Miguel", "San Miguel market"),
  ],
  "DE-BER": [
    h("ber-gate", "Porta di Brandeburgo", "Brandenburg Gate", P.berlinGate, "Mitte", "Mitte district"),
    h("ber-dusk", "Brandeburgo al tramonto", "Gate at dusk", P.berlinGateDusk, "Luci serali", "Evening lights"),
    h("ber-museum", "Museum Island", "Museum Island", P.culture, "UNESCO", "UNESCO"),
    h("ber-night", "Vita notturna", "Nightlife", P.night, "Kreuzberg", "Kreuzberg"),
  ],
  "NL-AMS": [
    h("ams-canal", "Canali del centro", "Central canals", P.amsterdamCanal, "In bici", "By bike"),
    h("ams-houses", "Case di Amsterdam", "Canal houses", P.amsterdamHouses, "Facciate storiche", "Historic facades"),
    h("ams-street", "Jordaan", "Jordaan", P.europeStreet, "Quartiere trendy", "Trendy quarter"),
    h("ams-market", "Mercato dei fiori", "Flower market", P.culture, "Bloemenmarkt", "Bloemenmarkt"),
  ],
  "PT-LIS": [
    h("lis-tram", "Tram 28", "Tram 28", P.lisbonTram, "Alfama", "Alfama"),
    h("lis-panorama", "Miradouros", "Viewpoints", P.lisbonPanorama, "Tramonto", "Sunset"),
    h("lis-tower", "Torre di Belém", "Belém Tower", P.beach, "Fiume Tago", "Tagus river"),
    h("lis-food", "Pastéis de nata", "Pastéis de nata", P.night, "Bairro Alto", "Bairro Alto"),
  ],
  "CZ-PRG": [
    h("prg-bridge", "Ponte Carlo", "Charles Bridge", P.pragueBridge, "Moldava", "Vltava river"),
    h("prg-old", "Città Vecchia", "Old Town", P.pragueOld, "Centro storico", "Historic center"),
    h("prg-square", "Piazza della Città Vecchia", "Old Town Square", P.europeStreet, "Orologio astronomico", "Astronomical clock"),
    h("prg-night", "Praga by night", "Prague at night", P.night, "Luci sul fiume", "River lights"),
  ],
  "AT-VIE": [
    h("vie-schonbrunn", "Schönbrunn", "Schönbrunn Palace", P.viennaSchonbrunn, "Giardini imperiali", "Imperial gardens"),
    h("vie-palace", "Palazzo di Hofburg", "Hofburg Palace", P.viennaPalace, "Centro storico", "Historic center"),
    h("vie-cafe", "Caffè viennesi", "Viennese cafés", P.culture, "Tradizione", "Tradition"),
    h("vie-street", "Ringstrasse", "Ringstrasse", P.europeStreet, "Architettura", "Architecture"),
  ],
  "GR-JTR": [
    h("jtr-caldera", "Caldera di Santorini", "Santorini caldera", P.santorini, "Case bianche", "White houses"),
    h("jtr-sunset", "Tramonto a Oia", "Oia sunset", P.santoriniSunset, "Vista iconica", "Iconic view"),
    h("jtr-beach", "Spiagge vulcaniche", "Volcanic beaches", P.beach, "Mare Egeo", "Aegean Sea"),
    h("jtr-street", "Vicoli di Fira", "Fira alleys", P.europeStreet, "Cicladi", "Cyclades"),
  ],
  "JP-TYO": [
    h("tyo-shibuya", "Shibuya Crossing", "Shibuya Crossing", P.tokyoShibuya, "Cuore di Tokyo", "Heart of Tokyo"),
    h("tyo-senso", "Senso-ji", "Senso-ji Temple", P.tokyoTemple, "Asakusa", "Asakusa"),
    h("tyo-skyline", "Skyline di Tokyo", "Tokyo skyline", P.tokyo, "Torri moderne", "Modern towers"),
    h("tyo-night", "Shinjuku", "Shinjuku", P.night, "Luci al neon", "Neon lights"),
  ],
  "US-NYC": [
    h("nyc-skyline", "Skyline di Manhattan", "Manhattan skyline", P.nyc, "Downtown", "Downtown"),
    h("nyc-bridge", "Brooklyn Bridge", "Brooklyn Bridge", P.nycBrooklyn, "East River", "East River"),
    h("nyc-park", "Central Park", "Central Park", P.nycCentral, "Oasi verde", "Green oasis"),
    h("nyc-night", "Times Square", "Times Square", P.night, "Luci e teatri", "Lights & theaters"),
  ],
  "TH-HKT": [
    h("pkt-view", "Panorama Phuket", "Phuket viewpoint", P.phuketViewpoint, "Vista dalla collina", "Hill view"),
    h("pkt-island", "Isola tropicale", "Tropical island", P.phuketIsland, "Mare Andamano", "Andaman Sea"),
    h("pkt-sunset", "Tramonto a Patong", "Patong sunset", P.phuketSunset, "Spiaggia dorata", "Golden beach"),
    h("pkt-beach", "Patong Beach", "Patong Beach", P.phuketBeach, "Mare cristallino", "Crystal sea"),
  ],
  "TH-BKK": [
    h("bkk-arun", "Wat Arun", "Wat Arun", P.bangkokWatArun, "Chao Phraya", "Chao Phraya"),
    h("bkk-sunset", "Wat Arun al tramonto", "Wat Arun at sunset", P.bangkokWatSunset, "Cielo colorato", "Colorful sky"),
    h("bkk-night", "Wat Arun di notte", "Wat Arun at night", P.bangkokWatNight, "Luci sul fiume", "River lights"),
    h("bkk-skyline", "Skyline moderno", "Modern skyline", P.bangkokSkyline, "Sukhumvit", "Sukhumvit"),
  ],
  "AE-DXB": [
    h("dxb-burj", "Burj Khalifa", "Burj Khalifa", P.dubai, "Downtown", "Downtown"),
    h("dxb-marina", "Dubai Marina", "Dubai Marina", P.dubaiMarina, "Skyline moderno", "Modern skyline"),
    h("dxb-night", "Luci della città", "City lights", P.night, "Futurismo", "Futuristic"),
    h("dxb-desert", "Deserto", "Desert safari", P.beach, "Dune bashing", "Dune bashing"),
  ],
  "TR-IST": [
    h("ist-hagia", "Santa Sofia", "Hagia Sophia", P.istanbulMosque, "Sultanahmet", "Sultanahmet"),
    h("ist-skyline", "Skyline sul Bosforo", "Bosphorus skyline", P.istanbulSkyline, "Due continenti", "Two continents"),
    h("ist-bazaar", "Gran Bazar", "Grand Bazaar", P.europeStreet, "Shopping", "Shopping"),
    h("ist-food", "Cucina turca", "Turkish cuisine", P.night, "Mercati", "Markets"),
  ],
  "AU-SYD": [
    h("syd-opera", "Opera House", "Sydney Opera House", P.dubaiMarina, "Harbour", "Harbour"),
    h("syd-bridge", "Harbour Bridge", "Harbour Bridge", P.nycBrooklyn, "Climb o vista", "Climb or view"),
    h("syd-beach", "Bondi Beach", "Bondi Beach", P.phuketBeach, "Surf e sole", "Surf & sun"),
    h("syd-rocks", "The Rocks", "The Rocks", P.tokyoShibuya, "Storia coloniale", "Colonial history"),
  ],
  "GR-ATH": [
    h("ath-acropolis", "Acropoli", "Acropolis", P.istanbulMosque, "Patrimonio classico", "Classical landmark"),
    h("ath-plaka", "Plaka", "Plaka", P.pragueSquare, "Quartiere storico", "Historic quarter"),
    h("ath-lycabettus", "Monte Licabetto", "Lycabettus hill", P.istanbulSkyline, "Vista città", "City view"),
    h("ath-night", "Atene by night", "Athens at night", P.viennaPalace, "Luci del centro", "City lights"),
  ],
  "GR-JMK": [
    h("jmk-windmills", "Mulini di Mykonos", "Mykonos windmills", P.santoriniSunset, "Cartolina egea", "Aegean postcard"),
    h("jmk-little-venice", "Little Venice", "Little Venice", P.santoriniOia, "Case sul mare", "Houses by the sea"),
    h("jmk-beach", "Spiagge di Mykonos", "Mykonos beaches", P.santoriniBeach, "Acqua turchese", "Turquoise waters"),
    h("jmk-old-port", "Porto vecchio", "Old port", P.santorini, "Tramonto sul porto", "Harbor sunset"),
  ],
  "US-LAX": [
    h("lax-hollywood", "Hollywood", "Hollywood", P.nycTimesSquare, "Icona pop", "Pop icon"),
    h("lax-santa-monica", "Santa Monica", "Santa Monica", P.phuketBeach, "Pacific coast", "Pacific coast"),
    h("lax-downtown", "Downtown LA", "Downtown LA", P.dubaiMarina, "Skyline moderno", "Modern skyline"),
    h("lax-sunset", "Sunset Boulevard", "Sunset Boulevard", P.nycBrooklyn, "Vita notturna", "Nightlife"),
  ],
  "US-MIA": [
    h("mia-south-beach", "South Beach", "South Beach", P.phuketBeach, "Art Deco district", "Art Deco district"),
    h("mia-biscayne", "Biscayne Bay", "Biscayne Bay", P.phuketSunset, "Vista sull'oceano", "Ocean view"),
    h("mia-wynwood", "Wynwood", "Wynwood", P.nycTimesSquare, "Street art", "Street art"),
    h("mia-night", "Miami by night", "Miami at night", P.santoriniBeach, "Luci tropicali", "Tropical lights"),
  ],
  "SG-SIN": [
    h("sin-bay", "Marina Bay", "Marina Bay", P.tokyoShinjuku, "Skyline iconico", "Iconic skyline"),
    h("sin-gardens", "Gardens by the Bay", "Gardens by the Bay", P.bangkokSkyline, "Architettura verde", "Green architecture"),
    h("sin-quay", "Clarke Quay", "Clarke Quay", P.tokyoShibuya, "Riverside nightlife", "Riverside nightlife"),
    h("sin-city", "Centro finanziario", "Financial district", P.dubaiMarina, "Modernità asiatica", "Asian modernity"),
  ],
  "BR-RIO": [
    h("rio-copacabana", "Copacabana", "Copacabana", P.phuketIsland, "Spiaggia iconica", "Iconic beach"),
    h("rio-ipanema", "Ipanema", "Ipanema", P.phuketSunset, "Tramonto sull'Atlantico", "Atlantic sunset"),
    h("rio-sugarloaf", "Pão de Açúcar", "Sugarloaf", P.santoriniBeach, "Vista panoramica", "Panoramic view"),
    h("rio-lapa", "Lapa", "Lapa", P.nycTimesSquare, "Vita urbana", "Urban life"),
  ],
};

function buildGenericHighlights(cityName: string, input: { cityId?: string | null; countryCode?: string | null }): CityHighlight[] {
  const photos = getCityPhotoVariants({ cityName, cityId: input.cityId, countryCode: input.countryCode, count: 3 });
  const labels: Array<[string, string, string, string]> = [
    [`${cityName}`, cityName, "Destinazione", "Destination"],
    [`Vedute di ${cityName}`, `Views of ${cityName}`, "Galleria", "Gallery"],
    [`Scopri ${cityName}`, `Discover ${cityName}`, "In evidenza", "Featured"],
  ];

  return labels.map(([nameIt, nameEn, hintIt, hintEn], index) => ({
    id: `gen-${index}`,
    nameIt,
    nameEn,
    photoUrl: photos[index] ?? photos[0],
    hintIt,
    hintEn,
  }));
}

/** Pacchetti curati per mete fuori dal catalogo principale (+ Reggio Wikimedia). */
export function getManualHighlightsForCity(input: {
  cityName: string;
  cityId?: string | null;
  countryCode?: string | null;
}): CityHighlight[] {
  const canonicalId = resolveCanonicalCityId(input);
  if (canonicalId) {
    const catalog = getCatalogLandmarkHighlights(canonicalId);
    if (catalog) return catalog;
    if (highlightsByCityId[canonicalId]) return highlightsByCityId[canonicalId];
  }
  return [];
}

/** @deprecated Usare getManualHighlightsForCity + dynamicEditorial */
export function getHighlightsForCity(input: {
  cityName: string;
  cityId?: string | null;
  countryCode?: string | null;
}): CityHighlight[] {
  const manual = getManualHighlightsForCity(input);
  if (manual.length > 0) return manual;

  return buildGenericHighlights(input.cityName, {
    cityId: resolveCanonicalCityId(input) ?? input.cityId,
    countryCode: input.countryCode,
  });
}

export function highlightsToSlides(
  highlights: CityHighlight[],
  cityLabel: string,
  locale: "it" | "en",
  options?: { editorial?: boolean },
): DestinationSliderSlide[] {
  const cityName = cityLabel.split(",")[0]?.trim() ?? cityLabel;
  return highlights.map((item) => {
    const displayName = locale === "it" ? item.nameIt : item.nameEn;
    return {
      id: `curated-${item.id}`,
      title: options?.editorial ? displayName : formatPoiLabel(displayName, cityName),
      photoUrl: item.photoUrl,
      kind: "poi" as const,
      hint: locale === "it" ? item.hintIt : item.hintEn,
    };
  });
}
