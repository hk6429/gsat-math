import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import vm from "node:vm";

const code = readFileSync(new URL("../data/bank.js", import.meta.url), "utf8");
const context = { window: {} };
vm.runInNewContext(code, context);
const optionRatesCode = readFileSync(new URL("../data/option-rates.js", import.meta.url), "utf8");
vm.runInNewContext(optionRatesCode, context);
const contentCode = readFileSync(new URL("../data/content.js", import.meta.url), "utf8");
vm.runInNewContext(contentCode, context);
const bank = context.window.MATH_BANK;
const mathContent = context.window.MATH_CONTENT;

test("收錄 83～115 各正式數學考科，每卷 20 題", () => {
  assert.equal(bank.length, 38);
  assert.deepEqual(Array.from(bank, (exam) => `${exam.year}${exam.subject}`), ["115A", "115B", "114A", "114B", "113A", "113B", "112A", "112B", "111A", "111B", "110M", "109M", "108M", "107M", "106M", "105M", "104M", "103M", "102M", "101M", "100M", "99M", "98M", "97M", "96M", "95M", "94M", "93M", "92M", "91M", "90M", "89M", "88M", "87M", "86M", "85M", "84M", "83M"]);
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

test("官方有公布逐題統計的年份完整收錄，未公布者不捏造", () => {
  for (const exam of bank) {
    for (const q of exam.questions) {
      if (q.kind !== "written" && exam.year >= 91) {
        assert.equal(typeof q.pass, "number");
        assert.equal(typeof q.disc, "number");
      } else if (q.kind === "written") {
        assert.equal(q.pass, undefined);
        assert.equal(q.disc, undefined);
        assert.equal(q.kind, "written");
      } else {
        assert.ok(exam.year <= 90);
        assert.equal(q.pass, undefined);
        assert.equal(q.disc, undefined);
      }
    }
  }
});

test("官方答案逐題固定", () => {
  const expected = {
    "115A": ["2","1","1","3","5","2","3,4","2,5","1,2,4","1,5","2,4","2,4","9/10","1/4","3/2","3√5/2","3/11","3","／","／"],
    "115B": ["4","5","2","3","3","1","2","3,5","2,4","1,4","2,5","1,3,4","14","96","1/3<p<5/12","4/3","23/5","1","／","／"],
    "114A": ["5","2","4","3","1","3","2,4","3,5","2,4,5","1,4,5","3,4,5","1,3,4,5","-6,3","-11","405","24/5","3+√2","2","／","／"],
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
    "105M": ["3","5","2","1","2","4","2,3,5","1,2,4","3,5","1,4,5","1,2,4","2,5","4,5","42","7/2","1+√5","a=1,b=4,c=1,d=-2","6","19/36","4/3"],
    "104M": ["3","4","2","1","2,4,5","1,4,5","1,2,4","1,2,4,5","2,4","2,3,4","62","1/2","70","6√2+2√6","(9,1)","8181","44","16√5/3","25/29","6.1"],
    "103M": ["5","4","2","4","2","2","1,3,5","1,4","2,3,4","3,4","2,3,5","1,4","120/13","a=6,b=-9","4√3","5/4","-√3/2","11","13/8","(√6-√2)/2"],
    "102M": ["5","4","3","5","2","3","1,2,3,5","1,2","4,5","1,3,4","1,2,5","1,3","16","(-4,12)","19","a=-2,b=70","51π","31","4√15","15/11"],
    "101M": ["2","5","4","1","3","2","3","1,2,5","1,2","4,5","3,4","2,4","1,2,5","1.21","-3","(-3,26)","x=-1,min=-3","7","m=12,n=16","3/7"],
    "100M": ["1","5","2","3","5","2","1,3,5","1,2","3,4","1,2,5","4,5","1,3,4","3","35/6","7/5","90/119","√32","4,1,2","3+3√2","(2,-1,-3)"],
    "99M": ["2","3","5","1","3","4","4","2,3","1,5","2,3,4","1,3,5","2,4","(6,8)","-65","432","14","90/7","√41","5/2","21/4"],
    "98M": ["3","2","4","5","1","3","1,3,4","2,3,4","1,2","4,5","1,4","95","(-4,20)","23","12","9/8","5.6","(0,2,8)","16","15/2"],
    "97M": ["3","2","4","4","1","2,3,4","4,5","2,4","2,5","1,3,5","1,2,4,5","1,2,4","(-7,30,18)","A=(4,12),B=(3,0)","12/25","-2","(-2,2,9)","225","(1,-3)","(-1/5,53/5)"],
    "96M": ["4","2","4","1","3","1,3,5","1,2,4,5","1,5","1,2,4","1,2,4,5","2,4","1/4","(-1,12)","79","1600","(12/13,-5/13)","25","87/14","12","5√3"],
    "95M": ["3","5","4","4","5","2,3,4","1,3,4,5","1,2,3,4,5","1,3,5","1,2,4,5","1,3,4,5","105:100","4√10/15","(9,3)","√72","21","576","478","7","1/2"],
    "94M": ["3","1","4","2","5","1,2","2,3,5","2","1,5","2,5","2,3,4,5","p=3,q=8","(2/5,2/3)","6","a=32,b=-1","25/16","3/4","3/2","15","5/6"],
    "93M": ["3","2","5","1","4","1","1,3,4","2,5","3,4","1,4","1,2,5","84","675","15","3/4","42","a=5,b=3","306","12","10"],
    "92M": ["4","5","2","3","4","4,5","1,2,3,4","1,2,5","3,4","2,4,5","2,3,5","11","1/12","5","22","2π/3","12","54/11","68","平均60.8,標準差6.3"],
    "91M": ["1","2","3","2","4","2","1,4,5","1,2,3,4","2,4,5","2,3,4,5","1,2,3,4,5","1,2,5","85","3","100%","20","576","600","1/28","1/37"],
    "90M": ["3","3","5","3,4,5","1,3,5","1,4","2,3,5","1,2,5","1,2,4","1,3,4,5","25.7","40%","1/12","5x-2","544","√14","13","6","0.01","210"],
    "89M": ["5","4","1","4","3","5","2","2,3,4","1,2,5","1,2,3,4","2005","4953","15","x+2y+3z=8","2","17","20","2100","20/21","45"],
    "88M": ["4","5","4","3,4","2,3,4,5","1,2,4","1,2,3,5","2,3","1,2,3,5","1,2,3,5","24","134","16","2-√3","229","41","14/3","13","90/63","x+2y+z=13"],
    "87M": ["4","1","4","2","1,3,5","1,2,4,5","3,4","2,3,5","1,2,3","1,2,4","15","9","20","24","24","(1-√5)/2","50√7","2x+5","(x-2)^2/9+y^2/5=1","109%"],
    "86M": ["1","4","2","3","5","2","1","4","2,3","1,4","3,4,5","1,2,5","6","82","√13","√26","√(77/5)","5","83/100","-17/216"],
    "85M": ["1","5","3","2","5","4","2","4","2,3","1,2,4","2,3","1,4","1,4","3,5","(14/5,3)","(3√5,√3)","15","9/2","10","1/3"],
    "84M": ["5","1","3","2","4","5","2","1,4","4,5","1,3","1,2,3,4","-11","110","3/10","22","5","100√19","43.2","2-4√2","(-2,-4,2)"],
    "83M": ["4","2","4","4","5","2","4","3,5","1,5","3,4,5","(-2,1/16)","20","(-8/3,10/3)","(7,-2)","-1±2√6/3","160π/11","(1,5/2,5/2)","8","4/5","-7"]
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

test("101～115 學年度選擇題附官方各選項畫記率，未公開年份不反推", () => {
  for (const exam of bank) {
    for (const q of exam.questions) {
      const hasPublishedRates = (exam.year === 101 && q.no <= 13) || (exam.year >= 102 && exam.year <= 103 && q.no <= 12) || (exam.year === 104 && q.no <= 10) || (exam.year === 107 && q.no <= 12) || (exam.year >= 105 && exam.year <= 110 && q.no <= 13) || (exam.year >= 111 && q.no <= 12);
      if (hasPublishedRates && (q.kind === "single" || q.kind === "multi")) {
        assert.equal(q.optionRates.length, 5, `${exam.year}${exam.subject} 第 ${q.no} 題`);
        for (const rate of q.optionRates) assert.ok(Number.isFinite(rate) && rate >= 0 && rate <= 100);
      } else {
        assert.equal(q.optionRates, undefined, `${exam.year}${exam.subject} 第 ${q.no} 題不應含推估選項率`);
      }
    }
  }
  assert.deepEqual(Array.from(bank.find((exam) => exam.year === 115 && exam.subject === "A").questions[0].optionRates), [1, 84, 5, 5, 5]);
  assert.deepEqual(Array.from(bank.find((exam) => exam.year === 111 && exam.subject === "B").questions[11].optionRates), [38, 34, 69, 44, 64]);
  assert.deepEqual(Array.from(bank.find((exam) => exam.year === 110).questions[12].optionRates), [45, 56, 79, 37, 45]);
  assert.deepEqual(Array.from(bank.find((exam) => exam.year === 109).questions[12].optionRates), [17, 87, 14, 79, 36]);
  assert.deepEqual(Array.from(bank.find((exam) => exam.year === 108).questions[12].optionRates), [27, 30, 77, 73, 28]);
  assert.deepEqual(Array.from(bank.find((exam) => exam.year === 107).questions[11].optionRates), [53, 31, 64, 63, 41]);
  assert.deepEqual(Array.from(bank.find((exam) => exam.year === 106).questions[12].optionRates), [49, 39, 73, 42, 72]);
  assert.deepEqual(Array.from(bank.find((exam) => exam.year === 105).questions[12].optionRates), [25, 27, 23, 84, 63]);
  assert.deepEqual(Array.from(bank.find((exam) => exam.year === 104).questions[9].optionRates), [19, 51, 84, 82, 46]);
  assert.deepEqual(Array.from(bank.find((exam) => exam.year === 103).questions[11].optionRates), [89, 23, 32, 38, 26]);
  assert.deepEqual(Array.from(bank.find((exam) => exam.year === 102).questions[11].optionRates), [75, 21, 72, 42, 43]);
  assert.deepEqual(Array.from(bank.find((exam) => exam.year === 101).questions[12].optionRates), [71, 76, 38, 36, 64]);
});

test("首頁與查題頁都載入解析及官方選項統計介面", () => {
  const homepage = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const app = readFileSync(new URL("../assets/app.js", import.meta.url), "utf8");
  const renderer = readFileSync(new URL("../assets/math-renderer.js", import.meta.url), "utf8");
  const check = readFileSync(new URL("../check.html", import.meta.url), "utf8");
  assert.match(homepage, /id="categoryGroups"/);
  assert.match(homepage, /data\/option-rates\.js/);
  assert.match(homepage, /data\/content\.js/);
  assert.match(homepage, /assets\/math-renderer\.js/);
  assert.match(homepage, /assets\/vendor\/katex\/katex\.min\.js/);
  assert.match(app, /MathQuestionUI\.optionAnalysisHtml/);
  assert.match(app, /class="explainBox"/);
  assert.match(renderer, /各選項作答分析/);
  assert.match(check, /data\/option-rates\.js/);
  assert.match(check, /data\/content\.js/);
  assert.match(check, /assets\/math-renderer\.js/);
  assert.match(check, /MathQuestionUI\.optionAnalysisHtml/);
});

test("逐字 LaTeX 題目資料具有題幹、選項、解析與官方頁碼", () => {
  assert.ok(Object.keys(mathContent).length >= 1);
  for (const [key, content] of Object.entries(mathContent)) {
    assert.match(key, /^\d{2,3}[ABM]-\d{1,2}$/);
    assert.equal(content.verified, true);
    assert.equal(typeof content.stem, "string");
    assert.ok(content.stem.length >= 20);
    assert.ok(Number.isInteger(content.sourcePage) && content.sourcePage >= 1);
    assert.ok(Array.isArray(content.solution) && content.solution.length >= 1);
    const [form, no] = key.split("-");
    const exam = bank.find((item) => `${item.year}${item.subject}` === form);
    const question = exam?.questions.find((item) => item.no === Number(no));
    assert.ok(question, `找不到題目 ${key}`);
    if (question.kind === "single" || question.kind === "multi") {
      assert.deepEqual(Object.keys(content.options), Array.from({ length: question.optionCount }, (_, index) => String(index + 1)));
      if (question.optionRates) assert.deepEqual(Object.keys(content.optionAnalysis), Object.keys(content.options));
    }
  }
  assert.match(mathContent["115A-1"].stem, /\\frac\{1\}\{3\}/);
  assert.equal(mathContent["115A-1"].options["2"], "30 元");
  for (const year of [111, 112, 113, 114, 115]) {
    for (const subject of ["A", "B"]) {
      for (let no = 1; no <= 20; no += 1) {
        assert.ok(mathContent[`${year}${subject}-${no}`], `缺少 ${year}${subject} 第 ${no} 題結構化資料`);
      }
    }
  }
  for (const year of [96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110]) {
    for (let no = 1; no <= 20; no += 1) {
      assert.ok(mathContent[`${year}M-${no}`], `缺少 ${year}M 第 ${no} 題結構化資料`);
    }
  }
  assert.equal(Object.keys(mathContent).length, 500);
});

test("正式來源 manifest 與完整回補範圍已登錄", () => {
  const catalog = JSON.parse(readFileSync(new URL("../sources/catalog.json", import.meta.url), "utf8"));
  assert.equal(catalog.scope.firstYear, 83);
  assert.equal(catalog.scope.latestYear, 115);
  assert.equal(catalog.scope.expectedExamForms, 38);
  for (const year of [83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115]) {
    const manifest = String(year).padStart(3, "0");
    const source = JSON.parse(readFileSync(new URL(`../sources/${manifest}.json`, import.meta.url), "utf8"));
    assert.equal(source.files.length, year >= 111 ? 7 : year >= 91 ? 3 : 2);
    for (const file of source.files) {
      assert.match(file.url, /^https:\/\/www\.ceec\.edu\.tw\//);
      assert.match(file.sha256, /^[a-f0-9]{64}$/);
    }
  }
});
