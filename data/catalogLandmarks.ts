import { unsplashPhoto, TRAVEL_PHOTOS as T } from "@/lib/destination-slider/cityPhotos";
import type { CityHighlight } from "@/data/cityHighlights";

/**
 * Ogni landmark del catalogo ha una foto Unsplash verificata e abbinata al titolo.
 * Non usare mai chiavi generiche (culture, night, beach…) per luoghi nominati.
 */
export type VerifiedLandmark = {
  id: string;
  nameIt: string;
  nameEn: string;
  photoId: string;
  hintIt: string;
  hintEn: string;
};

function toHighlights(landmarks: VerifiedLandmark[]): CityHighlight[] {
  return landmarks.map((landmark) => ({
    id: landmark.id,
    nameIt: landmark.nameIt,
    nameEn: landmark.nameEn,
    photoUrl: unsplashPhoto(landmark.photoId),
    hintIt: landmark.hintIt,
    hintEn: landmark.hintEn,
  }));
}

/** Mete in evidenza: 4 luoghi iconici con foto verificate per ciascuna città. */
export const CATALOG_LANDMARKS: Record<string, VerifiedLandmark[]> = {
  "IT-ROM": [
    { id: "rome-colosseum", nameIt: "Colosseo", nameEn: "Colosseum", photoId: T.colosseum, hintIt: "Icona imperiale", hintEn: "Imperial landmark" },
    { id: "rome-pantheon", nameIt: "Pantheon", nameEn: "Pantheon", photoId: T.romePantheon, hintIt: "Cupola e colonne", hintEn: "Dome & columns" },
    { id: "rome-trastevere", nameIt: "Trastevere", nameEn: "Trastevere", photoId: T.romeTrasteverse, hintIt: "Vicoli e trattorie", hintEn: "Alleys & trattorias" },
    { id: "rome-sunrise", nameIt: "Colosseo all'alba", nameEn: "Colosseum at dawn", photoId: T.colosseumSunrise, hintIt: "Luce dorata", hintEn: "Golden light" },
  ],
  "IT-MIL": [
    { id: "mil-duomo", nameIt: "Duomo di Milano", nameEn: "Milan Cathedral", photoId: T.milanDuomo, hintIt: "Piazza del Duomo", hintEn: "Duomo square" },
    { id: "mil-galleria", nameIt: "Galleria Vittorio Emanuele II", nameEn: "Galleria Vittorio Emanuele II", photoId: T.milanGalleria, hintIt: "Portici iconici", hintEn: "Iconic arcades" },
    { id: "mil-navigli", nameIt: "Navigli", nameEn: "Navigli canals", photoId: T.milanNavigli, hintIt: "Canali al tramonto", hintEn: "Canals at sunset" },
    { id: "mil-night", nameIt: "Milano by night", nameEn: "Milan at night", photoId: T.milanNight, hintIt: "Duomo illuminato", hintEn: "Illuminated Duomo" },
  ],
  "IT-FLR": [
    { id: "flr-duomo", nameIt: "Duomo di Firenze", nameEn: "Florence Cathedral", photoId: T.florence, hintIt: "Centro UNESCO", hintEn: "UNESCO center" },
    { id: "flr-ponte", nameIt: "Ponte Vecchio", nameEn: "Ponte Vecchio", photoId: T.florencePonteVecchio, hintIt: "Sull'Arno", hintEn: "On the Arno" },
    { id: "flr-arno", nameIt: "Lungarni", nameEn: "Arno riverfront", photoId: T.florenceArno, hintIt: "Tramonto sull'Arno", hintEn: "Arno sunset" },
    { id: "flr-street", nameIt: "Oltrarno", nameEn: "Oltrarno", photoId: T.florenceOltrarno, hintIt: "Skyline fiorentino", hintEn: "Florence skyline" },
  ],
  "IT-VCE": [
    { id: "vce-canal", nameIt: "Canal Grande", nameEn: "Grand Canal", photoId: T.veniceGrandCanal, hintIt: "In gondola", hintEn: "By gondola" },
    { id: "vce-sunset", nameIt: "Venezia al tramonto", nameEn: "Venice at sunset", photoId: T.veniceSunset, hintIt: "Luci sull'acqua", hintEn: "Lights on water" },
    { id: "vce-bridge", nameIt: "Ponte di Rialto", nameEn: "Rialto Bridge", photoId: T.veniceRialto, hintIt: "Cuore di Venezia", hintEn: "Heart of Venice" },
    { id: "vce-street", nameIt: "Calli e campielli", nameEn: "Alleys & squares", photoId: T.veniceAlley, hintIt: "Centro storico", hintEn: "Historic center" },
  ],
  "IT-NAP": [
    { id: "nap-vesuvio", nameIt: "Vesuvio e golfo", nameEn: "Vesuvius & bay", photoId: T.naplesVesuvius, hintIt: "Panorama iconico", hintEn: "Iconic view" },
    { id: "nap-coast", nameIt: "Costa napoletana", nameEn: "Naples coast", photoId: T.naplesCoast, hintIt: "Mare e scogliere", hintEn: "Sea & cliffs" },
    { id: "nap-center", nameIt: "Centro storico", nameEn: "Historic center", photoId: T.naplesSpaccanapoli, hintIt: "Spaccanapoli", hintEn: "Spaccanapoli" },
    { id: "nap-food", nameIt: "Pizza napoletana", nameEn: "Neapolitan pizza", photoId: T.naplesPizza, hintIt: "Forno a legna", hintEn: "Wood-fired oven" },
  ],
  "IT-SOR": [
    { id: "sor-positano", nameIt: "Positano", nameEn: "Positano", photoId: T.amalfiPositanoHill, hintIt: "Case colorate", hintEn: "Colorful houses" },
    { id: "sor-sea", nameIt: "Vista dal mare", nameEn: "Sea view", photoId: T.amalfiPositanoSea, hintIt: "Costiera", hintEn: "Amalfi Coast" },
    { id: "sor-cliffs", nameIt: "Scogliere", nameEn: "Coastal cliffs", photoId: T.amalfiCoastCliffs, hintIt: "Panorama", hintEn: "Panorama" },
    { id: "sor-colors", nameIt: "Villaggi costieri", nameEn: "Coastal villages", photoId: T.amalfiPositanoColors, hintIt: "Vista iconica", hintEn: "Iconic view" },
  ],
  "IT-CQT": [
    { id: "cqt-village", nameIt: "Manarola", nameEn: "Manarola", photoId: T.cinqueTerreManarola, hintIt: "Case colorate", hintEn: "Colorful houses" },
    { id: "cqt-trail", nameIt: "Cinque Terre", nameEn: "Cinque Terre", photoId: T.cinqueTerre, hintIt: "Borgo sul mare", hintEn: "Seaside village" },
    { id: "cqt-coast", nameIt: "Vernazza", nameEn: "Vernazza", photoId: T.cinqueTerreVernazza, hintIt: "Porticciolo ligure", hintEn: "Ligurian harbor" },
    { id: "cqt-sea", nameIt: "Costa UNESCO", nameEn: "UNESCO coast", photoId: T.cinqueTerreCoast, hintIt: "Scogliere liguri", hintEn: "Ligurian cliffs" },
  ],
  "IT-CMO": [
    { id: "cmo-lake", nameIt: "Lago di Como", nameEn: "Lake Como", photoId: T.lakeComo, hintIt: "Ville e monti", hintEn: "Villas & mountains" },
    { id: "cmo-bellagio", nameIt: "Bellagio", nameEn: "Bellagio", photoId: T.lakeComoBellagio, hintIt: "Perla del lago", hintEn: "Pearl of the lake" },
    { id: "cmo-villa", nameIt: "Villa del Balbianello", nameEn: "Villa del Balbianello", photoId: T.lakeComoVilla, hintIt: "Giardini sul lago", hintEn: "Lake gardens" },
    { id: "cmo-boat", nameIt: "Tour in barca", nameEn: "Boat tour", photoId: T.lakeComoBoat, hintIt: "Vista dal lago", hintEn: "Lake view" },
  ],
  "IT-BRI": [
    { id: "bri-trulli", nameIt: "Alberobello", nameEn: "Alberobello", photoId: T.pugliaTrulli, hintIt: "Trulli UNESCO", hintEn: "UNESCO trulli" },
    { id: "bri-sea", nameIt: "Polignano a Mare", nameEn: "Polignano a Mare", photoId: T.pugliaPolignano, hintIt: "Scogliere adriatiche", hintEn: "Adriatic cliffs" },
    { id: "bri-old", nameIt: "Centro storico", nameEn: "Historic center", photoId: T.pugliaOldTown, hintIt: "Borgo pugliese", hintEn: "Puglia old town" },
    { id: "bri-food", nameIt: "Cucina pugliese", nameEn: "Puglia cuisine", photoId: T.pugliaFood, hintIt: "Sapori locali", hintEn: "Local flavors" },
  ],
  "IT-TAO": [
    { id: "tao-greek", nameIt: "Teatro Greco", nameEn: "Greek Theatre", photoId: T.taormina, hintIt: "Vista sull'Etna", hintEn: "Etna views" },
    { id: "tao-corso", nameIt: "Corso Umberto", nameEn: "Corso Umberto", photoId: T.taorminaCorso, hintIt: "Passeggiata", hintEn: "Evening stroll" },
    { id: "tao-beach", nameIt: "Isola Bella", nameEn: "Isola Bella", photoId: T.taorminaIsolaBella, hintIt: "Baia turchese", hintEn: "Turquoise bay" },
    { id: "tao-coast", nameIt: "Costa siciliana", nameEn: "Sicilian coast", photoId: T.taorminaCoast, hintIt: "Mare cristallino", hintEn: "Crystal sea" },
  ],
  "IT-CAG": [
    { id: "cag-beach", nameIt: "Costa smeralda", nameEn: "Emerald Coast", photoId: T.sardiniaEmerald, hintIt: "Mare turchese", hintEn: "Turquoise sea" },
    { id: "cag-coast", nameIt: "Spiagge della Sardegna", nameEn: "Sardinian beaches", photoId: T.sardiniaBeach, hintIt: "Paradiso mediterraneo", hintEn: "Mediterranean paradise" },
    { id: "cag-old", nameIt: "Cagliari", nameEn: "Cagliari", photoId: T.sardiniaCagliari, hintIt: "Centro storico", hintEn: "Historic center" },
    { id: "cag-nature", nameIt: "Scogliere", nameEn: "Coastal cliffs", photoId: T.sardiniaCliffs, hintIt: "Natura selvaggia", hintEn: "Wild nature" },
  ],
  "FR-PAR": [
    { id: "par-eiffel", nameIt: "Torre Eiffel", nameEn: "Eiffel Tower", photoId: T.paris, hintIt: "Champ de Mars", hintEn: "Champ de Mars" },
    { id: "par-seine", nameIt: "Rive gauche", nameEn: "Left Bank", photoId: T.parisSeine, hintIt: "Sulla Senna", hintEn: "On the Seine" },
    { id: "par-street", nameIt: "Montmartre", nameEn: "Montmartre", photoId: T.parisMontmartre, hintIt: "Sacré-Cœur", hintEn: "Sacré-Cœur" },
    { id: "par-night", nameIt: "Luci della città", nameEn: "City lights", photoId: T.parisNight, hintIt: "Sera parigina", hintEn: "Parisian evening" },
  ],
  "GB-LON": [
    { id: "lon-bridge", nameIt: "Tower Bridge", nameEn: "Tower Bridge", photoId: T.londonTowerBridge, hintIt: "Thames", hintEn: "River Thames" },
    { id: "lon-bigben", nameIt: "Big Ben", nameEn: "Big Ben", photoId: T.londonBigBen, hintIt: "Westminster", hintEn: "Westminster" },
    { id: "lon-eye", nameIt: "London Eye", nameEn: "London Eye", photoId: T.londonEye, hintIt: "South Bank", hintEn: "South Bank" },
    { id: "lon-night", nameIt: "Luci notturne", nameEn: "Night lights", photoId: T.london, hintIt: "Skyline", hintEn: "Skyline" },
  ],
  "ES-BCN": [
    { id: "bcn-sagrada", nameIt: "Sagrada Família", nameEn: "Sagrada Família", photoId: T.barcelonaSagrada, hintIt: "Gaudí", hintEn: "Gaudí" },
    { id: "bcn-aerial", nameIt: "Skyline", nameEn: "Skyline", photoId: T.barcelonaAerial, hintIt: "Vista aerea", hintEn: "Aerial view" },
    { id: "bcn-gothic", nameIt: "Barrio Gótico", nameEn: "Gothic Quarter", photoId: T.barcelonaGothic, hintIt: "Storia medievale", hintEn: "Medieval history" },
    { id: "bcn-beach", nameIt: "Barceloneta", nameEn: "Barceloneta", photoId: T.barcelonaBeach, hintIt: "Mare urbano", hintEn: "Urban beach" },
  ],
  "ES-MAD": [
    { id: "mad-plaza", nameIt: "Plaza Mayor", nameEn: "Plaza Mayor", photoId: T.madridPlaza, hintIt: "Centro", hintEn: "City center" },
    { id: "mad-palace", nameIt: "Palacio Real", nameEn: "Royal Palace", photoId: T.madridPalace, hintIt: "Madrid classico", hintEn: "Classic Madrid" },
    { id: "mad-park", nameIt: "Parco del Retiro", nameEn: "Retiro Park", photoId: T.madridRetiro, hintIt: "Palacio de Cristal", hintEn: "Crystal Palace" },
    { id: "mad-food", nameIt: "Tapas", nameEn: "Tapas bars", photoId: T.madridTapas, hintIt: "Mercato di San Miguel", hintEn: "San Miguel market" },
  ],
  "DE-BER": [
    { id: "ber-gate", nameIt: "Porta di Brandeburgo", nameEn: "Brandenburg Gate", photoId: T.berlinGate, hintIt: "Mitte", hintEn: "Mitte district" },
    { id: "ber-dusk", nameIt: "Brandeburgo al tramonto", nameEn: "Gate at dusk", photoId: T.berlinGateDusk, hintIt: "Luci serali", hintEn: "Evening lights" },
    { id: "ber-museum", nameIt: "Museum Island", nameEn: "Museum Island", photoId: T.berlinMuseum, hintIt: "UNESCO", hintEn: "UNESCO" },
    { id: "ber-night", nameIt: "Vita notturna", nameEn: "Nightlife", photoId: T.berlinGateDusk, hintIt: "Kreuzberg", hintEn: "Kreuzberg" },
  ],
  "NL-AMS": [
    { id: "ams-canal", nameIt: "Canali del centro", nameEn: "Central canals", photoId: T.amsterdamCanal, hintIt: "In bici", hintEn: "By bike" },
    { id: "ams-houses", nameIt: "Case di Amsterdam", nameEn: "Canal houses", photoId: T.amsterdamHouses, hintIt: "Facciate storiche", hintEn: "Historic facades" },
    { id: "ams-street", nameIt: "Jordaan", nameEn: "Jordaan", photoId: T.amsterdamJordaan, hintIt: "Quartiere trendy", hintEn: "Trendy quarter" },
    { id: "ams-market", nameIt: "Mercato dei fiori", nameEn: "Flower market", photoId: T.amsterdamMarket, hintIt: "Bloemenmarkt", hintEn: "Bloemenmarkt" },
  ],
  "PT-LIS": [
    { id: "lis-tram", nameIt: "Tram 28", nameEn: "Tram 28", photoId: T.lisbonTram, hintIt: "Alfama", hintEn: "Alfama" },
    { id: "lis-panorama", nameIt: "Miradouros", nameEn: "Viewpoints", photoId: T.lisbonPanorama, hintIt: "Tramonto", hintEn: "Sunset" },
    { id: "lis-tower", nameIt: "Torre di Belém", nameEn: "Belém Tower", photoId: T.lisbonBelem, hintIt: "Fiume Tago", hintEn: "Tagus river" },
    { id: "lis-food", nameIt: "Pastéis de nata", nameEn: "Pastéis de nata", photoId: T.lisbonPastel, hintIt: "Bairro Alto", hintEn: "Bairro Alto" },
  ],
  "CZ-PRG": [
    { id: "prg-bridge", nameIt: "Ponte Carlo", nameEn: "Charles Bridge", photoId: T.pragueBridge, hintIt: "Moldava", hintEn: "Vltava river" },
    { id: "prg-old", nameIt: "Città Vecchia", nameEn: "Old Town", photoId: T.pragueOld, hintIt: "Centro storico", hintEn: "Historic center" },
    { id: "prg-square", nameIt: "Piazza della Città Vecchia", nameEn: "Old Town Square", photoId: T.pragueSquare, hintIt: "Orologio astronomico", hintEn: "Astronomical clock" },
    { id: "prg-night", nameIt: "Praga by night", nameEn: "Prague at night", photoId: T.pragueNight, hintIt: "Luci sul fiume", hintEn: "River lights" },
  ],
  "AT-VIE": [
    { id: "vie-schonbrunn", nameIt: "Schönbrunn", nameEn: "Schönbrunn Palace", photoId: T.viennaSchonbrunn, hintIt: "Giardini imperiali", hintEn: "Imperial gardens" },
    { id: "vie-palace", nameIt: "Palazzo di Hofburg", nameEn: "Hofburg Palace", photoId: T.viennaPalace, hintIt: "Centro storico", hintEn: "Historic center" },
    { id: "vie-cafe", nameIt: "Caffè viennesi", nameEn: "Viennese cafés", photoId: T.viennaCafe, hintIt: "Tradizione", hintEn: "Tradition" },
    { id: "vie-street", nameIt: "Ringstrasse", nameEn: "Ringstrasse", photoId: T.viennaRing, hintIt: "Architettura", hintEn: "Architecture" },
  ],
  "GR-JTR": [
    { id: "jtr-caldera", nameIt: "Caldera di Santorini", nameEn: "Santorini caldera", photoId: T.santorini, hintIt: "Case bianche", hintEn: "White houses" },
    { id: "jtr-sunset", nameIt: "Tramonto a Oia", nameEn: "Oia sunset", photoId: T.santoriniOia, hintIt: "Vista iconica", hintEn: "Iconic view" },
    { id: "jtr-beach", nameIt: "Spiagge vulcaniche", nameEn: "Volcanic beaches", photoId: T.santoriniBeach, hintIt: "Mare Egeo", hintEn: "Aegean Sea" },
    { id: "jtr-street", nameIt: "Vicoli di Fira", nameEn: "Fira alleys", photoId: T.santoriniSunset, hintIt: "Cicladi", hintEn: "Cyclades" },
  ],
  "JP-TYO": [
    { id: "tyo-shibuya", nameIt: "Shibuya Crossing", nameEn: "Shibuya Crossing", photoId: T.tokyoShibuya, hintIt: "Cuore di Tokyo", hintEn: "Heart of Tokyo" },
    { id: "tyo-senso", nameIt: "Senso-ji", nameEn: "Senso-ji Temple", photoId: T.tokyoTemple, hintIt: "Asakusa", hintEn: "Asakusa" },
    { id: "tyo-skyline", nameIt: "Skyline di Tokyo", nameEn: "Tokyo skyline", photoId: T.tokyo, hintIt: "Torri moderne", hintEn: "Modern towers" },
    { id: "tyo-night", nameIt: "Shinjuku", nameEn: "Shinjuku", photoId: T.tokyoShinjuku, hintIt: "Luci al neon", hintEn: "Neon lights" },
  ],
  "US-NYC": [
    { id: "nyc-skyline", nameIt: "Skyline di Manhattan", nameEn: "Manhattan skyline", photoId: T.nyc, hintIt: "Downtown", hintEn: "Downtown" },
    { id: "nyc-bridge", nameIt: "Brooklyn Bridge", nameEn: "Brooklyn Bridge", photoId: T.nycBrooklyn, hintIt: "East River", hintEn: "East River" },
    { id: "nyc-park", nameIt: "Central Park", nameEn: "Central Park", photoId: T.nycCentral, hintIt: "Oasi verde", hintEn: "Green oasis" },
    { id: "nyc-night", nameIt: "Times Square", nameEn: "Times Square", photoId: T.nycTimesSquare, hintIt: "Luci e teatri", hintEn: "Lights & theaters" },
  ],
  "TH-HKT": [
    { id: "pkt-view", nameIt: "Panorama Phuket", nameEn: "Phuket viewpoint", photoId: T.phuketViewpoint, hintIt: "Vista dalla collina", hintEn: "Hill view" },
    { id: "pkt-island", nameIt: "Isola tropicale", nameEn: "Tropical island", photoId: T.phuketIsland, hintIt: "Mare Andamano", hintEn: "Andaman Sea" },
    { id: "pkt-sunset", nameIt: "Tramonto a Patong", nameEn: "Patong sunset", photoId: T.phuketSunset, hintIt: "Spiaggia dorata", hintEn: "Golden beach" },
    { id: "pkt-beach", nameIt: "Patong Beach", nameEn: "Patong Beach", photoId: T.phuketBeach, hintIt: "Mare cristallino", hintEn: "Crystal sea" },
  ],
  "TH-BKK": [
    { id: "bkk-arun", nameIt: "Wat Arun", nameEn: "Wat Arun", photoId: T.bangkokWatArun, hintIt: "Chao Phraya", hintEn: "Chao Phraya" },
    { id: "bkk-sunset", nameIt: "Wat Arun al tramonto", nameEn: "Wat Arun at sunset", photoId: T.bangkokWatSunset, hintIt: "Cielo colorato", hintEn: "Colorful sky" },
    { id: "bkk-night", nameIt: "Wat Arun di notte", nameEn: "Wat Arun at night", photoId: T.bangkokWatNight, hintIt: "Luci sul fiume", hintEn: "River lights" },
    { id: "bkk-skyline", nameIt: "Skyline moderno", nameEn: "Modern skyline", photoId: T.bangkokSkyline, hintIt: "Sukhumvit", hintEn: "Sukhumvit" },
  ],
  "AE-DXB": [
    { id: "dxb-burj", nameIt: "Burj Khalifa", nameEn: "Burj Khalifa", photoId: T.dubai, hintIt: "Downtown", hintEn: "Downtown" },
    { id: "dxb-marina", nameIt: "Dubai Marina", nameEn: "Dubai Marina", photoId: T.dubaiMarina, hintIt: "Skyline moderno", hintEn: "Modern skyline" },
    { id: "dxb-night", nameIt: "Luci della città", nameEn: "City lights", photoId: T.dubaiMarina, hintIt: "Futurismo", hintEn: "Futuristic" },
    { id: "dxb-desert", nameIt: "Deserto", nameEn: "Desert safari", photoId: T.dubaiDesert, hintIt: "Dune bashing", hintEn: "Dune bashing" },
  ],
  "TR-IST": [
    { id: "ist-hagia", nameIt: "Santa Sofia", nameEn: "Hagia Sophia", photoId: T.istanbulMosque, hintIt: "Sultanahmet", hintEn: "Sultanahmet" },
    { id: "ist-skyline", nameIt: "Skyline sul Bosforo", nameEn: "Bosphorus skyline", photoId: T.istanbulSkyline, hintIt: "Due continenti", hintEn: "Two continents" },
    { id: "ist-bazaar", nameIt: "Gran Bazar", nameEn: "Grand Bazaar", photoId: T.istanbulBazaar, hintIt: "Shopping", hintEn: "Shopping" },
    { id: "ist-food", nameIt: "Cucina turca", nameEn: "Turkish cuisine", photoId: T.istanbulFood, hintIt: "Mercati", hintEn: "Markets" },
  ],
};

export function getCatalogLandmarkHighlights(cityId: string): CityHighlight[] | null {
  const landmarks = CATALOG_LANDMARKS[cityId];
  if (!landmarks?.length) return null;
  return toHighlights(landmarks);
}
