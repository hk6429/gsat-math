import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("題目卡與頁尾都能開啟問題回報表單", async () => {
  const [index, app, client, styles] = await Promise.all([
    read("index.html"),
    read("assets/app.js"),
    read("assets/report.js"),
    read("assets/styles.css"),
  ]);
  assert.match(index, /id="reportDialog"/);
  assert.match(index, /id="generalReportBtn"/);
  assert.match(index, /id="reportStatus"[^>]*aria-live="polite"/);
  assert.match(app, /id="questionReportBtn"/);
  assert.match(app, /MathReport\.openQuestion\(q\)/);
  assert.match(client, /https:\/\/gsat-math\.pages\.dev\/api\/report/);
  assert.match(styles, /\.report-dialog/);
});

test("單題回報包含可重現問題的完整題目快照", async () => {
  const client = await read("assets/report.js");
  for (const field of ["id", "year", "subject", "no", "kind", "category", "tags", "prompt", "options", "answer", "selected", "explanation", "image"]) {
    assert.match(client, new RegExp(`${field}[,:]`), `缺少 ${field}`);
  }
  assert.match(client, /navigator\.userAgent/);
  assert.match(client, /reasonSelect\.value === "其他"/);
});
