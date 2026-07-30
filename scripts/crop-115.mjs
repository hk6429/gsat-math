import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../", import.meta.url).pathname;
const sourceDir = join(root, ".sources", "115");
const pageWidth = 595.275;
const renderedWidth = 1191;
const scale = renderedWidth / pageWidth;
const cropX = 108;
const cropWidth = 972;

const configs = {
  A: {
    pdf: join(sourceDir, "math-a-questions.pdf"),
    pages: join(sourceDir, "rendered", "a"),
    out: join(root, "img", "115A"),
    gapBeforeNext: { 6: 135, 17: 500 }
  },
  B: {
    pdf: join(sourceDir, "math-b-questions.pdf"),
    pages: join(sourceDir, "rendered", "b"),
    out: join(root, "img", "115B"),
    gapBeforeNext: { 12: 145, 17: 500 }
  }
};

function startsForPage(pdf, page) {
  const html = execFileSync("pdftotext", [
    "-f", String(page),
    "-l", String(page),
    "-bbox",
    pdf,
    "-"
  ], { encoding: "utf8" });
  const starts = [];
  const word = /<word xMin="([\d.]+)" yMin="([\d.]+)"[^>]*>(\d+)\.<\/word>/g;
  for (const match of html.matchAll(word)) {
    const x = Number(match[1]);
    const y = Number(match[2]);
    const no = Number(match[3]);
    if (x >= 60 && x <= 68 && no >= 1 && no <= 20) {
      starts.push({ no, page, y });
    }
  }
  return starts;
}

for (const [subject, config] of Object.entries(configs)) {
  mkdirSync(config.out, { recursive: true });
  const starts = [];
  for (let page = 2; page <= 7; page += 1) {
    starts.push(...startsForPage(config.pdf, page));
  }
  starts.sort((a, b) => a.no - b.no);
  if (starts.length !== 20) {
    throw new Error(`${subject} 偵測到 ${starts.length} 題，預期為 20 題`);
  }

  for (let i = 0; i < starts.length; i += 1) {
    const current = starts[i];
    const next = starts[i + 1];
    const top = Math.max(115, Math.round(current.y * scale) - 18);
    let bottom = 1570;
    if (next && next.page === current.page) {
      bottom = Math.round(next.y * scale) - 16;
      if (config.gapBeforeNext[current.no]) {
        bottom -= config.gapBeforeNext[current.no];
      }
    }
    const height = Math.max(100, bottom - top);
    const pageImage = join(config.pages, `page-${current.page}.png`);
    const output = join(config.out, `q${String(current.no).padStart(2, "0")}.webp`);
    execFileSync("magick", [
      pageImage,
      "-crop", `${cropWidth}x${height}+${cropX}+${top}`,
      "+repage",
      "-trim",
      "+repage",
      "-quality", "88",
      output
    ]);
  }

  const q18 = starts.find((item) => item.no === 18);
  const groupBottom = Math.round(q18.y * scale) - 24;
  const groupTop = groupBottom - 430;
  const pageImage = join(config.pages, `page-${q18.page}.png`);
  const groupOutput = join(config.out, "g18.webp");
  execFileSync("magick", [
    pageImage,
    "-crop", `${cropWidth}x${groupBottom - groupTop}+${cropX}+${groupTop}`,
    "+repage",
    "-trim",
    "+repage",
    "-quality", "88",
    groupOutput
  ]);
  console.log(`${subject}：完成 20 題裁圖與 1 張題組材料`);
}
