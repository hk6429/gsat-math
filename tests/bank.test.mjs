import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";
import vm from "node:vm";

const code = readFileSync(new URL("../data/bank.js", import.meta.url), "utf8");
const context = { window: {} };
vm.runInNewContext(code, context);
const bank = context.window.MATH_BANK;

test("收錄數學 A、數學 B 各 20 題", () => {
  assert.equal(bank.length, 2);
  assert.deepEqual(Array.from(bank, (exam) => exam.subject), ["A", "B"]);
  for (const exam of bank) assert.equal(exam.questions.length, 20);
});

test("題號連續且圖片路徑唯一", () => {
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
    const group = new URL(`../img/115${exam.subject}/g18.webp`, import.meta.url);
    assert.ok(statSync(group).size > 1_000, `題組材料異常：${group.pathname}`);
  }
});

test("第 1 至 18 題都有官方統計，第 19 至 20 題不捏造統計", () => {
  for (const exam of bank) {
    for (const q of exam.questions) {
      if (q.no <= 18) {
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
  const expectedA = ["2","1","1","3","5","2","3,4","2,5","1,2,4","1,5","2,4","2,4","9/10","1/4","3/2","3√5/2","3/11","3","／","／"];
  const expectedB = ["4","5","2","3","3","1","2","3,5","2,4","1,4","2,5","1,3,4","14","96","1/3<p<5/12","4/3","23/5","1","／","／"];
  assert.deepEqual(Array.from(bank[0].questions, (q) => q.answer), expectedA);
  assert.deepEqual(Array.from(bank[1].questions, (q) => q.answer), expectedB);
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
