import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const index = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const app = fs.readFileSync(new URL("../assets/app.js", import.meta.url), "utf8");

test("教師出卷年度採核取方塊複選", () => {
  assert.match(index, /id="paperYearQuickOptions"/);
  assert.match(app, /class="paper-year-checkbox"/);
  assert.match(app, /function selectedPaperYears\(\)/);
  assert.match(app, /years\.has\(q\.exam\.year\)/);
});

test("首頁年度採核取方塊複選並套用到題庫篩選", () => {
  assert.match(index, /id="mainYearOptions"/);
  assert.match(app, /class="main-year-checkbox"/);
  assert.match(app, /function selectedMainYears\(\)/);
  assert.match(app, /years\.has\(q\.exam\.year\)/);
});
