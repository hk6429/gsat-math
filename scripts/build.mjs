import { cpSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const dist = join(root, "dist");
const files = [
  "about.html",
  "assets",
  "check.html",
  "data",
  "img",
  "index.html",
  "robots.txt",
  "sitemap.xml"
];

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const file of files) {
  cpSync(join(root, file), join(dist, file), { recursive: true });
}

console.log(`完成發布包：${files.length} 個網站項目`);
