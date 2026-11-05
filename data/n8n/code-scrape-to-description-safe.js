var hotel = $('Split Out').item.json;
var scrape = $input.item.json;
var html = String(scrape.data || scrape.body || scrape || '');

var nome = (hotel.name || hotel.slug || '').trim();
var slug = hotel.slug;
var city = (hotel.city || '').trim();
var address = (hotel.address || '').trim();
var coords = hotel.coordinates || {};
var lat = coords.latitude;
var lng = coords.longitude;
var latStr = lat != null ? String(lat) : '';
var lngStr = lng != null ? String(lng) : '';

function cleanSnippet(s) {
  if (!s) return '';
  s = s.replace(/&amp;/g, '&').replace(/<[^>]+>/g, ' ');
  s = s.replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, '');
  s = s.replace(/\btel\.?\b|\btelefono\b|€\s*\d+/gi, '');
  return s.replace(/\s+/g, ' ').trim().slice(0, 300);
}

function extractEmails(text) {
  var found = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) || [];
  var clean = [];
  var seen = {};
  for (var i = 0; i < found.length; i++) {
    var e = found[i].toLowerCase();
    if (!seen[e]) {
      seen[e] = true;
      clean.push(e);
    }
  }
  var bad = /(example|sentry|wix|schema|png|jpg|webp)/i;
  var out = [];
  for (var j = 0; j < clean.length; j++) {
    if (!bad.test(clean[j])) out.push(clean[j]);
  }
  return out;
}

function stripHtml(t) {
  return t
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function metaContent(htmlStr, name) {
  var re = new RegExp('<meta[^>]+name=["\']' + name + '["\'][^>]+content=["\']([^"\']+)', 'i');
  var m = htmlStr.match(re);
  return m ? stripHtml(m[1]) : '';
}

var metaDesc = cleanSnippet(metaContent(html, 'description') || metaContent(html, 'og:description'));
var titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
var titleTag = titleMatch ? cleanSnippet(titleMatch[1]) : '';
var h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
var h1 = h1Match ? cleanSnippet(stripHtml(h1Match[1])) : '';
var plain = stripHtml(html).slice(0, 12000);

var AMENITY_MAP = [
  { re: /wi-?fi|wifi|wireless/i, it: 'connessione Wi-Fi', en: 'Wi-Fi' },
  { re: /parcheggio|parking/i, it: 'parcheggio', en: 'parking' },
  { re: /colazione|breakfast/i, it: 'colazione', en: 'breakfast' },
  { re: /aria condizionata|climatizzat/i, it: 'aria condizionata', en: 'air conditioning' },
  { re: /balcon/i, it: 'balcone', en: 'balcony' },
  { re: /vista mare|sea view|lungomare/i, it: 'vicinanza al mare', en: 'sea proximity' },
  { re: /piscina|pool/i, it: 'piscina', en: 'swimming pool' },
  { re: /ristorante|restaurant/i, it: 'ristorazione', en: 'dining' },
  { re: /\bbar\b/i, it: 'bar', en: 'bar' },
  { re: /terrazza|terrace/i, it: 'terrazza', en: 'terrace' },
  { re: /bagno privato|private bathroom/i, it: 'bagno privato', en: 'private bathroom' },
  { re: /spiaggia|beach/i, it: 'accesso alla spiaggia', en: 'beach access' },
];

var amenitiesIt = [];
var amenitiesEn = [];
for (var a = 0; a < AMENITY_MAP.length; a++) {
  if (AMENITY_MAP[a].re.test(html) || AMENITY_MAP[a].re.test(plain)) {
    amenitiesIt.push(AMENITY_MAP[a].it);
    amenitiesEn.push(AMENITY_MAP[a].en);
  }
}

var emails = extractEmails(html);
var email = (hotel.email && hotel.email.trim()) || emails[0] || '';

function italianArticle(name) {
  var n = name.trim();
  if (/^hotel\b/i.test(n)) return 'Il';
  if (/^[aeiou]/i.test(n)) return 'L' + String.fromCharCode(39);
  return 'Il';
}

function wordCount(s) {
  return s.split(/\s+/).filter(function (w) { return w.length > 0; }).length;
}

function ensureWords(text, minWords, padList) {
  var t = text;
  var w = wordCount(t);
  var idx = 0;
  while (w < minWords && idx < padList.length) {
    t += (t.endsWith('.') ? ' ' : '. ') + padList[idx];
    w = wordCount(t);
    idx++;
  }
  return t;
}

var snippet = [metaDesc, titleTag !== nome ? titleTag : '', h1 !== nome ? h1 : ''].filter(Boolean).join('. ').slice(0, 400);
var art = italianArticle(nome);
var nomeLower = nome.charAt(0).toLowerCase() + nome.slice(1);
var apos = String.fromCharCode(39);

var p1It = art + ' ' + nomeLower + ' si trova in ' + address + ', con coordinate GPS ' + latStr + ', ' + lngStr + '.';
if (snippet) p1It += ' ' + snippet;

var p2It = 'Situato a ' + city + ', la struttura accoglie gli ospiti';
if (amenitiesIt.length) p2It += ' con ' + amenitiesIt.slice(0, 6).join(', ');
p2It += ', in una posizione utile per chi visita il territorio.';
p2It += ' ' + apos + 'indirizzo completo e le coordinate GPS facilitano l' + apos + 'arrivo.';

var padIt = [
  'La posizione in ' + city + ' consente collegamenti con le localita vicine della regione.',
  'Gli spazi sono pensati per un soggiorno confortevole per viaggiatori e famiglie.',
  'Il contesto locale offre scoperte culturali e itinerari tipici dell' + apos + 'area.',
  'La struttura si adatta a soggiorni brevi e vacanze piu lunghe.',
  'Gli ospiti apprezzano la quiete e la praticita della location per muoversi nella zona.',
];

var description_it = ensureWords(p1It + '\n\n' + p2It, 165, padIt);

var p1En = nome + ' is located at ' + address + ', with GPS coordinates ' + latStr + ', ' + lngStr + '.';
if (snippet) p1En += ' ' + snippet;
var p2En = 'Set in ' + city + ', the property welcomes guests';
if (amenitiesEn.length) p2En += ' with ' + amenitiesEn.slice(0, 6).join(', ');
p2En += ', offering a practical base for exploring the surrounding area.';

var padEn = [
  'The ' + city + ' location connects to nearby towns and regional highlights.',
  'Comfortable stays for couples, families, and independent travelers.',
  'The area supports cultural visits and outdoor routes.',
  'Suitable for short breaks and longer holidays.',
  'Guests value the practical location for exploring the wider area.',
];

var description_en = ensureWords(p1En + '\n\n' + p2En, 140, padEn);

function scrubDescription(t) {
  return t
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, '')
    .replace(/\btel\.?\b/gi, '')
    .replace(/\btelefono\b/gi, '')
    .replace(/\bprice\b|\brate\b|\bbook now\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

description_it = description_it.split('\n\n').map(scrubDescription).join('\n\n');
description_en = description_en.split('\n\n').map(scrubDescription).join('\n\n');

return {
  json: {
    slug: slug,
    description_it: description_it,
    description_en: description_en,
    email: email,
    words_it: wordCount(description_it),
    words_en: wordCount(description_en),
  },
};
