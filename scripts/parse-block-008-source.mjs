/**
 * Parse block-008-user-source.md → block-008-user-descriptions.json
 * Format: slug line, blank line, description paragraph(s), --- separator
 */
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(__dirname, "data/block-008-user-source.md");
const OUT = resolve(__dirname, "data/block-008-user-descriptions.json");

const raw = readFileSync(SRC, "utf8");
const blocks = raw.split(/\n---\n/).map((b) => b.trim()).filter(Boolean);
const data = blocks.map((block) => {
  const lines = block.split("\n");
  const slug = lines[0].trim();
  const description = lines.slice(1).join("\n").trim().replace(/\*\*/g, "");
  return { slug, description };
});

writeFileSync(OUT, JSON.stringify(data, null, 2) + "\n");
console.log(`Parsed ${data.length} entries → ${OUT}`);
