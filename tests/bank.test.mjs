import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import vm from "node:vm";

const code = readFileSync(new URL("../data/bank.js", import.meta.url), "utf8");
const context = { window: {} };
vm.runInNewContext(code, context);
const bank = context.window.MATH_BANK;

test("收錄 105～115 各正式數學考科，每卷 20 題", () => {
  assert.equal(bank.length, 16);
  assert.deepEqual(Array.from(bank, (exam) => `${exam.year}${exam.subject}`), ["115A", "115B", "114A", "114B", "113A", "113B", "112A", "112B", "111A", "111B", "110M", "109M", "108M", "107M", "106M", "105M"]);
  for (const exam of bank) assert.equal(exam.questions.length, 20);
});

test("題號連續、年份資料檔齊全且圖片路徑唯一", () => {
  const sourceFiles = readdirSync(new URL("../data/years/", import.meta.url))
    .filter((file) => /^q\d{3}\.js$/.test(file));
  assert.equal(sourceFiles.length, new Set(bank.map((exam) => exam.year)).size);
  const images = new Set();
  for (const exam of bank) {
    assert.deepEqual(Array.from(exam.questions, (q) => q.no), Array.from({ length: 20 }, (_, i) => i + 1));
    for (const q of exam.questions) {
      assert.ok(!images.has(q.image), `圖片重複：${q.image}`);
      images.add(q.image);
    }
  }
});

test("全部題圖與題組材料都已產生且不是空檔", () => {
  for (const exam of bank) {
    for (const q of exam.questions) {
      const image = new URL(`../${q.image}`, import.meta.url);
      assert.ok(statSync(image).size > 1_000, `題圖異常：${q.image}`);
    }
    const groupImages = new Set(exam.questions.map((q) => q.groupImage).filter(Boolean));
    for (const groupImage of groupImages) {
      const group = new URL(`../${groupImage}`, import.meta.url);
      assert.ok(statSync(group).size > 1_000, `題組材料異常：${group.pathname}`);
    }
  }
});

test("客觀題都有官方統計，非選擇題不捏造統計", () => {
  for (const exam of bank) {
    for (const q of exam.questions) {
      if (q.kind !== "written") {
        assert.equal(typeof q.pass, "number");
        assert.equal(typeof q.disc, "number");
      } else {
        assert.equal(q.pass, undefined);
        assert.equal(q.disc, undefined);
        assert.equal(q.kind, "written");
      }
    }
  }
});

test("官方答案逐題固定", () => {
  const expected = {
    "115A": ["2","1","1","3","5","2","3,4","2,5","1,2,4","1,5","2,4","2,4","9/10","1/4","3/2","3√5/2","3/11","3","／","／"],
    "115B": ["4","5","2","3","3","1","2","3,5","2,4","1,4","2,5","1,3,4","14","96","1/3<p<5/12","4/3","23/5","1","／","／"],
    "114A": ["5","2","4","3","1","3","2,4","3,5","2,4,5","1,4,5","3,4,5","1,3,4,5","-6,3","-11","405","24/5","3√2","2","／","／"],
    "114B": ["3","4","3","4","1","2","4","1,5","2,3,4","1,2,5","1,3,4","1,2","0.51","5/6","36","√6/2","13","3","／","／"],
    "113A": ["2","5","1","2","4","3","3,4","2,3","3","3,5","2,3","2,4,5","2:3:5","-3,3","25","2√5/5","1/3","4","／","／"],
    "113B": ["4","1","2","4","3","1","3","1,2,5","2,5","1,3,4","1,4,5","1,4","-1","2/7","3,-6","4π/3","76","4","／","／"],
    "112A": ["4","5","4","1","2","3","3,5","1,4","3,5","1,3,5","2,5","1,5","80","3,-9","3/4","2√2","5√2","4","／","／"],
    "112B": ["1","2","4","3","5","3","4","2,4","3,4,5","1,5","1,4","1,3","7/3","90","22","625/24","108","1/2","／","／"],
    "111A": ["4","1","5","3","2","5","2,4","1,4","3,4","1,2","2,3,4","1,2","4.2","2,1/2","192","-3,-2,5","21","4","／","／"],
    "111B": ["1","3","2","2","5","3","5","1,2,5","1","1,2,4","2,3","3,5","99","17","14/15","31/45","456","4","／","／"],
    "110M": ["2","1","3","5","4","5","2,3,4","3,5","2,3,4","1,2","1,2,5","2,5","2,3,5","37","6,4,0","1/14","-2≤a≤6","(2,56)","8+4√2","4√2"],
    "109M": ["2","1","2","5","3","4","4","1,2","4,5","1,4","3,5","1,3","2,4","300","1/9","-5","2√10/5","(-3,-1,-2)","5/56","a=1/6,b=3"],
    "108M": ["3","1","3","5","4","2","1,4","4,5","3,5","1,2","3,5","1,2,5","3,4","-4","29/4","105","215","13","2√3","-3"],
    "107M": ["4","3","5","2","3","5","4","1,4","2,3,5","2,3","3,5","1,3,4","24","170","25/4","9/2","3/5","7/2","s=1/3,t=2/3","√337"],
    "106M": ["1","3","5","4","4","1","2","1,3","5","2,3,4","1,4","2,5","3,5","25","(40/21,25/21)","7","-5","47","9/64","14.4"],
    "105M": ["3","5","2","1","2","4","2,3,5","1,2,4","3,5","1,4,5","1,2,4","2,5","4,5","42","7/2","1+√5","a=1,b=4,c=1,d=-2","6","19/36","4/3"]
  };
  for (const exam of bank) {
    assert.deepEqual(Array.from(exam.questions, (q) => q.answer), expected[`${exam.year}${exam.subject}`]);
  }
});

test("分類與標籤完整", () => {
  for (const exam of bank) {
    for (const q of exam.questions) {
      assert.ok(q.cat);
      assert.ok(Array.isArray(q.tags) && q.tags.length >= 1 && q.tags.length <= 3);
      assert.ok(q.summary);
    }
  }
});

test("正式來源 manifest 與完整回補範圍已登錄", () => {
  const catalog = JSON.parse(readFileSync(new URL("../sources/catalog.json", import.meta.url), "utf8"));
  assert.equal(catalog.scope.firstYear, 83);
  assert.equal(catalog.scope.latestYear, 115);
  assert.equal(catalog.scope.expectedExamForms, 38);
  for (const year of [105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115]) {
    const source = JSON.parse(readFileSync(new URL(`../sources/${year}.json`, import.meta.url), "utf8"));
    assert.equal(source.files.length, year >= 111 ? 7 : 3);
    for (const file of source.files) {
      assert.match(file.url, /^https:\/\/www\.ceec\.edu\.tw\//);
      assert.match(file.sha256, /^[a-f0-9]{64}$/);
    }
  }
});
