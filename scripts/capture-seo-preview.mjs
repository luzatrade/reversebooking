import { chromium, devices } from "playwright";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = "/opt/cursor/artifacts/screenshots";
mkdirSync(outDir, { recursive: true });

const base = "http://127.0.0.1:3000";

const shots = [
  { name: "home-desktop-full", url: `${base}/`, viewport: { width: 1280, height: 800 }, fullPage: true },
  { name: "home-mobile-full", url: `${base}/`, device: "iPhone 13" },
  { name: "home-how-it-works-desktop", url: `${base}/`, viewport: { width: 1280, height: 800 }, selector: "#home-faq" },
  { name: "home-faq-mobile", url: `${base}/#home-faq`, device: "iPhone 13", selector: "#home-faq" },
  { name: "about-desktop", url: `${base}/cos-e-hotelsdrop`, viewport: { width: 1280, height: 800 }, fullPage: true },
  { name: "about-mobile", url: `${base}/cos-e-hotelsdrop`, device: "iPhone 13", fullPage: true },
  { name: "footer-desktop", url: `${base}/`, viewport: { width: 1280, height: 800 }, selector: "footer" },
];

const browser = await chromium.launch();

for (const shot of shots) {
  const context = await browser.newContext(shot.device ? devices[shot.device] : { viewport: shot.viewport });
  const page = await context.newPage();
  await page.goto(shot.url, { waitUntil: "networkidle", timeout: 60000 });

  const file = join(outDir, `${shot.name}.png`);
  if (shot.selector) {
    const el = page.locator(shot.selector).first();
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await el.screenshot({ path: file });
  } else if (shot.fullPage) {
    await page.screenshot({ path: file, fullPage: true });
  } else {
    await page.screenshot({ path: file });
  }

  await context.close();
  console.log("saved", file);
}

await browser.close();
