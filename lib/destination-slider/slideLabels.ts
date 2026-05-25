const LANDMARK_HINT =
  /\b(duomo|cathedral|basilica|chiesa|church|museo|museum|castello|castle|ponte|bridge|piazza|square|lungomare|porto|harbour|harbor|palazzo|palace|torre|tower|teatro|theatre|theater|arena|fortezza|fortino|parco|park|galleria|gallery|biblioteca|fortino)\b/i;

const JUNK_LABEL = /^(medinex|commons|film frames|it|en|de|fr|es)$/i;

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function titleCaseItalian(value: string) {
  const lowerParticles = new Set(["di", "del", "della", "dei", "degli", "delle", "da", "al", "alla", "alle", "ai", "agli", "in", "su", "per", "con", "e"]);
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((word, index) => {
      const lower = word.toLowerCase();
      if (index > 0 && lowerParticles.has(lower)) return lower;
      if (lower === "ss") return "SS";
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" ");
}

function stripRawTitle(rawTitle: string) {
  return rawTitle
    .replace(/^File:/i, "")
    .replace(/\.(jpe?g|png|webp|gif|svg|ogg)$/i, "")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Browse carousel: solo nome città. */
export function formatBrowseCityLabel(cityName: string) {
  return titleCaseItalian(cityName.trim());
}

/**
 * Focus / Wikipedia: solo nome del luogo (o città se non deducibile), senza codici o date.
 */
export function formatPoiLabel(rawTitle: string, cityName: string) {
  const city = cityName.trim();
  let label = stripRawTitle(rawTitle);

  label = label.replace(/\s*\([^)]*\)\s*/g, " ").trim();
  label = label.replace(/\s*,\s*vista\s*\d+\s*$/i, "").trim();
  label = label.replace(/\s*vista\s*\d+\s*$/i, "").trim();
  label = label.replace(/\s*\d{4}\s*[-–]\s*\d{4}\s*/g, " ").trim();
  label = label.replace(/\s+\d{1,4}\s*$/g, "").trim();
  label = label.replace(/^(it|en|de|fr|es)[\s-]+/i, "").trim();

  if (label.includes(",")) {
    const parts = label
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean);
    const landmark = parts.find((part) => LANDMARK_HINT.test(part));
    label = landmark ?? parts[0];
  }

  if (!label || normalize(label) === normalize(city) || JUNK_LABEL.test(label)) {
    return formatBrowseCityLabel(city);
  }

  if (/^medinex\b/i.test(label) && !LANDMARK_HINT.test(label)) {
    return formatBrowseCityLabel(city);
  }

  return titleCaseItalian(label);
}

export function slideDisplayTitle(slide: { title: string; kind?: string }, cityName: string, isBrowse: boolean) {
  if (isBrowse || slide.kind === "city") {
    return formatBrowseCityLabel(slide.title.split(",")[0]?.trim() || slide.title);
  }
  return formatPoiLabel(slide.title, cityName);
}
