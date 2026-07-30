import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const year = Number(process.argv[2]);
const layouts = {
  111: {
    A: { gapBeforeNext: { 6: 135, 12: 145 } },
    B: { gapBeforeNext: { 12: 145 } }
  },
  112: {
    A: { gapBeforeNext: { 6: 135, 12: 145 } },
    B: { gapBeforeNext: { 12: 145 } }
  },
  113: {
    A: { gapBeforeNext: { 6: 135, 12: 145, 17: 500 } },
    B: { gapBeforeNext: { 17: 650 } }
  },
  114: {
    A: { gapBeforeNext: { 6: 135, 12: 145, 17: 500 } },
    B: { gapBeforeNext: { 12: 145, 17: 500 } }
  },
  115: {
    A: { gapBeforeNext: { 6: 135, 17: 500 } },
    B: { gapBeforeNext: { 12: 145, 17: 500 } }
  }
};

if (!layouts[year]) {
  throw new Error(`尚未設定 ${year} 學年度裁圖版面`);
}

const sourceDir = join(root, ".sources", String(year));
const pageWidth = 595.275;
const renderedWidth = 1191;
const scale = renderedWidth / pageWidth;
const cropX = 108;
const cropWidth = 972;

function startsForPage(pdf, page) {
  const html = execFileSync("pdftotext", [
    "-f", String(page),
    "-l", String(page),
    "-bbox",
    pdf,
    "-"
  ], { encoding: "utf8" });
  const starts = [];
  const word = /<word xMin="([\d.]+)" yMin="([\d.]+)"[^>]*>(\d+)\.[^<]*<\/word>/g;
  for (const match of html.matchAll(word)) {
    const x = Number(match[1]);
    const y = Number(match[2]);
    const no = Number(match[3]);
    if (x >= 58 && x <= 70 && no >= 1 && no <= 20) {
      starts.push({ no, page, y });
    }
  }
  return starts;
}

for (const subject of ["A", "B"]) {
  const config = layouts[year][subject];
  const pdf = join(sourceDir, `math-${subject.toLowerCase()}-questions.pdf`);
  const pages = join(sourceDir, "rendered", subject.toLowerCase());
  const out = join(root, "img", `${year}${subject}`);
  rmSync(pages, { recursive: true, force: true });
  mkdirSync(pages, { recursive: true });
  mkdirSync(out, { recursive: true });
  execFileSync("pdftoppm", [
    "-png", "-r", "144", "-f", "2", "-l", "7", pdf, join(pages, "page")
  ]);

  const starts = [];
  for (let page = 2; page <= 7; page += 1) {
    starts.push(...startsForPage(pdf, page));
  }
  starts.sort((a, b) => a.no - b.no);
  if (starts.length !== 20 || new Set(starts.map((item) => item.no)).size !== 20) {
    throw new Error(`${year}${subject} 偵測到 ${starts.length} 個題號起點，預期為 20 題`);
  }

  for (let i = 0; i < starts.length; i += 1) {
    const current = starts[i];
    const next = starts[i + 1];
    const top = Math.max(115, Math.round(current.y * scale) - 18);
    let bottom = 1570;
    if (next && next.page === current.page) {
      bottom = Math.round(next.y * scale) - 16 - (config.gapBeforeNext[current.no] || 0);
    }
    const height = Math.max(100, bottom - top);
    const pageImage = join(pages, `page-${current.page}.png`);
    const output = join(out, `q${String(current.no).padStart(2, "0")}.webp`);
    execFileSync("magick", [
      pageImage,
      "-crop", `${cropWidth}x${height}+${cropX}+${top}`,
      "+repage", "-trim", "+repage", "-quality", "88", output
    ]);
  }

  const q18 = starts.find((item) => item.no === 18);
  const groupBottom = Math.round(q18.y * scale) - 24;
  const groupTop = groupBottom - 430;
  execFileSync("magick", [
    join(pages, `page-${q18.page}.png`),
    "-crop", `${cropWidth}x${groupBottom - groupTop}+${cropX}+${groupTop}`,
    "+repage", "-trim", "+repage", "-quality", "88",
    join(out, "g18.webp")
  ]);
  console.log(`${year} 數學 ${subject}：完成 20 題裁圖與 1 張題組材料`);
}
