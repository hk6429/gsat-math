import assert from "node:assert/strict";
import test from "node:test";

import report from "../api/report.mjs";

function payload() {
  return {
    mode: "question",
    reason: "答案有誤",
    note: "正式站驗收",
    website: "",
    page: "https://gsat-math.pages.dev/",
    context: {
      id: "115A-1",
      year: 115,
      subject: "數學 A",
      no: 1,
      kind: "單選題",
      category: "機率與統計",
      tags: ["期望值"],
      prompt: "袋中有三種球，依規則抽球並計算獎金期望值。",
      options: { 1: "10 元", 2: "30 元", 3: "50 元" },
      answer: "2",
      selected: "1",
      explanation: "依期望值定義加權計算。",
      image: "img/115A/q01.webp",
    },
  };
}

test("Cloudflare Pages 預檢請求回傳正確 CORS", async () => {
  const response = await report.fetch(new Request("https://gsat-math.pages.dev/api/report", {
    method: "OPTIONS",
    headers: { origin: "https://gsat-math.pages.dev" },
  }), {});
  assert.equal(response.status, 204);
  assert.equal(response.headers.get("access-control-allow-origin"), "https://gsat-math.pages.dev");
});

test("有效回報會安全轉送完整題目快照", async () => {
  const originalFetch = globalThis.fetch;
  let sent;
  globalThis.fetch = async (_url, init) => {
    sent = JSON.parse(init.body);
    return Response.json({ ok: true });
  };
  try {
    const response = await report.fetch(new Request("https://gsat-math.pages.dev/api/report", {
      method: "POST",
      headers: { "content-type": "application/json", "x-forwarded-for": "203.0.113.77" },
      body: JSON.stringify(payload()),
    }), { TELEGRAM_BOT_TOKEN: "test-token", TELEGRAM_CHAT_ID: "test-chat" });
    assert.equal(response.status, 200);
    assert.equal(sent.chat_id, "test-chat");
    assert.match(sent.text, /115A-1/);
    assert.match(sent.text, /回報當下作答：1/);
    assert.match(sent.text, /官方答案：2/);
    assert.match(sent.text, /依期望值定義加權計算/);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("缺少題目脈絡時不呼叫 Telegram", async () => {
  const originalFetch = globalThis.fetch;
  let fetchCount = 0;
  globalThis.fetch = async () => { fetchCount += 1; return Response.json({ ok: true }); };
  try {
    const invalid = payload();
    delete invalid.context;
    const response = await report.fetch(new Request("https://gsat-math.pages.dev/api/report", {
      method: "POST",
      headers: { "content-type": "application/json", "x-forwarded-for": "203.0.113.78" },
      body: JSON.stringify(invalid),
    }), { TELEGRAM_BOT_TOKEN: "test-token", TELEGRAM_CHAT_ID: "test-chat" });
    assert.equal(response.status, 400);
    assert.equal(fetchCount, 0);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
